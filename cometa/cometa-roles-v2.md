---
articleId: d086c905-2238-49b3-a109-0b322e16b95a
slug: cometa-roles-v2
title: 各COMETAロールでできること
parentCategoryId: 24d73dc1-0660-492a-8105-c4da49b185a1
languageCode: ja
---
## 概要

COMETA独自の権限体系に関するヘルプページです。

前提として、COMETAユーザーの操作は、下記の2種類の権限体系によって制御されます。

- TROCCOと共通する権限系
- COMETA独自の権限系
  - ロール
  - メタデータアクセスコントロール

本ページでは、COMETA独自の権限体系であるロールについて説明します。

:::(Info) (TROCCOと共通する権限体系およびユーザーの権限の変更方法)

[ユーザーの設定手順](/docs/user-settings#ユーザーの設定手順)を参照ください。
:::

:::(Info) (メタデータアクセスコントロールについて)

COMETAの各アセットへのアクセス可否は、メタデータアクセスコントロールによって制御されます。
詳しくは、[メタデータアクセスコントロール](/cometa/docs/metadata-access-control-v2)を参照ください。

:::

## COMETA独自の権限

**COMETA権限**には、以下5つのロールがあり、それぞれ独立する形でユーザーの操作を許可します。

- データストア管理者
- メタデータ編集者
- 実データ閲覧者
- 用語集管理者
- 用語集閲覧者

![cometa-roles-v2-2024-08-29-23-24-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/cometa-roles-v2-2024-08-29-23-24-0.png){height="" width="50%"}

以下で、各ロールが権限を持つ操作について説明します。

### データストア管理者

[データストア連携管理](/cometa/docs/datastore-integrations-v2)に関する、各種操作権限を持ちます。
具体的には、以下の操作権限を持ちます。

- データストア連携管理
  - [データストアの新規連携](/cometa/docs/datastore-integrations-v2#データストアの新規連携)
  - [連携済みデータストアの編集・連携解除](/cometa/docs/datastore-integrations-v2#連携済みデータストアの編集・連携解除)
    - データストア名の変更
    - データストアの連携解除
    - [アセット取り込み機能](/cometa/docs/automatic-assets-update-v2)でのアセット手動取り込み
    - [アセット取り込み設定](/cometa/docs/fetching-asset-ingestion-settings)の編集
- [Microsoft Entra ID 外部インテグレーション設定](/cometa/docs/external-integration-settings-v2)

### メタデータ編集者

[メタデータ](/cometa/docs/catalog-glossary-v2#メタデータ)の編集権限を持ちます。
具体的には、以下の操作権限を持ちます。

- アセット情報
  - [基本メタデータ](/cometa/docs/table-information-v2#1-基本メタデータ)の編集
  - [ユーザー定義メタデータ](/cometa/docs/table-information-v2#4-ユーザー定義メタデータ)の編集
- カラム参照
  - [カラム参照の追加](/cometa/docs/table-information-v2#カラム情報)
  - [カラム参照の削除](/cometa/docs/column-reference-v2#カラム参照の削除)
- メタデータ管理
  - [ユーザー定義メタデータ用テンプレート](/cometa/docs/user-defined-metadata-templates-v2)の作成・編集
  - [メタデータインポート](/cometa/docs/metadata-import-v2)
  - [メタデータエクスポート](/cometa/docs/metadata-export-v2)
  - [メタデータ自動生成機能](/cometa/docs/ai-metadata-generation)
- クエリ集
  - [クエリの作成・編集・削除](/cometa/docs/query-collection)

### 実データ閲覧者

[実データ](/cometa/docs/catalog-glossary-v2#実データ)の閲覧権限を持ちます。
実データ閲覧者は、クエリエディタ上でクエリを実行する権限も持ちます。
具体的には、以下の操作権限を持ちます。

- アセット情報
  - [要約統計情報・データプレビュー](/cometa/docs/table-information-v2#カラム情報)の閲覧
  - [プレビュー](/cometa/docs/table-information-v2#プレビュータブ)の閲覧
- ER図
  - [JOIN分析](/cometa/docs/erd-and-join-v2#join分析)の表示
- データストア連携管理
  - [連携済みデータストアの認証](/cometa/docs/datastore-integrations-v2#連携済みデータストアの認証)
- [クエリエディタ](/cometa/docs/query-editor-v2)
  - クエリの実行
  - 保存されたクエリの閲覧

:::(Warning) (実データの閲覧について)

**実データ閲覧者**であっても、自らが認証を受けていないデータストア配下のアセットの実データは閲覧できません。
詳しくは、[実データの閲覧](/cometa/docs/catalog-glossary-v2#実データの閲覧)を参照ください。
:::

### 用語集管理者

[用語集アクセスコントロール](/cometa/docs/glossary-access-control-v2)の設定にかかわらず、アカウント内のすべての用語集・用語に対する操作権限（作成・編集・閲覧・削除、アクセス設定の変更および下書き設定の変更）を持ちます。

### 用語集閲覧者

[用語集アクセスコントロール](/cometa/docs/glossary-access-control-v2)の設定にかかわらず、アカウント内のすべての用語集・用語の閲覧権限を持ちます。
編集や削除などの操作権限は持ちません。

:::(Info) (用語集アクセスコントロールについて)

用語集・用語に対するチーム単位でのアクセス権限管理については、[用語集アクセスコントロール](/cometa/docs/glossary-access-control-v2)を参照ください。
:::

### ロールなしユーザー

上記いずれのロールを持たないユーザー（つまりアカウント内の全ユーザー）であっても、以下の操作権限を持ちます。

- [アセット情報](/cometa/docs/table-information-v2)における、各アセットのメタデータの閲覧
- [データストア詳細画面](/cometa/docs/datastore-integrations-v2#データストア詳細画面)の閲覧
  - [アセット取り込み設定](/cometa/docs/fetching-asset-ingestion-settings)の閲覧
- [対話型AIアシスト機能](/cometa/docs/ai-assist)
- [クエリ集](/cometa/docs/query-collection)の閲覧

:::(Info) (メタデータの閲覧について)

個別のユーザーが閲覧可能なアセットは、[メタデータアクセスコントロール機能](/cometa/docs/metadata-access-control-v2)によって制御されます。
データストアアクセス管理者が設定したアクセスルールに基づいて、ユーザーが閲覧できる[アセット](/cometa/docs/catalog-glossary-v2#アセット)およびメタデータが決定されます。
アクセスルールが設定されていないデータストアの場合、アセットを閲覧できるのはデータストアアクセス管理者とアカウント特権管理者のみです。
:::
