---
articleId: 6fa73f9c-1a5e-4b77-b80d-b65dc61b34e6
slug: data-source-facebook-lead-ads
title: 転送元 - Facebookリード広告
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Facebookリード広告を取得してデータを転送する設定のDocsです。

## 制約
* アクセストークン失効などの原因により転送が失敗する場合があります。[Facebookの接続情報のヘルプ](/docs/connection-configuration-facebook-ad-insights)を参考に再認証をお願いします。
* アクセストークンは60日ごとに再認証が必要となります。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Facebook接続情報 |  Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| フォームID | Yes | - | リード広告を取得するフォームIDを指定します。（※1） |

### ※1 フォームIDの確認方法

ユーザーごとに管理ツールのレイアウトが異なっているため、ご自身の環境に合わせて確認してください。

1. Facebook Business Suiteから確認する方法
[Facebookビジネスマネージャ](https://business.facebook.com/) にアクセスし、左側のタブで**その他のツール** → **インスタントフォーム**を選択します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-facebook-lead-ads-2024-08-29-14-6-0.png)
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-facebook-lead-ads-2024-08-29-14-6-1.png)
リードを取得したいフォームをクリックすると、詳細画面に**フォームID**が表示されます。

2. フォームライブラリから確認する方法
[管理しているページ](https://www.facebook.com/pages/?category=your_pages)からリードを取得したいページを選択します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-facebook-lead-ads-2024-08-29-14-6-2.png)
ページのサイドバーから**投稿ツール**を選択します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-facebook-lead-ads-2024-08-29-14-6-3.png)
**投稿ツール**のサイドバーからフォームライブラリを選択します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-facebook-lead-ads-2024-08-29-14-6-4.png)
フォームの名前にマウスオーバーすると、フォームIDが表示されます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-facebook-lead-ads-2024-08-29-14-6-5.png)

## ユーザーへの権限付与

1. [Facebookビジネスマネージャ](https://business.facebook.com/)にアクセスします。左上のドロップダウンをクリックし、ビジネスアカウントを選択します。

![data-source-facebook-lead-ads-2024-08-29-14-6-6](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-facebook-lead-ads-2024-08-29-14-6-6.png){height="" width=""}

2. 左下にある**設定**をクリックします。
**その他のビジネス設定**をクリックします。

![data-source-facebook-lead-ads-2024-08-29-14-6-7](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-facebook-lead-ads-2024-08-29-14-6-7.png){height="" width=""}

3. 左のメニューで**統合**をクリックしてから、**リードアクセス**をクリックします。
**ユーザーを割り当て**をクリックします。

![data-source-facebook-lead-ads-2024-08-29-14-6-8](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-facebook-lead-ads-2024-08-29-14-6-8.png){height="" width=""}

4. Facebookページで権限が割り当てられている利用者の一覧が表示されます。
アクセス許可を割り当てる利用者の横の円にチェックを入れて、**割り当て**をクリックします。
選択した利用者がリードの情報にアクセスできるようになります。

※詳細につきましては、[公式ドキュメント](https://www.facebook.com/business/help/540596413257598?id=735435806665862)をご覧ください。


## 転送上の注意
プレビューをした際にカラム名が日本語で入る場合がありますが、このままBigQueryなどのデータウェアハウスに転送すると失敗してしまいます。

転送先の制約に合わせて、適宜カラム名を変更してください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-facebook-lead-ads-2024-08-29-14-6-9.png){height="" width=""}

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-facebook-lead-ads-2024-08-29-14-6-10.png){height="" width=""}
