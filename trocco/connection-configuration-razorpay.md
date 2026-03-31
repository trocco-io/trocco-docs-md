---
articleId: c525df92-00f2-453c-86f5-ad333e8cf3d7
slug: connection-configuration-razorpay
title: 接続情報 - Razorpay
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、Razorpayに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - Razorpay](/docs/data-source-razorpay)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Razorpay APIには、一定期間内のリクエスト回数に制限があります。デフォルトでは、1分間あたり60リクエストの制限が適用されます。
:::

:::(Warning) (API Key Secretの管理)

Razorpay APIのKey Secretには有効期限はありませんが、セキュリティ上の理由から定期的な更新を推奨します。
:::

:::(Info) (インドルピー専用のペイメントゲートウェイ)

Razorpayは主にインド市場向けのペイメントゲートウェイです。取引通貨は主にINR（インドルピー）となります。
:::

:::(Info) (Webhook連携について)

TROCCOはポーリング方式でデータを取得するため、Razorpayのwebhook機能は利用しません。リアルタイムデータ連携が必要な場合は、転送スケジュールを短く設定してください。
:::

## 認証方式

- API Key認証

## 設定項目

|項目名|必須|説明|
|---|---|---|
|API Key ID|✓|RazorpayのAPI Key IDを入力します。<br>API Key IDの取得方法については、[API Key ID・API Key Secretの取得方法](#api-key-id・api-key-secretの取得方法)を参照ください。|
|API Key Secret|✓|RazorpayのAPI Key Secretを入力します。<br>API Key Secretの取得方法については、[API Key ID・API Key Secretの取得方法](#api-key-id・api-key-secretの取得方法)を参照ください。|

## Razorpay側で必要な作業

### API Key ID・API Key Secretの取得方法

Razorpayに接続するには、API Key IDとAPI Key Secretが必要です。以下の手順に従って取得してください。

1. [Razorpay Dashboard](https://dashboard.razorpay.com/)にログインします。
2. 左側のメニューから**Settings**を選択します。
3. **API Keys**を選択します。
4. 使用環境に応じて、**Test mode**または**Live mode**を選択します。
5. **Generate Key**ボタンをクリックして、新しいAPI Keyを生成します。
6. 生成されたAPI Key IDとAPI Key Secretをコピーして保存します。

:::(Info) (テスト環境と本番環境)

Razorpayには「Test」モードと「Live」モードがあります。
- **Test mode**: 開発・テスト環境用（テストデータのみ）
- **Live mode**: 本番環境用（実際の取引データ）

接続情報の設定時には、使用したいモードに対応するAPI Keyを使用してください。
:::

:::(Warning) (API Key Secretの保管)

API Key Secretは一度しか表示されません。安全な場所に保管してください。
:::

### 権限の付与

#### 転送元に利用する場合

以下のデータにアクセスするための権限が必要です。

- Customers（顧客情報）
- Orders（注文情報）
- Payments（支払い情報）
- Refunds（返金情報）
- Settlements（精算情報）
- Invoices（請求書情報）
- Items（アイテム情報）
- Subscriptions（サブスクリプション情報）
- Contacts（連絡先情報）

Razorpayで生成されたAPI Keyは、デフォルトでアカウントの全データへの読み取り権限を持ちます。特別な権限設定は不要です。

## 困ったときには・トラブルシューティング

### 認証に失敗する

```json
{
  "error": {
    "code": "BAD_REQUEST_ERROR",
    "description": "The api key provided is invalid",
    "source": "NA",
    "step": "NA",
    "reason": "NA",
    "metadata": {}
  }
}
```

#### 考えられる原因

- API Key IDまたはAPI Key Secretが正しくない
- API Keyの権限が不足している
- テスト用API Keyを本番環境で使用している（またはその逆）

#### 対処方法

1. Razorpay Dashboardで正しいAPI Key IDとAPI Key Secretを確認してください。
2. API Keyが正しいモード（TestまたはLive）で生成されているか確認してください。
3. 必要に応じて新しいAPI Keyを生成し直してください。