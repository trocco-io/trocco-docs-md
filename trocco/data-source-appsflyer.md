---
articleId: 1a5996f6-6697-4a08-bc89-5a15e71a921b
slug: data-source-appsflyer
title: 転送元 - AppsFlyer
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
AppsFlyerから転送する設定のDocsです。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| AppsFlyer接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br>接続情報の設定方法は[AppsFlyerの接続情報](/docs/connection-configuration-appsflyer)をご参照ください。 |
| アプリID | Yes | - | アプリIDを入力します。 |
| レポート種別 | Yes | - | [レポート種別](/docs/data-source-appsflyer#レポート種別)を選択します。|
| データ取得期間 | Yes | - | 転送したいデータの、開始日時と終了日時を入力します。<br>`YYYY-MM-DD`または`YYYY-MM-DD HH:mm:ss`形式で入力してください。<br>データ取得期間について、詳しくは下記を参照ください。 |
| タイムゾーン | Yes | Etc/UTC | データ取得期間のタイムゾーンを設定します。 |

:::(Warning) (データ取得期間について)
* 開始日時
    * 時刻 (HH:mm:ss) を指定しない場合、代わりに**当日**の`00:00:00`が指定されます。
    * 開始日時時に指定した時刻は、データ取得期間に**含まれます**。
* 終了日時
    * 時刻 (HH:mm:ss) を指定しない場合、代わりに**翌日**の`00:00:00`が指定されます。
    * 終了日時時に指定した時刻は、データ取得期間に**含まれません**。
    例. 終了日時に`2022-12-31`を指定した場合、代わりに`2023-01-01 00:00:00`が指定されます。
    このとき、`2022-12-31 23:59:59`までのデータが取得されます。
:::


## レポート種別
以下のローデータレポートを取得できます。
| TROCCO上のレポート種別名 | AppsFlyer API上のレポート名 |
| --- | --- |
| インストール | Installs |
| アプリ内イベント | In-app events |
| アンインストール | Uninstalls |
| 再インストール | Reinstalls |
| オーガニックインストール | Organic Installs |
| オーガニックアプリ内イベント | Organic in-app events |
| オーガニックアンインストール | Organic uninstalls |
| オーガニック再インストール | Organic reinstalls |


## 制約
AppsFlyerのAPIを利用する上で、以下の制約があります。
:::(Warning) (取得可能なレコード数)
* 1回の転送につき、取得できるレコード件数は最大**100万行**です。
* レコード件数が100万件を超えるレポートを転送しようとすると、転送エラーが発生します。
:::
:::(Warning) (レポート取得回数の制限)
AppsFlyerでは、1日に取得できるレポートの回数に制限があります。
回数制限は、お客様のご契約のプランにより異なります。
詳しくは、[レポートの回数制限](https://support.appsflyer.com/hc/ja/articles/207034366)を参照ください。
:::
:::(Warning) (取得可能なデータの期間)
AppsFlyerでは、取得できるレポートの期間に制限があります。
* アプリ内イベント、およびオーガニックアプリ内イベント：過去90日間のうち31日
* 上記以外のレポート：過去90日間のうち60日

詳しくは、[Data availability windows](https://support.appsflyer.com/hc/en-us/articles/4415473374865)を参照ください。
:::

### レコード件数が100万件を超える場合
2通りの対応があります。
:::(Info) (データ取得期間の範囲を狭める)
データ取得期間の開始日時・終了日時は、時間単位で範囲を指定できます。
ただし、前述の通り、1日のレポート取得回数（転送回数）制限があることに注意してください。
詳しくは、[日付と時刻による期間範囲](https://support.appsflyer.com/hc/ja/articles/360007530258-Pull-API-ローデータの使用#日付と時刻による期間範囲)を参照ください。
:::
:::(Info) (クラウドストレージを経由する)
AppsFlyerには、**Data Locker**という機能があります。
Data Lockerでは、レポートデータを以下のクラウドストレージに送信できます。
* Google Cloud Storage
* AWS
* Snowflake

上記にレポートデータを送信したうえで、それらを転送元としてレポートデータを転送できます。
Data Lockerについて、詳しくは[Data Locker—広告主様向け](https://support.appsflyer.com/hc/ja/articles/360000877538)を参照ください。
:::

## 取得されるフィールド
各フィールドの詳細については、[ローデータ項目の手引き](https://support.appsflyer.com/hc/ja/articles/208387843-ローデータ項目の手引き#項目の手引き)を参照ください。

|転送時のフィールド名|API側のフィールド名|
|:----|:----|
|attributed_touch_type|Attributed touch type|
|attributed_touch_time|Attributed touch time|
|install_time|Install time|
|event_time|Event time|
|event_name|Event name|
|event_value|Event value|
|event_revenue|Event revenue|
|event_revenue_currency|Event revenue currency|
|event_revenue_usd|Event revenue USD|
|event_source|Event source|
|is_receipt_validated|Is receipt validated|
|partner|Partner|
|media_source|Media source|
|channel|Channel|
|keywords|Keywords|
|campaign|Campaign|
|campaign_id|Campaign ID|
|adset|Adset|
|adset_id|Adset ID|
|ad|Ad|
|ad_id|Ad ID|
|ad_type|Ad type|
|site_id|Site ID|
|sub_site_id|Sub site ID|
|sub_param_1|Sub param 1|
|sub_param_2|Sub param 2|
|sub_param_3|Sub param 3|
|sub_param_4|Sub param 4|
|sub_param_5|Sub param 5|
|cost_model|Cost model|
|cost_value|Cost value|
|cost_currency|Cost currency|
|contributor_1_partner|Contributor 1 partner|
|contributor_1_media_source|Contributor 1 media source|
|contributor_1_campaign|Contributor 1 campaign|
|contributor_1_touch_type|Contributor 1 touch type|
|contributor_1_touch_time|Contributor 1 touch time|
|contributor_2_partner|Contributor 2 partner|
|contributor_2_media_source|Contributor 2 media source|
|contributor_2_campaign|Contributor 2 campaign|
|contributor_2_touch_type|Contributor 2 touch type|
|contributor_2_touch_time|Contributor 2 touch time|
|contributor_3_partner|Contributor 3 partner|
|contributor_3_media_source|Contributor 3 media source|
|contributor_3_campaign|Contributor 3 campaign|
|contributor_3_touch_type|Contributor 3 touch type|
|contributor_3_touch_time|Contributor 3 touch time|
|region|Region|
|country_code|Country code|
|state|State|
|city|City|
|postal_code|Postal code|
|dma|DMA|
|ip|IP|
|is_wifi|WIFI|
|operator|Operator|
|carrier|Carrier|
|language|Language|
|appsflyer_id|AppsFlyer ID|
|advertising_id|Advertising ID|
|idfa|IDFA|
|android_id|Android ID|
|customer_user_id|Customer user ID|
|imei|IMEI|
|idfv|IDFV|
|platform|Platform|
|device_type|Device type|
|os_version|OS version|
|app_version|App version|
|sdk_version|SDK version|
|app_id|App ID|
|app_name|App name|
|bundle_id|Bundle ID|
|is_retargeting|Is retargeting|
|retargeting_conversion_type|Retargeting conversion Type|
|attribution_lookback_window|Attribution lookback window|
|reengagement_window|Re-engagement window|
|is_primary_attribution|Is primary attribution|
|user_agent|User agent|
|http_referrer|HTTP referrer|
|original_url|Original URL|
|blocked_reason_rule|Blocked reason rule|
|is_store_reinstall|Store reinstall|
|impressions|Impressions|
|contributor_3_match_type|Contributor 3 match type|
|custom_dimension|Custom dimension|
|conversion_type|Conversion type|
|google_play_click_time|Google Play click time|
|match_type|Match type|
|mediation_network|Mediation network|
|oaid|OAID|
|deeplink_url|Deeplink URL|
|blocked_reason|Blocked reason|
|blocked_sub_reason|Blocked sub reason|
|google_play_broadcast_referrer|Google Play broadcast referrer|
|google_play_install_begin_time|Google Play install begin time|
|campaign_type|Campaign type|
|custom_data|Custom data|
|rejected_reason|Rejected reason|
|device_download_time|Device download time|
|keyword_match_type|Keyword match type|
|contributor_1_match_type|Contributor 1 match type|
|contributor_2_match_type|Contributor 2 match type|
|device_model|Device model|
|monetization_network|Monetization network|
|segment|Segment|
|is_lat|Is LAT|
|google_play_referrer|Google Play referrer|
|blocked_reason_value|Blocked reason value|
|store_product_page|Store product page|
|device_category|Device category|
|app_type|App type|
|rejected_reason_value|Rejected reason value|
|ad_unit|Ad unit|
|keyword_id|Keyword ID|
|placement|Placement|
|network_account_id|Network account ID|
|install_app_store|Install app store|
|amazon_fire_id|Amazon Fire ID|
|att|ATT|

### 取得されないフィールド
:::(Warning) (取得されないフィールド)
ただし、レポートによっては、一部フィールドが取得されません。
取得されないフィールドについては、下記表を参照ください。
:::
| レポート種別名 | 取得されないフィールド |
| --- | --- |
| インストール | なし |
| アプリ内イベント | なし |
| アンインストール | <ul><li>custom_dimension</li><li>conversion_type</li><li>campaign_type</li><li>store_product_page</li><li>app_type</li><li>att</li></ul> |
| 再インストール | なし |
| オーガニックインストール | <ul><li>store_product_page</li></ul> |
| オーガニックアプリ内イベント | <ul><li>is_lat</li><li>store_product_page</li></ul> |
| オーガニックアンインストール | <ul><li>custom_dimension</li><li>conversion_type</li><li>campaign_type</li><li>store_product_page</li><li>app_type</li><li>att</li></ul> |
| オーガニック再インストール | <ul><li>store_product_page</li></ul> |


