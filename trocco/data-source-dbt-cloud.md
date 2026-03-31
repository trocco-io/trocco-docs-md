---
articleId: ad60758b-f5dc-4928-8158-fc20119ed381
slug: data-source-dbt-cloud
title: 転送元 - dbt Cloud
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、dbt Cloudからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - dbt Cloud](/docs/connection-configuration-dbt-cloud)を参照ください。

## 利用上の注意・制約

### API制限について

dbt Cloud APIには、レート制限とページネーション制限があります。

:::info(API利用制限)

- Administrative API（v2/v3）では、1回のリクエストで最大100件までのデータを取得できます
- 大量のデータを転送する場合は、実行時間に余裕を持って設定してください

:::

### 認証とアクセス権限

- 認証したユーザーまたはサービスアカウントがアクセス可能なデータのみ取得できます。
- Personal Access Token（PAT）を使用する場合、作成したユーザーの権限を継承します。
- Service Account Tokenを使用する場合、割り当てられた権限の範囲内でデータを取得できます。

### APIバージョンについて

dbt Cloudは複数のAPIバージョンを提供しています。

- **API v2**: レガシーバージョンですが、v3でまだ提供されていないエンドポイントが含まれています。
- **API v3**: リソース管理用の推奨バージョンです。

現在、dbt Cloudではエンドポイントごとにv2またはv3で提供されています。TROCCOでは、v2・v3それぞれで提供されているエンドポイントに対応しています。

## 取得対象


### Jobs（ジョブ）

