---
articleId: 65aa5a36-2e11-4fa0-b3b0-a636a9f79d9e
slug: connection-configuration-logiless
title: 接続情報 - LOGILESS
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---

本ページでは、LOGILESSに接続するための設定（接続情報）について説明します。
転送設定については、[転送元 - LOGILESS](/docs/data-source-logiless)を参照ください。

## 認証方式

LOGILESS接続情報では、以下の認証方式をサポートしています。

- OAuth 2.0

### OAuth 2.0認証について

LOGILESS API は、OAuth 2.0標準に準拠した認証方式を採用しています。
TROCCOでは、OAuth 2.0のAuthorization Code Flowを使用してユーザー委譲アクセスを行います。

OAuth 2.0認証では、以下のフローで認証を実施します。

1. TROCCOからLOGILESSの認証画面にリダイレクトされます。
2. ユーザーがLOGILESSアカウントでログインし、権限の付与を許可します。
3. 認証が成功すると、TROCCOにアクセストークンとリフレッシュトークンが発行されます。
4. TROCCOは、取得したアクセストークンを使用してLOGILESS APIにアクセスします。

:::(Info) (リフレッシュトークンの有効期限)

LOGILESSのリフレッシュトークンの有効期限は30日間です。
定期的に転送設定を実行することで、トークンが自動的に更新されます。
リフレッシュトークンの有効期限が切れた場合は、再度認証が必要です。

詳しくは[認証・認可 - LOGILESS Developers](https://app2.logiless.com/developer/documents/authentication)を参照ください。
:::

## 設定項目

LOGILESS接続情報の設定項目は以下のとおりです。

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 名前 | Yes | - | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | - | TROCCO内部で利用する接続情報のメモを入力してください。 |
| LOGILESSアカウント | Yes | - | LOGILESSアカウントで認証を行います。**LOGILESSアカウント認証**ボタンをクリックして、OAuth 2.0認証を実施してください。 |

### LOGILESSアカウント認証の手順

LOGILESSアカウント認証は、以下の手順で実施します。

1. 接続情報の新規作成画面または編集画面で、**LOGILESSアカウント認証**ボタンをクリックします。
2. LOGILESSのログイン画面にリダイレクトされます。
3. LOGILESSアカウントの認証情報（メールアドレスとパスワード）を入力してログインします。
4. 権限の許可画面が表示されます。TROCCOにアクセス権限を付与するマーチャントと店舗を選択し、**承認**をクリックします。
5. TROCCOの接続情報画面に戻ります。認証日時が表示されていることを確認してください。
6. 接続情報を保存します。

## LOGILESS側での権限付与

取得できるデータは、認証に使用したユーザーが所属するマーチャントに紐づくデータに限定されます。
必要なデータにアクセスできない場合は、LOGILESSの管理者に連絡して、適切な権限を付与してもらってください。
