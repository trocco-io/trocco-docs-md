---
articleId: 85196395-76d8-4fff-b176-7ba479266bfc
slug: connection-configuration-sap-odata
title: 接続情報 - SAP S/4HANA OData 
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、SAP S/4HANAに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - SAP S/4HANA OData](/docs/data-source-sap-odata)を参照ください。

## 概要

SAP S/4HANA ODataコネクタは、SAP NetWeaver Gatewayが提供するODataサービス経由でSAPデータを取得・連携します。OData V2およびOData V4の両プロトコルに対応しており、転送設定でバージョンを選択できます。
OData（Open Data Protocol）は、HTTP上でJSON/XMLをやり取りできるRESTベースの標準APIです。
エンティティ構造はABAP（Advanced Business Application Programming）で定義され、必要に応じてカスタムODataサービスも開発できます。

## 詳細情報

### 対応バージョン

  - SAP S/4HANA Private Edition
  - SAP S/4HANA Public Edition

:::(Info) (SAP S/4HANA On-Premiseについて)

2025年5月現在、SAP S/4HANA On-Premiseには対応していませんが、対応を検討しています。
:::

### 対応プロトコル

- OData V2
- OData V4

### 認証方式

- Basic認証（テクニカルユーザーの利用を推奨）
- APIキー認証（Sandbox環境による接続のみ検証済）

## 利用上の注意・制約

- SAP NetWeaver スタックのバージョンは **7.40 SP02** 以降である必要があります。

## 設定項目

|項目名|必須|説明|
|---|---|---|
|ホスト名|✓|アプリケーションサーバ／Web Dispatcher の FQDN もしくは IP とポートを入力します。<br>（例：`https://example.com:44300`）<br>確認方法について、詳しくは[SAP Help Portal - HTTP(S) Settings in ICM](https://help.sap.com/docs/ABAP_PLATFORM_NEW/9737050ef01843f19572591b42128f1b/a8e79e93ed0643d6bc4ab12f2ba99966.html)を参照ください。|
|クライアント番号|-|ABAPシステム内で論理インスタンスを区別するための3桁の番号です。<br>通常、以下の値を入力します。<ul><li>SAP S/4HANA Private Editionの場合：`100`または`200`</li><li>SAP S/4HANA Public Editionの場合：`100`</li></ul>万一疎通できなかった場合は、SAP GUIのヘッダーから**System** > **Status**をクリックして、**Client**フィールドの値を確認してください。|
|認証方式|✓|認証方式を選択します。<br>BASIC認証とAPIキー認証から選択できます。|
|ユーザー名|✓|BASIC認証のときに入力します。<br>後述の[3. テクニカルユーザーを作成する](/docs/connection-configuration-sap-odata#3-テクニカルユーザーを作成する)を参照ください。|
|パスワード|✓|BASIC認証のときに入力します。<br>後述の[3. テクニカルユーザーを作成する](/docs/connection-configuration-sap-odata#3-テクニカルユーザーを作成する)を参照ください。|
|APIキー|✓|APIキー認証のときに入力します。|
|CA証明書|-|HTTPS通信に使用するCA証明書をPEM形式で設定できます。<br>自己署名証明書や社内認証局の証明書を使用する場合に入力してください。|

## SAP S/4HANA 側で必要な作業

### 1. ODataサービスを有効化する

事前にODataサービスを有効化する必要があります。
詳しい手順は、[SAP Help Portal - How to Enable OData Services in SAP S/4HANA](https://help.sap.com/docs/advanced-financial-closing/administration/how-to-enable-odata-services-in-sap-s4hana)を参照ください。

### 2. ロールを作成する

後述の[テクニカルユーザーの作成](/docs/connection-configuration-sap-odata#3-テクニカルユーザーを作成する)時に、ユーザーに渡す連携用ロールを作成します。
連携用ロールは SAP GUIのトランザクション **PFCG** で作成します。

1. **Role** に `TROCCO_ACCESS` など任意の名前を入力し、**Single Role** で作成します。
2. **Authorizations** > **Change Authorization Data**をクリックし、**S_SERVICE**を手動で追加します。
3. **SRV_NAME**に`*`（全サービス）または利用するサービス名を入力します。
4. プロファイルを生成し、ステータスが緑になることを確認して保存します。

### 3. テクニカルユーザーを作成する

#### Private Cloud Editionの場合

ユーザーは、SAP GUIのトランザクション **SU01** で作成します。

1. **User** に任意のユーザー ID を入力し、**Create**をクリックします。
2. **User Type** に **System** または **Communication** を選択します。
3. **Password** を設定します。なお、有効期限は設定しないことを推奨します。
4. **Roles** タブで [ロールを作成する](/docs/connection-configuration-sap-odata#2-ロールを作成する)で作成したロールを割り当て、保存します。

#### Public Cloud Editionの場合

[Enterprise Resource Planning Blogs by SAP](https://community.sap.com/t5/enterprise-resource-planning-blogs-by-sap/setting-up-communication-management-in-sap-s-4hana-cloud/ba-p/13324940)を参照ください。

### 4. 動作を確認する

作成したユーザーがSAP S/4HANAに接続できるかを確認できます。お使いのWebブラウザで対応するメタデータURLにアクセスし、`HTTP 200 OK`とメタデータ（XMLまたはJSON）が返ることを確認します。

#### OData V2 の場合

`<host>/sap/opu/odata/sap/<SERVICE_NAME>$metadata` にアクセスします。

#### OData V4 の場合

`<host>/sap/opu/odata4/<SERVICE_GROUP>/<REPOSITORY>/sap/<SERVICE_ID>/<VERSION>/$metadata` にアクセスします。

なお、エラーレスポンスが返ってきた場合の原因と確認ポイントは以下のとおりです。

| 症状 | 代表的な原因 | 確認ポイント |
|------|--------------|-------------|
| `401 Unauthorized` | 認証失敗 | ユーザータイプ・パスワード有効期限を確認してください。 |
| `403 Forbidden` | 権限不足 | `S_SERVICE`ロールの`SRV_NAME`に対象サービスが含まれるかを確認してください。 |
| `404 Not Found` | サービス未登録または System Aliasの相違 | OData V2の場合は `/IWFND/MAINT_SERVICE`、OData V4の場合は `/IWFND/V4_ADMIN` で登録状況を確認してください。 |
