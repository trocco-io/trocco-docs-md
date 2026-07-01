---
articleId: 47fd9f43-84cf-45ee-9671-d455ce871b24
slug: datastore-authentication-custom-database-query-sample
title: カスタムデータベース連携用クエリサンプル
parentCategoryId: f562d32d-a51d-4160-8d59-114201e44de4
languageCode: ja
---

本ページでは、[カスタムデータベース連携](/cometa/docs/datastore-authentication-custom-database)に利用するCSVファイルのフォーマットに適合するデータを生成するためのSQL文を紹介します。

## MySQL

### MySQL - テーブル用CSVファイル

```sql
SELECT
  table_catalog AS table_catalog,
  table_schema AS table_schema,
  table_name AS table_name,
  table_type AS table_type,
  table_comment AS comment
FROM
  information_schema.tables
WHERE table_schema IN ("your", "schema", "list");
```

### MySQL - カラム用CSVファイル

```sql
SELECT
  table_catalog AS table_catalog,
  table_schema AS table_schema,
  table_name AS table_name,
  column_name AS column_name,
  ordinal_position AS ordinal_position,
  column_default AS column_default,
  is_nullable AS is_nullable,
  CAST(data_type AS CHAR) AS data_type,
  column_comment AS comment
FROM
  information_schema.columns
WHERE table_schema IN ("your", "schema", "list");
```

## PostgreSQL

### PostgreSQL - テーブル用CSVファイル

```sql
SELECT
  i.table_catalog,
  i.table_schema,
  i.table_name,
  i.table_type,
  pgd.description AS comment
FROM information_schema.tables AS i
  LEFT JOIN pg_catalog.pg_class c
    ON c.relname = i.table_name
  LEFT JOIN pg_catalog.pg_namespace n
    ON n.nspname = i.table_schema
    AND n.oid = c.relnamespace
  LEFT JOIN pg_catalog.pg_description pgd
    ON pgd.objoid = c.oid
    AND pgd.objsubid = 0
WHERE i.table_schema IN ('your', 'schema', 'list');
```

### PostgreSQL - カラム用CSVファイル

```sql
SELECT
  i.table_catalog,
  i.table_schema,
  i.table_name,
  i.column_name,
  i.ordinal_position,
  i.column_default,
  i.is_nullable,
  i.data_type,
  pgd.description AS comment
FROM information_schema.columns AS i
  LEFT JOIN pg_catalog.pg_class c
    ON c.relname = i.table_name
  LEFT JOIN pg_catalog.pg_namespace n
    ON n.nspname = i.table_schema
    AND n.oid = c.relnamespace
  LEFT JOIN pg_catalog.pg_attribute a
    ON a.attrelid = c.oid
    AND a.attname = i.column_name
  LEFT JOIN pg_catalog.pg_description pgd
    ON pgd.objoid = c.oid
    AND pgd.objsubid = a.attnum
WHERE i.table_schema IN ('your', 'schema', 'list');

```

## Amazon Athena

### Amazon Athena - テーブル用CSVファイル

```sql
SELECT
  table_catalog,
  table_schema,
  table_name,
  table_type,
  null AS comment
FROM
  information_schema.tables
WHERE table_schema IN ("your", "schema", "list");
```

### Amazon Athena - カラム用CSVファイル

```sql
SELECT
  table_catalog,
  table_schema,
  table_name,
  column_name,
  ordinal_position,
  column_default,
  is_nullable,
  data_type,
  null AS comment
FROM
  information_schema.columns
WHERE table_schema IN ("your", "schema", "list");
```

## Databricks

### Databricks - テーブル用CSVファイル

```sql
SELECT
  table_catalog,
  table_schema,
  table_name,
  table_type,
  comment
FROM
  information_schema.tables
WHERE table_schema IN ("your", "schema", "list");
```

### Databricks - カラム用CSVファイル

```sql
SELECT
  table_catalog,
  table_schema,
  table_name,
  column_name,
  ordinal_position,
  column_default,
  is_nullable,
  data_type,
  comment
FROM
  information_schema.columns
WHERE table_schema IN ("your", "schema", "list");
```

## Oracle Database

TROCCOの転送設定（転送元Oracle Database・転送先Amazon S3）を利用してCSVファイルを配置する場合は、
転送設定STEP2の出力オプションにて、エスケープ文字列を `"` に設定してください。

### Oracle Database - テーブル用CSVファイル

```sql
SELECT
  sys_context('USERENV', 'DB_NAME') AS "table_catalog",
  at.owner AS "table_schema",
  at.table_name AS "table_name",
  'TABLE' AS "table_type",
  ac.comments AS "comment"
FROM
  all_tables at
  JOIN all_tab_comments ac
    ON at.table_name = ac.table_name
    AND at.owner = ac.owner
WHERE
  at.owner IN ("your", "owner", "list");
```

### Oracle Database - カラム用CSVファイル

```sql
SELECT
  sys_context('USERENV', 'DB_NAME') AS "table_catalog",
  at.owner AS "table_schema",
  at.table_name AS "table_name",
  at.column_name AS "column_name",
  at.column_id AS "ordinal_position",
  at.data_default AS "column_default",
  at.nullable AS "is_nullable",
  at.data_type AS "data_type",
  ac.comments AS "comment"
FROM
  all_tab_cols at
  JOIN all_col_comments ac
    ON at.table_name = ac.table_name
    AND at.column_name = ac.column_name
    AND at.owner = ac.owner
WHERE
  at.owner IN ("your", "owner", "list");
```

## Microsoft SQL Server

以下は、SQL Server 2022基準のクエリとなります。

### Microsoft SQL Server - テーブル用CSVファイル

```sql
SELECT
  t.table_catalog,
  t.table_schema,
  t.table_name,
  t.table_type,
  p.value AS comment
FROM information_schema.tables AS t
  LEFT JOIN sys.extended_properties AS p
    ON p.major_id = OBJECT_ID(QUOTENAME(t.table_schema) + '.' + QUOTENAME(t.table_name))
    AND p.minor_id = 0
    AND p.name = 'MS_Description'
WHERE t.table_schema IN ('your', 'schema', 'list');
```

### Microsoft SQL Server - カラム用CSVファイル

```sql
SELECT
  c.table_catalog,
  c.table_schema,
  c.table_name,
  c.column_name,
  c.ordinal_position,
  c.column_default,
  c.is_nullable,
  c.data_type,
  ep.value AS comment
FROM information_schema.columns AS c
  LEFT JOIN sys.columns AS sc
    ON sc.object_id = OBJECT_ID(QUOTENAME(c.table_schema) + '.' + QUOTENAME(c.table_name))
    AND sc.name = c.column_name
  LEFT JOIN sys.extended_properties AS ep
    ON ep.major_id = sc.object_id
    AND ep.minor_id = sc.column_id
    AND ep.name = 'MS_Description'
WHERE c.table_schema IN ('your', 'schema', 'list');
```

## Treasure Data

### Treasure Data - テーブル用CSVファイル

```sql
SELECT
  table_catalog,
  table_schema,
  table_name,
  table_type,
  null AS comment
FROM
  information_schema.tables
WHERE table_schema IN ("your", "schema", "list");
```

### Treasure Data - カラム用CSVファイル

```sql
SELECT
  table_catalog,
  table_schema,
  table_name,
  column_name,
  ordinal_position,
  column_default,
  is_nullable,
  data_type,
  null AS comment
FROM
  information_schema.columns
WHERE table_schema IN ("your", "schema", "list");
```
