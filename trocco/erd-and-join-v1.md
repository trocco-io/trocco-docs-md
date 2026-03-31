---
articleId: 76c287c5-5324-4b41-a8b6-720520664be8
slug: erd-and-join-v1
title: データ間の関係を見る・分析する（ER図・JOIN分析）
parentCategoryId: 44c8b731-fa9a-4cba-a8de-9fcb56bbf9c2
languageCode: ja
---
## 概要

TROCCOのデータカタログでは、指定したテーブル間の**ER図**を確認できます。
また、2つのテーブルの関係性を視覚的に確認できるJOIN分析**にも対応しています。

:::(Warning) (JOIN分析が可能なテーブルの条件)

JOIN分析は、[カラム参照](/docs/column-reference-v1)が定義されたテーブル間のみ、実行できます。
カラム参照の定義方法については、[カラム参照の手動定義](/docs/table-information-v1#カラム参照の手動定義)を参照ください。
:::

:::(Info) (カラム参照の自動定義)

TROCCOの特定の転送元コネクタを利用してデータストアに転送されたテーブルには、自動でカラム参照が定義されます。
詳しくは、[カラム参照の自動定義の対象となるコネクタ](/docs/automatic-metadata-fetched-v1#カラム参照の自動定義の対象となるコネクタ)を参照ください。
:::

## ER図

**ER図**タブをクリックし、**表示テーブルをフィルタ**からテーブルを選択することで表示されます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/erd-and-join-v1-2024-08-29-8-19-0.png){height="" width="50%"}

テーブルをマウスオーバーすると、関係するテーブルとの線がハイライトされます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/erd-and-join-v1-2024-08-29-8-19-1.png){height="" width="50%"}

### JOIN分析の表示方法

テーブル間を結ぶ線の中点をマウスオーバーすると、JOINキーが確認できます。
そのまま中点をクリックすると、**JOIN分析**が表示されます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/erd-and-join-v1-2024-08-29-8-19-2.png){height="" width="50%"}

## JOIN分析

JOIN分析では、2つのテーブルのJOINキーやユニーク数、Nullの個数といった結合時に確認したい情報を確認できます。
また、2つのテーブルを結合するときに生成される行数を、ベン図によって視覚的に確認できます。
**JOIN分析を表示する**をクリックすると、分析が行われます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/erd-and-join-v1-2024-08-29-8-19-3.png){height="" width="50%"}

**JOINプレビュー**で任意のテーブル結合のタイプを選ぶと、結合されたテーブルのプレビュー確認もできます。
テーブル結合用のクエリも表示されます。
クエリは下記赤枠内のアイコンをクリックすることでコピーもできます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/erd-and-join-v1-2024-08-29-8-19-4.png){height="" width="50%"}
