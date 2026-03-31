---
articleId: 788f0c03-6bb6-49f6-ba09-016191b4a474
slug: about-audit-log
title: 監査ログ機能
parentCategoryId: ff1902b8-011f-4004-a396-dd745552ff47
languageCode: ja
---
監査ログ機能についてのDocsです。

## 概要

監査ログとは、「誰が」「いつ」「どのような」行動をシステム上で行ったかを記録した、ログデータです。
主にシステム監査を行う際に利用されます。
TROCCOの監査ログ機能は、TROCCOユーザーの行動を記録し、記録した監査ログをCSVファイルで提供します。

:::(Warning) (プラン上の制約)

監査ログは、**Advanced**プラン以上の契約アカウントでのみ、ご利用いただけます。
:::

## 注意事項

:::(Warning) (監査ログの保存期間、および監査ログ取得開始日)

- 監査ログ機能では、**過去1年間**の監査ログを確認できます。
  - 過去1年よりも前に記録された監査ログのデータは、順次削除されるため、確認できません。
- 監査ログ機能は、監査ログ機能をご契約された日から、監査ログの記録を開始します。
  - 監査ログ機能をご契約されていない間に行われたユーザーの監査ログは、記録されていないため、確認できません。
:::

## 監査ログファイルの仕様

監査ログはCSVファイルでダウンロードできます。
以下は、ダウンロードされるCSVファイルの仕様です。

### CSVファイルのカラム一覧

監査ログのCSVファイルは、以下のカラムで構成されます。

