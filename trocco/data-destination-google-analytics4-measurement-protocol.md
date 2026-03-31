---
articleId: 5d362706-5991-4364-95d7-5c088cf91e6a
slug: data-destination-google-analytics4-measurement-protocol
title: 転送先 - Google Analytics 4 Measurement Protocol
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要

Google Analytics 4 Measurement Protocolへデータを転送する設定のDocsです。

- 任意の転送元からデータを抽出し、Measurement Protocol (Google Analytics 4)に対して送信できます。
- Measurement Protocolの形式に合わる形で、転送設定作成時にTROCCO上でカラム名や型をマッピングしていただく必要があります。

## 制約
- APIの制限事項があります。
    - 詳細は [APIドキュメント](https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events#limitations) を参照してください。
- 1行の入力に対し、1つのイベントが作成されます。
    - 複数の入力をまとめた複数イベントの作成はできません。

## 補足
転送先Google Analytics 4 Measurement Protocolは、接続情報を利用しません。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| APIシークレット | Yes | - | データストリームのAPIシークレットを入力します。<br>確認方法については、[測定ID・APIシークレットの確認方法](/docs/data-destination-google-analytics4-measurement-protocol#測定id・apiシークレットの確認方法)を参照ください。 |
| 測定ID | Yes | - | データストリームの測定IDを入力します。<br>確認方法については、[測定ID・APIシークレットの確認方法](/docs/data-destination-google-analytics4-measurement-protocol#測定id・apiシークレットの確認方法)を参照ください。|
| リクエストの検証 | Yes | 有効 | **有効**を選択すると、Measurement Protocol 検証サーバーにて、送信対象のイベントの形式が正しいかどうかが検証されます。<br>このとき、リクエストに不正な形式のイベントが含まれる場合は、TROCCOの転送ジョブはErrorとなります。<br>なお、有効・無効のいずれを選択しても、正しい形式のイベントについては、転送が実施されます。|

### STEP2 詳細設定

### カラムマッピング
TROCCOのSTEP2のカラム定義において、カラム名や型をマッピングすることで、Google Analytics 4 Measurement Protocolに対してデータを送信できます。
カラム名と型を以下の表のとおりに一致させてください。
その他のカラムについては [APIドキュメント](https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference#payload_post_body)を参照してください。

| カラム名 | 型 | 必須 |
| --- | --- | --- |
| client_id | string | Yes | 
| events.name | string | Yes |
| events.params.${パラメータ名} | 任意の型 | No |
| events.params.items.${パラメータ名} | 任意の型 | No |
| user_properties.${パラメータ名} | 任意の型 | No | 

#### 入力例
- 以下の入力例では、2つの `offline_purchase` イベントと1つの`search` イベントが作成されます。
    - `client_id: x` のイベントが2つありますが、入力1行に対し1つのイベントが作成されます。
- イベントおよびユーザープロパティの詳細はAPIドキュメントを参照してください。
    - [イベント](https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference/events)
    - [ユーザープロパティ](https://developers.google.com/analytics/devguides/collection/protocol/ga4/user-properties)

| client_id | events.name | events.params.currency | events.params.value | events.params.search_term | events.params.items.item_id | events.params.items.item_name | user_properties.customer_tier | user_properties.age |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | offline_purchase | USD | 100 | null | SKU_12345 | Stan and Friends Tee | standard | null |
| x | offline_purchase | USD | 200 | null | SKU_67890 | pN and Friends Tee | standard | null |
| y | search | null | null | t-shirts | null | null | premium | 30 |

## 測定ID・APIシークレットの確認方法
以下の手順で確認できます。

1. Google Analytics 4のホーム画面より、**管理**をクリック
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-analytics4-measurement-protocol-2024-08-29-16-31-0.png){height="" width="500"}

2. 任意のプロパティを選択し、**データストリーム**をクリック   
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-analytics4-measurement-protocol-2024-08-29-16-31-1.png){height="" width="500"}

3. 任意のデータストリームをクリック
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-analytics4-measurement-protocol-2024-08-29-16-31-2.png){height="" width="500"}

   **測定ID**を確認できます。
4. **Measurement Protocol API secret**をクリック
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-analytics4-measurement-protocol-2024-08-29-16-31-3.png){height="" width="500"}

   **APIシークレット**の値を確認できます。
   ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-analytics4-measurement-protocol-2024-08-29-16-31-4.png){height="" width="500"}
