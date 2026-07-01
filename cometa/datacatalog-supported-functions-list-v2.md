---
articleId: 24bb8592-df87-4dad-a27a-c4dda4087fc8
slug: datacatalog-supported-functions-list-v2
title: COMETA対応機能一覧
parentCategoryId: c2bb7910-699f-4b37-a13f-061b1f41d500
languageCode: ja
---
## COMETA対応機能一覧

COMETAが持つ機能一覧です。
一部、TROCCOと合わせてご利用の場合に適用される機能があります。

|各機能|BigQuery･Snowflake|Amazon Redshift|Tableau|カスタムデータベース連携|補足|
|:----|:----|:----|:----|:----|:----|
|[アセット検索](/cometa/docs/metadata-search-function-v2)|✓|✓|✓|✓||
|[用語集](/cometa/docs/glossary-and-term_v2)|✓|✓|-|✓||
|[メタデータ同期機能](/cometa/docs/assets-metadata-sync)|✓|-|-|-||
|[アセットの自動取り込み](/cometa/docs/automatic-assets-update-v2)|✓|✓|✓|✓|<ul><li>BigQuery・Snowflake・Amazon Redshiftの場合、アセット取得ユーザーが存在しないデータストアに対しては、実行されません。</li><li>カスタムデータベース連携の場合、S3バケットにCSVファイルが格納されていない場合、実行されません。</li></ul>|
|[アセットの手動取り込み](/cometa/docs/automatic-assets-update-v2)|✓|✓|-|-||
|[メタデータ自動取得機能](/cometa/docs/automatic-metadata-fetched-v2)|✓|✓|-|-|TROCCO利用時に適用されます。|
|[カラムに紐づくメタデータの自動引き継ぎ](/cometa/docs/automatic-metadata-fetched-v2#カラムに紐づくメタデータの自動引き継ぎ)|✓|-|-|-|TROCCO利用時に適用されます。Amazon Redshiftではカラムリネージがサポートされていないため、自動引き継ぎ機能は対応していません。|
|[要約統計情報・データプレビュー](/cometa/docs/table-information-v2#カラム情報)|✓|✓|-|-|BigQueryの場合、クエリ実行時に[データをサンプリング](/cometa/docs/catalog-glossary-v2#実データ)をすることがあります。|
|[カラム参照の手動定義](/cometa/docs/table-information-v2#カラム情報)|✓|✓|-|✓||
|[リネージ](/cometa/docs/lineage)|✓|-|✓(*)|✓(*)|Redshift・カスタムデータベース連携の場合、TROCCO利用時の転送設定（差分転送）によるリネージのみ対応しています。|
|[ER図](/cometa/docs/erd-and-join-v2)|✓|✓|-|✓||
|[JOIN分析](/cometa/docs/erd-and-join-v2#join分析)|✓|-|-|-|Amazon RedshiftではJOIN分析に対応していません。|
|[クエリエディタ](/cometa/docs/query-editor-v2)|✓|✓|-|-|<ul><li>Snowflakeの場合、下記の表示に対応していません。<ul><li>関数のポップヒント</li><li>Syntax Error</li><li>クエリ実行前のデータ処理量（dry_run実行結果）</li></ul></li><li>Amazon Redshiftの場合、下記の表示に対応していません。<ul><li>関数のポップヒント</li><li>Syntax Error</li><li>クエリ実行前のデータ処理量（dry_run実行結果）</li></ul></ul></li>|
|[クエリ実行結果のプレビュー](/cometa/docs/query-editor-v2#クエリ実行結果を即座にプレビュー)|✓|✓|-|-||
|[クエリ実行結果のCSVダウンロード](/cometa/docs/query-editor-v2#クエリ実行結果をcsvファイルに保存)|✓|✓|-|-||
|[クエリ集](/cometa/docs/query-collection)|✓|✓|-|✓|クエリの実行は、カスタムデータベース連携は対応していません。|
|[メタデータインポート](/cometa/docs/metadata-import-v2)|✓|✓|-|✓||
|[メタデータエクスポート](/cometa/docs/metadata-export-v2)|✓|✓|-|✓||
|[dbtメタデータ連携](/cometa/docs/dbt-metadata-integration)|✓|-|-|-||
|[Microsoft Entra ID 外部インテグレーション設定](/cometa/docs/external-integration-settings-v2)|✓(*)|-|-|-|Snowflakeのみ対応しています。|

## データストアに関するメタデータの詳細

[アセット自動取り込み機能](/cometa/docs/automatic-assets-update-v2)によって自動取得されるメタデータの一覧です。

### BigQueryのデータストアの場合

|項目名|サンプル値|
|:----|:----|
|プロジェクト|`sample_project`|
|データセット|`sample_dataset`|
|テーブル|sample_table|
|テーブルタイプ (TABLE_TYPE)|`BASE TABLE`|
|INSERT可否 (IS_INSERTABLE_INTO)|`TRUE`|
|作成日時 (CREATION_TIME)|`2023-01-23 20:11:42 +09:00`|
|クラスタ化テーブル設定|`FALSE`|

### Snowflakeのデータストアの場合

|項目名|サンプル値|
|:----|:----|
|データベース|`TEST_DATABASE`|
|スキーマ|`TEST_SCHEMA`|
|テーブルタイプ (TABLE_TYPE)|`BASE TABLE`|
|ロール (TABLE_OWNER)|`TEST_ROLE`|
|一時テーブル (IS_TRANSIENT)|`true`|
|行数 (ROW_COUNT)|`100`|
|バイト数 (BYTES)|`1KB`|
|作成日時 (CREATED)|`2023-01-01 00:00:00 +09:00`|
|変更日時 (LAST_ALTERED)|`2023-01-01 00:00:00 +09:00`|
|コメント (COMMENT)|`comment`|
|TimeTravel履歴データの保持日数 (RETENTION_TIME)|`1`|
|自動クラスタリング設定 (AUTO_CLUSTERING_ON)|`true`|
|クラスタリングキー (CLUSTERING_KEY)|`LINEAR(COLUMN_NAME)`|

### Amazon Redshiftのデータストアの場合

|項目名|サンプル値|
|:----|:----|
|テーブルタイプ|`BASE TABLE`|
|オーナー|`cometa`|
|行数|`20`|
|バイト数|`768MB`|
|作成日時|`2025/08/25 12:59:11 +09:00`|

### Tableauに関するメタデータ

#### Tableauワークブック

|項目名|サンプル値|
|:----|:----|
|説明|`hoge`|
|プロジェクト名|`sample_project`|
|所有者|`hoge@example.com`|
|作成日時|`2023-01-01 00:00:00 +09:00`|
|更新日時|`2023-01-01 00:00:00 +09:00`|

#### Tableauダッシュボード

|項目名|サンプル値|
|:----|:----|
|作成日時|`2023-01-01 00:00:00 +09:00`|
|更新日時|`2023-01-01 00:00:00 +09:00`|
|Tableauでの閲覧数|`1`|

#### 埋め込みTableauデータソース

|項目名|サンプル値|
|:----|:----|
|接続タイプ|`bigquery`|
|抽出データ|あり|
|最終抽出日時|`2023-01-01 00:00:00 +09:00`|

#### パブリッシュされたTableauデータソース

|項目名|サンプル値|
|:----|:----|
|プロジェクト名|`sample_project`|
|接続タイプ|`bigquery`|
|所有者|`hoge@example.com`|
|抽出データ|あり|
|最終抽出日時|`2023-01-01 00:00:00 +09:00`|


#### Tableauフィールド

|項目名|サンプル値|
|:----|:----|
|説明|`hoge`|
|非表示にする|いいえ|
|フィールド型|`CalculatedField`|
|データカテゴリ|`QUANTITATIVE`|
|データ型|`INTEGER`|
|役割|`MEASURE`|
|計算式|`if [Type] = "foo" then [sales] END`|
