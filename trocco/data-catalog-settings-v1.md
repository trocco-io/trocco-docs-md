---
articleId: 72eed2a3-922c-455b-9d81-b36ab8596014
slug: data-catalog-settings-v1
title: データカタログ設定
parentCategoryId: 44c8b731-fa9a-4cba-a8de-9fcb56bbf9c2
languageCode: ja
---
## 概要

画面右上の**データカタログ設定**をクリックすると表示されます。
データカタログ設定では、データカタログに関する各種設定が可能です。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-catalog-settings-v1-2024-08-29-18-3-0.png){height="" width="50%"}

- [TROCCO基本メタデータ設定](/docs/data-catalog-settings-v1#trocco基本メタデータ設定)
- [ユーザー定義メタデータ用テンプレート](/docs/data-catalog-settings-v1#ユーザー定義メタデータ用テンプレート)
- [メタデータインポート](/docs/data-catalog-settings-v1#メタデータインポート)
- [データストア連携管理](/docs/datastore-integrations-v1)

## TROCCO基本メタデータ設定

[カラム情報](/docs/table-information-v1#カラム情報)に表示するフィールドを設定します。
デフォルトの設定は以下のとおりです。

- **論理名**：表示する
- **説明**：表示しない

## ユーザー定義メタデータ用テンプレート

**ユーザー定義メタデータ**で入力するフィールドをテーブル・カラムごとに設定します。

:::(Error) (ユーザー定義メタデータ用テンプレートに関する注意事項)

- ユーザー定義メタデータ用テンプレートは、テーブル・カラムごとに**1つ**しか作ることができません。
- テンプレートに追加されたフィールドは、**後から削除できません**。
- **入力を必須にする**で設定したフィールドは、**後から必須化をやめることができません**。
:::

| 項目名 | 必須 | 備考 |
| --- | --- |--- |
| テンプレート名 | ✓ | テンプレート名を入力します。 |
| テンプレートタイプ | ✓ | テーブルまたはカラムからいずれかを選択します。 |
| フィールド名 | ✓ | フィールド名を入力します。 |
| ヒント | - | フィールドに対するヒントを入力できます。<br>本項目に記入した内容は、ユーザー定義メタデータの入力画面で表示されます。 |
| データ型 | ✓ | 以下のいずれかを選択します。<ul><li>`String`</li><li>`Text(Markdown)`</li><li>`Integer`</li><li>`Boolean`</li></ul>`String`または`Text(Markdown)`型に入力された文字列は、[テーブル・カラム検索](/docs/metadata-search-function-v1)における検索対象文字列となります。|
| 入力を必須にする | - | 本項目を有効にすると、ユーザー定義メタデータ編集時に、該当フィールドの値を入力しないと保存できなくなります。<br> **本項目は後から変更することができません。** |

## メタデータインポート

CSVファイルを用いて、**基本メタデータ**の値をインポートできます。
また、インポートの結果は画面下部のインポート履歴より確認できます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-catalog-settings-v1-2024-08-29-18-3-1.png){height="" width="50%"}

### メタデータインポートの制約

:::(Warning) (メタデータインポートの対象)

CSVファイルを用いたメタデータインポートは、**基本メタデータ**のみ対応しております。
その他のメタデータのインポートには対応していません。
:::

:::(Warning) (CSVファイルの文字コード)

**UTF-8**を推奨しています。
UTF-8以外の文字コードの場合、一部文字が読み取れないことがあります。
:::

:::(Warning) (CSVアップロードのファイルサイズ制限)

アップロードできるCSVファイルのファイルサイズは最大**100MB**です。
:::

:::(Warning) (すでにメタデータが入力されていた場合)

すでにメタデータの値が入力されている場合、インポートされた値によって既存の値は上書きされます。
:::

### CSVファイルのフォーマット

**CSVテンプレートをダウンロード**をクリックしてください。
ダウンロードされたCSVファイルを適宜編集し、アップロードおよびインポートを実行してください。

1行目にフィールド名が入力された状態のCSVがダウンロードされます。
2行目以降に適宜メタデータを入力してください。

なお、お使いのデータストアおよびインポート対象のテーブルまたはカラムによって、CSVファイルの構成は異なります。
以下では、データストアごとのCSVファイルの構成を説明しています。

#### BigQueryのデータストアをお使いの場合

CSVファイルの1行目は、下記を入力してください。

- テーブル基本メタデータ
  - `project_id,dataset_id,table_id,logical_name,description`
- カラム基本メタデータ
  - `project_id,dataset_id,table_id,column_id,logical_name,description`

CSVファイルの2行目以降は、以下表を踏まえて入力してください。

| カラム名 | 必須 | 入力する情報 |
| --- | --- | --- |
| `project_id` | ✓ | プロジェクト名 |
| `dataset_id` | ✓ | データセット名 |
| `table_id` | ✓ | テーブル名 |
| `column_id` | ✓\* | テーブルに紐づくカラム名<br>**カラム基本メタデータ**のインポート時のみ必須 |
| `logical_name` | - | 論理名フィールドに入力したい値 |
| `description` | - | 説明フィールドに入力したい値 |

#### Snowflakeのデータストアをお使いの場合

CSVファイルの1行目は、下記を入力してください。

- テーブル基本メタデータ
  - `database_name,schema_name,table_name,logical_name,description`
- カラム基本メタデータ
  - `database_name,schema_name,table_name,column_name,logical_name,description`

CSVファイルの2行目以降は、以下表を踏まえて入力してください。

| カラム名 | 必須 | 入力する情報 |
| --- | --- | --- |
| `database_name` | ✓ | データベース名 |
| `schema_name` | ✓ | スキーマ名 |
| `table_name` | ✓ | テーブル名 |
| `column_name` | ✓\* | テーブルに紐づくカラム名<br>**カラム基本メタデータ**のインポート時のみ必須 |
| `logical_name` | - | 論理名フィールドに入力したい値 |
| `description` | - | 説明フィールドに入力したい値 |

:::(Info) (CSVファイルの入力例)

以下は、BigQueryのデータストアのテーブル基本メタデータをインポートする場合に用いるCSVファイルの例です。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-catalog-settings-v1-2024-08-29-18-3-2.png){height="" width="50%"}
:::

### インポートに失敗した場合

**インポート履歴**の**エラーログを表示**をクリックし、エラーの原因を確認してください。

![data-catalog-settings-v1-2024-08-29-18-3-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-catalog-settings-v1-2024-08-29-18-3-3.png){height="" width="50%"}

## データストア連携管理

[データストア連携管理](/docs/datastore-integrations-v1)を参照ください。
