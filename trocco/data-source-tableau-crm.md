---
articleId: 0ffab76f-8127-41aa-971e-501df547eb4b
slug: data-source-tableau-crm
title: 転送元 - CRM Analytics（旧 Tableau CRM）
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
CRM Analytics（旧 Tableau CRM）からレコードデータを転送する設定のDocsです。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Salesforce接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br>登録済みの接続情報がない場合、**接続情報を追加**から接続情報を作成してください。<br>接続情報の設定方法は[別ページ](/docs/connection-configuration-salesforce)をご参照下さい。 |
| データセットID | Yes | - | 取得したいデータのデータセットIDを入力してください。<br>データセットの詳細画面を開いていただいた時のURLにデータセットIDがあります。<br>![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-tableau-crm-2024-08-29-0-51-0.png){height="" width=""} |
| クエリ | Yes | - | SAQL（Salesforce Analytics Query Language）を指定してください。SAQLの構文については[こちら](https://developer.salesforce.com/docs/atlas.ja-jp.226.0.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_basic_elements.htm)を参照してください。<br>SAQLはレンズ画面のクエリモードから生成いただくことをおすすめします。 <br>![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-tableau-crm-2024-08-29-0-51-1.png){height="" width=""}|
| APIバージョン | No | 54.0 | Salesforce APIのバージョンを指定していただきます。<br>未入力の場合、54.0を使用します。 |
| ページネーション数 | Yes | 1 | ページネーションを指定してください。1回で取得できるデータ数はAPIの使用上500件となります |
| 1回のAPIコールで取得するデータ数 | Yes | 10000 | 1回のAPIコールで取得するデータ数を入力してください。 |
