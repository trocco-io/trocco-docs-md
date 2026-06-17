---
articleId: 3c70a789-f47e-473e-8995-8ee629f25d18
slug: data-source-tiktok-ads
title: 転送元 - TikTok Ads
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
TikTok Adsのデータを転送する設定のDocsです。

[TikTok Ads](https://ads.tiktok.com/marketing_api/docs?id=1701890954187778)の日別レポートデータを取得できます。
取得できるレポート種別は以下のとおりです。

| レポート種別 | 内容 |
| --- | --- |
| Advertiser | 指定した広告主全体の日別レポートデータを取得します。 |
| Campaign | キャンペーンごとの日別レポートデータを取得します。 |
| Ad Group | 広告グループごとの日別レポートデータを取得します。 |
| Ad | 広告ごとの日別レポートデータを取得します。 |

## 設定項目
### STEP1 基本設定
| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| TikTok Ads 接続情報 | Yes | - | あらかじめ登録してあるTikTok Ads接続情報を選択します。<br>接続情報の登録方法は、[接続情報 - TikTok Ads](/docs/connection-configuration-tiktok-ads)を参照ください。 |
| 広告主ID | Yes | - | レポート対象の広告主IDを入力してください。<br>広告主IDは、[TikTok Adsのダッシュボード](https://ads.tiktok.com/i18n/dashboard)のヘッダーからご確認いただけます。<br>![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-tiktok-ads-2024-08-29-22-47-0.png){height="" width=""} |
| レポート種別 | Yes | - | 取得可能なレポート種別は以下のいずれかです。<br>・advertiser<br>　広告主ID全体のレポートです<br>・campaign <br>　キャンペーン単位のレポートです。<br>・ad_group<br>　広告グループ別のレポートです。<br>・ad<br>　広告別のレポートです。 |
| オーディエンス属性 | No | - | オーディエンス属性別のレポートデータを取得する場合に選択します。<br>オーディエンス属性を選択すると、AUDIENCEレポートタイプでデータを取得します。<br>選択可能なオーディエンス属性は以下のとおりです。<ul><li>年齢</li><li>性別</li><li>国</li><li>プラットフォーム</li></ul> |
| データ取得期間 | Yes | - | 開始日、終了日を指定してください。<br>`YYYY-MM-DD`形式で入力してください。<br>取得期間の上限は5年以内です。 |

:::(Warning) (オーディエンス属性の指定)

オーディエンス属性による絞り込みを行った場合、取得可能なメトリクスは約20種類に制限されます。

:::

### STEP1 詳細設定

| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 削除済みのデータもレポートに含める | No | 無効 | 削除済みのデータも各種レポートに含めるかを指定します。レポート種別が以下の場合に選択できます。<ul><li>campaign</li><li>ad_group</li><li>ad</li></ul> |

:::(Warning) (オーディエンス属性の指定)

TikTok API for Businessの仕様により、オーディエンス属性を指定した場合は、削除済みのデータをレポートに含めることはできません。

:::

## 取得できるフィールド
### オーディエンス属性を選択しない場合
| 項目名 | 備考 |
| --- | --- |
| advertiser_id | |
| campaign_id | レポート種別で`campaign`, `adgroup`, `ad`を選択したときに挿入されます。 |
| campaign_name | レポート種別で`campaign`, `adgroup`, `ad`を選択したときに挿入されます。 |
| adgroup_id | レポート種別で`adgroup`, `ad`を選択したときに挿入されます。 |
| adgroup_name | レポート種別で`adgroup`, `ad`を選択したときに挿入されます。 |
| ad_id | レポート種別で`ad`を選択したときに挿入されます。 |
| ad_name | レポート種別で`ad`を選択したときに挿入されます。 |
| date | |
| spend | |
| cpc | |
| cpm | |
| impressions | |
| clicks | |
| ctr | |
| reach | |
| frequency | |
| conversion | |
| real_time_conversion | |
| real_time_cost_per_conversion | |
| real_time_conversion_rate | |
| result | |
| video_play_actions | |
| video_watched_2s | |
| video_watched_6s | |
| average_video_play | |
| video_views_p25 | |
| video_views_p50 | |
| video_views_p75 | |
| video_views_p100 | |
| real_time_app_install_cost | |
| real_time_app_install | |
| cta_app_install | |
| cost_per_cta_conversion | |
| purchase | |
| cta_purchase | |
| cost_per_cta_purchase | |
| cost_per_purchase | |
| purchase_rate | |
| vta_purchase | |
| cost_per_vta_purchase | |
| registration | |
| cost_per_registration | |
| registration_rate | |
| cta_registration | |
| cost_per_cta_registration | |
| vta_registration | |
| cost_per_vta_registration | |
| vta_app_install | |
| cost_per_vta_conversion | |
| web_event_add_to_cart | |
| on_web_order | |
| initiate_checkout | |
| add_billing | |
| page_event_search | |
| app_install | |
| activate_cost | |
| activate_rate | |
| active | |
| active_click | |
| active_click_cost | |
| active_pay | |
| active_pay_amount | |
| active_pay_avg_amount | |
| active_pay_click | |
| active_pay_click_cost | |
| active_pay_cost | |
| active_pay_rate | |
| active_pay_show | |
| active_pay_show_cost | |
| active_register | |
| active_register_cost | |
| active_register_rate | |
| active_register_click | |
| active_register_click_cost | |
| active_register_show | |
| active_register_show_cost | |
| active_show | |
| active_show_cost | |
| conversion_cost | |
| conversion_rate | |
| convert_cnt | |
| time_attr_convert_cnt | |
| click_cnt | |
| click_cost | |
| ecpm | |
| show_cnt | |
| stat_cost | |
| total_play | |
| play_over | |
| play_third_quartile | |
| play_midpoint | |
| play_first_quartile | |
| skan_result | |
| skan_cost_per_result | |
| skan_result_rate | |
| skan_conversion | |
| skan_cost_per_conversion | |
| skan_conversion_rate | |
| skan_app_install | |
| skan_cost_per_app_install | |
| skan_registration | |
| skan_cost_per_registration | |
| skan_registration_rate | |
| skan_total_registration | |
| skan_cost_per_total_registration | |
| skan_purchase | |
| skan_cost_per_purchase | |
| skan_purchase_rate | |
| skan_total_purchase | |
| skan_cost_per_total_purchase | |
| skan_total_purchase_value | |
| skan_add_to_cart | |
| skan_cost_per_add_to_cart | |
| skan_add_to_cart_rate | |
| skan_total_add_to_cart | |
| skan_cost_per_total_add_to_cart | |
| skan_total_add_to_cart_value | |
| skan_checkout | |
| skan_cost_per_checkout | |
| skan_checkout_rate | |
| skan_total_checkout | |
| skan_cost_per_total_checkout | |
| skan_total_checkout_value | |
| skan_view_content | |
| skan_cost_per_view_content | |
| skan_view_content_rate | |
| skan_total_view_content | |
| skan_cost_per_total_view_content | |
| skan_total_view_content_value | |
| skan_add_payment_info | |
| skan_cost_per_add_payment_info | |
| skan_add_payment_info_rate | |
| skan_total_add_payment_info | |
| skan_cost_total_add_payment_info | |
| skan_add_to_wishlist | |
| skan_cost_per_add_to_wishlist | |
| skan_add_to_wishlist_rate | |
| skan_total_add_to_wishlist | |
| skan_cost_per_total_add_to_wishlist | |
| skan_total_add_to_wishlist_value | |
| skan_launch_app | |
| skan_cost_per_launch_app | |
| skan_launch_app_rate | |
| skan_total_launch_app | |
| skan_cost_per_total_launch_app | |
| skan_complete_tutorial | |
| skan_cost_per_complete_tutorial | |
| skan_complete_tutorial_rate | |
| skan_total_complete_tutorial | |
| skan_cost_per_total_complete_tutorial | |
| skan_total_complete_tutorial_value | |
| skan_create_group | |
| skan_cost_per_create_group | |
| skan_create_group_rate | |
| skan_total_create_group | |
| skan_cost_per_total_create_group | |
| skan_total_create_group_value | |
| skan_join_group | |
| skan_cost_per_join_group | |
| skan_join_group_rate | |
| skan_total_join_group | |
| skan_cost_per_total_join_group | |
| skan_total_join_group_value | |
| skan_create_gamerole | |
| skan_cost_per_create_gamerole | |
| skan_create_gamerole_rate | |
| skan_total_create_gamerole | |
| skan_cost_per_total_create_gamerole | |
| skan_total_create_gamerole_value | |
| skan_spend_credits | |
| skan_cost_per_spend_credits | |
| skan_spend_credits_rate | |
| skan_total_spend_credits | |
| skan_cost_per_total_spend_credits | |
| skan_total_spend_credits_value | |
| skan_achieve_level | |
| skan_cost_per_achieve_level | |
| skan_achieve_level_rate | |
| skan_total_achieve_level | |
| skan_cost_per_total_achieve_level | |
| skan_total_achieve_level_value | |
| skan_unlock_achievement | |
| skan_cost_per_unlock_achievement | |
| skan_unlock_achievement_rate | |
| skan_total_unlock_achievement | |
| skan_cost_per_total_unlock_achievement | |
| skan_total_unlock_achievement_value | |
| skan_sales_lead | |
| skan_cost_per_sales_lead | |
| skan_sales_lead_rate | |
| skan_total_sales_lead | |
| skan_cost_per_total_sales_lead | |
| skan_total_sales_lead_value | |
| skan_in_app_ad_click | |
| skan_cost_per_in_app_ad_click | |
| skan_in_app_ad_click_rate | |
| skan_total_in_app_ad_click | |
| skan_cost_per_total_in_app_ad_click | |
| skan_total_in_app_ad_click_value | |
| skan_in_app_ad_impr | |
| skan_cost_per_in_app_ad_impr | |
| skan_in_app_ad_impr_rate | |
| skan_total_in_app_ad_impr | |
| skan_cost_per_total_in_app_ad_impr | |
| skan_total_in_app_ad_impr_value | |
| skan_loan_apply | |
| skan_cost_per_loan_apply | |
| skan_loan_apply_rate | |
| skan_total_loan_apply | |
| skan_cost_per_total_loan_apply | |
| skan_loan_credit | |
| skan_cost_per_loan_credit | |
| skan_loan_credit_rate | |
| skan_total_loan_credit | |
| skan_cost_per_total_loan_credit | |
| skan_loan_disbursement | |
| skan_cost_per_loan_disbursement | |
| skan_loan_disbursement_rate | |
| skan_total_loan_disbursement | |
| skan_cost_per_total_loan_disbursement | |
| skan_login | |
| skan_cost_per_login | |
| skan_login_rate | |
| skan_total_login | |
| skan_cost_per_total_login | |
| skan_ratings | |
| skan_cost_per_ratings | |
| skan_ratings_rate | |
| skan_total_ratings | |
| skan_cost_per_total_ratings | |
| skan_total_ratings_value | |
| skan_search | |
| skan_cost_per_search | |
| skan_search_rate | |
| skan_total_search | |
| skan_cost_per_total_search | |
| skan_start_trial | |
| skan_cost_per_start_trial | |
| skan_start_trial_rate | |
| skan_total_start_trial | |
| skan_cost_per_total_start_trial | |
| skan_subscribe | |
| skan_cost_per_subscribe | |
| skan_subscribe_rate | |
| skan_total_subscribe | |
| skan_cost_per_total_subscribe | |
| skan_total_subscribe_value | |

### オーディエンス属性を選択した場合
| 項目名 | 備考 |
| --- | --- |
| advertiser_id | |
| campaign_id | レポート種別で`campaign`, `adgroup`, `ad`を選択したときに挿入されます。 |
| campaign_name | レポート種別で`campaign`, `adgroup`, `ad`を選択したときに挿入されます。 |
| adgroup_id | レポート種別で`adgroup`, `ad`を選択したときに挿入されます。 |
| adgroup_name | レポート種別で`adgroup`, `ad`を選択したときに挿入されます。 |
| ad_id | レポート種別で`ad`を選択したときに挿入されます。 |
| ad_name | レポート種別で`ad`を選択したときに挿入されます。 |
| gender | オーディエンス属性で「性別」を選択したときに挿入されます。 |
| age | オーディエンス属性で「年齢」を選択したときに挿入されます。 |
| country_code | オーディエンス属性で「国」を選択したときに挿入されます。 |
| platform | オーディエンス属性で「プラットフォーム」を選択したときに挿入されます。 |
| date | |
| spend | |
| cpc | |
| cpm | |
| impressions | |
| clicks | |
| ctr | |
| reach | |
| frequency | |
| conversion | |
| real_time_conversion | |
| real_time_cost_per_conversion | |
| real_time_conversion_rate | |
| result | |
| video_play_actions | |
| video_watched_2s | |
| video_watched_6s | |
| average_video_play | |
| video_views_p25 | |
| video_views_p50 | |
| video_views_p75 | |
| video_views_p100 | |
