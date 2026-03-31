---
articleId: 34f0f679-3675-4c3d-a757-c9c4dc6bd592
slug: connection-configuration-google-analytics4
title: 接続情報 - Google Analytics 4
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Google Analytics 4の接続情報を設定する際のDocsとなります。

TROCCOでGoogle Analytics 4の接続情報を設定する方法は、Googleアカウントを利用する方法とサービスアカウントを利用する方法の2種類があります。

## 転送前の準備

* TROCCOでGoogle Analytics 4の転送を利用するためには、以下の作業が必要です。
  * [メールアドレスをGoogle Analyticsに登録](/docs/connection-configuration-google-analytics4#メールアドレスをgoogle-analyticsに登録)
* サービスアカウントでの認証をする場合は、下記の作業も必要です。
  * [JSON Keyを設定](/docs/connection-configuration-google-analytics4#json-keyを設定)
  * [APIを有効化](/docs/connection-configuration-google-analytics4#apiを有効化)

## JSON Keyを設定

1. [Google CloudのJSON Keyを取得する](/docs/connection-configuration-google-cloud-json-key)を参照して、JSON Keyを取得してください。サービスアカウントにロールを付与する必要はありません。

2. 取得したJSON Keyの内容をすべてコピーし、TROCCOの接続設定作成画面のJSON Keyフォームにペーストします。

## APIを有効化

**ライブラリ**から**Google Analytics Data API**と**Google Analytics Admin API**を有効にしてください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-analytics4-2024-08-29-1-23-0.png){height="" width=""}

## メールアドレスをGoogle Analyticsに登録

ユーザーは必要に応じて何人でも追加できます。アカウント、プロパティ、またはビューに新しいユーザーを追加する方法は次の通りです。

1. [Google Analytics](https://analytics.google.com/analytics/web/provision/#/provision) にログインします。

2. **管理**をクリックして、**アカウント ユーザーの管理**をクリックします。

3. **アカウントの権限**リストで、**＋**、**ユーザーを追加**の順にクリックします。

4. 追加するユーザーのGoogleアカウントまたはサービスアカウントのメールアドレスを入力します。

5. 権限を選択します。ご利用には、**閲覧者**以上の権限が必要です。
　※権限についての詳細は[こちら](https://support.google.com/analytics/answer/2884495)をご覧ください。

6. **追加**をクリックします。
