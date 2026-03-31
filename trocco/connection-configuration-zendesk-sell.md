---
articleId: 3a8cbf9e-1305-4e13-a525-6f8e9f548a5b
slug: connection-configuration-zendesk-sell
title: 接続情報 - Zendesk Sell
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、Zendesk Sellに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - Zendesk Sell](/docs/data-source-zendesk-sell)を参照ください。

## 認証方式

- Personal Access Token

## 設定項目

|項目名|必須|説明|
|---|---|---|
|Personal Access Token|✓|Zendesk SellのPersonal Access Tokenを入力します。<br>Personal Access Tokenの取得方法については、[Personal Access Tokenの取得](/docs/connection-configuration-zendesk-sell#personal-access-tokenの取得)を参照ください。|

## Zendesk Sell側で必要な作業

### Personal Access Tokenの取得

1. Zendesk Sellにログインする。
2. 右上のプロフィールアイコンをクリックし、**Settings**を選択する。
3. 左メニューから**API Access**を選択する。
4. **Generate API Token**をクリックしてPersonal Access Tokenを生成する。
5. 生成されたPersonal Access Tokenをコピーして、TROCCOの設定画面に入力する。

:::(Warning) (Personal Access Tokenの管理)

Personal Access Tokenは機密情報です。適切に管理し、不要になった場合は無効化してください。また、Zendesk Sell側で最低限必要な読み取り権限のみを付与することを推奨します。
:::

:::(Info) (権限設定)

TROCCOでZendesk Sellからデータを取得するには、読み取り専用の権限で十分です。セキュリティ向上のため、Personal Access Tokenに最小限の権限のみを付与することを推奨します。
:::