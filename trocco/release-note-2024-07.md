---
articleId: 3f07cf78-01ba-458e-809b-7b27bc193992
slug: release-note-2024-07
title: リリースノート-2024年07月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2024年07月のリリース情報をお届けします**

## お知らせ

### 転送ジョブのメモリサイズの増加

2024年07月16日週内のリリースにより、**データ転送に用いられるメモリサイズが増加されました。**

- 変更前のメモリサイズ：**2 GiB**
- 変更後のメモリサイズ：**6 GiB**

本変更は、上記リリース後に作成された転送設定に対して適用されます。
転送ジョブのスペックアップになるため、変更前のジョブと比べてパフォーマンスが向上する可能性があります。
ただし、以下のコネクタは、例外的に現時点でのメモリサイズが**15 GiB**であり、今回の変更の後も引き続き**15 GiB**が適用されます。

<details>
   <summary>例外的にメモリサイズが15 GiBとなるコネクタ一覧</summary>

- [転送元 - Amazon S3](/docs/data-source-s3)
- [転送元 - Box](/docs/data-source-box)
- [転送元 - Google Cloud Storage](/docs/data-source-google-cloud-storage)
- [転送元 - Google Play](/docs/data-source-google-play)
- [転送元 - KARTE Datahub](/docs/data-source-karte-datahub)
- [転送元 - Repro](/docs/data-source-repro)
- [転送元 - ローカルファイル](/docs/data-source-local-file)
</details>

### Direct転送機能・Aggregate転送機能の廃止

以下の転送機能を廃止しました。

- Direct転送（転送元Amazon S3 -> 転送先SFTPの組み合わせのときに選択可能だったもの）
- Aggregate転送（転送元Google BigQuery ->転送先Amazon S3の組み合わせのときに選択可能だったもの）

## 転送設定

### 転送元Databricksが追加

転送元Databricksを新たに追加しました。
詳しくは、[転送元 - Databricks](/docs/data-source-databricks)を参照ください。

![release-note-2024-07-2024-08-29-6-15-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-07-2024-08-29-6-15-0.png){height="" width="50%"}

### OutOfMemoryErrorが発生した場合にその旨実行ログに明示されるように

OutOfMemoryErrorが発生した場合、その旨実行ログに明示されるようになりました。
本メッセージが表示された場合、[OutOfMemoryErrorが発生した場合の対処方法](https://help.trocco.io/hc/ja/articles/4782342690846-OutOfMemoryError%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%99%E3%82%8B)を参照してください。

![release-note-2024-07-2024-08-29-6-15-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-07-2024-08-29-6-15-1.png){height="" width="50%"}

### 転送元HTTP･HTTPSに入力上の制約を追加

転送設定STEP2 > 入力オプションの各設定項目に入力できる値の上限値・下限値が設定されました。
詳しくは、[転送元 - HTTP・HTTPS](/docs/data-source-http)を参照ください。

## マネージドデータ転送

### 転送先Databricksが追加

マネージドデータ転送の転送先として、Databricksを選択できるようになりました。
転送元のデータソースを一括で取得してDatabricksへ転送する転送設定を、一元作成・管理できます。

## 接続情報

### Zendesk Support接続情報の認証方式にAPIトークンが追加

Zendeskによる[「APIのパスワードアクセス」の提供終了](https://support.zendesk.com/hc/articles/7386291855386)に伴い、APIトークンを利用した認証方式に対応しました。
将来的にパスワードアクセスによる認証は廃止される予定となっております。
したがって、今後は認証方式に**APIトークン**を利用されることを推奨いたします。

詳しくは、[Zendesk Supportの接続情報](/docs/connection-configuration-zendesk-support)を参照ください。

## UI・UX

### 転送設定一覧で接続情報の種類による絞り込みができるように

[前回のアップデート](/docs/release-note-2024-02#転送設定一覧で接続情報による絞り込みができるように-)で、コネクタ単位での絞り込みに対応しました。
上記に対し、今回のアップデートでは、個々の接続情報単位での絞り込みに対応しました。
これにより、任意の接続情報がどの転送設定に用いられているかを、かんたんに確認できるようになりました。

![release-note-2024-07-2024-08-29-6-15-2](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-07-2024-08-29-6-15-2.png){height="" width="50%"}

### ユーザー管理画面がリニューアル

ユーザー管理画面のデザインを変更しました。
これにより、各ユーザーの権限（TROCCO上で許可されている操作）を一目で確認できるようになりました。
また、COMETAと合わせてご利用の場合、ユーザーを絞り込むこともできます。

![release-note-2024-07-2024-08-29-6-15-3](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-07-2024-08-29-6-15-3.png){height="" width="50%"}

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**

