---
articleId: c60306b1-4962-4d9c-a67d-888ce4747808
slug: connection-configuration-dbt-cloud
title: 接続情報 - dbt Cloud
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---

本ページでは、dbt Cloudに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - dbt Cloud](/docs/data-source-dbt-cloud)を参照ください。

## 認証方式

- Personal Access Token

dbt Cloudへの接続には、Personal Access Token（PAT）またはService Account Tokenを使用します。
TROCCOでは、dbt Cloudの管理画面から発行したトークンを設定してください。

## 設定項目

以下の項目を設定してください。

| 項目名 | 必須 | 説明 |
|--------|------|------|
| **Personal Access Token** | ✓ | Personal Access Tokenを入力します。安全に暗号化されて保存されます。<br>トークンの取得方法については、[dbt Cloud側で必要な作業](#dbt-cloud側で必要な作業)を参照ください。 |
| **ホスト** | ✓ | dbt Cloudのホスト部分を入力します。<br>ホスト部分のみを入力してください。デフォルトの`cloud.getdbt.com`、またはカスタムホスト（例: `{account_prefix}.us1.dbt.com`）を入力してください。 |

## dbt Cloud側で必要な作業

### Personal Access Tokenの取得

dbt Cloudへの接続には、Personal Access Token（PAT）またはService Account Tokenが必要です。

#### Personal Access Tokenを使用する場合

Personal Access Tokenは、作成したユーザーの権限を継承します。開発用途や特定ユーザーのコンテキストでAPIを利用する場合に使用してください。

1. dbt Cloudにログインします。
2. 画面右上のユーザーアイコンをクリックし、**Account Settings**を選択します。
3. 左側メニューから**API Tokens**を選択します。
4. **Personal Tokens**タブを選択します。
5. **Create personal access token**ボタンをクリックします。
6. トークンの名前（例: `TROCCO Integration`）を入力し、**Save**をクリックします。
7. 表示されたトークンをコピーします。

:::warning トークンの保管。

トークンは画面を閉じると再度表示できません。必ずコピーして安全な場所に保管してください。

:::

#### Service Account Tokenを使用する場合

Service Account Tokenは、本番環境やシステム統合に推奨される認証方法です。ユーザーではなくアカウントに紐づき、限定的な権限を設定できます。

Service Account Tokenの作成方法については、[dbt Cloud公式ドキュメント - Service account tokens](https://docs.getdbt.com/docs/dbt-cloud-apis/service-tokens)を参照ください。

### 権限の付与

#### 転送元に利用する場合

dbt Cloudからデータを取得するには、認証したユーザーまたはサービスアカウントがdbt Cloud上で適切なロール（権限）を持っている必要があります。

**Personal Access Tokenを使用する場合**

Personal Access Tokenは作成したユーザーの権限を継承します。例えば、Project Adminロールを持つユーザーが作成したトークンは、同じプロジェクトへのProject Admin権限を持ちます。

取得したいデータにアクセスできない場合は、dbt Cloudの管理者に連絡して、適切なロールを付与してもらってください。

**Service Account Tokenを使用する場合**

Service Account Tokenは、作成時に設定したスコープと権限に従います。必要な権限を持つService Account Tokenを使用してください。

## 困ったときには・トラブルシューティング

### 「認証に失敗しました」というエラーが表示される

#### Personal Access Tokenが無効または期限切れになっている

dbt CloudのAccount Settings → API Tokens → Personal Tokensで、トークンが有効であることを確認してください。
トークンが無効化されている、または削除されている場合は、新しいトークンを発行して設定してください。

#### Personal Access Tokenの権限が不足している

認証に使用しているPersonal Access Tokenの作成元ユーザーに、必要な権限が付与されているか確認してください。
権限が不足している場合は、管理者に連絡して適切なロールを付与してもらってください。

#### Personal Access Tokenが正しく入力されていない

接続情報の編集画面で、Personal Access Tokenが正しく入力されていることを確認してください。
トークンは前後にスペースが含まれていないか、コピー時に一部が欠けていないか確認してください。

#### カスタムホストが正しく設定されていない

カスタムホストを使用している場合、**ホスト**フィールドにホスト部分のみ（例: `{account_prefix}.us1.dbt.com`）が正しく入力されていることを確認してください。
プロトコル（`https://`）やパス（`/api/`など）は含めないでください。

### データが取得できない

#### 権限が不足している

認証したユーザーまたはサービスアカウントがdbt Cloud上で適切なロール（権限）を持っているか確認してください。
取得したいデータにアクセスできない場合は、dbt Cloudの管理者に連絡して、適切なロールを付与してもらってください。

#### 対象リソースが存在しない

転送対象のリソース（Account、Project、Jobなど）がdbt Cloud上に存在することを確認してください。
リソースが削除されている、またはアクセス権限がない可能性があります。

#### APIレート制限に達している

dbt Cloud APIにはレート制限があります。短時間に大量のリクエストを送信すると、一時的にAPIアクセスが制限される場合があります。
時間をおいてから再度実行してください。
