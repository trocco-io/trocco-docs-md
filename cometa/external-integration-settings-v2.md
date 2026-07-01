---
articleId: c8ca1605-55f1-477e-ab6a-cc339e8c1ab7
slug: external-integration-settings-v2
title: Microsoft Entra ID 外部インテグレーション設定
parentCategoryId: fb5ce779-dcd6-4ed7-aed0-c632a9cd64d5
languageCode: ja
---
## 概要

COMETAでは、Snowflakeのデータストアに対する認証方法として、**Microsoft Entra ID**（旧：Microsoft Azure AD）を利用できます。
以下を設定することで、[Snowflakeアカウントの認証](/cometa/docs/datastore-authentication-snowflake)時に、Microsoft Entra ID認証を利用できるようになります。

:::(Warning) (必要なロール)

外部インテグレーション設定には、[**データストア管理者**](/cometa/docs/cometa-roles-v2#データストア管理者)ロールが必要です。
:::

## データストアの新規連携

まず、データストアの新規連携手順について説明します。
なお、連携済みデータストアに認証したい場合は、[連携済みデータストアの認証](/cometa/docs/external-integration-settings-v2#連携済みデータストアの認証)を参照ください。

### 事前準備

左サイドバーの**管理・連携**>**MS Entra ID**から**Microsoft Entra ID 外部インテグレーション設定**画面を表示し、Snowflake認証用の**リダイレクトURL**をメモします。

### Microsoft Entra ID側の設定

COMETAがMicrosoft Entra IDを介してSnowflakeにアクセスするためのクライアントアプリを登録します。
まずは、[Microsoft Azure](https://portal.azure.com/)にログインし、**Microsoft Entra ID**をクリックします。
以降の手順を上から順に行ってください。

![external-integration-settings-v2-2024-08-29-4-32-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-0.png){height="" width="50%"}

#### スコープ管理用アプリの登録

Snowflakeのロール情報を含んだスコープを管理するためのアプリを登録します。

1. **アプリの登録** > **新規登録**をクリックします。アプリケーションの登録画面が表示されます。
  ![external-integration-settings-v2-2024-08-29-4-32-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-1.png){height="" width="50%"}

2. アプリ名を適宜入力し、**登録**をクリックします。アプリが登録されます。
  なお、スコープ管理用アプリであることがわかるような命名を推奨しています。
  ![external-integration-settings-v2-2024-08-29-4-32-2](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-2.png){height="" width="50%"}

3. **API の公開** > **Scope の追加**をクリックします。
  ![external-integration-settings-v2-2024-08-29-4-32-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-3.png){height="" width="50%"}

4. （はじめてスコープを追加する場合）**保存してから続ける**をクリックします。
  **アプリケーション ID の URI**はデフォルト値のままでも問題ありません。ただし、この値は後の手順で利用するのでメモしてください。
  ![external-integration-settings-v2-2024-08-29-4-32-4](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-4.png){height="" width="50%"}

5. **スコープ名**を指定し、**管理者とユーザー**を選択して、**スコープの追加**をクリックします。スコープが追加されます。
  ![external-integration-settings-v2-2024-08-29-4-32-5](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-5.png){height="" width="50%"}

:::(Warning) (スコープ名について)

`session:scope:<SNOWFLAKE_ROLE>`と入力する必要があります。
`<SNOWFLAKE_ROLE>`には、Snowflake側に存在する実際のロール名を入力します。
入力例：`session:scope:sysadmin`

なお、以下のロールの指定は非推奨としています。

- `ACCOUNTADMIN`
- `ORGADMIN`
- `SECURITYADMIN`

これは後述のSnowflake側の手順で行うセキュリティインテグレーション設定において、デフォルトでは利用できないロールであるためです。
詳しくは、[Snowflake公式ドキュメント - 外部 OAuth の概要](https://docs.snowflake.com/ja/user-guide/oauth-ext-overview#scopes)を参照ください。
:::

6. 追加されたスコープのURIをメモします。
  ![external-integration-settings-v2-2024-08-29-4-32-6](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-6.png){height="" width="50%"}

#### クライアントアプリの登録

COMETAがMicrosoft Entra IDを介してSnowflakeにアクセスするための、クライアントアプリを登録します。

1. **アプリの登録** > **新規登録**をクリックします。アプリケーションの登録画面が表示されます。

2. 各種項目に下記の通り入力し、**登録**をクリックします。アプリが登録されます。
  ![external-integration-settings-v2-2024-08-29-4-32-7](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-7.png){height="" width="50%"}

  - 名前：クライアントアプリであることがわかるような命名を推奨しています。
  - リダイレクトURI：**Web**を選択し、[事前準備](/cometa/docs/external-integration-settings-v2#事前準備)で控えた**リダイレクトURL**を入力してください。

3. **証明書とシークレット** > **新しいクライアント シークレット**をクリックします。
  ![external-integration-settings-v2-2024-08-29-4-32-8](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-8.png){height="" width="50%"}

4. 各設定項目に適宜入力・指定し、**追加**をクリックします。クライアント シークレットが追加されます。

5. 追加されたクライアント シークレットの**値**をメモします。
  なお、この値は画面を更新すると確認できなくなります。メモし忘れないようにしてください。
  ![external-integration-settings-v2-2024-08-29-4-32-9](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-9.png){height="" width="50%"}

6. **API のアクセス許可** > **アクセス許可の追加を**クリックし、**自分の API**タブより、[スコープ管理用アプリの登録](/cometa/docs/external-integration-settings-v2#スコープ管理用アプリの登録)で追加したアプリを選択します。
  ![external-integration-settings-v2-2024-08-29-4-32-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-10.png){height="" width="50%"}

7. [スコープ管理用アプリの登録](/cometa/docs/external-integration-settings-v2#スコープ管理用アプリの登録)で追加したスコープに対して**アクセス許可**を有効にし、**アクセス許可の追加**をクリックします。
  ![external-integration-settings-v2-2024-08-29-4-32-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-11.png){height="" width="50%"}

8. **概要** > **エンドポイント**をクリックし、以下の値をメモします。
  ![external-integration-settings-v2-2024-08-29-4-32-2](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-12.png){height="" width="50%"}

  - **アプリケーション (クライアント) ID**
  - **OAuth 2.0 承認エンドポイント (v2)**
  - **OAuth 2.0 トークン エンドポイント (v2)**
  - **jwks_uri**
    - **OpenID Connect メタデータ ドキュメント**のURLを直接開くことで、確認できます。
  - **entityID**
    - **フェデレーション メタデータ ドキュメント**のURLを直接開くことで、確認できます。

#### ユーザープリンシパル名の確認

いったん**Microsoft Entra ID**画面トップに戻り、**ユーザー**をクリックします。
データストアに認証するユーザーの**ユーザー プリンシパル名**をメモします。

### Snowflake側の設定

Microsoft Entra IDのユーザーに対して、Snowflakeのデータアクセスを提供するためのセキュリティインテグレーションを行います。
[Snowflake](https://app.snowflake.com/)にログインし、以降の手順を上から順に行ってください。

:::(Warning) (Microsoft Entra ID認証利用上の条件)

Microsoft Entra ID認証を利用するためには、Microsoft Entra IDの**ユーザー プリンシパル名**と、Snowflakeのユーザーの**ログイン名**を一致させる必要があります。
なお、**ユーザー プリンシパル名**と一致させる対象は、Snowflakeの**ユーザー名**でも**表示名**でもないことにご注意ください。
そのため、後述の手順1を忘れずに行うようにしてください。
:::

1. Microsoft Entra IDの**ユーザー プリンシパル名**と、Snowflakeのユーザーの**ログイン名**を一致させます。以下はサンプルクエリとなります。
  ```SQL
  ALTER USER <USERNAME> SET LOGIN_NAME = '<ENTRA_ID_PRINCIPAL_NAME>'
  ```
:::(Warning) (ログイン名変更の副作用)

手順1のクエリを実行すると、Snowflakeのログイン名だけでなく、Snowflakeへのログイン時に用いる**ユーザー名**も変更されます。ご留意ください。
:::

2. セキュリティインテグレーションを行います。以下はサンプルクエリとなります。

  ```SQL
  CREATE SECURITY INTEGRATION external_oauth_azure_2
    TYPE = external_oauth
    ENABLED = true
    EXTERNAL_OAUTH_TYPE = azure
    EXTERNAL_OAUTH_ISSUER = '<entityID>'
    EXTERNAL_OAUTH_JWS_KEYS_URL = '<jwks_uri>'
    EXTERNAL_OAUTH_AUDIENCE_LIST = ('<APPLICATION_ID_URI>')
    EXTERNAL_OAUTH_TOKEN_USER_MAPPING_CLAIM = 'upn'
    EXTERNAL_OAUTH_SNOWFLAKE_USER_MAPPING_ATTRIBUTE = login_name;
  ```

- `entityID`：[クライアントアプリの登録](/cometa/docs/external-integration-settings-v2#クライアントアプリの登録)でメモした値
- `jwks_uri`：[クライアントアプリの登録](/cometa/docs/external-integration-settings-v2#クライアントアプリの登録)でメモした値
- `<APPLICATION_ID_URI>`：[スコープ管理用アプリの登録](/cometa/docs/external-integration-settings-v2#スコープ管理用アプリの登録)でメモした**アプリケーション ID の URI**

### COMETA側の設定

#### Microsoft Entra ID設定

Microsoft Entra ID設定は、左サイドバーの**管理・連携**から表示できます。
各設定項目にこれまでにメモした値を入力し、**保存**をクリックします。

|設定項目|入力内容|
|---|---|
|認可エンドポイント|[クライアントアプリの登録](/cometa/docs/external-integration-settings-v2#クライアントアプリの登録)でメモした、**OAuth 2.0 承認エンドポイント (v2)** を入力します。|
|トークンエンドポイント|[クライアントアプリの登録](/cometa/docs/external-integration-settings-v2#クライアントアプリの登録)でメモした、**OAuth 2.0 トークン エンドポイント (v2)** を入力します。|
|クライアントID|[クライアントアプリの登録](/cometa/docs/external-integration-settings-v2#クライアントアプリの登録)でメモした、**アプリケーション (クライアント) ID**を入力します。|
|クライアントシークレット|[クライアントアプリの登録](/cometa/docs/external-integration-settings-v2#クライアントアプリの登録)でメモした、**クライアント シークレットの値**を入力します。|
|スコープ|[スコープ管理用アプリの登録](/cometa/docs/external-integration-settings-v2#スコープ管理用アプリの登録)でメモした、**スコープのURI**を入力します。|

![external-integration-settings-v2-2024-08-29-4-32-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/external-integration-settings-v2-2024-08-29-4-32-13.png){height="" width="50%"}

#### データストアの認証

左サイドバーの**管理・連携**>**データストア連携管理**から、データストアの連携画面へ移動します。

1. 任意のデータストア名を入力した状態で、認証方式で**Microsoft Entra ID認証**を選択し、**Microsoft Entra IDで認証する**をクリックします。
  Microsoftアカウントのサインイン画面が表示されます。
  
2. Microsoftにサインインし、表示される画面に沿って認証手順を進めます。

3. Snowflakeのホスト名を入力し、ウェアハウス・ロールを入力して、**利用開始**をクリックします。
  なお、**ロール**には、[スコープ管理用アプリの登録](/cometa/docs/external-integration-settings-v2#スコープ管理用アプリの登録)で指定したロール名を入力してください。

以上の手順で、データストアの新規連携は完了となります。

## 連携済みデータストアの認証

Microsoft Entra ID認証を利用する場合は、Microsoft Entra IDの**ユーザー プリンシパル名**と、Snowflakeのユーザーの**ログイン名**を一致させる必要があります。
あらかじめ[Snowflake側の設定](/cometa/docs/external-integration-settings-v2#snowflake側の設定)の手順1を行った上で、認証を行ってください。

## 困ったときには

### アセット一覧の更新がされない・実データの閲覧ができない

アセット一覧が更新されなくなったり、要約統計情報・プレビューなどの実データが閲覧できなくなった場合、クライアントシークレットの有効期限が切れている可能性があります。
この場合、[クライアントシークレットを追加](/cometa/docs/external-integration-settings-v2#クライアントアプリの登録)し直し、再認証を行ってください。

