---
articleId: a9a23a46-eff2-492a-8c2e-224248ea98ea
slug: data-source-freshsales
title: 転送元 - Freshsales
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Freshsalesからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Freshsales](/docs/connection-configuration-freshsales)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Freshsales APIには、APIキーの種類に応じたレート制限があります。制限を超えると、HTTP 429エラーが返され、一時的にAPIが使用できなくなります。詳細は[Freshsales公式ドキュメント − Rate Limits](https://developer.freshsales.io/api/)を参照ください。
:::

## 取得対象

### Contacts Views

コンタクトのビュー（フィルター）一覧を取得します。
詳しくは、[Freshsales公式ドキュメント − Contacts Views](https://developer.freshsales.io/api/#list_all_contacts)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|ビューの一意識別子|
|`name`|`string`|ビュー名|
|`model_class_name`|`string`|モデルクラス名|
|`user_id`|`long`|ユーザーの一意識別子|
|`is_default`|`boolean`|デフォルトビューかどうか|
|`updated_at`|`timestamp`|更新日時|
|`user_name`|`string`|ユーザー名|
|`current_user_permissions`|`json`|現在のユーザーの権限情報|

### Contacts

指定したビューID内のコンタクト一覧を取得します。
詳しくは、[Freshsales公式ドキュメント − Contacts](https://developer.freshsales.io/api/#list_all_contacts)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`View ID`|✓|-|取得対象のビューIDを入力します。<br>ビューIDは、コンタクトビューのURLまたは「Contacts Views」の取得データから確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|コンタクトの一意識別子|
|`first_name`|`string`|名|
|`last_name`|`string`|姓|
|`display_name`|`string`|表示名|
|`email`|`string`|メールアドレス|
|`work_number`|`string`|勤務先電話番号|
|`mobile_number`|`string`|携帯電話番号|
|`address`|`string`|住所|
|`city`|`string`|市区町村|
|`state`|`string`|都道府県|
|`zipcode`|`string`|郵便番号|
|`country`|`string`|国|
|`job_title`|`string`|職種|
|`lead_score`|`long`|リードスコア|
|`deals_amount`|`long`|取引金額|
|`deals_count`|`long`|取引件数|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`last_contacted`|`timestamp`|最終接触日時|
|`last_seen`|`timestamp`|最終確認日時|
|`facebook`|`string`|Facebook情報|
|`twitter`|`string`|Twitter情報|
|`linkedin`|`string`|LinkedIn情報|
|`subscription_status`|`string`|購読状況|
|`tags`|`json`|タグ情報|
|`subscription_types`|`string`|購読タイプ|
|`keyword`|`string`|キーワード|
|`medium`|`string`|媒体|
|`campaign_id`|`long`|キャンペーンID|
|`lead_source_id`|`long`|リード元ID|
|`owner_id`|`long`|所有者ID|
|`sales_account_id`|`long`|営業アカウントID|
|`time_zone`|`string`|タイムゾーン|
|`external_id`|`string`|外部ID|
|`avatar`|`string`|アバター情報|
|`about`|`string`|概要|
|`links`|`json`|リンク情報|
|`collaboration`|`json`|コラボレーション情報|
|`custom_field`|`json`|カスタムフィールド情報|
|`lifecycle_stage_id`|`long`|ライフサイクルステージID|
|`contact_status_id`|`long`|コンタクトステータスID|
|`whatsapp_subscription_status`|`string`|WhatsApp購読状況|
|`sms_subscription_status`|`string`|SMS購読状況|
|`record_type_id`|`long`|レコードタイプID|
|`do_not_disturb`|`boolean`|連絡禁止フラグ|
|`recent_note`|`string`|最新メモ|
|`business_type_id`|`long`|ビジネスタイプID|
|`ai_agent_score`|`long`|AIエージェントスコア|
|`company_deals_amount`|`long`|会社取引金額|
|`company_deals_count`|`long`|会社取引件数|
|`company_name`|`string`|会社名|
|`company_id`|`long`|会社ID|
|`company_open_deals_amount`|`long`|会社進行中取引金額|
|`company_open_deals_count`|`long`|会社進行中取引件数|
|`company_won_deals_amount`|`long`|会社成約取引金額|
|`company_won_deals_count`|`long`|会社成約取引件数|
|`company_last_contacted`|`timestamp`|会社最終接触日時|
|`company_last_activity_date`|`timestamp`|会社最終活動日時|
|`company_last_modified_date`|`timestamp`|会社最終変更日時|
|`company_created_date`|`timestamp`|会社作成日時|
|`company_updated_date`|`timestamp`|会社更新日時|
|`contact_lifecycle_stage_id`|`long`|コンタクトライフサイクルステージID|
|`contact_lifecycle_stage_name`|`string`|コンタクトライフサイクルステージ名|
|`contact_lifecycle_stage_created_at`|`timestamp`|コンタクトライフサイクルステージ作成日時|
|`contact_lifecycle_stage_updated_at`|`timestamp`|コンタクトライフサイクルステージ更新日時|
|`contact_email_status_id`|`long`|コンタクトメールステータスID|
|`contact_email_status_name`|`string`|コンタクトメールステータス名|
|`contact_email_status_created_at`|`timestamp`|コンタクトメールステータス作成日時|
|`contact_email_status_updated_at`|`timestamp`|コンタクトメールステータス更新日時|
|`contact_status_name`|`string`|コンタクトステータス名|
|`contact_status_created_at`|`timestamp`|コンタクトステータス作成日時|
|`contact_status_updated_at`|`timestamp`|コンタクトステータス更新日時|
|`contact_record_type_id`|`long`|コンタクトレコードタイプID|
|`contact_record_type_name`|`string`|コンタクトレコードタイプ名|
|`contact_record_type_created_at`|`timestamp`|コンタクトレコードタイプ作成日時|
|`contact_record_type_updated_at`|`timestamp`|コンタクトレコードタイプ更新日時|
|`open_deals_amount`|`long`|進行中取引金額|
|`open_deals_count`|`long`|進行中取引件数|
|`won_deals_amount`|`long`|成約取引金額|
|`won_deals_count`|`long`|成約取引件数|
|`last_activity_date`|`timestamp`|最終活動日時|
|`last_modified_date`|`timestamp`|最終変更日時|
|`resource_type`|`string`|リソースタイプ|

### Deals Views

取引のビュー（フィルター）一覧を取得します。
詳しくは、[Freshsales公式ドキュメント − Deals Views](https://developer.freshsales.io/api/#list_all_deals)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|ビューの一意識別子|
|`name`|`string`|ビュー名|
|`model_class_name`|`string`|モデルクラス名|
|`user_id`|`long`|ユーザーの一意識別子|
|`is_default`|`boolean`|デフォルトビューかどうか|
|`updated_at`|`timestamp`|更新日時|
|`user_name`|`string`|ユーザー名|
|`current_user_permissions`|`json`|現在のユーザーの権限情報|

### Deals

指定したビューID内の取引一覧を取得します。
詳しくは、[Freshsales公式ドキュメント − Deals](https://developer.freshsales.io/api/#list_all_deals)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`View ID`|✓|-|取得対象のビューIDを入力します。<br>ビューIDは、取引ビューのURLまたは「Deals Views」の取得データから確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|取引の一意識別子|
|`name`|`string`|取引名|
|`amount`|`long`|取引金額|
|`probability`|`long`|確度|
|`expected_close`|`timestamp`|予想成約日|
|`deal_pipeline_id`|`long`|取引パイプラインID|
|`deal_stage_id`|`long`|取引ステージID|
|`stage_updated_time`|`timestamp`|ステージ更新日時|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`closed_date`|`timestamp`|クローズ日時|
|`age`|`long`|経過日数|
|`forecast_category`|`string`|予測カテゴリー|
|`deal_prediction`|`string`|取引予測|
|`links`|`json`|リンク情報|
|`collaboration`|`json`|コラボレーション情報|
|`tags`|`json`|タグ情報|
|`base_currency_amount`|`long`|基準通貨金額|
|`contacts_added_with_deal`|`json`|取引と一緒に追加されたコンタクト|
|`created_by`|`long`|作成者ID|
|`custom_field`|`json`|カスタムフィールド情報|
|`deal_payment_status`|`string`|取引支払いステータス|
|`deal_pipeline_name`|`string`|取引パイプライン名|
|`deal_reason`|`string`|取引理由|
|`deal_source_id`|`long`|取引元ID|
|`deal_stage_name`|`string`|取引ステージ名|
|`deal_type`|`string`|取引タイプ|
|`expected_deal_value`|`long`|予想取引価値|
|`last_activity_date`|`timestamp`|最終活動日時|
|`last_modified_date`|`timestamp`|最終変更日時|
|`lost_reason`|`string`|失注理由|
|`next_activity_date`|`timestamp`|次回活動日時|
|`owner_id`|`long`|所有者ID|
|`recent_note`|`string`|最新メモ|
|`rotten_days`|`long`|停滞日数|
|`sales_account_id`|`long`|営業アカウントID|
|`sales_account_name`|`string`|営業アカウント名|
|`updated_by`|`long`|更新者ID|
|`won_time`|`timestamp`|成約日時|
|`resource_type`|`string`|リソースタイプ|

### Accounts Views

アカウントのビュー（フィルター）一覧を取得します。
詳しくは、[Freshsales公式ドキュメント − Accounts Views](https://developer.freshsales.io/api/#list_all_accounts)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|ビューの一意識別子|
|`name`|`string`|ビュー名|
|`model_class_name`|`string`|モデルクラス名|
|`user_id`|`long`|ユーザーの一意識別子|
|`is_default`|`boolean`|デフォルトビューかどうか|
|`updated_at`|`timestamp`|更新日時|
|`user_name`|`string`|ユーザー名|
|`current_user_permissions`|`json`|現在のユーザーの権限情報|

### Accounts

指定したビューID内のアカウント一覧を取得します。
詳しくは、[Freshsales公式ドキュメント − Accounts](https://developer.freshsales.io/api/#list_all_accounts)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`View ID`|✓|-|取得対象のビューIDを入力します。<br>ビューIDは、アカウントビューのURLまたは「Accounts Views」の取得データから確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|アカウントの一意識別子|
|`name`|`string`|アカウント名|
|`address`|`string`|住所|
|`city`|`string`|市区町村|
|`state`|`string`|都道府県|
|`country`|`string`|国|
|`number_of_employees`|`long`|従業員数|
|`annual_revenue`|`long`|年間売上|
|`website`|`string`|ウェブサイト|
|`open_deals_amount`|`long`|進行中取引金額|
|`won_deals_amount`|`long`|成約取引金額|
|`deals_count`|`long`|取引件数|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`last_contacted`|`timestamp`|最終接触日時|
|`health_score`|`long`|ヘルススコア|
|`account_tier`|`string`|アカウントティア|
|`renewal_date`|`timestamp`|更新日|
|`zipcode`|`string`|郵便番号|
|`phone`|`string`|電話番号|
|`owner_id`|`long`|所有者ID|
|`facebook`|`string`|Facebook情報|
|`twitter`|`string`|Twitter情報|
|`linkedin`|`string`|LinkedIn情報|
|`about`|`string`|概要|
|`links`|`json`|リンク情報|
|`collaboration`|`json`|コラボレーション情報|
|`tags`|`json`|タグ情報|
|`parent_sales_account_id`|`long`|親営業アカウントID|
|`custom_field`|`json`|カスタムフィールド情報|
|`industry_type_id`|`long`|業界タイプID|
|`business_type_id`|`long`|ビジネスタイプID|
|`territory_id`|`long`|テリトリーID|
|`record_type_id`|`long`|レコードタイプID|
|`avatar`|`string`|アバター情報|
|`external_id`|`string`|外部ID|
|`recent_note`|`string`|最新メモ|
|`avatar_url`|`string`|アバターURL|
|`subscription_status`|`string`|購読状況|
|`subscription_types`|`string`|購読タイプ|
|`whatsapp_subscription_status`|`string`|WhatsApp購読状況|
|`sms_subscription_status`|`string`|SMS購読状況|
|`last_activity_date`|`timestamp`|最終活動日時|
|`last_modified_date`|`timestamp`|最終変更日時|
|`business_type_name`|`string`|ビジネスタイプ名|
|`business_type_created_at`|`timestamp`|ビジネスタイプ作成日時|
|`business_type_updated_at`|`timestamp`|ビジネスタイプ更新日時|
|`industry_type_name`|`string`|業界タイプ名|
|`industry_type_created_at`|`timestamp`|業界タイプ作成日時|
|`industry_type_updated_at`|`timestamp`|業界タイプ更新日時|
|`territory_name`|`string`|テリトリー名|
|`territory_created_at`|`timestamp`|テリトリー作成日時|
|`territory_updated_at`|`timestamp`|テリトリー更新日時|
|`record_type_name`|`string`|レコードタイプ名|
|`record_type_created_at`|`timestamp`|レコードタイプ作成日時|
|`record_type_updated_at`|`timestamp`|レコードタイプ更新日時|
|`resource_type`|`string`|リソースタイプ|