---
articleId: 0e837a7a-a340-4d48-9753-351d1c1eb420
slug: data-source-hubspot
title: 転送元 - HubSpot
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

HubSpotからデータを転送する設定のDocsです。

## 制約

:::(Warning) (HubSpotの内部的なプロパティーが取得対象となった場合)

任意の取得対象を選択した際に、HubSpotの内部的なプロパティーが取得対象となることがあります。（例：`hoge_a2a17e6e`プロパティー）
このような**名前の末尾にハッシュ値を含むプロパティー**に関して、お客様がHubSpotで管理していないプロパティーである場合は、転送対象のカラムに含める必要がありません。
したがって、**転送設定STEP2のカラム定義**に、上記のようなプロパティー（カラム）が含まれた場合は、**カラム定義から該当のカラムを削除してください。**
:::
 
:::(Info) (カスタムプロパティー利用時の補足事項)

- 転送元HubSpotでは、HubSpot側にあるメタデータを一部取得し、内部的にカラム名およびデータ型を定義しています。
- HubSpot側でカスタムプロパティーが作成されている場合、カスタムプロパティーの内部名とTROCCO側で定義したカラム名が重複することがあります。
- 取得対象として**オブジェクト**を選択した際に、HubSpot側で以下の内部名を持つカスタムプロパティーが作成されている場合は、**カスタムプロパティー側のデータが取得されます。**
    - `id` 
    - `created_at`
    - `updated_at`
:::
 
## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
 HubSpot接続情報 | Yes | - |あらかじめ登録してある[HubSpotの接続情報](/docs/connection-configuration-hubspot)から、今回の転送設定に必要な権限を持つものを選択します。 |
| 取得対象 | Yes | オブジェクト | データの取得対象を以下より選択します。<ul><li>オブジェクト</li><li>アソシエーション (オブジェクト間の関連)</li><li>エンゲージメント（非推奨）</li><li>エンゲージメントのアソシエーション (オブジェクト間の関連)</li><li>Eメールイベント</li><li>パイプライン</li><li>パイプラインステージ</li><li>担当者</li></ul> |

#### オブジェクトを選択した場合

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| オブジェクトタイプ | Yes | - | 取得するオブジェクトを選択します。<details><summary>選択可能なオブジェクト一覧</summary><ul><li><code>appointments</code></li><li><code>call</code></li><li><code>carts</code></li><li><code>communications</code></li><li><code>company</code></li><li><code>contact</code></li><li><code>courses</code></li><li><code>deal</code></li><li><code>discounts</code></li><li><code>email</code></li><li><code>fees</code></li><li><code>invoices</code></li><li><code>line_item</code></li><li><code>listings</code></li><li><code>meeting</code></li><li><code>note</code></li><li><code>orders</code></li><li><code>payments</code></li><li><code>postal_mail</code></li><li><code>product</code></li><li><code>quote</code></li><li><code>services</code></li><li><code>subscriptions</code></li><li><code>task</code></li><li><code>taxes</code></li><li><code>ticket</code></li><li><code>users</code></li><li>カスタムオブジェクト</li></ul></details> |
| 転送方法 | Yes | 全件転送 | **全件転送**・**差分転送**のいずれかを選択します。<br>**差分転送**について、詳しくは[差分転送機能](/docs/incremental-data-transfer)を参照ください。 |
| プロパティ | No | - | 取得するプロパティを選択します。未選択の場合、すべてのプロパティが取得されます。<br>**プロパティを読み込む**をクリックすると、選択したオブジェクトタイプに対応するプロパティの一覧が読み込まれます。 |

:::(Warning) (転送元HubSpotの差分転送)

転送元HubSpotで**差分転送**を選択した場合、**前回転送時から更新されたレコード**が転送されます。
したがって、転送先で追記 (`APPEND`)方式で転送すると、レコードの重複が発生することがあります。ご注意ください。
:::

