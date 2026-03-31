---
articleId: 628413d6-ae95-43ff-b96e-64de733ed06a
slug: cdc-data-destination-bigquery
title: CDCデータ転送 - 転送先 - Google BigQuery
parentCategoryId: 76343439-4667-4cbc-9835-4d2212bc1b17
languageCode: ja
---
本ページでは、CDCデータ転送における転送先 - Google BigQueryについて説明します。
接続に関する設定については、[Google BigQuery接続情報](/docs/connection-configuration-bigquery)を参照ください。

## 事前準備

### Google Cloud Projectの準備

事前にGoogle Cloud Projectを作成し、BigQuery APIを有効化する必要があります。

:::(Warning) (データ転送に伴うBigQueryの課金対象)

一時テーブルへの書き込みはBigQuery Storage Write API、マージ処理は通常のジョブとしての課金対象です。詳しくは[BigQueryの料金 - Google Cloud](https://cloud.google.com/bigquery/pricing?hl=ja)を参照ください。

:::

### サービスアカウントの設定

CDCデータ転送では、**サービスアカウント認証**と**個人のGoogleアカウント認証**に対応しています。
サービスアカウントの発行手順については、[Google BigQuery接続情報](/docs/connection-configuration-bigquery)を参照ください。
必要な権限は以下のとおりです。

- BigQueryへのデータ読み書き権限
  - `bigquery.datasets.create`
  - `bigquery.datasets.get`
  - `bigquery.jobs.create`
  - `bigquery.tables.create`
  - `bigquery.tables.delete`
  - `bigquery.tables.export`
  - `bigquery.tables.get`
  - `bigquery.tables.getData`
  - `bigquery.tables.list`
  - `bigquery.tables.update`
  - `bigquery.tables.updateData`

:::(Warning) (BigQueryクエリ実行数の制限について)

CDCデータ転送では、最大で50件のBigQueryクエリが同時に実行されます。
BigQuery側のデフォルト設定で許可されているクエリの同時実行数はプロジェクトあたり100件となっているため、他のアプリケーションやジョブが同じプロジェクトでクエリを実行している場合は、制限に達する可能性があります。

制限に到達した場合は、[割り当ての表示と管理 - Google Cloud](https://cloud.google.com/docs/quotas/view-manage?hl=ja#requesting_higher_quota)を参照し、割り当ての調整リクエストを検討してください。
:::

## 設定項目

### STEP1 詳細設定

| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 追加されたテーブル・カラムの追従設定 | No | カラムのみを自動追従(推奨) | 追加されたテーブル・カラムを転送先のテーブルに自動で追従するかを選択できます。詳しくは、[CDCスキーマ自動追従](/docs/cdc-schema-auto-prepagation)を参照ください。 |
| バックフィル設定 | No | 有効(推奨) | テーブル・カラムの自動追従において、ジョブ実行時に追加や変更があったテーブルの全件転送を行うかどうかを設定します。詳しくは、[CDCスキーマ自動追従](/docs/cdc-schema-auto-prepagation)を参照ください。 |
| テーブル連続失敗回数上限 | No | 5 | テーブルの同期が連続して失敗した際に、該当テーブルの同期を停止するまでの失敗回数を設定します。<br>停止した場合でも、他のテーブルの同期は継続されます。<br>値を空にすると上限なしとなり、エラーが発生しても同期を停止しません。詳しくは、[同期対象のテーブル例外について](/docs/cdc-data-destination-bigquery#同期対象のテーブル例外について)を参照ください。 |

### STEP1 転送先設定

以下の設定項目については、[転送先 - Google BigQuery](/docs/data-destination-bigquery)の該当する項目を参照ください。

- Google BigQuery接続情報
- データセット
- データセットのロケーション
- データセットの自動作成オプション

| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 生ログデータセット | Yes | データセット名に「_raw_trocco_logs」のsuffixをつけた値 | CDCデータ転送の中間テーブルを保存するデータセットを指定します。 |

### STEP2 出力オプション

| 項目 | 内容 |
| --- | --- |
| パーティション種別 | 転送先テーブルのパーティション種別を選択します。「日別」または「月別」を選択した場合は、パーティショニングの基準となるTimestamp型のカラムをあわせて選択します。 |

## 同期対象のテーブル例外について

自動追従できない型変更など、転送ジョブ内の一部テーブルでエラーが発生した場合、エラーが発生したテーブルのみ例外として転送をスキップできます。

エラーが発生したテーブルが存在するジョブは、ジョブ自体は成功しますが「テーブルエラーあり」と表示されます。
![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/cdc-data-destination-bigquery-2026-01-06-08-37-39.png)

失敗回数が連続失敗回数上限を超えた場合、テーブルの転送はスキップされます。
![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/cdc-data-destination-bigquery-2026-01-06-08-49-13.png)

### スキップされたテーブルへの対応

スキップされたテーブルを再度転送する場合は、「全件転送（選択テーブル）」または「全件転送（全テーブル）」を実行してください。
転送先のテーブルは一度削除され再作成されます。

:::(Warning) (連続失敗回数が多い場合)

差分転送に失敗するたびに読み込むログが徐々に増大するため、転送に失敗する回数が多くなると、遅延やエラーが発生する可能性があります。
テーブル連続失敗回数は原則設定することを推奨します。

:::

:::(Warning) (転送元でのエラー)

転送元でエラーが発生した場合は、すべてのテーブルの転送がエラーとなり、ジョブ全体が失敗します。

:::

## 制約事項

- 転送先テーブルは初回の全件転送時に再作成されます。既存のテーブルは利用できません。
- 9MBを超えるレコードは転送がスキップされます。
