---
articleId: 6c1e0546-8b65-4420-8149-9cc168a312ce
slug: data-source-help-scout
title: 転送元 - Help Scout
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Help Scoutからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Help Scout](/docs/connection-configuration-help-scout)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Help Scout APIには、一定期間内のリクエスト回数に制限があります。1ユーザーあたり200リクエスト/10秒、および400リクエスト/分の制限があります。制限を超えると、HTTP 429エラーが返され、一時的にAPIが使用できなくなります。詳細は[Help Scout公式ドキュメント − Rate Limiting](https://developer.helpscout.com/mailbox-api/overview/rate-limiting/)を参照ください。
:::

## 取得対象

### Conversations

顧客との会話（チケット）の一覧を取得します。
詳しくは、[Help Scout公式ドキュメント − Conversations](https://developer.helpscout.com/mailbox-api/endpoints/conversations/list/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Status|-|-|取得する会話のステータスを選択します。<br>未指定の場合はすべてのステータスの会話を取得します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|会話の一意識別子|
|`number`|`long`|会話番号|
|`threads`|`long`|スレッド数|
|`type`|`string`|会話タイプ|
|`folderId`|`long`|フォルダID|
|`status`|`string`|ステータス|
|`state`|`string`|状態|
|`subject`|`string`|件名|
|`preview`|`string`|プレビュー|
|`mailboxId`|`long`|メールボックスID|
|`createdBy`|`json`|作成者情報|
|`createdAt`|`timestamp`|作成日時|
|`closedBy`|`long`|クローズした人のID|
|`closedByUser`|`json`|クローズした人の情報|
|`userUpdatedAt`|`timestamp`|ユーザー更新日時|
|`customerWaitingSince`|`json`|顧客待機開始情報|
|`source`|`json`|ソース情報|
|`tags`|`json`|タグ情報|
|`cc`|`json`|CC情報|
|`bcc`|`json`|BCC情報|
|`primaryCustomer`|`json`|主要顧客情報|
|`customFields`|`json`|カスタムフィールド|
|`_embedded`|`json`|埋め込みリソース|
|`_links`|`json`|リンク情報|

### Conversation Detail

指定した会話の詳細情報を取得します。
詳しくは、[Help Scout公式ドキュメント − Get Conversation](https://developer.helpscout.com/mailbox-api/endpoints/conversations/get/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Conversation ID|✓|-|取得対象の会話IDを入力します。<br>会話IDはConversations取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|会話の一意識別子|
|`number`|`long`|会話番号|
|`threads`|`long`|スレッド数|
|`type`|`string`|会話タイプ|
|`folderId`|`long`|フォルダID|
|`status`|`string`|ステータス|
|`state`|`string`|状態|
|`subject`|`string`|件名|
|`preview`|`string`|プレビュー|
|`mailboxId`|`long`|メールボックスID|
|`createdBy`|`json`|作成者情報|
|`createdAt`|`timestamp`|作成日時|
|`closedBy`|`long`|クローズした人のID|
|`closedByUser`|`json`|クローズした人の情報|
|`userUpdatedAt`|`timestamp`|ユーザー更新日時|
|`customerWaitingSince`|`json`|顧客待機開始情報|
|`source`|`json`|ソース情報|
|`tags`|`json`|タグ情報|
|`cc`|`json`|CC情報|
|`bcc`|`json`|BCC情報|
|`primaryCustomer`|`json`|主要顧客情報|
|`customFields`|`json`|カスタムフィールド|
|`_embedded`|`json`|埋め込みリソース|
|`_links`|`json`|リンク情報|

### Conversation Thread

指定した会話のスレッド（返信）一覧を取得します。
詳しくは、[Help Scout公式ドキュメント − List Threads](https://developer.helpscout.com/mailbox-api/endpoints/conversations/threads/list/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Conversation ID|✓|-|スレッドを取得する会話のIDを入力します。<br>会話IDはConversations取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|スレッドの一意識別子|
|`type`|`string`|スレッドタイプ|
|`status`|`string`|ステータス|
|`state`|`string`|状態|
|`action`|`json`|アクション情報|
|`body`|`string`|本文|
|`source`|`json`|ソース情報|
|`customer`|`json`|顧客情報|
|`createdBy`|`json`|作成者情報|
|`assignedTo`|`json`|担当者情報|
|`savedReplyId`|`long`|保存済み返信ID|
|`to`|`json`|宛先情報|
|`cc`|`json`|CC情報|
|`bcc`|`json`|BCC情報|
|`createdAt`|`timestamp`|作成日時|
|`_embedded`|`json`|埋め込みリソース|
|`_links`|`json`|リンク情報|

### Customers

顧客情報の一覧を取得します。
詳しくは、[Help Scout公式ドキュメント − Customers](https://developer.helpscout.com/mailbox-api/endpoints/customers/list/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|顧客の一意識別子|
|`firstName`|`string`|名|
|`lastName`|`string`|姓|
|`gender`|`string`|性別|
|`organization`|`string`|組織|
|`photoType`|`string`|写真タイプ|
|`photoUrl`|`string`|写真URL|
|`createdAt`|`timestamp`|作成日時|
|`updatedAt`|`timestamp`|更新日時|
|`background`|`string`|背景情報|
|`draft`|`boolean`|下書きフラグ|
|`_embedded`|`json`|埋め込みリソース|
|`_links`|`json`|リンク情報|

### Inboxes

メールボックス（受信箱）の一覧を取得します。
詳しくは、[Help Scout公式ドキュメント − Inboxes](https://developer.helpscout.com/mailbox-api/endpoints/inboxes/list/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|メールボックスの一意識別子|
|`name`|`string`|メールボックス名|
|`slug`|`string`|スラッグ|
|`email`|`string`|メールアドレス|
|`createdAt`|`timestamp`|作成日時|
|`updatedAt`|`timestamp`|更新日時|
|`_links`|`json`|リンク情報|

### Inbox Folders

指定したメールボックス内のフォルダ一覧を取得します。
詳しくは、[Help Scout公式ドキュメント − List Inbox Folders](https://developer.helpscout.com/mailbox-api/endpoints/inboxes/inbox-folders/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Inbox ID|✓|-|フォルダ一覧を取得するメールボックスのIDを入力します。<br>メールボックスIDはInboxes取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|フォルダの一意識別子|
|`name`|`string`|フォルダ名|
|`type`|`string`|フォルダタイプ|
|`userId`|`long`|ユーザーID|
|`totalCount`|`long`|合計数|
|`activeCount`|`long`|アクティブ数|
|`updatedAt`|`timestamp`|更新日時|

### Users

ユーザーの一覧を取得します。
詳しくは、[Help Scout公式ドキュメント − Users](https://developer.helpscout.com/mailbox-api/endpoints/users/list/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|ユーザーの一意識別子|
|`firstName`|`string`|名|
|`lastName`|`string`|姓|
|`email`|`string`|メールアドレス|
|`role`|`string`|ロール|
|`timezone`|`string`|タイムゾーン|
|`createdAt`|`timestamp`|作成日時|
|`updatedAt`|`timestamp`|更新日時|
|`type`|`string`|タイプ|
|`mention`|`string`|メンション名|
|`initials`|`string`|イニシャル|
|`jobTitle`|`string`|役職|
|`phone`|`string`|電話番号|
|`alternateEmails`|`json`|代替メールアドレス|
|`_links`|`json`|リンク情報|