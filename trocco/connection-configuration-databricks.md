---
articleId: 1ee7d241-f44a-49c4-ae59-51ad7d07bfda
slug: connection-configuration-databricks
title: 接続情報 - Databricks
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Databricksの接続情報を作成するためのDocsとなります。

## 入力項目

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| Server Hostname | Yes | Databricksのサーバホスト名を入力します。<br>取得方法について、詳しくは[Databricks公式ドキュメント](https://docs.databricks.com/integrations/compute-details.html)を参照ください。|
| HTTP Path | Yes | DatabricksのHTTP Pathを入力します。<br>取得方法について、詳しくは[Databricks公式ドキュメント](https://docs.databricks.com/integrations/compute-details.html)を参照ください。|
| 認証タイプ | Yes | Databricksの認証の種類を選択します。<br>以下の認証方法をサポートしています。<ul><li>Databricks個人用アクセストークン（PAT）認証</li><li>Oauthマシン間（M2M）認証</li></ul>それぞれの認証方法について、詳しくは[Databricks リソースへのアクセスを認証する](https://docs.databricks.com/dev-tools/auth/index.html)を参照ください。|
| Personal Access Token | Yes | 認証タイプで**Databricks個人用アクセストークン（PAT）認証**を選択した場合に入力してください。<br>Databricksの個人用アクセストークンを入力します。<br>発行手順について、詳しくは[Databricks個人用アクセストークン認証](https://docs.databricks.com/dev-tools/auth/pat.html)を参照ください。<br><br>なお、Personal Access Tokenを発行したユーザーには権限を渡す必要があります。後述の[必要となる権限](/docs/connection-configuration-databricks#必要となる権限)を参照ください。 |
| クライアント ID | Yes | 認証タイプで**Oauthマシン間（M2M）認証**を選択した場合に入力してください。<br>DatabricksのサービスプリンシパルのクライアントID（アプリケーションIDとも呼ばれます）を入力します。<br>発行手順について、詳しくは[OAuth (OAuth M2M)を使用したサービスプリンシパルによるDatabricksへのアクセス認証](https://docs.databricks.com/dev-tools/auth/oauth-m2m.html)を参照ください。<br><br>なお、サービスプリンシパルには権限を渡す必要があります。後述の[必要となる権限](/docs/connection-configuration-databricks#必要となる権限)を参照ください。 |
| OAuth シークレット  | Yes | 認証タイプで**Oauthマシン間（M2M）認証**を選択した場合に入力してください。<br>Databricksのサービスプリンシパルの OAuthシークレットを入力します。<br>発行手順について、詳しくは[OAuth (OAuth M2M)を使用したサービスプリンシパルによるDatabricksへのアクセス認証](https://docs.databricks.com/dev-tools/auth/oauth-m2m.html)を参照ください。<br><br>なお、サービスプリンシパルには権限を渡す必要があります。後述の[必要となる権限](/docs/connection-configuration-databricks#必要となる権限)を参照ください。 |

## 必要となる権限

認証タイプでDatabricks個人用アクセストークン（PAT）認証を選択した場合は**Personal Access Tokenを発行したユーザー**、認証タイプでOauthマシン間（M2M）認証を選択した場合は**サービスプリンシパル**に対し、Databricks側で適宜権限を付与する必要があります。

### 転送設定（転送先）を利用する場合

#### 新規にテーブルを作成、もしくは自分がオーナーのテーブルの場合に必要な権限

- 対象カタログの`USE_CATALOG`
- 対象スキーマの`USE_SCHEMA`・`CREATE TABLE`・`CREATE VOLUME`

#### 自分がオーナーではないテーブルの場合に必要な権限

- 転送モード：全件洗い替え (`REPLACE`)を利用する場合
  - 対象カタログのオーナー
  - 対象スキーマのオーナー
  - 対象テーブルの`MODIFY`・`SELECT`
- 転送モード：全件洗い替え (`REPLACE`)以外のモードを利用する場合
  - 対象カタログの`USE_CATALOG`
  - 対象スキーマの`USE_SCHEMA`・`CREATE TABLE`・`CREATE VOLUME`
  - 対象テーブルの`MODIFY`・`SELECT`

### 権限に関する補足情報

参考：[公式ドキュメント（Unity Catalogで権限を管理する）](https://docs.databricks.com/data-governance/unity-catalog/manage-privileges/index.html#privilege-inheritance-1)
