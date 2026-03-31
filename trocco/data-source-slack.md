---
articleId: 75bd233c-9b62-4691-8887-576e40a2e802
slug: data-source-slack
title: 転送元 - Slack
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Slackのデータを転送する設定のDocsです。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| Slack接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の接続設定に必要な権限を持つものを選択します。<br>接続情報の設定方法はSlackの接続設定ページをご参照ください。 |
| 取得対象 | Yes | - | データの取得対象を指定できます。<br>[Slack Web API methods](https://api.slack.com/methods)のうち、以下が選択可能です。<br>・users.list |
