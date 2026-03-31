---
articleId: 95424869-04cf-4763-8524-682e944c9e5b
slug: release-note-2023-05
title: リリースノート-2023年05月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2023年05月のリリース情報をお届けします**

---

## 転送設定

### 転送元TROCCOでジョブ実行履歴の転送に対応 🎉
転送元TROCCOから転送ジョブ実行の履歴が転送できるようになりました。
最大で過去1年前までに実行された転送ジョブの履歴データを転送できます。
詳しくは[転送元 - TROCCO](/docs/data-source-trocco)を参照ください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-05-2024-08-29-23-56-0.png){height="" width="600"}

### 転送先Google Spreadsheetsでレコードのソートができるように 🎉
転送設定STEP1の詳細設定から**データ順序**を設定できるようになりました。
ソートキー名およびソート順を指定して、レコードを並び替えることができます。
詳しくは[転送先 - Google Spreadsheets](/docs/data-destination-google-spreadsheets#step1-詳細設定)を参照ください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-05-2024-08-29-23-56-1.png){height="" width="600"}

### 転送元ファイル・ストレージ系コネクタのデータ解凍オプションが拡充 🎉
転送するデータが圧縮されている場合、選択した解凍形式でデータを転送できます。
下記コネクタにて、解凍形式オプションが拡充しました。

#### 転送元Google Cloud Storage
転送設定STEP1の**解凍形式**の選択肢に`bzip2`と`gzip`を追加しました（従来は`tar.gz`と`zip`）。

#### 転送元Box
転送設定STEP1にて**解凍形式**を選択できるようになりました。
解凍方式は以下の4つから選択可能です。
- `bzip2`
- `gzip`
- `tar.gz`
- `zip`

### 転送先FTP・FTPSで転送モードが選択可能に 🎉
転送設定STEP1に**転送モード**を選択できるようになりました。
以下の2つから選択いただけます。

#### 並列転送
並列処理を適用して転送します。
**出力ファイル数抑制転送**に比べて、転送時間が短縮されます。
並列処理の都合上、転送元から取得したファイルが複数ファイルに分割されて転送先に送られることがあります。

#### 出力ファイル数抑制転送
並列処理を適用せずに転送します。
**並列転送**と異なり、転送元から取得したファイルは分割されずに転送先に送られます。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-05-2024-08-29-23-56-2.png){height="" width="600"}

### カラム名の一括変換形式に大文字変換とアッパースネークケース変換を追加 🎉
転送設定STEP2のカラム定義にて、カラム名一括変換の変換形式に**大文字変換**と**アッパースネークケース変換**が追加されました。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-05-2024-08-29-23-56-3.png){height="" width="600"}


## UI・UX

### 転送設定詳細の固定ヘッダーサイズがスクロールに応じて変更 🎉
転送設定詳細画面で下方にスクロールすると、固定ヘッダーの高さが小さくなります。
転送設定内容の表示領域が広くなり、画面上に表示される情報量が増えました。

| スクロール前 | スクロール後 |
| --- | --- |
|![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-05-2024-08-29-23-56-4.png) | ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-05-2024-08-29-23-56-5.png) |

## データカタログ

### ER図のテーブル論理名の全文表示 🎉
従来はテーブル名が長い場合のみ全文表示をしていましたが、論理名が長い場合でもホバー時に全文表示ができるようになりました。
※ER図エンティティ内の上段が「テーブル名」、下段が「論理名」です。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-05-2024-08-29-23-56-6.png){height="" width="600"}


## その他

### カスタム変数の埋め込み対応 🎉
転送設定とデータマートにて、カスタム変数の埋め込みが可能な入力項目が拡充しました。
実行時に動的に値を埋め込むことができるカスタム変数を、より多くのコネクタ・サービスでご活用いただけるようになりました。

<details>
<summary>転送設定 - 転送元</summary>

- **転送元Amazon Redshift**
  - 「データベース」「スキーマ」
- **転送元Amazon S3**
  - 「バケット」
- **転送元Azure Blob Storage**
  - 「パスプレフィックス」
- **転送元Box**
  - 「フォルダーID」
- **転送元Google BigQuery**
  - 「一時テーブル作成先データセット」
- **転送元Google Cloud Storage**
  - 「バケット」
- **転送元Google Drive**
  - 「フォルダID」
- **転送元Google Spreadsheets**
  - 「スプレッドシートのURL」
- **転送元PostgreSQL**
  - 「データベース」「スキーマ」
- **転送元Snowflake**
  - 「ウェアハウス」「データベース」「スキーマ」
</details>
<details>
<summary>転送設定 - 転送先</summary>

- **転送先Amazon S3**
  - 「バケット」
- **転送先Google Ads コンバージョン**
  - 「お客様ID」「コンバージョンアクションID」
- **転送先Google BigQuery**
  - 「データセット」
- **転送先Google Cloud Storage**
  - 「バケット」
- **転送先Google Drive**
  - 「フォルダID」
- **転送先PostgreSQL**
  - 「データベース」「スキーマ」「テーブル」
</details>
<details>
<summary>データマート</summary>

- **Google BigQuery**
  - 「出力先データセット」
- **Snowflake**
  - 「ウェアハウス」「出力先データベース」「出力先スキーマ」
</details>

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
