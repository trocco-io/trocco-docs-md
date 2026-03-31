---
articleId: 9e8a55c5-d447-44ce-9771-f768810983c0
slug: connection-configuration-square
title: 接続情報 - Square
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、Squareに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - Square](/docs/data-source-square)を参照ください。

## 設定項目

|項目名|必須|説明|
|---|---|---|
|アクセストークン|✓|Square APIのアクセストークンを入力します。<br>アクセストークンの取得方法について、詳しくは[Access Tokens and Other Square Credentials](https://developer.squareup.com/docs/build-basics/access-tokens)を参照ください。|

## Square側で必要な作業

### アクセストークンの取得

[Square Developer Portal](https://developer.squareup.com/)にログインし、アプリを作成します。
アプリ作成時に表示される`What will you build first?`・`Find your audience`では、どのように選択しても問題ありません。

なおアプリを作成すると、アクセストークンも作成されます。
`Credentials` > `Production`タブに表示されているAccess Tokenをご利用ください。

アクセストークンについて、詳しくは[Access Tokens and Other Square Credentials](https://developer.squareup.com/docs/build-basics/access-tokens)を参照ください。

