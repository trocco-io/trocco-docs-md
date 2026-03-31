---
articleId: 77857c20-30eb-4bc7-920c-84be82cdf1af
slug: data-source-google-spreadsheets
title: 転送元 - Google Spreadsheets
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

Google Spreadsheetsからデータを転送する設定のDocsです。

## 制約

:::(Warning) (セルの表示形式についての制約)

転送元Google Spreadsheetsでは、[表示形式 > 数字](https://support.google.com/docs/answer/56470)が適用された状態の値が転送されます。
したがって、各カラム内の値の[表示形式 > 数字](https://support.google.com/docs/answer/56470)は、すべて揃えるようにしてください。
[表示形式 > 数字](https://support.google.com/docs/answer/56470)が異なる行が存在する場合、プレビューおよび転送に失敗することがあります。
:::

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Google Spreadsheets接続情報 | Yes |	- | あらかじめ登録してある[Google Spreadsheetsの接続情報](/docs/connection-configuration-google-spreadsheets)から、今回の転送設定に必要な権限を持つものを選択します。 |
| シートのURL | Yes | - | 取得したいスプレッドシートのURLを以下のフォーマットで入力します。（末尾の`/edit#gid=0`を含める形）<br>`https://docs.google.com/spreadsheets/d/xxxxxx/edit#gid=0`|
| シート名 | Yes | - | 取得したいシートの名前を入力します。<br>たとえば、スプレッドシート作成時のデフォルトのシート名は「シート1」です。 |
| 取り込み開始行番号 | Yes | 2 | 取り込むデータの最初の行番号を入力します。<br>ヘッダー行がある場合、ヘッダー行を除いて最初のデータの行番号を入力してください。  |
| 取り込み開始列番号 | Yes | `A` | 取り込むデータの最初の列番号を入力します。大文字のアルファベットで入力してください。 |
| デフォルトのタイムゾーン | Yes | - | シート上にあるタイムスタンプに関して、どのタイムゾーンで解釈するかを入力します。<br>スプレッドシート上の`timestamp`型データにはタイムゾーンが含まれていないため、転送時にどのタイムゾーンで取得するかを選択する必要があります。<br>指定できるタイムゾーンIDは[IANA Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)に準拠します。<br>例）東京の場合：`Asia/Tokyo`、UTCの場合：`UTC` |
| NULL文字列 | No | - | `NULL`と認識させたい文字列を入力します。<br>未入力の場合、空文字が`NULL`として認識されます。 |
| カラム設定 | Yes | - | 取得したいカラムのカラム名とデータ型および日時フォーマットを指定します。<br>**カラム情報を抽出**をクリックすることで、カラム名・データ型・日時フォーマットを一括で抽出することもできます。<br>なお、データ型は以下から選択します。<ul><li>`string`</li><li>`long`</li><li>`timestamp`</li><li>`double`</li><li>`boolean`</li><li>`json`</li></ul>データ型に`timestamp`型を選択した場合は、日時フォーマットを指定してください。|
