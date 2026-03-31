---
articleId: d9899271-e2ac-4a91-b581-5c791208c610
slug: data-source-rtb-house
title: 転送元 - RTB House
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---

## 概要
RTB Houseのレポートデータを転送する設定のDocsです。

## 制約

:::(Info) (転送元データに複数のサブキャンペーンが登録されている場合)
転送設定STEP2のプレビューでは、任意のサブキャンペーンが1つしか表示されません。
ただし、転送ジョブ実行時には**すべてのサブキャンペーンのデータが転送されます**。
:::
 
## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| RTB House接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| レポートタイプ | Yes | Summary Reports | 以下から選択してください。 <br>・Summary Reports |
| 広告主ID | Yes | - |接続情報を設定した状態で、**広告主IDを読み込む**を押下すると、広告主IDの候補が表示されます。 |
| 開始日 | Yes | - | `YYYY-MM-DD ` のフォーマットで入力してください。 |
| 終了日 | Yes | - | `YYYY-MM-DD ` のフォーマットで入力してください。|
| コンバージョンのカウント方法 | Yes | - | 以下から選択してください。<br>・Attributed post click<br>・All post click<br>・Post view<br>・All conversions |
| ユーザーセグメント | Yes | - | 以下から選択してください。<br>・Visitors<br>・Shoppers<br>・Buyers |


