---
articleId: 7a3f807a-63ff-4a57-b501-520b7e7816f0
slug: erd-and-join-v2
title: データ間の関係を見る・分析する（ER図・JOIN分析）
parentCategoryId: e14bccef-b162-4c16-adbd-b3bc20a93a72
languageCode: ja
---
## 概要

COMETAでは、指定したテーブル間の**ER図**を確認できます。
また、2つのテーブルの関係性を視覚的に確認できるJOIN分析**にも対応しています。

:::(Warning) (JOIN分析が可能なテーブルの条件)

JOIN分析は、[カラム参照](/cometa/docs/column-reference-v2)が定義されたテーブル間のみ、実行できます。
カラム参照は、[カラム情報タブ](/cometa/docs/table-information-v2#カラム情報)から定義できます。
なお、カラム参照は、異なるデータストア配下のテーブル間で定義できません。
:::

:::(Info) (TROCCOと合わせてご利用の場合)

TROCCOの特定の転送元コネクタを利用してデータストアに転送されたテーブルには、自動でカラム参照が定義されます。
詳しくは、[カラム参照の自動定義の対象となるコネクタ](/cometa/docs/automatic-metadata-fetched-v2#カラム参照の自動定義の対象となるコネクタ)を参照ください。
:::

## ER図

**ER図**タブをクリックし、データストアを選択します。
その状態で、**表示テーブルをフィルタ**からテーブルを選択することで表示されます。

テーブルをマウスオーバーすると、関係するテーブルとの線がハイライトされます。

![erd-and-join-v2-2024-08-29-11-20-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/erd-and-join-v2-2024-08-29-11-20-0.png){height="" width="50%"}

### JOIN分析の表示方法

:::(Warning) (必要な権限)

JOIN分析の表示には、以下の権限が必要です。

- [メタデータアクセスコントロール](/cometa/docs/metadata-access-control-v2)による対象アセットへのアクセス許可
- [**実データ閲覧者**](/cometa/docs/cometa-roles-v2#実データ閲覧者)ロール

なお、実データの閲覧にはロール以外の条件が存在します。
詳しくは、[実データの閲覧](/cometa/docs/catalog-glossary-v2#実データの閲覧)を参照ください。
:::

テーブル間を結ぶ線の中点をマウスオーバーすると、JOINキーが確認できます。
そのまま中点をクリックすると、**JOIN分析**が表示されます。

![erd-and-join-v2-2024-08-29-11-20-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/erd-and-join-v2-2024-08-29-11-20-1.png){height="" width="50%"}

## JOIN分析

JOIN分析では、2つのテーブルのJOINキーやユニーク数、Nullの個数といった結合時に確認したい情報を確認できます。
また、2つのテーブルを結合するときに生成される行数を、ベン図によって視覚的に確認できます。
**JOIN分析を表示する**をクリックすると、分析が行われます。

![erd-and-join-v2-2024-08-29-11-20-2](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/erd-and-join-v2-2024-08-29-11-20-2.png){height="" width="50%"}

**JOINプレビュー**で任意のテーブル結合のタイプを選ぶと、結合されたテーブルのプレビューを確認できます。
テーブル結合用のクエリも表示されます。

![erd-and-join-v2-2024-08-29-11-20-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/erd-and-join-v2-2024-08-29-11-20-3.png){height="" width="50%"}

