---
articleId: 84f9c2bc-89d8-48de-a7b8-4399542c9795
slug: data-source-shopify
title: 転送元 - Shopify (廃止予定)
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
:::(Error) (REST APIを利用したコネクターの提供終了)

Shopify REST APIがレガシーとなったことを受けて、新たなコネクター（GraphQL版）の提供を開始しました。
上記を踏まえて、将来的に本コネクター（REST API版）の提供を終了する予定です。

2025年06月現在、本コネクター（REST API版）の提供終了日に関しては未定となっておりますが、今後は[転送元 - Shopify](/docs/data-source-shopify-graphql)（GraphQL版）の利用を検討ください。
:::

## 概要
Shopifyのデータを転送する設定のDocsです。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Shopify接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。登録済みの接続情報がない場合、**接続情報を追加**から接続情報を作成してください。<br>接続情報にはShopifyの管理画面より[カスタムアプリ](https://help.shopify.com/ja/manual/apps/custom-apps)を作成しアクセストークンを生成していただくか、[プライベートアプリ(非推奨)](https://help.shopify.com/ja/manual/apps/private-apps)を作成しAPIキーとパスワードを生成していただく必要があります。商品管理、注文管理、顧客管理のそれぞれについて**読み取りアクセス**の権限を付与していただきますよう、お願いいたします。 |
| ターゲット | Yes | - | 取得対象のデータタイプを以下から選択します。<ul><li>`order`（注文）</li><li>`customer`（顧客）</li><li>`product`（商品）</li><li>`metafield`（メタフィールド）</li><li>`transaction`（トランザクション）</li><li>`collection`（コレクション）</li></ul>　※メタフィールドまたはトランザクション、コレクションを選択される場合はShopify接続情報でカスタムアプリを利用した接続情報を利用する必要があります。また、メタフィールド、トランザクションのプレビュー画面ではダミーデータを元にした結果が表示されます。<br>具体的に取得できる項目につきましては以下referenceをご参照ください。<br>[https://shopify.dev/docs/admin-api/rest/reference/](https://shopify.dev/docs/admin-api/rest/reference/)<br> |
| オーナータイプ | Yes | - | ターゲットに`metafield`を指定した場合に入力します。<br>メタフィールドが紐づくownerの種別（注文・顧客・商品）を選択します。|
| 作成日 | No | - | ターゲットに`order`・`customer`・`product`のいずれかを指定した場合に入力できます。<br>検索対象となるデータの作成日について開始日と終了日を入力します。<br>フォーマットは`%Y-%m-%dT%H:%M:%S%z`となります。 |
| 更新日 | No |  - | ターゲットに`order`・`customer`・`product`のいずれかを指定した場合に入力できます。<br>検索対象となるデータの更新日について開始日と終了日を入力します。<br>フォーマットは`%Y-%m-%dT%H:%M:%S%z`となります。 |
| 注文ステータス | Yes | -  | ターゲットに`order`を指定した場合に入力します。<br>注文ステータスを指定します。各項目の説明については[REST Admin API - Order](https://shopify.dev/docs/api/admin-rest/2024-07/resources/order#get-orders?status=any)の`status`を参照ください。 |
| 財務ステータス | Yes | -  | ターゲットに`order`を指定した場合に入力します。<br>財務ステータスを指定します。各項目の説明については[REST Admin API - Order](https://shopify.dev/docs/api/admin-rest/2024-07/resources/order#get-orders?status=any)の`financial_status`を参照ください。 |
| フルフィルメントステータス | Yes | -  | ターゲットに`order`を指定した場合に入力します。<br>フルフィルメントステータスを指定します。各項目の説明については[REST Admin API - Order](https://shopify.dev/docs/api/admin-rest/2024-07/resources/order#get-orders?status=any)の`fulfillment_status`を参照ください。 |
| 公開日 | No  | -  | ターゲットに`product`を指定した場合に入力できます。<br>検索対象となるデータの公開日について開始日と終了日を入力します。<br>フォーマットは`%Y-%m-%dT%H:%M:%S%z`となります。 |
| 商品ステータス | No  | -  | ターゲットに`product`を指定した場合に入力できます。<br>商品ステータスを指定します。各項目の説明については[REST Admin API - Product](https://shopify.dev/docs/api/admin-rest/2024-07/resources/product#get-products?ids=632910392,921728736)の`status`を参照ください。 |
| 公開ステータス | No  | -  | ターゲットに`product`を指定した場合に入力できます。<br>公開ステータスを指定します。各項目の説明については[REST Admin API - Product](https://shopify.dev/docs/api/admin-rest/2024-07/resources/product#get-products?ids=632910392,921728736)の`published_status`を参照ください。 |

## 取得できるデータについて

### メタフィールド

ターゲットに`metafield`（メタフィールド）を選択した場合、取得できるデータのカラムは以下の表のものとなります。

| カラム | 型 | 説明 |
|---|---|---|
|id|long|Iadmin_graphql_api_idの数値部|
|admin_graphql_api_id|string|ID（GraphQL用）|
|namespace|string|メタフィールドのグループ化を行うための名前空間|
|key|string|namespace毎に一意となるメタフィールドの識別子|
|value|string|メタフィールドの値|
|description|string|備考|
|owner_type|string|オーナータイプ<br>メタフィールドが紐付いているオブジェクトの種別（order / customer / product）|
|type|string|valueのデータタイプ（[Metafield types](https://shopify.dev/apps/metafields/types)）|
|legacy_resource_id|long|ID（REST API用）|
|created_at|timestamp|作成日時|
|updated_at|timestamp|更新日時|
|owner_id|long|admin_graphql_api_owner_idの数値部|
|admin_graphql_api_owner_id|string|メタフィールドが紐付いているオブジェクトのID（GraphQL用）|

各カラムの詳細について、詳しくは[GraphQL Admin API - Metafield](https://shopify.dev/api/admin-graphql/2024-07/objects/Metafield)を参照ください。

### トランザクション

ターゲットに`transaction`（トランザクション）を選択した場合、取得できるデータのカラムは以下の表のものとなります。

| カラム | 型 | 説明 |
|---|---|---|
|account_number|string|前12桁をマスキングされた決済に関連するアカウント番号|
|amount_set_presentment_money_amount|double|顧客表示金額|
|amount_set_presentment_money_currency_code|string|顧客表示通貨|
|amount_set_shop_money_amount|double|ショップ決済金額|
|amount_set_shop_money_currency_code|string|ショップ決済通貨|
|authorization_code|string|認証コード|
|authorization_expires_at|timestamp|認証の有効期限（Shopify Plusプランのみ利用可能）|
|created_at|timestamp|作成日時|
|error_code|string|エラーコード|
|fees|json|手数料|
|formatted_gateway|string|決済ゲートウェイ（フォーマット済み表記）|
|gateway|string|決済ゲートウェイ|
|id|long|ID（REST API用）|
|admin_api_graphql_id|string|ID（GraphQL用）|
|kind|string|決済種別|
|manually_capturable|boolean|手動キャプチャ可否|
|maximum_refundable_v2_amount|double|返金可能な金額|
|maximum_refundable_v2_currency_code|string|返金可能な通貨|
|multi_capturable|boolean|複数回キャプチャ可否|
|order_id|long|トランザクションが紐づく注文のID（REST API用）|
|admin_api_graphql_order_id|string|トランザクションが紐づく注文のID（GraphQL用）|
|parent_transaction_id|long|親トランザクションのID（REST API用）|
|admin_api_graphql_parent_transaction_id|string|親トランザクションのID（GraphQL用）|
|payment_icon_alt_text|string|決済会社|
|processed_at|timestamp|処理日時|
|receipt|json|領収書|
|settlement_currency|string|決済通貨|
|settlement_currency_rate|double|決済レート|
|shopify_payment_set_extended_authorization_expires_at|timestamp|延長オーソリ期間の期限|
|shopify_payment_set_standard_authorization_expires_at|timestamp|オーソリ期間の期限|
|status|string|決済ステータス|
|test|boolean|テスト決済フラグ|
|total_unsettled_set_presentment_money_amount|double|顧客表示金額でキャプチャ可能な金額|
|total_unsettled_set_presentment_money_currency_code|string|顧客表示通貨でキャプチャ可能な通貨|
|total_unsettled_set_shop_money_amount|double|ショップ決済金額でキャプチャ可能な金額|
|total_unsettled_set_sho_money_currency_code|string|ショップ決済通貨でキャプチャ可能な通貨|

各カラムの詳細について、詳しくは[GraphQL Admin API - OrderTransaction](https://shopify.dev/docs/api/admin-graphql/2024-07/objects/OrderTransaction)を参照ください。

### コレクション

ターゲットに`collection`（コレクション）を選択した場合、取得できるデータのカラムは以下の表のものとなります。

| カラム | 型 | 説明 |
|---|---|---|
|description|string|備考|
|description_html|string|備考（HTML）|
|handle|string|コレクションごとに一意となる文字列|
|id|string|ID（GRAPHQL API用）|
|legacy_resource_id|string|ID（REST API用）|
|products_count|long|コレクションに含まれるプロダクションの数|
|sort_order|string|コレクションに含まれるプロダクションの並び順|
|template_suffix|string|Liquidtemplateに用いられるコレクションのサフィックス|
|title|string|コレクション名|
|updated_at|timestamp|更新日時|

各カラムの詳細について、詳しくは[GraphQL Admin API - Collection](https://shopify.dev/docs/api/admin-graphql/2024-07/objects/Collection)を参照ください。
