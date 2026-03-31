---
articleId: fdbcd9a6-27b4-46fd-83f8-ac4791c41b35
slug: release-note-2025-03
title: リリースノート-2025年03月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2025年03月のリリース情報をお届けします**

## 転送設定

### 対応コネクターの追加

#### 転送元マネーフォワード クラウド会計Plusを追加

転送元マネーフォワード クラウド会計Plusを追加しました。  
これにより、貸借対照表や損益計算書などの会計データをTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。

#### 転送元freee請求書を追加

転送元freee請求書を追加しました。  
これにより、請求書や見積書などをTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。

#### 転送元Notionを追加

転送元Notionを追加しました。  
これにより、Notion上のデータをTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。
ドキュメントやデータベースの情報をBIツールやDWHに統合し、より高度な分析が可能になります。

#### 転送元Zoho Inventoryを追加

転送元Zoho Inventoryを追加しました。  
これにより、在庫管理データや受注・発注データをTROCCOを介して他のデータ基盤に連携し、統合的なデータ分析が可能になります。
会計システムやBIツールと組み合わせることで、より精度の高い在庫・売上分析を実現できます。

#### 転送元Chatworkを追加

転送元Chatworkを追加しました。
タスクやチャットの情報を他の業務データと組み合わせて可視化・分析することで、チームの生産性やコミュニケーションの状況をより深く把握できます。

#### 転送元ジョブカン経費精算/ワークフローを追加

転送元ジョブカン経費精算/ワークフローを追加しました。
取引先一覧や申請書一覧、汎用マスタレコード一覧などを取得できます。
これにより、申請・承認フローや各種マスタ情報を他の業務データと統合して分析できるようになり、経費管理やワークフローの最適化が可能になります。

#### 転送元バクラクを追加

転送元バクラクを追加しました。
ユーザー情報一覧や申請一覧などを取得できます。
申請データや組織構成情報をもとに、経費申請やワークフローの傾向を可視化したり、チーム単位での業務分析が可能になります。

### 既存コネクターの機能拡充

#### 転送先MySQLでDECIMAL型での転送に対応

転送先MySQLでは、転送設定STEP2の出力オプションにて、各カラムのデータ型をユーザー自身で指定できます。
今回、指定できるデータ型として`DECIMAL`に対応しました。
精度およびスケールを入力することで、DECIMAL型へ転送できます。

#### 転送先Google Ads コンバージョンにてリードの拡張コンバージョンに対応

転送先Google Ads コンバージョンにて、リードの拡張コンバージョンに対応しました。
詳しくは、[転送先 - Google Ads コンバージョン](/docs/data-destination-google-ads-conversion#拡張コンバージョンリード向けを利用する場合)を参照ください。

#### 転送先Facebook コンバージョンAPIにて、IDFAへの転送に対応

広告識別子（IDFA）である`madid`への転送が可能となりました。
TROCCOでの転送方法については、[転送先 - Facebook コンバージョンAPI](/docs/data-destination-facebook-conversion-api#カラムマッピング表)を参照ください。
`madid`については、[Facebook公式ドキュメント - Customer Information Parameters](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters)を参照ください。

#### 転送先Zendesk Supportにて`ticket`と`ticket_comment`を紐づけられるように

既存の取得対象である`ticket_comments`に、`ticket_id`カラムを追加しました。
これにより、`ticket`と`ticket_id`を紐づけられるようになります。

また、新たに`ticket_fields`を取得対象として追加しました。
`ticket_fields`の詳細については、[zendesk developers](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_fields/#list-ticket-fields)を参照ください。
なお、`ticket_fields`の取得時のページサイズの上限は、他の取得対象とは異なります。
本件について、詳しくは[転送元 - Zendesk Support](/docs/data-source-zendesk-support#step1の詳細設定)を参照ください。

## ワークフロー定義

### ワークフロージョブ詳細画面でステータスによるタスクジョブの絞り込みに対応

ワークフロージョブ詳細画面にて、タスクジョブのステータスによって、実行ログ一覧に表示されるタスクを絞り込めるようになりました。

![release-notes-2025-03-17-11-44-21](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-03-17-11-44-21.png){height="" width="50%"}

## dbt連携

### dbtバージョン1.9に対応

dbt Core v1.9を指定できるようになりました。
dbtバージョンは、[dbt Gitリポジトリ](/docs/dbt-git-repository)より選択できます。

## UX・UI

### 各種コネクタの転送設定・接続情報で接続確認できるように

以下の転送設定・接続情報で、接続確認できるようになりました。
これにより、設定の作成段階で、サービスに正しく接続できているかを確認できます。

- 転送元 - Salesforce
  - **クエリ (SOQL) を記述して転送**のときのみ対応
- 転送元 - Google Spreadsheets
- Google Drive接続情報
- Salesforce接続情報

## TROCCO API

### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタが拡充されました。

- 転送元コネクター
  - 転送元 - Amazon S3
  - 転送元 - Google Analytics 4
  - 転送元 - PostgreSQL
- 転送先コネクター
  - 転送先 - Google BigQuery
  - 転送先 - Google Spreadsheets
  - 転送先 - Salesforce
  - 転送先 - Snowflake

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)

### 接続情報APIの対応コネクターが拡充

接続情報APIの操作対象コネクタが拡充されました。

- Google Analytics 4接続情報
- kintone接続情報

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

## コネクタAPIアップデート

### 転送元Yahoo!検索広告・転送元Yahoo!ディスプレイ広告（運用型）

転送時に使用するYahoo!広告 APIのバージョンを、v13から**v15**へアップデートしました。
新バージョンについて、それぞれ以下のドキュメントを参照ください。
- [Yahoo!広告 API | 検索広告 API v15 リリースノート](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/ysa-v15.html)
- [Yahoo!広告 API | ディスプレイ広告 API v15 リリースノート](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/yda-v15.html)

### 転送元Shopify

転送時に使用するShopify APIのバージョンを、2024-04から**2024-07**へアップデートしました。
新バージョンについて、[Shopify API](https://shopify.dev/docs/api/release-notes/2024-07)のドキュメントを参照ください。
