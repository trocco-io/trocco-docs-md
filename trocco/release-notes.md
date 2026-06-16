---
articleId: 7e4ecc65-0ded-4467-b3bb-13a676a274cd
slug: release-notes
title: リリースノート一覧
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
本ページでは、毎週のリリースをご紹介しています。

## 2026-06-15

### 転送設定

#### 一部コネクタでジョブ実行時のエラーレコード表示が可能に

ジョブ実行時のエラーレコードをテーブル形式で表示できるオプションを追加しました。
以下が対象コネクタです。
- 転送先Salesforce
- 転送先HubSpot
- 転送先kintone

詳しくは[エラーレコードのテーブル表示について](/docs/error-records-table-display)を参照ください。

#### 転送元KlaviyoのEvents取得時に対象期間を指定できるように

転送元Klaviyoで取得対象に`Events`を指定した際に、取得開始・終了日時を指定できるようになりました。

### カスタムコネクタ

#### 転送元カスタムコネクタでPOSTメソッドを利用可能に

転送元カスタムコネクタでPOSTメソッドを利用したエンドポイントを作成できるようになりました。

#### カスタムコネクタやエンドポイントの複製が可能に

カスタムコネクタやエンドポイントの複製ができるようになりました。

### 接続情報

#### Microsoft Advertising接続情報でGoogleアカウントを利用可能に

Microsoft Advertising接続情報でMicrosoftアカウントと紐づいているGoogleアカウントによる認証が可能になりました。

### UI・UX

#### ユーザー一覧画面の情報が整理されソートなどが可能に

ユーザー一覧画面の情報が列単位で整理されました。
あわせて、列単位でのソートやページネーションなどが可能になりました。

### TROCCO API

#### dbtジョブ設定のAPIを追加

dbtジョブ設定のAPIを追加しました。
追加したAPIエンドポイントは以下のとおりです。

- [dbtジョブ設定一覧取得](/apidocs/dbt%E3%82%B8%E3%83%A7%E3%83%96%E8%A8%AD%E5%AE%9A%E4%B8%80%E8%A6%A7%E5%8F%96%E5%BE%97)
- [dbtジョブ設定作成](/apidocs/dbt%E3%82%B8%E3%83%A7%E3%83%96%E8%A8%AD%E5%AE%9A%E4%BD%9C%E6%88%90)
- [dbtジョブ設定詳細取得](/apidocs/dbt%E3%82%B8%E3%83%A7%E3%83%96%E8%A8%AD%E5%AE%9A%E8%A9%B3%E7%B4%B0%E5%8F%96%E5%BE%97)
- [dbtジョブ設定更新](/apidocs/dbt%E3%82%B8%E3%83%A7%E3%83%96%E8%A8%AD%E5%AE%9A%E6%9B%B4%E6%96%B0)
- [dbtジョブ設定削除](/apidocs/dbt%E3%82%B8%E3%83%A7%E3%83%96%E8%A8%AD%E5%AE%9A%E5%89%8A%E9%99%A4)

#### 転送設定・データマート定義APIで設定できるスケジュール数が拡大

転送設定・データマート定義APIで設定できるスケジュール数が24件に拡大しました。

## 2026-06-08

### UI・UX

#### ユーザー一覧・編集画面で所属チームを確認できるように

ユーザー一覧・編集画面で、対象ユーザーが所属しているチームが表示されるようになりました。

### コネクタAPIアップデート

#### 転送元Facebook Ad Insights

転送元Facebook Ad Insightsで利用しているFacebook APIを、v23から**v25**へアップデートしました。
新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version25.0)を参照ください。

## 2026-06-01

### 転送設定

#### 転送ジョブ手動実行時にカスタム変数のデフォルト値を確認できるように

転送ジョブの手動実行で、カスタム変数展開方法に「変数ごとに値を指定」を選択した際に、展開されるデフォルトの値を確認できるようになりました。

#### 転送元SAP S/4HANA ODataでデルタリンクを使った差分転送が可能に

転送元SAP S/4HANA ODataで、SAP ODP/ODQのデルタリンクを利用して前回転送時からの差分転送が可能になりました。
転送方法で**差分転送 (SAP ODP/ODQ, deltatoken指定)**を指定することで利用できます。

### データマート

#### データマートジョブ手動実行時にカスタム変数のデフォルト値を確認できるように

データマートジョブの手動実行で、カスタム変数展開方法に「変数ごとに値を指定」を選択した際に、展開されるデフォルトの値を確認できるようになりました。

### dbt連携

#### 参照先Gitリポジトリのタグとコミットハッシュを指定できるように

参照タイプに**タグ**と**コミットハッシュ**を追加し、Gitリポジトリをより柔軟に参照できるようになりました。
詳しくは[dbt Gitリポジトリ](/docs/dbt-git-repository)を参照ください。

### 接続情報

#### MongoDB接続情報でX.509認証を利用可能に

MongoDB接続情報で、認証方式にMONGODB_X509を指定可能になりました。

### コネクタAPIアップデート

#### 転送元Google Ad Manager

転送時に使用するGoogle Ad Manager APIのバージョンを、v202508から**v202605**へアップデートしました。
新バージョンについては、[Google Ad Manager API](https://developers.google.com/ad-manager/api/rel_notes#v202605)を参照ください。
  
### TROCCO API

#### dbt Gitリポジトリ連携機能のAPIを追加

dbt Gitリポジトリ機能のAPIを追加しました。
追加したAPIエンドポイントは以下のとおりです。

- [dbt Gitリポジトリ一覧取得](/apidocs/dbt-git%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E4%B8%80%E8%A6%A7%E5%8F%96%E5%BE%97)
- [dbt Gitリポジトリ作成](/apidocs/dbt-git%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E4%BD%9C%E6%88%90)
- [dbt Gitリポジトリ詳細取得](/apidocs/dbt-git%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E8%A9%B3%E7%B4%B0%E5%8F%96%E5%BE%97)
- [dbt Gitリポジトリ更新](/apidocs/dbt-git%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E6%9B%B4%E6%96%B0)
- [dbt Gitリポジトリ削除](/apidocs/dbt-git%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E5%89%8A%E9%99%A4)

## 2026-05-25

### お知らせ

#### SOC2 Type2報告書を受領

TROCCOのセキュリティに対して、米国公認会計士協会 （AICPA）が定めた「Trustサービス原則と規準」に準拠した内部統制の有効性を、外部監査人が第三者の立場として評価したSOC2 Type2を受領しました。
今後もお客様の大切なデータをより安全に取り扱い、リスク管理を強化することで、より安心して当社サービスをご利用いただける環境を提供してまいります。

### 転送設定

#### 出力オプションでBOMの有無を選択できるように

出力オプションのCSV/TSV出力設定にて、出力するファイルのBOMの有無を指定できるようになりました。
文字エンコーディングにUTF-8を指定した場合のみ有効な設定です。

## 2026-05-18

### 転送設定

#### 転送元BoxでAPIリトライ上限回数を指定可能に

転送元Boxの詳細設定で、Box APIのレートリミットなどでAPIリクエストに失敗した場合のリトライ上限回数を指定できるようになりました。

### スケジュール管理

#### スケジュール管理画面でスケジュールの一括削除が可能に

スケジュール管理画面にて、スケジュールを一括削除できるようになりました。

### ワークフロー

#### ワークフロージョブが実行された環境を簡単に確認できるように

ワークフロージョブの実行結果画面にて、実行された環境がジョブのグラフや実行ログに表示されるようになりました。

### 接続情報

#### Snowflake接続情報でプログラムによるアクセストークン(PAT)認証を利用可能に

Snowflake接続情報で、認証方式に**プログラムによるアクセストークン認証**を選択できるようになりました。
新規の接続情報作成にはプログラムによるアクセストークン認証またはキーペア認証をご利用ください。

詳しくは、[接続情報 - Snowflake](/docs/connection-configuration-snowflake)を参照ください。

あわせて、API経由でもプログラムによるアクセストークン認証を指定した接続情報の作成・更新に対応しました。

### UI・UX

#### 自分が作成した転送設定・データマート・ワークフローの絞り込みが可能に

転送設定・データマート・ワークフローの各一覧画面にて、自分が作成した設定のみを絞り込めるようになりました。
**作成者が自分**のチェックボックスから絞り込めます。

### コネクタAPIアップデート

#### Facebook関連コネクタ

下記で利用しているFacebook APIを、v23から**v25**へアップデートしました。

- 転送元Facebook Ad クリエイティブ
- 転送元Facebookリード広告
- 転送先Facebook コンバージョンAPI
- 転送先Facebook カスタムオーディエンス(β版)
- Facebook接続情報のOAuth認証

新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version25.0)を参照ください。

## 2026-05-11

### マネージド転送設定

#### 転送日時カラム設定の共通設定が可能に

マネージド転送設定の新規作成時や共通設定の編集時に、転送日時カラム設定を一括で設定できるようになりました。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象として、以下が追加されました。

- 転送元 - Adobe Marketo Engage

対象となったAPIエンドポイントは以下のとおりです。

- [転送設定一覧取得](/apidocs/get-job-definitions)
- [転送設定作成](/apidocs/post-job-definition)
- [転送設定詳細取得](/apidocs/get-job-definition)
- [転送設定更新](/apidocs/patch-job-definition)
- [転送設定削除](/apidocs/delete-job-definition)

#### ユーザー取得APIで取得できる情報が拡充

ユーザー取得APIで以下の情報が取得可能になりました。

- `otp_required_for_login`：二段階認証の設定有無
- `can_use_basic_services`：TROCCOの基本機能の利用可否
- `can_use_data_catalog`：COMETA（データカタログ）の利用可否
- `teams`：所属チーム一覧

#### データマート定義APIで対応する書き込みモードが拡充

データマート定義APIで、データマートBigQueryの増分更新・SCD Type 2（履歴保持）の設定に対応しました。

## 2026-05-07

### データマート

#### スキーマ変更を検知した際に通知が可能に

スキーマ自動追従モードに対応した書き込みモードを利用しているデータマート定義で、通知設定の通知タイプに**スキーマ変更検知時**を指定できるようになりました。

## 2026-04-27

### 新機能

#### スケジュール管理機能をリリース

転送設定・データマート・ワークフローのスケジュール実行を横断的に管理できる**スケジュール管理機能**をリリースしました。
不要なスケジュールの棚卸しや、ジョブ実行時間の集中による同時実行数の超過防止に活用できます。

