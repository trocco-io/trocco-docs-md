---
articleId: f351d7eb-ff58-4afa-81da-ed6c33d7976f
slug: trocco-action-for-snowflake
title: TROCCO ACTION for Snowflake ユーザーマニュアル
parentCategoryId: 1d3e3ca9-ddbb-4f7f-8475-3b431053f159
languageCode: ja
---
## 概要

TROCCO ACTION for Snowflakeは、Snowflake上に保存されているユーザー データをLINEやXといった、主要なメディア広告プラットフォームへ自動的に連携するためのソリューションです。このアプリケーションは、データ連携を合理化して、収益化のための取り組みを最適化し、マーケティングの効率を高めるのに役立ちます。
このマニュアルでは、セットアップから進んだ利用方法まで、TROCCO ACTION for Snowflakeの使用に関する詳細な手順を説明します。 
TROCCO ACTION for SnowflakeはSnowflake Native Applicationを基礎としたアプリケーションで、次のように設計されています（主な機能）:

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-action-for-snowflake-2025-09-30-1-54-0.png){height="" width="50%"}

- シームレスなデータ統合： Snowflakeに構築済みのユーザーデータを広告プラットフォームに簡単に統合できます。特定のテーブルとフィールドを選択したり、データ全体を連携したりして、キャンペーンのニーズに合わせた正確で効率的なデータ転送を実現できます。
- 自動およびスケジュールされた同期： 定期的にデータを自動同期できる機能により継続的な手動でのデータ連携を簡素化し、オペレーションなしでデータを最新の状態に保ちます。さらに、必要に応じて1回限りの統合をしたり、スケジュールされたジョブを一時停止または削除したりする柔軟性も提供します。

## サポート済みの連携先

現在TROCCO ACTION for Snowflakeがサポートしている連携先については次の通りです。

- LINEオーディエンス： Snowflakeに構築済みのLINEユーザーのデータをLINEプラットフォームへ連携し、自動的にカスタムオーディエンスを作成する機能

## TROCCO ACTION for Snowflake のインストール

TROCCO ACTION for Snowflakeは、UI、接続、同期管理を提供します。基本的には、マーケットプレイスの手順にしたがって、Snowflakeマーケットプレイスからリストをインストールします。
TROCCO ACTION for Snowflakeを使用する前に、次の要件を満たしていることを確認してください。

### 要件

#### API アクセストークン - LINE チャネルアクセストークン

- 開発者向けポータルサイトであるLINE Developersから[チャネル アクセス トークン](https://developers.line.biz/ja/docs/basics/channel-access-token/)を取得します。このトークンには、さまざまな開発者向け製品の使用に役立つドキュメントやツールが含まれています。
- このトークンを生成するには、LINE Developersでの手順にしたがってください。

#### データ - User Data with LINE IDs in Snowflake

- Snowflakeデータベースには、有効なLINEユーザー IDフィールドを含むユーザー データが含まれている必要があります。
- IFA(Identifier for Advertisers) も利用可能。

### インストール

1. マーケットプレイスの手順にしたがって、Snowflakeマーケットプレイスからリストをインストールします。
2. TROCCO ACTION for Snowflakeを開き、初期手順を完了してアプリをアクティブ化します：
   1. 必要な権限を付与する
     ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-action-for-snowflake-2025-09-30-1-54-1.png){height="" width="50%"}
   2. 外部アクセス統合を許可する
     ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-action-for-snowflake-2025-09-30-1-54-2.png){height="" width="50%"}
   3. APIトークンを登録する
     ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-action-for-snowflake-2025-09-30-1-54-3.png){height="" width="50%"}
3. 上記のプロセスが完了したらユーザーデータをリファレンスとして入力します
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-action-for-snowflake-2025-09-30-1-54-4.png){height="" width="50%"}
   1. ユーザー データが保存されているテーブルまたはビューを、[権限]タブ＞[オブジェクトへの権限]セクションで設定（追加ボタンをクリック）して、TROCCO ACTION for Snowflakeが参照できるようにします。
   2. TROCCO ACTION for Snowflakeはこれらを参照し、データ連携に使用します。

### インストールのチェック

アプリケーションのインストールが完了したら、アプリケーションを実行してログインします。ログイン後に表示される最初のページは、下の画像のようになります。「アクセス可能なテーブル」と「APIトークン」の2つのセクションが表示されます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-action-for-snowflake-2025-09-30-1-54-5.png){height="" width="50%"}

この画面では、アプリケーションのインストール時に設定した詳細を確認できます。

