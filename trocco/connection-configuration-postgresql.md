---
articleId: d8231b49-ddd2-4c6f-b998-a27506070651
slug: connection-configuration-postgresql
title: 接続情報 - PostgreSQL
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
PostgreSQLの接続情報を設定する際のDocsとなります。

## 入力項目
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力してください。 |
| ホスト | Yes | ホスト名またはIPアドレスを入力してください。 |
| 接続先ポート | Yes | 接続先データベースのポート番号を入力してください。<br>PostgreSQLのデフォルトポート番号は `5432` です。 |
| ユーザー | Yes | 認証のためのユーザ名を入力してください。 |
| パスワード | Yes | 認証のためのパスワードを入力してください。 |
| SSL | Yes | SSL(TLS)通信を利用するかどうかを選択してください。<br>有効時の入力項目について、後述の**SSLを有効にした場合**を参照ください。 |
| SSH経由で接続する | No | SSHを経由（SSHトンネルを利用）して接続されたい場合に、選択してください。<br>詳しくは、[SSHトンネルを使った接続](/docs/connection-with-ssh-tunnel)をご確認ください。  |
| AWS Systems Manager Session Manager経由で接続する | No | 詳しくは、[AWS Systems Manager Session Managerを用いた接続](/docs/connection-with-aws-systems-manager-session-manager) をご確認ください。 |
| JDBCドライバー | Yes | PostgreSQLサーバーに接続するJDBCドライバーのバージョンを選択してください。<br>ご利用のPostgreSQLのバージョンに合わせて、下記より選択できます。 <ul><li>`JDBC Driver 42.7.4 (PostgreSQL 8.2以上)` ※デフォルト</li><li>`JDBC Driver 42.5.1 (PostgreSQL 8.2以上)`</li><li>`9.4 1205 JDBC 41 (PostgreSQL 8.2未満)`</li></ul> |


### SSLを有効にした場合

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| CA証明書 | No | 認証局（CA）より発行されたルート証明書を入力できます。pemファイル形式で入力してください。 |
| クライアント証明書 | No | クライアントがサーバーにアクセスするときに用いる認証用の証明書を入力できます。pemファイル形式で入力してください。 |
| クライアント秘密鍵 | No | クライアント証明書に対応する秘密鍵を入力できます。pemファイル形式で入力してください。 |
| SSLモード | No | SSL接続時における、サーバー証明書に対する検証の実施レベルを設定します。<ul><li>`デフォルト`: CA証明書の検証を行わない。</li><li>`require`: SSL接続を必須とする。</li><li>`verify-ca`: SSL接続を必須とし、またCA証明書の検証も必須とする。</li></ul> |
| SSLダイレクトネゴシエーション | No | JDBCドライバー42.7.4選択時に利用可能です。PostgreSQL DBへのPrivateLink接続でSSLタイムアウトが発生する場合に有効にしてください。<ul><li>**有効**: 接続時に直接SSLハンドシェイクを開始します。（`sslnegotiation=direct`）</li><li>**無効**: 接続時にサーバーがSSLをサポートしているかを確認します。</li></ul> |
