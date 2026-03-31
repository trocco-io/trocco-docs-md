---
articleId: 97c7cbc4-7d01-482c-af2f-d45f4e98a128
slug: data-source-athena
title: 転送元 - Amazon Athena
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Amazon Athenaからデータを転送する設定のDocsです。

## 制約
https://github.com/trocco-io/embulk-input-athena

## 設定項目

### STEP1 基本設定 
| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Athena接続情報 | Yes | - |  あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| データベース名 | Yes | - | 取得したいデータが入っているデータベース名を指定してください。 |
| SQL | Yes | - | Amazon Athenaから転送データを取得するためのSQLを入力します。 |
| カラム | Yes | - | 取得したいカラムのカラム名とデータ型を指定します。<br> データ型は<ul><li>string</li><li>long</li><li>double</li><li>timestamp</li><li>boolean</li><li>json</li></ul>を指定できます。|

## 必要な権限
ご利用いただくにあたって必要な権限は以下となります。
* Amazon Athenaのオブジェクト読み取り許可
	* Action
		* s3:GetObject
		* s3:ListBucket
	* Resource
		* arn:aws:s3:::your-data-source-bucket/path-prefix/*
		* arn:aws:s3:::your-data-source-bucket
* S3への書き込み許可
	* Action
		* s3:PutObject
		* s3:GetObject
		* s3:ListBucketMultipartUploads
		* s3:AbortMultipartUpload
		* s3:ListBucket
		* s3:GetBucketLocation
		* s3:ListMultipartUploadParts
	* Resource
		* arn:aws:s3:::your-result-bucket
		* arn:aws:s3:::your-result-bucket/path-prefix/*
* Amazon Athenaの実行許可
	* Action
		* athena:StartQueryExecution
		* athena:StopQueryExecution
		* athena:GetQueryResults
        * athena:GetQueryExecution
        * athena:GetQueryResultsStream
    * Resource
		* \*
* Glueの読み取り許可
	* Action
		* glue:GetDatabase
		* glue:GetTable
	* Resource
		* \*

他のAWSアカウントのS3パケットを使用する場合は、ポリシーを設定してください。
* [例 2: バケット所有者がクロスアカウントのバケットのアクセス許可を付与する - Amazon Simple Storage Service](https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/userguide/example-walkthroughs-managing-access-example2.html)
