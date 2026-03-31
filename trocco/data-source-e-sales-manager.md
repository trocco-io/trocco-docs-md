---
articleId: 34825709-9e78-4fde-b4bf-4a903edd24a0
slug: data-source-e-sales-manager
title: 転送元 - eセールスマネージャー
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
eセールスマネージャーからデータを転送する設定のDocsです。

## 設定項目

### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| eセールスマネージャー接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| 検索用クエリ | Yes | - | [公式ドキュメント](https://www.e-sales-support.jp/euf/assets/esales_res/html/restapi/reference.html)の仕様に従って検索用のクエリ（SearchCondition）を設定します。 |

## SearchCondition(検索クエリ)記入例: 名刺エンティティの検索と抽出
- 抽出・検索対象は名刺（person）
- 登録日は 2022-03-17以前
- 抽出する項目は
   - 902: 顧客コード
   - 928: 名刺コード
   - 903: パーソン氏名
   - 932: 登録日
   - 934: 変更日

上記の検索条件における検索クエリ例となります。

```json
{
  "searchCondition": {
    "targetObjectName": "person",
    "items": [
      {
        "columnCode" : 932,
        "operator" : "<",
        "date" : "2022-03-17"
      }
    ],
    "notExists":true,
    "relatedObjectConditions":[]
  },
  "columnCodes":[
    902,928,903,932,934
  ]
}
```
- `searchCondition`
    - `targetObjectName` （文字列）
        - 検索対象のエンティティ名です。
    - `items` （SearchConditionItemの配列）
        - 検索条件式を表すのリストです。複数の条件を記載するとAND条件となります。
記載方法は下記 SearchConditionItem を確認ください。
    - `notExists` （真偽値）
        - true : relatedObjectConditionsでマッチする関連エンティティが存在する場合に「条件に合致」と見なします。
        - false : relatedObjectConditionsでマッチする関連エンティティが存在しない場合に「条件に合致」と見なします。
    - `relatedObjectConditions` （SearchCondition）
        - 関連エンティティの検索条件を表すリストです。複数指定した場合はAND条件で結合されます。記入方法はSearchConditionと同様になります。
- `columnCodes`: （配列）
    - エンティティの抽出する対象の項目コードを記載してください。
    - 名刺（person）の項目コードは [REST API リファレンス](https://www.e-sales-support.jp/euf/assets/esales_res/html/restapi/entities/person.html) より確認できます。

## SearchConditionItem(検索条件式)の記入例


```json
{
  "columnCode" : 105 ,
  "operator" : "forward " ,
  "text" : "営業"
},
{
  "columnCode" : 104 ,
  "operator" : ">=" ,
  "date" : "2020-04-01"
},
{
  "columnCode" : 102 ,
  "operator" : "=" ,
  "num" : 10001
},
{
  "columnCode" : 144 ,
  "operator" : "=" ,
  "checkBox" : [true, false, false]
},
{
  "columnCode" : 10001 ,
  "operator" : "=" ,
  "decimal" : 1.23
},
{
  "columnCode" : 10002 ,
  "operator" : "=" ,
  "null" : true
},
{
  "columnCode" : 10003 ,
  "operator" : "=" ,
  "notNull" : true
}
```

- `columnCode`（数値）
    - 検索対象の項目です。
- `operator`（文字列）
    - 検索条件の演算子です。
- `text`（文字列）
    - テキスト型/テキストエリア型の項目の場合には、この属性に値を指定します。
- `date`（日付または日時）
    - 日付/日時型の項目の場合には、この属性に値を指定します。
    **※現時点でのeSM REST APIでは指定した日付/日時はUTC時間で解釈されます。**
    **eSMの管理画面で指定しているタイムゾーンではないため注意ください。**
- `num`（数値）
    - 整数型/セレクト型の項目の場合には、この属性に値を指定します。
- `checkBox`（真偽値）
    - 配列	チェックボックス型の項目の場合には、この属性に値を指定します。
- `decimal`（数値）
    - 小数型の項目の場合には、この属性に値を指定します。
- `null`（真偽値）
    - **true**を指定することで、指定したエンティティに対してNULL検索を行うことが出来ます。※NULL検索を行う場合、operatorの条件式に「=」を指定してください。
- `notNull` (真偽値)
    - **true**を指定することで、指定したエンティティに対してNOT NULL検索を行うことが出来ます。
※NOT NULL検索を行う場合、operatorの条件式に「=」を指定してください。