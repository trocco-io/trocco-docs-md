---
articleId: 85fc99b1-c179-4d84-a5cd-5b95640f7130
slug: data-source-bigquery
title: 転送元 - Google BigQuery
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

Google Cloud PlatformのBigQueryからデータを転送する設定のDocsです。

## 制約

- Google Spreadsheetsを外部テーブルとしたテーブルに対しては、クエリを実行できません。

## 設定項目

### STEP1 基本設定

:::(Warning) (ロケーションに関する制約)

以下のロケーションはすべて一致させる必要があります。

- **SQL**内に記述するデータセット
- **一時テーブル作成先データセット**
- **データセットのロケーション**
:::

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| BigQuery接続情報 | Yes | - | [BigQueryの接続情報](/docs/connection-configuration-bigquery)を参照ください。|
| SQL | Yes | - | BigQueryから転送データを取得するためのSQLを入力します。<br>`FROM`句は、**\`FROM <project_name><dataset_name>.<table_name>\`** の形式で記述してください。 |
| SQLタイプ | Yes | 標準SQL | 標準SQLとレガシーSQLから選択できます。<br>それぞれの違いについて、詳しくは[BigQuery公式ドキュメント - Comparison of legacy and GoogleSQL](https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql#comparison_of_legacy_and_standard_sql)を参照ください。 |
| 一時テーブル作成先データセット |	Yes | -  | 転送元BigQueryでは、転送処理時にSQLの実行結果を一時テーブルに保存します。<br>その一時テーブルをどのデータセットに作成するかを指定します。<br>**BigQuery上にすでに存在するデータセット**を指定してください。<br><br>なお、作成された一時テーブルは転送ジョブが正常に終了すると削除されます。<br>一方、転送ジョブがエラー終了した場合は、一時テーブルがデータストアに残ってしまう可能性があります。ご留意ください。|
| データセットのロケーション | Yes | US (米国) | **SQL**で指定したデータセットと、**一時テーブル作成先データセット**のロケーションを選択します。<br>これらのロケーションはすべて一致させる必要があります。 |
| 一時データエクスポート指定 | Yes | バケットのみ指定	| 転送元BigQueryでは、BigQueryのデータを一時的にGoogle Cloud Storageにエクスポートします。<br>そのエクスポート先となるCloud Storage バケット内のパスの指定方法を選択します。<ul><li>バケットのみ指定：Cloud Storageのバケット名を指定します。この場合、指定したバケット内にユニークなフォルダが生成され、その中に一時データがエクスポートされます。</li><li>カスタムパス設定：Cloud Storage バケット内のファイルパスを指定します。**バケット名のみの指定はできません**。</li></ul><br>いずれの場合も、**Google Cloud Storage上にすでに存在するバケットまたはファイルパス**を指定してください。 |
| 一時データのファイル形式 | Yes | `CSV` | Google Cloud Storageにエクスポートする一時データのファイル形式を選択します。<br>なお、既存の転送設定に対して本設定を変更する場合は、転送設定STEP2に遷移する際に**自動データ設定**を行ってください。|
| 一時データの削除ポリシー | Yes | 削除する | Google Cloud Storageにエクスポートした一時データを、ジョブ完了後に削除するかどうかを選択します。<br>ジョブ完了後に一時データを確認したい場合は、**削除しない**を選択してください。<br>一時データの確認方法について、詳しくは[GCS上の一時データを確認する方法](/docs/data-source-bigquery#gcs上の一時データを確認する方法)を参照ください。|

:::(Warning) (一時データエクスポート指定にてカスタムパス設定を選択した場合)

Google Cloud Storage URIに入力するファイルパスの**ファイル部分**に、ワイルドカード「\*」を含めるかどうかで挙動が変わります。

- ワイルドカードを含める場合（例：`gs://<BUCKET_NAME>/foo/bar*`）
  - 一時データは複数ファイルに分割されてエクスポートされます。
- ワイルドカードを含めない場合（例：`gs://<BUCKET_NAME>/foo/bar`）
  - 一時データは単一ファイルでエクスポートされます。
  
ただし、BigQueryは**1GB**以上のテーブルデータのエクスポートには対応していません。
この場合、ワイルドカードを含めて、複数ファイルに分割してエクスポートすることを検討ください。
本仕様について、詳しくは[BigQuery公式ドキュメント - テーブルデータを Cloud Storage にエクスポートする](https://cloud.google.com/bigquery/docs/exporting-data)を参照ください。
:::

#### STEP1の詳細設定

| 項目名 |	デフォルト値 | 内容 |
| --- | --- | --- |
| ジョブ待機タイムアウト(秒) | 600  | ジョブが実行されるまでの待機時間のタイムアウトを秒単位で指定できます。<br> |
|クエリキャッシュを利用する | 有効 | BigQueryのクエリキャッシュ機能を利用するか選択します。<br>詳しくは、[BigQuery公式ドキュメント - Short query optimized mode](https://cloud.google.com/bigquery/docs/running-queries#short-query-optimized)をご参照ください。 |

:::(Info) (ジョブ待機タイムアウトの利用例)

BigQueryで実行中のクエリが多い場合、[スロット制限](https://cloud.google.com/bigquery/docs/slots#query_execution_under_slot_resource_economy)により、ジョブが実行されるまでの待機時間が発生することがあります。
この待機時間が指定したタイムアウト時間に達すると、`Not found: Table`といったエラーが発生し、該当の転送ジョブは失敗します。
そのような場合にジョブ待機タイムアウトの時間を増やすことで、転送ジョブの失敗を回避できます。
:::

## 必要な権限

ご利用いただくにあたって必要な権限は以下となります。

- `bigquery.datasets.get`
- `bigquery.jobs.create`
- `bigquery.tables.create`
- `bigquery.tables.delete`
- `bigquery.tables.export`
- `bigquery.tables.get`
- `bigquery.tables.getData`
- `bigquery.tables.updateData`
- `storage.buckets.create`
- `storage.buckets.delete`
- `storage.buckets.get`
- `storage.buckets.list`
- `storage.objects.create`
- `storage.objects.delete`
- `storage.objects.get`
- `storage.objects.list`

## GCS上の一時データを確認する方法

前述の通り、転送データはGCSの指定したバケット・フォルダに一時的に格納されます。
「一時データの削除ポリシー」を「削除しない」に設定した場合、GCSに残った一時データを転送後に確認できます。
一時データは圧縮されているため、内容を確認したい場合には、解凍する必要があります。
一時データの拡張子を`.gz`に変更し、`gzip`で解凍したうえで、ファイルの内容を確認してください。

