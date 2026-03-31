---
articleId: 8eb9a223-91de-4c21-a0cf-27568d9e9f5b
slug: data-destination-azure-blob-storage
title: 転送先 - Azure Blob Storage
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
Azure Blob Storageへデータを転送する設定のDocsです。

:::(Info) (Azure Data Lake Storageアップグレード後の利用について)

[Azure Data Lake StorageへAzure Blob Storageをアップグレード](https://learn.microsoft.com/ja-jp/azure/storage/blobs/upgrade-to-data-lake-storage-gen2)した場合でも、TROCCOのAzure Blob Storage機能は引き続きご利用いただけます。

アップグレード後も既存の転送設定の変更は不要です。

:::

## 制約
* 特になし

## 設定項目
### STEP1 基本設定
| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Azure Blob Storage接続情報 | Yes | - | [Azure Blob Storage接続情報](/docs/connection-configuration-azure-blob-storage)をご参照ください。 |
| コンテナ | Yes | - | 転送したいデータの保存先のコンテナ名を指定してください。 |
| パスプレフィックス | Yes | - | 転送したいデータの保存先のパスプレフィックスを指定してください。<br>[カスタム変数](/docs/custom-variables)を利用し、TROCCOのデータ転送時に動的に設定値を決定することも可能です。 |
| 出力ファイルの拡張子 | Yes | .csv | 出力ファイルの拡張子を指定してください。 |
| 出力ファイル形式 | Yes | CSV/TSV | 出力ファイルの形式を以下より選択します。<ul><li>CSV</li><li>JSON Lines</li></ul>|
| ファイル圧縮 | No | 圧縮なし | ファイルの圧縮形式を以下より選択できます。<ul><li>gzip</li><li>bzip2</li><li>zip</li></ul>|
