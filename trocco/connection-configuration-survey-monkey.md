---
articleId: 545a9341-e703-4dca-b484-d1822e74b383
slug: connection-configuration-survey-monkey
title: 接続情報 - SurveyMonkey
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、SurveyMonkeyに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - SurveyMonkey](/docs/data-source-survey-monkey)を参照してください。

## 認証方式

- OAuth2.0

## 利用上の注意・制約

:::(Warning) (利用できるSurveyMonkeyアカウント)

接続情報の認証に利用できるのは、SurveyMonkeyの有料アカウントのみとなっています。

:::

## 設定項目

接続情報の設定に必要な項目はありません。OAuth2.0認証プロセスを通じて、必要な認証情報が自動的に取得されます。

1. SurveyMonkey接続情報の作成画面で、「SurveyMonkeyアカウント認証」ボタンをクリックします。
2. SurveyMonkeyのログイン画面が表示されるので、接続に使用するアカウントでログインします。
3. 権限の付与を確認する画面が表示されるので、承認します。
4. TROCCOに戻り、認証が完了したことを確認します。

### 必要なスコープ

SurveyMonkeyからデータを取得するには、以下のスコープ（権限）が必要です。

- View Surveys（アンケートの閲覧）
- View Responses（回答の閲覧）
- View Collectors（コレクターの閲覧）
- View Contacts（連絡先の閲覧）
- View Response Details（回答詳細の閲覧）
- View Library Assets（ライブラリアセットの閲覧）

OAuth認証時に、これらのスコープへのアクセス許可が求められます。必要なデータを取得するために、すべてのスコープを承認してください。
