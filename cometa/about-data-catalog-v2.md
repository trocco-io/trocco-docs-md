---
articleId: d081cc22-50e6-4d32-bb6c-75b40867e78c
slug: about-data-catalog-v2
title: COMETAについて
parentCategoryId: 1f67e091-501c-45ae-8e4c-0232f5aae8f2
languageCode: ja
---
COMETAについてのヘルプページです。

:::(Info) (トライアル・ご契約のご相談)

まずは、[プロダクト紹介ページ](https://primenumber.com/cometa)を参照ください。
トライアルを希望される場合や、ご契約を希望される場合は、営業担当者またはカスタマーサクセスまでお問い合わせください。
:::

## データカタログとは

「どこになんのデータがあるか分からない」「このデータはいつ・どこで・どんな目的で作られたのだろう」といった課題は、取り扱うデータが増加するごとに顕在化し、やがてデータ分析業務上のボトルネックになっていきます。

このような課題を解決するのが[**データカタログ**](https://blog.trocco.io/glossary/data-catalog)です。
データカタログは、「データに関するデータ」である**メタデータ**を管理することで、上記で挙げたようなデータマネジメント上の課題を解決に導きます。

## COMETAの特長

COMETAは、お客様のデータ分析基盤に存在するデータから、自動的にメタデータを取得して、データカタログを生成します。
また、メタデータを踏まえた**データ検索**、取得したメタデータを踏まえた**ER図**や**リネージ**の自動生成、その場で試しにクエリ実行できる**クエリエディタ**など、データ利活用を促進するための各種機能が揃っています。

:::(Info) (ER図について)

**ER図**は、TROCCOを契約せずともご利用いただけます。
ただし、TROCCOを契約すると、ER図を生成するための[カラム参照が自動定義](/cometa/docs/automatic-metadata-fetched-v2#カラム参照の自動定義の対象となるコネクタ)されるため、かんたんにER図を閲覧できるようになります。
:::

## 対応サービス

COMETAは、以下のサービスに対応しています。
以下のサービスに蓄積されたテーブル・カラムを自動でカタログ化します。

### データベース系データストア

- Google BigQuery
- Snowflake
- Amazon Redshift

### ダッシュボード系データストア

- Tableau Cloud

:::(Warning) (サービスによる対応機能の違い)

データベース系データストアとダッシュボード系データストアでは、COMETAが対応する機能が異なります。
また、Amazon Redshiftの場合は、他データベース系データストアで利用できる機能のうち、対応していない機能があります。
詳しくは、[COMETA対応機能一覧](/cometa/docs/datacatalog-supported-functions-list-v2)を参照ください。
:::

## 各種機能

COMETAが持つ各機能について、詳しくはリンク先の各記事を参照ください。

### 自動取得・更新

- アセットの自動更新（[アセット自動取り込み機能](/cometa/docs/automatic-assets-update-v2)）
- メタデータの自動取得（[メタデータ自動取得機能](/cometa/docs/automatic-metadata-fetched-v2)）

### データ選定

- データを見つける（[アセット検索](/cometa/docs/metadata-search-function-v2)）
- データ間の関係を見る（[ER図](/cometa/docs/erd-and-join-v2#er図)）
- データの関係を定義する（[カラム参照](/cometa/docs/column-reference-v2)）

### データ理解

- データを理解する
  - [アセット情報（データベース系データストア）](/cometa/docs/table-information-v2)
  - [アセット情報（ダッシュボード系データストア）](/cometa/docs/dashboard-information)
- データの祖先をたどる（[リネージ](/cometa/docs/lineage)）
- 用語を作る・関連付ける（[用語集](/cometa/docs/glossary-and-term_v2)）

### データ集計・データチェック

- JOIN分析する（[JOIN分析](/cometa/docs/erd-and-join-v2#join分析)）
- クエリを書く（[クエリエディタ](/cometa/docs/query-editor-v2)）
- クエリを管理する（[クエリ集](/cometa/docs/query-collection)）

### メタデータのインポート・エクスポート

- メタデータをインポートする（[メタデータインポート](/cometa/docs/metadata-import-v2)）
- メタデータをエクスポートする（[メタデータエクスポート](/cometa/docs/metadata-export-v2)）

### 補足情報

- COMETAに関する各種用語の定義（[COMETAに関する各種用語の定義](/cometa/docs/catalog-glossary-v2)）
