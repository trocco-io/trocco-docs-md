---
articleId: feecf094-4f7f-4952-8c6c-42cca8d61446
slug: data-source-fresh-service
title: 転送元 - Freshservice
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Freshserviceからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Freshservice](/docs/connection-configuration-fresh-service)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Freshservice APIには、一定期間内のリクエスト回数に制限があります。1時間あたり5000リクエストの制限があります。制限を超えると、HTTP 429エラーが返され、一時的にAPIが使用できなくなります。詳細は[Freshservice公式ドキュメント - API Rate Limits](https://developers.freshworks.com/docs/app-sdk/v3.0/service_user/rest-apis/)を参照ください。
:::

## 取得対象

### Agents

エージェント（管理者やサポートスタッフ）の一覧を取得します。
詳しくは、[Freshservice公式ドキュメント - Agents](https://developers.freshworks.com/docs/app-sdk/v3.0/service_user/rest-apis/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|State|-|-|取得するエージェントの状態を選択できます。<br>以下より選択できます。<ul><li>fulltime</li><li>occasional</li></ul><br>未指定の場合は、すべての状態のエージェントを取得します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`active`|`boolean`|アクティブ状態|
|`address`|`string`|住所|
|`api_key_enabled`|`boolean`|APIキーが有効かどうか|
|`auto_assign_status_changed_at`|`timestamp`|自動割り当て状態の変更日時|
|`auto_assign_tickets`|`boolean`|チケットの自動割り当て設定|
|`background_information`|`string`|背景情報|
|`can_see_all_tickets_from_associated_departments`|`boolean`|関連部署の全チケットを閲覧可能かどうか|
|`created_at`|`timestamp`|作成日時|
|`custom_fields`|`json`|カスタムフィールド|
|`department_ids`|`json`|部署ID一覧|
|`department_names`|`json`|部署名一覧|
|`email`|`string`|メールアドレス|
|`external_id`|`string`|外部ID|
|`first_name`|`string`|名前|
|`has_logged_in`|`boolean`|ログイン実績があるかどうか|
|`id`|`long`|エージェントID|
|`job_title`|`string`|職業|
|`language`|`string`|言語設定|
|`last_active_at`|`timestamp`|最終アクティブ日時|
|`last_login_at`|`timestamp`|最終ログイン日時|
|`last_name`|`string`|苗字|
|`location_id`|`long`|ロケーションID|
|`location_name`|`string`|ロケーション名|
|`mobile_phone_number`|`string`|携帯電話番号|
|`occasional`|`boolean`|臨時エージェントかどうか|
|`reporting_manager_id`|`long`|上司のID|
|`roles`|`json`|役割一覧|
|`scoreboard_level_id`|`long`|スコアボードレベルID|
|`scoreboard_points`|`long`|スコアボードポイント|
|`signature`|`string`|署名|
|`time_format`|`string`|時間形式|
|`time_zone`|`string`|タイムゾーン|
|`updated_at`|`timestamp`|更新日時|
|`vip_user`|`boolean`|VIPユーザーかどうか|
|`work_phone_number`|`string`|職場電話番号|
|`work_schedule_id`|`long`|勤務スケジュールID|
|`workspace_ids`|`json`|ワークスペースID一覧|
|`workspace_info`|`json`|ワークスペース情報|
|`member_of`|`json`|メンバーとして参加しているグループ|
|`observer_of`|`json`|監視者として参加しているグループ|
|`member_of_pending_approval`|`json`|参加申請中のグループ|
|`observer_of_pending_approval`|`json`|監視者申請中のグループ|

### Requesters

リクエスター（サービスを利用するユーザー）の一覧を取得します。
詳しくは、[Freshservice公式ドキュメント - Requesters](https://developers.freshworks.com/docs/app-sdk/v3.0/service_user/rest-apis/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`active`|`boolean`|アクティブ状態|
|`address`|`string`|住所|
|`background_information`|`string`|背景情報|
|`can_see_all_changes_from_associated_departments`|`boolean`|関連部署の全変更を閲覧可能かどうか|
|`can_see_all_tickets_from_associated_departments`|`boolean`|関連部署の全チケットを閲覧可能かどうか|
|`created_at`|`timestamp`|作成日時|
|`custom_fields`|`json`|カスタムフィールド|
|`department_ids`|`json`|部署ID一覧|
|`department_names`|`json`|部署名一覧|
|`external_id`|`string`|外部ID|
|`first_name`|`string`|名前|
|`has_logged_in`|`boolean`|ログイン実績があるかどうか|
|`id`|`long`|リクエスターID|
|`is_agent`|`boolean`|エージェントかどうか|
|`job_title`|`string`|職業|
|`language`|`string`|言語設定|
|`last_name`|`string`|苗字|
|`location_id`|`long`|ロケーションID|
|`location_name`|`string`|ロケーション名|
|`mobile_phone_number`|`string`|携帯電話番号|
|`primary_email`|`string`|メインメールアドレス|
|`reporting_manager_id`|`long`|上司のID|
|`secondary_emails`|`json`|サブメールアドレス一覧|
|`time_format`|`string`|時間形式|
|`time_zone`|`string`|タイムゾーン|
|`updated_at`|`timestamp`|更新日時|
|`vip_user`|`boolean`|VIPユーザーかどうか|
|`work_phone_number`|`string`|職場電話番号|
|`work_schedule_id`|`long`|勤務スケジュールID|

### Tickets

チケット（サービスリクエストやインシデント）の一覧を取得します。
詳しくは、[Freshservice公式ドキュメント - Tickets](https://developers.freshworks.com/docs/app-sdk/v3.0/service_user/rest-apis/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Updated since|-|-|指定した日時以降に更新されたチケットのみを取得します。<br>以下の形式で入力できます：<ul><li>YYYY-MM-DD（例：2015-08-17）</li><li>YYYY-MM-DDTHH:MM:SSZ（例：2015-08-17T10:30:00Z）</li><li>その他のISO 8601形式</li></ul>タイムゾーンが指定されていない場合は、UTCとして扱われます。|
|Workspace ID|-|-|特定のワークスペースのチケットのみを取得します。<br>ワークスペースIDは、Freshserviceの管理画面で確認できます。|
|Include|-|-|取得するチケットに含める追加情報を選択できます。<br>以下より選択できます。<ul><li>stats</li><li>requester</li><li>requested_for</li><li>onboarding_context</li><li>offboarding_context</li></ul>|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`subject`|`string`|件名|
|`group_id`|`long`|グループID|
|`department_id`|`long`|部署ID|
|`category`|`string`|カテゴリ|
|`sub_category`|`string`|サブカテゴリ|
|`item_category`|`string`|アイテムカテゴリ|
|`requester_id`|`long`|リクエスターID|
|`responder_id`|`long`|対応者ID|
|`due_by`|`timestamp`|期限日時|
|`fr_escalated`|`boolean`|初回エスカレーション済みかどうか|
|`deleted`|`boolean`|削除済みかどうか|
|`spam`|`boolean`|スパムかどうか|
|`email_config_id`|`long`|メール設定ID|
|`fwd_emails`|`json`|転送メールアドレス一覧|
|`reply_cc_emails`|`json`|返信CCメールアドレス一覧|
|`cc_emails`|`json`|CCメールアドレス一覧|
|`is_escalated`|`boolean`|エスカレーション済みかどうか|
|`fr_due_by`|`timestamp`|初回返信期限日時|
|`id`|`long`|チケットID|
|`priority`|`long`|優先度|
|`status`|`long`|ステータス|
|`source`|`long`|ソース|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`workspace_id`|`long`|ワークスペースID|
|`requested_for_id`|`long`|代理リクエストID|
|`to_emails`|`json`|送信先メールアドレス一覧|
|`type`|`string`|タイプ|
|`description`|`string`|説明|
|`description_text`|`string`|説明テキスト|
|`custom_fields`|`json`|カスタムフィールド|
|`requester`|`json`|リクエスター情報|
|`stats`|`json`|統計情報|
|`requested_for`|`json`|代理リクエスト情報|
|`onboarding_context`|`json`|オンボーディングコンテキスト|
|`offboarding_context`|`json`|オフボーディングコンテキスト|