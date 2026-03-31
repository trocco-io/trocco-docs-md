---
articleId: 23b213d5-5320-4318-a8bc-d22d31398558
slug: trocco-quick-start
title: クイックスタート【転送設定編】
parentCategoryId: d078f0d2-a589-4f19-9c2d-927c409f822b
languageCode: ja
---

## TROCCOを体験する

TROCCOは、ETL（データ転送・データ変換）機能を中心に、データ基盤の構築や運用に必要なワークフロー機能などを備えています。
どのように活用できるのかイメージしていただけるように、TROCCOを使い始める前に、簡単に始められる**3つの準備**をご用意しました。
この準備をすることで、スムーズに転送設定を作成し、実際の活用方法をより具体的に把握できます。

### 準備1 解決したい課題を明確にする

現在抱えている課題を洗い出してみましょう。
データを使って解決できる課題は何か、分析するためにはどのようなデータが必要なのか。
たとえば、以下のような課題とゴールが考えられます。
<details>

   <summary>課題とゴールの例</summary>

- 課題例1：営業部門ではSalesforce、カスタマーサポート部門ではkintoneを使用しており、顧客データが分散している。
  - 🏁 ゴール：顧客データを統合し、分析を行える環境を整備する。
- 課題例2：複数の広告媒体を利用しており、広告データの分析業務に工数がかかっている。
  - 🏁 ゴール：広告データの統合を自動化し、マーケット施策のPDCAを改善する。
- 課題例3：売上データと顧客データが異なるシステムに保存されており、統合が困難になっている。
  - 🏁 ゴール: データを統合するパイプラインを構築し、顧客の購買行動を分析してマーケティングや商品開発に活用する。

</details>

### 準備2 課題に関連するデータソースを洗い出す

次に、必要なデータソースを洗い出します。
TROCCOでは、さまざまなサービスからデータを抽出できます。例として以下にいくつかのデータソースを挙げます。

<details>
   <summary>対応するデータ抽出元サービスの例</summary>

- 広告プラットフォーム系
  - Google Ads
  - Facebook広告
  - Yahoo!検索広告
  - Microsoft Advertising
  - TikTok Ads
  - ...
- CRM / MAツール系
  - Salesforce
  - HubSpot
  - ...
- ストレージサービス系
  - Amazon S3
  - Google Drive
  - ...
- 業務アプリケーション系
  - freee会計
  - マネーフォワード クラウド会計
  - Chatwork
  - バクラク
  - ...
- データベース系
  - MySQL
  - Oracle Database
  - ...

</details>

### 準備3 データを集約する先を決める

最後に、分析に使用するデータをためておくサービスを決めます。
TROCCOでは、さまざまなサービスにデータを集約できます。
対応しているサービスを以下にいくつか挙げます。

<details>
   <summary>対応するデータ集約先サービスの例</summary>

- データベース系
  - MySQL
  - PostgreSQL
  - ...
- DWHサービス系
  - Google BigQuery
  - Amazon Redshift
  - Snowflake
  - ...
- クラウドアプリケーション系
  - Salesforce
  - kintone
  - ...
- ファイル・ストレージサービス系
  - Google Spreadsheets
  - Amazon S3
  - ...

</details>

以上で準備が終わりました。次は実際にデータを転送してみましょう。

## データを転送してみる

以下では例として、TROCCOに直接転送対象のファイルをアップロードし、そのファイルをGoogle Spreadsheetsに転送する流れを説明します。
転送元としては**ローカルファイル**、転送先としては**Google Spreadsheets**を利用します。
いずれもかんたんに扱うことができます。

:::(Info) (サンプルデータの提供)

データソースが手元にない、またはすぐに思いつかない方のために、営業活動（商談）データのサンプルを用意しました。
ダウンロードして、後ほど実際にデータ転送をお試しいただけます。

@(Embed)(https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/sample_deals.csv)
:::

