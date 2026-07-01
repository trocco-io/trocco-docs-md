---
articleId: 97d352ff-99e9-4f01-b419-4559a3ea3248
slug: datastore-authentication-redshift
title: データストアの連携・認証 - Amazon Redshiftの場合
parentCategoryId: f562d32d-a51d-4160-8d59-114201e44de4
languageCode: ja
---

新たにデータストアを連携する場合も、既存のデータストアに対して認証を受ける場合も、基本的な手順は同じです。
本ページでは、Amazon Redshiftのデータストアの連携・認証手順について説明します。

## データストアの設定

- データストア名：ここで入力した名称が、データストア連携管理画面で表示されます。
- 認証方式：**ユーザー名・パスワード認証**

### ユーザー名・パスワード認証

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| ユーザー名 | ✓ | Amazon Redshiftのユーザー名を入力します。 |
| パスワード | ✓ | Amazon Redshiftのパスワードを入力します。 |
| 接続タイプ |   | PrivateLinkを契約している場合は、通常接続またはPrivateLink接続を選択します<br>- **通常接続**<br>- **PrivateLink接続** |
| SSHトンネル設定 |   | PrivateLink接続を選択した場合に設定します。<br>\*本項目は**PrivateLink接続**を選択時にのみ表示されます。 |
| ホスト名 | ✓ | Amazon Redshiftクラスターのエンドポイントを入力します。<br>入力例：`example-cluster.*****.ap-northeast-1.redshift.amazonaws.com` |
| ポート番号 | ✓ | Amazon Redshiftクラスターのポート番号を入力します。<br>デフォルト値：`5439` |
| データベース名 | ✓ | 接続先のデータベース名を入力します。<br>入力例：`dev` |

:::(Info) (接続情報の確認方法)

Amazon Redshiftクラスターのエンドポイント、ポート番号、データベース名は、AWSマネジメントコンソールのAmazon Redshiftダッシュボードから確認できます。
:::

:::(Info) (必要な権限について)

メタデータ取得のため、接続ユーザーには以下のシステムビューおよびテーブルに対するSELECT権限が必要です。

- `svv_mv_info`
- `pg_user`
- `svv_table_info`
- `pg_namespace`
- `pg_class_info`
- `svv_columns`
- `svv_redshift_databases`
- `svv_redshift_tables`
- `svv_redshift_columns`

これらの権限がない場合、データカタログの作成やメタデータの同期が正しく動作しない可能性があります。
:::

:::(Info) (PrivateLink接続について)

PrivateLink接続を選択した場合、プライベートネットワーク経由でAmazon Redshiftに接続します。
事前にAWS側でPrivateLink設定が必要です。詳細については、AWSのドキュメントを参照してください。
:::

## 利用制限について

Amazon Redshiftでは、いくつかの機能がサポートされていません。
詳しくは[サポート対象データストアの機能一覧](/cometa/docs/datacatalog-supported-functions-list-v2)を参照してください。

## アセット取り込み設定

[アセット取り込み設定](/cometa/docs/fetching-asset-ingestion-settings)を参照してください。
