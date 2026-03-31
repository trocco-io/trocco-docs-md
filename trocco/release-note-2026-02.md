---
articleId: a0544b3f-8090-4d77-bb3d-d904c96d8672
slug: release-note-2026-02
title: リリースノート-2026年2月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2026年2月のリリース情報をお届けします**

## 転送設定

### 転送先Databricksの出力オプションが利用可能に

転送先Databricksで出力オプションを設定可能になりました。

### 転送設定一覧で転送モードによる絞り込みが可能に

DWH系コネクタを転送先に選択した場合に、転送モード（追記・更新・洗い替え）による絞り込みが可能になりました。

### 転送元Hubspotでcallオブジェクトを取得できるように

転送元Hubspotでcallオブジェクトが取得可能になりました。
担当者ごとのコール数・通話時間・架電頻度などの可視化に利用できます。

詳しくは、[転送元 - HubSpot](/docs/data-source-hubspot)を参照ください。

## データマート

### データマートBigQueryの詳細画面の構成を変更

データマートBigQueryのみ、データマート定義詳細画面の各種項目の構成を変更しました。

### データマートBigQueryのジョブ詳細画面の構成を変更

データマートBigQueryのみ、データマートジョブ詳細画面の各種項目の構成を変更しました。

### データマートBigQueryに増分更新・SCD Type 2モードを追加

データマートBigQueryで、書き込みモードに増分更新とSCD Type 2を追加しました。
時系列ごとの統計値を格納する場合や、データ更新履歴をテーブルに保持して多様な分析を実施したい場合などにご検討ください。
詳しくは、[データマート - Google BigQuery](/docs/datamart-bigquery)を参照ください。

また、本機能のリリースに伴い、データマートBigQueryのUIもリニューアルされています。
変更点の詳細は[BigQueryデータマート機能のアップデートに伴う画面変更について – TROCCOヘルプセンター](https://help.trocco.io/hc/ja/articles/5159434690846)を参照ください。

### 品質チェック機能をリリース

データの一意性やNULL混入を自動で検証し、分析結果の不整合を未然に防げる**品質チェック機能**をリリースしました。
現時点ではBigQueryのみ対応しており、他のDWHにも今後拡充予定です。

詳しくは、以下を参照ください。
- 機能紹介：[データチェック｜TROCCO(トロッコ)](https://primenumber.com/trocco/features/datacheck)
- Docs：[データマート - Google BigQuery](/docs/datamart-bigquery)

## dbt連携

### dbtバージョン1.7の新規設定を停止

dbt Core バージョン1.7について、公式よりサポートが終了したため、新規設定を停止しました。
今後のスケジュールについては[dbt連携機能 新バージョン対応と旧バージョン(v1.7)サポート終了のお知らせ（2026年2月中旬予定） – TROCCOヘルプセンター](https://help.trocco.io/hc/ja/articles/5149921395742)を参照ください。

## 接続情報

### BigQueryでWorkload Identity Federation認証を利用可能に

接続情報BigQueryでWorkload Identity Federation認証が利用可能になりました。
詳しくは[接続情報 - Google BigQuery](/docs/connection-configuration-bigquery)を参照ください。

### MongoDBで読み込み設定タグの指定が可能に

接続情報MongoDBで読み込み設定タグの指定が可能になりました。
詳しくは[接続情報 - MongoDB](/docs/connection-configuration-mongodb)を参照ください。

### BigQueryのWorkload Identity Federation認証の方式を改善

接続情報BigQueryで利用できるWorkload Identity Federation認証の方式を改善し、外部IDの発行に対応しました。
詳しくは[接続情報 - Google BigQuery](/docs/connection-configuration-bigquery)を参照ください。

## 運用支援

### 通知先HTTPでURLクエリパラメータを指定できるように

通知先HTTPでURLクエリパラメータを指定できるようになりました。
APIキーなどの認証情報をマスキングしながらURLに含めることが可能になりました。

詳しくは、[通知設定について](/docs/notification)を参照ください。

## コネクタAPIアップデート

### 転送先Amazon S3

転送時に使用するAWS SDKのバージョンを、v1から**v2**へアップデートしました。
新バージョンについては、[AWS SDK for Java 2.x](https://docs.aws.amazon.com/ja_jp/sdk-for-java/latest/developer-guide/home.html)を参照ください。

## TROCCO API

### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象として、以下が追加されました。

- 転送先 - PostgreSQL
- 転送先 - MySQL

対象となったAPIエンドポイントは以下のとおりです。

- [転送設定一覧取得](/apidocs/get-job-definitions)
- [転送設定作成](/apidocs/post-job-definition)
- [転送設定詳細取得](/apidocs/get-job-definition)
- [転送設定更新](/apidocs/patch-job-definition)
- [転送設定削除](/apidocs/delete-job-definition)

### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象として、以下が追加されました。

- 転送先 - Hubspot

対象となったAPIエンドポイントは以下のとおりです。

- [転送設定一覧取得](/apidocs/get-job-definitions)
- [転送設定作成](/apidocs/post-job-definition)
- [転送設定詳細取得](/apidocs/get-job-definition)
- [転送設定更新](/apidocs/patch-job-definition)
- [転送設定削除](/apidocs/delete-job-definition)

### 接続情報APIの対応コネクターが拡充

接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - Backlog

対象となったAPIエンドポイントは以下のとおりです。

- 接続情報
  - [接続情報一覧取得](/apidocs/get-connection-configurations)
  - [接続情報作成](/apidocs/post-connection-configuration)
  - [接続情報取得](/apidocs/get-connection-configuration)
  - [接続情報更新](/apidocs/patch-connection-configuration)
  - [接続情報削除](/apidocs/delete-connection-configuration)

### 転送設定APIの対応コネクターが拡充

転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - MongoDB
- 転送元 - MongoDB

対象となったAPIエンドポイントは以下のとおりです。

- 接続情報
  - [接続情報一覧取得](/apidocs/get-connection-configurations)
  - [接続情報作成](/apidocs/post-connection-configuration)
  - [接続情報取得](/apidocs/get-connection-configuration)
  - [接続情報更新](/apidocs/patch-connection-configuration)
  - [接続情報削除](/apidocs/delete-connection-configuration)
- 転送設定
  - [転送設定作成](/apidocs/post-job-definition)
  - [転送設定詳細取得](/apidocs/get-job-definition)
  - [転送設定更新](/apidocs/patch-job-definition)
  - [転送設定削除](/apidocs/delete-job-definition)