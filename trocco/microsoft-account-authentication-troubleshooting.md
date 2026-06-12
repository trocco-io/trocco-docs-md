---
articleId: 12ba5c5a-901e-4f31-911d-8245fea3de13
slug: microsoft-account-authentication-troubleshooting
title: Microsoftアカウント認証時のトラブルシューティング
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---

## 概要

接続情報の作成時にMicrosoftアカウント認証を行う上での注意点を記載しています。

## 無効なクライアント情報のため接続に失敗

```
Error: java.lang.RuntimeException: java.util.concurrent.ExecutionException: com.microsoft.bingads.v13.reporting.CouldNotSubmitReportingDownloadException: java.util.concurrent.ExecutionException: com.microsoft.bingads.v13.reporting.AdApiFaultDetail_Exception: Invalid client data. Check the SOAP fault details for more information. TrackingId: xxxxxx-xxxx-xxxx-xxxx-xxxxxxxx.
```

### 考えられる原因

- Microsoftの各種サービスを参照できるアカウントではない可能性があります。
- Microsoft Azure管理者による承認が行われていない可能性があります。
- （Microsoft Advertisingの接続情報のみ）Developer Tokenに誤りがある可能性があります。

### 対処法

- アカウント認証に使用しているMicrosoftアカウントが、Microsoftの各種サービスを参照できる権限を持っているか確認してください。
- テナントの設定でユーザーの同意を無効にしている場合
  - Microsoftアカウント認証時にMicrosoft Azureの管理者の同意が必要です。管理者からの承認後、再度Microsoftアカウント認証を行なってください。詳しくは[テナントの設定でユーザーの同意を制限している場合](/docs/microsoft-account-authentication-troubleshooting#テナントの設定でユーザーの同意を制限している場合)を参照ください。
- Developer Tokenが正しく発行されているか確認してください。詳しくは[開発者トークンを取得する](https://learn.microsoft.com/ja-jp/advertising/guides/get-started?view=bingads-13#get-developer-token)を参照ください。
  - Developer Tokenは、スーパー管理者のみが発行可能です。
  - 発行したDeveloper Tokenには、アカウント認証に使用するMicrosoftアカウントを紐付けてください。

## テナントの設定でユーザーの同意を制限している場合

テナントの設定でユーザーの同意を制限している場合は、ユーザーのみで認証を完結できず、管理者側での作業が必要な場合があります。

### 管理者に承認を要求できる場合

お使いのMicrosoft Entra ID（旧Microsoft Azure AD）の[テナントの設定でユーザーの同意を制限](https://learn.microsoft.com/entra/identity/enterprise-apps/user-admin-consent-overview#user-consent-settings)しており、管理者への承認要求が可能な場合は、以下の画面が表示されます。

![connection-configuration-microsoft-advertising-2024-08-29-20-47-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-microsoft-advertising-2024-08-29-20-47-0.png){width="25%"}

#### 対処法

以下の手順で接続情報を作成してください。

1. 要求する理由を適宜入力し、**承認要求**をクリックします。
![connection-configuration-microsoft-advertising-2024-08-29-20-47-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-microsoft-advertising-2024-08-29-20-47-1.png){width="25%"}

2. **アプリに戻る**をクリックします。
![connection-configuration-microsoft-advertising-2024-08-29-20-47-2](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-microsoft-advertising-2024-08-29-20-47-2.png){width="25%"}

    この際に、一旦接続情報作成画面が閉じます。ご留意ください。

3. Microsoft Azureの管理者に[管理者の同意手順](/docs/microsoft-account-authentication-troubleshooting#管理者の同意手順)を依頼します。

4. 管理者側の同意手順が終了した後、再び接続情報作成画面を開いて**Microsoftアカウント認証**をクリックします。
   認証に成功します。接続情報を保存してください。

#### 管理者の同意手順

1. [Microsoft Azure](https://portal.azure.com/)にログインし、**エンタープライズ アプリケーション**をクリックします。
![connection-configuration-microsoft-advertising-2024-08-29-20-47-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-microsoft-advertising-2024-08-29-20-47-3.png){width="50%"}
2. **管理者の同意要求** > **TROCCO**を順にクリックします。
![connection-configuration-microsoft-advertising-2024-08-29-20-47-4](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-microsoft-advertising-2024-08-29-20-47-4.png){width="50%"}
3. **アクセス許可のレビューと同意**をクリックします。
![connection-configuration-microsoft-advertising-2024-08-29-20-47-5](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-microsoft-advertising-2024-08-29-20-47-5.png){width="50%"}
4. 表示されたポップアップ画面にて、**承諾**をクリックします。
![connection-configuration-microsoft-advertising-2024-08-29-20-47-6](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-microsoft-advertising-2024-08-29-20-47-6.png){width="25%"}

    以上で同意が完了しました。管理者の同意が完了したことを依頼者に通知してください。

:::(Warning) (アクセス許可の同意が必要な権限について)

アクセス許可の同意が必要な権限は、作成する接続情報のサービスによって異なります。

:::

### 「承認要求」ボタンが表示されない場合

お使いのMicrosoft Entra ID（旧Microsoft Azure AD）の組織（テナント）の設定によっては、**Microsoftアカウント認証**ボタンを押下した後に以下のような「管理者の承認が必要」という画面が表示され、**承認要求**ボタンが表示されないことがあります。

![microsoft-account-authentication-troubleshooting-2026-06-10-20-51-24](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/microsoft-account-authentication-troubleshooting-2026-06-10-20-51-24.png){width="25%"}

これは、組織のポリシーで、ユーザーから管理者への同意要求（承認要求）が許可されていない場合に発生します。

#### 対処法

グローバル管理者の権限を持つ方が、ユーザーからの承認要求を許可する設定を有効にすることで、**承認要求**ボタンが表示され、解消する可能性があります。

1. グローバル管理者の権限を持つ方が、[Microsoft Entra管理センターの同意とアクセス許可の設定画面](https://portal.azure.com/#view/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/~/AdminConsentSettings)にアクセスします。
2. 管理者の同意要求（Admin consent requests）の設定で、ユーザーが同意できないアプリについて管理者の同意を要求できるよう、設定をはい（Yes）に変更します。
   詳しくは、Microsoft Entraの公式ドキュメント[管理者の同意要求ワークフローを構成する](https://learn.microsoft.com/ja-jp/entra/identity/enterprise-apps/configure-admin-consent-workflow)を参照ください。
3. 設定後、ユーザー側で再度**Microsoftアカウント認証**をクリックし、表示された**承認要求**ボタンから管理者に同意を依頼します。

:::(Warning) (設定しても解消しない場合)

組織（テナント）の設定には複数のパターンがあり、上記の設定だけでは解消しない場合や、そもそもTROCCOのアプリが組織のアプリケーション一覧に表示されない場合があります。
その場合は、お気軽に[TROCCOヘルプセンター](https://help.trocco.io/hc/ja)よりお問い合わせください。

:::