- アクセス可能なテーブル： データ連携に使用可能なテーブルのリストであり、このアプリケーションが読み取ることができるデータの一覧です。
- APIトークン：「Check Connectivity」ボタン（APIとの通信確認を意味します）を押すことで、LINE Messagingなどの広告プラットフォームが提供するAPIへの接続を確認できます。APIへの接続が正しければ、すぐにデータ連携を開始できます。エラーメッセージが表示される場合は、APIトークンが正しいか有効かを確認してください。

:::(Warning)

これらの設定は、Snowsightのアプリケーションページでのみ変更できます。APIトークンについては、完全に単一のため、複数のタスク スケジュールが作成されても、常にSnowsightのアプリ ページから登録されたトークンが使用されます。
:::

## データ連携を実行する

これでアプリケーションがインストールされました。このセクションでは、データ連携する方法を段階的に説明します。

### LINE オーディエンスを作成する

1. 左側のサイドバー メニューの「Configure Action」に移動します。ここでデータ連携を設定・作成します。
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-action-for-snowflake-2025-09-30-1-54-6.png){height="" width="50%"}
2. 広告プラットフォームに送信するデータベース、スキーマ、テーブル、およびフィールドを選択し、「Preview」をクリックしてデータを確認します。
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-action-for-snowflake-2025-09-30-1-54-7.png){height="" width="50%"}
3. データ テーブルの上にある`[Send]`ボタンをクリックすると、データ テーブルにダイアログが表示されます。
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-action-for-snowflake-2025-09-30-1-54-8.png){height="" width="50%"}
4. 表示されたフォームに次のように入力します。
  - `Title`（必須）:`[0-9-a-zA-Z-_]`で構成されるタイトル
  - `Schedule`（オプション）: cron形式のスケジュール
  - `Activate Scheduling?`（オプション）: チェックすると、スケジュールに基づいて定期的な同期が有効になります
  - `Where would you like to sync?`（必須）: Line Audienceを選択します
  - `Choose create or update`（必須）:「create」を選択します
  - `Name of the audience`（必須）:`[0-9-a-zA-Z-_]`で構成される好きな名前。これはLINE Businessのオーディエンス管理画面に表示されます
  - `Description of the audience`（必須）: オーディエンスの説明文
  - `ifa setting of the audience`（必須）: IFAからカスタムオーディエンスを作成するために使用する場合はTrueを選択します。使用しない場合はFalseに設定します
  - `Upload Description of the audience`（必須）: オーディエンスアップロードの説明文
  - `Which fields to use for integration`（必須）: LINE ID or IFAとして使用するフィールド名を選択します（どのフィールドを使いたいか選択する）

このフォームの完全な例は次の通りです。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-action-for-snowflake-2025-09-30-1-54-9.png){height="" width="50%"}

5. 「Submit」ボタンをクリックします。送信後すぐにデータの同期が開始されるので、LINE BusinessまたはLINE Messaging APIなどでカスタマイズされたオーディエンスが正常に作成されたことを確認します。

### LINE オーディエンスを更新する

データを選択し、タイトルなどの基本情報を入力するところまでは、オーディエンスを作成するときと同じです。既存のオーディエンスを更新するには、次のようにフォームに入力します。

- `Choose create or update`（必須）: "update" を選択する
- `Select audience group`（必須）: 更新したいオーディエンス名を選択する
- `ifa setting of the audience`（必須）: すでに作成されている既存のIFAオーディエンスを更新する場合はTrueを選択します。そうでない場合はFalseに設定します
- `Upload Description of the audience`（必須）: オーディエンスアップロードの説明文
- `Submit`ボタンをクリックします

このフォームの完全な例は次の通りです。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-action-for-snowflake-2025-09-30-1-55-0.png){height="" width="50%"}

### 連携をスケジュールする

同期をスケジュールする場合は、上のフォームでスケジュールを有効にします（`Activate scheduling ?`チェックボックスをクリックします）。フォームに入力した情報が、Snowflakeタスクとしてスケジュールされます。

:::(Warning)

現在、スケジュールのエントリーはCron形式をサポートしていますが、タイムゾーンをサポートしていません。UTCでスケジュールを作成してください。（例： 月曜日の午前9:05に連携したい場合は「5 0 * * MON」）
:::

## スケジュールを管理する

「Scheduled Action」の画面ではスケジュールされたデータ連携の一覧や現在の状態を確認するだけでなく、それらを停止/再開/削除できるため、変化する要件やメンテナンス期間に柔軟に対応できます。以下のサブセクションでは、作成したスケジュールを編集（停止/再開/削除）する方法について説明します。

