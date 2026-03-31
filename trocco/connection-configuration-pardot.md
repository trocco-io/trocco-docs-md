---
articleId: 2600335a-55d0-478a-8225-13797055ddab
slug: connection-configuration-pardot
title: 接続情報 - Salesforce Marketing Cloud Account Engagement
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
Salesforce Marketing Cloud Account Engagement（旧：Pardot）の接続情報を設定する際のDocsとなります。

このページでは、TROCCOでのSalesforce Marketing Cloud Account Engagement接続設定に必要な項目の確認方法について記載します。

## 事前準備
* SalesforceユーザーID、パスワード
* ビジネスユニットID
* コンシューマID
* コンシューマシークレットキー

事前にお客様のMarketing Cloud Account EngagementとSalesforceアカウントを連携しておく必要があります。

## SalesforceユーザーID、パスワード
Marketing Cloud Account Engagementと連携したお客様のSalesforceアカウントのログインIDとパスワードになります。

## ビジネスユニットIDの確認
以下のURLからMarketing Cloud Account Engagement管理者の割当ページを開き、ビジネスユニットIDを参照してください。
https://＜お客様ドメイン＞.lightning.force.com/lightning/setup/PardotAccountSetup/home
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-pardot-2024-08-29-15-24-0.png){height="" width=""}

## コンシューマID、コンシューマシークレットキーの確認方法
Salesforce上で接続アプリケーションを作成し、そこで発行されるキー情報をTROCCOに登録してください。以下アプリケーションの作成とキー情報の確認手順になります。
公式ドキュメントは以下です。
* https://developer.pardot.com/kb/authentication/#via-salesforce-oauth
* https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_oauth_and_connected_apps.htm

## Salesforce接続アプリケーションの作成
以下のURLより、**新規接続アプリケーション**をクリックし、アプリケーションを設定してください。
https://＜お客様ドメイン＞.lightning.force.com/lightning/setup/NavigationMenus/home
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-pardot-2024-08-29-15-24-1.png){height="" width=""}

OAuth認証の範囲指定項目より、以下３つを追加し保存してください。
* pardot_api
* refresh_token
* openid

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-pardot-2024-08-29-15-24-2.png){height="" width=""}

 

次の画面に、
コンシューマID（Salesforce上では「**コンシューマ鍵**」という項目名）、
コンシューマシークレットキー（Salesforce上では「**コンシューマの秘密**」という項目名）
が表示されるのでその２つをTROCCOの接続設定に記載してください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-pardot-2024-08-29-15-24-3.png){height="" width=""}

 