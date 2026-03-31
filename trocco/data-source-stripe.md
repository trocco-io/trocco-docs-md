---
articleId: 0ba3e058-04bc-482c-9498-aefd48015030
slug: data-source-stripe
title: 転送元 - Stripe
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Stripeからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[Stripe接続情報](/docs/connection-configuration-stripe)を参照ください。

## 設定項目

### STEP1 基本設定

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|取得対象|✓|`Customers`|取得対象を選択します。|
|`Setup Intent ID`|✓|-|取得対象に**Setup Attempts**を選択した場合に指定します。<br>取得対象`Setup Intents`の`id`カラムの値から確認できます。|
|`Subscription Item ID`|✓|-|取得対象に**Subscription Items**を選択した場合に指定します。<br>取得対象`Subscriptions`の`id`カラムの値から確認できます。|
|`Account ID`|✓|-|取得対象に**External Accounts**・**Person**を選択した場合に指定します。<br>取得対象`Accounts`の`id`カラムの値から確認できます。|
|`Customer ID`|✓|-|取得対象に**Customer Balance Transactions**・**Cards**・**Bank Accounts**を選択した場合に指定します。<br>取得対象`Customers`の`id`カラムの値から確認できます。|
|`Application Fee ID`|✓|-|取得対象に**Application Fee Refunds**を選択した場合に指定します。<br>取得対象`Application Fees`の`id`カラムの値から確認できます。|
|`Invoice ID`|✓|-|取得対象に**Invoice Line Item**を選択した場合に指定します。<br>取得対象`Invoices`の`id`カラムの値から確認できます。|
|`Transfer ID`|✓|-|取得対象に**Transfer Reversals**を選択した場合に指定します。<br>取得対象`Transfers`の`id`カラムの値から確認できます。|

