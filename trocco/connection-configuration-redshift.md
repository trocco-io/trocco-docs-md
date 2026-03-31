---
articleId: 94be12cc-6d59-4d65-bbe0-911099cab3a4
slug: connection-configuration-redshift
title: 接続情報 - Amazon Redshift
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Amazon Redshiftの接続情報を設定する際のDocsとなります。

## 転送元に用いる接続情報に必要な権限

下記の権限を有するユーザーを作成する必要があります。
- 転送元スキーマにおける`SELECT TABLE`権限

ユーザーに最低限の権限を付与するには、以下のSQLコマンドを参考にしてください。

```
ALTER DEFAULT PRIVILEGES FOR USER <your_db_user_name>　IN SCHEMA <your_destination_schema>
GRANT
  SELECT
ON TABLES TO <your_db_user_name>;
GRANT USAGE ON SCHEMA <your_destination_schema> TO <your_db_user_name>
```

## 転送先に用いる接続情報に必要な権限

TROCCOではAmazon Redshiftへのデータ転送を高速に行うため、まずAmazon S3にデータを一時保存し、その後COPYコマンドでAmazon Redshiftにデータをバルクロードします。
上記転送プロセスを経るため、転送先Amazon Redshiftに用いる接続情報には、Amazon S3・Amazon Redshiftの両方に権限を設定する必要があります。

### Amazon S3に関する権限設定（IAMユーザーの作成）

Amazon Redshiftへのデータ転送でデータを一時的にAmazon S3に保存する場合があります。
その際に、IAM Userの認証情報を使用します。
以下の権限を持つIAM Userを作成し、AWS Credentialsを入力してください。

- `s3:GetObject`
- `s3:PutObject`
- `s3:DeleteObject`
- `s3:ListBucket` ※S3 バケット内のオブジェクトの一部またはすべてを一覧表示するアクセス許可を付与します
- `s3:ListAllMyBuckets` ※リクエストの認証された送信者が所有するすべてのバケットを一覧表示する許可を付与
- `s3:GetBucketLocation`（リージョンが異なるバケットを利用する場合）
    - [Amazon S3 のアクション、リソース、条件キー - サービス認可リファレンス](https://docs.aws.amazon.com/ja_jp/service-authorization/latest/reference/list_amazons3.html#amazons3-actions-as-permissions)
- `sts:GetFederationToken` ※ フェデレーティッドユーザーの一時的なセキュリティ認証情報 (アクセスキー ID、シークレットアクセスキーおよびセキュリティトークンで構成される) を取得する権利を付与
    - [AWS Security Token Service のアクション、リソース、および条件キー - サービス認可リファレンス](https://docs.aws.amazon.com/ja_jp/service-authorization/latest/reference/list_awssecuritytokenservice.html)

最低限の権限を付与するには、以下のポリシーを参考にしてください。

```
{
     "Version": "2012-10-17",
     "Statement": [
         {
            "Sid": "S3Permissions",
            "Effect": "Allow",
            "Action": [
                "s3:AbortMultipartUpload",
                "s3:DeleteObject",
                "s3:GetBucketLocation",
                "s3:GetObject",
                "s3:ListAllMyBuckets",
                "s3:ListBucket",
                "s3:ListBucketMultipartUploads",
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::<YOUR_DESTINATION_BUCKET_NAME>",
                "arn:aws:s3:::<YOUR_DESTINATION_BUCKET_NAME>/*"
           ]
        },
        {
            "Sid": "STSPermissions",
            "Effect": "Allow",
            "Action": [
                "sts:GetFederationToken"
            ],
            "Resource": "*"
        }
    ]
}
```

### Amazon Redshiftに関する権限設定（ユーザーの作成）

下記の権限を有するユーザーを作成する必要があります。
- 転送先スキーマにおける`CREATE/DROP TABLE`権限
- 転送先スキーマにおける`COPY`コマンド実行権限

ユーザーに最低限の権限を付与するには、以下のSQLコマンドを参考にしてください。

```
ALTER DEFAULT PRIVILEGES FOR USER <your_db_user_name>　IN SCHEMA <your_destination_schema>
GRANT
  SELECT,
  INSERT,
  DELETE
ON TABLES TO <your_db_user_name>;
GRANT USAGE ON SCHEMA <your_destination_schema> TO <your_db_user_name>
```
