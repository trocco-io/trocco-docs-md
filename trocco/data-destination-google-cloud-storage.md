---
articleId: 66f66c4b-2087-458e-99a9-921d0c57f691
slug: data-destination-google-cloud-storage
title: 転送先 - Google Cloud Storage
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---

## 概要
Google Cloud PlatformのGoogle Cloud Storageへデータを転送する設定のDocsです。
 
## 制約
* 特になし

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Google Cloud Storage接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br>接続情報の設定方法は[別ページ](/docs/connection-configuration-google-cloud-storage) をご参照ください。 |
| バケット | Yes | - | データの転送先バケット名を指定してください。 |
| パスプレフィックス | Yes | - | データの転送先パスプレフィックスを指定してください。<br>TROCCOは転送先バケットに、パスプレフィックスから始まる複数のファイルを出力します。 |
| 出力ファイルの拡張子 | Yes | .csv | 出力ファイルの拡張子を指定していただきます。<br>任意の拡張子をご指定いただけますが、ファイル形式に合わせて`.csv`などを指定するのが一般的です。 |
| 出力ファイル形式 | Yes | CSV | 出力ファイルの形式を選択できます。<br>詳しくは[こちら](/docs/configuration-of-output-files)をご覧ください。 |
| ファイル圧縮 | No | 圧縮なし | ファイル圧縮して転送する場合は、以下から圧縮形式を選択してください。<br><ul><li>**gzip**</li><li>**bzip2**</li><li>**zip**</li></ul> |
| 転送モード | Yes | 並列転送 | 転送モードとして**並列転送**または**出力ファイル数抑制転送**から選んでください。<br>出力ファイル数抑制転送を選択した場合、内部的には並列処理を抑えてファイル生成を行います。<br>転送元が1ファイルの場合、転送先には1ファイルで生成されます。<br>※GCSの制約により、1ファイルに出力できるのは1GBまでとなります。1GBを超えたデータである場合、エラーとしてジョブが失敗します。 |

#### STEP1 詳細設定

**詳細設定**をクリックすると、設定項目が表示されます。

| 項目名 | デフォルト値 | 内容 |
| --- | --- | --- |
| 複数ファイル出力時の命名規則 | `.%03d.%02d` | 複数のファイルを出力する際の、ファイルの名前に関する規則を設定することができます。 |

## 必要な権限
ご利用いただくにあたって必要な権限は以下となります。
* storage.buckets.create
* storage.buckets.get
* storage.buckets.list
* storage.objects.create
* storage.objects.delete
* storage.objects.get
* storage.objects.list

