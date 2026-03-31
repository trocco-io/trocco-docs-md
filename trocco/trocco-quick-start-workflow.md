---
articleId: 1970648c-96eb-4088-a4b8-26b6679000d7
slug: trocco-quick-start-workflow
title: クイックスタート【ワークフロー編】
parentCategoryId: d078f0d2-a589-4f19-9c2d-927c409f822b
languageCode: ja
---

## はじめに

[クイックスタート【転送設定編】](/docs/trocco-quick-start)では、転送設定を作成し、データを取得・転送するまでの基本的な流れを確認しました。  
この時点で、データは取得できていますが、実運用では次のような場面に直面することがあります。
- 複数の転送設定をスケジュール実行しているが、ジョブ遅延などにより想定した順序で実行されない
- データを転送後に、実行したい加工処理やデータ転送がある

こうした処理の順序や依存関係を管理するための機能が、ワークフロー機能です。  
ワークフローを利用することで、依存関係のある複数の転送設定やデータマート定義を、定義した順序に従って自動実行できます。  
個々の設定を手動で実行する必要はなく、一連の処理をひとつのフローとして管理できます。

まずはワークフローを作成する前段階として、ワークフローを利用することで、どのようなことが実現できるのかを確認しましょう。

## ワークフローを利用することで実現できること

### ① 複数の転送設定・データマート定義を順番に実行できる

ワークフローでは、依存関係のある複数の処理を、定義した順序通りに実行できます。

例えば、次のような処理を1つのワークフローとしてまとめられます。  

1. S3に保管されているログデータを取得、保存  
2. 保存したログデータを加工

これにより、前の処理が完了してから次の処理を実行する流れを、意識することなく安全に実行できます。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-01-29-18-49-01.png)

### ② 複数の広告アカウントのデータ取得を、まとめて実行できる

広告系コネクタで複数アカウントのレポートを取得する場合、アカウントごとに転送設定を作成すると管理工数が増えてしまいます。

ワークフローを利用すると、1つの転送設定に変数としてアカウントIDを埋め込み、複数アカウント分のレポート取得をまとめて実行できます。（カスタム変数ループ実行）

これにより、転送設定の数を増やさずに、効率的な運用が可能になります。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-01-29-18-49-24.png)

### ③ 実行結果に応じて、次に実行する処理を制御できる

ワークフローでは、ジョブの実行結果や転送されたレコード数に応じて、後続の処理を制御できます。（条件分岐）

例えば、転送されたレコード数が0件の場合は、後続のデータマート定義は実行されません。
レコードが転送された場合のみ、次の処理が実行されます。

これにより、不要な処理を省きながら、状況に応じた実行フローを構築できます。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-01-29-18-50-13.png)

## 本クイックスタートのゴール（所要時間：15分）

このクイックスタートを通して、「複雑な業務フロー全体を自動化する」という実務で役立つワークフローの構築スキルが身につきます。

Google Driveにアップロードされている3つのファイルのデータを、Googleスプレッドシートに転送します。  
また、転送したレコードがあった場合は、別の転送ジョブを実行します。条件分岐の後の処理に、[クイックスタート【転送設定編】](/docs/trocco-quick-start)で作成した転送設定を利用しますので、あらかじめ作成をお願いいたします。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-01-29-18-50-33.png)

### STEP1：転送設定を作成する

以下では例として、Google Driveにある3つのファイルを1つの転送設定で順番に転送するための設定を説明します。  
転送元としてはGoogle Drive、転送先としてはGoogle Spreadsheetsを利用します。

:::(Info) (サンプルデータの提供)

キャンペーンデータのサンプルを用意しました。3つのファイル全てダウンロードいただき、Google Driveにアップロードいただくことで、後述のデータ転送をお試しいただけます。

- [sample_campaign_crm.csv](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/sample_campaign_crm.csv)
- [sample_campaign_ads.csv](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/sample_campaign_ads.csv)
- [sample_campaign_events.csv](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/sample_campaign_events.csv)

:::

<details>

   <summary>転送設定</summary>

1. Google Driveにフォルダを作成し、サンプルデータの3つのファイルをアップロードします。  
画像の赤枠部分（フォルダID）は、転送設定に必要となります。
![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-02-02-08-37-20.png)

2. 転送設定STEP1の「転送元 Google Driveの設定」では、以下を設定します。
    - カスタム変数：
        - 変数名：`$file_name$`
        - データ型：文字列
        - 値：campaign_crm （※Google Driveにアップロードしたファイル名）
        ![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-02-02-08-37-44.png)
    - フォルダID：サンプルデータをアップロードしたフォルダのID
    - ファイル名の正規表現：`$file_name$.csv`
    ![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-02-02-08-38-14.png)
    - 入力ファイル形式：CSV/TSV
        - CSV/TSV入力設定：ヘッダー行を含むCSV/TSVファイル
        ![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-02-02-08-38-33.png)
