---
articleId: 98e070ae-0976-4f15-9f60-53a64d661ee8
slug: data-destination-twitter-ads-web-conversion
title: 転送先 - X Ads (旧Twitter Ads) Webコンバージョン
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
X Ads (旧Twitter Ads) Webコンバージョンへデータを転送する設定に関するDocsです。

## 転送先設定項目
| 項目 |説明 |
| --- | --- |
| X Ads (旧Twitter Ads) 接続情報 | Twitterアプリとの連携が完了した接続情報を選択します。 |
| ピクセルID | TwitterピクセルのIDを入力します。<br>確認方法は、後述の[ピクセルID・イベントIDの確認方法](/docs/data-destination-twitter-ads-web-conversion/ピクセルid・イベントidの確認方法)を参照ください。 |


## カラムマッピング
X Ads (旧Twitter Ads) Webコンバージョンにデータを転送するためには、TROCCO上でカラム名や型をマッピングする必要があります。
以下の表を参照し、TROCCOの転送設定STEP2「カラム定義」タブにて、マッピングを行ってください。
なお、各カラムの詳細については、Twitter Ads API公式ドキュメントの[Web Conversions](https://developer.twitter.com/en/docs/twitter-ads-api/measurement/api-reference/conversions)を参照ください。

|カラム名|データ型|必須|入力例|備考|
|:----|:----|:----|:----|:----|
|`conversion_time`|`timestamp`|✓|`2020-01-01 01:01:01.000000 +0900`| |
|`event_id`|`string`|✓|`tw-o8z6j-o87ne`|<ul><li>確認方法は、後述の[ピクセルID・イベントIDの確認方法](/docs/data-destination-twitter-ads-web-conversion/ピクセルid・イベントidの確認方法)を参照ください。</li><li>左記の入力例に対して、`o87ne`と入力することもできます。</li></ul>|
|`identifier_twclid`|`string`|✓(\*1)|`twclid_1`| |
|`identifier_email`|`string`|✓(\*1)|`hoge@example.com`|転送時に値をハッシュ化する場合に使用|
|`identifier_hashed_email`|`string`|✓(\*1)|(\*2)|すでに値がハッシュ化されている場合に使用|
|`identifier_phone_number`|`string`|✓(\*1)|`031111xxxx`|転送時に値をハッシュ化する場合に使用|
|`identifier_hashed_phone_number`|`string`|✓(\*1)|(\*2)|すでに値がハッシュ化されている場合に使用|
|`price_currency`|`string`|-|`JPY`|デフォルト値は`USD`|
|`price_value`|`double`|-|`1.1`| |
|`event_number_items`|`long`|-|`1`| |
|`conversion_id`|`string`|-|`1`|既存のイベントを更新したい場合の重複排除キー|
|`description`|`string`|-|`description_1`| |
|`content_id`|`string`|-|`1`| |
|`content_name`|`string`|-|`name_1`| |
|`content_type`|`string`|-|`type_1`| |
|`content_price`|`double`|-|`1.1`| |
|`content_number_items`|`long`|-|`1`| |
|`content_group_id`|`long`|-|`1`| |

:::(Warning) (\*1 接頭辞に`identifier_`が付くカラム)
転送対象のデータには、接頭辞に`identifier_`が付くカラムを**少なくとも1つ**含めてください。
:::

:::(Warning) (\*2 接頭辞に`identifier_hashed_`が付くカラム)
カラム名に`identifier_hashed_email`、`identifier_hashed_phone_number`を使う場合、そのカラムに含む値は以下の条件をすべて満たす必要があります。
* SHA-256でハッシュ化されていること
* 冒頭・末尾に空白文字を含めない状態でハッシュ化されていること
* 値を構成する文字はすべて小文字であること
:::


## ピクセルID・イベントIDの確認方法
1. [Twitter広告マネージャー](https://ads.twitter.com)にログイン

2. 画面上部の**ツール**＞**イベントマネージャー**をクリック
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-twitter-ads-web-conversion-2024-08-29-21-53-0.png){height="" width="500"} 

    イベントマネージャーが表示されます。ピクセルIDおよび任意のイベントIDを確認できます。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-twitter-ads-web-conversion-2024-08-29-21-53-1.png){height="" width="500"}
