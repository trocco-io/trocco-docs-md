---
articleId: ac6c9d2c-4558-4584-9dd1-b90ae7ab9ecc
slug: postgresql-to-bigquery-cdc
title: PostgreSQL to BigQuery転送(CDC)
parentCategoryId: 169898c2-b3f5-4615-9c4c-b7fedbddda33
languageCode: ja
---

:::(Error) (CDCデータ転送のリニューアル)

本機能はCDCデータ転送としてリニューアルされ、本転送元コネクタを用いた転送設定の新規作成はできなくなりました。
なお、既存の設定については編集およびジョブ実行が可能です。
新規にご利用を検討のお客様は、[CDCデータ転送](/docs/cdc-job-definition)をご参照ください。
:::

## 概要
PostgreSQLのWALからCDC（Change Data Capture）方式で、変更があったデータのみを識別してBigQueryへ転送できます。それにより、転送量の削減、転送の高速化が得られます。
最初の実行時には、全件転送する必要があります。その後転送においては、差分だけをCDC方式で連携します。

## PostgreSQL CDCの利用にあたり
* 転送設定ごと（CDCで転送するテーブルごと）に、手順に従いご自身でレプリケーションスロットを作成していただく必要があります。
    * 現時点ではレプリケーションスロットの自動作成・削除は対応しておりません。
    * 転送設定を削除した場合、レプリケーションスロットは自動で削除されません。必ず忘れずに削除してください。
    * レプリケーションスロットの削除を忘れた場合、WALがストレージを圧迫し、DBがクラッシュする可能性があります。

* PostgreSQL CDCを利用する場合、DBのストレージには十分な余裕を持たせてください。
    * ストレージサイズの監視をおすすめします。

## 必須条件
### PostgreSQL 対応表
|  | Master | Read Replica | サポートバージョン |
| --- | --- | --- | --- |
| Amazon Aurora PostgreSQL RDS | ○ | x | 10.6+ |
| Amazon PostgreSQL RDS | ○ | x | 9.4+ |
| Google CloudSQL PostgreSQL | x | x | | | 	 
| Heroku | x | x | | |
| PostgreSQL | ○ | x | 9.4+ |

### PostgreSQLのパラメーター設定
```
rds.logical_replication= 1 # RDS の場合のみ、設定してください。
wal_level=logical # RDS 以外の場合、設定してください。
max_replication_slots= 5　# 連携するテーブルと同じ数を設定してください。
max_wal_senders= 5　# 連携するテーブルと同じ数を設定してください。
```
※WALの設定を反映させるためにはDBの再起動が必要になる場合があります。

### Slotの作成
* 連携するテーブルごと（転送設定ごと）に別々のSlotを作成する必要があります。
    * SUPERUSERでログイン後、下記のSQLでスロットを作成してください。
※現在はwasl2jsonのみ対応しております。

```
SELECT *
FROM pg_create_logical_replication_slot('trocco_<table_name>', 'wal2json');
```

* 下記のSQLでSlotからデータが取得できるか確認できます。
```
SELECT COUNT(*)
FROM pg_logical_slot_peek_changes('<replication_slot_name>', null, null);
 ```

### 接続ユーザーの権限
* 下記の権限が必要です。

**CONNECT**
```
例：
GRANT CONNECT ON DATABASE <database_name> TO <username>;
``` 
**USAGE**
```
例：
GRANT USAGE ON SCHEMA <schema_name> TO <username>
```
**SELECT**
```
例：
GRANT SELECT ON <schema_name>.<table_name> TO <username>
``` 
**rds_replication（RDSのみ）**
```
例：
GRANT rds_replication TO <username>
```
**ALTER DEFAULT PRIVILEGES**
SELECTを付与したあとに、データベース内のすべてのスキーマにアクセスできるようにします。
```
例：
ALTER DEFAULT PRIVILEGES IN SCHEMA <schema_name> GRANT SELECT ON TABLES TO <username>
```

### 転送元テーブルのPrimary Key
* 転送元のテーブルにはPrimary Keyの設定が必要です。
    * 複数のPrimary Key（Composite Primary Key）も対応しております。

### 転送時の変換機能
PostgreSQL to BigQueryのCDCの転送では下記をサポートしております。
* カラムのドロップ
* カラムのデータ変換
* カラム名の変更

