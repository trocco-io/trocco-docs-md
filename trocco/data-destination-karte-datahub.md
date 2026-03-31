---
articleId: f678fbe6-80db-46ec-a632-f7e319dc4728
slug: data-destination-karte-datahub
title: 転送先 - KARTE Datahub
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
KARTE Datahubへ転送する設定のDocsです 。

Google Cloud PlatformのGCSバケットに対してTROCCOでデータを転送し、KARTE Datahub側での取り込み設定を行うことでデータの連携が可能です。
KARTE Datahub 側の設定は、外部サービス連携（TROCCO）をご覧ください。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| KARTE Datahub接続情報 | Yes | - | [KARTE Datahubの接続情報](/docs/connection-configuration-karte-datahub)をご参照ください。 |
| バケット | Yes | - | データの転送先バケット名を指定してください。 |
| パスプレフィックス | Yes | - | データの転送先パスプレフィックスを指定してください。<br>TROCCOは転送先バケットに、パスプレフィックスから始まる複数のファイルを出力します。<br>なお、転送時にパスプレフィックスにマッチするファイルが削除され、新しくファイルがアップロードされます。<br>過去のファイルを残しておく必要がある場合、カスタム変数を利用しパスプレフィックスに転送日時を埋め込むことで、<br>転送毎にパスプレフィックスを分けることができます。<br>例えばパスプレフィックスを trocco/$date$/data としてカスタム変数の設定を行い、<br>2020年1月1日に転送を行った場合、<br>trocco/20200101/data.000.00.csv<br>のように、日付でパスを分けることができます。 |
| 出力ファイル形式 | Yes | CSV | 出力ファイルの形式をお選びいただけます。<br>詳しくは[こちら](/docs/configuration-of-output-files)をご覧ください。 |
| ファイル圧縮 | No | - | ファイル圧縮して転送する場合は、以下から圧縮形式を選択してください。<br><ul><li>**gzip**</li><li>**bzip2**</li><li>**zip**</li></ul> |

## 出力ファイル数について
TROCCOの仕様上、転送先に対し、分割された複数のファイルが出力される場合があります。

### 例：パスプレフィックスが trocco/data
以下のように、複数のファイルが出力される場合があります。
* trocco/data.000.00.csv
* trocco/data.000.01.csv

## 補足
各種リンクは以下の通りです。
* [KARTE Datahub](https://karte.io/)
* [外部サービス連携（TROCCO）](https://developers.karte.io/docs/trocco)