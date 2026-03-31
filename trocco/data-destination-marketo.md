---
articleId: bfd095cc-8a9b-45c9-8859-5cec7a3df715
slug: data-destination-marketo
title: 転送先 - Adobe Marketo Engage
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
Adobe Marketo Engageのリードを追加するためにデータを転送する設定のDocsです。

## 制約
* 特になし

## 注意点
TROCCO上のカラム名とAdobe Marketo Engage側フィールドREST API名が一致している必要があります。
REST API名に関しては[公式ページ](https://developers.marketo.com/rest-api/lead-database/fields/list-of-standard-fields/)を確認してください。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Adobe Marketo Engage接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br>登録済みの接続情報がない場合、**接続情報を追加**から接続情報を作成してください。<br>接続情報に関する詳しい情報は[こちら](/docs/connection-configuration-marketo)を参照してください。 |
| ターゲット | Yes | - | 転送先でのオブジェクトのタイプを指定してください。<br>現在指定できる値はlead、opportunity、opportunity_role、custom_objectの4種類となっています。 |
| カスタムオブジェクト名 | Yes | - | ターゲットにcustom_objectを選択した場合に指定する必要があります。<br>転送するデータのカスタムオブジェクトのAPI名を入力してください。 |
| アクション | Yes | - | ターゲットにopportunity, opportunity_role、custom_objectを選択した場合に指定していただく必要があります。<br>データの作成（createOnly）、データの更新（updateOnly）、または作成と更新を同時に実行（createOrUpdate）の3種類から選択できます。 |
| ルックアップフィールド | Yes | email<br>（leadのみ） | ここで指定したカラム名がプライマリーキーとなります。ターゲットがleadの場合はデフォルト値はemailとなります。<br>ターゲットがopportunity、opportunity_role, custom_objectの時はアクションがupdateOnlyに指定されている時のみ指定が可能です。<br>dedupeFieldsを選択するとexternalOpportunityId、idFieldを選択するとmarketoGUIDが指定されます。 |
| パーティション名 | No | - | パーティションを設定している場合はここでパーティション名を指定してください。 |
| 静的リストID | No | - | 転送先の静的リストを選択したい場合はここで静的リストIDを指定してください。 |
