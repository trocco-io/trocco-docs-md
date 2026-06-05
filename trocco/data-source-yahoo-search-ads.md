---
articleId: ab295c67-f2ea-4c0f-981b-e40092fa7386
slug: data-source-yahoo-search-ads
title: 転送元 - Yahoo!検索広告
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---

## 概要

Yahoo!検索広告からデータを転送する設定のDocsです。
Yahoo!広告 APIを利用し、データを取得します。

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Yahoo!広告 API接続情報 | Yes |  - | あらかじめ登録してある[Yahoo!広告 API接続情報](/docs/the-authentification-of-yahoo-ads-api)から、今回の転送設定に必要な権限を持つものを選択します。 |
| ベースアカウントID | Yes |  - | 接続情報のYahoo! JAPANビジネスIDが直接権限を持つアカウント（MCCアカウント・広告アカウント）を選択します。<br>選択したアカウント、およびその配下全てのアカウントに対して操作が可能になります。|
| アカウントID | Yes |  - | 選択したベースアカウントIDで操作可能な、データ取得対象のアカウントIDを入力します。<br>アカウントIDは、検索広告の管理画面から確認できます。 |
| サービス | Yes | `ReportDefinitionService` | データ取得対象のサービスを、以下から選択します。<ul><li>`ReportDefinitionService`</li><li>`CampaignExportService`</li></ul> |

