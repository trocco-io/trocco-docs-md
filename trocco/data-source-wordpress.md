---
articleId: 9e5f65d7-5415-49b3-94f5-d6acab895270
slug: data-source-wordpress
title: 転送元 - WordPress
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---

本ページでは、WordPressからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - WordPress](/docs/connection-configuration-wordpress)を参照ください。

## 利用上の注意・制約

### 認証について

WordPress REST APIは認証なしで利用します。
公開情報のみ取得可能です。


### キャッシュについて

WordPressのキャッシュ機能が有効な場合、取得するデータがキャッシュされることがあります。
リアルタイムのデータが必要な場合は、キャッシュ設定を確認してください。

### プラグインの影響

WordPressにインストールされているプラグインによって、REST APIの動作が変わる可能性があります。
データが取得できない場合や期待と異なる場合は、プラグイン設定を確認してください。

## 取得対象

### Categories

WordPressに登録されているカテゴリーの一覧を取得します。
詳しくは、[WordPress公式ドキュメント - Categories Reference](https://developer.wordpress.org/rest-api/reference/categories/)を参照ください。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
|`id`|`long`| カテゴリID |
|`count`|`long`| 紐づく投稿数 |
|`description`|`string`| 説明 |
|`link`|`string`| カテゴリURL |
|`name`|`string`| カテゴリ名 |
|`slug`|`string`| スラッグ |
|`taxonomy`|`string`| タクソノミー名 |
|`parent`|`long`| 親カテゴリID |
|`meta`|`json`| メタデータ |
|`acf`|`json`| Advanced Custom Fields のデータ（プラグイン使用時） |
|`_links`|`json`| リンク情報 |

### Comments

WordPressに登録されているコメントの一覧を取得します。
詳しくは、[WordPress公式ドキュメント - Comments Reference](https://developer.wordpress.org/rest-api/reference/comments/)を参照ください。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| **Published after** | - | - | 指定した日時以降に投稿されたコメントを取得します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss` |
| **Published before** | - | - | 指定した日時以前に投稿されたコメントを取得します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss` |

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
|`id`|`long`| コメントID |
|`post`|`long`| 紐づく投稿ID |
|`parent`|`long`| 親コメントID |
|`author`|`long`| 著者ID |
|`author_name`|`string`| 著者名 |
|`author_url`|`string`| 著者URL |
|`date`|`string`| 投稿日時 |
|`date_gmt`|`string`| 投稿日時（GMT） |
|`content`|`json`| コメント本文 |
|`link`|`string`| コメントURL |
|`status`|`string`| ステータス |
|`type`|`string`| コメントタイプ |
|`author_avatar_urls`|`json`| 著者アバターURL |
|`meta`|`json`| メタデータ |
|`_links`|`json`| リンク情報 |

### Navigations

WordPressのFull Site Editingで使用されるナビゲーション（メニュー）情報を取得します。
詳しくは、[WordPress公式ドキュメント - Navigation Reference](https://developer.wordpress.org/rest-api/reference/wp_navigations/)を参照ください。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| **Published after** | - | - | 指定した日時以降に作成されたナビゲーションを取得します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss` |
| **Published before** | - | - | 指定した日時以前に作成されたナビゲーションを取得します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss` |

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
|`id`|`long`| ナビゲーションID |
|`date`|`string`| 作成日時 |
|`date_gmt`|`string`| 作成日時（GMT） |
|`guid`|`json`| グローバル一意識別子 |
|`modified`|`string`| 更新日時 |
|`modified_gmt`|`string`| 更新日時（GMT） |
|`slug`|`string`| スラッグ |
|`status`|`string`| ステータス |
|`type`|`string`| コンテンツタイプ |
|`link`|`string`| URL |
|`title`|`json`| タイトル |
|`content`|`json`| ナビゲーションコンテンツ（ブロック形式） |
|`template`|`string`| テンプレート |
|`acf`|`json`| Advanced Custom Fields のデータ（プラグイン使用時） |
|`_links`|`json`| リンク情報 |

### Pages

WordPressに登録されているページの一覧を取得します。
詳しくは、[WordPress公式ドキュメント - Pages Reference](https://developer.wordpress.org/rest-api/reference/pages/)を参照ください。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| **Published after** | - | - | 指定した日時以降に公開されたページを取得します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss` |
| **Published before** | - | - | 指定した日時以前に公開されたページを取得します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss` |

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
|`id`|`long`| ページID |
|`date`|`string`| 公開日時（サイトのタイムゾーン） |
|`date_gmt`|`string`| 公開日時（GMT） |
|`guid`|`json`| グローバル一意識別子 |
|`modified`|`string`| 更新日時 |
|`modified_gmt`|`string`| 更新日時（GMT） |
|`slug`|`string`| スラッグ |
|`status`|`string`| ステータス |
|`type`|`string`| コンテンツタイプ |
|`link`|`string`| ページURL |
|`title`|`json`| タイトル |
|`content`|`json`| 本文 |
|`excerpt`|`json`| 抜粋 |
|`author`|`long`| 著者ID |
|`featured_media`|`long`| アイキャッチ画像のメディアID |
|`parent`|`long`| 親ページID |
|`menu_order`|`long`| メニュー表示順 |
|`comment_status`|`string`| コメント可否 |
|`ping_status`|`string`| ピンバック可否 |
|`template`|`string`| テンプレート |
|`meta`|`json`| メタデータ |
|`class_list`|`json`| クラス一覧 |
|`acf`|`json`| Advanced Custom Fields のデータ（プラグイン使用時） |
|`aioseo_notices`|`json`| All in One SEO のデータ（プラグイン使用時） |
|`aioseo_head`|`string`| All in One SEO のデータ（プラグイン使用時） |
|`aioseo_head_json`|`json`| All in One SEO のデータ（プラグイン使用時） |

### Posts

WordPressに登録されている投稿の一覧を取得します。
詳しくは、[WordPress公式ドキュメント - Posts Reference](https://developer.wordpress.org/rest-api/reference/posts/)を参照ください。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| **Published after** | - | - | 指定した日時以降に公開された投稿を取得します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss`<br>例: `2024-01-01T00:00:00` |
| **Published before** | - | - | 指定した日時以前に公開された投稿を取得します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss` |

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
|`id`|`long`| 投稿ID |
|`date`|`string`| 公開日時（サイトのタイムゾーン） |
|`date_gmt`|`string`| 公開日時（GMT） |
|`guid`|`json`| グローバル一意識別子 |
|`modified`|`string`| 更新日時 |
|`modified_gmt`|`string`| 更新日時（GMT） |
|`slug`|`string`| スラッグ |
|`status`|`string`| ステータス（publish, future, draft, pending, private） |
|`type`|`string`| 投稿タイプ |
|`link`|`string`| 投稿URL |
|`title`|`json`| タイトル |
|`content`|`json`| 本文 |
|`excerpt`|`json`| 抜粋 |
|`author`|`long`| 著者ID |
|`featured_media`|`long`| アイキャッチ画像のメディアID |
|`comment_status`|`string`| コメント可否（open, closed） |
|`ping_status`|`string`| ピンバック可否（open, closed） |
|`sticky`|`boolean`| 固定表示かどうか |
|`template`|`string`| テンプレート |
|`format`|`string`| 投稿フォーマット |
|`meta`|`json`| メタデータ |
|`categories`|`json`| カテゴリID一覧 |
|`tags`|`json`| タグID一覧 |
|`class_list`|`json`| クラス一覧 |
|`acf`|`json`| Advanced Custom Fields のデータ（プラグイン使用時） |
|`aioseo_notices`|`json`| All in One SEO のデータ（プラグイン使用時） |
|`jetpack_featured_media_url`|`string`| Jetpack のデータ（プラグイン使用時） |
|`aioseo_head`|`string`| All in One SEO のデータ（プラグイン使用時） |
|`aioseo_head_json`|`json`| All in One SEO のデータ（プラグイン使用時） |
|`aioseo_meta_data`|`json`| All in One SEO のデータ（プラグイン使用時） |
|`aioseo_breadcrumb`|`string`| All in One SEO のデータ（プラグイン使用時） |
|`aioseo_breadcrumb_json`|`json`| All in One SEO のデータ（プラグイン使用時） |
|`custom_permalink`|`string`| カスタムパーマリンク（プラグイン使用時） |
|`jetpack_sharing_enabled`|`boolean`| Jetpack のデータ（プラグイン使用時） |
|`_links`|`json`| リンク情報 |

### Statuses

WordPressで使用可能な投稿ステータス（publish、draft、pendingなど）の定義情報を取得します。
詳しくは、[WordPress公式ドキュメント - Statuses Reference](https://developer.wordpress.org/rest-api/reference/statuses/)を参照ください。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
|`statuses`|`json`| ステータス一覧（オブジェクト形式で全ステータス定義を含む） |

### Tags

WordPressに登録されているタグの一覧を取得します。
詳しくは、[WordPress公式ドキュメント - Tags Reference](https://developer.wordpress.org/rest-api/reference/tags/)を参照ください。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
|`id`|`long`| タグID |
|`count`|`long`| 紐づく投稿数 |
|`description`|`string`| 説明 |
|`link`|`string`| タグURL |
|`name`|`string`| タグ名 |
|`slug`|`string`| スラッグ |
|`taxonomy`|`string`| タクソノミー名 |
|`meta`|`json`| メタデータ |
|`_links`|`json`| リンク情報 |

### Taxonomies

WordPressで利用可能な分類法（タクソノミー）の定義情報を取得します。カテゴリーやタグなどの分類方式のメタ情報です。
詳しくは、[WordPress公式ドキュメント - Taxonomies Reference](https://developer.wordpress.org/rest-api/reference/taxonomies/)を参照ください。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
|`taxonomies`|`json`| タクソノミー一覧（オブジェクト形式で全タクソノミー定義を含む） |

### Types

WordPressで利用可能な投稿タイプの定義情報を取得します。post（投稿）やpage（ページ）などの投稿タイプのメタ情報です。
詳しくは、[WordPress公式ドキュメント - Types Reference](https://developer.wordpress.org/rest-api/reference/types/)を参照ください。

#### 取得データ

| カラム名 | デフォルトのデータ型 | 補足事項 |
| --- | --- | --- |
|`types`|`json`| 投稿タイプ一覧（オブジェクト形式で全タイプ定義を含む） |
