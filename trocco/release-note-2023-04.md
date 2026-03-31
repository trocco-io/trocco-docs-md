---
articleId: 2096fe47-d8ef-45bd-a6b7-627a383bbad0
slug: release-note-2023-04
title: リリースノート-2023年04月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2023年04月のリリース情報をお届けします**

---

## 転送設定

### 転送先Twitter Ads Webコンバージョンが新たに追加 🎉
転送設定作成時に、TROCCO上でカラム名や型をマッピングしていただく必要があります。
詳しくは[転送先 - Twitter Ads Webコンバージョン](/docs/data-destination-twitter-ads-web-conversion)を参照ください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-04-2024-08-29-0-46-0.png){height="" width="600"}

### 転送先Yahoo!広告ディスプレイ広告コンバージョン計測API(β版)が新たに追加 🎉
転送設定作成時に、TROCCO上でカラム名や型をマッピングしていただく必要があります。
詳しくは[転送先 - Yahoo!広告ディスプレイ広告コンバージョン計測API(β版)](/docs/data-destination-yahoo-display-ads-conversion-api)を参照ください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-04-2024-08-29-0-46-1.png){height="" width="600"}

### 転送元Snowflake・転送先Snowflakeの入力項目の一覧読み込み
転送元・転送先いずれのSnowflake転送設定STEP1にて、上位項目の入力値に応じて下位項目で入力できる値一覧の読み込みができるようになりました。
「スキーマ」以外の入力値を変更した場合、直下の項目の一覧読み込みが自動で開始されます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-04-2024-08-29-0-46-2.png){height="" width="600"}


### 転送先Zendesk Supportのページサイズ指定
転送先Zendesk Support転送設定の「ページサイズ」で、1度のリクエストで取得できる件数が指定できるようになりました。
転送時にレスポンスが遅かったりタイムアウトで失敗したりする場合に件数を減らす対応が可能になります。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-04-2024-08-29-0-46-3.png){height="" width="600"}

### 転送先Salesforceで柔軟なエラーハンドリングが可能に
転送先Salesforce転送で送信できなかったレコードが発生した際に、転送ステータスをErrorとできるようになりました。
本リリース前に作成された転送設定には「Succeededにする」が設定されています。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-04-2024-08-29-0-46-4.png){height="" width="600"}

## 接続情報

### Box接続情報でOAuth 2.0認証が可能に
Box接続情報の認証方式が「JWT認証」に加えて「OAuth 2.0認証」にも対応しました。
JWT認証よりもさらに簡単にBox接続情報を作成いただけます。
ただし、OAuth 2.0認証を用いたBox接続情報が利用できるのは、転送元Boxの転送設定のみとなります。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-04-2024-08-29-0-46-5.png){height="" width="600"}

## UI・UX

### サイドバーのユーザビリティ改善
画面左に表示されるサイドバーの階層構造・項目順序を変更しました。
複数ページが存在する機能は項目ごとのまとまりで折りたたみができるようになり、表示中のページの項目は折りたたみが展開されます。
![sidebar.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-04-2024-08-29-0-46-6.png){height="" width="600"}

## dbt連携

### 正式版がリリース 🎉
β版のオプション機能として提供していた**dbt連携機能**を正式版として公開しました。
これにより窓口担当にお問い合わせいただくことなく本機能をお使いいただけます。
詳しくは[dbt連携について](/docs/about-dbt-integration)を参照ください。

### dbtジョブ設定で「ターゲット」と「ロケーション」を指定できるように

#### 「ターゲット」指定
dbtジョブ設定でターゲットを指定できるようになりました。
未指定の場合や本リリース前のdbtジョブ設定には「trocco_default」が指定されます。

#### 「ロケーション」指定
BigQueryを選択したdbt Gitリポジトリをアダプターとしたdbtジョブ設定で、ロケーションを任意で指定できるようになりました。
指定されたロケーションで出力先のデータセットが作成されます。
※ロケーションを入力しなかった場合、指定したデータセットが出力先に存在しなかったときは、US（マルチリージョン）がデータセットのロケーションに指定されます。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-04-2024-08-29-0-46-7.png){height="" width="600"}

## ワークフロー

### ワークフロータスクの情報拡充

ワークフローの詳細画面でタスクをクリックしたときに、作成者名も表示されるようになりました。
閲覧権限がないタスクについての問い合わせ先としてお役立てください。

|閲覧権限あり|閲覧権限なし|
|----|----|
|![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-04-2024-08-29-0-46-8.png)|![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-04-2024-08-29-0-46-9.png)|

### ワークフロータスクのカスタム変数ループ実行フォームの操作性向上

ワークフローのタスクでカスタム変数ループ実行する際に表示されるフォームのレイアウトを見直しました。
ループの種類で「文字列展開でループ」を選択した際のループ追加やループ削除をする際の操作性が向上しました。

|文字列展開でループ|期間(相対指定)でループ|
|----|----|
|![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-04-2024-08-29-0-46-10.png)|![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-04-2024-08-29-0-46-11.png)|

---

その他、以下のような改修などが加わっております。

- DWH系サービスの各種入力項目に、カスタム変数を埋め込めるように
  - 転送設定
    - 転送元Google BigQueryの「データエクスポート先Google Cloud Storage URI」
    - 転送先Snowflakeの各種項目
    - 転送先Amazon RedShiftの各種項目
  - データマート
    - Amazon RedShiftの各種項目

**DWHサービスでカスタム変数を設定いただくと、ワークフローの[カスタム変数ループ実行](/docs/loop-using-custom-variables)で柔軟なループ処理が可能になります。**

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
