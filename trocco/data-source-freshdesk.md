---
articleId: 66e9f4b7-7cb1-4438-99a3-f396e540dbcd
slug: data-source-freshdesk
title: 転送元 - Freshdesk
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Freshdeskからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Freshdesk](/docs/connection-configuration-freshdesk)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Freshdesk APIには、一定期間内のリクエスト回数に制限があります。プランに応じて1時間あたり1000～2000リクエストの制限があります。制限を超えると、HTTP 429エラーが返され、一時的にAPIが使用できなくなります。詳細は[Freshdesk公式サポート − Rate Limit](https://support.freshdesk.com/en/support/solutions/articles/225439-what-are-the-rate-limits-for-the-api-calls-to-freshdesk-)を参照ください。
:::

## 取得対象

### Account

アカウント情報を取得します。
詳しくは、[Freshdesk公式ドキュメント − Account](https://developers.freshdesk.com/api/#account)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`organisation_id`|`long`|組織ID|
|`organisation_name`|`string`|組織名|
|`account_id`|`long`|アカウントID|
|`account_name`|`string`|アカウント名|
|`account_domain`|`string`|アカウントドメイン|
|`bundle_id`|`string`|バンドルID|
|`cloud_type`|`string`|クラウドタイプ|
|`hipaa_compliant`|`boolean`|HIPAA準拠かどうか|
|`total_agents`|`long`|総エージェント数|
|`timezone`|`string`|タイムゾーン|
|`data_center`|`string`|データセンター|
|`tier_type`|`string`|ティアタイプ|
|`address`|`string`|住所|
|`contact_person`|`string`|連絡担当者|

### Companies

会社情報一覧を取得します。
詳しくは、[Freshdesk公式ドキュメント − Companies](https://developers.freshdesk.com/api/#companies)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|会社ID|
|`name`|`string`|会社名|
|`description`|`string`|説明|
|`note`|`string`|メモ|
|`domains`|`string`|ドメイン|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`custom_fields`|`string`|カスタムフィールド|
|`health_score`|`string`|ヘルススコア|
|`account_tier`|`string`|アカウントティア|
|`renewal_date`|`timestamp`|更新日|
|`industry`|`string`|業界|
|`org_company_id`|`long`|組織会社ID|

### Contacts

連絡先一覧を取得します。
詳しくは、[Freshdesk公式ドキュメント − Contacts](https://developers.freshdesk.com/api/#contacts)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`active`|`boolean`|アクティブかどうか|
|`address`|`string`|住所|
|`description`|`string`|説明|
|`email`|`string`|メールアドレス|
|`id`|`long`|連絡先ID|
|`job_title`|`string`|職種|
|`language`|`string`|言語|
|`mobile`|`string`|携帯電話|
|`name`|`string`|名前|
|`phone`|`string`|電話番号|
|`time_zone`|`string`|タイムゾーン|
|`twitter_id`|`string`|Twitter ID|
|`custom_fields`|`string`|カスタムフィールド|
|`facebook_id`|`string`|Facebook ID|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`csat_rating`|`string`|CSAT評価|
|`preferred_source`|`string`|優先ソース|
|`company_id`|`long`|会社ID|
|`unique_external_id`|`string`|一意外部ID|
|`first_name`|`string`|名|
|`last_name`|`string`|姓|
|`visitor_id`|`string`|訪問者ID|
|`org_contact_id`|`long`|組織連絡先ID|
|`other_phone_numbers`|`string`|その他の電話番号|

### Groups

グループ一覧を取得します。
詳しくは、[Freshdesk公式ドキュメント − Groups](https://developers.freshdesk.com/api/#groups)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|グループID|
|`name`|`string`|グループ名|
|`description`|`string`|説明|
|`escalate_to`|`long`|エスカレート先|
|`unassigned_for`|`string`|未割り当て期間|
|`business_hour_id`|`long`|営業時間ID|
|`group_type`|`string`|グループタイプ|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|

### Roles

役割一覧を取得します。
詳しくは、[Freshdesk公式ドキュメント − Roles](https://developers.freshdesk.com/api/#roles)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|役割ID|
|`name`|`string`|役割名|
|`description`|`string`|説明|
|`default`|`boolean`|デフォルトかどうか|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`agent_type`|`long`|エージェントタイプ|

### Tickets

チケット一覧を取得します。
詳しくは、[Freshdesk公式ドキュメント − Tickets](https://developers.freshdesk.com/api/#tickets)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Updated Since|-|-|指定した日時以降に更新されたチケットのみを取得します。<br>YYYY-MM-DD形式で入力してください。|
|Include|-|-|取得データに含める追加情報を指定します。<br>以下より選択できます。<ul><li>stats</li><li>requester</li><li>description</li></ul>|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`cc_emails`|`string`|CCメールアドレス|
|`fwd_emails`|`string`|転送メールアドレス|
|`reply_cc_emails`|`string`|返信CCメールアドレス|
|`ticket_cc_emails`|`string`|チケットCCメールアドレス|
|`ticket_bcc_emails`|`string`|チケットBCCメールアドレス|
|`fr_escalated`|`boolean`|初回返信エスカレーション済みかどうか|
|`spam`|`boolean`|スパムかどうか|
|`email_config_id`|`long`|メール設定ID|
|`group_id`|`long`|グループID|
|`priority`|`long`|優先度|
|`requester_id`|`long`|リクエスター ID|
|`responder_id`|`long`|レスポンダー ID|
|`source`|`long`|ソース|
|`company_id`|`long`|会社ID|
|`status`|`long`|ステータス|
|`subject`|`string`|件名|
|`association_type`|`long`|関連タイプ|
|`support_email`|`string`|サポートメールアドレス|
|`to_emails`|`string`|宛先メールアドレス|
|`product_id`|`long`|製品ID|
|`id`|`long`|チケットID|
|`type`|`string`|タイプ|
|`due_by`|`timestamp`|期限日時|
|`fr_due_by`|`timestamp`|初回返信期限日時|
|`is_escalated`|`boolean`|エスカレーション済みかどうか|
|`custom_fields`|`string`|カスタムフィールド|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`associated_tickets_count`|`long`|関連チケット数|
|`tags`|`string`|タグ|
|`description`|`string`|説明|
|`description_text`|`string`|説明テキスト|
|`requester`|`string`|リクエスター情報|
|`stats`|`string`|統計情報|

### Time Entries

タイムエントリー一覧を取得します。
詳しくは、[Freshdesk公式ドキュメント − Time Entries](https://developers.freshdesk.com/api/#time_entries)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`billable`|`boolean`|請求可能かどうか|
|`note`|`string`|メモ|
|`id`|`long`|タイムエントリーID|
|`timer_running`|`boolean`|タイマー実行中かどうか|
|`agent_id`|`long`|エージェントID|
|`ticket_id`|`long`|チケットID|
|`company_id`|`long`|会社ID|
|`time_spent`|`string`|消費時間|
|`executed_at`|`timestamp`|実行日時|
|`start_time`|`timestamp`|開始時間|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`time_spent_in_seconds`|`long`|消費時間（秒）|