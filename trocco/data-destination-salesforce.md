---
articleId: 41e34075-c934-4afb-9010-165413f2fec4
slug: data-destination-salesforce
title: 転送先 - Salesforce
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要

商談・リード・取引先やカスタムオブジェクトといったSalesforce上で管理しているレコードデータに対して転送する設定のDocsです。
 
## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Salesforce接続情報 | ✓ | - | あらかじめ登録してある[Salesforceの接続情報](/docs/connection-configuration-salesforce)から、今回の転送設定に必要な権限を持つものを選択します。|
| オブジェクト | ✓ | - | レポートデータが格納されているオブジェクトを選択します。 |
| 転送モード | ✓ | 追記 (`INSERT`) | <ul><li>追記 (`INSERT`)</li><li>`UPSERT`</li><li>更新 (`UPDATE`)<ul><li>[対象オブジェクトのID](https://developer.salesforce.com/docs/atlas.ja-jp.object_reference.meta/object_reference/field_types.htm#i1435616)をキーとして更新します。<br>したがって、対象オブジェクトのIDが転送するデータ内に含まれている必要があります。</li></ul></li></ul> |
| UPSERT キー | - | - | 転送モードで`UPSERT`を選択した場合に、キーとなるカラム名を入力できます。|
| 更新キー | - | - | 転送モードで`UPDATE`を選択した場合に、更新対象のキーとして外部IDを入力できます。<br>レコードID（SFID）をキーとして使用する場合は指定不要です。 |
| APIバージョン | ✓ | `54.0` | Salesforce APIのバージョンを入力します。 |

### STEP1 詳細設定

**詳細を設定する**をクリックすると、設定項目が表示されます。

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 送信できなかったレコードがある場合のステータス | ✓ | **Errorにする** | 転送時に、送信できなかったレコードがあった場合のジョブステータスを以下から選択できます。<br><ul><li>**Succeededにする**</li><li>**Errorにする**</li></ul> |
| NULLを含む場合の更新処理 | ✓ | **NULLで更新する** | Salesforce上のレコード更新時に、転送データに含まれる`NULL`値をどのように扱うかを設定できます。以下から選択してください。<br><ul><li>**NULLで更新する**<ul><li>転送データに含まれる`NULL`値は、更新対象のSalesforce上のデータに**反映されます**。</li></ul></li><li>**更新をスキップする**<ul><li>転送データに含まれる`NULL`値は、更新対象のSalesforce上のデータに**反映されず、元の値が維持されます**。</li></ul></li></ul><br>なお、Salesforce上に新たに追記されるレコードには本項目の設定は適用されず、転送データの`NULL`値は`NULL`値のまま追加されます。 |
| バッチサイズ | ✓ | 200 | 1回のAPIコールあたりのレコード数です。Salesforce側のApex Triggerなどで[ガバナ制限](https://developer.salesforce.com/docs/atlas.ja-jp.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apexgov.htm)に抵触する場合に値を調整できます。<br>1〜200の範囲で指定してください。 |
