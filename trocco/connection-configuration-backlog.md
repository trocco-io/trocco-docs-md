---
articleId: de6a26fd-b824-4717-a773-a83483189c3e
slug: connection-configuration-backlog
title: 接続情報 - Backlog
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、Backlogに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - Backlog](/docs/data-source-backlog)を参照ください。

## 認証方式

- API Key

## 利用上の注意・制約

:::(Warning) (API利用制限)

Backlog APIには利用制限があります。詳細は[Backlog API とは - レート制限](https://developer.nulab.com/ja/docs/backlog/rate-limit/)を参照ください。
:::

## 設定項目

|項目名|必須|説明|
|---|---|---|
|API Key|✓|Backlogで発行したAPI Keyを入力します。<br>API Keyの発行手順について、詳しくは[Backlog ヘルプセンター](https://support-ja.backlog.com/hc/ja/articles/360035641754)を参照ください。|
|ホスト|✓|`<space_id>.backlog.jp`の形で入力します。<br>スペースIDについては、[Backlog ヘルプセンター](https://support-ja.backlog.com/hc/ja/articles/360036151593)を参照ください。|

## Backlog側で必要な作業

### API Keyの発行

1. Backlogにログインします
2. 右上のユーザーアイコンから「個人設定」を選択します
3. 「API」タブをクリックします
4. 表示されたAPIキーをコピーしてTROCCOの設定画面に貼り付けます

詳しくは[Backlog ヘルプセンター](https://support-ja.backlog.com/hc/ja/articles/360035641754)を参照ください。

### 権限の付与

Backlogでデータを取得するには、エンドポイント毎に適切な権限が必要です。
詳しくは[Backlog API](https://developer.nulab.com/ja/docs/backlog/)の各エンドポイントの「実行可能な権限」を参照ください。

## 困ったときには・トラブルシューティング

### 認証エラーが発生する

#### 考えられる原因

- APIキーが無効または期限切れ
- APIキーの権限が不足している
- ホスト名が正しくない

#### 対処方法

1. APIキーが正しく入力されているか確認してください
2. Backlogの個人設定でAPIキーが有効であることを確認してください
3. ホスト名が`<space_id>.backlog.jp`の形式で正しく入力されているか確認してください
4. 必要な権限がAPIキーに付与されているか確認してください
