---
articleId: c65836ee-4d77-4c16-99b8-aec6fc666b81
slug: data-source-zoho-crm
title: 転送元 - Zoho CRM
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Zoho CRMからデータを転送する設定のDocsです。

## 制約
* Zoho CRMのAPIの仕様により、1日あたりの転送可能レコード数に制限がある可能性があります。
詳細は[公式ドキュメント](https://www.zoho.com/crm/developer/docs/api/v4/api-limits.html)をご参照ください。

## 設定項目
### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| :--- | --- | --- | --- |
| Zoho CRM 接続情報 | Yes |  | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br> 接続情報の設定方法は[こちら](/docs/connection-configuration-zoho-crm)をご参照下さい。 |
| COQL Query | Yes |  | 転送元Zoho CRMではZoho CRMで使用できるクエリライクなCOQL Queryを記述してデータを取得します。<br> Zoho CRMのCOQLについては[こちら](https://www.zoho.com/crm/developer/docs/api/v2/Get-Records-through-COQL-Query.html)をご参照ください。 |

## COQLで取得できるモジュール

- leads
- accounts
- contacts
- deals
- campaigns
- tasks
- cases
- events
- calls
- solutions
- products
- vendors
- pricebooks
- quotes
- salesorders
- purchaseorders
- invoices
- custom

## COQL 記入例

### Leads

```sql
select 
 Owner,
 Company,
 First_Name,
 Last_Name,
 Full_Name,
 Designation,
 Email,
 Phone,
 Fax,
 Mobile,
 Website,
 Lead_Source,
 Lead_Status,
 Industry,
 No_of_Employees,
 Annual_Revenue,
 Rating,
 Created_By,
 Email_Opt_Out,
 Skype_ID,
 Modified_By,
 Created_Time,
 Modified_Time,
 Salutation,
 Secondary_Email,
 Twitter,
 Last_Activity_Time,
 Unsubscribed_Mode,
 Unsubscribed_Time,
 Street,
 City,
 State,
 Zip_Code,
 Country,
 Description,
 Record_Image,
from Leads
where Created_Time >= '2000-01-01T00:00:00+00:00'
```

### Accounts

```sql
select
 Owner,
 Rating,
 Account_Name,
 Phone,
 Account_Site,
 Fax,
 Parent_Account,
 Website,
 Account_Number,
 Ticker_Symbol,
 Account_Type,
 Ownership,
 Industry,
 Employees,
 Annual_Revenue,
 SIC_Code,
 Created_By,
 Modified_By,
 Created_Time,
 Modified_Time,
 Last_Activity_Time,
 Billing_Street,
 Shipping_Street,
 Billing_City,
 Shipping_City,
 Billing_State,
 Shipping_State,
 Billing_Code,
 Shipping_Code,
 Billing_Country,
 Shipping_Country,
 Description,
 Record_Image
from Accounts
where Created_Time >='2000-01-01T00:00:00+00:00' 
```

### Contacts

```sql
select 
 Owner,
 Lead_Source,
 First_Name,
 Last_Name,
 Full_Name,
 Account_Name,
 Email,
 Title,
 Department,
 Phone,
 Home_Phone,
 Other_Phone,
 Fax,
 Mobile,
 Date_of_Birth,
 Assistant,
 Asst_Phone,
 Reporting_To,
 Email_Opt_Out,
 Created_By,
 Skype_ID,
 Modified_By,
 Created_Time,
 Modified_Time,
 Salutation,
 Secondary_Email,
 Last_Activity_Time,
 Twitter,
 Unsubscribed_Mode,
 Unsubscribed_Time,
 Mailing_Street,
 Other_Street,
 Mailing_City,
 Other_City,
 Mailing_State,
 Other_State,
 Mailing_Zip,
 Other_Zip,
 Mailing_Country,
 Other_Country,
 Description,
 Record_Image
from Contacts
where Created_Time >= '2000-01-01T00:00:00+00:00'
```