---
articleId: f6ef9abb-9e2b-4acb-8bd4-400c215b313a
slug: data-source-karte-datahub
title: 転送元 - KARTE Datahub
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
KARTE Datahubからデータを転送する設定のDocsです。

KARTE Datahub側の設定は、外部サービス連携（TROCCO）をご覧ください。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| KARTE Datahub接続情報 | Yes | - | KARTE Datahubの[接続情報](/docs/connection-configuration-karte-datahub)をご確認ください。 |
| バケット | Yes | - | データの転送先バケット名を入力してください。 |
| パスプレフィックス | Yes | - | データの転送先パスプレフィックスを指定してください。<br>TROCCOは転送先バケットに、パスプレフィックスから始まる複数のファイルを出力します。<br>なお、転送時にパスプレフィックスにマッチするファイルが削除され、新しくファイルがアップロードされます。<br>過去のファイルを残しておく必要がある場合、カスタム変数を利用しパスプレフィックスに転送日時を埋め込むことで、<br>転送毎にパスプレフィックスを分けることができます。<br>例えばパスプレフィックスを trocco/$date$/data としてカスタム変数の設定を行い、<br>2020年1月1日に転送を行った場合、<br>trocco/20200101/data.000.00.csv<br>のように、日付でパスを分けることができます。 |
| 入力ファイル形式 | Yes | CSV/TSV | 入力ファイルの形式を指定してください。<br>詳しくは、[入力ファイル形式の設定について](/docs/configuration-of-input-files)を参照ください。 |
| 転送方法 | Yes | 全件転送 | **全件転送**・**差分転送**のいずれかを選択します。<br>**差分転送**について、詳しくは[差分転送機能](/docs/incremental-data-transfer)を参照ください。 |