カラムのデータ変換は、BigQueryでCASTされます。なのでBigQueryのCASTのルールに従います。
詳しくは下記をご覧ください。
[https://cloud.google.com/bigquery/docs/reference/standard-sql/conversion_rules?hl=ja](https://cloud.google.com/bigquery/docs/reference/standard-sql/conversion_rules?hl=ja)

### メタデータ
* 下記のカラムが付加されてDWHに連携されます。そのため下記はカラムの名前に使用できません。

| カラム名 | 説明 |
| --- | --- |
| \_trocco_fetched_at | torcco の転送ジョブによって転送が開始された時間 |

* また、一時テーブルへのデータ連携に利用するため、下記もカラムの名前に使用できません。

| カラム名 | 説明 |
| --- | --- |
| \_trocco_deleted | 論理削除フラグ。trueの際はデータが削除されたことを意味する |
| \_trocco_seq | 転送内のWALの順序を保証する |

## 転送元PostgreSQLのSQLの対応
* INSERT
* UPDATE
* DELETE

### スキーマ変更(ALTER)時の挙動
| スキーマ変更操作 | SQL例 | スキマー追従有効時の挙動 | スキーマ追従無効時の挙動 |
| --- | --- | --- | --- |
| カラム追加 | `ALTER TABLE <table_name> ADD <column_name> <data_type>` | BigQueryにカラムが追加されます。<br>カラムの型はTROCCO側で決定したものが使われます。<br>なお、カラムにデフォルト値が設定されている場合、デフォルト値はBigQueryに反映されないため、全件転送を行ってください。 | 追加カラムはBigQueryに追加されません。<br>TROCCOの転送設定編集にて対象のカラム設定を追加することで、BigQuery側にカラムが追加されます。<br>新規カラム設定後に更新があったレコードのみ、値が取り込まれます。<br>全ての値を取り込むには全件転送を行ってください。 |
| カラム削除 | `ALTER TABLE <table_name> DROP <column_name>` | 削除されたカラムはBigQueryからは削除されません。 | スキマー追従有効時と同じ挙動 |
| カラム型変更 | `ALTER TABLE <table_name> ALTER <column_name> TYPE <data_type>` | 変更された型が型変更可能であれば、継続して転送できます。エラーとなってしまった場合には全件転送を行う必要があります。 | スキーマ追従有効時と同じ挙動 |
| カラム名変更 | `ALTER TABLE <table_name> RENAME <old_column_name> TO <new_column_name>` | 変更後のカラム名でBigQueryに新規カラムが追加されます。<br>カラム名変更後に更新されたレコードのみ、新規カラムの値が更新されます。<br>カラム名変更前のカラムの値は変更後の新規カラムには引き継がれません。全てを取り込むには全件転送を行ってください。<br>また、カラム名変更前のカラムはBigQueryから削除されません。 | 変更後のカラムはBigQuery上に追加されません。<br>変更前のカラムは、更新されたレコードについて値がNULLになります。 |

### サポートされないSQL
* 下記のSQLはWALでキャッチできないため、データがDWHに正しく転送されません。
・TRUNCATE
・DROP 
・LOAD
・RENAME
・CASCADING DELETES
・CASCADING UPDATES
・ALTER TABLE ... SET DEFAULT
すでに連携されているデータでNULLの場合はNULLのままで更新されません。

## PostgreSQLとBigQueryのスキーマの型
* データの型変換の機能において、変更が可能なデータ型においては指定した型に変換できます。
    * デフォルトでは下記の対応になっております。

| PostgreSQL データ型 | BigQuery データ型 |
| --- | --- |
| CHARACTER VARYING<br>CHARACTER<br>CIDR<br>CITEXT<br>MACADDR<br>TEXT<br>TIME WITH TIMEZONE<br>TIME WITHOUT TIMEZONE<br>UUID<br>TIME<br>INTERVAL | STRING |
| BOOLEAN | BOOLEAN |
| BIGINT<br>BIG SERIAL<br>INTEGER<br>SERIAL<br>NUMERIC<br>DECIMAL<br>SMALL INT<br>SMALL SERIAL | INTEGER |
| DOUBLE PRECISION<br>REAL<br>MONEY | FLOAT |
| DATE | DATE |
| TIMESTAMP<br>DATETIME<br>TIMESTAMP WITH TIMEZONE<br>TIMESTAMP WITHOUT TIMEZONE | TIMESTAMP |
| GEOGRAPHY<br>GEOMETRY<br>HSTORE<br>JSON<br>JSONB<br>POINT<br>TSRANGE<br>TSTZRANGE<br>BOX<br>PATH | STRING(STRUCT は現在対応しておりません。) |

## 設定の流れ
### 1. 転送設定の作成
転送元**PostgreSQL WAL**、転送先**BigQuery**を選択し転送設定を作成します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/postgresql-to-bigquery-cdc-2024-08-29-16-56-0.png){height="" width=""}

### 2. 初回の全件転送を行います
初回のみ、全件転送を行い現在のPostgreSQLのテーブルを全件BigQueryに転送します。
**新規ジョブの実行画面**にて、**全件転送を行う**にチェックを入れ、**ジョブを実行**してください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/postgresql-to-bigquery-cdc-2024-08-29-16-56-1.png){height="" width=""}

### 3. 差分転送のスケジュール設定を行います
スケジュール設定画面から、スケジュールを登録してください。
設定した頻度でジョブが起動し、差分が取り込まれます。

## 全件転送が必要な場合
下記の場合において全件転送が必要です。

* 初回の転送
* BigQuery 上で型変換のランタイムエラーが起こる
* 論理削除ではなくすべてのデータを消したい
転送されているテーブルを削除してから実行してください。
* 「転送元PostgreSQLのSQLの対応」で述べられているクエリを実行した場合
 
