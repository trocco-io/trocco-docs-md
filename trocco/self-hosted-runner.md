---
articleId: 362662ef-f92b-4ac9-a4c5-bec7d8f1f8d4
slug: self-hosted-runner
title: Self-Hosted Runner
parentCategoryId: 56bf8393-b27e-4190-a2ac-d072873e46bf
languageCode: ja
---
## 概要

**Self-Hosted Runner**は、TROCCOの転送ジョブを**ユーザーが用意した任意の環境上**で実行できるようにする機能です。
これまで通り、転送設定の作成・編集やジョブの起動はTROCCOのUI上から行えますが、起動された転送ジョブはユーザー自身が管理する環境上のコンテナ（[Runner](/docs/self-hosted-runner#runner)）で実行されます。

:::(Warning) (プラン上の制約)

本機能の利用は、**Professionalプラン**の契約が前提となります。
詳しくは、営業担当者またはカスタマーサクセスまでお問い合わせください。
:::

## 主な特徴

### 任意の環境で実行可能

オンプレ環境やクラウドのプライベートなネットワーク上など、お客様自身が管理する環境にコンテナ（[Runner](/docs/self-hosted-runner#runner)）を立ち上げ、その上で転送ジョブを実行できます。

### リクエストの片方向性

TROCCOからコンテナ（[Runner](/docs/self-hosted-runner#runner)）へのリクエストは発生しません。
Runner側が一定間隔でTROCCOにリクエストを行い（[Heartbeatリクエスト](/docs/self-hosted-runner#heartbeat)）、必要なジョブ情報をレスポンスとして取得します。

## 利用上の注意・制約

### 提供イメージの種類

以下2種類のOS/アーキテクチャに対応したコンテナイメージを提供しています。

* `linux/amd64`
* `linux/arm64`

### 推奨リソース

- メモリ：2GB以上
  - [Runner](/docs/self-hosted-runner#runner)となる環境のメモリの推奨リソースです。
  - なお、一部の転送元ファイル・ストレージ系コネクタでは 4GB 以上のメモリが必要となるケースがあります。
    - 例：転送元 - Amazon S3

:::(Info) (CPUの推奨値)

CPUに関しては、とくに推奨値はありません。
ただし、CPUのコア数を増やすとEmbulkの並列実行による処理速度向上が期待できるため、パフォーマンスが上がる可能性があります。
:::

## 基本概念

### Cluster

Clusterとは、Runnerを論理的にまとめる概念です。Clusterは複数のRunnerを管理・保持します。
ジョブが起動されると、Cluster内のいずれかのRunnerがジョブを受け取り、ジョブを実行します。
作成方法について、詳しくは[Clusterの作成](/docs/self-hosted-runner#1-clusterの作成)を参照ください。

### Runner

Runnerとは、ジョブの実行コンテナです。
TROCCOが提供するRunner用のコンテナイメージを使用し、環境変数に適切なトークンを設定することで、Runnerを起動できます。
詳しくは、[Runnerの起動](/docs/self-hosted-runner#2-runnerの起動)を参照ください。

:::(Info) (Runner間の不干渉性)

任意のClusterに複数のRunnerが属している場合において、Runnerはそれぞれ独立して起動します。
たとえば、同一Cluster内の複数のRunnerが同時に立ち上がった場合、それらが互いに干渉することはありません。
:::

#### Heartbeat

Runnerは、TROCCOに対して一定間隔でリクエストを送信します。
この挙動のことを、Heartbeatリクエストといいます。
TROCCOは、Runnerから送信されるHeartbeatリクエストを受け取ることで、Runnerが稼働中かどうかを認識します。

#### Runner登録用トークン

Runnerを起動する際に必要となるトークンです。
各Clusterに対し、最大で2つまでRunner登録用トークン（Registration Token）を作成できます。

:::(Info) (Runner登録用トークンのプレフィックス)

2025/6/18以降に発行されたRunner登録用トークンにはセキュリティ強化のためプレフィックス（trr_）が付与されます。
プレフィックスが付与されていないRunner登録用トークンも引き続き問題なくご利用いただけます。
:::

## 設定方法

### 1. Clusterの作成

左サイドバーの**Self-Hosted Runner**から、Self-Hosted Runner Cluster一覧画面を表示できます。
Cluster一覧画面では、これまで作成したClusterを確認できます。また、Clusterを新たに作成できます。

Clusterの新規作成ボタンをクリックすると、名前・説明・リソースグループ（[チーム機能](/docs/team)が有効な場合）を設定できます。
これらの設定値を入力して保存すると、Clusterは保存され、詳細画面へ遷移します。
このとき、[Runner登録用トークン](/docs/self-hosted-runner#runner登録用トークン)が画面上に表示されるので、メモしてください。

### 2. Runnerの起動

お客様環境にて、Docker Container Imageの取得、およびDocker Containerを起動します。
以下は、コマンドサンプルです。

```bash
docker pull public.ecr.aws/<registry_name>/<repository_name>:latest
docker run \
  -e TROCCO_REGISTRATION_TOKEN="<YOUR REGISTRATION TOKEN>" \
  -e TROCCO_PREVIEW_SEND="<PREVIEW DATA IS SEND>" \
  -e TROCCO_ONESHOT="<ONESHOT MODE>" \
  -e HEALTH_CHECK_PORT="<HEALTH CHECK PORT>" \
  --rm \
  public.ecr.aws/<registry_name>/<repository_name>:latest

# registory_name、repository_nameは、TROCCOのSelf-Hosted Runner Cluster詳細画面にてご確認ください。
```

|パラメータ|必須|説明|
|---|---|---|
|`<YOUR REGISTRATION TOKEN>`|✓|Cluster詳細画面上に表示されたRunner登録用トークンに置き換えてください。|
|`<PREVIEW DATA IS SEND>`|-|プレビューデータ（実データ）をTROCCO側に送信するかどうかを指定します。<br>本パラメーターを指定しなかった場合は、暗黙的に`false`が渡されます。<ul><li>`true`を指定すると、プレビューデータ（実データ）がTROCCO側に送信されます。この場合、転送設定STEP2および詳細画面にてプレビュー結果を永続的に確認できます。</li><li>`false`を指定すると、プレビューデータ（実データ）はTROCCO側に送信されません。セキュリティ的な観点でTROCCO側にプレビューデータを保持させたくない場合は、`false`を指定（または本パラメーターを未指定に）してください。</li></ul>|
|`<ONESHOT MODE>`|-|転送ジョブの実行後に、コンテナを終了させるかどうかを指定します。<br>本パラメーターを指定しなかった場合は、暗黙的に`false`が渡されます。<ul><li>`true`を指定すると、転送ジョブの実行後にRunnerがエラーとなることでコンテナが終了します。</li><li>`false`を指定すると、転送ジョブの実行後に再度待機状態に戻ります。</li></ul>|
|`<HEALTH CHECK PORT>`|-|Google CloudのCloud Run Servicesなど、起動時にヘルスチェックが必須となっている場合に、ヘルスチェックのためのポートを設定します。<br>Self-Hosted Runnerはアウトバウンド通信のみで動作するので、通常は設定不要です。<br>例：`8080`のように指定すると、`http://localhost:8080/health`でヘルスチェックが可能になります。|

### 3. 転送設定の編集

Runner上でジョブを実行したい転送設定を編集します。
転送設定STEP1の基本設定で、Clusterを選択できます。
なお、転送設定側でClusterを選択するには、以下の条件を満たす必要があります。

- Self-Hosted Runnerを契約している
- Self-Hosted Runnerに対応している転送元・転送先コネクターの組み合わせである
  - 対応コネクターについては、[Self-Hosted Runnerに対応するコネクター](/docs/self-hosted-runner#self-hosted-runnerに対応するコネクター)を参照ください。

## 機能詳細

### Self-Hosted Runner Cluster詳細画面

#### Clusterの削除

画面右上の三点リーダーから削除できます。
ただし、該当のClusterを選択している転送設定が1つでもある場合、削除はできません。

#### Runner登録用トークンの発行

Clusterの作成時に、自動でトークンが1つ発行されます。
トークンは最大2つまで作成できます。

#### Runner登録用トークンの削除

ゴミ箱アイコンから削除できます。
トークンを削除すると、以降に作成されたRunnerの起動には使用できなくなります。

:::(Warning) (Runnerが`ACTIVE`状態のときにトークンを削除した場合)

トークンを削除する時点で、Runnerにジョブが割り当てられていた場合、そのRunnerはジョブが終了するまでは動作します。
:::

#### Runnerのステータス

以下の3種類です。

- **IDLE**：Runnerは立ち上がっているが、ジョブが割り当てられていない状態
- **ACTIVE**：Runnerは立ち上がっており、なおかつジョブが割り当てられている状態
- **OFFLINE**：Runnerからの[Heartbeat](/docs/self-hosted-runner#heartbeat)が30秒以上途絶えている状態

:::(Warning) (`ACTIVE`かつ`OFFLINE`になるケース)

ジョブの実行中に、TROCCOが[Heartbeatリクエスト](/docs/self-hosted-runner#heartbeat)が受信できなくなった場合などに、`ACTIVE`かつ`OFFLINE`なステータスになることがあります。
この状態になり、なおかつジョブが意図通り完了しない場合は、お客様環境のコンテナが正しく動いているかをご確認ください。
:::

#### Runnerの停止

Runnerを手動で停止（Dockerプロセスを終了）できます。
お客様環境側でコンテナを停止できない場合などにお使いください。

:::(Warning) (Runnerが`ACTIVE`状態のときにRunnerを停止した場合)

ジョブが割り当てられているRunnerを停止した場合、そのRunnerはジョブが終了するまでは動作します。（Graceful Shutdown）
:::

#### Runnerの削除

**OFFLINE**のRunnerのみ、手動で削除できます。
ただし、本項における「削除」とは、あくまで「TROCCOのデータベースから削除され、TROCCOの画面上には表示されなくなる」ことを意味します。
お客様環境側にあるコンテナ自体は削除されません。

:::(Warning) (Runnerの自動削除)

**OFFLINE**の状態が72時間継続したRunnerは、自動的に「削除」されます。
:::

:::(Warning) (削除されたコンテナがリクエストを再送した場合)

TROCCO側で「削除」されたコンテナが[Heartbeatリクエスト](/docs/self-hosted-runner#heartbeat)を再送した場合、そのRunnerは新しいRunnerとしてTROCCOに再登録されます。
:::

#### チーム機能有効時の操作権限

| 操作＼ロール | リソースグループ管理者 | リソースグループ編集者 | リソースグループ運用者 | リソースグループ閲覧者 |
| --- | --- | --- | --- | --- |
| Clusterの閲覧 | ✓ | ✓ | ✓ | ✓ |
| Clusterの利用（転送設定側での選択権限） | ✓ | ✓ | ✓ | - |
| Clusterの編集 | ✓ | ✓ | - | - 
| Clusterの削除 | ✓ | ✓ | - | - | - |
| Runner登録用トークンの発行 | ✓ | ✓ | - | - |
| Runner登録用トークンの削除 | ✓ | ✓ | - | - |
| Runnerの停止 | ✓ | ✓ | - | - |
| Runnerの削除 | ✓ | ✓ | - | - |

### 転送設定

#### 転送設定STEP1

基本設定にて、Clusterを選択できます。

#### 転送設定STEP2

スキーマ情報の取得やプレビュー用データの取得処理はRunner上で行われます。
なお、プレビュー用データをTROCCOに送信するかどうかは、Runnerの起動時に選択できます。
詳しくは、[Runnerの起動](/docs/self-hosted-runner#2-runnerの起動)を参照ください。

#### 転送ジョブ詳細

通常のジョブと同様に、ジョブの実行結果やジョブステータスを確認できます。
Runner上で実行されたジョブかどうかも、画面上から確認できます。
また、Runner上で実行されたジョブに限り、`queue`ステータスでもジョブのキャンセルが可能です。

## 補足事項

### Self-Hosted Runner利用時の処理時間

Self-Hosted Runnerを利用して実行された転送ジョブに関する[処理時間](/docs/pricing-information)のカウントは行われません。

### Self-Hosted Runnerに対応するコネクター

Self-Hosted Runnerは、特定の転送元コネクターかつ転送先コネクターの組み合わせでのみ、利用できます。
以下に記載のないコネクターを選択した場合は、転送設定でClusterの選択項目が表示されません。

#### 転送元コネクター

- 転送元 - Amazon Redshift
- 転送元 - Amazon S3
- 転送元 - Azure Blob Storage
- 転送元 - Databricks
- 転送元 - FTP・FTPS
- 転送元 - Google Cloud Storage
- 転送元 - HTTP・HTTPS
- 転送元 - MongoDB
- 転送元 - MySQL
- 転送元 - Oracle
- 転送元 - PostgreSQL
- 転送元 - SAP S/4HANA OData
- 転送元 - SFTP
- 転送元 - Snowflake
- 転送元 - SQL Server

#### 転送先コネクター

- 転送先 - Amazon Redshift
- 転送先 - Amazon S3
- 転送先 - Amazon S3 Parquet
- 転送先 - Azure Blob Storage
- 転送先 - Databricks
- 転送先 - FTP・FTPS
- 転送先 - Google BigQuery
- 転送先 - Google Cloud Storage
- 転送先 - Microsoft SQL Server
- 転送先 - MySQL
- 転送先 - PostgreSQL
- 転送先 - SFTP
- 転送先 - Snowflake

### Self-Hosted Runnerが対応していない機能

#### 転送設定で利用できない機能

- [リソース増強オプション](/docs/professional-plan#リソース増強オプション)
  - リソース増強オプションは、TROCCOのジョブ実行環境を増強する機能であるため、Self-Hosted Runnerには適用されません。
- 転送設定STEP1 > 接続確認機能・テーブルなどの一覧取得機能
  - これらの機能は、RunnerではなくTROCCO側から実行されます。
  - そのため、たとえば社内ネットワークからのみアクセスを許可しているデータソースの場合、実行できません。
  - テーブル名などは手動で入力する必要があります。
- 転送設定STEP2 > スキーマ変更検知・[カラム定義再読み込み](/docs/reload-column-definitions)・[プログラミングETL](/docs/programming-etl)
  - これらの機能は、RunnerではなくTROCCO側から実行されます。
  - そのため、これらの機能は利用できません。画面にも表示されない仕様となっています。
- 転送設定STEP2 > リトライ機能
  - 最大リトライ回数を1以上に設定しても、リトライは実施されません。
- アカウント設定 > [タイムアウト設定](/docs/timeout-settings)
  - アカウント設定によるタイムアウト設定を有効にしている場合にも、ジョブは自動停止されません。
- 通知設定 > 実行時間経過時による通知

#### 接続情報で利用できない機能

- [AWS Systems Manager Session Manager](/docs/connection-with-aws-systems-manager-session-manager)を用いた接続
  - 有効にした場合、接続に失敗します。
  - なお、Systems Manager Session Managerを利用しない通常のSSH経由での接続には対応しています。
- TROCCO側のPrivateLink機能を用いた接続
  - TROCCO側のPrivateLink機能が有効の場合、接続に失敗します。
- Amazon S3接続情報における、IAMロール認証
  - IAMユーザー認証による接続は対応しています。

### その他詳細仕様

#### 転送設定のYAML設定ファイル

転送設定詳細画面で確認できるYAML設定ファイルには、以下のkeyが追加されます。

```yaml
self_hosted_runner_cluster:
    - id:
    - name:
```

#### 転送設定のリビジョン復元時の挙動

Self-Hosted Runnerが無効になったアカウントで、かつ過去のリビジョンがSelf-Hosted RunnerのClusterを紐づけている場合、そのClusterは空の状態として復元されます。
[転送設定のYAML設定ファイル](/docs/self-hosted-runner#転送設定のyaml設定ファイル)にも、keyが削除された状態で復元されます。

#### 監査ログの記録対象

Runnerそのものに関する操作（例：Runnerの起動やHeartbeatリクエストなど）は記録されません。
