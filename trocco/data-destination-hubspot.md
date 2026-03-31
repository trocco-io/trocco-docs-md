---
articleId: eb9a2a55-bcd4-4939-9663-32590093723c
slug: data-destination-hubspot
title: 転送先 - HubSpot
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要

HubSpotへデータを転送する設定のDocsです。

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| HubSpot接続情報 | Yes | - | あらかじめ登録してある[HubSpotの接続情報](/docs/connection-configuration-hubspot)から、今回の転送設定に必要な権限を持つものを選択します。<br>**認証方式としてOAuth 2.0で作成された接続情報のみ、選択可能です。** |
| オブジェクトタイプ | Yes | - | 転送先として指定したいオブジェクト名を選択します。<br><details><summary>オブジェクトタイプ一覧</summary><ul><li>`contact`</li><li>`company`</li><li>`deal`</li><li>`product`</li><li>`ticket`</li><li>`line_item`</li><li>`quote`</li><li>`subscription`</li><li>`call`</li><li>`email`</li><li>`meeting`</li><li>`note`</li><li>`postal_mail`</li><li>`task`</li><li>カスタムオブジェクト</li></ul></details> |
| 転送モード | Yes | `UPSERT` | オブジェクトに対し、データ転送するときの方式を選択します。<ul><li>`UPSERT`：オブジェクトに対し、データを`UPSERT`します。</li><li>追記 (`INSERT`)：オブジェクトに対し、データを追記します。</li></ul> |
| UPSERT キー | Yes | `hs_object_id` | 転送モードで`UPSERT`を選択したときに入力します。<br>マージキー（主キー）扱いとする、値の重複のないプロパティーの名前を入力してください。<br><br>なお、デフォルト値の`hs_object_id`は、HubSpot側で設定されたユニークな値を持つプロパティーです。<br>`hs_object_id`以外のプロパティーを指定したい場合は、HubSpot側で事前準備が必要となります。<br>詳しくは、後述の[任意のプロパティーをUPSERTキーに設定する場合](/docs/data-destination-hubspot#任意のプロパティーをupsertキーに設定する場合)を参照ください。|
| オブジェクトへの関連付け | Yes | - | オブジェクトタイプで**エンゲージメント**オブジェクトを選択した場合に設定します。<br>詳しくは、[オブジェクトへの関連付け](/docs/data-destination-hubspot#オブジェクトへの関連付け)を参照ください。 |

:::(Warning) (`subscription`オブジェクト)

オブジェクトタイプに`subscription`を選択した場合、`UPSERT`で転送が行われます。
また、UPSERT キーは`email`および`subscription_id`が自動で指定されます。
詳しくは、後述の[subscriptionオブジェクトを更新する場合](/docs/data-destination-hubspot#subscriptionオブジェクトを更新する場合)を参照ください。
:::

:::(Info) (カスタムオブジェクト)

HubSpot上で作成したカスタムオブジェクトにデータを転送できます。
**カスタムオブジェクトを読み込む**をクリックすると、選択した接続情報に紐づくカスタムオブジェクトが選択できるようになります。
:::

### STEP1 詳細設定

**詳細設定**をクリックすると、設定項目が表示されます。

| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 転送の並列数 | Yes | 1 | HubSpot API呼び出しの並列実行数を入力します。<br>1以上10以下の整数を入力できます。 |

:::(Warning) (転送の並列数に関する制約)

- オブジェクトタイプが`subscription`以外の場合に適用されます。
- ワークフローで複数ジョブを並列実行する際は、HubSpot APIの[レート制限](https://developers.hubspot.jp/docs/guides/apps/api-usage/usage-details#%E3%83%AC%E3%83%BC%E3%83%88%E5%88%B6%E9%99%90)に注意してください。
  - HubSpot APIには一定時間内の呼び出し回数にレート制限が設けられています。並列実行数を増やすと、一定時間にAPIを呼び出す回数が増加するため、処理時間を短縮できるかわりにレート制限にも到達しやすくなります。
  - レート制限に到達した場合、一定の待ち時間を経てリトライを実行するため、処理時間が長くなる可能性があります。また、リトライ回数の上限に到達するとエラーとなります。
  - 使用する転送モードによってAPI呼び出し回数が異なります。`INSERT`モードは1回の呼び出しで完了しますが、`UPSERT`モードでは最大3回の呼び出しが必要となるため、レート制限に達しやすくなります。
:::

### オブジェクトへの関連付け

HubSpotでは、あるオブジェクトのレコードを他のオブジェクトのレコードに[関連付ける](https://knowledge.hubspot.com/ja/crm-setup/associate-records)ことができます。
TROCCOでは、**エンゲージメントオブジェクト**を転送する際に、既存のHubSpotオブジェクトに対する関連付けを合わせて行います。

#### エンゲージメントオブジェクトの一覧

エンゲージメントオブジェクトの一覧と、それぞれが関連付けられるオブジェクトの一覧は以下のとおりです。

|エンゲージメントオブジェクト|関連付けられるオブジェクト一覧|
|---|---|
|`call`|`contact`, `company`, `deal`, `ticket`|
|`email`|`contact`, `company`, `deal`, `ticket`|
|`meeting`|`contact`, `company`, `deal`, `ticket`|
|`note`|`contact`, `company`, `deal`, `ticket`|
|`postal_mail`|`contact`, `company`, `deal`, `ticket`|
|`task`|`contact`, `company`, `deal`, `ticket`, `quote`|

#### オブジェクトへの関連付けの設定項目

オブジェクトタイプにてエンゲージメントオブジェクトを選択すると、**オブジェクトへの関連付け**が表示されます。

![001.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-hubspot-2024-08-29-18-40-0.png){height="" width="50%"}

- **対象オブジェクト**
  - 関連付けを行う対象のオブジェクトを選択します。
- **HubSpot側のユニークキー**
  - 関連付けを行う対象のオブジェクトから、ユニークな値を持つカラムを入力します。
- **転送データ側のカラム名**
  - 転送対象のデータに含まれる「関連付け対象のレコードを特定するためのカラム」の名前を入力します。
  - カラム内の値がHubSpot側のユニークキーの値と一致するときに、該当レコードにエンゲージメントが関連付けられます。

#### オブジェクトへの関連付けの設定例

以下のデータを転送するとします。

```
hs_timestamp,hs_call_body,company_id
2023-08-01T00:00:00.000Z,hoge,hoge@example.com,XXXXXXXXXX1
2023-08-02T00:00:00.000Z,fuga,fuga@example.com,XXXXXXXXXX1
2023-08-03T00:00:00.000Z,piyo,piyo@example.com,XXXXXXXXXX2
```

オブジェクトタイプに`call`を選択し、オブジェクトへの関連付けにて以下のように設定します。

- **対象オブジェクト**：`company`
- **HubSpot側のユニークキー**：`hs_object_id`
- **転送データ側のカラム名**：`company_id`

この転送設定を実行すると、転送データはそれぞれ以下のレコードに関連付けられます。

- 転送データの1～2行目：`company`オブジェクトの`hs_object_id`カラムの値が`XXXXXXXXXX1`であるレコード
- 転送データの3行目：`company`オブジェクトの`hs_object_id`カラムの値が`XXXXXXXXXX2`であるレコード

## 補足事項

### 任意のプロパティーをUPSERTキーに設定する場合

UPSERTキーに`hs_object_id`または`contact`オブジェクトの`email`以外のプロパティーを設定したい場合は、あらかじめHubSpot側で設定する必要があります。
以下で、設定手順を説明します。

1. [HubSpot](https://app.hubspot.com/login)にログインし、ご利用中のHubSpotアカウントをクリック
2. 画面右上、赤枠内の設定アイコンをクリック
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-hubspot-2024-08-29-18-40-1.png){height="" width="500"}
3. **プロパティー**をクリック
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-hubspot-2024-08-29-18-40-2.png){height="" width="500"}
4. **オブジェクト**を選択し、UPSERTキーとして使用したいプロパティーをクリック
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-hubspot-2024-08-29-18-40-3.png){height="" width="500"}
5. **ルール**タブをクリック
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-hubspot-2024-08-29-18-40-4.png){height="" width="500"}
6. **このプロパティーでは、重複にならない値を必須にする**を有効化し、保存をクリック
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-hubspot-2024-08-29-18-40-5.png){height="" width="500"}

### subscriptionオブジェクトを更新する場合

`subscription`オブジェクトを更新するためには、TROCCO上でカラム名や型をマッピングする必要があります。
以下の表を参照し、TROCCOの転送設定STEP2「カラム定義」タブにて、マッピングを行ってください。

| カラム名 | データ型 | 必須 | 入力例 | 説明 |
| --- | --- | --- | --- | --- |
| `email` | `string` | ✓ | `hoge@example.com` |メールアドレス | 
| `subscription_id` | `long` | ✓ | `12232` | [サブスクリプションID](/docs/data-destination-hubspot#サブスクリプションidの確認方法) | 
| `is_subscribed` | `boolean` | ✓ | `true` | 配信登録ステータス<ul><li>`true`: 配信登録する</li><li>`false`: 配信解除する</li></ul> | 

:::(Warning) (`is_subscribed`に関する制約)

- `is_subscribed`（配信登録ステータス）が`false`である（解除されている）データは更新できません。
  配信登録ステータスが登録されている状態に更新したい場合は、HubSpot側の画面上から更新してください。

- HubSpot側のデータに対し、配信登録ステータスを変更しない形でのデータの更新には対応していません。
  したがって、HubSpot側で`is_subscribed`（配信登録ステータス）が`true`である（登録されている）状態のデータに対し、`is_subscribed`が`true`のデータで更新できません。
:::

#### サブスクリプションIDの確認方法

1. HubSpotの画面上で**設定**＞**データ管理**＞**プロパティー**を選択します。
2. プロパティー画面右上の**全てのプロパティーをエクスポート**を選択し、モーダルの「エクスポート」をクリックして、エクセル/CSVファイルをダウンロードします。
3. エクセル/CSVファイルの**CONTACT**シートの中に `hs_email_optout_`で始まる項目を探します。
  例：`hs_email_optout_111` の場合、サブスクリプションIDは`111`です。
