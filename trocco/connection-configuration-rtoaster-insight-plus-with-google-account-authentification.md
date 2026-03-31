---
articleId: 763797b7-6432-473b-95d6-6e8a92a8707a
slug: connection-configuration-rtoaster-insight-plus-with-google-account-authentification
title: 接続情報 - Rtoaster insight+ Googleアカウント連携 
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
Rtoaster insight+のGoogleアカウント連携機能を利用した接続情報を設定する際のDocsとなります。
 
## 前提条件
Rtoaster insight+ Googleアカウント連携の接続情報は、Google Cloud Platform（以降GCPと略します）の東京リージョン（asia-northeast1）上で構築されているRtoaster insight+用BigQueryにあるデータを取得する際に使用します。
 
Rtoaster insight+用BigQueryでは下記のGCPプロジェクトのみ使用します。

| プロジェクト名 | 役割 |
| --- | --- |
| rtoaster-insight | Googleアカウント連携時に連携されます。 |
| rtoaster-data | Rtoaster insight+画面上のRtoasterテーブルに対応するデータが入っています。 |
| bp-pica-prd | Rtoaster insight+画面上のユーザー定義テーブルに対応するデータが入っています。 |

また、BigQueryからデータをGoogle Cloud Storage（以降GCSと略します）経由させてからデータを取得します。
そのため、Googleアカウント連携で連携したGoogleアカウントにGCSの**ストレージ管理者**権限を付与する必要があります。
![GCSの権限追加.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-rtoaster-insight-plus-with-google-account-authentification-2024-08-29-7-40-0.png){height="500" width=""}

## 事前準備
Rtoaster insight+の管理者権限を持つアカウントでRtoaster insight+の管理画面を操作します。

1. Rtoaster insight+の管理画面サイドバーより**オプション** → **Googleアカウント連携**を開きます。

![オプション選択.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-rtoaster-insight-plus-with-google-account-authentification-2024-08-29-7-40-1.png){height="400" width=""}

![Googleアカウント連携選択.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-rtoaster-insight-plus-with-google-account-authentification-2024-08-29-7-40-2.png){height="500" width=""}

2. 画面左上にある**アカウント追加**よりデータ転送の操作を行うためのGoogleアカウントを設定してください。

※GCPサービスアカウントは設定できません。
![Google連携アカウント追加.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-rtoaster-insight-plus-with-google-account-authentification-2024-08-29-7-40-3.png){height="350" width=""}

![連携アカウント追加.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-rtoaster-insight-plus-with-google-account-authentification-2024-08-29-7-40-4.png){height="200" width=""}

しばらくすると、設定したGoogleアカウントでGCPコンソールを開くと以下のGCPプロジェクトが参照可能になります。

GCPにログインしてから下記のURLで確認してください。
[https://console.cloud.google.com/bigquery?project=rtoaster-insight](https://console.cloud.google.com/bigquery?project=rtoaster-insight)

![プロジェクト選択.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-rtoaster-insight-plus-with-google-account-authentification-2024-08-29-7-40-5.png){height="400" width=""}


## 入力項目

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力してください。 |
| Googleアカウント | Yes |  **Googleアカウント認証**をおこなって、Rtoaster insight+画面上でGoogleアカウント連携をしたアカウントを指定してください。 |


### Googleアカウント認証
1. **Googleアカウント認証**により、Rtoaster insight+画面上でGoogleアカウント連携をしたアカウントを指定してください。
![Googleアカウント認証.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-rtoaster-insight-plus-with-google-account-authentification-2024-08-29-7-40-6.png){height="200" width=""}

2. TROCCOがGoogleアカウントへの追加アクセスを求めますので許可してください。
![アクセス許可.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-rtoaster-insight-plus-with-google-account-authentification-2024-08-29-7-40-7.png){height="600" width=""}