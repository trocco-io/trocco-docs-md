---
articleId: ff21262d-335c-4356-86fd-a663cafb440c
slug: data-source-redshift
title: 転送元 - Amazon Redshift
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

Amazon Redshiftからデータを転送する設定のDocsです。

## 制約
- 特になし
 
### STEP1 基本設定

| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Amazon Redshift接続情報 | Yes | - | あらかじめ登録してある[Amazon Redshiftの接続情報](/docs/connection-configuration-redshift)から、今回の転送設定に必要な権限を持つものを選択します。 |
| データベース | Yes | - | 取得したいデータが入っているデータベース名を入力します。 |
| スキーマ | Yes | public | 取得したいデータが入っているスキーマ名を入力します。<br>**スキーマ一覧を読み込む**から一覧を読み込むこともできます。 |
| クエリ | Yes | - | 転送データを取得するためのクエリを入力します。 |

#### STEP1の詳細設定

**詳細を設定する**をクリックすると、設定項目が表示されます。

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| カーソルが一度に処理するレコード数 | Yes | 10,000 | カーソルで一度に取得する行数を指定できます。 |
| 接続タイムアウト(秒) | Yes | 300 | 接続時のタイムアウトまでの時間を秒単位で指定できます。 |
| ソケットタイムアウト(秒) | Yes | 1,800 | ソケットタイムアウトを秒単位で指定できます。 |

:::(Info) (Fetch size Errorが発生した場合)

シングルノードクラスターをお使いの場合、転送設定STEP2のプレビュー時に以下のエラーが発生することがあります。

```
ERROR: Fetch size 10000 exceeds the limit of 1000 for a single node configuration.
Reduce the client fetch/cache size or upgrade to a multi node installation.
```

この場合、**カーソルが一度に処理するレコード数**を**1,000**以下に設定してください。
:::