---
articleId: ce6c80a7-01cb-43ca-a0cf-ce71b7f14735
slug: release-note-2023-06
title: リリースノート-2023年06月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2023年06月のリリース情報をお届けします**

---

## 転送設定

### 転送元Google Analytics 4が新たに追加 🎉

転送元Google Analytics 4が新たに追加されました。
旧版のGA（UA）からGA4に移行後もTROCCOを使用してデータを転送いただけます。
詳しくは、[転送元 - Google Analytics 4](/docs/data-source-google-analytics4)を参照ください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-06-2024-08-29-14-57-0.png){height="" width="600"}

### 転送先Snowflakeの転送モードにUPSERT (MERGE)が追加 🎉

転送モードとして`UPSERT (MERGE)`が追加されました。
`UPSERT`キーを基準に、既存テーブルにレコードがある場合はレコードを更新し、レコードがない場合はレコードを追記します。
詳しくは、[転送先 - Snowflake](/docs/data-destination-snowflake#転送モードについて)を参照ください。

### 転送元TROCCOでデータマートとワークフローの履歴データ転送に対応 🎉

転送するデータの対象に**データマート**と**ワークフロー**が追加されました。
過去に実行されたデータマートとワークフローのジョブに関する履歴データを転送します。
詳しくは、[転送元 - TROCCO](/docs/data-source-trocco)を参照ください。

### 一部コネクタの入力ファイル形式に「XML（β版）」が追加 🎉

一部の転送元ファイル・ストレージ系コネクタの転送設定の入力ファイル形式で、XMLファイルを選択できるようになりました。
詳しくは、[入力ファイル形式の設定について](/docs/configuration-of-input-files)を参照ください。

### 転送元Zendesk Supportのデータ取得対象にticket_metricsが追加 🎉

データ取得対象に`ticket_metrics`が追加されました。
解決された日時や初回返信時間のようなチケットに関する各種指標データを取得し、転送できるようになりました。
詳しくは、[転送元 - Zendesk Support](/docs/data-source-zendesk-support#データ取得対象にticket_metricsまたはticket_commentsを選択した場合)を参照ください。

### 転送元TikTok Adsで広告主IDの読み込みに対応 🎉

広告主IDの読み込みに対応しました。
**広告主IDを読み込む**をクリックすることで、先に選択した接続情報に紐づく広告主IDがサジェストされます。
これにより、広告主IDを手動入力することなく転送設定を作成できます。

## マネージドデータ転送

### 転送元にPostgreSQLを追加

マネージドデータ転送の転送元にPostgreSQLを選択できるようになりました。
PostgreSQLのテーブルを一括で取り込み、紐づく転送設定を一元作成できます。
各種入力項目については、[マネージド転送設定](/docs/managed-etl-configurations#転送元postgresqlの場合)を参照ください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-06-2024-08-29-14-57-1.png){height="" width="600"}

## UI・UX

### ワークフロー編集画面の編集領域を拡大

ワークフロー編集画面のタスク追加サイドバーを開閉できるようになりました。
サイドバーを閉じることで、ワークフロー編集時に表示領域を広く使用できます。

| サイドバー（開） | サイドバー（閉） |
| --- | --- |
|![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-06-2024-08-29-14-57-2.png) | ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-06-2024-08-29-14-57-3.png) |

## その他

- 転送先Amazon Redshiftでバッチサイズを指定可能に
- MySQL接続情報でJDBCドライバーが選択できるように
- データマート詳細ページのデータリネージの視認性向上

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
