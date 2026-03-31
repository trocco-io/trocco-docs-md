---
articleId: 4488f5dc-779c-422a-950a-350f792c0b66
slug: release-note-2025-09
title: リリースノート-2025年09月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2025年09月のリリース情報をお届けします**

## 新機能

### 環境管理機能をリリース

TROCCOの各種設定（リソース）を開発環境・検証環境・本番環境などのいくつかの環境ごとに分けて管理できる環境管理機能をリリースしました。
この機能により、設定変更を事前に検証し、段階的にデプロイすることで、より安全な運用が可能になります。

詳しくは[環境管理機能](/docs/environment-management)を参照ください。

## お知らせ

### パスワードの最低文字数を8文字から12文字に変更

パスワードを新規設定する際の最低文字数を8文字から12文字に変更しました。
本リリース前に12文字未満のパスワードが設定されたアカウントに影響はありません。

## 転送設定

### 転送元Db2 for LUWを追加

転送元Db2 for LUWを追加しました。
詳しくは、以下のドキュメントを参照ください。

* [接続情報 - Db2 for LUW](/docs/connection-configuration-db2-for-luw)
* [転送元 - Db2 for LUW](/docs/data-source-db2-for-luw)

### 転送元Bill Oneを追加

転送元Bill Oneを追加しました。
請求書情報の会計システムへの自動連携や、取引先情報のマスタ同期に活用できます。

### 転送元ClickUpを追加

転送元ClickUpを追加しました。
タスクのデータを他システムに連携し、進捗や予実の分析に役立てられます。

### 転送元BIZTELを追加

転送元BIZTELを追加しました。
通話履歴をCRMに連携したり、オペレーターの状況可視化による負荷分散に繋げられます。

### 転送元Shopifyで、ターゲットがmetafieldsの場合にオーナーの作成日時で取得データを絞り込めるように

転送元Shopifyで、ターゲットに`metafields`を指定した場合に、オーナーの作成日時で取得データを絞り込めるようになりました。

### 転送元Shopifyでfulfillment_line_items・refund_line_itemsの取得に対応

転送元Shopifyで`fulfillment_line_items`と`refund_line_items`の取得に対応しました。
なお、本ターゲットの取得はBulk operationではなく通常のGraphQLクエリによるもので、取得時間が長くなる可能性があります。

詳しくは[転送元 - Shopify](/docs/data-source-shopify-graphql)を参照ください。

### 転送元Oracle Databaseで接続先データベースの指定にサービス名が利用できるように

転送元Oracle Databaseにて、「接続タイプ」の項目で「サービス名」を選択することで、サービス名で接続先データベースを指定できるようになりました。

### JSONから展開したカラムもカラム名・データ型の一括変換ができるように

「JSONカラムを展開」を利用してJSONから展開したカラムも、カラム名・データ型の一括変換が可能になりました。

### 転送先SalesforceがOAuth認証に対応

転送先Salesforceで、認証方式がOAuth認証の接続情報を利用可能になりました。

### 転送元Tiktok Adsで削除済みの広告データを取得できるように

転送元Tiktok Adsで以下のレポート種別を選択した場合に、削除済みの広告データをレポートに含めるか選択できるようになりました。

* campaign
* ad_group
* ad

### 転送元Shopifyでfulfillmentsをターゲットとした場合のフィルター条件を追加

転送元Shopifyで`fulfillments`をターゲットとした場合に、更新日時で絞り込めるようになりました。

### 転送元MongoDBでクエリにカスタム変数を埋め込めるように

転送元MongoDBでクエリにカスタム変数を埋め込めるようになりました。

### 転送元Sansanで名刺や人物に付与したタグ情報が取得できるように

転送元Sansanで以下の項目を取得対象とした場合に、付与したタグ情報が取得されるようになりました。

* 名刺Set一覧(期間指定)
* 人物一覧

## CDCデータ転送

### 転送元のスキーマ変更を検知し、通知や転送先への自動追従が可能に

カラムやテーブルの追加といった転送元のスキーマ変更を検知して、転送先のスキーマも自動追従させることが可能になりました。
変更を通知し、追従は手動で行うことも可能です。

詳しくは[CDCスキーマ自動追従](/docs/cdc-schema-auto-prepagation)を参照ください。

### 追従設定が「自動追従しない」でもカラムのスキーマ変更を通知できるように

追加されたテーブル・カラムの追従設定を「自動追従しない」に設定した場合でも、転送元のカラムのスキーマ変更を通知できるようになりました。

## データマート

### データマートDatabricks

データマートDatabricksを追加しました。
詳しくは、[データマート - Databricks](/docs/datamart-databricks)を参照ください。

### データマートSnowflakeでクエリのタイムアウト時間を指定できるように

データマートSnowflakeにて、クエリのタイムアウト時間を指定できる「ステートメントタイムアウト」の項目を追加しました。

## ワークフロー

### 条件分岐タスクで環境を条件に利用できるように

条件分岐タスクでワークフローの環境を分岐の条件に利用できるようになりました。

## 接続情報

### Microsoft SQL Server 2022に対応

Microsoft SQL Server 2022に対応しました。
接続情報Microsoft SQL Serverで、JDBCドライバーにバージョン12.6を選択することで利用可能です。

## 運用支援

### 通知のメッセージでカスタム変数を使用できるように

通知のメッセージでカスタム変数を使用できるようになりました。
IDなどを埋め込むことで、メッセージだけで通知の概要を把握できるようになります。

## UI・UX

### 接続情報が利用されているリソースが確認できるように

接続情報一覧画面で、対象の接続情報が利用されているリソースを確認できるようになりました。
![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-09-18-18-18-15.png)

### 接続情報一覧画面で絞り込み・ソートが可能に

接続情報一覧画面で、転送設定一覧画面などと同様に絞り込みが可能になりました。
接続情報名やサービスなどでの絞り込みや、接続設定名によるソートができます。

### データマート定義画面・ワークフロー定義画面でリソースグループの一括操作が可能に

データマート定義画面およびワークフロー定義画面の一括操作で、リソースグループの追加や削除が可能になりました。

## コネクタAPIアップデート

### 転送元Hubspot・転送先Hubspot

転送時に使用するhubspot-api-clientのバージョンを、v17から**v20**へアップデートしました。
新バージョンについては、[Release v20.0.0 · HubSpot/hubspot-api-ruby](https://github.com/HubSpot/hubspot-api-ruby/releases/tag/v20.0.0)を参照ください。

### 転送元Yahoo!ディスプレイ広告 (運用型)

転送時に使用するYahoo!広告 APIのバージョンを、v15から**v17**へアップデートしました。
新バージョンについては、[Yahoo!広告 ディスプレイ広告 API v17 リリースノート │ Yahoo!広告 API](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/yda-v17.html)を参照ください。

### 転送元Yahoo!検索広告

転送時に使用するYahoo!広告 APIのバージョンを、v15から**v17**へアップデートしました。
新バージョンについては、[Yahoo!広告 検索広告 API v17 リリースノート │ Yahoo!広告 API](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/ysa-v17.html)を参照ください。

### Facebook関連コネクタ

下記で利用しているFacebook APIを、v21から**v23**へアップデートしました。

- 転送元Facebook Ad Insights
- 転送元Facebook Ad クリエイティブ
- 転送元Facebookリード広告
- 転送先Facebook コンバージョンAPI
- 転送先Facebook カスタムオーディエンス(β版)
- Facebook接続情報のOAuth認証

新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version23.0)を参照ください。