---
articleId: c14ee77f-b8c4-411a-a02a-9f7966fe489e
slug: data-source-sql-server
title: 転送元 - Microsoft SQL Server
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Microsoft SQL Serverからデータを転送する設定のDocsです。

## 制約
* 転送したいオブジェクトのSELECT権限が、転送設定に使用する接続情報のユーザーに付与されている必要があります。（db_datareader権限等）
詳細については、[公式ドキュメント](https://docs.microsoft.com/ja-jp/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-ver16)をご参照ください。

* テーブル一覧・スキーマ一覧のサジェスト機能を利用するためには、転送設定で使用するMicrosoft SQL Server接続情報に、以下の権限が付与されている必要があります。

    * テーブル一覧は、`sys.databases`から取得しています。下記マニュアルに記載の権限が必要です。
[https://docs.microsoft.com/ja-jp/sql/relational-databases/system-catalog-views/sys-databases-transact-sql?view=sql-server-ver16#permissions](https://docs.microsoft.com/ja-jp/sql/relational-databases/system-catalog-views/sys-databases-transact-sql?view=sql-server-ver16#permissions)
    * スキーマ一覧は、情報スキーマビューから取得しています。下記マニュアルに記載の権限が必要です。
[https://docs.microsoft.com/ja-jp/sql/relational-databases/system-information-schema-views/system-information-schema-views-transact-sql?view=sql-server-ver16#permissions](https://docs.microsoft.com/ja-jp/sql/relational-databases/system-information-schema-views/system-information-schema-views-transact-sql?view=sql-server-ver16#permissions)

* 上記権限が付与されていない場合、サジェスト機能がエラーになりますが、データへのアクセス権限が付与されていればデータプレビューおよび転送ジョブの実行は可能です。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Microsoft SQL Server接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| データベース | Yes | - | 取得したいデータが格納されているデータベース名を指定して下さい。 |
| スキーマ | Yes | - | 取得したいデータが格納されているスキーマ名を指定して下さい。 |
| 転送方法 | Yes | クエリを使用して転送 | **クエリを使用して転送**・**差分転送**のいずれかを選択します。<br>**差分転送**について、詳しくは[差分転送機能](/docs/incremental-data-transfer)を参照ください。 |
| クエリ | Yes | - | 転送方法で**クエリを使用して転送**を選択した場合に入力します。<br>転送データを取得するためのSQLを入力してください。|
| テーブル | Yes | - | 転送方法で**差分転送**を選択した場合に入力します。<br>転送したいデータが入っているテーブル名を入力してください。 |
| デフォルトのタイムゾーン | Yes | UTC | 列がdate/time/datetime型だった場合、時刻をどのタイムゾーンにするかを指定してください。 |

### STEP2 詳細設定
| 項目名 | デフォルト値 | 内容 |
| --- | --- | --- |
| カーソルが一度に処理するレコード数 | 10000 | 一度に取得する行数を指定することができます。 |
| 接続タイムアウト（秒） | 300 | ドライバが接続するまでのタイムアウトを秒単位で指定できます。<br>0とした時はMicrosoft SQL Serverのデフォルトである15秒となります。 |
| ソケットタイムアウト（秒） | 1800 | クエリを実行するまでのタイムアウトを秒単位で指定できます。<br>0とした時はタイムアウトなしとなります。 |
