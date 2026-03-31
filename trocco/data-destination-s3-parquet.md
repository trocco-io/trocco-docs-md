---
articleId: bee63b0c-1fb4-4293-b073-9a8fd7864d28
slug: data-destination-s3-parquet
title: 転送先 - Amazon S3 Parquet
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
Amazon Web ServicesのS3にApache Parquet（.parquet）形式でデータを転送する設定のDocsです。

## 制約
* 特になし

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| S3接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br>接続情報の設定方法は[別ページ](/docs/connection-configuration-s3)をご参照ください。 |
| リージョン | Yes | ap-northeast-1 | 利用するバケットを作成する際に指定したリージョンを入力してください。<br>なお、リージョンについての説明は[AWSの公式ページ](https://aws.amazon.com/jp/s3/faqs/)をご参照ください。 |
| バケット | Yes | - | データの転送先バケット名を指定してください。 |
| パスプレフィックス | Yes | - | データの転送先パスプレフィックスを指定してください。<br>TROCCOは転送先バケットに、パスプレフィックスから始まる複数のファイルを出力します。<br>[カスタム変数](/docs/custom-variables)を利用し、TROCCOのデータ転送時に動的に設定値を決定することも可能です。 |
| 圧縮形式 | Yes | uncompressed | ファイルの圧縮方式を指定します。<br>・umcompressed<br>・snappy<br>・gzip<br>から選択できます。 |

### STEP2 詳細設定
| 項目名 | デフォルト値 | 内容 |
| --- | --- | --- |
| 複数ファイル出力時の命名規則 | .%03d.%02d | 複数のファイルを出力する際の、ファイルの名前に関する規則を設定することができます。 |
| 出力ファイルの拡張子 | parquet | - |
| デフォルトのタイムスタンプのフォーマット | %Y-%m-%d %H:%M:%S.%6N %z | - |
| デフォルトのタイムゾーン | UTC | - |
| ブロックサイズ(byte) | 134217728 | - |
| ページサイズ(byte) | 1048576 | - |
| 最大パディングサイズ(byte) | 8388608 | - |
| データカタログの設定 | しない | - |
| カラム設定 | - | - |
