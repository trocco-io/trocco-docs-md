---
articleId: b0d4afcc-9a58-4c49-a650-7dc5e417e4af
slug: dbt-job-configuration
title: dbtジョブ設定
parentCategoryId: 306848d6-87d4-40e8-a2e3-7ce10a8364a6
languageCode: ja
---
## 概要
本記事では、dbtジョブ設定について説明します。

## 設定項目一覧
### 共通設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 名前 | ✓ | - | dbtジョブ設定の名前を入力します。 |
| メモ | - | - | dbtジョブ設定のメモを入力できます。 |
| dbtリポジトリ | ✓ | - | TROCCOに連携したdbt Gitリポジトリを選択します。 |
| 実行コマンド | ✓ | `dbt build` | 実行コマンドを選択します。<br>オプションとその値を設定することもできます。<br>詳しくは、[対応するdbtコマンド](/docs/dbt-job-configuration#対応するdbtコマンド)を参照ください。 |
| スレッド数 | ✓ | `1` | dbtが一度に処理できるモデルの数を設定します。<br>設定できるスレッド数の上限は**16**です。<br>スレッド数について、詳しくは[understanding-threads](https://docs.getdbt.com/docs/get-started/connection-profiles#understanding-threads)を参照ください。 |
| ターゲット | - | - | dbtジョブ実行後に生成される`profiles.yml`内の`target`の値を指定できます。<br>クエリ内で条件分岐させたい場合のフラグとして`target`の値を活用する、といったこともできます。<br>なお、未入力の場合、`target`には`trocco_default`という値が渡されます。<br>詳しくは、[Custom target names](https://docs.getdbt.com/docs/build/custom-target-names)を参照ください。|

:::(Info) (スレッド数)
dbtコマンドが実行されるときは、まずモデル間のリンクの有向無サイクルグラフ（DAG）が作成されます。
スレッド数では、dbtが一度に処理できるグラフのパスの最大数を指定します。

なお、一般的にはスレッド数を増やすことで実行時間は短くなりますが、その一方でアダプターに対する負荷が増加します。
したがって、最適なスレッド数は、データウェアハウスとその構成に依存します。
:::

### アダプターごとの設定項目
dbt Gitリポジトリで設定したアダプターによって以降の設定項目は異なります。

#### アダプターがGoogle BigQueryの場合
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| Google BigQuery接続情報 | ✓ | Google BigQueryの接続情報を選択します。<br>詳しくは[BigQueryの接続情報](/docs/connection-configuration-bigquery)をご参照ください。 |
| データセット | ✓ | データ出力先のデータセット名を入力します。|
| ロケーション | - | データ出力先のデータセットのロケーションを入力できます。<br>ロケーションを入力しなかった場合、指定したデータセットが出力先に存在しなかったときは、`US`（マルチリージョン）がデータセットのロケーションに指定されます。|

#### アダプターがSnowflakeの場合
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| Snowflake接続情報 | ✓ | Snowflakeの接続情報を選択します。<br>詳しくは[Snowflakeの接続情報](/docs/connection-configuration-snowflake)を参照ください。<br>なお、接続情報の認証方式には「ユーザー・パスワード認証」と「キーペア認証」のいずれも使用できます。 |
| ウェアハウス | ✓ | 処理に利用するウェアハウス名を入力します。  |
| データベース | ✓ | データ出力先のデータベース名を入力します。|
| スキーマ | ✓ | データ出力先のスキーマ名を入力します。|
| ロール | - | Snowflakeを利用する上で必要な権限をまとめたロール名を入力します。<br>ロールについて、詳しくはSnowflakeの接続情報の[権限とロール](/docs/connection-configuration-snowflake#権限とロール)を参照ください。 |

#### アダプターがAmazon Redshiftの場合
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| Redshift接続情報 | ✓ | Amazon Redshiftの接続情報を選択します。<br>詳しくは、[Amazon Redshiftの接続情報](/docs/connection-configuration-redshift)をご参照ください。 |
| データベース | ✓ | データ出力先のデータベース名を入力します。|
| スキーマ | ✓ | データ出力先のスキーマ名を入力します。|


## 対応するdbtコマンド
以下は、TROCCOが対応しているdbtコマンドです。
dbtコマンドについて、詳しくは[dbt Command reference](https://docs.getdbt.com/reference/dbt-commands)を参照ください。

:::(Info) (dbtコマンドに付帯する機能)
TROCCOでは、dbtコマンドに対して、**オプション引数**および**カスタム変数**を利用できます。
:::


| コマンド名  | 概要 |
| --- | --- |
| `dbt build` | プロジェクト内の全リソースをビルドします。 |
| `dbt deps` | パッケージをインストールします。 |
| `dbt run` | モデルファイルを実行します。 |
| `dbt seed` | アダプターにCSVファイルを転送します。 |
| `dbt snapshot` | snapshotジョブを実行します。 |
| `dbt test` | テストを実行します。 |
| `dbt run-operation` | マクロを実行します。<br>下記枠にマクロ名を入力してください。<br>![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/dbt-job-configuration-2024-08-29-18-59-0.png){height="" width="500"} |


## dbtジョブ設定の各種操作
### dbtジョブ設定一覧画面
![005-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/dbt-job-configuration-2024-08-29-18-59-1.png){height="" width="500"}

### dbtジョブ設定詳細画面
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/dbt-job-configuration-2024-08-29-18-59-2.png){height="" width="500"}

:::(Warning) (dbtジョブ設定の複製)
dbtジョブ設定は複製できません。
:::

#### ① 新規追加
dbtジョブ設定を新規追加します。新規作成画面が表示されます。

#### ② 編集
dbtジョブ設定を編集します。詳細画面が表示されます。

#### ③ 実行
dbtジョブを実行します。実行画面が表示されます。

#### ④ 削除
dbtジョブ設定を削除します。

#### ⑤ 作成者
チーム機能をご利用の場合、dbtジョブ設定の作成者は、該当の設定に対して**リソースグループ管理者**ロールを有するユーザーと同様の操作権限を有します。
詳しくは、下記の「ロール・パーミッション」を参照ください。


### ロール・パーミッション
:::(Info) (チーム機能をご利用の場合)
dbtジョブ設定は、TROCCOにおいて**リソース**として扱われます。
* リソースの定義：[チーム機能について](/docs/about-team)を参照ください。
* リソースに対する操作権限：[リソースグループ](/docs/resource-group)を参照ください。
:::

| 操作＼ロール | リソースグループ管理者 | リソースグループ編集者 | リソースグループ運用者 | リソースグループ閲覧者 | ロール無し |
| --- | --- | --- | --- | --- | --- |
| dbtジョブ設定の編集 | ✓ | ✓ | - | - | - |
| dbtジョブ設定の削除 | ✓ | ✓ | - | - | - |
| dbtジョブの実行 | ✓ | ✓ | ✓ | - | - |
| dbtジョブ設定の閲覧 | ✓ | ✓ | ✓ | ✓ | - |
| dbtジョブ実行履歴の閲覧 | ✓ | ✓ | ✓ | ✓ | - |
| dbtジョブ設定の新規追加 | ✓ | ✓ | ✓ | ✓ | ✓ |
