---
articleId: 6962156f-079a-4ea5-991d-16796527e260
slug: connection-configuration-calendly
title: 接続情報 - Calendly
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、Calendlyに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - Calendly](/docs/data-source-calendly)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Calendly APIには、アクセス制限があります。
:::

## 認証方式

- Personal Access Token

## 設定項目

|項目名|必須|説明|
|---|---|---|
|Personal Access Token|✓|CalendlyのPersonal Access Tokenを入力します。|

## Calendly側で必要な作業

### Personal Access Tokenの取得

1. [Calendly](https://calendly.com/)にログインし、左側のメニューから**Integrations & Apps**をクリックします。
2. **Integrations & Apps**ページで**Manage**タブをクリックします。
3. **API & Webhooks**をクリックします。
4. **Generate New Token**ボタンをクリックします。
5. トークンの名前を入力し、**Create Token**をクリックします。
6. 作成されたトークンをコピーして、TROCCOの接続情報に設定します。

:::(Warning) (Personal Access Tokenの管理)

Personal Access Tokenは再表示できません。紛失した場合は、新しいトークンを作成してください。
:::

### 権限の付与

#### 転送元に利用する場合

Calendlyからデータを取得するには、認証したユーザーが以下のリソースにアクセスできる権限を持っている必要があります。

- 組織（Organization）
- イベントタイプ（Event Types）
- スケジュールされたイベント（Scheduled Events）
- グループ（Groups）
- 組織メンバーシップ（Organization Memberships）

認証したユーザーが閲覧できるリソースのみが転送対象となる。必要に応じて、Calendly上でユーザーに適切な権限を付与すること。

## 困ったときには・トラブルシューティング

### 「認証に失敗しました」というエラーが表示される

#### 考えられる原因

- Personal Access Tokenが無効または期限切れになっている
- Personal Access Tokenの入力に誤りがある
- Calendly側でトークンが削除されている

#### 対処方法

1. 接続情報の編集画面を開く
2. Personal Access Tokenが正しく入力されているかを確認する
3. トークンが無効な場合は、Calendly側で新しいPersonal Access Tokenを作成する
4. 新しいトークンを接続情報に設定する
5. 接続テストを実行して、正常に接続できることを確認する
