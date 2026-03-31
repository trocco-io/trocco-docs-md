---
articleId: f91988de-61ca-4ee2-b0ca-5e2dad17d6c9
slug: connection-configuration-oracle-database
title: 接続情報 - Oracle Database
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Oracle Databaseの接続情報を作成するためのDocsです。

## 入力項目
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | ✓ | TROCCO内部で利用する接続情報の名前を入力します。|
| メモ | - | TROCCO内部で利用する接続情報のメモを入力できます。|
| ユーザー | ✓ | 認証のためのユーザー名を入力します。|
| パスワード | ✓ | 認証のためのパスワードを入力します。|
| 接続方法 | ✓ | 「ホスト名・ポート番号を指定する」「`tnsnames.ora`ファイルを使用する」から選択します。<br>詳しくは[接続方法](/docs/connection-configuration-oracle-database#接続方法)を参照ください。|
| CA証明書 | - | 認証局（CA）より発行されたルート証明書を入力できます。`pem`ファイル形式で入力してください。<br>TCPSプロトコルを使用してセキュアに接続を行う場合は、CA証明書を入力してください。|
| SSHオプション | - | SSHを経由（SSHトンネルを利用）して接続する場合に選択します。<br>詳しくは[SSHトンネルを使った接続](/docs/connection-with-ssh-tunnel)を参照ください。|
| OJDBCドライバー | - | 接続するデータベースに対応するバージョンを選択します。<br>JDBCドライバーの対応バージョンについては[転送元 - RDBMSバージョン対応表](/docs/data-source-rdbms-version-mapping)を参照ください。|


### 接続方法
#### 「ホスト名・ポート番号を指定する」を選択した場合の入力項目
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| ホスト | ✓ | 接続するデータベースのホストを入力します。|
| 接続先ポート | ✓ | 接続するデータベースのポートを入力します。|
| SSL通信 | - | SSL通信の有効・無効を選択できます。|
| ウォレットファイル | - | Oracle Autonomous Databaseを利用する場合は、ウォレットファイル(`cwallet.sso`)をアップロードしてください。<br>ウォレットファイルを利用する場合、OJDBCドライバー は `19c-ojdbc8.jar` を指定してください。|

#### 「`tnsnames.ora`ファイルを使用する」を選択した場合の入力項目
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| `ora`ファイル | ✓ | `tnsnames.ora`ファイルを入力します。詳しくは[公式ドキュメント](https://docs.oracle.com/en/database/oracle/oracle-database/21/ntcli/specifying-connection-by-configuring-tnsnames.ora-file.html)を参照ください。|
| ウォレットファイル | - | Oracle Autonomous Databaseを利用する場合は、ウォレットファイル(`cwallet.sso`)をアップロードしてください。<br>ウォレットファイルを利用する場合、OJDBCドライバー は `19c-ojdbc8.jar` を指定してください。|