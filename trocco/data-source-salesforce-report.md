---
articleId: 0f0fef9d-a70e-4741-897a-d36ab69ab2fe
slug: data-source-salesforce-report
title: 転送元 - Salesforce Report
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
SalesforceのReportからレコードデータを転送する設定のDocsです。

## 制約

- 認証方式で**ユーザー・パスワード認証**を選択した接続情報のみ、使用できます。
- 転送対象のカラムが101列以上ある場合、SalesforceのAPIの制限により**ジョブの実行に失敗**します。
- 転送ジョブ実行中に転送対象のレポートが更新された場合、**転送されるデータに欠損が発生**する可能性があります。
- リッチテキスト・ロングテキストフィールドの値の文字数が255を超える場合、Salesforce Reportの仕様により**256番目以降の文字が切り捨てられて転送**されます。

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Salesforce接続情報 | Yes | - | あらかじめ登録してある[Salesforceの接続情報](/docs/connection-configuration-salesforce)から、今回の転送設定に必要な権限を持つものを選択します。 |
| レポートID | Yes | - | 取得対象のレポートのIDを入力します。表形式のレポートのIDを入力してください。<br>なお、レポートIDはレポートの詳細画面のURLから確認できます。<br>![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-salesforce-report-2024-08-29-10-19-0.png){height="" width=""} |
| レポート内で一意の値を持つカラム | Yes | - | レポート内で一意の値を持つカラムを選択します。<br>レポート内で一意の値を持つカラム以外が指定された場合、転送実行時にエラーになります。 |
| 検索条件 | No | レポートに設定の値 | 検索条件を入力できます。<br>未入力の場合は、取得対象のレポートに設定済みの検索条件が使用されます。<br>検索条件の編集には、**レポートの読み込み**が必要になります。 |
| 検索条件ロジック | No | レポートに設定の値 | 検索条件を結合する式を入力できます。<br>未設定の場合はレポートに設定されている検索条件ロジックが使用されます。<br>結合には`AND`、`OR`、`NOT`の演算子を利用できます。<br>例）「検索条件No.1に一致かつ、検索条件No.2に一致しないかつ、検索条件No.3もしくはNo.4に一致させたい場合：`1 AND NOT 2 AND (3 OR 4)`<br>詳しくは、[SalesforceのAPIドキュメント](https://developer.salesforce.com/docs/atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_report_query.htm)の`reportBooleanFilter`を参照ください。 |
| 転送対象カラム | yes | レポートに表示しているカラムのみ転送する | すべてのカラムを転送するか、レポートに表示しているカラムのみ転送するかを選択します。<br>なお、転送対象のカラムが100列以上ある場合は、SalesforceのAPIの制限によりジョブの実行に失敗します。<br>詳しくは、[SalesforceのAPI制限](https://developer.salesforce.com/docs/atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_limits_limitations.htm)のドキュメントを参照ください。 |
| レポートの値を転送するカラム | Yes | - | レポートの値を転送するカラムを指定します。<br>デフォルトではレポートに表示されている値の名前が転送されます。<br><br>データ型が通貨、日付/時間、URLなどの場合、表示されている値の名前と値が異なります。<br>例）組織の通貨記号が`¥`、タイムゾーンが`Asia/Tokyo`の場合:<br>  通貨型 値: 100, 値の名前: ¥100<br>  日付/時間型 値: 2021-03-17T03:00:00Z, 値の名前: 2021-03-17 12:00:00<br><br>日付/時間型の場合に値の名前を転送すると、Salesforceの組織のタイムゾーンで変換されたタイムゾーン無しの値が転送されます。ご注意ください。 |