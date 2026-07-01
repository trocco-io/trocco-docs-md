---
articleId: 4a5c1d73-174f-4801-9443-d88ba7bccefc
slug: dashboard-information
title: ダッシュボードを理解する（アセット情報）
parentCategoryId: 04aad014-aa6a-436a-899a-7ed4e253009c
languageCode: ja
---
## 概要

サイドバーの**ダッシュボード**をクリックすると、[ダッシュボード系データストア](/cometa/docs/about-data-catalog-v2#ダッシュボード系データストア)のワークブック一覧が表示されます。
なお本ページでは、**Tableau**を前提に説明します。

ワークブック一覧より、任意のTableauワークブックをクリックすると、Tableauワークブック詳細画面が表示されます。
ワークブック詳細画面では、以下の2つのタブで画面を切り替えることができます。
- **[ワークブック情報タブ](/cometa/docs/dashboard-information#ワークブック情報タブ)**
  - Tableauワークブックに関するメタデータや、関連するTableauのリソースを確認できます。
- **[リネージタブ](/cometa/docs/dashboard-information#リネージタブ)**
  - Tableauのデータソース、ワークブック、ダッシュボードの関係を視覚的に確認できます。

## ワークブック情報タブ

本画面では、主に以下を確認できます。

- Tableauワークブックに関するメタデータ
- Tableauワークブックに関連するTableauのリソース
  - Tableauデータソース
  - Tableauダッシュボード
  - Tableauワークシート

関連するTableauのリソースをクリックすると、該当リソースの詳細画面に移動します。
また、それぞれのリソースに紐づいている**Tableauで確認**ボタンをクリックすると、Tableauが開かれ、実際のデータを確認できます。

### 対応するTableauリソース

COMETAは、以下のリソースのメタデータおよびリソース間の関連情報を確認できます。

- Tableauワークブック
- Tableauダッシュボード
- Tableauデータソース
- Tableauフィールド

それぞれのリソースで閲覧できるメタデータについては、[Tableauに関するメタデータ](/cometa/docs/datacatalog-supported-functions-list-v2#tableauに関するメタデータ)を参照ください。

## リネージタブ

ワークブックに関連するデータの**リネージ**を表示します。
Tableauダッシュボードがどのようなデータをもとに作成されているか、その一連の経路をグラフで確認できます。

リネージ機能の詳細については、[リネージ機能](/cometa/docs/lineage)を参照してください。

#### TROCCO転送元のサービス

* TROCCOでTableauの元データにデータを転送している

:::(Info) ()

`⊕`をクリックした際に、アップストリーム・ダウンストリームとなるリソースがない場合は何も表示されません。
:::