1. ダッシュボードの転送設定内「新規追加」をクリックします。
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-54-0.png){height="" width="50%"}
2. 転送元と転送先のサービスを選択します。
  転送元にローカルファイル、転送先にはGoogle Spreadsheetsを選択しました。「この内容で作成」をクリックします。
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-54-1.png){height="" width="50%"}
3. 転送設定は3ステップで設定します。

    <details>
       <summary>STEP1 転送元・転送先の設定</summary>

    1. 「概要設定」
    - 名前：任意の名前を入力してください
    - メモ：空欄でも問題ありません
      - 利用目的や転送設定の内容を記載しておくのがおすすめです。[チーム機能](/docs/about-team)を利用している場合は、他のメンバーが設定の意図を理解しやすくなります。
        ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-54-2.png){height="" width="50%"}
    2. 「転送元 ローカルファイルの設定」
    - ファイル：前述の営業活動（商談）データのサンプルファイルをアップロードします
    - 入力ファイル形式：**CSV/TSV**を選択してください
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-54-3.png){height="" width="50%"}
    3. 「転送先 Google Spreadsheetsの設定」を行う前に、Google Spreadsheetsの接続情報を作成します。「接続情報を追加」をクリックします。
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-54-4.png){height="" width="50%"}
    4. 「Googleアカウントで作成」をクリックします。
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-54-5.png){height="" width="50%"}
    5. 日頃利用しているGoogleアカウントでログインをして、TROCCOからのアクセスを許可します。
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-54-6.png){height="" width="50%"}
    6. 許可していただくと、接続情報作成ページに遷移します。名前に任意の名前を入力し、Googleアカウント欄に利用しているGoogleアカウントのメールアドレスが入力されていることを確認して保存します。
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-54-7.png){height="" width="50%"}
    7. 接続情報で使用したGoogleアカウントで、事前に新しいスプレッドシートを作成します。後ほど赤枠で囲ったURL内の「スプレッドシートID」と「シート名」が必要になります。
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-18-1-54-8.png){height="" width="50%"}
    8. 転送設定の作成ページに戻り、「転送先 Google Spreadsheetsの設定」を行います。
      - Google Spreadsheets接続情報：先ほど作成した接続情報をプルダウンより選択します。
      - スプレッドシートID：先ほど作成したスプレッドシートID
      - シート名：先ほど作成したスプレッドシートのシート名
      - その他の項目はデフォルトの設定のままで問題ありません。
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-18-1-54-9.png){height="" width="50%"}
    9. 「接続を確認」をクリックして、集約先のスプレッドシートにアクセスできることを確認して、「次のステップへ」進みます。
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-55-0.png){height="" width="50%"}

      :::(Warning) (接続確認に失敗した場合)

      指定したスプレッドシートIDが存在しない場合、接続確認を行うとエラーが発生します。
      エラーが発生した場合、スプレッドシートIDに誤りがないか確認してください。
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-18-1-56-0.png){height="" width="50%"}
      :::

    </details>

    <details>
      <summary>STEP2 データプレビュー・詳細設定</summary>

    1. 転送元でアップロードしたサンプルデータを読み込み、データ型やカラム名などのスキーマを自動で識別して、プレビューが作成されます。
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-55-1.png){height="" width="50%"}
    2. 詳細設定のデータ設定タブ内「カラム定義」にて、転送先でのカラム名やデータ型の変更、カラムの削除を行うことができます。
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-55-2.png){height="" width="50%"}
    3. 修正等は行わずに「確認画面へ」に進みます。

    :::(Info) (テンプレートETL)

    STEP2では、プログラミング不要でデータの変換や絞り込みなどが行えます。
    詳しくは、[テンプレートETL](/docs/template-etl)を参照ください。
    :::

    </details>

    <details>
      <summary>STEP3 確認・適用</summary>

    1. STEP1とSTEP2の設定内容をYAML形式で確認することができます。「保存して適用」をクリックします。
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-55-3.png){height="" width="50%"}
    2. モーダルが表示されます。どんな内容の設定を行ったのかメモを残すことができます。何も入力せずに「保存して適用」をクリックします。
      ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-55-4.png){height="" width="50%"}

    以上で、転送設定の作成は完了です。次はジョブを実行して実際に転送してみましょう。
    </details>

4. 右上の「実行」をクリックして、実際に転送を試してみます。
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-55-5.png){height="" width="50%"}
5. 「実行」をクリックします。
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-55-6.png){height="" width="50%"}
6. 転送ジョブの実行が始まります。
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-55-7.png){height="" width="50%"}
7. 問題なく転送が終了するとステータスがSUCCESSになります。
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-16-1-55-8.png){height="" width="50%"}
8. 転送先となっているスプレッドシートにサンプルのデータが転送できました。
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-2025-04-18-1-55-9.png){height="" width="50%"}

転送設定でどのようなことができるのか、イメージはつかめましたでしょうか？
今回は商談データをGoogle Spreadsheetsに転送しましたが、TROCCOを活用してCRMサービスに登録されている顧客データもあわせて転送することで、Google Spreadsheets上で商談後の顧客の行動を分析することも可能になります。

次は、[クイックスタート【ワークフロー編】](/docs/trocco-quick-start-workflow)に進んでみましょう。