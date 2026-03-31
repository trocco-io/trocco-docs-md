---
articleId: c667e0c9-e931-492e-a7d1-a3ad03ea44df
slug: connection-configuration-google-play
title: 接続情報 - Google Play
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Google Playの接続情報を設定する際のDocsとなります。

## JSON Keyを設定

1. [Google CloudのJSON Keyを取得する](/docs/connection-configuration-google-cloud-json-key)を参照して、JSON Keyを取得してください。サービスアカウントには、下記のロールを付与してください。

- Cloud Storage > ストレージ管理者

2. サービスアカウントのメールアドレスをサービスアカウントEmailフォームにペーストします。

3. 取得したJSON Keyの内容をすべてコピーし、TROCCOの接続設定作成画面のJSON Keyフォームにペーストします。

## APIを有効化

Google Play Developer APIを利用するため、Google PlayデベロッパーアカウントとGoogle Cloudプロジェクトをリンクさせます。

1. Google Play Consoleの[APIアクセス](https://play.google.com/console/api-access?hl=ja)ページを開きます。

![APIアクセス画面.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-play-2024-08-29-12-9-0.png){height="" width=""}

2. 新しいプロジェクトを作成するか、既存のプロジェクトを使用するか選択します。
詳細については[公式ドキュメント](https://developers.google.com/android-publisher/getting_started?hl=ja#linking
)をご参照ください。

3. Google Play Consoleの[APIアクセス](https://play.google.com/console/api-access?hl=ja)ページで、Google Play Developer APIを**オンにする**をクリックします。

4. GoogleCloudプロジェクトで、APIキーを承認します。

## サービスアカウントに権限を付与

1. Google Play Consoleの左メニューにある**ユーザーと権限**から**ユーザーの招待**画面に移動し、**アカウントの権限**で以下のチェックボックスをオンにします。

- アプリ情報の閲覧、一括レポートのダウンロード（読み取り専用）
- 売上データ、注文、解約アンケートの回答の閲覧
- 注文と定期購入の管理

![9_ユーザーを招待.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-play-2024-08-29-12-9-1.png){height="" width=""}

2. 必要な権限を付与したら、**ユーザーを招待**をクリックします。

![10_ユーザーを招待 \(1\).png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-play-2024-08-29-12-9-2.png){height="" width=""}

## サービスアカウントEmailの確認方法

左のバーの中にある**IAMと管理**の**サービスアカウント**という項目を選択した時の画面、または、その画面で、使用するアカウントを選択するとサービスアカウントEmailを見ることができます。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-play-2024-08-29-12-9-3.png){height="" width=""}

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-play-2024-08-29-12-9-4.png){height="" width=""}
