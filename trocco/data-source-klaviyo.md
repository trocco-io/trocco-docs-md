---
articleId: a9551ae5-76ed-40c0-ae09-1902891c3532
slug: data-source-klaviyo
title: 転送元 - Klaviyo
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Klaviyoからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Klaviyo](/docs/connection-configuration-klaviyo)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Klaviyo APIには、一定期間内のリクエスト回数に制限があります。レート制限を超えると、HTTP 429エラーが返され、一時的にAPIが使用できなくなります。詳細は[Klaviyo公式ドキュメント − Rate Limits](https://developers.klaviyo.com/en/reference/api_overview#rate-limits)を参照ください。
:::

## 取得対象

### Campaigns

キャンペーン情報の一覧を取得します。
詳しくは、[Klaviyo公式ドキュメント − Get Campaigns](https://developers.klaviyo.com/en/reference/get_campaigns)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|チャネル|✓|-|取得するキャンペーンのチャネルを選択します。<br>Email、SMS、Pushから選択できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`type`|`string`|リソースタイプ（campaigns）|
|`id`|`string`|キャンペーンの一意識別子|
|`attributes`|`json`|キャンペーンの属性情報|
|`relationships`|`json`|関連リソースへの参照|
|`links`|`json`|リソースへのリンク|

### Events

イベント情報の一覧を取得します。
詳しくは、[Klaviyo公式ドキュメント − Get Events](https://developers.klaviyo.com/en/reference/get_events)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`type`|`string`|リソースタイプ（events）|
|`id`|`string`|イベントの一意識別子|
|`attributes`|`json`|イベントの属性情報|
|`relationships`|`json`|関連リソースへの参照|
|`links`|`json`|リソースへのリンク|

### Flows

フロー情報の一覧を取得します。
詳しくは、[Klaviyo公式ドキュメント − Get Flows](https://developers.klaviyo.com/en/reference/get_flows)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`type`|`string`|リソースタイプ（flows）|
|`id`|`string`|フローの一意識別子|
|`attributes`|`json`|フローの属性情報|
|`relationships`|`json`|関連リソースへの参照|
|`links`|`json`|リソースへのリンク|

### Lists

リスト情報の一覧を取得します。
詳しくは、[Klaviyo公式ドキュメント − Get Lists](https://developers.klaviyo.com/en/reference/get_lists)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`type`|`string`|リソースタイプ（lists）|
|`id`|`string`|リストの一意識別子|
|`attributes`|`json`|リストの属性情報|
|`relationships`|`json`|関連リソースへの参照|
|`links`|`json`|リソースへのリンク|

### Metrics

メトリクス情報の一覧を取得します。
詳しくは、[Klaviyo公式ドキュメント − Get Metrics](https://developers.klaviyo.com/en/reference/get_metrics)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`type`|`string`|リソースタイプ（metrics）|
|`id`|`string`|メトリクスの一意識別子|
|`attributes`|`json`|メトリクスの属性情報|
|`relationships`|`json`|関連リソースへの参照|
|`links`|`json`|リソースへのリンク|

### Profiles

プロファイル情報の一覧を取得します。
詳しくは、[Klaviyo公式ドキュメント − Get Profiles](https://developers.klaviyo.com/en/reference/get_profiles)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`type`|`string`|リソースタイプ（profiles）|
|`id`|`string`|プロファイルの一意識別子|
|`attributes`|`json`|プロファイルの属性情報|
|`relationships`|`json`|関連リソースへの参照|
|`links`|`json`|リソースへのリンク|

### Reviews

レビュー情報の一覧を取得します。
詳しくは、[Klaviyo公式ドキュメント − Get Reviews](https://developers.klaviyo.com/en/reference/get_reviews)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`type`|`string`|リソースタイプ（reviews）|
|`id`|`string`|レビューの一意識別子|
|`attributes`|`json`|レビューの属性情報|
|`relationships`|`json`|関連リソースへの参照|
|`links`|`json`|リソースへのリンク|

### Segments

セグメント情報の一覧を取得します。
詳しくは、[Klaviyo公式ドキュメント − Get Segments](https://developers.klaviyo.com/en/reference/get_segments)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`type`|`string`|リソースタイプ（segments）|
|`id`|`string`|セグメントの一意識別子|
|`attributes`|`json`|セグメントの属性情報|
|`relationships`|`json`|関連リソースへの参照|
|`links`|`json`|リソースへのリンク|