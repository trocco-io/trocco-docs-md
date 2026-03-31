---
articleId: dfb205d9-737b-4b32-b5e0-13cb1dbcbd9f
slug: connection-configuration-notion
title: 接続情報 - Notion
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Notionの接続情報を作成するためのDocsです。
詳しい説明などは[Notion公式APIドキュメント](https://developers.notion.com/)をご覧ください。

## 入力項目

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力します。|
| メモ | No | TROCCO内部で利用する接続情報のメモを入力できます。|
| API Key | Yes | Notionで発行したAPI Keyを入力します。<br>API Keyの発行手順について、詳しくは[Notion公式APIドキュメント](https://developers.notion.com/docs/authorization)を参照ください。 |

## 補足事項

### インテグレーション権限について

Notionでは、API Keyが紐づくインテグレーションに対して、アクセス権限を設定できます。

- コンテンツを転送する場合：「コンテンツの読み取りのみ」を推奨します。
- ユーザー情報を転送する場合：
  - メールアドレスも転送する場合：「ユーザー情報の読み取り（メールアドレスを含む）」を推奨します。
  - メールアドレスを転送しない場合：「ユーザー情報の読み取り（ユーザーのメールアドレスは除く）」を推奨します。
