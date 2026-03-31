---
articleId: f50c2b78-e0bb-4434-941b-37965c39731e
slug: data-source-cloudsign
title: 転送元 - クラウドサイン
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、クラウドサインからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - クラウドサイン](/docs/connection-configuration-cloudsign)を参照ください。

## 利用上の注意・制約

現在、制約はありません。

## 取得対象

### 書類の一覧

書類の一覧を取得します。
APIの詳細については、[クラウドサイン Web API 仕様書](https://app.swaggerhub.com/apis/CloudSign/cloudsign-web_api/0.27.8#/documents/get_documents)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|状態|-|-|取得する書類の状態を指定できます。|
|書類の最終処理日時（開始）|-|-|取得する書類の最終処理日時の開始日時を指定できます。<br>ISO 8601形式（例：2024-01-01T00:00:00Z）で入力してください。|
|書類の最終処理日時（終了）|-|-|取得する書類の最終処理日時の終了日時を指定できます。<br>ISO 8601形式（例：2024-01-01T00:00:00Z）で入力してください。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|書類の一意識別子|
|`user_id`|`string`|ユーザーID|
|`title`|`string`|書類のタイトル|
|`note`|`string`|書類のメモ|
|`message`|`string`|書類のメッセージ|
|`status`|`long`|書類の状態|
|`can_transfer`|`boolean`|転送可能かどうか|
|`private`|`boolean`|非公開かどうか|
|`sent_at`|`timestamp`|送信日時|
|`last_processed_at`|`timestamp`|最終処理日時|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`participants`|`json`|参加者情報|
|`files`|`json`|ファイル情報|

### 書類の書類情報

指定した書類の詳細情報を取得します。
APIの詳細については、[クラウドサイン Web API 仕様書](https://app.swaggerhub.com/apis/CloudSign/cloudsign-web_api/0.27.8#/attribute/get_documents__documentID__attribute)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|書類ID|✓|-|詳細情報を取得する書類のIDを入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`document_id`|`string`|書類の一意識別子|
|`title`|`string`|書類のタイトル|
|`counterparty`|`string`|取引先|
|`contract_at`|`string`|契約日|
|`validity_start_at`|`string`|有効期間開始日|
|`validity_end_at`|`string`|有効期間終了日|
|`validity_end_notice_at`|`string`|有効期間終了通知日|
|`auto_update`|`long`|自動更新設定|
|`local_id`|`string`|ローカルID|
|`amount`|`long`|金額|
|`created_at`|`timestamp`|作成日時|
|`updated_at`|`timestamp`|更新日時|
|`options`|`json`|オプション情報|