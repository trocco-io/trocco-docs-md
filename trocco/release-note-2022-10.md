---
articleId: b941056d-adc6-4be9-a750-23d370ae2074
slug: release-note-2022-10
title: リリースノート-2022年10月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2022年10月のリリース情報をお届けします**
* * * 
## データカタログ
#### メタデータCSVインポートに対応🎉
基本メタデータの値を、CSVファイルを用いてインポートできるようになりました🎉
以下では、簡単にインポート手順をご紹介します。
CSVファイルのフォーマットや利用上の制約など、詳しくは[メタデータインポート](/docs/data-catalog-settings-v1#メタデータインポート)を参照ください。

1. フォーマットに沿ったCSVファイルを用意します。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-10-2024-08-29-13-53-0.png){height="" width="500"}

2. データカタログ設定＞メタデータインポートを順にクリックします。

3. インポート対象を選択し、CSVファイルをアップロード・インポートを実行します。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-10-2024-08-29-13-53-1.png){height="" width="500"}

4. インポートに成功すると、以下のように基本メタデータの値が上書きされます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-10-2024-08-29-13-53-2.png){height="" width="500"}


#### 要約統計情報表示の強化
日付・時刻に関する型の最小値・最大値を表示するようになりました。
なお、要約統計情報は、テーブル情報の「カラム情報」や「プレビュー」などで確認できます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-10-2024-08-29-13-53-3.png){height="" width="500"}


## 接続情報
#### Oracle Autonomous Databaseへの接続に対応
Oracle Database接続情報の「接続方法」にて、**tnsnames.oraファイルを使用する**を選択したときに、ウォレットファイルをアップロードできるようになりました。
ウォレットファイルをアップロードすることで、Oracle Autonomous Databaseへの接続が可能となります。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-10-2024-08-29-13-53-4.png){height="" width="500"}



## 転送設定
#### 転送先BigQuery テーブル分割パーティション機能の強化🎉
転送先Google BigQueryの転送設定STEP2「出力オプション」にて、テーブル分割パーティションの基準となる時間単位を**より細かく**設定できるようになりました。

* 今回の変更で、テーブル分割の時間単位を**4種類（時間・日・月・年）** から選べるようになりました。
* **取り込み時間により分割**・**時間単位の列により分割**、いずれの分割方式においても、上記4種類の時間単位でのテーブル分割に対応しています。

テーブルを細かく分割することで、クエリ実行のパフォーマンス向上ならびにクエリ実行コストの削減が可能となります。
分割テーブルについて、詳しくは[分割テーブルの概要](https://cloud.google.com/bigquery/docs/partitioned-tables)を参照ください。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-10-2024-08-29-13-53-5.png){height="" width="500"}

## ワークフロー
#### Amazon Redshiftのクエリを利用したループ実行に対応🎉
* ワークフロー上のタスクのループ実行を、Amazon Redshiftのクエリ結果に基づいて行えるようになりました。
    * ループ実行におけるカスタム変数の展開値を、Amazon Redshiftのクエリ結果に基づいて設定できます。
    * カスタム変数の展開値が実行のたびに変動するようなワークフローを定義できるようになります。

なお、以下で簡単にループ実行の設定手順をご紹介します。
1. ワークフロー定義のフロー編集画面で、ループ実行したいタスク上のボタンを以下のようにクリックします。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-10-2024-08-29-13-53-6.png){height="" width="500"}

2. **カスタム変数でループ実行**を有効化し、ループの種類にて**Amazon Redshiftのクエリ結果でループ**を選択します。
![release-note-2022-10-2024-08-29-13-53-7](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-10-2024-08-29-13-53-7.png){height="" width="500"}

3. **対象カスタム変数**にて、任意のカスタム変数を指定します。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-10-2024-08-29-13-53-8.png){height="" width="500"}

4. 各種項目を入力し、保存をクリックします。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-10-2024-08-29-13-53-9.png){height="" width="500"}


* * * 
**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**