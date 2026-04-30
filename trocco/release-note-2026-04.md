---
slug: release-note-2026-04
title: リリースノート-2026年4月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2026年4月のリリース情報をお届けします**

## 新機能

### スケジュール管理機能をリリース

転送設定・データマート・ワークフローのスケジュール実行を横断的に管理できる**スケジュール管理機能**をリリースしました。
不要なスケジュールの棚卸しや、ジョブ実行時間の集中による同時実行数の超過防止に活用できます。

詳しくは、[スケジュール管理画面](/docs/schedule-settings#スケジュール管理画面)を参照ください。

## 転送設定

### 転送元Google Adsのコンディションにカスタム変数を使用可能に

転送元Google Adsのコンディションに対してカスタム変数が使用可能になりました。

### 転送元Google Adsenseのディメンションで選択できる項目が拡充

転送元Google Adsenseのディメンションで`PAGE_URL`を選択できるようになりました。

### 転送元Facebook Ad Insightsでデータ集計期間の選択が可能に

転送元Facebook Ad Insightsで、データの集計期間を指定可能になりました。
詳しくは[転送元 - Facebook Ad Insights](/docs/data-source-facebook-ad-insights)を参照ください。

### 転送元Hubspotで選択できるオブジェクトタイプの拡充

転送元Hubspotで、新規に以下のオブジェクトタイプを指定できるようになりました。

- appointments
- carts
- communications
- courses
- discounts
- fees
- invoices
- listings
- orders
- payments
- services
- subscriptions
- taxes
- users

### 転送元Salesforceで引用符で囲める最大データ量を指定可能に

転送元SalesforceのSTEP2 詳細設定で、引用符で囲める最大データ量（`max_quoted_size_limit`）を指定可能になりました。

### 転送先Salesforceで外部IDによる参照関係フィールドの設定が可能に

転送先Salesforceで、転送元データと参照先オブジェクトの外部IDを照合し、Salesforce ID（SF ID）を自動取得して参照関係フィールドに設定できるようになりました。
SF IDを事前取得して結合する手間を省き、設定を簡略化できます。

詳しくは、[転送先 - Salesforce](/docs/data-destination-salesforce)を参照ください。

### 転送先Snowflakeでデータ内の改行・タブ文字の保持オプションを利用可能に

転送先Snowflakeの出力オプションにて、データ内の改行・タブ文字を保持するエスケープのオプションを利用可能になりました。

### プログラミングETLでPython3.9の新規設定を終了

プログラミングETLのランタイムで、Python3.9の新規設定を終了しました。
詳しくは、[プログラミングETLにおけるPython 3.9サポート終了と移行のお願い（2026年4月予定） – TROCCOヘルプセンター](https://help.trocco.io/hc/ja/articles/5040265368862-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0ETL%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8BPython-3-9%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E7%B5%82%E4%BA%86%E3%81%A8%E7%A7%BB%E8%A1%8C%E3%81%AE%E3%81%8A%E9%A1%98%E3%81%84-2026%E5%B9%B44%E6%9C%88%E4%BA%88%E5%AE%9A)を参照ください。

## CDCデータ転送

### 転送先BigQueryで転送先カラム型の設定が可能に

転送先BigQueryで転送先に出力する際のカラム型の設定が可能になりました。
詳しくは[CDCデータ転送 - 転送先 - Google BigQuery](/docs/cdc-data-destination-bigquery)を参照ください。

## データマート

### データマートBigQueryのスキーマ自動追従モードをリリース

データマートBigQueryで、データマートジョブの実行時にクエリのスキーマと出力先テーブルのスキーマ差分を検知・追従できる機能をリリースしました。
詳しくは[スキーマ自動追従モード](/docs/datamart-bigquery#スキーマ自動追従モード)を参照ください。

### データマートBigQueryで、ジョブ実行時にBigQueryのラベルが自動付与されるように

データマートBigQueryでジョブを実行した際に、BigQueryから参照できる以下のラベルが付与されるようになりました。

- `trocco_job_id`：ジョブID
- `trocco_job_type`：ジョブのタイプ
- `trocco_statement_type`：ステートメントのタイプ
- `trocco_executor_type`：実行タイプ

### データマートBigQueryでテーブル・カラムの説明とポリシータグの保持機能を追加

データマートBigQueryで、全件洗い替え時にテーブル・カラムの説明とポリシータグが保持されるようになりました。

## dbt連携

### dbt連携の実行コマンドを強化

dbt連携の実行コマンドで以下が可能になりました。

- `dbt run-operation` 選択時に `--vars`オプションを利用可能に
- `dbt source freshness`を利用可能に

## ワークフロー

### カスタム変数ループ実行で月初・月末を展開可能に

カスタム変数ループ実行の展開設定で、以下の値を指定可能になりました。

- 当月月初
- 前月末
- 当月月末

## 接続情報

### Snowflake接続情報のキーペア認証でパスフレーズ付きの秘密鍵を利用可能に

Snowflake接続情報のキーペア認証を利用する際に、パスフレーズ付きの秘密鍵を利用可能になりました。

### SFTP接続情報で接続確認が可能に

SFTP接続情報の設定画面に**接続を確認**ボタンを追加し、接続確認ができるようになりました。

### PostgreSQL接続情報で認証の接続確認が可能に

PostgreSQL接続情報の接続確認で、ホストの疎通確認に加えて認証の確認が実行されるようになりました。

## その他

### カスタム変数の単位に「分」を指定可能に

カスタム変数でデータ型に**時刻・日付**を選択した場合に、単位に**分**を指定できるようになりました。

### カスタム変数の単位に月初・月末を指定可能に

カスタム変数でデータ型に**時刻・日付**を選択した場合に、単位に以下を指定できるようになりました。

- 当月月初
- 当月月末
- 前月末

### PostgreSQL JDBCドライバーのバージョン42.7.4を追加

PostgreSQL接続情報で選択できるJDBCドライバーのバージョンに`42.7.4`を追加しました。
また、バージョン`42.7.4`を選択した場合に、SSLダイレクトネゴシエーションを有効化できるようになりました。

## コネクタAPIアップデート

### 転送元Yahoo!検索広告

転送時に使用するYahoo!広告 APIのバージョンを、v17から**v19**へアップデートしました。
新バージョンについては、[Yahoo!広告 検索広告 API v19 リリースノート │ Yahoo!広告 API](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/ysa-v19.html)を参照ください。

### 転送元Yahoo!ディスプレイ広告 (運用型)

転送時に使用するYahoo!広告 APIのバージョンを、v17から**v19**へアップデートしました。
新バージョンについては、[Yahoo!広告 ディスプレイ広告 API v19 リリースノート │ Yahoo!広告 API](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/yda-v19.html)を参照ください。

### 転送元Google Ads・転送先Google Ads コンバージョン

転送時に使用するGoogle Ads APIのバージョンを、v20から**v21**へアップデートしました。
新バージョンについては、[Google Ads API v21 Reference - Google for Developers](https://developers.google.com/google-ads/api/reference/rpc/v21/overview)を参照ください。

## TROCCO API

### 転送設定APIの対応コネクターが拡充

転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - カオナビ
- 接続情報 - SmartHR
- 接続情報 - バクラク
- 接続情報 - Adobe Marketo Engage
- 接続情報 - PagerDuty
- 転送元 - カオナビ
- 転送元 - SmartHR
- 転送先 - Redshift
- 転送先 - Facebook カスタムオーディエンス
- 転送先 - Braze
- 転送元 - バクラク
- 転送元 - Yahoo!ディスプレイ広告 (運用型)
- 転送元 - Facebook Ad Insights
- 転送元 - PagerDuty

対象となったAPIエンドポイントは以下のとおりです。

- 接続情報
  - [接続情報一覧取得](/apidocs/get-connection-configurations)
  - [接続情報作成](/apidocs/post-connection-configuration)
  - [接続情報取得](/apidocs/get-connection-configuration)
  - [接続情報更新](/apidocs/patch-connection-configuration)
  - [接続情報削除](/apidocs/delete-connection-configuration)
- 転送設定
  - [転送設定一覧取得](/apidocs/get-job-definitions)
  - [転送設定作成](/apidocs/post-job-definition)
  - [転送設定詳細取得](/apidocs/get-job-definition)
  - [転送設定更新](/apidocs/patch-job-definition)
  - [転送設定削除](/apidocs/delete-job-definition)
