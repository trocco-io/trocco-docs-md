---
articleId: f9c48492-8665-4e1e-b7c1-74de2759a0db
slug: data-source-facebook-ad-insights
title: 転送元 - Facebook Ad Insights
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

Facebook広告の実績を取得してデータを転送する設定のDocsです。

:::(Info) (Instagram広告のデータ取得)

Instagram広告の実績も、転送元Facebook Ad Insightsで取得できます。
具体的な取得方法でご不明点がございましたら、カスタマーサクセスまでお問い合わせください。
:::

## 制約

- アクセストークン失効などの原因により転送が失敗する場合があります。
- [Facebook接続情報](/docs/connection-configuration-facebook-ad-insights)を参考に再認証をお願いします。
- アクセストークンは60日ごとに再認証が必要となります。転送設定やワークフローでエラー時の通知を設定することで、期限切れのタイミングで通知できるようになります。
- 内訳部分で、同時指定できない項目があります。
[公式ドキュメント](https://developers.facebook.com/docs/marketing-api/insights/breakdowns/#combiningbreakdowns)に、同時指定可能な組み合わせが記載されています。

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Facebook接続情報 | Yes |	- | あらかじめ登録してある[Facebookの接続情報](/docs/connection-configuration-facebook-ad-insights)から、今回の転送設定に必要な権限を持つものを選択します。 |
| 広告アカウントID | Yes | - | レポートを取得する広告アカウントIDを指定します。<br>広告アカウントIDは、Meta広告マネージャの画面上で確認できます。<br>![data-source-facebook-ad-insights-2024-08-29-14-7-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-facebook-ad-insights-2024-08-29-14-7-0.png)<br>広告アカウントIDの確認方法について、詳しくは[Facebook公式ドキュメント - Find your Facebook ad account ID number](https://www.facebook.com/business/help/1492627900875762)を参照ください。 |
| レポート種別 | Yes | - | 取得するレポートを以下より選択します。<ul><li>`account`</li><li>`campaign`</li><li>`adset`</li><li>`ad`</li></ul> |
| フィールド | No | - | 取得するレポートに含めるフィールドを選択します。<br>[レポートテンプレート読み込み](/docs/data-source-facebook-ad-insights#レポートテンプレート読み込み)をクリックすることで、主要なフィールドをテンプレートから読み込むこともできます。<br>各項目の詳細については、以下のFacebook公式ドキュメントをそれぞれ参照ください。<ul><li>`account`：[Facebook公式ドキュメント - Ad Account, Insights](https://developers.facebook.com/docs/marketing-api/reference/ad-account/insights/v23.0)</li><li>`campaign`：[Facebook公式ドキュメント - Campaign Insights](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-group/insights/v23.0)</li><li>`adset`：[Facebook公式ドキュメント - Ad Set Insights](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign/insights/v23.0)</li><li>`ad`：[Facebook公式ドキュメント - Ad Insights](https://developers.facebook.com/docs/marketing-api/reference/adgroup/insights/v23.0)</li></ul> |
| 内訳 | No | - | デバイスタイプや性別ごとにレポートを取得できます。<details><summary>取得できる項目一覧</summary><ul><li>`ad_format_asset`</li><li>`age`</li><li>`body_asset`</li><li>`call_to_action_asset`</li><li>`country`</li><li>`description_asset`</li><li>`device_platform`</li><li>`dma`</li><li>`frequency_value`</li><li>`gender`</li><li>`hourly_stats_aggregated_by_advertiser_time_zone`</li><li>`hourly_stats_aggregated_by_audience_time_zone`</li><li>`image_asset`</li><li>`impression_device`</li><li>`link_url_asset`</li><li>`place_page_id`</li><li>`platform_position`</li><li>`product_id`</li><li>`publisher_platform`</li><li>`region`</li><li>`title_asset`</li><li>`video_asset`</li></ul></details>たとえば、`gender`を指定した場合、男性・女性などの内訳ごとに結果が複数行で取得されます。<br>各項目の詳細については、[Facebook公式ドキュメント - Insights API Breakdowns](https://developers.facebook.com/docs/marketing-api/insights/breakdowns#genericbreakdowns)を参照ください。 |
| データ取得期間 | Yes | - | 転送したいデータの、開始日時と終了日時を入力します。<br>`YYYY-MM-DD`形式で入力してください。 |

#### STEP1 詳細設定

**詳細設定**をクリックすると、設定項目が表示されます。

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| アトリビューションウィンドウ | No | 指定なし | <details><summary>取得できる項目一覧</summary><ul><li>`1d_view`</li><li>`7d_view`</li><li>`28d_view`</li><li>`1d_click`</li><li>`7d_click`</li><li>`28d_click`</li></ul></details>各項目の詳細については、[Facebook公式ドキュメント - Ads Action Stats](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats/v23.0)を参照ください。 |
| アクションの内訳 | No | 指定なし | <details><summary>取得できる項目の一覧</summary><ul><li>`action_device</li>`<li>`action_canvas_component_name`</li><li>`action_carousel_card_id`</li><li>`action_carousel_card_name`</li><li>`action_destination`</li><li>`action_reaction`</li><li>`action_target_id`</li><li>`action_type`</li><li>`action_video_sound`</li><li>`action_video_type`</li></ul></details>各項目の詳細については、[Facebook公式ドキュメント - Ads Action Stats](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats/v23.0)を参照ください。|
| 統合アトリビューション設定を有効にする | No | 有効 | 統合アトリビューションを有効にする場合はチェックを入れてください。 |
| 集計単位 | No | N日単位 / 1日 | データの集計単位を選択します。以下から選択可能です。<ul><li>指定期間全体：指定したデータ取得期間全体で集計されたデータを取得します。</li><li>月単位：月単位で集計されたデータを取得します。</li><li>N日単位：1〜90日の範囲で指定した日数単位で集計されたデータを取得します。</li></ul> |

## レポートテンプレート読み込み

**レポートテンプレート読み込み**をクリックすることで、主要なフィールドをテンプレートから読み込むことができます。

:::(Warning)

すでにフィールドを設定されている場合、そのすべての項目が上書きされます。ご注意ください。
:::

### 挿入されるフィールド

| 項目名 | 備考 | 
| --- | ---  | 
| `account_id` |  |
| `account_name` |  |
| `campaign_id` | レポート種別で`campaign`, `adset`, `ad`を選択したときに挿入されます。 | 
| `campaign_name` | レポート種別で`campaign`, `adset`, `ad`を選択したときに挿入されます。 | 
| `adset_id` | レポート種別で`adset`, `ad`を選択したときに挿入されます。 | 
| `adset_name` | レポート種別で`adset`, `ad`を選択したときに挿入されます。 | 
| `ad_id` | レポート種別で`ad`を選択したときに挿入されます。 | 
| `ad_name` | レポート種別で`ad`を選択したときに挿入されます。 | 
| `actions` | |
| `clicks` | | 
| `conversions` | | 
| `cpc` | | 
| `ctr` | | 
| `date_start` | |
| `date_stop` | |
| `gender_targeting` | | 
| `impressions` | |
| `inline_link_clicks` | | 
| `reach` | |
| `spend` | | 
