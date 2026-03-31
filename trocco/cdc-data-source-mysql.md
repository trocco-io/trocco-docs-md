---
articleId: 4263a1a8-373a-471a-a1f4-b24bb08abc69
slug: cdc-data-source-mysql
title: CDCデータ転送 - 転送元 - MySQL
parentCategoryId: 76343439-4667-4cbc-9835-4d2212bc1b17
languageCode: ja
---
本ページでは、CDCデータ転送における転送元 - MySQLについて説明します。
接続に関する設定については、[MySQL接続情報](/docs/connection-configuration-mysql)を参照ください。

## 対応バージョン

- MySQL 8.x（推奨）
- MySQL 5.x（サポート予定・未検証）

## 利用上の注意・制約

- ビューの取得には対応していません。
- CASCADE削除による子レコードの削除はキャプチャされません。
  - 当該レコードの削除はバイナリログとして書き込まれないため、削除イベント自体を取得できません。

## 事前準備

### 必須パラメーター設定

MySQLの設定ファイル (`my.cnf`) のパラメーターを変更する必要があります。
各パラメーターの詳細については、[MySQL 8.0 リファレンスマニュアル](https://dev.mysql.com/doc/refman/8.0/ja/replication-options-binary-log.html)を参照ください。
なお、上記URLのバージョン部分をお使いのMySQLバージョンに差し替えた上でご確認ください。

:::(Warning) (設定ファイルの変更が反映されない場合は)

設定ファイルの変更が反映されない場合は、データベースを再起動してください。
:::

|パラメーター|推奨値|補足|
|---|---|---|
|`server_id`|(任意の一意な整数)|MySQL のレプリケーション機能（およびCDC）に必要な識別子です。<ul><li>オンプレミス環境の場合、明示的に指定する必要があります。</li><li>クラウド環境（Amazon RDS や Cloud SQL）の場合、自動的に一意な値が設定されているため、明示する必要はありません。</li></ul>現在の設定値は、以下のクエリで確認できます。<br>`SHOW VARIABLES LIKE 'server_id'`|
|`binlog_format`|`ROW`|本パラメーターには、必ず`ROW`を指定してください。|
|`binlog_row_image`|`FULL`|`FULL`の指定を推奨します。|
|`binlog_expire_logs_seconds`|`864000`|MySQL 8系の場合、このパラメーターを指定してください。<br>**10日**(`864000`)以上に設定することを推奨します。|
|`expire_logs_days`|`10`|MySQL 5系の場合、このパラメーターを指定してください。<br>**10日**以上に設定することを推奨します。|<br>[Amazon RDS for MySQLの場合](/docs/cdc-data-source-mysql#amazon-rds-for-mysqlの場合)は、プロシージャで設定する必要があります。|
|`log_bin`|`mysql-binlog`|お好きな文字列を指定してください。<br>`log_bin`はバイナリログを有効にするBooleanの設定ですが、プレフィックスを指定することで、出力されるファイル名を制御できます。|
|`log_slave_updates`|`1`|<ul><li>レプリカ環境の場合は、必ず`1`を指定してください。</li><li>プライマリ環境の場合は、指定しても無視されます。</li></ul>|

以下、MySQL 8系の場合の設定ファイルの例となります。

```ini
[mysqld]
server_id = 12345
binlog_format=ROW
binlog_row_image=FULL
binlog_expire_logs_seconds=864000
log_bin=mysql-binlog
log_slave_updates=1
```

### クラウドサービス特有の設定

#### Amazon RDS for MySQLの場合

- **自動バックアップ**を有効にします。
  - 詳しくは、[AWS公式ドキュメント - 自動バックアップの有効化](https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.Enabling.html)を参照ください。
- MySQL 5系の場合、`expire_logs_days`はプロシージャを使って設定する必要があります。
  ```sql
  CALL mysql.rds_set_configuration('expire_logs_days', 10);
  ```
  - 最大で`35`(日)まで指定できます。
  - 詳しくは、[AWS公式ドキュメント - MySQL 互換データベースの AWS DMSのソースとしての使用](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.AmazonManaged)を参照ください。

#### Amazon Aurora MySQLの場合

- **バイナリログの出力**を有効にします。
  - 詳しくは、[AWS公式ドキュメント - バイナリログのレプリケーションをセットアップする](https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Replication.MySQL.SettingUp.html#AuroraMySQL.Replication.MySQL.EnableBinlog)より、「1. レプリケーション出典のバイナリログ記録を有効にする」の項のAurora MySQLの欄を参照ください。
- 接続先ホスト情報を**Writer**エンドポイントにする必要があります。
  - **Reader**エンドポイントを指定した場合、接続に失敗します。

#### Cloud SQL for MySQLの場合

- **PITR** (`point-in-time recovery`) を有効にします。
  - 詳しくは、[Google Cloud公式ドキュメント](https://cloud.google.com/sql/docs/mysql/backup-recovery/pitr#enablingpitr)を参照ください。
  - なお、バイナリログの保持期間は、次のうち小さい方が適用されます。
    - `transactionLogRetentionDays`（PITR保持期間、**7日間**）
    - `binlog_expire_logs_seconds`または`expire_logs_days`

### 接続ユーザーの権限

[MySQL接続情報](/docs/connection-configuration-mysql)に利用するユーザーに対して、以下の権限を付与する必要があります。

- `SELECT`
- `RELOAD`
- `SHOW DATABASES`
- `REPLICATION CLIENT`
- `REPLICATION SLAVE`

MySQL側で以下のクエリを実行してください。
```sql
GRANT SELECT ON `<database>`.* TO '<username>'@'%';
GRANT RELOAD, SHOW DATABASES ON *.* TO '<username>'@'%';
GRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO '<username>'@'%';
```
