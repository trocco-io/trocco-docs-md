---
articleId: 32e3eea5-c588-4e87-b34e-2b09d8d20889
slug: referencing-bigquery-tables-generated-from-google-spreadsheets
title: SpreadSheetsから生成したBigQueryのテーブルを参照する際の注意点
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
Google Spreadsheetsから生成したBigQueryのテーブルは、適切な権限を付与したサービスアカウントを用いた接続情報で参照いただく必要があります。

Google Spreadsheetsから生成したBigQueryのテーブルは、OAuth認証した接続情報では参照できません。
適切な権限を付与したサービスアカウントを用いた接続情報で参照する必要があります。

1. BigQueryのサービスアカウントを作成します。
※必要な権限情報に関しては[こちら](/docs/connection-configuration-bigquery)をご参照ください。

2. 対象のSpreadSheetの共有設定に、サービスアカウントのメールアドレスを追加します。

3. TROCCOよりBigQueryの接続情報作成画面に遷移し、**サービスアカウント(JSONキー)を用いて作成する場合はこちら**をクリックします。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/referencing-bigquery-tables-generated-from-google-spreadsheets-2024-08-29-6-0-0.png){height="" width=""}　

4. 画面に従って必要な情報を入力し、**保存**をクリックします。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/referencing-bigquery-tables-generated-from-google-spreadsheets-2024-08-29-6-0-1.png){height="" width=""}

その他、利用にあたりご不明点やご相談がございましたら、TROCCOCS担当者までお問い合わせくださいませ。
 