#### `ReportDefinitionService`を選択した場合

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| レポート種別 | Yes |  - | レポート種別を選択します。各レポートごとに取得できる項目が異なります。<br>一部、取得に対応していないレポート種別があります。必要なレポート種別が見つからない場合は、弊社カスタマーサクセスまでご相談ください。 |
| データ取得期間 | Yes |  -  | 絞り込み範囲の開始日、終了日を入力します。<br>`YYYYMMDD`形式で入力してください。（例: 20201119） |
| カラム | Yes |  - | 取得対象のカラム（フィールド）を入力します。<br>詳しくは、後述の[ReportDefinitionServiceにて取得できるフィールド](/docs/data-source-yahoo-search-ads#reportdefinitionserviceにて取得できるフィールド)を参照ください。 |
| フィルター設定 | No |  - | インプレッションが1以上のレコードのみを転送するかどうかを選択できます。|

:::(Info) (レポートテンプレート読み込み)

**レポート種別**にてレポートテンプレートがあるレポートを選択した場合、**レポートテンプレート読み込み**をクリックすることで、該当レポート種別の主要なフィールドを一括で設定できます。
:::

## 取得できるフィールド

### `ReportDefinitionService`にて取得できるフィールド

[Yahoo!マーケティングソリューション 公式資料](https://github.com/yahoojp-marketing/ads-search-api-documents/tree/master/reports/v19)の記載のとおりです。
取得したいレポート種別のcsvファイルを開き、**フィールド名/Field Name**列を参照ください。

:::(Info) (動作区分/Behavior Type)

[公式資料](https://github.com/yahoojp-marketing/ads-search-api-documents/tree/master/reports/v19)のcsvファイルにおける**動作区分/Behavior Type**列は、Yahoo!広告 APIにおける絞り込みの動作の種類を表しています。

- `ATTRIBUTE`：レポートにおける属性を表します。
- `SEGMENT`：検索の軸を表します。
- `METRIC`：絞り込みによって得られた数値を表します。
:::

:::(Warning) (インプレッションのない、動作区分列が`SEGMENT`のフィールド)

動作区分列が`SEGMENT`のフィールドは、インプレッション数が0の場合、フィルター設定が無効であっても取得されません。
:::

:::(Warning) (同時取得できないフィールド)

APIの仕様上、同時に取得できないフィールドの組み合わせが存在します。
[公式資料](https://github.com/yahoojp-marketing/ads-search-api-documents/tree/master/reports/v19)のcsvファイルにおける**組合せ不可フィールド/Not compatible fields**列を参照ください。
:::

### `CampaignExportService`にて取得されるフィールド

**サービス**にて`CampaignExportService`を選択した場合、以下のフィールドが自動で読み込まれます。
転送時にカラム名を変更したい場合や、不要なフィールドがある場合は、転送設定STEP2のカラム定義にて編集してください。

|フィールド名|フィールド名の概要（日本語）|フィールド名の概要（英語）|
|---|---|---|
|`CAMPAIGN_NAME`|キャンペーン名|Campaign Name|
|`AD_GROUP_NAME`|広告グループ名|Ad Group Name|
|`ENTITY_NAME`|コンポーネントの種類|Component Type|
|`ENTITY_STATUS`|配信設定|Display Settings|
|`DISPLAY_STATUS`|配信状況|Display Status|
|`BULK_MATCH_TYPE`|マッチタイプ|Match Type|
|`TERM`|キーワード|Keyword|
|`MANU_OPT_BID`|入札価格|Bid|
|`AD_NAME`|広告名|Ad Name|
|`BULK_AD_TYPE`|広告タイプ|Ad Type|
|`HEADLINE_1`|タイトル1|Title1|
|`HEADLINE_2`|タイトル2|Title2|
|`HEADLINE_3`|タイトル3|Title3|
|`DESCRIPTION1`|説明文1|Description1|
|`DESCRIPTION2`|説明文2|Description2|
|`DISPLAY_URL`|表示URL|Display URL|
|`PATH_1`|ディレクトリ1|Directory1|
|`PATH_2`|ディレクトリ2|Directory2|
|`ADVANCED_URL`|最終リンク先URL|Final URL|
|`ADVANCED_MOBILE_URL`|スマートフォン向けURL|Smartphone final URL|
|`TRACKING_URL`|トラッキングURL|Tracking URL|
|`CUSTOM_PARAMETER`|カスタム パラメータ|Custom Parameters|
|`BUDGET_AMOUNT`|キャンペーン予算（日額）|Campaign Daily Budget|
|`START_YMD`|キャンペーン開始日|Campaign Start Date|
|`END_YMD`|キャンペーン終了日|Campaign End Date|
|`PLATFORM_BID_MULTIPLIER`|スマートフォン入札価格調整率（%）|Smartphone Bid Adjustment (%)|
|`BULK_DEVICE_PREFERENCE`|優先デバイス|Focus Device|
|`CAMPAIGN_TYPE`|キャンペーンタイプ|Campaign Type|
|`AD_ROTATION_MODE`|効果の高い広告の優先表示|Frequently run better-performing ads|
|`LABELS`|ラベル|Labels|
|`CAMPAIGN_ID`|キャンペーンID|Campaign ID|
|`AD_GROUP_ID`|広告グループID|Ad Group ID|
|`CRITERION_ID`|キーワードID|Keyword ID|
|`AD_ID`|広告ID|Ad ID|
|`AD_TRACK_ID`|トラッキング用広告ID|Ad Track ID|
|`RAS_HEADLINE_1`|タイトル1（アセット）|Title 1 (asset)|
|`RAS_HEADLINE_POSITION1`|タイトル1の表示位置|Title 1 Position|
|`RAS_HEADLINE_2`|タイトル2（アセット）|Title 2 (asset)|
|`RAS_HEADLINE_POSITION2`|タイトル2の表示位置|Title 2 Position|
|`RAS_HEADLINE_3`|タイトル3（アセット）|Title 3 (asset)|
|`RAS_HEADLINE_POSITION3`|タイトル3の表示位置|Title 3 Position|
|`RAS_HEADLINE_4`|タイトル4（アセット）|Title 4 (asset)|
|`RAS_HEADLINE_POSITION4`|タイトル4の表示位置|Title 4 Position|
|`RAS_HEADLINE_5`|タイトル5（アセット）|Title 5 (asset)|
|`RAS_HEADLINE_POSITION5`|タイトル5の表示位置|Title 5 Position|
|`RAS_HEADLINE_6`|タイトル6（アセット）|Title 6 (asset)|
|`RAS_HEADLINE_POSITION6`|タイトル6の表示位置|Title 6 Position|
|`RAS_HEADLINE_7`|タイトル7（アセット）|Title 7 (asset)|
|`RAS_HEADLINE_POSITION7`|タイトル7の表示位置|Title 7 Position|
|`RAS_HEADLINE_8`|タイトル8（アセット）|Title 8 (asset)|
|`RAS_HEADLINE_POSITION8`|タイトル8の表示位置|Title 8 Position|
|`RAS_HEADLINE_9`|タイトル9（アセット）|Title 9 (asset)|
|`RAS_HEADLINE_POSITION9`|タイトル9の表示位置|Title 9 Position|
|`RAS_HEADLINE_10`|タイトル10（アセット）|Title 10 (asset)|
|`RAS_HEADLINE_POSITION10`|タイトル10の表示位置|Title 10 Position|
|`RAS_HEADLINE_11`|タイトル11（アセット）|Title 11 (asset)|
|`RAS_HEADLINE_POSITION11`|タイトル11の表示位置|Title 11 Position|
|`RAS_HEADLINE_12`|タイトル12（アセット）|Title 12 (asset)|
|`RAS_HEADLINE_POSITION12`|タイトル12の表示位置|Title 12 Position|
|`RAS_HEADLINE_13`|タイトル13（アセット）|Title 13 (asset)|
|`RAS_HEADLINE_POSITION13`|タイトル13の表示位置|Title 13 Position|
|`RAS_HEADLINE_14`|タイトル14（アセット）|Title 14 (asset)|
|`RAS_HEADLINE_POSITION14`|タイトル14の表示位置|Title 14 Position|
|`RAS_HEADLINE_15`|タイトル15（アセット）|Title 15 (asset)|
|`RAS_HEADLINE_POSITION15`|タイトル15の表示位置|Title 15 Position|
|`RAS_DESCRIPTION1`|説明文1（アセット）|Description 1 (asset)|
|`RAS_DESCRIPTION_POSITION1`|説明文1の表示位置|Description 1 Position|
|`RAS_DESCRIPTION2`|説明文2（アセット）|Description 2 (asset)|
|`RAS_DESCRIPTION_POSITION2`|説明文2の表示位置|Description 2 Position|
|`RAS_DESCRIPTION3`|説明文3（アセット）|Description 3 (asset)|
|`RAS_DESCRIPTION_POSITION3`|説明文3の表示位置|Description 3 Position|
|`RAS_DESCRIPTION4`|説明文4（アセット）|Description 4 (asset)|
|`RAS_DESCRIPTION_POSITION4`|説明文4の表示位置|Description 4 Position|
|`ASSET_ID`|広告表示オプションID|Ad display option ID|
|`ASSET_TYPE`|広告表示オプションの種類|Ad display option type|
|`ASSET_ADVANCED_URL`|クイックリンク最終リンク先URL|QuickLink final URL|
|`ASSET_ADVANCED_MOBILE_URL`|クイックリンクスマートフォン向けURL|QuickLink smartphone final URL|
|`ASSET_TRACKING_URL`|クイックリンクトラッキングURL|QuickLink tracking URL|
|`ASSET_CUSTOM_PARAMETER`|クイックリンクカスタムパラメータ|QuickLink custom parameter|
|`ASSET_LINK_TEXT`|クイックリンクテキスト|QuickLink text|
|`ASSET_DESCRIPTION1`|クイックリンク説明文1|QuickLink description 1|
|`ASSET_DESCRIPTION2`|クイックリンク説明文2|QuickLink description 2|
|`ASSET_CALLOUT_TEXT`|補足用テキスト|Callout text|
|`ASSET_HEADER`|補足カテゴリー|Category|
|`ASSET_VALUE_1`|補足内容1|Text 1|
|`ASSET_VALUE_2`|補足内容2|Text 2|
|`ASSET_VALUE_3`|補足内容3|Text 3|
|`ASSET_VALUE_4`|補足内容4|Text 4|
|`ASSET_VALUE_5`|補足内容5|Text 5|
|`ASSET_VALUE_6`|補足内容6|Text 6|
|`ASSET_VALUE_7`|補足内容7|Text 7|
|`ASSET_VALUE_8`|補足内容8|Text 8|
|`ASSET_VALUE_9`|補足内容9|Text 9|
|`ASSET_VALUE_10`|補足内容10|Text 10|
|`ASSET_PHONE_NUMBER`|電話番号|Phone Number|
|`CAMPAIGN_TRACK_ID`|トラッキング用キャンペーンID|Campaign Track ID|
|`AD_GROUP_TRACK_ID`|トラッキング用広告グループID|Ad Group Track ID|
|`CRITERION_TRACK_ID`|トラッキング用キーワードID|Keyword Track ID|
|`ASSET_IMAGE_NAME`|||
|`ASSET_ASPECT_RATIO`|||
|`EXPERIMENT_TYPE`|||
