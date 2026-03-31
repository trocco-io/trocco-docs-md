---
articleId: 0e83818e-d9b3-4c80-ab72-af490d698c98
slug: data-destination-yahoo-display-ads-conversion-api
title: 転送先 - Yahoo!広告ディスプレイ広告コンバージョン計測API(β版)
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
Yahoo!広告ディスプレイ広告コンバージョン計測APIに関するDocsです。

Yahoo!広告ディスプレイ広告コンバージョン計測APIを利用して、Yahoo!広告にコンバージョン計測結果を送信できます。
本コネクタの概要については、ヤフー株式会社が公開している資料（[コンバージョン詳細マッチングについて](https://s.yimg.jp/images/ads-promo_edit/support/pdf/202209YDA_advancedmatching.pdf)）を参照ください。


:::(Warning) (β版でのご提供)

本コネクタはβ版でのご提供となっています。
正式版リリース時には、仕様が変更される可能性があります。
:::

## 設定項目

### STEP1 基本設定

接続情報を選択します。

:::(Info) (接続情報について)

アプリケーションID(Client ID)を入力し、保存した接続情報を選択してください。
Client IDの発行手順については、[ご利用ガイド](https://developer.yahoo.co.jp/start/)を参照ください。
:::

## カラムマッピング

Yahoo!広告ディスプレイ広告コンバージョン計測APIにデータを転送するためには、TROCCO上でカラム名や型をマッピングする必要があります。
以下の表を参照し、TROCCOの転送設定STEP2「カラム定義」タブにて、マッピングを行ってください。
なお、各カラムの詳細については、GitHubに公開されている[公式ドキュメント](https://github.com/yahoojp-marketing/ads-data-management-api-documents/blob/main/docs_ja/conversion-api.md)を参照ください。

\* 必須列に`(*)`が付いたカラム（パラメータ）は、転送対象のデータに**少なくとも1つ**含めてください。

| カラム名 | データ型 | 必須 | 備考 |
| - | - | - | - |
| `email` |`string`| ✓(\*) | メールアドレス。半角小文字英数字に変換したのち、SHA-256でハッシュ化し送信します。 |
| `phone_number` |`string`| ✓(\*) | 電話番号。ハイフン無し半角数字に変換したのち、SHA-256でハッシュ化し送信します。 |
| `yclid` |`string`| ✓(\*) | 広告をクリックしたユーザーを識別するパラメータ。`_ycl_yjad` Cookie の値を入力してください。 |
| `yjr_yjad` |`string`| ✓(\*) | 広告をクリックしたユーザーを識別するパラメータ。`_yjr_yjad` Cookie の値を入力してください。 |
| `event_time` |`timestamp`| ✓ | コンバージョンの発生日時。リクエスト日時から90日前以内の日時を入力ください。10桁のUNIX時間に変換して送信します。 |
| `yahoo_ydn_conv_io` |`string`| ✓ | お客様のアカウント専用の値。広告管理ツールで取得した「Conversion API リクエストパラメータ」の `yahoo_ydn_conv_io`の値をそのまま入力してください。 |
| `yahoo_ydn_conv_label` |`string`| ✓ | コンバージョンタグにおいてタグを識別するための項目。広告管理ツールで取得した「Conversion API リクエストパラメータ」の`yahoo_ydn_conv_label`の値をそのまま入力してください。 |
| `yahoo_ydn_conv_transaction_id` |`string`| - | **\* 本パラメータ（カラム）は必須入力項目ではありませんが、入力することを推奨しています。**<bR>コンバージョンの重複判定をするためのユニークなID。タグ計測において同じIDが入力されたコンバージョンが存在する場合、タグ計測側が優先されます。<br>64byteを超えない範囲で、かつ前後にスペースが入らないように入力してください。 |
| `yahoo_ydn_conv_value` |`long`| - | 1コンバージョンあたりの価値。広告管理ツールで取得した「Conversion API リクエストパラメータ」の `yahoo_ydn_conv_value`の値、もしくは任意の値を入力してください。 |

:::(Warning) (`yahoo_ydn_conv_transaction_id`に関する注意事項)

Yahoo!広告管理APIの仕様により、`yahoo_ydn_conv_transaction_id`の値が重複したデータを送信した場合でも、転送ジョブはエラーになりません。
:::

:::(Info) (`email`および`phone_number`の値があらかじめハッシュ化されている場合)

通常、`email`および`phone_number`の値は、ハッシュ化されて送信されます。
ただし値があらかじめハッシュ化されている場合は、再度ハッシュ化されることなく、元のハッシュ値のまま送信されます。
:::