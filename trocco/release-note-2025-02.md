---
articleId: 2434e28e-fa4d-49cb-b5dd-2750ed57e3c3
slug: release-note-2025-02
title: リリースノート-2025年02月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2025年02月のリリース情報をお届けします**

## お知らせ

### Self-Hosted Runner（β版）のリリース

Self-Hosted Runner（β版）がリリースされました。
オンプレミス環境やプライベートネットワーク環境のサーバー上でTROCCOのジョブが実行できます。

現在、Self-Hosted Runner（β版）は、トライアルを希望のお客様にのみ提供しております。
機能の概要やトライアルのご依頼など、詳しくは[Self-Hosted Runner（β版）](https://primenumber.com/trocco/features/self-hosted-runner)を参照ください。

### TROCCO APIのコール数上限値の変更

APIコール数の上限が、下記の通り変更されました。

- 変更前
  - 最大**10,000**コール/1日
  - 最大**100**コール/15分
- 変更後
  - 最大**3,500**コール/10分

上記変更に伴い、API実行時のレスポンスにAPIコール数に関する情報が含まれるようになりました。
詳しくは、[APIコール数制限に関するレスポンスヘッダー](/trocco-api/apidocs/overview#apiコール数制限に関するレスポンスヘッダー)を参照ください。

## 転送設定

### 対応コネクターの追加

#### 転送元Stripe

転送元Stripeを追加しました。
これにより、Stripeの決済データをTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。
詳しくは、[転送元 - Stripe](/docs/data-source-stripe)を参照ください。

#### 転送元Square

転送元Squareを追加しました。
これにより、Squareの取引データをTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。
詳しくは、[転送元 - Square](/docs/data-source-square)を参照ください。

#### 転送元Zoho Desk

転送元Zoho Deskを追加しました。  
これにより、Zoho Deskのチケットデータや顧客情報をTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。  

### 既存コネクターの機能拡充

#### 転送先HubSpotにて転送時の並列数を指定できるように

転送先HubSpotにて、転送時の並列実行数を指定できるようになりました。
並列実行数を増やすことで、処理時間を短縮できる可能性があります。
一方で、利用上の注意事項が存在します。詳しくは、[転送先 - HubSpot](/docs/data-destination-hubspot#step1-詳細設定)を参照ください。

#### 転送先Amazon S3にてマルチパートアップロードに対応

Amazon S3の[マルチパートアップロード](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html)に対応しました。
これにより、5GB以上のファイルであっても、TROCCOを介してAmazon S3に転送できるようになりました。
詳しくは、[転送先 - Amazon S3](/docs/data-destination-s3)を参照ください。

## ワークフロー定義

### ワークフロー定義作成画面でラベルを付与できるように

ワークフロー定義の作成画面でラベルを付与できるようになりました。

![release-notes-2025-02-12-11-44-21](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-02-12-11-44-21.png){height="" width="50%"}

## TROCCO API

### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタが拡充されました。
2025/02/28現在、対応しているコネクターは以下のとおりです。

- 転送元コネクター
  - 転送元 - Google Cloud Storage
  - 転送元 - Google Spreadsheets
  - 転送元 - MySQL
  - 転送元 - Salesforce
  - 転送元 - Snowflake
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
2025/02/28現在、対応しているコネクターは以下のとおりです。

- Amazon S3接続情報
- Google BigQuery接続情報
- Google Cloud Storage接続情報
- Google Spreadsheets接続情報
- MySQL接続情報
- PostgreSQL接続情報
- Salesforce接続情報
- Snowflake接続情報

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

## コネクタAPIアップデート

### 転送元Apple Search Ads

転送時に使用するApple Search Ads Campaign Management APIのバージョンを、v4から**v5**へアップデートしました。
新バージョンについて、[Apple Search Ads Campaign Management API 5](https://developer.apple.com/documentation/apple_search_ads/apple-search-ads-campaign-management-api-5)を参照ください。

