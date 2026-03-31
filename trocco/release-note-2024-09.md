---
articleId: 14e9b2da-8479-4cb1-9cac-efddea386bdc
slug: release-note-2024-09
title: リリースノート-2024年09月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2024年09月のリリース情報をお届けします**

## お知らせ

### 契約プラン上利用できない転送設定のジョブ実行の制限

TROCCOでは、ご契約のプランによって、利用できるコネクタが異なります。
今後、ご契約のプランが利用できないコネクタを組み合わせた転送設定は作成できなくなりました。
また、すでに転送設定を作成していた場合、その転送設定のジョブは実行できなくなりました。
今回追加された制限について、詳しくは[コネクタ種別](/docs/pricing-information#%E3%82%B3%E3%83%8D%E3%82%AF%E3%82%BF%E7%A8%AE%E5%88%A5)を参照ください。

## ワークフロー定義

### フロー編集時にタスクの自動レイアウトが可能に

フロー編集時に**自動レイアウト**をクリックすると、ワークフロータスクが自動的に整列されるようになりました。

![release-notes-2024-09-30-13-55-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-09-30-13-55-0.gif){height="" width="50%"}

## TROCCO API

### TROCCO APIでデータマートジョブを実行できるように

TROCCO APIで任意のデータマート定義を指定し、ジョブを実行できるようになりました。
詳しくは、[データマートシンクジョブ実行](/trocco-api/apidocs/post-datamart-job)を参照ください。

## 転送設定

### 入力ファイル形式のParquet対応

下記の転送元コネクタにおいて、Parquetの転送に対応しました。

- [転送元 - Amazon S3](/docs/data-source-s3)
- [転送元 - Azure Blob Storage](/docs/data-source-azure-blob-storage)
- [転送元 - Google Cloud Storage](/docs/data-source-google-cloud-storage)

詳しくは、[入力ファイル形式の設定について](/docs/configuration-of-input-files)を参照ください。

## 接続情報

### HTTP・HTTPS接続情報でカスタムパラメータの設定が可能に

HTTP・HTTPS接続情報の作成時に、カスタムパラメータを追加できるようになりました。
これにより、接続先APIの仕様に応じた特定のパラメータをリクエストに含めることができるようになります。
詳しくは、[HTTP・HTTPSの接続情報](/docs/connection-configuration-http-https)を参照ください。

### Google BigQueryおよびGoogle Cloud Storage接続情報のサービスアカウント認証にてプロジェクトIDを指定できるように

Google BigQueryおよびGoogle Cloud Storage接続情報のサービスアカウント認証に関して、これまではサービスアカウントを作成したプロジェクトが指定される仕様でした。
今回の変更で、サービスアカウントが権限を持つプロジェクトの一覧からプロジェクトIDを選択できるようになりました。

## UI・UX

### markdownエディタにてtabキーでインデントを追加できるように

転送設定やデータマート定義などのメモ欄は、markdown記法に対応しています。
このようなmarkdown記法に対応した箇所について、tabキーでインデントを追加、shift+tabキーでインデントを削除できるようになりました。

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
