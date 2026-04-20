---
articleId: 786701c4-e760-4ab6-ae25-bb47945395cd
slug: release-note-2024-04
title: リリースノート-2024年04月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2024年04月のリリース情報をお届けします**

---
## お知らせ

2024年4月1日より、料金プランが改定されました。
詳しくは、[料金プラン](https://primenumber.com/trocco/pricing)を参照ください。

## データマート定義

### データマートAzure Synapse Analyticsが追加 🎉

データマートAzure Synapse Analyticsを新たに追加しました。
詳しくは、データマート - Azure Synapse Analyticsを参照ください。

![release-note-2024-04-2024-08-29-21-47-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-04-2024-08-29-21-47-0.png){height="" width="50%"}

## マネージドデータ転送

### 転送先にAmazon Redshiftが追加 🎉

マネージドデータ転送の転送先として、Amazon Redshiftを選択できるようになりました。
転送元のデータソースを一括で取得してAmazon Redshiftへ転送する転送設定を、一元作成・管理できます。

![release-note-2024-04-2024-08-29-21-47-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-04-2024-08-29-21-47-1.png){height="" width="50%"}

## 転送設定

### 転送先kintoneでテーブルへ転送できるように 🎉

kintoneアプリ内のテーブル（旧：サブテーブル）にデータを転送できるようになりました。
転送方法について、詳しくは転送先kintoneの[アプリ内のテーブル（旧：サブテーブル）を更新したい場合](/docs/data-destination-kintone#アプリ内のテーブル旧サブテーブルを更新したい場合)を参照ください。

![release-note-2024-04-2024-08-29-21-47-2](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-04-2024-08-29-21-47-2.png){height="" width="50%"}

### 転送元Google Spreadsheetsのカラム抽出が可能に 🎉

これまでは、転送設定STEP1にて、取得したいカラムの名前およびデータ型を手動入力する必要がありました。
これに対し、転送対象のスプレッドシートから**カラム情報を抽出**する機能が追加されました。

各種設定項目を入力したうえで**カラム情報を抽出**をクリックすると、**カラム名およびデータ型が自動で設定**されます。
なお、上記機能追加に伴い、**取り込み開始列番号**を指定する入力項目も追加されています。
詳しくは、[転送元 - Google Spreadsheets](/docs/data-source-google-spreadsheets)を参照ください。

![release-note-2024-04-2024-08-29-21-47-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-04-2024-08-29-21-47-3.png){height="" width="50%"}

### 転送元Google BigQueryで一時データエクスポート指定に「バケットのみ指定」を選択できるように 🎉

転送元Google BigQueryからデータを転送する場合、データは一時的にGoogle Cloud Storageに出力されます。
この際の一時データの出力先として、**バケットのみを指定**できるようになりました。

なお、これまでの**Google Storage URL**を入力する形式では、カスタム変数を利用しない限り、同一のパスに一時データが出力されます。
そのため、Google Cloud Storage上のデータが上書きされる可能性がありました。
一方、**バケットのみを指定**した場合、内部的にユニークなパスが生成され、そのパスに一時データが出力されます。
そのため、前述のような、Google Cloud Storage上のデータが上書かれて削除される、といったことを避けることができます。

### Yahoo!広告 APIアップデートに伴う変更

[Yahoo!広告 APIv11の提供終了](https://ads-developers.yahoo.co.jp/ja/ads-api/announcement/24011801.html)に伴い、Yahoo!広告 APIのバージョンをv11から**v12**へアップデートするため、以下の転送元コネクタの設定に**ベースアカウントID**の入力項目を追加しました。

-  転送元Yahoo!検索広告
-  転送元Yahoo!ディスプレイ広告（運用型）

詳しくは、[v12バージョンアップ情報](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/whats-new-on-v12.html)の「MCC複数階層化」を参照ください。

なお、v12への移行は2024年5月中旬ころを予定しています。
v12への移行が完了し次第、**ベースアカウントID**が未入力である転送設定のジョブはエラーとなります。
お手数ですが、v12移行前に既存の転送設定を編集することをお願いいたします。

## UI・UX

### TROCCOアカウントに組織名を設定できるように 🎉

お使いのTROCCOアカウントに**組織名**を設定できるようになりました。
組織名を設定することで、たとえば複数のTROCCOアカウントを管理している場合に、どのTROCCOアカウントにログインしているかを識別しやすくなります。
詳しくは、[組織名について](/docs/organization-name)を参照ください。

![release-note-2024-04-2024-08-29-21-47-4](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-04-2024-08-29-21-47-4.png){height="" width="50%"}

## セキュリティ

### TROCCO APIの実行時にIPアドレスによる制限がなされるように 🎉

[TROCCO API](/docs/trocco-api)の実行が、IPアドレス制限の対象となりました。
これにより、TROCCO APIをよりセキュアに利用いただけるようになりました。

:::(Warning) (本仕様変更に伴うお願い)

すでにTROCCO APIを利用しており、かつ**アカウントセキュリティ > アクセス許可するIPアドレス**を1つでも設定している場合、**TROCCO APIの実行に用いるIPアドレスをアクセス許可IPに追加**する必要があります。
:::

## コネクタAPIアップデート

### 転送元Google Ad Manager

転送時に使用するGoogle Ad Manager APIのバージョンを、 v202305から**v202311**へアップデートしました。
新バージョンについては、[Google Ad Manager API](https://developers.google.com/ad-manager/api/rel_notes#v202311)を参照ください。

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**

