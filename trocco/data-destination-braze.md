---
articleId: a7646d91-bb63-4420-87db-6113089aa008
slug: data-destination-braze
title: 転送先 - Braze
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
Brazeへデータを転送する設定のDocsです。

## 詳細
Brazeの[ユーザートラッキングへデータ](https://www.braze.com/docs/api/endpoints/user_data/post_user_track/)を転送する設定のDocsです。

## 制約
* 配列や連想配列のデータを送信する場合は、転送元のデータをjsonl等のフォーマットにしてください。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 | 
| --- | --- | --- | --- |
| Braze接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| オブジェクト | Yes | - | 送信対象のオブジェクトです。オブジェクトにより送信可能なデータが異なります。<br>詳細は公式ドキュメントを参照してください。<br>・[user attributes](https://www.braze.com/docs/api/objects_filters/user_attributes_object/)<br>・[events](https://www.braze.com/docs/api/objects_filters/event_object/)<br>・[purchases](https://www.braze.com/docs/api/objects_filters/purchase_object/) |
