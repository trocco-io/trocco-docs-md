---
articleId: 72d06c34-978a-4190-9514-842ec970577a
slug: data-source-trocco
title: 転送元 - TROCCO
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
TROCCOで保持しているデータを転送する設定のDocsです。
転送元TROCCOでは、**転送設定**・**データマート定義**・**ワークフロー定義**・**ワークフロータスクジョブ**の過去に実行されたジョブに関する履歴データを転送できます。

## 制約

:::(Warning) (ジョブ実行履歴を取得できる期間)

ジョブ実行履歴を転送する日時を起点に、最大で**過去1年前**までに実行されたジョブの履歴データを転送できます。
それ以前に実行されたジョブの履歴データは、転送できません。
:::

## 設定項目

### STEP1 基本設定

|項目名|必須|内容|
|---|---|---|
|対象|Yes|転送する対象を以下から選択します。<ul><li>転送設定</li><li>データマート定義</li><li>ワークフロー定義</li><li>ワークフロータスクジョブ</li></ul>|
|データタイプ|Yes|転送するデータタイプとして**ジョブ実行履歴**を選択します。|
|データ取得期間|Yes|転送したいデータの開始日時と終了日時を入力します。<br>`YYYY-MM-DD`または`YYYY-MM-DD HH:mm:ss`形式で入力してください。<br>`HH:mm:ss`を指定しなかった場合、`00:00:00`が代わりに指定されます。|
|タイムゾーン|Yes|データ取得期間のタイムゾーンを選択します。|
|実行ログ出力設定|No|実行ログ出力の有効・無効を選択します。<br>有効にした場合、転送項目に実行ログが追加されます。<br>ワークフロー定義を選択した場合は実行ログは出力できません。|

:::(Warning) (出力できる実行ログの期間)

実行ログ出力設定を有効にした場合に出力できるのは、以下の日付以降のログとなります。

- 転送設定：2025年4月10日
- データマート定義：2025年3月10日
- ワークフロータスクジョブ：2025年3月3日

:::

:::(Info) (データ取得期間の基準)

データ取得期間は、各ジョブの実行日時（`created_at`）を基準とします。
したがって、`created_at`の値がデータ取得期間内にあるジョブの履歴データが転送対象となります。
:::

:::(Info) (実行ログ出力を有効にした際に転送できるデータの期間)

実行ログ出力を有効にした場合、転送できるデータは最大90日となります。
データ取得期間に90日より大きい範囲を指定した場合、終了日時を起点として90日に自動的に制限されます。

:::

## 転送項目

以下は、各対象で転送される項目の一覧です。

### 転送設定

#### ジョブ実行履歴

過去に実行された転送ジョブに関する履歴データを転送します。

|カラム名|型|説明|
|--|--|--|
|`job_id`|`long`|転送ジョブID|
|`job_url`|`string`|転送ジョブURL|
|`job_definition_id`|`long`|ジョブの元となった転送設定ID|
|`job_definition_url`|`string`|ジョブの元となった転送設定URL|
|`job_definition_name`|`string`|ジョブの元となった転送設定名|
|`executor_type`|`string`|転送ジョブの実行方法<ul><li>`manual`：手動実行</li><li>`scheduler`：スケジュール実行</li><li>`workflow`：ワークフローのタスクとして実行</li><li>`api`：APIによる実行</li><li>`job_dependency`：トリガージョブによる実行</li></ul>|
|`status`|`string`|転送ジョブのステータス<ul><li>`queued`：実行待ち</li><li>`setting_up`：実行準備中</li><li>`executing`：実行中</li><li>`interrupting`：実行中断中</li><li>`succeeded`：実行完了（成功）</li><li>`error`：実行完了（エラー）</li><li>`canceled`：実行完了（キャンセル）</li><li>`skipped`：実行完了（スキップ）</li>|
|`transfer_records`|`long`|転送されたレコード数|
|`transfer_bytes`|`long` \| `null`|転送サイズ（バイト）|
|`skipped_records`|`long` \| `null`|スキップされたレコード数|
|`stdout`|`string`|ジョブの標準出力（実行ログ出力が有効な場合のみ）|
|`stderr`|`string`|ジョブのエラー出力（実行ログ出力が有効な場合のみ）|
|`started_at`|`timestamp` \| `null`|転送ジョブの開始日時（`%Y-%m-%d %H:%M:%S %Z`）|
|`finished_at`|`timestamp` \| `null`|転送ジョブの終了日時（`%Y-%m-%d %H:%M:%S %Z`）|
|`created_at`|`timestamp`|転送ジョブの実行日時（`%Y-%m-%d %H:%M:%S %Z`）|

### データマート定義

#### ジョブ実行履歴

過去に実行されたデータマートジョブに関する履歴データを転送します。

|カラム名|型|説明|
|--|--|--|
|`datamart_job_id`|`long`|データマートジョブID|
|`datamart_job_url`|`string`|データマートジョブURL|
|`datamart_definition_id`|`long`|ジョブの元となったデータマート定義ID|
|`datamart_definition_url`|`string`|ジョブの元となったデータマート定義URL|
|`datamart_definition_name`|`string`|ジョブの元となったデータマート定義名|
|`executor_type`|`string`|データマートジョブの実行方法<ul><li>`manual`：手動実行</li><li>`scheduler`：スケジュール実行</li><li>`workflow`：ワークフローのタスクとして実行</li><li>`job_dependency`：トリガージョブによる実行</li></ul>|
|`status`|`string`|データマートジョブのステータス<ul><li>`queued`：実行待ち</li><li>`setting_up`：実行準備中</li><li>`executing`：実行中</li><li>`interrupting`：実行中断中</li><li>`succeeded`：実行完了（成功）</li><li>`error`：実行完了（エラー）</li><li>`canceled`：実行完了（キャンセル）</li><li>`skipped`：実行完了（スキップ）</li></ul>|
|`transfer_records`|`long`|転送されたレコード数|
|`log`|`string`|実行ログ（実行ログ出力が有効な場合のみ）|
|`started_at`|`timestamp` \| `null`|データマートジョブの開始日時（`%Y-%m-%d %H:%M:%S %Z`）|
|`finished_at`|`timestamp` \| `null`|データマートジョブの終了日時（`%Y-%m-%d %H:%M:%S %Z`）|
|`created_at`|`timestamp`|データマートジョブの実行日時（`%Y-%m-%d %H:%M:%S %Z`）|

