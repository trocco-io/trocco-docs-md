---
articleId: 2b9c7374-68fb-4594-abdf-67a005d6255d
slug: data-source-elasticsearch
title: 転送元 - Elasticsearch
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Elasticsearchからデータを転送する設定のDocsです。

## 設定項目
### STEP1 基本設定
| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Elasticsearch接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| Index名 | Yes | - | Elasticserachのインデックス名を入力してください。 |
| Type名 | Yes | - | Elasticsearchのインデックスタイプ名を入力してください |
| クエリ | Yes | - | 転送データを取得するためのSQLを入力します。/でエスケープしてください。入力された値はquery_stringのqueryプロパティに渡されます。|
| フィールド | Yes | - | レポートに含める項目（カラム）を選択します。<br>詳細は後述を参照ください。 |
