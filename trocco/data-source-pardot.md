---
articleId: ca3c4b03-3c39-4ee8-be5d-45513d8db6ac
slug: data-source-pardot
title: 転送元 - Salesforce Marketing Cloud Account Engagement
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Salesforce Marketing Cloud Account Engagement（旧：Pardot）のデータを取得しデータを転送する設定のDocsです。

## 制約
* SalesforceアカウントのSSOで連携したMarketing Cloud Account Engagementの認証を利用

## 設定項目
### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Salesforce Marketing Cloud Account Engagement接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| 作成日期間 開始日 | No | - | 作成日の始点を指定ください。指定した日付は**含まれます**。 |
| 作成日期間 終了日 | No | - |  作成日の終点を指定ください。指定した日付は**除かれます**。<br> 例）2021-02-01を指定した場合2021-01-31までが抽出対象に含まれます。 |
| 更新日期間 開始日 | No | - | 更新日の始点を指定ください。指定した日付は**含まれます**。  |
| 更新日期間 終了日 | No | - | 更新日の終点を指定ください。指定した日付は**除かれます**。<br>例）2021-02-01を指定した場合2021-01-31までが抽出対象に含まれます。 |
| データ順序 ソートキー | Yes | - | ソート基準となる列を選んでください。 |
| データ順序 ソート順 | Yes | 降順 | ソート順序を選んでください。 |
