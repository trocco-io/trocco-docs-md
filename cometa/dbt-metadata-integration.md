---
articleId: 18029c02-68ce-41ff-bf03-c390336599e1
slug: dbt-metadata-integration
title: dbtメタデータ連携
parentCategoryId: f562d32d-a51d-4160-8d59-114201e44de4
languageCode: ja
---
:::(Info) (dbtメタデータ連携が可能なサービス)

[データベース系データストア](/cometa/docs/about-data-catalog-v2#データベース系データストア)にのみ、利用できます。
:::

COMETAでは、[dbt artifacts](https://docs.getdbt.com/reference/artifacts/dbt-artifacts)を利用してメタデータを取得し、COMETA上のテーブル・カラムにdbtに関するメタデータを付与できます。
dbtメタデータ連携により、dbtモデル間の依存関係をリネージとして可視化できます。
詳しくは、[リネージ機能](/cometa/docs/lineage)を参照してください。

以下では、dbtに関するメタデータを取得するための各種手順を説明します。

## 事前準備（Amazon S3側の設定）

### dbt artifactsの格納

S3バケットを用意し、`manifest.json`と`catalog.json`を格納してください。
いずれも以下のdbtコマンドで生成できます。
```console
dbt docs generate
```
なお、格納したS3バケットのパスはメモしてください。

### IAMロールの作成

COMETAは、S3バケットに接続する際のAWS認証方式として、IAMロールを利用します。
なお、データ転送時に一時的な認証情報を取得するため、お客様が管理するAWSのIAMロールにて、
COMETAのAWSアカウントを**信頼されたエンティティタイプ**として登録いただく必要があります。
以下の手順に従い、IAMロールを作成してください。

1. AWSのIAM Management Console画面より、**ロール**>**ロールを作成**をクリックします。
2. **信頼されたエンティティを選択**にて、以下の通り設定します。
   - 信頼されたエンティティタイプ：
     - **AWSアカウント**を選択します。
   - AWSアカウント：
     - **別のAWSアカウント**を選択し、アカウント IDにはdbtメタデータ連携設定画面に表示されている**COMETAのAWSアカウントID**を入力します。
     - **外部 ID を要求する**を有効にし、外部IDには任意の文字列を入力します。入力した文字列はメモしてください。
  ![dbt-metadata-integration-2024-10-28-0-47-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/dbt-metadata-integration-2024-10-28-0-47-0.png)
3. **許可を追加**にて、任意に設定します。
4. **名前、確認、および作成**にて、任意に設定します。
5. 作成したIAMロールの詳細画面にて、ARNをコピーします。

### 権限の付与

作成したIAMロールに対して権限を付与してください。
付与が必要な権限は、以下のとおりです。

- `s3:GetObject`

## dbtメタデータ連携の設定

### Amazon S3の設定

| 項目名 | 必須 | 内容 |
|---|---|---|
|ロールARN|✓|作成したIAMロールのARNを入力します。<br>ARNはAWSコンソール上の該当のIAMロールの詳細ページよりコピーできます。|
|COMETAのAWSアカウントID|-|IAMロールを作成する際に必要となります。<br>詳しくは、[IAMロールの作成](/cometa/docs/dbt-metadata-integration#iamロールの作成)を参照ください。|
|外部ID|✓|[IAMロールの作成](/cometa/docs/dbt-metadata-integration#iamロールの作成)時に入力した外部IDを入力します。|
|バケット|✓|dbt artifactsが格納されているS3バケットを入力します。|
|パスプレフィックス|-|dbt artifactsが格納されているS3バケットのパスを入力します。<br>なお、末尾には`/`を入力しないでください。|

### Gitリポジトリの設定

| 項目名 | 必須 | 内容 |
|---|---|---|
|リポジトリURL|-|dbtプロジェクトを管理しているGitリポジトリのURLを入力できます。<br>本設定に入力すると、アセット情報画面上にてURLリンクが表示されるようになります。<br>なお、この設定には必ずしも入力する必要はありません。|

## dbtメタデータ連携ジョブの実行

[dbtメタデータ連携の設定](/cometa/docs/dbt-metadata-integration#dbtメタデータ連携の設定)が完了すると、該当の[データストア詳細画面](/cometa/docs/datastore-integrations-v2#データストア詳細画面)のdbtメタデータ連携配下に設定が追加されます。
このとき、自動的にメタデータ連携ジョブが初回実行され、メタデータが取得されます。

なお、初回実行以降は、メタデータ連携ジョブは**日次**で実行されます。
日次実行では、[アセット自動取り込み](/cometa/docs/automatic-assets-update-v2)処理が先に実行され、その後にメタデータ連携ジョブが実行されます。

なお、メタデータ連携ジョブは、手動でも実行できます。
dbtメタデータ連携の設定画面にて、三点リーダー>**dbtメタデータ連携ジョブを実行**をクリックすると、手動実行できます。

![dbt-metadata-integration-2024-10-28-0-47-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/dbt-metadata-integration-2024-10-28-0-47-1.png)

:::(Info) (対応しているResource type)

対応しているdbtの[Resource type](https://docs.getdbt.com/reference/global-configs/resource-type)は以下の通りです。
* source
* model
* seed
* snapshot

上記以外のResource typeには対応していないため、COMETAにデータは連携されません。
:::