詳しくは、[スケジュール管理画面](/docs/schedule-settings#スケジュール管理画面)を参照ください。

### 転送設定

#### 転送先Snowflakeでデータ内の改行・タブ文字の保持オプションを利用可能に

転送先Snowflakeの出力オプションにて、データ内の改行・タブ文字を保持するエスケープのオプションを利用可能になりました。

#### プログラミングETLでPython3.9の新規設定を終了

プログラミングETLのランタイムで、Python3.9の新規設定を終了しました。
詳しくは、[プログラミングETLにおけるPython 3.9サポート終了と移行のお願い（2026年4月予定） – TROCCOヘルプセンター](https://help.trocco.io/hc/ja/articles/5040265368862-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0ETL%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8BPython-3-9%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E7%B5%82%E4%BA%86%E3%81%A8%E7%A7%BB%E8%A1%8C%E3%81%AE%E3%81%8A%E9%A1%98%E3%81%84-2026%E5%B9%B44%E6%9C%88%E4%BA%88%E5%AE%9A)を参照ください。

### 接続情報

#### SFTP接続情報で接続確認が可能に

SFTP接続情報の設定画面に**接続を確認**ボタンを追加し、接続確認ができるようになりました。

#### PostgreSQL接続情報で認証の接続確認が可能に

PostgreSQL接続情報の接続確認で、ホストの疎通確認に加えて認証の確認が実行されるようになりました。

### その他

#### カスタム変数の単位に月初・月末を指定可能に

カスタム変数でデータ型に**時刻・日付**を選択した場合に、単位に以下を指定できるようになりました。

- 当月月初
- 当月月末
- 前月末

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - PagerDuty
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

## 2026-04-20

### 転送設定

#### 転送先Salesforceで外部IDによる参照関係フィールドの設定が可能に

転送先Salesforceで、転送元データと参照先オブジェクトの外部IDを照合し、Salesforce ID（SF ID）を自動取得して参照関係フィールドに設定できるようになりました。
SF IDを事前取得して結合する手間を省き、設定を簡略化できます。

詳しくは、[転送先 - Salesforce](/docs/data-destination-salesforce)を参照ください。

### ワークフロー

#### カスタム変数ループ実行で月初・月末を展開可能に

カスタム変数ループ実行の展開設定で、以下の値を指定可能になりました。

- 当月月初
- 前月末
- 当月月末

### 接続情報

#### Snowflake接続情報のキーペア認証でパスフレーズ付きの秘密鍵を利用可能に

Snowflake接続情報のキーペア認証を利用する際に、パスフレーズ付きの秘密鍵を利用可能になりました。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - Adobe Marketo Engage
- 転送元 - Facebook Ad Insights

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

## 2026-04-13

### 転送設定

#### 転送元Facebook Ad Insightsでデータ集計期間の選択が可能に

転送元Facebook Ad Insightsで、データの集計期間を指定可能になりました。
詳しくは[転送元 - Facebook Ad Insights](/docs/data-source-facebook-ad-insights)を参照ください。

#### 転送元Hubspotで選択できるオブジェクトタイプの拡充

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

#### 転送元Salesforceで引用符で囲める最大データ量を指定可能に

転送元SalesforceのSTEP2 詳細設定で、引用符で囲める最大データ量（`max_quoted_size_limit`）を指定可能になりました。

### CDCデータ転送

#### 転送先BigQueryで転送先カラム型の設定が可能に

転送先BigQueryで転送先に出力する際のカラム型の設定が可能になりました。
詳しくは[CDCデータ転送 - 転送先 - Google BigQuery](/docs/cdc-data-destination-bigquery)を参照ください。

### データマート

#### データマートBigQueryのスキーマ自動追従モードをリリース

データマートBigQueryで、データマートジョブの実行時にクエリのスキーマと出力先テーブルのスキーマ差分を検知・追従できる機能をリリースしました。
詳しくは[スキーマ自動追従モード](/docs/datamart-bigquery#スキーマ自動追従モード)を参照ください。

#### データマートBigQueryで、ジョブ実行時にBigQueryのラベルが自動付与されるように

データマートBigQueryでジョブを実行した際に、BigQueryから参照できる以下のラベルが付与されるようになりました。

- `trocco_job_id`：ジョブID
- `trocco_job_type`：ジョブのタイプ
- `trocco_statement_type`：ステートメントのタイプ
- `trocco_executor_type`：実行タイプ

#### データマートBigQueryでテーブル・カラムの説明とポリシータグの保持機能を追加

データマートBigQueryで、全件洗い替え時にテーブル・カラムの説明とポリシータグが保持されるようになりました。

### dbt連携

#### dbt連携の実行コマンドを強化

dbt連携の実行コマンドで以下が可能になりました。

- `dbt run-operation` 選択時に `--vars`オプションを利用可能に
- `dbt source freshness`を利用可能に

### その他

#### PostgreSQL JDBCドライバーのバージョン42.7.4を追加

PostgreSQL接続情報で選択できるJDBCドライバーのバージョンに`42.7.4`を追加しました。
また、バージョン`42.7.4`を選択した場合に、SSLダイレクトネゴシエーションを有効化できるようになりました。

### コネクタAPIアップデート

#### 転送元Yahoo!検索広告

転送時に使用するYahoo!広告 APIのバージョンを、v17から**v19**へアップデートしました。
新バージョンについては、[Yahoo!広告 検索広告 API v19 リリースノート │ Yahoo!広告 API](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/ysa-v19.html)を参照ください。

#### 転送元Yahoo!ディスプレイ広告 (運用型)

転送時に使用するYahoo!広告 APIのバージョンを、v17から**v19**へアップデートしました。
新バージョンについては、[Yahoo!広告 ディスプレイ広告 API v19 リリースノート │ Yahoo!広告 API](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/yda-v19.html)を参照ください。

#### 転送元Google Ads・転送先Google Ads コンバージョン

転送時に使用するGoogle Ads APIのバージョンを、v20から**v21**へアップデートしました。
新バージョンについては、[Google Ads API v21 Reference - Google for Developers](https://developers.google.com/google-ads/api/reference/rpc/v21/overview)を参照ください。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - バクラク
- 転送元 - バクラク
- 転送元 - Yahoo!ディスプレイ広告 (運用型)

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

## 2026-04-06

### 転送設定

#### 転送元Google Adsのコンディションにカスタム変数を使用可能に

転送元Google Adsのコンディションに対してカスタム変数が使用可能になりました。

#### 転送元Google Adsenseのディメンションで選択できる項目が拡充

転送元Google Adsenseのディメンションで`PAGE_URL`を選択できるようになりました。

#### 広告系コネクタで転送時のハッシュ化仕様を変更

一部の広告系コネクタにて、メールアドレスや電話番号などで実行されていた転送時のハッシュ化処理の仕様を変更しました
詳しくは、[カスタムオーディエンス系コネクタのハッシュ化仕様変更のお知らせ](https://help.trocco.io/hc/ja/articles/5231275334558)を参照ください。

### CDCデータ転送

#### 除外したテーブルがスキーマ更新時のダイアログに表示されるように

スキーマ更新時の確認ダイアログにて、更新対象から除外したテーブルが確認ダイアログに表示されるようになりました。

### その他

#### カスタム変数の単位に「分」を指定可能に

カスタム変数でデータ型に**時刻・日付**を選択した場合に、単位に**分**を指定できるようになりました。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - カオナビ
- 接続情報 - SmartHR
- 転送元 - カオナビ
- 転送元 - SmartHR
- 転送先 - Redshift
- 転送先 - Facebook カスタムオーディエンス
- 転送先 - Braze

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

## 2026-03-30

### 転送設定

#### 転送先MySQLの出力オプションで日時型を選択できるように

転送元MySQLの出力オプションにて、カラム設定で`DATE`・`DATETIME`・`TIMESTAMP`・`TIME`をサポートしました。

#### 転送元Hubspotで選択できるオブジェクトタイプの拡充

転送元Hubspotで、新規に以下のオブジェクトタイプを指定できるようになりました。

- email
- meeting
- note
- postal_mail
- task

取得対象がオブジェクト・アソシエーションで上記データが取得可能になったことにあわせて、以下2つの取得対象を非推奨としました。

- エンゲージメント
- エンゲージメントのアソシエーション

#### 転送元Hubspotで取得するオブジェクトのプロパティを指定できるように

転送元Hubspotで、取得対象にオブジェクトを選択した場合に、取得するプロパティを指定できるようになりました。

### マネージド転送設定

#### 転送先BigQueryでカラムの説明とポリシータグの保持機能を追加

マネージド転送においても、転送先BigQueryでREPLACEモード実行時にカラムの説明とポリシータグを保持する機能を追加しました。

### カスタムコネクタ

#### 転送先カスタムコネクタでパスパラメータを利用可能に

転送先カスタムコネクタで、パスパラメータを使った動的なパスを指定可能になりました。
パスに個別のIDを含める必要があるAPIなどでも転送先カスタムコネクタを利用できるようになりました。

## 2026-03-23

### 転送設定

#### 転送先Salesforceで外部IDによる更新が可能に

転送先Salesforceで更新モードに`UPDATE`を選択した場合に、外部IDを更新キーとして指定できるようになりました。

#### 転送元MongoDBで不正なレコードを検知した場合の処理を設定可能に

転送先MongoDBで、転送中に不正なレコードを検知した場合の処理を設定できるようになりました。

詳しくは、[転送元 - MongoDB](/docs/data-source-mongodb)を参照ください。

#### 転送先BigQueryの出力オプションでRECORD型のフィールドを定義できるように

転送先BigQueryの出力オプションにて、RECORD型カラムのフィールドを定義できるようになりました。

### データマート

#### 処理対象期間の基準カラムにDATE型のカラムを指定できるように

増分更新やSCD Type 2、品質チェック設定で指定できる処理対象期間の基準カラムについて、DATE型のカラムも指定可能になりました。

詳しくは、[データマート - Google BigQuery](/docs/datamart-bigquery#処理対象期間の範囲指定について)を参照ください。

## 2026-03-16

### 転送設定

#### カスタム変数を利用できる箇所が拡大

以下の箇所で、新たにカスタム変数を利用できるようになりました。

- 入力ファイル形式にJSONPath、Microsoft Excel、XMLを選択した場合の設定項目
  - JSONPath：**ルート**
  - Microsoft Excel：**シート名**
  - XML：**ルートのパス**
- 転送元Oracle Databaseの**データベース**

### マネージド転送設定

#### 転送元Salesforceの差分転送に対応

マネージド転送で、転送元Salesforceの差分転送が可能になりました。

### データマート

#### 品質チェックエラー検出時の通知が可能に

データマート定義の通知設定にて、通知タイプに**ジョブ成功、かつ品質チェックエラー検出時**を指定できるようになりました。

### その他

#### スケジュール設定の有効化・無効化が可能に

スケジュール設定のON・OFFを切り替えできるようになりました。
詳しくは、[スケジュール機能について](/docs/schedule-settings)を参照ください。

また、以下の画面で、登録されたスケジュール設定がすべてON・OFFかどうかで絞り込みができるようになりました。

- 転送設定一覧
- データマート定義一覧
- ワークフロー定義一覧

### コネクタAPIアップデート

#### 転送先Amazon S3 Parquet

転送時に使用するAWS SDKのバージョンを、v1から**v2**へアップデートしました。
新バージョンについては、[AWS SDK for Java 2.x](https://docs.aws.amazon.com/ja_jp/sdk-for-java/latest/developer-guide/home.html)を参照ください。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - Amazon Redshift
- 転送元 - Amazon Redshift
- 転送先 - Google Cloud Storage

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

## 2026-03-09

### 転送設定

#### 転送元Salesforceで差分転送ができるように

転送元Salesforceで、オブジェクトの項目の差分転送をサポートしました。
カラムを基準として、前回転送時からの増分データのみを転送できます。

詳しくは、[転送元 - Salesforce](/docs/data-source-salesforce)を参照ください。

#### 転送先BigQueryのカラム設定でデータ型にJSONを指定可能に

転送先BigQueryで、出力オプションのカラム設定でデータ型にJSONを指定できるようになりました。

#### 転送先Salesforceでバッチサイズを指定できるように

転送先Salesforceで、1回のAPIコールあたりのレコード数（バッチサイズ）を指定できるようになりました。
Salesforce側のApex Triggerなどで[ガバナ制限](https://developer.salesforce.com/docs/atlas.ja-jp.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apexgov.htm)に抵触する場合に調整が可能です。

### データマート

#### 品質チェック機能で複合カラムの一意性チェックが可能に

データマートBigQueryの品質チェック機能にて、複合カラムの一意性チェックが可能になりました。
複数カラムの組み合わせに重複がないかチェックができます。

詳しくは、[データマート - Google BigQuery](/docs/datamart-bigquery)を参照ください。

#### データマートジョブ実行時に処理対象期間の上書き設定が可能に

書き込みモードが「増分更新」のデータマートジョブ実行時に、データマート定義の処理対象期間を上書きできるようになりました。
過去の期間のデータ修正が必要になった場合などにご活用いただけます。

### その他

#### TROCCOのトップページ・ログインページからお知らせを確認できるように

TROCCOのトップページ・ログインページから、[ヘルプセンターのお知らせ](https://help.trocco.io/hc/ja/categories/4772466079262-%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B)を確認できるようになりました。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - Google Drive
- 転送元 - Google Drive
- 転送先 - Google Drive
- 転送元 - Backlog

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

#### 接続情報APIでMongoDBの対応プロパティを拡充

接続情報APIにて、MongoDBの読み込み設定タグの設定に対応しました。

## 2026-03-02

### 転送設定

#### 転送設定一覧で転送モードによる絞り込みが可能に

DWH系コネクタを転送先に選択した場合に、転送モード（追記・更新・洗い替え）による絞り込みが可能になりました。

#### 転送元Hubspotでcallオブジェクトを取得できるように

転送元Hubspotでcallオブジェクトが取得可能になりました。
担当者ごとのコール数・通話時間・架電頻度などの可視化に利用できます。

詳しくは、[転送元 - HubSpot](/docs/data-source-hubspot)を参照ください。

### データマート

#### 品質チェック機能をリリース

データの一意性やNULL混入を自動で検証し、分析結果の不整合を未然に防げる**品質チェック機能**をリリースしました。
現時点ではBigQueryのみ対応しており、他のDWHにも今後拡充予定です。

詳しくは、以下を参照ください。
- 機能紹介：[データチェック｜TROCCO(トロッコ)](https://primenumber.com/trocco/features/datacheck)
- Docs：[データマート - Google BigQuery](/docs/datamart-bigquery)

### 運用支援

#### 通知先HTTPでURLクエリパラメータを指定できるように

通知先HTTPでURLクエリパラメータを指定できるようになりました。
APIキーなどの認証情報をマスキングしながらURLに含めることが可能になりました。

詳しくは、[通知設定について](/docs/notification)を参照ください。

### コネクタAPIアップデート

#### 転送先Amazon S3

転送時に使用するAWS SDKのバージョンを、v1から**v2**へアップデートしました。
新バージョンについては、[AWS SDK for Java 2.x](https://docs.aws.amazon.com/ja_jp/sdk-for-java/latest/developer-guide/home.html)を参照ください。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - MongoDB
- 転送元 - MongoDB

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

## 2026-02-24

### データマート

#### データマートBigQueryに増分更新・SCD Type 2モードを追加

データマートBigQueryで、書き込みモードに増分更新とSCD Type 2を追加しました。
時系列ごとの統計値を格納する場合や、データ更新履歴をテーブルに保持して多様な分析を実施したい場合などにご検討ください。
詳しくは、[データマート - Google BigQuery](/docs/datamart-bigquery)を参照ください。

また、本機能のリリースに伴い、データマートBigQueryのUIもリニューアルされています。
変更点の詳細は[BigQueryデータマート機能のアップデートに伴う画面変更について – TROCCOヘルプセンター](https://help.trocco.io/hc/ja/articles/5159434690846)を参照ください。

### TROCCO API

#### 接続情報APIの対応コネクターが拡充

接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - Backlog

対象となったAPIエンドポイントは以下のとおりです。

- 接続情報
  - [接続情報一覧取得](/apidocs/get-connection-configurations)
  - [接続情報作成](/apidocs/post-connection-configuration)
  - [接続情報取得](/apidocs/get-connection-configuration)
  - [接続情報更新](/apidocs/patch-connection-configuration)
  - [接続情報削除](/apidocs/delete-connection-configuration)

## 2026-02-16

### 転送設定

#### 転送先Databricksの出力オプションが利用可能に

転送先Databricksで出力オプションを設定可能になりました。

### データマート

#### データマートBigQueryのジョブ詳細画面の構成を変更

データマートBigQueryのみ、データマートジョブ詳細画面の各種項目の構成を変更しました。

### dbt連携

#### dbtバージョン1.7の新規設定を停止

dbt Core バージョン1.7について、公式よりサポートが終了したため、新規設定を停止しました。
今後のスケジュールについては[dbt連携機能 新バージョン対応と旧バージョン(v1.7)サポート終了のお知らせ（2026年2月中旬予定） – TROCCOヘルプセンター](https://help.trocco.io/hc/ja/articles/5149921395742)を参照ください。

### 接続情報

#### BigQueryのWorkload Identity Federation認証の方式を改善

接続情報BigQueryで利用できるWorkload Identity Federation認証の方式を改善し、外部IDの発行に対応しました。
詳しくは[接続情報 - Google BigQuery](/docs/connection-configuration-bigquery)を参照ください。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象として、以下が追加されました。

- 転送先 - Hubspot

対象となったAPIエンドポイントは以下のとおりです。

- [転送設定一覧取得](/apidocs/get-job-definitions)
- [転送設定作成](/apidocs/post-job-definition)
- [転送設定詳細取得](/apidocs/get-job-definition)
- [転送設定更新](/apidocs/patch-job-definition)
- [転送設定削除](/apidocs/delete-job-definition)

## 2026-02-09

### データマート

#### データマートBigQueryの詳細画面の構成を変更

データマートBigQueryのみ、データマート定義詳細画面の各種項目の構成を変更しました。

### 接続情報

#### BigQueryでWorkload Identity Federation認証を利用可能に

接続情報BigQueryでWorkload Identity Federation認証が利用可能になりました。
詳しくは[接続情報 - Google BigQuery](/docs/connection-configuration-bigquery)を参照ください。

#### MongoDBで読み込み設定タグの指定が可能に

接続情報MongoDBで読み込み設定タグの指定が可能になりました。
詳しくは[接続情報 - MongoDB](/docs/connection-configuration-mongodb)を参照ください。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象として、以下が追加されました。

- 転送先 - PostgreSQL
- 転送先 - MySQL

対象となったAPIエンドポイントは以下のとおりです。

- [転送設定一覧取得](/apidocs/get-job-definitions)
- [転送設定作成](/apidocs/post-job-definition)
- [転送設定詳細取得](/apidocs/get-job-definition)
- [転送設定更新](/apidocs/patch-job-definition)
- [転送設定削除](/apidocs/delete-job-definition)

## 2026-02-02

### データマート

#### データマートRedshiftのログ出力を改善

データマートRedshiftの「全件洗い替え」モードにて、TRUNCATEクエリがログに出力されるようになりました。

### dbt連携

#### dbtバージョン1.11に対応

dbt Core v1.11を指定できるようになりました。
dbtバージョンは、[dbt Gitリポジトリ](/docs/dbt-git-repository)より選択できます。

### ワークフロー

#### ワークフロー定義詳細画面にスケジュールと通知設定のタブを追加

ワークフロー定義詳細画面で、スケジュールと通知設定のタブを追加し、通知設定やデータマートとUIを統一しました。

### 接続情報

#### SAP S/4HANA ODataでSSL通信にCA証明書を設定可能に

SAP S/4HANA ODataの接続情報にて、独自のCA証明書を設定可能になりました。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象として、以下が追加されました。

- 転送先 - kintone

対象となったAPIエンドポイントは以下のとおりです。

- [転送設定一覧取得](/apidocs/get-job-definitions)
- [転送設定作成](/apidocs/post-job-definition)
- [転送設定詳細取得](/apidocs/get-job-definition)
- [転送設定更新](/apidocs/patch-job-definition)
- [転送設定削除](/apidocs/delete-job-definition)

## 2026-01-26

### 転送設定

#### 転送元Amazon Adsを追加

転送元Amazon Adsを追加しました。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

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

## 2026-01-19

### 転送設定

#### 転送先Microsoft Advertising カスタマーマッチを追加

転送先Microsoft Advertising カスタマーマッチを追加しました。

#### 転送元Notionで取得データの絞り込みに指定できるパラメータが拡充

転送元Notionで取得対象に「ワークスペース内のページ・データベース一覧」を選択した場合に、ページ・データベースでのフィルターとページサイズの指定が可能になりました。

#### 転送元スマレジで取得データの対象期間に指定できるパラメータが拡充

転送元スマレジで取得対象に「取引一覧」を選択した場合に、日付・時刻の範囲に「更新日時」を選択できるようになりました。

## 2026-01-13

### 転送設定

#### 転送元スマレジの取得対象に商品取扱店舗一覧を追加

転送元スマレジの取得対象に商品取扱店舗一覧を追加しました。
詳しくは、[転送元 - スマレジ](/docs/data-source-smaregi)を参照ください。

#### 転送先BigQueryでカラムの説明とポリシータグの保持機能を追加

転送先BigQueryで、REPLACEモード実行時にカラムの説明とポリシータグを保持する機能を追加しました。

### CDCデータ転送

#### 転送元がBigQueryの場合にテーブル単位で転送の例外処理・スキップが可能に

転送元がBigQueryの場合、テーブル単位のステータス管理が可能になりました。

これまでは、特定のテーブルでエラーが発生した場合、ジョブ全体がエラーになっていました。
今回のリリースにより、特定のテーブルでエラーが発生した場合、そのテーブルだけがエラー状態になり、他のテーブルは引き続き正常に転送されます。
また、同じテーブルで連続してエラーが発生した場合、設定に基づいて自動的に対象テーブルの転送はスキップされます。

詳しくは、[CDCデータ転送 - 転送先 - Google BigQuery](https://documents.trocco.io/docs/cdc-data-destination-bigquery#同期対象のテーブル例外について)を参照ください。

#### 「カラムのみ自動追従」の場合にテーブル追加は自動で行われるように

CDCデータ転送の「カラムのみ自動追従」モードで、新規テーブルは承認を経ず自動的に転送設定に追加されるようになりました。
新規テーブルは転送対象外の状態で追加されます。

### 運用支援

#### 通知先HTTPをリリース

これまで、通知先はSlackとメールのみでしたが、HTTPリクエストによる通知機能をサポートしました。
詳しくは、[通知設定について](/docs/notification)を参照ください。

## 2026-01-05

### 転送設定

#### 転送元TikTok Adsでオーディエンス属性による絞り込みができるように

転送元TikTok Adsで、オーディエンス属性による取得データの絞り込みが可能になりました。
詳しくは、[転送元 - TikTok Ads](data-source-tiktok-ads)を参照ください。

## 2025-12-22

### カスタムコネクタ

#### カスタムコネクタの操作を監査ログの記録対象に

カスタムコネクタ関連の操作が監査ログに記録されるようになりました。
詳しくは、[監査ログ機能](/docs/about-audit-log)を参照ください。

### 接続情報

#### 接続情報ShopifyでOAuth2.0 Client Credentials認証をサポート

接続情報ShopifyでOAuth2.0 Client Credentials認証をサポートしました。
2026年1月1日より、Shopify管理画面でのカスタムアプリ作成ができなくなるため、接続情報を新規作成する場合はOAuth2.0 Client Credentials認証の利用を推奨します。

詳しくは[接続情報 - Shopify](/docs/connection-configuration-shopify-graphql)を参照ください。

### TROCCO API

#### 転送設定・接続情報APIの対応コネクターが拡充

転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - Databricks
- 転送元 - Databricks
- 転送先 - Databricks

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

### コネクタAPIアップデート

#### 転送元Amazon S3

転送時に使用するAWS SDKのバージョンを、v1から**v2**へアップデートしました。
新バージョンについては、[AWS SDK for Java 2.x](https://docs.aws.amazon.com/ja_jp/sdk-for-java/latest/developer-guide/home.html)を参照ください。

## 2025-12-15

### カスタムコネクタ

#### 転送先カスタムコネクタをリリース

これまで転送元のみ対応していたカスタムコネクタが、転送先に対応しました。
TROCCOでコネクタの用意がないサービスに対してもデータを転送できます。

詳しくは、[カスタムコネクタについて](/docs/about-custom-connector)を参照ください。

また、リリースにあわせて「Connector Builder」の呼称を廃止し、カスタムコネクタに統一しました。

## 2025-12-01

### 転送設定

#### 転送元LINE WORKSを追加

転送元LINE WORKSを追加しました。
詳しくは、以下のドキュメントを参照ください。

* [接続情報 - LINE WORKS](/docs/connection-configuration-line-work)
* [転送元 - LINE WORKS](/docs/data-source-line-work)

#### 転送元MixpanelでSegmentation Expressionsによる絞り込みが可能に

転送元Mixpanelで取得対象に「Profiles / Engage」を選択した場合、[Segmentation Expressions](https://developer.mixpanel.com/reference/segmentation-expressions)による取得対象データの絞り込みが可能になりました。

#### 転送元TROCCOのデータカタログ転送オプションを削除

転送元TROCCOの転送対象から、データカタログのオプションを削除しました。
今後新たにデータカタログのご契約を希望される方は、[COMETAについて](/cometa/docs/about-data-catalog-v2)を参照ください。

### TROCCO API

#### データマートAPIおよびワークフローAPIで取得できる項目の拡充

データマートAPIおよびワークフローAPIで取得できる項目を拡充し、リソースグループIDやラベル設定、スケジュール設定、通知設定などを取得できるようになりました。
対象となったAPIエンドポイントは以下のとおりです。

- [データマート定義一覧取得](/apidocs/get-datamart-definitions)
- [ワークフロー一覧取得](/apidocs/get-pipeline-definitions)

## 2025-11-25

### UI・UX

#### 転送設定一覧で環境グループ・環境で絞り込めるように

転送設定一覧で、転送設定を環境グループ・環境で絞り込めるようになりました。

#### ワークフロー定義一覧で環境グループ・環境で絞り込めるように

ワークフロー定義一覧で、ワークフロー定義を環境グループ・環境で絞り込めるようになりました。

#### データマート定義のスケジュール設定と通知設定のUIを転送設定と統一

データマート定義のスケジュール設定と通知設定について、タブを表示し専用ページを設けました。
また、通知のテスト実行が可能になりました。

#### CDC設定保存時に確認ダイアログが表示されるように

CDC設定を保存するとただちに全件転送が開始されるため、転送元DBの負荷が一時的に高まる可能性があります。
保存前に確認できるよう、ダイアログを表示するようにしました。

### TROCCO API

#### ワークフローAPIがDatabricksデータチェックに対応

ワークフローAPIがDatabricksデータチェックに対応しました。
対象となったAPIエンドポイントは以下のとおりです。

- [ワークフロー作成](/trocco-api/apidocs/post-pipeline-definition)
- [ワークフロー詳細取得](/trocco-api/apidocs/get-pipeline-definition)
- [ワークフロー更新](/trocco-api/apidocs/patch-pipeline-definition)

### コネクタAPIアップデート

#### 転送元Amazon Aurora MySQL・Amazon DynamoDB

転送時に使用するAWS SDKのバージョンを、v1から**v2**へアップデートしました。
新バージョンについては、[AWS SDK for Java 2.x](https://docs.aws.amazon.com/ja_jp/sdk-for-java/latest/developer-guide/home.html)を参照ください。

## 2025-11-17

### 転送設定

#### 転送元LINE広告のダブルクォートのエスケープ処理に関する仕様を変更

<!-- textlint-disable -->

転送元LINE広告にて、データ内にダブルクォート（"）が含まれる場合の処理仕様が変更されました。
連携データ内にダブルクォートが含まれている場合、ダブルクォート2つ（""）でエスケープ処理が行われます。

<!-- textlint-enable -->

詳しくは、以下のお知らせを参照ください。
[LINE広告コネクタの仕様変更に関するお知らせ – TROCCOヘルプセンター](https://help.trocco.io/hc/ja/articles/5018462767902-LINE%E5%BA%83%E5%91%8A%E3%82%B3%E3%83%8D%E3%82%AF%E3%82%BF%E3%81%AE%E4%BB%95%E6%A7%98%E5%A4%89%E6%9B%B4%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B-2025%E5%B9%B411%E6%9C%8813%E6%97%A5%E4%BA%88%E5%AE%9A)

#### 転送元Microsoft SharePointを追加

転送元Microsoft SharePointを追加しました。
詳しくは、以下のドキュメントを参照ください。

* [接続情報 - Microsoft SharePoint](/docs/connection-configuration-microsoft-sharepoint)
* [転送元 - Microsoft SharePoint](/docs/data-source-microsoft-sharepoint)

#### 転送元マネーフォワード クラウド経費を追加

転送元マネーフォワード クラウド経費を追加しました。
詳しくは、以下のドキュメントを参照ください。

* [接続情報 - マネーフォワード クラウド経費](/docs/connection-configuration-money-forward-cloud-expense)
* [転送元 - マネーフォワード クラウド経費](/docs/data-source-money-forward-cloud-expense)

#### 転送元KING OF TIMEを追加

転送元KING OF TIMEを追加しました。
従業員情報や勤怠情報を連携し、BIツールなどによる勤務状況の可視化に利用できます。

#### 転送元Yahoo!ディスプレイ広告(運用型)で削除済みの広告を取得できるように

転送元Yahoo!ディスプレイ広告(運用型)で取得方法を「レポート取得」とした場合に、削除済みの広告を取得できるオプションを追加しました。

### CDCデータ転送

#### スキーマ変更の差分表示機能を改善

変更前後のスキーマを左右で並べる「並列表示」タブを、変更後のスキーマ全体を表示する「全体表示」タブに置き換えました。
スキーマ全体を確認したい場合に便利に利用できます。

また、差分のみを表示する「差分表示」タブでは、差分がない領域を折りたたみ、視認性を向上させました。

### ワークフロー

#### Databricksデータチェックタスクを追加

データチェックタスクとしてDatabricksデータチェックを追加しました。

#### カスタム変数ループ実行がDatabricksに対応

カスタム変数ループ実行で、Databricksのクエリ結果をカスタム変数に展開し、ループ実行できるようになりました。

### TROCCO API

#### ワークフローAPIがDatabricksのクエリ結果によるカスタム変数ループ実行に対応

ワークフローAPIがDatabricksのクエリ結果によるカスタム変数ループ実行に対応しました。
対象となったAPIエンドポイントは以下のとおりです。

- [ワークフロー作成](/trocco-api/apidocs/post-pipeline-definition)
- [ワークフロー詳細取得](/trocco-api/apidocs/get-pipeline-definition)
- [ワークフロー更新](/trocco-api/apidocs/patch-pipeline-definition)

### コネクタAPIアップデート

#### 転送元Amazon CloudWatch Logs・AWS Cost Explorer

転送時に使用するAWS SDKのバージョンを、v1から**v2**へアップデートしました。
新バージョンについては、[AWS SDK for Java 2.x](https://docs.aws.amazon.com/ja_jp/sdk-for-java/latest/developer-guide/home.html)を参照ください。

## 2025-11-10

### 転送設定

#### 転送元Adobe Marketo Engageで転送対象のカラムを指定できるように

転送元Adobe Marketo Engageで、ターゲットに「リード」または「スタティックリスト別リード」を選択した場合に、転送対象のカラムを指定できるようになりました。

### UI・UX

#### データマート定義一覧画面の絞り込み機能が強化

データマート定義一覧画面で、サービスによる絞り込みができるようになりました。
また、新たに実行したジョブに対しては、以下の項目でも絞り込みが可能になりました。

* サービスにBigQueryを指定した場合：ジョブID
* サービスにSnowflakeを指定した場合：クエリID

#### CDCデータ転送でジョブ実行中またはスケジュール実行がオンの転送設定もカラム設定を確認できるように

CDCデータ転送にて、ジョブ実行中またはスケジュール実行がオンの場合でも、カラム設定を確認できるようになりました。

### TROCCO API

#### 環境APIがメモ機能に対応

環境APIがメモ機能に対応しました。
対象となったAPIエンドポイントは以下のとおりです。

- [環境一覧取得](/trocco-api/apidocs/get-environments)
- [環境作成](/trocco-api/apidocs/post-environment)
- [環境詳細取得](/trocco-api/apidocs/get-environment)
- [環境更新](/trocco-api/apidocs/patch-environment)

## 2025-11-04

### 転送設定

#### 転送元Zoomを追加

転送元Zoomを追加しました。
ウェビナー参加者のデータなどを分析し、マーケティング施策の評価や改善に繋げられます。

#### 転送元Mixpanelを追加

転送元Mixpanelを追加しました。
アプリケーションのユーザー情報や行動ログをDWHに連携し、ファネル分析やLTV分析に役立てられます。

#### 転送元makeshopを追加

転送元makeshopを追加しました。
BIツールと連携し、在庫状況の可視化や商品の売上分析に活用できます。

#### 転送元Zoho Recruitを追加

転送元Zoho Recruitを追加しました。
タレントプールの分析や選考フローの可視化に活用できます。

#### 転送元Zendesk Chatを追加

転送元Zendesk Chatを追加しました。
エージェントの稼働状況や対応内容の分析・可視化に繋げられます。

#### 転送元Db2 for LUWで差分転送ができるように

転送元Db2 for LUWで差分転送をサポートし、前回転送時からの増分データのみ転送できるようになりました。

#### 転送元HTTP・HTTPSでルートCA証明書を設定可能に

転送元HTTP・HTTPSでHTTPS接続時に使用するルートCA証明書を設定できるようになりました。
TROCCOにインストールされていないルートCA証明書によるSSL認証が必要な場合にご利用ください。

### データマート

#### データマートBigQueryでクエリのサイズを事前確認できるように

データマートBigQueryで、記述したクエリを実行した際のスキャン量を確認できるようになりました。
![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-10-31-18-32-37.png)

### 運用支援

#### 環境グループ・環境にメモを追加できるように

環境管理機能で環境グループ・環境にメモを追加できるようになりました。

### TROCCO API

#### 環境グループAPIがメモ機能に対応

環境グループAPIがメモ機能に対応しました。
対象となったAPIエンドポイントは以下のとおりです。

- [環境グループ一覧取得](/trocco-api/apidocs/get-environment-groups)
- [環境グループ作成](/trocco-api/apidocs/post-environment-group)
- [環境グループ詳細取得](/trocco-api/apidocs/get-environment-group)
- [環境グループ更新](/trocco-api/apidocs/patch-environment-group)

## 2025-10-27

### 転送設定

#### 転送元Microsoft Dynamics 365 CRMを追加

転送元Microsoft Dynamics 365 CRMを追加しました。
詳しくは[転送元 - Microsoft Dynamics 365 CRM](/docs/data-source-microsoft-dynamics-crm)を参照ください。

#### 転送先TikTok Ads カスタムオーディエンスを追加

転送先TikTok Ads カスタムオーディエンスを追加しました。
詳しくは[転送先 - TikTok Ads カスタムオーディエンス](/docs/data-destination-tiktok-ads-custom-audience)を参照ください。

#### 転送元マネーフォワード クラウド連結会計を追加

転送元マネーフォワード クラウド連結会計を追加しました。
連結BS・PLやキャッシュフローなどの会計データを他の会計ソフトやBIツールに連携できます。

#### 転送元LINE広告で削除済みの広告データを取得できるように

転送元LINE広告でダウンロード種別にパフォーマンスレポートを選択した場合に、削除済みの広告データをレポートに含めるか選択できるようになりました。

#### 転送元Facebookリード広告で取得できるフォームのデータが拡大

転送元Facebookリード広告で、以下のデータが取得できるようになりました。

- privacy_policy_url
- legal_content
- context_card

### TROCCO API

#### 環境管理機能のAPIを追加

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

## 2025-10-20

### 転送設定

#### 転送元Vercelを追加

転送元Vercelを追加しました。
デプロイ状況の可視化などに利用できます。

### 転送元Tableau CRM Analyticsの名称変更

転送元Tableau CRM Analyticsの名称を**転送元CRM Analytics（旧 Tableau CRM）**に変更しました。

### CDCデータ転送

#### ダッシュボードからCDCデータ転送サマリーを閲覧できるように

TROCCOのダッシュボード画面から、CDCデータ転送の処理イベント数や日次イベント推移を確認できるようになりました。

### TROCCO API

#### データマートDatabricksに対応

データマートDatabricksに関する情報の取得・操作が可能になりました。
対象となったAPIエンドポイントは以下のとおりです。

- [データマート定義作成](/trocco-api/apidocs/post-datamart-definition)
- [データマート定義詳細取得](/trocco-api/apidocs/get-datamart-definition)
- [データマート定義更新](/trocco-api/apidocs/patch-datamart-definition)
- [ワークフロー作成](/trocco-api/apidocs/post-pipeline-definition)
- [ワークフロー詳細取得](/trocco-api/apidocs/get-pipeline-definition)
- [ワークフロー更新](/trocco-api/apidocs/patch-pipeline-definition)

## 2025-10-14

### お知らせ

#### 接続IPアドレスを追加

以下ページでお知らせしておりましたTROCCOの接続IPアドレス追加を実施しました。
[【日程確定】TROCCO 接続IPアドレス追加のお知らせ（2025年10月8日予定） – TROCCOヘルプセンター](https://help.trocco.io/hc/ja/articles/4931300852382--%E6%97%A5%E7%A8%8B%E7%A2%BA%E5%AE%9A-TROCCO-%E6%8E%A5%E7%B6%9AIP%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%E8%BF%BD%E5%8A%A0%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B-2025%E5%B9%B410%E6%9C%888%E6%97%A5%E4%BA%88%E5%AE%9A)

### Self-Hosted Runner

#### Self-Hosted Runnerの環境変数に`TROCCO_ONESHOT`と`HEALTH_CHECK_PORT`を追加

Self-Hosted Runnerの起動時に設定可能な環境変数として、`TROCCO_ONESHOT`と`HEALTH_CHECK_PORT`を追加しました。
詳しくは[Self-Hosted Runner](/docs/self-hosted-runner#2-runnerの起動)を参照ください。

### 転送設定

#### 転送元PayPalを追加

転送元PayPalを追加しました。
取引や決済情報などのモニタリングに役立てられます。

### CDCデータ転送

#### 転送元PostgreSQLに対応

CDCデータ転送にて、転送元にPostgreSQLを利用できるようになりました。
詳しくは[CDCデータ転送 - 転送元 - PostgreSQL](cdc-data-source-postgresql)を参照ください。

### dbt連携

#### dbtバージョン1.10に対応

dbt Core v1.10を指定できるようになりました。
dbtバージョンは、[dbt Gitリポジトリ](/docs/dbt-git-repository)より選択できます。

### ワークフロー

#### ワークフロー編集画面にコメントを挿入できるように

ワークフロー編集画面でコメントを挿入できるようになりました。
「コメント追加」をクリックするか、キーボードの `c` 押下で挿入できます。

### 接続情報

#### Oracle Database接続情報でホスト・ポート名による接続時にもウォレットファイルを利用できるように

Oracle Database接続情報で接続方法に「ホスト名・ポート番号を指定する」を選択した場合でも、ウォレットファイルを利用できるようになりました。

### TROCCO API

#### ワークフローAPIが条件分岐タスクに対応

ワークフローAPIで条件分岐タスクに関する情報の取得・操作が可能になりました。
対象となったAPIエンドポイントは以下のとおりです。

- [ワークフロー作成](/trocco-api/apidocs/post-pipeline-definition)
- [ワークフロー詳細取得](/trocco-api/apidocs/get-pipeline-definition)
- [ワークフロー更新](/trocco-api/apidocs/patch-pipeline-definition)

## 2025-10-06

### 転送設定

#### 転送元Db2 for LUWを追加

転送元Db2 for LUWを追加しました。
詳しくは、以下のドキュメントを参照ください。

* [接続情報 - Db2 for LUW](/docs/connection-configuration-db2-for-luw)
* [転送元 - Db2 for LUW](/docs/data-source-db2-for-luw)

#### 転送元Qiitaを追加

転送元Qiitaを追加しました。
記事一覧やコメント、いいね数などを連携し、記事の分析に利用できます。

#### 転送元Shopifyでfulfillment_line_items・refund_line_itemsの取得に対応

転送元Shopifyで`fulfillment_line_items`と`refund_line_items`の取得に対応しました。
なお、本ターゲットの取得はBulk operationではなく通常のGraphQLクエリによるもので、取得時間が長くなる可能性があります。

詳しくは[転送元 - Shopify](/docs/data-source-shopify-graphql)を参照ください。

#### 転送元Oracle Databaseで接続先データベースの指定にサービス名が利用できるように

転送元Oracle Databaseにて、「接続タイプ」の項目で「サービス名」を選択することで、サービス名で接続先データベースを指定できるようになりました。

### データマート

#### データマートSnowflakeでクエリのタイムアウト時間を指定できるように

データマートSnowflakeにて、クエリのタイムアウト時間を指定できる「ステートメントタイムアウト」の項目を追加しました。

## 2025-09-29

### CDCデータ転送

#### 追従設定が「自動追従しない」でもカラムのスキーマ変更を通知できるように

追加されたテーブル・カラムの追従設定を「自動追従しない」に設定した場合でも、転送元のカラムのスキーマ変更を通知できるようになりました。

### コネクタAPIアップデート

#### 転送元Hubspot・転送先Hubspot

転送時に使用するhubspot-api-clientのバージョンを、v17から**v20**へアップデートしました。
新バージョンについては、[Release v20.0.0 · HubSpot/hubspot-api-ruby](https://github.com/HubSpot/hubspot-api-ruby/releases/tag/v20.0.0)を参照ください。

## 2025-09-22

### 接続情報

#### Microsoft SQL Server 2022に対応

Microsoft SQL Server 2022に対応しました。
接続情報Microsoft SQL Serverで、JDBCドライバーにバージョン12.6を選択することで利用可能です。

### 転送設定

#### 転送元Bill Oneを追加

転送元Bill Oneを追加しました。
請求書情報の会計システムへの自動連携や、取引先情報のマスタ同期に活用できます。

#### 転送元ClickUpを追加

転送元ClickUpを追加しました。
タスクのデータを他システムに連携し、進捗や予実の分析に役立てられます。

#### 転送元Shopifyで、ターゲットがmetafieldsの場合にオーナーの作成日時で取得データを絞り込めるように

転送元Shopifyで、ターゲットに`metafields`を指定した場合に、オーナーの作成日時で取得データを絞り込めるようになりました。

### データマート

#### データマートDatabricks

データマートDatabricksを追加しました。
詳しくは、[データマート - Databricks](/docs/datamart-databricks)を参照ください。

### ワークフロー

#### 条件分岐タスクで環境を条件に利用できるように

条件分岐タスクでワークフローの環境を分岐の条件に利用できるようになりました。

### UI・UX

#### 接続情報が利用されているリソースが確認できるように

接続情報一覧画面で、対象の接続情報が利用されているリソースを確認できるようになりました。
![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-09-18-18-18-15.png)

### コネクタAPIアップデート

#### 転送元Yahoo!ディスプレイ広告 (運用型)

転送時に使用するYahoo!広告 APIのバージョンを、v15から**v17**へアップデートしました。
新バージョンについては、[Yahoo!広告 ディスプレイ広告 API v17 リリースノート │ Yahoo!広告 API](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/yda-v17.html)を参照ください。

## 2025-09-16

### 転送設定

#### JSONから展開したカラムもカラム名・データ型の一括変換ができるように

「JSONカラムを展開」を利用してJSONから展開したカラムも、カラム名・データ型の一括変換が可能になりました。

#### 転送先SalesforceがOAuth認証に対応

転送先Salesforceで、認証方式がOAuth認証の接続情報を利用可能になりました。

### CDCデータ転送

#### 転送元のスキーマ変更を検知し、通知や転送先への自動追従が可能に

カラムやテーブルの追加といった転送元のスキーマ変更を検知して、転送先のスキーマも自動追従させることが可能になりました。
変更を通知し、追従は手動で行うことも可能です。

詳しくは[CDCスキーマ自動追従](/docs/cdc-schema-auto-prepagation)を参照ください。

### 運用支援

#### 通知のメッセージでカスタム変数を使用できるように

通知のメッセージでカスタム変数を使用できるようになりました。
IDなどを埋め込むことで、メッセージだけで通知の概要を把握できるようになります。

### UI・UX

#### 接続情報一覧画面で絞り込み・ソートが可能に

接続情報一覧画面で、転送設定一覧画面などと同様に絞り込みが可能になりました。
接続情報名やサービスなどでの絞り込みや、接続設定名によるソートができます。

#### データマート定義画面・ワークフロー定義画面でリソースグループの一括操作が可能に

データマート定義画面およびワークフロー定義画面の一括操作で、リソースグループの追加や削除が可能になりました。

### コネクタAPIアップデート

#### 転送元Yahoo!検索広告

転送時に使用するYahoo!広告 APIのバージョンを、v15から**v17**へアップデートしました。
新バージョンについては、[Yahoo!広告 検索広告 API v17 リリースノート │ Yahoo!広告 API](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/ysa-v17.html)を参照ください。

## 2025-09-08

### 新機能

#### 環境管理機能をリリース

TROCCOの各種設定（リソース）を開発環境・検証環境・本番環境などのいくつかの環境ごとに分けて管理できる環境管理機能をリリースしました。
この機能により、設定変更を事前に検証し、段階的にデプロイすることで、より安全な運用が可能になります。

詳しくは[環境管理機能](/docs/environment-management)を参照ください。

### お知らせ

#### パスワードの最低文字数を8文字から12文字に変更

パスワードを新規設定する際の最低文字数を8文字から12文字に変更しました。
本リリース前に12文字未満のパスワードが設定されたアカウントに影響はありません。

### 転送設定

#### 転送元BIZTELを追加

転送元BIZTELを追加しました。
通話履歴をCRMに連携したり、オペレーターの状況可視化による負荷分散に繋げられます。

#### 転送元Tiktok Adsで削除済みの広告データを取得できるように

転送元Tiktok Adsで以下のレポート種別を選択した場合に、削除済みの広告データをレポートに含めるか選択できるようになりました。

* campaign
* ad_group
* ad

#### 転送元Shopifyでfulfillmentsをターゲットとした場合のフィルター条件を追加

転送元Shopifyで`fulfillments`をターゲットとした場合に、更新日時で絞り込めるようになりました。

#### 転送元MongoDBでクエリにカスタム変数を埋め込めるように

転送元MongoDBでクエリにカスタム変数を埋め込めるようになりました。

#### 転送元Sansanで名刺や人物に付与したタグ情報が取得できるように

転送元Sansanで以下の項目を取得対象とした場合に、付与したタグ情報が取得されるようになりました。

* 名刺Set一覧(期間指定)
* 人物一覧

### コネクタAPIアップデート

#### Facebook関連コネクタ

下記で利用しているFacebook APIを、v21から**v23**へアップデートしました。

- 転送元Facebook Ad Insights
- 転送元Facebook Ad クリエイティブ
- 転送元Facebookリード広告
- 転送先Facebook コンバージョンAPI
- 転送先Facebook カスタムオーディエンス(β版)
- Facebook接続情報のOAuth認証

新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version23.0)を参照ください。

## 2025-09-01

### 転送設定

#### 転送元yamoryを追加

転送元yamoryを追加しました。
ホストの脆弱性情報の連携・可視化に役立てられます。

#### 転送元SendGridを追加

転送元SendGridを追加しました。
メールの配信状況や送信先の情報を連携し、施策の効果測定や配信の精度向上に活用できます。

#### 転送元Shopifyでクローズ済みチケットを取得できるように

転送元Shopifyでターゲットにfulfillment_ordersを指定した場合、クローズ済みチケットを取得するかを選択できるようになりました。

### CDCデータ転送

#### 転送先としてBigQueryが利用可能に

CDCデータ転送の転送先として、これまではAmazon S3 Icebergのみ対応していました。
今回、対応する転送先にBigQueryを追加しました。

詳しくは、[CDCデータ転送 - 転送先 - Google BigQuery](/docs/cdc-data-destination-bigquery)を参照ください。

### UI・UX

#### 転送設定一覧画面でリソースグループの一括操作が可能に

転送設定一覧画面で、リソースグループの付与や削除を一括操作できるようになりました。

## 2025-08-25

### ワークフロー

#### 条件分岐タスクが利用可能に

タスク結果に応じてワークフローの処理を分岐できる「条件分岐タスク」が利用できるようになりました。
柔軟なワークフローの構築や、ジョブ実行の最適化が可能です。

詳しくは、[条件分岐タスク](/docs/conditional-branch-task)を参照ください。

### 転送設定

#### 転送元SAP S/4HANA ODataで差分転送ができるように

転送元SAP S/4HANA ODataで差分転送をサポートし、前回転送時からの増分データのみ転送できるようになりました。

#### 転送元LOGILESSで注文日時や更新日時で受注伝票一覧の取得範囲を指定できるように

転送元LOGILESSで取得対象に「受注伝票一覧」を選択した際に、注文日時や更新日時を指定して取得範囲を絞り込めるようになりました。

### コネクタAPIアップデート

#### 転送元Criteo

転送時に使用するCriteo Marketing Solutions APIのバージョンを、2024-10から**2025-07**へアップデートしました。
新バージョンについては、[Criteo Marketing Solutions API](https://developers.criteo.com/marketing-solutions/docs/welcome-to-criteo#)を参照ください。

## 2025-08-18

### 転送設定

#### 転送元Shopifyの一部取得データの廃止

転送元Shopifyにて、以下のターゲットを対象に一部のデータ取得が廃止されました。

- `customers`
  - `company_contact_profiles`の取得が廃止されました
- `orders`
  - `purchasing_entity`の取得が廃止されました
- `draft_orders`
  - `purchasing_entity`の取得が廃止されました

詳しくは、[【リリース完了】Shopifyコネクタの仕様変更について（リレーションカラムの削除） – TROCCOヘルプセンター](https://help.trocco.io/hc/ja/articles/4897594376734)を参照ください。

### 転送元Shopifyでmetafieldsをターゲットとした場合のフィルター条件を追加

転送元Shopifyで`metafields`をターゲットとした場合に、以下の条件でフィルターできるようになりました。

- ネームスペース
- キー

詳しくは、[転送元 - Shopify](/docs/data-source-shopify-graphql)を参照ください。

### コネクタAPIアップデート

#### 転送先Google Ads カスタマーマッチ

転送時に使用するGoogle Ads APIのバージョンを、v18から**v20**へアップデートしました。
新バージョンについては、[Google Ads API v20 Reference - Google for Developers](https://developers.google.com/google-ads/api/reference/rpc/v20/overview#common)を参照ください。

## 2025-08-12

### 転送設定

#### 転送元TROCCOがワークフロータスクジョブのデータ転送に対応

転送元TROCCOでワークフロータスクジョブのデータを転送できるようになりました。

#### 転送元TROCCOで実行ログを出力できるように

以下の転送対象で、実行ログを出力するオプションを追加しました。

- 転送設定
- データマート定義
- ワークフロータスクジョブ

#### 転送元Zoho Peopleを追加

転送元Zoho Peopleを追加しました。
従業員の勤務データを連携し、業務の可視化に役立てられます。

#### 転送元チャネルトークを追加

転送元チャネルトークを追加しました。
チャットの各種データを連携し、問い合わせ対応の効率化などに繋げられます。

#### 転送元Backlogで「最近の更新」を取得できるように

転送元Backlogで、取得対象に「最近の更新」を選択できるようになりました。

### Connector Builder

#### カスタムコネクタと転送設定の連携を改善

カスタムコネクタと転送設定の連携を以下のように改善し、運用しやすくしました。

- カスタムコネクタの設定を変更すると、カスタムコネクタに紐づく転送設定のリビジョンが新たに作成されるようになりました
- カスタムコネクタ側でヘッダーやパラメータを追加・編集すると、転送設定にも自動で反映されるようになりました

### UI・UX

#### データマート定義一覧画面で一括操作が可能に

データマート定義一覧画面で、ラベルの付与やスケジュール設定、削除を一括操作できるようになりました。

#### 転送設定とデータマート定義の作成時にラベルの付与が可能に

これまで、ラベルは作成済みの転送設定・データマート定義にのみ付与が可能でした。
今回のリリースにより、作成時にラベルが付与できるようになりました。

## 2025-08-04

### 転送設定

#### 転送元Gainsight PXを追加

転送元Gainsight PXを追加しました。
アカウントごとの利用傾向やファネル分析など、プロダクトの利用状況の可視化に役立てられます。

#### 転送元HENNGE Access Controlを追加

転送元HENNGE Access Controlを追加しました。
SaaSのアカウント情報や端末の情報などを連携し、アカウント管理の効率化に繋げられます。

#### 転送元WordPressを追加

転送元WordPressを追加しました。
構築したサイトの構造把握や、ウェブサイトのアクセス分析に役立てられます。

#### 転送先Snowflakeで転送に対応したデータ型が拡充

転送先Snowflakeでは、転送設定STEP2の出力オプションにて、各カラムのデータ型をユーザー自身で指定できます。
今回、以下のデータ型を新たに指定できるようになりました。

- DATE
- DATETIME
- TIME
- TIMESTAMP
- TIMESTAMP_LTZ
- TIMESTAMP_NTZ
- TIMESTAMP_TZ

#### 転送先Google BigQueryで転送先のプロジェクトを指定できるように

これまで、転送先Google BigQueryの転送先プロジェクトは、接続情報で設定したプロジェクトで固定となっていました。
今回のリリースにより、接続情報で設定したアカウントで扱える任意のプロジェクトを指定できるようになりました。

#### 転送元TikTok Adsでapp_installを取得できるように

転送元TikTok Adsが`app_install`メトリクスの取得に対応しました。
詳しくは、[Docs | TikTok API for Business](https://business-api.tiktok.com/portal/docs?id=1751443967255553)を参照ください。

#### 転送設定の一括削除時に選択した転送設定の件数が表示されるように

一括操作で転送設定を一括削除する際、削除対象の転送設定の件数が表示されるようになりました。

### Connector Builder

#### エンドポイントのパスにパスパラメータを使用できるように

これまで、カスタムコネクタのエンドポイントのパスは固定値でしたが、パスパラメータを使って動的なパスにも対応しました。
パスに個別のIDを含める必要があるAPIなどでもカスタムコネクタを利用できるようになりました。

#### ページネーション設定時の「1リクエストの取得件数」が任意項目に

ページベースとオフセットベースのページネーションにおいて、「1リクエストの取得件数」の設定を任意に変更しました。
取得件数が固定されているAPIでも設定が可能になりました。

### コネクタAPIアップデート

#### 転送先Google Ads コンバージョン

転送時に使用するGoogle Ads APIのバージョンを、v18から**v20**へアップデートしました。
新バージョンについては、[Google Ads API v20 Reference - Google for Developers](https://developers.google.com/google-ads/api/reference/rpc/v20/overview#common)を参照ください。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタとして、以下のコネクターが追加されました。

- 転送先 - Amazon S3

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)
- [転送設定削除](/trocco-api/apidocs/delete-job-definition)

#### ユーザー作成APIでパスワードを自動生成できるように

[ユーザー作成](/trocco-api/apidocs/post-user)に、パスワードを自動生成するオプションを追加しました。

## 2025-07-28

### コネクタAPIアップデート

#### 転送元Google Ads

転送時に使用するGoogle Ads APIのバージョンを、v18から**v20**へアップデートしました。
新バージョンについては、[Google Ads API v20 Reference - Google for Developers](https://developers.google.com/google-ads/api/reference/rpc/v20/overview#common)を参照ください。

なお、APIのアップデートに伴い、一部のリソースタイプおよびカラムが廃止されます。詳しくは[Google Ads API バージョンv20対応に伴う設定変更のお願い](https://help.trocco.io/hc/ja/articles/4858951048990)を参照ください。

### 接続情報

#### Shopify接続情報（廃止予定）で選択できるアプリ種別から「プライベートアプリ」を削除

Shopify接続情報で選択できるアプリ種別から「プライベートアプリ」が削除され、「カスタムアプリ」のみ選択可能となりました。
すでにアプリ種別を「プライベートアプリ」で作成済みの接続情報については、引き続きご利用いただけます。

### 転送設定

#### 転送元Backlogで、登録日や更新日で課題一覧の取得範囲を指定できるように

転送元Backlogで取得対象に「課題一覧」を選択した際に、課題の登録日や更新日を指定して取得範囲を絞り込めるようになりました。

#### UI・UX

#### 転送設定一覧などで名称順の並び替えが可能に

以下の画面にて、名称順による並び替えができるようになりました。

- 転送設定一覧
- マネージド転送設定一覧
- データマート定義一覧
- ワークフロー定義一覧

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタとして、以下のコネクターが追加されました。

- 転送先 - Yahoo!広告 ディスプレイ広告 オーディエンスリスト

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)
- [転送設定削除](/trocco-api/apidocs/delete-job-definition)

## 2025-07-22

### 転送設定

#### 転送元LOGILESSを追加

転送元LOGILESSを追加しました。
商品の受注や在庫状況を分析・可視化し、EC物流の最適化に役立てられます。

#### 転送元ジョーシスを追加

転送元ジョーシスを追加しました。
メンバーや組織の情報、アプリケーションの利用状況などを可視化し、情シス業務の効率化に繋げられます。

#### 転送元Zoho Sheetを追加

転送元Zoho Sheetを追加しました。
各ワークブックのワークシートやレコードをDHWなどに連携できます。

#### 転送元Stripeで取得対象のデータを作成日時で指定できるように

転送元Stripeにて、作成日時を基準として取得データの範囲を指定できるようになりました。
なお、一部の取得対象データでは作成日時は指定できません。

#### 転送元MailChimpで取得対象のデータを送信日時で指定できるように

転送元MailChimpにて、取得対象が「Campaigns」または「Reports」の場合、送信日時を基準として取得データの範囲を指定できるようになりました。

#### 転送元SAP S/4HANA ODataでOData v4を指定できるように

転送元SAP S/4HANA ODataで、ODataバージョンを指定可能になりました。
これまではv2のみサポートしていましたが、今回のリリースによりv4も選択できるようになりました。

### データマート

#### データマート定義を正規表現で検索できるように

データマート定義名による検索に、正規表現が利用できるようになりました。

### ワークフロー

#### ワークフローを正規表現で検索できるように

ワークフロー名による検索に、正規表現が利用できるようになりました。

### Connector Builder

#### ページング設定で最大リクエスト数を指定できるように

ページング設定で「ページベース」または「オフセットベース」を指定し、終了判定方法に「最終ページを自動判定」を選択した際に、最大リクエスト数を指定できるようになりました。

### Self-Hosted Runner

#### 転送元SAP S/4HANA ODataをサポート

転送元SAP S/4HANA ODataをサポートしました。

### UX・UI

#### チーム一覧のチームを、表の項目で並び替えできるように

チーム一覧画面の並び順を、表のヘッダーをクリックすることで各項目基準で変更できるようになりました。

## 2025-07-14

### 転送設定

#### 転送元JUST.DBを追加

転送元JUST.DBを追加しました。
JUST.DB上のレコードを他のサービスに簡単に連携できます。

#### 転送元Shopifyで顧客のメールアドレスを取得できるように

転送元Shopifyでターゲットに「customers」を指定した場合、`defaultEmailAddress`を取得できるようになりました。
詳しくは、[Customer - GraphQL Admin](https://shopify.dev/docs/api/admin-graphql/2025-04/objects/Customer)を参照ください。

#### 転送元Backlogで課題一覧の取得対象とするプロジェクトIDを指定できるように

転送元Backlogで取得対象に「課題一覧」を選択した場合、取得対象のプロジェクトIDを指定できるようになりました。

### Self-Hosted Runner

#### 転送元Oracle Databaseをサポート

転送元Oracle Databaseをサポートしました。

### コネクタAPIアップデート

#### 転送元Shopify

転送時に使用する`shopify_api`gemのバージョンを、v14.8.0から**v14.10.0**へアップデートしました。
新バージョンについては、[shopify_api - RubyGems.org](https://rubygems.org/gems/shopify_api/versions/14.10.0)を参照ください。

## 2025-07-07

### Connector Builder

#### Connector Builderでカスタムコネクタの設定をAIが補完してくれるように

対象サービスのAPIドキュメントのURLを指定することで、カスタムコネクタの認証種別や認証種別・スキームなどの情報を、AIで自動補完できるようになりました。

#### Connector Builderで接続テストが可能に

カスタムコネクタ作成時、対象サービスとの接続テストができるようになりました。

### 転送設定

#### 転送元Facebook Ad クリエイティブでCTAに設定したリンク情報を取得可能に

転送元Facebook Adsクリエイティブにて、CTAに設定したリンク情報（`call_to_action_value.link`）を取得できるようになりました。

#### 転送先LINE広告 カスタムオーディエンスを追加

転送先LINE広告 カスタムオーディエンスを追加しました。
LINE広告での配信ターゲティングに利用する顧客データを連携できるようになりました。

#### 転送元Help Scoutを追加

転送元Help Scoutを追加しました。
問い合わせ情報を連携し、サポートの対応状況やパフォーマンス分析に利用できます。

#### 転送元Typeformを追加

転送元Typeformを追加しました。
フォームやアンケートで収集した情報を他サービスに連携できます。

#### 転送先SFTPがPrivateLinkに対応

転送先SFTPがPrivateLinkによる通信に対応しました。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタとして、以下のコネクターが追加されました。

- 転送先 - Google Ads カスタマーマッチ

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)
- [転送設定削除](/trocco-api/apidocs/delete-job-definition)

## 2025-06-30

### 転送設定

#### 転送先Google Ads カスタマーマッチを追加

転送先Google Ads カスタマーマッチを追加しました。
Googleサービス上の広告配信のターゲティングに利用する顧客データを連携できるようになりました。
詳しくは[転送先 - Google Ads カスタマーマッチ](/docs/data-destination-google-ads-customer-match)を参照ください。

#### 転送先Yahoo!広告 ディスプレイ広告 オーディエンスリストを追加

転送先Yahoo!広告 ディスプレイ広告 オーディエンスリストを追加しました。
Yahoo!サービス上の広告配信のターゲティングに利用する顧客データを連携できるようになりました。
詳しくは[転送先 - Yahoo!広告 ディスプレイ広告 オーディエンスリスト](/docs/data-destination-yahoo-display-ads-audience-list)を参照ください。

#### 転送元freee人事労務を追加

転送元freee人事労務を追加しました。
従業員の人事労務データを連携・可視化し、人事労務業務の効率化に役立てられます。

#### 転送元スマレジの取得対象に「スタッフ一覧」を追加

転送元スマレジの取得対象に「スタッフ一覧」を追加しました。
取得できるデータの詳細については[スマレジ・プラットフォームAPI POS仕様書](https://www1.smaregi.dev/apidoc/#operation/postStoresStoreIdTerminalsTerminalIdNotifications)を参照ください。

#### 転送元Microsoft AdvertisingでSearchQueryPerformanceReportを取得できるように

転送元Microsoft AdvertisingでSearchQueryPerformanceReportを取得できるようになりました。

### UI・UX

#### 項目で並び替えできる表を追加

以下の表の並び順を、表のヘッダーをクリックすることで各項目基準で変更できるようになりました。

- 通知先一覧
- リソースグループ一覧
- ラベル一覧
- チームのメンバー一覧

## 2025-06-23

### お知らせ

#### 一部プランでお支払い方法にクレジットカードを利用可能に

FreeプランからStarterプランへの変更時に、お支払い方法としてクレジットカードを利用できるようになりました。

### 転送設定

#### 転送元Calendlyを追加

転送元Calendlyを追加しました。
ミーティング予約や参加者のデータを連携し、ミーティングの所要時間分析や質の評価に役立てられます。

#### Connector BuilderがOAuth2.0に対応

Connector Builderでカスタムコネクターを追加する際に、認証種別にOAuth2.0を利用できるようになりました。
以下のグラントタイプに対応しています。

* 認可コード
* クライアントクレデンシャルズ

### TROCCO API

#### TROCCO API KEYにプレフィックスを追加

2025年6月18日以降に発行されたTROCCO API KEYにはセキュリティ強化のためプレフィックス（tra_）が付与されます。
プレフィックスが付与されていないTROCCO API KEYも引き続き問題なくご利用いただけます。

### Self-Hosted Runner

#### RegistrationTokenにプレフィックスを追加

2025年6月18日以降に発行されたRegistrationTokenにはセキュリティ強化のためプレフィックス（trr_）が付与されます。
プレフィックスが付与されていないRegistrationTokenも引き続き問題なくご利用いただけます。

## 2025-06-16

### 転送設定

#### データのプレビューをもとに推測してJSONカラムを展開できるように

これまで、JSONカラムを展開する場合は、展開したいJSONのキーごとにそれぞれカラムを定義する必要がありました。
今回のリリースにより、データのプレビューの情報から推測してJSONカラムを展開できるようになりました。

#### 転送元Zendesk Sellを追加

転送元Zendesk Sellを追加しました。
リードや受注、通話履歴などの情報を連携し、営業活動の効率化に役立てられます。

### UI・UX

#### プレビューで値がnullであることを明記し、空文字の場合と区別できるように

生成テーブルやクエリのプレビュー結果およびカスタム変数出力イメージにおいて、値がnullであることを明記し、空文字の場合と区別できるようになりました。

#### 処理時間画面のリソースグループを、表の項目で並び替えできるように

処理時間画面のリソースグループの並び順を、表のヘッダーをクリックすることで各項目基準で変更できるようになりました。

### その他

#### Snowflake JDBCドライバーのバージョン3.24.2を追加

Snowflake接続情報で選択できるJDBCドライバーのバージョンに`3.24.2`を追加しました。

## 2025-06-09

### 転送設定

#### 転送元Klaviyoを追加

転送元Klaviyoを追加しました。
マーケティングデータを分析し、KPIの追跡や施策の評価に役立てられます。

#### 転送元Kairos3 Marketingを追加

転送元Kairos3 Marketingを追加しました。
リード情報をBIツールなどに連携し、良質なリードの効率的なフォローやターゲティング精度向上に役立てられます。

#### 転送元Kairos3 Salesを追加

転送元Kairos3 Salesを追加しました。
顧客情報や案件情報を分析し、営業パイプラインや成約率の可視化などにご活用いただけます。

### UI・UX

#### 転送ジョブ詳細画面で、実行に利用した転送設定のリビジョンを確認できるように

転送ジョブ詳細画面で、ジョブの実行に利用した転送設定のリビジョンを確認できるようになりました。
リビジョンのリンクをクリックすると、転送設定の変更履歴にて対象リビジョンの詳細を確認できます。

### コネクタAPIアップデート

#### 転送元Google Ad Manager

転送時に使用するGoogle Ad Manager APIのバージョンを、 v202408から**v202502**へアップデートしました。
新バージョンについては、[Google Ad Manager API](https://developers.google.com/ad-manager/api/rel_notes#v202502)を参照ください。

#### 転送元Box

転送時に使用するBox Java SDKのバージョンを、v4.0.0から**v4.16.1**へアップデートしました。
新バージョンについては、[Box Java SDKのGitHubリポジトリ](https://github.com/box/box-java-sdk)を参照ください。

## 2025-06-02

### 転送設定

#### 転送元Snowflakeでクエリのプレビューができるように

転送元Snowflakeにて、クエリのプレビューが可能になりました。
クエリで取得対象となる転送データを事前に確認できるようになりました。

#### Shopify GraphQL APIを用いた転送元Shopifyを追加

Shopify REST Admin APIがレガシーAPIとなったことに伴い、 Shopify GraphQL APIを用いた転送元Shopifyをリリースしました。
詳しくは、[転送元 - Shopify](docs/data-source-shopify-graphql)を参照ください。

#### 転送元Airtableを追加

転送元Airtableを追加しました。
これにより、Airtable上のテーブルデータをTROCCOを通じて他のデータ基盤に連携できるようになりました。

#### 転送元Rollbarを追加

転送元Rollbarを追加しました。
エラーのデータを分析し、アプリケーションの安定性向上や問題解決の効率化にご活用いただけます。

#### 転送元Talentioを追加

転送元Talentioを追加しました。
人材管理データを分析し、採用活動や組織マネジメントにご活用いただけます。

## 2025-05-26

### お知らせ

#### 転送先Facebook オフラインコンバージョンを廃止

FacebookによるAPI提供の終了に伴い、2025年05月14日に[転送先 - Facebook オフラインコンバージョン](/docs/data-destination-facebook-offline-conversion)コネクターの提供を終了しました。

### 転送設定

#### 転送元スマレジを追加

転送元スマレジを追加しました。
スマレジ上のPOSデータを分析し、売上分析や在庫管理の効率化にご利用いただけます。

#### 転送元ラクローを追加

転送元ラクローを追加しました。
勤怠情報を分析し、給与計算やチームのパフォーマンス評価に役立てられます。

#### 転送元クラウドサインを追加

転送元クラウドサインを追加しました。
電子契約書のデータを活用し、契約状況の可視化に繋げられます。

#### 転送元SFTPがWindowsベースのSFTPサーバーに対応

転送元SFTPがWindowsベースのSFTPサーバーにも対応しました。

#### 転送元Amazon CloudWatch Logsにて柔軟なエラーハンドリングが可能に

転送元Amazon CloudWatch Logsにて、**指定のパスにファイルが存在しなかった場合に転送を続行するか**を選択できるようになりました。
転送設定STEP1の詳細設定にて選択できます。
詳しくは、[転送元 - Amazon CloudWatch Logs](/docs/data-source-cloudwatch-logs)を参照ください。

#### カラム定義のデータ型一括置換で対応するデータ型が拡充

転送設定のSTEP2 詳細設定で設定できるテンプレートETLについて、カラム定義のデータ型一括置換で対応するデータ型を拡充しました。
詳しくは、[テンプレートETL](/docs/template-etl)を参照ください。

### ワークフロー定義

#### ワークフローのカスタム変数ループ実行の内容を簡単に確認できるように

これまで、タスクに設定したカスタム変数ループ実行内容を確認するには、タスク編集画面を開く必要がありました。
今回のリリースにより、ワークフローのタスクをクリックすると表示されるポップアップにて、カスタム変数ループ実行の内容を確認できるようになりました。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタとして、以下のコネクターが追加されました。

- 転送元 - Yahoo!検索広告

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)

## 2025-05-19

### お知らせ

#### 転送設定STEP3の「テスト実行」機能を廃止

転送先Google BigQueryを利用している場合に、転送設定STEP3にて利用できたテスト実行機能を廃止しました。

### CDCデータ転送

#### CDCデータ転送のジョブ実行結果を通知できるように

CDCデータ転送におけるジョブに対して、実行結果の通知を設定できるようになりました。
通知先はSlackまたはメールを選択できます。

### 転送設定

#### 転送元Oktaを追加

転送元Oktaを追加しました。
ユーザー情報やアプリケーションの利用状況を分析し、セキュリティ管理やアクセス制御の最適化に繋げることができます。

#### 転送元Asanaを追加

転送元Asanaを追加しました。
タスクの進捗状況やプロジェクトの管理情報を分析し、チームの生産性向上やリソース配分の検討にご活用いただけます。

#### 転送元S3にて最終更新時間を基準とした差分転送ができるように

転送元S3にて、ファイルの最終更新時間を基準とした差分転送ができるようになりました。
これにより、差分転送の基準を最終パスまたは最終更新時間で選択できるようになりました。

#### 転送元Azure Blob Storageにて柔軟なエラーハンドリングが可能に

転送元Azure Blob Storageにて、**指定のパスにファイルが存在しなかった場合に転送を続行するか**を選択できるようになりました。
転送設定STEP1の詳細設定にて選択できます。
詳しくは、[転送元 - Azure Blob Storage](/docs/data-source-azure-blob-storage)を参照ください。

## 2025-05-12

### 新機能

#### ジョブのタイムアウト設定

これまでは一部のコネクターでのみ提供されていたタイムアウト設定ですが、アカウント内のすべての転送設定（転送ジョブ）に適用されるタイムアウト設定が実装されました。
タイムアウト設定を有効化することで、実行開始から一定時間経過した転送ジョブを自動停止できます。
これにより、意図しない処理時間枠の消費を防ぐことができます。
詳しくは、[タイムアウト設定](/docs/timeout-settings)を参照ください。

### 転送設定

#### 転送元SFTP・転送元Google Driveにて柔軟なエラーハンドリングが可能に

転送元SFTP・転送元Google Driveにて、**指定のパスにファイルが存在しなかった場合に転送を続行するか**を選択できるようになりました。
転送設定STEP1の詳細設定にて選択できます。
詳しくは、[転送元 - SFTP](/docs/data-source-sftp)・[転送元 - Google Drive](/docs/data-source-googledrive)を参照ください。

### TROCCO API

#### 接続情報APIの対応コネクターが拡充

接続情報APIの操作対象コネクタとして、以下のコネクターが追加されました。

- Amazon Athena接続情報

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

## 2025-05-05

### お知らせ

#### FreeプランユーザーがTROCCO APIを利用可能に

**2025年05月01日**より、FreeプランでもTROCCO APIを利用できるようになりました。
TROCCO APIに関して、詳しくは[TROCCO APIリファレンス](/trocco-api/apidocs/overview)を参照ください。

#### Freeプランユーザーの処理時間枠が2時間に

**2025年05月01日**より、Freeプランの処理時間枠が2時間となりました。
処理時間枠について、詳しくは[ジョブの処理時間枠](/docs/pricing-information#ジョブの処理時間枠)を参照ください。

### 新機能

#### CDCデータ転送

[既存のCDC転送](/docs/mysql-to-bigquery-cdc)のアーキテクチャを刷新し、機能を強化したCDC機能の提供を開始しました。
MySQLからS3 Icebergへの転送をCDC形式で連携できます。
詳しくは、[CDC（変更データキャプチャ）](https://primenumber.com/trocco/features/cdc)を参照ください。

:::(Warning) (利用可能なプラン)

本機能の利用は、**Professionalプラン**の契約が前提となります。
詳しくは、営業担当者またはカスタマーサクセスまでお問い合わせください。
:::

#### Self-Hosted Runner

β版としてリリースしていたSelf-Hosted Runnerを、公式版として提供開始しました。
オンプレミス環境やプライベートネットワーク環境のサーバー上でTROCCOのジョブが実行できます。
詳しくは、[Self-Hosted Runner](/docs/self-hosted-runner)を参照ください。

:::(Warning) (利用可能なプラン)

本機能の利用は、**Professionalプラン**の契約が前提となります。
詳しくは、営業担当者またはカスタマーサクセスまでお問い合わせください。
:::

#### 転送元SAP S/4HANA OData

SAPは世界で大きな市場シェアを持つ主要なERPソリューションであり、とくにSAP S/4HANAは現在もっとも需要の高いモジュールのひとつです。
SAP S/4HANA ODataコネクタでは、SAP NetWeaver Gatewayが提供するOData V2サービス経由でSAPデータを取得・連携します。
詳しくは、[SAP S/4HANA OData 接続情報](/docs/connection-configuration-sap-odata)・[転送元 - SAP S/4HANA OData](/docs/data-source-sap-odata)を参照ください。

:::(Warning) (利用可能なプラン)

本機能の利用は、**Professionalプラン**の契約が前提となります。
詳しくは、営業担当者またはカスタマーサクセスまでお問い合わせください。
:::

#### Connector Builder (β版)

Connector Builder (β版)とは、ユーザー自身でコネクタを作成できる機能です。
TROCCOが対応していないサービスであっても、利用者が自ら対応コネクタを開発し、TROCCO上で利用できます。
詳しくは、[Connector Builder (β版)](https://primenumber.com/trocco/features/connector-builder)を参照ください。

:::(Warning) (利用可能なプラン)

本機能は、**Advanced**プラン以上の契約アカウントでのみ、ご利用いただけます。
:::

### 転送設定

#### 転送元GitLabを追加

転送元GitLabを追加しました。
GitLab上の各種リポジトリ情報を他のデータ基盤へ連携できるようになりました。
開発プロセスの可視化や活動ログの分析を通じて、開発生産性の向上やボトルネックの把握にお役立ていただけます。

## 2025-04-28

### 転送設定

#### 転送元Freshdeskを追加

転送元Freshdeskを追加しました。
顧客サポートのチケット管理や問い合わせ対応の効率化にご活用いただけます。

#### 転送元Freshsalesを追加

転送元Freshsalesを追加しました。
CRMデータを活用し、営業活動の効率化や顧客管理の最適化にご利用いただけます。

#### 転送元Twilioを追加

転送元Twilioを追加しました。
SMSや音声通話のデータを活用し、コミュニケーションの最適化にご利用いただけます。

#### 転送元Mailchimpを追加

転送元Mailchimpを追加しました。
メールマーケティングキャンペーンのデータを分析し、効果的なマーケティング戦略に役立てることができます。

#### 転送元dbt Cloudを追加

転送元dbt Cloudを追加しました。
データ変換プロセスの管理や分析基盤の効率化にご活用いただけます。

#### 転送元Razorpayを追加

転送元Razorpayを追加しました。
オンライン決済データを活用し、収益管理やビジネスの成長に役立てることができます。

#### 転送元Confluenceを追加

転送元Confluenceを追加しました。
チームのナレッジ共有やドキュメント管理を効率化し、コラボレーションを強化できます。

#### 転送元PagerDutyを追加

転送元PagerDutyを追加しました。
インシデント管理やアラートの履歴を分析し、システムの安定性向上に繋げられます。

#### 転送元Miroを追加

転送元Miroを追加しました。
オンラインホワイトボードのデータを活用し、チームのブレインストーミングやプロジェクト計画を支援します。

#### 転送元Trelloを追加

転送元Trelloを追加しました。
タスク管理やプロジェクトの進捗状況を可視化し、チームの生産性向上に役立てることができます。

#### 転送元カオナビを追加

転送元カオナビを追加しました。
人材データを活用し、組織の人材管理や育成計画の効率化にご利用いただけます。

#### 転送元Boxにて柔軟なエラーハンドリングが可能に

転送元Boxにて、**指定のパスにファイルが存在しなかった場合に転送を続行するか**を選択できるようになりました。
転送設定STEP1の詳細設定にて選択できます。
詳しくは、[転送元 - Box](/docs/data-source-box)を参照ください。

### マネージド転送設定

#### 転送元SalesforceのAPIバージョンを設定できるように

マネージド転送設定の転送元SalesforceのAPIバージョンを設定できるようになりました。
これにより、作成される転送設定に一括でAPIバージョンを指定できるようになりました。

## 2025-04-21

### 転送設定

#### 転送元Backlogを追加

転送元Backlogを追加しました。
課題の進捗やチームの活動状況を可視化し、プロジェクト管理やレポート作成の効率化にご活用いただけます。

#### 転送元Freshserviceを追加

転送元Freshserviceを追加しました。
これにより、カスタマーサポートの対応履歴やチーム別の対応状況を他の業務データと統合して分析し、サービス品質の向上やリソース配分の最適化に繋げることができます。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタとして、以下のコネクターが追加されました。

- 転送元 - kintone

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)

## 2025-04-14

### お知らせ

#### 各種ジョブの実行ログ上に表示されるタイムゾーンをUTCに統一

各種ジョブの実行ログに関して、これまでは転送ジョブに関してはUTC（協定世界時）、それ以外のジョブ（データマートジョブなど）ではJST（日本標準時）で表示されていました。
これをすべてUTCに統一しました。
本仕様変更は、ログの表示形式のみを変更するものであり、既存の設定や各機能の動作には影響ございません。
また、リリース前に発生したログのタイムゾーン表記は変更されません。

#### 転送設定STEP3の「テスト実行」機能を非推奨に

転送先Google BigQueryを利用している場合に、転送設定STEP3にて利用できるテスト実行機能ですが、このたび**2025年4月中**に廃止する予定となりました。

### 転送設定

#### 転送元マネーフォワード クラウド会計を追加

転送元マネーフォワード クラウド会計を追加しました。
財務データを定期的に自動連携することで、経理業務の効率化やタイムリーな財務分析が可能になります。

#### 転送元zaicoを追加

転送元zaicoを追加しました。
在庫や出入庫の情報を定期的に連携することで、販売管理システムや BI ツールとの統合が容易になり、在庫の可視化や需給予測などに役立ちます。

#### 転送元App Store Connect APIにてAPI Endpointにカスタム変数を埋め込めるように

API Endpointにカスタム変数を埋め込めるようになりました。
これにより、パスパラメーターにカスタム変数を埋め込むことで、動的にデータ取得することが可能になりました。

#### 転送元SFTPにて柔軟なエラーハンドリングが可能に

転送元SFTPにて、**指定のパスにファイルが存在しなかった場合に転送を続行するか**を選択できるようになりました。
転送設定STEP1の詳細設定にて選択できます。
詳しくは、[転送元 - SFTP](/docs/data-source-sftp)を参照ください。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタとして、以下のコネクターが追加されました。

- 転送元 - HTTP・HTTPS

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)

## 2025-04-07

### UX・UI

#### クエリフォーマッターの実装

データマート定義、およびワークフロー定義のデータチェックタスクにおいて、記述したクエリを整形できるようになりました。
クエリ編集欄の左下にある **クエリを整形**をクリックすることで、入力したSQLクエリを自動で整形できます。  
整形処理では、キーワードの配置やインデント、改行などが見やすく再配置されます。

#### ユーザー招待時の初期パスワードを自動生成できるように

ユーザー招待時に必要となる初期パスワードについて、自動生成できるようになりました。
これにより、手動入力不要でユーザーを招待できるようになりました。

### TROCCO API

TROCCO APIのエンドポイントが拡充されました。

#### 通知先APIを追加

- [通知先一覧取得](/trocco-api/apidocs/get-notifications)
- [通知先作成](/trocco-api/apidocs/post-notification)
- [通知先詳細取得](/trocco-api/apidocs/get-notification)
- [通知先更新](/trocco-api/apidocs/patch-notification)
- [通知先削除](/trocco-api/apidocs/delete-notification)

## 2025-03-31

### 転送設定

#### 転送元ジョブカン経費精算/ワークフローを追加

転送元ジョブカン経費精算/ワークフローを追加しました。
取引先一覧や申請書一覧、汎用マスタレコード一覧などを取得できます。
これにより、申請・承認フローや各種マスタ情報を他の業務データと統合して分析できるようになり、経費管理やワークフローの最適化が可能になります。

#### 転送元バクラクを追加

転送元バクラクを追加しました。
ユーザー情報一覧や申請一覧などを取得できます。
申請データや組織構成情報をもとに、経費申請やワークフローの傾向を可視化したり、チーム単位での業務分析が可能になります。

#### 転送元Zendesk Supportにて`ticket`と`ticket_comment`を紐づけられるように

既存の取得対象である`ticket_comments`に、`ticket_id`カラムを追加しました。
これにより、`ticket`と`ticket_id`を紐づけられるようになります。

また、新たに`ticket_fields`を取得対象として追加しました。
`ticket_fields`の詳細については、[zendesk developers](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_fields/#list-ticket-fields)を参照ください。
なお、`ticket_fields`の取得時のページサイズの上限は、他の取得対象とは異なります。
本件について、詳しくは[転送元 - Zendesk Support](/docs/data-source-zendesk-support#step1の詳細設定)を参照ください。

### dbt連携

#### dbtバージョン1.9に対応

dbt Core v1.9を指定できるようになりました。
dbtバージョンは、[dbt Gitリポジトリ](/docs/dbt-git-repository)より選択できます。

### TROCCO API

#### 接続情報APIの対応コネクターが拡充

接続情報APIの操作対象コネクタとして、以下のコネクターが追加されました。

- kintone接続情報

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

### コネクタAPIアップデート

#### 転送元Shopify

転送時に使用するShopify APIのバージョンを、2024-04から**2024-07**へアップデートしました。
新バージョンについて、[Shopify API](https://shopify.dev/docs/api/release-notes/2024-07)のドキュメントを参照ください。

## 2025-03-24

### 転送設定

#### 転送元Chatworkを追加

転送元Chatworkを追加しました。
タスクやチャットの情報を他の業務データと組み合わせて可視化・分析することで、チームの生産性やコミュニケーションの状況をより深く把握できます。

#### 転送先Facebook コンバージョンAPIにてIDFAへの転送に対応

広告識別子（IDFA）である`madid`への転送が可能となりました。
TROCCOでの転送方法については、[転送先 - Facebook コンバージョンAPI](/docs/data-destination-facebook-conversion-api#カラムマッピング表)を参照ください。
`madid`については、[Facebook公式ドキュメント - Customer Information Parameters](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters)を参照ください。

## 2025-03-17

### 転送設定

#### 転送元Notionを追加

転送元Notionを追加しました。  
これにより、Notion上のデータをTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。
ドキュメントやデータベースの情報をBIツールやDWHに統合し、より高度な分析が可能になります。

#### 転送元Zoho Inventoryを追加

転送元Zoho Inventoryを追加しました。  
これにより、在庫管理データや受注・発注データをTROCCOを介して他のデータ基盤に連携し、統合的なデータ分析が可能になります。
会計システムやBIツールと組み合わせることで、より精度の高い在庫・売上分析を実現できます。

#### 転送先Google Ads コンバージョンにてリードの拡張コンバージョンに対応

転送先Google Ads コンバージョンにて、リードの拡張コンバージョンに対応しました。
詳しくは、[転送先 - Google Ads コンバージョン](/docs/data-destination-google-ads-conversion#拡張コンバージョンリード向けを利用する場合)を参照ください。

### ワークフロー定義

#### ワークフロージョブ詳細画面でステータスによるタスクジョブの絞り込みに対応

ワークフロージョブ詳細画面にて、タスクジョブのステータスによって、実行ログ一覧に表示されるタスクを絞り込めるようになりました。

![release-notes-2025-03-17-11-44-21](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-03-17-11-44-21.png){height="" width="50%"}

### UX・UI

#### 各種コネクタの転送設定・接続情報で接続確認できるように

以下の転送設定・接続情報で、接続確認できるようになりました。
これにより、設定の作成段階で、サービスに正しく接続できているかを確認できます。

- 転送元 - Salesforce
  - **クエリ (SOQL) を記述して転送**のときのみ対応
- 転送元 - Google Spreadsheets
- Salesforce接続情報

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタとして、以下のコネクターが追加されました。

- 転送元 - Google Analytics 4

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)

#### 接続情報APIの対応コネクターが拡充

接続情報APIの操作対象コネクタとして、以下のコネクターが追加されました。

- Google Analytics 4接続情報

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

## 2025-03-10

### 転送設定

#### 転送元マネーフォワード クラウド会計Plusを追加

転送元マネーフォワード クラウド会計Plusを追加しました。  
これにより、貸借対照表や損益計算書などの会計データをTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。

#### 転送元freee請求書を追加

転送元freee請求書を追加しました。  
これにより、請求書や見積書などをTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。

#### 転送先MySQLでDECIMAL型での転送に対応

転送先MySQLでは、転送設定STEP2の出力オプションにて、各カラムのデータ型をユーザー自身で指定できます。
今回、指定できるデータ型として`DECIMAL`に対応しました。
精度およびスケールを入力することで、DECIMAL型へ転送できます。

### UX・UI

#### Google Drive接続情報で接続確認できるように

Google Drive接続情報の作成・編集時に接続確認できるようになりました。
これにより、接続情報の作成・編集段階で、サービスに正しく接続できているかを確認できます。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタとして、以下のコネクターが追加されました。

- 転送元 - Amazon S3
- 転送元 - PostgreSQL

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)

#### 接続情報APIの対応コネクターが拡充

接続情報APIの操作対象コネクタとして、以下のコネクターが追加されました。

- Google Analytics 4接続情報

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

### コネクタAPIアップデート

#### 転送元Yahoo!検索広告・転送元Yahoo!ディスプレイ広告（運用型）

転送時に使用するYahoo!広告 APIのバージョンを、v13から**v15**へアップデートしました。
新バージョンについて、それぞれ以下のドキュメントを参照ください。
- [Yahoo!広告 API | 検索広告 API v15 リリースノート](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/ysa-v15.html)
- [Yahoo!広告 API | ディスプレイ広告 API v15 リリースノート](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/yda-v15.html)

## 2025-03-03

### 転送設定

#### 転送元Zoho Desk

転送元Zoho Deskを追加しました。  
これにより、Zoho Deskのチケットデータや顧客情報をTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。

#### 転送先Amazon S3にてマルチパートアップロードに対応

Amazon S3の[マルチパートアップロード](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html)に対応しました。
これにより、5GB以上のファイルであっても、TROCCOを介してAmazon S3に転送できるようになりました。
詳しくは、[転送先 - Amazon S3](/docs/data-destination-s3)を参照ください。

## 2025-02-24

### 転送設定

#### 転送先HubSpotにて転送時の並列数を指定できるように

転送先HubSpotにて、転送時の並列実行数を指定できるようになりました。
並列実行数を増やすことで、処理時間を短縮できる可能性があります。
一方で、利用上の注意事項が存在します。詳しくは、[転送先 - HubSpot](/docs/data-destination-hubspot#step1-詳細設定)を参照ください。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタとして、以下のコネクターが追加されました。

- 転送元 - Google Spreadsheets
- 転送元 - Salesforce
- 転送先 - Google Spreadsheets
- 転送先 - Salesforce

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)

#### 接続情報APIの対応コネクターが拡充

接続情報APIの操作対象コネクタとして、以下のコネクターが追加されました。

- PostgreSQL接続情報
- Salesforce接続情報

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

## 2025-02-17

### Self-Hosted Runner（β版）のリリース

Self-Hosted Runner（β版）がリリースされました。
オンプレミス環境やプライベートネットワーク環境のサーバー上でTROCCOのジョブが実行できます。

2025/02/14現在、以下の転送元・転送先コネクターの組み合わせに対応しています。
対応するコネクターは今後変更される可能性があります。

- 転送元
  - 転送元 - HTTP・HTTPS
  - 転送元 - MySQL
  - 転送元 - PostgreSQL
  - 転送元 - SFTP
- 転送先
  - 転送先 - Google BigQuery
  - 転送先 - MySQL
  - 転送先 - PostgreSQL

現在、Self-Hosted Runner（β版）は、トライアルを希望のお客様にのみ提供しております。
機能の概要やトライアルのご依頼など、詳しくは[Self-Hosted Runner（β版）](https://primenumber.com/trocco/features/self-hosted-runner)を参照ください。

### TROCCO API

#### APIコール数の上限値の変更

APIコール数の上限が、下記の通り変更されました。

- 変更前
  - 最大**10,000**コール/1日
  - 最大**100**コール/15分
- 変更後
  - 最大**3,500**コール/10分

上記変更に伴い、API実行時のレスポンスにAPIコール数に関する情報が含まれるようになりました。
詳しくは、[APIコール数制限に関するレスポンスヘッダー](/trocco-api/apidocs/overview#apiコール数制限に関するレスポンスヘッダー)を参照ください。

## 2025-02-10

### 転送設定

#### 転送元Stripe

転送元Stripeを追加しました。
これにより、Stripeの決済データをTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。
詳しくは、[転送元 - Stripe](/docs/data-source-stripe)を参照ください。

#### 転送元Square

転送元Squareを追加しました。
これにより、Squareの取引データをTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。
詳しくは、[転送元 - Square](/docs/data-source-square)を参照ください。

### ワークフロー定義

#### ワークフロー定義作成画面でラベルを付与できるように

ワークフロー定義の作成画面でラベルを付与できるようになりました。

![release-notes-2025-02-12-11-44-21](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-02-12-11-44-21.png){height="" width="50%"}

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタとして、以下のコネクターが追加されました。

- 転送元 - Snowflake
- 転送先 - Snowflake

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)

#### 接続情報APIの対応コネクターが拡充

接続情報APIの操作対象コネクタとして、以下のコネクターが追加されました。

- Amazon S3接続情報
- Google Spreadsheets接続情報
- MySQL接続情報

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

## 2025-02-03

### 転送設定

#### 転送元Zoho Books

転送元Zoho Booksを追加しました。
これにより、Zoho Booksの会計データをTROCCOを通じて他のデータ基盤へスムーズに連携できるようになりました。
詳しくは、[転送元 - Zoho Books](/docs/data-source-zoho-books)を参照ください。

#### 転送先MySQL

転送設定STEP2の出力オプションにて、各カラムのデータ型をユーザー自身で指定できるようになりました。
以下のMySQLのデータ型を選択できます。

- `TINYTEXT`
- `TEXT`
- `MEDIUMTEXT`
- `LONGTEXT`

### UI・UX

#### 複数の転送設定を一括で削除できるように

転送設定一覧画面にて、複数の転送設定を一括で削除できるようになりました。
![release-notes-2025-01-31-11-44-21](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-01-31-11-44-21.png){height="" width="50%"}

### TROCCO API

TROCCO APIのエンドポイントが拡充されました。

#### 転送設定APIを追加

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)
- [転送設定削除](/trocco-api/apidocs/delete-job-definition)

#### リソースグループAPIを追加

- [リソースグループ一覧取得](/trocco-api/apidocs/get-resource-groups)
- [リソースグループ作成](/trocco-api/apidocs/post-resource-group)
- [リソースグループ詳細取得](/trocco-api/apidocs/get-resource-group)
- [リソースグループ更新](/trocco-api/apidocs/patch-resource-group)
- [リソースグループ削除](/trocco-api/apidocs/delete-resource-group)

#### ラベルAPIを追加

- [ラベル一覧取得](/trocco-api/apidocs/get-labels)
- [ラベル作成](/trocco-api/apidocs/post-label)
- [ラベル詳細取得](/trocco-api/apidocs/get-label)
- [ラベル更新](/trocco-api/apidocs/patch-label)
- [ラベル削除](/trocco-api/apidocs/delete-label)

### コネクタAPIアップデート

#### 転送元Apple Search Ads

転送時に使用するApple Search Ads Campaign Management APIのバージョンを、v4から**v5**へアップデートしました。
新バージョンについて、[Apple Search Ads Campaign Management API 5](https://developer.apple.com/documentation/apple_search_ads/apple-search-ads-campaign-management-api-5)を参照ください。

## 2025-01-27

### お知らせ

#### ISO 27001

当社は、情報セキュリティマネジメントシステム（ISMS）の国際規格である「ISO/IEC 27001:2022」の認証を取得しました。
今後もお客様の大切なデータをより安全に取り扱い、リスク管理を強化することで、より安心して当社サービスをご利用いただける環境を提供してまいります。

### 転送設定

#### 転送元Sansan

転送元Sansanを追加しました。
これにより、Sansanに蓄積された名刺データや企業情報を、他のデータ基盤にかんたんに連携できるようになりました。
詳しくは、[転送元 - Sansan](/docs/data-source-sansan)を参照ください。

### TROCCO API

#### ワークフロー定義APIを追加

TROCCO APIでワークフロー定義に関する以下の操作ができるようになりました。

- [ワークフロー一覧取得](/trocco-api/apidocs/get-pipeline-definitions)
- [ワークフロー作成](/trocco-api/apidocs/post-pipeline-definition)
- [ワークフロー詳細取得](/trocco-api/apidocs/get-pipeline-definition)
- [ワークフロー更新](/trocco-api/apidocs/patch-pipeline-definition)
- [ワークフロー削除](/trocco-api/apidocs/delete-pipeline-definition)

#### 接続情報APIにてGoogle Cloud Storageに対応

接続情報APIの操作対象コネクタとして、Google Cloud Storageが追加されました。
今回追加対象となったAPIエンドポイントは以下のとおりです。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

## 2025-01-20

### 接続情報

#### Snowflakeで2025年11月からキーペア認証が必須に

**2025年11月**から、Snowflakeではユーザー・パスワード認証が[利用できなくなります](https://www.snowflake.com/ja/blog/blocking-single-factor-password-authentification/)。
これに伴い、Snowflake接続情報の[ホスト名の入力形式](/docs/connection-configuration-snowflake#ホスト名の入力形式)について、これまではユーザー・パスワード認証のみが対応していた`<ORGANIZATION>-<ACCOUNT_NAME>`形式を、キーペア認証でも利用できるよう対応しました。
今後はキーペア認証をご利用ください。

#### Databricks接続情報にてOAuthマシン間（M2M）認証が利用できるように

Databricks接続情報の認証方式にて、これまではPersonal Access Tokenによる認証のみ対応していましたが、今回OAuthマシン間（M2M）認証を追加しました。
設定方法について、詳しくは[Databricksの接続情報](/docs/connection-configuration-databricks)を参照ください。

#### MongoDB接続情報にてSSHトンネルを利用した接続ができるように

MongoDB接続情報の接続方式に、SSHトンネルを利用した接続方式を追加しました。
設定方法について、詳しくは[MongoDBの接続情報](/docs/connection-configuration-mongodb)を参照ください。

### 転送設定

#### 転送元Apple Search Adsにてレポートレベル`CREATIVE_SETS`を廃止

転送時に使用しているApple Search Ads Campaign Management API 4のサポート終了が近づいているため、[API 5](https://developer.apple.com/documentation/applesearchads/apple-search-ads-campaign-management-api-5)へのアップデートを予定しています。
API 5では`CREATIVE_SETS`エンドポイントが廃止されます。
これに先立ち、転送設定STEP1で指定するレポートレベルから`CREATIVE_SETS`を削除しました。

### コネクタAPIアップデート

#### 転送先Facebook カスタムオーディエンス(β版)・転送先Facebook コンバージョンAPI

転送時に使用するFacebook APIのバージョンを、v18から**v21**へアップデートしました。
新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version21.0)を参照ください。

### 転送元Criteo

転送時に使用するCriteo APIのバージョンを、v2024.04から**v2024.10**へアップデートしました。
新バージョンについて、[Version 2024.10 release notes](https://developers.criteo.com/marketing-solutions/changelog/version-202407-release-notes-1)を参照ください。

## 2025-01-13

### お知らせ

#### 転送設定詳細の「JSON設定ファイル」表示機能を廃止

[2024年12月2日にお知らせ](/docs/abolish-etl-configuration-setting-json)しておりました、JSON形式による設定ファイルの表示機能を2025年01月06日に廃止しました。
今後、転送設定の設定ファイルを確認する際は、YAML形式による設定ファイルをご利用ください。

### 転送設定

#### 転送元Google Driveにて圧縮ファイルの転送をサポート

転送元Google Driveで圧縮ファイルを転送できるようになりました。
転送可能な圧縮ファイルの形式など、詳しくは[転送元 - Google Drive](/docs/data-source-googledrive)を参照ください。

### UI・UX

#### ワークフロー定義一覧にてラベル・スケジュールの一括操作が可能に

ワークフロー定義一覧画面にて、複数のワークフロー定義に対して一括でラベル・スケジュールを付与・削除できるようになりました。

![release-notes-2025-01-15-15-48-21](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-01-15-15-48-21.png){height="" width="50%"}

#### マネージド転送設定にてGoogle BigQueryコンソールに直接アクセスできるように

転送先Google BigQueryのマネージド転送設定にて、転送設定ごとにBigQueryのコンソール画面へのリンクを追加しました。
リンクをクリックするとGoogle BigQueryコンソールが開き、対象のテーブルを確認できます。

![release-notes-2025-01-10-11-16-21](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2025-01-10-11-16-21.png){height="" width="50%"}

### コネクタAPIアップデート

#### 転送元Facebookリード広告・転送元Facebook Ad Insights・Facebook接続情報のOAuth認証

使用するFacebook APIのバージョンを、v18から**v21**へアップデートしました。
新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version21.0)のドキュメントを参照ください。

## 2025-01-06

### UI・UX

#### ワークフロー定義一覧でカスタム変数ループ設定による絞り込みができるように

ワークフロー定義一覧の絞り込み条件に**ループ設定**を追加しました。
カスタム変数のループ設定の有無によって、ワークフロー定義を絞り込むことができます。

![release-notes-2024-12-25-19-06-34](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-12-25-19-06-34.png){height="" width="50%"}

### コネクタAPIアップデート

#### 転送元Shopify

転送時に使用するShopify APIのバージョンを、2024-01から**2024-04**へアップデートしました。
新バージョンについて、[Shopify API](https://shopify.dev/docs/api/release-notes/2024-04)のドキュメントを参照ください。

## 2024-12-23

### TROCCO API

#### チームAPIを追加

TROCCO APIで[チーム](/docs/team)に関する以下の操作ができるようになりました。

- [チーム一覧取得](/trocco-api/apidocs/get-teams)
- [チーム作成](/trocco-api/apidocs/post-team)
- [チーム詳細取得](/trocco-api/apidocs/get-team)
- [チーム更新](/trocco-api/apidocs/patch-team)
- [チーム削除](/trocco-api/apidocs/delete-team)

### コネクタAPIアップデート

#### 転送元Google Ads

転送時に使用するGoogle Ads APIのバージョンを、v16から**v18**へアップデートしました。
新バージョンについて、[Google Ads API](https://developers.google.com/google-ads/api/docs/release-notes#v18)のドキュメントを参照ください。

#### 転送元Facebook Ad クリエイティブ・転送元Facebook Ad Insights

転送時に使用するFacebook APIのバージョンを、v18から**v21**へアップデートしました。
新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version21.0)のドキュメントを参照ください。

## 2024-12-16

### 転送設定

#### 転送元freee会計

転送元freee会計を追加しました。
詳しくは、[転送元 - freee会計](/docs/data-source-freee-accounting)を参照ください。

#### 転送元SmartHR

転送元SmartHRを追加しました。
詳しくは、[転送元 - SmartHR](/docs/data-source-smart-hr)を参照ください。

なお、会計領域ではfreee会計を、人事領域ではSmartHRの提供を先行して開始しております。

## 2024-12-09

### 転送設定

#### 転送設定詳細の「JSON設定ファイル」表示機能が非推奨に

TROCCOでは、転送設定の設定内容を詳細画面で確認できます。
このたび運用効率向上のため、**2025年1月上旬**にJSON形式による設定ファイルの表示を廃止する予定となりました。
これに先立ち、JSON形式による設定ファイルの表示機能を非推奨とする文言を追加しました。
詳しくは、[2024/12/02 転送設定詳細の「JSON設定ファイル」表示機能廃止について](/docs/abolish-etl-configuration-setting-json)を参照ください。

![release-notes-2024-12-09-12-59-37](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-12-09-12-59-37.png){height="" width="50%"}

#### 転送先kintoneでユーザー選択・組織選択・グループ選択フィールドへ転送できるように

転送設定STEP2 出力オプションで指定できるデータ型に下記のフィールドを追加しました。

- `USER_SELECT`：ユーザー選択
- `ORGANIZATION_SELECT`：組織選択
- `GROUP_SELECT`：グループ選択

転送方法について、詳しくは[データ型にUSER_SELECT・ORGANIZATION_SELECT・GROUP_SELECTを選択したい場合](/docs/data-destination-kintone#データ型にuser_select・organization_select・group_selectを選択したい場合)を参照ください。

### TROCCO API

#### データマート定義APIを正式リリース

データマート定義APIは、これまで対象データウェアハウスとしてBigQueryのみをサポートしていましたが、新たにSnowflakeにも対応しました。
これに伴い、ベータ版から正式版としてリリースしました。

- [データマート定義一覧取得](/trocco-api/apidocs/get-datamart-definitions)
- [データマート定義作成](/trocco-api/apidocs/post-datamart-definition)
- [データマート定義詳細取得](/trocco-api/apidocs/get-datamart-definition)
- [データマート定義更新](/trocco-api/apidocs/patch-datamart-definition)
- [データマート定義削除](/trocco-api/apidocs/delete-datamart-definition)

## 2024-12-02

### その他

#### リソースグループごとの処理時間が確認できるように

[チーム機能](/docs/about-team)をご利用の場合、リソースグループごとに、各ジョブの処理時間や合計処理時間を確認できるようになりました。
サイドバーの**処理時間**から確認できます。
これらのデータを活用することで、たとえば処理時間が多いリソースグループを特定して調整するなど、TROCCOの運用面における効率化・最適化を図ることができます。
なお、表示できるのは2024年11月初日以降のデータのみです。

![release-notes-2024-11-27-19-22-25](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-11-27-19-22-25.png){height="" width="50%"}

## 2024-11-25

### お知らせ

#### Free・Starterプランにおけるユーザー数を制限

TROCCOでは、[料金プラン](https://primenumber.com/trocco/pricing)に応じて、TROCCOを利用できるユーザー数に上限を設けています。
2024年11月18日から、Free・Starterプランにおいて、アカウントに紐づくユーザー数がプランの上限に達した場合、TROCCOユーザーを招待できなくなりました。

:::(Warning) (ユーザー数の制限における注意点)

- Freeプランのアカウントに紐づくユーザーが2名以上の場合、2024年12月下旬に、[アカウント特権管理者](/docs/about-super-admin)権限を持たないユーザーの削除を予定しています。
上記に該当する場合は、2024年12月16日までに次のいずれかの対応を実施してください。
  - アカウント特権管理者以外のユーザーをすべて削除してください。ユーザーの削除方法については、[ユーザーの削除](/docs/user-deletion)を参照ください。
  - 有償プランへのアップグレードをご検討ください。料金プランについては、[料金プラン](https://primenumber.com/trocco/pricing)および[ご契約プランに関する詳細情報](/docs/pricing-information)を参照ください。
- 契約プランをダウングレードする場合は、事前に不要なユーザーを削除し、移行先プランのユーザー数上限を超えないようにしてください。
:::

#### Emailによる通知先の作成・変更時にメールアドレス認証を追加

Emailによる通知先設定において、メールアドレス認証を追加しました。
今後、通知先を作成・変更する際は、TROCCOから送付される確認メール内のリンクをクリックし、メールアドレス認証を受ける必要があります。
なお、すでに通知先として登録されているメールアドレスについては「認証済み」として扱うため、設定の変更は不要です。
手順や注意事項について、詳しくは[転送設定に関する便利な設定を行う - Emailの場合](/docs/trocco-tutorial-additional-settings#emailの場合)を参照ください。

![release-notes-2024-11-21-16-47-26](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-11-21-16-47-26.png){height="" width="50%"}

### TROCCO API

#### 接続情報APIを追加

TROCCO APIで接続情報に関する以下の操作ができるようになりました。
なお、対応サービスはGoogle BigQuery・Snowflakeのみとなります。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

### コネクタAPIアップデート

#### 転送元Google Ad Manager

転送時に使用するGoogle Ad Manager APIのバージョンを、 v202311から**v202408**へアップデートしました。
新バージョンについては、[Google Ad Manager API](https://developers.google.com/ad-manager/api/rel_notes#v202408)を参照ください。

## 2024-11-11

### UX・UI

#### 転送元・転送先Snowflakeで接続確認できるように

転送元または転送先コネクタにSnowflakeを指定した際、転送設定STEP1でそれぞれ**接続を確認**できるようになりました。
STEP2に進む前に、入力した内容で問題なく疎通できるかを確認できます。

![release-notes-2024-11-07-15-37-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-11-07-15-37-0.png){height="" width="50%"}

## 2024-10-28

### ワークフロー定義

#### ワークフロー定義で過去の変更内容を復元できるように

ワークフロー定義詳細画面の変更履歴タブから、過去の変更内容を復元できるようになりました。
復元したいリビジョンの**詳細設定・復元**をクリックするとリビジョン詳細画面が表示されます。
差分を確認し、**設定を復元**をクリックすると、そのリビジョン時点の設定に戻すことができます。

![release-notes-2024-10-28-19-30-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-10-28-19-30-0.gif){height="" width="50%"}

### 転送設定

#### 転送元TROCCO Web行動ログの差分転送に関する仕様を変更

差分転送に使用するキーを**最後に転送されたパス**から**最後に転送されたファイルの更新日時**に変更しました。
詳しくは、[転送元 - TROCCO Web行動ログ](/docs/data-source-n-analytics-log)を参照ください。

## 2024-10-21

### 転送設定

#### 転送元SHANON MARKETING PLATFORMでタイムアウトの設定ができるように

転送設定STEP1 > 詳細設定にタイムアウトに関する設定項目を追加しました。
詳しくは、[転送元 - SHANON MARKETING PLATFORM](/docs/data-source-shanon-marketing-platform)を参照ください。

## 2024-10-15

### ワークフロー定義

#### ワークフロー定義の変更履歴が確認できるように

ワークフロー定義詳細画面に**変更履歴**タブを追加しました。
これにより、ワークフロー定義の変更履歴を確認できるようになりました。

:::(Warning) (確認できる期間)

**2024年9月17日以降**の変更履歴を確認できます。
:::

![release-notes-2024-10-10-17-00-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-10-10-17-00-1.png){height="" width="50%"}

### 接続情報

#### Snowflake接続情報にてキーペア認証でも接続確認できるように

Snowflakeの接続情報を作成・編集する際、これまではユーザー・パスワード認証の場合のみ**接続を確認**できましたが、キーペア認証でも**接続を確認**できるようになりました。

![release-notes-2024-10-10-17-00-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-10-10-17-00-0.png){height="" width="50%"}

### TROCCO API

#### ユーザーAPIを追加

TROCCO APIでユーザー情報に関する以下操作を行えるようになりました。

- [ユーザー一覧取得](/trocco-api/apidocs/get-users)
- [ユーザー作成](/trocco-api/apidocs/post-user)
- [ユーザー詳細取得](/trocco-api/apidocs/get-user)
- [ユーザー更新](/trocco-api/apidocs/patch-user)
- [ユーザー削除](/trocco-api/apidocs/delete-user)

## 2024-10-07

### お知らせ

#### 実行トリガー設定機能の廃止

実行トリガー設定機能を廃止しました。
これにより、実行トリガー設定に関する項目が削除され、設定済みの実行トリガー設定は無効となります。
今後は[ワークフロー](/docs/about-workflow)機能をご利用ください。

### 接続情報

#### HTTP・HTTPS接続情報でカスタムパラメータの設定が可能に

HTTP・HTTPS接続情報の作成時に、カスタムパラメータを追加できるようになりました。
これにより、接続先APIの仕様に応じた特定のパラメータをリクエストに含めることができるようになります。
詳しくは、[HTTP・HTTPSの接続情報](/docs/connection-configuration-http-https)を参照ください。

### 転送設定

#### 転送設定一覧にて「最近更新された順」で並び替えが可能に

転送設定一覧画面の並び替え条件に、**最近更新された順**を追加しました。
これにより、修正した転送設定を見つけやすくなりました。

![release-notes-2024-10-04-11-15-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-10-04-11-15-0.png){height="" width="50%"}

### コネクタAPIアップデート

#### 転送元Yahoo!検索広告・転送元Yahoo!ディスプレイ広告（運用型）

転送時に使用するYahoo!広告 APIのバージョンを、v12から**v13**へアップデートしました。
新バージョンについて、それぞれ以下のドキュメントを参照ください。
- [Yahoo!広告 API | 検索広告 API v13 リリースノート](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/ysa-v13.html)
- [Yahoo!広告 API | ディスプレイ広告 API v13 リリースノート](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/yda-v13.html)

## 2024-09-30

### TROCCO API

TROCCO APIでデータマートジョブを実行できるようになりました。
任意のデータマート定義を指定して、ジョブを実行できます。
詳しくは、[データマートシンクジョブ実行](/trocco-api/apidocs/post-datamart-job)を参照ください。

### ワークフロー定義

#### フロー編集時にタスクの自動レイアウトが可能に

フロー編集時に**自動レイアウト**をクリックすると、ワークフロータスクが自動的に整列されるようになりました。

![release-notes-2024-09-30-13-55-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-09-30-13-55-0.gif){height="" width="50%"}

### 接続情報

#### Google Cloud Storage接続情報のサービスアカウント認証にてプロジェクトIDを指定できるように

Google Cloud Storage接続情報のサービスアカウント認証に関して、これまではサービスアカウントを作成したプロジェクトが指定される仕様でした。
今回の変更で、サービスアカウントが権限を持つプロジェクトの一覧からプロジェクトIDを選択できるようになりました。

## 2024-09-24

### 接続情報

#### Google BigQuery接続情報のサービスアカウント認証にてプロジェクトIDを指定できるように

Google BigQuery接続情報のサービスアカウント認証に関して、これまではサービスアカウントを作成したプロジェクトが指定される仕様でした。
今回の変更で、サービスアカウントが権限を持つプロジェクトの一覧からプロジェクトIDを選択できるようになりました。

## 2024-09-17

### お知らせ

#### 契約プラン上利用できない転送設定のジョブ実行の制限

TROCCOでは、ご契約のプランによって、利用できるコネクタが異なります。
今後、ご契約のプランが利用できないコネクタを組み合わせた転送設定は作成できなくなりました。
また、すでに転送設定を作成していた場合、その転送設定のジョブは実行できなくなりました。
今回追加された制限について、詳しくは[コネクタ種別](/docs/pricing-information#%E3%82%B3%E3%83%8D%E3%82%AF%E3%82%BF%E7%A8%AE%E5%88%A5)を参照ください。

## 2024-09-09

### 転送設定

#### 入力ファイル形式のParquet対応

下記の転送元コネクタにおいて、Parquetの転送に対応しました。

- [転送元 - Amazon S3](/docs/data-source-s3)
- [転送元 - Azure Blob Storage](/docs/data-source-azure-blob-storage)
- [転送元 - Google Cloud Storage](/docs/data-source-google-cloud-storage)

詳しくは、[入力ファイル形式の設定について](/docs/configuration-of-input-files)を参照ください。

## 2024-09-02

### UI・UX

#### markdownエディタにてtabキーでインデントを追加できるように

転送設定やデータマート定義などのメモ欄は、markdown記法に対応しています。
このようなmarkdown記法に対応した箇所について、tabキーでインデントを追加、shift+tabキーでインデントを削除できるようになりました。

## 2024-08-26

### 転送設定

#### 転送先BigQueryの転送モードにUPSERTが追加

転送先出力モードとして`UPSERT (MERGE)`が追加されました。
マージキーを基準に、既存テーブルにレコードがある場合はレコードを更新し、レコードがない場合はレコードを追記します。

### UI・UX

#### 処理時間利用量に応じてメールによる通知が送付されるように

[処理時間枠](/docs/pricing-information#ジョブの処理時間枠)に対して、処理時間が一定程度超過したタイミングで通知メールが送られるようになりました。
処理時間枠に対して、50%・80%・100%をそれぞれ超過したタイミングで、アカウント特権管理者に対してメールが送付されます。

#### ジョブ一覧にて設定IDでジョブを絞り込めるように

転送ジョブ一覧およびデータマートジョブ一覧にて、転送設定IDおよびデータマート定義IDによって、ジョブを絞り込めるようになりました。

![release-notes-2024-08-29-6-58-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-0.png){height="" width="50%"}

![release-notes-2024-08-29-6-58-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-1.png){height="" width="50%"}

### マネージド転送設定

#### 転送先Snowflakeのテーブル名を大文字または小文字に一斉変換できるように

マネージド転送設定にて転送先Snowflakeを選択した場合に、STEP2の取り込み設定にて、転送先テーブル名を大文字または小文字に一斉変換できるようになりました。

![release-notes-2024-08-29-6-58-2](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-2.png){height="" width="50%"}

## 2024-08-19

### お知らせ

#### dbt連携

#### dbtバージョン1.6以下を廃止に

dbt Core v1.6以下のバージョンについて、公式よりサポートが終了したため、廃止しました。
今後はv1.7以上のバージョンをご利用ください。

### セキュリティ

#### アクセス許可IPの対象をブラウザとAPIとで区別して適用できるように

アクセス許可IPの設定において、アクセス許可の対象をブラウザとAPIを場合分けして適用できるようになりました。

![release-notes-2024-08-29-6-58-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-3.png){height="" width="50%"}

たとえば、**アクセス許可するIPアドレス**に`192.0.2.1`、アクセス許可の範囲を**APIからのアクセスを許可**した場合、APIからのアクセスはIPアドレス`192.0.2.1`のみ許可されます。
このとき、ブラウザからはどのIPアドレスからもアクセスできることにご注意ください。

## 2024-08-05

### お知らせ

#### Professionalプランの提供開始

2024年08月01日より、Professionalプランの提供を開始しました。
Professionalプランについて、詳しくは[料金プラン](https://primenumber.com/trocco/pricing)および[Professionalプランに関する詳細情報](/docs/professional-plan)を参照ください。

### マネージドデータ転送

#### 転送先Databricksが追加

マネージドデータ転送の転送先として、Databricksを選択できるようになりました。
転送元のデータソースを一括で取得してDatabricksへ転送する転送設定を、一元作成・管理できます。

### UI・UX

#### 転送設定一覧でリソースグループによる絞り込みができるように

転送設定一覧の絞り込み項目にリソースグループが追加されました。
リソースグループを選択して絞り込みをすることで、該当のリソースグループに属する転送設定を絞り込めるようになりました。

### 接続情報

#### Zendesk Support接続情報の認証方式にAPIトークンが追加

Zendeskによる[「APIのパスワードアクセス」の提供終了](https://support.zendesk.com/hc/articles/7386291855386)に伴い、APIトークンを利用した認証方式に対応しました。
将来的にパスワードアクセスによる認証は廃止される予定となっております。
したがって、今後は認証方式に**APIトークン**を利用されることを推奨いたします。

詳しくは、[Zendesk Supportの接続情報](/docs/connection-configuration-zendesk-support)を参照ください。

### データマート定義

#### 詳細画面の実行クエリ欄にコピーボタンが追加

データマート定義詳細画面の実行クエリ欄にコピーボタンが追加されました。
クエリをかんたんにコピーできるようになりました。

## 2024-07-29

### UI・UX

#### 転送設定一覧で接続情報の種類による絞り込みができるように

[前回のアップデート](/docs/release-notes#転送設定一覧で接続情報による絞り込みができるように)で、コネクタ単位での絞り込みに対応しました。
上記に対し、今回のアップデートでは、個々の接続情報単位での絞り込みに対応しました。
これにより、任意の接続情報がどの転送設定に用いられているかを、かんたんに確認できるようになりました。

![release-notes-2024-08-29-6-58-4](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-4.png){height="" width="50%"}

## 2024-07-22

### UI・UX

#### ユーザー管理画面の変更

ユーザー管理画面のデザインを変更しました。
これにより、各ユーザーの権限（TROCCO上で許可されている操作）を一目で確認できるようになりました。
また、COMETAと合わせてご利用の場合、ユーザーを絞り込むこともできます。

![release-notes-2024-08-29-6-58-5](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-5.png){height="" width="50%"}

## 2024-07-16

### 転送設定

#### 転送元Databricks

転送元Databricksを新たに追加しました。
詳しくは、[転送元 - Databricks](/docs/data-source-databricks)を参照ください。

### お知らせ

#### 転送ジョブのメモリサイズの増加

2024年07月16日週内のリリースにより、**データ転送に用いられるメモリサイズが増加します。**

- 変更前のメモリサイズ：**2 GiB**
- 変更後のメモリサイズ：**6 GiB**

本変更は、上記リリース後に作成された転送設定に対して適用されます。
転送ジョブのスペックアップになるため、変更前のジョブと比べてパフォーマンスが向上する可能性があります。
ただし、以下のコネクタは、例外的に現時点でのメモリサイズが**15 GiB**であり、今回の変更の後も引き続き**15 GiB**が適用されます。

<details>
   <summary>例外的にメモリサイズが15 GiBとなるコネクタ一覧</summary>

- [転送元 - Amazon S3](/docs/data-source-s3)
- [転送元 - Box](/docs/data-source-box)
- [転送元 - Google Cloud Storage](/docs/data-source-google-cloud-storage)
- [転送元 - Google Play](/docs/data-source-google-play)
- [転送元 - KARTE Datahub](/docs/data-source-karte-datahub)
- [転送元 - Repro](/docs/data-source-repro)
- [転送元 - ローカルファイル](/docs/data-source-local-file)
</details>

#### Direct転送機能・Aggregate転送機能の廃止

以下の転送機能を廃止しました。

- Direct転送（転送元Amazon S3 -> 転送先SFTPの組み合わせのときに選択可能だったもの）
- Aggregate転送（転送元Google BigQuery ->転送先Amazon S3の組み合わせのときに選択可能だったもの）

### 転送設定

#### OutOfMemoryErrorが発生した場合にその旨実行ログに明示されるように

OutOfMemoryErrorが発生した場合、その旨実行ログに明示されるようになりました。
本メッセージが表示された場合、[OutOfMemoryErrorが発生した場合の対処方法](https://help.trocco.io/hc/ja/articles/4782342690846-OutOfMemoryError%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%99%E3%82%8B)を参照してください。

#### 転送元HTTP･HTTPSに入力上の制約を追加

転送設定STEP2 > 入力オプションの各設定項目に入力できる値の上限値・下限値が設定されました。
詳しくは、[転送元 - HTTP・HTTPS](/docs/data-source-http)を参照ください。

## 2024-07-01

### お知らせ

#### Google Analytics （ユニバーサル アナリティクス）の廃止対応

:::(Error) (Google Analytics (Universal Analytics)のサービス終了について)

Googleによる[ユニバーサル アナリティクスの廃止対応](https://support.google.com/analytics/answer/11583528)に伴い、**2024年07月01日**に下記コネクタの提供を終了することになりました。

- 転送元 - Google Analytics
- 転送先 - Google Analytics Measurement Protocol

**2024年07月01日**以降、転送設定・接続情報を新たに作成できなくなります。また、転送設定からジョブを実行してもエラーとなります。

今後はGoogle Analytics 4への乗り換え、および[転送元 - Google Analytics 4](/docs/data-source-google-analytics4)および[Google Analytics4の接続情報](/docs/connection-configuration-google-analytics4)の利用をご検討ください。
:::

## 2024-06-24

### 転送設定

#### 転送先Databricks

転送先Databricksを新たに追加しました。
詳しくは、[転送先 - Databricks](/docs/data-destination-databricks)を参照ください。

## 2024-06-17

### お知らせ

#### 同時実行数上限によるジョブ実行の制限

TROCCOでは、アカウント内で同時に実行できるジョブの数に制限があります。
2024年04月の料金プラン変更を受けて、**データマートジョブ**も本制限の対象となりました。
本制限について、詳しくは[ジョブの同時実行数上限](/docs/pricing-information#ジョブの同時実行数上限)を参照ください。

### dbt連携

#### dbtバージョン1.7および1.8に対応

dbt Core v1.7およびdbt Core v1.8を指定できるようになりました。
dbtバージョンは、[dbt Gitリポジトリ](/docs/dbt-git-repository)より選択できます。

## 2024-06-10

### お知らせ

#### Freeプランにおけるジョブ実行の制限

Freeプランをお使いの場合、月間の累積処理時間が処理時間枠を超過した時点で、ジョブ実行できなくなりました。
累積処理時間は翌月初日の0時（UTC+9）になると0時間に戻ります。実行されなかったジョブがあった場合、翌月になってから再実行してください。

### 転送設定

#### 転送先kintoneの`update`/`upsert`におけるアップデートキーにレコードIDを指定できるように

アップデートキーに[レコードID](https://jp.cybozu.help/k/ja/id/040536.html)を指定できるようになりました。
レコードIDを指定したい場合、アップデートキーに`$id`と入力してください。

## 2024-06-03

### コネクタAPIアップデート

#### 転送先Google Ads コンバージョン

**拡張コンバージョン**に関して、転送時に使用するGoogle Ads APIのバージョンを、v14.1から**v16**へアップデートしました。

新バージョンについて、[Google Ads API](https://developers.google.com/google-ads/api/docs/release-notes#v16)のドキュメントを参照ください。

## 2024-05-27

### データマート定義

#### データマートSnowflake

出力先テーブルの書き込み設定として、全件洗い替えモードを`TRUNCATE INSERT`と`REPLACE`の2種類から選択できるようになりました。

- `TRUNCATE INSERT`の場合、既存テーブルのスキーマは削除されません。
- `REPLACE`の場合、既存のテーブルのスキーマは削除されます。

両者の違いについて、詳しくは[データマート - Snowflake](/docs/datamart-snowflake)を参照ください。

### コネクタAPIアップデート

#### 転送元Google Ads・転送先Google Ads コンバージョン

転送時に使用するGoogle Ads APIのバージョンを、v14.1から**v16**へアップデートしました。

転送先Google Ads コンバージョンに関して、**オフラインコンバージョン**のみアップデートされています。
**拡張コンバージョン**のアップデートは来週対応予定です。

新バージョンについて、[Google Ads API](https://developers.google.com/google-ads/api/docs/release-notes#v16)のドキュメントを参照ください。

#### 転送元Yahoo!検索広告・転送元Yahoo!ディスプレイ広告（運用型）

転送時に使用するYahoo!広告 APIのバージョンを、v11から**v12**へアップデートしました。
新バージョンについて、それぞれ以下のドキュメントを参照ください。

- [Yahoo!広告 API | 検索広告 API v12 リリースノート](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/ysa-v12.html)
- [Yahoo!広告 API | ディスプレイ広告 API v12 リリースノート](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/yda-v12.html)

## 2024-05-20

### お知らせ

#### 転送元Google AdsのAPIアップデートについて

**2024年05月22日（水）の10時から16時**の間に、転送元Google Adsで利用しているGoogle Ads APIのアップデートが行われます。
APIアップデートに伴い、一部破壊的な変更が発生します。
削除・変更されるリソース/フィールド、および対処方法について、詳しくは[2024/05/16 転送元Google Adsの破壊的変更について](/docs/breaking-changes-google-ads-v16)を参照ください。

## 2024-05-13

### お知らせ

2024年5月9日に、ブランドリニューアルを発表しました。
ブランドリニューアルに伴い、プロダクトのロゴタイプを`trocco`から`TROCCO`へと変更し、またロゴの色調も変更しています。

![release-notes-2024-08-29-6-58-6](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-6.png)

新しいロゴの画像ファイルおよびロゴのガイドラインに関しては、[弊社ホームページ](https://primenumber.co.jp/presskit/)よりご確認いただけます。
また、ブランドリニューアルについては、[プレスリリース](https://prtimes.jp/main/html/rd/p/000000082.000039164.html)を参照ください。

### 接続情報

#### Microsoft SQL Server接続情報にてSSH秘密鍵のパスフレーズを入力できるように

設定項目に**SSH秘密鍵のパスフレーズ**を追加しました。
これにより、Microsoft SQL Serverに対してパスフレーズ付きの秘密鍵で接続できるようになりました。

## 2024-04-30

### セキュリティ

#### TROCCO APIの実行時にIPアドレスによる制限がなされるように

[TROCCO API](/docs/trocco-api)の実行が、IPアドレス制限の対象となりました。
これにより、TROCCO APIをよりセキュアに利用いただけるようになりました。

:::(Warning) (本仕様変更に伴うお願い)

すでにTROCCO APIを利用しており、かつ**アカウントセキュリティ > アクセス許可するIPアドレス**を1つでも設定している場合、**TROCCO APIの実行に用いるIPアドレスをアクセス許可IPに追加**する必要があります。
:::

### データマート定義

#### データマートAzure Synapse Analytics

データマートAzure Synapse Analyticsを新たに追加しました。
詳しくは、データマート - Azure Synapse Analyticsを参照ください。

### 転送設定

#### 転送元Google Spreadsheetsのカラム抽出が可能に

これまでは、転送設定STEP1にて、取得したいカラムの名前およびデータ型を手動入力する必要がありました。
これに対し、転送対象のスプレッドシートから**カラム情報を抽出**する機能が追加されました。

各種設定項目を入力したうえで**カラム情報を抽出**をクリックすると、**カラム名およびデータ型が自動で設定**されます。
なお、上記機能追加に伴い、**取り込み開始列番号**を指定する入力項目も追加されています。
詳しくは、[転送元 - Google Spreadsheets](/docs/data-source-google-spreadsheets)を参照ください。

## 2024-04-22

### 転送設定

#### 転送元Yahoo!検索広告・転送元Yahoo!ディスプレイ広告（運用型）

[Yahoo!広告 APIv11の提供終了](https://ads-developers.yahoo.co.jp/ja/ads-api/announcement/24011801.html)に伴い、Yahoo!広告 APIのバージョンをv11から**v12**へアップデートするため、以下の転送元コネクタの設定に**ベースアカウントID**の入力項目を追加しました。

-  転送元Yahoo!検索広告
-  転送元Yahoo!ディスプレイ広告（運用型）

詳しくは、[v12バージョンアップ情報](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/whats-new-on-v12.html)の「MCC複数階層化」を参照ください。

なお、v12への移行は2024年5月中旬ころを予定しています。
v12への移行が完了し次第、**ベースアカウントID**が未入力である転送設定のジョブはエラーとなります。
お手数ですが、v12移行前に既存の転送設定を編集することをお願いいたします。

## 2024-04-15

### 転送設定

#### 転送先kintoneでテーブルへ転送できるように

kintoneアプリ内のテーブル（旧：サブテーブル）にデータを転送できるようになりました。
転送方法について、詳しくは転送先kintoneの[アプリ内のテーブル（旧：サブテーブル）を更新したい場合](/docs/data-destination-kintone#アプリ内のテーブル旧サブテーブルを更新したい場合)を参照ください。

#### 転送元Google BigQueryで一時データエクスポート指定に「バケットのみ指定」を選択できるように

転送元Google BigQueryからデータを転送する場合、データは一時的にGoogle Cloud Storageに出力されます。
この際の一時データの出力先として、**バケットのみを指定**できるようになりました。

なお、これまでの**Google Storage URL**を入力する形式では、カスタム変数を利用しない限り、同一のパスに一時データが出力されます。
そのため、Google Cloud Storage上のデータが上書きされる可能性がありました。
一方、**バケットのみを指定**した場合、内部的にユニークなパスが生成され、そのパスに一時データが出力されます。
そのため、前述のような、Google Cloud Storage上のデータが上書かれて削除される、といったことを避けることができます。

## 2024-04-08

### UI・UX

#### TROCCOアカウントに組織名を設定できるように

お使いのTROCCOアカウントに**組織名**を設定できるようになりました。
組織名を設定することで、たとえば複数のTROCCOアカウントを管理している場合に、どのTROCCOアカウントにログインしているかを識別しやすくなります。
詳しくは、[組織名について](/docs/organization-name)を参照ください。

### マネージドデータ転送

#### 転送先にAmazon Redshiftを追加

マネージドデータ転送の転送先として、Amazon Redshiftを選択できるようになりました。
転送元のデータソースを一括で取得してAmazon Redshiftへ転送する転送設定を、一元作成・管理できます。

### コネクタAPIアップデート

#### 転送元Google Ad Manager

転送時に使用するGoogle Ad Manager APIのバージョンを、 v202305から**v202311**へアップデートしました。
新バージョンについては、[Google Ad Manager API](https://developers.google.com/ad-manager/api/rel_notes#v202311)を参照ください。

## 2024-04-01

### お知らせ

2024年4月1日より、料金プランが改定されます。
詳しくは、[料金プラン](https://primenumber.com/trocco/pricing)を参照ください。

### 転送設定

#### 転送元Shopifyで`collection`の取得に対応

転送元Shopifyの**ターゲット**にて、`collection`オブジェクトを選択できるようになりました。
取得される各項目など、詳しくは[転送元 - Shopify](/docs/data-source-shopify#コレクション)を参照ください。

#### 転送先Amazon Redshiftで指定できる型が追加

転送先Amazon RedshiftのSTEP2出力オプションの**カラム設定**にて、データ型に指定できる項目として下記が追加されました。

- `TIME`
- `DATE`

#### 転送先kintoneで転送されるNULL値の更新処理設定が追加

kintoneの既存レコードに対する更新データに`NULL`値が含まれる場合に、その更新処理を選択できるようになりました。
転送設定STEP1の詳細設定にて、**NULLで更新する**か**更新をスキップする**かを選択できます。

## 2024-03-25

### 転送設定

#### 転送先Azure Synapse Analytics

転送先Azure Synapse Analyticsを新たに追加しました。
詳しくは、[転送先 - Azure Synapse Analytics](/docs/data-destination-azure-synapse-analytics)を参照ください。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-7.png){height="" width="50%"}

## 2024-03-18

### 転送設定・マネージドデータ転送

#### Snowflakeへの転送ジョブ失敗時に一時ステージを削除できるように

Snowflakeへの転送ジョブがエラーとなった場合に、一時ステージを削除するか選択できるようになりました。
詳しくは、[転送先 - Snowflake > STEP1 詳細設定](/docs/data-destination-snowflake#step1-詳細設定)を参照ください。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-8.png){height="" width="50%"}

### UI・UX

#### 転送設定データプレビューの最大件数を20件に変更

転送設定STEP2や転送設定詳細のデータプレビューに表示されるデータの最大件数を**20件**に変更しました。
この変更により、転送設定STEP2の**スキーマ・データのプレビュー**にデータプレビューが表示されるまでの時間が短くなりました。

### コネクタAPIアップデート

#### 転送先Facebook カスタムオーディエンス(β版)

転送時に使用するFacebook APIのバージョンを、v17から**v18**へアップデートしました。
新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version18.0)のドキュメントを参照ください。

## 2024-03-11

### ワークフロー定義

#### ワークフロージョブの実行ログ内で転送ジョブのエラーログを確認できるように

ワークフローに組み込まれた転送ジョブが失敗した際に、ワークフロー実行ログから該当転送ジョブのエラーログを確認できるようになりました。
ワークフロー実行ログの該当タスクをクリックすることで、エラーログを確認できます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-9.png){height="" width="50%"}

### コネクタAPIアップデート

下記コネクタに利用しているFacebook APIを、v17から**v18**へアップデートしました。

- 転送元Facebook Ad Insights
- 転送元Facebook Ad クリエイティブ
- 転送元Facebookリード広告
- 転送先Facebook コンバージョンAPI

新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version18.0)のドキュメントを参照ください。

### 監査ログ

#### 転送設定の「過去のリビジョンを復元」するアクションを監査ログの取得対象から削除

監査ログの取得対象アクションから、「転送設定の更新（変更履歴の過去のリビジョンを復元）」を削除しました。
詳しくは、[監査ログ機能の変更履歴](/docs/about-audit-log#監査ログ機能の変更履歴)を参照ください。

## 2024-03-04

### お知らせ

#### TROCCO Web行動ログのDocsについて

これまで、TROCCO Web行動ログのDocsは、Confluenceのスペース上にて公開していました。
この度、TROCCO DocsにDocsを移管しました。今後は、[TROCCO Web行動ログ](/docs/n-analytics-log)を参照ください。
なお、Confluence側のDocsは近日中に閉鎖する予定です。

### UI・UX

#### 転送設定一覧で接続情報による絞り込みができるように

転送設定一覧の絞り込み項目に**接続情報**を追加しました。
指定した接続情報が使用されている転送設定で絞り込むことができます。
詳しくは、[転送設定一覧 > 絞り込み](/docs/etl-configuration-list#絞り込み)を参照ください。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-10.png){height="" width="50%"}

### 転送設定

#### 転送元SFTPで取得するファイルのパスを正規表現で指定できるように

転送設定STEP1で、取得するファイルのパスを正規表現で指定できるようになりました。
たとえば、**パスの正規表現**に`\.csv$`と入力すると、**パスプレフィックス**で指定したディレクトリ配下のcsvファイルのみ取得されます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-11.png){height="" width="50%"}

### ワークフロー定義

#### 手動実行されたワークフロージョブに実行ユーザーが表示されるように

これまで、ワークフロージョブが手動実行された場合、どのユーザーが実行したのか表示されていませんでした。
今回の変更で、以下の場合に実行したユーザーのメールアドレスが表示されるようになりました。

- ワークフロー定義詳細画面の**実行**ボタンをクリックして実行した場合
- ワークフロージョブ詳細画面の**停止位置から再実行**をクリックして実行した場合

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-12.png){height="" width="50%"}

#### 実行元のワークフロージョブへのリンクが表示されるように

これまで、別のワークフロージョブのタスクとして実行されたワークフロージョブが、どのワークフロージョブにより実行されたのか表示されていませんでした。
今回の変更で、実行元となったワークフロージョブへのリンクが表示されるようになりました。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-13.png){height="" width="50%"}

## 2024-02-26

### 転送設定

#### UNIX時間変換の時間単位にマイクロ秒とナノ秒を追加

転送設定STEP2の**UNIX時間変換**で扱うことができるUNIX時間の単位を拡充しました。
変換前と変換後のUNIX時間の単位として**マイクロ秒**と**ナノ秒**を選択できるようになりました。
詳しくは、[UNIX時間変換](/docs/template-etl#unix時間変換)を参照ください。

![release-notes-2024-08-29-6-58-14](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-14.png){height="" width="50%"}

## 2024-02-19

### データカタログ

#### Snowflake版データカタログで「メタデータ自動引き継ぎ」と「カラムリネージ」に対応

これまで、データカタログの[メタデータ自動引き継ぎ](/docs/table-information-v1)と[カラムリネージ](/docs/table-information-v1#カラムリネージ)は、Google BigQuery版にのみ対応していました。
今回の変更で、Snowflake版データカタログでも同様の機能が利用可能になりました。

![release-notes-2024-08-29-6-58-15](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-15.png){height="" width="50%"}

### 転送設定

#### 転送先PostgreSQLのマージキー設定方法を変更

転送設定STEP1で**転送モード**を`UPSERT (MERGE)`にした場合の、マージキーの設定方法を変更しました。
これまでは、転送設定STEP2でマージキーを設定する必要がありました。
今回の変更で、転送設定STEP1の**転送モード**で`UPSERT (MERGE)`を選択すると、直下に**マージキー**の設定項目が表示されるようになりました。

![release-notes-2024-08-29-6-58-16](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-16.png){height="" width="50%"}

### コネクタAPIアップデート

#### 転送元Shopify

転送時に使用するShopify APIのバージョンを、2023-01から**2024-01**へアップデートしました。
新バージョンについて、[Shopify API reference docs](https://shopify.dev/docs/api/release-notes/2024-01)のドキュメントを参照ください。

## 2024-02-13

### マネージドデータ転送

#### 転送元にMicrosoft SQL Serverを追加

マネージドデータ転送の転送元にMicrosoft SQL Serverを選択できるようになりました。
Microsoft SQL Serverのテーブルを一括で取り込み、紐づく転送設定を一元作成できます。
各種入力項目については、[マネージド転送設定 > 転送元Microsoft SQL Serverの場合](/docs/managed-etl-configurations#転送元microsoft-sql-serverの場合)を参照ください。

![release-notes-2024-08-29-6-58-17](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-17.png){height="" width="50%"}

### 転送設定

#### 転送元LINE広告で取得できる広告のマスターデータのカラムを拡充

広告のマスターデータとして取得されるデータのカラムに、`small_delivery`を追加しました。
広告のマスターデータは、転送設定STEP1にて**ダウンロード種別**で**マスターデータ(広告)**を選択、**マスターデータ種別**で**広告**を選択した場合に取得できます。

なお、既存の転送設定で`small_delivery`カラムを取り込むには、転送設定を編集し、**自動データ設定**を実行する必要があります。
転送設定編集画面のSTEP1からSTEP2に遷移する際に表示される画面で**自動データ設定を実行**を選択し、保存してください。
![release-notes-2024-08-29-6-58-18](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-18.png){height="" width="50%"}

## 2024-02-05

### 転送設定

#### 転送元Criteoで指定できるディメンションの種類を拡充

転送設定STEP1の**ディメンション名**で`CampaignId`と`Campaign`を選択できるようになりました。
**ディメンション名**は、**レポートタイプ**に`statistics`を選択した際に表示される項目です。

![release-notes-2024-08-29-6-58-19](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-19.png){height="" width="50%"}

### コネクタAPIアップデート

#### 転送元Yahoo!検索広告・転送元Yahoo!ディスプレイ広告（運用型）

転送時に使用するYahoo!広告 APIのバージョンを、v10から**v11**へアップデートしました。
新バージョンについて、[Yahoo!広告 API | Developer Center](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/ysa-v11.html)のドキュメントを参照ください。

APIアップデートにより、旧指標は廃止されました。
今後はカラム名に「(旧)」を含むカラムが指定されている場合、自動的に新カラムが取得されます。

## 2024-01-29

### 転送設定

#### 転送先Snowflakeがスキーマ追従に対応

転送先Snowflakeが[スキーマ追従](/docs/schema-sync)に対応しました。
**スキーマ追従**とは、「転送対象のデータ」と「転送先コネクタ側のテーブル」との間でスキーマの差分が発生した場合に、転送先コネクタ側テーブルのスキーマを自動修正して、スキーマの差分を解消する機能です。
今後は上記スキーマの差分が発生した場合に、Snowflake側で手動でスキーマを修正する必要はございません。

### UI・UX

#### 転送設定一覧で転送設定名を正規表現で絞り込めるように

転送設定一覧で転送設定名を正規表現で絞り込めるようになりました。
入力できる正規表現の記法について、詳しくは[正規表現による転送設定名の絞り込み](/docs/etl-configuration-list#正規表現による転送設定名の絞り込み)を参照ください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-20.png){height="" width="50%"}

#### マネージド転送設定作成時にタイムゾーン設定の値がデフォルトで適用されるように

マネージド転送設定作成時のSTEP1にて選択するタイムゾーンの値に、[タイムゾーン設定](/docs/time-zone)で指定した値がデフォルトで入力されるようになりました。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-21.png){height="" width="50%"}

### コネクタAPIアップデート

#### 転送先Google Ads コンバージョン

転送時に使用するGoogle Ads APIのバージョンを、v13.1から**v14.1**へアップデートしました。
**オフラインコンバージョン**・**拡張コンバージョン**のいずれもアップデートされています。
新バージョンについて、[Google Ads API](https://developers.google.com/google-ads/api/docs/release-notes#v14_1)のドキュメントを参照ください。

## 2024-01-22

### マネージドデータ転送

#### テーブルの一括選択・解除、およびテーブル名のフィルタリングが可能に

これまではページネーション単位（最大100テーブル/回）の選択しかできませんでした。
今回の変更で、ページネーションにかかわらず、一括選択と一括解除ができるようになりました。
加えて、テーブル名でフィルタリングも可能になりました。

なお、本変更は以下の画面に適用されます。
- **新規作成STEP2**
- **未追加テーブル一覧**
- **テーブル増減の確認**
  
![release-notes-2024-08-29-6-58-22](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-22.png){height="" width="50%"}

### 転送設定

#### 転送元Google Adsのリソースタイプに「Change event」を追加

転送設定STEP1の「リソースタイプ (レポート種別)」に`Change event (change_event)`を追加しました。
アカウント内で発生した変更内容のレポートを取得できるようになりました。
`change_event`について、詳しくは[Google Ads API](https://developers.google.com/google-ads/api/fields/v14/change_event)のドキュメントを参照ください。

![release-notes-2024-08-29-6-58-23](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-23.png){height="" width="50%"}

#### 転送元ValueCommerceで広告主向けレポートを取得できるように

これまでは、レポートの取得対象は**アフィリエイトサイト**のみとなっていました。
今回の変更で、**広告主**のレポートも取得できるようになりました。
詳しくは、[転送元 - ValueCommerce](/docs/data-source-valuecommerce)を参照ください。

![release-notes-2024-08-29-6-58-24](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-24.png){height="" width="50%"}

### UI・UX

#### 画面右上のポップアップメニューのデザインを刷新

自身のメールアドレス部分をクリックしたときに表示される、ポップアップメニューのデザインを刷新しました。
組織IDや自身の権限などが確認できるとともに、アカウントおよびユーザーに関する各種設定にワンクリックで遷移できるようになりました。

また、下記のページへのリンクは、今回の変更でポップアップメニューから画面左のサイドバーに移動しています。
- GitHubアクセストークン（**外部連携**配下）
- TROCCO API KEY（**外部連携**配下）
- 監査ログ出力

![release-notes-2024-08-29-6-58-25](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-25.png){height="" width="50%"}

### コネクタAPIアップデート

#### 転送元Google Ads・転送先Google Ads コンバージョン

転送時に使用するGoogle Ads APIのバージョンを、v13.1から**v14.1**へアップデートしました。
新バージョンについて、[Google Ads API](https://developers.google.com/google-ads/api/docs/release-notes#v14_1)のドキュメントを参照ください。

## 2024-01-15

### 転送設定

#### 転送元TROCCO Web行動ログのデータ取得期間を指定できるように

転送設定STEP1で、データ取得期間を指定できるようになりました。
**開始日**と**終了日**を指定して、任意の期間のTROCCO Web行動ログデータを取得できます。
詳しくは、[転送元 - TROCCO Web行動ログ](/docs/data-source-n-analytics-log)を参照ください。

![release-notes-2024-08-29-6-58-26](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-08-29-6-58-26.png){height="" width="50%"}

### 接続情報

#### クライアントクレデンシャルズを利用したHTTP・HTTPS接続情報を作成可能に

HTTP・HTTPS接続情報で、グラントタイプを**認可コード**か**クライアントクレデンシャルズ**から選択できるようになりました。
これまでグラントタイプは固定で**認可コード**となっていましたが、今回のリリースで**クライアントクレデンシャルズ**も選択できるようになりました。
詳しくは、[HTTP・HTTPSの接続情報](/docs/connection-configuration-http-https)を参照ください。

### データカタログ

#### パーティション分割テーブルを取り込む際の仕様を変更

Google BigQueryデータカタログにおいて、[パーティション分割テーブル](https://cloud.google.com/bigquery/docs/partitioned-tables)をカタログデータとして取得する仕様が変更されました。
今後、パーティション分割テーブルについては、**最新の日付のテーブルのみ**カタログデータとして取得します。

:::(Info) (仕様変更の理由)

これまでは、[パーティション分割テーブル](https://cloud.google.com/bigquery/docs/partitioned-tables)における、セグメントすべてをカタログデータとして取得していました。
各セグメントがデータカタログ上で別々のテーブルとみなされていたため、テーブル検索時に実質的に同じテーブルが複数件ヒットしたり、基本メタデータやユーザー定義メタデータといった手動でのメタデータ入力の運用が困難となったりしていました。
今後は、**最新の日付のテーブルのみ**を取得するため、テーブルの検索性が高まり、また手動メタデータ入力の運用がしやすくなります。
:::
