---
articleId: 05023068-2e78-462e-8adf-9768d756399b
slug: release-note-2023-08
title: リリースノート-2023年08月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2023年08月のリリース情報をお届けします**

---

## お知らせ

:::(Warning) (ログイン方法の変更について)
2023年10月2日（月）の10時から16時の間に、TROCCOへのログイン方法が変更されます。
詳しくは、[TROCCOへのログイン方法の変更について](/docs/change-login-trocco)を参照ください。
:::

## 転送設定

### 転送元Microsoft Advertisingを追加 🎉

転送元Microsoft Advertisingを新たに追加しました。
Microsoft Advertisingのキーワードやキャンペーンなどのレポートからデータを取得し、転送できるようになりました。
各種入力項目について、詳しくは[転送元 - Microsoft Advertising](/docs/data-source-microsoft-advertising)を参照ください。

### 転送元Twitter Adsのデータ取得対象にcardを追加 🎉

転送元Twitter Adsの取得対象に**card**を追加しました。
これにより、カードのウェブサイトURLなどの情報を取得し、転送できるようになりました。
詳しくは、[転送元 - Twitter Ads](/docs/data-source-twitter-ads)を参照ください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-08-2024-08-29-5-44-0.png){height="" width="400"}

### 出力ファイル形式がCSV/TSVの場合、ヘッダーの有効/無効が選択可能に 🎉

ファイル・ストレージ系コネクタを転送先とする転送設定STEP2の**出力オプション**にて、出力するCSV/TSVのヘッダーの有効/無効を選択できるようになりました。
ヘッダー行が不要な場合は、**無効にする**を選択してください。
詳しくは、[出力ファイル形式の設定について](/docs/configuration-of-output-files)を参照ください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-08-2024-08-29-5-44-1.png){height="" width="400"}

### 転送先Snowflakeの設定に空文字の置換オプションを追加 🎉

転送設定STEP1の詳細設定で、転送されるデータに含まれる空文字をNULL置換するかどうかを指定できるようになりました。
転送するデータの空文字をSnowflakeに空文字のまま転送したい場合は、チェックボックスを外してください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-08-2024-08-29-5-44-2.png){height="" width="400"}


## 接続情報

### HTTP・HTTPS接続情報で、認可URLのパラメータが追加可能に 🎉

HTTP・HTTPS接続情報で、認可URLのパラメータを追加できるようになりました。
接続情報の**詳細を設定する**をクリックすると、**認可URLのパラメータ**が表示されます。
一部のサービスでは、トークン取得の条件として、認可コード取得時に特定のパラメータを渡す必要があります。その場合に本項目をご利用ください。
詳しくは、[HTTP・HTTPSの接続情報](/docs/connection-configuration-http-https)を参照ください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-08-2024-08-29-5-44-3.png){height="" width="400"}

## データマート定義

### Google BigQueryでのデータマート定義で、パーティションタイプの選択肢が拡充 🎉

Google BigQueryでのデータマート定義で、クエリ設定で指定できる**パーティションタイプ**の選択肢に、**1ヶ月ごと**と**1年ごと**を追加しました。
パーティションを設定する場合、パーティションタイプは以下の4つから選択いただけます。

- **1時間ごと**
- **1日ごと**
- **1ヶ月ごと**（今回追加）
- **1年ごと**（今回追加）

## タイムゾーン設定

タイムゾーンを設定できるようになりました。
画面上の表示日時や転送設定のスケジュール実行などの日時指定に、任意のタイムゾーンを適用できます。
詳しくは、[タイムゾーン設定](/docs/time-zone)を参照ください。 

## UI・UX

### ワークフロータスク追加モーダル内のリスト項目に各種詳細画面へのリンクを追加 🎉

フロー編集画面の各種タスク追加モーダルに、それぞれの詳細画面へのリンクを追加しました。
これにより、フロー編集画面上からタスクの内容をすぐに確認できるようになりました。

- マネージド転送設定
- データマート定義
- ワークフロー定義
- dbtジョブ設定

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-08-2024-08-29-5-44-4.png){height="" width="50%"}


### データマートシンクジョブ一覧画面の検索性を改善 🎉

データマートシンクジョブ一覧画面のサイドバーで、データマート定義リストを定義名で絞り込みできるようになりました。
データマート定義名で絞り込むことで、任意のシンクジョブ一覧を簡単に表示できるようになりました。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-08-2024-08-29-5-44-5.png){height="" width="50%"}

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
