---
articleId: e51e7add-6e34-4b11-b462-5c823843c06a
slug: release-note-2024-03
title: リリースノート-2024年03月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2024年03月のリリース情報をお届けします**

---
## 転送設定

### 転送先Azure Synapse Analyticsが追加 🎉

転送先Azure Synapse Analyticsを新たに追加しました。
詳しくは[転送先 - Azure Synapse Analytics](/docs/data-destination-azure-synapse-analytics)を参照ください。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-03-2024-08-29-16-11-0.png){height="" width="50%"}

### 転送元Shopifyで`collection`の取得に対応 🎉

転送元Shopifyの**ターゲット**にて、`collection`オブジェクトを選択できるようになりました。
取得される各項目など、詳しくは[転送元 - Shopify](/docs/data-source-shopify#コレクション)を参照ください。

### 転送先Amazon Redshiftで指定できる型が追加 🎉

転送先Amazon RedshiftのSTEP2出力オプションの**カラム設定**にて、データ型に指定できる項目として下記が追加されました。

- `TIME`
- `DATE`

### 転送先kintoneで転送されるNULL値の更新処理設定が追加 🎉

転送先kintoneの既存レコードに対する更新データに`NULL`値が含まれる場合に、その更新処理を選択できるようになりました。
転送設定STEP1の詳細設定にて、**NULLで更新する**か**更新をスキップする**かを選択できます。

### 転送先Snowflakeへの転送ジョブ失敗時に一時ステージを削除できるように 🎉

転送先Snowflakeへの転送ジョブがエラーとなった場合に、一時ステージを削除するか選択できるようになりました。
詳しくは、[転送先 - Snowflake > STEP1 詳細設定](/docs/data-destination-snowflake#step1-詳細設定)を参照ください。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-03-2024-08-29-16-11-1.png){height="" width="50%"}

## ワークフロー定義

### ワークフロージョブの実行ログ内で転送ジョブのエラーログを確認できるように 🎉

ワークフローに組み込まれた転送ジョブが失敗した際に、ワークフロー実行ログから該当転送ジョブのエラーログを確認できるようになりました。
ワークフロー実行ログの該当タスクをクリックすることで、エラーログを確認できます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-03-2024-08-29-16-11-2.png){height="" width="50%"}

## UI・UX

### 転送設定データプレビューの最大件数を20件に変更

転送設定STEP2や転送設定詳細のデータプレビューに表示されるデータの最大件数を**20件**に変更しました。
この変更により、転送設定STEP2の**スキーマ・データのプレビュー**にデータプレビューが表示されるまでの時間が短くなりました。

## 監査ログ

### 転送設定の「過去のリビジョンを復元」するアクションを監査ログの取得対象から削除

監査ログの取得対象アクションから、「転送設定の更新（変更履歴の過去のリビジョンを復元）」を削除しました。
詳しくは、[監査ログ機能の変更履歴](/docs/about-audit-log#監査ログ機能の変更履歴)を参照ください。

## コネクタAPIアップデート

### Facebook APIを利用している各種Facebook系コネクタ

下記コネクタに利用しているFacebook APIを、v17から**v18**へアップデートしました。

- 転送元Facebook Ad Insights
- 転送元Facebook Ad クリエイティブ
- 転送元Facebookリード広告
- 転送先Facebook カスタムオーディエンス(β版)
- 転送先Facebook コンバージョンAPI

新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version18.0)のドキュメントを参照ください。

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
