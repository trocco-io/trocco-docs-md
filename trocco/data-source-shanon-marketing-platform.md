---
articleId: 233ae0c8-d3e4-4079-832c-3a1b25730cc8
slug: data-source-shanon-marketing-platform
title: 転送元 - SHANON MARKETING PLATFORM
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

SHANON MARKETING PLATFORMからレポートデータを転送する設定のDocsです。

## 制約

- 特になし

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| SHANON MARKETING PLATFORM接続情報 | ✓ | [SHANON MARKETING PLATFORMの接続情報](/docs/connection-configuration-shanon-marketing-platform)を参照ください。 |
| オブジェクト | ✓ | 転送するオブジェクトを選択します。<br>転送されるデータについては、[取得できるカラム一覧](/docs/data-source-shanon-marketing-platform#各オブジェクトで設定できる項目と取得できるカラム一覧)を参照ください。 |
| 追加項目 | - | 転送する追加項目（ユーザーが任意で定義した項目）を指定します。<br>[追加項目のID確認方法と入力手順](/docs/data-source-shanon-marketing-platform#追加項目のid確認方法と入力手順)にしたがって、追加項目のIDをカンマ区切りで入力してください。（例：`1,5,8`） |
| 登録日時 | - | 登録日時でフィルタリングできます。<br>日本時間（JST）の`YYYY-MM-DD HH:mm:ss`形式で入力してください。（例：`2023-07-31 12:30:00`） |
| 更新日時 | - | 更新日時でフィルタリングできます。<br>日本時間（JST）の`YYYY-MM-DD HH:mm:ss`形式で入力してください。（例：`2023-07-31 12:30:00`） |
| 活動日時 | - | 活動日時でフィルタリングできます。<br>日本時間（JST）の`YYYY-MM-DD HH:mm:ss`形式で入力してください。（例：`2023-07-31 12:30:00`） |
| アクセス日時 | - | アクセス日時でフィルタリングできます。<br>日本時間（JST）の`YYYY-MM-DD HH:mm:ss`形式で入力してください。（例：`2023-07-31 12:30:00`） |

#### 各オブジェクトで設定できる項目と取得できるカラム一覧

オブジェクトによって設定できる項目は以下のとおりです。
また、各オブジェクト選択時に取得できるカラム一覧については、下記のリンク先の**HTTPレスポンスボディ**項目で確認できます。

| オブジェクト＼設定項目 | 追加項目 | 登録日時 | 更新日時 | 活動日時 | アクセス日時 |
| --- | :---: | :---: | :---: | :---: | :---: |
| [リード情報](https://apidoc.shanon.co.jp/ja/api/visitor/get.html) | - | ✓ | ✓ | - | - |
| [企業情報](https://apidoc.shanon.co.jp/ja/api/company/get.html) | ✓ | ✓ | ✓ | - | - |
| [企業 - リード紐付け情報](https://apidoc.shanon.co.jp/ja/api/company/visitor/get.html) | - | ✓ | ✓ | - | - |
| [活動履歴情報](https://apidoc.shanon.co.jp/ja/api/visitor/activity/get.html) | ✓ | ✓ | ✓ | ✓ | - |
| [Webトラッキング履歴情報](https://apidoc.shanon.co.jp/ja/api/visitor/trackingaccesslog.html) | - | - | ✓ | - | ✓ |
| [アンケート回答情報](https://apidoc.shanon.co.jp/ja/api/visitor/enquete/get.html) | - | ✓ | ✓ | - | - |
| [メール情報](https://apidoc.shanon.co.jp/ja/api/visitor/mail/get.html) | - | ✓ | ✓ | - | - |
| [キャンペーン情報](https://apidoc.shanon.co.jp/ja/api/seminar/get.html) | - | ✓ | ✓ | - | - |
| [キャンペーン申込情報](https://apidoc.shanon.co.jp/ja/api/visitor/application/seminar.html) | - | - | - | - | - |
| [サブキャンペーン申込情報](https://apidoc.shanon.co.jp/ja/api/visitor/application/session.html) | - | - | - | - | - |
| [アンケート履歴情報](https://apidoc.shanon.co.jp/ja/api/enquetehistory/get.html) | - | ✓ | ✓ | - | - |
| [アンケートテンプレート情報](https://apidoc.shanon.co.jp/ja/api/enquetetemplate/get.html) | - | ✓ | ✓ | - | - |
| [アンケート項目情報](https://apidoc.shanon.co.jp/ja/api/enquetetemplate/question.html) | - | - | - | - | - |
| [申込フロー情報](https://apidoc.shanon.co.jp/ja/api/seminar/flow.html) | - | ✓ | ✓ | - | - |

#### STEP1 詳細設定

**詳細設定**をクリックすると、以下の設定項目が表示されます。

| 項目名 | デフォルト値 |
| --- | --- |
| 接続タイムアウト (ミリ秒) | 300 |
| 接続リクエストタイムアウト（秒）| 300 |
| ソケットタイムアウト（秒）| 300 |

### 追加項目のID確認方法と入力手順

#### 企業情報

1. SHANON MARKETING PLATFORM管理画面にログインします。
2. 管理画面の**企業**>**項目追加**をクリックします。
   ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-shanon-marketing-platform-2024-08-29-8-34-0.png){height="" width="400"}
3. 項目一覧から、IDを確認したい項目の**詳細**をクリックします。
   ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-shanon-marketing-platform-2024-08-29-8-34-1.png){height="" width="600"}
4. URLの末尾のIDを入力します。
   ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-shanon-marketing-platform-2024-08-29-8-34-2.png){height="" width="600"}

#### 活動履歴情報

1. SHANON MARKETING PLATFORM管理画面にログインします。
2. 管理画面の**リード**>**活動履歴の項目設定**をクリックします。
   ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-shanon-marketing-platform-2024-08-29-8-34-3.png){height="" width="400"}
3. 項目一覧から、IDを確認したい項目の**詳細**をクリックします。
   ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-shanon-marketing-platform-2024-08-29-8-34-4.png){height="" width="600"}
4. URLの末尾のIDを入力します。
   ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-shanon-marketing-platform-2024-08-29-8-34-5.png){height="" width="600"}

