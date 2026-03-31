---
articleId: b9d901f2-20c4-44f1-9fd3-9e291d145152
slug: data-source-postgresql
title: 転送元 - PostgreSQL
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
PostgreSQLからデータを転送する設定のDocsです。

## 制約
* 特になし

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| PostgreSQL接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| データベース | Yes | - | 取得したいデータが入っているデータベース名を指定します。 |
| スキーマ | Yes | public | 取得したいデータが入っているスキーマ名を指定してください。<br>**スキーマ一覧を読み込む**から一覧を読み込むことも可能です。 |
| 転送方法 | Yes | クエリを使用して転送 | **クエリを使用して転送**・**差分転送**のいずれかを選択します。<br>**差分転送**について、詳しくは[差分転送機能](/docs/incremental-data-transfer)を参照ください。 |
| クエリ | Yes | - | 転送方法で**クエリを使用して転送**を選択した場合に入力します。<br>転送データを取得するためのSQLを入力してください。|
| テーブル | Yes | - | 転送方法で**差分転送**を選択した場合に入力します。<br>転送したいデータが入っているテーブル名を入力してください。 |
| デフォルトのタイムゾーン | Yes | UTC | データ型が`date`, `timestamp`, `datetime`のカラムについて、どのタイムゾーンを用いるかを指定します。 |
 
### STEP2 詳細設定
| 項目名 | デフォルト値 | 内容 |
| --- | --- | --- |
| カーソルが一度に処理するレコード数 | 10000 | カーソルで一度に取得する行数を指定できます。 |
| 接続タイムアウト(秒) | 300 | 接続時のタイムアウトまでの時間を秒単位で指定できます。 |
| ソケットタイムアウト(秒) | 1800 | ソケットタイムアウトを秒単位で指定できます。 |


## string型への変換が必要なデータ型
一部のデータ型はembulk側で非対応となっています。
したがって、embulkで対応できるstring型に変換していただく必要があります。

:::(Warning) (非対応のデータ型を含めた場合)
非対応のデータ型のカラムを転送対象に含めた場合、プレビューおよび転送時に以下のようなエラーが発生します。
`Unsupported type interval (sqlType=1111) of 'interval_data' column.`
:::

### カラムのデータ型の変換方法
転送設定編集STEP1の「詳細を設定する」をクリックすると、**取り込みデータ型指定**が展開されます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-postgresql-2024-08-29-4-44-0.png){height="" width="500"}

後述のstring型への変換が必要なカラムについて、string型を指定してください。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-postgresql-2024-08-29-4-44-1.png){height="" width="500"}

### string型への変換が必要なデータ型一覧
以下のデータ型は、string型として取り込む必要があります。
* bit varying
* box
* bytea
* cidr
* circle
* inet
* interval
* line
* lseg
* macaddr
* macaddr8
* money
* path
* pg_lsn
* point
* polygon
* tsquery
* tsvector
* txid_snapshot
* xml
