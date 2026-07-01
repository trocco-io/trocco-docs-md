---
articleId: a68defeb-d1d4-4818-832a-9f17179c3a63
slug: error-message
title: エラーメッセージ集
parentCategoryId: ef849c3e-bdcf-4aef-86ba-0cf34e48b70e
languageCode: ja
---

COMETAで表示される、エラーメッセージの原因および対処法を説明するページです。

## プレビュー画面

本項では、以下の画面上に表示されることのあるエラーメッセージについて紹介します。

- [アセット情報のプレビュー](/cometa/docs/table-information-v2#%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%82%BF%E3%83%96)
- [ER図のJOINプレビュー](/cometa/docs/erd-and-join-v2#join%E5%88%86%E6%9E%90)
- [クエリエディタの実行プレビュー](/cometa/docs/query-editor-v2#%E3%82%AF%E3%82%A8%E3%83%AA%E5%AE%9F%E8%A1%8C%E7%B5%90%E6%9E%9C%E3%82%92%E5%8D%B3%E5%BA%A7%E3%81%AB%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC)

### Snowflakeのプレビューで「不正なUTF-8文字列です」と表示される

#### 考えられる原因

VARCHARカラムにマルチバイト文字を保存しており、そのバイト数がSnowflakeで指定しているVARCHAR最大文字数を超えている場合にエラーとなります。

#### 対処

最大文字数を、実際に保存するマルチバイト文字のバイト数より大きな値に変更することで、プレビューが表示されるようになります。

[Snowflake のALTER TABLE](https://docs.snowflake.com/ja/sql-reference/sql/alter-table-column) を使って VARCHAR の最大文字数を拡大しても本事象は解消されません。
同名のカラム名を持つテーブルを、VARCHAR の最大文字数を拡張する形で別途作成し、コピー&スワップすることで解消できます。
以下が解消例となります。

1. 以下のような定義のテーブル`DB.PUBLIC.TABLE_ORIGINAL`があったとします。

```sql
CREATE OR REPLACE TABLE DB.PUBLIC.TABLE_ORIGINAL (
	NAME VARCHAR(4)
);
```

2. 新たに最大文字数を拡張したテーブル`DB.PUBLIC.TABLE_NEXT`を作成します。VARCHARのオプションパラメーターを指定しないことで、最大許容長がデフォルトで設定されます。

```sql
CREATE OR REPLACE TABLE DB.PUBLIC.TABLE_NEXT (
	NAME VARCHAR
);
```

3. `TABLE_ORIGINAL`から`TABLE_NEXT`にデータをコピーします。

```sql
INSERT INTO DB.PUBLIC.TABLE_NEXT SELECT * FROM DB.PUBLIC.TABLE_ORIGINAL;
```

4. 最後に両テーブルをswapします。

```sql
ALTER TABLE DB.PUBLIC.TABLE_ORIGINAL SWAP WITH DB.PUBLIC.TABLE_NEXT;
```
