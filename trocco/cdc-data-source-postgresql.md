---
articleId: 3da45c85-3edd-45f5-bf4c-2d25a18b4605
slug: cdc-data-source-postgresql
title: CDCデータ転送 - 転送元 - PostgreSQL
parentCategoryId: 76343439-4667-4cbc-9835-4d2212bc1b17
languageCode: ja
---
本ページでは、CDCデータ転送における転送元 - PostgreSQLについて説明します。
接続に関する設定については、[PostgreSQL接続情報](/docs/connection-configuration-postgresql)を参照ください。

## 対応バージョン

PostgreSQLの論理レプリケーションの仕組みを利用するため、PostgreSQL 10以降が必要です。

## 用語の説明

### WAL（Write-Ahead Log）

WAL（Write-Ahead Log）は、トランザクション処理を行う前にその内容が記録されたログのことです。
TROCCOでは、PostgreSQLの論理レプリケーション機能を利用し、WALから論理デコードされた変更イベント（INSERT/UPDATE/DELETE）を受け取ることで、CDCデータ転送を実現しています。

### パブリケーション

パブリケーションは、PostgreSQLの論理レプリケーションの対象とするテーブルや操作を定義する仕組みです。

### レプリケーションスロット

レプリケーションスロットは、論理レプリケーションにおいてレプリカ側が読み取ったデータの位置を管理する仕組みです。
レプリカ側が受け取っていないWALは削除されないよう制御するなどの役割があります。

## 利用上の注意・制約

- WAL（Write-Ahead Log）の論理デコーディングの出力プラグインにはpgoutputのみ対応しています。
- 転送設定ごとに、のちに記載する手順に従いご自身でPostgreSQLのパブリケーションおよびレプリケーションスロットを作成していただく必要があります。
- サーバー側のWALはTROCCOがWALを読み取るまで保存されるため、以下を推奨します。
  - DBのストレージに余裕を持たせたり、ストレージ容量を監視する
  - データ転送を定期実行する
- ビューの取得には対応していません。
- UPDATE・INSERT・DELETE操作のみが転送対象となります。

## 事前準備

### 必須パラメーター設定

PostgreSQLの設定ファイル (`postgresql.conf`) のパラメーターを変更する必要があります。

:::(Warning) (設定ファイルの変更が反映されない場合は)

設定ファイルの変更が反映されない場合は、データベースを再起動してください。
:::

|パラメーター|説明|
|---|---|
|`wal_level`|必ず`logical`を指定してください。PostgreSQLで論理レプリケーションを利用する際に必須となります。|
|`max_wal_senders`|WALの変更を処理するプロセス数の最大値を指定します。<br>対象のWALを取得するクライアントが1つだけ（TROCCOのCDC転送設定1件のみ）の場合は、1以上の数値であれば問題ありません。|
|`max_replication_slots`|サーバーが利用できるレプリケーションスロットの最大値を指定します。<br>対象のWALを取得するクライアントが1つだけ（TROCCOのCDC転送設定1件のみ）の場合は、1以上の数値であれば問題ありません。|

### クラウドサービス特有の設定

#### Amazon RDS for PostgreSQLの場合

- コンソールから`rds.logical_replication`を1に設定します。RDSでPostgreSQLの論理レプリケーションを有効にするパラメータです。
  - 詳しくは、[Amazon RDS for PostgreSQL の論理レプリケーションの実行 - Amazon Relational Database Service](https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/UserGuide/PostgreSQL.Concepts.General.FeatureSupport.LogicalReplication.html)を参照ください。
- PostgreSQL接続情報の作成時にSSLを無効にした場合は、`rds.force_ssl`を0に設定します。
  - 詳しくは、[PostgreSQL DB インスタンスで SSL を使用する - Amazon Relational Database Service](https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/UserGuide/PostgreSQL.Concepts.General.SSL.html#PostgreSQL.Concepts.General.SSL.Requiring)を参照ください。

#### Amazon Aurora PostgreSQLの場合

- コンソールから`rds.logical_replication`を1に設定します。AuroraでPostgreSQLの論理レプリケーションを有効にするパラメータです。
  - 詳しくは、[Aurora PostgreSQL DB クラスターの論理レプリケーションの設定 - Amazon Aurora](https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Replication.Logical.Configure.html)を参照ください。
- コンソールから`rds.logical_wal_cache`を0に設定します。AuroraのWALをキャッシュする機能を無効にするパラメータです。
  - 詳しくは、[Overview of PostgreSQL logical replication with Aurora - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Replication.Logical.html)を参照ください。
- PostgreSQL接続情報の作成時にSSLを無効にした場合は、`rds.force_ssl`を0に設定します。
  - 詳しくは、[Amazon Aurora PostgreSQL でのセキュリティ - Amazon Aurora](https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Security.html)を参照ください。

#### Cloud SQL for PostgreSQLの場合

- `cloudsql.logical_decoding`フラグをonに設定します。Cloud SQLでPostgreSQLの論理レプリケーションを有効にするパラメータです。
  - 詳しくは、[論理レプリケーションとデコードを設定する - Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres/replication/configure-logical-replication?hl=ja)を参照ください。

### パブリケーション作成

PostgreSQLに`REPLICATION`権限を持つユーザーでログインし、パブリケーションを作成します。

```sql
CREATE PUBLICATION trocco_cdc FOR TABLE スキーマ名.テーブル名;
```

:::(Warning) (パブリケーションに含める対象について)

不要なWALの増大を防ぐため、パブリケーションに含める対象は、転送対象とするテーブル・カラムのみを推奨します。
パブリケーションに含まれていないテーブルやカラムのデータは転送対象外となります。

:::

### レプリケーションスロットの作成

PostgreSQLに`REPLICATION`権限を持つユーザーでログインし、レプリケーションスロットを作成します。

```sql
SELECT PG_CREATE_LOGICAL_REPLICATION_SLOT('レプリケーションスロット名', 'pgoutput');
```

:::(Warning)

CDC転送において、レプリケーションスロットは転送先ごとに用意する必要があります。
レプリケーションスロットを他の転送設定などと共有した場合、データが欠損する可能性があります。
:::

### 接続ユーザーの権限

[PostgreSQL接続情報](/docs/connection-configuration-postgresql)に利用するユーザーに対して、以下の権限を付与する必要があります。

- `USAGE`
- `SELECT`
- `REPLICATION`
- `ALTER DEFAULT PRIVILEGES`
- （Amazon RDSの場合）`rds_replication`

以下は、PostgreSQLで対象ユーザーに権限を付与するサンプルクエリです。

```sql
GRANT USAGE ON SCHEMA <schema_name> TO <username>
GRANT SELECT ON <schema_name>.<table_name> TO <username>
ALTER USER <username> WITH REPLICATION;
ALTER DEFAULT PRIVILEGES IN SCHEMA <schema_name> GRANT SELECT ON TABLES TO <username>
```

## トラブルシューティング

### WALディスク消費が増大する

パブリケーションに含まれるテーブルのトランザクション量が少ない場合、レプリケーションスロットのLSN（Log Sequence Number）が進まず、古いWALファイルがディスク上に蓄積され続ける可能性があります。
上記の場合、トランザクション量の多いテーブルをパブリケーションに追加した上で、CDC転送のスキーマ設定にて対象テーブルを転送対象から外してください。
