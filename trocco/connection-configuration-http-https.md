---
articleId: a3524117-33af-419a-862d-826dbf0ee674
slug: connection-configuration-http-https
title: 接続情報 - HTTP・HTTPS
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

転送元HTTP・HTTPSの接続情報を作成するためのDocsです。
HTTP・HTTPSプロトコルのWebサービスからデータを取得する際、OAuth 2.0を利用して接続したい場合に、本接続情報を使用します。

なお、本記事では「HTTP・HTTPSプロトコルのWebサービス」を**データソース**と表記します。

:::(Info) (HTTP・HTTPSの接続情報)

OAuth 2.0を利用してデータソースに接続したい場合にのみ、必要となります。
OAuth 2.0を利用しない場合は、接続情報を作成する必要はありません。
:::

## 制約

:::(Warning) (OAuth 2.0を利用した接続に関する制約)

- グラントタイプには、以下のタイプのみ対応しています。
  - **認可コード**グラント（Authorization Code Grant）
  - **クライアントクレデンシャルズ**グラント（Client Credentials Grant）
- 転送ジョブの実行時にデータソースに接続する際の認証方法には、**Bearer認証**にのみ対応しております。
  - そのほかの認証方法には対応していません。
- トークンの取得・更新や認可コードの取得の際に利用されるパラメータは、OAuth 2.0の標準的な仕様に準拠していることを想定しています。
  - 詳しくは、[TROCCOにおけるトークンの取得・更新および認可コードの取得方法](/docs/connection-configuration-http-https#troccoにおけるトークンの取得・更新および認可コードの取得方法)を参照ください。
- 転送ジョブの実行中にアクセストークンの有効期限が切れた場合、転送ジョブは失敗します。
  - この場合、アクセストークンの有効期限内に転送ジョブが完了するように、転送設定を修正してください。
  - 転送設定STEP2のフィルター設定にて、取得対象のレコード数を削減するなどの対応が考えられます。
:::

## 事前準備

:::(Info) (OAuth認証情報の取得方法)

HTTP・HTTPS接続情報を作成する前に、データ取得対象のデータソース側にてクライアントアプリを作成する必要があります。
詳しくは、[クライアントアプリの作成手順](/docs/connection-configuration-http-https#クライアントアプリの作成手順)を参照ください。
:::

## 入力項目

### クライアントアプリ設定情報

**認可コード**グラントを利用する場合、クライアントアプリ作成時に**リダイレクトエンドポイント**の設定が必要となります。
以下のURLを指定してください。
`https://trocco.io/connections/http/callback`

### 接続情報

| 項目名 | 必須 | 内容                                                    |
| ------ | ---- | ------------------------------------------------------- |
| グラントタイプ   | Yes  | グラントタイプを以下のいずれかから選択します。<ul><li>認可コード</li><li>クライアントクレデンシャルズ</li></ul> |
| クライアントID   | Yes  | 作成したクライアントアプリの認証設定ページから取得した、クライアントIDを入力します。 |
| クライアントシークレット   | Yes  | 作成したクライアントアプリの認証設定ページから取得した、クライアントシークレットを入力します。 |
| 認可URL   | Yes*  | \* グラントタイプで**認可コード**を選択した場合に入力します。<br>認可コードを取得するためのURLを入力します。<br>リクエストに使われるパラメータはTROCCO側で自動で設定されますが、任意のパラメータを追加することもできます。<br>後述の**認可URLのパラメータ**を参照ください。 |
| アクセストークンURL   | Yes  |アクセストークン・リフレッシュトークンを取得するためのURLを入力します。<br>リクエストに使われるパラメータはTROCCO側で自動で設定されます。 |
| スコープ   | No  | アクセストークンがアクセスできるスコープを入力できます。<br>データソースによっては、クライアントアプリの管理画面でスコープを設定することで、本項目の入力は不要となる場合があります。 |

**詳細を設定する**をクリックすると、設定項目が表示されます。

| 項目名 | 必須 | 内容                                                    |
| ------ | ---- | ------------------------------------------------------- |
| リフレッシュトークンURL   | No  |グラントタイプで**認可コード**を選択した場合に入力できます。<br>アクセストークン・リフレッシュトークンを更新するためのURLを入力できます。<br>トークンの取得と更新とでエンドポイントが区別されている場合にのみ、本項目を入力ください。|
| 認可URLのパラメータ   | No  |グラントタイプで**認可コード**を選択した場合に入力できます。<br>認可URLのクエリパラメータに任意のkey/valueを追加できます。<br>一部のサービスでは、トークン取得の条件として、認可コード取得時に特定のパラメータを渡す必要があります。その場合に本項目を入力ください。|
| カスタムパラメータ   | No  |[各リクエスト](/docs/connection-configuration-http-https#troccoにおけるトークンの取得・更新および認可コードの取得方法)に任意のkey/valueを追加できます。<br>一部のサービスでは、API仕様に応じて特定のパラメータを渡す必要があります。<br>その場合に本項目を入力ください。<br>なお、本接続情報で設定される以下の項目は、カスタムパラメータとして追加することはできません。<ul><li>`redirect_uri`</li><li>`grant_type`</li><li>`client_id`</li><li>`client_secret`</li><li>`code`</li><li>`scope`</li></ul><li>`refresh_token`|



## クライアントアプリの作成手順

接続情報を作成する前に、データ取得対象のデータソース側にてクライアントアプリを作成する必要があります。
クライアントアプリの作成手順について、HubSpotを例に説明します。
HubSpotでアプリを作成する際には、HubSpotの[OAuthクイックスタートガイド](https://developers.hubspot.jp/docs/api/oauth-quickstart-guide)を参照します。

:::(Info) (クライアントアプリの作成手順)

クライアントアプリの作成手順は、接続したいデータソースによって異なります。
以下で説明するアプリの作成手順は、参考としてお考えください。
実際にアプリを作成する際は、データソース側が提供しているAPIドキュメントなどを適宜ご参照ください。
:::

1. [開発者アカウント](https://app.hubspot.com/signup-hubspot/developers)を作成します。
  ![001.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-http-https-2024-08-29-19-56-0.png){width="50%"}
  
2. 開発者アカウントのコンソールより、アプリを作成します。
  ![002-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-http-https-2024-08-29-19-56-1.png){width="50%"}

3. 作成するアプリの認証設定を行います。
  ![003-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-http-https-2024-08-29-19-56-2.png){width="50%"}
    - **リダイレクトエンドポイント**（リダイレクトURL）には、`https://trocco.io/connections/http/callback`を指定してください。   
    - **スコープ**には、TROCCOがデータを取得するにあたって必要となる最低限のスコープを設定してください。
    - [接続情報](/docs/connection-configuration-http-https#接続情報)の設定に必要となる、IDやスコープを記録してください。

## 接続情報の作成手順

1. HTTP・HTTPS接続情報の作成画面を開きます。
  各種入力項目には、[クライアントアプリの作成手順](/docs/connection-configuration-http-https#クライアントアプリの作成手順)にて記録したIDやスコープ、公式のAPIドキュメントなどに記載されているエンドポイントURIを入力します。
  ![004-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-http-https-2024-08-29-19-56-3.png){width="50%"}

2. 画面下部の**認証**をクリックします。
  データソース側の認証画面へと遷移します。画面上の指示に従い、適宜認証手順を行ってください。
  なお、認証に失敗した場合は、接続情報およびクライアントアプリの各種設定値に誤りがないかをご確認ください。
  ![005-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-http-https-2024-08-29-19-56-4.png){width="50%"}
  

3. 認証に成功したことを確認し、**保存**をクリックします。 

## TROCCOにおけるトークンの取得・更新および認可コードの取得方法

TROCCOでは、HTTP・HTTPS接続情報にて入力された値をもとに、トークンの取得・更新リクエストを行います。
また、グラントタイプに**認可コード**を選択した場合は、認可コードの取得リクエストも行います。
データ取得対象のデータソースとのやり取りは、データソースがOAuthの標準的な仕様に準拠していることを前提に、行われます。
OAuthの標準的な仕様については、[RFC6749](https://openid-foundation-japan.github.io/rfc6749.ja.html)を参照ください。

### 認可コードを選択した場合

#### 認可コードの取得リクエスト

HTTP・HTTPS接続情報にて入力された値をもとに、以下のリクエストを行います。
スコープが複数設定されている場合は、半角区切りで指定されます。
なお、必須パラメータやリクエスト形式が異なる場合、認可コードの取得に失敗します。ご注意ください。

```
<AUTHORIZATION_ENDPOINT>?response_type=code&client_id=<CLIENT_ID>&redirect_uri=<REDIRECT_ENDPOINT>&scope=<SCOPE1> <SCOPE2> <SCOPE3>&<AUTHORIZATION_URL_PARAMETER_NAME>=<AUTHORIZATION_URL_PARAMETER_VALUE>&<CUSTOM_PARAMETER_NAME_1>=<CUSTOM_PARAMETER_VALUE_1>&<CUSTOM_PARAMETER_NAME_2>=<CUSTOM_PARAMETER_VALUE_2>
```

#### トークンの取得リクエスト

HTTP・HTTPS接続情報にて入力された値をもとに、以下のリクエストを行います。
URLにはアクセストークンURLが指定され、POSTするデータとしては以下が指定されます。
リクエスト形式が異なる場合、トークンの取得に失敗します。ご注意ください。

```
{
    grant_type: "authorization_code",
    client_id: <CLIENT_ID>,
    client_secret: <CLIENT_SECRET>,
    code: <AUTHORIZATION_CODE>,
    redirect_uri: <REDIRECT_ENDPOINT>
    <CUSTOM_PARAMETER_NAME_1>: <CUSTOM_PARAMETER_VALUE_1>
    <CUSTOM_PARAMETER_NAME_2>: <CUSTOM_PARAMETER_VALUE_2>
    ︙
}
```

#### トークンの更新リクエスト

HTTP・HTTPS接続情報にて入力された値をもとに、以下のリクエストを行います。
URLにはリフレッシュトークンURLが指定され、POSTするデータとしては以下が指定されます。
リクエスト形式が異なる場合、トークンの更新に失敗します。ご注意ください。

```
{
    grant_type: "refresh_token",
    client_id: <CLIENT_ID>,
    client_secret: <CLIENT_SECRET>,
    refresh_token: <REFRESH_TOKEN>
    <CUSTOM_PARAMETER_NAME_1>: <CUSTOM_PARAMETER_VALUE_1>
    <CUSTOM_PARAMETER_NAME_2>: <CUSTOM_PARAMETER_VALUE_2>
    ︙
}
```

### クライアントクレデンシャルズを選択した場合

#### トークンの取得リクエスト

HTTP・HTTPS接続情報にて入力された値をもとに、以下のリクエストを行います。
URLにはアクセストークンURLが指定され、POSTするデータとしては以下が指定されます。
リクエスト形式が異なる場合、トークンの取得に失敗します。ご注意ください。

```
{
    grant_type: "client_credentials",
    client_id: <CLIENT_ID>,
    client_secret: <CLIENT_SECRET>,
    scope: <SCOPE1> <SCOPE2> <SCOPE3>
    <CUSTOM_PARAMETER_NAME_1>: <CUSTOM_PARAMETER_VALUE_1>
    <CUSTOM_PARAMETER_NAME_2>: <CUSTOM_PARAMETER_VALUE_2>
    ︙
}
```
