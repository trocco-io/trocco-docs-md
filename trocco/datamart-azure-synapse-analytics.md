---
articleId: c3738a69-7195-4687-9f09-8c0bd6aaac7e
slug: datamart-azure-synapse-analytics
title: データマート - Azure Synapse Analytics
parentCategoryId: 82738c4b-67f9-4743-b907-c136587807aa
languageCode: ja
---
## 概要
Azure Synapse Analyticsを用いたデータマート定義の設定のDocsです。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Azure Synapse Analytics接続情報 | Yes | - | あらかじめ登録してある[Azure Synapse Analyticsの接続情報](/docs/connection-configuration-azure-synapse-analytics)から、今回のデータマート定義に必要な権限を持つものを選択します。 |
| カスタム変数 | No | - | ここで設定した[カスタム変数](/docs/custom-variables)をデータベース名、クエリ、スキーマ名、テーブル名に用いることができます。 |
| データベース | Yes | - | 処理に利用するデータベース名を指定します。 |

### クエリ設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| クエリ実行モード | Yes | データ転送モード | 以下2つのモードから選択することができます。<br>・データ転送モード<br>　SQLと出力先テーブルを指定するだけで、簡単にテーブルへの洗い替え・追記を実行することができます。<br>・自由記述モード<br>　接続先のDWHに対して、任意のクエリ(DDL、DELETE、INSERTなど)を自由に実行することができます。 |
| クエリ | Yes | - | Azure Synapse Analyticsから転送データを取得するためのSQLを入力します。<br>[カスタム変数](/docs/custom-variables)を利用し、TROCCOのデータ転送時に動的に設定値を決定することも可能です。 |

また、以下設定はクエリ実行モードが**データ転送モード**の場合のみ指定できます。

#### データ出力先設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 出力先スキーマ | Yes | - | データ出力先のスキーマ名を指定します<br>存在するスキーマを指定してください。 |
| 出力先テーブル | Yes | - | データ出力先のテーブル名を指定します。<br>テーブルが存在しない場合は転送時に新しく作成されます。 |
| 出力先テーブルのテーブル構造 | Yes | ヒープ (`HEAP`) | テーブル構造を選択します。<br>詳しくは、後述の[テーブル構造について](/docs/datamart-azure-synapse-analytics#テーブル構造について)を参照ください。|
| 出力先テーブルのインデックス キー列 | Yes | - | **テーブル構造**で**クラスター化列ストア インデックス** (`CLUSTERED COLUMNSTORE INDEX`)を選択したときに入力します。<br>インデックスのキー列名の入力および順序を指定してください。 |
| 出力先テーブルのテーブル分散 | Yes | ラウンド ロビン分散 (`ROUND_ROBIN`) | テーブル分散を選択します。<br>詳しくは、後述の[テーブル分散について](/docs/datamart-azure-synapse-analytics#テーブル分散について)を参照ください。|
| 出力先テーブルのディストリビューション列 | Yes | - | **テーブル分散**で**ハッシュ分散** (`HASH`)を選択したときに入力します。<br>ハッシュキーとなるディストリビューション列名を指定してください。 |
| 出力先テーブルの書き込み設定 | Yes | - | 以下のいずれかの書き込み方法を選択します。<ul><li>追記<ul><li>既存のテーブルのレコードの後に、クエリ実行結果が追記されます。</li></ul></li><li>全件洗い替え<ul><li>既存のテーブルのレコードが削除されてクエリ実行結果に置き換えられます。</li></ul></li></ul> |

:::(Warning) (すでにAzure Synapse Analyticsにテーブルが存在する場合)

すでにAzure Synapse Analyticsに存在するテーブルに対して**追記**する場合、TROCCO側の以下の設定は反映されず、既存のテーブル側の設定が維持されます。

- 出力先テーブルのテーブル構造
- 出力先テーブルのテーブル分散
:::

#### テーブル構造について

テーブル構造について、詳しくは[Azure Synapse Analytics公式ドキュメント - テーブル構造オプション](https://learn.microsoft.com/sql/t-sql/statements/create-table-azure-sql-data-warehouse?view=azure-sqldw-latest#TableOptions)を参照ください。

| テーブル構造 | 内容 |
| --- | --- |
| ヒープ (`HEAP`) | テーブルをヒープとして格納します。 |
| クラスター化列ストア インデックス (`CLUSTERED COLUMNSTORE INDEX`) | テーブルをクラスター化列ストア インデックスとして格納します。 |
| クラスター化インデックス (`CLUSTERED INDEX`) | テーブルを1つまたは複数のキー列を含むクラスター化インデックスとして格納します。 |

#### テーブル分散について

テーブル分散について、詳しくは[Azure Synapse Analytics公式ドキュメント - テーブル分散オプション](https://learn.microsoft.com/sql/t-sql/statements/create-table-azure-sql-data-warehouse?view=azure-sqldw-latest#TableDistributionOptions)を参照してください。

| テーブル分散 | 内容 |
| --- | --- |
| ハッシュ分散 (`HASH`) | 最大8列のハッシュ値に基づいて行を分散させます。 |
| ラウンド ロビン分散 (`ROUND_ROBIN`) | 行をラウンドロビン方式ですべてのディストリビューションに均等に分散させます。 |
| レプリケート (`REPLICATE`) | テーブルの1つのコピーを各コンピューティングノードに格納します。 |

### ジョブ起動設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| ジョブの並列実行 | Yes | 並列でのジョブ実行はしない | ジョブ実行時点で、同一のデータマート定義による他のジョブが実行中の場合に、ジョブを実行するかどうかを選択します。<ul><li>**並列でのジョブ実行はしない**：ジョブは実行されずスキップされます。</li><li>**並列でのジョブ実行を許可**：ジョブは実行されます。</li></ul> |
