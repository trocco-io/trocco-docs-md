---
articleId: 61289dd1-79d3-4fa3-a68c-98a81e021d65
slug: release-note-2023-09
title: リリースノート-2023年09月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2023年09月のリリース情報をお届けします**

---

### お知らせ

:::(Warning) (ログイン方法の変更について)
TROCCOへのログイン方法が変更されました。
詳しくは、[TROCCOへのログイン方法の変更について](/docs/change-login-trocco)を参照ください。
:::

## 転送設定

### 転送先Facebook カスタムオーディエンス(β版) 🎉

転送先Facebook カスタムオーディエンス(β版)を新たに追加しました。
各種入力項目やカラムマッピングについて、詳しくは[転送先 - Facebook カスタムオーディエンス(β版)](/docs/data-destination-facebook-custom-audience)を参照ください。

### 転送先ファイル・ストレージ系コネクタがzip形式のファイル圧縮に対応 🎉

一部の転送先ファイル・ストレージ系コネクタで、zip形式でのファイル圧縮に対応しました。
下記のコネクタを転送先とした転送設定STEP1の**ファイル圧縮**で、`zip`を選択可能です。

- 転送先Azure Blob Storage
- 転送先FTP・FTPS
- 転送先Google Cloud Storage
- 転送先KARTE Datahub
- 転送先S3
- 転送先SFTP

### 転送元Google BigQueryのジョブ待機タイムアウトを設定できるように 🎉

転送設定STEP1の詳細設定にて、ジョブ待機のタイムアウト時間を秒単位で指定できます。
BigQueryで実行中のクエリが多い場合、[スロット制限](https://cloud.google.com/bigquery/docs/slots#query_execution_under_slot_resource_economy)により、ジョブが実行されるまでの待機時間が発生することがあります。この待機時間がタイムアウト時間に達すると、該当の転送ジョブは失敗します。
そのような場合に「ジョブ待機タイムアウト(秒)」を増やすことで、転送ジョブの失敗を回避できます。

### 転送元Oracle Databaseから転送できるデータ型を拡張 🎉

転送元Oracle Databaseから取り込むデータを、`string`型に変換して転送できるようになりました。
転送設定STEP1の**詳細を設定する**をクリックし、対象の**カラム名**を指定し、**データ型**で`string`を選択してください。
たとえば、桁数が多く転送時にデータが欠損してしまっていた数値を、`string`型に変換して転送することで、データの欠損を回避できるようになりました。

### 転送先SnowflakeのNUMBER型出力で精度・スケールを指定できるように 🎉

転送設定STEP2の**出力オプション**タブ > **カラム設定** > **データ型**で、`NUMBER`型の精度・スケールを指定できます。
Snowflakeに転送するデータを、任意の精度・スケールの`NUMBER`型に変換する際にご利用ください。

`NUMBER`型の精度・スケールについて、詳しくは[Snowflake公式ドキュメント - NUMBER](https://docs.snowflake.com/ja/sql-reference/data-types-numeric#number)を参照ください。

### 転送先Salesforceに転送されるNULL値の更新処理設定を追加 🎉

Salesforceの既存レコードに対する更新データに`NULL`値が含まれる場合に、その更新処理を選択できるようになりました。
転送設定STEP1の詳細設定にて、**NULLで更新する**か**更新をスキップする**かを選択できます。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-09-2024-08-29-1-21-0.png){height="" width="50%"}

### 転送日時カラム設定で追加する日時カラムの設定項目を拡充 🎉

転送設定STEP2**詳細設定** > **データ設定**タブ内の**転送日時カラム設定**で、柔軟な設定が可能になりました。
転送日時カラムの**データ型**を`string`にした場合、下記項目を設定できます。
- **フォーマット**: 日時の展開値の形式を指定します。
- **タイムゾーン**: フォーマットのタイムゾーン指定子に展開されるタイムゾーンを、`Etc/UTC`か`Asia/Tokyo`から選択します。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-09-2024-08-29-1-21-1.png){height="" width="50%"}

