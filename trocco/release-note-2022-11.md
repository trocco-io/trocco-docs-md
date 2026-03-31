---
articleId: 5e024f49-748d-4376-a64e-b25acce0e86b
slug: release-note-2022-11
title: リリースノート-2022年11月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2022年11月のリリース情報をお届けします**
* * * 
## おしらせ
:::(Error) (認証方法としてのHubSpot APIキーの利用停止)
HubSpot APIキーは、2022年11月30日以降、HubSpot APIにアクセスするための認証方法として使用できなくなります。
今後、認証方式としてはOAuth 2.0をお使いください。
詳しくは、[HubSpot APIキーへのアクセス](https://knowledge.hubspot.com/ja/integrations/how-do-i-get-my-hubspot-api-key)を参照ください。
:::

## データカタログ
### サイドバー・クエリエディタの横幅が可変に🎉
* データカタログのサイドバーおよびクエリエディタの幅を自由に変更できるようになりました。
    * 境界線をドラッグして左右に動かすことで、お好きな幅に変更できます。
        ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-11-2024-08-29-5-37-0.png){height="" width="500"}

        ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-11-2024-08-29-5-37-1.png){height="" width="500"}

## dbt連携
### 実行コマンド"dbt run-operation"が追加、マクロ呼び出しに対応🎉
* マクロ呼び出しに対応する実行コマンド`dbt run-operation`に対応しました。
    * `dbt run-operation`コマンドの引数にマクロ名を入力することで、ジョブ実行時にマクロを呼び出すことができます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-11-2024-08-29-5-37-2.png){height="" width="500"}

## 転送設定
### 転送先Box
#### 転送先Boxが新たに追加🎉
* フォルダのパスを指定することで、Boxにファイルを転送できます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-11-2024-08-29-5-37-3.png){height="" width="500"}

### 転送先HubSpot
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-11-2024-08-29-5-37-4.png){height="" width="500"}

#### オブジェクトタイプが拡充🎉
* 転送先の対象となるオブジェクトタイプが拡充されました。今回追加されたオブジェクトタイプは下記のとおりです。
  * company
  * deal
  * product
  * ticket
  * line_item
  * quote

#### 転送モードにINSERTが追加🎉
* 転送モードに**追記 (INSERT)** が追加されました。

#### 転送モードUPSERTにて、UPSERTキーが指定可能に🎉
* 転送モードのUPSERTについて、**UPSERTキー**を指定できるようになりました。
    * UPSERTキーについて、詳しくは[転送先 - HubSpot](/docs/data-destination-hubspot)を参照ください。

### 転送先Snowflake
#### 半構造化（json型）データの取り込みが容易に🎉
* json型カラムが、デフォルトで**VARIANT**型（半構造化データ型の1つ）として取り込まれるようになりました。
    * これまでjson型のカラムは、デフォルトで**VARCHAR**型で取り込まれていました。
    * Snowflakeの半構造化データ型について、詳しくは[半構造化データ型](https://docs.snowflake.com/ja/sql-reference/data-types-semistructured.html)を参照ください。

:::(Info) (json型のカラムをVARCHAR型で取り込みたい場合)
これまで同様に、json型のカラムをVARCHAR型で取り込みたい場合は、
転送設定編集STEP2・出力オプションの**カラム設定**にて、**データ型**として`VARCHAR`を選択してください。
:::

### 転送元・転送先Google Drive
#### 共有ドライブの転送に対応🎉
* **転送元**Google Driveにて、**共有ドライブ**上にあるファイルを転送できるようになりました。
* **転送先**Google Driveにて、**共有ドライブ**上にあるフォルダに転送できるようになりました。

### 転送元TikTok Ads
#### 取得対象のディメンションが拡充🎉
* 取得できるディメンションが拡充されました。今回新たに取得対象となったディメンションは下記のとおりです。
  * Basic data metrics
    * reach
    * frequency
    * result
  * Video play metrics
    * video_watched_2s
    * video_watched_6s
    * average_video_play
  * Page Event Metrics
    * web_event_add_to_cart
    * on_web_order
    * initiate_checkout
    * add_billing
    * page_event_search


### 転送先・転送元Google BigQuery
#### データセットのロケーションが拡充🎉
* GCPのリージョンに追従し、TROCCOでも以下3つが選択可能になりました。
    * europe-west8 (ミラノ)
    * europe-west9 (パリ)
    * europe-southwest1 (マドリッド)

:::(Info) (環境へ配慮したGoogle Cloud リージョン)
パリ・マドリッドは、炭素排出量の低いリージョンです。
Google Cloud リージョンの炭素排出量について、詳しくは[Carbon free energy for Google Cloud regions](https://cloud.google.com/sustainability/region-carbon)を参照ください。
:::

## 接続情報
### MongoDB
#### 読み込みたいノードを選択可能に🎉
* MongoDBのreplica setの中から、読み込みたいノード（メンバー）を選択できるようになりました。
    * これまでは、primaryが読み込まれていました。
    * 今後はMongoDB接続情報の「読み込み設定」にて、以下の5つの項目から選択できます。
      * primary
      * primaryPreferred
      * secondary
      * secondaryPreferred
      * nearest
  * 詳しくは、[読み込み設定(Read Preference) について](/docs/connection-configuration-mongodb#読み込み設定read-preference-について)を参照ください。


## ワークフロー定義
#### ワークフローのループ実行に対応🎉
* ワークフローに組み込まれた子ワークフローをループ実行できるようになりました。
    * フロー編集画面でワークフローをタスクとして追加し、タスクを編集することでループ実行を設定できます。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-11-2024-08-29-5-37-5.png){height="" width="500"}

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-11-2024-08-29-5-37-6.png){height="" width="500"}

## UI・UX
#### 転送設定一覧にて、スケジュール一括追加に対応🎉
* 転送設定一覧にて、選択した転送設定に一括でスケジュールを追加できるようになりました。
    * 以下の手順で一括でスケジュールを追加できます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-11-2024-08-29-5-37-7.png){height="" width="500"}

## コネクタAPIアップデート
#### Yahoo!広告
APIバージョンが、**v8**から**v9**へアップデートされました。
新バージョンについて、詳しくはAPIリファレンスを参照ください。
* [Yahoo!広告 ディスプレイ広告 API リファレンス v9](https://ads-developers.yahoo.co.jp/reference/ads-display-api/v9/)
* [Yahoo!広告 検索広告 API リファレンス v9](https://ads-developers.yahoo.co.jp/reference/ads-search-api/v9/)

#### Twitter Ads
* APIバージョンが、v11から**v12**へアップデートされました。
* 新バージョンについて、詳しくは[Twitter Developers](https://twittercommunity.com/t/ads-api-version-12/)のドキュメントを参照ください。

#### Facebook オフラインコンバージョン
* 転送先Facebook オフラインコンバージョンに利用しているFacebook APIが、v14から**v15**へアップデートされました。
* 新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version15.0)のドキュメントを参照ください。
* * * 
その他、以下のような改修などが加わっております。
* データマート - Snowflake
    * 出力先データベースの名前に、ハイフン（-）を含めることができるようになりました。
    * クエリ実行モードで**データ転送モード**を選択したときの**出力先データベース**にて、名前にハイフンを含むデータベースを指定できます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-11-2024-08-29-5-37-8.png){height="" width="500"}


* チーム機能 - リソースグループ詳細
    * 接続情報一覧タブにて、接続情報のサービス名が各接続情報に紐づく形で表示されるようになりました。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-11-2024-08-29-5-37-9.png){height="" width="500"}

* * * 
**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**