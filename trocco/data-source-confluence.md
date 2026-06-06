---
articleId: 91a3fe59-a247-4d2a-8de1-acaa32c526d0
slug: data-source-confluence
title: 転送元 - Confluence
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

Confluenceのデータを転送する設定のDocsです。
接続に関する設定については、[接続情報 - Confluence](/docs/connection-configuration-confluence)を参照ください。

## 利用上の注意・制約

### 認証について

Confluence APIは、Atlassian APIトークンを使用した認証方式を採用しています。
TROCCOでは、メールアドレスとAPIトークンを使用してデータを取得します。

詳しくは、[Basic auth for REST APIs](https://developer.atlassian.com/cloud/confluence/basic-auth-for-rest-apis/)を参照ください。

### API制限について

Confluence APIには以下の制限があります。

#### レート制限

Atlassian APIのレート制限については、[Rate limiting](https://developer.atlassian.com/cloud/confluence/rate-limiting/)をご参照ください。
大量のデータを頻繁に取得する場合は、制限に注意が必要です。

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| Confluence接続情報 | Yes | - | あらかじめ登録してある[Confluenceの接続情報](/docs/connection-configuration-confluence)から、今回の転送設定に必要な権限を持つものを選択します。 |
| 取得対象 | Yes | - | 取得するデータの種類を選択してください。詳しくは、[取得対象](/docs/data-source-confluence#取得対象)を参照ください。 |

## 取得対象

### pages

ページ一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|本文フォーマット|No|-|取得する本文の形式を指定します。ストレージ形式またはAtlassianドキュメント形式から選択します。 |

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`| ページID |
|`status`|`string`| ステータス |
|`title`|`string`| タイトル |
|`spaceId`|`string`| スペースID |
|`parentId`|`string`| 親ページID |
|`authorId`|`string`| 作成者ID |
|`createdAt`|`string`| 作成日時 |
|`version`|`json`| バージョン情報 |
|`body`|`json`| 本文（本文フォーマットに応じた形式） |
|`parentType`|`string`| 親タイプ |
|`position`|`long`| 表示順 |
|`ownerId`|`string`| オーナーID |
|`lastOwnerId`|`string`| 最終オーナーID |
|`_links`|`json`| リンク情報 |

### spaces

スペース一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|説明フォーマット|No|-|取得する説明の形式を指定します。書式なしまたは表示形式から選択します。 |
|アイコンを含める|No|無効|アイコンを含めるかどうかを設定します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`| スペースID |
|`key`|`string`| スペースキー |
|`name`|`string`| スペース名 |
|`type`|`string`| スペースタイプ |
|`status`|`string`| ステータス |
|`description`|`json`| 説明（説明フォーマットに応じた形式） |
|`authorId`|`string`| 作成者ID |
|`createdAt`|`string`| 作成日時 |
|`homepageId`|`string`| ホームページID |
|`icon`|`json`| アイコン情報（アイコンを含めるが有効の場合） |
|`_links`|`json`| リンク情報 |

### blogposts

ブログ一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|本文フォーマット|No|-|取得する本文の形式を指定します。ストレージ形式またはAtlassianドキュメント形式から選択します。 |

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`| ブログ投稿ID |
|`status`|`string`| ステータス |
|`title`|`string`| タイトル |
|`spaceId`|`string`| スペースID |
|`authorId`|`string`| 作成者ID |
|`createdAt`|`string`| 作成日時 |
|`version`|`json`| バージョン情報 |
|`body`|`json`| 本文（本文フォーマットに応じた形式） |
|`_links`|`json`| リンク情報 |

### attachments

添付ファイル一覧を取得します。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`| 添付ファイルID |
|`status`|`string`| ステータス |
|`title`|`string`| タイトル（ファイル名） |
|`createdAt`|`string`| 作成日時 |
|`pageId`|`string`| 紐づくページID |
|`blogPostId`|`string`| 紐づくブログ投稿ID |
|`customContentId`|`string`| カスタムコンテンツID |
|`mediaType`|`string`| メディアタイプ |
|`mediaTypeDescription`|`string`| メディアタイプの説明 |
|`comment`|`string`| コメント |
|`fileId`|`string`| ファイルID |
|`fileSize`|`long`| ファイルサイズ（バイト） |
|`webuiLink`|`string`| Web UI リンク |
|`downloadLink`|`string`| ダウンロードリンク |
|`version`|`json`| バージョン情報 |
|`_links`|`json`| リンク情報 |

### labels

ラベル一覧を取得します。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`| ラベルID |
|`name`|`string`| ラベル名 |
|`prefix`|`string`| ラベルプレフィックス |

### tasks

タスク一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|本文フォーマット|No|-|取得する本文の形式を指定します。ストレージ形式またはAtlassianドキュメント形式から選択します。 |
|空のタスクを含める|No|無効|空のタスクを含めるかどうかを設定します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`| タスクID |
|`localId`|`string`| ローカルID |
|`spaceId`|`string`| スペースID |
|`pageId`|`string`| 紐づくページID |
|`blogPostId`|`string`| 紐づくブログ投稿ID |
|`status`|`string`| ステータス |
|`body`|`json`| タスク本文（本文フォーマットに応じた形式） |
|`createdBy`|`string`| 作成者ID |
|`assignedTo`|`string`| 担当者ID |
|`completedBy`|`string`| 完了者ID |
|`createdAt`|`string`| 作成日時 |
|`updatedAt`|`string`| 更新日時 |
|`dueAt`|`string`| 期限日時 |
|`completedAt`|`string`| 完了日時 |