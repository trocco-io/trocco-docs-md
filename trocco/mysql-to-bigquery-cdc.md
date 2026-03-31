---
articleId: 99b874f6-6729-46ab-a530-154a40e1c1ac
slug: mysql-to-bigquery-cdc
title: MySQL to BigQuery転送(CDC)
parentCategoryId: 169898c2-b3f5-4615-9c4c-b7fedbddda33
languageCode: ja
---

:::(Error) (CDCデータ転送のリニューアル)

本機能はCDCデータ転送としてリニューアルされました。
新規にご利用を検討のお客様は、[CDCデータ転送](/docs/cdc-job-definition)をご参照ください。
:::

## 概要
MySQLのbinlogからCDC（Change Data Capture）方式で、変更があったデータのみを識別してBigQueryへ転送できます。
それにより、転送量の削減、転送の高速化が得られます。
最初の実行時には、全件転送する必要があります。その後転送においては、差分だけをCDC方式で連携します。

## 必須条件
### MySQL 対応表
| | Master | Read Replica | サポートバージョン |
| --- | --- | --- | --- |
| Amazon Aurora MySQL RDS | ○ | x | 5.6.2+ |
| Amazon MySQL RDS | ○ | ○ | 5.6.2+ |
| Google CloudSQL MySQL | ○ | x | 5.6.2+ |
| MariaDB | ○ | ○ | 5.6.2+ |
| MySQL | ○ | ○ | 5.6.2+ |
 

### MySQLのパラメーター設定
```
[mysqld]
binlog_format=ROW
binlog_row_image=FULL
expire_logs_days=7
binlog_expire_logs_seconds=604800
log_bin=mysql-binlog
log_slave_updates=1
```
補足説明は以下となります。
* binlogの設定を反映させるためにはDBの再起動が必要になる場合があります。
* カラム：`binlog_expire_logs_seconds`
MySQL 8.0.1 以降は指定してください。
7日間を指定しておりますが、短くもできます。
毎回の転送する頻度よりも十分に長くなければいけません。
* カラム：`expire_logs_days`
MySQL 8.0.0 以下の場合設定してください。
7日間を指定しておりますが、短くもできます。
毎回の転送する頻度よりも十分に長くなければいけません。
* カラム：`log_bin`
自由に変更していただいて大丈夫です。
* カラム：`log_slave_updates`
Read Replicaからbinlogを取得する際に設定してください。

