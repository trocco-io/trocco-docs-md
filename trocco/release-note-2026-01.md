---
articleId: 872475ac-5350-49aa-81fc-c0e5d0957b6f
slug: release-note-2026-01
title: リリースノート-2026年1月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2026年1月のリリース情報をお届けします**

## 転送設定

### 転送元Amazon Adsを追加

転送元Amazon Adsを追加しました。

### 転送先Microsoft Advertising カスタマーマッチを追加

転送先Microsoft Advertising カスタマーマッチを追加しました。

### 転送元Notionで取得データの絞り込みに指定できるパラメータが拡充

転送元Notionで取得対象に「ワークスペース内のページ・データベース一覧」を選択した場合に、ページ・データベースでのフィルターとページサイズの指定が可能になりました。

### 転送元スマレジで取得データの対象期間に指定できるパラメータが拡充

転送元スマレジで取得対象に「取引一覧」を選択した場合に、日付・時刻の範囲に「更新日時」を選択できるようになりました。

### 転送元スマレジの取得対象に商品取扱店舗一覧を追加

転送元スマレジの取得対象に商品取扱店舗一覧を追加しました。
詳しくは、[転送元 - スマレジ](/docs/data-source-smaregi)を参照ください。

### 転送先BigQueryでカラムの説明とポリシータグの保持機能を追加

転送先BigQueryで、REPLACEモード実行時にカラムの説明とポリシータグを保持する機能を追加しました。

## CDCデータ転送

### 転送元がBigQueryの場合にテーブル単位で転送の例外処理・スキップが可能に

転送元がBigQueryの場合、テーブル単位のステータス管理が可能になりました。

これまでは、特定のテーブルでエラーが発生した場合、ジョブ全体がエラーになっていました。
今回のリリースにより、特定のテーブルでエラーが発生した場合、そのテーブルだけがエラー状態になり、他のテーブルは引き続き正常に転送されます。
また、同じテーブルで連続してエラーが発生した場合、設定に基づいて自動的に対象テーブルの転送はスキップされます。

詳しくは、[CDCデータ転送 - 転送先 - Google BigQuery](https://documents.trocco.io/docs/cdc-data-destination-bigquery#同期対象のテーブル例外について)を参照ください。

### 「カラムのみ自動追従」の場合にテーブル追加は自動で行われるように

CDCデータ転送の「カラムのみ自動追従」モードで、新規テーブルは承認を経ず自動的に転送設定に追加されるようになりました。
新規テーブルは転送対象外の状態で追加されます。

## データマート

### データマートRedshiftのログ出力を改善

データマートRedshiftの「全件洗い替え」モードにて、TRUNCATEクエリがログに出力されるようになりました。

## dbt連携

### dbtバージョン1.11に対応

dbt Core v1.11を指定できるようになりました。
dbtバージョンは、[dbt Gitリポジトリ](/docs/dbt-git-repository)より選択できます。

## ワークフロー

### ワークフロー定義詳細画面にスケジュールと通知設定のタブを追加

ワークフロー定義詳細画面で、スケジュールと通知設定のタブを追加し、通知設定やデータマートとUIを統一しました。

## 接続情報

### SAP S/4HANA ODataでSSL通信にCA証明書を設定可能に

SAP S/4HANA ODataの接続情報にて、独自のCA証明書を設定可能になりました。

## 運用支援

### 通知先HTTPをリリース

これまで、通知先はSlackとメールのみでしたが、HTTPリクエストによる通知機能をサポートしました。
詳しくは、[通知設定について](/docs/notification)を参照ください。

## TROCCO API

### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象として、以下が追加されました。

- 転送先 - kintone

対象となったAPIエンドポイントは以下のとおりです。

- [転送設定一覧取得](/apidocs/get-job-definitions)
- [転送設定作成](/apidocs/post-job-definition)
- [転送設定詳細取得](/apidocs/get-job-definition)
- [転送設定更新](/apidocs/patch-job-definition)
- [転送設定削除](/apidocs/delete-job-definition)

### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象として、以下が追加されました。

- 転送元 - Hubspot

対象となったAPIエンドポイントは以下のとおりです。

- [転送設定一覧取得](/apidocs/get-job-definitions)
- [転送設定作成](/apidocs/post-job-definition)
- [転送設定詳細取得](/apidocs/get-job-definition)
- [転送設定更新](/apidocs/patch-job-definition)
- [転送設定削除](/apidocs/delete-job-definition)

また、転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - SFTP
- 転送元 - SFTP
- 転送先 - SFTP

対象となったAPIエンドポイントは以下のとおりです。

- 接続情報
  - [接続情報一覧取得](/apidocs/get-connection-configurations)
  - [接続情報作成](/apidocs/post-connection-configuration)
  - [接続情報取得](/apidocs/get-connection-configuration)
  - [接続情報更新](/apidocs/patch-connection-configuration)
  - [接続情報削除](/apidocs/delete-connection-configuration)
- 転送設定
  - [転送設定作成](/apidocs/post-job-definition)
  - [転送設定詳細取得](/apidocs/get-job-definition)
  - [転送設定更新](/apidocs/patch-job-definition)
  - [転送設定削除](/apidocs/delete-job-definition)