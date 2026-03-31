---
articleId: 261a9e81-45cb-4d76-8634-926646a6fbb6
slug: data-source-sap-odata
title: 転送元 - SAP S/4HANA OData
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、SAP S/4HANAからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[SAP S/4HANA OData 接続情報](/docs/connection-configuration-sap-odata)を参照ください。

## 概要

SAP S/4HANA ODataコネクタは、SAP NetWeaver Gatewayが提供するODataサービス経由でSAPデータを取得・連携します。OData V2およびOData V4の両プロトコルに対応しており、接続情報の作成時にバージョンを選択できます。
OData（Open Data Protocol）は、HTTP上でJSON/XMLをやり取りできるRESTベースの標準APIです。
エンティティ構造はABAP（Advanced Business Application Programming）で定義され、必要に応じてカスタムODataサービスも開発できます。

## 詳細情報

### 対応バージョン

  - SAP S/4HANA Cloud Private Edition
  - SAP S/4HANA Cloud Public Edition

:::(Info) (SAP S/4HANA On-Premiseについて)

2025年5月現在、SAP S/4HANA On-Premiseには対応していませんが、対応を検討しています。
:::

### 対応プロトコル

- OData V2
- OData V4

## 利用上の注意・制約

- SAP NetWeaver スタックのバージョンは **7.40 SP02** 以降である必要があります。

## 設定項目

### STEP1 基本設定

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|ODataバージョン|✓|OData v2|利用するODataのバージョンを指定します。|
|サービスパス|✓|-|対象ODataサービスのルートURLを入力します。ポート番号やパラメーターは含めません。バージョンにより形式が異なります。<ul><li>OData V2の入力例：`/sap/opu/odata/sap/API_BUSINESSAREA_SRV`</li><li>OData V4の入力例：`/sap/opu/odata4/sap/api_purchaseorder_2/srvd_a2x/sap/purchaseorder/0001/`</li><li>取得方法：[SAP Business Accelerator Hub](https://api.sap.com/)の対象APIのページより、**Overview** > **Configuration Details**タブの**PRODUCTION URL**から確認できます。</li></ul>![data-source-sap-odata-2025-04-30-16-30-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-sap-odata-2025-04-30-16-30-0.png){height="" width="50%"}|
|エンティティ名|✓|-|取得したいエンティティセット（またはエンティティキー／ナビゲーションパス）を入力します。バージョンにより命名規則が異なります。<ul><li>OData V2の入力例<ul><li>`PurchaseOrder`</li><li>`PurchaseOrder/4500000001`</li></ul></li><li>OData V4の入力例<ul><li>`A_SalesOrder`</li><li>`A_SalesOrder('1')`</li></ul></li></ul></li><li>取得方法：[SAP Business Accelerator Hub](https://api.sap.com/)の対象APIのページより、**API Reference**タブのGETメソッドの部分から確認できます。</li></ul>![data-source-sap-odata-2025-04-30-16-30-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-sap-odata-2025-04-30-16-30-1.png){height="" width="50%"}|
|選択フィールド|-|-|エンティティが返すフィールドのうち、取得したいものを入力します。`$select` としてリクエストされます。<br>カンマ区切りで複数指定できます。<br>入力例：`Property1,Property2,Property3`<br>なお、本項目は未指定の場合にすることも可能です。その場合、すべてのフィールドが取得されます。<br>未指定とした場合は、転送設定STEP2のカラム定義で不要なカラムを適宜削除してください。|
|展開フィールドの自動指定|-|自動で展開指定する|有効にすると自動データ設定にてナビゲーションプロパティを自動的に検出し、展開フィールド(`$expand`)に設定します。展開フィールドが指定されている場合は、そちらが優先されます。|
|展開フィールド|-|-|ナビゲーションプロパティのうち、展開した状態で取得したいフィールドを入力します。<br>`$expand` としてリクエストされます。<br>展開フィールドの自動指定よりも優先されます。<br>カンマ区切りで複数指定できます。<br>入力例：`NavigationProperty1,NavigationProperty2`|
|転送方法|-|全データ転送|**全データ転送・差分転送**のいずれかを選択します。<br>**差分転送**について、詳しくは[差分転送機能](/docs/incremental-data-transfer)を参照ください。|
|フィルター条件|-|-|`$filter` に設定するフィルター条件を入力します。<br>`and` や `or` で複合条件を指定できます。<br>入力例：`Property eq 'Value'`|
|ソート指定|-|-|`$orderby` に設定するソート指定を入力します。<br>カンマ区切りで複数指定できます。<br>入力例：`Property asc,Property2 desc`|

### STEP1 詳細設定

**詳細設定**をクリックすると、設定項目が表示されます。

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|上限行数|-|-|`$top` に設定する上限行数を指定します。<br>指定した場合、ページネーションによる取得は行われず、スキップ行数(`$skip`)とともに1回のリクエストで取得されます。|
|スキップ行数|-|-|`$skip` に設定するスキップ行数を指定します。<br>指定した場合、ページネーションによる取得は行われず、上限行数(`$top`, 未指定の場合は一度に取得する行数(`$skip`))とともに1回のリクエストで取得されます。|
|一度に取得する行数|✓|200|一度のリクエストで取得する行数を指定します。<br>転送実行時のみに適用され、自動データ設定・プレビュー時には適用されません。|
|接続タイムアウト (ミリ秒)|-|2000|サーバーへの接続を確立するまでのタイムアウト時間をミリ秒単位で指定します。|
|読み込みタイムアウト (ミリ秒)|-|10000|サーバーからのレスポンスを待機する最大時間をミリ秒単位で指定します。|
|最大リトライ回数|-|5|エラー発生時の最大リトライ回数を指定します。|
|リクエスト間隔 (ミリ秒)|-|0|リクエスト間の待機時間をミリ秒単位で指定します。サーバー負荷を軽減するために使用します。|

### STEP2 入力オプション

STEP1で設定できた一部の設定項目は、STEP2の入力オプションで変更できます。
STEP1に戻らずとも設定値を変更できます。プレビューが意図通りにならない場合にご活用ください。

