---
articleId: bb4c44f1-5ff5-4b94-8d85-6374116587f8
slug: release-note-2024-12
title: リリースノート-2024年12月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2024年12月のリリース情報をお届けします**

## お知らせ

### 転送設定詳細の「JSON設定ファイル」表示機能が非推奨に

TROCCOでは、転送設定の設定内容を詳細画面で確認できます。
このたび運用効率向上のため、**2025年1月6日**にJSON形式による設定ファイルの表示を廃止する予定となりました。
これに先立ち、JSON形式による設定ファイルの表示機能を非推奨とする文言を追加しました。
詳しくは、[2024/12/02 転送設定詳細の「JSON設定ファイル」表示機能廃止について](/docs/abolish-etl-configuration-setting-json)を参照ください。

![release-notes-2024-12-09-12-59-37](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-12-09-12-59-37.png){height="" width="50%"}

## 転送設定

### 転送元freee会計・ 転送元SmartHRを追加

転送元freee会計・転送元SmartHRを追加しました。
詳しくは、それぞれ以下のページを参照ください。

- [転送元 - freee会計](/docs/data-source-freee-accounting)
- [転送元 - SmartHR](/docs/data-source-smart-hr)

### 転送先kintoneでユーザー選択・組織選択・グループ選択フィールドへ転送できるように

転送設定STEP2出力オプションで指定できるデータ型に下記のフィールドを追加しました。

- `USER_SELECT`：ユーザー選択
- `ORGANIZATION_SELECT`：組織選択
- `GROUP_SELECT`：グループ選択

転送方法について、詳しくは[データ型にUSER_SELECT・ORGANIZATION_SELECT・GROUP_SELECTを選択したい場合](/docs/data-destination-kintone#データ型にuser_select・organization_select・group_selectを選択したい場合)を参照ください。

## UI・UX

### ワークフロー定義一覧でカスタム変数ループ設定による絞り込みができるように

ワークフロー定義一覧の絞り込み条件に**ループ設定**を追加しました。
カスタム変数のループ設定の有無によって、ワークフロー定義を絞り込むことができます。

![release-notes-2024-12-25-19-06-34](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-12-25-19-06-34.png){height="" width="50%"}

## TROCCO API

### チームAPIを追加

TROCCO APIで[チーム](/docs/team)に関する以下の操作ができるようになりました。

- [チーム一覧取得](/trocco-api/apidocs/get-teams)
- [チーム作成](/trocco-api/apidocs/post-team)
- [チーム詳細取得](/trocco-api/apidocs/get-team)
- [チーム更新](/trocco-api/apidocs/patch-team)
- [チーム削除](/trocco-api/apidocs/delete-team)

### データマート定義APIを正式リリース

データマート定義APIは、これまで対象データウェアハウスとしてBigQueryのみをサポートしていましたが、新たにSnowflakeにも対応しました。
これに伴い、ベータ版から正式版としてリリースしました。

- [データマート定義一覧取得](/trocco-api/apidocs/get-datamart-definitions)
- [データマート定義作成](/trocco-api/apidocs/post-datamart-definition)
- [データマート定義詳細取得](/trocco-api/apidocs/get-datamart-definition)
- [データマート定義更新](/trocco-api/apidocs/patch-datamart-definition)
- [データマート定義削除](/trocco-api/apidocs/delete-datamart-definition)

## APIアップデート

### 転送元Google Ads

転送時に使用するGoogle Ads APIのバージョンを、v16から**v18**へアップデートしました。
新バージョンについて、[Google Ads API](https://developers.google.com/google-ads/api/docs/release-notes#v18)のドキュメントを参照ください。

### 転送元Facebook Ad クリエイティブ・転送元Facebook Ad Insights

転送時に使用するFacebook APIのバージョンを、v18から**v21**へアップデートしました。
新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version21.0)のドキュメントを参照ください。

### 転送元Shopify

転送時に使用するShopify APIのバージョンを、2024-01から**2024-04**へアップデートしました。
新バージョンについて、[Shopify API](https://shopify.dev/docs/api/release-notes/2024-04)のドキュメントを参照ください。
