---
articleId: 581e54c2-49e0-4d97-8e1a-14dbd8844e75
slug: connection-configuration-freshdesk
title: 接続情報 - Freshdesk
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、Freshdeskに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - Freshdesk](/docs/data-source-freshdesk)を参照ください。

## 認証方式

- API Key

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Freshdesk APIには、1分あたりのリクエスト数に制限があります。この上限はご利用のプランによって異なります。制限を超えると、HTTP 429エラーが返され、一時的にAPIが使用できなくなります。詳細は[Freshdesk公式ドキュメント - API Rate Limits](https://developers.freshdesk.com/api/#ratelimit)を参照ください。
:::

## 設定項目

|項目名|必須|説明|
|---|---|---|
|API Key|✓|FreshdeskのAPIキーを入力します。<br>APIキーは、Freshdesk管理画面の「Admin」>「API Keys」にて確認できます。|
|ホスト|✓|FreshdeskのホストURLを入力します。<br>例：`https://<domain>.freshdesk.com`|

## Freshdesk側で必要な作業

### APIキーの取得

1. Freshdeskの管理画面にログインする。
2. 右側のアカウントアイコンをクリックする。
3. 「Profile Settings」をクリックする。
4. 画面の右側から「APIキー」を発行する。
5. 生成されたAPIキーをコピーして、TROCCOの接続情報設定で使用する。

### 権限の付与

#### 転送元に利用する場合

Freshdeskからデータを取得するには、APIキーが以下のリソースにアクセスできる権限を持っている必要があります。

- Account（アカウント）
- Companies（会社）
- Contacts（連絡先）
- Groups（グループ）
- Roles（役割）
- Tickets（チケット）
- Time Entries（時間記録）

APIキーは、生成したユーザーの権限に基づいてアクセス可能なリソースが決まる。必要に応じて、Freshdesk上でユーザーに適切な権限を付与する。

## 困ったときには・トラブルシューティング

### 「認証に失敗しました」というエラーが表示される

#### 考えられる原因

- APIキーが正しく入力されていない
- APIキーが無効化されている
- ホストURLが正しく入力されていない

#### 対処方法

1. 接続情報の編集画面を開く。
2. APIキーが正しく入力されているか確認する。
3. ホストURLが正しい形式で入力されているか確認する（例：`https://<domain>.freshdesk.com`）。
4. Freshdesk管理画面でAPIキーが有効か確認する。
5. 必要に応じて、新しいAPIキーを生成し直す。

### 「403 Forbidden」エラーが発生する

#### 考えられる原因

- APIキーに必要な権限が付与されていない
- アクセスしようとするリソースに対する権限がない

#### 対処方法

1. Freshdesk管理画面で、APIキーを生成したユーザーの権限を確認する。
2. 必要に応じて、ユーザーに適切な権限を付与する。
3. 権限の変更後、再度データ転送を試みる。