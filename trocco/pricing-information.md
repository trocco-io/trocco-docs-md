---
articleId: 2e3e7218-fbbb-4c8c-815f-50ffaae438e2
slug: pricing-information
title: ご契約プランに関する詳細情報
parentCategoryId: b7e48995-e6b6-4bb9-8eab-15edc29c915e
languageCode: ja
---
## 概要

本ページでは、料金プランに関する各種詳細情報を説明します。

## 料金プラン

TROCCOでは以下の料金プランが存在します。

- Freeプラン
- Starterプラン
- Essentialプラン
- Advancedプラン
- Professionalプラン

それぞれのプランで利用できるコネクタや機能に違いがあります。詳しくは、[料金プラン](https://primenumber.com/trocco/pricing)を参照ください。
また、Professionalプランについては、[プロフェッショナルプランに関する詳細情報](/docs/professional-plan)を参照ください。

## プライシングに関する詳細情報

### コネクタ種別

ご契約のプランによって利用できるコネクタ種別は異なります。

:::(Warning) (上位プランから下位プランにダウングレードした場合)

プラン変更前に作成していた転送設定は削除されません。
**ただし、該当の転送設定のジョブは実行できなくなります。**
該当の転送設定にスケジュール設定が組み込まれていた場合でも、ジョブは実行されません。
該当の転送設定がタスクとしてワークフロー定義に組み込まれていた場合は、そのタスクジョブはスキップされます。
ワークフローのタスクがスキップされたときの挙動について、詳しくは[タスクのエラーハンドリング](/docs/about-workflow#タスクのエラーハンドリング)を参照ください。
:::

|コネクタ種別 \各プラン|Free|Starter|Essential|Advanced|Professional|
|---|---|---|---|---|---|
|[基本コネクタ](/docs/pricing-information#基本コネクタ)|✓|✓|✓|✓|✓|
|[Enterprise DBコネクタ](/docs/pricing-information#enterprise-dbコネクタ)|✓|-|✓|✓|✓|
|[ログデータ出力用コネクタ](/docs/pricing-information#ログデータ出力用コネクタ)|✓|-|✓|✓|✓|
|[Reverse ETLコネクタ](/docs/pricing-information#reverse-etlコネクタ)|✓|-|-|✓|✓|
|[カスタムコネクタ](/docs/pricing-information#カスタムコネクタ)|-|-|-|✓|✓|
|[転送元HTTP・HTTPSコネクタ](/docs/pricing-information#転送元httphttpsコネクタ)|✓|-|-|✓|✓|
|[転送元SAP S4/HANAコネクタ](/docs/pricing-information#転送元sap-s4hanaコネクタ)|-|-|-|-|[カスタマイズ可能](/docs/professional-plan#カスタマイズ可能なサービス)|

以下は、各コネクタ種別に属するコネクタの一覧です。

#### 基本コネクタ

<details>
   <summary>転送元 - DWH系</summary>

- [転送元 - Amazon Athena](/docs/data-source-athena)
- [転送元 - Amazon Redshift](/docs/data-source-redshift)
- [転送元 - Databricks](/docs/data-source-databricks)
- [転送元 - Google BigQuery](/docs/data-source-bigquery)
- [転送元 - Snowflake](/docs/data-source-snowflake)
- [転送元 - Treasure Data](/docs/data-source-treasure-data)

</details>

<details>
   <summary>転送元 - アプリ系</summary>

- [転送元 - App Store Connect API](/docs/data-source-app-store-connect-api)
- [転送元 - Google Play](/docs/data-source-google-play)

</details>

<details>
   <summary>転送元 - クラウドアプリケーション系</summary>

- [転送元 - Adobe Marketo Engage](/docs/data-source-marketo)
- 転送元 - Airtable
- [転送元 - AppsFlyer](/docs/data-source-appsflyer)
- 転送元 - Asana
- 転送元 - AWS Cost Explorer
- [転送元 - Backlog](/docs/data-source-backlog)
- 転送元 - Bill One
- 転送元 - BIZTEL
- 転送元 - Calendly
- 転送元 - Chatwork
- 転送元 - ClickUp
- 転送元 - Confluence
- 転送元 - dbt Cloud
- [転送元 - eセールスマネージャー](/docs/data-source-e-sales-manager)
- [転送元 - freee会計](/docs/data-source-freee-accounting)
- 転送元 - freee人事労務
- 転送元 - freee請求書
- 転送元 - Freshdesk
- 転送元 - Freshsales
- 転送元 - Freshservice
- 転送元 - Gainsight PX
- [転送元 - GitHub GraphQL API](/docs/data-source-github-graphql)
- 転送元 - GitLab
- [転送元 - Google Analytics 4](/docs/data-source-google-analytics4)
- [転送元 - Google Search Console](/docs/data-source-google-search-console)
- 転送元 - Help Scout
- 転送元 - HENNGE Access Control
- [転送元 - HubSpot](/docs/data-source-hubspot)
- [転送元 - JIRA](/docs/data-source-jira)
- 転送元 - JUST.DB
- 転送元 - Kairos3 Marketing
- 転送元 - Kairos3 Sales
- [転送元 - KARTE Datahub](/docs/data-source-karte-datahub)
- 転送元 - KING OF TIME
- [転送元 - kintone](/docs/data-source-kintone)
- 転送元 - Klaviyo
- [転送元 - LINE WORKS](/docs/data-source-line-work)
- 転送元 - LOGILESS
- 転送元 - Mailchimp
- 転送元 - makeshop
- 転送元 - Miro
- [転送元 - Microsoft Dynamics 365 CRM](data-source-microsoft-dynamics-crm)
- 転送元 - Mixpanel
- [転送元 - Notion](/docs/data-source-notion)
- 転送元 - Okta
- 転送元 - PagerDuty
- 転送元 - PayPal
- 転送元 - Qiita
- 転送元 - Razorpay
- [転送元 - Repro](/docs/data-source-repro)
- 転送元 - Rollbar
- [転送元 - RTB House](/docs/data-source-rtb-house)
- [転送元 - Rtoaster insight+ Googleアカウント連携](/docs/data-source-rtoaster-insight-plus)
- [転送元 - Salesforce](/docs/data-source-salesforce)
- [転送元 - Salesforce Marketing Cloud Account Engagement](/docs/data-source-pardot)
- [転送元 - Salesforce Report](/docs/data-source-salesforce-report)
- [転送元 - Sansan](/docs/data-source-sansan)
- 転送元 - SendGrid
- [転送元 - SHANON MARKETING PLATFORM](/docs/data-source-shanon-marketing-platform)
- [転送元 - Shopify](/docs/data-source-shopify-graphql)
- [転送元 - Shopify (廃止予定)](/docs/data-source-shopify)
- [転送元 - Slack](/docs/data-source-slack)
- [転送元 - SmartHR](/docs/data-source-smart-hr)
- [転送元 - Square](/docs/data-source-square)
- [転送元 - Stripe](/docs/data-source-stripe)
- [転送元 - SurveyMonkey](/docs/data-source-survey-monkey)
- [転送元 - CRM Analytics（旧 Tableau CRM）](/docs/data-source-tableau-crm)
- 転送元 - Talentio
- 転送元 - Trello
- 転送元 - Twilio
- 転送元 - Typeform
- 転送元 - Vercel
- 転送元 - WordPress
- 転送元 - yamory
- 転送元 - zaico
- 転送元 - Zendesk Chat
- 転送元 - Zendesk Sell
- [転送元 - Zendesk Support](/docs/data-source-zendesk-support)
- [転送元 - Zoho Books](/docs/data-source-zoho-books)
- [転送元 - Zoho CRM](/docs/data-source-zoho-crm)
- 転送元 - Zoho Desk
- 転送元 - Zoho Inventory
- 転送元 - Zoho People
- 転送元 - Zoho Recruit
- 転送元 - Zoho Sheet
- 転送元 - Zoom
- 転送元 - カオナビ
- 転送元 - クラウドサイン
- 転送元 - ジョブカン経費精算/ワークフロー
- 転送元 - ジョーシス
- 転送元 - スマレジ
- 転送元 - チャネルトーク
- [転送元 - ネクストSFA](/docs/data-source-next-sfa)
- [転送元 - バクラク](/docs/data-source-bakuraku)
- 転送元 - マネーフォワード クラウド会計
- [転送元 - マネーフォワード クラウド会計Plus](/docs/data-source-money-forward-cloud-accounting-plus)
- [転送元 - マネーフォワード クラウド経費](/docs/data-source-money-forward-cloud-expense)
- 転送元 - マネーフォワード クラウド連結会計
- 転送元 - ラクロー


</details>

<details>
   <summary>転送元 - データベース系（Enterprise DBコネクタを除く）</summary>

- [転送元 - Amazon Aurora MySQL](/docs/data-source-aurora-mysql)
- [転送元 - Amazon DynamoDB](/docs/data-source-dynamo-db)
- [転送元 - Elasticsearch](/docs/data-source-elasticsearch)
- [転送元 - Google Cloud Spanner](/docs/data-source-google-cloud-spanner)
- [転送元 - MongoDB](/docs/data-source-mongodb)
- [転送元 - MySQL binlog (CDC)](/docs/mysql-to-bigquery-cdc)
- [転送元 - MySQL](/docs/data-source-mysql)
- [転送元 - PostgreSQL WAL (CDC)](/docs/postgresql-to-bigquery-cdc)
- [転送元 - PostgreSQL](/docs/data-source-postgresql)

</details>

<details>
   <summary>転送元 - ファイル・ストレージサービス系</summary>

- [転送元 - Amazon CloudWatch Logs](/docs/data-source-cloudwatch-logs)
- [転送元 - Amazon S3](/docs/data-source-s3)
- [転送元 - Azure Blob Storage](/docs/data-source-azure-blob-storage)
- [転送元 - Box](/docs/data-source-box)
- [転送元 - FTP・FTPS](/docs/data-source-ftp)
- [転送元 - Google Cloud Storage](/docs/data-source-google-cloud-storage)
- [転送元 - Google Drive](/docs/data-source-googledrive)
- [転送元 - Google Spreadsheets](/docs/data-source-google-spreadsheets)
- [転送元 - Microsoft SharePoint](data-source-microsoft-sharepoint)
- [転送元 - SFTP](/docs/data-source-sftp)

</details>

<details>
   <summary>転送元 - 広告系</summary>

- [転送元 - A8.net](/docs/data-source-a8-net)
- [転送元 - Amazon Ads](/docs/data-source-amazon-ads)
- [転送元 - Apple Search Ads](/docs/data-source-apple-search-ads)
- [転送元 - Criteo](/docs/data-source-criteo)
- [転送元 - Facebook Ad Insights](/docs/data-source-facebook-ad-insights)
- [転送元 - Facebook Ad クリエイティブ](/docs/data-source-facebook-ads-creative)
- [転送元 - Facebookリード広告](/docs/data-source-facebook-lead-ads)
- [転送元 - Google Ad Manager](/docs/data-source-google-ad-manager)
- [転送元 - Google Ads](/docs/data-source-google-ads)
- [転送元 - Google AdSense](/docs/data-source-google-adsense)
- [転送元 - LINE広告](/docs/data-source-line-ad-api)
- [転送元 - Microsoft Advertising](/docs/data-source-microsoft-advertising)
- [転送元 - TikTok Ads](/docs/data-source-tiktok-ads)
- [転送元 - ValueCommerce](/docs/data-source-valuecommerce)
- [転送元 - X Ads (旧Twitter Ads)](/docs/data-source-twitter-ads)
- [転送元 - Yahoo!ディスプレイ広告 (運用型)](/docs/data-source-yahoo-display-programmatic-ads)
- [転送元 - Yahoo!検索広告](/docs/data-source-yahoo-search-ads)

</details>

<details>
   <summary>転送元 - ローカルファイル</summary>

- [転送元 - ローカルファイル](/docs/data-source-local-file)

</details>

<details>
   <summary>転送先 - DWH系</summary>

- [転送先 - Amazon Redshift](/docs/data-destination-redshift)
- [転送先 - Azure Synapse Analytics](/docs/data-destination-azure-synapse-analytics)
- [転送先 - Databricks](/docs/data-destination-databricks)
- [転送先 - Google BigQuery](/docs/data-destination-bigquery)
- [転送先 - Snowflake](/docs/data-destination-snowflake)
- [転送先 - Treasure Data](/docs/data-destination-treasure-data)

</details>

<details>
   <summary>転送先 - データベース系（Enterprise DBコネクタを除く）</summary>

- [転送先 - MySQL](/docs/data-destination-mysql)
- [転送先 - PostgreSQL](/docs/data-destination-postgresql)

</details>

<details>
   <summary>転送先 - ファイル・ストレージサービス系</summary>

- [転送先 - Amazon S3](/docs/data-destination-s3)
- [転送先 - Amazon S3 Parquet](/docs/data-destination-s3-parquet)
- [転送先 - Azure Blob Storage](/docs/data-destination-azure-blob-storage)
- [転送先 - Box](/docs/data-destination-box)
- [転送先 - FTP・FTPS](/docs/data-destination-ftp)
- [転送先 - Google Cloud Storage](/docs/data-destination-google-cloud-storage)
- [転送先 - Google Drive](/docs/data-destination-google-drive)
- [転送先 - Google Spreadsheets](/docs/data-destination-google-spreadsheets)
- [転送先 - SFTP](/docs/data-destination-sftp)

</details>

#### Enterprise DBコネクタ

- [転送元 - Db2 for LUW](/docs/data-source-db2-for-luw)
- [転送元 - Microsoft SQL Server](/docs/data-source-sql-server)
- [転送元 - Oracle Database](/docs/data-source-oracle-database)
- [転送先 - Microsoft SQL Server](/docs/data-destination-sql-server)

#### ログデータ出力用コネクタ

- [転送元 - TROCCO Web行動ログ](/docs/data-source-n-analytics-log)
- [転送元 - TROCCO](/docs/data-source-trocco)

#### Reverse ETLコネクタ

<details>
   <summary>転送先 - クラウドアプリケーション系</summary>

- [転送先 - Adobe Marketo Engage](/docs/data-destination-marketo)
- [転送先 - Braze](/docs/data-destination-braze)
- [転送先 - eセールスマネージャー](/docs/data-destination-e-sales-manager)
- [転送先 - HubSpot](/docs/data-destination-hubspot)
- [転送先 - KARTE Datahub](/docs/data-destination-karte-datahub)
- [転送先 - kintone](/docs/data-destination-kintone)
- [転送先 - Rtoaster insight+](/docs/data-destination-rtoaster-insight)
- [転送先 - Salesforce](/docs/data-destination-salesforce)
- [転送先 - Salesforce Marketing Cloud](/docs/data-destination-salesforce-marketing-cloud)
- 転送先 - SHANON MARKETING PLATFORM
- [転送先 - Zoho CRM](/docs/data-destination-zoho-crm)

</details>

<details>
   <summary>転送先 - 広告系</summary>

- [転送先 - Facebook カスタムオーディエンス(β版)](/docs/data-destination-facebook-custom-audience)
- [転送先 - Facebook コンバージョンAPI](/docs/data-destination-facebook-conversion-api)
- [転送先 - Google Ads カスタマーマッチ](/docs/data-destination-google-ads-customer-match)
- [転送先 - Google Ads コンバージョン](/docs/data-destination-google-ads-conversion)
- [転送先 - Google Analytics 4 Measurement Protocol](/docs/data-destination-google-analytics4-measurement-protocol)
- [転送先 - LINE Conversion API](/docs/data-destination-line-ads-conversion-api)
- [転送先 - LINE広告 カスタムオーディエンス](/docs/data-destination-line-ads-custom-audience)
- [転送先 - Microsoft Advertising カスタマーマッチ](/docs/data-destination-microsoft-advertising-customer-match)
- [転送先 - TikTok Ads カスタムオーディエンス](/docs/data-destination-tiktok-ads-custom-audience)
- [転送先 - X Ads (旧Twitter Ads) Webコンバージョン](/docs/data-destination-twitter-ads-web-conversion)
- [転送先 - Yahoo!広告 ディスプレイ広告 オーディエンスリスト](/docs/data-destination-yahoo-display-ads-audience-list)
- [転送先 - Yahoo!広告ディスプレイ広告コンバージョン計測API(β版)](/docs/data-destination-yahoo-display-ads-conversion-api)

</details>

#### カスタムコネクタ

- [転送元 - カスタムコネクタ](/docs/data-source-custom-connector)
- [転送先 - カスタムコネクタ](/docs/data-destination-custom-connector)

#### 転送元HTTP・HTTPSコネクタ

- [転送元 - HTTP・HTTPS](/docs/data-source-http)

#### 転送元SAP S4/HANAコネクタ

- [転送元 - SAP S4/HANAコネクタ](/docs/data-source-sap-odata)

### 有償オプション機能

以下は、通常のプランにはバンドルされていない機能です。
追加の有償オプションとしてご契約いただくことでご利用できます。
なお、有償オプションを契約するためのプランに関する制約があります。

|オプション機能|契約可能なプラン|補足|
|---|---|---|
|[チーム機能](/docs/about-team)|**Essential**プラン|Professionalプランの場合、追加料金なしで利用可能|
|[品質チェック設定](/docs/datamart-bigquery#step3：品質チェック設定)|**Essential**プラン|Professionalプランの場合、追加料金なしで利用可能|
|[TROCCO Web行動ログ](/docs/n-analytics-log)|**Essential**プラン以上|-|
|セグメントビルダー|**Professional**プラン|DWHやすでに構築したCDP上の顧客データをもとに、GUI上で属性・行動などの条件を指定して柔軟にセグメントを生成し、各種広告・MA・BIツールへ連携できるノーコード型のデータ抽出・配信ツールです。<br>セグメント抽出条件の履歴管理やジョブ・ユーザー管理などの運用機能も備え、マーケター自身がPDCAを迅速に回せる環境を提供します。また、お客様ごとに独立した環境を構築するため、要件に合わせた高いセキュリティ条件へ適用させることが可能です。|
|AWS PrivateLink|**Advanced**プラン以上|-|

### ジョブの同時実行数上限

#### 同時実行数上限の仕様

TROCCOでは、アカウント内で同時に実行できるジョブの数に制限があります。
通常、TROCCOでジョブを実行すると、該当のジョブはいったん`QUEUED`（実行待ち）状態となり、その後ジョブの実行が開始されます。
この際に、実行されているジョブの数が上限に達していると、先に実行されていた任意のジョブが終了するまで、`QUEUED`（実行待ち）状態が維持されます。

#### 契約プランごとの上限値

ご契約のプランによって、ジョブの同時実行数上限の値は異なります。

|Free|Starter|Essential|Advanced|Professional|
|---|---|---|---|---|
|5|10|20|50|100\*|

\* Professionalプランでは、[同時実行数の上限を緩和](/docs/professional-plan#同時実行数の上限緩和)できます。

#### カウント対象となるジョブおよびジョブステータス

以下の条件に適合したジョブの合計が、同時実行数のカウント対象となります。

- ジョブ種類
  - 転送ジョブ
  - データマートジョブ
- ジョブステータス
   - `SETTING UP`：ジョブの起動開始状態
   - `EXECUTING`：ジョブの実行中状態

なお、上記ジョブステータスの転送ジョブまたはデータマートジョブが何らかの形で終了した時点で、そのジョブは同時実行数のカウント対象から外れます。

#### 補足事項

:::(Warning) (旧プランの仕様)

ジョブの同実行数上限は、2024年04月に料金プランが変更されたことを受けて一部仕様が変更されています。
旧プランの仕様は、以下の通りです。

- 上限値：100（契約プランによる差異なし）
- カウント対象となるジョブ：転送ジョブのみ
:::

### ジョブの処理時間枠

#### 処理時間および処理時間枠とは

TROCCOでは、「ある月の任意の時点におけるジョブ実行時間の合計」を**処理時間**(\*1)、「追加課金(\*2)されることなく利用できる実行時間の上限値」を**処理時間枠**、とそれぞれ定義しています。

\*1 **処理時間**は、毎月初日の0時（UTC+9）時点で0時間に戻ります。
\*2 Freeプランについては追加課金は発生せず、代わりにジョブの実行が制限されます。

#### 契約プランごとの処理時間枠

ご契約のプランによって、処理時間枠は異なります。

|Free|Starter|Essential|Advanced|Professional|
|---|---|---|---|---|
|2時間/月|30時間/月|250時間/月|600時間/月|（お問い合わせください）|

#### 処理時間が処理時間枠を超過した場合

処理時間が処理時間枠を超過した場合の振る舞いは、プランによって異なります。

- Freeプランをお使いの場合
  - 処理時間が処理時間枠を超過しても追加課金は発生しません。
  - ただし超過した時点で、**該当月中のジョブ実行が制限されます**。
- いずれかの有償プランをお使いの場合
  - 超過分は**20時間単位**で追加課金が発生します。
  - 追加請求額の計算式：「ブロック数 × ブロック単価」
  - ブロック数の計算式：「(処理時間 - 処理時間枠 + 19) / 20」（単位は時間、除算は切り捨て）

:::(Warning) (ブロック単価について)

営業担当者またはカスタマーサクセスまでお問い合わせください。
:::

:::(Warning) (有償プランにおける処理時間枠超過時の例と計算式の猶予)

たとえば、Essentialプラン（処理時間枠250時間）において、処理時間が300時間となったとします。
この場合、`(300-250+19)/20=3`（除算は切り捨て）となり、**3ブロック分**の追加請求が発生します。

なお、ブロック数の計算には1時間の猶予が存在します。（計算式において、`+20`ではなく`+19`が採用されている）
これは、たとえばEssentialプランにおいて、処理時間が270時間59分59秒となったとします。
この場合、本来であれば、**2ブロック分**の追加請求が発生します。
ですが、計算式に1時間の猶予があるため、`(270.99-250+19)/20=1`（除算は切り捨て）となり、**1ブロック分**の追加請求となります。
:::

#### 処理時間の確認方法

[TROCCOのダッシュボード画面](https://trocco.io/)より確認できます。
ダッシュボード画面では、日次の処理時間の合計なども確認できます。
処理時間の集計処理は、1日のうち不定期に数回実施され、その集計結果がダッシュボード画面に順次反映されます。

また、処理時間利用量に応じてメールによる通知が送付されます。
処理時間枠に対して、処理時間が50%・80%・100%をそれぞれ超過したタイミングで、[アカウント特権管理者](/docs/about-super-admin)に対してメールが送付されます。

#### 処理時間の計測対象となる条件

以下の条件をすべて満たしたジョブの**開始日時(\*1)から終了日時**までの時間が、**秒単位で**処理時間に計上されます。

- ジョブステータスが`SUCCEEDED` (`SUCCESS`)となったジョブであること
- ジョブの種類が以下のいずれかであること
  - 転送ジョブ
  - データマートジョブ
  - dbtジョブ
  - ワークフロージョブ (\*2)(\*3)

:::(Warning) (補足事項)

(\*1) ジョブステータスが`EXECUTING`（実行中状態）に切り替わった時点が開始日時となります。ジョブステータスが`EXECUTING`より前の`QUEUED`（キューイング状態）・`SETTING UP`（起動開始状態）の間は計上の対象外となります。

(\*2) ワークフロージョブの成否ではなく、それぞれのタスクが`SUCCESS`となった場合に、タスクの処理時間が計上されます。

(\*3) ワークフロージョブにおける以下のタスクは、二重計上を防ぐため、計上の対象外となります。

- 転送ジョブタスク
- マネージドデータ転送のジョブタスク
- データマートジョブタスク
- dbtジョブタスク
:::

### CDCデータ転送

[CDCデータ転送](/docs/cdc-job-definition)の料金は**処理レコード数（INSERT・UPDATE・DELETEされた行数の合計）**に応じて発生します。通常ジョブの処理時間にはカウントされず、別枠で管理されます。
[TROCCOのダッシュボード画面](https://trocco.io/)の**CDCサマリー**より処理レコード数を確認できます。

:::(Warning) (課金対象のイベント)
**差分転送**のみ課金対象です。初回の全件転送によるイベント数は含まれません。

:::

:::(Warning) (処理レコード数の単価について)

営業担当者またはカスタマーサクセスまでお問い合わせください。
:::
