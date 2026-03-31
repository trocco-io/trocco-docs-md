---
articleId: 498e8d10-e719-42b2-a686-0b9e0886c929
slug: release-note-2024-02
title: リリースノート-2024年02月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2024年02月のリリース情報をお届けします**

---
## UI・UX

### 転送設定一覧で接続情報による絞り込みができるように 🎉

転送設定一覧の絞り込み項目に**接続情報**を追加しました。
指定した接続情報が使用されている転送設定で絞り込むことができます。
詳しくは、[転送設定一覧 > 絞り込み](/docs/etl-configuration-list#絞り込み)を参照ください。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-02-2024-08-29-5-0-0.png){height="" width="50%"}

## 転送設定

### 転送元LINE広告で取得できる広告のマスターデータのカラムを拡充 🎉

広告のマスターデータとして取得されるデータのカラムに、`small_delivery`を追加しました。
広告のマスターデータは、転送設定STEP1にて**ダウンロード種別**で**マスターデータ(広告)**を選択、**マスターデータ種別**で**広告**を選択した場合に取得できます。

なお、既存の転送設定で`small_delivery`カラムを取り込むには、転送設定を編集し、**自動データ設定**を実行する必要があります。
転送設定編集画面のSTEP1からSTEP2に遷移する際に表示される画面で**自動データ設定を実行**を選択し、保存してください。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-02-2024-08-29-5-0-1.png){height="" width="50%"}

### 転送先PostgreSQLのマージキー設定方法を変更 🎉

転送設定STEP1で**転送モード**を`UPSERT (MERGE)`にした場合の、マージキーの設定方法を変更しました。
これまでは、転送設定STEP2でマージキーを設定する必要がありました。
今回の変更で、転送設定STEP1の**転送モード**で`UPSERT (MERGE)`を選択すると、直下に**マージキー**の設定項目が表示されるようになりました。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-02-2024-08-29-5-0-2.png){height="" width="50%"}

### 転送元SFTPで取得するファイルのパスを正規表現で指定できるように 🎉

転送設定STEP1で、取得するファイルのパスを正規表現で指定できるようになりました。
たとえば、**パスの正規表現**に`\.csv$`と入力すると、**パスプレフィックス**で指定したディレクトリ配下のcsvファイルのみ取得されます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-02-2024-08-29-5-0-3.png){height="" width="50%"}

### UNIX時間変換の時間単位にマイクロ秒とナノ秒を追加 🎉

転送設定STEP2の**UNIX時間変換**で扱うことができるUNIX時間の単位を拡充しました。
変換前と変換後のUNIX時間の単位として**マイクロ秒**と**ナノ秒**を選択できるようになりました。
詳しくは、[UNIX時間変換](/docs/template-etl#unix時間変換)を参照ください。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-02-2024-08-29-5-0-4.png){height="" width="50%"}

## マネージドデータ転送

### 転送元にMicrosoft SQL Serverを追加 🎉

マネージドデータ転送の転送元にMicrosoft SQL Serverを選択できるようになりました。
Microsoft SQL Serverのテーブルを一括で取り込み、紐づく転送設定を一元作成できます。
各種入力項目については、[マネージド転送設定 > 転送元Microsoft SQL Serverの場合](/docs/managed-etl-configurations#転送元microsoft-sql-serverの場合)を参照ください。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-02-2024-08-29-5-0-5.png){height="" width="50%"}

## データカタログ

### Snowflake版データカタログで「メタデータ自動引き継ぎ」と「カラムリネージ」に対応 🎉

これまで、データカタログの[メタデータ自動引き継ぎ](/docs/table-information-v1)と[カラムリネージ](/docs/table-information-v1#カラムリネージ)は、Google BigQuery版にのみ対応していました。
今回の変更で、Snowflake版データカタログでも同様の機能が利用可能になりました。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-02-2024-08-29-5-0-6.png){height="" width="50%"}

## ワークフロー定義

### 手動実行されたワークフロージョブに実行ユーザーが表示されるように 🎉

これまで、ワークフロージョブが手動実行された場合、どのユーザーが実行したのか表示されていませんでした。
今回の変更で、以下の場合に実行したユーザーのメールアドレスが表示されるようになりました。

- ワークフロー定義詳細画面の**実行**ボタンをクリックして実行した場合
- ワークフロージョブ詳細画面の**停止位置から再実行**をクリックして実行した場合

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-02-2024-08-29-5-0-7.png){height="" width="50%"}

### 実行元のワークフロージョブへのリンクが表示されるように 🎉

これまで、別のワークフロージョブのタスクとして実行されたワークフロージョブが、どのワークフロージョブにより実行されたのか表示されていませんでした。
今回の変更で、実行元となったワークフロージョブへのリンクが表示されるようになりました。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-02-2024-08-29-5-0-8.png){height="" width="50%"}

## コネクタAPIアップデート

### 転送元Shopify

転送時に使用するShopify APIのバージョンを、2023-01から**2024-01**へアップデートしました。
新バージョンについて、[Shopify API reference docs](https://shopify.dev/docs/api/release-notes/2024-01)のドキュメントを参照ください。

## お知らせ

### TROCCO Web行動ログのDocsについて

これまで、TROCCO Web行動ログのDocsは、Confluenceのスペース上にて公開していました。
この度、TROCCO DocsにDocsを移管しました。今後は、[TROCCO Web行動ログ](/docs/n-analytics-log)を参照ください。
なお、Confluence側のDocsは近日中に閉鎖する予定です。

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
