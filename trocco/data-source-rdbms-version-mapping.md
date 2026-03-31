---
articleId: a639dd9c-8039-4aa7-ab2c-1eee00a5210b
slug: data-source-rdbms-version-mapping
title: 転送元 - RDBMSバージョン対応表
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

転送元RDBMS系コネクタで用いているドライバーバージョンの対応表です。

| 転送元コネクタ |TROCCO サポートバージョン | 備考 |
| --- | --- | --- |
| Amazon Redshift | PostgreSQL JDBC Driver 9.4-1205-JDBC41 | PostgreSQLと同じドライバーを使用 |
| Db2 for luw | IBM Data Server Driver for JDBC and SQLJ 4.27.25 | 詳細は後述の[Db2 for LUWの互換性について](/docs/data-source-rdbms-version-mapping#db2-for-luwの互換性について)を参照 |
| Microsoft SQL Server | <ul><li>Microsoft SQLServer JDBC Driver 8.2</li><li>jTDS Driver 1.3.1</li></ul> | 詳細は後述の[Microsoft SQL Serverの互換性について](/docs/data-source-rdbms-version-mapping#microsoft-sql-serverの互換性について)を参照 |
| MySQL | MySQL Connector Java 5.1.49 | 左記はMySQL 8.0系でも動作可能<br>ただし、MySQL 8.0系に追加された`caching_sha2_password`認証機能を利用する場合はSSLを有効にする必要があります。  |
| Oracle Database | 対応するJDBC jarファイルおよび、Oracle Databaseのバージョンは下記のとおりです。<br><br><ul><li>ojdbc7.jar<ul><li>12.1 または12cR1</li></ul></li><li>ojdbc8.jar<ul><li>12.2 または12cR2</li><li>18.x</li><li>19.x</li><li>21.x</li></ul></li></ul> | 詳細は[Oracle JDBCに関するFAQ](https://www.oracle.com/jp/database/technologies/faq-jdbc.html#01_01)を参照 |
| PostgreSQL | <ul><li>PostgreSQL JDBC Driver 42.5.1</li><li>PostgreSQL JDBC Driver 9.4-1205-JDBC41</li></ul> | - |

## 補足

### Db2 for LUWの互換性について

対応するDBバージョンは以下のとおりです。

|Db2 or Db2 Connect level|IBM Data Server Driver for JDBC and SQLJ version |
|---|---|
|Db2 11.5.4|4.27.25|

IBM Data Server Driver for JDBC and SQLJのバージョンは、以下と互換性があります。
- Db2のバージョンとリリース (VV.RR)。
- サポートされているDb2のバージョンとリリースのうち、ドライバー・バージョンが出荷されたバージョンとリリースより前のもの。
- Javaアプリケーションが上位のDb2バージョンおよびリリースのフィーチャーを使用しない場合は、ドライバー・バージョンが出荷されたバージョンおよびリリースより上位のDb2バージョンおよびリリース。

詳しくは、[IBM Data Server Driver for JDBC and SQLJ のバージョンと Db2 または Db2 Connect のレベル](https://www.ibm.com/docs/ja/db2/12.1.0?topic=sdjs-data-server-driver-jdbc-sqlj-versions-db2-db2-connect-levels)を参照ください。

### Microsoft SQL Serverの互換性について

対応するDBバージョンは以下のとおりです。
詳しくは、[Microsoft SQL Server 用 JDBC Driver のサポート表](https://learn.microsoft.com/ja-jp/sql/connect/jdbc/microsoft-jdbc-driver-for-sql-server-support-matrix?view=sql-server-ver15#sql-version-compatibility)および[The jTDS Project](http://jtds.sourceforge.net/)を参照ください。

|DB version \ TROCCO-supported driver|Microsoft SQLServer JDBC Driver 8.2|jTDS Driver 1.3.1|Microsoft SQLServer JDBC Driver 12.6|
|---|---|---|---|
|Microsoft SQL Server 2022|-|-|✓|
|Microsoft SQL Server 2019|✓|-|✓|
|Microsoft SQL Server 2017|✓|-|✓|
|Microsoft SQL Server 2016|✓|-|✓|
|Microsoft SQL Server 2014|✓|-|✓|
|Microsoft SQL Server 2012|✓|✓|-|
|Microsoft SQL Server 2008|-|✓|-|
|Microsoft SQL Server 2005|-|✓|-|
|Microsoft SQL Server 2000|-|✓|-|
|Microsoft SQL Server 7|-|✓|-|
|Microsoft SQL Server 6.5|-|✓|-|