---
articleId: 7b74d3d2-54f2-4d52-9918-4ae87282649f
slug: data-source-databricks
title: 転送元 - Databricks
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

Databricksからデータを転送する設定のDocsです。

:::(Info) (利用可能なクラウド環境)

転送元・転送先Databricksは、以下のいずれのクラウド環境においても利用可能です。

- [Databricks on AWS](https://www.databricks.com/product/aws)
- [Databricks on Google Cloud](https://www.databricks.com/product/google-cloud)
- [Azure Databricks](https://www.databricks.com/product/azure)

TROCCOは、データ転送時の一時ファイルストレージとしてUnity Catalog Volumeを利用しているため、各クラウドサービス固有のストレージサービスやインターフェイスに依存しません。
:::

## 制約

### 利用できないデータ型

- 次の型はサポート対象外のため、カラムから値を転送できません。
  - `TIMESTAMP_NTZ` （[Currently TIMESTAMP_NTZ type is not yet supported in JDBC Drivers](https://docs.databricks.com/en/sql/language-manual/data-types/timestamp-ntz-type.html#notes)）
  - `BINARY`

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| Databricks接続情報 | Yes | あらかじめ登録してある[Databricksの接続情報](/docs/connection-configuration-databricks)から、今回の転送設定に必要な権限を持つものを選択します。 |
| カタログ | Yes | カタログ名を入力します。|
| スキーマ | Yes | スキーマ名を入力します。|
| クエリ | Yes | 転送データを取得するためのクエリを入力します。 |

#### STEP1の詳細設定

**詳細を設定する**をクリックすると、設定項目が表示されます。

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| カーソルが一度に処理するレコード数 | Yes | 10,000 | カーソルで一度に取得する行数を指定できます。 |
