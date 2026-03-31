---
articleId: 427d0911-0701-42af-bc73-da5768382973
slug: connection-configuration-azure-synapse-analytics
title: 接続情報 - Azure Synapse Analytics
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
Azure Synapse Analyticsの接続情報を設定する際のDocsとなります。

## 入力項目
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力してください。 |
| ホスト | Yes | ホスト名（SQLプールのサーバー名）を入力してください。 |
| 接続先ポート | Yes | 接続先データベースのポート番号を入力してください。<br>Azure Synapse Analyticsのデフォルトポート番号は `1433` です。 |
| ユーザー | Yes | 認証のためのユーザー名を入力してください。 |
| パスワード | Yes | 認証のためのパスワードを入力してください。 |
| SSH経由で接続する | No | SSHを経由（SSHトンネルを利用）して接続したい場合に、選択してください。<br>詳しくは、[SSHトンネルを使った接続](/docs/connection-with-ssh-tunnel)をご確認ください。  |
