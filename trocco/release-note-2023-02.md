---
articleId: 3f80ad16-c100-4efc-b8fd-e27392d3b4c2
slug: release-note-2023-02
title: リリースノート-2023年02月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2023年02月のリリース情報をお届けします**

---

## マネージド転送設定

![001-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-02-2024-08-29-1-6-0.png){height="" width="500"}

### 転送元Salesforce

#### 転送元Salesforceが新たに追加 🎉
- マネージド転送設定の転送元に、Salesforceが追加されました。
    - 選択したSalesforce接続情報に紐づくオブジェクトに対し、転送設定を一括作成できます。
    - マネージドデータ転送の概要については[マネージドデータ転送について](/docs/about-managed-etl)を、各種設定項目については[マネージド転送設定](/docs/managed-etl-configurations)を、それぞれ参照ください。

### ラベル設定

#### マネージド転送設定作成後のラベル編集が可能に 🎉

- マネージド転送設定作成後にも、ラベルの一括取り付け・取り外しができるようになりました。
    - マネージド転送設定の詳細画面および編集画面、いずれの画面からも一括取り付け・取り外しができます。

## 転送設定

### コネクタ拡充

#### 転送先Google Analytics 4 Measurement Protocolが新たに追加 🎉

![003-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-02-2024-08-29-1-6-1.png){height="" width="500"}

- 転送先Google Analytics 4 Measurement Protocolが新たに追加されました。
   Measurement Protocol (Google Analytics 4) にデータを転送できます。
  - 転送設定作成時に、TROCCO上でカラム名や型をマッピングしていただく必要があります。詳しくは[転送先 - Google Analytics 4 Measurement Protocol](/docs/data-destination-google-analytics4-measurement-protocol)を参照ください。

### 転送元ファイル・ストレージ系コネクタ

#### Microsoft Excelファイルを高速に転送できるように 🎉

- 転送元ファイル・ストレージ系コネクタにて、入力ファイル形式として**Microsoft Excel**ファイルを選択した場合に、**値の取得方法**を選択できるようになりました。
  - **値の取得方法**として**キャッシュ利用**を選択することで、これまでよりも高速に転送されます。
  - **Microsoft Excel**ファイルの転送に対応するコネクタの一覧については、[入力ファイル形式の設定について](/docs/configuration-of-input-files)を参照ください。

![002-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-02-2024-08-29-1-6-2.png){height="" width="500"}

:::(Warning) (キャッシュ利用)
カラム設定の値の取得方法にて**キャッシュ利用**を選択した場合、Microsoft Excelファイルがローカルで保存された時点での値を利用して転送します。
そのため、日付/時刻関数（例：TODAY関数）や乱数生成関数（例：RAND関数）といった都度計算結果が変化する関数は、転送実行時に再計算されません。ご注意ください。

転送実行時にセル内の数式を再計算する必要がある場合は、**転送時再計算**を選択してください。
:::

## ワークフロー定義

### フロー画面

#### タスクの複数選択および一括移動が可能に 🎉

タスクを複数選択して、まとめて移動できるようになりました。

![release-note-2023-02-2024-08-29-1-6-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-02-2024-08-29-1-6-3.gif){height="" width="500"}

## データカタログ

### メタデータインポート

#### メタデータインポート用のテンプレートCSVファイルがダウンロードできるように 🎉

- メタデータインポートに用いるCSVファイルについて、画面上からテンプレートファイルをダウンロードできるようになりました。
  - お使いのデータカタログに合わせて、あらかじめヘッダー行が記載されたCSVファイルをダウンロードできます。
  - 詳しくは、[メタデータインポート](/docs/data-catalog-settings-v1#メタデータインポート)を参照ください。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-02-2024-08-29-1-6-4.png){height="" width="500"}

### UI・UX

#### チュートリアル用ダイアログが表示されるように 🎉

- はじめてTROCCOをお使いのユーザーに、チュートリアル向けのダイアログが表示されるようになりました。
  - ダイアログに沿って3ステップを踏むことで、TROCCOの基本的な機能を理解いただけます。
  - 本ダイアログは「接続情報の作成」「転送設定の作成」「転送ジョブの実行」の3つのステップが完了すると、非表示となります。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-02-2024-08-29-1-6-5.png){height="" width="500"}

#### 各設定内のメモがMarkdown記法に対応 🎉

- 転送設定・データマート定義・ワークフロー定義のメモ欄について、Markdown記法に対応しました。

![006-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-02-2024-08-29-1-6-6.png){height="" width="500"}

### コネクタAPIアップデート

#### 転送元Google Ads

Google Ads APIのバージョンが、v11から**v12**へアップデートされました。
新バージョンについて、[Google Ads API](https://developers.google.com/google-ads/api/docs/release-notes#v12)のドキュメントを参照ください。

---

その他、以下のような改修などが加わっております。

- ワークフロー定義
  - Google BigQueryデータチェックの実行ログに、ジョブIDが表示されるようになりました。
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-02-2024-08-29-1-6-7.png){height="" width="500"}

  - **Google BigQueryのクエリ結果でループ**・**Amazon Redshiftのクエリ結果でループ**にて記述したクエリの実行が失敗した場合に、その旨エラーメッセージが表示されるようになりました。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-02-2024-08-29-1-6-8.png){height="" width="500"}

- Google BigQuery接続情報
  - 認証方式にGoogleアカウント（OAuth）を選択したときに指定するプロジェクトIDについて、選択できるプロジェクト一覧を読み込めるようになりました。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-02-2024-08-29-1-6-9.png){height="" width="500"}

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
