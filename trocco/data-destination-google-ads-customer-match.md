---
articleId: d9dbbe8b-6a0f-4d8b-835a-a2488e6c7c11
slug: data-destination-google-ads-customer-match
title: 転送先 - Google Ads カスタマーマッチ
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
Google Ads カスタマーマッチに関するDocsです。
転送されたデータからGoogleAdsの顧客リスト（広告のターゲット）を作成できます。

## 設定項目

### STEP1 基本設定

| 項目 | 必須 |デフォルト値 | 説明 |
| --- | --- | --- | --- |
| Google Ads接続情報 | ✓ | - | あらかじめ登録してある[Google Adsの接続情報](/docs/connection-configuration-google-ads)から、今回の転送設定に必要な権限を持つものを選択します。 |
| お客様 ID | ✓  | - |お客様 IDを入力します。<br>お客様 IDの確認方法は、[Google広告公式ドキュメント - Google 広告のお客様 ID を確認する](https://support.google.com/google-ads/answer/1704344)を参照ください。 |
| データの種類 | ✓ | 連絡先情報 | どのカラムが顧客リストにアップロードされるかを選択します。具体的なカラムとアップロードされるユーザーの属性の対応関係は後述の**カラムマッピング**をご参照ください。この値は顧客リストの新規作成時のみ指定可能で、更新時には無視されます。|
| 顧客リスト名 | ✓  | - | 顧客リストの名前を入力します。既存の顧客リストと同じ名前を指定した場合は、その顧客リストが更新されます。既存の顧客リストと該当するものがない場合は、新規に顧客リストが作成されます。|
| 説明文 |    | - | 顧客リストに関する説明を入力します。|
| 転送モード | ✓ | 追加 | 追加か洗い替えを選択します。洗い替えの場合は既存の顧客リストのデータを削除してから追加を行います。 |
| モバイル デバイス ID | - | - | データが収集されたモバイルアプリを一意に識別する文字列で、データの種類が`モバイルデバイス ID`の場合のみ入力が必須です。iOS の場合はApp Store URLの末尾に表示される9桁の文字列です（例：App Store リンクが http://itunes.apple.com/us/app/flood-it!-2/id476943146 は`476943146`）。Android の場合はアプリのパッケージ名です（例: Google Play リンクが https://play.google.com/store/apps/details?id=com.labpixies.colordrips の場合、`com.labpixies.colordrips`）|
| カスタマーマッチの作成および更新完了まで待つ | ✓ | 無効 | 転送先による転送データの確認が完了するまで、転送ジョブを継続するかを選択します。<br>詳しくは、後述の[転送ジョブの継続設定](/docs/data-destination-google-ads-customer-match#転送ジョブの継続設定について)も参照ください。 |

#### STEP1 詳細設定

**詳細設定**をクリックすると、設定項目が表示されます。

| 項目 | 必須 |デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 有効期間（日） | ✓  | 540 | ユーザーの Cookie がリストに最後に追加されてから、リストに保持される日数。このフィールドは 0 ～ 540 の範囲で指定してください。|
| 広告ユーザーデータに関する同意 | ✓  | GRANTED | 広告ユーザーデータに関する同意を表します。|
| 広告のパーソナライズに対する同意 | ✓  | GRANTED | 広告のパーソナライズに対する同意を表します。 |

#### 転送ジョブの継続設定について

- **「有効」を選択した場合**
  - カスタマーマッチの作成および更新が完了するまで、転送ジョブを継続します。
  - 有効にすると、バッチ処理の完了を確認できますが、最大24時間かかることがあります。マッチング完了は保証されません。詳細は[公式ドキュメント](https://developers.google.com/google-ads/api/docs/remarketing/audience-segments/customer-match/get-started?#verify-list)をご確認ください。
  - 転送ジョブを開始して**1時間以上**経過してもジョブが終了しない場合は、下記の[対処方法](/docs/data-destination-google-ads-customer-match#転送ジョブが終了しない場合の対処方法)を参照ください。

- **「無効」を選択した場合**
  - カスタマーマッチの作成および更新の完了を待たずに、転送ジョブを終了します。
  - カスタマーマッチの作成および更新の完了を待たずに転送ジョブが終了するため、転送時間を節約できます。
  - カスタマーマッチの作成および更新状況は、[Google Ads Audience manager](https://ads.google.com/aw/audiences/management)で確認できます。

## カラムマッピング

転送するデータから顧客リストを作成するために、TROCCO上でカラム名や型をマッピングする必要があります。
TROCCOの転送設定STEP2**カラム定義**タブにて、マッピングを行ってください。マッピングはデータの種類によって変わります。

### 連絡先情報

email、phone_number、もしくはfirst_name、last_name、country_code、postal_codeのセットの複数を指定可能です。
first_name、last_name、country_code、postal_codeはすべての値を入力する必要があリます。

| カラム名     | type   | 備考     |
|------------ |------ |------ |
| email        | string | メールアドレス。SHA-256でハッシュ化し送信する必要があります。 |
| phone_number | string | 国番号付きの電話番号。SHA-256でハッシュ化し送信する必要があります。 |
| first_name   | string | 名。SHA-256でハッシュ化し送信する必要があります。 |
| last_name    | string | 姓。SHA-256でハッシュ化し送信する必要があります。 |
| country_code | string | 国コード。 |
| postal_code  | string | 郵便番号。 |

:::(Warning) (転送データのハッシュ化と標準化)

ハッシュ結果を標準化については、[公式ドキュメント - ユーザーの連絡先情報をアップロードする](https://developers.google.com/google-ads/api/docs/remarketing/audience-segments/customer-match/get-started?hl=ja#upload_user_contact_information)を参照ください。
:::

### ユーザー ID

| カラム名            | type   | 備考 |
|------------------- |------ |------------------- |
| third_party_user_id | string | CRM ID。 |


### モバイル デバイス ID

| カラム名  | type   |  備考 |
|--------- |------ |--- |
| mobile_id | string | iOSの場合は広告主向け識別子（IDFA）。Androidの場合はGoogle広告ID（AAID）     |

## 転送ジョブが終了しない場合の対処方法

**カスタマーマッチの作成および更新完了まで待つ**設定をした転送ジョブは、[最短で10分、最長で24時間かかることがあります](https://developers.google.com/google-ads/api/docs/remarketing/audience-segments/customer-match/get-started?hl=ja#verify-list)。

転送ジョブ実行ログに` Wait until the offline user data job is completed` を含む行が出力されている場合、転送ジョブをキャンセルしても構いません。
顧客リスト転送は完了しているため、顧客リストの作成と更新が中断されることはありません。
カスタマーマッチの作成と更新状況は、[Google Ads Audience manager](https://ads.google.com/aw/audiences/management)で確認できます。