3. 転送設定STEP1の「転送先 Google Spreadsheetsの設定」を設定します。
    - シート名：新規シートを設定（例：sample_campaign）  
    ※ クイックスタート【転送設定編】の転送設定で指定したシート名とは異なるシートを設定
    - 転送モード：追記 (APPEND)  
    ※ ループ実行で3つのファイルからデータを転送し、「追記」によって同じシートへデータを追加していきます。転送先のシート名にカスタム変数を埋め込むことで、キャンペーンデータごとに別のシートに転送もできます。

</details>

ここまでで、転送設定の準備が整いました。3つのファイルのデータを転送するには、さらにワークフローの設定が必要となります。  
続いて、ワークフローを作成してみましょう。

### STEP2：ワークフローを作成する

以下の例では、転送設定に埋め込んだカスタム変数に対して複数の値を展開させる設定（[カスタム変数ループ実行](/docs/loop-using-custom-variables)）と、転送したレコード数に応じて後続の処理を分岐する設定（[条件分岐](/docs/conditional-branch-task)）を説明します。

1. ダッシュボードのワークフロー定義内の「新規追加」をクリックします。
2. 「ジョブ実行設定」はデフォルトの設定のままとして、「保存」をクリックします。

    :::(Info) (ジョブ実行設定)

    並列するタスクの同時実行上限数などの設定が行えます。  
    詳しくは、[ワークフロー全体設定](/docs/about-workflow#ワークフロー全体設定)をご確認ください。

    :::

3. フロー編集の画面に遷移します。  
   ここでは、転送設定や条件分岐といったタスクを配置し、処理の流れを作っていきます。
   ![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-01-29-18-51-15.png)

    <details>

    <summary>ループ処理の設定</summary>

    1. タスク追加にある「TROCCO転送ジョブ」をクリックします。
    2. STEP1で作成した、Google DriveからGoogle Spreadsheetsへの転送設定を選択し、「追加」をクリックします。
    ![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-02-02-08-39-06.png)
    3. 追加したタスクは、STARTから線がつながっている状態になります。
    ![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-02-02-08-39-25.png)
    4. タスクを選択し、「編集」をクリックします。
    ![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-02-02-08-39-36.png)
    5. 「カスタム変数でループ実行」にチェックを入れ、以下を設定して「保存」をクリックします。
        - ループの種類：文字列展開でループ
        - 対象カスタム変数：`$file_name$`
        - 「ループを追加」をクリックして、Google Driveにアップロードしたファイル名を設定
            - sample_campaign_crm
            - sample_campaign_ads
            - sample_campaign_events
            ![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-02-02-08-39-50.png)
    6. ループ実行が設定されているタスクは、左上に実行回数が表示されます。
    ![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-02-02-08-40-04.png)

    </details>

    <details>

    <summary>条件分岐の設定</summary>

    1. タスク追加にある「条件分岐」を追加します。
    2. 先に追加した転送ジョブタスクから条件分岐タスクをつなげます。
    ![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-02-02-08-40-19.png)
    3.  条件分岐タスクの編集画面を開き、「条件を追加する」をクリックし、以下の条件式を設定して「保存」をクリックします。
        - 対象：STEP1で作成した転送ジョブタスクを選択
        - プロパティ：転送件数
        - 演算子：以上 (≥)
        - 値：1  
        ※ 分岐する条件にあわせてタスクの名前を修正すると、フローの画面でタスクの処理が分かりやすくなります。
        ![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-02-02-08-40-31.png)
    4. 条件に一致した場合にのみ実行する転送ジョブタスクとして、クイックスタート【転送設定編】で作成した転送ジョブタスクをつなげます。
    ![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-02-02-08-41-04.png)
    5. 「保存」をクリックしてワークフローを保存します。  
    これで、ワークフローの設定は完了です。

    </details>

4. 続けて、右上の「実行」をクリックして、実際に転送を試してみます。
![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-01-29-18-51-57.png)

5. カスタム変数展開方法はデフォルト（現在時刻を基準に展開）のまま「実行」をクリックします。
![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-01-29-18-52-13.png)

6. 問題なくワークフローが終了するとステータスがSUCCESSになり、ワークフロー実行ログでは、各タスクのステータスを確認できます。  
条件分岐は転送レコードが1件以上あったため、後続のタスクが実行されました。
![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-quick-start-workflow-2026-01-29-18-52-27.png)

ワークフロー機能で実現できることのイメージは掴めましたでしょうか。  
本クイックスタートでは、ワークフローの「カスタム変数ループ実行」を用いた転送設定の繰り返し処理や、「条件分岐」を活用することで転送レコード数や実行日時などによって後続タスクの実行を制御できることをご紹介しました。  
ワークフローは、データ連携や分析処理の要件に応じて柔軟にご活用いただけます。
具体的な実運用のイメージを膨らませるには、[ワークフローテンプレート](https://help.trocco.io/hc/ja/sections/5154911535134)もぜひチェックしてみてください。

活用方法のご相談もうけたまわっておりますので、もし設定でお困りの際は、[TROCCOヘルプセンター](https://help.trocco.io/hc/ja)までお気軽にお問い合わせください。