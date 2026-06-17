---
articleId: b9b3ef7a-4c0f-4788-9af0-477599541a85
slug: data-source-criteo
title: 転送元 - Criteo
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Criteoから転送する設定のDocsです。

## 制約
* 特になし

## 設定項目

### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Criteo接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| レポートタイプ | Yes | - | 取得するレポートタイプを以下から選択します。<br><ul><li>`statistics`</li><li>`transaction_ids`</li></ul> |
| 通貨 | Yes | - | 通貨の単位を指定します。<br>指定できる値について、詳しくは[Currencies](https://developers.criteo.com/marketing-solutions/v2025.07/docs/campaign-statistics#currencies)を参照ください。 |
| データ取得期間 | Yes | - | データを取得する際の期間を指定します。指定した開始日・終了日が取得範囲に含まれます。<br>`YYYY-MM-DD`形式で入力してください。 |
| タイムゾーン | Yes | - | 日時のタイムゾーンを指定します。<br>指定できる値について、詳しくは[Timezones](https://developers.criteo.com/marketing-solutions/v2025.07/docs/campaign-statistics#timezones)を参照ください。 |
| 広告主ID | No | - | ここで指定した広告主IDに紐づくデータを取得できます。<br>未設定の場合、すべての広告主IDに紐づくデータが取得されます。 |

#### レポートタイプ：statistics
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| ディメンション | Yes | - | 取得するデータのディメンションを指定します。<br>指定できる値について、詳しくは[Dimensions](https://developers.criteo.com/marketing-solutions/v2025.07/docs/campaign-statistics#dimensions)を参照ください。<br>なお一部、取得に対応していないディメンションがあります。必要なディメンションが見つからない場合は、弊社カスタマーサクセスまでご相談ください。 |
| メトリクス | Yes | - | 取得するデータのメトリクスを指定します。<br>指定できる値について、詳しくは[Metrics](https://developers.criteo.com/marketing-solutions/v2025.07/docs/campaign-statistics#metrics)を参照ください。 |

#### レポートタイプ：transaction_ids
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| イベントタイプ | No | - | 取引に関連するイベントの種類を入力できます。<br>`click`または`display`のいずれかを指定できます。 |