指定したアカウント内のJobsデータを取得します。
詳しくは、[dbt Cloud API v2ドキュメント](https://docs.getdbt.com/dbt-cloud/api-v2)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**Account ID**|✓|-|取得対象のアカウントIDを入力します。<br>Account IDは、dbt Cloudの管理画面URLから確認できます。|

#### 取得データ

以下のカラムが取得されます。

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|ジョブID|
|`account_id`|`long`|所属するアカウントID|
|`project_id`|`long`|所属するプロジェクトID|
|`environment_id`|`long`|使用する環境ID|
|`name`|`string`|ジョブ名|
|`dbt_version`|`string`|使用するdbtのバージョン|
|`deferring_environment_id`|`long`|遅延参照する環境ID|
|`deferring_job_definition_id`|`long`|遅延参照するジョブID|
|`description`|`string`|ジョブの説明|
|`execute_steps`|`json`|実行するdbtコマンドのリスト|
|`execution`|`json`|実行設定|
|`generate_docs`|`boolean`|ドキュメント生成の有効/無効|
|`is_deferrable`|`boolean`|遅延可能かどうか|
|`job_type`|`string`|ジョブタイプ|
|`lifecycle_webhooks_url`|`string`|ライフサイクルWebhook URL|
|`lifecycle_webhooks`|`boolean`|ライフサイクルWebhookの有効/無効|
|`raw_dbt_version`|`string`|生のdbtバージョン文字列|
|`run_compare_changes`|`boolean`|変更比較実行の有効/無効|
|`compare_changes_flags`|`string`|変更比較フラグ|
|`run_failure_count`|`long`|実行失敗回数|
|`run_generate_sources`|`boolean`|ソース生成実行の有効/無効|
|`run_lint`|`boolean`|Lint実行の有効/無効|
|`errors_on_lint_failure`|`boolean`|Lint失敗時にエラーとするか|
|`settings`|`json`|ジョブ設定|
|`state`|`long`|ジョブの状態|
|`triggers_on_draft_pr`|`boolean`|ドラフトPRでのトリガー有効/無効|
|`triggers`|`json`|トリガー設定|
|`job_completion_trigger_condition`|`json`|ジョブ完了トリガー条件|
|`created_at`|`string`|ジョブの作成日時（ISO 8601形式）|
|`updated_at`|`string`|ジョブの最終更新日時（ISO 8601形式）|
|`account`|`json`|アカウント情報|
|`project`|`json`|プロジェクト情報|
|`environment`|`json`|環境情報|
|`schedule`|`json`|スケジュール設定|
|`generate_sources`|`boolean`|ソース生成の有効/無効|

### Notifications（通知）

指定したアカウント内のNotificationsデータを取得します。
詳しくは、[dbt Cloud API v2ドキュメント](https://docs.getdbt.com/dbt-cloud/api-v2)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**Account ID**|✓|-|取得対象のアカウントIDを入力します。<br>Account IDは、dbt Cloudの管理画面URLから確認できます。|

#### 取得データ

以下のカラムが取得されます。

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|通知ID|
|`account_id`|`long`|所属するアカウントID|
|`user_id`|`long`|通知を受け取るユーザーID|
|`type`|`long`|通知タイプ|
|`external_email`|`string`|外部メールアドレス|
|`slack_channel_id`|`string`|Slackチャンネル ID|
|`slack_channel_name`|`string`|Slackチャンネル名|
|`on_cancel`|`json`|キャンセル時の通知設定|
|`on_failure`|`json`|失敗時の通知設定|
|`on_success`|`json`|成功時の通知設定|
|`on_warning`|`json`|警告時の通知設定|
|`state`|`long`|通知の状態|
|`created_at`|`string`|通知の作成日時（ISO 8601形式）|
|`updated_at`|`string`|通知の最終更新日時（ISO 8601形式）|
|`user`|`json`|ユーザー情報|

### Runs（実行履歴）

指定したアカウント内のRunsデータを取得します。
詳しくは、[dbt Cloud API v2ドキュメント](https://docs.getdbt.com/dbt-cloud/api-v2)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**Account ID**|✓|-|取得対象のアカウントIDを入力します。<br>Account IDは、dbt Cloudの管理画面URLから確認できます。|

#### 取得データ

以下のカラムが取得されます。

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|実行履歴ID|
|`trigger_id`|`long`|トリガーID|
|`account_id`|`long`|所属するアカウントID|
|`environment_id`|`long`|使用する環境ID|
|`project_id`|`long`|所属するプロジェクトID|
|`job_definition_id`|`long`|ジョブ定義ID|
|`status`|`long`|実行ステータス|
|`dbt_version`|`string`|使用したdbtバージョン|
|`git_branch`|`string`|Gitブランチ名|
|`git_sha`|`string`|Git SHA|
|`status_message`|`string`|ステータスメッセージ|
|`owner_thread_id`|`string`|オーナースレッドID|
|`executed_by_thread_id`|`string`|実行スレッドID|
|`deferring_run_id`|`long`|遅延参照する実行ID|
|`artifacts_saved`|`boolean`|Artifact保存済みフラグ|
|`artifact_s3_path`|`string`|ArtifactのS3パス|
|`has_docs_generated`|`boolean`|ドキュメント生成済みフラグ|
|`has_sources_generated`|`boolean`|ソース生成済みフラグ|
|`notifications_sent`|`boolean`|通知送信済みフラグ|
|`blocked_by`|`json`|ブロック情報|
|`created_at`|`string`|実行の作成日時（ISO 8601形式）|
|`updated_at`|`string`|実行の最終更新日時（ISO 8601形式）|
|`dequeued_at`|`string`|キューから取り出された日時（ISO 8601形式）|
|`started_at`|`string`|実行開始日時（ISO 8601形式）|
|`finished_at`|`string`|実行終了日時（ISO 8601形式）|
|`last_checked_at`|`string`|最終チェック日時（ISO 8601形式）|
|`last_heartbeat_at`|`string`|最終ハートビート日時（ISO 8601形式）|
|`should_start_at`|`string`|実行開始予定日時（ISO 8601形式）|
|`trigger`|`json`|トリガー情報|
|`job`|`json`|ジョブ情報|
|`environment`|`json`|環境情報|
|`run_steps`|`json`|実行ステップ情報|
|`status_humanized`|`string`|表示用のステータス|
|`in_progress`|`boolean`|実行中フラグ|
|`is_complete`|`boolean`|完了フラグ|
|`is_success`|`boolean`|成功フラグ|
|`is_error`|`boolean`|エラーフラグ|
|`is_cancelled`|`boolean`|キャンセルフラグ|
|`duration`|`string`|実行時間|
|`queued_duration`|`string`|キュー待機時間|
|`run_duration`|`string`|実行時間（実行のみ）|
|`duration_humanized`|`string`|表示用の実行時間|
|`queued_duration_humanized`|`string`|表示用のキュー待機時間|
|`run_duration_humanized`|`string`|表示用の実行時間（実行のみ）|
|`created_at_humanized`|`string`|表示用の作成日時|
|`finished_at_humanized`|`string`|表示用の終了日時|
|`retrying_run_id`|`long`|リトライ実行ID|
|`can_retry`|`boolean`|リトライ可能フラグ|
|`retry_not_supported_reason`|`string`|リトライ不可理由|
|`job_id`|`long`|ジョブID|
|`is_running`|`boolean`|実行中フラグ|
|`href`|`string`|実行のURL|
|`used_repo_cache`|`boolean`|リポジトリキャッシュ使用フラグ|

### Accounts（アカウント）

Accountsのデータを取得します。
詳しくは、[dbt Cloud API v3ドキュメント](https://docs.getdbt.com/dbt-cloud/api-v3)を参照ください。

#### 設定項目

設定項目はありません。すべてのデータが取得されます。


#### 取得データ

以下のカラムが取得されます。

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|アカウントID|
|`name`|`string`|アカウント名|
|`plan`|`string`|契約プラン|
|`run_slots`|`long`|実行スロット数|
|`developer_seats`|`long`|開発者シート数|
|`it_seats`|`long`|ITシート数|
|`explorer_seats`|`long`|エクスプローラーシート数|
|`read_only_seats`|`long`|読み取り専用シート数|
|`locked`|`boolean`|アカウントロック状態|
|`lock_reason`|`string`|ロック理由|
|`lock_cause`|`string`|ロック原因|
|`unlocked_at`|`string`|ロック解除日時（ISO 8601形式）|
|`pending_cancel`|`boolean`|キャンセル保留中フラグ|
|`billing_email_address`|`string`|請求先メールアドレス|
|`pod_memory_request_mebibytes`|`long`|Podメモリリクエスト（MiB）|
|`develop_pod_memory_request_mebibytes`|`long`|開発用Podメモリリクエスト（MiB）|
|`run_duration_limit_seconds`|`long`|実行時間制限（秒）|
|`queue_limit`|`long`|キュー制限|
|`enterprise_login_slug`|`string`|エンタープライズログインのslug|
|`business_critical`|`boolean`|ビジネスクリティカルフラグ|
|`starter_repo_url`|`string`|スターターリポジトリURL|
|`git_auth_level`|`string`|Git認証レベル|
|`identifier`|`string`|識別子|
|`trial_end_date`|`string`|トライアル終了日（ISO 8601形式）|
|`static_subdomain`|`string`|静的サブドメイン|
|`vanity_subdomain`|`string`|カスタムサブドメイン|
|`run_locked_until`|`string`|実行ロック終了日時（ISO 8601形式）|
|`state`|`long`|アカウント状態|
|`docs_job_id`|`long`|ドキュメントジョブID|
|`freshness_job_id`|`long`|鮮度チェックジョブID|
|`account_migration_events`|`json`|アカウント移行イベント情報|
|`groups`|`json`|グループ情報|
|`created_at`|`string`|アカウントの作成日時（ISO 8601形式）|
|`updated_at`|`string`|アカウントの最終更新日時（ISO 8601形式）|

### Connections（接続情報）

指定したアカウント内のConnectionsデータを取得します。
詳しくは、[dbt Cloud API v3ドキュメント](https://docs.getdbt.com/dbt-cloud/api-v3)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**Account ID**|✓|-|取得対象のアカウントIDを入力します。<br>Account IDは、dbt Cloudの管理画面URLから確認できます。|

#### 取得データ

以下のカラムが取得されます。

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|接続ID|
|`created_at`|`string`|接続の作成日時（ISO 8601形式）|
|`updated_at`|`string`|接続の最終更新日時（ISO 8601形式）|
|`account_id`|`long`|所属するアカウントID|
|`name`|`string`|接続名|
|`adapter_version`|`string`|アダプターバージョン|
|`private_link_endpoint_id`|`string`|プライベートリンクエンドポイントID|
|`is_ssh_tunnel_enabled`|`boolean`|SSHトンネルの有効/無効|
|`oauth_configuration_id`|`long`|OAuth設定ID|
|`environment__count`|`long`|この接続を使用する環境数|
|`platform_metadata_credentials_id`|`long`|プラットフォームメタデータ認証情報ID|

### Environments（環境）

指定したアカウント内のEnvironmentsデータを取得します。
詳しくは、[dbt Cloud API v3ドキュメント](https://docs.getdbt.com/dbt-cloud/api-v3)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**Account ID**|✓|-|取得対象のアカウントIDを入力します。<br>Account IDは、dbt Cloudの管理画面URLから確認できます。|

#### 取得データ

以下のカラムが取得されます。

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|環境ID|
|`account_id`|`long`|所属するアカウントID|
|`project_id`|`long`|所属するプロジェクトID|
|`credentials_id`|`long`|認証情報ID|
|`connection_id`|`long`|接続ID|
|`extended_attributes_id`|`long`|拡張属性ID|
|`name`|`string`|環境名|
|`dbt_version`|`string`|dbtバージョン|
|`raw_dbt_version`|`string`|生のdbtバージョン文字列|
|`type`|`string`|環境タイプ|
|`use_custom_branch`|`boolean`|カスタムブランチ使用の有効/無効|
|`custom_branch`|`string`|カスタムブランチ名|
|`supports_docs`|`boolean`|ドキュメントサポートの有効/無効|
|`deployment_type`|`string`|デプロイメントタイプ|
|`is_deferrable`|`boolean`|遅延可能かどうか|
|`enable_model_query_history`|`boolean`|モデルクエリ履歴の有効/無効|
|`state`|`long`|環境の状態|
|`created_at`|`string`|環境の作成日時（ISO 8601形式）|
|`updated_at`|`string`|環境の最終更新日時（ISO 8601形式）|
|`project`|`json`|プロジェクト情報|
|`credentials`|`json`|認証情報|

### Groups（グループ）

指定したアカウント内のGroupsデータを取得します。
詳しくは、[dbt Cloud API v3ドキュメント](https://docs.getdbt.com/dbt-cloud/api-v3)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**Account ID**|✓|-|取得対象のアカウントIDを入力します。<br>Account IDは、dbt Cloudの管理画面URLから確認できます。|

#### 取得データ

以下のカラムが取得されます。

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|グループID|
|`account_id`|`long`|所属するアカウントID|
|`name`|`string`|グループ名|
|`state`|`long`|グループの状態|
|`assign_by_default`|`boolean`|デフォルト割り当ての有効/無効|
|`sso_mapping_groups`|`json`|SSOマッピンググループ情報|
|`created_at`|`string`|グループの作成日時（ISO 8601形式）|
|`updated_at`|`string`|グループの最終更新日時（ISO 8601形式）|
|`group_permissions`|`json`|グループ権限情報|

### Projects（プロジェクト）

指定したアカウント内のProjectsデータを取得します。
詳しくは、[dbt Cloud API v3ドキュメント](https://docs.getdbt.com/dbt-cloud/api-v3)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**Account ID**|✓|-|取得対象のアカウントIDを入力します。<br>Account IDは、dbt Cloudの管理画面URLから確認できます。|

#### 取得データ

以下のカラムが取得されます。

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|プロジェクトID|
|`name`|`string`|プロジェクト名|
|`account_id`|`long`|所属するアカウントID|
|`description`|`string`|プロジェクトの説明|
|`connection_id`|`long`|接続ID|
|`repository_id`|`long`|リポジトリID|
|`semantic_layer_config_id`|`long`|セマンティックレイヤー設定ID|
|`state`|`long`|プロジェクトの状態|
|`dbt_project_subdirectory`|`string`|dbtプロジェクトのサブディレクトリ|
|`docs_job_id`|`long`|ドキュメントジョブID|
|`freshness_job_id`|`long`|鮮度チェックジョブID|
|`type`|`long`|プロジェクトタイプ|
|`created_at`|`string`|プロジェクトの作成日時（ISO 8601形式）|
|`updated_at`|`string`|プロジェクトの最終更新日時（ISO 8601形式）|
|`connection`|`json`|接続情報|
|`environments`|`json`|環境情報|
|`repository`|`json`|リポジトリ情報|
|`group_permissions`|`json`|グループ権限情報|
|`docs_job`|`json`|ドキュメントジョブ情報|
|`freshness_job`|`json`|鮮度チェックジョブ情報|

### Repositories（リポジトリ）

指定したアカウント内のRepositoriesデータを取得します。
詳しくは、[dbt Cloud API v3ドキュメント](https://docs.getdbt.com/dbt-cloud/api-v3)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**Account ID**|✓|-|取得対象のアカウントIDを入力します。<br>Account IDは、dbt Cloudの管理画面URLから確認できます。|
|**Project ID**|✓|-|取得対象のプロジェクトIDを入力します。<br>Project IDは、プロジェクト設定画面のURLから確認できます。|

#### 取得データ

以下のカラムが取得されます。

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|リポジトリID|
|`account_id`|`long`|所属するアカウントID|
|`project_id`|`long`|所属するプロジェクトID|
|`full_name`|`string`|リポジトリのフルネーム|
|`remote_backend`|`string`|リモートバックエンド|
|`git_clone_strategy`|`string`|Gitクローン戦略|
|`deploy_key_id`|`long`|デプロイキーID|
|`repository_credentials_id`|`long`|リポジトリ認証情報ID|
|`github_installation_id`|`long`|GitHubインストールID|
|`github_webhook_id`|`long`|GitHub Webhook ID|
|`state`|`long`|リポジトリの状態|
|`private_link_endpoint_id`|`string`|プライベートリンクエンドポイントID|
|`git_provider_id`|`long`|Gitプロバイダーロジック ID|
|`github_repo`|`string`|GitHubリポジトリ|
|`name`|`string`|リポジトリ名|
|`web_url`|`string`|URL|
|`created_at`|`string`|リポジトリの作成日時（ISO 8601形式）|
|`updated_at`|`string`|リポジトリの最終更新日時（ISO 8601形式）|
|`deploy_key`|`json`|デプロイキー情報|
|`git_provider`|`json`|Gitプロバイダー情報|
|`gitlab`|`json`|GitLab情報|

### Users（ユーザー）

指定したアカウント内のUsersデータを取得します。
詳しくは、[dbt Cloud API v3ドキュメント](https://docs.getdbt.com/dbt-cloud/api-v3)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**Account ID**|✓|-|取得対象のアカウントIDを入力します。<br>Account IDは、dbt Cloudの管理画面URLから確認できます。|

#### 取得データ

以下のカラムが取得されます。

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|ユーザーID|
|`first_name`|`string`|名|
|`last_name`|`string`|姓|
|`email`|`string`|メールアドレス|
|`apitoken_last_used`|`string`|APIトークン最終使用日時（ISO 8601形式）|
|`azure_active_directory_connected`|`boolean`|Azure Active Directory接続状態|
|`azure_active_directory_token_retrieval_failure`|`boolean`|Azure Active Directoryトークン取得失敗フラグ|
|`azure_active_directory_username`|`string`|Azure Active Directoryユーザー名|
|`email_connected`|`boolean`|メール接続状態|
|`email_verified`|`boolean`|メール検証済みフラグ|
|`enterprise_connected`|`boolean`|エンタープライズ接続状態|
|`enterprise_authentication_method`|`string`|エンタープライズ認証方式|
|`github_connected`|`boolean`|GitHub接続状態|
|`github_username`|`string`|GitHubユーザー名|
|`gitlab_connected`|`boolean`|GitLab接続状態|
|`gitlab_username`|`string`|GitLabユーザー名|
|`is_active`|`boolean`|アクティブ状態|
|`is_staff`|`boolean`|スタッフフラグ|
|`last_login`|`string`|最終ログイン日時（ISO 8601形式）|
|`sso_only_user`|`boolean`|SSOのみのユーザーフラグ|
|`github_token_retrieval_failure`|`boolean`|GitHubトークン取得失敗フラグ|
|`gitlab_token_retrieval_failure`|`boolean`|GitLabトークン取得失敗フラグ|
|`created_at`|`string`|ユーザーの作成日時（ISO 8601形式）|
|`permissions`|`json`|権限情報|
|`auth_provider_infos`|`json`|認証プロバイダー情報|
|`licenses`|`json`|ライセンス情報|
