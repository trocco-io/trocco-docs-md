---
articleId: 4245c193-aa03-43a2-973d-efc833a83785
slug: data-source-calendly
title: 転送元 - Calendly
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Calendlyからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Calendly](/docs/connection-configuration-calendly)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Calendly APIには、アクセス制限があります。詳しくは、[Calendly公式ドキュメント − Rate Limits](https://developer.calendly.com/api-docs/edca8074633f8-api-rate-limits)を参照ください。
:::

## 事前準備

Calendlyからデータを取得するには、接続情報にてPersonal Access Tokenを設定する必要があります。詳しくは、[接続情報 - Calendly](/docs/connection-configuration-calendly)を参照ください。

## 取得対象

### Basic Information

認証ユーザーの基本情報を取得します。
詳しくは、[Calendly公式ドキュメント − Get Current User](https://developer.calendly.com/api-docs/005832c83aeae-get-current-user)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`uri`|`string`|ユーザーのURI|
|`name`|`string`|ユーザー名|
|`slug`|`string`|ユーザーのslug|
|`email`|`string`|メールアドレス|
|`scheduling_url`|`string`|スケジュール設定用URL|
|`avatar_url`|`string`|アバター画像URL|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`current_organization`|`string`|現在の組織URI|
|`timezone`|`string`|タイムゾーン|
|`locale`|`string`|ロケール|
|`resource_type`|`string`|リソースタイプ|

### Event Types

指定した組織内のイベントタイプ一覧を取得します。
詳しくは、[Calendly公式ドキュメント − List Event Types](https://developer.calendly.com/api-docs/25a4ece03c1bc-list-user-s-event-types)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`organization`|✓|-|組織のURIを入力します。<br>組織URIは`Basic Information`で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`uri`|`string`|イベントタイプのURI|
|`name`|`string`|イベントタイプ名|
|`active`|`boolean`|アクティブかどうか|
|`slug`|`string`|イベントタイプのslug|
|`scheduling_url`|`string`|スケジュール設定用URL|
|`duration`|`long`|所要時間（分）|
|`kind`|`string`|イベントタイプの種類|
|`pooling_type`|`string`|プールタイプ|
|`type`|`string`|タイプ|
|`color`|`string`|色|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`internal_note`|`string`|内部メモ|
|`description_plain`|`string`|説明（プレーンテキスト）|
|`description_html`|`string`|説明（HTML）|
|`profile`|`json`|プロファイル情報|
|`secret`|`boolean`|秘密かどうか|
|`booking_method`|`string`|予約方法|
|`admin_managed`|`boolean`|管理者が管理するかどうか|
|`resource_type`|`string`|リソースタイプ|

### Groups

指定した組織内のグループ一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`organization`|✓|-|組織のURIを入力します。<br>組織URIは`Basic Information`で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`uri`|`string`|グループのURI|
|`name`|`string`|グループ名|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`member_count`|`long`|メンバー数|
|`organization`|`string`|組織URI|
|`resource_type`|`string`|リソースタイプ|

### Memberships

指定した組織内のメンバーシップ一覧を取得します。
詳しくは、[Calendly公式ドキュメント − List Organization Memberships](https://developer.calendly.com/api-docs/b3A6NTkxNDI0-list-organization-memberships)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`organization`|✓|-|組織のURIを入力します。<br>組織URIは`Basic Information`で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`uri`|`string`|メンバーシップのURI|
|`role`|`string`|役割|
|`user`|`json`|ユーザー情報|
|`organization`|`string`|組織URI|
|`updated_at`|`timestamp`|更新日時|
|`created_at`|`timestamp`|作成日時|
|`resource_type`|`string`|リソースタイプ|

### Scheduled Events

指定した組織内のスケジュールされたイベント一覧を取得します。
詳しくは、[Calendly公式ドキュメント − List Scheduled Events](https://developer.calendly.com/api-docs/2d5ed9bbd2952-list-events)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`organization`|✓|-|組織のURIを入力します。<br>組織URIは`Basic Information`で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`uri`|`string`|スケジュールされたイベントのURI|
|`name`|`string`|イベント名|
|`meeting_notes_plain`|`string`|ミーティングノート（プレーンテキスト）|
|`meeting_notes_html`|`string`|ミーティングノート（HTML）|
|`status`|`string`|ステータス|
|`start_time`|`timestamp`|開始時刻|
|`end_time`|`timestamp`|終了時刻|
|`event_type`|`string`|イベントタイプURI|
|`location`|`json`|場所情報|
|`invitees_counter`|`json`|招待者数カウンター|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`event_memberships`|`json`|イベントメンバーシップ|
|`event_guests`|`json`|イベントゲスト|
|`calendar_event`|`json`|カレンダーイベント|
|`cancellation`|`json`|キャンセル情報|
|`resource_type`|`string`|リソースタイプ|

### Event Invitees

指定したスケジュール済みイベントの招待者一覧を取得します。
詳しくは、[Calendly公式ドキュメント − List Event Invitees](https://developer.calendly.com/api-docs/eb8ee72701f99-list-event-invitees)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Scheduled Event uuid`|✓|-|招待者情報を取得するスケジュール済みイベントのUUIDを入力します。<br>UUIDは、Scheduled EventsのuriカラムからUUID部分を抽出して使用します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`uri`|`string`|招待者のURI|
|`name`|`string`|招待者名|
|`email`|`string`|招待者のメールアドレス|
|`text_reminder_number`|`string`|テキストリマインダー番号|
|`timezone`|`string`|タイムゾーン|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`canceled`|`boolean`|キャンセル済みかどうか|
|`cancellation`|`json`|キャンセル情報|
|`event`|`string`|イベントURI|
|`questions_and_answers`|`json`|質問と回答|
|`questions_and_responses`|`json`|質問と応答|
|`routing_form_submission`|`string`|ルーティングフォーム提出URI|
|`status`|`string`|ステータス|
|`tracking`|`json`|トラッキング情報|
|`utc_offset`|`string`|UTCオフセット|
|`rescheduled`|`boolean`|再スケジュール済みかどうか|
|`old_invitee`|`string`|元の招待者URI|
|`new_invitee`|`string`|新しい招待者URI|
|`cancel_url`|`string`|キャンセル用URL|
|`reschedule_url`|`string`|再スケジュール用URL|
|`payment`|`json`|支払い情報|
|`no_show`|`json`|不参加情報|
|`reconfirmation`|`json`|再確認情報|
|`resource_type`|`string`|リソースタイプ|

