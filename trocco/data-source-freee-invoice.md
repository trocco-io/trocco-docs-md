---
articleId: c2b77ce6-71d4-4a46-969a-10e3ae16fd61
slug: data-source-freee-invoice
title: 転送元 - freee請求書
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、freee請求書からデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - freee請求書](/docs/connection-configuration-freee-invoice)を参照ください。
## 利用上の注意・制約

### API制限

freee請求書のAPI制限により、大量のデータ転送時には以下の点にご注意ください。

- レート制限に達した場合、転送が一時的に停止する可能性があります
- 大量のデータを転送する場合は、実行時間に余裕を持って設定してください

### データ取得の制限

- 認証したユーザーがアクセス可能なデータのみ取得できます
- 削除されたデータは取得できません

## 取得対象

### 納品書一覧

納品書一覧のデータを取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`事業所ID`|✓|-|事業所IDを指定します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|-|
|`company_id`|`long`|-|
|`delivery_slip_number`|`string`|-|
|`subject`|`string`|-|
|`template_id`|`long`|-|
|`delivery_slip_date`|`string`|-|
|`issue_date`|`string`|-|
|`memo`|`string`|-|
|`sending_status`|`string`|-|
|`payment_status`|`string`|-|
|`cancel_status`|`string`|-|
|`deal_status`|`string`|-|
|`deal_id`|`long`|-|
|`total_amount`|`long`|-|
|`amount_withholding_tax`|`long`|-|
|`amount_including_tax`|`long`|-|
|`amount_excluding_tax`|`long`|-|
|`amount_tax`|`long`|-|
|`partner_id`|`long`|-|
|`partner_code`|`string`|-|
|`partner_name`|`string`|-|
|`partner_display_name`|`string`|-|
|`company_contact_name`|`string`|-|
|`email_url_file_downloaded_at`|`string`|-|
|`email_url_file_downloaded_status`|`string`|-|


### 請求書一覧

請求書一覧のデータを取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`事業所ID`|✓|-|事業所IDを指定します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|-|
|`company_id`|`long`|-|
|`invoice_number`|`string`|-|
|`subject`|`string`|-|
|`template_id`|`long`|-|
|`billing_date`|`string`|-|
|`issue_date`|`string`|-|
|`payment_date`|`string`|-|
|`payment_type`|`string`|-|
|`memo`|`string`|-|
|`sending_status`|`string`|-|
|`payment_status`|`string`|-|
|`cancel_status`|`string`|-|
|`deal_status`|`string`|-|
|`deal_id`|`long`|-|
|`total_amount`|`long`|-|
|`amount_withholding_tax`|`long`|-|
|`amount_including_tax`|`long`|-|
|`amount_excluding_tax`|`long`|-|
|`amount_tax`|`long`|-|
|`amount_brought_forward`|`long`|-|
|`partner_id`|`long`|-|
|`partner_code`|`string`|-|
|`partner_name`|`string`|-|
|`partner_display_name`|`string`|-|
|`company_contact_name`|`string`|-|
|`email_url_file_downloaded_at`|`string`|-|
|`email_url_file_downloaded_status`|`string`|-|


### 見積書一覧

見積書一覧のデータを取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`事業所ID`|✓|-|事業所IDを指定します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|-|
|`company_id`|`long`|-|
|`quotation_number`|`string`|-|
|`subject`|`string`|-|
|`template_id`|`long`|-|
|`quotation_date`|`string`|-|
|`expiration_date`|`string`|-|
|`memo`|`string`|-|
|`sending_status`|`string`|-|
|`cancel_status`|`string`|-|
|`total_amount`|`long`|-|
|`amount_withholding_tax`|`long`|-|
|`amount_including_tax`|`long`|-|
|`amount_excluding_tax`|`long`|-|
|`amount_tax`|`long`|-|
|`partner_id`|`long`|-|
|`partner_code`|`string`|-|
|`partner_name`|`string`|-|
|`partner_display_name`|`string`|-|
|`company_contact_name`|`string`|-|
|`email_url_file_downloaded_at`|`string`|-|
|`email_url_file_downloaded_status`|`string`|-|


