---
articleId: c612c8ac-67d6-44a0-bb01-3be927c5a255
slug: data-source-microsoft-dynamics-crm
title: 転送元 - Microsoft Dynamics 365 CRM
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---

Microsoft Dynamics 365 CRMからデータを転送する設定のDocsです。
接続に関する設定については、[Microsoft Dynamics 365 CRM 接続情報](/docs/connection-configuration-microsoft-dynamics-crm)を参照ください。

## 制約

- 特になし

## 設定項目

### STEP1 基本設定

|項目名|必須|デフォルト値|説明|
| --- | --- | --- | --- |
| Microsoft Dynamics 365 CRM接続情報 | ✓ | - | あらかじめ登録してある[Microsoft Dynamics 365 CRMの接続情報](/docs/connection-configuration-microsoft-dynamics-365-crm)から、今回の転送設定に必要な権限を持つものを選択します。 |
| サービスパス | ✓ | - | Power Appsの「設定 > 開発者リソース」から取得できるWeb API エンドポイントの値を入力します。<br>環境URLを除いた、`/api/data/v9.2` の形式で入力します。 |
|エンティティ名|✓|-|取得したいエンティティ名を入力します。[Web API Entity Type](https://learn.microsoft.com/ja-jp/power-apps/developer/data-platform/webapi/reference/entitytypes?view=dataverse-latest)の各エンティティに記載されているEntity set pathを以下の形式で指定します。<br>Entity set pathが `[organization URI]/api/data/v9.2/aadusers` の場合：`addusers` |
|選択フィールド|-|-|エンティティが返すフィールドのうち、取得したいものを入力します。`$select` としてリクエストされます。<br>カンマ区切りで複数指定できます。<br>入力例：`Property1,Property2,Property3`<br>本項目は未指定の場合にすることも可能です。その場合、すべてのフィールドが取得されます。<br>未指定とした場合は、転送設定STEP2のカラム定義で不要なカラムを適宜削除してください。|
|展開フィールド|-|-|ナビゲーションプロパティのうち、展開した状態で取得したいフィールドを入力します。<br>`$expand` としてリクエストされます。<br>展開フィールドの自動指定よりも優先されます。<br>カンマ区切りで複数指定できます。<br>入力例：`NavigationProperty1,NavigationProperty2`|
|転送方法|-|全データ転送|**全データ転送・差分転送**のいずれかを選択します。<br>**差分転送**について、詳しくは[差分転送機能](/docs/incremental-data-transfer)を参照ください。|
|フィルター条件|-|-|`$filter` に設定するフィルター条件を入力します。<br>`and` や `or` で複合条件を指定できます。<br>入力例：`Property eq 'Value'`|
|ソート指定|-|-|`$orderby` に設定するソート指定を入力します。<br>カンマ区切りで複数指定できます。<br>入力例：`Property asc,Property2 desc`|

:::(Warning)

Microsoft Dataverseの仕様上、選択していないフィールドもスキーマに含まれることがあります。

:::

### STEP1 詳細設定

**詳細設定**をクリックすると、設定項目が表示されます。

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|一度に取得する行数|✓|200|一度のリクエストで取得する行数を指定します。<br>転送実行時のみに適用され、自動データ設定・プレビュー時には適用されません。|
|接続タイムアウト (ミリ秒)|-|2000|サーバーへの接続を確立するまでのタイムアウト時間をミリ秒単位で指定します。|
|読み込みタイムアウト (ミリ秒)|-|10000|サーバーからのレスポンスを待機する最大時間をミリ秒単位で指定します。|
|最大リトライ回数|-|5|エラー発生時の最大リトライ回数を指定します。|
|リクエスト間隔 (ミリ秒)|-|0|リクエスト間の待機時間をミリ秒単位で指定します。サーバー負荷を軽減するために使用します。|

### STEP2 入力オプション

STEP1で設定できた一部の設定項目は、STEP2の入力オプションで変更できます。
STEP1に戻らずとも設定値を変更できます。プレビューが意図通りにならない場合にご活用ください。
