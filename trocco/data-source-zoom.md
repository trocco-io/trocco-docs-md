---
articleId: 937d458b-fa84-46d5-98cb-165bb6fd9183
slug: data-source-zoom
title: 転送元 - Zoom
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Zoomからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Zoom](/docs/connection-configuration-zoom)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Zoom APIには、一定期間内のリクエスト回数に制限があります。TROCCOでは、LightまたはMediumのレート制限タイプのエンドポイントのみをサポートしています。制限を超えると、HTTP 429エラーが返され、一時的にAPIが使用できなくなります。詳細は[Zoom公式ドキュメント − Rate Limits](https://developers.zoom.us/docs/api/rate-limits/)を参照ください。
:::

:::(Warning) (認証情報の有効期限)

ZoomのOAuth認証には有効期限があります。アクセストークンの有効期限は1時間です。
TROCCOでは、リフレッシュトークンを使用してアクセストークンを自動的に更新するため、通常は再認証の必要はありません。
ただし、Zoom側でアプリの権限が変更された場合は、再認証が必要になることがあります。
:::

## 取得対象

### Users

Zoomアカウント内のユーザー一覧を取得します。
詳しくは、[Zoom公式ドキュメント − List Users](https://developers.zoom.us/docs/api/rest/reference/user/methods/#operation/users)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|ユーザーID|
|`first_name`|`string`|ファーストネーム|
|`last_name`|`string`|ラストネーム|
|`display_name`|`string`|表示名|
|`email`|`string`|メールアドレス|
|`type`|`long`|ユーザータイプ|
|`pmi`|`string`|Personal Meeting ID|
|`timezone`|`string`|タイムゾーン|
|`verified`|`long`|認証済みかどうか|
|`dept`|`string`|部署|
|`created_at`|`timestamp`|作成日時|
|`last_login_time`|`timestamp`|最終ログイン時刻|
|`last_client_version`|`string`|最終クライアントバージョン|
|`group_ids`|`string`|グループID|
|`language`|`string`|言語|
|`phone_number`|`string`|電話番号|
|`status`|`string`|ステータス|
|`role_id`|`string`|ロールID|
|`user_created_at`|`timestamp`|ユーザー作成日時|

### Meetings

指定したユーザーのミーティング一覧を取得します。
詳しくは、[Zoom公式ドキュメント − List Meetings](https://developers.zoom.us/docs/api/rest/reference/user/methods/#operation/meetings)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`User ID`|✓|-|ミーティングを取得するユーザーIDを入力します。<br>ユーザーIDは**Users**の取得対象で確認できます。|
|`Type`|-|scheduled|取得するミーティングのタイプを選択します。<br>scheduled（スケジュール済み）、live（ライブ中）、upcoming（今後開催予定）、upcoming_meetings（今後のミーティング）、previous_meetings（過去のミーティング）から選択できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`uuid`|`string`|ミーティングUUID|
|`id`|`string`|ミーティングID|
|`host_id`|`string`|ホストID|
|`topic`|`string`|トピック|
|`type`|`long`|ミーティングタイプ|
|`start_time`|`timestamp`|開始時刻|
|`duration`|`long`|継続時間（分）|
|`timezone`|`string`|タイムゾーン|
|`created_at`|`timestamp`|作成日時|
|`join_url`|`string`|参加URL|

### Meeting Registrants

指定したミーティングの登録者一覧を取得します。
詳しくは、[Zoom公式ドキュメント − List Meeting Registrants](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/meetingRegistrants)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Meeting ID`|✓|-|登録者を取得するミーティングIDを入力します。<br>ミーティングIDは**Meetings**の取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|登録者ID|
|`email`|`string`|メールアドレス|
|`first_name`|`string`|ファーストネーム|
|`last_name`|`string`|ラストネーム|
|`address`|`string`|住所|
|`city`|`string`|市区町村|
|`country`|`string`|国|
|`zip`|`string`|郵便番号|
|`state`|`string`|州/都道府県|
|`phone`|`string`|電話番号|
|`industry`|`string`|業界|
|`org`|`string`|組織名|
|`job_title`|`string`|役職|
|`purchasing_time_frame`|`string`|購入時期|
|`role_in_purchase_process`|`string`|購買プロセスにおける役割|
|`no_of_employees`|`string`|従業員数|
|`comments`|`string`|コメント|
|`custom_questions`|`string`|カスタム質問の回答|
|`status`|`string`|ステータス|
|`create_time`|`timestamp`|登録日時|
|`join_url`|`string`|参加URL|

### Meeting Polls

指定したミーティングの投票一覧を取得します。
詳しくは、[Zoom公式ドキュメント − List Meeting Polls](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/meetingPolls)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Meeting ID`|✓|-|投票を取得するミーティングIDを入力します。<br>ミーティングIDは**Meetings**の取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|投票ID|
|`title`|`string`|投票タイトル|
|`anonymous`|`boolean`|匿名投票かどうか|
|`poll_type`|`long`|投票タイプ|
|`questions`|`string`|質問内容（JSON形式）|
|`status`|`string`|ステータス|

### Meeting Questions

指定したミーティングの登録質問一覧を取得します。
詳しくは、[Zoom公式ドキュメント − List Registration Questions](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/meetingRegistrantsQuestionsGet)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Meeting ID`|✓|-|登録質問を取得するミーティングIDを入力します。<br>ミーティングIDは**Meetings**の取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`questions`|`string`|質問一覧（JSON形式）|
|`custom_questions`|`string`|カスタム質問一覧（JSON形式）|

### Webinar

指定したユーザーのウェビナー一覧を取得します。
詳しくは、[Zoom公式ドキュメント − List Webinars](https://developers.zoom.us/docs/api/rest/reference/user/methods/#operation/webinars)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`User ID`|✓|-|ウェビナーを取得するユーザーIDを入力します。<br>ユーザーIDは**Users**の取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`uuid`|`string`|ウェビナーUUID|
|`id`|`string`|ウェビナーID|
|`host_id`|`string`|ホストID|
|`topic`|`string`|トピック|
|`type`|`long`|ウェビナータイプ|
|`start_time`|`timestamp`|開始時刻|
|`duration`|`long`|継続時間（分）|
|`timezone`|`string`|タイムゾーン|
|`agenda`|`string`|アジェンダ|
|`created_at`|`timestamp`|作成日時|
|`join_url`|`string`|参加URL|

### Webinar Panelists

指定したウェビナーのパネリスト一覧を取得します。
詳しくは、[Zoom公式ドキュメント − List Panelists](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/webinarPanelists)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Webinar ID`|✓|-|パネリストを取得するウェビナーIDを入力します。<br>ウェビナーIDは**Webinar**の取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|パネリストID|
|`email`|`string`|メールアドレス|
|`name`|`string`|名前|
|`join_url`|`string`|参加URL|
|`virtual_background_id`|`string`|仮想背景ID|

### Webinar Registrants

指定したウェビナーの登録者一覧を取得します。
詳しくは、[Zoom公式ドキュメント − List Webinar Registrants](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/webinarRegistrants)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Webinar ID`|✓|-|登録者を取得するウェビナーIDを入力します。<br>ウェビナーIDは**Webinar**の取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|登録者ID|
|`email`|`string`|メールアドレス|
|`first_name`|`string`|ファーストネーム|
|`last_name`|`string`|ラストネーム|
|`address`|`string`|住所|
|`city`|`string`|市区町村|
|`country`|`string`|国|
|`zip`|`string`|郵便番号|
|`state`|`string`|州/都道府県|
|`phone`|`string`|電話番号|
|`industry`|`string`|業界|
|`org`|`string`|組織名|
|`job_title`|`string`|役職|
|`purchasing_time_frame`|`string`|購入時期|
|`role_in_purchase_process`|`string`|購買プロセスにおける役割|
|`no_of_employees`|`string`|従業員数|
|`comments`|`string`|コメント|
|`custom_questions`|`string`|カスタム質問の回答|
|`status`|`string`|ステータス|
|`create_time`|`timestamp`|登録日時|
|`join_url`|`string`|参加URL|

### Webinar Polls

指定したウェビナーの投票一覧を取得します。
詳しくは、[Zoom公式ドキュメント − List Webinar Polls](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/webinarPolls)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Webinar ID`|✓|-|投票を取得するウェビナーIDを入力します。<br>ウェビナーIDは**Webinar**の取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|投票ID|
|`title`|`string`|投票タイトル|
|`anonymous`|`boolean`|匿名投票かどうか|
|`poll_type`|`long`|投票タイプ|
|`questions`|`string`|質問内容（JSON形式）|
|`status`|`string`|ステータス|

### Webinar Questions

指定したウェビナーの登録質問一覧を取得します。
詳しくは、[Zoom公式ドキュメント − List Registration Questions](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/webinarRegistrantsQuestionsGet)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Webinar ID`|✓|-|登録質問を取得するウェビナーIDを入力します。<br>ウェビナーIDは**Webinar**の取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`questions`|`string`|質問一覧（JSON形式）|
|`custom_questions`|`string`|カスタム質問一覧（JSON形式）|

### Webinar Tracking Sources

指定したウェビナーのトラッキングソース一覧を取得します。
詳しくは、[Zoom公式ドキュメント − Get Tracking Sources](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/getTrackingSources)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|`Webinar ID`|✓|-|トラッキングソースを取得するウェビナーIDを入力します。<br>ウェビナーIDは**Webinar**の取得対象で確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|トラッキングソースID|
|`source_name`|`string`|ソース名|
|`tracking_url`|`string`|トラッキングURL|
|`visitor_count`|`long`|訪問者数|
|`registration_count`|`long`|登録者数|