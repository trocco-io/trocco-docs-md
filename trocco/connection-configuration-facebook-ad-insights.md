---
articleId: 64213a93-2816-41dc-ab6c-5218d34ec493
slug: connection-configuration-facebook-ad-insights
title: 接続情報 - Facebook
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Facebookの接続設定の接続情報を設定する際のDocsとなります。
事前に、Facebook広告へのアクセス権限を持ったFacebookアカウントをご用意ください。

## 制約

* Facebookの認証情報は60日ごとに再認証が必要となります。下記の「再認証方法」を参考に再設定をお願いします。
認証情報の期限が切れた場合、その接続情報を使用した転送設定は認証期限切れとのエラーメッセージが表示されます。エラー通知を設定することで認証期限切れを検知できますので、再設定を対応してください。

* 連携しているFacebookアカウントのパスワードを変更した場合など、上記以外にも再認証が必要となるケースがございます。そのような場合にも下記の「再認証方法」を参考に再設定をお願いします。
 
## 新規作成方法

Facebookとの連携方法には、「システムユーザーで作成」と「Facebookアカウントで作成」の2種類があります。
![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-facebook-ad-insights-2025-10-14-17-17-24.png)

### システムユーザーで作成する場合

「システムユーザーで作成」をクリックし、入力項目を入力して保存します。

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力します。|
| メモ | No | TROCCO内部で利用する接続情報のメモを入力できます。|
| 認証方式 | No | 利用できる認証方式はアクセストークンのみです。 |
| アクセストークン | Yes | Metaビジネスマネージャで取得したシステムユーザーのアクセストークンを入力します。詳しくは[システムユーザーの作成、取得、更新 - Business Management APIs](https://developers.facebook.com/docs/marketing-api/system-users/create-retrieve-update)を参照ください。 |

### Facebookアカウントで作成する場合

1. 「Facebookアカウントで連携」をクリックします。アカウントを確認し、**○○としてログイン**をクリックしてください。
 
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-facebook-ad-insights-2024-08-29-17-10-1.png){height="" width=""}
  
2. 設定情報を入力する
TROCCO上で、接続設定の**名前**を入力し、**保存**をクリックして作成してください。
 
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-facebook-ad-insights-2024-08-29-17-10-2.png){height="" width=""}

#### 再認証方法

再認証をする接続情報の編集画面にて、**Facebookアカウント再認証**をクリックします。
 
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-facebook-ad-insights-2024-08-29-17-10-3.png){height="" width=""}

アカウントを確認し、**○○としてログイン**をクリックしてください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-facebook-ad-insights-2024-08-29-17-10-4.png){height="" width=""}
