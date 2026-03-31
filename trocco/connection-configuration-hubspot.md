---
articleId: fa4d2f0c-2707-4da2-b1fb-f748bae71f80
slug: connection-configuration-hubspot
title: 接続情報 - HubSpot
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
HubSpotの接続情報を設定する際のDocsとなります。

:::(Error) (認証方法としてのHubSpot APIキーの利用停止)
HubSpot APIキーは、2022年11月30日以降、HubSpot APIにアクセスするための認証方法として使用できなくなります。
今後、認証方式としてはOAuth 2.0をお使いください。
詳しくは、[公式ドキュメント](https://knowledge.hubspot.com/ja/integrations/how-do-i-get-my-hubspot-api-key)を参照ください。
:::

## 設定項目

### 基本項目

|項目名|必須|内容|
|:----|:----|:----|
|名前|Yes|TROCCO内部で利用する接続情報の名前を入力してください。|
|メモ|No|TROCCO内部で利用する接続情報のメモを入力してください。|
|認証方式|Yes|**OAuth 2.0** を選択してください。|
|HubSpotアカウント|No|**HubSpotアカウント認証** または **HubSpotアカウント再認証** をクリックしてください。<br>以降の手順については、後述の「OAuth認証手順」を参照ください。


## 設定項目情報の取得方法

### OAuth認証手順

:::(Warning) (OAuth認証に必要な権限)

スーパー管理者権限が必要です。
スーパー管理者の設定方法など、詳しくは[HubSpotユーザー権限ガイド](https://knowledge.hubspot.com/ja/settings/hubspot-user-permissions-guide)の「スーパー管理者」を参照ください。
:::

1. 認証方式にて**OAuth 2.0**を選択し、**HubSpotアカウント認証**あるいは**HubSpotアカウント再認証**をクリック
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-hubspot-2024-08-29-0-20-0.png){height="" width=""}

2. アプリを接続するアカウントを選択し、**アカウントを選択**をクリック
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-hubspot-2024-08-29-0-20-1.png){height="" width=""}

TROCCOにリダイレクトされれば、認証は完了です。もしも画像認証が求められた場合は画面の指示に従ってください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-hubspot-2024-08-29-0-20-2.png){height="" width=""}

