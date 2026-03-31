---
articleId: aa8602e7-c74f-4a14-99ed-1e2fa3448515
slug: connection-configuration-dynamo-db
title: 接続情報 - Amazon DynamoDB
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
Amazon DynamoDBの接続情報を設定する際のDocsとなります。

## AWS Access Key IDとAWS Secret Access Keyの作成方法
 

### グループ作成
1. IAMコンソールにログインします。
 
2. メインページから**ユーザーグループ**を選択し、**グループを作成**をクリックします。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-dynamo-db-2024-08-29-14-25-0.png){height="" width=""}
 
3. グループ名、ポリシーに AmazonDynamoDBFullAccess を選択して**グループを作成**をクリックします。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-dynamo-db-2024-08-29-14-25-1.png){height="" width=""}


### ユーザー作成
1. メインページから**ユーザー**を選択し、**ユーザーを追加**をクリックします。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-dynamo-db-2024-08-29-14-25-2.png){height="" width=""}
 
2. ユーザー名を入力して、アクセスの種類で**プログラムによるアクセス**を選択し、次のステップへ進みます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-dynamo-db-2024-08-29-14-25-3.png){height="" width=""}

3. ユーザーを先ほど作成したグループに追加してユーザーの作成をします。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-dynamo-db-2024-08-29-14-25-4.png){height="" width=""}

 4. 作成後にAWS Access Key IDとAWS Secret Access Keyが表示されます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-dynamo-db-2024-08-29-14-25-5.png){height="" width=""}


参考：[AWS公式サイト](https://aws.amazon.com/jp/developers/access-keys/)
