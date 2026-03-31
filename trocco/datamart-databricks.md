---
articleId: 75e02976-2510-4755-869a-6ea1ae8e6bd9
slug: datamart-databricks
title: データマート - Databricks
parentCategoryId: 82738c4b-67f9-4743-b907-c136587807aa
languageCode: ja
---
## 概要

Databricksを用いたデータマート定義の設定のDocsです。

## 設定項目

### 基本設定

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| Databricks接続情報 | ✓ | あらかじめ登録してある[Databricksの接続情報](/docs/connection-configuration-databricks)から、今回のデータマート定義に必要な権限を持つものを選択します。 |
| カスタム変数 | - | ここで設定したカスタム変数をクエリやカタログ名・スキーマ名・テーブル名などに埋め込むことができます。<br>詳しくは[カスタム変数について](/docs/custom-variables)をご参照ください。 |

### クエリ設定

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| クエリ実行モード | ✓ | 以下のいずれかのモードを選択します。<ul><li>データ転送モード<br>クエリと出力先テーブルを指定するだけで、簡単にテーブルへの洗い替え・追記を実行できます。</li><li>自由記述モード<br>接続先のDWHに対して、任意のDML・DDLステートメント(`INSERT`・`DELETE`や、`CREATE`・`DROP`など)を記述し、実行できます。</li></ul> |
| クエリ | ✓ | クエリを入力します。<br>クエリ内でテーブル名を指定するときは、以下の形式で記述ください。<ul><li>**データ転送モード**の場合：`catalog_name.schema_name.table_name`</li><li>**自由記述モード**の場合：`catalog_name.schema_name.table_name`</li></ul><br>なおデータ転送モードを選択している場合は、**プレビュー実行**をクリックすることで、実行結果を確認することもできます。 |

:::(Info) (クエリの整形)

クエリ編集欄の左下にある **クエリを整形**をクリックすることで、入力したSQLクエリを自動で整形できます。  
整形処理では、キーワードの配置やインデント、改行などが見やすく再配置されます。
:::

#### データ転送モードを選択した場合

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 出力先カタログ | ✓ | データ出力先のカタログ名を入力します。<br>詳しくは[Databricks公式ドキュメント - カタログ](https://docs.databricks.com/data-governance/unity-catalog/create-catalogs.html)を参照ください。 |
| 出力先スキーマ | ✓ | データ出力先のスキーマ名を入力します。<br>詳しくは[Databricks公式ドキュメント - スキーマ](https://docs.databricks.com/data-governance/unity-catalog/create-schemas.html)を参照ください。 |
| 出力先テーブル | ✓ | データ出力先のテーブル名を入力します。<br>詳しくは[Databricks公式ドキュメント - テーブル](https://docs.databricks.com/data-governance/unity-catalog/create-tables.html)を参照ください。|
| 書き込みモード | ✓ | 以下のいずれかのモードを選択します。<ul><li>追記<ul><li>既存のテーブルのレコードの後に、クエリ実行結果が追記されます。</li></ul></li><li>全件洗い替え (TRUNCATE INSERT)<ul><li>既存のテーブルのレコードが削除されてクエリ実行結果に置き換えられます。</li></ul></li><li>全件洗い替え (REPLACE)<ul><li>既存のテーブルがDROPされてクエリ実行結果に置き換えられます。</li></ul></li></ul> |

:::(Info) (テーブルの自動作成)

データ転送モードを選択した場合、出力先テーブルが存在しないときにテーブル作成権限がある場合には自動でテーブルが作成されます。
:::

:::(Warning) (全件洗い替え (REPLACE)モードの注意点)

全件洗い替え (REPLACE)モードを選択した場合、既存のテーブルが削除されてから新しいテーブルが作成されます。このため、テーブルに設定されていたパーティション設定などが失われる可能性があります。ご注意ください。
:::

### ジョブ起動設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| ジョブの並列実行 | ✓ | 並列でのジョブ実行はしない | ジョブ実行時点で、同一のデータマート定義による他のジョブが実行中の場合に、ジョブを実行するかどうかを選択します。<ul><li>**並列でのジョブ実行はしない**：ジョブは実行されずスキップされます。</li><li>**並列でのジョブ実行を許可**：ジョブは実行されます。</li></ul>|

## 必要な権限

ご利用いただくにあたって必要な権限は、[Databricksの接続情報](/docs/connection-configuration-databricks#必要となる権限)をご参照ください。

データマート定義でDatabricksを利用する場合、以下の権限が必要です。

### データ転送モードを利用する場合

#### 新規にテーブルを作成、もしくは自分がオーナーのテーブルの場合に必要な権限

- 対象カタログの`USE_CATALOG`
- 対象スキーマの`USE_SCHEMA`・`CREATE TABLE`

#### 自分がオーナーではないテーブルの場合に必要な権限

- 書き込みモード：全件洗い替え (REPLACE)を利用する場合
  - 対象カタログのオーナー
  - 対象スキーマのオーナー
  - 対象テーブルの`MODIFY`・`SELECT`
- 書き込みモード：全件洗い替え (REPLACE)以外のモードを利用する場合
  - 対象カタログの`USE_CATALOG`
  - 対象スキーマの`USE_SCHEMA`・`CREATE TABLE`
  - 対象テーブルの`MODIFY`・`SELECT`

### 自由記述モードを利用する場合

実行するクエリの内容に応じて、必要な権限が異なります。
Databricksの権限管理について、詳しくは[Databricks公式ドキュメント - Unity Catalogで権限を管理する](https://docs.databricks.com/data-governance/unity-catalog/manage-privileges/index.html)を参照ください。

## Compute Resource（Warehouse/Cluster）について

Databricksデータマート定義では、接続情報で指定したHTTP Pathに基づいて、SQL WarehouseまたはClusterのいずれかでクエリが実行されます。

- **SQL Warehouse**：SQL分析ワークロードに最適化されたコンピューティングリソース
- **Cluster**：汎用的なコンピューティングリソース

HTTP Pathによって自動的に適切なリソースが選択され、クエリが実行されます。
Compute Resourceの詳細については、[Databricks公式ドキュメント - Compute](https://docs.databricks.com/compute/index.html)を参照ください。
