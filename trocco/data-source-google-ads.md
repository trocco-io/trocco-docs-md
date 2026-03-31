---
articleId: 48d0edce-9c6e-4158-97a5-85912a0b3fef
slug: data-source-google-ads
title: 転送元 - Google Ads
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Google広告（Google Ads）の実績を取得してデータを転送する設定のDocsです。

## 制約

:::(Warning) (指定可能なフィールドについて)

データの取得が可能な**フィールド**の指定値は、以下の2つの条件を満たす必要があります。
1. 指定した「リソースタイプ (レポート種別)」で取得可能な、`Fields` `Segments` `Metrics`であること。
2. **フィールド**に複数の値を指定する場合、指定値に含まれる`Segments`と互換性のある値（同時に取得可能な値）であること。
   `Segments`ごとの互換性のある値は、[公式ドキュメントのSegments一覧](https://developers.google.com/google-ads/api/fields/v20/segments)各項目の「Selectable With」欄を参照ください。

指定可能なフィールドであるかどうかは、公式ツールの「Google Ads Query Builder」を用いて検証できます。
[Google Ads Query Builderを利用したフィールド指定可能値の検証方法](/docs/data-source-google-ads#google-ads-query-builderを利用したフィールド指定可能値の検証方法)を参照ください。
:::

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Google Ads接続情報 | Yes | - | あらかじめ登録してある[Google Adsの接続情報](/docs/connection-configuration-google-ads)から、今回の転送設定に必要な権限を持つものを選択します。 |
| お客様 ID | Yes | - |お客様 IDを入力します。<br>お客様 IDの確認方法は、[Google広告公式ドキュメント - Google 広告のお客様 ID を確認する](https://support.google.com/google-ads/answer/1704344)を参照ください。 |
| リソースタイプ（レポート種別） | Yes | - | リソースタイプ (レポート種別)を選択します。<br>リソースタイプの一覧は、[Google Ads API公式ドキュメント - List of all resources](https://developers.google.com/google-ads/api/fields/v20/overview#list-of-all-resources)を参照ください。<br>なお一部、取得に対応していないリソースタイプがあります。その場合は、弊社カスタマーサクセスまでご相談ください。|
| フィールド | Yes | - | レポートに含める項目（フィールド）を選択します。 <br>指定可能なフィールドについては、[制約](/docs/data-source-google-ads#制約)および[Google Ads Query Builderを利用したフィールド指定可能値の検証方法](/docs/data-source-google-ads#google-ads-query-builderを利用したフィールド指定可能値の検証方法)を参照ください。
| データ取得期間 | Yes | - | 一部のリソースタイプを選択した場合、開始日・終了日を指定します。<br>指定された期間に基づいて、取得対象のデータがフィルタリングされます。|
| コンディション | No | - | レコード条件を入力することで、取得対象行を絞り込むことができます。<br>入力例：`campaign.status = 'PAUSED'`|

## Google Ads Query Builderを利用したフィールド指定可能値の検証方法

1. [Google Ads Query Builderの「List of all resources」](https://developers.google.com/google-ads/api/fields/v20/overview_query_builder#list-of-all-resources)から、**リソースタイプ**に指定したい項目をクリックします。
2. **Choose a Clause to Select From**の**SELECT**タブで、`Attribute Resource Fields`, `Segments`, `Metrics`, `Attributed Resource Fields`から、**フィールド**に指定したい項目にチェックマークを入れます。
3. チェックマークを入れた値と互換性のない値は取り消し線が表示されます。

## 補足事項

### Moneyフィールドの値について

Google Adsでは、一部の金額のフィールドがマイクロ単位で管理されています。
そのため、一部のフィールドでは値が1,000,000倍されています。
TROCCOでは、1,000,000倍されて保持されている値に対し、転送時に1/1000000倍する処理を内部的に行っています。

<details>
   <summary>本件の対象となるフィールド一覧</summary>

- `metrics.cost_micros`
- `metrics.average_cpc`
- `metrics.cost_per_all_conversions`
- `metrics.active_view_cpm`
- `metrics.active_view_measurable_cost_micros`
- `metrics.average_cost`
- `metrics.average_cpm`
- `metrics.cost_per_conversion`
- `metrics.benchmark_average_max_cpc`
- `ad_group_criterion.effective_cpc_bid_micros`
- `ad_group_criterion.effective_cpm_bid_micros`
- `ad_group_criterion.position_estimates.estimated_add_cost_at_first_position_cpc`
- `ad_group.cpc_bid_micros`
- `ad_group.effective_target_cpa_micros`
- `bidding_strategy.target_cpa.cpc_bid_ceiling_micros`
- `bidding_strategy.target_cpa.cpc_bid_floor_micros`
- `bidding_strategy.target_roas.cpc_bid_ceiling_micros`
- `bidding_strategy.target_roas.cpc_bid_floor_micros`
- `bidding_strategy.target_spend.cpc_bid_ceiling_micros`
- `bidding_strategy.target_spend.target_spend_micros`
- `campaign_budget.amount_micros`
- `campaign_budget.recommended_budget_amount_micros`
</details>
