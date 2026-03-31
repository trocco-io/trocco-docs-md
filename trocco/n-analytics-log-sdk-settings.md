---
articleId: bd8b8518-f687-4504-b23a-84b44945a061
slug: n-analytics-log-sdk-settings
title: TROCCO Web行動ログ収集SDK - 各種機能
parentCategoryId: 4603b9be-d2b6-49d2-b268-119106b57179
languageCode: ja
---
## 概要

TROCCO Web行動ログ収集SDKでは、追加でJavaScriptのコードを埋め込んだり、スクリプトを実行することで、以下のことができます。

- [イベントトラッキングの追加](/docs/n-analytics-log-sdk-settings#イベントトラッキングの追加)
- [カスタムカラムの追加](/docs/n-analytics-log-sdk-settings#カスタムカラムの追加)
- [既存設定の変更](/docs/n-analytics-log-sdk-settings#既存設定の変更)
- [スクリプト実行による収集データの取得](/docs/n-analytics-log-sdk-settings#スクリプト実行による収集データの取得)

このページでは、それぞれの方法をサンプルコードを添えて説明します。

## イベントトラッキングの追加

以下のJavaScriptのコードを、HTMLファイル内の対象操作を行う箇所に埋め込むことで、ユーザーのイベントを取得できます。
なお、`{custom_column_1: 'value1'}`の部分については、後述の[カスタムカラムの追加](/docs/n-analytics-log-sdk-settings#カスタムカラムの追加)を参照ください。

```javascript
Nanalytics('send','event',{category:<category>,action:<action>,label:<label>,value:<value>,sendPageviewIfSessionExpired:(<boolean>)}, {custom_column_1: 'value1'});
```

なお、取得したイベントは、[転送元 - TROCCO Web行動ログ](/docs/data-source-n-analytics-log)にて**イベントログ**を選択することで転送できます。

### コード内の各種パラメーター

必須列に✓がついたパラメーターは、コード内に必ず含める必要があります。

|パラメーター名|必須|データ型|説明|
|-----|-----|-----|-----|
|`action`|✓|`string`|インタラクションの種類|
|`category`|✓|`string`|インタラクションに使用されたオブジェクト|
|`label`|-|`string`|イベントの分類に使用|
|`value`|-|`number`|イベントに関連する数値|
|`sendPageviewIfSessionExpired`|-|`boolean`|イベント発火時にセッションの有効期限が切れていた場合、PageViewを送信してセッションを更新するかどうか|

### コードサンプル

以下は、ユーザーが外部サイトリンクをクリックしたログを取得するコードサンプルです。
なお、`string`型のパラメーターの値を指定したい場合は、設定値部分をクォーテーションで括ってください。

```html
<a onclick="Nanalytics('send','event',{category:'link', action:'click', label:'example.com'})">https://example.com/</a>
```

## カスタムカラムの追加

ページビューログ・イベントログのいずれも、カスタムカラムを設定することで、任意のカラムを取得データに含めることができます。

:::(Warning) (カスタムカラムの設定数)

カスタムカラムは設定できる数に限りがあります。

- ページビューログの場合：最大**10**カラムまで
- イベントログの場合：最大**5**カラムまで
:::

### コードサンプル

以下のコードサンプルにおける、カラム名（`custom_column_x`の部分）とその値は、適宜編集ください。
値は`string`型（文字列）のみ、指定できます。

#### ページビューログの場合

[JavaScriptコードの埋め込み](/docs/n-analytics-log-sdk-introduction#2-javascriptコードの埋め込み)で記載している、埋め込み用JavaScriptのコードの`Nanalytics('send','pageview');`行を、以下のように編集します。


```javascript
Nanalytics('send','pageview',{custom_column_1: 'value1', custom_column_2: 'value2'});
```

#### イベントログの場合

[イベントトラッキングの追加](/docs/n-analytics-log-sdk-settings#イベントトラッキングの追加)で記載しているJavaScriptのコードをベースとします。

```html
<a onclick="Nanalytics('send','event',{category:'link', action:'click', label:'example.com'}, {custom_column_1: 'value1', custom_column_2: 'value2'})">https://example.com/</a>
```

## 既存設定の変更

以下のJavaScriptのコードを追加で埋め込むことで、TROCCO Web行動ログ収集SDKの内部的な設定を一部変更できます。

```javascript
Nanalytics('config','<setting_name>',<setting_value>);
```

### 変更できる設定項目一覧

通常、以下の設定にはデフォルト値が用いられています。

|設定名(setting_name)|データ型|設定内容|デフォルト値|
|-----|-----|-----|-----|
|`session_expire_msec`|`number`|セッションのタイムアウト時間（ミリ秒）|1800000|
|`cookie_prefix`|`string`|TROCCO Web行動ログ収集SDKが使用する、Cookieのキー名のプレフィックス|`__na_`|
|`cookie_host`|`string`|データを保存する際に使用する、Cookieドメイン<br>ドメインの先頭に`.`を付与した場合、そのドメイン配下のサブドメイン間で、セッションやユーザーIDが共有されます。|配信先のサイトホスト|
|`customer_id`|`string`|サイトの顧客IDなどを保存するためのフィールド<br>データ型が`string`となることにご留意ください。|-|

### コードサンプル

[JavaScriptコードの埋め込み](/docs/n-analytics-log-sdk-introduction#2-javascriptコードの埋め込み)で記載している、埋め込み用コードの`Nanalytics('setup',...`行と`Nanalytics('send',...`行の間に、以下の行を追加してください。
なお、`string`型の設定値を変更したい場合は、設定値部分をクォーテーションで括ってください。

```javascript
Nanalytics('config','session_expire_msec',3600000);
Nanalytics('config','cookie_prefix','__hoge_');
Nanalytics('config','cookie_host','.hoge.co.jp');
Nanalytics('config','customer_id','1234');
```

## スクリプト実行による収集データの取得

TROCCO Web行動ログ収集SDKが収集したデータは、以下のスクリプトを実行することでも取得できます。
Webブラウザの開発者ツールなどで値を確認したい際などにお使いください。

```javascript
Nanalytics('get',[<callback_function>]);
```

### スクリプトで取得できるデータ一覧

コールバック関数の引数が以下のプロパティ名を持つオブジェクトとなります。
値が存在しない場合は、`undefined`となります。

|プロパティ名|データ型|説明|
|-----|-----|-----|
|`site_id`|`string`|primeNumberが発行したサイト固有のID|
|`user_id`|`string`|1stパーティCookie（サイトドメイン）ベースの一意なID（UUIDv4で生成）|
|`session_id`|`string`|セッション内で一意なID（UUIDv4で生成）|
|`browser_height`|`number`|ブラウザの縦幅|
|`browser_width`|`number`|ブラウザの横幅|
|`language`|`string`|ブラウザの言語|
|`session_num`|`number`|該当ユーザーの累計セッション回数|
|`session_start_time`|`number`|セッション開始日時|
|`session_channel_url`|`string`|セッション開始時の流入経路URL|
|`medium`|`string`|Google Analyticsの`utm_medium`に相当する値<br>|
|`source`|`string`|Google Analyticsの`utm_source`に相当する値<br>|
|`campaign`|`string`|Google Analyticsの`utm_campaign`に相当する値<br>|
|`keyword`|`string`|Google Analyticsの`utm_term`に相当する値<br>|
|`ad_id`|`string`|Google Adsなどの広告ID|
|`url`|`string`|正規化・デコードされたURL|
|`referer_url`|`string`|正規化・デコードされたリファラーURL|
|`customer_id`|`string`|顧客ID|
|`browser_time`|`number`|ユーザーのブラウザ時間でPageViewが発生した日時|
|`pv_num`|`number`|該当セッション内における累計PageView回数|

### コードサンプル

以下は、`session_num`の値を出力するコードサンプルです。

```javascript
Nanalytics('get',function(value) { console.log(value.session_num) });
```