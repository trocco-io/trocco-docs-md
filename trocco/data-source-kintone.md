---
articleId: 0e24cab5-e50d-44ed-820c-cdd8f44a6120
slug: data-source-kintone
title: 転送元 - kintone
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
サイボウズのkintoneからデータを転送する設定のDocsです。

## 制約
 * cursor  APIを使用しているため、クエリにlimit、offset句を指定しますとデータ取得する際にエラーになります。クエリにマッチするものはすべて取得されます。
* cursor APIの制約がありますので、[公式ページ](https://developer.cybozu.io/hc/ja/articles/360029152012-レコードの一括取得#step4)をご確認ください。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| kintone接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br>接続情報の設定方法は[こちら](/docs/connection-configuration-kintone)をご参照ください。 |
| アプリID | Yes | - | データを取りたいkintoneのアプリのIDを入力してください。<br>アプリIDは管理者ならば画面上部の歯車 → **アプリ管理**で各アプリのIDを確認することができます。<br>APIで取得する場合は[公式サイト](https://developer.cybozu.io/hc/ja/articles/202166300-アプリID取得)をご参照ください。 |
| フィールド | Yes | - | kintoneのアプリのレコード一覧において、取得したいデータのフィールドコード、型を確認します。<br>フィールドコードについては[こちら](https://jp.cybozu.help/k/ja/user/app_settings/form/autocalc/fieldcode.html)をご覧ください。<br>また、<br>kintoneのDATETIME型のフォーマット値は<br><br>%Y-%m-%dT%H:%M:%S%z<br><br>となっております。<br><br>kintoneのDATE型を用いている場合は<br><br>%Y-%m-%d<br><br>として下さい。 <br />フォーマットが未指定の場合、 `%Y-%m-%dT%H:%M:%S%z` として判定されます。<br />フィールド全てを未指定の場合、取得可能なフィールドをすべて取得します。|
| ゲストスペースID | No | - | ゲストスペースを利用している方の場合はこちらにゲストスペースIDを入力してください。 |
| クエリ | No | - | 転送するデータに関して、条件をつけるためのクエリを入力します。<br>[カスタム変数](/docs/custom-variables)を利用し、TROCCOのデータ転送時に動的に設定値を決定することも可能です。<br>指定されない場合は、アプリの指定したフィールドがすべて転送されます。<br>詳しくは、kintone API ドキュメントの[クエリの書き方](https://cybozu.dev/ja/kintone/docs/overview/query/)参照ください。<br>なお、`limit`、`offset`句はご使用いただけません。 |

#### STEP1 詳細設定

**詳細設定**をクリックすると、設定項目が表示されます。

| 項目名 | デフォルト値 | 内容 |
| --- | --- | --- |
| テーブル行単位で転送する | 有効 | 有効にすると、テーブル（旧：サブテーブル）は、レコード単位ではなくテーブル（旧：サブテーブル）行単位で転送されます。<br>この際、テーブル（旧：サブテーブル）内のJSONの各キーがカラムに展開されます。 |

### STEP2 カラム定義

フィールドを全て未指定で自動でフィールドを取得した場合、kintoneの`DATE`型および`TIME`型は、転送設定STEP2のカラム定義にて`string`型に推論されます。
`timestamp`型で読み込みたい場合は、**データ型**で`timestamp`を選択し、**日時フォーマット**でそれぞれ以下を入力してください。
- `DATE`型の場合：`%Y-%m-%d`
- `TIME`型の場合：`%H:%M`
