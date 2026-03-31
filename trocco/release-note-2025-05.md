---
articleId: 0ab7aeff-7eb1-4eff-ac2b-750b3f60d4a2
slug: release-note-2025-05
title: リリースノート-2025年05月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2025年05月のリリース情報をお届けします**

## お知らせ

### FreeプランユーザーがTROCCO APIを利用可能に

**2025年05月01日**より、FreeプランでもTROCCO APIを利用できるようになりました。
TROCCO APIに関して、詳しくは[TROCCO APIリファレンス](/trocco-api/apidocs/overview)を参照ください。

### Freeプランユーザーの処理時間枠が2時間に

**2025年05月01日**より、Freeプランの処理時間枠が2時間となりました。
処理時間枠について、詳しくは[ジョブの処理時間枠](/docs/pricing-information#ジョブの処理時間枠)を参照ください。

### 転送先Facebook オフラインコンバージョンを廃止

FacebookによるAPI提供の終了に伴い、2025年05月14日に[転送先 - Facebook オフラインコンバージョン](/docs/data-destination-facebook-offline-conversion)コネクターの提供を終了しました。

### 転送設定STEP3の「テスト実行」機能を廃止

転送先Google BigQueryを利用している場合に、転送設定STEP3にて利用できたテスト実行機能を廃止しました。

## 新機能

### CDCデータ転送

[既存のCDC転送](/docs/mysql-to-bigquery-cdc)のアーキテクチャを刷新し、機能を強化したCDC機能の提供を開始しました。
MySQLからS3 Icebergへの転送をCDC形式で連携できます。
詳しくは、[CDC（変更データキャプチャ）](https://primenumber.com/trocco/features/cdc)を参照ください。

:::(Warning) (利用可能なプラン)

本機能の利用は、**Professionalプラン**の契約が前提となります。
詳しくは、営業担当者またはカスタマーサクセスまでお問い合わせください。
:::

### Self-Hosted Runner

β版としてリリースしていたSelf-Hosted Runnerを、公式版として提供開始しました。
オンプレミス環境やプライベートネットワーク環境のサーバー上でTROCCOのジョブが実行できます。
詳しくは、[Self-Hosted Runner](/docs/self-hosted-runner)を参照ください。

:::(Warning) (利用可能なプラン)

本機能の利用は、**Professionalプラン**の契約が前提となります。
詳しくは、営業担当者またはカスタマーサクセスまでお問い合わせください。
:::

### 転送元SAP S/4HANA OData

SAPは世界で大きな市場シェアを持つ主要なERPソリューションであり、とくにSAP S/4HANAは現在もっとも需要の高いモジュールのひとつです。
SAP S/4HANA ODataコネクタでは、SAP NetWeaver Gatewayが提供するOData V2サービス経由でSAPデータを取得・連携します。
詳しくは、[SAP S/4HANA OData 接続情報](/docs/connection-configuration-sap-odata)・[転送元 - SAP S/4HANA OData](/docs/data-source-sap-odata)を参照ください。

:::(Warning) (利用可能なプラン)

本機能の利用は、**Professionalプラン**の契約が前提となります。
詳しくは、営業担当者またはカスタマーサクセスまでお問い合わせください。
:::

### Connector Builder (β版)

Connector Builder (β版)とは、ユーザー自身でコネクタを作成できる機能です。
TROCCOが対応していないサービスであっても、利用者が自ら対応コネクタを開発し、TROCCO上で利用できます。
詳しくは、[Connector Builder (β版)](https://primenumber.com/trocco/features/connector-builder)を参照ください。

:::(Warning) (利用可能なプラン)

本機能は、**Advanced**プラン以上の契約アカウントでのみ、ご利用いただけます。
:::

## 転送設定

### 対応コネクターの追加

#### Shopify GraphQL APIを用いた転送元Shopifyを追加

Shopify REST Admin APIがレガシーAPIとなったことに伴い、 Shopify GraphQL APIを用いた転送元Shopifyをリリースしました。
詳しくは、[転送元 - Shopify](docs/data-source-shopify-graphql)を参照ください。

#### 転送元GitLabを追加

転送元GitLabを追加しました。
GitLab上の各種リポジトリ情報を他のデータ基盤へ連携できるようになりました。
開発プロセスの可視化や活動ログの分析を通じて、開発生産性の向上やボトルネックの把握にお役立ていただけます。

#### 転送元Oktaを追加

転送元Oktaを追加しました。
ユーザー情報やアプリケーションの利用状況を分析し、セキュリティ管理やアクセス制御の最適化に繋げることができます。

#### 転送元Asanaを追加

転送元Asanaを追加しました。
タスクの進捗状況やプロジェクトの管理情報を分析し、チームの生産性向上やリソース配分の検討にご活用いただけます。

#### 転送元スマレジを追加

転送元スマレジを追加しました。
スマレジ上のPOSデータを分析し、売上分析や在庫管理の効率化にご利用いただけます。

#### 転送元ラクローを追加

転送元ラクローを追加しました。
勤怠情報を分析し、給与計算やチームのパフォーマンス評価に役立てられます。

#### 転送元クラウドサインを追加

転送元クラウドサインを追加しました。
電子契約書のデータを活用し、契約状況の可視化に繋げられます。

#### 転送元Airtableを追加

転送元Airtableを追加しました。
これにより、Airtable上のテーブルデータをTROCCOを通じて他のデータ基盤に連携できるようになりました。

#### 転送元Rollbarを追加

転送元Rollbarを追加しました。
エラーのデータを分析し、アプリケーションの安定性向上や問題解決の効率化にご活用いただけます。

#### 転送元Talentioを追加

転送元Talentioを追加しました。
人材管理データを分析し、採用活動や組織マネジメントにご活用いただけます。

### 機能改善

#### ジョブのタイムアウト設定

これまでは一部のコネクターでのみ提供されていたタイムアウト設定ですが、アカウント内のすべての転送設定（転送ジョブ）に適用されるタイムアウト設定が実装されました。
タイムアウト設定を有効化することで、実行開始から一定時間経過した転送ジョブを自動停止できます。
これにより、意図しない処理時間枠の消費を防ぐことができます。
詳しくは、[タイムアウト設定](/docs/timeout-settings)を参照ください。

#### カラム定義のデータ型一括置換で対応するデータ型が拡充

転送設定のSTEP2 詳細設定で設定できるテンプレートETLについて、カラム定義のデータ型一括置換で対応するデータ型を拡充しました。
詳しくは、[テンプレートETL](/docs/template-etl)を参照ください。

#### 転送元S3にて最終更新時間を基準とした差分転送ができるように

転送元S3にて、ファイルの最終更新時間を基準とした差分転送ができるようになりました。
これにより、差分転送の基準を最終パスまたは最終更新時間で選択できるようになりました。

#### 転送元Snowflakeでクエリのプレビューができるように

転送元Snowflakeにて、クエリのプレビューが可能になりました。
クエリで取得対象となる転送データを事前に確認できるようになりました。

#### 転送元ストレージファイル系コネクタにて柔軟なエラーハンドリングが可能に

以下コネクタにて、**指定のパスにファイルが存在しなかった場合に転送を続行するか**を選択できるようになりました。
転送設定STEP1の詳細設定にて選択できます。

- [転送元 - SFTP](/docs/data-source-sftp)
- [転送元 - Google Drive](/docs/data-source-googledrive)
- [転送元 - Azure Blob Storage](/docs/data-source-azure-blob-storage)
- [転送元 - Amazon CloudWatch Logs](/docs/data-source-cloudwatch-logs)

#### 転送元SFTPがWindowsベースのSFTPサーバーに対応

転送元SFTPがWindowsベースのSFTPサーバーにも対応しました。

## ワークフロー定義

### ワークフローのカスタム変数ループ実行の内容を簡単に確認できるように

これまで、タスクに設定したカスタム変数ループ実行内容を確認するには、タスク編集画面を開く必要がありました。
今回のリリースにより、ワークフローのタスクをクリックすると表示されるポップアップにて、カスタム変数ループ実行の内容を確認できるようになりました。

## TROCCO API

### 接続情報APIの対応コネクターが拡充

接続情報APIの操作対象コネクタとして、以下のコネクターが追加されました。

- Amazon Athena接続情報

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタとして、以下のコネクターが追加されました。

- 転送元 - Yahoo!検索広告

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)
