---
articleId: bd35f5a1-8fd3-42a8-bf6a-565ffe7c17ab
slug: connection-configuration-wordpress
title: 接続情報 - WordPress
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---

本ページでは、WordPressに接続するための設定（接続情報）について説明します。
転送設定については、[転送元 - WordPress](/docs/data-source-wordpress)を参照ください。

## 認証方式

WordPress接続情報では、認証情報の登録は不要です。
公開情報のみを取得できます。

## 設定項目

WordPress接続情報の設定項目は以下のとおりです。

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 名前 | Yes | - | 接続情報の識別名を入力します。わかりやすい名前を付けることを推奨します。 |
| メモ | - | - | 接続情報の説明を入力します。この接続情報の用途などを記載できます。 |
| ホスト | Yes | - | WordPressサイトのドメイン部分を入力します。例: `www.example.com` |
