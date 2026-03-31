---
articleId: 10612b4c-4a35-4828-9a29-1344db7980a8
slug: connection-configuration-typeform
title: 接続情報 - Typeform
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---

本ページでは、Typeformに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - Typeform](/docs/data-source-typeform)を参照ください。

## 利用上の注意・制約

:::(Warning) (Personal Tokenの取り扱い)

Typeform Personal Tokenは機密情報です。第三者に公開されないよう、適切に管理してください。また、定期的にトークンの有効性を確認し、必要に応じて再発行することを推奨します。
:::

## 認証方式

- Personal Token

## 設定項目

|項目名|必須|説明|
|---|---|---|
|Personal Token|✓|TypeformのPersonal Tokenを入力します。<br>Personal Tokenの取得方法については、[Personal Tokenの取得](/docs/connection-configuration-typeform#personal-tokenの取得)を参照ください。|

## Typeform側で必要な作業

### Personal Tokenの取得

TypeformのPersonal Tokenを取得するには、以下の手順を実行してください。

1. [Typeform](https://admin.typeform.com/)にログインする

2. 右上のプロフィールアイコンをクリックし、**Settings**を選択する

3. 左メニューから**Personal tokens**を選択する

4. **Generate a new token**をクリックする

5. トークンの名前を入力し、必要なスコープを選択する
   - データ取得には、最低限以下のスコープが必要である：
     - **Read accounts**：アカウント情報の読み取り
     - **Read forms**：フォーム情報の読み取り
     - **Read responses**：回答データの読み取り
     - **Read workspaces**：ワークスペース情報の読み取り

6. **Generate token**をクリックする

7. 生成されたトークンをコピーして、TROCCOの接続情報設定で使用する

:::(Warning) (トークンの保存)

生成されたPersonal Tokenは一度しか表示されません。必ず安全な場所に保存してください。トークンを紛失した場合は、新しいトークンを生成する必要があります。
:::


## 困ったときには・トラブルシューティング

### 認証エラーが発生する

```text
Error: HTTP 401 Unauthorized
```

#### 考えられる原因

- Personal Tokenが無効または間違っている
- Personal Tokenに必要なスコープが設定されていない
- Personal Tokenの有効期限が切れている

#### 対処方法

1. Personal Tokenが正しく入力されているか確認してください。
2. Personal Tokenに必要なスコープ（Read accounts、Read forms、Read responses、Read workspaces）が設定されているか確認してください。
3. Personal Tokenが有効であるかTypeformの設定画面で確認し、必要に応じて新しいトークンを生成してください。

### リクエスト制限エラーが発生する

```text
Error: HTTP 429 Too Many Requests
```

#### 考えられる原因

- API Rate Limitに達している

#### 対処方法

1. しばらく時間をおいてから再度実行してください。
2. 大量のデータを取得する場合は、取得間隔を調整してください。
