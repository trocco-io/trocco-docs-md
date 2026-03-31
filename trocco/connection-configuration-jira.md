---
articleId: a51a6802-b54e-480d-8ad3-cf4f57006166
slug: connection-configuration-jira
title: 接続情報 - JIRA
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
JIRAの接続情報を設定する際のDocsとなります。

## 入力項目

|項目名|必須|内容|
|:----|:----|:----|
|名前|Yes|TROCCO内部で利用する接続情報の名前を入力してください。|
|メモ|No|TROCCO内部で利用する接続情報のメモを入力してください。|
|メールアドレス|Yes|Atlassianアカウントのメールアドレスを入力してください。|
|API Key|Yes|AtlassianアカウントのAPIトークンを入力してください。<br>API Keyの取得方法は[公式ドキュメント](https://ja.confluence.atlassian.com/cloud/api-tokens-938839638.html)をご参照ください。|
|URI|Yes|JIRA APIのエンドポイントを入力してください。<br>例: https://xxxxx.atlassian.net<br>インスタンスのホストとポートを使用することもできます。<br>例: http://host:port|
