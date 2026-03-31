---
articleId: 465c343e-fa53-446d-8909-156aa8c15698
slug: release-note-2022-08
title: リリースノート-2022年08月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2022年08月のリリース情報をお届けします**
* * * 
## データカタログ
#### 基本メタデータをカラム情報画面に表示
基本メタデータ項目「論理名」および「説明」について、カラム一覧に表示するかどうかを選択できるようになりました。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-0.png){height="" width="500"}

上記は「データカタログ設定」の「TROCCO基本メタデータ設定」から設定できます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-1.png){height="" width="500"}


#### クエリ実行結果をCSVでダウンロード
クエリエディタにて、クエリの実行結果をCSV形式でダウンロードできるようになりました。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-2.png){height="" width="500"}

:::(Warning) (クエリ実行結果のダウンロードファイルサイズ制限)
ダウンロードできるCSVファイルのファイルサイズは最大10MBです。
ファイルサイズ上限を超えた行は切り捨てられます。
:::


#### Markdownエディタでメタデータを編集
基本メタデータの「説明」欄、およびユーザー定義メタデータの任意のフィールド値をMarkdownエディタで編集できるようになりました。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-3.png){height="" width="500"}

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-4.png){height="" width="500"}

ユーザー定義メタデータのフィールドについては、「データカタログ設定」の「ユーザー定義メタデータ用テンプレート」から設定できます。
Markdownエディタを利用したいフィールドについて、データ型に**Text(Markdown)** を指定してください。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-5.png){height="" width="500"}

#### Docs公開
データカタログについてのDocsが公開されました。
詳しくは、[データカタログについて](/docs/about-data-catalog-v1)を参照ください。


## dbt連携
**dbt連携機能がリリースされました**🎉

* OSS版dbtの実行環境と、GitHub連携を提供しています。
* ETLからデータモデリングの流れを、TROCCOワークフロー機能上に定義できます。
* 2022年8月末現在、dbt Gitリポジトリのアダプターとしては、以下の3つに対応しています。
    * Google BigQuery
    * Snowflake
    * Amazon Redshift
* 今後のリリース予定等、詳しくは[プレスリリース](https://prtimes.jp/main/html/rd/p/000000046.000039164.html)を参照ください。


## マネージドデータ転送
**マネージドデータ転送機能がリリースされました**🎉

マネージドデータ転送は、既存の一括登録機能を発展させた機能です。
**データソース側のテーブルを一括インポート**することに加え、データソース側の**テーブルの増減を自動検知**してSlackに通知したり、**ワークフロー機能上でかんたんに転送ジョブの一括実行が行える**ようになりました。

:::(Warning) (マネージドデータ転送の対応コネクタ)
2022年8月末現在、転送元MySQL、転送先Google BigQueryにのみ対応しています。
:::

### マネージド転送設定の追加
#### テーブル増減を自動で検知できる
STEP3「テーブル増減検知結果の通知・ラベル一括設定」で、テーブル増減検知結果の通知の設定ができます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-6.png){height="" width="500"}


### マネージド転送設定一覧
先に追加したマネージド転送設定の一覧を確認できます。
各マネージド転送設定の詳細画面だけでなく、各マネージド転送設定配下にある個別の転送設定の詳細画面にもワンクリックで移動できます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-7.png){height="" width="500"}

### マネージド転送設定詳細画面
該当のマネージド転送設定に対して、手動でテーブルを追加したり、配下の転送設定を個別に削除したりできます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-8.png){height="" width="500"}

また、テーブルの増減が検知されたときは、ダイアログが表示されます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-9.png){height="" width="500"}


### ワークフロー定義
#### マネージド転送設定配下の転送ジョブを一括実行できる
ワークフロー定義のフロー編集に追加できるタスクとして、「TROCCOマネージド転送設定」が追加されました。
これにより、各マネージド転送設定配下の転送設定のジョブを一括で実行できるようになりました。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-10.png){height="" width="500"}

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-11.png){height="" width="500"}

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-12.png){height="" width="500"}

## 転送設定
#### 転送先にHubSpotが追加🎉
contactオブジェクトに対して、mergeを実行できます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-13.png){height="" width="500"}


#### 転送元にTROCCOが追加🎉
TROCCOのデータカタログで保持している、「ユーザー定義メタデータ」および「カラム参照一覧」に関するデータを転送できます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-14.png){height="" width="500"}


#### 転送元Marketoのターゲットにて、フォルダーに対応
転送元Marketoでフォルダーのデータを取得できるようになりました。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-15.png){height="" width="500"}


#### カスタム変数に対応する機能が追加🎉
以下の機能にて、カスタム変数に対応しました。
* 転送設定 STEP2「データプレビュー・詳細設定」のフィルター設定における、フィルター値
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-16.png){height="" width="500"}

* 転送元HTTP (S)の「HTTPヘッダ」における、キーおよび値
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-17.png){height="" width="500"}



## UI・UX
### 転送設定一覧
#### 絞り込み項目に「作成者」を追加
一覧表示する転送設定を、「作成者」によって絞り込むことができるようになりました。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-18.png){height="" width="500"}

#### 絞り込み項目「名前(部分一致)」がAND検索に対応
スペースで区切って入力することで、AND検索できるようになりました。
* 1つの単語で検索した場合
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-19.png){height="" width="500"}
* 2つの単語でAND検索をした場合
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-20.png){height="" width="500"}

#### 選択した転送設定に一括でラベルを追加可能に
下の画面内で説明した順番にボタンをクリックすることで、ラベル一括追加画面が表示されます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-21.png){height="" width="500"}

お好きなラベルを選択し、追加をクリックしてください。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-22.png){height="" width="500"}


### アカウント・ユーザー画面
#### 各ユーザーの認証方式を表示
2段階認証およびSAML認証がそれぞれ有効かどうかをご確認いただけます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-08-2024-08-29-15-4-23.png){height="" width="500"}


* * * 
その他、以下のような改修などが加わっております。
* 転送元Twitter Adsでレポート種別にline_itemを選択したとき、転送内容にcampaign_idを含めるようになりました。
* * * 


**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**

