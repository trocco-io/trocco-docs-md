---
articleId: cde99f31-a4bc-406a-b35d-c906d6b9bad1
slug: connection-configuration-fresh-service
title: 接続情報 - Freshservice
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、Freshserviceに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - Freshservice](/docs/data-source-fresh-service)を参照ください。

## 認証方式

- API Key

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Freshservice APIには、一定期間内のリクエスト回数に制限があります。1時間あたり1000リクエストの制限があります。制限を超えると、HTTP 403 Forbiddenエラーが返され、一時的にAPIが使用できなくなります。詳細は[Freshservice公式ドキュメント - API Rate Limits](https://api.freshservice.com/v1/#ratelimit)を参照ください。
:::

## 設定項目

|項目名|必須|説明|
|---|---|---|
|API Key|✓|FreshserviceのAPIキーを入力します。<br>APIキーは、Freshservice管理画面の「Admin」>「API Keys」にて確認できます。|
|ホスト|✓|FreshserviceのホストURLを入力します。<br>例：`https://<domain>.freshservice.com`|

## Freshservice側で必要な作業

### APIキーの取得

1. Freshserviceの管理画面にログインする。
2. 右側のメニューから「Profile Settings」をクリックする。
3. Profile画面の右側から「APIキー」を発行する。
4. 生成されたAPIキーをコピーして、TROCCOの接続情報設定で使用する。

### 権限の付与

#### 転送元に利用する場合

Freshserviceからデータを取得するには、APIキーが以下のリソースにアクセスできる権限を持っている必要があります。

- Agents（エージェント）
- Requesters（リクエスター）
- Tickets（チケット）

APIキーは、生成したユーザーの権限に基づいてアクセス可能なリソースが決まる。必要に応じて、Freshservice上でユーザーに適切な権限を付与する。

## 困ったときには・トラブルシューティング

### 「認証に失敗しました」というエラーが表示される

#### 考えられる原因

- APIキーが正しく入力されていない
- APIキーが無効化されている
- ホストURLが正しく入力されていない

#### 対処方法

1. 接続情報の編集画面を開く。
2. APIキーが正しく入力されているか確認する。
3. ホストURLが正しい形式で入力されているか確認する（例：`https://<domain>.freshservice.com`）。
4. Freshservice管理画面でAPIキーが有効か確認する。
5. 必要に応じて、新しいAPIキーを生成し直す。

### 「403 Forbidden」エラーが発生する

#### 考えられる原因

- APIキーに必要な権限が付与されていない
- アクセスしようとするリソースに対する権限がない
- API Rate Limitに達している

#### 対処方法

1. Freshservice管理画面で、APIキーを生成したユーザーの権限を確認する。
2. 必要に応じて、ユーザーに適切な権限を付与する。
3. 権限の変更後、再度データ転送を試みる。
4. API Rate Limitが原因の場合は、レスポンスヘッダーの`Retry-After`に指定された秒数待ってから再試行してください。