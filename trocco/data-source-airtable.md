---
articleId: 00ec6ec8-1637-4e31-9a30-ab5db22701a9
slug: data-source-airtable
title: 転送元 - Airtable
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Airtableからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Airtable](/docs/connection-configuration-airtable)を参照ください。

## 利用上の注意・制約

:::(Warning) (APIレート制限)

Airtable APIには[レート制限](https://airtable.com/developers/web/api)があります（5リクエスト/秒、ベースごと）。
大量のデータを短時間で取得しようとすると、一時的にAPIへのアクセスが制限される場合があります。
大規模なデータ転送を行う場合は、複数の転送ジョブに分割して実行することをオススメします。
:::

:::(Info) (ベースIDの確認方法)

ベースIDは、Airtableのワークスペースで対象のベースを開いた際のURLから確認できます。
URLは `https://airtable.com/<base_id>/...` の形式になっており、`<base_id>` の部分（例：`appXXXXXXXXXXXXXX`）がベースIDです。
:::

## 取得対象

### Bases

Airtableアカウントでアクセス可能なベース一覧を取得します。
詳しくは、[Airtable公式ドキュメント](https://airtable.com/developers/web/api)を参照ください。

#### 設定項目

このエンドポイントには特別な設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|ベースの一意識別子|
|`name`|`string`|ベース名|
|`permissionLevel`|`string`|アクセス権限レベル|

### Tables

指定したベース内のテーブル一覧を取得します。
詳しくは、[Airtable公式ドキュメント](https://airtable.com/developers/web/api)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Base ID|✓|-|テーブル一覧を取得するAirtableベースのIDを入力します。<br>ベースIDの確認方法については、[接続情報 - Airtable](/docs/connection-configuration-airtable#ベースidの確認方法)を参照ください。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|テーブルの一意識別子|
|`name`|`string`|テーブル名|
|`primaryFieldId`|`string`|主要フィールドのID|
|`fields`|`json`|テーブルのフィールド定義（JSON形式）|
|`views`|`json`|テーブルのビュー定義（JSON形式）|

### List Records

指定したベース内の特定のテーブルからレコードを取得します。
詳しくは、[Airtable公式ドキュメント](https://airtable.com/developers/web/api)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Base ID|✓|-|データを取得するAirtableベースのIDを入力します。<br>ベースIDの確認方法については、[接続情報 - Airtable](/docs/connection-configuration-airtable#ベースidの確認方法)を参照ください。|
|Table ID / Name|✓|-|データを取得するテーブルのIDまたは名前を入力します。<br>テーブル名は、Airtableのベース内で表示されているテーブル名です。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|レコードの一意識別子|
|`createdTime`|`timestamp`|レコードの作成日時|
|`fields`|`json`|レコードのフィールド値（JSON形式）<br>テーブルのカラム名と値のペアが含まれます|

:::(Info) (fieldsカラムの活用)

`fields`カラムはJSON形式で、テーブルの全フィールドデータが含まれています。
転送設定のSTEP2で[文字列変換](/docs/string-conversion)機能を使用することで、特定のフィールド値を個別のカラムとして抽出できます。

たとえば、`fields.Name`というJSONPathを指定することで、Nameフィールドの値を別カラムとして取得できます。
:::

## 詳細設定

Airtableコネクタには詳細設定はありません。

## 活用例

### 特定のフィールド値でフィルタリングする

Airtable APIでは、特定の条件に一致するレコードのみを取得できます。
フィルタリングを行うには、転送設定STEP1の詳細設定で以下のようなカスタムヘッダーを追加します。

1. 転送設定STEP1で**詳細設定**をクリックします。
2. **カスタムヘッダー**に以下を追加します：
   - ヘッダー名: `filterByFormula`
   - 値: `{フィルター式}`

以下フィルター式の例です。
- `{Status}="完了"` - Statusフィールドが「完了」のレコードのみを取得
- `AND({Category}="A", {Priority}>3)` - CategoryがAかつPriorityが3より大きいレコードを取得

詳細なフィルター構文については、[Airtable公式ドキュメント - Formula field reference](https://support.airtable.com/docs/formula-field-reference)を参照ください。