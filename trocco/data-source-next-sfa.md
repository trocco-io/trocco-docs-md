---
articleId: 95536979-e746-4338-9244-899b0e8be9a3
slug: data-source-next-sfa
title: 転送元 - ネクストSFA
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
ネクストSFAから転送する設定のDocsです。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| ネクストSFA接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br>接続情報の設定方法は[別ページ](/docs/connection-configuration-next-sfa)をご参照下さい。 |
| タイプ | Yes | - | 転送するデータの内容を決定します。<br>企業、企業担当者、受注、案件、売上、アプローチの中から選択できます。 |
| 更新日 | No | - | ここで指定した日にち以降に作成・更新したデータを転送します。<br>フォーマットは「YYYY-MM-DD」です。<br>[カスタム変数](/docs/custom-variables)を設定して期間を指定することも可能です。 |
| 有効フラグ | Yes | TRUE |  |
| 受注日 | No | - | タイプで受注を選んだ時に指定することができます。<br>ここで指定した期間に受注日があるデータを転送します。<br>フォーマットは「YYYY-MM-DD」です。<br>[カスタム変数](/docs/custom-variables)を設定して期間を指定することも可能です。 |
