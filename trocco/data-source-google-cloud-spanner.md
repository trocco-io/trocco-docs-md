---
articleId: b3c19f1b-0537-48a7-98da-96d66f828374
slug: data-source-google-cloud-spanner
title: 転送元 - Google Cloud Spanner
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Google Cloud Spanner からデータを転送する設定のDocsです。

## 制約
* BYTES型は非サポートとなっております。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Google Cloud Spanner接続情報 | Yes | - | あらかじめ登録してある[接続情報](/docs/connection-configuration-google-cloud-spanner)から、今回の転送設定に必要な権限を持つものを選択します。|
| インスタンスID | Yes | - | 転送対象のインスタンスIDを指定します。 |
| データベースID | Yes | - | 転送対象のデータベース名を指定します。 |
| クエリ | Yes | - | Snowflakeから転送データを取得するためのクエリを入力します。<br>[カスタム変数](/docs/custom-variables)を利用し、TROCCOのデータ転送時に動的に設定値を決定することも可能です。|
| カーソルが1度に理するレコード数 | Yes | 10000 | カーソルで一度に取得する行数を指定することができます。  |
| クエリ実行タイムアウト | Yes | 86400 | クエリ実行タイムアウトを秒単位で指定することができます。 |