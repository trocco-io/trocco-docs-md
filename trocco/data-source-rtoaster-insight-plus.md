---
articleId: 97a753ae-33ef-41ce-a0d8-964adf42034c
slug: data-source-rtoaster-insight-plus
title: 転送元 - Rtoaster insight+ Googleアカウント連携
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Rtoaster insight+からデータを転送する設定のDocsです。

## 前提条件
Rtoaster insight+は、Google Cloud Platform（以降GCPと略します）の東京リージョン（asia-northeast1）上で構築されているBigQueryでデータを管理しています。
 
Rtoaster insight+用BigQueryでは下記のGCPプロジェクトのみ使用します。

| プロジェクト名 | 役割 |
| --- | --- |
| rtoaster-insight | Googleアカウント連携時に連携されます。 |
| rtoaster-data | Rtoaster insight+画面上のRtoasterテーブルに対応するデータが入っています。 |
| bp-pica-prd | Rtoaster insight+画面上のユーザー定義テーブルに対応するデータが入っています。 |

## 設定項目

### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| :--- | --- | --- | --- |
| Rtoaster insight＋ Googleアカウント連携 接続情報 | Yes | | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br>接続情報の設定方法は[こちら](/docs/connection-configuration-rtoaster-insight-plus-with-google-account-authentification)をご参照ください。 |
| データエクスポート先Google Cloud Storage URI | Yes |  | 転送元Rtoaster insight+ Googleアカウント連携では、お客様側で作成したGCSバケットに一時的にデータをエクスポートする必要があります。<br>そのため、連携したGoogleアカウントのお客様のGCSバケットパスをご指定ください。 |
| SQL | Yes |  | レガシーSQLは利用できません。<br>使用できるテーブルなどは後述する**GCPプロジェクト名・データセット名・テーブル名の確認方法**を確認してください
| 一時データのファイル形式 | Yes | CSV | GCSに一時的に保管するデータのファイル形式をご指定ください。 |
| 一時データの削除ポリシー | Yes | 削除する |GCSに保管する一時データを削除するかどうかをご指定ください。<br>一時データはデータ転送のたびに作成されるため、**削除する**をご指定されることをおすすめいたします。 |

## GCPプロジェクト名・データセット名・テーブル名の確認方法

1. GCPプロジェクトは[こちら](https://console.cloud.google.com/bigquery?project=rtoaster-insight)からBigQueryコンソールに遷移して確認してください。
![GCPプロジェクトの選択.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-rtoaster-insight-plus-2024-08-29-1-0-0.png){height="" width=""}

![プロジェクト選択.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-rtoaster-insight-plus-2024-08-29-1-0-1.png){height="" width=""}


Rtoaster insight+のデータが入っているGCPプロジェクトは`rtoaster-dataプロジェクト`または`bp-pica-prdプロジェクト`なので、どちらかをご指定ください。

※Rtoaster insight+内のデータの実行権限は`rtoaster-insightプロジェクト`に付与されているため、SQLを実行したい場合は`rtoaster-insightプロジェクト`を指定した状態で実行してください。

2. データセット名とテーブル名は下記のように確認してください。

![データセットとテーブルの確認方法.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-rtoaster-insight-plus-2024-08-29-1-0-2.png){height="" width=""}

**GCPプロジェクト名** → **データセット名** → **テーブル名**のような階層になっております。

## 補足
### 注意事項
* 実行ジョブのコストはRtoaster insight+の費用に含まれます。