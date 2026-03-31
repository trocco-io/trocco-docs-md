---
articleId: 8b5eedd4-6dbf-4c2c-862a-f5ecd91850ab
slug: how-to-create-facebook-app-and-get-token
title: Facebook広告レポート、コンバージョン、カスタムオーディエンス用アプリ作成・トークン取得手順
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
Facebook広告レポート、コンバージョン、カスタムオーディエンス連携用のアプリ・トークン作成手順に関する説明です。

## アプリの作成
まず、Facebookアプリを作成します。

 
1. **Facebookビジネスマネージャー** > **ビジネス設定**ページを開き、サイドバーの**アプリ** > **追加** > **新しいアプリIDを作成**をクリックします。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/how-to-create-facebook-app-and-get-token-2024-08-29-7-51-0.png){height="" width=""}

2. アプリタイプとして、**ビジネス**を選択し、**次へ**をクリックします。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/how-to-create-facebook-app-and-get-token-2024-08-29-7-51-1.png){height="" width=""}

3. アプリを作成画面にて、各種情報を入力します。アプリの目的は**自分自身または自分のビジネス**を選択してください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/how-to-create-facebook-app-and-get-token-2024-08-29-7-51-2.png){height="" width=""}
 
以上で、アプリの作成は完了です。

 
## システムユーザーの作成、及びトークンの取得
1. ビジネス設定のページを開き、**ユーザー** > **システムユーザー**を選択します。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/how-to-create-facebook-app-and-get-token-2024-08-29-7-51-3.png){height="" width=""}
 
2. **新しいシステムユーザーを追加**をクリックします。

 
3. システムユーザーの役割として**管理者システムユーザー**を選択します。

 
4. 作成したシステムユーザーを選択し、**アセットを追加**をクリックします。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/how-to-create-facebook-app-and-get-token-2024-08-29-7-51-4.png){height="" width=""}
 
以下、システムユーザーに対して広告レポートデータ、コンバージョンへの権限を割り当てます。

 
5. （Facebook広告レポートデータを利用する場合）**広告アカウント**を選択し、**全権限** > **広告アカウントを管理**を選んで**変更を保存**します。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/how-to-create-facebook-app-and-get-token-2024-08-29-7-51-5.png){height="" width=""}
 
6.  （コンバージョンを利用する場合）**ピクセル**を選択し、**全権限** > **ピクセルを管理**を選んで**変更を保存**します。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/how-to-create-facebook-app-and-get-token-2024-08-29-7-51-6.png){height="" width=""}
 
7.  システムユーザーを選択し、**新しいトークンを生成**をクリックします。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/how-to-create-facebook-app-and-get-token-2024-08-29-7-51-7.png){height="" width=""}
 
8.  作成したアプリを選択し、**利用可能なアクセス許可**の**ads_management**にチェックを入れ、**トークンを生成**をクリックします。

9.  生成されたトークンをコピーし、TROCCOの接続情報に入力してください。