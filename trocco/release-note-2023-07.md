---
articleId: c0216bb0-112e-45fd-a1a6-11e08f22cf23
slug: release-note-2023-07
title: リリースノート-2023年07月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2023年07月のリリース情報をお届けします**

---

## ワークフロー定義

### データチェック可能なデータウェアハウスを拡充 🎉

ワークフローの**データチェック**は、データウェアハウスに対するクエリ結果とエラー条件を突合し、条件に合致する場合に該当のタスクをエラーにできる機能です。
今回データチェックができるデータウェアハウスを拡充したことで、下記のデータチェックをワークフローのタスクとして組み込むことが可能となりました。

- Google BigQuery
- **Snowflake**（今回追加）
- **Amazon Redshift**（今回追加）

詳しくは、[ワークフローデータチェック](/docs/workflow-data-check)を参照ください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-07-2024-08-29-18-29-0.png){height="" width="600"}

## 転送設定

### 転送元HTTP・HTTPSの認可方式にOAuth 2.0を追加 🎉

認可方式として**OAuth 2.0**を追加しました。
これにより、OAuth認証が必要なデータソースからデータを取得できるようになりました。
詳しくは、[転送元 - HTTP・HTTPS](/docs/data-source-http)を参照ください。

### XML形式のデータを転送できるファイル・ストレージ系コネクタを拡充 🎉

**転送元HTTP・HTTPS**と**転送元Google Drive**の入力形式の選択肢に「**XML(β版)**」を追加しました。
今回の変更を含め、下記ファイル・ストレージ系コネクタの転送設定で、XML形式のデータを転送できます。

- 転送元App Store Connect API
- 転送元Azure Blob Storage
- 転送元Box
- 転送元FTP・FTPS
- 転送元Google Cloud Storage
- 転送元KARTE Datahub
- 転送元SFTP
- 転送元S3
- 転送元ローカルファイル
- **転送元Google Drive**（今回追加）
- **転送元HTTP・HTTPS**（今回追加）

詳しくは、[入力ファイル形式の設定について](/docs/configuration-of-input-files)を参照ください。

### 転送先HubSpotのオブジェクトタイプの選択肢を拡充 🎉

転送設定STEP1のオブジェクトタイプで、**エンゲージメントオブジェクト**と**カスタムオブジェクト**を選択できるようなりました。
**エンゲージメントオブジェクト**はインタラクションに関するデータの転送先として、**カスタムオブジェクト**は規定オブジェクトでは分類できないデータの転送先として活用いただけます。
詳しくは、[転送先 - HubSpot](/docs/data-destination-hubspot)を参照ください。

### 転送元Yahoo!検索広告でCampaignExportServiceに対応 🎉

転送設定STEP1で選択できるデータ取得対象のサービスに、**CampaignExportService**を追加しました。
**CampaignExportService**にて取得されるフィールドは、[転送元 - Yahoo!検索広告](/docs/data-source-yahoo-search-ads)を参照ください。

### 転送元Zendesk Supportのデータ取得対象を追加 🎉

転送元Zendesk Supportの取得対象に**ticket_comments**を追加しました。
コメントの本文やコメントの送信者のIDなどチケットに関するコメントデータを取得し、転送できるようになりました。
詳しくは、[転送元 - Zendesk Support](/docs/data-source-zendesk-support#データ取得対象にticket_metricsまたはticket_commentsを選択した場合)を参照ください。

## 接続情報

### Snowflake接続情報でロールの指定を可能に 🎉
Snowflake接続情報でロールを指定できるようになりました。
TROCCOからSnowflakeにアクセスする際に必要な権限を付与したロールを、接続情報に紐づけることができます。
未入力の場合、Snowflakeのデフォルトの設定が利用されます。

## UI・UX

### ワークフローの転送設定選択時に、転送設定詳細リンクを追加 🎉

フロー編集画面のTROCCO転送ジョブタスク追加モーダルに、**転送設定詳細画面へのリンク**を追加しました。
これにより、フロー編集画面上から転送設定の内容をすぐに確認できるようになりました。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-07-2024-08-29-18-29-1.png){height="" width="400"}

### 各種詳細ページに組み込み先のワークフロー定義を表示 🎉

ワークフローにタスクとして組み込まれた転送設定やデータマート定義などの各種詳細ページに、組み込まれているワークフロー定義を表示するようになりました。
下記の各種詳細ページにて確認いただけます。

- 転送設定
- マネージド転送設定
- データマート定義
- ワークフロー定義

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-07-2024-08-29-18-29-2.png){height="" width="400"}

### データマート定義各種画面の固定ヘッダーサイズがスクロールに応じて変更 🎉

データマート定義の新規作成・詳細・編集ページで下方にスクロールすると、固定ヘッダーの高さが小さくなります。
データマート定義内容の表示領域が広くなり、画面上に表示される情報量が増えました。

| スクロール前 | スクロール後 |
| --- | --- |
|![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-07-2024-08-29-18-29-3.png) | ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-07-2024-08-29-18-29-4.png) |

## TROCCO API

### ジョブ実行リクエストにタイムゾーンを指定するパラメータを追加 🎉

転送ジョブ実行とワークフロージョブ実行のリクエストパラメータに、**time_zone**を追加しました。
これにより、**context_time**で指定する日時のタイムゾーンを指定できます。
詳しくは、[TROCCO APIについて](/docs/trocco-api)を参照ください。

## コネクタAPIアップデート

### Facebook APIを利用している各種Facebook系コネクタ

下記コネクタに利用しているFacebook APIを、**v16**へアップデートしました。

- 転送元Facebook Ad クリエイティブ
- 転送元Facebook Ad Insights
- 転送先Facebook コンバージョンAPI

新バージョンについて、詳しくは[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version16.0)を参照ください。

### 転送元Criteo

上記コネクタで使用しているAPIを、**v2023.04**にアップデートしました。
新バージョンについて、詳しくは[Version 2023.04 release notes](https://developers.criteo.com/marketing-solutions/changelog/version-202304-release-notes)を参照ください。

## その他

- 転送元Facebook Ad クリエイティブから転送されるカラムを拡充
- 転送元Adobe Marketo Engageにカスタム変数の埋め込みが可能な項目の拡充
- ワークフロー定義のカスタム変数ループ実行編集フォームで、Snowflakeのウェアハウスをサジェスト表示
- Braze接続情報のホストの選択肢に**rest.fra-02.braze.eu**追加

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
