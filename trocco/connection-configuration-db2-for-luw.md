---
articleId: 601f740b-34ce-487b-9677-3c69a9d5a4d9
slug: connection-configuration-db2-for-luw
title: 接続情報 - Db2 for LUW
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Db2 for LUW (Linux, UNIX, Windows)の接続情報を作成するためのDocsとなります。

## 入力項目

### 基本設定

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力してください。 |
| ホスト | Yes | ホスト名またはIPアドレスを入力してください。 |
| 接続先ポート | Yes | 接続先データベースのポート番号を入力してください。<br>Db2 for LUWのデフォルトポート番号は `50000` です。 |
| ユーザー | Yes | 認証のためのユーザ名を入力してください。 |
| パスワード | Yes | 認証のためのパスワードを入力してください。 |
| SSL | Yes | SSL(TLS)通信を利用するかどうかを選択してください。 |
| 接続タイプ | No | SSHを経由（SSHトンネルを利用）して接続する場合に、**SSH経由で接続**を選択してください。<br>詳しくは、[SSHトンネルを使った接続](/docs/connection-with-ssh-tunnel)を参照ください。  |
| JDBCドライバー | Yes | お使いのDb2のバージョンに合わせて選択してください。<br>以下のバージョンから選択可能です。<ul><li>11.5.4</li></ul> |

### SSLを有効にした場合

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| SSLServerCertificate | No | 自己署名サーバー証明書または認証局 (CA) 証明書を入力できます。pemファイル形式で入力してください。参考：[SSLServerCertificate CLI/ODBC 構成キーワード](https://www.ibm.com/docs/ja/db2/12.1.0?topic=cck-sslservercertificate)|
