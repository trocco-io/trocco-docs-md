---
articleId: 46571279-6cac-4199-b149-db90f02c90a9
slug: data-source-freee-accounting
title: 転送元 - freee会計
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

freee会計からデータを転送する設定のDocsです。
詳しい説明などは[freee 会計APIリファレンス](https://developer.freee.co.jp/reference/accounting/reference)をご覧ください。

:::(Info) (事業所IDの取得)

データを取得する際に指定する必要のある事業所ID（company_id）は、**事業所一覧**から取得できます。
そのため、はじめに取得対象として**事業所一覧**を選択した転送設定を作成・実行することを推奨します。
:::

## 制約

:::(Warning) (複数ジョブの同時実行不可)

転送元freee会計の転送ジョブは、複数のジョブを同時に実行はできません。

TROCCOでは、ジョブ実行のたびにfreee APIに接続するためのアクセストークンを発行します。
アクセストークンが発行されると、以前発行したアクセストークンは無効となります。
そのため、万一複数のジョブを同時実行した場合は、先に実行していたジョブが途中でエラーとなります。
:::

## 設定項目

### STEP1 基本設定

| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| freee会計接続情報 | Yes | - | TROCCOに登録したfreee会計接続情報を指定します。 |
| 取得対象 | Yes | - | freee会計APIから取得したい情報を指定します。<br>各項目で取得できるカラムについて、詳しくは[freee Developers Community - 会計APIリファレンス](https://developer.freee.co.jp/reference/accounting/reference/)を参照ください。 |
