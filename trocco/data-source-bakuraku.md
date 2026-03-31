---
articleId: b6d6a320-b9d0-4a09-9aca-cba05e8367ba
slug: data-source-bakuraku
title: 転送元 - バクラク
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、バクラクからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - バクラク](/docs/connection-configuration-bakuraku)を参照ください。

## 利用上の注意・制約

:::(Warning) (API制限について)

バクラクAPIには利用制限があります。短時間に大量のAPIリクエストを送信すると、一時的にAPIが使用できなくなる可能性があります。
:::

## 取得対象

### ユーザー情報一覧

バクラクのユーザー情報一覧を取得します。
APIの詳細については、[Bakuraku API - ユーザー情報一覧の取得](https://api.bakuraku.layerx.jp/rest/docs/?zwandzv4gqjw75nb5a5ujsblwi=9cYgxR3zk4vr3Tva3i1RLyCHyt04aHm9F98yIyzp4F5MVGvs_GPES6GVLz6f0n5i9lZgGSjx#/operations/GetTenantUsers)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`tenantUserId`|`string`|テナントユーザーID|
|`employeeCode`|`string`|従業員コード|
|`name`|`string`|ユーザー名|
|`email`|`string`|メールアドレス|
|`activationStatus`|`string`|アクティベーション状態|
|`invitationStatus`|`string`|招待状態|
|`role`|`json`|ロール|

### 役職一覧

バクラクの役職一覧を取得します。
APIの詳細については、[Bakuraku API - 役職一覧の取得](https://api.bakuraku.layerx.jp/rest/docs/?zwandzv4gqjw75nb5a5ujsblwi=9cYgxR3zk4vr3Tva3i1RLyCHyt04aHm9F98yIyzp4F5MVGvs_GPES6GVLz6f0n5i9lZgGSjx#/operations/GetTenantPositions)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|役職ID|
|`positionCode`|`string`|役職コード|
|`name`|`string`|役職名|
|`rank`|`long`|ランク|
|`default`|`boolean`|デフォルト役職かどうか|

### チーム一覧

バクラクのチーム一覧を取得します。
APIの詳細については、[Bakuraku API - チーム一覧の取得](https://api.bakuraku.layerx.jp/rest/docs/?zwandzv4gqjw75nb5a5ujsblwi=9cYgxR3zk4vr3Tva3i1RLyCHyt04aHm9F98yIyzp4F5MVGvs_GPES6GVLz6f0n5i9lZgGSjx#/operations/GetTenantGroups)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|チームID|
|`groupCode`|`string`|チームコード|
|`name`|`string`|チーム名|
|`parentGroupCode`|`string`|親チームコード|
|`activationStatus`|`string`|アクティベーション状態|

### 所属一覧

バクラクのユーザー所属情報一覧を取得します。
APIの詳細については、[Bakuraku API - 所属一覧の取得](https://api.bakuraku.layerx.jp/rest/docs/?zwandzv4gqjw75nb5a5ujsblwi=9cYgxR3zk4vr3Tva3i1RLyCHyt04aHm9F98yIyzp4F5MVGvs_GPES6GVLz6f0n5i9lZgGSjx#/operations/GetTenantUserGroupPositions)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`employeeCode`|`string`|従業員コード|
|`groupCode`|`string`|チームコード|
|`positionCode`|`string`|役職コード|
|`default`|`boolean`|デフォルト所属かどうか|

### 申請一覧

バクラクの申請一覧を取得します。
APIの詳細については、[Bakuraku API - 申請一覧の取得](https://api.bakuraku.layerx.jp/rest/docs/?zwandzv4gqjw75nb5a5ujsblwi=9cYgxR3zk4vr3Tva3i1RLyCHyt04aHm9F98yIyzp4F5MVGvs_GPES6GVLz6f0n5i9lZgGSjx#/operations/GetRequests)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|approvedAtFrom|-|-|承認日時の下限を入力します。|
|approvedAtTo|-|-|承認日時の上限を入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|申請ID|
|`num`|`long`|申請番号|
|`openedAt`|`timestamp`|申請日時|
|`approvedAt`|`timestamp`|承認日時|
|`title`|`string`|申請タイトル|
|`status`|`string`|申請ステータス|
|`proxyRequestUser`|`json`|代理申請者情報|
|`requestUserGroup`|`json`|申請者所属情報|
|`defaultFieldValue`|`json`|デフォルトフィールド値|
|`form`|`json`|フォーム情報|
|`requestUser`|`json`|申請者情報|
|`paymentDigestibility`|`json`|支払関連情報|

### 申請詳細

指定した申請の詳細情報を取得します。
APIの詳細については、[Bakuraku API - 申請詳細の取得](https://api.bakuraku.layerx.jp/rest/docs/?zwandzv4gqjw75nb5a5ujsblwi=9cYgxR3zk4vr3Tva3i1RLyCHyt04aHm9F98yIyzp4F5MVGvs_GPES6GVLz6f0n5i9lZgGSjx#/operations/GetRequest)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|ID|✓|-|詳細を取得する申請のIDを入力します。<br>申請IDは、申請一覧から取得できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|申請ID|
|`num`|`long`|申請番号|
|`openedAt`|`timestamp`|申請日時|
|`approvedAt`|`timestamp`|承認日時|
|`title`|`string`|申請タイトル|
|`status`|`string`|申請ステータス|
|`proxyRequestUser`|`json`|代理申請者情報|
|`requestUserGroup`|`json`|申請者所属情報|
|`requestUser`|`json`|申請者情報|
|`newClientValue`|`json`|新規取引先情報|
|`requestToPurchaseRelations`|`json`|申請-購買関連情報|
|`defaultFieldValue`|`json`|デフォルトフィールド値|
|`requestStepSets`|`json`|承認ステップ情報|
|`requestDetails`|`json`|申請詳細情報|
|`form`|`json`|フォーム情報|
|`formFieldValues`|`json`|フォームフィールド値|
|`paymentDigestibility`|`json`|支払関連情報|
|`purchaseToRequestRelations`|`json`|購買-申請関連情報|
|`relatedRequests`|`json`|関連申請情報|
|`requestStepComments`|`json`|承認ステップコメント|
|`userUploadFiles`|`json`|アップロードファイル情報|