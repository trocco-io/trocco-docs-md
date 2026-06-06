---
articleId: a3227cb5-d812-4f20-9f35-3412dca45b6b
slug: connection-configuration-confluence
title: 接続情報 - Confluence
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Confluenceの接続情報を設定する際のDocsとなります。

## 入力項目

|項目名|必須|内容|
|----|----|----|
|名前|Yes|TROCCO内部で利用する接続情報の名前を入力してください。|
|メモ|No|TROCCO内部で利用する接続情報のメモを入力してください。|
|Atlassianアカウントメール|Yes|Atlassianアカウントのメールアドレスを入力してください。|
|APIトークン|Yes|AtlassianアカウントのAPIトークンを入力してください。<br>APIトークンの取得方法は[公式ドキュメント](https://ja.confluence.atlassian.com/cloud/api-tokens-938839638.html)をご参照ください。|
|ホスト|Yes|Confluenceのエンドポイントを入力してください。<br>https://xxxxx.atlassian.netのxxxxxの部分を入力してください。|

## Confluence側での権限付与

取得できるデータは、認証に使用したアカウントでアクセスできる情報に限定されます。
必要なデータにアクセスできない場合は、Confluenceの管理者に連絡して、適切な権限を付与してもらってください。