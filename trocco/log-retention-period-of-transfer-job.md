---
articleId: 0f32da3f-f436-44ed-9db9-cc5d9571fc61
slug: log-retention-period-of-transfer-job
title: TROCCOの各種ジョブのログの保持期間について
parentCategoryId: 6a67a4f7-9a63-41a2-8854-8b10ff8ad47d
languageCode: ja
---
## 概要

TROCCOの各種ジョブの実行ログは、保存期限の定めがあります。
以下のジョブは、ジョブ実行後より**365日間**保存されます。

- 転送ジョブ
- データマートジョブ
- dbtジョブ
- ワークフロータスク（[ワークフローデータチェック](/docs/workflow-data-check)などを含む）

:::(Warning) (実行ログについて)

ジョブの実行履歴ログを指します。
[監査ログ機能](docs/about-audit-log)とは異なります。
![log-retention-period-of-transfer-job-2025-04-14-7-5-5](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/log-retention-period-of-transfer-job-2025-04-14-7-5-5.png){height="" width="50%"}

:::

:::(Warning) (保持期間を過ぎたジョブの実行ログ)

実行ログは以下の通り削除された状態で表示されます。
![log-retention-period-of-transfer-job-2025-04-14-7-5-6](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/log-retention-period-of-transfer-job-2025-04-14-7-5-6.png){height="" width="50%"}
:::

## データプレビューの削除について

TROCCOでは、転送設定STEP2のデータプレビューに使用したプレビュー内容をTROCCOサービス内部に保存しない設定を選択できます。
詳しくは、[データプレビューの削除について](/docs/data-preview-removal)を参照ください。
