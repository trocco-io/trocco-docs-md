---
articleId: eb6f18f3-3def-48df-bb7b-9caed9964b93
slug: data-destination-databricks
title: 転送先 - Databricks
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---

## 概要

Databricksへデータを転送する設定のDocsです。

:::(Info) (利用可能なクラウド環境)

転送元・転送先Databricksは、以下のいずれのクラウド環境においても利用可能です。

- [Databricks on AWS](https://www.databricks.com/product/aws)
- [Databricks on Google Cloud](https://www.databricks.com/product/google-cloud)
- [Azure Databricks](https://www.databricks.com/product/azure)

TROCCOは、データ転送時の一時ファイルストレージとしてUnity Catalog Volumeを利用しているため、各クラウドサービス固有のストレージサービスやインターフェイスに依存しません。
:::

## 制約

### 利用できないデータ型

- 次の型は Databricks JDBC Driver のサポート対象外のため、転送先テーブルのカラムに存在する場合エラーが発生します。
  - `TIMESTAMP_NTZ` （[Currently TIMESTAMP_NTZ type is not yet supported in JDBC Drivers](https://docs.databricks.com/en/sql/language-manual/data-types/timestamp-ntz-type.html#notes)）
  - `INTERVAL` （[Delta Lake does not support the INTERVAL type](https://docs.databricks.com/en/sql/language-manual/data-types/interval-type.html)）
- 次の型はサポート対象外のため、カラムに値を転送できません。
  - `BINARY`
  - `ARRAY`
  - `MAP`
  - `STRUCT`

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Databricks接続情報 | Yes | - | あらかじめ登録してある[Databricksの接続情報](/docs/connection-configuration-databricks)から、今回の転送設定に必要な権限を持つものを選択します。 |
| カタログ | Yes | - | 転送先のカタログ名を選択します。|
| スキーマ | Yes | - | 転送先のスキーマ名を選択します。|
| テーブル | Yes | - | 転送先のテーブル名を選択します。<br>対象テーブルが転送先のデータベース・スキーマ内に存在しない場合は、自動的に作成されます。|
| 転送モード | Yes | 追記(`INSERT`) | 転送モードを選択します。<br>詳しくは、後述の[転送モードについて](/docs/data-destination-databricks#転送モードについて)を参照ください。|
| マージキー | No | - | **転送モード**で`UPSERT (MERGE)`を選択したときに入力できます。<br>プライマリーキーが転送先のテーブルに存在しない場合、マージキー（主キー）扱いとする、カラムの名前を入力してください。<br>マージキーには、値の重複がなく、NULL値も持たないカラムを入力してください。|

### STEP1 詳細設定

| 項目名 | デフォルト値 | 内容 |
| --- | --- | --- |
| バッチサイズ (MB) | 50 | バッチサイズを指定します。 |
| デフォルトのタイムゾーン | Etc/UTC | デフォルトのタイムゾーンを指定します。 |

## 補足事項

#### 転送モードについて

| 転送モード | 内容 |
| --- | --- |
| 追記(`INSERT`) | まず一時テーブルを作成し、データを転送します。<br>すべての一時テーブルの作成が完了したら、対象テーブルにデータを挿入します。 |
| 追記(`INSERT DIRECT`) | 対象テーブルに直接行を挿入します。<br>転送が途中で失敗した場合、**対象テーブルにデータが一部挿入されている可能性があります。** |
| 全件洗い替え (`TRUNCATE INSERT`) | まず一時テーブルを作成し、一時テーブルにデータを転送します。<br>すべての一時テーブルの作成が完了したら、対象テーブルの中身を削除し、そのあとに対象テーブルにデータを挿入します。 |
| 全件洗い替え (`REPLACE`) | まず一時テーブルを作成し、データを転送します。<br>一時テーブルの作成が完了したら、対象テーブルを削除し、一時テーブルを対象名に変更します。<br>転送が途中で失敗した場合、**対象テーブルが削除される可能性があります**。 |
| `UPSERT (MERGE)` | まず一時テーブルを作成し、データを転送します。<br>すべての一時テーブルの作成が完了したら、以下の処理を行います。<br>対象テーブルに対して、一時テーブルのマージキーと値が一致する行は更新され、一致しない行は挿入されます。|

