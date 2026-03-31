---
articleId: 4130e84d-8f0d-4fc1-8bb0-9bfd75f60ee9
slug: data-source-zendesk-sell
title: 転送元 - Zendesk Sell
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Zendesk Sellからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Zendesk Sell](/docs/connection-configuration-zendesk-sell)を参照ください。

## 取得対象

### Calls

通話履歴と電話による相互作用データを取得します。
詳しくは、[Zendesk Sell公式ドキュメント − Calls API](https://developer.zendesk.com/api-reference/sales-crm/resources/calls/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|通話の一意識別子|
|`user_id`|`long`|通話を行ったユーザーのID|
|`summary`|`string`|通話の概要|
|`public_api_recording_url`|`string`|録音ファイルの公開API URL|
|`recording_url`|`string`|録音ファイルのURL|
|`outcome_id`|`long`|通話結果のID|
|`duration`|`long`|通話時間（秒）|
|`phone_number`|`string`|通話先の電話番号|
|`incoming`|`boolean`|着信通話かどうか|
|`missed`|`boolean`|未応答通話かどうか|
|`updated_at`|`timestamp`|最終更新日時|
|`external_id`|`string`|外部システムでの識別子|
|`associated_deal_ids`|`string`|関連する商談のIDリスト|
|`made_at`|`timestamp`|通話実施日時|
|`resource_id`|`long`|関連リソースのID|
|`resource_type`|`string`|関連リソースのタイプ|

### Collaborations

コラボレーション情報を取得します。
詳しくは、[Zendesk Sell公式ドキュメント − Collaborations API](https://developer.zendesk.com/api-reference/sales-crm/resources/collaborations/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|コラボレーションの一意識別子|
|`creator_id`|`long`|作成者のユーザーID|
|`resource_type`|`string`|リソースタイプ|
|`resource_id`|`long`|リソースID|
|`collaborator_id`|`long`|コラボレーターのユーザーID|
|`updated_at`|`timestamp`|最終更新日時|
|`created_at`|`timestamp`|作成日時|

### Contacts

連絡先情報を取得します。
詳しくは、[Zendesk Sell公式ドキュメント − Contacts API](https://developer.zendesk.com/api-reference/sales-crm/resources/contacts/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|連絡先の一意識別子|
|`creator_id`|`long`|作成者のユーザーID|
|`contact_id`|`long`|連絡先ID|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|最終更新日時|
|`title`|`string`|役職|
|`name`|`string`|氏名|
|`first_name`|`string`|名|
|`last_name`|`string`|姓|
|`description`|`string`|説明|
|`website`|`string`|Webサイト|
|`email`|`string`|メールアドレス|
|`phone`|`string`|電話番号|
|`mobile`|`string`|携帯電話番号|
|`fax`|`string`|FAX番号|
|`twitter`|`string`|Twitterアカウント|
|`facebook`|`string`|Facebookアカウント|
|`linkedin`|`string`|LinkedInアカウント|
|`skype`|`string`|Skypeアカウント|
|`owner_id`|`long`|担当者のユーザーID|
|`is_organization`|`boolean`|組織かどうか|
|`address`|`string`|住所|
|`shipping_address`|`string`|配送先住所|
|`billing_address`|`string`|請求先住所|
|`industry`|`string`|業界|
|`tags`|`string`|タグ|
|`custom_fields`|`string`|カスタムフィールド|
|`customer_status`|`string`|顧客ステータス|
|`prospect_status`|`string`|見込み客ステータス|
|`parent_organization_id`|`long`|親組織のID|

### Deals

商談情報を取得します。
詳しくは、[Zendesk Sell公式ドキュメント − Deals API](https://developer.zendesk.com/api-reference/sales-crm/resources/deals/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|商談の一意識別子|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|最終更新日時|
|`name`|`string`|商談名|
|`hot`|`boolean`|重要商談かどうか|
|`currency`|`string`|通貨|
|`loss_reason_id`|`long`|失注理由のID|
|`source_id`|`long`|ソースID|
|`creator_id`|`long`|作成者のユーザーID|
|`unqualified_reason_id`|`long`|非適格理由のID|
|`last_stage_change_at`|`timestamp`|最終ステージ変更日時|
|`last_stage_change_by_id`|`long`|最終ステージ変更者のユーザーID|
|`added_at`|`timestamp`|追加日時|
|`dropbox_email`|`string`|Dropboxメールアドレス|
|`owner_id`|`long`|担当者のユーザーID|
|`value`|`double`|商談金額|
|`stage_id`|`long`|ステージID|
|`contact_id`|`long`|連絡先ID|
|`custom_fields`|`string`|カスタムフィールド|
|`organization_id`|`long`|組織ID|
|`estimated_close_date`|`string`|予想クローズ日|
|`customized_win_likelihood`|`double`|カスタム成功確率|
|`last_activity_at`|`timestamp`|最終活動日時|
|`tags`|`string`|タグ|

### Leads

リード情報を取得します。
詳しくは、[Zendesk Sell公式ドキュメント − Leads API](https://developer.zendesk.com/api-reference/sales-crm/resources/leads/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|リードの一意識別子|
|`owner_id`|`long`|担当者のユーザーID|
|`first_name`|`string`|名|
|`last_name`|`string`|姓|
|`source_id`|`long`|ソースID|
|`unqualified_reason_id`|`long`|非適格理由のID|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|最終更新日時|
|`twitter`|`string`|Twitterアカウント|
|`phone`|`string`|電話番号|
|`mobile`|`string`|携帯電話番号|
|`facebook`|`string`|Facebookアカウント|
|`email`|`string`|メールアドレス|
|`title`|`string`|役職|
|`skype`|`string`|Skypeアカウント|
|`linkedin`|`string`|LinkedInアカウント|
|`description`|`string`|説明|
|`industry`|`string`|業界|
|`fax`|`string`|FAX番号|
|`website`|`string`|Webサイト|
|`address`|`string`|住所|
|`status`|`string`|ステータス|
|`creator_id`|`long`|作成者のユーザーID|
|`organization_name`|`string`|組織名|
|`tags`|`string`|タグ|
|`custom_fields`|`string`|カスタムフィールド|

### Notes

メモ情報を取得します。
詳しくは、[Zendesk Sell公式ドキュメント − Notes API](https://developer.zendesk.com/api-reference/sales-crm/resources/notes/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|メモの一意識別子|
|`content`|`string`|メモ内容|
|`is_important`|`boolean`|重要メモかどうか|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|最終更新日時|
|`creator_id`|`long`|作成者のユーザーID|
|`resource_type`|`string`|関連リソースのタイプ|
|`resource_id`|`long`|関連リソースのID|
|`type`|`string`|メモタイプ|
|`tags`|`string`|タグ|

### Orders

注文情報を取得します。
詳しくは、[Zendesk Sell公式ドキュメント − Orders API](https://developer.zendesk.com/api-reference/sales-crm/resources/orders/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|注文の一意識別子|
|`deal_id`|`long`|商談ID|
|`updated_at`|`timestamp`|最終更新日時|
|`created_at`|`timestamp`|作成日時|
|`discount`|`double`|割引額|

### Products

製品情報を取得します。
詳しくは、[Zendesk Sell公式ドキュメント − Products API](https://developer.zendesk.com/api-reference/sales-crm/resources/products/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|製品の一意識別子|
|`name`|`string`|製品名|
|`sku`|`string`|SKU|
|`description`|`string`|製品説明|
|`active`|`boolean`|アクティブかどうか|
|`cost_currency`|`string`|原価通貨|
|`max_discount`|`double`|最大割引額|
|`max_markup`|`double`|最大マークアップ額|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|最終更新日時|
|`version`|`long`|バージョン|
|`cost`|`double`|原価|
|`prices`|`string`|価格設定|

### Tasks

タスク情報を取得します。
詳しくは、[Zendesk Sell公式ドキュメント − Tasks API](https://developer.zendesk.com/api-reference/sales-crm/resources/tasks/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|タスクの一意識別子|
|`owner_id`|`long`|担当者のユーザーID|
|`content`|`string`|タスク内容|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|最終更新日時|
|`due_date`|`string`|期限日|
|`overdue`|`boolean`|期限切れかどうか|
|`creator_id`|`long`|作成者のユーザーID|
|`resource_type`|`string`|関連リソースのタイプ|
|`resource_id`|`long`|関連リソースのID|
|`completed`|`boolean`|完了済みかどうか|
|`completed_at`|`timestamp`|完了日時|
|`remind_at`|`timestamp`|リマインド日時|

### Users

ユーザー情報を取得します。
詳しくは、[Zendesk Sell公式ドキュメント − Users API](https://developer.zendesk.com/api-reference/sales-crm/resources/users/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|ユーザーの一意識別子|
|`name`|`string`|ユーザー名|
|`email`|`string`|メールアドレス|
|`phone_number`|`string`|電話番号|
|`timezone`|`string`|タイムゾーン|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|最終更新日時|
|`confirmed`|`boolean`|確認済みかどうか|
|`deleted_at`|`timestamp`|削除日時|
|`role`|`string`|ロール|
|`roles`|`string`|ロール一覧|
|`status`|`string`|ステータス|
|`invited`|`boolean`|招待済みかどうか|
|`team_name`|`string`|チーム名|
|`group`|`string`|グループ|
|`reports_to`|`string`|報告先|
|`system_tags`|`string`|システムタグ|
|`identity_type`|`string`|アイデンティティタイプ|
|`detached`|`boolean`|分離されているかどうか|
|`zendesk_user_id`|`long`|ZendeskユーザーID|
|`sell_login_disabled`|`boolean`|Sellログイン無効かどうか|

### Visits

訪問情報を取得します。
詳しくは、[Zendesk Sell公式ドキュメント − Visits API](https://developer.zendesk.com/api-reference/sales-crm/resources/visits/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|訪問の一意識別子|
|`creator_id`|`long`|作成者のユーザーID|
|`visited_at`|`timestamp`|訪問日時|
|`resource_id`|`long`|関連リソースのID|
|`outcome_id`|`long`|結果ID|
|`resource_address`|`string`|リソース住所|
|`rep_location_verification_status`|`string`|営業担当者の位置確認ステータス|
|`summary`|`string`|訪問概要|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|最終更新日時|
|`resource_type`|`string`|関連リソースのタイプ|