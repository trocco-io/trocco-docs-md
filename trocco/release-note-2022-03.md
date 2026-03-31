---
articleId: 99a3be88-c318-42d6-bae5-22e26d09f83f
slug: release-note-2022-03
title: リリースノート-2022年03月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2022年3月のリリース情報をお届けします**

* * * 

## データカタログ

### クエリエディタの操作性を大幅に改善

#### カラムの補完が表示されるように
従来は表示されなかったカラムの補完が表示されるようになりました。

#### 補完表示時にメタデータが合わせて表示されるように
データカタログ機能によって自動で取得されたSalesforceの日本語列名などのメタデータが補完表示時に合わせて表示されるようになりました。
クエリを書く際のどのカラムを利用すべきかの選択などにお役立てください。
今後は、お客様自身が定義したメタデータを表示する機能、どのメタデータを表示するかの選択できる機能、などの改善を予定しています。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-0.png){height="" width=""}

#### 関数の補完時に詳細が表示されるように
関数の補完表示に関数の詳細とBigQueryのドキュメントへのリンクが表示されるようになりました。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-1.png){height="" width=""}

#### エディタのカラースキームが改善
従来はBigQueryの構文を正しく認識できていない色付けでしたが、以下の参考画像のように改善されました。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-2.png){height="" width=""}

その他にも補完表示ロジックの改善などより使いやすくご利用いただくための改修が行われています。

### kintoneのメタデータ表示に対応
データカタログ機能でkintoneのメタデータを参照できるようになりました。
転送元にkintone、転送先にGoogle BigQueryを指定した転送設定を作成している場合、テーブル情報・カラム情報に「kintoneに関するメタデータ」のフィールドが表示されます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-3.png){height="" width=""}

### 任意のデータセット配下のシャーディングテーブルがまとめて表示されるように
従来はシャーディングテーブルが日付ごとに分かれて表示されていましたが、同一のシャーディングテーブルをひとまとめにして表示するよう改善しました。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-4.png){height="" width=""}


デフォルトでは最新のテーブルの情報が表示されますが、テーブル名の横にあるセレクトボックスから日付を切り替えることができます。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-5.png){height="" width=""}

※2022/03/31現在、シャーディングテーブルは表示タイプが「テーブル表示」の場合のみ、まとめて表示されます。
　表示タイプが「ER図表示」の場合には従来通り日付ごとに表示されますのでご注意ください。

* * * 

## 接続情報

### HubSpot接続情報にて、認証方式としてOAuth2.0が選択可能に
HubSpotの接続情報にて、認証方式としてOAuth2.0が選択できるようになりました。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-6.png){height="" width=""}

### Oracle Database接続情報にて、SSH接続に対応
Oracleの接続情報がSSH接続に対応し、より接続の幅が広がりました。
パスワード認証、公開鍵認証ともに利用できます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-7.png){height="" width=""}

設定方法の詳細は[Docs](/v2/docs/connection-with-ssh-tunnel)をご確認ください。

* * * 

## 転送設定

### 転送元HubSpotにて、「パイプライン」、「パイプラインステージ」、「担当者」が取得可能に
転送元HubSpotの取得可能対象に「パイプライン」、「パイプラインステージ」、「担当者」が追加されました。
HubSpot上で管理するパイプラインと、パイプラインごとのステージ情報をデータ連携することで、dealやticketの状況をより詳細に可視化することが可能となります。
また、担当者情報とその他のHubSpotのデータとを連携することで、HubSpot上での担当者の動きを分析・可視化することが可能となります。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-8.png){height="" width=""}

設定方法の詳細は[Docs](/v2/docs/data-source-hubspot)をご確認ください。


### 転送元Salesforceにて、削除済み・アーカイブ済みレコードが取得可能に

転送元Salesforceに「削除済み・アーカイブ済みレコードの抽出」のオプションが追加されました。
削除済みのレコードや、taskオブジェクトなどのアーカイブ済みレコードの抽出ができるようになります。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-9.png){height="" width=""}

設定方法の詳細は[Docs](/v2/docs/data-source-salesforce)をご確認ください。


### 転送先kintoneにて、転送モードに「update」「upsert」が追加

転送先 kintone に転送モード「update」「upsert」が追加されました。
今まではkintoneへデータを投入することしか出来ませんでしたが、こちらを設定していただくことで、kintoneのデータ更新が可能となります。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-10.png){height="" width=""}

設定方法の詳細は[Docs](/v2/docs/data-destination-kintone)をご確認ください。

* * * 

## データマート

### Snowflakeにて、接続情報の指定に誤りが合った場合のエラーメッセージの改善
エラーメッセージ表示が改善し、利用者が原因を特定しやすくなりました。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-11.png){height="" width=""}

* * * 


## UI・UX

### データソースとして記載されている「FTP」が「 FTP・FTPS」、「 HTTP」が「HTTP(S)」に変更

従来より転送元FTPにてFTPSの利用は可能でしたが、UI上わかりづらかったため変更致しました。
同様の理由で、転送元HTTPについても、HTTPSを含めた表記に変更しております。
機能自体に変更はございません。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-12.png){height="" width=""}

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-03-2024-08-29-18-59-13.png){height="" width=""}


* * * 

その他、以下のような改修などが加わっております。
* 転送元RTB Houseにて、項目「subCampaignId」「subCampaignName」が取得可能に
* 転送先Spreadsheetにて、転送モードに「 truncate_insert」が追加

* * * 
 

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**


