---
articleId: f5a3c817-6bf8-48f5-b5b0-fad918b22587
slug: connection-configuration-zoho-crm
title: 接続情報 - Zoho CRM
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Zoho CRMの接続情報を設定する際のDocsになります。

OAuth 2.0認証を用いて接続情報を作成します。

## 前提条件

お客様にてZohoアカウントを作成する必要があります。
接続情報を作成する際に、ログインする必要があります。

## 入力情報
 
 | 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力してください。 |
| ユーザーアカウント(Email) | Yes | 認証時のアカウントを指定します。※Zohoアカウント認証時に自動的に設定されます。 |
| ドメイン | Yes | Zoho CRMを利用している国を指定します。※Zohoアカウント認証時に自動的に設定されます。 |
| 環境 | Yes | データ転送をする際の接続先を下記の3つの中から選択してください。<br>本番／開発／サンドボックス(テスト) |


 
## 接続情報の作成方法

1. [接続情報の新規作成画面](http://trocco.io/connections/new) の**クラウドアプリケーション**タブより、**Zoho CRM**を選択してください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-zoho-crm-2024-08-29-16-25-0.png){width="50%"}
2. 作成画面より、**Zoho CRMアカウント認証**を押下ください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-zoho-crm-2024-08-29-16-25-1.png){width="50%"}
3. Zohoログイン画面に遷移するので、画面上よりログインを行ってください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-zoho-crm-2024-08-29-16-25-2.png){height="" width="50%"}
4. Zohoの権限申請確認画面より**承諾する**を押下ください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-zoho-crm-2024-08-29-16-25-3.png){height="" width="50%"}

※ 権限申請確認画面が出ず、`「クライアントIDが不正です」`となる場合、利用しているブラウザで複数のZohoアカウントにログインしている可能性があります。一度全てのアカウントをログアウト、もしくはプライベートモードよりお試しください。

5. 接続情報作成画面に戻ります。OAuth認証が済んでいると
    - ユーザーアカウント（Email）
    - ドメイン
が入力されます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-zoho-crm-2024-08-29-16-25-4.png){height="" width="50%"}

6. 接続情報名、メモを記載し、保存してください。

これで接続情報の作成は完了になります。

## 参考

- [Introduction to Zoho CRM | Online Help - Zoho CRM](https://help.zoho.com/portal/en/kb/crm/getting-started/articles/get-started-introduction-zoho-crm)
- [Authorization Request | Online Help - Zoho CRM](https://www.zoho.com/crm/developer/docs/api/v2/auth-request.html)
