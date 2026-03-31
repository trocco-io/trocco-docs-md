---
articleId: 863e37ab-342c-4faa-900d-f2ef1f168b12
slug: release-note-2025-10
title: リリースノート-2025年10月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2025年10月のリリース情報をお届けします**

## お知らせ

### 接続IPアドレスを追加

以下ページでお知らせしておりましたTROCCOの接続IPアドレス追加を実施しました。
[【日程確定】TROCCO 接続IPアドレス追加のお知らせ（2025年10月8日予定） – TROCCOヘルプセンター](https://help.trocco.io/hc/ja/articles/4931300852382--%E6%97%A5%E7%A8%8B%E7%A2%BA%E5%AE%9A-TROCCO-%E6%8E%A5%E7%B6%9AIP%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%E8%BF%BD%E5%8A%A0%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B-2025%E5%B9%B410%E6%9C%888%E6%97%A5%E4%BA%88%E5%AE%9A)

## 転送設定

### 転送元Zoomを追加

転送元Zoomを追加しました。
ウェビナー参加者のデータなどを分析し、マーケティング施策の評価や改善に繋げられます。

### 転送元Mixpanelを追加

転送元Mixpanelを追加しました。
アプリケーションのユーザー情報や行動ログをDWHに連携し、ファネル分析やLTV分析に役立てられます。

### 転送元makeshopを追加

転送元makeshopを追加しました。
BIツールと連携し、在庫状況の可視化や商品の売上分析に活用できます。

### 転送元Zoho Recruitを追加

転送元Zoho Recruitを追加しました。
タレントプールの分析や選考フローの可視化に活用できます。

### 転送元Zendesk Chatを追加

転送元Zendesk Chatを追加しました。
エージェントの稼働状況や対応内容の分析・可視化に繋げられます。

### 転送元Microsoft Dynamics 365 CRMを追加

転送元Microsoft Dynamics 365 CRMを追加しました。
詳しくは[転送元 - Microsoft Dynamics 365 CRM](/docs/data-source-microsoft-dynamics-crm)を参照ください。

### 転送先TikTok Ads カスタムオーディエンスを追加

転送先TikTok Ads カスタムオーディエンスを追加しました。
詳しくは[転送先 - TikTok Ads カスタムオーディエンス](/docs/data-destination-tiktok-ads-custom-audience)を参照ください。

### 転送元マネーフォワード クラウド連結会計を追加

転送元マネーフォワード クラウド連結会計を追加しました。
連結BS・PLやキャッシュフローなどの会計データを他の会計ソフトやBIツールに連携できます。

### 転送元Vercelを追加

転送元Vercelを追加しました。
デプロイ状況の可視化などに利用できます。

### 転送元PayPalを追加

転送元PayPalを追加しました。
取引や決済情報などのモニタリングに役立てられます。

### 転送元Qiitaを追加

転送元Qiitaを追加しました。
記事一覧やコメント、いいね数などを連携し、記事の分析に利用できます。

### 転送元Db2 for LUWで差分転送ができるように

転送元Db2 for LUWで差分転送をサポートし、前回転送時からの増分データのみ転送できるようになりました。

### 転送元HTTP・HTTPSでルートCA証明書を設定可能に

転送元HTTP・HTTPSでHTTPS接続時に使用するルートCA証明書を設定できるようになりました。
TROCCOにインストールされていないルートCA証明書によるSSL認証が必要な場合にご利用ください。

### 転送元LINE広告で削除済みの広告データを取得できるように

転送元LINE広告でダウンロード種別にパフォーマンスレポートを選択した場合に、削除済みの広告データをレポートに含めるか選択できるようになりました。

### 転送元Facebookリード広告で取得できるフォームのデータが拡大

転送元Facebookリード広告で、以下のデータが取得できるようになりました。

- privacy_policy_url
- legal_content
- context_card

### 転送元Tableau CRM Analyticsの名称変更

転送元Tableau CRM Analyticsの名称を**転送元CRM Analytics（旧 Tableau CRM）**に変更しました。

## CDCデータ転送

### ダッシュボードからCDCデータ転送サマリーを閲覧できるように

TROCCOのダッシュボード画面から、CDCデータ転送の処理イベント数や日次イベント推移を確認できるようになりました。

### 転送元PostgreSQLに対応

CDCデータ転送にて、転送元にPostgreSQLを利用できるようになりました。
詳しくは[CDCデータ転送 - 転送元 - PostgreSQL](cdc-data-source-postgresql)を参照ください。

## データマート

### データマートBigQueryでクエリのサイズを事前確認できるように

データマートBigQueryで、記述したクエリを実行した際のスキャン量を確認できるようになりました。
![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-10-31-18-32-37.png)

## dbt連携

### dbtバージョン1.10に対応

dbt Core v1.10を指定できるようになりました。
dbtバージョンは、[dbt Gitリポジトリ](/docs/dbt-git-repository)より選択できます。

## ワークフロー

### ワークフロー編集画面にコメントを挿入できるように

ワークフロー編集画面でコメントを挿入できるようになりました。
「コメント追加」をクリックするか、キーボードの `c` 押下で挿入できます。

## 接続情報

### Oracle Database接続情報でホスト・ポート名による接続時にもウォレットファイルを利用できるように

Oracle Database接続情報で接続方法に「ホスト名・ポート番号を指定する」を選択した場合でも、ウォレットファイルを利用できるようになりました。

## 運用支援

### 環境グループ・環境にメモを追加できるように

環境管理機能で環境グループ・環境にメモを追加できるようになりました。

## Self-Hosted Runner

### Self-Hosted Runnerの環境変数に`TROCCO_ONESHOT`と`HEALTH_CHECK_PORT`を追加

Self-Hosted Runnerの起動時に設定可能な環境変数として、`TROCCO_ONESHOT`と`HEALTH_CHECK_PORT`を追加しました。
詳しくは[Self-Hosted Runner](/docs/self-hosted-runner#2-runnerの起動)を参照ください。

## TROCCO API

### 環境管理機能のAPIを追加

環境管理機能のAPIを追加しました。
追加したAPIエンドポイントは以下のとおりです。

- [環境グループ一覧取得](/trocco-api/apidocs/get-environment-groups)
- [環境グループ作成](/trocco-api/apidocs/post-environment-group)
- [環境グループ詳細取得](/trocco-api/apidocs/get-environment-group)
- [環境グループ更新](/trocco-api/apidocs/patch-environment-group)
- [環境グループ削除](/trocco-api/apidocs/delete-environment-group)
- [環境一覧取得](/trocco-api/apidocs/get-environments)
- [環境作成](/trocco-api/apidocs/post-environment)
- [環境詳細取得](/trocco-api/apidocs/get-environment)
- [環境更新](/trocco-api/apidocs/patch-environment)
- [環境削除](/trocco-api/apidocs/delete-environment)

### 環境グループAPIがメモ機能に対応

環境グループAPIがメモ機能に対応しました。
対象となったAPIエンドポイントは以下のとおりです。

- [環境グループ一覧取得](/trocco-api/apidocs/get-environment-groups)
- [環境グループ作成](/trocco-api/apidocs/post-environment-group)
- [環境グループ詳細取得](/trocco-api/apidocs/get-environment-group)
- [環境グループ更新](/trocco-api/apidocs/patch-environment-group)

### データマートDatabricksに対応

データマートDatabricksに関する情報の取得・操作が可能になりました。
対象となったAPIエンドポイントは以下のとおりです。

- [データマート定義作成](/trocco-api/apidocs/post-datamart-definition)
- [データマート定義詳細取得](/trocco-api/apidocs/get-datamart-definition)
- [データマート定義更新](/trocco-api/apidocs/patch-datamart-definition)
- [ワークフロー作成](/trocco-api/apidocs/post-pipeline-definition)
- [ワークフロー詳細取得](/trocco-api/apidocs/get-pipeline-definition)
- [ワークフロー更新](/trocco-api/apidocs/patch-pipeline-definition)

### ワークフローAPIが条件分岐タスクに対応

ワークフローAPIで条件分岐タスクに関する情報の取得・操作が可能になりました。
対象となったAPIエンドポイントは以下のとおりです。

- [ワークフロー作成](/trocco-api/apidocs/post-pipeline-definition)
- [ワークフロー詳細取得](/trocco-api/apidocs/get-pipeline-definition)
- [ワークフロー更新](/trocco-api/apidocs/patch-pipeline-definition)
