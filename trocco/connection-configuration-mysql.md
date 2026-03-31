---
articleId: 52d914eb-9a83-4cda-afb1-082187be555f
slug: connection-configuration-mysql
title: 接続情報 - MySQL
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
MySQLの接続情報を設定する際のDocsとなります。

## 入力項目
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力してください。 |
| ホスト | Yes | ホスト名またはIPアドレスを入力してください。 |
| 接続先ポート | Yes | 接続先データベースのポート番号を入力してください。<br>MySQLのデフォルトポート番号は `3306` です。 |
| ユーザー | Yes | 認証のためのユーザー名を入力してください。 |
| パスワード | Yes | 認証のためのパスワードを入力してください。 |
| SSL | Yes | SSL(TLS)通信を利用するかどうかを選択してください。<br>認証プラグインが`caching_sha2_password`である場合は必須になります。<br>有効時の入力項目について、後述の**SSLを有効にした場合**を参照ください。 |
| SSH経由で接続する | No | SSHを経由（SSHトンネルを利用）して接続されたい場合に、選択してください。<br>詳しくは、[SSHトンネルを使った接続](/docs/connection-with-ssh-tunnel)をご確認ください。  |
| AWS Systems Manager Session Manager経由で接続する | No | 詳しくは、[AWS Systems Manager Session Managerを用いた接続](/docs/connection-with-aws-systems-manager-session-manager) をご確認ください。 |
| JDBCドライバー | No | MySQLサーバーに接続するJDBCドライバーのバージョンを選択してください。<br>ご利用のMySQLのバージョンに合わせて、下記より選択できます。 <ul><li>`5.1.49`</li></ul>なお、MySQL binlog (CDC)をご利用の際は、本項目で選択された内容は無視され、8系のJDBCドライバーが利用されます。 |


### SSLを有効にした場合

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| CA証明書 | No | 認証局（CA）より発行されたルート証明書を入力できます。pemファイル形式で入力してください。 |
| 証明書 (CRTファイル) | No | クライアントがサーバーにアクセスするときに用いる認証用の証明書を入力できます。 |
| 鍵 (KEYファイル) | No | クライアント証明書に対応する秘密鍵を入力できます。pemファイル形式で入力してください。 |