## マネージドデータ転送

### 転送設定のスキーマ変更検知を一括で設定できるように 🎉

マネージドデータ転送設定STEP3で、転送設定のスキーマ変更検知を一括で設定できるようになりました。
それぞれの転送設定で個々に設定することなく、スキーマ変更の通知を受け取ることができます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-09-2024-08-29-1-21-2.png){height="" width="50%"}

## データマート定義

### Google BigQueryでのデータマート定義で、クラスタリング設定が可能に 🎉

Google BigQueryでのデータマート定義に、**クラスタリング**の設定項目を追加しました。
データマートジョブの実行で新規作成されるテーブルに対して、クラスタリング設定ができるようになりました。

ただし、出力先にすでにテーブルが存在する場合は、本設定の内容ではなく既存テーブルの設定が引き継がれます。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-09-2024-08-29-1-21-3.png){height="" width="50%"}

### Google BigQueryのパーティションフィールドのカスタム変数埋め込み対応 🎉

Google BigQueryでのデータマート定義の**パーティションフィールド**で、カスタム変数埋め込みが可能になりました。
パーティションフィールドの値をジョブ実行時に動的に指定できます。
※**パーティションフィールド**は、**パーティション**を**フィールドにより分割**を選択した場合に入力できる設定項目です。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-09-2024-08-29-1-21-4.png){height="" width="50%"}

## dbt連携

### dbt Gitリポジトリの設定でサブディレクトリの指定が可能に 🎉

Gitリポジトリ内のサブディレクトリを、dbt連携するプロジェクトのディレクトリとして指定できるようになりました。
これまでは、Gitリポジトリのルートディレクトリを固定でプロジェクトディレクトリとしていました。
今後は、Gitリポジトリ内の任意のディレクトリをdbt連携先に指定できます。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-09-2024-08-29-1-21-5.png){height="" width="50%"}

## データカタログ

### Google BigQueryデータカタログでサービスアカウントを使用した認証方式に対応 🎉

Google BigQueryデータカタログの認証方式で、「サービスアカウント（JSONキー）」が選択可能になりました。
詳しくは、[利用開始手順](for-first-datacatalog-users-v1)を参照ください。

## コネクタAPIアップデート

### 転送元Google Ads・転送先Google Ads コンバージョン

転送時に使用するGoogle Ads APIのバージョンを、v12から**v13.1**へアップデートしました。
新バージョンについて、[Google Ads API](https://developers.google.com/google-ads/api/docs/release-notes#v13_1)のドキュメントを参照ください。

### 転送元Facebook Ad Insights

転送時に使用するFacebook APIのバージョンを、**v17**へアップデートしました。
新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version17.0)のドキュメントを参照ください。

## セキュリティ

### ログイン状態が保持される期間を48時間に変更

セキュリティ強化のため、ログイン状態の保持期間を**48時間**に変更しました。
TROCCOを最後に操作してから**48時間**経過すると、ログアウト状態となります。
次にTROCCOへアクセスする際は、ログイン操作が必要になります。

### アクセス許可するIPアドレスをCIDR形式で指定できるように

アクセス許可するIPアドレスを、CIDR形式（IPアドレスとサブネットマスクを同時に表現する書き方）で指定できるようになりました。
たとえば、`192.0.2.0/24`と入力した場合、`192.0.2.0`から`192.0.2.255`までの範囲でアクセスが許可されます。

**セキュリティ**画面の**アクセス許可するIPアドレス**の**追加**ボタンをクリックすると、**アクセス許可IPを追加**画面に遷移します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-09-2024-08-29-1-21-6.png){height="" width="50%"}

## その他

- 転送設定一覧の絞り込みボタンを、常に画面上に表示されるよう固定配置に変更 🎉
- Google BigQueryでのdbtジョブ設定で、ロケーションの選択入力に対応 🎉

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
