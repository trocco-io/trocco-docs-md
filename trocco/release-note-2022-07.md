---
articleId: c4d802f4-7633-424a-b716-388219a1e93d
slug: release-note-2022-07
title: リリースノート-2022年07月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2022年07月のリリース情報をお届けします**

* * * 

## データカタログ

### テーブル情報

#### カラムベースのデータリネージ機能
データカタログ機能にて、カラムベースのデータリネージが自動生成されるようになりました。
データリネージを参照することで、分析で利用予定のカラムがどのカラムのデータを元に作られたのかといった関係性を調べることができます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-07-2024-08-29-8-57-0.png){height="" width=""}

#### 基本メタデータの追加

テーブル情報/カラム情報タブで基本メタデータを定義できるようになりました。
それぞれのテーブルについて「論理名」「説明」を定義できます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-07-2024-08-29-8-57-1.png){height="" width=""}

定義した論理名はテーブル一覧や検索結果画面で表示されるため、ひと目で何のテーブルか確認できるようになります。

#### カラム情報画面に、複数のユーザー定義メタデータを表示できるように
お客様自身で定義したメタデータを、各テーブルのカラム一覧上で閲覧できるようになりました。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-07-2024-08-29-8-57-2.png){height="" width=""}

上記設定は「ユーザー定義メタデータ用テンプレート」から設定することが可能となっております。

#### お気に入り機能の追加
テーブルの「お気に入り」機能が実装されました。
星アイコンをクリックすることでお気に入り追加・削除を設定できます。
お気に入り登録したテーブルはテーブル一覧で一番上に表示されます。



## 転送設定

### 転送先Google Driveが追加🎉
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-07-2024-08-29-8-57-3.png){height="" width=""}

お客様にてご利用いただいているGoogle Driveのフォルダに、csvファイルなどを転送することが可能となります。
ご利用にあたって必要な情報は以下をご覧ください。
* [接続情報](/v2/docs/connection-configuration-google-drive)
* [転送先](/v2/docs/data-destination-google-drive)



### 転送元Marketoにて、プログラムメンバーが取得できるように
Marketo上で設定・実行している各種施策の対象者（プログラムメンバー）の取得が可能となります。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-07-2024-08-29-8-57-4.png){height="" width=""}

### 転送元Marketoにて、スタティック別リードを取得する際、リストIDで絞り込み（フィルタ）ができるように
Marketo上で分類しているリストごとのリード取得が可能となります。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-07-2024-08-29-8-57-5.png){height="" width=""}

### 転送元SalesforceがOAuth認証に対応
これまではID/PWでの認証のみに対応していましたが、この度、OAuth認証で作成したSalesforce接続情報を利用できるようになりました。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-07-2024-08-29-8-57-6.png){height="" width=""}

なお、転送先Salesforce、転送元Salesforceレポート、転送元Tableau CRMはリリース時点ではOAuth認証に未対応です。
詳しくは、以下Docsをご覧ください。
[Salesforceの接続情報](/docs/connection-configuration-salesforce)

### 転送元Shopifyにて、transactionオブジェクトが取得できるように
Shopify上で保持している、orderに紐づく金銭取引データ（トランザクションデータ）を取得可能になりました。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-07-2024-08-29-8-57-7.png){height="" width=""}

その他データと組み合わせることで、より高度にShopify上のデータを分析できます。


## ワークフロー

### ワークフロージョブの自動リトライ機能が追加
ワークフローが失敗した際に、自動リトライが行えるようになりました。
ワークフロー全体設定画面より、自動リトライ回数を設定できます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-07-2024-08-29-8-57-8.png){height="" width=""}

### ワークフロージョブ上で実行される子や孫のワークフロージョブが途中で停止した場合、停止位置から再実行できるように

今までのワークフローでは、親のワークフロージョブを再実行した際、子や孫のワークフロージョブは最初から実行される仕様となっており、
子や孫のワークフロージョブが途中まで成功していた際に使いにづらいものとなっておりました。
今回のアップデートで、子や孫のワークフロージョブについても、親ワークフロージョブと同様に、途中から実行されるようになりました。


## UI・UX

### 英語化対応
以下の機能について、英語でご利用いただけるようになりました。
* データ転送
* データマート定義
* 運用支援
* 各種アカウント設定

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-07-2024-08-29-8-57-9.png){height="" width=""}


* * * 
その他、以下のような改修などが加わっております。
* BigQuery連携にて指定できるロケーションが最新化されました。
    * これまで転送できなかったロケーションとの接続が可能となります。
* 転送元BigQueryの出力オプションにてNUMRIC型が指定できるようになりました。
* * * 

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**

