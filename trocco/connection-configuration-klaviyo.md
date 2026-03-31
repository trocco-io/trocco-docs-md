---
articleId: 7a6a73ff-120a-43bd-83d6-aad9a4cc0c07
slug: connection-configuration-klaviyo
title: 接続情報 - Klaviyo
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、Klaviyoに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - Klaviyo](/docs/data-source-klaviyo)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Klaviyo APIには、一定期間内のリクエスト回数に制限があります。レート制限を超えると、HTTP 429エラーが返され、一時的にAPIが使用できなくなります。詳細は[Klaviyo公式ドキュメント − Rate Limits](https://developers.klaviyo.com/en/reference/api_overview#rate-limits)を参照ください。

:::

:::(Info) (APIキーのセキュリティ)

プライベートAPIキーは、Klaviyoアカウントのデータの読み書きが可能です。クライアントサイドのコードで公開したり、パブリックリポジトリからアクセス可能な状態にしないでください。

:::

## 認証方式

- Private API Key

## 設定項目

|項目名|必須|説明|
|---|---|---|
|API Key|✓|Klaviyoで発行されたPrivate API Keyを入力します。<br>プライベートAPIキーは`pk_`で始まる英数字の文字列です。<br>詳しくは、[Klaviyo公式ドキュメント − Authenticate API requests](https://developers.klaviyo.com/en/docs/authenticate_)を参照ください。|

## Klaviyo側で必要な作業

### Private API Keyの取得方法

プライベートAPIキーを取得するには、Klaviyoアカウントで**Owner**、**Admin**、または**Manager**のロールが必要です。

1. [Klaviyo](https://www.klaviyo.com/login)にログインします。
2. 画面右上のアカウントアイコンをクリックし、**Settings**を選択します。
3. 左側のメニューから**API Keys**タブを選択します。
4. **Create Private API Key**ボタンをクリックします。
5. APIキーの名称やスコープを設定します。
   - **Key Name**: TROCCOなど、識別しやすい名前を入力します。
   - **Scope**: 以下のいずれかを選択します：
     - **Read-only**: データの閲覧のみ可能（推奨）
     - **Full**: データの作成、削除、変更が可能
     - **Custom**: 個別にアクセス権限を設定
6. **Create**をクリックしてAPIキーを作成します。
7. 表示されたプライベートAPIキーをコピーして、安全な場所に保存します。

:::(Warning) (APIキーの保存について)

セキュリティ上の理由により、作成後にKlaviyoでプライベートAPIキーの確認はできません。必ず作成時にコピーして安全な場所に保存してください。

:::

### APIキーのスコープ設定

TROCCOはKlaviyoからデータを読み取るだけなので、セキュリティの観点から**Read-only**スコープの使用を推奨します。

#### Read-onlyスコープで必要な権限

以下のエンドポイントへの読み取りアクセスが必要です。
- Campaigns
- Events
- Flows
- Lists
- Metrics
- Profiles
- Reviews
- Segments

## 困ったときには・トラブルシューティング

### 認証エラーが発生する

```text
Error: 400 Bad Request - Invalid or missing API key
```

#### 考えられる原因

- プライベートAPIキーが正しく入力されていない可能性があります。
- APIキーが削除されている可能性があります。
- 異なるKlaviyoアカウントのAPIキーを使用している可能性があります。

#### 対処方法

1. 入力したAPIキーが`pk_`で始まることを確認してください。
2. APIキーに不要なスペースや改行が含まれていないか確認してください。
3. Klaviyoの管理画面でAPIキーが有効であることを確認してください。
4. 必要に応じて、新しいAPIキーを作成して再度設定してください。

### アクセス権限エラーが発生する

#### 考えられる原因

- APIキーのスコープが不足している可能性があります。
- Klaviyoアカウントのロールが変更された可能性があります。

#### 対処方法

1. KlaviyoのAPI Keys設定画面で、使用しているAPIキーのスコープを確認してください。
2. TROCCOで必要なデータの読み取り権限があることを確認してください。
3. 必要に応じて、適切なスコープを持つ新しいAPIキーを作成してください。