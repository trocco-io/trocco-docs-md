---
articleId: 8f2fea92-532a-4bc9-ab52-c730e12be516
slug: data-source-typeform
title: 転送元 - Typeform
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---

本ページでは、Typeformからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Typeform](/docs/connection-configuration-typeform)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Typeform APIには、一定期間内のリクエスト回数に制限があります。1秒に2リクエスト/アカウントの制限があります。制限を超えると、HTTP 429エラーが返され、一時的にAPIが使用できなくなります。詳細は[Typeform公式ドキュメント - Rate Limits](https://developer.typeform.com/get-started/rate-limiting/)を参照ください。
:::

## 取得対象

### Workspaces

Typeformアカウントで利用可能なワークスペース一覧を取得します。
詳しくは、[Typeform公式ドキュメント - Workspaces](https://www.typeform.com/developers/create/reference/retrieve-workspaces/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`default`|`boolean`|デフォルトのワークスペースかどうか|
|`forms`|`string`|ワークスペース内のフォーム一覧のURL|
|`id`|`string`|ワークスペースの一意識別子|
|`name`|`string`|ワークスペース名|
|`account_id`|`string`|アカウントの一意識別子|
|`self`|`string`|ワークスペース詳細のURL|
|`shared`|`boolean`|共有ワークスペースかどうか|

### Workspace Member

指定したワークスペース内のメンバー情報を取得します。
詳しくは、[Typeform公式ドキュメント - Retrieve a workspace](https://developer.typeform.com/references/retrieve-workspace/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Workspace ID|✓|-|メンバー情報を取得するワークスペースのIDを入力します。<br>Workspace IDは、Workspaces取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`account_id`|`string`|アカウントの一意識別子|
|`default`|`boolean`|デフォルトのワークスペースかどうか|
|`forms`|`string`|ワークスペース内のフォーム一覧のURL|
|`id`|`string`|ワークスペースの一意識別子|
|`members`|`string`|ワークスペースメンバー一覧|
|`name`|`string`|ワークスペース名|
|`self`|`string`|ワークスペース詳細のURL|
|`shared`|`boolean`|共有ワークスペースかどうか|

### Forms

Typeformアカウントで利用可能なフォーム一覧を取得します。
詳しくは、[Typeform公式ドキュメント - Retrieve forms](https://developer.typeform.com/references/retrieve-forms/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|フォームの一意識別子|
|`type`|`string`|フォームタイプ|
|`title`|`string`|フォームのタイトル|
|`last_updated_at`|`timestamp`|最終更新日時|
|`created_at`|`timestamp`|作成日時|
|`settings`|`string`|フォーム設定情報|
|`self`|`string`|フォーム詳細のURL|
|`theme`|`string`|フォームテーマ情報|
|`_links`|`string`|関連リンク情報|

### Form Details

指定したフォームの詳細情報を取得します。
詳しくは、[Typeform公式ドキュメント - Retrieve a form](https://developer.typeform.com/references/retrieve-form/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Form ID|✓|-|詳細情報を取得するフォームのIDを入力します。<br>Form IDは、Forms取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|フォームの一意識別子|
|`type`|`string`|フォームタイプ|
|`title`|`string`|フォームのタイトル|
|`workspace`|`string`|所属ワークスペース情報|
|`theme`|`string`|フォームテーマ情報|
|`settings`|`string`|フォーム設定情報|
|`thankyou_screens`|`string`|サンクスページ設定|
|`fields`|`string`|フォームフィールド一覧|
|`variables`|`string`|フォーム変数設定|
|`logic`|`string`|フォームロジック設定|
|`created_at`|`timestamp`|作成日時|
|`last_updated_at`|`timestamp`|最終更新日時|
|`published_at`|`timestamp`|公開日時|
|`_links`|`string`|関連リンク情報|

### Response

指定したフォームへの回答一覧を取得します。
詳しくは、[Typeform公式ドキュメント - Retrieve responses](https://developer.typeform.com/references/retrieve-responses/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Form ID|✓|-|回答を取得するフォームのIDを入力します。<br>Form IDは、Forms取得対象で確認できます。|
|Submitted Since|-|-|指定した日時以降に提出された回答のみを取得します。<br>YYYY-MM-DDTHH:MM:SSまたはYYYY-MM-DDTHH:MM:SSZ形式（例：2024-01-01T00:00:00Z）で入力してください。|
|Submitted Until|-|-|指定した日時以前に提出された回答のみを取得します。<br>YYYY-MM-DDTHH:MM:SSまたはYYYY-MM-DDTHH:MM:SSZ形式（例：2024-12-31T23:59:59Z）で入力してください。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`landing_id`|`string`|ランディングページの一意識別子|
|`token`|`string`|回答セッションのトークン|
|`response_id`|`string`|回答の一意識別子|
|`response_type`|`string`|回答タイプ|
|`landed_at`|`timestamp`|フォームにアクセスした日時|
|`submitted_at`|`timestamp`|回答を提出した日時|
|`metadata`|`string`|回答に関するメタデータ|
|`hidden`|`string`|隠しフィールドの値|
|`calculated`|`string`|計算フィールドの値|
|`answers`|`string`|回答内容|
|`variables`|`string`|回答時の変数値|
|`thankyou_screen_ref`|`string`|表示されたサンクスページの参照|