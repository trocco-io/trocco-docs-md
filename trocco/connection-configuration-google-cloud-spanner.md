---
articleId: 0cec9d81-676b-4bd6-b9e9-5e01aa63837a
slug: connection-configuration-google-cloud-spanner
title: 接続情報 - Google Cloud Spanner
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Google Cloud Spannerの接続情報を設定する際のDocsとなります。

## JSON Keyを設定

1. [Google CloudのJSON Keyを取得する](/docs/connection-configuration-google-cloud-json-key)を参照して、JSON Keyを取得してください。サービスアカウントには、下記のロールを付与してください。

- Cloud Spanner > Cloud Spanner データベース読み取り

2. 取得したJSON Keyの内容をすべてコピーし、TROCCOの接続設定作成画面のJSON Keyフォームにペーストします。