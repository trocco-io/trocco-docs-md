---
articleId: e5b4001d-60a6-4232-87fc-63bcd54e758f
slug: n-analytics-log-sdk-introduction
title: TROCCO Web行動ログ収集SDK - 導入手順
parentCategoryId: 4603b9be-d2b6-49d2-b268-119106b57179
languageCode: ja
---
## 概要

このページでは、**TROCCO Web行動ログ収集SDK**の導入手順について説明します。

## 導入手順

TROCCO Web行動ログ収集SDKの設定から、取得したデータの転送までの流れを3つのステップに分けて説明します。

- [1. お問い合わせ](/docs/n-analytics-log-sdk-introduction#1-お問い合わせ)
- [2. JavaScriptコードの埋め込み](/docs/n-analytics-log-sdk-introduction#2-javascriptコードの埋め込み)
- [3. データの転送](/docs/n-analytics-log-sdk-introduction#3-データの転送)

### 1. お問い合わせ

まずは、営業担当者またはカスタマーサクセスまでお問い合わせください。
その後、ご契約が完了となりましたら、契約日を起点に**3営業日以内**に以下情報をお送りします。

- サイトID
- AWSアクセスキーおよびシークレットアクセスキー

:::(Info) (TROCCO Web行動ログ収集SDKで収集されたデータ)

TROCCO Web行動ログ収集SDKで収集されたデータは、弊社で管理しているAmazon S3に保管されます。
上記のAWSアクセスキーおよびシークレットアクセスキーは、上記Amazon S3に保管されたデータを転送する際に利用します。
:::

### 2. JavaScriptコードの埋め込み

Webサイト上の各種行動ログを収集するためには、ログを取得したいWebサイトのHTMLファイルに以下のJavaScriptのコードを埋め込む必要があります。

下記のコードを[scriptタグ](https://developer.mozilla.org/ja/docs/Web/HTML/Element/script)を使用して埋め込みます。`<site_id>`と記載されている箇所は
先にお渡しした**サイトID**に置き換えてください。

```javascript
!function(t,e,n){(t.NanalyticsObject=n)in t||(t[n]=function(){(t[n].q=t[n].q||[]).push(arguments)},t[n].ep=e);var a=t.document.getElementsByTagName("script")[0],s=t.document.createElement("script"),c=1e17*Math.random();s.type="text/javascript",s.async=!0,s.src="https://sdk."+e+"/v1/web.js?sid="+c,a.parentNode.insertBefore(s,a)}(window,"n-analytics.io","Nanalytics");
 
Nanalytics('setup','<site_id>',(new Date).getTime());
Nanalytics('send','pageview');
```

### 3. データの転送

先にお渡しした**AWSアクセスキー**および**AWSシークレットアクセスキー**を利用して、TROCCO Web行動ログ接続情報を作成してください。
上記の接続情報を利用した転送設定を作成することで、収集したデータを転送できます。
転送設定側の各種設定項目については、[転送元TROCCO Web行動ログ](/docs/data-source-n-analytics-log)を参照ください。