### ワークフロー定義

#### ジョブ実行履歴

過去に実行されたワークフロージョブに関する履歴データを転送します。

|カラム名|型|説明|
|--|--|--|
|`pipeline_job_item_id`|`long`|ワークフロージョブIDに紐づくユニークID|
|`pipeline_job_id`|`long`|ワークフロージョブID|
|`pipeline_job_url`|`string`|ワークフロージョブURL|
|`pipeline_definition_id`|`long`|ワークフロージョブの元となったワークフロー定義ID|
|`pipeline_definition_url`|`string`|ワークフロージョブの元となったワークフロー定義URL|
|`pipeline_definition_name`|`string`|ワークフロージョブの元となったワークフロー定義名|
|`executor_type`|`string`|ワークフロージョブの実行方法<ul><li>`manual`：手動実行</li><li>`scheduler`：スケジュール実行</li><li>`workflow`：ワークフローのタスクとして実行</li><li>`api`：APIによる実行</li><li>`retry`：リトライ実行（停止位置から再実行、またはリトライ設定による再実行）</li></ul>|
|`canceled_type`|`string` \| `null`|ワークフロージョブのキャンセル方法<ul><li>`manual`：手動キャンセル</li><li>`workflow`：ワークフローによるキャンセル</li><li>`timeout`：タイムアウトによるキャンセル</li></ul>|
|`status`|`string`|ワークフロージョブのステータス<ul><li>`queued`：実行待ち</li><li>`setting_up`：実行準備中</li><li>`executing`：実行中</li><li>`interrupting`：実行中断中</li><li>`succeeded`：実行完了（成功）</li><li>`error`：実行完了（エラー）</li><li>`canceled`：実行完了（キャンセル）</li><li>`skipped`：実行完了（スキップ）</li><li>`retry_waiting`：実行完了（エラー）状態からリトライ開始するまでの待ち状態（リトライ回数が設定されている場合のみ）</li></ul>|
|`started_at`|`timestamp` \| `null`|ワークフロージョブの開始日時（`%Y-%m-%d %H:%M:%S %Z`）|
|`finished_at`|`timestamp` \| `null`|ワークフロージョブの終了日時（`%Y-%m-%d %H:%M:%S %Z`）|
|`created_at`|`timestamp`|ワークフロージョブの実行日時（`%Y-%m-%d %H:%M:%S %Z`）|

### ワークフロータスクジョブ

#### ジョブ実行履歴

過去に実行されたワークフロータスクジョブに関する履歴データを転送します。

:::(Info) (転送対象外のワークフロータスク)

以下のワークフロータスクは実行履歴の転送対象外です。

* TROCCO転送ジョブ
* TROCCO dbtジョブ
* TROCCOデータマートシンク
* TROCCOエージェント

:::

|カラム名|型|説明|
|--|--|--|
|`pipeline_task_job_id`|`long`|ワークフロータスクジョブID|
|`status`|`string`|ワークフロータスクジョブのステータス<ul><li>`queued`：実行待ち</li><li>`setting_up`：実行準備中</li><li>`executing`：実行中</li><li>`succeeded`：実行完了（成功）</li><li>`error`：実行完了（エラー）</li><li>`interrupting`：実行中断中</li><li>`canceled`：実行完了（キャンセル）</li><li>`bypassed`：実行完了（バイパス）</li></ul>|
|`log`|`string` \| `null`|タスクジョブのログ（実行ログ出力が有効な場合のみ）|
|`started_at`|`timestamp` \| `null`|ワークフロータスクジョブの開始日時（`%Y-%m-%d %H:%M:%S %Z`）|
|`finished_at`|`timestamp` \| `null`|ワークフロータスクジョブの終了日時（`%Y-%m-%d %H:%M:%S %Z`）|
|`created_at`|`timestamp`|ワークフロータスクジョブの作成日時（`%Y-%m-%d %H:%M:%S %Z`）|
|`pipeline_task_job_loop_item_id`|`long` \| `null`|カスタム変数ループ実行のジョブID|
|`loop_item_status`|`string` \| `null`|カスタム変数ループ実行のステータス<ul><li>`queued`</li><li>`setting_up`</li><li>`executing`</li><li>`succeeded`</li><li>`error`</li><li>`interrupting`</li><li>`canceled`</li></ul>|
|`loop_item_log`|`string` \| `null`|カスタム変数ループ実行のジョブのログ（実行ログ出力が有効な場合のみ）|
|`loop_item_started_at`|`timestamp` \| `null`|カスタム変数ループ実行のジョブの開始日時（`%Y-%m-%d %H:%M:%S %Z`）|
|`loop_item_finished_at`|`timestamp` \| `null`|カスタム変数ループ実行のジョブの終了日時（`%Y-%m-%d %H:%M:%S %Z`）|
|`loop_item_created_at`|`timestamp` \| `null`|カスタム変数ループ実行のジョブの作成日時（`%Y-%m-%d %H:%M:%S %Z`）|

