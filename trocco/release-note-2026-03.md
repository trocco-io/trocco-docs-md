---
articleId: a0544b3f-8090-4d77-bb3d-d904c96d8672
slug: release-note-2026-03
title: リリースノート-2026年3月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2026年3月のリリース情報をお届けします**

## 転送設定

### 転送元Salesforceで差分転送ができるように

転送元Salesforceで、オブジェクトの項目の差分転送をサポートしました。
カラムを基準として、前回転送時からの増分データのみを転送できます。

詳しくは、[転送元 - Salesforce](/docs/data-source-salesforce)を参照ください。

### 転送先BigQueryのカラム設定でデータ型にJSONを指定可能に

転送先BigQueryで、出力オプションのカラム設定でデータ型にJSONを指定できるようになりました。

### 転送先Salesforceでバッチサイズを指定できるように

転送先Salesforceで、1回のAPIコールあたりのレコード数（バッチサイズ）を指定できるようになりました。
Salesforce側のApex Triggerなどで[ガバナ制限](https://developer.salesforce.com/docs/atlas.ja-jp.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apexgov.htm)に抵触する場合に調整が可能です。

### カスタム変数を利用できる箇所が拡大

以下の箇所で、新たにカスタム変数を利用できるようになりました。

- 入力ファイル形式にJSONPath、Microsoft Excel、XMLを選択した場合の設定項目
  - JSONPath：**ルート**
  - Microsoft Excel：**シート名**
  - XML：**ルートのパス**
- 転送元Oracle Databaseの**データベース**

### 転送先Salesforceで外部IDによる更新が可能に

転送先Salesforceで更新モードに`UPDATE`を選択した場合に、外部IDを更新キーとして指定できるようになりました。

### 転送元MongoDBで不正なレコードを検知した場合の処理を設定可能に

転送先MongoDBで、転送中に不正なレコードを検知した場合の処理を設定できるようになりました。

詳しくは、[転送元 - MongoDB](/docs/data-source-mongodb)を参照ください。

### 転送先BigQueryの出力オプションでRECORD型のフィールドを定義できるように

転送先BigQueryの出力オプションにて、RECORD型カラムのフィールドを定義できるようになりました。

### 転送先MySQLの出力オプションで日時型を選択できるように

転送元MySQLの出力オプションにて、カラム設定で`DATE`・`DATETIME`・`TIMESTAMP`・`TIME`をサポートしました。

### 転送元Hubspotで選択できるオブジェクトタイプの拡充

転送元Hubspotで、新規に以下のオブジェクトタイプを指定できるようになりました。

- email
- meeting
- note
- postal_mail
- task

取得対象がオブジェクト・アソシエーションで上記データが取得可能になったことにあわせて、以下2つの取得対象を非推奨としました。

- エンゲージメント
- エンゲージメントのアソシエーション

### 転送元Hubspotで取得するオブジェクトのプロパティを指定できるように

転送元Hubspotで、取得対象にオブジェクトを選択した場合に、取得するプロパティを指定できるようになりました。

### 広告系コネクタで転送時のハッシュ化仕様を変更

一部の広告系コネクタにて、メールアドレスや電話番号などで実行されていた転送時のハッシュ化処理の仕様を変更しました
詳しくは、[カスタムオーディエンス系コネクタのハッシュ化仕様変更のお知らせ](https://help.trocco.io/hc/ja/articles/5231275334558)を参照ください。

## マネージド転送設定

### 転送元Salesforceの差分転送に対応

マネージド転送で、転送元Salesforceの差分転送が可能になりました。

### 転送先BigQueryでカラムの説明とポリシータグの保持機能を追加

マネージド転送においても、転送先BigQueryでREPLACEモード実行時にカラムの説明とポリシータグを保持する機能を追加しました。

一部の広告系コネクタにて、メールアドレスや電話番号などで実行されていた転送時のハッシュ化処理の仕様を変更しました
詳しくは、[カスタムオーディエンス系コネクタのハッシュ化仕様変更のお知らせ](https://help.trocco.io/hc/ja/articles/5231275334558)を参照ください。

## データマート

### 品質チェック機能で複合カラムの一意性チェックが可能に

データマートBigQueryの品質チェック機能にて、複合カラムの一意性チェックが可能になりました。
複数カラムの組み合わせに重複がないかチェックができます。

詳しくは、[データマート - Google BigQuery](/docs/datamart-bigquery)を参照ください。

### データマートジョブ実行時に処理対象期間の上書き設定が可能に

書き込みモードが「増分更新」のデータマートジョブ実行時に、データマート定義の処理対象期間を上書きできるようになりました。
過去の期間のデータ修正が必要になった場合などにご活用いただけます。

### 品質チェックエラー検出時の通知が可能に

データマート定義の通知設定にて、通知タイプに**ジョブ成功、かつ品質チェックエラー検出時**を指定できるようになりました。

### 処理対象期間の基準カラムにDATE型のカラムを指定できるように

増分更新やSCD Type 2、品質チェック設定で指定できる処理対象期間の基準カラムについて、DATE型のカラムも指定可能になりました。

詳しくは、[データマート - Google BigQuery](/docs/datamart-bigquery#処理対象期間の範囲指定について)を参照ください。

## CDCデータ転送

### 除外したテーブルがスキーマ更新時のダイアログに表示されるように

スキーマ更新時の確認ダイアログにて、更新対象から除外したテーブルが確認ダイアログに表示されるようになりました。

## カスタムコネクタ

### 転送先カスタムコネクタでパスパラメータを利用可能に

転送先カスタムコネクタで、パスパラメータを使った動的なパスを指定可能になりました。
パスに個別のIDを含める必要があるAPIなどでも転送先カスタムコネクタを利用できるようになりました。

## その他

### TROCCOのトップページ・ログインページからお知らせを確認できるように

TROCCOのトップページ・ログインページから、[ヘルプセンターのお知らせ](https://help.trocco.io/hc/ja/categories/4772466079262-%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B)を確認できるようになりました。

### スケジュール設定の有効化・無効化が可能に

スケジュール設定のON・OFFを切り替えできるようになりました。
詳しくは、[スケジュール機能について](/docs/schedule-settings)を参照ください。

また、以下の画面で、登録されたスケジュール設定がすべてON・OFFかどうかで絞り込みができるようになりました。

- 転送設定一覧
- データマート定義一覧
- ワークフロー定義一覧

## コネクタAPIアップデート

### 転送先Amazon S3 Parquet

転送時に使用するAWS SDKのバージョンを、v1から**v2**へアップデートしました。
新バージョンについては、[AWS SDK for Java 2.x](https://docs.aws.amazon.com/ja_jp/sdk-for-java/latest/developer-guide/home.html)を参照ください。

## TROCCO API

### 転送設定APIの対応コネクターが拡充

転送設定・接続情報APIの操作対象として、以下が追加されました。

- 接続情報 - Amazon Redshift
- 接続情報 - Google Drive
- 転送元 - Google Drive
- 転送先 - Google Drive
- 転送元 - Backlog
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

### 接続情報APIでMongoDBの対応プロパティを拡充

接続情報APIにて、MongoDBの読み込み設定タグの設定に対応しました。
