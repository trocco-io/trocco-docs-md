---
articleId: e9e7f48b-bf95-4342-a54e-29cab9db7101
slug: data-source-square
title: 転送元 - Square
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Squareからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[Square接続情報](/docs/connection-configuration-square)を参照ください。

## 設定項目

### STEP1 基本設定

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|取得対象|✓|支払い一覧|取得対象を選択します。|
|店舗ID|✓\*|-|取得対象に**支払い一覧**・**請求書一覧**・**注文一覧**を選択した場合に指定できます。<br>**注文一覧**の場合、複数の店舗IDを入力できます。<br>なお、店舗ID(`location_id`)は、[Square Developer Portal](https://developer.squareup.com/)で作成したアプリの`Locations`から確認できます。<br>![data-source-square-2025-01-31-18-15-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-square-2025-01-31-18-15-0.png)|
|チャージバックID|-|-|取得対象に**チャージバック証拠一覧**を選択した場合に指定できます。<br>チャージバックID（`dispute_id`）は、**チャージバック一覧**から取得できます。|
|無効化されたカードを含める|-|OFF|**カード一覧**を選択した場合に選択できます。<br>詳しくは、[List cards](https://developer.squareup.com/reference/square/cards-api/list-cards#query__property-include_disabled)を参照ください。|
|開始時刻|-|-|転送データを開始日時を基準にフィルターできます。`YYYY-MM-DDTHH:MM:SSZ`形式で入力してください。|
|終了時刻|-|-|転送データを終了日時を基準にフィルターできます。`YYYY-MM-DDTHH:MM:SSZ`形式で入力してください。|

