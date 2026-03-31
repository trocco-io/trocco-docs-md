---
articleId: b488984e-d561-4f91-a390-090953881a38
slug: connection-configuration-google-search-console
title: 接続情報 - Google Search Console
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Google Search Consoleの接続情報を設定する際のDocsとなります。
より詳しい情報に関しましては、公式ページをご参照ください。

## JSON Keyを設定

1. [Google CloudのJSON Keyを取得する](/docs/connection-configuration-google-cloud-json-key)を参照して、JSON Keyを取得してください。サービスアカウントにロールを付与する必要はありません。

2. 取得したJSON Keyの内容をすべてコピーし、TROCCOの接続設定作成画面のJSON Keyフォームにペーストします。

## APIを有効化

1. [Google Cloud](https://console.cloud.google.com/)にログイン
あらかじめ、Googleアカウントをご用意ください。

2. 画面左のバーから、**APIとサービス**＞**ライブラリ**をクリック

3. 検索欄に**Google Search Console**と入力し、**Google Search Console API**をクリック
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-search-console-2024-08-29-8-56-0.png){height="" width="500"}

4. **有効にする**をクリック
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-search-console-2024-08-29-8-56-1.png){height="" width="500"}

## サービスアカウントをSearch Consoleに登録

1. [Goole Search Console](https://www.google.com/webmasters/tools/)にログイン

2. 左のバーから**設定**に進み、**ユーザーと権限**をクリック
![settings.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-search-console-2024-08-29-8-56-2.png){height="" width="500"}

3. **ユーザーを追加**をクリック

4. メールアドレスを入力し、権限に**フル**を選択して、**追加**をクリック
![connection-configuration-google-search-console-2024-08-29-8-56-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-search-console-2024-08-29-8-56-3.png){height="" width="500"}

Google Search Consoleにおける権限につきましては、[公式ドキュメント](https://support.google.com/webmasters/answer/7687615?hl=ja)をご参照ください。
