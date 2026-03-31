---
articleId: c7e9986f-ced8-4692-a5b3-8a4c956f884a
slug: data-source-okta
title: 転送元 - Okta
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Oktaからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Okta](/docs/connection-configuration-okta)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Okta APIには、一定期間内のリクエスト回数に制限があります。制限を超えると、HTTP 429エラーが返され、一時的にAPIが使用できなくなります。詳細は[Okta公式ドキュメント − Rate Limits](https://developer.okta.com/docs/reference/rate-limits/)を参照ください。
:::

## 取得対象

### Applications

Oktaに登録されているアプリケーション情報を取得します。
詳しくは、[Okta公式ドキュメント − Applications](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Application/#tag/Application/operation/listApplications)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|アプリケーションの一意識別子|
|`orn`|`string`|Okta Resource Name|
|`name`|`string`|アプリケーション名|
|`label`|`string`|アプリケーションのラベル|
|`status`|`string`|アプリケーションのステータス|
|`lastUpdated`|`timestamp`|最終更新日時|
|`created`|`timestamp`|作成日時|
|`accessibility`|`json`|アクセシビリティ設定|
|`visibility`|`json`|可視性設定|
|`features`|`json`|機能設定|
|`signOnMode`|`string`|サインオンモード|
|`credentials`|`json`|認証情報|
|`settings`|`json`|設定情報|
|`_links`|`json`|関連リンク|

### Devices

Oktaに登録されているデバイス情報を取得します。
詳しくは、[Okta公式ドキュメント − Devices](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Device/#tag/Device/operation/listDevices)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|デバイスの一意識別子|
|`status`|`string`|デバイスのステータス|
|`created`|`timestamp`|作成日時|
|`lastUpdated`|`timestamp`|最終更新日時|
|`profile`|`json`|デバイスプロファイル|
|`resourceId`|`string`|リソースID|
|`resourceDisplayName`|`string`|リソース表示名|
|`resourceAlternateId`|`string`|リソース代替ID|
|`resourceType`|`string`|リソースタイプ|
|`_links`|`json`|関連リンク|

### Groups

Oktaに登録されているグループ情報を取得します。
詳しくは、[Okta公式ドキュメント − Groups](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroups)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|グループの一意識別子|
|`created`|`timestamp`|作成日時|
|`lastUpdated`|`timestamp`|最終更新日時|
|`lastMembershipUpdated`|`timestamp`|メンバーシップ最終更新日時|
|`objectClass`|`string`|オブジェクトクラス|
|`type`|`string`|グループタイプ|
|`profile`|`json`|グループプロファイル|
|`_links`|`json`|関連リンク|

### Group Members

指定したグループに所属するユーザー情報を取得します。
詳しくは、[Okta公式ドキュメント − Group Members](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/Group/#tag/Group/operation/listGroupUsers)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Group ID|✓|-|メンバーを取得するグループのIDを入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|ユーザーの一意識別子|
|`status`|`string`|ユーザーのステータス|
|`created`|`timestamp`|作成日時|
|`activated`|`timestamp`|有効化日時|
|`statusChanged`|`timestamp`|ステータス変更日時|
|`lastLogin`|`timestamp`|最終ログイン日時|
|`lastUpdated`|`timestamp`|最終更新日時|
|`passwordChanged`|`timestamp`|パスワード変更日時|
|`type`|`string`|ユーザータイプ|
|`profile`|`json`|ユーザープロファイル|
|`credentials`|`json`|認証情報|
|`_links`|`json`|関連リンク|

### Custom Roles

Oktaに登録されているカスタムロール情報を取得します。
詳しくは、[Okta公式ドキュメント − Custom Roles](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleECustom/#tag/RoleECustom/operation/listRoles)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|ロールの一意識別子|
|`label`|`string`|ロールのラベル|
|`description`|`string`|ロールの説明|
|`created`|`timestamp`|作成日時|
|`lastUpdated`|`timestamp`|最終更新日時|
|`_links`|`json`|関連リンク|

### Custom Role Permissions

指定したカスタムロールに付与されている権限情報を取得します。
詳しくは、[Okta公式ドキュメント − Role Permissions](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleECustomPermission/#tag/RoleECustomPermission/operation/listRolePermissions)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|RoleID or Label|✓|-|権限を取得するロールのIDまたはラベルを入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`label`|`string`|権限のラベル|
|`created`|`timestamp`|作成日時|
|`lastUpdated`|`timestamp`|最終更新日時|
|`conditions`|`json`|権限の条件|
|`_links`|`json`|関連リンク|

### Identify Providers

Oktaに設定されているアイデンティティプロバイダー情報を取得します。
詳しくは、[Okta公式ドキュメント − Identity Providers](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/IdentityProvider/#tag/IdentityProvider/operation/listIdentityProviders)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|アイデンティティプロバイダーの一意識別子|
|`issuerMode`|`string`|発行者モード|
|`name`|`string`|アイデンティティプロバイダー名|
|`status`|`string`|ステータス|
|`created`|`timestamp`|作成日時|
|`lastUpdated`|`timestamp`|最終更新日時|
|`protocol`|`string`|プロトコル|
|`policy`|`json`|ポリシー|
|`type`|`string`|アイデンティティプロバイダータイプ|
|`_links`|`json`|関連リンク|

### System Logs

Oktaのシステムログ情報を取得します。
詳しくは、[Okta公式ドキュメント − System Log](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/SystemLog/#tag/SystemLog/operation/listLogEvents)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Since|-|-|ログの開始日時をYYYY-MM-DDTHH:MM:SSZ形式で入力します。<br>例：2024-01-01T00:00:00Z|
|Until|-|-|ログの終了日時をYYYY-MM-DDTHH:MM:SSZ形式で入力します。<br>例：2024-01-01T23:59:59Z|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`actor`|`json`|アクター情報|
|`client`|`json`|クライアント情報|
|`device`|`json`|デバイス情報|
|`authenticationContext`|`json`|認証コンテキスト|
|`displayMessage`|`string`|表示メッセージ|
|`eventType`|`string`|イベントタイプ|
|`outcome`|`json`|結果情報|
|`published`|`timestamp`|公開日時|
|`securityContext`|`json`|セキュリティコンテキスト|
|`severity`|`string`|重要度|
|`debugContext`|`json`|デバッグコンテキスト|
|`legacyEventType`|`string`|レガシーイベントタイプ|
|`transaction`|`json`|トランザクション情報|
|`uuid`|`string`|一意識別子|
|`version`|`string`|バージョン|
|`request`|`json`|リクエスト情報|
|`target`|`json`|ターゲット情報|

### Users

Oktaに登録されているユーザー情報を取得します。
詳しくは、[Okta公式ドキュメント − Users](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/User/#tag/User/operation/listUsers)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|ユーザーの一意識別子|
|`status`|`string`|ユーザーのステータス|
|`created`|`timestamp`|作成日時|
|`activated`|`timestamp`|有効化日時|
|`statusChanged`|`timestamp`|ステータス変更日時|
|`lastLogin`|`timestamp`|最終ログイン日時|
|`lastUpdated`|`timestamp`|最終更新日時|
|`passwordChanged`|`timestamp`|パスワード変更日時|
|`type`|`string`|ユーザータイプ|
|`profile`|`json`|ユーザープロファイル|
|`credentials`|`json`|認証情報|
|`_links`|`json`|関連リンク|