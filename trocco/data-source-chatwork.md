---
articleId: b1886d1c-8ca4-40d5-9640-4f23c572f2dd
slug: data-source-chatwork
title: 転送元 - Chatwork
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Chatworkからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Chatwork](/docs/connection-configuration-chatwork)を参照ください。

## 利用上の注意・制約

:::(Warning) (APIトークンの必要性)

Chatwork APIを利用するには、APIトークンが必要です。APIトークンは、Chatworkの**サービス連携**画面から取得できます。また、パーソナルプラン以外をご利用の場合は、組織管理者の承認が必要です。詳細は[Chatwork公式ドキュメント](https://developer.chatwork.com/docs)を参照ください。
:::

:::(Info) (API利用規約の確認)

Chatwork APIを利用する前に、[Chatwork API利用規約](https://go.chatwork.com/ja/terms/api.html)を必ず確認してください。
:::

## 事前準備

## 取得対象

### コンタクト一覧

コンタクト（連絡先）一覧を取得します。
詳しくは、[Chatwork公式ドキュメント − コンタクト一覧を取得する](https://developer.chatwork.com/reference/get-contacts)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`account_id`|`long`|アカウントID|
|`room_id`|`long`|ルームID|
|`name`|`string`|ユーザー名|
|`chatwork_id`|`string`|ChatworkのユーザーID|
|`organization_id`|`long`|組織ID|
|`organization_name`|`string`|組織名|
|`department`|`string`|部署名|
|`avatar_image_url`|`string`|アバター画像のURL|

### チャットルーム一覧

チャットルーム一覧を取得します。
詳しくは、[Chatwork公式ドキュメント − チャット一覧を取得する](https://developer.chatwork.com/reference/get-rooms)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`room_id`|`long`|ルームID|
|`name`|`string`|ルーム名|
|`type`|`string`|ルームタイプ|
|`role`|`string`|ユーザーの役割|
|`sticky`|`boolean`|ピン留めされているかどうか|
|`unread_num`|`long`|未読メッセージ数|
|`mention_num`|`long`|メンション数|
|`mytask_num`|`long`|自分のタスク数|
|`message_num`|`long`|メッセージ数|
|`file_num`|`long`|ファイル数|
|`task_num`|`long`|タスク数|
|`icon_path`|`string`|ルームアイコンのパス|
|`last_update_time`|`long`|最終更新時刻（UNIX時間）|

### チャットルーム詳細

指定したチャットルームの詳細情報を取得します。
詳しくは、[Chatwork公式ドキュメント − チャットの情報を取得する](https://developer.chatwork.com/reference/get-rooms-room_id)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|ルームID|✓|-|詳細を取得するルームのIDを入力します。<br>ルームIDは、チャットルーム一覧から取得できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`room_id`|`long`|ルームID|
|`name`|`string`|ルーム名|
|`type`|`string`|ルームタイプ|
|`role`|`string`|ユーザーの役割|
|`sticky`|`boolean`|ピン留めされているかどうか|
|`unread_num`|`long`|未読メッセージ数|
|`mention_num`|`long`|メンション数|
|`mytask_num`|`long`|自分のタスク数|
|`message_num`|`long`|メッセージ数|
|`file_num`|`long`|ファイル数|
|`task_num`|`long`|タスク数|
|`icon_path`|`string`|ルームアイコンのパス|
|`description`|`string`|ルームの説明|
|`last_update_time`|`long`|最終更新時刻（UNIX時間）|

### チャットルームのメンバー一覧

指定したチャットルームのメンバー一覧を取得します。
詳しくは、[Chatwork公式ドキュメント − チャットのメンバー一覧を取得する](https://developer.chatwork.com/reference/get-rooms-room_id-members)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|ルームID|✓|-|メンバーを取得するルームのIDを入力します。<br>ルームIDは、チャットルーム一覧から取得できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`account_id`|`long`|アカウントID|
|`role`|`string`|ルーム内での役割|
|`name`|`string`|ユーザー名|
|`chatwork_id`|`string`|ChatworkのユーザーID|
|`organization_id`|`long`|組織ID|
|`organization_name`|`string`|組織名|
|`department`|`string`|部署名|
|`avatar_image_url`|`string`|アバター画像のURL|

### チャットルームのタスク一覧

指定したチャットルームのタスク一覧を取得します。
詳しくは、[Chatwork公式ドキュメント − 自分のタスク一覧を取得する](https://developer.chatwork.com/reference/get-my-tasks)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|ルームID|✓|-|タスクを取得するルームのIDを入力します。<br>ルームIDは、チャットルーム一覧から取得できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`task_id`|`long`|タスクID|
|`account`|`json`|担当者のアカウント情報|
|`assigned_by_account`|`json`|タスクを割り当てたアカウント情報|
|`message_id`|`string`|メッセージID|
|`body`|`string`|タスクの内容|
|`limit_time`|`long`|期限時刻（UNIX時間）|
|`status`|`string`|タスクのステータス|
|`limit_type`|`string`|期限の種類|

