---
articleId: 02bbdcb6-0760-47d6-a1c7-a7bafa2297b1
slug: data-destination-line-ads-conversion-api
title: 転送先 - LINE Conversion API
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
LINE Conversion APIへデータを転送する設定に関するDocsです。

## 補足

転送先LINE Conversion APIは、接続情報を利用しません。

## 制約

:::(Warning) (データ転送中にエラーが発生した場合)

- データ転送中にエラーが発生した場合でも、ジョブは中断されません。
エラーが発生しなかったイベント（レコード）は、通常通り転送されます。
- データ転送中にエラーが1件でも発生した場合、他のイベント（レコード）が転送されていたとしても、その転送ジョブの実行後ステータスは`ERROR`となります。
:::

## 設定項目

### STEP1 基本設定

| 項目 | 説明 |
| --- | --- |
| LINE Tag ID | LINE Tag IDを入力します。 |
| アクセストークン | アクセストークンを入力します。|

:::(Info) (入力項目の取得・確認方法)

アクセストークンの発行手順について、[LINE Conversion APIのトークン発行](https://data.linebiz.com/business-manager/manual/conversion-api)を参照ください。
また、LINE Tag IDも上記手順の中で確認できます。

![001-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-line-ads-conversion-api-2024-08-29-0-52-0.png)
:::

## カラムマッピング

LINE Conversion APIにデータを転送するためには、TROCCO上でカラム名や型をマッピングする必要があります。
以下の表を参照し、TROCCOの転送設定STEP2「カラム定義」タブにて、マッピングを行ってください。
なお、各カラムの詳細については、LINE Conversion API公式ドキュメントの[Send Conversion Event](https://conversion-api-docs.linebiz.com/ja/#tag/LINE-Conversion-API-v1/operation/postback)を参照ください。

|カラム名|データ型|必須|入力例|備考|
|:----|:----|:----|:----|:----|
|`event_deduplication_key`|`string`|✓|`key_sample`|重複排除キー<br>詳しくは、[イベントの重複排除について](https://conversion-api-docs.linebiz.com/ja/#section/%E9%96%8B%E7%99%BA%E3%82%AC%E3%82%A4%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AE%E9%87%8D%E8%A4%87%E6%8E%92%E9%99%A4%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)を参照ください。|
|`event_type`|`string`|-|`conversion`|<ul><li>`conversion`または`page_view`を入力可能</li><li>デフォルトは`conversion`</li></ul>|
|`event_name`|`string`|-|`Conversion`|<ul><li>`event_type`に`conversion`を入力した場合に、以下のいずれかを入力可能<ul><li>`Conversion`（デフォルト）</li><li>カスタムコンバージョン名</li></ul></li></ul>|
|`event_source_type`|`string`|-|`web`|デフォルトは`web`|
|`event_timestamp`|`timestamp`|✓|`2020-01-01 01:01:01.000000 +0900`||
|`user_id`|`string`|✓(\*1)|`U8189cf6745fc0d808977bdb0b9f22995`||
|`user_browser_id`|`string`|✓(\*1)|`browser_id_sample`||
|`user_click_id`|`string`|✓(\*1)|`click_id_sample`||
|`user_ifa`|`string`|✓(\*1)|`ifa_id_sample`||
|`user_external_id`|`string`|✓(\*1)|`external_id_sample`||
|`user_phone`|`string`|✓(\*1)|`+8131111xxxx`|転送時に値をハッシュ化する場合に使用|
|`user_hashed_phone`|`string`|✓(\*1)|- (\*3)|すでに値がハッシュ化されている場合に使用|
|`user_email`|`string`|✓(\*1)|`hoge@example.com`|転送時に値をハッシュ化する場合に使用|
|`user_hashed_email`|`string`|✓(\*1)|- (\*3)|すでに値がハッシュ化されている場合に使用|
|`user_channel_id`|`string`|✓(\*2)|`0000000000`|`user_id`を指定する場合は必須|
|`custom_quantity`|`long`|-|`1`||
|`custom_keyword`|`string`|-|`keyword_sample`|キーでグルーピング|
|`custom_keywords`|`json`|-|`["hoge", "fuga", "piyo"]`|<ul><li>JSON配列構造</li><li>配列の要素は`string`で指定</li></ul>|
|`custom_item_id`|`string`|-|`item_id_sample`|キーでグルーピング|
|`custom_item_ids`|`json`|-|`["hoge", "fuga", "piyo"]`|<ul><li>JSON配列構造</li><li>配列の要素は`string`で指定</li></ul>|
|`custom_currency`|`string`|-|`JPY`||
|`custom_category`|`string`|-|`category_sample`||
|`custom_value`|`double`|-|`1.1`||
|`web_referrer`|`string`|-|`http://www.example.com/`||
|`web_ip_address`|`string`|-|`192.0.2.1`||
|`web_title`|`string`|-|`title_sample`||
|`web_user_agent`|`string`|-|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36`||
|`web_url`|`string`|-|`http://www.example.com/`||

:::(Warning) (接頭辞に`user_`が付くカラム)

- \*1 転送対象のデータには、接頭辞に`user_`が付くカラム（ただし`user_channel_id`を除く）を**少なくとも1つ**含めてください。
- \*2 転送対象のデータに`user_id`を含める場合、転送対象のデータに`user_channel_id`も含めてください。
:::

:::(Warning) (\*3 接頭辞に`user_hashed_`が付くカラム)

- カラム名に`user_hashed_phone`、`user_hashed_email`を使う場合、そのカラムに含む値は**SHA-256**でハッシュ化されている必要があります。
- `user_hashed_phone`について、国番号に続く形式の電話番号がハッシュ化されている必要があります。
  - 日本国内の場合、`+81`に続く形式の電話番号をハッシュ化してください。

:::