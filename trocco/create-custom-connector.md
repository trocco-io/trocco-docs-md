---
articleId: 07e13de3-541e-48bb-9307-4d8b785a2fc7
slug: create-custom-connector
title: カスタムコネクタを作成する事前準備
parentCategoryId: cae458a0-c255-491c-a961-51d76d7d2674
languageCode: ja
---
本ページでは、カスタムコネクタを作成する事前準備について説明します。
接続情報や転送に関する設定については、以下のドキュメントを参照ください。

- [接続情報 - カスタムコネクタ](/docs/connection-configuration-custom-connector)
- [転送元 - カスタムコネクタ](/docs/data-source-custom-connector)
- [転送先 - カスタムコネクタ](/docs/data-destination-custom-connector)

:::(Info) (作成したカスタムコネクタの操作)

- 作成したカスタムコネクタは、他のユーザーも編集・削除できます。
- カスタムコネクタを削除すると、対象のカスタムコネクタを使用した接続情報も削除されます。
:::

## 事前準備

カスタムコネクタを作成する前に、データ取得対象のデータソース側にて事前準備が必要となります。

### APIキーを使って認証する場合

データソースとなるサービスで事前にAPIキーを発行する必要があります。

### OAuth2を使って認証する場合

データソースとなるサービスで事前にクライアントアプリを作成する必要があります。

*認可コード*をグラントタイプとする場合は、クライアントアプリ側でリダイレクトURLの指定が必要です。
以下のURLをクライアントアプリ作成時に指定してください。
`https://trocco.io/connections/custom_connector/callback`

詳しくは、[クライアントアプリの作成手順](/docs/connection-configuration-http-https#クライアントアプリの作成手順)を参照ください。

## 作成手順

作成手順は転送元・転送先で異なります。それぞれ以下のドキュメントを参照ください。

* [転送元としてカスタムコネクタを作成する](/docs/create-source-custom-connector)
* [転送先としてカスタムコネクタを作成する](/docs/create-destination-custom-connector)