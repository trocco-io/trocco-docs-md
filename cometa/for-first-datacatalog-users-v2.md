---
articleId: 0a5a8a73-14fb-4f16-a221-a777bbfdec43
slug: for-first-datacatalog-users-v2
title: 利用開始手順
parentCategoryId: 1f67e091-501c-45ae-8e4c-0232f5aae8f2
languageCode: ja
---
はじめてCOMETAをお使いいただく際に必要な手順をまとめています。

## 利用の流れ

:::(Info) (TROCCOと合わせてご利用の場合)

COMETAを利用するためには、事前にユーザー権限を設定する必要があります。
詳しくは、[ユーザーの権限設定](/docs/user-settings)を参照ください。
:::

### アカウント内ではじめてCOMETAを利用する場合

まずはCOMETAとデータストアを連携します。お好きなサービスを選択してください。
以降の手順については、お使いのサービスごとに以下を参照ください。

- [データストアの連携・認証 - BigQuery](/cometa/docs/datastore-authentication-bigquery)
- [データストアの連携・認証 - Snowflake](/cometa/docs/datastore-authentication-snowflake)
- [データストアの連携・認証 - Amazon Redshift](/cometa/docs/datastore-authentication-redshift)
- [データストアの連携 - Tableau](/cometa/docs/datastore-authentication-tableau)

![for-first-datacatalog-users-v2-2024-08-29-11-3-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/for-first-datacatalog-users-v2-2024-08-29-11-3-0.png){height="" width="50%"}

:::(Warning) (アセットが取り込まれるタイミング)

データストア連携が行われ、かつ[アセット取り込み設定](/cometa/docs/fetching-asset-ingestion-settings)の設定が完了したタイミングで、アセットの取り込み処理が実行されます。
アセットの取り込み処理が完了し、[アセット](/cometa/docs/catalog-glossary-v2#アセット)の一覧が更新されるまで、しばらくお待ちください。
:::

### すでにデータストアが連携されている場合

この場合、すぐにお使いいただけます。
ただし、[データベース系データストア](/cometa/docs/about-data-catalog-v2#データベース系データストア)の各データストアの[実データ](/cometa/docs/catalog-glossary-v2#実データ)を閲覧したい場合は、各データストアに対して認証を受ける必要があります。
左サイドバーの**管理・連携** > **データストア連携管理**より、[連携済みデータストアの認証](/cometa/docs/datastore-integrations-v2#連携済みデータストアの認証)を受けてください。
