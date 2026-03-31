---
articleId: a9621ddf-d0a6-425c-8fab-246926cb5e30
slug: datacatalog-supported-functions-list-v1
title: 各データストア対応機能一覧
parentCategoryId: 44c8b731-fa9a-4cba-a8de-9fcb56bbf9c2
languageCode: ja
---
## データカタログ対応機能一覧

TROCCOのデータカタログが持つ機能一覧です。
一部、TROCCOと合わせてご利用の場合に適用される機能があります。

|各機能|補足|
|:----|:----|
|[テーブル・カラム検索](/docs/metadata-search-function-v1)||
|[アセット自動取り込み機能](/docs/automatic-assets-update-v1)||
|[メタデータ自動取得機能](/docs/automatic-metadata-fetched-v1)||
|[カラムに紐づくメタデータの自動引き継ぎ](/docs/automatic-metadata-fetched-v1#カラムに紐づくメタデータの自動引き継ぎ)||
|[要約統計情報・データプレビュー](/docs/table-information-v1#カラム情報)|BigQueryの場合、クエリ実行時に[データをサンプリング](/docs/catalog-glossary-v1#実データ)をすることがあります。|
|[カラム参照の手動定義](/docs/table-information-v1#カラム情報)| |
|[カラムリネージ](/docs/table-information-v1#カラムリネージ)||
|[ER図](/docs/erd-and-join-v1)||
|[JOIN分析](/docs/erd-and-join-v1#join分析)||
|[クエリエディタ](/docs/query-editor-v1)|Snowflakeの場合、下記の表示に対応していません。<ul><li>関数のポップヒント</li><li>Syntax Error</li><li>クエリ実行前のデータ処理量（dry_run実行結果）</li></ul>|
|[クエリ実行結果のプレビュー](/docs/query-editor-v1)| |
|[クエリ実行結果のCSVダウンロード](/docs/query-editor-v1)|BigQueryにのみ対応しています。|
|[メタデータインポート](/docs/data-catalog-settings-v1#メタデータインポート)||

## データストアに関するメタデータの詳細

[アセット自動取り込み機能](/docs/automatic-assets-update-v1)によって自動取得されるメタデータの一覧です。

### BigQueryのデータストアの場合

|項目名|サンプル値|
|:----|:----|
|プロジェクト|`sample_project`|
|データセット|`sample_dataset`|
|テーブル|sample_table|
|テーブルタイプ (TABLE_TYPE)|`BASE TABLE`|
|INSERT可否 (IS_INSERTABLE_INTO)|`TRUE`|
|作成日時 (CREATION_TIME)|`2023-01-23 20:11:42 JST`|
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
|作成日時 (CREATED)|`2023-01-01 00:00:00 JST`|
|変更日時 (LAST_ALTERED)|`2023-01-01 00:00:00 JST`|
|コメント (COMMENT)|`comment`|
|TimeTravel履歴データの保持日数 (RETENTION_TIME)|`1`|
|自動クラスタリング設定 (AUTO_CLUSTERING_ON)|`true`|
|クラスタリングキー (CLUSTERING_KEY)|`LINEAR(COLUMN_NAME)`|
