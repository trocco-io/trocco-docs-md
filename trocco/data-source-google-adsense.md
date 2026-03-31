---
articleId: 50b0fdd6-31ba-4259-a4a2-11b9d2a1653e
slug: data-source-google-adsense
title: 転送元 - Google AdSense
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Google AdSenseで管理しているデータを転送する設定のDocsです。

## 設定項目
### STEP1 基本設定
| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Google AdSense接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。設定内容については、[用語集(公式ドキュメント)](https://support.google.com/adsense/topic/19363)をご参照下さい。 |
| アカウントID | Yes | - | レポート対象のアカウントIDを入力して下さい。 |
| 通貨 | Yes | - | オプションの通貨コードを入力してください。金額の統計情報をレポートする場合に使用します。設定しない場合は、デフォルトでアカウントの通貨が使用されます。 コード一覧は[公式ドキュメント](https://developers.google.com/adsense/management/appendix/currencies)をご確認ください。 |
| ディメンション | Yes | - | ディメンションに指定できる値については[公式ドキュメント](https://developers.google.com/adsense/management/metrics-dimensions#dimensions)をご確認ください。 |
| 指標 | Yes | - | この指標に基づいてレポートが作成されます。指標に指定できる値については[公式ドキュメント](https://developers.google.com/adsense/management/metrics-dimensions#metrics)をご参照下さい。|
| フィルタ | No | - | フィルタの設定方法については、[公式ドキュメント](https://developers.google.com/adsense/management/reporting/filtering)をご確認ください。 |
| データ取得期間 | Yes | - | データ取得期間の開始日と終了日を入力してください。 <br>未入力の場合は開始日：現在の7日前～終了日：現在の1日前が設定されます。<br>「YYYY-MM-DD」形式で入力してください。 |