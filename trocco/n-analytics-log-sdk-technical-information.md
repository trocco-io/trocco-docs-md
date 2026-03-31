---
articleId: 69fd98a8-9eae-4f58-8297-1b62f365d09c
slug: n-analytics-log-sdk-technical-information
title: TROCCO Web行動ログ収集SDK - 技術仕様
parentCategoryId: 4603b9be-d2b6-49d2-b268-119106b57179
languageCode: ja
---
## 概要

本ページでは、以下について説明します。

- [動作環境](/docs/n-analytics-log-sdk-technical-information#動作環境)
- [セッションの定義](/docs/n-analytics-log-sdk-technical-information#セッションの定義)
- [チャネルの定義](/docs/n-analytics-log-sdk-technical-information#チャネルの定義)
- [ログの取得および保管に関する情報](/docs/n-analytics-log-sdk-technical-information#ログの取得およびログファイルに関する情報)
- [Single Page Applicationでページ遷移した場合のページビューのトラッキング方法](/docs/n-analytics-log-sdk-technical-information#single-page-applicationでページ遷移した場合のページビューのトラッキング方法)

## 動作環境

TROCCO Web行動ログ収集SDKでは、以下の環境において行われたログが収集されることを確認しています。

:::(Info) (検証済みのバージョンに関して)

以下で記載されているバージョンはすべて**メジャーバージョン**です。
TROCCO Web行動ログ収集SDKでは、該当メジャーバージョン内における任意の**マイナーバージョン**に対して、動作を確認しています。
マイナーバージョンを含めたすべてのバージョンに対して動作確認が取れているわけではない旨、ご了承ください。
:::

### OS

- Windows 10以上
- macOS 10以上
- Android 7以上
- iOS 12以上

### Webブラウザ

- Microsoft Edge 42以上
- Google Chrome 72以上
- Safari 12以上
- Mozilla Firefox 65以上

:::(Warning) (SafariにおけるBack Forward Cacheの影響)

TROCCO Web行動ログ収集SDKでは、ブラウザバックの際にもPageViewが計測されます。
ただし、TROCCO Web行動ログ収集SDK配信先サイトのHTTPレスポンスで`Cache-Control: no-store`および`cache-control: no-cache`が付与されていない場合は、Safari（iOS/macOS）のBack Forward Cacheの影響でPageViewが計測されません。

本事象はTROCCO Web行動ログ収集SDK側で対策できません。
そのため、サイト側の設定変更にてご対応いただくか、JavaScriptを使用して強制的に画面をリロードさせるようにしてください。
参考：[ブラウザの「戻る」ボタンでキャッシュが表示されてしまう際の対策 #JavaScript - Qiita](https://qiita.com/shibe23/items/79f950061457ff1a7687#%E5%AF%BE%E7%AD%96)
:::

## セッションの定義

### セッションとは

ユーザーがサイトを訪問してから離脱するまでの、一連の流れをまとめた概念です。
Google Analyticsでいうセッション・訪問と同義です。

本項では、主に**セッションの終了条件**について説明します。
セッションの終了条件には、大きく以下の2つの条件があります。

- 時間による終了
- キャンペーンの切り替わりによる終了

### 時間による終了

以下では便宜上、セッションのタイムアウト時間をデフォルト値の30分で説明します。
セッションのタイムアウト時間を変更したい場合は、[既存設定の変更](/docs/n-analytics-log-sdk-settings#既存設定の変更)から`session_expire_msec`を変更してください。

:::(Info) (Google Analyticsとの仕様差分)

TROCCO Web行動ログ収集SDKでは、Google Analyticsとは異なり、「1日の終りによる期限切れ」は存在しません。
:::

#### 無操作時間による終了

前回のPageViewから30分間操作されなかった際に、セッションは終了します。
30分以上経過した後に新たにPageViewが発生した場合、そのPageViewは新しいセッションに紐付きます。

#### イベントによる継続

前回のPageViewから30分経過する前にイベントが発生した場合、それまでカウントされていたタイムアウト時間は一度リセットされます。
つまり、直前のイベントから30分操作されなかった際に、そのセッションは終了します。
そのため、発生間隔が30分以上離れている任意の2つのPageViewがあったときに、それらが同一のセッションとして扱われることは起こり得ます。

:::(Info) (イベントによるPageViewの自動送信)

前回のPageViewまたはイベントから30分以上操作されなかった状態で新たにイベントが発生した場合、PageViewも合わせて取得されます。
:::

### キャンペーンの切り替わりによる終了

セッションは、異なるページからの流入によって切り替わることがあります。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/n-analytics-log-sdk-technical-information-2024-08-29-18-14-0.png)

#### キャンペーンパラメーターによる判定

以下に定めるキャンペーンパラメーターが、現在のページのURLに設定されていた場合は、キャンペーンパラメーターによるセッション切り替え判定が行われます。
たとえば、独自に設定したUTMパラメーターや広告パラメーターなどがキャンペーンパラメーターに該当します。
なお、現在のページにキャンペーンパラメーターがある場合、流入時のキャンペーンパラメーターとすべて一致した場合は、セッションが継続されます。

:::(Info) (キャンペーンパラメーターの定義)

TROCCO Web行動ログ収集SDKでは、以下のパラメーターがキャンペーンパラメーターとして認識されます。
- UTMパラメーター
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`
  - `utm_content`
  - `utm_term`
- 広告パラメーター
  - `AdWords`
  - `gclid`
:::

#### リファラによる判定

ページビューが発生するたびに、リファラによるセッション切り替え判定が実施されます。

この際に、まず**リファラURL**と、**セッション開始時の流入URL**が比較されます。
これらのURLが一致する場合、同一サイト内の遷移とみなされ、セッションは継続します。

上記のURLが異なる場合、**リファラURLのホスト**と、**現在のページURLのホスト**が比較されます。
これらのホストが異なる場合、基本的には別サイトからの流入とみなされ、セッションは切り替えられます。

:::(Info) (各用語の定義)

以下は、それぞれの用語の定義となります。
- リファラURL
  - JavaScriptの`document.referer`で取得されるURLです。
- セッション開始時の流入URL
  - セッション開始がキャンペーンパラメーターによる場合は、セッションが開始されたPageViewでの現在のページURLとなります。
  - そうでない場合は、セッションが開始されたPageViewでのリファラURLとなります。
- 現在のページURL
  - JavaScriptの`location.href`で取得されるURLです。
- ホスト
  - RFCで定められているURLのホスト部分です。
  - たとえば、`https://your-site.com:8080/page/path`というURLの場合、`your-site.com`がホストです。
:::

以下は、リファラによるセッション切り替え判定の例です。
リファラURLホストのyahoo.co.jpと、セッション開始時のURLホストのwww.google.comは異なるため、セッションが切り替えられます。

|閲覧順|セッション|現在のページURL|リファラURL|セッション開始時のURLホスト|
|-----|-----|-----|-----|-----|
|1|セッションA|`https://n-analytics.com/lp/index.html`|`https://www.google.com`|`www.google.com`|
|2|セッションA|`https://n-analytics.com/`|`https://n-analytics.com/lp/index.html`|`www.google.com`|
|3|セッションB|`https://n-analytics.com/lp/index.html`|`https://yahoo.co.jp`|`https://yahoo.co.jp`|

## チャネルの定義

### チャネルとは

流入経路を識別するラベルです。
セッション開始時のリファラやランディングページURLから判別され、セッション内の全PageViewで同じ値が保持されます。
チャネルは以下5つの概念で構成され、かつ階層構造になっています。

`channel_group` > `medium` > `source` > `campaign` > `keyword`

|チャネルの種類|説明|値の例|
|-----|-----|-----|
|`channel_group`|Google Analyticsの「チャネルグループ」に相当する値です。<br>チャネルの最上位概念で、人間が認識しやすい形でチャネルを分類したものです。<br>`medium`の値によって、すべて自動でグルーピングされます。<br>グルーピングの条件については、後述の定義一覧を参照ください。|`Organic Search`, `Paid Search`, `Social`|
|`medium`|UTMパラメーターの`utm_medium`か、自動付与されます。|`organic`, `cpc`, `social`|
|`source`|UTMパラメーターの`utm_source`か、自動付与されます。|`google`, `yahoo`, `facebook`|
|`campaign`|UTMパラメーターの`utm_campaign`があればその値が保存されます。|-|
|`keyword`|UTMパラメーターの`utm_term`か、検索系のチャネルの場合は自動付与されます。|-|

なお、チャネルは以下の2種類に分けられます。
- UTMパラメーターによるチャネル
- 自動付与されるチャネル

### UTMパラメーターによるチャネル

ランディングページにUTMパラメーターを付与した場合、任意のチャネルを設定できます。
たとえば、`https://your-site.com?utm_medium=Foo&utm_source=Bar&utm_campaign=hoge`というURLでランディングした場合、
それぞれのチャネルの値は以下の通りとなります。

- `medium`: `Foo`
- `source`: `Bar`
- `campaign`: `hoge`
- `keyword`: `NULL`

### 自動付与されるチャネル

有名なSNSや検索サイトなどでは、自動的にチャネルが識別されます。
定義一覧の付与方法が「自動」となっているチャネルのみ対象となっています。
なお、自動付与対象の遷移でも、UTMパラメーターがあった場合はそちらが優先されます。

### チャネルの定義一覧

以下のcsvファイルを参照ください。
@(Embed)(https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/n_analytics_channel_definition.csv)

## ログの取得およびログファイルに関する情報

TROCCO Web行動ログ収集SDKで収集したログは、以下の条件を満たしたタイミングで弊社管理のAmazon S3上に保存されます。

- 前回の保存から5分が経過したタイミング
- 収集したファイルサイズが256MBに達した場合

また、TROCCO Web行動ログ収集SDKのAPIサーバは、負荷分散・冗長化のため常時複数台稼働しております。（サーバー台数は非公開）
そのため、1回の保存タイミングで、サーバー台数分のファイルが生成されます。
各ファイル内の行数は保証されませんが、おおよそ均等に分割されます。

なお、あるタイミングにおいて取得対象となったログファイルの総サイズが「サーバー台数×256MB」を超えた場合は、まず「サーバー台数×256MB」分のログファイルが保存されます。
そのタイミングでは保存されなかった残りのログファイルは、次回のタイミング（5分後）にて保存されます。

## Single Page Applicationでページ遷移した場合のページビューのトラッキング方法

ページ遷移のタイミングで、[JavaScriptコードの埋め込み](/docs/n-analytics-log-sdk-introduction#2-javascriptコードの埋め込み)で記載している下記コード部分が実行されるように、Webサイト側のJavaScriptに処理を追記してください。

```javascript
Nanalytics('setup','<site_id>',(new Date).getTime());
Nanalytics('send','pageview');
```