| カラム名 | 値の説明 |
| --- | --- |
| `User ID` | アクションを行ったユーザーのIDです。<br>**ユーザーごとに一意な値であることが保証されます。**<br>ユーザーがTROCCOに招待されたときに自動で設定され、以降その値が変更されることはありません。 |
| `Email` | アクションを行ったユーザーのメールアドレスです。<br>**メールアドレスは変更される可能性があります。** |
| `IP Address` | アクションを行ったユーザーのIPアドレスです。 |
| `User Agent` | アクションを行ったユーザーの使用OSや使用ブラウザ、およびそのバージョンです。|
| `Role` | アクションを行ったユーザーの、TROCCOアカウント上の権限です。以下のいずれかの値となります。<ul><li>`Account Super Admin`</li><li>`Account Admin`</li><li>`Account Member`</li></ul><br>詳しくは[各ユーザー権限でできること](/docs/account-roles)を参照ください。 |
| `Available Features` | アクションを行ったユーザーが利用できる、TROCCOの機能です。<br>該当ユーザーが利用できる機能に応じて、以下の値を含みます。<ul><li>`Basic Features`：TROCCOの基本機能</li><li>`Data Catalog`：データカタログ</li><li>`Audit Log`：監査ログ</li></ul><br>詳しくは、[機能について](/docs/user-settings#機能について)を参照ください。  |
| `Restricted Features` | アクションを行ったユーザーが利用を禁止されている、TROCCOの機能です。<br>該当ユーザーが禁止されている機能に応じて、以下の値を含みます。<ul><li>`Connection Modification`：接続情報の作成・編集・削除</li></ul><br>詳しくは、[機能について](/docs/user-settings#機能について)を参照ください。  |
| `Category` | アクションの対象となったTROCCOの機能名です。<br>詳しくは、後述の[カテゴリー](/docs/about-audit-log#カテゴリー)を参照ください。 |
| `Action` | アクションの概要です。<br>詳しくは、後述の[アクション](/docs/about-audit-log#アクション)を参照ください。 |
| `Action Details` | アクションに関する補足事項です。 |
| `Date and Time (TIMEZONE)` | ユーザーがアクションを行った日時です。<br>[監査ログファイルのダウンロード](/docs/about-audit-log#監査ログファイルのダウンロード)時に選択したタイムゾーンがカラム名に含まれます。<br>なお、タイムゾーンに`Asia/Tokyo`を選択した場合、UTCの`12:00:00`に行われたアクションは、`21:00:00`に変換されて出力されます。 |

:::(Warning) (識別子)

ユーザーを特定するための識別子としては、`User ID`を参照ください。
`Email`は、途中で変更されることがあるため、識別子として参照できません。
:::

### カテゴリー

カテゴリー（Category）では、アクションの対象となったTROCCOの機能名を値として持ちます。
カテゴリーに含まれる値は、以下のとおりです。

:::(Warning) (カテゴリー一覧に含まれない機能)

以下のカテゴリー一覧に含まれない機能に対するアクションのログは、取得されません。
:::

|カテゴリー名|内容|
|:----|:----|
|`ETLConfiguration`|転送設定|
|`ETLJob`|転送ジョブ|
|`ManagedETLConfiguration`|マネージド転送設定|
|`CDCJobDefinition`|CDCデータ転送設定|
|`DataMartDefinition`|データマート定義|
|`DataMartJob`|データマートジョブ|
|`DbtGitRepository`|dbt Gitリポジトリ|
|`DbtJobConfiguration`|dbtジョブ設定|
|`DbtJob`|dbtジョブ|
|`Team`|チーム|
|`ResourceGroup`|リソースグループ|
|`ResourceGroupRole`|リソースグループに対するロール（権限設定）|
|`WorkflowDefinition`|ワークフロー定義|
|`WorkflowJob`|ワークフロージョブ|
|`CustomConnector`|カスタムコネクタ|
|`ConnectionConfiguration`|接続情報|
|`Notification`|通知先|
|`EnvironmentGroup`|環境グループ|
|`Environment`|環境|
|`EnvironmentAttachment`|環境への紐付け|
|`SelfHostedRunnerCluster`|Self-Hosted RunnerのCluster|
|`SelfHostedRunnerRegistrationToken`|Self-Hosted RunnerのRegistrationToken|
|`Label`|ラベル|
|`Account`|TROCCOアカウント<br>\* TROCCOアカウントに所属する全ユーザーに影響のあるアクションです。|
|`TimeoutSetting`|タイムアウト設定|
|`PaymentsProfile`|クレジットカード契約情報|
|`PaymentsSubscription`|クレジットカード契約|
|`User`|TROCCOユーザー<br>\* TROCCOの各ユーザー自身にのみ影響のあるアクションです。|
|`APIKey`|TROCCO API|
|`AuditLog`|監査ログ|
|`Page`|TROCCOへのアクセス<br>\* TROCCO上のページにアクセスするごとに、ログを取得します。|

### アクション

アクション（Action）では、アクション名を値として持ちます。
各アクションは、プレフィックスとしてカテゴリ名を含みます。
アクションの一覧およびその詳細は、以下のcsvファイルを参照ください。

@(Embed)(https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/audit_log_action_list.csv)

## 監査ログの利用手順

### 初期設定

監査ログを利用するためには、事前にユーザーの権限を設定する必要があります。
詳しくは、[ユーザーの権限設定](/docs/user-settings)を参照ください。

## 監査ログファイルのダウンロード

1. 左サイドバーの**監査ログ出力**をクリック

2. 取得対象期間およびタイムゾーンを選択し、**出力**をクリック
  ![005-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/about-audit-log-2024-08-29-1-54-0.png)
  ダウンロードの準備が開始されます。しばらくお待ちください。

3. **ダウンロード**をクリック
  ![006-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/about-audit-log-2024-08-29-1-54-1.png)
  ZIPファイルがダウンロードされます。
  ZIPファイルには、月単位で区切られたCSVファイルが格納されています。
  
  :::(Info) (監査ログのダウンロードに関する補足)

  - 監査ログは、**出力後24時間以内**にダウンロードしてください。
    - 出力後24時間を経過すると、ダウンロードできなくなります。
  - **自身が出力した監査ログ**のみ、ダウンロードできます。
    - 他のユーザーが出力した監査ログは、ダウンロードできません。
  - 出力履歴＞出力日時の列にて表示される日時は、`Asia/Tokyo`（日本標準時）を基準に表示されます。
  :::

## 監査ログ機能の変更履歴

|変更日|変更概要|変更詳細|
|-----|-----|-----|
|2023/04/10|監査ログ機能のリリース|-|
|2023/05/10|監査ログ出力時のタイムゾーンの指定が可能に|監査ログ出力時のタイムゾーンの指定が可能になりました。<br>詳しくは、[CSVファイルのカラム一覧](/docs/about-audit-log#csvファイルのカラム一覧)の`Date and Time (TIMEZONE)`行を参照ください。|
|2023/05/10|[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|**2段階認証**から**2要素認証**への機能名変更に伴い、以下のアクションの説明の表現も合わせて変更しました。<ul><li>`UserTwoFactorAuthenticationEnabled`,2要素認証の有効化</li><li>`UserTwoFactorAuthenticationDisabled`,2要素認証の無効化</li></ul>|
|2023/09/06|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[タイムゾーン設定](/docs/time-zone)の追加に伴い、取得対象のアクションを追加しました。<ul><li>`UserUpdatedForTimeZone`,ユーザーの更新（タイムゾーン設定を変更）</li></ul>|
|2023/09/14|`Role`列の値の変更・追加|TROCCOの権限名の変更および新権限の追加に伴い、`Role`列の値も合わせて変更・追加しました。<ul><li>`Account Super Admin`：新権限である[アカウント特権管理者](/docs/about-super-admin)の追加に伴い、値を追加</li><li>`Account Admin`：旧`admin`から変更</li><li>`Account Member`：旧`member`から変更</li></ul><br>詳しくは、[CSVファイルのカラム一覧](/docs/about-audit-log#csvファイルのカラム一覧)の`Role`行を参照ください。|
|2023/10/12|`Restricted Features`列の追加|[ユーザーの権限設定 > 禁止する機能](/docs/user-settings#禁止する機能)の追加に伴い、`Restricted Features`列を追加しました。<br>詳しくは、[CSVファイルのカラム一覧](/docs/about-audit-log#csvファイルのカラム一覧)の`Restricted Features`行を参照ください。|
|2023/10/24|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[ユーザーの削除](/docs/user-deletion)機能の追加に伴い、取得対象のアクションを追加しました。<ul><li>`UserDeleted`,ユーザーの削除</li></ul>|
|2023/11/21|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|アカウント特権管理者による、[アカウント内の各ユーザーが設定した2要素認証の無効化](/docs/about-super-admin#アカウント内の各ユーザーが設定した2要素認証の無効化)機能の追加に伴い、取得対象のアクションを追加しました。<ul><li>`UserTwoFactorAuthDisabled`,2要素認証の無効化（アカウント特権管理者による無効化）</li></ul>|
|2024/03/05|取得対象アクションの削除<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|取得対象のアクションを削除しました。<ul><li>`ETLConfigurationUpdatedFromPastRevision`,転送設定の更新（変更履歴の過去のリビジョンを復元）</li></ul>|
|2024/04/02|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[組織名](/docs/organization-name)の変更に対応したことに伴い、取得対象のアクションを追加しました。<ul><li>`AccountOrganizationNameUpdated`,組織名の更新</li></ul>|
|2024/05/20|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[TROCCO API](/docs/trocco-api)を利用してデータマート定義を操作した際のアクションを追加しました。<ul><li>`DataMartDefinitionCreatedFromAPI`,データマート定義の作成（APIを利用）</li><li>`DataMartDefinitionUpdatedFromAPI`,データマート定義の更新（APIを利用）</li><li>`DataMartDefinitionDeletedFromAPI`,データマート定義の削除（APIを利用）</li></ul>|
|2024/09/25|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[TROCCO API](/docs/trocco-api)を利用してデータマートジョブを実行した際のアクションを追加しました。<ul><li>`DataMartJobExecutedFromAPI`,データマートジョブの実行（APIを利用）</li></ul>|
|2024/10/10|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[TROCCO API](/docs/trocco-api)を利用してユーザーを操作した際のアクションを追加しました。<ul><li>`AccountUserInvitedFromAPI`,ユーザーの招待（APIを利用）</li><li>`UserUpdatedFromAPI`,ユーザーの更新（権限・機能を変更）（APIを利用）</li><li>`UserDeletedFromAPI`,ユーザーの削除（APIを利用）</li></ul>|
|2024/11/18|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[TROCCO API](/docs/trocco-api)を利用してユーザーを操作した際のアクションを追加しました。<ul><li>`ConnectionConfigurationCreatedFromAPI`,接続情報の作成（APIを利用）</li><li>`ConnectionConfigurationUpdatedFromAPI	`,接続情報の更新（APIを利用）</li><li>`ConnectionConfigurationDeletedFromAPI	`,接続情報の削除（APIを利用）</li></ul>|
|2024/11/21|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[通知先として登録するメールアドレスを認証](/docs/trocco-tutorial-additional-settings#emailの場合)した際のアクションを追加しました。<ul><li>`NotificationVerified`,通知先の確認（確認メールに含まれるリンクをクリックし、メールアドレスの認証が成功）</li></ul>|
|2024/12/16|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[TROCCO API](/docs/trocco-api)を利用してユーザーを操作した際のアクションを追加しました。<ul><li>`TeamCreatedFromAPI`,チームの作成（APIを利用）</li><li>`TeamUpdatedFromAPI`,チームの更新（APIを利用）</li><li>`TeamDeletedFromAPI`,チームの削除（APIを利用）</li></ul>|
|2025/01/09|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|ワークフロー定義一覧画面にて、選択したワークフロー定義に対する一括操作がサポートされました。<br>上記に伴い、取得対象のアクションを追加しました。<ul><li>`WorkflowDefinitionLabelsAddedInBulk`,ワークフロー定義のラベルの一括追加（複数のワークフロー定義にラベルを一括追加）</li><li>`WorkflowDefinitionLabelsRemovedInBulk`,ワークフロー定義のラベルの一括削除（複数のワークフロー定義のラベルを一括削除）</li><li>`WorkflowDefinitionSchedulesAddedInBulk`,ワークフロー定義のスケジュールの一括追加（複数のワークフロー定義にスケジュールを一括追加）</li><li>`WorkflowDefinitionSchedulesRemovedInBulk`,ワークフロー定義のスケジュールの一括削除（複数のワークフロー定義のスケジュールを一括削除）</li></ul>|
|2025/01/14|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[TROCCO API](/docs/trocco-api)を利用してワークフロー定義を操作した際のアクションを追加しました。<ul><li>`WorkflowDefinitionCreatedFromAPI`,ワークフロー定義の作成（APIを利用）</li><li>`WorkflowDefinitionUpdatedFromAPI`,ワークフロー定義の更新（APIを利用）</li><li>`WorkflowDefinitionDeletedFromAPI`,ワークフロー定義の削除（APIを利用）</li></ul>|
|2025/01/27|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|転送設定一覧画面にて、選択した転送設定に対する一括削除がサポートされました。<br>上記に伴い、取得対象のアクションを追加しました。<ul><li>`ETLConfigurationJobDefinitionsRemovedInBulk`,転送設定の一括削除（複数の転送設定を一括削除）</li></ul>|
|2025/01/27|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[TROCCO API](/docs/trocco-api)を利用して転送設定を操作した際のアクションを追加しました。<ul><li>`ETLConfigurationCreatedFromAPI`,転送設定の作成（APIを利用）</li><li>`ETLConfigurationUpdatedFromAPI`,転送設定の更新（APIを利用）</li><li>`ETLConfigurationDeletedFromAPI`,転送設定の削除（APIを利用）</li></ul>|
|2025/01/27|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[TROCCO API](/docs/trocco-api)を利用してラベルを操作した際のアクションを追加しました。<ul><li>`LabelCreatedFromAPI`,ラベルの作成（APIを利用）</li><li>`LabelUpdatedFromAPI`,ラベルの更新（APIを利用）</li><li>`LabelDeletedFromAPI`,ラベルの削除（APIを利用）</li></ul>|
|2025/01/27|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[TROCCO API](/docs/trocco-api)を利用してリソースグループを操作した際のアクションを追加しました。<ul><li>`ResourceGroupCreatedFromAPI`,リソースグループの作成（APIを利用）</li><li>`ResourceGroupUpdatedFromAPI`,リソースグループの更新（APIを利用）</li><li>`ResourceGroupDeletedFromAPI`,リソースグループの削除（APIを利用）</li><li>`ResourceGroupRoleCreatedFromAPI`,リソースグループの権限設定の作成（チームへロールを追加）（APIを利用）</li><li>`ResourceGroupRoleUpdatedFromAPI`,リソースグループの権限設定の更新（チームのロールを更新）（APIを利用）</li><li>`ResourceGroupRoleDeletedFromAPI`,リソースグループの権限設定の削除（チームからロールを削除）（APIを利用）</li></ul>|
|2025/04/01|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[TROCCO API](/docs/trocco-api)を利用して通知先を操作した際のアクションを追加しました。<ul><li>`NotificationCreatedFromAPI`,通知先の作成（APIを利用）</li><li>`NotificationUpdatedFromAPI`,通知先の更新（APIを利用）</li><li>`NotificationDeletedFromAPI`,通知先の削除（APIを利用）</li></ul>|
|2025/04/24|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[Self-Hosted Runner](/docs/self-hosted-runner)がリリースされました。<br>上記に伴い、取得対象のカテゴリーとアクションを追加しました。<ul><li>カテゴリー<ul><li>`SelfHostedRunnerCluster`,Self-Hosted RunnerのCluster</li><li>`SelfHostedRunnerRegistrationToken`,Self-Hosted RunnerのRegistrationToken</li></ul></li><li>アクション<ul><li>`SelfHostedRunnerClusterCreated`,Self-Hosted RunnerのClusterの作成</li><li>`SelfHostedRunnerClusterDeleted`,Self-Hosted RunnerのClusterの削除</li><li>`SelfHostedRunnerClusterUpdated`,Self-Hosted RunnerのClusterの更新</li><li>`SelfHostedRunnerRegistrationTokenCreated`,Self-Hosted RunnerのRegistrationTokenの作成</li><li>`SelfHostedRunnerRegistrationTokenDeleted`,Self-Hosted RunnerのRegistrationTokenの削除</li></ul></li></ul>|
|2025/04/30|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[CDCデータ転送](cdc-job-definition)がサポートされました。<br>上記に伴い、取得対象のカテゴリーとアクションを追加しました。<ul><li>カテゴリー<ul><li>`CDCJobDefinition`,CDCデータ転送設定</li></ul></li><li>アクション<ul><li>`CDCJobDefinitionCreated`,CDCデータ転送設定の作成</li><li>`CDCJobDefinitionUpdated`,CDCデータ転送設定の更新</li><li>`CDCJobDefinitionDeleted`,CDCデータ転送設定の削除</li></ul></li></ul>|
|2025/05/07|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|アカウント設定より、[タイムアウト設定](/docs/timeout-settings)がサポートされました。<br>上記に伴い、取得対象のカテゴリーとアクションを追加しました。<ul><li>カテゴリー<ul><li>`TimeoutSetting`,タイムアウト設定</li></ul></li><li>アクション<ul><li>`TimeoutSettingUpdated`,タイムアウト設定の更新</li></ul></li></ul>|
|2025/05/26|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|データマート定義の通知設定にて、ジョブ実行通知の設定変更がサポートされました。<br>上記に伴い、取得対象のアクションを追加しました。<ul><li>`DataMartDefinitionNotificationForJobStatusChanged`,データマート定義の通知設定（ジョブ実行通知）の変更</li></ul>|
|2025/06/17|取得対象のカテゴリー・アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|クレジットカードによる支払いが一部サポートされました。<br>上記に伴い、取得対象のカテゴリーとアクションを追加しました。<ul><li>カテゴリー<ul><li>`PaymentsProfile`,クレジットカード契約情報</li><li>`PaymentsSubscription`,クレジットカード契約</li></ul></li><li>アクション<ul><li>`PaymentsProfileUpdated`,クレジットカード契約情報の更新</li><li>`PaymentsSubscriptionCreated`,クレジットカード契約の開始</li></ul></li></ul>|
|2025/08/04|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|データマート定義の一括操作が可能になりました。<br>上記に伴い、取得対象のアクションを追加しました。<ul><li>`DataMartDefinitionLabelsAddedInBulk`,データマート定義のラベルの一括追加</li><li>`DataMartDefinitionLabelsRemovedInBulk`,データマート定義のラベルの一括削除</li><li>`DataMartDefinitionSchedulesAddedInBulk`,データマート定義のスケジュールの一括追加</li><li>`DataMartDefinitionSchedulesRemovedInBulk`,データマート定義のスケジュールの一括削除</li><li>`DataMartDefinitionDeletedInBulk`,データマート定義の一括削除</li></ul>|
|2025/08/25|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|転送設定のリソースグループの一括操作が可能になりました。<br>上記に伴い、取得対象のアクションを追加しました。<ul><li>`ETLConfigurationResourceGroupsAddedInBulk`,転送設定のリソースグループの一括追加（複数の転送設定にリソースグループを一括追加）</li><li>`	ETLConfigurationResourceGroupsRemovedInBulk`,転送設定のリソースグループの一括削除（複数の転送設定のリソースグループを一括削除）</li></ul>|
|2025/09/08|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|データマート定義・ワークフロー定義のリソースグループの一括操作が可能になりました。<br>上記に伴い、取得対象のアクションを追加しました。<ul><li>`DataMartDefinitionResourceGroupsAddedInBulk`,データマート定義のリソースグループの一括追加（複数のデータマート定義にリソースグループを一括追加）</li><li>`DataMartDefinitionResourceGroupsRemovedInBulk`,データマート定義のリソースグループの一括削除（複数のデータマート定義のリソースグループを一括削除）</li><li>`WorkflowDefinitionResourceGroupsAddedInBulk`,ワークフロー定義のリソースグループの一括追加（複数のワークフロー定義にリソースグループを一括追加）</li><li>`	WorkflowDefinitionResourceGroupsRemovedInBulk`,ワークフロー定義のリソースグループの一括削除（複数のワークフロー定義のリソースグループを一括削除）</li></ul>|
|2025/11/26|取得対象のカテゴリー・アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|[環境管理機能](/docs/environment-management)の監査ログが取得可能になりました。<br>上記に伴い、取得対象のカテゴリーとアクションを追加しました。<ul><li>カテゴリー<ul><li>`EnvironmentGroup`,環境グループ</li><li>`Environment`,環境</li><li>`EnvironmentAttachment`,環境への紐付け</li></ul></li><li>アクション<ul><li>`EnvironmentGroupCreated`,環境グループの作成（UI経由）</li><li>`EnvironmentGroupCreatedFromAPI`,環境グループの作成（API経由）</li><li>`EnvironmentGroupUpdated`,環境グループの更新（UI経由）</li><li>`EnvironmentGroupUpdatedFromAPI`,環境グループの更新（API経由）</li><li>`EnvironmentGroupDeleted`,環境グループの削除（UI経由）</li><li>`EnvironmentGroupDeletedFromAPI`,環境グループの削除（API経由）</li><li>`EnvironmentCreated`,環境の作成（UI経由）</li><li>`EnvironmentCreatedFromAPI`,環境の作成（API経由）</li><li>`EnvironmentUpdated`,環境の更新（UI経由）</li><li>`EnvironmentUpdatedFromAPI`,環境の更新（API経由）</li><li>`EnvironmentDeleted`,環境の削除（UI経由）</li><li>`EnvironmentDeletedFromAPI`,環境の削除（API経由）</li><li>`EnvironmentAttachmentCreated`,環境への紐付け作成（転送設定、データマート、ワークフローを環境に紐付け）</li><li>`EnvironmentAttachmentDeleted`,環境からの紐付け解除</li></ul></li></ul>|
|2025/12/03|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|環境へのデプロイに関する監査ログが取得可能になりました。<br>上記に伴い、取得対象のアクションを追加しました。<ul><li>`ETLConfigurationDeployed`,転送設定を別の環境へデプロイ（UI経由）</li><li>`DataMartDefinitionDeployed`,データマートを別の環境へデプロイ（UI経由）</li><li>`WorkflowDefinitionDeployed`,ワークフローを別の環境へデプロイ（UI経由）</li></ul>|
|2025/12/15|取得対象のカテゴリー・アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|カスタムコネクタに関する監査ログが取得可能になりました。<br>上記に伴い、取得対象のカテゴリーとアクションを追加しました。<ul><li>カテゴリー<ul><li>`CustomConnector`,カスタムコネクタ</li></ul></li><li>アクション<ul><li>`CustomConnectorCreated`,カスタムコネクタの作成（UI経由）</li><li>`CustomConnectorUpdated`,カスタムコネクタの更新（UI経由）</li><li>`CustomConnectorDeleted`,カスタムコネクタの削除（UI経由）</li></ul></li></ul>|
|2025/03/04|取得対象アクションの追加<br>および[audit_log_action_list.csv](/docs/about-audit-log#アクション)の更新|転送設定・ワークフロー定義・データマート定義のスケジュールの有効化・無効化に関する監査ログが取得可能になりました。<br>上記に伴い、取得対象のアクションを追加しました。<ul><li>`ETLConfigurationScheduleActivated`,転送設定のスケジュールの有効化</li><li>`ETLConfigurationScheduleDeactivated`,転送設定のスケジュールの無効化</li><li>`ETLConfigurationSchedulesActivatedInBulk`,転送設定のスケジュールの一括有効化</li><li>`ETLConfigurationSchedulesDeactivatedInBulk`,転送設定のスケジュールの一括無効化</li><li>`WorkflowDefinitionScheduleActivated`,ワークフロー定義のスケジュールの有効化</li><li>`WorkflowDefinitionScheduleDeactivated`,ワークフロー定義のスケジュールの無効化</li><li>`WorkflowDefinitionSchedulesActivatedInBulk`,ワークフロー定義のスケジュールの一括有効化</li><li>`WorkflowDefinitionSchedulesDeactivatedInBulk`,ワークフロー定義のスケジュールの一括無効化</li><li>`DataMartDefinitionScheduleActivated`,データマート定義のスケジュールの有効化</li><li>`DataMartDefinitionScheduleDeactivated`,データマート定義のスケジュールの無効化</li><li>`DataMartDefinitionSchedulesActivatedInBulk`,データマート定義のスケジュールの一括有効化</li><li>`DataMartDefinitionSchedulesDeactivatedInBulk`,データマート定義のスケジュールの一括無効化</li></ul>|

:::(Info) (2024/03/05 `ETLConfigurationUpdatedFromPastRevision`アクションの削除)

`ETLConfigurationUpdatedFromPastRevision`は、転送設定のリビジョン詳細画面から**復元**がクリックされたときに取得される仕様となっていました。
一方、過去のリビジョンが実際に復元されるのは、**復元**がクリックされた後に表示される転送設定編集画面にて、**保存して適用**されたタイミングとなります。
上記の通り、`ETLConfigurationUpdatedFromPastRevision`が取得されるタイミングと、過去のリビジョンが実際に復元されるタイミングが異なっていることから、本アクションを削除することとしました。
:::
