---
articleId: 1142eefa-58d6-494c-8c11-da9e4af901bb
slug: data-source-shopify-graphql
title: 転送元 - Shopify
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

Shopifyのデータを転送する設定のDocsです。

:::(Warning) (REST Admin APIからのマイグレーション)

Shopify REST Admin APIは、2024年10月1日をもってレガシーAPIとなりました。
これに伴い、転送元Shopifyのデータ抽出方法は、[Shopify GraphQL API](https://shopify.dev/docs/api/admin-graphql)を用いる方法へと移行します。
データ抽出方法の変更により、以下の変更が生じます。

- 取得されるデータのカラム名の変更
- 新たに取得されるデータの追加

REST Admin APIを利用したコネクター（転送元Shopify（廃止予定））時点から取得できた取得項目に関してのカラム名の変更については、Shopify公式ドキュメントを参照ください。
下記のRest Admin APIのドキュメントのPropertiesでは、GraphQL Admin APIでのパラメーター名が対応する形で説明されています。

- [order](https://shopify.dev/docs/api/admin-rest/2026-04/resources/order)
- [customer](https://shopify.dev/docs/api/admin-rest/2026-04/resources/customer)
- [product](https://shopify.dev/docs/api/admin-rest/2026-04/resources/product)
:::

## 制約

:::(Warning) (複数ジョブの同時実行について)
データの転送には、GraphQL Admin APIのBulk operationで取得するターゲットと、GraphQLクエリで取得するターゲットが存在します。(対象は [ターゲット一覧](/docs/data-source-shopify-graphql#ターゲット一覧) を参照)
ShopifyのBulk operationの仕様として、１つのカスタムアプリにつき複数のoperationを同時に実行できません。このため、Bulk operationで取得するターゲットについてはTROCCO上でも複数のジョブの並列実行を保証していません。
複数のジョブを並列実行したい場合、接続情報ごとに異なるカスタムアプリをご利用ください。
:::

:::(Warning) (プレビュー時の注意事項)

一部ターゲットを選択した際に、転送設定STEP2のプレビュー画面にダミーデータを元にした結果が表示されることがあります。
:::

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| Shopify接続情報 | ✓ | あらかじめ登録してある[Shopify接続情報](/docs/connection-configuration-shopify-graphql)から、今回の転送設定に必要な権限を持つものを選択します。|
| ターゲット | ✓ |取得対象を選択します。<br>取得できる項目については、[ターゲット一覧](/docs/data-source-shopify-graphql#ターゲット一覧)を参照ください。|

#### ターゲット一覧

ターゲットに選択できる項目は以下のとおりです。各ターゲットで取得できる値の詳細は[Shopify GraphQL API](https://shopify.dev/docs/api/admin-graphql)を参照ください。

- Bulk operationで取得
  - abandoned_checkouts
  - collections
  - customers
  - disputes
  - draft_orders
  - fulfillments
  - fulfillment_orders
  - inventory_item_country_harmonized_system_codes
  - inventory_items
  - locations
  - metafields
  - orders
  - order_agreements
  - order_line_items
  - order_refunds
  - order_risks
  - order_transactions
  - products
  - product_variants
- GraphQLクエリで取得
  - fulfillment_line_items
  - refund_line_items

:::(Warning) (GraphQLクエリで取得するターゲットについて)
一部のターゲットは、ShopifyのBulk operationの制約により、GraphQLクエリで取得します。
Bulk operationによる一括取得と比較して処理時間が長くなる可能性があるため、フィルター条件を指定してデータを出来るだけ少なく絞り込むことを推奨します。
また、取得元のデータが非常に大きい場合、取得ができない可能性があります。詳細は[公式ドキュメント](https://shopify.dev/docs/api/usage/pagination-graphql#search-performance-considerations)を参照ください。
:::

#### フィルター条件

選択したターゲットによっては、取得するデータをフィルタリングできます。

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 作成日時 | - |`created_at`カラムの値を基準に、取得するデータの範囲を指定できます。|
| 更新日時 | - |`updated_at`カラムの値を基準に、取得するデータの範囲を指定できます。|
| 注文日時 | - |`processed_at`カラムの値を基準に、取得するデータの範囲を指定できます。|

**ターゲットにordersを指定した場合**

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 注文ステータス | - | 入力できる値については、[GraphQL Admin API - Order](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/orders)の`status`を参照ください。 |
| 財務ステータス | - | 入力できる値については、[GraphQL Admin API - Order](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/orders)の`financial_status`を参照ください。 |
| フルフィルメントステータス | - | 入力できる値については、[GraphQL Admin API - Order](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/orders)の`fulfillment_status`を参照ください。 |
| StaffMemberのid取得 | - | 取得データに[GraphQL Admin API - StaffMember](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/staffmember)の`id`を含めるかどうかを選択できます。<br>[StaffMember](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/staffmember)の`id`を含めるには、ShopifyでAdvanced以上のプランを利用し、かつShopifyアプリに`read_users`scopeを追加する必要があります。|

**ターゲットにmetafieldsを指定した場合**

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| オーナータイプ | - | メタフィールドが紐づく[GraphQL Admin API - OwnerType](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/MetafieldOwnerType)を`product`・`order`・`customer`から選択します。|
| オーナーの作成日時 | - | オーナータイプで指定したオーナーの作成日時を基準に、取得するデータの範囲を指定できます。<ul><li>オーナータイプが`product`または`order`の場合：`created_at`カラムの値が基準となります。</li><li>オーナータイプが`customers`の場合：`customer_date`カラムの値が基準となります。</li></ul> |
| ネームスペースまたはキー | - | 入力する値については、[GraphQL Admin API - Metafield](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/Metafield)を参照ください。<ul><li>ネームスペース：取得するデータの対象をネームスペースで指定できます。</li><li>キー：取得するデータの対象をネームスペースとキーの組み合わせで指定できます。</li></ul>|

**ターゲットにfulfillment_ordersを指定した場合**

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| クローズ済みチケットを含める | - | 取得データにクローズ済みチケットを含めるかどうかを選択できます。デフォルト値は「含めない」です。|

**ターゲットにproductsを指定した場合**

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 公開日時 | - | `published_at`カラムの値を基準に、取得するデータの範囲を指定できます。|
| 商品ステータス | - | 入力できる値については、[GraphQL Admin API - Order](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/products)の`status`を参照ください。 |
| 公開ステータス | - | 入力できる値については、[GraphQL Admin API - Order](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/products)の`published_status`を参照ください。 |
