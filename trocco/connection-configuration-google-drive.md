---
articleId: 823d7ccb-2f52-4721-882d-db1cd86ef439
slug: connection-configuration-google-drive
title: 接続情報 - Google Drive
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Google Driveの接続情報を設定する際のDocsとなります。

## 転送前の準備

* TROCCOでGoogle Driveの転送を利用するためには、以下の作業が必要です。
  * [Google Driveの共有設定で、メールアドレスに権限を付与](/docs/connection-configuration-google-drive#google-driveの共有設定で、メールアドレスに権限を付与)
* サービスアカウントでの認証をする場合は、下記の作業も必要です。
  * [JSON Keyを設定](/docs/connection-configuration-google-drive#json-keyを設定)
  * [APIを有効化](/docs/connection-configuration-google-drive#apiを有効化)

## JSON Keyを設定

1. [Google CloudのJSON Keyを取得する](/docs/connection-configuration-google-cloud-json-key)を参照して、JSON Keyを取得してください。サービスアカウントにロールを付与する必要はありません。

2. 作成したサービスアカウントのメールアドレスをメモしておきます。

3. 取得したJSON Keyの内容をすべてコピーし、TROCCOの接続設定作成画面のJSON Keyフォームにペーストします。

## APIを有効化

1. [GCP Console](https://console.developers.google.com/)にアクセスし、プロジェクトを選択します。
（プロジェクトを作成していない場合は事前に作成してください。）

2. [APIライブラリ](https://console.developers.google.com/apis/library)にアクセスします。

3. **Google Drive API**をクリックします。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-drive-2024-08-29-3-33-0.png){height="" width=""}

4. APIを有効化します。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-drive-2024-08-29-3-33-1.png){height="" width=""}

## Google Driveの共有設定で、メールアドレスに権限を付与

1. 転送元・転送先となるGoogle Driveを開きます。

2. ドライブのパスの右側の共有アイコンをクリックします。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-drive-2024-08-29-3-33-2.png){height="" width=""}

3. **ユーザーやグループを追加**の入力欄にサービスアカウント、もしくはOAuth認証したユーザーのメールアドレスを追加します。

4. 右側にある権限の選択欄で、必要な権限を選択します。
（転送元の場合は**閲覧者**、転送先の場合は書き込み権限を持つ**編集者**を選択してください。）

参考：[公式ドキュメント](https://support.google.com/a/answer/7378726?hl=ja)
