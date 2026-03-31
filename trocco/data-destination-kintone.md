---
articleId: 8c580c82-af5e-4912-a827-f55388cb166c
slug: data-destination-kintone
title: 転送先 - kintone
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要

サイボウズのkintoneへデータを転送する設定のDocsです。

## 制約

:::(Warning)

- kintone APIの制約があります。
  - 詳しくは、[kintone API公式ドキュメント - （レコードの一括取得）カーソルを作成する](https://developer.cybozu.io/hc/ja/articles/360029152012-レコードの一括取得)の**制限事項**を参照ください。
- 転送設定ごとに、kintone側でアプリを作成する必要があります。
  - TROCCO側ではアプリを自動で作成できません。
- 転送モードが`upsert`の場合、アップデートキーに空のレコードを含まれていると、そのレコードは新規追加されます。
  - 転送先に空のキーを持つレコードが存在するとしても、その行は更新されません。
:::

## 補足事項

:::(Warning) (転送設定STEP2のカラム定義について)

転送設定STEP2「カラム定義」の**カラム名**には、kintoneアプリの**フィールドコード**を入力してください。
:::

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| kintone接続情報 | Yes | あらかじめ登録してある[kintoneの接続情報](/docs/connection-configuration-kintone)から、今回の転送設定に必要な権限を持つものを選択します。 |
| アプリID | Yes | データの転送先となる、kintoneのアプリIDを入力します。<br>アプリIDは、アプリ画面のURLから確認できます。<br>![data-destination-kintone-2024-08-29-5-57-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-kintone-2024-08-29-5-57-0.png)<br>APIで取得する場合は[kintone API公式ドキュメント - アプリの ID を取得する](https://developer.cybozu.io/hc/ja/articles/202166300-アプリID取得)を参照ください。|
| ゲストスペースID | No | ゲストスペースを利用している場合は、ゲストスペースIDを入力してください。 |
| 転送モード | Yes | 転送モードを指定します。<ul><li>`insert`：転送先にレコードを転送します。</li><li>`update`：アップデートキーが一致するレコードを更新します。</li><li>`upsert`：アップデートキーが一致するレコードがあれば更新し、そうでなければ新しくレコードを転送します。</li></ul> |
| アップデートキー | Yes | 転送モードにて`update`または`upsert`を選択した場合に入力します。<br>ユニークな値を持つフィールドのカラム名を入力してください。<br>レコードIDも指定できます。その場合は`$id`と入力してください。<br>なお、アップデートキーは、STEP2カラム定義の任意のカラム名と一致している必要があります。|

### STEP1 詳細設定

**詳細設定**をクリックすると、設定項目が表示されます。

| 項目名 | デフォルト値 | 内容 |
| --- | --- | --- |
| テーブル転送キー | - | アプリ内のテーブル（旧：サブテーブル）にレコードを転送する場合に入力します。<br>詳しくは、[アプリ内のテーブル（旧：サブテーブル）を更新したい場合](/docs/data-destination-kintone#アプリ内のテーブル旧サブテーブルを更新したい場合)を参照ください。 |
| 一度のリクエストで更新するレコード数 | 100 | 一度に更新するレコード数を入力します。 |
| NULLを含む場合の更新処理 | NULLで更新する | kintone上のレコード更新時に、転送データに含まれる`NULL`値をどのように扱うかを設定できます。以下から選択してください。<br><ul><li>**NULLで更新する**<ul><li>転送データに含まれる`NULL`値は、更新対象のkintone上のデータに**反映されます**。</li></ul></li><li>**更新をスキップする**<ul><li>転送データに含まれる`NULL`値は、更新対象のkintone上のデータに**反映されず、元の値が維持されます**。</li></ul></li></ul>なお、kintone上に新たに追記されるレコードには本項目の設定は適用されず、転送データの`NULL`値は`NULL`値のまま追加されます。 |

### STEP2 出力オプション

カラムに関して詳細な設定ができます。

| 項目 | 内容 |
| --- | --- |
| カラム名 | 転送設定STEP2**カラム定義**の任意の**カラム名**を入力します。 |
| フィールドコード | 転送先のkintoneアプリのフィールドコードを入力します。 |
| データ型 | kintone側のフィールド形式を明示的に指定する場合に選択します。<br>詳しくは、[データ型の指定が必要なケース](/docs/data-destination-kintone#データ型の指定が必要なケース)を参照ください。 |
| タイムゾーン | `DATE`型または`TIME`型で転送したい場合に、展開時に利用するタイムゾーンを入力できます。 |
| テーブルの行をソートするカラム | `SUBTABLE`型で転送したい場合、テーブル（旧：サブテーブル）に値を昇順ソートした状態で登録できます。<br>詳しくは、[アプリ内のテーブル（旧：サブテーブル）を更新したい場合](/docs/data-destination-kintone#アプリ内のテーブル（旧：サブテーブル）を更新したい場合)を参照ください。 |

#### データ型の指定が必要なケース

転送設定STEP2のカラム定義で指定されたカラムは、明示的にデータ型を指定しない場合、以下のルールにしたがってkintoneのフィールド形式に変換されます。

| カラムのデータ型 | 転送先kintoneのデータ型（フィールド形式） |
| --- | --- |
| `string` | <ul><li>カラムがアップデートキーに指定されている場合：`SINGLE_LINE_TEXT`</li><li>カラムがアップデートキーに指定されていない場合：`MULTI_LINE_TEXT`</li></ul> |
| `long` | `NUMBER` |
| `timestamp` | `DATETIME` |
| `double` | `NUMBER` |
| `boolean` | `NUMBER` |
| `json` | `MULTI_LINE_TEXT` |

kintoneで上記以外のフィールド形式を利用している場合は、STEP2の**出力オプションにて**対象カラムを追加し、データ型を明示する必要があります。
選択可能なフィールド形式は以下のとおりです。

- `SINGLE_LINE_TEXT`
- `MULTI_LINE_TEXT`
- `RICH_TEXT`
- `NUMBER`
- `CHECK_BOX`
- `RADIO_BUTTON`
- `MULTI_SELECT`
- `DROP_DOWN`
- `USER_SELECT`
- `ORGANIZATION_SELECT`
- `GROUP_SELECT`
- `DATE`
- `TIME`
- `DATETIME`
- `LINK`
- `SUBTABLE`

#### データ型にUSER_SELECT・ORGANIZATION_SELECT・GROUP_SELECTを選択したい場合

以下のフィールド形式を選択する場合は、転送データの値を以下の通りにする必要があります。

- `USER_SELECT`の場合：[ユーザーのログイン名](https://jp.cybozu.help/general/ja/admin/list_useradmin/list_user/profile/user_info.html#profile_user_info_1030)
- `ORGANIZATION_SELECT`の場合：[組織コード](https://jp.cybozu.help/general/ja/id/020460.html#list_division_item_20)
- `GROUP_SELECT`の場合：[グループコード](https://jp.cybozu.help/general/ja/id/020447.html#list_group_item_20)

カンマで区切ることで、値を複数含めることもできます。（例：`user1,user2`）

## アプリ内のテーブル（旧：サブテーブル）を更新したい場合

アプリ内のテーブル（本記載以降、**サブテーブル**と表記）にレコードを転送できます。
なお、以下では**フィールド**を階層構造別に区別して説明します。

- アプリ直下のフィールド
- サブテーブル内のフィールド

一度の転送で、アプリ直下のフィールドへの転送、およびサブテーブル内のフィールドの更新を一括で行うことができます。

:::(Warning) (サブテーブルへの転送に関する制約)

- 転送モードで`update`や`upsert`を選択していても、サブテーブルへのデータ転送は常に**洗い替え**となります。
  すなわち、既存のサブテーブルのレコードは、転送のたびに新しく転送されたデータに置き換わります。
- アプリ直下のフィールドに、**ユニークな値で構成されたフィールド**が少なくとも1つ存在している必要があります。
- サブテーブル内の`USER_SELECT`・`ORGANIZATION_SELECT`・`GROUP_SELECT`フィールドに対するデータ転送はできません。
:::

### 2次元テーブルを利用したサブテーブルの更新

#### 用意する転送データ

**サブテーブル内のフィールド**のレコードが最小粒度となる形で、**アプリ直下のフィールド**の値が平坦化されて結合されたテーブルを用意します。
具体例を用いて説明します。

- アプリ直下：**案件ID**・**会社名**というフィールドが存在する
- サブテーブル：**活動履歴**というサブテーブルに、**活動日**・**活動内容**というフィールドが存在する

このようなケースにおいて、以下のような4列のテーブルを用意します。
なお、転送データには、サブテーブルそのものに関する要素（上記例での**活動履歴**）を含める必要はありません。

![data-destination-kintone-2024-08-29-5-57-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-kintone-2024-08-29-5-57-1.png){height="" width="500"}

#### 転送設定STEP1詳細設定のテーブル転送キー

**ユニークな値で構成されたアプリ直下のフィールド**に該当するカラム名を入力します。
ここで指定されたカラムの値に基づいて、サブテーブルのレコードがグルーピングされます。
なお、本箇所で入力した値は、次手順で設定するカラム定義の任意のカラム名と一致している必要があります。

![data-destination-kintone-2024-08-29-5-57-2](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-kintone-2024-08-29-5-57-2.png){height="" width="500"}

#### 転送設定STEP2のカラム定義

**カラム名**をそれぞれ以下の通り入力します。

- アプリ直下のフィールド：**該当フィールドのフィールドコード**
- サブテーブル内のフィールド：「**サブテーブルのフィールドコード.サブテーブル内のフィールドのフィールドコード**」
  - `.`を含めて入力する必要があります。

![data-destination-kintone-2024-08-29-5-57-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-kintone-2024-08-29-5-57-3.png){height="" width="500"}

#### 転送設定STEP2出力オプションのカラム設定

カラム設定を追加することで、フィールドごとにデータ型を明示的に指定できます。
**カラム名**には、[転送設定STEP2のカラム定義](/docs/data-destination-kintone#転送設定step2のカラム定義)で指定した**カラム名**を入力ください。
なお、サブテーブル内のフィールドの場合、`.`を含めて入力する必要があります。

また、サブテーブルに対し、何らかのフィールドの値を基準に昇順ソートしてデータを転送できます。
ソートして転送したい場合は、以下の通りカラム設定を追加してください。

- カラム名：[転送設定STEP2のカラム定義](/docs/data-destination-kintone#転送設定step2のカラム定義)で指定したサブテーブル内のフィールドより、**カラム名**の「**サブテーブルのフィールドコード**」の部分（`.`の前部分）を入力ください。
- フィールドコード：該当サブテーブルのフィールドコードを入力ください。
- データ型：**SUBTABLE**を選択してください。
- テーブルの行をソートするカラム：任意の**サブテーブル内のフィールドのフィールドコード**を入力ください。
  - 本箇所では「**サブテーブルのフィールドコード.**」（`.`の前部分）の部分を入力する必要はありません。

![data-destination-kintone-2024-08-29-5-57-4](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-kintone-2024-08-29-5-57-4.png){height="" width="500"}

上記設定に基づいて転送ジョブを実行すると、以下の通りにデータが転送されます。

![data-destination-kintone-2024-08-29-5-57-5](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-kintone-2024-08-29-5-57-5.png){height="" width="500"}

案件IDが1の中身を確認すると、サブテーブルも更新されていることがわかります。

![data-destination-kintone-2024-08-29-5-57-6](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-kintone-2024-08-29-5-57-6.png){height="" width="500"}

