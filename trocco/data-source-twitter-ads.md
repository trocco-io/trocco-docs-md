---
articleId: 5678cb69-2b39-4204-8f19-2ab92a4740a1
slug: data-source-twitter-ads
title: 転送元 - X Ads (旧Twitter Ads)
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
X Ads (旧Twitter Ads) Analyticsのデータを転送する設定のDocsです。

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| X Ads (旧Twitter Ads) 接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br>詳しくは、[X Ads (旧Twitter Ads) の接続情報](/docs/connection-configuration-twitter-ads)を参照ください。 |
| AdアカウントID | Yes | - | データを取得したいアカウントのIDを指定します。 |
| 取得対象 | Yes | - | 転送したいデータの種別を以下から選択します。<ul><li>`account report`</li><li>`campaign report`</li><li>`line_item report`</li><li>`media_creative report`(β版)</li><li>`promoted_tweet report`(β版)</li><li>`card`</li></ul> |
| レポート取得期間 | Yes | - | 取得対象に`card`以外を選択した場合に指定します。<br>取得したいデータの開始日と終了日、および取得期間のタイムゾーンを入力します。<br>開始日と終了日は`YYYY-MM-DD`形式で入力してください。 |

:::(Warning) (取得したデータにおけるIDの取り扱いについて)

Twitter広告APIの仕様上、TROCCO上で扱うキャンペーンID（`campaign_id`）や広告グループID（`line_item_id`）は、X Adsの管理画面で確認できるIDをBase36形式に変換した文字列となります。
例えば、UI上では `1234567890` のキャンペーンIDは、TROCCOで取り扱う場合は `kf12oi` に変換する必要があります。

Twitter広告APIの仕様については、公式ドキュメントを参照してください。
[Twitter広告APIドキュメント | Docs | Twitter Developer Platform](https://developer.x.com/ja/docs/x-ads-api)

:::

:::(Warning) (レポート取得期間のタイムゾーンについて)

レポート取得期間のタイムゾーンは、X広告アカウント作成時に指定したタイムゾーンを指定してください。
異なるタイムゾーンを指定した場合は、処理に失敗します。

:::

### STEP1 詳細設定

取得対象に`card`を選択した場合に指定できます。
**詳細を設定する**をクリックすると、設定項目が表示されます。

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| エンティティ取得期間 | No  | - | 取得対象に`card`を選択した場合に指定できます。<br>取得したいデータの開始日と終了日、および取得期間のタイムゾーンを入力できます。<br>開始日と終了日は`YYYY-MM-DD`形式で入力してください。 |

:::(Warning) (取得期間について)

Twitter広告APIの仕様上、それぞれ以下の流れでデータを取得しています。

- 取得対象として`card`以外を選択した場合
  - まずTwitter広告上に存在する全エンティティを取得します。
  - 取得したエンティティから、入力した取得期間に応じてレコードを取得します。
- 取得対象として`card`を選択した場合
  - まずTwitter広告上に存在する全エンティティを取得します。
  - 取得したエンティティから、入力した取得期間内に`created_at`があるものをレコードとして取得します。
  - 取得期間を入力しなかった場合は、**全エンティティのレコードが取得されます**。
:::

## 取得できるフィールド
| 項目名 | データ型 | account | campaign | line_item | promoted_tweet | media_creative | card |
| --- | --- | --- | --- | --- | --- | --- | --- |
| date | timestamp | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| account_id | string | ✓ | - | - | - | - | - |
| account_name | string | ✓ | - | - | - | - | - |
| campaign_id | string | - | ✓ | ✓ | - | - | - |
| campaign_name | string | - | ✓ | - | - | - | - |
| line_item_id | string | - | - | ✓ | ✓ | ✓ | - |
| line_item_name | string | - | - | ✓ | - | - | - |
| promoted_tweet_id | string | - | - | - | ✓ | - | - |
| media_creative_id | string | - | - | - | - | ✓ | - |
| engagements | long | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| impressions | long | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| retweets | long | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| replies | long | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| likes | long | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| follows | long | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| card_engagements | long | - | ✓ | ✓ | ✓ | ✓ | - |
| clicks | long | - | ✓ | ✓ | ✓ | ✓ | - |
| app_clicks | long | - | ✓ | ✓ | ✓ | ✓ | - |
| url_clicks | long | - | ✓ | ✓ | ✓ | ✓ | - |
| qualified_impressions | long | - | ✓ | ✓ | ✓ | ✓ | - |
| billed_engagements | long | - | ✓ | ✓ | ✓ | ✓ | - |
| billed_charge_local_micro | long | - | ✓ | ✓ | ✓ | ✓ | - |
| video_total_views | long | - | ✓ | ✓ | ✓ | ✓ | - |
| video_views_25 | long | - | ✓ | ✓ | ✓ | ✓ | - |
| video_views_50 | long | - | ✓ | ✓ | ✓ | ✓ | - |
| video_views_75 | long | - | ✓ | ✓ | ✓ | ✓ | - |
| video_views_100 | long | - | ✓ | ✓ | ✓ | ✓ | - |
| video_cta_clicks | long | - | ✓ | ✓ | ✓ | ✓ | - |
| video_content_starts | long | - | ✓ | ✓ | ✓ | ✓ | - |
| video_3s100pct_views | long | - | ✓ | ✓ | ✓ | ✓ | - |
| video_6s_views | long | - | ✓ | ✓ | ✓ | ✓ | - |
| video_15s_views | long | - | ✓ | ✓ | ✓ | ✓ | - |
| media_views | long | - | ✓ | ✓ | ✓ | ✓ | - |
| media_engagements | long | - | ✓ | ✓ | ✓ | ✓ | - |
| conversion_purchases | json | - | ✓ | ✓ | ✓ | ✓ | - |
| conversion_sign_ups | json | - | ✓ | ✓ | ✓ | ✓ | - |
| conversion_site_visits | json | - | ✓ | ✓ | ✓ | ✓ | - |
| conversion_downloads | json | - | ✓ | ✓ | ✓ | ✓ | - |
| conversion_custom | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_spent_credits | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_installs | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_content_views | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_add_to_wishlists | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_checkouts_initiated | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_reservations | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_tutorials_completed | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_achievements_unlocked | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_searches | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_add_to_carts | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_payment_info_additions | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_re_engages | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_shares | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_rates | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_logins | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_updates | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_levels_achieved | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_invites | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_key_page_views | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_purchases | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_sign_ups | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_updates | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_tutorials_completed | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_reservations | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_add_to_carts | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_add_to_wishlists | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_checkouts_initiated | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_levels_achieved | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_achievements_unlocked | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_shares | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_invites | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_payment_info_additions | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_spent_credits | json | - | ✓ | ✓ | ✓ | ✓ | - |
| mobile_conversion_lifetime_value_rates | json | - | ✓ | ✓ | ✓ | ✓ | - |
| name | string | - | - | - | - | - | ✓ |
| components | json | - | - | - | - | - | ✓ |
| id | string | - | - | - | - | - | ✓ |
| created_at | string | - | - | - | - | - | ✓ |
| card_uri | string | - | - | - | - | - | ✓ |
| updated_at | string | - | - | - | - | - | ✓ |
| deleted | boolean | - | - | - | - | - | ✓ |
| card_type | string | - | - | - | - | - | ✓ |
