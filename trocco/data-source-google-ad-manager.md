---
articleId: f494c636-c3bc-4f2c-9f0c-0c98ab91e8fb
slug: data-source-google-ad-manager
title: 転送元 - Google Ad Manager
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

Google Ad Managerで管理しているデータを転送する設定のDocsです。

## 制約

:::(Warning) (取得対象項目の互換性による転送ジョブの実行エラーについて)
**ディメンション**・**ディメンションアトリビュート**・**カラム**には互換・非互換の関係性があります。互換性のない組み合わせを設定した場合、実行プレビューおよびジョブ実行時にエラーが発生します。
たとえば、`UNIQUE_REACH_IMPRESSIONS`カラムが、指定しているディメンションと互換性がない場合は以下の文言がエラーログに出力されます。
`ReportError.COLUMNS_NOT_SUPPORTED_FOR_REQUESTED_DIMENSIONS @ columns; trigger:'UNIQUE_REACH_IMPRESSIONS'`

それぞれの互換性については下記のリンクを参照ください。
「Compatible with ...」の箇所に、互換性のある[レポートタイプ](https://support.google.com/admanager/answer/10117711?hl=en)が記載されています。
- ディメンション：[enum Dimension (v202502)](https://developers.google.com/ad-manager/api/reference/v202502/ReportService.Dimension)
- ディメンションアトリビュート：[enum DimensionAttribute (v202502)](https://developers.google.com/ad-manager/api/reference/v202502/ReportService.DimensionAttribute)
- カラム：[enum Column (v202502)](https://developers.google.com/ad-manager/api/reference/v202502/ReportService.Column)

:::

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Google Ad Manager接続情報 | Yes |  - | あらかじめ登録してある[Google Ad Managerの接続情報](/docs/connection-configuration-google-ad-manager)から、今回の転送設定に必要な権限を持つものを選択します。 |
| ネットワークコード | Yes | - | [Google Ad Manager](https://admanager.google.com/)にログインした際に出てくる末尾の数字を入力します。<br>（例：ログインした時のURL `https://admanager.google.com/1234#home` における`1234`） |
| データ取得期間 | Yes | - | 取得したいデータの開始期間と終了期間を「YYYY-MM-DD」形式で入力します。|
| ディメンション | Yes | - | 結果をグループ化するための項目を入力します。<br>詳しくは、[公式ドキュメント](https://developers.google.com/ad-manager/api/reference/v202502/ReportService.Dimension)を参照ください。 |
| ディメンションアトリビュート | No | - | ディメンションに応じて項目を追加できます。<br>詳しくは、[公式ドキュメント](https://developers.google.com/ad-manager/api/reference/v202502/ReportService.DimensionAttribute)を参照ください。 |
| カラム | Yes | - | 表示したいデータのカラム名を入力します。<br>詳しくは、[公式ドキュメント](https://developers.google.com/ad-manager/api/reference/v202502/ReportService.Column)を参照ください。<br>※一部のカラムにおいては動作の保証ができません。詳しくは、後述の[動作の保証ができないカラムについて](/docs/data-source-google-ad-manager#動作の保証ができないカラムについて)を参照ください。|
| 取得対象の広告ユニット階層 | Yes | 最上位の広告ユニットのみ表示 | <ul><li>最上位の広告ユニットのみ表示<ul><li>広告ユニットの中で最上位の広告のみを表示させたい場合に選択します。</li><li>メトリクスには、最上位以外の広告ユニットも含めた合計値が出力されます。</li></ul></li><li>全広告ユニットを階層的に表示<ul><li>広告ユニットを階層的に表示したい場合に選択します。</li><li>ディメンションとして`AD_UNIT_NAME`と`AD_UNIT_ID`を指定した際に5階層分のデータが出力されます。</li></ul></li></ul>|

## 補足事項

### 動作の保証ができないカラムについて

:::(Warning) (動作の保証ができないカラム)
下記のカラムについては、動作の保証ができません。<br>指定するカラムに下記のいずれかのカラムを含むと、全カラムのデータ取得に失敗する可能性があります。

- [AD_SERVER_CPM_AND_CPC_REVENUE_GROSS](https://developers.google.com/ad-manager/api/reference/v202502/ReportService.Column#AD_SERVER_CPM_AND_CPC_REVENUE_GROSS)
- [AD_SERVER_ALL_REVENUE_GROSS](https://developers.google.com/ad-manager/api/reference/v202502/ReportService.Column#AD_SERVER_ALL_REVENUE_GROSS)

:::
