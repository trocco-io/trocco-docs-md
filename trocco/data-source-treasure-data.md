---
articleId: d6a760ac-8670-4d42-9173-67c5a64664ab
slug: data-source-treasure-data
title: 転送元 - Treasure Data
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Treasure Dataからデータを転送する設定のDocsです。

## 制約
* 特になし

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Treasure Data接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br>登録済みの接続情報がない場合、**接続情報を追加**から接続情報を作成してください。 |
| データベース | Yes | - | 転送したいデータのあるデータベース名を入力します。 |
| クエリ | Yes | - | 転送データを取得するためのSQLを入力します。 <br>[カスタム変数](/docs/custom-variables)を利用し、TROCCOのデータ転送時に動的に設定値を決定することも可能です。|
