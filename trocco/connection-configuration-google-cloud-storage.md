---
articleId: 8c0a8b08-733c-48bb-ae01-3ef558b72d53
slug: connection-configuration-google-cloud-storage
title: 接続情報 - Google Cloud Storage
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Google Cloud Storageの接続情報を設定する際のDocsとなります。

## JSON Keyを設定

1. [Google CloudのJSON Keyを取得する](/docs/connection-configuration-google-cloud-json-key)を参照して、JSON Keyを取得してください。サービスアカウントには、下記のロールを付与してください。

- Cloud Storage > ストレージ管理者

2. サービスアカウントのメールアドレスをサービスアカウントEmailフォームにペーストします。

3. 取得したJSON Keyの内容をすべてコピーし、TROCCOの接続設定作成画面のJSON Keyフォームにペーストします。

## サービスアカウントEmailの確認方法

左のバーの中にある**IAMと管理**の**サービスアカウント**という項目を選択した時の画面、または、その画面で、使用するアカウントを選択すると見ることができます。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-storage-2024-08-29-23-23-0.png){height="" width=""}

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-storage-2024-08-29-23-23-1.png){height="" width=""}
