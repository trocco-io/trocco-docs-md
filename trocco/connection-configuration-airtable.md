---
articleId: 2854ccf1-4842-4f54-ba2a-0a8b5a376a9a
slug: connection-configuration-airtable
title: 接続情報 - Airtable
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、Airtableに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - Airtable](/docs/data-source-airtable)を参照ください。

:::(Info) (APIキーの廃止について)

Airtableは2024年2月にAPIキーを廃止し、Personal Access Tokenへの移行を完了しました。
既存のAPIキーをお持ちの場合は、Personal Access Tokenへの移行が必要です。
:::


## 認証方式

- Personal Access Token

## 設定項目

|項目名|必須|説明|
|---|---|---|
|Personal Access Token|✓|AirtableのPersonal Access Tokenを入力します。<br>Personal Access Tokenの取得方法については、[Personal Access Tokenの取得方法](#personal-access-tokenの取得方法)を参照ください。|

## Airtable側で必要な作業

### Personal Access Tokenの取得方法

Personal Access Tokenを取得するには、以下の手順を実行してください。

1. [Airtable](https://airtable.com/)にログインします。

2. 画面右上のアカウントアイコンをクリックし、ドロップダウンメニューから**Builder Hub**を選択します。

3. Builder Hubの左側メニューからDeveloperセクションの**Personal Access Token**メニューを選択し、画面右上の**Create new token**ボタンをクリックします。

4. Personal Access Tokenの設定画面で、以下の項目を設定します：
   - **Name**: トークンの名前を入力します（例：TROCCO連携用）
   - **Scopes**: 以下のスコープを選択します
     - `data.records:read` - レコードの読み取り
     - `schema.bases:read` - ベーススキーマの読み取り

5. **Access**セクションで、トークンがアクセスできるベースを設定します：
   - 特定のベースのみにアクセスを制限する場合：**Add a base**をクリックして、対象のベースを選択します
   - ワークスペース内のすべてのベースにアクセスを許可する場合：**Add a workspace**をクリックして、対象のワークスペースを選択します

6. 設定が完了したら、**Create token**ボタンをクリックします。

7. 生成されたPersonal Access Tokenが表示されます。このトークンをコピーして安全な場所に保管してください。
   
   :::(Warning) (トークンの保管について)
   
   このトークンは一度しか表示されません。ページを離れると再確認はできませんので、必ずコピーして安全に保管してください。
   :::

### ベースIDの確認方法

転送設定でベースIDが必要になる場合があります。ベースIDは以下の手順で確認できます。

1. Airtableにログインし、対象のベースを開きます。

2. ブラウザのアドレスバーを確認します。URLは以下の形式になっています：
   ```
   https://airtable.com/appXXXXXXXXXXXXXX/...
   ```

3. `app`で始まる文字列（例：`appXXXXXXXXXXXXXX`）がベースIDです。

## 困ったときには・トラブルシューティング

### 認証エラーが発生する

```text
Error: Invalid bearer token
```

#### 考えられる原因

- Personal Access Tokenが正しく入力されていない
- Personal Access Tokenに必要なスコープが設定されていない

#### 対処方法

1. 入力したPersonal Access Tokenに誤りがないか確認してください。
   - トークンの前後に余分なスペースが含まれていないか確認してください
   - トークン全体が正しくコピーされているか確認してください

2. Personal Access Tokenのスコープを確認してください。
   - Builder Hubでトークンの詳細を確認し、必要なスコープ（`data.records:read`、`schema.bases:read`）が設定されているか確認してください
   - スコープが不足している場合は、トークンを編集するか、新しいトークンを生成してください

### 特定のベースにアクセスできない

#### 考えられる原因

- Personal Access Tokenのアクセス設定で、対象のベースが含まれていない
- ベース自体へのアクセス権限がない

#### 対処方法

1. Builder HubでPersonal Access Tokenの設定を確認し、対象のベースがアクセス許可リストに含まれているか確認してください。

2. Airtableで対象のベースに対する自身のアクセス権限を確認してください。最低でも「読み取り」権限が必要です。

3. 必要に応じて、Personal Access Tokenのアクセス設定を更新するか、新しいトークンを生成してください。