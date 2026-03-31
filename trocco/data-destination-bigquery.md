---
articleId: 68fff929-160b-4dd6-9cc7-662de844b7ac
slug: data-destination-bigquery
title: 転送先 - Google BigQuery
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要

Google CloudのBigQueryへデータを転送する設定のDocsです。

:::(Info) (Google BigQueryとTROCCOの活用事例について)

TROCCOの製品サイトでは、お客さまの[導入事例](https://primenumber.com/cases/topic/all?industry=&tag=bigquery)を紹介しております。
本Docsとあわせてご覧ください。
:::

## 制約

- Google BigQuery側の制約
  - 転送できるファイルサイズなどに上限があります。
  - 詳しくは、[BigQuery公式ドキュメント - 割り当てと上限](https://cloud.google.com/bigquery/quotas#load_jobs)を参照ください。

## 設定項目

### STEP1 基本設定

| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Google BigQuery接続情報 | Yes | - | あらかじめ登録してある[Google BigQuery接続情報](/docs/connection-configuration-bigquery)から、今回の転送設定に必要な権限を持つものを選択します。|
| 転送先プロジェクトの指定 | Yes | 接続情報のプロジェクト | 転送先のプロジェクトを指定します。<br>**接続情報のプロジェクト**：接続情報で設定されたプロジェクトを使用します。<br>**任意のプロジェクト**：接続情報とは別のプロジェクトを転送先として指定できます。 |
| 転送先プロジェクトID | No | - | **転送先プロジェクトの指定**で「任意のプロジェクト」を選択した場合に入力します。<br>転送先として使用するプロジェクトIDを入力してください。|
| データセット | Yes | - | 転送先のデータセット名を選択します。 |
| テーブル | Yes | - | 転送先のテーブル名を選択します。<br>対象テーブルが転送先のデータセット内に存在しない場合は、テーブルが自動的に作成されます。 |
| データセットのロケーション | Yes | US (米国) | 転送先データセットのロケーションを指定します。<br>東京リージョンを指定する場合はasia-northeast1を入力します。<br>指定できるロケーションについて、詳しくは[BigQuery公式ドキュメント - BigQuery のロケーション](https://cloud.google.com/bigquery/docs/locations)を参照ください。 |
| データセットの自動作成オプション | Yes | 作成しない | 指定した**データセット**が対象プロジェクト配下に存在しない場合、自動で作成します。 |
| 転送モード | Yes | 追記 (`APPEND`) | 転送モードを選択します。<br>詳しくは、後述の[転送モードについて](/docs/data-destination-bigquery#転送モードについて)を参照ください。 |
| Descriptionの維持オプション | No | 無効 | **転送モード**で`全件洗い替え (REPLACE)`を選択したときに設定できます。<br>有効にすると、テーブル再作成時にカラムの説明（Description）を保持します。|
| Policy Tagの維持オプション | No | 無効 | **転送モード**で`全件洗い替え (REPLACE)`を選択したときに設定できます。<br>有効にすると、テーブル再作成時にカラムのポリシータグ（Policy Tag）を保持します。|
| マージキー | Yes | - | **転送モード**で`UPSERT (MERGE)`を選択したときに入力できます。<br>プライマリーキーが転送先のテーブルに存在しない場合、マージキー（主キー）扱いとする、カラムの名前を入力してください。<br>マージキーには、値の重複がなく、NULL値も持たないカラムを入力してください。|

:::(Warning) (データセット・テーブル・カラムの命名上の制約)

それぞれ、命名上の制約があります。

- データセット名（STEP1で指定）
  - **英字・数字・アンダースコアのみ**で構成されている必要があります。
  - スペースや特殊文字を含めることはできません。
  - 詳しくは、[BigQuery公式ドキュメント - データセットの作成](https://cloud.google.com/bigquery/docs/datasets#dataset-naming)を参照ください。
- テーブル名（STEP1で指定）
  - さまざまな文字（**数字、アンダースコア、ハイフン、スペースなどを含む**）で構成できます。
  - 詳しくは、[BigQuery公式ドキュメント - テーブルの作成と使用](https://cloud.google.com/bigquery/docs/tables#table_naming)を参照ください。
- カラム名（STEP2カラム定義で指定）
  - **英字・数字・アンダースコアのみ**で構成されている必要があります。
  - 列名の先頭は英字またはアンダースコアにする必要があります。
  - スペースや特殊文字を含めることはできません。
  - 詳しくは、[BigQuery公式ドキュメント - スキーマの指定](https://cloud.google.com/bigquery/docs/schemas#column_names)を参照ください。
:::

:::(Warning) (Policy Tagの維持オプションを利用する場合の権限)

Policy Tagの維持オプションを有効にする場合、転送に利用するアカウントにPolicy Tagの作成・読み取り権限を付与する必要があります。
詳しくは、[BigQuery公式ドキュメント - BigQuery Data Policy のロール](https://docs.cloud.google.com/bigquery/docs/access-control?hl=ja#bigquery-data-policy-roles)を参照ください。

:::

### STEP2 出力オプション

| 項目 | 内容 |
| --- | --- |
| カラム設定 | 後述の[カラム設定](/docs/data-destination-bigquery#カラム設定)を参照ください。 |
| スキーマ情報をテンプレートとして参照するテーブル | BigQueryにテーブルを新規作成する際のスキーマとして、BigQuery側にすでに存在するテーブルのスキーマを流用できます。<br>この場合、転送設定STEP1で指定したデータセット配下にあるテーブル名を入力してください。|
| パーティショニング | 後述の[パーティショニング・クラスタリングの設定](/docs/data-destination-bigquery#パーティショニング・クラスタリングの設定)を参照ください。 |
| クラスタリング | 後述の[パーティショニング・クラスタリングの設定](/docs/data-destination-bigquery#パーティショニング・クラスタリングの設定)を参照ください。 |

:::(Info) (スキーマに関わる設定が適用される条件)

STEP2出力オプションの以下の設定は、**テーブルを新規作成する**場合にのみ、適用されます。

- カラム設定
- スキーマ情報をテンプレートとして参照するテーブル
- パーティショニング
- クラスタリング

具体的には、以下の状態でジョブ実行した際に適用されます。

- 転送先に対象となるテーブルが存在しない場合
- 転送モードで全件洗い替え (`REPLACE`)を選んでいる場合
  - この場合、転送のたびに転送先テーブルのスキーマが更新されるため、上記設定の内容は都度適用されます。
:::

## 補足事項

### 転送モードについて

以下の説明はいずれも、**転送先に対象となるテーブルがすでに存在する場合**の挙動となります。
転送先に対象となるテーブルが存在しない場合は、いずれのモードにおいても**テーブルを新規作成**します。

| 転送モード | スキーマ変更 | トランザクション | 挙動 | 補足 |
|----|----|----|----|----|
| 追記 (`APPEND`) | No | Yes | テーブルへの**追記**を以下の通り行います。<ol><li>一時テーブルを作成して、データを投入する</li><li>一時テーブルのデータを対象テーブルに`WRITE_APPEND`する</li></ol> | |
| 追記 (`APPEND DIRECT`) | No | **No** | テーブルの**追記**を以下の通り行います。<ol><li>データを直接対象テーブルに`WRITE_APPEND`する</li></ol>  | <li>追記 (`APPEND`)モードに比べて処理時間は短くなりますが、トランザクションは担保されません。</li><li>そのため転送が途中で失敗した場合、途中まで追加された行が対象テーブルに残ることがあります。</li> |
| 全件洗い替え (`DELETE IN ADVANCE`) | **Yes** | **No** | テーブルの**洗い替え**を以下の通り行います。<ol><li>対象テーブルを`DELETE`する</li><li>対象テーブルを新規作成して、データを投入する</li></ol>  | <li>トランザクションは担保されません。</li> |
| 全件洗い替え (`REPLACE`) | **Yes** | Yes | テーブルの**洗い替え**を以下の通り行います。<ol><li>一時テーブルを作成して、データを投入する</li><li>一時テーブルのデータを対象テーブルに`WRITE_TRUNCATE`する</li></ol>  | <li>既存テーブルのスキーマは削除され、新しいテーブルのものに更新されます。</li><li>対象テーブルが**非パーティション分割テーブル**の場合に、[パーティショニング](/docs/data-destination-bigquery#パーティショニング・クラスタリングの設定)が設定された転送設定でジョブを実行すると、ジョブエラーが発生します。</li><li>**Descriptionの維持オプション**や**Policy Tagの維持オプション**を有効にすることで、テーブル再作成時にカラムのメタデータを保持できます。</li> |
| `UPSERT (MERGE)` | No | Yes | テーブルへの**UPSERT**を以下の通り行います。<ol><li>一時テーブルを作成して、データを投入する</li><li>一時テーブルのデータを対象テーブルに`MERGE`する</li></ol> | <li>対象テーブルに対して、一時テーブルのマージキーと値が一致する行は更新され、一致しない行は挿入されます。</li> |

:::(Info) (WRITE_APPENDとWRITE_TRUNCATEの違い)

[BigQuery APIリファレンス - Job](https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfigurationquery)の`writeDisposition`フィールドを参照ください。
:::

### カラム設定

カラムに関して詳細な設定が可能です。
詳しくは、[BigQuery公式ドキュメント - スキーマの指定](https://cloud.google.com/bigquery/docs/schemas#column_names)を参照ください。

| 項目 | 内容 |
| --- | --- |
| カラム名 | 転送設定STEP2**カラム定義**の**カラム名**一覧から選択します。 |
| データ型 | カラムの[データ型](https://cloud.google.com/bigquery/docs/schemas#standard_sql_data_types)を明示的に指定したい場合に選択します。 |
| モード | カラムの[モード](https://cloud.google.com/bigquery/docs/schemas#modes)を明示的に指定したい場合に選択します。 |
| 日付フォーマット | 転送設定STEP2**カラム定義**で`timestamp`型と定義されたカラムを`STRING`型で転送したい場合に、展開時に利用する日付フォーマットを入力できます。 |
| タイムゾーン | 転送設定STEP2**カラム定義**で`timestamp`型と定義されたカラムを`STRING`型または`DATETIME`型で転送したい場合に、展開時に利用するタイムゾーンを入力できます。 |
| 説明 | カラムの[説明](https://cloud.google.com/bigquery/docs/schemas?column_descriptions)を入力できます。<br>[スキーマ情報をテンプレートとして参照するテーブル](/docs/data-destination-bigquery#step2-出力オプション)を利用した場合においても、本項目で入力した内容が優先されて反映されます。 |

### パーティショニング・クラスタリングの設定

パーティショニング・クラスタリングについて、詳しくは[パーティション分割テーブルの概要](https://cloud.google.com/bigquery/docs/partitioned-tables)・[クラスタ化テーブルの概要](https://cloud.google.com/bigquery/docs/clustered-tables)をそれぞれ参照ください。

| 項目 | 必須 |　内容 |
| --- | --- | --- |
| パーティショニング | ✓ |以下のいずれかを選択できます。<ul><li>**取り込み時間により分割**：TROCCOのジョブ実行時間に基づいてパーティションが切られます。</li><li>**フィールドにより分割**：基準となるカラムに基づいてパーティションが切られます。</li></ul>|
| パーティションフィールド | ✓ | **フィールドにより分割**を選択したときに入力します。<br>`DATE`、`TIMESTAMP`、`DATETIME`のいずれかの型の列名を入力してください。|
| パーティションタイプ | ✓ | **パーティショニング**でいずれかの分割方式を選択した場合に選択します。<br>テーブル分割の粒度を以下より選択してください。<ul><li>1時間ごと</li><li>1日ごと</li><li>1ヶ月ごと</li><li>1年ごと</li></ul> |
| クラスタリング | - | クラスタ化テーブルを作成したい場合に設定できます。<br>**クラスタ化列**にカラム名を入力することで、該当のカラムに基づいてテーブルがクラスタ化されます。<br>なお、クラスタ化列は最大で**4つ**まで指定できます。|
| パーティションの存続期間 | - | パーティションの有効期限を指定できます。<br>詳しくは、[パーティションの有効期限を設定する](https://cloud.google.com/bigquery/docs/managing-partitioned-tables#partition-expiration)を参照ください。|

:::(Warning) (パーティショニング・クラスタリング設定の適用条件)

パーティショニング・クラスタリングの設定は**テーブルの新規作成時**にのみ有効です。
出力先にすでにテーブルが存在する場合は、本設定の内容ではなく既存テーブルの設定内容でジョブが実行されます。
:::

:::(Warning) (「取り込み時間により分割」におけるパーティションの境界)

Google BigQueryの仕様上、パーティションの境界は**UTC時間**に基づきます。ご注意ください。
:::

:::(Warning) (整数範囲パーティショニング)

TROCCOでは、特定の`INTEGER`列の値に基づいてテーブルを分割する、整数範囲パーティショニングには対応していません。
:::

### 必要な権限

ご利用いただくにあたって必要な権限は以下となります。

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
