---
articleId: 64032881-a52f-42ae-b9dd-2dff59df91d1
slug: data-source-repro
title: 転送元 - Repro
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Reproのイベントデータを転送する設定のDocsです。

Amazon Web ServicesのS3にアップロードされたものを転送します。

## 設定項目
転送元にReproをご利用いただくには、S3バケットのパスなど、必要な情報をRepro側にてあらかじめ取得する必要がございます。
詳細は以下ページをご確認ください。
[イベントデータエクスポート — Repro ドキュメント](https://docs.repro.io/ja/dashboard/export/event-data-export.html)
 
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Repro接続情報 | Yes | - | Reproの接続情報を選択して下さい。 |
| S3バケットのパス | Yes | - | Repro管理画面からデータエクスポートを開き、**S3バケットのパス**をコピーしてそのまま貼り付けてください。 |
| レポートタイプ | Yes | - | 以下のレポートを選択いただけます。<br>・Event |
| 転送方法 | Yes | 差分転送 | **日付転送**・**差分転送**のいずれかを選択します。<br>**差分転送**について、詳しくは[差分転送機能](/docs/incremental-data-transfer)を参照ください。 |
| 取り込み対象日付 | No | - | 日付転送時に指定できます。<br>取り込むデータの日付情報をパスプレフィックスとして指定できます。 |
