---
articleId: 92ba8996-0736-4e67-bb04-6b8f2dd992a5
slug: automatic-assets-update-v2
title: アセット取り込み機能
parentCategoryId: f562d32d-a51d-4160-8d59-114201e44de4
languageCode: ja
---
## 概要

COMETAは、[アセット](/cometa/docs/catalog-glossary-v2#アセット)の取り込み機能をサポートしています。
アセットの取り込みは、日次で自動実行されるほか、手動でも実行できます。
本ページでは、アセット取り込み機能の仕様について説明します。

- [データベース系データストアの場合](/cometa/docs/automatic-assets-update-v2#データベース系データストアの場合)
- [ダッシュボード系データストアの場合](/cometa/docs/automatic-assets-update-v2#ダッシュボード系データストアの場合)

## データベース系データストアの場合

[データベース系データストア](/cometa/docs/about-data-catalog-v2#データベース系データストア)の場合、[アセット取得ユーザー](/cometa/docs/catalog-glossary-v2#アセット取得ユーザー)の認証情報を用いて[アセット](/cometa/docs/catalog-glossary-v2#アセット)を取得します。
なお、アセットを取り込む際に、[データストアに関するメタデータ](/cometa/docs/datacatalog-supported-functions-list-v2#データストアに関するメタデータの詳細)も合わせて取得されます。

また、以下のアセットは取得されないことにご留意ください。

- [アセット取得ユーザー](/cometa/docs/catalog-glossary-v2#アセット取得ユーザー)のアカウントが、[連携したサービス](/cometa/docs/about-data-catalog-v2#対応サービス)側で権限を持たないアセット
- [アセット取り込み設定](/cometa/docs/fetching-asset-ingestion-settings)にマッチしたアセット

### アセットが取り込まれるタイミング

データストア連携が行われ、かつ[アセット取り込み設定](/cometa/docs/fetching-asset-ingestion-settings)の設定が完了したタイミングで、アセットの取り込み処理が初回実行されます。
初回実行以降は、アセットの取り込み処理が**日次**で実行され、[アセット](/cometa/docs/catalog-glossary-v2#アセット)も日次で更新されます。

また、[データストア管理者](/cometa/docs/cometa-roles-v2#データストア管理者)は、アセットの取り込みを手動で実行できます。
実行できる回数は1日3回までです。

:::(Info) (アセット手動取り込みに未対応のデータストア)

カスタムデータベース連携によるデータストアは、アセットの手動取り込みに対応していません。

:::

### アセットが取り込まれないケース

データストアに[アセット取得ユーザー](/cometa/docs/catalog-glossary-v2#アセット取得ユーザー)が存在しない場合、アセットの取り込みは行われません。
[アセット取得ユーザーの認証解除](/cometa/docs/datastore-integrations-v2#アセット取得ユーザーの認証解除)が行われ、その後認証が行われなかった場合、アセット取得ユーザーが存在しない状態になります。

### 日付別テーブルの取り込みについて

:::(Error) ()

本仕様は、BigQueryのデータストアを選択している場合にのみ適用されます。
:::

テーブル名が`<PREFIX>YYYYMMDD`（`<PREFIX>`部分が共通で末尾部分のみ**8桁の日付形式**）形式の日付別テーブルが、同一のデータセットに格納されている場合、**最新の日付のテーブルのみ**をアセットとして取り込みます。
この際、COMETAに先に取り込まれていたテーブルに紐づく以下のメタデータは、後から取り込まれる新しい日付のテーブルに引き継がれます。

- 基本メタデータ（テーブル・カラム）
- ユーザー定義メタデータ（テーブル・カラム）
- お気に入り情報（テーブル）

:::(Info) (日付別テーブルの取り込みの例)

| BigQuery上に存在するテーブル | COMETAに取り込まれるテーブル | 備考 |
| -- | -- | -- |
| `sample_20240701`<br>`sample_20240702` | `sample_20240702` | 本仕様が適用される一般的な例です。 |
| `sample`<br>`sample20240701`<br>`sample20240702` | `sample`<br>`sample20240702` |`<PREFIX>`が共通でも、末尾がない場合は、本仕様の対象外となります。 |
| `sample_2024_07_01`<br>`sample_2024_07_02` | `sample_2024_07_01`<br>`sample_2024_07_02` | `<PREFIX>`が共通でも、末尾が`YYYYMMDD`でない場合は、本仕様の対象外となります。 |
| `20240701`<br>`20240702` | `20240701`<br>`20240702` | `<PREFIX>`がない場合は、本仕様の対象外となります。
:::

## ダッシュボード系データストアの場合

以下では、**Tableau**を前提に説明します。

[データストア連携管理](/cometa/docs/datastore-authentication-tableau)にて設定した認証情報を用いて、自動で[アセット](/cometa/docs/catalog-glossary-v2#アセット)を取得します。
取得されたアセットは、[ダッシュボード](/cometa/docs/dashboard-information)から確認できます。
なお、アセットを取り込む際に、[Tableauに関するメタデータ](/cometa/docs/datacatalog-supported-functions-list-v2#tableauに関するメタデータ)も合わせて取得されます。

### アセットが取り込まれるタイミング

データストア連携が行われたタイミングで、アセットの取り込み処理が初回実行されます。
初回実行以降は、アセットの取り込み処理が**日次**で実行され、[ダッシュボード](/cometa/docs/dashboard-information)も日次で更新されます。
