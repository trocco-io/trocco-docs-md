---
articleId: cf5d98e9-2192-4bc5-8c7f-cf88009902f7
slug: release-note-2024-10
title: リリースノート-2024年10月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2024年10月のリリース情報をお届けします**

## お知らせ

### 実行トリガー設定機能の廃止

実行トリガー設定機能を廃止しました。
これにより、実行トリガー設定に関する項目が削除され、設定済みの実行トリガー設定は無効となります。
今後は[ワークフロー](/docs/about-workflow)機能をご利用ください。

## ワークフロー定義

### ワークフロー定義の変更履歴が確認できるように

ワークフロー定義詳細画面に**変更履歴**タブを追加しました。
これにより、ワークフロー定義の変更履歴を確認できるようになりました。

:::(Warning) (確認できる期間)

**2024年9月17日以降**の変更履歴を確認できます。
:::

![release-notes-2024-10-10-17-00-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-10-10-17-00-1.png){height="" width="50%"}

### ワークフロー定義で過去の変更内容を復元できるように

ワークフロー定義詳細画面の変更履歴タブから、過去の変更内容を復元できるようになりました。
復元したいリビジョンの**詳細設定・復元**をクリックするとリビジョン詳細画面が表示されます。
差分を確認し、**設定を復元**をクリックすると、そのリビジョン時点の設定に戻すことができます。

![release-notes-2024-10-28-19-30-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-10-28-19-30-0.gif){height="" width="50%"}

## TROCCO API

### ユーザーAPIを追加

TROCCO APIでユーザー情報に関する以下操作を行えるようになりました。

- [ユーザー一覧取得](/trocco-api/apidocs/get-users)
- [ユーザー作成](/trocco-api/apidocs/post-user)
- [ユーザー詳細取得](/trocco-api/apidocs/get-user)
- [ユーザー更新](/trocco-api/apidocs/patch-user)
- [ユーザー削除](/trocco-api/apidocs/delete-user)

## 接続情報

### Snowflake接続情報にてキーペア認証が推奨に・接続確認できるように

接続情報を作成・編集する際の認証方式において、ユーザー・パスワード認証が非推奨になりました。
キーペア認証でも事前に**接続を確認**できるようになりましたので、今後は**キーペア認証**をご利用ください。

![release-note-2024-10-2024-11-06-13-57-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-10-2024-11-06-13-57-0.png){height="" width="50%"}

## 転送設定

### 転送設定一覧にて「最近更新された順」で並び替えが可能に

転送設定一覧画面の並び替え条件に、**最近更新された順**を追加しました。
これにより、修正した転送設定を見つけやすくなりました。

![release-notes-2024-10-04-11-15-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-10-04-11-15-0.png){height="" width="50%"}

### 転送元SHANON MARKETING PLATFORMでタイムアウトの設定ができるように

転送設定STEP1 > 詳細設定にタイムアウトに関する設定項目を追加しました。
詳しくは、[転送元 - SHANON MARKETING PLATFORM](/docs/data-source-shanon-marketing-platform)を参照ください。

### 転送元TROCCO Web行動ログの差分転送に関する仕様を変更

差分転送に使用するキーを**最後に転送されたパス**から**最後に転送されたファイルの更新日時**に変更しました。
詳しくは、[転送元 - TROCCO Web行動ログ](/docs/data-source-n-analytics-log)を参照ください。

## コネクタAPIアップデート

### 転送元Yahoo!検索広告・転送元Yahoo!ディスプレイ広告（運用型）

転送時に使用するYahoo!広告 APIのバージョンを、v12から**v13**へアップデートしました。
新バージョンについて、それぞれ以下のドキュメントを参照ください。
- [Yahoo!広告 API | 検索広告 API v13 リリースノート](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/ysa-v13.html)
- [Yahoo!広告 API | ディスプレイ広告 API v13 リリースノート](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/yda-v13.html)
