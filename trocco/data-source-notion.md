---
articleId: 58cc4fcb-f010-415a-a4f0-65d5c13390e3
slug: data-source-notion
title: 転送元 - Notion
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

Notionからデータを転送する設定のDocsです。

## 制約

リクエスト制限などは、[Notion公式APIドキュメント](https://developers.notion.com/)を参照ください。
 
## 設定項目

### STEP1 基本設定

| 項目名 | 必須 |  内容 |
| --- | --- | --- |
| Notion接続情報 | Yes | あらかじめ登録してある[Notionの接続情報](/docs/connection-configuration-notion)から、今回の転送設定に必要な権限を持つものを選択します。 |
| 取得対象 | Yes | データの取得対象を選択します。<br>各エンドポイントで取得できる項目については、[Notion API Reference](https://developers.notion.com/reference/intro)を参照ください。 |