#### アソシエーションを選択した場合

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| オブジェクト | Yes | --- | 取得するオブジェクトを選択します。<details><summary>選択可能なオブジェクト一覧</summary><ul><li><code>appointments</code></li><li><code>call</code></li><li><code>carts</code></li><li><code>communications</code></li><li><code>company</code></li><li><code>contact</code></li><li><code>courses</code></li><li><code>deal</code></li><li><code>discounts</code></li><li><code>email</code></li><li><code>fees</code></li><li><code>invoices</code></li><li><code>line_item</code></li><li><code>listings</code></li><li><code>meeting</code></li><li><code>note</code></li><li><code>orders</code></li><li><code>payments</code></li><li><code>postal_mail</code></li><li><code>product</code></li><li><code>quote</code></li><li><code>services</code></li><li><code>subscriptions</code></li><li><code>task</code></li><li><code>taxes</code></li><li><code>ticket</code></li><li><code>users</code></li><li>カスタムオブジェクト</li></ul></details> |
| アソシエーションオブジェクト | Yes | - | 選択したオブジェクトに紐づくアソシエーションオブジェクトを選択します。<br>アソシエーションオブジェクトは、オブジェクト1件に対し**最大100件**取得されます。<details><summary>選択可能なアソシエーションオブジェクト一覧</summary><ul><li><code>appointments</code></li><li><code>call</code></li><li><code>carts</code></li><li><code>communications</code></li><li><code>company</code></li><li><code>contact</code></li><li><code>courses</code></li><li><code>deal</code></li><li><code>discounts</code></li><li><code>email</code></li><li><code>fees</code></li><li><code>invoices</code></li><li><code>line_item</code></li><li><code>listings</code></li><li><code>meeting</code></li><li><code>note</code></li><li><code>orders</code></li><li><code>payments</code></li><li><code>postal_mail</code></li><li><code>product</code></li><li><code>quote</code></li><li><code>services</code></li><li><code>subscriptions</code></li><li><code>task</code></li><li><code>taxes</code></li><li><code>ticket</code></li><li><code>users</code></li><li>カスタムオブジェクト</li></ul></details> |

#### エンゲージメントのアソシエーションを選択した場合

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| アソシエーションオブジェクト | Yes | - | エンゲージメントに紐づくアソシエーションオブジェクトを選択します。<br>アソシエーションオブジェクトは、エンゲージメント1件に対し**最大100件**取得されます。<details><summary>選択可能なアソシエーションオブジェクト一覧</summary><ul><li><code>contact</code></li><li><code>company</code></li><li><code>deal</code></li><li><code>owner</code></li><li><code>workflow</code></li><li><code>ticket</code></li><li><code>content</code></li><li><code>quote</code></li></ul></details> |

#### Eメールイベントを選択した場合

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| イベントタイプ | Yes | - | 取得するイベントタイプを選択します。<details><summary>選択可能なイベントタイプ一覧</summary><ul><li><code>SENT</code></li><li><code>DROPPED</code></li><li><code>PROCESSED</code></li><li><code>DELIVERED</code></li><li><code>DEFERRED</code></li><li><code>BOUNCE</code></li><li><code>OPEN</code></li><li><code>CLICK</code></li><li><code>PRINT</code></li><li><code>FORWARD</code></li><li><code>STATUSCHANGE</code></li><li><code>SPAMREPORT</code></li></ul></details><br>それぞれのイベントタイプについて、詳しくは[HubSpot公式ドキュメント - Email Events API Overview](https://legacydocs.hubspot.com/docs/methods/email/email_events_overview)の`Event types`を参照ください。 |
| データ取得期間 | No | - | 取得したいデータの開始日時・終了日時を入力できます。 |

#### パイプラインまたはパイプラインステージを選択した場合

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| オブジェクトタイプ | Yes | - | 取得するパイプラインのオブジェクトタイプを選択します。<details><summary>選択可能なオブジェクトタイプ一覧</summary><ul><li><code>deal</code></li><li><code>ticket</code></li></ul></details> |

