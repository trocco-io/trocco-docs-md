---
articleId: 83eb4505-3789-4631-bb50-2d3952a1945a
slug: release-note-2022-05
title: リリースノート-2022年05月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2022年05月のリリース情報をお届けします**

* * * 

## データカタログ

### クエリエディタ

#### クエリ記述時、スキャン量が表示されるように
データカタログのクエリエディタで、クエリスキャン量やシンタックスエラーが表示されるようになりました。
クエリが有効な場合には予想スキャン量が、構文エラーがある際にはエラーメッセージが画面右上に表示されます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-05-2024-08-29-3-11-0.png){height="" width=""}

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-05-2024-08-29-3-11-1.png){height="" width=""}


## 転送設定

### 転送先にZoho CRMが追加🎉
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-05-2024-08-29-3-11-2.png){height="" width=""}

お客様のZoho CRMで使用できるモジュールに対して、Insert・Update・Upsertを実行できます。
ご利用にあたって必要な情報は以下をご覧ください。
* [接続情報](/v2/docs/connection-configuration-zoho-crm)
* [転送先](/v2/docs/data-destination-zoho-crm)


### 転送先Google Ads コンバージョンに拡張コンバージョンが対応
これまでTROCCOでは 転送先Google Adsとしてオフラインコンバージョンのみ対応していましたが、
今回のリリースで拡張コンバージョンに対応致しました。
転送設定選択画面より、`転送先 Google Ads コンバージョン`を選択し、コンバージョン種別より`拡張コンバージョン`を選択ください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-05-2024-08-29-3-11-3.png){height="" width=""}


あわせて、コネクタの名称も`転送先 Google Ads コンバージョン` に変更となりました。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-05-2024-08-29-3-11-4.png){height="" width=""}

### 転送元Facebook広告(Facebook Ad Insights)にテンプレート機能が追加
転送元Facebook広告(Facebook Ad Insights)にテンプレート機能が追加され、フィールド設定を簡単に設定ができるよになりました。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-05-2024-08-29-3-11-5.png){height="" width=""}

### 転送元GoogleAd ManagerでAdUnitViewがオプションとして追加
転送元Google Ad Managerにて、最上位の広告ユニットを表示するか全ユニットを表示するか指定できるようになりました。
本対応により、子、孫広告単位の深い階層のレポートも取得できるようになりました。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-05-2024-08-29-3-11-6.png){height="" width=""}

### 転送元Shopifyがカスタムアプリに対応
Shopifyのカスタムアプリに対応いたしました。
接続情報画面でShopifyを選択した際、アプリ種別でカスタムアプリを選択し登録することが可能となります。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-05-2024-08-29-3-11-7.png){height="" width=""}


## データマート

### Redshift,Snowflakeにて、自由記述モードが追加
データマート定義にて、自由記述モードが追加されました。
該当のDWHに対して、DDL文など任意のクエリを発行していただくことが可能です。
※画像はRedshiftの例です。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-05-2024-08-29-3-11-8.png){height="" width=""}

## UI・UX

### 各一覧画面に一度に表示される件数が50件に引き上げられました
転送設定一覧画面、データマート定義一覧画面、ワークフロー定義一覧画面の1ページあたりの定義数が20から50に引き上げられました。


* * * 

その他、以下のような改修などが加わっております。
* 転送元LocalFileにて、STEP1にて文字コーディングを指定できるようになりました。
* データマートBigqueryで自由記述クエリの時にロケーションを指定するようになりました。
* * * 
 

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**

