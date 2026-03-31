---
articleId: d2abf3fb-dc58-46ca-8162-577e76fa720e
slug: data-source-snowflake
title: 転送元 - Snowflake
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Snowflakeからデータを転送する設定のDocsです。

## 制約
* BINARY型は非サポートです。
* 10GB分のCSVデータの転送を確認しています。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Snowflake接続情報 | Yes | - | あらかじめ登録してある[Snowflakeの接続情報](/docs/connection-configuration-snowflake)から、今回の転送設定に必要な権限を持つものを選択します。 |
| データベース名 | Yes | - | 転送したいデータのデータベース名を指定します。 |
| スキーマ | Yes | public | 転送したいデータのスキーマを指定します。 |
| ウェアハウス名 | Yes | -  | 転送したいデータのウェアハウス名を指定します。 |
| クエリ | Yes | - | Snowflakeから転送データを取得するためのクエリを入力します。<br>[カスタム変数](/docs/custom-variables)を利用し、TROCCOのデータ転送時に動的に設定値を決定することも可能です。 |
| カーソルが一度に処理するレコード数 | Yes | 10000 | カーソルで一度に取得する行数を指定することができます。  |
| 接続タイムアウト（秒） | Yes | 300 | 接続時のタイムアウトまでの時間を秒単位で指定することができます。 |
| ソケットタイムアウト（秒） | Yes | 1800 | ソケットタイムアウトを秒単位で指定することができます。 |
