---
articleId: 8a98d9a6-dfcc-46a9-9823-c8809fa448dd
slug: configuration-of-output-files
title: 出力ファイル形式の設定について
parentCategoryId: e0aedd1c-66b1-48a7-948e-6cba77266220
languageCode: ja
---
## 概要

転送先ファイル・ストレージ系コネクタでは、転送設定のSTEP1にて出力ファイル形式を設定し、STEP2の出力オプションにて出力ファイルに対する詳細設定を行うことができます。
本ページでは、TROCCOが対応する出力ファイル形式とコネクタ、および出力オプションの各種設定項目について説明します。

## 出力ファイル形式

CSV/TSVに対応しています。
また、一部コネクタはJSON Linesにも対応しています。
コネクタと対応ファイル形式について、以下表を参照ください。

|ファイル・ストレージ系コネクタ|CSV/TSV|JSON Lines|
|:----|:----|:----|
|[転送先 - Amazon S3](/docs/data-destination-s3)|✓|✓|
|[転送先 - Azure Blob Storage](/docs/data-destination-azure-blob-storage)|✓|✓|
|[転送先 - Box](/docs/data-destination-box)|✓|-|
|[転送先 - FTP・FTPS](/docs/data-destination-ftp)|✓|✓|
|[転送先 - Google Cloud Storage](/docs/data-destination-google-cloud-storage)|✓|✓|
|[転送先 - Google Drive](/docs/data-destination-google-drive)|✓|-|
|[転送先 - KARTE Datahub](/docs/data-destination-karte-datahub)|✓|✓|
|[転送先 - SFTP](/docs/data-destination-sftp)|✓|✓|

## 出力オプション設定項目

転送設定編集STEP2「出力オプション」の設定項目一覧です。
なお、出力ファイル形式によって、設定項目は異なります。

### CSV/TSV

Embulkの[csv-formatter-plugin](https://www.embulk.org/docs/built-in.html#csv-formatter-plugin)を使用しています。

| 項目名 | デフォルト値 | 説明 |
| --- | --- | --- |
| 区切り文字 |  `,`  | CSVのデータの区切り文字を選択します。 |
| 改行文字 | `CRLF` | 改行に関するルールを`CR`・`CRLF`・`LF`の中から選択します。 |
| フィールド内の改行文字 | `LF` | フィールド内の改行に関するルールを`CR`・`CRLF`・`LF`の中から選択します。 |
| 文字エンコーディング | `UTF-8` | 文字エンコーディングの方式を設定します。 |
| BOM |  追加しない  | 文字エンコーディングにUTF-8を指定した場合に、BOMの有無を選択できます。<br>UTF-8以外を指定した場合、設定は無視されます。 |
| クオート付与方法 | `MINIMAL` | クオートのルールを以下から選択できます。<ul><li>`ALL`（すべてのフィールドをクオート）</li><li>`MINIMAL`（必要な場合のみクオート、フィールド内にデリミタ等がある場合のみ）</li><li>`NONE`（クオートをしない）</li></ul> |
| エスケープ文字 |  `\`  | エスケープ文字を設定します。 |
| ヘッダー |  有効にする  | **有効にする**を選択すると、ヘッダー行も転送されます。<br>ヘッダー行が不要な場合は、**無効にする**を選択してください。 |
| NULLを置換する文字列 | 設定しない | NULLを置換する文字列を設定できます。<br>**設定する**を選択すると、置換後の文字列を入力できます。 |
| デフォルトのタイムゾーン | `UTC` | 時刻出力時のタイムゾーンを設定します。<br>この設定は**カラム設定**のタイムゾーンで上書きされます。 |
| カラム設定 | `%Y-%m-%d %H:%M:%S.%6N %z`  | タイムスタンプ型のカラム列に対して、カラム名を指定し、日付フォーマットとタイムゾーンを設定できます。<br>左記のデフォルト値は、日付フォーマットのデフォルト値です。 |

### JSON Lines

[embulk-formatter-jsonl](https://github.com/takei-yuya/embulk-formatter-jsonl)を使用しています。
設定項目の詳細については、[Confirmation](https://github.com/takei-yuya/embulk-formatter-jsonl)を参照ください。

| 項目名 | デフォルト値 | 説明 |
| --- | --- | --- |
| 文字エンコーディング | `UTF-8` | 文字エンコーディングの方式を以下から選択します。<ul><li>`UTF-8`</li><li>`UTF-16LE`</li><li>`UTF-32BE`</li><li>`UTF-32LE`</li></ul>|
| 改行文字 | `LF` | 改行文字のルールを以下から選択します。<ul><li>`CRLF`</li><li>`LF`</li><li>`CR`</li><li>`NUL`</li><li>`NO`</li></ul>|
| 日付のフォーマット | - | 日付フォーマットを設定できます。 |
| タイムゾーン | - | タイムゾーンを設定できます。<br>このオプションを使う場合、日付のフォーマットも設定してください。 |
