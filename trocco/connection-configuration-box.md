---
articleId: 1fb4c488-f76a-420e-9cbf-3c214324d387
slug: connection-configuration-box
title: 接続情報 - Box
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
Boxの接続情報を作成するためのDocsです。

## 前提条件

TROCCOでBoxの機能を利用するには、BoxのBusiness Starterプラン以上が必要です。

## 入力項目
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力します。|
| メモ | No | TROCCO内部で利用する接続情報のメモを入力できます。|
| 認証方式 | Yes | 認証方式を選択します。<ul><li>OAuth 2.0認証<ul><li>OAuth 2.0認証は、**転送元**Boxでのみ利用できます。</li></ul></li><li>JWT認証</li></ul> |
| Boxアカウント | Yes | 認証方式で**OAuth 2.0認証**を選択した場合に入力します。<br>**Boxアカウント認証**をクリックしてください。|
| カスタムアプリ設定ファイル | Yes | 認証方式で**JWT認証**を選択した場合に入力します。<br /> 入力内容について、詳しくは[カスタムアプリを用いたデータ転送](/docs/connection-configuration-box#カスタムアプリを用いたデータ転送)を参照ください。 |

## 注意事項

Box APIの一部のトークン・コード・URLには、有効期限が設定されています。

:::(Warning) (アクセストークンの有効期限)

転送元Boxからデータを取得する際に、**アクセストークン**が利用されます。
アクセストークンの有効期限は、**60分間**です。

有効期限内に転送元Boxから転送対象のデータを取得できなかった場合、該当のデータは転送されません。
万一有効期限内にデータの取得が終わらない場合は、転送対象のデータサイズを小さくするといった対応を取ってください。
:::

:::(Warning) (更新トークンの有効期限)

認証方式として**OAuth 2.0認証**を利用している場合、転送元Boxからデータを取得する際に、**更新トークン**が利用されます。
更新トークンの有効期限は、更新トークンの作成または利用を起点に、**60日間**です。

接続情報の作成または前回のデータ転送から起算して、60日間データ転送が行われなかった場合、更新トークンは有効期限切れとなります。
更新トークンの有効期限が切れた場合は、接続情報の編集画面から**Boxアカウント認証**を再度行ってください。
:::

上記以外にも、有効期限が設定されているものがあります。
詳しくは、[トークンおよびURLの有効期限](https://ja.developer.box.com/guides/api-calls/permissions-and-errors/expiration/)を参照ください。

## カスタムアプリを用いたデータ転送

以下では、カスタムアプリを用いてデータ転送する手順を説明します。
カスタムアプリの作成、承認、共有の3つのプロセスに分けて説明します。

### カスタムアプリの作成と承認依頼

1. マイアカウント（Boxのトップ画面）より、**開発者コンソール**をクリックします。
  ![cc_box_001](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-0.png)

2. マイアプリより、**アプリの新規作成**をクリックします。
  ![cc_box_002](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-1.png)

3. **カスタムアプリ**をクリックします。
  ![cc_box_003](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-2.png)

4. 認証方法として**サーバー認証 (JWT使用)** を選択し、任意のアプリ名を入力し、**アプリの作成**をクリックします。
  ![cc_box_004](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-3.png)

5. 構成タブ＞**公開キーの追加と管理**より、**公開/秘密キーペアを生成**をクリックします。
  ![cc_box_005](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-4.png)
  以下の構成の秘密キーが、JSONファイル形式でダウンロードされます。
  ```
  {  "boxAppSettings": {    "clientID": "YYYYYY",    "clientSecret": "XXXXXXX",    "appAuth": {      "publicKeyID": "AAAA",      "privateKey": "BBBBB",      "passphrase": "CCCC"    }  },  "enterpriseID": "ZZZZ"}
  ```

6. 前の手順にて取得したJSONファイルの内容をすべてコピーし、TROCCOの接続情報作成画面の**カスタムアプリ設定ファイル**にペーストします。
  ![cc_box_006](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-5.png)

7. 構成タブ＞**アプリケーションスコープ**より、**Boxに格納されているすべてのファイルとフォルダへの書き込み**を有効にし、**変更を保存**をクリックします。
  なお、本項目を有効化することで、データ転送時にBoxからファイルをダウンロードできるようになります。
  ![cc_box_007](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-6.png)

8. 承認タブ＞**確認して送信**をクリックします。  
  ![cc_box_008](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-7.png)

9. **アプリの説明**欄に適宜説明を入力し、**送信**をクリックします。
  ![cc_box_009](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-8.png)
  Boxの管理者権限のユーザーに、作成したカスタムアプリの承認依頼が送信されます。

### カスタムアプリの承認

以下の手順は、Boxアカウントに対して管理者権限を持つユーザーのみ、行うことができます。

1. マイアカウント（Boxのトップ画面）より、**管理コンソール**をクリックします。
  ![cc_box_010](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-9.png)

2. **アプリ**＞**カスタムアプリマネージャ**タブをクリックし、作成したカスタムアプリのメニューより**アプリを承認**をクリックします。
  ![cc_box_011](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-10.png)

3. **承認**をクリックします。
  ![cc_box_012](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-11.png)
  承認ステータスが**承認済み**になります。

### 転送対象のデータに対する共有設定

1. マイアカウント（Boxのトップ画面）より、**開発者コンソール**をクリックします。
  ![cc_box_013](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-12.png)

2. 作成したカスタムアプリをクリックします。
  ![cc_box_014](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-13.png)

3. 一般設定タブ＞**サービスアカウント情報**より、**Service Account ID**をコピーします。
  ![cc_box_015](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-14.png)

4. マイアカウント（Boxのトップ画面）に戻り、転送したいファイルまたはフォルダーの**共有**をクリックします。
  ![cc_box_016](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-15.png)

5. ユーザーを招待に、先の手順でコピーしたService Account IDをペーストし、**送信**をクリックします。
  ![cc_box_017](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-16.png)
  該当のファイル・フォルダーを開くと、サービスアカウントに権限が付与されたことが確認できます。
  ![cc_box_018](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-box-2024-08-29-0-13-17.png)
