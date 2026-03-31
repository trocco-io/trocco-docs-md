---
articleId: 994a23f8-99b2-4996-ba86-ada9dcdaf347
slug: data-destination-s3
title: 転送先 - Amazon S3
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要

Amazon Web ServicesのS3にデータを転送する設定のDocsです。

:::(Info) (Amazon S3とTROCCOの活用事例について)

TROCCOの製品サイトでは、お客さまの[導入事例](https://primenumber.com/cases/topic/all?industry=&tag=s3)を紹介しております。
本Docsとあわせてご覧ください。
:::

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 
| --- | --- | --- | --- |
| Amazon S3接続情報 | Yes | - |  あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br>接続情報の設定方法は[別ページ](/docs/connection-configuration-s3) をご参照ください。 |
| リージョン | Yes |`ap-northeast-1` | 利用するバケットを作成する際に指定したリージョンを入力してください。なお、リージョンについての説明は[AWSの公式ページ](https://aws.amazon.com/jp/s3/faqs/) をご参照ください。 |
| バケット | Yes | - | データの転送先バケット名を指定してください。|
| パスプレフィックス | Yes | - | データの転送先パスプレフィックスを指定してください。<br>TROCCOは転送先バケットに、パスプレフィックスから始まる複数のファイルを出力します。 |
| 出力ファイルの拡張子 | Yes | `.csv` | 出力ファイルの拡張子を指定していただきます。任意の拡張子をご指定いただけますが、ファイルの形式に合わせて`.csv`などを指定するのが一般的です。|
| アクセスコントロールリスト | - | - | アクセスコントロールリスト（ACL）ではバケットやオブジェクトにアクセスできる権限を管理します。<br>Amazon S3で規定されているACLをお選びいただけます。<br>それぞれのACLの詳細については[こちら](https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/dev/acl-overview.html#canned-acl)をご覧ください。 |
| 出力ファイル形式 | - | CSV | 出力ファイルの形式をお選びいただけます。詳しくは[こちら](/docs/configuration-of-output-files)をご覧ください。 |
| ファイル圧縮 | - | 圧縮なし | ファイル圧縮して転送する場合は、以下から圧縮形式を選択してください。<br><ul><li>**gzip**</li><li>**bzip2**</li><li>**zip**</li></ul> |
| 転送モード | - | 並列転送 | 転送モードとして**並列転送**または**出力ファイル数抑制転送**から選んでください。<br>出力ファイル数抑制転送を選択した場合、内部的には並列処理を抑えてファイル生成を行います。<br>転送元が1ファイルの場合、転送先には1ファイルで生成されます。 |
 マルチパートアップロード | - | 無効 | 5GB以上のファイルを転送する場合に有効にしてください。<br>有効にすると、稀に不完全なパートファイルがS3に残ることがあります。<br>そのため、[バケットライフサイクル設定](https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html)を事前に行うことを推奨します。|

### STEP2 出力オプション

| 項目名 | デフォルト値 | 内容 |
| --- | --- | --- |
| 複数ファイル出力時の命名規則 | `.%03d.%02d` | 複数のファイルを出力する際の、ファイルの名前に関する規則を設定できます。 |
