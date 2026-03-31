---
articleId: 6a199573-0cbb-479c-ba57-39dba4190297
slug: cdc-data-destination-s3-iceberg
title: CDCデータ転送 - 転送先 - Amazon S3 Iceberg
parentCategoryId: 76343439-4667-4cbc-9835-4d2212bc1b17
languageCode: ja
---
本ページでは、CDCデータ転送における転送先 - Amazon S3 Icebergについて説明します。
接続に関する設定については、[Amazon S3接続情報](/docs/connection-configuration-s3)を参照ください。

## 対応するCatalog

AWS Glue Data Catalogに対応しています。
Glue Catalogによりスキーマ管理が容易になり、また[他エンジンからのクエリにも利用](/docs/cdc-data-destination-s3-iceberg#各種dwhからs3-icebergを参照する方法)できます。

:::(Warning) (リージョンの統一)

Glue Catalogは、S3バケットと同一リージョンである必要があります。
:::

## 事前準備

### S3バケットの作成

事前にS3バケットを作成する必要があります。

### IAMロールの設定

CDCデータ転送では、**IAMロール認証**にのみ対応しています。
IAMロールの発行手順については、[Amazon S3接続情報](/docs/connection-configuration-s3#iamロールの発行手順)を参照ください。
IAMロールに必要な権限は以下のとおりです。

- S3バケットへの読み書き権限
  - `s3:ListAllMyBuckets`
  - `s3:ListBucket`
  - `s3:GetObject`
  - `s3:PutObject`
  - `s3:DeleteObject`
- Glue Catalogへのアクセス権限 
  - `glue:GetDatabase`
  - `glue:CreateDatabase`
  - `glue:DeleteDatabase`
  - `glue:GetTable`
  - `glue:CreateTable`
  - `glue:UpdateTable`
  - `glue:DeleteTable`

#### IAMポリシーの具体例

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListAllMyBuckets"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket"
      ],
      "Resource": "arn:aws:s3:::<bucket_name>"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::<bucket_name>/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "glue:GetDatabase",
        "glue:UpdateDatabase",
        "glue:CreateDatabase"
      ],
      "Resource": [
        "arn:aws:glue:<aws_region>:<account_id>:catalog",
        "arn:aws:glue:<aws_region>:<account_id>:database/<database_name>"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "glue:GetTable",
        "glue:UpdateTable",
        "glue:CreateTable",
        "glue:DeleteTable"
      ],
      "Resource": [
        "arn:aws:glue:<aws_region>:<account_id>:catalog",
        "arn:aws:glue:<aws_region>:<account_id>:database/<database_name>",
        "arn:aws:glue:<aws_region>:<account_id>:table/<database_name>/*"
      ]
    }
  ]
}
```

## 補足事項

### 作成されるIcebergテーブルの基本的な仕様について

[Apache Iceberg](https://iceberg.apache.org/)オープンテーブルフォーマットのバージョン2の機能をサポートしており、以下の例のように、同様の形式をサポートする各種クライアントからの読み取りが可能です。

### 各種DWHからS3 Icebergを参照する方法

- Amazon Athena：[AWS Glue Data Catalog を使用してデータに接続する - Amazon Athena](https://docs.aws.amazon.com/ja_jp/athena/latest/ug/data-sources-glue.html)
- Amazon Redshift：[CREATE EXTERNAL SCHEMA - Amazon Redshift](https://docs.aws.amazon.com/ja_jp/redshift/latest/dg/r_CREATE_EXTERNAL_SCHEMA.html)
- Google BigQuery：[Google Cloud公式ドキュメント - Apache Iceberg 用の BigLake 外部テーブルを作成する](https://cloud.google.com/bigquery/docs/iceberg-external-tables)