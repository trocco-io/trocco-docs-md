---
articleId: a14ae8ae-3490-4b04-8fe5-10bcaef596a5
slug: lineage
title: リネージ機能
parentCategoryId: c2bb7910-699f-4b37-a13f-061b1f41d500
languageCode: ja
---

## 概要

**リネージ**とは、テーブルやカラムのデータの系譜（データがどのように生成されているか）を可視化する機能です。
リネージを確認することで、データの流れや依存関係を把握でき、データ品質の管理やトラブルシューティングに役立ちます。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/lineage-2026-01-13-09-04-09.png)

リネージは、[データベース](/cometa/docs/table-information-v2)画面または[ダッシュボード](/cometa/docs/dashboard-information)画面のリネージタブで確認できます。
画面の操作方法については、[リネージタブ](/cometa/docs/table-information-v2#リネージタブ)を参照してください。

## リネージの種類

COMETAでは、データの流れる範囲によって、以下の2つに分類されます。

- **同一データストア内のリネージ**：同一の[データストア](/cometa/docs/catalog-glossary-v2#データストア)内でのデータの依存関係
- **異なるデータストア間のリネージ**：複数の[データストア](/cometa/docs/catalog-glossary-v2#データストア)をまたいだエンドツーエンドのデータの依存関係

## 同一データストア内のリネージ

同一のデータストア内でのデータの依存関係を表示します。

ビューリネージ、dbtリネージ、TROCCOデータマートリネージでは、テーブルレベルのリネージに加えて、カラムレベルのリネージもサポートされています。

:::(Warning) (注意事項)

[カスタムデータベース](/cometa/docs/datastore-authentication-custom-database)では、同一データストア内のリネージは利用できません。

:::

### ビューリネージ

ビューやマテリアライズドビューのDDLから、参照元のテーブル・カラムを自動解析してリネージを表示します。

:::(Warning) (Snowflakeの制約)

ビューリネージはビュー定義を`INFORMATION_SCHEMA.VIEWS`から取得して生成します。
このビュー定義（`VIEW_DEFINITION`）は、対象のビューのオーナー（`OWNERSHIP`権限を持つロール）にのみ表示されます。
アセット取得に使用するロールが対象のビューのオーナーでない場合、ビュー定義を取得できず、リネージは表示されません。
この場合、対象のビューのオーナーロールを継承するか、ビューのオーナーを変更するなどして、権限を付与してください。

また、Snowflakeでは、マテリアライズドビューのリネージは表示できません。

:::

### dbtリネージ

dbtメタデータ連携より、dbtモデルの依存関係をリネージとして表示します。

### TROCCOデータマートリネージ

:::(Info) (TROCCOと合わせてご利用の場合)

本機能は、TROCCOと合わせてご利用の場合にのみ利用できます。
:::

TROCCOのデータマート定義のクエリから、参照元のテーブル・カラムを自動解析してリネージを表示します。

:::(Warning) (制限事項)

* 自由記述モードのデータマートはリネージを表示できません。
* カスタム変数のデータ型が「文字列」の場合のみ、出力先データセット名・出力先テーブル名・クエリ内のカスタム変数の展開がサポートされています。

:::

### Tableauリネージ

Tableauデータストア内のTableauデータソース、ワークブック、ダッシュボード間のリネージを表示します。

:::(Warning) (注意事項)

カラム（フィールド）レベルのリネージは表示できません。

:::

## 異なるデータストア間のリネージ

複数のデータストアをまたいだリネージを表示します。

:::(Warning) (注意事項)

異なるデータソース間のリネージでは、カラムレベルのリネージは表示できません。

:::

### TROCCOの転送設定によるリネージ

:::(Info) (TROCCOと合わせてご利用の場合)

本機能は、TROCCOと合わせてご利用の場合にのみ利用できます。
:::

TROCCOの転送設定で関連づけられたテーブル間のリネージを表示します。

転送リネージには以下の2つのパターンがあります。

#### パターン1: 任意の転送元サービス → COMETA管理テーブル

任意のデータソースからCOMETAで管理されているテーブルへの転送に対応します。

**転送先として対応しているデータストア**

- BigQuery
- Snowflake
- Redshift
- [カスタムデータベース](/cometa/docs/datastore-authentication-custom-database)（「その他」を除く）

**表示されるリネージ**

- テーブルレベルのみ：転送設定（ジョブ定義） → 転送先テーブル
- 例：Salesforce転送設定 → BigQueryテーブル、広告データ転送設定 → Snowflakeテーブル

#### パターン2: COMETA管理テーブル → COMETA管理テーブル

COMETA上で管理されているテーブル間の転送に対応します。

:::(Warning) (差分転送モードのみ対応)

このパターンは、TROCCOで「差分転送」モードが指定された転送設定のみが対象です。
「クエリを使用して転送」モードでは、転送元テーブルと転送先テーブル間のリネージは表示されません。
:::

**転送元として対応しているデータストア**

- MySQL（[カスタムデータベース](/cometa/docs/datastore-authentication-custom-database)）
- PostgreSQL（[カスタムデータベース](/cometa/docs/datastore-authentication-custom-database)）
- SQL Server（[カスタムデータベース](/cometa/docs/datastore-authentication-custom-database)）

**転送先として対応しているデータストア**

- BigQuery
- Snowflake
- Redshift
- [カスタムデータベース](/cometa/docs/datastore-authentication-custom-database)（「その他」を除く）

**表示されるリネージ**

- テーブルレベルのみ：転送元テーブル → 転送先テーブル
- 例：MySQLテーブル → BigQueryテーブル、PostgreSQLテーブル → Snowflakeテーブル

### Tableauリネージ

BigQuery・Snowflakeのテーブルと、それを参照するTableauデータソースとの関係を表示します。

:::(Warning) (カスタムSQLでDWHを参照している場合)

Tableauから[カスタムSQL](https://help.tableau.com/current/pro/desktop/ja-jp/customsql.htm)でDWHを参照している場合、リネージは表示されません。

:::

**対応データストア**

- BigQuery → Tableau
- Snowflake → Tableau

**リネージの生成条件**

以下の1〜3の全てに当てはまる場合、リネージ表示が可能です。

1. COMETAにTableauデータストア連携を設定している
2. COMETA上で管理しているBigQuery・SnowflakeのテーブルをTableauが参照している
3. 以下のいずれかの条件を満たし、Tableauのメタデータを取得できる状態にある
  - Tableau Data Managementの機能が利用できるプランやライセンスを契約している
  - (Tableau Data Managementライセンスを保持していない場合) サイト管理者ロールのアカウントで発行したアクセストークンをデータストア連携に使用している
  - (Tableau Data Managementライセンスを保持していない、かつ、サイト管理者以外のアクセストークンを連携に使用している場合) Tableauの「設定 > 全般 > データベースおよびテーブルに関するメタデータへの自動アクセス」が有効になっている

**表示されるリネージ**

- テーブルレベルのみ：テーブル(BigQuery/Snowflake) → Tableauデータソース

## リネージの更新タイミング

リネージ情報は、アセット取り込みジョブ/dbtメタデータ連携ジョブの実行時に自動的に更新されます。

## リネージのサポート状況

### データストア別リネージ対応状況

| データストア | ビュー | dbt | TROCCOデータマート | Tableau(テーブル→データソース) | TROCCO転送 |
| --- | --- | --- | --- | --- | --- |
| BigQuery | ○ | ○ | ○ | ○ | ○（転送先の場合） |
| Snowflake | ○（ビューのみ） | ○ | ○ | ○ | ○（転送先の場合） |
| Redshift | × | × | × | × | ○（転送先の場合） |
| カスタムデータベース | × | × | × | × | ○（「転送元: MySQL, PostgreSQL, SQL Server のみ/ 転送先:「その他」以外） |

### リネージのサポート対象外

以下の機能・条件では、リネージが正しく表示されない、または表示されません。

- Snowflakeの機械学習関数（ML関数）：ML関数を含むリネージは表示できません
- データベース固有の方言関数：各データベース固有の特殊な関数や構文を用いたビューやテーブルでは、リネージを正しく表示できない場合があります
