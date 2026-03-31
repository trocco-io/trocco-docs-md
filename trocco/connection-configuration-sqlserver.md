---
articleId: 123efe59-822d-421b-bd23-5a6e5c7eedf5
slug: connection-configuration-sqlserver
title: 接続情報 - Microsoft SQL Server
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Microsoft SQL Serverの接続情報を設定する際のDocsとなります。

## 入力項目

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力してください。 |
| ホスト | Yes | ホスト名またはIPアドレスを入力してください。 |
| 接続先ポート | Yes | 接続先データベースのポート番号を入力してください。<br>Microsoft SQL Serverのデフォルトポート番号は `1433` です。 |
| ユーザー | Yes | 認証のためのユーザー名を入力してください。 |
| パスワード | Yes | 認証のためのパスワードを入力してください。 |
| SSH経由で接続する | No | SSHを経由（SSHトンネルを利用）して接続されたい場合に、選択してください。<br>詳しくは、[SSHトンネルを使った接続](/docs/connection-with-ssh-tunnel)をご確認ください。  |
| SSL | Yes | 以下から選択してください。　<ul><li>SSL接続を強制する</li><li>Microsoft SQL Server側の設定に従う</li></ul>|
| JDBCドライバー | Yes | Microsoft SQL Serverサーバーに接続するJDBCドライバーのバージョンを選択してください。ドライバーによりサポートしているMicrosoft SQL Serverのバージョンが異なります。<br>詳しくは、[転送元 - RDBMSバージョン対応表](/docs/data-source-rdbms-version-mapping)を参照ください。<br>ご利用のSQL Serverのバージョンに合わせて、下記より選択できます。 <ul><li>`JDBC Driver 8.2 (Microsoft SQL Server 2012, 2014, 2016, 2017, 2019)`</li><li>`jTDS Driver 1.3.1 (Microsoft SQL Server 6.5, 7, 2000, 2005, 2008, 2012)`</li><li>`JDBC Driver 12.6 (Microsoft SQL Server 2014, 2016, 2017, 2019, 2022)`</li></ul> |
