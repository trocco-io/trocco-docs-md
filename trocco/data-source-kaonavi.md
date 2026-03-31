---
articleId: 49fcf775-9cc5-4092-9c99-ec68d9b4fa70
slug: data-source-kaonavi
title: 転送元 - カオナビ
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、カオナビからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - カオナビ](/docs/connection-configuration-kaonavi)を参照ください。

## 利用上の注意・制約

:::(Warning) (APIの操作対象設定)

カオナビAPIを利用するには、カオナビの管理画面で操作対象を有効化する必要があります。
**管理者機能トップ** > **公開API v2 情報** > **操作対象の管理**から、取得したいデータの操作を有効にしてください。
デフォルトではすべての操作がオフになっています。
:::

:::(Warning) (アクセストークンの有効期限)

カオナビAPIのアクセストークンの有効期限は**60分間**です。
有効期限内にデータの取得が完了しなかった場合、転送が失敗する可能性があります。
大量のデータを転送する場合は、取得対象を分割するなどの対応を検討してください。
:::

## 取得対象

### メンバー情報レイアウト設定

メンバー情報のレイアウト設定を取得します。
詳しくは、[カオナビ公式ドキュメント − API v2](https://developer.kaonavi.jp/api/v2.0/index.html)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `code` | `json` | 社員番号のレイアウト設定 |
| `name` | `json` | 氏名のレイアウト設定 |
| `name_kana` | `json` | フリガナのレイアウト設定 |
| `mail` | `json` | メールアドレスのレイアウト設定 |
| `entered_date` | `json` | 入社日のレイアウト設定 |
| `retired_date` | `json` | 退職日のレイアウト設定 |
| `gender` | `json` | 性別のレイアウト設定 |
| `birthday` | `json` | 生年月日のレイアウト設定 |
| `department` | `json` | 所属のレイアウト設定 |
| `sub_departments` | `json` | 兼務情報のレイアウト設定 |
| `custom_fields` | `json` | カスタム項目のレイアウト設定 |

### シート情報レイアウト設定

シート情報のレイアウト設定を取得します。
詳しくは、[カオナビ公式ドキュメント − API v2](https://developer.kaonavi.jp/api/v2.0/index.html)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `id` | `long` | シートの一意識別子 |
| `name` | `string` | シート名 |
| `record_type` | `long` | レコードタイプ |
| `custom_fields` | `json` | カスタム項目のレイアウト設定 |

### メンバー情報

メンバー情報を取得します。
詳しくは、[カオナビ公式ドキュメント − API v2](https://developer.kaonavi.jp/api/v2.0/index.html)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `id` | `long` | メンバーの一意識別子 |
| `code` | `string` | 社員番号 |
| `name` | `string` | 氏名 |
| `name_kana` | `string` | フリガナ |
| `mail` | `string` | メールアドレス |
| `entered_date` | `string` | 入社日 |
| `retired_date` | `string` | 退職日 |
| `gender` | `string` | 性別 |
| `birthday` | `string` | 生年月日 |
| `age` | `long` | 年齢 |
| `years_of_service` | `string` | 勤続年数 |
| `department` | `json` | 所属情報 |
| `sub_departments` | `json` | 兼務情報 |
| `face_image` | `json` | 顔写真情報 |
| `custom_fields` | `json` | カスタム項目 |

### シート情報

指定したシートIDのシート情報を取得します。
詳しくは、[カオナビ公式ドキュメント − API v2](https://developer.kaonavi.jp/api/v2.0/index.html)を参照ください。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| シートID | ✓ | - | 取得するシートのIDを入力します。<br>シートIDはシート情報レイアウト設定から取得できます。 |

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `id` | `long` | シートの一意識別子 |
| `name` | `string` | シート名 |
| `record_type` | `long` | レコードタイプ |
| `updated_at` | `string` | 更新日時 |
| `member_data` | `json` | メンバーごとのシートデータ |

### 所属ツリー

所属ツリー（部署階層）を取得します。
詳しくは、[カオナビ公式ドキュメント − API v2](https://developer.kaonavi.jp/api/v2.0/index.html)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `code` | `string` | 所属コード |
| `name` | `string` | 所属名 |
| `parent_code` | `string` | 親所属コード |
| `leader_member_code` | `string` | 責任者の社員番号 |
| `order` | `long` | 表示順 |
| `memo` | `string` | メモ |

### ユーザー情報

カオナビにログインできるユーザーの情報を取得します。
詳しくは、[カオナビ公式ドキュメント − API v2](https://developer.kaonavi.jp/api/v2.0/index.html)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `id` | `long` | ユーザーの一意識別子 |
| `email` | `string` | メールアドレス |
| `member_code` | `string` | 紐づくメンバーの社員番号 |
| `role` | `json` | ロール情報 |
| `last_login_at` | `string` | 最終ログイン日時 |
| `is_active` | `boolean` | アクティブかどうか |
| `password_locked` | `boolean` | パスワードがロックされているかどうか |
| `use_smartphone` | `boolean` | スマートフォン利用が有効かどうか |

### ロール情報

ロール（権限）の一覧を取得します。
詳しくは、[カオナビ公式ドキュメント − API v2](https://developer.kaonavi.jp/api/v2.0/index.html)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `id` | `long` | ロールの一意識別子 |
| `name` | `string` | ロール名 |
| `type` | `string` | ロールタイプ |

### 拡張アクセス設定

拡張アクセス設定を取得します。
詳しくは、[カオナビ公式ドキュメント − API v2](https://developer.kaonavi.jp/api/v2.0/index.html)を参照ください。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 拡張アクセス設定の種別 | ✓ | `member` | 取得する拡張アクセス設定の種別を選択します。<br>`member`（メンバー）または`department`（所属）を選択できます。 |

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `user_id` | `long` | ユーザーの一意識別子 |
| `add_codes` | `json` | 追加で閲覧可能なコードの一覧 |
| `exclusion_codes` | `json` | 閲覧対象から除外するコードの一覧 |

### マスター情報

マスター情報（選択肢の一覧）を取得します。
詳しくは、[カオナビ公式ドキュメント − API v2](https://developer.kaonavi.jp/api/v2.0/index.html)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `sheet_name` | `string` | シート名 |
| `id` | `long` | カスタム項目の一意識別子 |
| `name` | `string` | カスタム項目名 |
| `enum_option_data` | `json` | 選択肢データ |

### Webhook設定

Webhook設定の一覧を取得します。
詳しくは、[カオナビ公式ドキュメント − API v2](https://developer.kaonavi.jp/api/v2.0/index.html)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
| `id` | `long` | Webhookの一意識別子 |
| `url` | `string` | Webhook URL |
| `events` | `json` | トリガーとなるイベントの一覧 |
| `secret_token` | `string` | シークレットトークン |
| `updated_at` | `string` | 更新日時 |
| `created_at` | `string` | 作成日時 |
