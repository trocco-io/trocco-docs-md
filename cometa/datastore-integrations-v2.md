---
articleId: cf2b4e3d-cebe-4cc8-b5c0-3a82a344ef49
slug: datastore-integrations-v2
title: データストア連携管理
parentCategoryId: f562d32d-a51d-4160-8d59-114201e44de4
languageCode: ja
---
## 概要

データストア連携管理は、左サイドバーの**管理・連携**>**データストア連携管理**から表示できます。

データストア連携管理では、アカウント内で連携されたデータストアの一覧を確認できます。
また、データストアの新規連携、および連携済みデータストアに対する認証を受けることができます。

:::(Warning) (データストアコネクションに対応したデータストアについて)

本ページの認証に関する説明は、従来の接続方式に基づいた内容です。
[データストアコネクション](/cometa/docs/datastore-connection)に対応したデータストア（現在はSnowflake・BigQuery）では、接続の管理方法が異なります。
対応データストアの設定手順は、[データストアコネクション](/cometa/docs/datastore-connection)を参照ください。
:::

:::(Info) (ダッシュボード系データストアの場合)

[ダッシュボード系データストア](/cometa/docs/about-data-catalog-v2#ダッシュボード系データストア)には、以下の設定はありません。

- [アセット取り込み設定](/cometa/docs/fetching-asset-ingestion-settings)
- [連携済みデータストアの認証](/cometa/docs/datastore-integrations-v2#連携済みデータストアの認証)
- [データストアの認証解除](/cometa/docs/datastore-integrations-v2#データストアの認証解除)
:::

![datastore-integrations-v2-2024-08-29-19-40-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/datastore-integrations-v2-2024-08-29-19-40-1.png){height="" width="50%"}

## データストアの新規連携

:::(Warning) (必要なロール)

データストアの新規連携には、[**データストア管理者**](/cometa/docs/cometa-roles-v2#データストア管理者)ロールが必要です。
:::

データストア連携管理画面で**連携を追加**をクリックすると、データストアの新規連携画面へと移動します。

以降の手順については、お使いのサービスごとに以下を参照ください。

- [データストアの連携・認証 - BigQuery](/cometa/docs/datastore-authentication-bigquery)
- [データストアの連携・認証 - Snowflake](/cometa/docs/datastore-authentication-snowflake)
- [データストアの連携 - Tableau](/cometa/docs/datastore-authentication-tableau)

上記手順が完了すると、[アセットが自動で取り込まれます](/cometa/docs/automatic-assets-update-v2)。

## データストア詳細画面

データストア連携管理画面で任意のデータストアをクリックすると、該当データストアの詳細画面へと移動します。

![datastore-integrations-v2-2024-12-26-19-14-33](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/datastore-integrations-v2-2024-12-26-19-14-33.png){height="" width="50%"}

### 連携済みデータストアの編集・連携解除

:::(Warning) (必要なロール)

連携済みデータストアの編集・連携解除には、[**データストア管理者**](/cometa/docs/cometa-roles-v2#データストア管理者)ロールが必要です。
:::

鉛筆アイコンをクリックすると、データストア名を変更できます。
また、[アセット取り込み設定](/cometa/docs/fetching-asset-ingestion-settings)では、[サービス](/cometa/docs/about-data-catalog-v2#対応サービス)側から取得するアセットを絞り込むことができます。

三点リーダーをクリックすると、データストアの連携解除が表示されます。
なお、**データストアの連携を解除すると、以下はすべて削除されます**。ご注意ください。
- 該当のデータストア配下のアセット、およびアセットに紐づくメタデータ
- データストアに保存されたクエリ

![datastore-integrations-v2-2024-08-29-19-40-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/datastore-integrations-v2-2024-08-29-19-40-3.png){height="" width="50%"}

### 連携済みデータストアの認証

:::(Warning) (必要なロール)

連携済みデータストアの認証には、[**実データ閲覧者**](/cometa/docs/cometa-roles-v2#実データ閲覧者)ロールが必要です。
:::

**認証**をクリックすると、認証画面へと移動します。
以降の手順については、[データストアの新規連携](/cometa/docs/datastore-integrations-v2#データストアの新規連携)を参照ください。

データストアに対する認証を受けることで、認証情報の権限に基づく形で[実データ](/cometa/docs/catalog-glossary-v2#実データ)が閲覧できるようになります。
詳しくは、[実データの閲覧](/cometa/docs/catalog-glossary-v2#実データの閲覧)を参照ください。

なお、自身が各データストアに対して認証されているかどうかは、データストア連携管理画面の**お客様の認証状況**部分にて確認できます。
お客様の認証状況が**未認証**となっているデータストアは、自身がまだ認証されていないデータストアとなります。

![datastore-integrations-v2-2024-08-29-19-40-4](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/datastore-integrations-v2-2024-08-29-19-40-4.png){height="" width="50%"}

### データストアの認証解除

認証された状態で**認証解除**をクリックすると、認証が解除されます。

### 認証・認証解除に関する例外的仕様

#### アセット取得ユーザーの認証解除

:::(Warning)

アセット取得ユーザーが認証を解除するには、[**データストア管理者**](/cometa/docs/cometa-roles-v2#データストア管理者)ロールが必要です。
なお、アセット取得ユーザーが認証を解除すると、[サービス](/cometa/docs/about-data-catalog-v2#対応サービス)側の変更が[アセット](/cometa/docs/catalog-glossary-v2#アセット)の一覧に反映されなくなります。ご注意ください。
:::

#### アセット取得ユーザーがいないデータストアの認証

:::(Warning)

アセット取得ユーザーがいないデータストアに対する認証には、[**データストア管理者**](/cometa/docs/cometa-roles-v2#データストア管理者)ロールが必要です。
なお、前回のアセット取得ユーザーと異なる認証情報を用いて再認証された場合、**データストア配下のアセット一覧の構成が変わる（サービス側から取得されるアセットが変わる）可能性があります**。ご注意ください。
:::

### ジョブ実行履歴の確認と再実行

アセット取り込みジョブとは、[アセット取り込み機能](/cometa/docs/automatic-assets-update-v2)・[メタデータ自動取得機能](/cometa/docs/automatic-metadata-fetched-v2)の2つの処理を実行するジョブのことです。
ここでは、ジョブの実行履歴を直近5件まで確認できます。

ジョブが失敗している場合、ジョブをクリックすることでエラーログを確認できます。
エラーログを確認し、対処してください。
最新のジョブが失敗している場合は、**ジョブを再実行**が表示されます。
エラー対処後、**ジョブを再実行**をクリックしてください。
