---
articleId: 29244519-4111-4c9c-8767-ce61a1f6fe42
slug: data-source-app-store-connect-api
title: 転送元 - App Store Connect API
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
App Storeからレポートデータを転送する設定のDocsです。

## 取得可能なデータ
[App Store Connect API](https://developer.apple.com/documentation/appstoreconnectapi)を利用してデータを取得しています。

「財務報告」、「売上とトレンド」に基づいたレポートのほか、アプリ内購入情報やそのローカライゼーション情報など、App Store Connect APIを通じて提供されるさまざまなデータを取得できます。

それぞれ、[App Store Connect](https://itunesconnect.apple.com/login?targetPrefix=/WebObjects/iTunesConnect.woa&targetUrl=/wa/jumpTo?page=paymentsAndFinancialReports&authResult=FAILED)の「支払と財務報告」「売上とトレンド」などからダウンロードできるレポートと同一のものが連携可能です。

※売上とトレンドのヘルプページは[こちら](https://help.apple.com/app-store-connect/#/dev061699fdb)です。
※財務報告のヘルプページは[こちら](https://help.apple.com/app-store-connect/#/devfa880063b)です。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| App Store Connect API接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| API Endpoint | Yes | - | APIの接続先URLを指定します。<br>パスパラメータの値は[カスタム変数](/docs/custom-variables)を利用しTROCCOのデータ転送時に動的に設定値を決定することも可能です。 |
| 入力ファイル形式 | Yes | CSV/TSV | 入力ファイルの形式を指定してください。<br>詳しくは、[入力ファイル形式の設定について](/docs/configuration-of-input-files)を参照ください。 |
| クエリパラメータ | No | - | APIへのリクエストに含めるクエリパラメータを指定できます。<br>パラメータの種類については下記のクエリパラメータの種類をご覧ください。<br>また、パラメータの値は[カスタム変数](/docs/custom-variables)を利用しTROCCOのデータ転送時に動的に設定値を決定することも可能です。 |

### クエリパラメータの種類
取得するレポートの種類（API EndpointのURL）によって指定できるパラメータが異なります。
詳しくは、下記API Endpointのリンク（公式ドキュメント）をご参照ください。

#### 財務報告（Finance Reports）
- API Endpoint: [/v1/financeReports](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-financereports)

| パラメータ名 | 必須 | 内容 |
| --- | --- | --- |
| filter[regionCode] | Yes | 通貨の単位を指定できます。コードについては[公式ドキュメント](https://help.apple.com/app-store-connect/?lang=en#/dev63d64d955)をご覧ください。 |
| filter[reportDate] | Yes | Apple Fiscal Calendarに基づいて取得するレポートの日付を指定できます。 YYYY-MM形式で指定してください。 |
| filter[reportType] | Yes | レポートタイプとして**FINANCIAL**または**FINANCE_DETAIL**を指定できます。 |
| filter[vendorNumber] | Yes | ベンダー番号を指定できます。詳しくは[公式ドキュメント](https://help.apple.com/app-store-connect/#/dev3a16f3fe0)をご覧ください。 |

#### 売上とトレンド（Sales and Trends Reports）
- API Endpoint: [/v1/salesReports](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-salesreports)

| パラメータ名 | 必須 | 内容 |
| --- | --- | --- |
| filter[frequency] | Yes | レポートの取得間隔を指定できます。<br>**DAILY**、**WEEKLY**、**MONTHLY**、**YEARLY**が指定できます。 |
| filter[reportType] | Yes | レポートタイプとして**SALES**、**PRE_ORDER**、**NEWSSTAND**、**SUBSCRIPTION**、**SUBSCRIPTION_EVENT**、**SUBSCRIBER**を指定できます。 |
| filter[reportSubType] | Yes | レポートのサブタイプとして**SUMMARY**、**DETAILED**、**OPT_IN**を指定できます。 |
| filter[vendorNumber] | Yes | ベンダー番号を指定できます。<br>詳しくは[公式ドキュメント](https://help.apple.com/app-store-connect/#/dev3a16f3fe0)をご覧ください。 |
| filter[reportDate] | No | 取得するレポートの日付を指定できます。 <br>YYYY-MM-DD形式で指定してください。<br>詳しくは[公式ドキュメント](https://help.apple.com/app-store-connect/#/dev8a5831138)をご覧ください。 |
| filter[version] | No | レポートのバージョンを指定できます。<br>詳しくは[公式ドキュメント](https://developer.apple.com/documentation/appstoreconnectapi/download_sales_and_trends_reports)をご覧ください。 |

#### アプリ内購入情報
- API Endpoint: [/v1/apps/{id}/inAppPurchasesV2](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-inapppurchasesv2)

| パラメータ名 | 必須 | 内容 |
| --- | --- | --- |
| fields[inAppPurchaseAppStoreReviewScreenshots] | No | App Store審査用スクリーンショットの情報を含めることができます。 |
| fields[inAppPurchaseContents] | No | 購入内容に関する詳細情報を含めることができます。 |
| fields[inAppPurchaseLocalizations] | No | 各ローカライズ情報（タイトルや説明など）を含めることができます。 |
| fields[inAppPurchases] | No | 購入アイテムの基本情報を含めることができます。 |
| fields[promotedPurchases] | No | プロモーション設定された購入情報を含めることができます。 |
| fields[inAppPurchasePriceSchedules] | No | 購入アイテムの価格スケジュール情報を含めることができます。 |
| fields[inAppPurchaseAvailabilities] | No | 購入アイテムの提供可否情報を含めることができます。 |
| fields[inAppPurchaseImages] | No | 購入アイテムに関連付けられた画像情報を含めることができます。 |
| filter[inAppPurchaseType] | No | 購入種別（PURCHASE、SUBSCRIPTIONなど）を指定してフィルタリングできます。 |
| filter[name] | No | 名前を指定してフィルタリングできます。 |
| filter[productId] | No | プロダクトIDを指定してフィルタリングできます。 |
| filter[state] | No | 購入アイテムの状態（審査状況など）を指定してフィルタリングできます。 |
| include | No | 関連リソース（例: localizations）を同時に取得します。 |
| limit | No | 結果の最大取得件数を指定できます。 |
| limit[inAppPurchaseLocalizations] | No | ローカライズ情報の最大取得件数を指定できます。 |
| limit[images] | No | 画像情報の最大取得件数を指定できます。 |
| sort | No | 並び順を指定できます（例: `-id` で降順）。 |

#### 購入情報ローカライゼーション
- API Endpoint: [/v2/inAppPurchases/{id}/inAppPurchaseLocalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-inapppurchases-_id_-inapppurchaselocalizations)

| パラメータ名 | 必須 | 内容 |
| --- | --- | --- |
| fields[inAppPurchaseLocalizations] | No | ローカライズ情報（タイトルや説明など）を取得するためのフィールドを指定できます。 |
| fields[inAppPurchases] | No | 紐づく購入情報の基本項目を含めることができます。 |
| include | No | 関連リソース（例: inAppPurchases）を同時に取得します。 |
| limit | No | 最大取得件数を指定できます。 |
