---
articleId: a3779eab-ab4b-4da0-a5ca-7690fd5f05cf
slug: data-source-amazon-ads
title: 転送元 - Amazon Ads
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、Amazon Adsからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - Amazon Ads](/docs/connection-configuration-amazon-ads)を参照ください。

## 概要

Amazon Ads（旧Amazon Advertising）の広告レポートデータを取得して転送する設定のDocsです。
Sponsored Products、Sponsored Brands、Sponsored Displayの各広告タイプのレポートを取得できます。

## 利用上の注意・制約

:::(Warning) (レポート生成時間について)

Amazon Ads APIはレポートを非同期で生成します。
レポートの生成には数秒から最大3時間程度かかる場合があります。
転送ジョブのタイムアウト設定にご注意ください。

:::

:::(Info) (取得可能なメトリクスについて)

取得可能なメトリクス（カラム）は、選択した広告タイプ、レポートタイプ、グルーピング項目の組み合わせによって異なります。
指定できないメトリクスを選択した場合、エラーが発生します。

:::

## 設定項目

### STEP1 基本設定

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|Amazon Ads接続情報|✓|-|あらかじめ登録してある[Amazon Adsの接続情報](/docs/connection-configuration-amazon-ads)を選択します。|
|プロフィールID|✓|-|データを取得する広告プロフィールを選択します。<br>接続情報に紐づくAmazonアカウントがアクセス可能なプロフィール一覧が表示されます。|
|広告タイプ|✓|Sponsored Products|取得する広告の種類を選択します。<br><li>Sponsored Products：スポンサープロダクト広告</li><li>Sponsored Brands：スポンサーブランド広告</li><li>Sponsored Display：スポンサーディスプレイ広告</li>|
|レポートタイプ|✓|Campaign|取得するレポートの種類を選択します。<br>選択した広告タイプによって、選択可能なレポートタイプが異なります。|
|groupBy|✓|`campaign`|レポートデータをグルーピングする単位を選択します。<br>選択した広告タイプとレポートタイプによって、選択可能なグルーピング項目が異なります。|
|フィルター|-|-|取得データを絞り込む条件を設定できます。<br>フィールド名とフィルター値を指定します。<br>同じフィールド名で複数のフィルターは指定できません。|
|timeUnit|✓|`Summary`|レポートの時間単位を選択します。<br><li>`Summary`：期間全体のサマリー</li><li>`Daily`：日単位の集計</li>|
|データ取得期間の開始日|✓|-|データ取得期間の開始日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`）|
|データ取得期間の終了日|✓|-|データ取得期間の終了日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-31`）|

## レポートタイプ一覧

広告タイプごとに選択可能なレポートタイプは以下のとおりです。

### Sponsored Products（スポンサープロダクト広告）

|レポートタイプ|説明|
|---|---|
|Campaign|キャンペーンレベルのパフォーマンスデータ|
|Targeting|ターゲティング（キーワード・商品ターゲティング）のパフォーマンスデータ|
|Gross and invalid traffic|グロスおよび無効トラフィックデータ|
|Purchased product|購入された商品のデータ|
|Advertised product|広告対象商品のパフォーマンスデータ|
|Search term|検索キーワードのパフォーマンスデータ|
|Audience|オーディエンスデータ|

### Sponsored Brands（スポンサーブランド広告）

|レポートタイプ|説明|
|---|---|
|Campaign|キャンペーンレベルのパフォーマンスデータ|
|Ad group|広告グループレベルのパフォーマンスデータ|
|Ad|広告レベルのパフォーマンスデータ|
|Targeting|ターゲティングのパフォーマンスデータ|
|Gross and invalid traffic|グロスおよび無効トラフィックデータ|
|Purchased product|購入された商品のデータ|
|Placement|キャンペーン配置のパフォーマンスデータ|
|Search term|検索キーワードのパフォーマンスデータ|
|Audience|オーディエンスデータ|

### Sponsored Display（スポンサーディスプレイ広告）

|レポートタイプ|説明|
|---|---|
|Campaign|キャンペーンレベルのパフォーマンスデータ|
|Ad group|広告グループレベルのパフォーマンスデータ|
|Targeting|ターゲティングのパフォーマンスデータ|
|Gross and invalid traffic|グロスおよび無効トラフィックデータ|
|Purchased product|購入された商品のデータ|
|Advertised product|広告対象商品のパフォーマンスデータ|

## 取得されるデータ

取得されるカラムは、選択した広告タイプ、レポートタイプ、グルーピング、時間単位の組み合わせによって動的に決定されます。

主なカラム例は以下のとおりです。

|カラム名|データ型|説明|
|---|---|---|
|`campaign_id`|`long`|キャンペーンID|
|`campaign_name`|`string`|キャンペーン名|
|`impressions`|`long`|インプレッション数|
|`clicks`|`long`|クリック数|
|`cost`|`double`|広告費用|
|`date`|`string`|日付（時間単位が`daily`の場合）|

取得可能なメトリクスの詳細については、[Amazon Ads公式ドキュメント - Reporting Columns](https://advertising.amazon.com/API/docs/en-us/guides/reporting/v3/columns)を参照ください。

## 補足事項

### プロフィールIDについて

プロフィールIDは、Amazon Adsの広告アカウントを識別するIDです。
1つのAmazonアカウントで複数の広告プロフィールを管理している場合、取得したいデータに対応するプロフィールを選択してください。

プロフィール選択のドロップダウンには、接続情報で認証したAmazonアカウントがアクセス可能なすべてのプロフィールが表示されます。
