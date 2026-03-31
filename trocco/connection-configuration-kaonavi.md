---
articleId: 69e8ed0b-c0ee-4c25-b785-477d2188afdc
slug: connection-configuration-kaonavi
title: 接続情報 - カオナビ
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---

本ページでは、カオナビに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - カオナビ](/docs/data-source-kaonavi)を参照ください。

## 利用上の注意・制約

:::(Warning) (レート制限)

カオナビAPIのレート制限は**毎時3,000回**です。
大量のデータを転送する場合や、複数の転送設定を同時に実行する場合は、レート制限に達しないよう注意してください。
:::

## 認証方式

- Consumer Key / Consumer Secret

カオナビAPIでは、Consumer KeyとConsumer Secretを使用してアクセストークンを取得する認証方式を採用しています。
TROCCOでは、接続情報に設定されたConsumer KeyとConsumer Secretを使用して、自動的にアクセストークンを取得・管理します。

## 設定項目

| 項目名 | 必須 | 説明 |
|---|---|---|
| Consumer Key | ✓ | Consumer Keyを入力します。<br>取得方法について、詳しくは後述の[Consumer Key / Consumer Secretの取得](/docs/connection-configuration-kaonavi#consumer-key--consumer-secretの取得)を参照ください。 |
| Consumer Secret | ✓ | Consumer Secretを入力します。<br>取得方法について、詳しくは後述の[Consumer Key / Consumer Secretの取得](/docs/connection-configuration-kaonavi#consumer-key--consumer-secretの取得)を参照ください。 |

## カオナビ側で必要な作業

### Consumer Key / Consumer Secretの取得

Consumer KeyとConsumer Secretは、カオナビの管理画面から取得します。

1. カオナビにログインします。
2. **管理者機能トップ** > **公開API v2 情報** > **認証情報**をクリックします。
3. 表示されたConsumer KeyとConsumer Secretをコピーします。
4. TROCCOの接続情報設定画面に、コピーしたConsumer KeyとConsumer Secretをそれぞれ入力します。

詳しくは、[カオナビ公式ドキュメント − API v2](https://developer.kaonavi.jp/api/v2.0/index.html)を参照ください。

### 操作対象の有効化

カオナビAPIを利用するには、取得したいデータの操作を事前に有効化する必要があります。

1. カオナビにログインします。
2. **管理者機能トップ** > **公開API v2 情報** > **操作対象の管理**をクリックします。
3. 取得したいデータに対して、**取得**にチェックを入れます。
4. **設定を保存**をクリックします。

:::(Warning) (操作対象の初期状態)

操作対象の管理では、デフォルトですべての操作がオフになっています。
TROCCOで転送を行うには、転送対象のデータに対して**取得**を有効にする必要があります。
:::

### 権限の付与

カオナビからデータを取得するには、Consumer Key / Consumer Secretを発行したユーザー（通常は管理者）がカオナビ上で適切なロール（権限）を持っている必要があります。
認証したユーザーが閲覧できるデータのみが転送対象となります。

取得したいデータにアクセスできない場合は、カオナビの管理者に連絡して、適切なロールを付与してもらってください。
