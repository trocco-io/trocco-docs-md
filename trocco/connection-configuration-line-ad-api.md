---
articleId: ced3ec79-1f58-41e9-b95e-3fdc74cd5814
slug: connection-configuration-line-ad-api
title: 接続情報 - LINE広告
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
LINE広告（旧 Line Ads Platform）の接続情報を作成するためのDocsです。

## 設定項目
| 項目 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | ✓ | TROCCO内部で利用する接続情報の名前を入力します。 |
| メモ | - | TROCCO内部で利用する接続情報のメモを入力できます。 |
| APIアクセスキー | ✓ | APIアクセスキーを入力します。<br>取得方法について、詳しくは[APIアクセスキーの取得方法](/docs/connection-configuration-line-ad-api#apiアクセスキーの取得方法)を参照ください。 |
| APIシークレットキー | ✓ | APIシークレットキーを入力します。<br>取得方法について、詳しくは[APIアクセスキーの取得方法](/docs/connection-configuration-line-ad-api#apiアクセスキーの取得方法)を参照ください。|

## APIアクセスキーの取得方法
### LINE広告APIの利用申請
APIアクセスキーを取得するには、事前にLINE広告APIの利用を申請する必要があります。

:::(Warning) (LINE広告API利用申請時の注意事項)
* LINE広告APIの利用申請は、**グループごと**に行う必要があります。
* API利用申請後、API利用権限が付与されるまで、**10営業日**ほど要することがあります。
万一、API利用申請から10営業日以上連絡がない場合は、お手数ですがLINE広告にお問い合わせください。
:::

1. [LINE Ad Manager](https://admanager.line.biz/)にログインします。

2. 画面右上の**HELP**＞**お問い合わせ**をクリックします。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-line-ad-api-2024-08-29-14-16-0.png){height="" width="500"}

3. お問い合わせ番号を取得します。
**取得する**をクリックし、表示されたお問い合わせ番号をメモしてください。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-line-ad-api-2024-08-29-14-16-1.png){height="" width="500"}

4. [権限申請](https://linebiz.force.com/authority/s/contact-us)より、フォームに必要事項を入力し、**送信**をクリックします。
   なお、一部項目は以下の通りに入力・選択してください。
    * お問い合わせ番号：前の手順でメモした番号を入力します。
    * 申請内容：**LINE広告 API**を選択します。
    * 申請API種別：**Ad tech API**を選択します。
    * グループIDおよびグループ名：LINE Ad Manager管理画面のグループタブより、任意のグループID・グループ名を選んで入力します。
    * 業種：**広告主**を選択します。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-line-ad-api-2024-08-29-14-16-2.png){height="" width="500"}

以上で利用申請手続きは完了となります。
審査が終わり次第、LINEよりAPI利用権限の付与に関する連絡がありますので、その内容をご確認ください。

### APIアクセスキーの確認
前述のAPI利用申請が完了し、API利用権限が付与された場合、下記手順でAPIアクセスキーを確認できます。

1. [LINE Ad Manager](https://admanager.line.biz/)にログインします。
2. **グループ**タブをクリックします。
3. API利用権限を付与されたグループのリンクをクリックします。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-line-ad-api-2024-08-29-14-16-3.png){height="" width="500"}

4. 画面左上の**MENU**＞**グループの設定**をクリックします。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-line-ad-api-2024-08-29-14-16-4.png){height="" width="500"}

    **APIアクセスキー**が表示されます。

5. **APIシークレットキーを再生成**をクリックします。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-line-ad-api-2024-08-29-14-16-5.png){height="" width="500"}

    **APIシークレットキー**が生成されます。