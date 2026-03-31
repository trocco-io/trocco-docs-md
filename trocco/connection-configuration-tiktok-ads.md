---
articleId: c7b0aaaa-882e-4242-a5cb-1baa291796a5
slug: connection-configuration-tiktok-ads
title: 接続情報 - TikTok Ads
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、TikTok Adsに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - TikTok Ads](/docs/data-source-tiktok-ads)・[転送先 - TikTok Ads（カスタムオーディエンス）](/docs/data-destination-tiktok-ads-custom-audience)を参照ください。

## 認証方式

- OAuth2.0

## 設定項目

|項目名|必須|説明|
|---|---|---|
|TikTok Adsアカウント|✓|TikTok Adsアカウントの認証を行います。<br>**TikTok Adsアカウントの認証**ボタンをクリックし、TikTok For Businessにログインして認証を完了してください。|

## TikTok Ads側で必要な作業

### TikTok For Businessアカウントの準備

TROCCOでTikTok Adsに接続するには、TikTok For Businessアカウントが必要です。
アカウントをお持ちでない場合は、[TikTok For Business公式サイト](https://www.tiktok.com/business/)からアカウントを作成してください。

:::(Warning) (アカウントに必要な権限について)

Tiktok For Businessアカウントには、各種操作に対して最低限以下の権限が必要です。

- 転送元TikTok Ads：アナリスト
- 転送先TikTok Ads カスタムオーディエンス：オペレーター

詳しくは[アセット権限について | TikTokビジネスセンター](https://ads.tiktok.com/help/article/about-assets-and-asset-level-permissions?lang=ja)を参照ください。

:::

### OAuth2.0認証の実施

TROCCOの接続情報作成画面で**TikTok Adsアカウントの認証**ボタンをクリックすると、TikTok For Businessのログイン画面が表示されます。
TikTok For Businessアカウントでログインし、TROCCOへのアクセス許可を承認してください。

認証が完了すると、TROCCOの接続情報作成画面に戻り、認証したアカウント情報が表示されます。
