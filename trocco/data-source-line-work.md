---
articleId: ee80bd55-e536-4f28-9db5-8904952fa7b9
slug: data-source-line-work
title: 転送元 - LINE WORKS
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---

本ページでは、LINE WORKSからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - LINE WORKS](/docs/connection-configuration-line-work)を参照ください。

## 利用上の注意・制約

### APIレート制限

LINE WORKS APIには以下のレート制限があります。

- **アドバンストプラン・スタンダードプラン**: 1APIあたり240リクエスト/分

レート制限を超過すると、`TOO_MANY_REQUESTS`エラーが返されます。
エラー発生後、最長1分でレート制限がリセットされます。
転送ジョブ実行中にレート制限を超過しエラーが返却された場合、制限解除まで待機し自動的にリトライを行います。

:::(Info) ()
一部のAPIやスコープには固有のレート制限がかかることがあります。
レート制限の詳細については、[LINE WORKS API 使用の上限](https://developers.worksmobile.com/jp/docs/rate-limits)を参照ください。
:::

## 取得対象

### 掲示板リスト

掲示板の情報を取得します。
詳しくは、[LINE WORKS Developers - Board API](https://developers.worksmobile.com/jp/docs/api)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`boardId`|`long`|掲示板 ID|
|`boardName`|`string`|件名|
|`description`|`string`|掲示板の説明|
|`createdTime`|`timestamp`|登録日時|
|`modifiedTime`|`timestamp`|更新日時|
|`displayOrder`|`long`|表示順位|
|`resourceLocation`|`long`|当該リソースの位置(地域コード)|

### Botリスト

Botの情報を取得します。
詳しくは、[LINE WORKS Developers - Bot API](https://developers.worksmobile.com/jp/docs/api)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`botId`|`long`|Bot ID|
|`botName`|`string`|Bot名|
|`photoUrl`|`string`|Botプロフィール画像が保存されたURL|
|`i18nBotNames`|`json`|Botの多国語名|
|`i18nPhotoUrls`|`json`|Botの多国語画像URL|

### 連絡先タグリスト

連絡先タグの情報を取得します。
詳しくは、[LINE WORKS Developers - Contact API](https://developers.worksmobile.com/jp/docs/api)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`contactTagId`|`string`|連絡先タグ ID|
|`contactTagName`|`string`|タグ名|
|`type`|`string`|タグタイプ|
|`userId`|`string`|マイタグの作成者|

### 連絡先リスト

連絡先の情報を取得します。
詳しくは、[LINE WORKS Developers - Contact API](https://developers.worksmobile.com/jp/docs/api)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`contactId`|`string`|連絡先 ID|
|`permission`|`json`|アクセス権限モデル|
|`contactName`|`json`|氏名モデル|
|`linkedExternalUser`|`json`|外部ユーザーモデル|
|`emails`|`json`|メールアドレスリスト|
|`telephones`|`json`|電話番号リスト|
|`organizations`|`json`|会社/所属リスト|
|`events`|`json`|誕生日/記念日リスト|
|`locations`|`json`|住所リスト|
|`messengers`|`json`|SNSリスト|
|`websites`|`json`|Webサイトリスト|
|`memo`|`string`|メモ|
|`contactTagIds`|`json`|連絡先タグリスト|
|`createdTime`|`timestamp`|登録日時|
|`modifiedTime`|`timestamp`|更新日時|

### グループリスト

グループの情報を取得します。
詳しくは、[LINE WORKS Developers - Directory API](https://developers.worksmobile.com/jp/docs/api)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`domainId`|`long`|ドメイン ID|
|`groupId`|`string`|グループ ID|
|`groupName`|`string`|グループ名|
|`description`|`string`|グループ説明|
|`visible`|`boolean`|グループ公開フラグ|
|`useServiceNotification`|`boolean`|サービス通知送信フラグ|
|`serviceManageable`|`boolean`|グループマスターによる利用機能の変更可否フラグ|
|`groupExternalKey`|`string`|グループの ExternalKey|
|`administrators`|`json`|グループマスターリスト|
|`members`|`json`|グループメンバーリスト|
|`useMessage`|`boolean`|トークの利用フラグ|
|`useNote`|`boolean`|ノートの利用フラグ|
|`useCalendar`|`boolean`|予定の利用フラグ|
|`useTask`|`boolean`|タスクの利用フラグ|
|`useFolder`|`boolean`|フォルダの利用フラグ|
|`useMail`|`boolean`|メーリングリストの利用フラグ|
|`groupEmail`|`string`|グループメールアドレ|
|`aliasEmails`|`json`|グループのサブメールアドレスリスト|
|`canReceiveExternalMail`|`boolean`|外部メールの受信可否フラグ|
|`toExternalEmails`|`json`|メーリングリストに含む外部メールアドレスのリスト|
|`membersAllowedToUseGroupEmailAsRecipient`|`json`|メーリングリスト宛てにメールを送信できるメンバーのリスト|
|`membersAllowedToUseGroupEmailAsSender`|`json`|メーリングリストを送信メールアドレスとして使用できるメンバーのリスト|

### 組織リスト

組織単位の情報を取得します。
詳しくは、[LINE WORKS Developers - Directory API](https://developers.worksmobile.com/jp/docs/api)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`domainId`|`long`|ドメイン ID|
|`orgUnitId`|`string`|組織ID|
|`orgUnitExternalKey`|`string`|組織の ExternalKey|
|`orgUnitName`|`string`|組織名|
|`i18nNames`|`json`|多言語名リスト|
|`email`|`string`|組織メールアドレス|
|`description`|`string`|組織説明|
|`visible`|`boolean`|組織公開フラグ|
|`parentOrgUnitId`|`string`|上位組織 ID|
|`parentExternalKey`|`string`|上位組織の ExternalKey|
|`displayOrder`|`long`|組織の表示順|
|`displayLevel`|`long`|組織の階層|
|`aliasEmails`|`json`|組織のサブメールアドレスのリスト|
|`canReceiveExternalMail`|`boolean`|外部メールの受信可否フラグ|
|`useMessage`|`boolean`|トークの利用フラグ|
|`useNote`|`boolean`|ノートの利用フラグ|
|`useCalendar`|`boolean`|予定の利用フラグ|
|`useTask`|`boolean`|タスクの利用フラグ|
|`useFolder`|`boolean`|フォルダの利用フラグ|
|`useServiceNotification`|`boolean`|サービス通知送信フラグ|
|`membersAllowedToUseOrgUnitEmailAsRecipient`|`json`|組織のメーリングリストアドレスにメールを送信できるメンバーのリスト|
|`membersAllowedToUseOrgUnitEmailAsSender`|`json`|組織のメーリングリストアドレスを送信メールアドレスとして使用できるメンバーのリスト|

### ユーザーリスト

ユーザーの情報を取得します。
詳しくは、[LINE WORKS Developers - Directory API](https://developers.worksmobile.com/jp/docs/api)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`domainId`|`long`|ドメイン ID|
|`userId`|`string`|ユーザー ID|
|`userExternalKey`|`string`|顧客企業で管理するユーザーの ExternalKey|
|`isAdministrator`|`boolean`|ドメイン管理者フラグ|
|`isPending`|`boolean`|登録待ちステータスフラグ|
|`isSuspended`|`boolean`|一時停止ステータスフラグ|
|`isDeleted`|`boolean`|削除ステータスフラグ|
|`isAwaiting`|`boolean`|待機中フラグ|
|`leaveOfAbsence`|`json`|休職情報|
|`suspendedReason`|`string`|一時停止理由|
|`email`|`string`|ログイン ID|
|`userName`|`json`|名前情報|
|`i18nNames`|`json`|多言語名リスト|
|`nickName`|`string`|ニックネーム|
|`privateEmail`|`string`|個人メールアドレス|
|`aliasEmails`|`json`|サブメールアドレスリスト|
|`employmentTypeId`|`string`|利用権限タイプ ID|
|`employmentTypeExternalKey`|`string`|利用権限タイプの ExternalKey|
|`employmentTypeName`|`string`|利用権限タイプ名|
|`userTypeId`|`string`|利用権限タイプ ID|
|`userTypeExternalKey`|`string`|利用権限タイプの ExternalKey|
|`userTypeName`|`string`|利用権限タイプ名|
|`userTypeCode`|`string`|利用権限タイプコード|
|`searchable`|`boolean`|サジェストへの表示フラグ|
|`organizations`|`json`|ユーザーが所属するドメインリスト|
|`telephone`|`string`|電話番号|
|`cellPhone`|`string`|携帯電話番号|
|`location`|`string`|勤務先|
|`task`|`string`|担当業務|
|`messenger`|`json`|SNS タイプモデル|
|`birthdayCalendarType`|`string`|誕生日の日付タイプ|
|`birthday`|`string`|生年月日|
|`locale`|`string`|多言語コード|
|`hiredDate`|`string`|入社日|
|`timeZone`|`string`|タイムゾーン|
|`customFields`|`json`|カスタムフィールド|
|`relations`|`json`|関係者連絡先リスト|
|`activationDate`|`timestamp`|利用開始日|
|`employeeNumber`|`string`|社員番号|
