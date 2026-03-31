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
| データ取得期間 | Yes | - | 開始日、終了日を指定してください。<br>カスタム変数を利用することができます。 |

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