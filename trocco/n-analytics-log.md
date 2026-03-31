---
articleId: ceacf812-1bb6-47d0-ac55-f952711c260c
slug: n-analytics-log
title: TROCCO Web行動ログ
parentCategoryId: 4603b9be-d2b6-49d2-b268-119106b57179
languageCode: ja
---
TROCCO Web行動ログのDocsです。

## 概要

TROCCO Web行動ログとは、お使いのWebサイト上のページビューやイベントを収集できるサービスです。
これらのデータは、**TROCCO Web行動ログ収集SDK**を利用することで収集されます。
また、収集したデータは、[**転送元 - TROCCO Web行動ログ**](/docs/data-source-n-analytics-log)を利用して転送できます。

:::(Info) (トライアル・ご契約のご相談)

TROCCO Web行動ログ収集SDKは**有償オプション**となっております。
また、TROCCO Web行動ログ収集SDKを契約するには、**Essential**プラン以上のご契約アカウントである必要があります。
トライアルを希望される場合や、ご契約を希望される場合は、営業担当者またはカスタマーサクセスまでお問い合わせください。
:::

## 収集されるデータ

**イベントログ**と**ページビューログ**の2種類を収集します。
それぞれで取得されるデータについて、詳しくは以下のcsvファイルを参照ください。

- イベントログ
@(Embed)(https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/n_analytics_event_logs_schema.csv)
- ページビューログ
@(Embed)(https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/n_analytics_pageview_logs_schema.csv)

## 関連ページ

- [TROCCO Web行動ログ収集SDK - 導入手順](/docs/n-analytics-log-sdk-introduction)
  まずはこのページを参照ください。
  TROCCO Web行動ログ収集SDKの導入手順を説明しています。
- [転送元 - TROCCO Web行動ログ](/docs/data-source-n-analytics-log)
  TROCCO Web行動ログ収集SDKで収集したデータの転送に対応したコネクタです。
  収集したデータを転送したい場合に参照ください。
- [TROCCO Web行動ログ収集SDK - 各種機能](/docs/n-analytics-log-sdk-settings)
  TROCCO Web行動ログ収集SDKでは、イベントログを取得したり、カスタムカラムを定義して取得データに含めるといったことができます。
  また、TROCCO Web行動ログ収集SDKの内部的な設定を一部変更できます。
  上記のような応用的な使い方をされたい場合に参照ください。
- [TROCCO Web行動ログ収集SDK - 技術仕様](/docs/n-analytics-log-sdk-technical-information)
  TROCCO Web行動ログ収集SDKの動作環境や技術仕様を説明しています。
  仕様に関して何か不明点などがある際に参照ください。