* RDS MySQL
`expire_logs_days`は`mysql.rds_set_configuration`プロシージャを使い設定してください。
参考：[https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/UserGuide/USER_LogAccess.Concepts.MySQL.html](https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/UserGuide/USER_LogAccess.Concepts.MySQL.html)
* Cloud SQL
`point-in-time recovery`を有効にしてください。
参考：[https://cloud.google.com/sql/docs/mysql/backup-recovery/backups?authuser=2#tips-pitr](https://cloud.google.com/sql/docs/mysql/backup-recovery/backups?authuser=2#tips-pitr)

### 接続ユーザーの権限
下記の3つ権限が必要です。

#### SELECT
* データを取得
* テーブルのスキーマ情報参照

例:
```
GRANT SELECT ON `<database_name>`.`<table_name>` to `<username>``@'%'`;
```

#### REPLICATION CLIENT、REPLICATION SLAVE
例:
```
GRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO `<username>`@'%';
 ```
 
### 転送元テーブルのPrimary Key
転送元のテーブルにはPrimary Keyの設定が必要です。
複数のPrimary Key(Composite Primary Key) も対応しております。

### 転送時の変換機能
MySQL to BigQueryのCDCの転送では下記をサポートしております。
* カラムのドロップ
* カラムのデータ変換
* カラム名の変更
 
カラムのデータ変換は、BigQueryでCASTされます。なのでBigQueryのCASTのルールに従います。
詳しくは下記をご覧ください。
[https://cloud.google.com/bigquery/docs/reference/standard-sql/conversion_rules?hl=ja](https://cloud.google.com/bigquery/docs/reference/standard-sql/conversion_rules?hl=ja)

### メタデータ
`_trocco_fetched_at`というカラムが付加されてDWHに連携されます。
本カラムは、TROCCOの転送ジョブによって転送が開始された時間を値として持ちます。
本カラムが追加される都合上、`_trocco_fetched_at`という文字列をカラム名に使用できません。

## 転送元MySQLのSQLの対応
* INSERT
* UPDATE
* DELETE
    * デリートされたデータはDWH側では論理削除となります。

### 制限があるSQL
* `ALTER TABLE ... RENAME COLUMN old_col_name TO new_col_name`
スキーマ追従を有効にした場合、変更後の名前でデータ連携されます。
すでに連携されているカラムは、削除されず、値はNULLが入ります。
* `ALTER TABLE ... ADD col_name date_type`
スキーマ追従を有効にした場合のみ、自動で転送されます。
カラム追加時は、管理画面で設定してからMySQLのカラムを追加してください。
カラム追加後すでに連携されている場合は、データの抜けが発生する場合があります。
* `ALTER TABLE ... DROP col_name`
DWHに連携されたデータは削除されず、削除以降は、NULLが入ります。
* `ALTER TABLE ... MODIFY col_name column_definition`
変更された型が型変更可能であれば、継続して転送できます。
エラーとなってしまった場合には全件転送を行う必要があります。
 
### サポートされないSQL
下記のSQLはbinlogでキャッチできないため、データがDWHに正しく転送されません。

* TRUNCATE
* DROP 
* LOAD
* RENAME
* CASCADING DELETES
* CASCADING UPDATES
* ALTER TABLE ... SET DEFAULT
すでに連携されているデータでNULLの場合はNULLのままで更新されません。
 
## MySQLとBigQueryのスキーマの型
データの型変換の機能において、変更が可能なデータ型においてはご指定した型に変換できます。
デフォルトでは下記の対応になっております。バイナリーデータは16進数に変換されて、STRINGとして扱われます。

| MySQL データ型 | BigQuery データ型 |
| --- | --- |
| BINARY<br>BLOB<br>LONGBLOB<br>MEDIUMBLOB<br>TINYBLOB<br>VARBINARY<br>CHAR<br>ENUM<br>LONGTEXT<br>MEDIUMTEXT<br>SET<br>TIME<br>TINYTEXT<br>VARCHAR | STRING |
| BIT<br>TINYINT | BOOLEAN |
| BIGINT<br>INT<br>MEDIUMINT<br>SMALLINT<br>YEAR | INTEGER |
| DECIMAL<br>NUMERIC<br>DOUBLE<br>FLOAT | FLOAT |
| DATE | DATE |
| TIMESTAMP<br>DATETIME | TIMESTAMP |
| GEOMETRY<br>GEOMETRYCOLLECTION<br>JSON<br>LINESTRING<br>MULTILINESTRING<br>MULTIPOINT<br>MULTIPOLYGON<br>POINT<br>POLYGON | STRING（STRUCT は現在対応しておりません。） |
| CURVE<br>MULTICURVE<br>MULTISURFACE | SURFACE	サポートしておりません。 |

## 設定の流れ
### 1. 転送設定の作成
転送元**MySQL binlog**、転送先**BigQuery**を選択し転送設定を作成します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/mysql-to-bigquery-cdc-2024-08-29-16-38-0.png){height="" width=""}

※「STEP2 データプレビュー・詳細設定」において、「BigQueryカラムの設定を保存」を必ず押して設定を保存してください。

### 2. 初回の全件転送
初回のみ、全件転送を行い現在のMySQLのテーブルを全件BigQueryに転送します。
**新規ジョブの実行画面**にて、**全件転送を行う**にチェックを入れ、**ジョブを実行**してください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/mysql-to-bigquery-cdc-2024-08-29-16-38-1.png){height="" width=""}

### 3. 差分転送のスケジュール設定
スケジュール設定画面から、スケジュールを登録してください。
設定した頻度でジョブが起動し、差分が取り込まれます。

## 全件転送が必要な場合
下記の場合において全件転送が必要です。

* 初回の転送
* BigQuery上で型変換のランタイムエラーが起こる。
* 論理削除ではなくすべてのデータを消したい。
転送されているテーブルを削除してから実行してください。
* 「転送元MySQLのSQLの対応」で述べられているクエリを実行した場合

## テクニカルオーバービュー 
CDCの技術面での概要です。
target tableは、最終的にデータを入れるテーブルです。

1. TROCCOがMySQLのbinlogを読み取り、設定されたテーブルのbinlogをBQ上に転送します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/mysql-to-bigquery-cdc-2024-08-29-16-38-2.png){height="" width=""}

2. binlogのデータだと、重複があるので、それぞれのレコードの最新のレコードの集合を作成します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/mysql-to-bigquery-cdc-2024-08-29-16-38-3.png){height="" width=""}

3. 2で作ったテーブルとすでに連携されているテーブルをマージします。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/mysql-to-bigquery-cdc-2024-08-29-16-38-4.png){height="" width=""}

4. 3でマージしたテーブルを、target tableに置き換えます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/mysql-to-bigquery-cdc-2024-08-29-16-38-5.png){height="" width=""}
