---
articleId: ed5eefea-b1ed-40a5-a802-d4b914107463
slug: data-destination-google-ads-conversion
title: 転送先 - Google Ads コンバージョン
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要

Google Adsに対してコンバージョンデータを転送する設定のDocsです。

- 任意の転送元からデータを抽出し、**オフラインコンバージョン**・**拡張コンバージョン（ウェブ向け）**・**拡張コンバージョン（リード向け）** のいずれかのコンバージョン種類にデータを送信します。
- 各APIの形式に合わせ、TROCCO上でカラム名や型をマッピングしていただく必要があります。

## 設定項目

| 項目 | 必須 |デフォルト値 | 説明 |
| --- | --- | --- | --- |
| Google Ads接続情報 | ✓ | - | あらかじめ登録してある[Google Adsの接続情報](/docs/connection-configuration-google-ads)から、今回の転送設定に必要な権限を持つものを選択します。 |
| コンバージョン種別 | ✓ | オフラインコンバージョン | 以下のいずれかを選択します。<ul><li>[オフラインコンバージョン](/docs/data-destination-google-ads-conversion#オフラインコンバージョンを利用する場合)</li><li>[拡張コンバージョン（ウェブ向け）](/docs/data-destination-google-ads-conversion#拡張コンバージョンウェブ向けを利用する場合)</li><li>[拡張コンバージョン（リード向け）](/docs/data-destination-google-ads-conversion#拡張コンバージョンリード向けを利用する場合)</li></ul> |
| お客様ID | ✓ | - | お客様IDを入力します。Google広告の画面左上に表示される10桁の番号を、**ハイフンを含めずに**入力してください。<br/>![001.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-ads-conversion-2024-08-29-15-28-0.png){height="" width="50%"} |
| コンバージョンアクションID | ✓ | - | コンバージョン送信先のアクションIDを入力します。取得方法は、後述の[コンバージョンアクションIDの取得方法](/docs/data-destination-google-ads-conversion#コンバージョンアクションidの取得方法)を参照ください。 | 

### コンバージョンアクションIDの取得方法

1. Google広告コンソール画面右上の**ツールと設定**＞**コンバージョン**をクリックします。
  ![002.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-ads-conversion-2024-08-29-15-28-1.png){height="" width="50%"}

2. 対象の**コンバージョン アクション**をクリックします。
  ![003-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-ads-conversion-2024-08-29-15-28-2.png){height="" width="50%"}

3. URLを確認し、**ctId**パラメーターの値を取得します。
  ![004.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-ads-conversion-2024-08-29-15-28-3.png){height="" width="50%"}

## オフラインコンバージョンを利用する場合

### 概要

オフラインコンバージョンとは、Google広告を経由し店舗への来店・契約するようなコンバージョンに対し、元の広告クリックID（GCLID）との紐付けを行うことで、広告効果を測定するための仕組みです。

### 制約

- クリックによるコンバージョンのみ、転送がサポートされています。
- 電話によるコンバージョンはサポートされていません。

### 事前準備

データの送信先となるコンバージョンに対し、[Google クリック ID（GCLID）を使用してオフライン コンバージョンのインポートを設定する](https://support.google.com/google-ads/answer/7012522)必要があります。

### カラムマッピング

データを転送するためには、TROCCO上でカラム名と型をマッピングする必要があります。
以下の表を参照し、TROCCOの転送設定STEP2「カラム定義」タブにて、マッピングを行ってください。

| カラム名 | データ型 | 必須 |  入力例 | 説明 |
| --- | --- | --- | --- | --- |
| `gclid` | `string` | ✓ |`xxxxxx` | Google Click ID (GCLID) | 
| `conversion_time` | `timestamp` | ✓ | `2020-01-01 00:00:00 +09:00` | コンバージョン発生日時 | 
| `conversion_value` | `double` | - | `1.0` | コンバージョン値 |
| `conversion_currency` | `string` | - | `USD` | コンバージョン通貨 |

## 拡張コンバージョン（ウェブ向け）を利用する場合

### 概要

Webマーケティングで広く利用されている、3rd Party Cookieによるトラッキング技術は、2023年以降Google Chromeブラウザで廃止されます。その代替手段のひとつが拡張コンバージョン（ウェブ向け）になります。
Googleの保持するアカウントとクリックのデータと広告主のLPページや問い合わせフォームで得た登録情報を突合し、広告クリックの広告効果を計測する仕組みです。
個人が特定できる登録情報は、Googleにアップロードする前にハッシュ化して送信されます。

詳しくは[Google Ads API公式ドキュメント](https://developers.google.com/google-ads/api/docs/conversions/enhanced-conversions/web-setup?hl=ja)を参照ください。

### 制約

- コンバージョンの関連付けと測定をタイムリーに行えるよう、**コンバージョン発生から24時間以内**に転送を行うようにしてください。
    - 参考: [Google Ads API の拡張コンバージョン（ウェブ向け）について - Google 広告 ヘルプ](https://support.google.com/google-ads/answer/11062876?hl=ja&ref_topic=3165803)

### 事前準備

顧客データに関する規約に同意していただく必要があります。
（参考: [顧客データに関するポリシー - Google 広告ポリシー ヘルプ](https://support.google.com/adspolicy/answer/7475709)）

1. Google広告コンソール画面右上の**ツールと設定**＞**コンバージョン**をクリックします。
  ![002.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-ads-conversion-2024-08-29-15-28-1.png){height="" width="50%"}

2. 画面左側の**設定**をクリックします。
  ![005-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-ads-conversion-2024-08-29-15-28-5.png){height="" width="50%"}

3. **顧客データに関する規約**をクリックし、同意します。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-ads-conversion-2024-08-29-15-28-6.png){height="" width="50%"}

### カラムマッピング

データを転送するためには、TROCCO上でカラム名と型をマッピングする必要があります。
以下の表を参照し、TROCCOの転送設定STEP2「カラム定義」タブにて、マッピングを行ってください。

| カラム名 | データ型 | 必須 | 入力例 | 説明 |
| --- | --- | --- | --- | --- |
| `order_id` | `string` | ✓ | `1` | オーダーID<br>\* コンバージョンごとに、一意となる文字列を入力してください。 |
| `conversion_time` | `timestamp` | ✓ | `2020-01-01 00:00:00 +09:00` | コンバージョン発生日時 |
| `gclid` | `string` | - | `xxxxxx` | Google Click ID (GCLID) |
| `value` | `double` | ✓ | `1.0` | コンバージョン値 |
| `currency_code` | `string` | - | `USD` | コンバージョン通貨 |
| `user_agent` | `string` | - | `Mozilla/5.0 (Macintosh; ...)` | ユーザーエージェント |
| `email` | `string` | *1 | `hoge@example.com` | メールアドレス<br>\* 値がSHA-256でハッシュ化されていない場合は、TROCCO内部でSHA-256でハッシュ化されて転送されます。 |
| `phone_number` | `string` | *2 | `+8131111xxxx` | 電話番号<br>\* 値がSHA-256でハッシュ化されていない場合は、TROCCO内部でSHA-256でハッシュ化されて転送されます。 |
| `first_name` | `string` | *3 |`Bob` | 名前<br>\* 値がSHA-256でハッシュ化されていない場合は、TROCCO内部でSHA-256でハッシュ化されて転送されます。 |
| `last_name` | `string` | *3 |`Smith` | 名字<br>\* 値がSHA-256でハッシュ化されていない場合は、TROCCO内部でSHA-256でハッシュ化されて転送されます。 |
| `street_address` | `string` | *3 |`123 market street` | 住所<br>\* 値がSHA-256でハッシュ化されていない場合は、TROCCO内部でSHA-256でハッシュ化されて転送されます。 |
| `city` | `string` | *3 |`San Francisco` | 市町村 |
| `state` | `string` | *3 |`CA` | 州 |
| `country` | `string` | *3 |`USA` | 国 |
| `postcode` | `string` | *3 |`95814` | 郵便番号 |

:::(Warning) (必須となるカラム)

共有項目（コンバージョン関連項目）に加えて、以下の属性のうち、いずれか1つの属性に含まれるすべてのカラムを転送データに含める必要があります。
- メールアドレスの場合（上記必須列の*1に該当するカラム）
  - `email`
- 電話番号の場合（上記必須列の*2に該当するカラム）
  - `phone_number`
- 名前および住所の場合（上記必須列の*3に該当するカラム）
  - `first_name`
  - `last_name`
  - `street_address`
  - `city`
  - `state`
  - `country`
  - `postcode`
:::

:::(Info) (\* ハッシュ化対象のカラム)

メールアドレス・電話番号・名前・名字・住所の値は、転送元データ側でSHA-256でハッシュ化されている場合、そのまま転送されます。
転送元データ側でハッシュ化されていない場合は、TROCCO内部でSHA-256でハッシュ化されて転送されます。
:::

## 拡張コンバージョン（リード向け）を利用する場合

### 概要

拡張コンバージョン（リード向け）は、フォーム送信や資料請求など、リード獲得に関するコンバージョンをトラッキングするための仕組みです。
広告主が取得した顧客の氏名やメールアドレスなどの情報をGoogleにハッシュ化して送信し、広告クリックと照合します。
これにより、リード獲得における広告効果を測定することが可能になります。

詳しくは[Google Ads API公式ドキュメント](https://developers.google.com/google-ads/api/docs/conversions/enhanced-conversions/leads-setup?hl=ja)を参照ください。

### 事前準備

[Google タグを使ってリードの拡張コンバージョンを手動で設定する - Google 広告 ヘルプ](https://support.google.com/google-ads/answer/11021502)を参照ください。


### カラムマッピング

データを転送するためには、TROCCO上でカラム名と型をマッピングする必要があります。
以下の表を参照し、TROCCOの転送設定STEP2「カラム定義」タブにて、マッピングを行ってください。

| カラム名 | データ型 | 必須 | 入力例 | 説明 |
| --- | --- | --- | --- | --- |
| `order_id` | `string` | ✓ | `1` | オーダーID<br>\* コンバージョンごとに、一意となる文字列を入力してください。 |
| `conversion_time` | `timestamp` | ✓ | `2020-01-01 00:00:00 +09:00` | コンバージョン発生日時 |
| `gclid` | `string` | - | `xxxxxx` | Google Click ID (GCLID) |
| `value` | `double` | ✓ | `1.0` | コンバージョン値 |
| `currency_code` | `string` | - | `USD` | コンバージョン通貨 |
| `ad_user_data_consent` | `string` | ✓ |`GRANTED`| イベントの同意設定<br>以下のいずれかの値を入力してください。<ul><li>`UNSPECIFIED`</li><li>`GRANTED`</li><li>`DENIED`</li></ul> |
| `email` | `string` | *1 | `hoge@example.com` | メールアドレス<br>\* 値がSHA-256でハッシュ化されていない場合は、TROCCO内部でSHA-256でハッシュ化されて転送されます。 |
| `phone_number` | `string` | *2 | `+8131111xxxx` | 電話番号<br>\* 値がSHA-256でハッシュ化されていない場合は、TROCCO内部でSHA-256でハッシュ化されて転送されます。 |

:::(Warning) (必須となるカラム)

共有項目（コンバージョン関連項目）に加えて、以下の属性のうち、いずれか1つの属性に含まれるすべてのカラムを転送データに含める必要があります。
- メールアドレスの場合（上記必須列の*1に該当するカラム）
  - `email`
- 電話番号の場合（上記必須列の*2に該当するカラム）
  - `phone_number`
:::

:::(Info) (\* ハッシュ化対象のカラム)

メールアドレス・電話番号の値は、転送元データ側でSHA-256でハッシュ化されている場合、そのまま転送されます。
転送元データ側でハッシュ化されていない場合は、TROCCO内部でSHA-256でハッシュ化されて転送されます。
:::
