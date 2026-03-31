---
articleId: 4084e5a3-41b7-456d-bc25-900b6d7de220
slug: data-source-google-analytics4
title: 転送元 - Google Analytics 4
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Google Analytics 4からレポートデータを転送する設定のDocsです。

## 制約
:::(Warning) (データのサンプリング)
Google Analytics 4ではプロパティで収集できるデータの上限が設定されており、その上限を超えるとデータのサンプリングが発生します。詳しくは[[GA4] データ サンプリングについて](https://support.google.com/analytics/answer/13331292)を参照ください。
サンプリングの回避策として、[ワークフローのカスタム変数ループ実行](/docs/loop-using-custom-variables#google-analytics-4から転送するデータがサンプリングされないようにする)を活用いただけます。
:::

:::(Warning) (ディメンション・メトリクスの互換性による転送ジョブの実行エラーについて)
ディメンション・メトリクス（指標）の[データの互換性](https://support.google.com/analytics/answer/11608978)が原因で、転送ジョブが実行エラーとなるケースがあります。
たとえば、`dateHour`が他のディメンション・メトリクスと互換性がない場合は、このようなメッセージがエラーログに表示されます。

`body: {"error":{"code":400,"message":"Please remove dateHour to make the request compatible. The request's dimensions \u0026 metrics are incompatible. To learn more, see https://ga-dev-tools.web.app/ga4/dimensions-metrics-explorer/","status":"INVALID_ARGUMENT"}}`

取得したいディメンション・メトリクスに互換性があるかどうかは、[公式ツール](https://ga-dev-tools.google/ga4/dimensions-metrics-explorer/)でご確認いただけます。
:::

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Google Analytics 4接続情報 | ✓ | - | [Google Analytics 4の接続情報](/docs/connection-configuration-google-analytics4)を参照ください。 |
| プロパティID | ✓ | - | データを取得するアナリティクスのプロパティIDを入力します。<br>[プロパティIDの取得方法](/docs/data-source-google-analytics4#プロパティidの取得方法)を参照ください。 |
| タイムスタンプの形式 | ✓ | - | レポートのタイムスタンプの形式を選択します。<br>なお、ここで設定した値はディメンションでは設定できません。 |
| ディメンション | - | - | 取得したいディメンションの名前を入力します。<br>ディメンションは最大8個まで設定できます。<br>設定できる値については[Google Analytics公式](https://ga-dev-tools.google/ga4/dimensions-metrics-explorer/)を参照ください。<br>この項目を0件にした場合、タイムスタンプ形式の値のみがディメンションとして指定されます。<br><br>[ディメンション式](/docs/data-source-google-analytics4#ディメンション式について)については、こちらを参照ください。 |
| メトリクス | - | - | 取得したいメトリクスの名前を入力します。<br>メトリクスは最大10個まで設定できます。<br>設定できる値については[Google Analytics公式](https://ga-dev-tools.google/ga4/dimensions-metrics-explorer/)を参照ください。<br><br>[メトリクス式](/docs/data-source-google-analytics4#メトリクス式について)については、こちらを参照ください。 |
| データ取得期間 | - | - | データ取得期間の開始日と終了日を入力してください。<br>未入力の場合、開始日は現在の7日前、終了日は現在の1日前に設定されます。<br>YYYY-MM-DD形式で入力してください。例：2021-08-19 |
| 転送方法 | ✓ | 全件転送 | **全件転送**・**差分転送**のいずれかを選択します。<br>**差分転送**について、詳しくは[差分転送機能](/docs/incremental-data-transfer)を参照ください。 |

#### STEP1の詳細設定

| 項目名 |	デフォルト値 | 内容 |
| --- | --- | --- |
| 一回のリクエストで取得する行数 | 10,000 | 一回のリクエストで取得する行数を設定できます。 |

## ジョブ実行時にエラーが発生した場合の対処

### OutOfMemoryErrorが発生した場合

`OutOfMemoryError`が発生した場合、**一回のリクエストで取得する行数**の値を**1,000**まで下げることで、エラーを解消できることがあります。
ただしこの値を下げることで1リクエストあたりのトークン使用量が増加するため、後述の`RateLimitError`が発生しやすくなります。

### RateLimitErrorが発生した場合

`RateLimitError`は、アナリティクス プロパティの任意の割り当てが枯渇したときに発生します。
エラーメッセージ中に含まれる`body: {"error":{"code":429,"message":xxx}}`の内容から、どの割り当てが枯渇したかを確認し、適宜対応してください。

```
[ERROR]: Exhausted property tokens:
[ERROR]: 	tokens_per_day:{consumed:{total:21242,average:103},remaining:177780}
[ERROR]: 	tokens_per_hour:{consumed:{total:21242,average:103},remaining:25549}
[ERROR]: 	concurrent_requests:{consumed:{total:0,average:0},remaining:10}
[ERROR]: 	server_errors_per_project_per_hour:{consumed:{total:0,average:0},remaining:10}
[ERROR]: 	potentially_thresholded_requests_per_hour:{consumed:{total:0,average:0},remaining:120}
[ERROR]: 	tokens_per_project_per_hour:{consumed:{total:21242,average:103},remaining:0}
[ERROR]: Rate limit exceeded:
[ERROR]: 	status_code: 429
[ERROR]: 	body: {"error":{"code":429,"message":"Exhausted property tokens for a project per hour. These quota tokens will return in under an hour. To learn more, see https://developers.google.com/analytics/devguides/reporting/data/v1/quotas","status":"RESOURCE_EXHAUSTED"}}
```

#### 割り当てが回復するまで待ってジョブを再実行する

たとえば、上記のように`tokens for a project per hour`が原因の場合は、1時間程度で割り当てが回復します。
この場合、エラー発生後1時間程度経過した後にジョブを再実行してください。
アナリティクス プロパティの各割り当てについて、詳しくは[Google Analytics Data API (GA4) - PropertyQuota](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/PropertyQuota)を参照ください。

#### 1リクエストあたりのトークン消費量を抑える

割り当てが回復した状態でジョブを再実行しても`RateLimitError`が発生する場合は、1リクエストあたりのトークン消費量を減らすように調整してください。
トークン消費量は、エラーメッセージ中に含まれる`consumed`内の`average`の値から確認できます。
トークン消費量の削減方法としては、以下の方法が考えられます。

- データ取得期間の範囲を狭める
- 取得対象のディメンション・メトリクスの種類を少なくする

割り当ての総量や回復のタイミングなどの各種仕様に関しては、[Google Analytics Data API (GA4) - 割り当て](https://developers.google.com/analytics/devguides/reporting/data/v1/quotas)を参照ください。

## 利用上の補足情報

### プロパティIDの取得方法
[Google Analytics](https://analytics.google.com/analytics/web/)にログインし、左のバーの**管理**（歯車のアイコン）→**プロパティ設定**→**プロパティ ID**で確認できます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-google-analytics4-2024-08-29-9-49-0.png)

### ディメンション式について
[ディメンション式](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/Dimension#dimensionexpression)のconcatenateを用いることで、すでにある複数のディメンションを連結した、新たなディメンションを定義できます。ディメンション式を利用した場合は、[ディメンション](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions)のAPI Name列にある各ディメンション、およびカスタムディメンションのいずれとも重複しないディメンション名を入力してください。

### メトリクス式について
[メトリクス式](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/Metric)を用いることで、既存のメトリクスに四則演算などを加えた、新たなメトリクスを定義できます。メトリクス式を利用した場合は、[メトリクス](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics)のAPI Name列にある各メトリクス、およびカスタムメトリクスのいずれとも重複しないメトリクス名を入力してください。

#### STEP1 詳細設定

**詳細設定**をクリックすると、設定項目が表示されます。

| 項目名 | デフォルト値 | 内容 |
| --- | --- | --- |
| 「（other）」行が使用されている場合のステータス | **Errorにする** | **Succeededにする**を選択すると「（other）」行が発生しても転送処理を実行します。<br/>詳しくは、Google Analytics公式ドキュメント[[GA4]「（other）」行について](https://support.google.com/analytics/answer/13331684)を参照ください。 |

