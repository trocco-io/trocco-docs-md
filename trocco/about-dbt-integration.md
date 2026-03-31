---
articleId: fa7ed9c6-281c-4190-b222-8d1795232500
slug: about-dbt-integration
title: dbt連携について
parentCategoryId: 306848d6-87d4-40e8-a2e3-7ce10a8364a6
languageCode: ja
---

## 概要

### dbtとは

dbtとは、SQLをモジュール化して扱える開発フレームワークです。

- Python用テンプレート言語のJinjaと組み合わせることで、より柔軟にデータ変換のコードを記述できます。
- 対応するデータウェアハウスと接続し、データウェアハウス内のテーブルに対してクエリを実行できます。
- クエリ実行段階で自動テストを行うこともできます。

詳しくは、[dbt公式ページ](https://www.getdbt.com/)を参照ください。

### TROCCOのdbt連携

TROCCOは、dbtのコードを管理するGitリポジトリと連携します。
その上で、リポジトリ上のコードに対してdbtコマンドを実行できるdbtジョブ設定を作成し、実行できます。
作成したdbtジョブは、TROCCOのワークフロー機能に組み込むことも可能です。

:::(Info) (本機能が対応するホスティングサービス)

dbt連携は、リポジトリへのSSH接続に対応したGitホスティングサービスで利用できます。
SSH接続が可能であれば、クラウド・オンプレミスは問いません。

以下のホスティングサービスでは動作を確認しています。

- GitHub / GitHub Enterprise
- GitLab
- Azure DevOps
  :::

### dbt対応バージョン

2025年03月現在、TROCCOでは、以下のバージョンに対応しています。

- dbt Core v1.11
- dbt Core v1.10
- dbt Core v1.9
- dbt Core v1.8
- dbt Core v1.7（新規設定はできません）

## 事前準備

dbtジョブを実行するためには、以下の手順を行う必要があります。
詳しくはリンク先を参照ください。

- [dbt Gitリポジトリ](/docs/dbt-git-repository)の追加
- [dbtジョブ設定](/docs/dbt-job-configuration)の追加

## 対応アダプター

dbtでは、dbtが対応するデータウェアハウスのことを**アダプター**と表記します。
TROCCOが対応しているアダプターは下記のとおりです。

- Google BigQuery
- Snowflake
- Amazon Redshift
