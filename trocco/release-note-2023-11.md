---
articleId: ee4af32f-6b12-424a-9692-dfe997f27748
slug: release-note-2023-11
title: リリースノート-2023年11月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2023年11月のリリース情報をお届けします**

---
## 転送設定

### 転送元HTTP・HTTPSでカーソルベースのページングリクエストが可能に 🎉

転送元HTTP・HTTPSでデータを取得する際に、カーソルベースのページングリクエストが可能になりました。
転送設定STEP1のページング設定で**カーソルベース**を選択すると、カーソルベース用の各種設定項目が表示されます。
詳しくは、[転送元 - HTTP・HTTPS](/docs/data-source-http#カーソルベースを選択した場合)を参照ください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-11-2024-08-29-17-41-0.png){height="" width="50%"}

### 転送元Google Analytics 4で一回のリクエストで取得する行数を指定できるように 🎉

転送設定STEP1の詳細設定にて、Google Analytics 4からデータを取得する際の**一回のリクエストで取得する行数**を指定できるようになりました。
ジョブ実行時に`OutOfMemoryError`が発生した場合、本項目の値を調整することでエラーを解消できることがあります。
詳しくは、[転送先 - Google Analytics 4](/docs/data-source-google-analytics4#outofmemoryerrorが発生した場合)を参照ください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-11-2024-08-29-17-41-1.png){height="" width="50%"}

### 転送元Google Analytics 4に「（other）」行が含まれる場合のステータス設定を追加 🎉

**「（other）」行が使用されている場合のステータス**を選択できるようになりました。
取得したデータに「（other）」行が含まれる場合に、ジョブを`Succeeded`にするか、`Error`にするかを選択できます。
「（other）」行について詳しくは、Google Analytics公式ドキュメント[[GA4]「（other）」行について](https://support.google.com/analytics/answer/13331684)を参照ください。 

### 転送先Snowflakeでバッチサイズを指定できるように 🎉

転送設定STEP1の詳細設定で「バッチサイズ (MB)」を指定できるようになりました。
転送時にメモリ不足によるエラーが発生した場合、バッチサイズを調整してエラーを解消できます。
詳しくは、[転送先 - Snowflake](/docs/data-destination-snowflake#step1-詳細設定)を参照ください。

![release-note-2023-11-2024-08-29-17-41-2](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-11-2024-08-29-17-41-2.png){height="" width="50%"}

### 転送元Yahoo!検索広告で広告表示オプション関連のレポートを取得できるように 🎉

転送元Yahoo!検索広告で取得するレポートの種別に「CAMPAIGN_ASSET」と「ADGROUP_ASSET (β版)」を追加しました。
それぞれ、2022年3月に提供が開始された以下のレポートデータを取得できます。
- CAMPAIGN_ASSET：広告表示オプションレポート（キャンペーン）
- ADGROUP_ASSET (β版)：広告表示オプションレポート（広告グループ）

![rn-2023-11-27-input-yahoo-ads](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-11-2024-08-29-17-41-3.png){height="" width="50%"}

### 転送先kintoneでフィールドコードの自動取得に対応 🎉

フィールドコードの自動取得に対応しました。
これまでは、転送設定STEP1にてそれぞれのフィールドコードを手動入力する必要がありました。
今後は指定されたアプリIDに沿って、転送設定STEP2で自動取得されます。

また、転送対象のアプリにテーブル（旧：サブテーブル）が含まれている場合に、テーブル（旧：サブテーブル）内の行ごとにレコードを分割して転送するか、1レコードにまとめて転送するかを選択できるようになりました。

詳しくは[転送元 - kintone](/docs/data-source-kintone)を参照ください。

### 転送先Google Cloud Storageで複数ファイル出力時の命名規則を設定できるように 🎉

**複数ファイル出力時の命名規則**を指定できるようになりました。
転送モードで**並列転送**を選択した場合、転送データが複数ファイルに分割されることがあります。
今後は転送設定STEP1の詳細設定にて、複数ファイルの命名を指定できます。

### 旧Twitter系コネクタの名称変更 🎉

以下のコネクタの名称を変更しました。

- 転送元Twitter Ads → **転送元X Ads (旧Twitter Ads)**
- 転送先Twitter Ads Webコンバージョン → **転送先X Ads (旧Twitter Ads) Webコンバージョン**

## 接続情報

### キーペア認証のSnowflake接続情報を転送設定で使用できるように 🎉

キーペア認証で作成したSnowflake接続情報を転送設定で使用できるようになりました。
これにより、転送元・転送先SnowflakeとデータマートSnowflakeで共通の接続情報を使用できます。

![release-note-2023-11-2024-08-29-17-41-4](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-11-2024-08-29-17-41-4.png){height="" width="50%"}

## マネージドデータ転送

### 転送先Snowflakeの出力モードを拡充 🎉

転送先出力モードとして`UPSERT (MERGE)`が追加されました。
マージキーを基準に、既存テーブルにレコードがある場合はレコードを更新し、レコードがない場合はレコードを追記します。
詳しくは、[転送先 - Snowflake](/docs/data-destination-snowflake#転送モードについて)を参照ください。

## ワークフロー定義

#### ワークフロー定義一覧画面から複製ができるように 🎉

ワークフロー定義一覧画面でワークフロー定義の複製が可能になりました。
ワークフロー定義詳細画面に遷移することなく、任意のワークフロー定義を複製できます。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-11-2024-08-29-17-41-5.png){height="" width="50%"}

## TROCCO API

### アカウント特権管理者はアカウント内のすべてのAPI KEYを管理できるように 🎉

アカウント特権管理者に限り、アカウント内のユーザーが発行したすべてのAPI KEYの閲覧・編集・削除が可能になりました。
これまではAPI KEYを発行したユーザー以外は管理できませんでしたが、これにより、アカウント内のすべてのAPI KEYを一元管理できるようになりました。
詳しくは、[アカウント特権管理者について](/docs/about-super-admin#アカウント内に作成されたすべてのapi-keyの閲覧や操作)を参照ください。

API KEY一覧画面は、画面上部の設定アイコンのメニューから遷移できます。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-11-2024-08-29-17-41-6.png){height="" width="50%"}

## コネクタAPIアップデート

#### ワークフロータスク Tableauデータ抽出 🎉

ワークフロータスクの**Tableauデータ抽出**で使用するTableau REST APIのバージョンを、 3.7から**3.21**へアップデートしました。
新バージョンについては、[Tableau REST API Help](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_whats_new.htm#whats-new-in-rest-api-321-tableau-cloud-october-2023-tableau-server-20233)を参照ください。

## 多言語対応

### 言語設定で韓国語を選択できるように 🎉

TROCCO画面で表示する言語に、韓国語を設定できるようになりました。
韓国語対応の背景については、是非こちらの記事をご覧ください。
[ASCII.jp：primeNumber、韓国SaaS企業とのパートナーシップで「TROCCO」海外展開を本格化](https://ascii.jp/elem/000/004/172/4172746/)

![release-note-2023-11-2024-08-29-17-41-7](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-11-2024-08-29-17-41-7.png){height="" width="50%"}

## その他

- Emailの通知設定でメッセージ内の改行が送信時に適用されるように
- [TROCCO利用規約](/docs/terms)を改訂

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
