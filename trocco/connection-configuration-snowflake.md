---
articleId: c8f8a0f4-96cc-4535-8d78-84aaa97c0342
slug: connection-configuration-snowflake
title: 接続情報 - Snowflake
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Snowflakeの接続情報を作成するためのDocsです。

なお、Snowflakeを利用する場合、必要な権限が付与されたロールを、あらかじめユーザーに付与しておく必要があります。
詳しくは、後述の[権限とロール](/docs/connection-configuration-snowflake#権限とロール)を参照ください。

## 入力項目

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力します。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力できます。 |
| ホスト | Yes | Snowflakeのホストを入力します。<br>詳しくは、[ホスト名の入力形式](/docs/connection-configuration-snowflake#ホスト名の入力形式)を参照ください。|
| ユーザー | Yes | Snowflakeのユーザー名を入力します。 |
| 認証方式 | Yes | 認証方式を選択します。新規作成時は、キーペア認証またはプログラムによるアクセストークン認証から選択できます。 |
| 秘密鍵 | Yes | 認証方式でキーペア認証を選択した場合に入力します。<br>Snowflakeの秘密鍵を入力してください。<br>詳しくは、[キーペア認証について](/docs/connection-configuration-snowflake#キーペア認証について)を参照ください。 |
| 秘密鍵のパスフレーズ | No | パスフレーズ付きの秘密鍵を利用する場合に入力してください。 |
| プログラムによるアクセストークン | Yes | 認証方式でプログラムによるアクセストークン認証を選択した場合に入力します。<br>Snowflakeで発行したプログラムによるアクセストークンを入力してください。 |
| パスワード | Yes | 認証方式でユーザー・パスワード認証を選択した場合に入力します。<br>Snowflakeのパスワードを入力してください。<br>※ユーザー・パスワード認証は廃止予定です。 |
| ロール | No | ユーザーに付与されているロール名を入力します。<br>未入力の場合、Snowflakeのデフォルトの設定が利用されます。デフォルトの設定がない場合は、入力する必要があります。<br>ロールについて、詳しくは[権限とロール](/docs/connection-configuration-snowflake#権限とロール)を参照ください。 |
| JDBCドライバー | No | Snowflakeサーバーに接続するJDBCドライバーのバージョンを選択できます。<ul><li>`3.14.2`</li><li>`3.17.0`</li><li>`3.24.2`</li></ul> |

:::(Info) (JDBCドライバーのバージョンについて)

JDBCドライバーが未指定の場合、それぞれ以下のバージョンが利用されます。

- 転送元Snowflakeの場合：`3.13.5`
- 転送先Snowflakeの場合：`3.13.26`

ただし、JDBCドライバーの`3.13`系は2023年10月31日をもってSnowflakeのサポート対象外となります。
そのため、**`3.14`系以上のバージョンの利用を推奨しております。**
:::

:::(Warning) (ユーザー・パスワード認証の廃止予定)

ユーザー・パスワード認証は、Snowflakeの仕様変更により将来的に廃止される予定です。
新規で接続情報を作成する場合は、キーペア認証またはプログラムによるアクセストークン認証から選択してください。

既存の接続情報でユーザー・パスワード認証を利用している場合は、引き続き利用できますが、キーペア認証またはプログラムによるアクセストークン認証への移行を推奨します。
なお、認証方式を一度キーペア認証またはプログラムによるアクセストークン認証に変更した後は、ユーザー・パスワード認証に戻すことはできません。
:::

:::(Warning) (プログラムによるアクセストークン認証の利用条件)

プログラムによるアクセストークン（Programmatic Access Token）を利用するためには、Snowflake側で以下の事前設定が必要です。

- 対象ユーザーへのネットワークポリシーの設定
- プログラムによるアクセストークンの有効期限（expiry date）の設定（最長1年）

有効期限が切れたトークンを利用している接続情報では、ジョブが実行エラーとなります。
有効期限が切れる前に、Snowflake側でトークンを再発行し、TROCCOの接続情報を更新してください。

詳しくは、[Snowflake公式ドキュメント - プログラムによるアクセストークン](https://docs.snowflake.com/ja/user-guide/programmatic-access-tokens)を参照ください。
:::

### ホスト名の入力形式

以下のいずれかの形式で入力できます。
- `<LOCATOR>.<REGION>.<CLOUD>.snowflakecomputing.com`
  - 入力例：`hm*****.ap-northeast-1.aws.snowflakecomputing.com`
- `<ORGANIZATION>-<ACCOUNT_NAME>.snowflakecomputing.com`
  - 入力例：`*******-km*****.snowflakecomputing.com`

上記各要素は、Snowflakeのコンソール画面左下より確認できます。
![connection-configuration-snowflake_001](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-snowflake-2024-08-29-17-13-0.png){height="" width="50%"}

### キーペア認証について

公開鍵・秘密鍵を生成し、公開鍵をSnowflake側に、秘密鍵をTROCCO側に、設定する必要があります。

#### 公開鍵・秘密鍵の生成

ターミナルにて、以下のコマンドを順に実施してください。

1. 秘密鍵を作成する
  生成した秘密鍵は、TROCCOのSnowflake接続情報の**秘密鍵**欄に入力してください。
```
$ openssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -out rsa_key.p8 -nocrypt
```

:::(Info) (パスフレーズ付きの秘密鍵)

パスフレーズ付きの秘密鍵を利用する場合は、`-nocrypt`オプションを削除してください。

:::

2. 公開鍵を生成する
```
$ openssl rsa -in rsa_key.p8 -pubout -out rsa_key.pub
```

3. 公開鍵を整形する（改行と不要な箇所の除去）
```
$ cat rsa_key.pub | \
tr -d "\n" | \
sed "s/-----BEGIN PUBLIC KEY-----//g" | \
sed "s/-----END PUBLIC KEY-----//g"
```

#### Snowflakeへの公開鍵の設定

先に作成・整形した公開鍵を踏まえて、Snowflake側で以下クエリを実行してください。
```
ALTER USER {USERNAME} SET RSA_PUBLIC_KEY='{PUBLIC_KEY}'
```

## 権限とロール

Snowflakeを利用するにあたり、ロールに必要な権限を付与し、ユーザーにロールを付与する必要があります。
なお、転送設定（転送元・転送先）とデータマート定義とで、ロールに付与する必要のある権限は異なります。

### 転送設定（転送元）を利用する場合

#### 必要となる権限

| 項目 | 権限 | 内容 |
| --- | --- | --- |
| [仮想ウェアハウス権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#virtual-warehouse-privileges) | OPERATE | ウェアハウスの状態（停止、開始、一時停止、再開）を変更し、実行中のクエリを中止できるようにします。 |
| [仮想ウェアハウス権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#virtual-warehouse-privileges) | USAGE | 仮想ウェアハウスを使用し、その結果として、ウェアハウスでクエリを実行します。 |
| [データベース権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#database-privileges) | USAGE | データベースを使用できるようにします。データベース内のオブジェクトを表示またはアクションを実行するには、追加の権限が必要です。 |
| [スキーマ権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#schema-privileges) | USAGE | スキーマを使用できるようにします。 |
| [テーブル権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#table-privileges) | SELECT | テーブルで[SELECT](https://docs.snowflake.com/ja/sql-reference/sql/select.html)ステートメントを実行できるようにします。 |

#### クエリサンプル

以下の条件を例に、ロールに権限を付与するクエリサンプルをご紹介します。

- 作成するロール：`TROCCO_INPUT_ROLE`
- ロールを付与するユーザー：`TROCCO_USER`
- 対象ウェアハウス：`TROCCO_WAREHOUSE`
- 対象データベース：`TROCCO_DATABASE`
- 対象スキーマ：`PUBLIC`
- 対象テーブル：`TROCCO_TABLE`

実際にロールに権限を付与する場合は、適宜内容を読み替えてください。

- ロールを作成可能なロールに切り替える

  ```sql
  USE ROLE ACCOUNTADMIN;
  ```

- ロールを新規作成する

  ```sql
  CREATE ROLE TROCCO_INPUT_ROLE;
  ```

- 指定したユーザーにロールを使用可能にする

  ```sql
  GRANT ROLE TROCCO_INPUT_ROLE TO USER TROCCO_USER;
  ```

- ユーザーに対し、作成したロールをデフォルトで使用するロールにする

  ```sql
  ALTER USER TROCCO_USER SET DEFAULT_ROLE = TROCCO_INPUT_ROLE;
  ```

- ウェアハウスの利用権限をロールに付与する

  ```sql
  GRANT USAGE ON WAREHOUSE TROCCO_WAREHOUSE TO ROLE TROCCO_INPUT_ROLE;
  GRANT OPERATE ON WAREHOUSE TROCCO_WAREHOUSE TO ROLE TROCCO_INPUT_ROLE;
  ```

- データベースの利用権限をロールに付与する

  ```sql
  GRANT USAGE ON DATABASE TROCCO_DATABASE TO ROLE TROCCO_INPUT_ROLE;
  ```

- スキーマの利用権限をロールに付与する

  ```sql
  GRANT USAGE ON SCHEMA TROCCO_DATABASE.PUBLIC TO ROLE TROCCO_INPUT_ROLE;
  ```

- スキーマの全テーブルに対してSELECTクエリを実行可能にする権限をロールに付与する場合

  ```sql
  GRANT SELECT ON ALL TABLES IN SCHEMA TROCCO_DATABASE.PUBLIC TO ROLE TROCCO_INPUT_ROLE;
  ```

- 個別のテーブルのみSELECTクエリを実行可能にする権限をロールに付与する場合

  ```sql
  GRANT SELECT on TABLE TROCCO_DATABASE.PUBLIC.TROCCO_TABLE TO ROLE TROCCO_INPUT_ROLE;
  ```

### 転送設定（転送先）を利用する場合

#### 必要となる権限

| 項目 | 権限 | 内容 | 備考 |
| --- | --- | --- | --- |
| [仮想ウェアハウス権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#virtual-warehouse-privileges) | OPERATE | ウェアハウスの状態（停止、開始、一時停止、再開）を変更し、実行中のクエリを中止できるようにします。 |  |
| [仮想ウェアハウス権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#virtual-warehouse-privileges) | USAGE | 仮想ウェアハウスを使用し、その結果として、ウェアハウスでクエリを実行します。 |  |
| [データベース権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#database-privileges) | USAGE | データベースを使用できるようにします。データベース内のオブジェクトを表示またはアクションを実行するには、追加の権限が必要です。 |  |
| [スキーマ権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#schema-privileges) | USAGE | スキーマを使用できるようにします。 |  |
| [スキーマ権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#schema-privileges) | CREATE TABLE | テーブルの複製など、スキーマで新しいテーブルを作成できるようにします。 |  |
| [スキーマ権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#schema-privileges) | CREATE STAGE | ステージの複製など、スキーマで新しいステージを作成できるようにします。 |  |
| [テーブル権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#table-privileges) | OWNERSHIP | テーブルの所有権を譲渡します。これにより、テーブルに対するフル制御が付与されます。 | 転送モードがreplaceの場合、<br>DROP TABLE クエリを実行するために必要となります。<br>※[DROP TABLE](https://docs.snowflake.com/ja/sql-reference/sql/drop-table.html#drop-table)クエリを使用するにはテーブルの所有権を持つロールを使用する必要があります。<br>[Snowflake ドキュメント - 使用上の注意](https://docs.snowflake.com/ja/sql-reference/sql/drop-table.html#usage-notes)<br>※ すでに存在するテーブルに対して実行する場合のみ必要になります。 |

#### クエリサンプル

以下の条件を例に、ロールに権限を付与するクエリサンプルをご紹介します。

- 作成するロール：`TROCCO_OUTPUT_ROLE`
- ロールを付与するユーザー：`TROCCO_USER`
- 対象ウェアハウス：`TROCCO_WAREHOUSE`
- 対象データベース：`TROCCO_DATABASE`
- 対象スキーマ：`PUBLIC`
- 対象テーブル：`TROCCO_TABLE`

実際にロールに権限を付与する場合は、適宜内容を読み替えてください。

- ロールを作成可能なロールに切り替える

  ```sql
  USE ROLE ACCOUNTADMIN;
  ```

- ロールを新規作成する

  ```sql
  CREATE ROLE TROCCO_OUTPUT_ROLE;
  ```

- 指定したユーザーにロールが使えるようにする

  ```sql
  GRANT ROLE TROCCO_OUTPUT_ROLE TO USER TROCCO_USER;
  ```

- ユーザーに対し、作成したロールをデフォルトで使用するロールにする

  ```sql
  ALTER USER TROCCO_USER SET DEFAULT_ROLE = TROCCO_OUTPUT_ROLE;
  ```

- ウェアハウスの利用権限をロールに付与する

  ```sql
  GRANT USAGE ON WAREHOUSE TROCCO_WAREHOUSE TO ROLE TROCCO_OUTPUT_ROLE;
  GRANT OPERATE ON WAREHOUSE TROCCO_WAREHOUSE TO ROLE TROCCO_OUTPUT_ROLE;
  ```

- データベースの利用権限をロールに付与する

  ```sql
  GRANT USAGE ON DATABASE TROCCO_DATABASE TO ROLE TROCCO_OUTPUT_ROLE;
  ```

- スキーマの利用権限をロールに付与する

  ```sql
  GRANT USAGE ON SCHEMA TROCCO_DATABASE.PUBLIC TO ROLE TROCCO_OUTPUT_ROLE;
  ```

- テーブル作成の権限をロールに付与する\

  ```sql
  GRANT CREATE TABLE ON SCHEMA TROCCO_DATABASE.PUBLIC TO ROLE TROCCO_OUTPUT_ROLE;
  ```

- ステージの操作の権限をロールに付与する

  ```sql
  GRANT CREATE STAGE on SCHEMA TROCCO_DATABASE.PUBLIC to ROLE TROCCO_OUTPUT_ROLE;
  ```

- テーブルの所有権をロールに移行させる

  ※ すでに存在するテーブルに対して実行する場合に必要になります。

  ```sql
  GRANT OWNERSHIP ON TABLE TROCCO_DATABASE.PUBLIC.TROCCO_TABLE TO ROLE TROCCO_OUTPUT_ROLE;
  ```

### データマート定義を利用する場合

#### 必要となる権限

| 項目 | 権限 | 内容 | 備考 |
| --- | --- | --- | --- |
| [仮想ウェアハウス権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#virtual-warehouse-privileges) | OPERATE | ウェアハウスの状態（停止、開始、一時停止、再開）を変更し、実行中のクエリを中止できるようにします。 |  |
| [仮想ウェアハウス権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#virtual-warehouse-privileges) | USAGE | 仮想ウェアハウスを使用し、その結果として、ウェアハウスでクエリを実行します。 |  |
| [データベース権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#database-privileges) | USAGE | データベースを使用できるようにします。データベース内のオブジェクトを表示またはアクションを実行するには、追加の権限が必要です。 |  |
| [スキーマ権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#schema-privileges) | USAGE | スキーマを使用できるようにします。 |  |
| [スキーマ権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#schema-privileges) | CREATE TABLE | テーブルの複製など、スキーマで新しいテーブルを作成できるようにします。 |  |
| [テーブル権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#table-privileges) | SELECT | テーブルで[SELECT](https://docs.snowflake.com/ja/sql-reference/sql/select.html)ステートメントを実行できるようにします。 |  |
| [テーブル権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#table-privileges) | INSERT | テーブルで[INSERT](https://docs.snowflake.com/ja/sql-reference/sql/insert.html)ステートメントを実行できるようにします。 | 書き込みモードが追記の場合、出力先テーブルへデータを登録するために必要となります。 |
| [テーブル権限](https://docs.snowflake.com/ja/user-guide/security-access-control-privileges.html#table-privileges) | OWNERSHIP | テーブルの所有権を譲渡します。これにより、テーブルに対するフル制御が付与されます。 | 書き込みモードが全件洗い替えの場合、出力先テーブルの削除を実行するために必要となります。<br>※ すでに存在するテーブルに対して実行する場合のみ必要になります。 |
 
#### クエリサンプル

以下の条件を例に、ロールに権限を付与するクエリサンプルをご紹介します。

- 作成するロール：`TROCCO_DATAMART_ROLE`
- ロールを付与するユーザー：`TROCCO_USER`
- 対象ウェアハウス：`TROCCO_WAREHOUSE`
- 対象データベース：`TROCCO_DATABASE`
- 対象スキーマ：`PUBLIC`
- 対象テーブル：`TROCCO_TABLE`

実際にロールに権限を付与する場合は、適宜内容を読み替えてください。

- ロールを作成可能なロールに切り替える

  ```sql
  USE ROLE ACCOUNTADMIN;
  ```

- ロールを新規作成する

  ```sql
  CREATE ROLE TROCCO_DATAMART_ROLE;
  ```

- 指定したユーザーにロールが使えるようにする

  ```sql
  GRANT ROLE TROCCO_DATAMART_ROLE TO USER TROCCO_USER;
  ```

- ユーザーに対し、作成したロールをデフォルトで使用するロールにする

  ```sql
  ALTER USER TROCCO_USER SET DEFAULT_ROLE = TROCCO_DATAMART_ROLE;
  ```

- ウェアハウスの利用権限をロールに付与する

  ```sql
  GRANT USAGE ON WAREHOUSE TROCCO_WAREHOUSE TO ROLE TROCCO_DATAMART_ROLE;

  GRANT OPERATE ON WAREHOUSE TROCCO_WAREHOUSE TO ROLE TROCCO_DATAMART_ROLE;
  ```

- データベースの利用権限をロールに付与する

  ```sql
  GRANT USAGE ON DATABASE TROCCO_DATABASE TO ROLE TROCCO_DATAMART_ROLE;
  ```

- スキーマの利用権限をロールに付与する

  ```sql
  GRANT USAGE ON SCHEMA TROCCO_DATABASE.PUBLIC TO ROLE TROCCO_DATAMART_ROLE;
  ```

- テーブル作成の権限をロールに付与する

  ```sql
  GRANT CREATE TABLE ON SCHEMA TROCCO_DATABASE.PUBLIC TO ROLE TROCCO_DATAMART_ROLE;
  ```

- テーブルへINSERTクエリを実行可能にする権限をロールに付与する

  ```sql
  GRANT INSERT ON TABLE TROCCO_DATABASE.PUBLIC.TROCCO_TABLE TO ROLE TROCCO_DATAMART_ROLE;
  ```

- テーブルの所有権をロールに移行させる

  ※ すでに存在するテーブルに対して実行する場合に必要になります。

  ```sql
  GRANT OWNERSHIP ON TABLE TROCCO_DATABASE.PUBLIC.TROCCO_TABLE TO ROLE TROCCO_DATAMART_ROLE;
  ```
