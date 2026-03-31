---
articleId: fe32f578-2f7c-4104-a3c1-fcefdc6031fc
slug: connection-configuration-bigquery
title: 接続情報 - Google BigQuery
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Google BigQueryの接続情報を作成する手順を説明するDocsです。

TROCCOでGoogle BigQueryの接続情報を作成する方法は、以下の3つの方式があります。

- Googleアカウント (OAuth)
- サービスアカウント (JSONキー)
- Workload Identity Federation (WIF)

## Googleアカウント (OAuth)を利用する場合

TROCCOの接続情報作成画面で、認証方式として「OAuth認証」を選択します。画面の指示に従いGoogleアカウントでの認証を行うことで、接続情報を作成できます。

## サービスアカウント (JSONキー)を利用する場合

1. [Google CloudのJSONキーを取得する](/docs/connection-configuration-google-cloud-json-key)を参照して、JSONキーを取得します。サービスアカウントには、後述する[付与が必要なロール](/docs/connection-configuration-bigquery#付与が必要なロール)を参考にロールを付与してください。
2. 取得したJSONキーの内容をすべてコピーし、TROCCOの接続情報作成画面のJSONキーフォームにペーストします。

## Workload Identity Federation (WIF)を利用する場合

AWS環境からGoogle Cloudに接続する場合、Workload Identity Federationを使用することで、AWS IAMの一時的な認証情報を利用してGoogle Cloudへアクセスできます。長期的な認証情報（JSON Key）をTROCCO上に保存する必要がないため、セキュリティが向上します。

1. 接続情報の作成時に自動生成されている**外部ID**を取得しておきます。
2. [Google CloudのWorkload Identity Federationを設定する](/docs/connection-configuration-google-cloud-workload-identity-federation)を参照して、構成ファイルをダウンロードします。
3. ダウンロードしたクライアントライブラリ構成ファイル（JSON形式）の内容をすべてコピーし、TROCCOの接続情報作成画面のWIF構成ファイルフォームにペーストします。

:::(Warning) (Wordload Identity Federation認証が利用できない機能)

以下の機能では、Workload Identity Federation認証はご利用いただけません。これらの機能を使用する場合は、OAuth認証またはサービスアカウント認証をご選択ください。

- dbt連携
- CDCデータ転送
- Self-Hosted Runner
:::

## 付与が必要なロール

Googleアカウント (OAuth)、サービスアカウント (JSONキー)、Workload Identity Federationのいずれの認証方式を利用する場合も、以下のロールを付与する必要があります。

- 転送元として利用する場合
  - BigQuery > BigQueryデータ編集者
  - BigQuery > BigQueryジョブユーザー
  - Cloud Storage > ストレージ管理者
- 転送先・データマート（データ転送モード）として利用する場合
  - BigQuery > BigQueryデータ編集者
  - BigQuery > BigQueryジョブユーザー
