---
articleId: 3d417537-a273-4072-b20a-97488a787090
slug: connection-configuration-line-work
title: 接続情報 - LINE WORKS
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---

本ページでは、LINE WORKSに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - LINE WORKS](/docs/data-source-line-work)を参照ください。

## 利用上の注意・制約

### APIレート制限

LINE WORKS APIには以下のレート制限があります。

- **フリープラン**: 1APIあたり60リクエスト/分
- **アドバンストプラン・スタンダードプラン**: 1APIあたり240リクエスト/分

レート制限を超過すると、`TOO_MANY_REQUESTS`エラーが返されます。
エラー発生後、最長1分でレート制限がリセットされます。
転送ジョブ実行中にレート制限を超過しエラーが返却された場合、制限解除まで待機し自動的にリトライを行います。

:::(Info) ()
一部のAPIやスコープには固有のレート制限がかかることがあります。
レート制限の詳細については、[LINE WORKS API 使用の上限](https://developers.worksmobile.com/jp/docs/rate-limits)を参照ください。
:::

## 認証方式

- OAuth 2.0

LINE WORKSへの接続には、OAuth 2.0認証を使用します。
接続設定時にLINE WORKSの認証画面にリダイレクトされ、アカウントの認証と権限の承認が行われます。

## LINE WORKS側で必要な作業

### Developer Consoleでのアプリケーション登録

LINE WORKSのDeveloper Consoleで、API 2.0アプリケーションを登録する必要があります。

#### 手順

1. [LINE WORKS Developer Console](https://dev.worksmobile.com/console/openapi/v2/app/list/view)にアクセスします。
2. 「最高管理者」または「副管理者」の権限を持つアカウントでログインします。
3. **アプリの新規追加**をクリックし、アプリケーション名を入力して**同意して利用する**をクリックします。
4. **OAuth Scope**で、必要なスコープを選択します。必要なスコープについては[必要なスコープ](/docs/connection-configuration-line-work#必要なスコープ)を参照ください。
5. **Redirect URL**にTROCCOのコールバックURL（`https://trocco.io/connections/line_work/callback`）を入力し**追加**をクリックします。
6. **保存**をクリックします。
7. **Client ID**と**Client Secret**をメモしておきます。

#### 必要なスコープ

LINE WORKSからデータを取得するには、以下のスコープ（権限）が必要です。

- board.read（掲示板一覧を取得する場合）
- bot.read（Bot一覧を取得する場合）
- contact.read（連絡先一覧を取得する場合）
- group.read（グループ一覧を取得する場合）
- orgunit.read（組織一覧を取得する場合）
- user.read（ユーザー一覧を取得する場合）

## 設定項目

### 入力項目

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | ✓ | TROCCO内部で利用する接続情報の名前を入力します。|
| メモ | - | TROCCO内部で利用する接続情報のメモを入力できます。|
| Client ID | ✓ | LINE WORKSでアプリケーションを作成した際にメモしたClient IDを入力します。|
| Client Secret | ✓ | LINE WORKSでアプリケーションを作成した際にメモしたClient Secretを入力します。|
| LINE WORKSアカウント | ✓ | 接続に使用するLINE WORKSアカウントの認証を行います。|

### 設定手順

1. 接続情報作成のサービス選択画面から、LINE WORKSを選択します。
2. **「LINE WORKSアカウント」以外の入力項目**を入力し、**保存**をクリックします。
   \* 本手順以降の認証手順を行う前に、あらかじめ一度保存する必要があります。
3. **LINE WORKS経費アカウント認証**をクリックします。
4. 権限の付与を確認する画面が表示されるので、承認します。
5. TROCCOに戻り、認証が完了したことを確認します。
6. 接続情報を再度保存します。
