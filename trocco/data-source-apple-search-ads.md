---
articleId: d693f252-471d-485f-bce5-41e8a44fecc5
slug: data-source-apple-search-ads
title: 転送元 - Apple Search Ads
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Apple Search Adsのレポートデータを転送する設定のDocsです。

## 設定項目
### STEP1 基本設定
| 項目名 | デフォルト値 | 内容 |
| --- | --- | --- |
| Apple Search Ads接続情報 | - | あらかじめ登録してある[Apple Search Adsの接続情報](/docs/connection-configuration-apple-search-ads)から、今回の転送設定に必要な権限を持つものを選択します。 |
| キャンペーングループID | -  | レポート画面左隅のアカウント名のメニューから確認できる、キャンペーングループのIDを入力してください。<br>![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-apple-search-ads-2024-08-29-22-59-0.png){height="" width=""}|
| レポートレベル | - | レポートレベルを以下から選択します。<br><ul><li>`CAMPAIGNS`</li><li>`AD_GROUPS`</li><li>`KEYWORDS`</li><li>`SEARCH_TERMS`</li></ul> |
| 粒度 | - | 粒度を以下から選択します。<br><ul><li>`HOURLY`</li><li>`DAILY`</li><li>`WEEKLY`</li><li>`MONTHLY`</li></ul> |
| データ取得期間 | - | データ取得期間の開始日と終了日を入力します。<br>**粒度**の選択内容によって、取得できる期間に条件があります。[データ取得期間の制限](/docs/data-source-apple-search-ads#データ取得期間の条件)を参照ください。 |
| タイムゾーン | UTC | データ取得期間のタイムゾーンを設定します。<br>レポートレベルで`SEARCH_TERMS`を選択した場合は、`ORTZ`を選択してください。 |

#### データ取得期間の条件
**データ取得期間**は、**粒度**によって指定できる期間に制限があります。

- **粒度**が`HOURLY`の場合
  転送ジョブ実行時を起点に**開始日**が30日以内の日付、かつ期間が7日以内である必要があります。
- **粒度**が`DAILY`の場合
  転送ジョブ実行時を起点に**開始日**が90日以内の日付、かつ期間が90日以内である必要があります。
- **粒度**が`WEEKLY`の場合
  転送ジョブ実行時を起点に**開始日**が24か月以内の日付、かつ期間が15日以上365日以内である必要があります。
- **粒度**が`MONTHLY`の場合
  転送ジョブ実行時を起点に**開始日**が24か月以内の日付、かつ期間が3か月を超える必要があります。

上記の条件を満たさない期間を指定した場合、実行プレビューおよびジョブ実行時に以下のようなエラーが発生します。

例: **粒度**に`MONTHLY`を、**データ取得期間**に3か月未満の期間を指定した場合
`400POST https://api.searchads.apple.com/api/v5/reports/campaigns/xxxxx/adgroups{"data":null,"pagination":null,"error":{"errors":[{"messageCode":"INVALID_INPUT","message":"Date range of 2023-08-01 to 2023-09-01 is not valid for granularity MONTHLY","field":"request.endTime"}]}}`
