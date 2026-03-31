---
articleId: 5b076008-6387-4154-9260-d678db362986
slug: data-source-survey-monkey
title: 転送元 - SurveyMonkey
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、SurveyMonkeyからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - SurveyMonkey](/docs/connection-configuration-survey-monkey)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

SurveyMonkey APIには、一定期間内のリクエスト回数に制限があります。
TROCCOのSurveyMonkeyコネクタのクライアント認証の形式はPublic Appsでの提供となり、上限はクライアント認証アプリごとに設定されます。
クライアント認証アプリで500,000リクエスト/日 の制限を超えると、HTTP 429エラーが返され、一時的にAPIが使用できなくなります。詳細は[SurveyMonkey公式ドキュメント − Public Apps](https://api.surveymonkey.com/v3/docs#public-apps)および[SurveyMonkey公式ドキュメント − Request and Response Limits](https://api.surveymonkey.com/v3/docs#request-and-response-limits)を参照ください。

:::

## 取得対象

### アンケート一覧

認証されたユーザーが所有または共有しているアンケートの一覧を取得します。
詳しくは、[SurveyMonkey公式ドキュメント − GET /surveys](https://api.surveymonkey.com/v3/docs#api-endpoints-get-surveys)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|更新日時（開始）|-|-|指定した日時以降に更新されたアンケートのみを取得します。<br>形式：`YYYY-MM-DDTHH:MM:SSZ`（例：`2023-01-01T00:00:00Z`）|
|更新日時（終了）|-|-|指定した日時以前に更新されたアンケートのみを取得します。<br>形式：`YYYY-MM-DDTHH:MM:SSZ`（例：`2023-12-31T23:59:59Z`）|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|アンケートID|
|`title`|`string`|アンケートのタイトル|
|`nickname`|`string`|アンケートのニックネーム|
|`href`|`string`|アンケートのURL|

### アンケート詳細情報

指定したアンケートの詳細情報を取得します。
詳しくは、[SurveyMonkey公式ドキュメント − GET /surveys/{id}/details](https://api.surveymonkey.com/v3/docs#api-endpoints-get-surveys-id-details)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|アンケートID|✓|-|詳細情報を取得したいアンケートのIDを入力します。<br>アンケートIDは「アンケート一覧」の取得対象から確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`title`|`string`|アンケートのタイトル|
|`nickname`|`string`|アンケートのニックネーム|
|`language`|`string`|アンケートの言語|
|`folder_id`|`string`|アンケートが格納されているフォルダーID|
|`category`|`string`|アンケートのカテゴリー|
|`question_count`|`long`|アンケート内の質問数|
|`page_count`|`long`|アンケートのページ数|
|`response_count`|`long`|回答数|
|`date_created`|`string`|アンケート作成日時|
|`date_modified`|`string`|アンケート最終更新日時|
|`id`|`string`|アンケートID|
|`buttons_text`|`json`|ボタンテキスト情報|
|`is_owner`|`boolean`|オーナーかどうか|
|`footer`|`boolean`|フッター表示フラグ|
|`theme_id`|`string`|テーマID|
|`template_id`|`string`|テンプレートID|
|`custom_variables`|`json`|カスタム変数情報|
|`href`|`string`|アンケートのURL|
|`analyze_url`|`string`|分析用URL|
|`edit_url`|`string`|編集用URL|
|`collect_url`|`string`|収集用URL|
|`summary_url`|`string`|サマリー用URL|
|`preview`|`string`|プレビューURL|
|`pages`|`json`|ページ情報|

### 連絡先一覧

SurveyMonkeyアカウント内の連絡先一覧を取得します。  
連絡先一覧を取得するには View Contacts scope が必要です。
詳しくは、[SurveyMonkey公式ドキュメント − Get contacts](https://api.surveymonkey.com/v3/docs#api-endpoints-get-contacts-bulk)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|連絡先ID|
|`first_name`|`string`|名前（名）|
|`last_name`|`string`|名前（姓）|
|`email`|`string`|メールアドレス|
|`phone_number`|`string`|電話番号|
|`href`|`string`|連絡先のURL|
|`custom_fields`|`json`|カスタムフィールド情報|
|`status`|`string`|連絡先のステータス|

### アンケートコレクター一覧

指定したアンケートのコレクター一覧を取得します。
詳しくは、[SurveyMonkey公式ドキュメント − Get collectors for a survey](https://api.surveymonkey.com/v3/docs#api-endpoints-get-surveys-survey_id-collectors)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|アンケートID|✓|-|コレクター一覧を取得したいアンケートのIDを入力します。<br>アンケートIDは「アンケート一覧」の取得対象から確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`name`|`string`|コレクターの名前|
|`id`|`string`|コレクターID|
|`href`|`string`|コレクターのURL|
|`type`|`string`|コレクターのタイプ|

### アンケート回答一覧

指定したアンケートの回答一覧を取得します。
詳しくは、[SurveyMonkey公式ドキュメント − Get responses for a survey (bulk)](https://api.surveymonkey.com/v3/docs#api-endpoints-get-surveys-survey_id-responses-bulk)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|アンケートID|✓|-|回答一覧を取得したいアンケートのIDを入力します。<br>アンケートIDは「アンケート一覧」の取得対象から確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|回答ID|
|`recipient_id`|`string`|回答者ID|
|`collection_mode`|`string`|回答収集モード|
|`response_status`|`string`|回答ステータス|
|`custom_value`|`string`|カスタム値|
|`first_name`|`string`|回答者の名前（名）|
|`last_name`|`string`|回答者の名前（姓）|
|`email_address`|`string`|回答者のメールアドレス|
|`ip_address`|`string`|回答者のIPアドレス|
|`logic_path`|`json`|ロジックパス情報|
|`metadata`|`json`|メタデータ情報|
|`page_path`|`json`|ページパス情報|
|`collector_id`|`string`|コレクターID|
|`survey_id`|`string`|アンケートID|
|`language`|`string`|回答時の言語|
|`custom_variables`|`json`|カスタム変数情報|
|`edit_url`|`string`|回答編集用URL|
|`analyze_url`|`string`|回答分析用URL|
|`total_time`|`long`|回答にかかった合計時間（秒）|
|`date_modified`|`timestamp`|回答の最終更新日時|
|`date_created`|`timestamp`|回答の作成日時|
|`href`|`string`|回答のURL|
|`pages`|`json`|ページ情報|

### アンケートロールアップ情報

指定したアンケートのロールアップ情報（集計データ）を取得します。
詳しくは、[SurveyMonkey公式ドキュメント − Get survey rollups](https://api.surveymonkey.com/v3/docs#api-endpoints-get-surveys-survey_id-rollups)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|アンケートID|✓|-|ロールアップ情報を取得したいアンケートのIDを入力します。<br>アンケートIDは「アンケート一覧」の取得対象から確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|質問ID|
|`family`|`string`|質問のファミリータイプ|
|`subtype`|`string`|質問のサブタイプ|
|`href`|`string`|質問のURL|
|`summary`|`json`|質問の集計情報|
