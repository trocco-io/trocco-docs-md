---
articleId: e795a202-06f3-4e4a-a802-bbee67bfb5ae
slug: datastore-authentication-snowflake
title: データストアの連携・認証 - Snowflakeの場合
parentCategoryId: f562d32d-a51d-4160-8d59-114201e44de4
languageCode: ja
---

新たにデータストアを連携する場合も、既存のデータストアに対して認証を受ける場合も、基本的な手順は同じです。
本ページでは、Snowflakeのデータストアの連携・認証手順について説明します。

Snowflakeは[データストアコネクション](/cometa/docs/datastore-connection)に対応しており、アセット取得コネクション・共有コネクション・カスタムコネクションの3種類のコネクションで接続を管理します。

:::(Info) (コネクションの概念について)

各コネクションの役割や設定手順、操作に必要なロール、移行については、[データストアコネクション](/cometa/docs/datastore-connection)を参照ください。
本ページでは、Snowflake固有の認証方式・認証情報を説明します。
:::

## 認証方式

コネクションの種類ごとに、対応する認証方式は以下のとおりです。

|認証方式|アセット取得コネクション|共有コネクション|カスタムコネクション|
|---|---|---|---|
|ユーザー名・パスワード認証 / PAT|対応|対応|対応|
|キーペア認証|対応|対応|対応|
|Microsoft Entra ID 認証|対応|—|対応|


## データストアの設定

- データストア名：ここで入力した名称が、データストア連携管理画面で表示されます。
- 認証方式：以下のいずれかを選択します。
  - **キーペア認証**
  - **Microsoft Entra ID認証**
  - **ユーザ・パスワード認証（非推奨）**

:::(Warning) (ユーザ・パスワード認証（非推奨）について)

ユーザー・パスワード認証は**2025年11月**から[利用できなくなります](https://www.snowflake.com/ja/blog/blocking-single-factor-password-authentification/)。
今後は、キーペア認証またはMicrosoft Entra ID認証をご利用ください。
:::

### キーペア認証またはユーザ・パスワード認証の場合

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| ホスト | ✓(\*) | Snowflakeのホストを入力します。<br> \*本項目は**管理者として認証する**を選択時にのみ表示されます。<br>入力形式については、[ホスト名の入力形式](/cometa/docs/datastore-authentication-snowflake#ホスト名の入力形式)を参照ください。 |
| ユーザー | ✓ | Snowflakeのユーザー名を入力します。 |
| 秘密鍵 | ✓ | 認証方式でキーペア認証を選択した場合に入力します。<br>キーペア認証を実施するにあたり、秘密鍵・公開鍵の生成およびSnowflakeへの公開鍵の登録が必要です。<br>[キーペア認証の構成](https://docs.snowflake.com/ja/user-guide/key-pair-auth#configuring-key-pair-authentication)を参照し、各手順を実施ください。<br>上記手順にて生成した秘密鍵を入力します。|
| 秘密鍵のパスワード | - | 認証方式でキーペア認証を選択した場合に入力します。<br>秘密鍵のパスワードを入力できます。<br>秘密鍵を生成する際にパスワードを設定した場合、入力してください。 |
| パスワード | ✓ | 認証方式でユーザー・パスワード認証を選択した場合に入力します。<br>Snowflakeのパスワードを入力します。 |
| ウェアハウス | - | ウェアハウスを入力できます。<br>本項目で入力したウェアハウス上でクエリが実行されます。 |
| ロール | - | クエリを実行するロールを入力できます。<br>本項目で入力したロールに基づいてクエリが実行されます。 |

:::(Info) (ウェアハウスとロール)

未入力の場合、Snowflake側のデフォルト設定が利用されます。
Snowflake側でデフォルト設定がない場合は、いずれも入力する必要があります。
:::

#### ホスト名の入力形式

以下のいずれかの形式で入力できます。ホストは、アセット取得コネクションで設定します。

- `<LOCATOR>.<REGION>.<CLOUD>.snowflakecomputing.com`
  - 入力例：`hm*****.ap-northeast-1.aws.snowflakecomputing.com`
- `<ORGANIZATION>-<ACCOUNT_NAME>.snowflakecomputing.com`
  - 入力例：`*******-km*****.snowflakecomputing.com`
  
上記各要素は、Snowflakeのコンソール画面左下より確認できます。
![connection-configuration-snowflake_001](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/datastore-integrations-v2-2024-08-29-19-40-6.png){height="" width="50%"}

### Microsoft Entra ID認証の場合

あらかじめ、Microsoft Entra IDを設定する必要があります。
詳しくは、[Microsoft Entra ID 外部インテグレーション設定](/cometa/docs/external-integration-settings-v2)を参照ください。

## アセット取り込み設定

[アセット取り込み設定](/cometa/docs/fetching-asset-ingestion-settings)を参照ください。
