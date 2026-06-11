---
articleId: 506615d7-153d-4b1c-ade1-ad5222f7de15
slug: saml-authentication-sso
title: SAML認証によるSSOについて
parentCategoryId: 10ff9083-6f59-48a2-ba36-922d9907305c
languageCode: ja
---
## 概要

TROCCOにてSAML認証によるSSOを行う方法についてのDocsです。

## SSOについて

Single Sign On（SSO）とは、1組のID・パスワードによる認証を一度行うだけで、複数のWebサービスやアプリケーションにログインできるようにする仕組みのことです。

:::(Warning) (プラン上の制約)

SAML認証によるSSOは、**Essential**プラン以上の契約アカウントでのみ、ご利用いただけます。
:::

### SSOを導入するメリット

以下のようなメリットが考えられます。

- 1組のID・パスワードを記録するだけでよいため、利便性が向上する。
- 利用するサービスの数だけパスワードを管理する必要性がなくなる。
- 社員ごとに利用可能なサービスを一括で管理できるため、管理者の負担が軽減する。

### SAML認証について

TROCCOでは、SSOの認証方式としてSecurity Assertion Markup Language（**SAML**）方式を採用しています。
SAML方式では、認証情報を提供する側がIdentity Provider（**IdP**）、認証情報を利用する側がService Provider（**SP**）と定義されます。
以下では、**IdP**（Okta、Entra ID、Onelogin、GMOトラスト・ログインなど）と**SP**（TROCCO）に分けて、それぞれの設定手順を説明します。

:::(Info) (SSOのログインフロー)

TROCCOでは、SSOのログインフローとして**IdP Initiated SSO**を採用しています。
SSOを利用してTROCCOにログインする際は、**IdP**（Okta、Entra ID、Onelogin、GMOトラスト・ログインなど）側からログインしてください。

なお、GMOトラスト・ログインのIdP側の設定手順に関しては、[TROCCO のSAML認証の設定方法](https://support.trustlogin.com/hc/ja/articles/28588143193497)よりご確認いただけます。
:::

## 設定手順

### 事前準備

IdP側の設定を行う際に、TROCCOが指定するAssertion Consumer Service URL（**ACS_URL**）が必要となります。
ACS_URLは、TROCCOアカウントごとに異なります。
TROCCO画面右上のメールアドレス部分>**アカウントセキュリティ**を順にクリックし、**SAML認証を使用したSSO**配下にあるURLを確認してください。

![saml-authentication-sso-2024-08-29-7-37-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/saml-authentication-sso-2024-08-29-7-37-0.png){height="" width="50%"}

:::(Info) (TROCCOロゴの取得方法)

IdPにTROCCOを登録する際、アプリロゴのアップロードが必要となることがあります。
TROCCOのロゴは、[弊社ホームページ](https://primenumber.com/presskit/)からダウンロードできます。
:::

### IdP側の設定

以下を設定します。
1. IdPに、TROCCOをSPとして登録する
2. 登録したSP（TROCCO）に、ユーザーやグループをアサインする
3. IdPメタデータを取得する

#### IdPにTROCCOを登録する際に必要となる情報

以下は、IdPにTROCCOをSPとして登録する際に必要となる情報です。

- Assertion Consumer Service URL（ACS_URL）
  - [事前準備](/docs/saml-authentication-sso#事前準備)にて取得した**ACS_URL**を指定します。
- SP Entity ID
  - `https://trocco.io`を指定します。
- NameID Format
  - `Email`（または`EmailAddress`）を指定します。

:::(Warning) (入力項目名について)

IdPによっては、入力項目名に別の名称が用いられることがあります。以下は代表的な例です。
- ACS_URL：**Single sign on URL**
- SP Entity ID：**Audience URI**
:::

以下で、Oktaを例に設定手順を説明します。
 
#### STEP1 TROCCOをSPとして登録する

1. Oktaの管理画面のメニューから、**Applications**＞**Applications**の順にクリックします。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/saml-authentication-sso-2024-08-29-7-37-1.png){height="" width="50%"}

2. **Create App Integration**をクリックします。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/saml-authentication-sso-2024-08-29-7-37-2.png){height="" width="50%"}

3. **SAML 2.0**を選択し、**Next**をクリックします。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/saml-authentication-sso-2024-08-29-7-37-3.png){height="" width="50%"}

4. General Settingsにて適宜設定し、**Next**をクリックします。
   - **App Name**には`trocco`と入力してください。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/saml-authentication-sso-2024-08-29-7-37-4.png){height="" width="50%"}

5. Configure SAMLにて適宜設定し、**Next**をクリックします。
   - [IdPにTROCCOを登録する際に必要となる情報](/docs/saml-authentication-sso#idpにtroccoを登録する際に必要となる情報)を参照し、各設定値を指定してください。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/saml-authentication-sso-2024-08-29-7-37-5.png){height="" width="50%"}

6. Feedbackに適宜回答し、**Finish**をクリックします。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/saml-authentication-sso-2024-08-29-7-37-6.png){height="" width="50%"}

#### STEP2 ユーザーやグループをアサインする

**Assignments**＞**Assign**の順にクリックし、**Assign to People**または**Assign to Groups**から適宜アサインしてください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/saml-authentication-sso-2024-08-29-7-37-7.png){height="" width="50%"}

#### STEP3 IdPメタデータを取得する

1. **Sign On**＞**View Setup Instructions**の順にクリックします。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/saml-authentication-sso-2024-08-29-7-37-8.png){height="" width="50%"}

2. 表示された画面の下部にある**Optional**をクリックします。
  **Provide the following IDP metadata to your SP provider**が表示されます。
  表示されているメタデータを記録してください。

:::(Info) (Entra ID（旧Azure AD）をご利用の場合)

Entra ID（旧Azure AD）をご利用の場合は、サインオンURL、リレー状態、ログアウトURLの設定は不要です。
**識別子**および**応答URL**を設定してください。
- 識別子
  - `https://trocco.io/`を指定します。
- 応答URL
  - [事前準備](/docs/saml-authentication-sso#事前準備)にて取得した**ACS_URL**を指定します。
:::

### TROCCO（SP）側の設定

TROCCOにIdPメタデータを登録します。

1. TROCCO画面右上のメールアドレス部分>**アカウントセキュリティ**を順にクリックし、**SAML認証を使用したSSO**から**有効にする**をクリックします。
  ![saml-authentication-sso-2024-08-29-7-37-9](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/saml-authentication-sso-2024-08-29-7-37-9.png){height="" width="50%"}

2. [STEP3 IdPメタデータを取得する](/docs/saml-authentication-sso#step3-idpメタデータを取得する)で取得した値を入力し、**保存**をクリックします。    
  ![002-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/saml-authentication-sso-2024-08-29-7-37-10.png){height="" width="50%"}

:::(Info) (ログイン方法としてパスワード認証を無効にしたい場合)

TROCCOへのログイン方法としてパスワード認証を無効にし、SSOのみを利用する場合は、**SAML認証によるログインを必須にする**を有効にしてください。
:::

:::(Warning) (ユーザーの追加方法について)

SAML認証を設定する前と同様に、[ユーザーを招待](/docs/user-invitation)できます。
ただしこの際に、**IdPでアサインしたユーザーのメールアドレスとTROCCOに追加するメールアドレスを必ず一致**させてください。
:::
