---
articleId: 9baae246-78f5-4e13-96d6-e2760393f221
slug: data-source-razorpay
title: 転送元 - Razorpay
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Razorpayからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Razorpay](/docs/connection-configuration-razorpay)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Razorpay APIには、一定期間内のリクエスト回数に制限があります。詳細は[Razorpay公式ドキュメント - Rate Limits](https://razorpay.com/docs/api/understand#rate-limiting)を参照ください。
:::

## 取得対象

### Customers

顧客情報一覧を取得します。
詳しくは、[Razorpay公式ドキュメント - Customers](https://razorpay.com/docs/api/customers/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|顧客の一意識別子|
|`entity`|`string`|エンティティタイプ|
|`name`|`string`|顧客名|
|`email`|`string`|メールアドレス|
|`contact`|`string`|連絡先情報|
|`gstin`|`string`|GST識別番号|
|`notes`|`json`|追加メモ|
|`shipping_address`|`json`|配送先住所詳細|
|`created_at`|`long`|作成日時|

### Orders

注文情報一覧を取得します。
詳しくは、[Razorpay公式ドキュメント - Orders](https://razorpay.com/docs/api/orders/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Created date/time from`|-|-|取得対象期間の開始日時を入力できます。<br>ISO 8601形式（例：2023-01-01T00:00:00Z）で入力してください。|
|`Created date/time to`|-|-|取得対象期間の終了日時を入力できます。<br>ISO 8601形式（例：2023-12-31T23:59:59Z）で入力してください。|
|`Authorized?`|-|-|認証ステータスでフィルタできます。<br>`0 (Not Authorized)`または`1 (Authorized)`を選択してください。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|注文の一意識別子|
|`entity`|`string`|エンティティタイプ|
|`amount`|`long`|注文金額|
|`amount_paid`|`long`|支払済み金額|
|`amount_due`|`long`|未払い金額|
|`currency`|`string`|通貨コード|
|`receipt`|`string`|領収書番号|
|`offer_id`|`string`|オファーID|
|`status`|`string`|注文ステータス|
|`attempts`|`long`|支払い試行回数|
|`notes`|`json`|追加メモ|
|`created_at`|`long`|作成日時|

### Payments

支払い情報一覧を取得します。
詳しくは、[Razorpay公式ドキュメント - Payments](https://razorpay.com/docs/api/payments/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Created date/time from`|-|-|取得対象期間の開始日時を入力できます。<br>ISO 8601形式（例：2023-01-01T00:00:00Z）で入力してください。|
|`Created date/time to`|-|-|取得対象期間の終了日時を入力できます。<br>ISO 8601形式（例：2023-12-31T23:59:59Z）で入力してください。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|支払いの一意識別子|
|`entity`|`string`|エンティティタイプ|
|`amount`|`long`|支払い金額|
|`currency`|`string`|通貨コード|
|`status`|`string`|支払いステータス|
|`order_id`|`string`|関連する注文ID|
|`invoice_id`|`string`|関連する請求書ID|
|`international`|`boolean`|国際決済フラグ|
|`method`|`string`|支払い方法|
|`amount_refunded`|`long`|返金済み金額|
|`refund_status`|`string`|返金ステータス|
|`captured`|`boolean`|キャプチャ状態|
|`description`|`string`|支払い説明|
|`card_id`|`string`|カードID|
|`card`|`json`|カード詳細|
|`bank`|`string`|銀行名|
|`wallet`|`string`|ウォレットタイプ|
|`vpa`|`string`|バーチャルペイメントアドレス|
|`email`|`string`|顧客メールアドレス|
|`contact`|`string`|連絡先情報|
|`token_id`|`string`|トークンID|
|`notes`|`json`|追加メモ|
|`fee`|`long`|取引手数料|
|`tax`|`long`|税額|
|`error_code`|`string`|エラーコード|
|`error_description`|`string`|エラー説明|
|`error_source`|`string`|エラー発生元|
|`error_step`|`string`|エラー発生ステップ|
|`error_reason`|`string`|エラー理由|
|`acquirer_data`|`json`|アクワイアラデータ|
|`created_at`|`long`|作成日時|

### Refunds

返金情報一覧を取得します。
詳しくは、[Razorpay公式ドキュメント - Refunds](https://razorpay.com/docs/api/refunds/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Created date/time from`|-|-|取得対象期間の開始日時を入力できます。<br>ISO 8601形式（例：2023-01-01T00:00:00Z）で入力してください。|
|`Created date/time to`|-|-|取得対象期間の終了日時を入力できます。<br>ISO 8601形式（例：2023-12-31T23:59:59Z）で入力してください。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|返金の一意識別子|
|`entity`|`string`|エンティティタイプ|
|`amount`|`long`|返金金額|
|`currency`|`string`|通貨コード|
|`payment_id`|`string`|関連する支払いID|
|`notes`|`json`|追加メモ|
|`receipt`|`string`|領収書番号|
|`acquirer_data`|`json`|アクワイアラデータ|
|`batch_id`|`string`|バッチID|
|`status`|`string`|返金ステータス|
|`speed_processed`|`string`|処理速度|
|`speed_requested`|`string`|要求速度|
|`created_at`|`long`|作成日時|

### Settlements

精算情報一覧を取得します。
詳しくは、[Razorpay公式ドキュメント - Settlements](https://razorpay.com/docs/api/settlements/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Created date/time from`|-|-|取得対象期間の開始日時を入力できます。<br>ISO 8601形式（例：2023-01-01T00:00:00Z）で入力してください。|
|`Created date/time to`|-|-|取得対象期間の終了日時を入力できます。<br>ISO 8601形式（例：2023-12-31T23:59:59Z）で入力してください。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|精算の一意識別子|
|`entity`|`string`|エンティティタイプ|
|`amount`|`long`|精算金額|
|`status`|`string`|精算ステータス|
|`fees`|`long`|精算手数料|
|`tax`|`long`|税額|
|`utr`|`string`|ユニーク取引リファレンス|
|`created_at`|`long`|作成日時|

### Invoices

請求書情報一覧を取得します。
詳しくは、[Razorpay公式ドキュメント - Invoices](https://razorpay.com/docs/api/payments/invoices)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Payment ID`|-|-|特定の支払いIDでフィルタできます。|
|`Receipt`|-|-|特定の領収書番号でフィルタできます。|
|`Customer ID`|-|-|特定の顧客IDでフィルタできます。|

:::(Info) (Customer IDによるフィルタ)

Customer IDは他のパラメーターと組み合わせて指定できません。
:::

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|請求書の一意識別子|
|`entity`|`string`|エンティティタイプ|
|`receipt`|`string`|領収書番号|
|`invoice_number`|`string`|請求書番号|
|`customer_id`|`string`|顧客ID|
|`customer_details`|`json`|顧客詳細|
|`order_id`|`string`|関連する注文ID|
|`subscription_id`|`string`|関連するサブスクリプションID|
|`line_items`|`json`|明細項目|
|`payment_id`|`string`|関連する支払いID|
|`status`|`string`|請求書ステータス|
|`expire_by`|`long`|有効期限|
|`issued_at`|`long`|発行日時|
|`paid_at`|`long`|支払い日時|
|`cancelled_at`|`long`|キャンセル日時|
|`expired_at`|`long`|期限切れ日時|
|`sms_status`|`string`|SMS送信ステータス|
|`email_status`|`string`|メール送信ステータス|
|`date`|`long`|請求書日付|
|`terms`|`string`|利用規約|
|`partial_payment`|`boolean`|分割払い可否|
|`gross_amount`|`long`|総額|
|`tax_amount`|`long`|税額|
|`taxable_amount`|`long`|課税対象金額|
|`amount`|`long`|合計金額|
|`amount_paid`|`long`|支払済み金額|
|`amount_due`|`long`|未払い金額|
|`currency`|`string`|通貨コード|
|`currency_symbol`|`string`|通貨記号|
|`description`|`string`|請求書説明|
|`notes`|`json`|追加メモ|
|`comment`|`string`|コメント|
|`short_url`|`string`|短縮URL|
|`view_less`|`boolean`|簡易表示フラグ|
|`billing_start`|`long`|請求期間開始日時|
|`billing_end`|`long`|請求期間終了日時|
|`type`|`string`|請求書タイプ|
|`group_taxes_discounts`|`boolean`|税金・割引のグループ化|
|`created_at`|`long`|作成日時|

### Items

アイテム情報一覧を取得します。
詳しくは、[Razorpay公式ドキュメント - Items](https://razorpay.com/docs/api/payments/invoices/fetch-all-items/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Created date/time from`|-|-|取得対象期間の開始日時を入力できます。<br>ISO 8601形式（例：2023-01-01T00:00:00Z）で入力してください。|
|`Created date/time to`|-|-|取得対象期間の終了日時を入力できます。<br>ISO 8601形式（例：2023-12-31T23:59:59Z）で入力してください。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|アイテムの一意識別子|
|`active`|`boolean`|アクティブ状態|
|`name`|`string`|アイテム名|
|`description`|`string`|アイテム説明|
|`amount`|`long`|アイテム金額|
|`unit_amount`|`long`|単価|
|`currency`|`string`|通貨コード|
|`type`|`string`|アイテムタイプ|
|`unit`|`long`|数量単位|
|`tax_inclusive`|`boolean`|税込み価格フラグ|
|`hsn_code`|`long`|HSNコード|
|`sac_code`|`long`|SACコード|
|`tax_rate`|`string`|税率|
|`tax_id`|`string`|税金ID|
|`tax_group_id`|`string`|税金グループID|
|`created_at`|`long`|作成日時|

### Subscriptions

サブスクリプション情報一覧を取得します。
詳しくは、[Razorpay公式ドキュメント - Subscriptions](https://razorpay.com/docs/api/payments/subscriptions)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Created date/time from`|-|-|取得対象期間の開始日時を入力できます。<br>ISO 8601形式（例：2023-01-01T00:00:00Z）で入力してください。|
|`Created date/time to`|-|-|取得対象期間の終了日時を入力できます。<br>ISO 8601形式（例：2023-12-31T23:59:59Z）で入力してください。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|サブスクリプションの一意識別子|
|`entity`|`string`|エンティティタイプ|
|`plan_id`|`string`|プランID|
|`customer_id`|`string`|顧客ID|
|`status`|`string`|サブスクリプションステータス|
|`current_start`|`long`|現在の期間開始日時|
|`current_end`|`long`|現在の期間終了日時|
|`ended_at`|`long`|終了日時|
|`quantity`|`long`|数量|
|`notes`|`json`|追加メモ|
|`charge_at`|`long`|請求日時|
|`start_at`|`long`|開始日時|
|`end_at`|`long`|終了日時|
|`auth_attempts`|`long`|認証試行回数|
|`total_count`|`long`|総回数|
|`paid_count`|`long`|支払い済み回数|
|`customer_notify`|`boolean`|顧客通知フラグ|
|`created_at`|`long`|作成日時|
|`expire_by`|`long`|有効期限|
|`short_url`|`string`|短縮URL|
|`has_scheduled_changes`|`boolean`|変更予定フラグ|
|`source`|`string`|ソース|
|`payment_method`|`string`|支払い方法|
|`offer_id`|`string`|オファーID|
|`remaining_count`|`long`|残り回数|
|`change_scheduled_at`|`string`|変更予定日時|

### Contacts

連絡先情報一覧を取得します。
詳しくは、[Razorpay公式ドキュメント - Contacts](https://razorpay.com/docs/api/x/contacts)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Active?`|-|-|アクティブ状態でフィルタできます。<br>`0 (Inactive)`または`1 (Active)`を選択してください。|
|`Type`|-|-|連絡先タイプでフィルタできます。<br>`customer`、`employee`、`self`、または`vendor`を選択してください。|
|`Created date/time from`|-|-|取得対象期間の開始日時を入力できます。<br>ISO 8601形式（例：2023-01-01T00:00:00Z）で入力してください。|
|`Created date/time to`|-|-|取得対象期間の終了日時を入力できます。<br>ISO 8601形式（例：2023-12-31T23:59:59Z）で入力してください。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|連絡先の一意識別子|
|`entity`|`string`|エンティティタイプ|
|`name`|`string`|連絡先名|
|`contact`|`string`|連絡先情報|
|`email`|`string`|メールアドレス|
|`type`|`string`|連絡先タイプ|
|`reference_id`|`string`|リファレンスID|
|`batch_id`|`string`|バッチID|
|`active`|`boolean`|アクティブ状態|
|`notes`|`json`|追加メモ|
|`created_at`|`long`|作成日時|