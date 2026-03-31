---
articleId: 3e8783b1-b2e8-4d75-837c-dd3640a9adff
slug: release-note-2024-01
title: リリースノート-2024年01月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2024年01月のリリース情報をお届けします**

---
## 転送設定

### 転送先Snowflakeがスキーマ追従に対応 🎉

転送先Snowflakeが[スキーマ追従](/docs/schema-sync)に対応しました。
**スキーマ追従**とは、「転送対象のデータ」と「転送先コネクタ側のテーブル」との間でスキーマの差分が発生した場合に、転送先コネクタ側テーブルのスキーマを自動修正して、スキーマの差分を解消する機能です。
今後は上記スキーマの差分が発生した場合に、Snowflake側で手動でスキーマを修正する必要はございません。

### 転送元Google Adsのリソースタイプに「Change event」を追加 🎉

転送設定STEP1の「リソースタイプ (レポート種別)」に`Change event (change_event)`を追加しました。
アカウント内で発生した変更内容のレポートを取得できるようになりました。
`change_event`について、詳しくは[Google Ads API](https://developers.google.com/google-ads/api/fields/v14/change_event)のドキュメントを参照ください。

![release-note-2024-01-2024-08-29-4-3-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-01-2024-08-29-4-3-0.png){height="" width="50%"}

### 転送元TROCCO Web行動ログのデータ取得期間を指定できるように 🎉

転送設定STEP1で、データ取得期間を指定できるようになりました。
**開始日**と**終了日**を指定して、任意の期間のTROCCO Web行動ログデータを取得できます。
詳しくは、[転送元 - TROCCO Web行動ログ](/docs/data-source-n-analytics-log)を参照ください。

![release-note-2024-01-2024-08-29-4-3-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-01-2024-08-29-4-3-1.png){height="" width="50%"}

### 転送元ValueCommerceで広告主向けレポートを取得できるように 🎉

これまでは、レポートの取得対象は**アフィリエイトサイト**のみとなっていました。
今回の変更で、**広告主**のレポートも取得できるようになりました。
詳しくは、[転送元 - ValueCommerce](/docs/data-source-valuecommerce)を参照ください。

![release-note-2024-01-2024-08-29-4-3-2](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-01-2024-08-29-4-3-2.png){height="" width="50%"}

### 転送元Criteoで指定できるディメンションの種類を拡充 🎉

転送設定STEP1の**ディメンション名**で`CampaignId`と`Campaign`を選択できるようになりました。
キャンペーンをディメンションとするデータを取得できます。
**ディメンション名**は、**レポートタイプ**に`statistics`を選択した際に表示される項目です。

![release-note-2024-01-2024-08-29-4-3-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-01-2024-08-29-4-3-3.png){height="" width="50%"}

## マネージドデータ転送

### テーブルの一括選択・解除、およびテーブル名のフィルタリングが可能に 🎉

これまではページネーション単位（最大100テーブル/回）の選択しかできませんでした。
今回の変更で、ページネーションにかかわらず、一括選択と一括解除ができるようになりました。
加えて、テーブル名でフィルタリングも可能になりました。

なお、本変更は以下の画面に適用されます。
- **新規作成STEP2**
- **未追加テーブル一覧**
- **テーブル増減の確認**
  
![release-note-2024-01-2024-08-29-4-3-4](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-01-2024-08-29-4-3-4.png){height="" width="50%"}

## データカタログ

### パーティション分割テーブルを取り込む際の仕様を変更 🎉

Google BigQueryデータカタログにおいて、[パーティション分割テーブル](https://cloud.google.com/bigquery/docs/partitioned-tables)をカタログデータとして取得する仕様が変更されました。
今後、パーティション分割テーブルについては、**最新の日付のテーブルのみ**カタログデータとして取得します。

:::(Info) (仕様変更の理由)

これまでは、[パーティション分割テーブル](https://cloud.google.com/bigquery/docs/partitioned-tables)における、セグメントすべてをカタログデータとして取得していました。
各セグメントがデータカタログ上で別々のテーブルとみなされていたため、テーブル検索時に実質的に同じテーブルが複数件ヒットしたり、基本メタデータやユーザー定義メタデータといった手動でのメタデータ入力の運用が困難となったりしていました。
今後は、**最新の日付のテーブルのみ**を取得するため、テーブルの検索性が高まり、また手動メタデータ入力の運用がしやすくなります。
:::

### マネージド転送設定作成時にタイムゾーン設定の値がデフォルトで適用されるように 🎉

マネージド転送設定作成時のSTEP1にて選択するタイムゾーンの値に、[タイムゾーン設定](/docs/time-zone)で指定した値がデフォルトで入力されるようになりました。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-01-2024-08-29-4-3-5.png){height="" width="50%"}

## 接続情報

### クライアントクレデンシャルズを利用したHTTP・HTTPS接続情報を作成可能に 🎉

HTTP・HTTPS接続情報で、グラントタイプを**認可コード**か**クライアントクレデンシャルズ**から選択できるようになりました。
これまでグラントタイプは固定で**認可コード**となっていましたが、今回のリリースで**クライアントクレデンシャルズ**も選択できるようになりました。
詳しくは、[HTTP・HTTPSの接続情報](/docs/connection-configuration-http-https)を参照ください。

## UI・UX

### 画面右上のポップアップメニューのデザインを刷新 🎉

自身のメールアドレス部分をクリックしたときに表示される、ポップアップメニューのデザインを刷新しました。
組織IDや自身の権限などが確認できるとともに、アカウントおよびユーザーに関する各種設定にワンクリックで遷移できるようになりました。

また、下記のページへのリンクは、今回の変更でポップアップメニューから画面左のサイドバーに移動しています。
- GitHubアクセストークン（**外部連携**配下）
- TROCCO API KEY（**外部連携**配下）
- 監査ログ出力

![release-note-2024-01-2024-08-29-4-3-6](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-01-2024-08-29-4-3-6.png){height="" width="50%"}

### 転送設定一覧で転送設定名を正規表現で絞り込めるように 🎉

転送設定一覧で転送設定名を正規表現で絞り込めるようになりました。
入力できる正規表現の記法について、詳しくは[正規表現による転送設定名の絞り込み](/docs/etl-configuration-list#正規表現による転送設定名の絞り込み)を参照ください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-01-2024-08-29-4-3-7.png){height="" width="50%"}

## コネクタAPIアップデート

### 転送元Google Ads・転送先Google Ads コンバージョン

転送時に使用するGoogle Ads APIのバージョンを、v13.1から**v14.1**へアップデートしました。
新バージョンについて、[Google Ads API](https://developers.google.com/google-ads/api/docs/release-notes#v14_1)のドキュメントを参照ください。

### 転送元Yahoo!検索広告・転送元Yahoo!ディスプレイ広告（運用型）

転送時に使用するYahoo!広告 APIのバージョンを、v10から**v11**へアップデートしました。
新バージョンについて、[Yahoo!広告 API | Developer Center](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/ysa-v11.html)のドキュメントを参照ください。

APIアップデートにより、旧指標は廃止されました。
今後はカラム名に「(旧)」を含むカラムが指定されている場合、自動的に新カラムが取得されます。

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
