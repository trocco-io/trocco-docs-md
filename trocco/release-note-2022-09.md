---
articleId: 7a70bdbb-ed29-4769-bf7f-10599c5a0cb8
slug: release-note-2022-09
title: リリースノート-2022年09月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2022年09月のリリース情報をお届けします**
* * * 
## データカタログ

#### プレビューのカラム名直下に論理名が表示
テーブル情報タブのプレビューにて、カラム名の直下に**論理名**が表示されるようになりました。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-0.png){height="" width="500"}

#### テーブル情報タブに「クエリエディタを開く」ボタンが追加
ボタンをクリックすると、テーブル情報タブで開いていたテーブルがFROM句に指定された状態で、クエリエディタが表示されます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-1.png){height="" width="500"}

#### Googleアカウントの再認証機能が追加
データカタログ設定にて、Googleアカウントの再認証ができるようになりました。

:::(Warning) (Googleアカウントの再認証可能なユーザー)
Googleアカウントの再認証は、データカタログ管理者を除くすべてのユーザーが行うことができます。
データカタログ管理者について、詳しくは[データカタログについて](/docs/about-data-catalog-v1)を参照ください。
:::

再認証をクリックした後の手順は、[データカタログについて](/docs/about-data-catalog-v1)の「実データへのアクセス権限」と同様です。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-2.png){height="" width="500"}



#### カラムに紐づくメタデータの自動引き継ぎ
TROCCOのデータマート機能を利用して生成したカラムについて、生成元カラムの「データソースに関するメタデータ」を自動で引き継げるようになりました。
以下、dm_contact_lead_joinテーブルのCompanyカラムを例に説明します。

* * * 


dm_contact_lead_joinテーブルのカラムリネージでカラムの先祖を確認します。
CompanyカラムはleadテーブルのCompanyカラムを引き継いでいることがわかります。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-3.png){height="" width="500"}

leadテーブルのCompanyカラムの「Salesforceに関するメタデータ」は、以下のとおりです。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-4.png){height="" width="500"}

dm_contact_lead_joinテーブルのCompanyカラムの「Salesforceに関するメタデータ」は、以下のとおりです。
該当のメタデータを引き継いでいることがわかります。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-5.png){height="" width="500"}

なお、カラムに紐づくメタデータを自動で引き継ぐためには、以下の条件があります。
:::(Warning) (カラムに紐づくメタデータの自動引き継ぎの条件)
* データマート定義上で、カラムの値に加工を加えていない。
* データマート定義のクエリ実行モードとしてデータ転送モードを用いている。
    * 自由記述モードを用いて生成されたテーブルに対しては、引き継ぎの対象外となります。
:::


## dbt連携
#### ジョブ設定の実行コマンドのオプション値にて、カスタム変数に対応
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-6.png){height="" width="500"}


## マネージドデータ転送
#### テーブル増減検知のSlack通知内容が充実
これまでは、追加・削除されたテーブルの件数を表示していました。
今後は、追加・削除されたテーブルの件数に加えて、テーブルの名前も表示されます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-7.png){height="" width="500"}

#### マネージド転送設定の編集画面が拡充
登録されている転送設定の転送元・転送先に関する設定や、共通設定を一括で変更できるようになりました。
以下、一括変更の手順です。

1. マネージド転送設定の詳細画面より、**編集**をクリック
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-8.png){height="" width="500"}

2. 登録された転送設定の共通設定側の**編集**をクリック
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-9.png){height="" width="500"}

共通設定画面が表示されます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-10.png){height="" width="500"}



## 接続情報
#### PostgreSQL接続情報にて、AWS Systems Manager Session Manager経由での接続に対応
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-11.png){height="" width="500"}


## 転送設定
#### 転送先Marketoにて、静的リストIDの指定に対応
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-12.png){height="" width="500"}

#### ファイル・ストレージ系コネクタにて、 Excelファイルに対応
ファイル・ストレージ系コネクタにて、入力ファイル形式としてMicrosoft Excelファイル（xlsxおよびxls）に対応しました。
対応したコネクタは以下のとおりです。
* 転送元 - Amazon S3
* 転送元 - Azure Blob Storage
* 転送元 - Box
* 転送元 - FTP・FTPS
* 転送元 - Google Cloud Storage
* 転送元 - Google Drive
* 転送元 - HTTP(S)
* 転送元 - SFTP
* 転送元 - ローカルファイル


## ワークフロー
ワークフロー失敗時の自動リトライについて、次回リトライ実行までの時間間隔を指定できるようになりました。
ワークフロー設定画面でリトライ回数に1以上を指定したときに、時間を指定できます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-13.png){height="" width="500"}


## UI・UX
### 転送設定一覧
#### 通知設定の有無・スケジュール設定の有無で転送設定を絞り込み
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-14.png){height="" width="300"}

#### 選択した転送設定に付けられているラベルを、一括で取り外し
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-09-2024-08-29-2-33-15.png){height="" width="500"}


## コネクタAPIアップデート
#### Yahoo!広告
* APIバージョンが、**v8**にアップデートされました。
    * APIアップデートにより、旧指標は廃止されました。
    * 今後はカラム名に「(旧)」を含むカラムが指定されている場合、自動的に新カラムが取得されます。
* 新バージョンについて、詳しくは[Yahoo!広告 API v8 システムリリース完了のお知らせ](https://ads-developers.yahoo.co.jp/developercenter/ja/announcement/222224.html)を参照ください。

#### Criteo
* APIバージョンが、**v2022.07**にアップデートされました。
* 新バージョンについて、詳しくは[Version 2022.07 release notes](https://developers.criteo.com/marketing-solutions/changelog/version-202207-release-notes)を参照ください。

#### Google Ads
* APIバージョンが、**v11**にアップデートされました。
* 新バージョンについて、詳しくは[Google Ads APIのリリースノート](https://developers.google.com/google-ads/api/docs/release-notes#11)を参照ください。

* * * 


**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**

