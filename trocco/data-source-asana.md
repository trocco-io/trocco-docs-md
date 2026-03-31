---
articleId: 72bbd86f-b562-4cdf-b5a8-f00ea9e8ed09
slug: data-source-asana
title: 転送元 - Asana
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Asanaからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Asana](/docs/connection-configuration-asana)を参照ください。

## 利用上の注意・制約

:::(Warning) (API Rate Limit)

Asana APIには、一定期間内のリクエスト回数に制限があります。無料ドメインでは150リクエスト/分、有料ドメインでは1,500リクエスト/分の制限があります。制限を超えると、HTTP 429エラーが返され、一時的にAPIが使用できなくなります。詳細は[Asana公式ドキュメント − Rate Limits](https://developers.asana.com/reference/rate-limits)を参照ください。
:::

## 取得対象

### Workspaces

Asanaのワークスペース一覧を取得します。
詳しくは、[Asana公式ドキュメント − Workspaces](https://developers.asana.com/reference/workspaces)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `gid` | `string` | ワークスペースの一意識別子 |
| `name` | `string` | ワークスペース名 |
| `resource_type` | `string` | リソースタイプ |

### Projects

Asanaのプロジェクト一覧を取得します。
詳しくは、[Asana公式ドキュメント − Projects](https://developers.asana.com/reference/projects)を参照ください。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| Workspace ID | ✓ | - | プロジェクトを取得するワークスペースのIDを指定します。 |
| Team ID | - | - | プロジェクトを絞り込むチームのIDを指定できます。 |

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `gid` | `string` | プロジェクトの一意識別子 |
| `name` | `string` | プロジェクト名 |
| `archived` | `boolean` | アーカイブされているかどうか |
| `color` | `string` | プロジェクトの色 |
| `completed` | `boolean` | 完了しているかどうか |
| `completed_at` | `timestamp` | 完了日時 |
| `completed_by` | `string` | 完了したユーザー情報 |
| `created_at` | `timestamp` | 作成日時 |
| `current_status` | `string` | 現在のステータス |
| `custom_field_settings` | `string` | カスタムフィールド設定 |
| `custom_fields` | `string` | カスタムフィールド |
| `default_view` | `string` | デフォルトビュー |
| `due_date` | `string` | 期日 |
| `due_on` | `string` | 期日 |
| `followers` | `string` | フォロワー |
| `html_notes` | `string` | HTML形式のノート |
| `icon` | `string` | アイコン |
| `members` | `string` | メンバー |
| `modified_at` | `timestamp` | 更新日時 |
| `notes` | `string` | ノート |
| `owner` | `string` | オーナー |
| `permalink_url` | `string` | 永続的なURL |
| `public` | `boolean` | 公開されているかどうか |
| `start_on` | `string` | 開始日 |
| `team` | `string` | チーム情報 |
| `workspace` | `string` | ワークスペース情報 |

### Tasks

Asanaのタスク一覧を取得します。
詳しくは、[Asana公式ドキュメント − Tasks](https://developers.asana.com/reference/tasks)を参照ください。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| Project ID | ✓ | - | タスクを取得するプロジェクトのIDを指定します。 |
| Completed Since | - | - | 指定した日時以降に完了したタスクのみを取得します。<br>YYYY-MM-DDTHH:MM:SSZ形式（例：2024-01-01T00:00:00Z）で入力してください。 |
| Modified Since | - | - | 指定した日時以降に更新されたタスクのみを取得します。<br>YYYY-MM-DDTHH:MM:SSZ形式（例：2024-01-01T00:00:00Z）で入力してください。 |

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `gid` | `string` | タスクの一意識別子 |
| `name` | `string` | タスク名 |
| `resource_subtype` | `string` | リソースのサブタイプ |
| `approval_status` | `string` | 承認ステータス |
| `assignee` | `string` | 担当者 |
| `completed` | `boolean` | 完了しているかどうか |
| `completed_at` | `timestamp` | 完了日時 |
| `completed_by` | `string` | 完了したユーザー情報 |
| `created_at` | `timestamp` | 作成日時 |
| `custom_fields` | `string` | カスタムフィールド |
| `dependencies` | `string` | 依存関係 |
| `dependents` | `string` | 被依存関係 |
| `due_at` | `timestamp` | 期日時間 |
| `due_on` | `string` | 期日 |
| `external` | `string` | 外部情報 |
| `followers` | `string` | フォロワー |
| `hearted` | `boolean` | いいね済みかどうか |
| `hearts` | `string` | いいね情報 |
| `html_notes` | `string` | HTML形式のノート |
| `is_rendered_as_separator` | `boolean` | セパレーターとして表示されるかどうか |
| `liked` | `boolean` | いいね済みかどうか |
| `likes` | `string` | いいね情報 |
| `memberships` | `string` | メンバーシップ情報 |
| `modified_at` | `timestamp` | 更新日時 |
| `notes` | `string` | ノート |
| `num_hearts` | `integer` | いいね数 |
| `num_likes` | `integer` | いいね数 |
| `num_subtasks` | `integer` | サブタスク数 |
| `parent` | `string` | 親タスク情報 |
| `permalink_url` | `string` | 永続的なURL |
| `projects` | `string` | プロジェクト情報 |
| `start_on` | `string` | 開始日 |
| `tags` | `string` | タグ |
| `workspace` | `string` | ワークスペース情報 |

### Users

Asanaのユーザー一覧を取得します。
詳しくは、[Asana公式ドキュメント − Users](https://developers.asana.com/reference/users)を参照ください。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| Workspace ID | ✓ | - | ユーザーを取得するワークスペースのIDを指定します。 |

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `gid` | `string` | ユーザーの一意識別子 |
| `name` | `string` | ユーザー名 |
| `email` | `string` | メールアドレス |

### Team Memberships

Asanaのチームメンバーシップ情報を取得します。
詳しくは、[Asana公式ドキュメント − Team Memberships](https://developers.asana.com/reference/team-memberships)を参照ください。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| Team ID | ✓ | - | メンバーシップ情報を取得するチームのIDを指定します。 |

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `gid` | `string` | チームメンバーシップの一意識別子 |
| `team` | `string` | チーム情報 |
| `user` | `string` | ユーザー情報 |
| `is_admin` | `boolean` | 管理者権限があるかどうか |
| `is_guest` | `boolean` | ゲスト権限かどうか |
| `is_limited_access` | `boolean` | アクセスが制限されているかどうか |

### Teams

Asanaの指定したワークスペース内のチーム一覧を取得します。
詳しくは、[Asana公式ドキュメント − Teams](https://developers.asana.com/reference/teams)を参照ください。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| Workspace ID | ✓ | - | チームを取得するワークスペースのIDを指定します。 |

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `gid` | `string` | チームの一意識別子 |
| `name` | `string` | チーム名 |
| `description` | `string` | チームの説明 |
| `html_description` | `string` | HTML形式のチーム説明 |
| `organization` | `string` | 組織情報 |

### Workspace Memberships

Asanaの指定したワークスペース内のメンバーシップ情報を取得します。
詳しくは、[Asana公式ドキュメント − Workspace Memberships](https://developers.asana.com/reference/workspace-memberships)を参照ください。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| Workspace ID | ✓ | - | メンバーシップ情報を取得するワークスペースのIDを指定します。 |

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `gid` | `string` | ワークスペースメンバーシップの一意識別子 |
| `user` | `string` | ユーザー情報 |
| `resource_type` | `string` | リソースタイプ |
| `workspace` | `string` | ワークスペース情報 |
