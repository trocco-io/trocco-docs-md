---
articleId: e44ae77c-a99c-45da-b44e-aad9f995c401
slug: release-note-2025-12
title: リリースノート-2025年12月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2025年12月のリリース情報をお届けします**

## 転送設定

### 転送元TikTok Adsでオーディエンス属性による絞り込みができるように

転送元TikTok Adsで、オーディエンス属性による取得データの絞り込みが可能になりました。
詳しくは、[転送元 - TikTok Ads](data-source-tiktok-ads)を参照ください。

## カスタムコネクタ

### 転送先カスタムコネクタをリリース

これまで転送元のみ対応していたカスタムコネクタが、転送先に対応しました。
TROCCOでコネクタの用意がないサービスに対してもデータを転送できます。

詳しくは、[カスタムコネクタについて](/docs/about-custom-connector)を参照ください。

また、リリースにあわせて「Connector Builder」の呼称を廃止し、カスタムコネクタに統一しました。

### カスタムコネクタの操作を監査ログの記録対象に

カスタムコネクタ関連の操作が監査ログに記録されるようになりました。
詳しくは、[監査ログ機能](/docs/about-audit-log)を参照ください。

## 接続情報

### 接続情報ShopifyでOAuth2.0 Client Credentials認証をサポート

接続情報ShopifyでOAuth2.0 Client Credentials認証をサポートしました。
2026年1月1日より、Shopify管理画面でのカスタムアプリ作成ができなくなるため、接続情報を新規作成する場合はOAuth2.0 Client Credentials認証の利用を推奨します。

詳しくは[接続情報 - Shopify](/docs/connection-configuration-shopify-graphql)を参照ください。

## TROCCO API

### 転送設定・接続情報APIの対応コネクターが拡充

転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - Databricks
- 転送元 - Databricks
- 転送先 - Databricks

対象となったAPIエンドポイントは以下のとおりです。

- 接続情報
  - [接続情報一覧取得](/apidocs/get-connection-configurations)
  - [接続情報作成](/apidocs/post-connection-configuration)
  - [接続情報取得](/apidocs/get-connection-configuration)
  - [接続情報更新](/apidocs/patch-connection-configuration)
  - [接続情報削除](/apidocs/delete-connection-configuration)
- 転送設定
  - [転送設定一覧取得](/apidocs/get-job-definitions)
  - [転送設定作成](/apidocs/post-job-definition)
  - [転送設定詳細取得](/apidocs/get-job-definition)
  - [転送設定更新](/apidocs/patch-job-definition)
  - [転送設定削除](/apidocs/delete-job-definition)

## コネクタAPIアップデート

### 転送元Amazon S3

転送時に使用するAWS SDKのバージョンを、v1から**v2**へアップデートしました。
新バージョンについては、[AWS SDK for Java 2.x](https://docs.aws.amazon.com/ja_jp/sdk-for-java/latest/developer-guide/home.html)を参照ください。