### スケジュールを停止する

特定のデータ連携スケジュールを一時的に停止したい場合、そのスケジュールを停止できます。

1. `[Scheduled Action]`のページへ移動します。設定したデータ連携スケジュールの一覧がリストされます。
2. 変更する同期を選択し、`[Change?]`フィールドをダブルクリックします（ドロップダウンが表示されます）。
3. `[Change?]`フィールドで、ドロップダウンから`[SUSPEND]`を選択します。
4. 選択したタスクの状態を変更するには、`[Apply]`をクリックします。

以下は、同期を一時停止する方法の完全な例です。上記の手順を完了したら、表の右上にある更新ボタンをクリックして状態を確認できます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/trocco-action-for-snowflake-2025-09-30-1-55-1.png){height="" width="50%"}

:::(Warning)

複数のデータ連携スケジュールを最大5件まで一括して更新も可能です。 
:::

### スケジュールを削除する

スケジュールが不要になった場合、そのスケジュールを削除できます。

1. `[Scheduled Action]`のページへ移動します。
2. 変更する同期を選択し、`[Change?]`フィールドをダブルクリックします（ドロップダウンが表示されます）。
3. `[Change?]`フィールドで、ドロップダウンから`[DROP]`を選択します。
4. 選択したタスクの状態を変更するには、`[Apply]`をクリックします。

### スケジュールを再開する

Suspend状態のスケジュールを再開できます。

1. `[Scheduled Action]`のページへ移動します。
2. 変更する同期を選択し、`[Change?]`フィールドをダブルクリックします（ドロップダウンが表示されます）。
3. `[Change?]`フィールドで、ドロップダウンから`[RESUME]`を選択します。
4. 選択したタスクの状態を変更するには、`[Apply]`をクリックします。

## ベストプラクティス

- テスト ファースト： 定期的なジョブをスケジュールする前に、アドホック ジョブを使用してマッピングを検証します。
- データの最小化： 必要なフィールドのみを選択して、データ転送コストと処理時間を削減します。

## その他・注意事項など

- `[Create]`を選択してデータ連携をスケジューリングした場合、設定したオーディエンス名（およびその他の設定）でオーディエンスが都度新しく作成されます。たとえば`[campaign_1]`という名前で毎日午前9:00の実行をスケジューリングした場合、毎日9:00すぎに`[campaign_1]`という名前でオーディエンスが作成され続けます。そのため、定期的な実行をされる場合は、一度スケジュールをせずにワンショットでオーディエンスを作成後、そのオーディエンスを更新し続けるスケジュールを設定してください。
- このアプリケーションで使用したいテーブルをSnowsightなどで変更した場合、`[Configure]`ページにて利用可能なテーブルのリストをリフレッシュし、変更した内容が利用可能であることを確認してください。
- 既存のタイトル名を使って新しくデータ連携を作成する際、既存のスケジュールや設定（オーディエンス名など）は新しいものに上書きされます。そのため、既存の設定内容を変更したい場合は既存のタイトル名を使って新しくデータ連携の設定をしてください。たとえば、すでにline_audience_syncという名前のスケジュールがあり、新しくline_audience_syncという名前でフォームからデータ連携の設定をした場合、スケジュール・オーディエンス名・IFAの設定など既存の設定はすべて新しいものに上書きされます。
- スケジュールされたデータ連携（タスク）がエラーになった場合に通知をする機能はありません。ログなどを添付し、お問い合わせください。

## トラブルシューティング

| 問題 | 考えられる原因 | 解決方法 |
| ---- | -------------- | -------- |
| LINE 連携が失敗する | チャネルアクセストークンが間違っている | トークンを再作成する、または正しいトークンを取得し設定を反映する |
| データ連携が正常に完了しない | フィールドマッピングに誤りがある | マッピングが正しいか確認して修正する |
| アクセス可能なテーブルが更新されていません | アクセス可能なテーブルはキャッシュされUIに使用されます | [General] ページに移動し、アクセス可能なテーブルを再読み込み（更新）します |
| スケジュールされたジョブがスケジュール通り実行されていません | ジョブが一時停止されているか、スケジュールの設定が間違っています | ジョブを再度有効にして設定を確認します |
| LINEオーディエンスのデータの不一致 | LINE IDが見つからないか間違っている | テーブルに正確な LINE ID が含まれていることを確認してください。 |
