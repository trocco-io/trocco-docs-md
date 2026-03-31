---
articleId: b2201076-afe5-4c9c-ad94-2b492f59c874
slug: data-source-zendesk-support
title: 転送元 - Zendesk Support
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

Zendesk Supportのチケットデータ、ユーザーデータを転送する設定のDocsです。

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Zendesk Support接続情報 | Yes | - | あらかじめ登録してある[Zendesk Supportの接続情報](/docs/connection-configuration-zendesk-support)から、今回の転送設定に必要な権限を持つものを選択します。 |
| データ取得対象 | Yes | `ticket` | 取得対象のデータ内容を以下から選択します。<ul><li>`ticket`</li><li>`user`</li><li>`ticket_metrics`</li><li>`ticket_comments`</li><li>`ticket_fields `</li></ul>|

#### データ取得対象に`ticket`を選択した場合

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| ステータス | Yes | `any` | 取得するチケットのステータスを以下から選択します。<br>選択されたステータスのチケットのみが取得されます。<br>ただし、`any`を選択すると、すべてのステータスのチケットが取得されます。<ul><li>`any`</li><li>`new`</li><li>`open`</li><li>`pending`</li><li>`hold`</li><li>`solved`</li><li>`closed`</li></ul> |
| チケットタイプ | Yes | `any` | 取得するチケットのタイプを以下から選択します。<br>選択されたタイプのチケットのみが取得されます。<br>ただし、`any`を選択すると、すべてのタイプのチケットが取得されます。<ul><li>`any`</li><li>`question`</li><li>`incident`</li><li>`problem`</li><li>`task`</li></ul>|
| 優先度 | Yes | `any` | 取得するチケットの優先度を以下から選択します。<br>選択された優先度のチケットのみが取得されます。<br>ただし、`any`を選択すると、すべての優先度のチケットが取得されます。<ul><li>`any`</li><li>`low`</li><li>`normal`</li><li>`high`</li><li>`urgent`</li></ul> |
| チケット作成日時 | No | - | 指定した期間に作成したチケットを取得します。 |
| チケット更新日時 | No | - | 指定した期間に更新したチケットを取得します。 |
| チケット解決日時 | No | - | 指定した期間に解決したチケットを取得します。 |
| チケット期限日時 | No | - | 指定した期間に期限があるチケットを取得します。 |

#### データ取得対象に`ticket_metrics`または`ticket_comments`を選択した場合

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 取得開始日時 | Yes | - | 設定された日時以降に更新された`ticket_metrics`または`ticket_comments`を取得します。 |
| タイムゾーン | Yes | - | 取得開始日時のタイムゾーンを選択します。 |

:::(Warning) (`ticket_metrics`・`ticket_comments`の取得開始日時について)

Zendesk APIの仕様上、`ticket_metrics`および`ticket_comments`は、更新日時に基づいてフィルターして取得できません。
したがってTROCCOでは、`ticket_metrics`および`ticket_comments`を、取得開始日時に入力された日時以降に更新された`ticket`をもとに、取得しています。
結果的に、取得開始日時以降に更新されていない`ticket_metrics`や`ticket_comments`が取得されることがあります。**データの重複が発生しうる旨、ご注意ください。**
:::

#### STEP1の詳細設定

**詳細を設定する**をクリックすると、設定項目が表示されます。

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| ページサイズ | Yes | 1,000 (`ticket_fields`のみ 100) |1ページあたりのレコードの取得サイズを入力できます。<br>タイムアウトによる転送ジョブの失敗が発生した場合は、ページサイズの値を少なく設定し直すことで解決することがあります。<br>なお、ページサイズは最大**1,000**ページ(`ticket_fields`のみ **100**ページ)まで指定できます。|
