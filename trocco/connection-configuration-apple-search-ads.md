---
articleId: 1f7e0c6b-b0d8-49e8-80d1-7ff347225903
slug: connection-configuration-apple-search-ads
title: 接続情報 - Apple Search Ads
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
Apple Search Adsの接続情報を設定する際のDocsとなります。

## ユーザーを招待する

1. Account Adminの権限で管理画面にログインし、 https://app.searchads.apple.com/cm/app/settings/users/invite からAPIの実行権限を持ったユーザーを招待します。
　ユーザーのRoleは `API Account Read Only` を選択してください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-apple-search-ads-2024-08-29-16-11-0.png){height="" width=""}

2. 招待したユーザーでログインし、以下を設定してください。


## ClientID, Team ID, Key ID, 秘密鍵の取得　

1. 以下のコマンドを実行して**private-key.pem**を生成します。
```
$ openssl ecparam -genkey -name prime256v1 -noout -out private-key.pem 
```

2. 以下のコマンドを実行して**public-key.pem**を生成します。

```
$ openssl ec -in private-key.pem -pubout -out public-key.pem
```


3. Apple Search Adsの管理画面からアカウントの設定（settings）へ遷移します。
※この時確認できる**ACCOUNT ID**を**Organization ID**に入力してください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-apple-search-ads-2024-08-29-16-11-1.png){height="" width=""}

4. **public-key.pem**の内容を入力して**save**をクリックします。

5. 画面に表示された**clientId**、**teamId**、**keyId**をそれぞれ **Client ID**、**Team Id**、**Key ID**に入力してください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-apple-search-ads-2024-08-29-16-11-2.png){height="" width=""}

6. `private-key.pem` の内容を**秘密鍵**に入力してください。