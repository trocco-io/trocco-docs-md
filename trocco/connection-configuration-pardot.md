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

:::(Warning) (ユーザー・パスワード認証で接続情報を作成済みのお客様へ)

既にユーザー・パスワード認証で作成された接続情報は引き続き利用可能です。

ただし、ユーザー・パスワード認証で利用する接続アプリケーション（Connected Apps）は、Salesforce側の仕様変更により将来的にサポート終了が予定されています。詳細は[Salesforce Platform: Spring '26 リリース以降、新規の接続アプリケーションは作成できなくなります](https://help.salesforce.com/s/articleView?id=005228017&type=1)を参照ください。

既存接続情報の編集画面では「OAuth認証」と「ユーザー・パスワード認証」を切り替えられます。サポート終了に備えて「OAuth認証」への切替を推奨します。
:::

## 事前準備

接続情報を作成する前に、以下のアカウント・情報が必要です。

* 認証に利用するSalesforceアカウント
* ビジネスユニットID

事前にお客様のMarketing Cloud Account EngagementとSalesforceアカウントを連携しておく必要があります。

### ビジネスユニットIDの確認方法

以下のURLからMarketing Cloud Account Engagement管理者の割当ページを開き、ビジネスユニットIDを参照してください。
https://＜お客様ドメイン＞.lightning.force.com/lightning/setup/PardotAccountSetup/home
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-pardot-2024-08-29-15-24-0.png){height="" width=""}

## 入力項目

### 基本項目

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力してください。 |
| 認証方式 | No | 外部クライアントアプリのインストールやアカウントの認証を行います。詳しくは[認証の手順](/docs/connection-configuration-pardot#認証の手順)を参照ください。 |

### 認証の手順

以下の手順で認証を進めてください。

#### 外部クライアントアプリのインストール

1. Salesforceのサンドボックス環境に接続する場合、**サンドボックス環境を利用する**にチェックを入れてください。
2. **インストール**ボタンをクリックし、画面の指示に従って外部クライアントアプリをSalesforce組織にインストールしてください。

#### Salesforceアカウントの認証

1. **アカウントを認証する**ボタンをクリックし、Salesforceにログインして認証を完了してください。

#### ビジネスユニットIDの入力

1. 事前準備で確認したMarketing Cloud Account EngagementのビジネスユニットIDを入力してください。
