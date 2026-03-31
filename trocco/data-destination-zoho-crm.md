---
articleId: 5ff45f90-d507-4b3a-b919-56000a5b57bd
slug: data-destination-zoho-crm
title: 転送先 - Zoho CRM
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
Zoho CRMへデータを転送する設定のDocsです。

## 制約
* Zoho CRMのAPIの仕様により、1日あたりの転送可能レコード数に制限がある可能性があります。
詳細は[公式ドキュメント](https://www.zoho.com/crm/developer/docs/api/v4/api-limits.html)をご参照ください。

## 設定項目
### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Zoho CRM接続情報 | Yes |  | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br> 接続情報の設定方法は[こちら](/docs/connection-configuration-zoho-crm){:target="_blank"}をご参照ください。|
| モジュール | Yes |  | Zoho CRMのモジュール名を指定します。<br>モジュールはZoho CRMで定義されているモジュールに加えてお客様のZoho CRMで作成しているカスタムモジュールを指定することができます。<br>Zoho CRM接続情報を選択した状態で**モジュール一覧を読み込む**をクリックするとお客様が指定できるモジュールを選択することができるようになります。 |
| 転送モード | Yes |  | 転送モードを選択します。<br>各モードの詳細については後述の転送モードについてをご参照ください。 |

### STEP2 詳細設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 不正なレコードが存在した場合に転送を中止するかどうか| No | いいえ | 転送先Zoho CRMでは最大100件ごとにZoho CRMにデータを転送します。<br> 例えば100件中3件のレコードが不正なidなどの値を含んでいた場合、デフォルト値(`いいえ`)では97件を転送して不正な3件の転送処理をスキップしてTROCCOの転送ジョブを継続するようになっています。<br> `はい`にすることでTROCCOの転送ジョブを中止させることができます。<br><br>※ `はい`にした場合でも100件中3件のレコードが不正で転送ジョブを中止させても残りの97件はZoho CRMに反映されてしまいますので、ご注意ください。|
 
## 転送モードについて

| モード | 詳細 |
| --- | --- |
| Insert | モジュールへ新規データの**追記**を行います。 |
| Update | モジュール内にある既存データの**更新**を行います。<br> Update時は、転送先に送られるデータ内にidカラムが存在し、値としてZoho CRMのidが含まれている必要があります。<br>詳しくは[こちら](https://www.zoho.com/crm/developer/docs/api/v2/update-records.html){:target="_blank"}をご参照ください。 |
| Upsert | モジュールへ新規データの**追記**と既存データの**更新**を行います。<br>Upsert時はidカラムを指定している場合はidを元に更新を行います。<br>idカラムを指定していない場合はモジュールごとにkeyとなるカラムを指定するとそのkeyを元に更新を行います。<br>idカラムとkeyとなるカラムを指定していない場合は全てのデータを新規データとみなし追記を行います。<br>各モジュールでkeyとなるカラムは後述する**転送モードUpsertでkeyに指定できるカラム一覧**をご参照ください。|

### 転送モードUpsertでkeyに指定できるカラム一覧

| モジュール名 | keyに指定できるカラム |
| --- | --- |
| Leads | Email |
| Accounts | Account_Name |
| Contacts | Email |
| Deals | Deal_Name |
| Campaigns | Campaign_Name |
| Cases | Subject |
| Solutions | Solution_Title |
| Products | Product_Name |
| Vendors | Vendor_Name |
| PriceBooks | Price_Book_Name |
| Quotes | Subject |
| SalesOrders | Subject |
| PurchaseOrders | Subject |
| Invoices | Subject |
| CustomModules | Name |

各モジュールでkeyに指定できるカラムについて詳しく確認したい方は[こちら](https://www.zoho.com/crm/developer/docs/api/v2/upsert-records.html#:~:text=and%20URL%20fields.-,System-defined%20Duplicate%20Check%20Fields,-Following%20are%20the){:target="_blank"}をご参照ください。

## 各転送モードに対応しているモジュール
選択する転送モードによっては転送できないモジュールがございますので、下記の表から各転送モードで転送可能なモジュールをご確認ください。
|  モード  |  モジュール一覧  |
| ---- | ---- |
|  Insert  |  Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom <br/><br/>詳しくは[こちら](https://www.zoho.com/crm/developer/docs/api/v2/insert-records.html){:target="_blank"}をご参照ください。  |
|  Update  |  Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom <br/><br/>詳しくは[こちら](https://www.zoho.com/crm/developer/docs/api/v2/update-records.html){:target="_blank"}をご参照ください。|
|  Upsert  |  Leads, Accounts, Contacts, Deals, Campaigns, Cases, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom  <br/><br/>詳しくは[こちら](https://www.zoho.com/crm/developer/docs/api/v2/upsert-records.html){:target="_blank"}をご参照ください。 |