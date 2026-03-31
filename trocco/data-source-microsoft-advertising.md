---
articleId: 9cc816e5-4d9b-42c5-8c2b-3a431ab3b7cb
slug: data-source-microsoft-advertising
title: 転送元 - Microsoft Advertising
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
Microsoft Advertisingからデータを転送する設定のDocsです。

## 制約

- 特になし

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| Microsoft Advertising接続情報 | ✓ | あらかじめ登録してある[Microsoft Advertisingの接続情報](/docs/connection-configuration-microsoft-advertising)から、今回の転送設定に必要な権限を持つものを選択します。 |
| アカウントID | ✓ | レポートを取得するアカウントIDを入力します。<br>詳しくは、[アカウントIDの確認方法](/docs/data-source-microsoft-advertising#アカウントidの確認方法)を参照ください。<br><br>なお、アカウントIDには**カスタム変数**を埋め込むことができます。<br>複数の広告アカウントIDのデータを1つの転送設定で転送したい場合は、[カスタム変数ループ実行](/docs/loop-using-custom-variables)をご利用ください。 |
| レポート種別 | ✓ | レポートの種類を以下より選択します。<ul><li>[`Account`](https://learn.microsoft.com/advertising/reporting-service/accountperformancereportcolumn?view=bingads-13)</li><li>[`Campaign`](https://learn.microsoft.com/advertising/reporting-service/campaignperformancereportcolumn?view=bingads-13)</li><li>[`Ad group`](https://learn.microsoft.com/advertising/reporting-service/adgroupperformancereportcolumn?view=bingads-13)</li><li>[`Ad`](https://learn.microsoft.com/advertising/reporting-service/adperformancereportcolumn?view=bingads-13)</li><li>[`Keyword`](https://learn.microsoft.com/advertising/reporting-service/keywordperformancereportcolumn?view=bingads-13)</li><li>[`Search query`](https://learn.microsoft.com/advertising/reporting-service/searchqueryperformancereportcolumn?view=bingads-13)</li></ul>|
| 粒度 | ✓ | レポートの粒度（分割における時間単位）を以下より選択します。<ul><li>`Hourly`</li><li>`Daily`</li><li>`Weekly`</li><li>`Monthly`</li><li>`Yearly`</li></ul>|
|データ取得期間| ✓ |転送したいデータの開始日・終了日・タイムゾーンを指定します。<br>開始日・終了日は`YYYY-MM-DD`形式で入力してください。<br><br>なお、粒度とデータ取得期間の組み合わせによっては、データ取得期間の範囲外のデータも取得されます。<br>詳しくは、[粒度とデータ取得期間の関係](/docs/data-source-microsoft-advertising#粒度とデータ取得期間の関係)を参照ください。|

:::(Info) (データ取得期間のタイムゾーン)

TROCCO上で選択できるタイムゾーンと、[Microsoft Advertisingで指定できるタイムゾーン](https://learn.microsoft.com/advertising/guides/time-zones?view=bingads-13)の表記が異なることがあります。以下、例です。
- TROCCO側：`Asia/Tokyo`
- Microsoft Advertising側：`OsakaSapporoTokyo`

なお、表記が異なるタイムゾーンを選択した場合でも、ジョブ実行時には「Microsoft Advertisingで指定できるタイムゾーン」に適切に変換されます。
:::

:::(Warning) (レポートの保存期間)

Microsoft Advertisingのデータは、各時間単位（**粒度**）によって分割されたそれぞれのレポートに集約されます。
各レポートの保存期間は、レポートの分割単位によって異なります。
保存期間が過ぎたレポートは取得できません。ご注意ください。
レポートの保存期間について、詳しくは[Microsoft公式ドキュメント - Reporting Data Retention Time Periods](https://learn.microsoft.com/advertising/guides/report-data-retention-time-periods)を参照ください。
:::

### STEP1 詳細設定

**詳細設定**をクリックすると、設定項目が表示されます。

| 項目名 | デフォルト値 | 内容 |
| --- | --- | --- |
| `Impression Share Performance Statistics`| OFF | ONにすると、`Impression Share Performance Statistics`に関するカラムが取得されます。<br>ただし、本データは他のデータと相互排他的な関係を持つため、ONにすると一部のカラムは取得されなくなります。<br>詳しくは、[Microsoft公式ドキュメント - Column Restrictions](https://learn.microsoft.com/advertising/guides/reports?view=bingads-13#columnrestrictions)を参照ください。 |
| `Additional Impression Share Performance Statistics` | OFF |ONにすると、以下のカラムも取得されます。<ul><li>`AudienceImpressionLostToBudgetPercent`</li><li>`AudienceImpressionLostToRankPercent`</li><li>`AudienceImpressionSharePercent`</li><li>`RelativeCtr`</li>ただし、本データは他のデータと相互排他的な関係を持つため、ONにすると以下のカラムも取得されなくなります。<li>`CustomerId`</li><li>`CustomerName`</li><li>`DeliveredMatchType`</li></ul>詳しくは、[Microsoft公式ドキュメント - Column Restrictions](https://learn.microsoft.com/advertising/guides/reports?view=bingads-13#columnrestrictions)の**Note**を参照ください。 |

## 補足事項

### アカウントIDの確認方法

Microsoft Advertisingの管理画面より確認できます。

1. [Microsoft Advertising](https://ads.microsoft.com/)にログインします。
2. **Tools**>**Preferences**の順にクリックします。
  ![data-source-microsoft-advertising_001.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-microsoft-advertising-2024-08-29-12-13-0.png){height="" width="75%"}
  
Account settingsページが表示され、アカウントIDを確認できます。
![data-source-microsoft-advertising_003.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-microsoft-advertising-2024-08-29-12-13-1.png){height="" width="75%"}

#### 不適切なアカウントIDを指定した場合のエラー

不適切な形式のアカウントIDを指定した場合、以下のエラーが発生します。

```
Error: Failed to map Embulk's ConfigSource to org.embulk.input.bing_ads.BingAdsInputPlugin$PluginTask: Can not construct instance of long from String value 'XXXXXXX': not a valid Long value
 at [Source: N/A; line: -1, column: -1]
```

設定しているアカウントIDが数字のみで構成されていることを確認してください。

### 粒度とデータ取得期間の関係

各粒度の詳細については、[Microsoft公式ドキュメント - ReportAggregation Value Set - Reporting](https://learn.microsoft.com/advertising/reporting-service/reportaggregation?view=bingads-13#values)を参照ください。

#### 粒度とレコードの関係

取得されるデータの各レコードは、粒度（分割における時間単位）ごとに構成されます。
たとえば、粒度に`Monthly`を選択した場合、一月分のデータが1レコードに集約されます。

#### 取得対象となるレコード

**データ取得期間の範囲が「粒度の始点から終点の範囲」に部分的な形でも重なった場合、その粒度のレコードは取得されます。**

たとえば、粒度に`Monthly`を選択し、データ取得期間に`2023-07-28`から`2023-08-27`までを指定したとします。
この場合、**2023年07月分と2023年08月分の2か月分のレコードが取得されます。**

意図しないレコードの取得を防ぐためには、データ取得期間の開始日・終了日を、粒度の始点・終点に一致させるようにしてください。

#### 各粒度の始点と終点

|粒度|始点|終点|
|---|---|---|
|`Hourly`|`00:00`|`59:59`|
|`Daily`|`00:00:00`|`23:59:59`|
|`Weekly`|日曜日の`00:00:00`|土曜日の`23:59:59`|
|`Monthly`|月初日の`00:00:00`|月末日の`23:59:59`|
|`Yearly`|年始日の`00:00:00`|年末日の`23:59:59`|
