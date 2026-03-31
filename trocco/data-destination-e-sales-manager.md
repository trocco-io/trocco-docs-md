---
articleId: 25c2b834-13a1-4592-844f-2e7d47caf858
slug: data-destination-e-sales-manager
title: 転送先 - eセールスマネージャー
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
eセールスマネージャーへデータを転送する設定のDocsです。

## 制約
なし。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| eセールスマネージャー接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| エンティティ名 | Yes | - | 生成するデータのエンティティを指定してください。指定できる値は[公式ページ](https://www.e-sales-support.jp/euf/assets/esales_res/html/restapi/entity.html)を参照してください。 |
| カラム | Yes | - | カラム名とタイプを指定してください。 |
| 転送モード | Yes | insert | 新規追加する場合はinsert、データを更新する場合はupdateを指定してください。 |
