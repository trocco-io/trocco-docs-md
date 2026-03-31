---
articleId: 55123999-df5e-4b5c-9453-acc8cfc0168b
slug: connection-configuration-google-cloud-workload-identity-federation
title: Google CloudのWorkload Identity Federationを設定する
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---

## 概要

Workload Identity Federation (WIF) は、AWSなどの外部のIDプロバイダーから一時的な認証情報を取得し、Google Cloudのリソースにアクセスするための認証方式です。
Google CloudでWIFを設定することで、TROCCOにサービスアカウントのJSON Keyを保存することなく、Google Cloudのリソースにアクセスできるようになります。

接続情報の作成については、[接続情報 - Google BigQuery](/docs/connection-configuration-bigquery)を参照ください。

本ページでは、AWS環境からGoogle BigQueryにアクセスするためのWIFの設定手順を説明します。
なお、Workload Identity Federation機能自体は、他のIDプロバイダーでも利用可能です。

## 事前準備: 外部ID（External ID）の発行

TROCCOは、WIF認証を使用するBigQuery接続情報ごとに固有の**外部ID**を自動生成します。
この外部IDは、AWS STSのセッション名に含まれ、Google Cloud側でアクセス制御に使用します。

外部IDを使用することで、特定の接続情報からのアクセスのみを許可するなど、細かいアクセス制御が可能になります。

外部IDは接続情報の設定画面で取得できます。のちのステップの入力値の一部に利用します。

## ステップ1: Workload Identityプールの作成

Workload Identity Poolとは、外部のIDプロバイダーからのアクセスを管理するためのリソースです。
AWSプロバイダーを通じて、事前に作成したAWSの認証情報をGoogle Cloudで認識します。

1. [Google Cloud Console](https://console.cloud.google.com/) にログインします。
2. プロジェクトを選択し、ナビゲーションメニューから **IAMと管理** > **Workload Identity 連携**に移動します。
3. **プールを作成**をクリックします。
4. プールの名前と説明を入力し、**続行**をクリックします。
5. **プールにプロバイダを追加する**で、以下の情報を入力します。
   - **プロバイダの選択**: **AWS**を選択します。
   - **プロバイダ名**: 任意の名称を入力します。
   - **AWSアカウントID**: `545668264778`
6. **保存**をクリックし、プールを作成します。

## ステップ2: Workload Identityプールへの権限付与

Google Cloud側での設定方法は、以下の2つのパターンがあります。

- **パターン1**: サービスアカウント権限の借用
- **パターン2**: データセット・テーブルにプリンシパルを追加

### パターン1: サービスアカウント権限の借用

このパターンでは、AWSからGoogle Cloudのサービスアカウント権限を借用し、そのサービスアカウントの権限でBigQueryにアクセスします。

#### サービスアカウントの作成

WIF認証に利用するサービスアカウントを作成します。既存のサービスアカウントを利用する場合は、作成は不要です。
作成手順は[Google CloudのJSON Keyを取得する](/docs/connection-configuration-google-cloud-json-key#サービスアカウントを新規作成する場合)を参照ください。

また、サービスアカウントに付与するロールについては[接続情報 - Google BigQuery](/docs/connection-configuration-bigquery#付与が必要なロール)を参照ください。

#### Workload Identityプールの権限設定

1. Google Cloud Consoleで**Workload Identity 連携**を開きます。
2. 作成したWorkload Identityプールをクリックし、**アクセスを許可**をクリックします。
3. **サービス アカウントの権限借用を使用してアクセス権を付与する**を選択します。
4. 権限を借用するサービスアカウントを選択します。
5. **プリンシパル**に以下の値を設定します。
   - 属性名: `subject`
   - 属性値: `arn:aws:sts::545668264778:assumed-role/trocco-google-cloud-workload-identity/trc-{外部ID}`
6. **保存** をクリックします。
7. プロバイダを選択し**構成をダウンロード**をクリックすると、構成ファイルがダウンロードされます。

### パターン2: データセット・テーブルにプリンシパルを追加

このパターンでは、AWSから直接Google Cloudの権限でBigQueryにアクセスします。

#### IAM権限設定

1. TROCCOからアクセスしたいBigQueryのデータセット・テーブルを開きます。
2. **共有** > **権限を管理** をクリックします。
3. **プリンシパルを追加**をクリックし、以下の情報を入力します。
   - 新しいプリンシパル: `principal://iam.googleapis.com/projects/{プロジェクトナンバー}/locations/global/workloadIdentityPools/{プールID}/subject/arn:aws:sts::545668264778:assumed-role/trocco-google-cloud-workload-identity/trc-{外部ID}`
4. 必要なロールを選択します。[接続情報 - Google BigQuery](/docs/connection-configuration-bigquery#付与が必要なロール)を参照ください。
5. **保存** をクリックします。

#### 構成ファイルのダウンロード

1. Google Cloud Consoleで **Workload Identity 連携**に移動します。
2. 設定したWorkload Identityプールをクリックし、**アクセスを許可**をクリックします。
3. **フェデレーション ID を使用してアクセス権を付与する**を選択し、**設定をダウンロード**をクリックします。
4. プロバイダを選択し**構成をダウンロード**をクリックします。

## ステップ3: TROCCO側の設定

BigQueryの接続情報作成時に**Workload Identity Federationで作成**を選択し、ダウンロードした構成ファイルの内容を入力します。
詳しくは、[接続情報 - Google BigQuery](/docs/connection-configuration-bigquery)を参照ください。
