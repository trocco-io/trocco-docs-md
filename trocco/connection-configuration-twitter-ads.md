---
articleId: fced645b-72b4-415f-9516-20982a4eb7d9
slug: connection-configuration-twitter-ads
title: 接続情報 - X Ads (旧Twitter Ads) 
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

X Ads (旧Twitter Ads) の接続情報を作成するためのDocsです。

## 入力項目

| 項目 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | ✓ | TROCCO内部で利用する接続情報の名前を入力します。 |
| メモ | - | TROCCO内部で利用する接続情報のメモを入力できます。 |
| ConsumerKey | ✓ | API Keyを入力します。<br>取得方法について、詳しくは[X Ads APIの利用手順](/docs/connection-configuration-twitter-ads#x-ads-apiの利用手順)を参照ください。 |
| ConsumerSecret | ✓ | Secret Keyを入力します。<br>取得方法について、詳しくは[X Ads APIの利用手順](/docs/connection-configuration-twitter-ads#x-ads-apiの利用手順)を参照ください。|

## X Ads APIの利用手順

X Ads (旧Twitter Ads) の接続情報を作成するには、X Ads APIの利用申請および各種設定が必要となります。
下記の手順を実施してください。

### 1. 開発者アカウントへの登録申請

Xにログインし、[X Developer Portal](https://developer.x.com/en/portal/petition/essential/basic-info)を開きます。
必要事項を入力し、開発者アカウントへの登録申請をします。
申請後、`developer-accounts@x.com`から「`Verify your X Developer Account`」という件名のメールが送付されます。
メールボックスを確認してください。

:::(Warning) (申請に際して困ったときは)

[Developer account support](https://developer.x.com/en/support/x-api/developer-account1)を参照ください。
開発者アカウントに関するよくある質問がまとめられています。
申請後Xから連絡がない・その他解決できない問題がある場合は、[X Help Center](https://help.x.com/en/forms)からお問い合わせください。

:::

### 2. 開発者アプリの作成・Consumer Keysの確認

開発者アカウントへの登録申請が承認されたら、[X Developer Portal - Projects & Apps](https://developer.x.com/portal/projects-and-apps)から開発者アプリを作成します。
アプリを作成する際に、**Consumer Keys**のAPI KeyとSecretを生成・確認できます。
TROCCO側のConsumerKeyにはAPI Keyを、ConsumerSecretにはSecretを入力してください。
Consumer Keysは1度しか表示されないため、必ずメモしてください。

:::(Info) (キーをなくした・忘れたときは)

サイドバーから作成した開発者アプリを選択 > `Keys and tokens`タブを選択し、`API Key and Secret`から再生成できます。
再生成すると新しいキーが生成され、古いキーは無効になります。

:::

### 3. X Ads APIの利用申請

X Ads APIの利用申請は、[X Ads APIのヘルプ](https://ads.x.com/help)から開発者アプリごとに行う必要があります。
[X Ads APIのヘルプ](https://ads.x.com/help)を開き、`Developer Platform and APIs` > `Ads API Access`からX Ads APIの利用申請フォームを開きます。
必要事項を入力し、フォームを送信します。
審査後にXからメールで回答が届きます。

:::(Warning) (連絡がない・審査の状況を確認したいときは)

X Ads API利用申請時に選択した開発者アプリのApp IDを添えて、[X community forum](https://devcommunity.x.com/c/advertiser-api/27)からお問い合わせください。
App IDは、[X Developer Portal - Projects & Apps](https://developer.x.com/portal/projects-and-apps) > サイドバーからアプリを選択 > `Settings`タブの`Apps details`以下から確認できます。
:::

### 4. アクセストークンの再生成

X Ads APIの利用申請が承認されたら、アクセストークンを再生成する必要があります。
[X Developer Portal - Projects & Apps](https://developer.x.com/portal/projects-and-apps)を開き、サイドバーから作成したアプリを選択 > `Keys and tokens`タブを選択し、`Access Token and Secret`からアクセストークンを再生成してください。

:::(Warning) (注意事項)

X Ads APIの利用申請が承認されてから実施してください。
X Ads APIへのアクセス権が付与されていないトークンを使用すると、エラーが起きる可能性があります。
参考: [転送元X Adsで接続できないエラーが発生する](https://help.trocco.io/hc/ja/articles/4782338882974-%E8%BB%A2%E9%80%81%E5%85%83X-Ads%E3%81%A7%E6%8E%A5%E7%B6%9A%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%99%E3%82%8B)
:::

### 5. ユーザー認証設定

[X Developer Portal - Projects & Apps](https://developer.x.com/portal/projects-and-apps)を開き、サイドバーから作成したアプリを選択します。
`Settings`タブで`User authentication settings`の**Edit**をクリックし、`App info`で以下の項目を入力します。

| 項目名 | 内容 |
| --- | --- |
| Callback URI / Redirect URL | `https://trocco.io/connections/twitter_ads_analytics/callback` |
| Website URL | `https://trocco.io` |
| Terms of service | `https://documents.trocco.io/docs/terms` |
| Privacy policy | `https://primenumber.com/privacy/` |

### 6. X Adsへのアクセス権を付与

[X広告管理画面](https://ads.x.com)を開き、画面上部の広告アカウント名 > **アカウントへのアクセス権を編集**をクリックします。
アカウントへのアクセス権を編集する画面が開きますので、**アクセス権を追加**をクリックします。
Xのユーザー名を入力し、権限に**広告マネージャー**を選択して、**変更を保存**をクリックします。

以上で、X Ads APIの利用申請および各種設定は完了です。
