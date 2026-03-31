---
articleId: 6f8f0bfb-f167-46d5-af60-e491c073d768
slug: data-source-backlog
title: 転送元 - Backlog
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Backlogからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Backlog](/docs/connection-configuration-backlog)を参照ください。

## 利用上の注意・制約

:::(Warning) (API制限について)

Backlog APIはプランやAPIの種類毎に制限の内容が異なります。
詳細は[Backlog API とは - レート制限](https://developer.nulab.com/ja/docs/backlog/rate-limit/)を参照ください。
:::

:::(Info) (プロジェクトIDの取得)

多くの取得対象では、プロジェクトIDの指定が必要です。
はじめに取得対象として**プロジェクト一覧**を選択した転送設定を作成・実行し、プロジェクトIDを取得することを推奨します。
:::

## 取得対象

### ユーザー一覧

Backlogのユーザー一覧を取得します。
詳しくは、[Backlog API - Users](https://developer.nulab.com/ja/docs/backlog/api/2/get-user-list/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|ユーザーの一意識別子|
|`userId`|`string`|ユーザーID|
|`name`|`string`|ユーザー名|
|`roleType`|`long`|権限タイプ|
|`lang`|`string`|言語設定|
|`mailAddress`|`string`|メールアドレス|
|`nulabAccount`|`json`|Nulabアカウント情報|
|`keyword`|`string`|キーワード|
|`lastLoginTime`|`timestamp`|最終ログイン日時|

### プロジェクト一覧

Backlogのプロジェクト一覧を取得します。
詳しくは、[Backlog API - Projects](https://developer.nulab.com/ja/docs/backlog/api/2/get-project-list/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|プロジェクトの一意識別子|
|`projectKey`|`string`|プロジェクトキー|
|`name`|`string`|プロジェクト名|
|`chartEnabled`|`boolean`|チャート機能が有効かどうか|
|`useResolvedForChart`|`boolean`|チャート機能で解決済みを使用するかどうか|
|`subtaskingEnabled`|`boolean`|サブタスク機能が有効かどうか|
|`projectLeaderCanEditProjectLeader`|`boolean`|プロジェクトリーダーの編集権限|
|`useWiki`|`boolean`|Wiki機能が有効かどうか|
|`useFileSharing`|`boolean`|ファイル共有機能が有効かどうか|
|`useWikiTreeView`|`boolean`|Wikiツリービューが有効かどうか|
|`useSubversion`|`boolean`|Subversion機能が有効かどうか|
|`useGit`|`boolean`|Git機能が有効かどうか|
|`useOriginalImageSizeAtWiki`|`boolean`|Wiki内で元画像サイズを使用するかどうか|
|`textFormattingRule`|`string`|テキスト整形ルール|
|`archived`|`boolean`|アーカイブ済みかどうか|
|`displayOrder`|`long`|表示順序|
|`useDevAttributes`|`boolean`|開発属性を使用するかどうか|

### プロジェクトユーザー一覧

指定したプロジェクトに参加するユーザー一覧を取得します。
詳しくは、[Backlog API - Project Users](https://developer.nulab.com/ja/docs/backlog/api/2/get-project-user-list/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|プロジェクトのIDまたはプロジェクトキー|✓|-|データを取得するプロジェクトのIDまたはプロジェクトキーを入力します。<br>プロジェクトIDは、プロジェクト一覧から取得できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|ユーザーの一意識別子|
|`userId`|`string`|ユーザーID|
|`name`|`string`|ユーザー名|
|`roleType`|`long`|権限タイプ|
|`lang`|`string`|言語設定|
|`mailAddress`|`string`|メールアドレス|
|`nulabAccount`|`json`|Nulabアカウント情報|
|`keyword`|`string`|キーワード|
|`lastLoginTime`|`timestamp`|最終ログイン日時|

### プロジェクト管理者一覧

指定したプロジェクトの管理者一覧を取得します。
詳しくは、[Backlog API - Project Administrators](https://developer.nulab.com/ja/docs/backlog/api/2/get-list-of-project-administrators/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|プロジェクトのIDまたはプロジェクトキー|✓|-|データを取得するプロジェクトのIDまたはプロジェクトキーを入力します。<br>プロジェクトIDは、プロジェクト一覧から取得できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|ユーザーの一意識別子|
|`userId`|`string`|ユーザーID|
|`name`|`string`|ユーザー名|
|`roleType`|`long`|権限タイプ|
|`lang`|`string`|言語設定|
|`mailAddress`|`string`|メールアドレス|
|`nulabAccount`|`json`|Nulabアカウント情報|
|`keyword`|`string`|キーワード|
|`lastLoginTime`|`timestamp`|最終ログイン日時|

### Webhook一覧

指定したプロジェクトのWebhook一覧を取得します。
詳しくは、[Backlog API - Webhooks](https://developer.nulab.com/ja/docs/backlog/api/2/get-list-of-webhooks/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|プロジェクトのIDまたはプロジェクトキー|✓|-|データを取得するプロジェクトのIDまたはプロジェクトキーを入力します。<br>プロジェクトIDは、プロジェクト一覧から取得できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|Webhookの一意識別子|
|`name`|`string`|Webhook名|
|`description`|`string`|Webhook説明|
|`hookUrl`|`string`|WebhookのURL|
|`allEvent`|`boolean`|全イベントを対象とするかどうか|
|`activityTypeIds`|`json`|対象のアクティビティタイプID|
|`createdUser`|`json`|作成者情報|
|`created`|`timestamp`|作成日時|
|`updatedUser`|`json`|更新者情報|
|`updated`|`timestamp`|更新日時|

### 課題一覧

Backlogの課題一覧を取得します。
詳しくは、[Backlog API - Issues](https://developer.nulab.com/ja/docs/backlog/api/2/get-issue-list/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|プロジェクトID|-|-|特定のプロジェクトの課題のみを取得する場合に、プロジェクトIDを入力します。<br>プロジェクトIDは、プロジェクト一覧から取得できます。|
|createdSince|-|-|作成日時の下限を入力します。|
|createdUntil|-|-|作成日時の上限を入力します。|
|updatedSince|-|-|更新日時の下限を入力します。|
|updatedUntil|-|-|更新日時の上限を入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|課題の一意識別子|
|`projectId`|`long`|プロジェクトID|
|`issueKey`|`string`|課題キー|
|`keyId`|`long`|課題キーID|
|`issueType`|`json`|課題の種別情報|
|`summary`|`string`|課題の件名|
|`description`|`string`|課題の詳細|
|`resolution`|`json`|課題の解決方法|
|`priority`|`json`|課題の優先度|
|`status`|`json`|課題のステータス|
|`assignee`|`json`|担当者情報|
|`category`|`json`|カテゴリ情報|
|`versions`|`json`|対象バージョン|
|`milestone`|`json`|マイルストーン|
|`startDate`|`string`|開始日|
|`dueDate`|`string`|期限日|
|`estimatedHours`|`double`|予定時間|
|`actualHours`|`double`|実績時間|
|`parentIssueId`|`long`|親課題ID|
|`createdUser`|`json`|作成者情報|
|`created`|`timestamp`|作成日時|
|`updatedUser`|`json`|更新者情報|
|`updated`|`timestamp`|更新日時|
|`customFields`|`json`|カスタム属性|
|`attachments`|`json`|添付ファイル|
|`sharedFiles`|`json`|共有ファイル|
|`externalFileLinks`|`json`|外部ファイルリンク|
|`stars`|`json`|スター|

### 課題コメント

指定した課題のコメント一覧を取得します。
詳しくは、[Backlog API - Issue Comments](https://developer.nulab.com/ja/docs/backlog/api/2/get-comment-list/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|課題のIDまたは課題キー|✓|-|コメントを取得する課題のIDまたは課題キーを入力します。<br>課題IDは、課題一覧から取得できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|コメントの一意識別子|
|`content`|`string`|コメント内容|
|`changeLog`|`json`|変更履歴|
|`createdUser`|`json`|作成者情報|
|`created`|`timestamp`|作成日時|
|`updated`|`timestamp`|更新日時|
|`stars`|`json`|スター|
|`notifications`|`json`|通知情報|
|`projectId`|`long`|プロジェクトID|
|`issueId`|`long`|課題ID|

### Wikiページ一覧

指定したプロジェクトのWikiページ一覧を取得します。
詳しくは、[Backlog API - Wiki Pages](https://developer.nulab.com/ja/docs/backlog/api/2/get-wiki-page-list/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|プロジェクトのIDまたはプロジェクトキー|✓|-|データを取得するプロジェクトのIDまたはプロジェクトキーを入力します。<br>プロジェクトIDは、プロジェクト一覧から取得できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|Wikiページの一意識別子|
|`projectId`|`long`|プロジェクトID|
|`name`|`string`|Wikiページ名|
|`content`|`string`|Wikiページ内容|
|`tags`|`json`|タグ情報|
|`attachments`|`json`|添付ファイル|
|`sharedFiles`|`json`|共有ファイル|
|`stars`|`json`|スター|
|`createdUser`|`json`|作成者情報|
|`created`|`timestamp`|作成日時|
|`updatedUser`|`json`|更新者情報|
|`updated`|`timestamp`|更新日時|

### Gitリポジトリ一覧

指定したプロジェクトのGitリポジトリ一覧を取得します。
詳しくは、[Backlog API - Git Repositories](https://developer.nulab.com/ja/docs/backlog/api/2/get-list-of-git-repositories/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|プロジェクトのIDまたはプロジェクトキー|✓|-|データを取得するプロジェクトのIDまたはプロジェクトキーを入力します。<br>プロジェクトIDは、プロジェクト一覧から取得できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|リポジトリの一意識別子|
|`projectId`|`long`|プロジェクトID|
|`name`|`string`|リポジトリ名|
|`description`|`string`|リポジトリの説明|
|`hookUrl`|`string`|WebhookのURL|
|`httpUrl`|`string`|HTTP URL|
|`sshUrl`|`string`|SSH URL|
|`displayOrder`|``long``|表示順序|
|`pushedAt`|`timestamp`|最終プッシュ日時|
|`createdUser`|`json`|作成者情報|
|`created`|`timestamp`|作成日時|
|`updatedUser`|`json`|更新者情報|
|`updated`|`timestamp`|更新日時|

### プルリクエスト一覧

指定したプロジェクトのリポジトリ内のプルリクエスト一覧を取得します。
詳しくは、[Backlog API - Pull Requests](https://developer.nulab.com/ja/docs/backlog/api/2/get-pull-request-list/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|プロジェクトのIDまたはプロジェクトキー|✓|-|データを取得するプロジェクトのIDまたはプロジェクトキーを入力します。<br>プロジェクトIDは、プロジェクト一覧から取得できます。|
|リポジトリのIDまたはリポジトリ名|✓|-|データを取得するリポジトリのIDまたはリポジトリ名を入力します。<br>リポジトリIDは、Gitリポジトリ一覧から取得できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|プルリクエストの一意識別子|
|`projectId`|`long`|プロジェクトID|
|`repositoryId`|`long`|リポジトリID|
|`number`|`long`|プルリクエスト番号|
|`summary`|`string`|プルリクエストの件名|
|`description`|`string`|プルリクエストの詳細|
|`base`|`string`|ベースブランチ|
|`branch`|`string`|ブランチ|
|`status`|`json`|プルリクエストのステータス|
|`assignee`|`json`|担当者情報|
|`issue`|`json`|関連課題情報|
|`baseCommit`|`string`|ベースコミット|
|`branchCommit`|`string`|ブランチコミット|
|`closeAt`|`timestamp`|クローズ日時|
|`mergeAt`|`timestamp`|マージ日時|
|`createdUser`|`json`|作成者情報|
|`created`|`timestamp`|作成日時|
|`updatedUser`|`json`|更新者情報|
|`updated`|`timestamp`|更新日時|
|`attachments`|`json`|添付ファイル|
|`stars`|`json`|スター|

### チーム一覧

Backlogのチーム一覧を取得します。
詳しくは、[Backlog API - Teams](https://developer.nulab.com/ja/docs/backlog/api/2/get-project-team-list/)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|チームの一意識別子|
|`name`|`string`|チーム名|
|`members`|`json`|チームメンバー情報|
|`displayOrder`|`long`|表示順序|
|`createdUser`|`json`|作成者情報|
|`created`|`timestamp`|作成日時|
|`updatedUser`|`json`|更新者情報|
|`updated`|`timestamp`|更新日時|
