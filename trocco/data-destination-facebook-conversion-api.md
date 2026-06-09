---
articleId: 82cf071a-4bb6-4624-a95e-245d1416b268
slug: data-destination-facebook-conversion-api
title: 転送先 - Facebook コンバージョンAPI
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
* Facebook コンバージョンAPIに対してデータを転送する設定のDocsです。
* 任意の転送元からデータを抽出し、コンバージョンAPIに対して送信できます。
Facebook コンバージョンAPIの形式に合わせ、TROCCO上でカラム名や型をマッピングする必要があります。

## 転送先設定項目
| 項目 | 入力例 | 説明 |
| --- | --- | --- |
| Facebook接続情報 |  | アクセストークンで作成した接続情報を選択します。 |
| ピクセルID | 242300000000（TROCCO） | Facebookビジネスのイベントマネージャ該当のピクセルIDを入力してください。<br>![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-facebook-conversion-api-2024-08-29-10-31-1.png) |

## カラムマッピング
TROCCOのSTEP2のカラム定義において、カラム名や型をマッピングすることで、Facebook コンバージョン APIに対してデータを送信できます。
カラム名と型を下記の「補足」にある表のとおりに一致させてください。
コンバージョンAPIドキュメントの以下のパラメータはすべて対応可能です（※data_processing_optionsは除く）
[https://developers.facebook.com/docs/marketing-api/conversions-api/parameters](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/v25.0)

## Facebook ピクセルの作成
Facebookビジネスマネージャから新規データソースを追加してください。

## 転送結果の確認
Facebookイベントマネージャから、イベント結果を確認してください。
転送が成功した場合でも、パラメータが不足しているなどのケースにおいてFacebook側の処理によりイベントが弾かれる場合があります。
件数が一致していることを確認してください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-facebook-conversion-api-2024-08-29-10-31-2.png){height="" width=""}

## 補足
### カラムマッピング表
| カラム名 | 型 | 必須 |  説明 | 入力例 | カテゴリ |
| --- | --- | --- | --- | --- | --- |
| action_source | string | YES | コンバージョン発生元のソース<br>入力可能項目<br>・email<br>・website<br>・app<br>・phone_call<br>・chat<br>・physical_store<br>・system_generated<br>・other | website |  |
| event_name | string | YES | 入力可能項目<br>・Purchase<br>・Lead<br>・AddToCart<br>など<br><br>https://developers.facebook.com/docs/facebook-pixel/reference#standard-events<br>に準じる | Lead |  |
| event_time | timestamp | YES | イベント発生時刻<br>TROCCO転送実行日時の7日前以降の値を入力してください。 | 2020-01-01 00:00:00 +00:00 |  |
| em | string | YES※ | Email | trocco@trocco.io | user_data |
| ph | string | YES※ | Phone | 080-0000-0000 | user_data |
| ge | string | YES※ | Gender | f | user_data |
| db | string | YES※ | Date of Birth | 19971226 | user_data |
| ln | string | YES※ | Last Name | TROCCO | user_data |
| fn | string | YES※ | First Name | Taro | user_data |
| ct | string | YES※ | City | Tokyo | user_data |
| st | string | YES※ | State | Meguro-ku | user_data |
| zp | string | YES※ | Zip | 1234567 | user_data |
| country | string | YES※ | Country | jp | user_data |
| external_id | string | YES※ | External ID |  | user_data |
| client_ip_address | string | YES※ | Client IP address |  | user_data |
| client_user_agent | string | YES※ | Client user agent |  | user_data |
| fbc | string | YES※ | Click ID |  | user_data |
| fbp | string | YES※ | Browser ID |  | user_data |
| subscription_id | string | YES※ | Subscription ID |  | user_data |
| lead_id | string | YES※ | Lead ID |  | user_data |
| fb_login_id | string | YES※ | FB Login ID |  | user_data |
| madid             | string | NO | モバイル広告主ID、Androidデバイスの広告ID、またはAppleデバイスの広告識別情報(IDFA)。 |  | user_data |
| custom_data | json | NO | JSON形式で標準パラメーターを渡すことができます。<br>設定可能な項目については、以下に準じます。<br>[標準パラメーター - コンバージョンAPI](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/custom-data) |  |  |
| event_source_url | string | action_sourceがwebsiteの場合、必須 |  |  |  |
| opt_out | boolean | NO |  |  |  |
| event_id | string | NO |  |  |  |
 
※user_dataのうち、少なくとも1つのカラムが必須です。

※カラムマッピング表の組み合わせのうち、以下のいずれかまたはそのサブセットで構成されるパラメーターしか含んでいない場合は無効と見なされます。
  * ct + country + st + zp + ge + client_user_agent
  * db + client_user_agent
  * fn + ge
  * ln + ge