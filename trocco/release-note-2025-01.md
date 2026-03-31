---
articleId: 9756faca-a1d4-4b2e-8de1-577e11a905c1
slug: release-note-2025-01
title: リリースノート-2025年01月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2025年01月のリリース情報をお届けします**

## お知らせ

### Snowflakeで2025年11月からキーペア認証が必須に

**2025年11月**から、Snowflakeではユーザー・パスワード認証が[利用できなくなります](https://www.snowflake.com/ja/blog/blocking-single-factor-password-authentification/)。
これに伴い、Snowflake接続情報の[ホスト名の入力形式](/docs/connection-configuration-snowflake#ホスト名の入力形式)について、キーペア認証でも`<ORGANIZATION>-<ACCOUNT_NAME>`形式で入力できるように対応しました。
今後はキーペア認証をご利用ください。

### ISO/IEC 27001:2022を取得

当社は、情報セキュリティマネジメントシステム（ISMS）の国際規格である「ISO/IEC 27001:2022」の認証を取得しました。
今後もお客様の大切なデータをより安全に取り扱い、リスク管理を強化することで、より安心して当社サービスをご利用いただける環境を提供してまいります。

### 転送設定詳細の「JSON設定ファイル」表示機能を廃止

[2024年12月2日にお知らせ](/docs/abolish-etl-configuration-setting-json)しておりました、JSON形式による設定ファイルの表示機能を2025年01月06日に廃止しました。
今後、転送設定の設定ファイルを確認する際は、YAML形式による設定ファイルをご利用ください。

## 転送設定

### 対応コネクターの拡充

#### 転送元Sansan

転送元Sansanを追加しました。
これにより、Sansanに蓄積された名刺データや企業情報を、他のデータ基盤にかんたんに連携できるようになりました。
詳しくは、[転送元 - Sansan](/docs/data-source-sansan)を参照ください。

### 転送元Zoho Books

転送元Zoho Booksを追加しました。
これにより、Zoho Booksの会計データをTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。
詳しくは、[転送元 - Zoho Books](/docs/data-source-zoho-books)を参照ください。

### 既存コネクターの仕様拡充

#### 転送先MySQLにて転送データのデータ型を明示できるように

転送設定STEP2の出力オプションにて、各カラムのデータ型をユーザー自身で指定できるようになりました。
以下のMySQLのデータ型を選択できます。

- `TINYTEXT`
- `TEXT`
- `MEDIUMTEXT`
- `LONGTEXT`

#### 転送元Google Driveにて圧縮ファイルの転送をサポート

転送元Google Driveで圧縮ファイルを転送できるようになりました。
転送可能な圧縮ファイルの形式など、詳しくは[転送元 - Google Drive](/docs/data-source-googledrive)を参照ください。

## 接続情報

### Databricks接続情報にてOAuthマシン間（M2M）認証が利用できるように

Databricks接続情報の認証方式にて、これまではPersonal Access Tokenによる認証のみ対応していましたが、今回OAuthマシン間（M2M）認証を追加しました。
設定方法について、詳しくは[Databricksの接続情報](/docs/connection-configuration-databricks)を参照ください。

### MongoDB接続情報にてSSHトンネルを利用した接続ができるように

MongoDB接続情報の接続方式に、SSHトンネルを利用した接続方式を追加しました。
設定方法について、詳しくは[MongoDBの接続情報](/docs/connection-configuration-mongodb)を参照ください。

## UI・UX

### 複数の転送設定を一括で削除できるように

転送設定一覧画面にて、複数の転送設定を一括で削除できるようになりました。
![release-notes-2025-01-31-11-44-21](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-01-31-11-44-21.png){height="" width="50%"}

### ワークフロー定義一覧にてラベル・スケジュールの一括操作が可能に

ワークフロー定義一覧画面にて、複数のワークフロー定義に対して一括でラベル・スケジュールを付与・削除できるようになりました。

![release-notes-2025-01-15-15-48-21](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-01-15-15-48-21.png){height="" width="50%"}

### マネージド転送設定にてGoogle BigQueryコンソールに直接アクセスできるように

転送先Google BigQueryのマネージド転送設定にて、転送設定ごとにBigQueryのコンソール画面へのリンクを追加しました。
リンクをクリックするとGoogle BigQueryコンソールが開き、対象のテーブルを確認できます。

![release-notes-2025-01-10-11-16-21](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-01-10-11-16-21.png){height="" width="50%"}

### ワークフロー定義一覧でカスタム変数ループ設定による絞り込みができるように

ワークフロー定義一覧の絞り込み条件に**ループ設定**を追加しました。
カスタム変数のループ設定の有無によって、ワークフロー定義を絞り込むことができます。

![release-notes-2024-12-25-19-06-34](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-12-25-19-06-34.png){height="" width="50%"}

## TROCCO API

### エンドポイントの拡充

TROCCO APIのエンドポインドが拡充されました。
詳細については、以下のAPIリファレンスを参照ください。

#### 転送設定APIを追加

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)
- [転送設定削除](/trocco-api/apidocs/delete-job-definition)

#### ワークフロー定義APIを追加

- [ワークフロー一覧取得](/trocco-api/apidocs/get-pipeline-definitions)
- [ワークフロー作成](/trocco-api/apidocs/post-pipeline-definition)
- [ワークフロー詳細取得](/trocco-api/apidocs/get-pipeline-definition)
- [ワークフロー更新](/trocco-api/apidocs/patch-pipeline-definition)
- [ワークフロー削除](/trocco-api/apidocs/delete-pipeline-definition)


#### リソースグループAPIを追加

- [リソースグループ一覧取得](/trocco-api/apidocs/get-resource-groups)
- [リソースグループ作成](/trocco-api/apidocs/post-resource-group)
- [リソースグループ詳細取得](/trocco-api/apidocs/get-resource-group)
- [リソースグループ更新](/trocco-api/apidocs/patch-resource-group)
- [リソースグループ削除](/trocco-api/apidocs/delete-resource-group)

#### ラベルAPIを追加

- [ラベル一覧取得](/trocco-api/apidocs/get-labels)
- [ラベル作成](/trocco-api/apidocs/post-label)
- [ラベル詳細取得](/trocco-api/apidocs/get-label)
- [ラベル更新](/trocco-api/apidocs/patch-label)
- [ラベル削除](/trocco-api/apidocs/delete-label)

### 接続情報APIの対応コネクターが追加

接続情報APIの操作対象コネクタとして、Google Cloud Storageが追加されました。
今回追加対象となったAPIエンドポイントは以下のとおりです。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

## コネクタAPIアップデート

### 転送元Apple Search Ads

転送時に使用するApple Search Ads Campaign Management APIのバージョンを、v4から**v5**へアップデートしました。
本件に伴い、`CREATIVE_SETS`エンドポイントが廃止されたため、転送設定STEP1で指定するレポートレベルから`CREATIVE_SETS`を削除しました。
新バージョンについて、[Apple Search Ads Campaign Management API 5](https://developer.apple.com/documentation/apple_search_ads/apple-search-ads-campaign-management-api-5)を参照ください。

### Facebook系コネクタ

以下の接続情報またはコネクタの転送時に使用するFacebook APIのバージョンを、v18から**v21**へアップデートしました。

- [Facebook接続情報](/docs/connection-configuration-facebook-ad-insights)のOAuth認証
- [転送先 - Facebook カスタムオーディエンス(β版)](/docs/data-destination-facebook-custom-audience)
- [転送先 - Facebook コンバージョンAPI](/docs/data-destination-facebook-conversion-api)
- [転送元 - Facebookリード広告](/docs/data-source-facebook-lead-ads)
- [転送元 - Facebook Ad Insights](/docs/data-source-facebook-ad-insights)

新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version21.0)を参照ください。

### 転送元Criteo

転送時に使用するCriteo APIのバージョンを、v2024.04から**v2024.10**へアップデートしました。
新バージョンについて、[Version 2024.10 release notes](https://developers.criteo.com/marketing-solutions/changelog/version-202407-release-notes-1)を参照ください。

### 転送元Shopify

転送時に使用するShopify APIのバージョンを、2024-01から**2024-04**へアップデートしました。
新バージョンについて、[Shopify API](https://shopify.dev/docs/api/release-notes/2024-04)のドキュメントを参照ください。
