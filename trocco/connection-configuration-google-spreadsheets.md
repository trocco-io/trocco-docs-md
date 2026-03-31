---
articleId: 754e8f09-73f6-4087-ba76-fe491f33f672
slug: connection-configuration-google-spreadsheets
title: 接続情報 - Google Spreadsheets
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Google Spreadsheetsの接続情報を設定する際のDocsとなります。

TROCCOでGoogle Spreadsheetsの接続情報を設定する方法は、Googleアカウントを利用する方法とサービスアカウントを利用する方法の2種類があります。

## 転送前の準備

サービスアカウントを利用する場合は、以下の作業が必要です。
* JSON Keyを設定
* APIを有効化
* 転送元・転送先スプレッドシートの共有設定で、サービスアカウントのメールアドレスに権限を付与

## JSON Keyを設定

1. [Google CloudのJSON Keyを取得する](/docs/connection-configuration-google-cloud-json-key)を参照して、JSON Keyを取得してください。サービスアカウントにロールを付与する必要はありません。

2. サービスアカウントのメールアドレスをメモしておきます。

3. 取得したJSON Keyの内容をすべてコピーし、TROCCOの接続設定作成画面のJSON Keyフォームにペーストします。

## APIを有効化

1. [GCP Console](https://console.developers.google.com/)にアクセスし、プロジェクトを選択します。
（プロジェクトを作成していない場合は事前に作成してください。）

2. [APIライブラリ](https://console.developers.google.com/apis/library)にアクセスします。

3. **Google Sheets API**をクリックします。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-spreadsheets-2024-08-29-3-49-0.png){height="" width=""}

4. APIを有効化します。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-spreadsheets-2024-08-29-3-49-1.png){height="" width=""}

## 転送元・転送先スプレッドシートの共有設定で、サービスアカウントのメールアドレスに権限を付与

1. 最後に、転送元・転送先となるスプレッドシートを開きます。

2. 画面右上の**共有**を開きます。

3. **ユーザー**の入力欄に、サービスアカウントのメールアドレスをペーストします。

4. 右側にある権限の選択欄で、必要な権限を選択します。
（転送元の場合は**閲覧者**、転送先の場合は書き込み権限を持つ**編集者**を選択してください。）

参考：[公式ドキュメント](https://support.google.com/a/answer/7378726?hl=ja)

## トラブルシューティング

### リクエストに必要な認証スコープが不足しているため接続に失敗
```
Error: java.lang.RuntimeException: com.google.api.client.googleapis.json.GoogleJsonResponseException: 403 Forbidden
GET https://sheets.googleapis.com/v4/spreadsheets/*****
{
  "code" : 403,
  "errors" : [ {
    "domain" : "global",
    "message" : "Insufficient Permission",
    "reason" : "insufficientPermissions"
  } ],
  "message" : "Request had insufficient authentication scopes.",
  "status" : "PERMISSION_DENIED",
  "details" : [ {
    "@type" : "type.googleapis.com/google.rpc.ErrorInfo",
    "reason" : "ACCESS_TOKEN_SCOPE_INSUFFICIENT",
    "domain" : "googleapis.com",
    "metadata" : {
      "service" : "sheets.googleapis.com",
      "method" : "google.apps.sheets.v4.SpreadsheetsService.GetSpreadsheet"
    }
  } ]
}
```

#### 考えられる原因
- OAuth認証時に、TROCCOに対して必要なアクセス権が許可されていなかった可能性があります。

#### 対処法
- Googleアカウント再認証を行い、「Google スプレッドシートのすべてのスプレッドシートの参照、編集、作成、削除」にチェックを入れてから許可してください。

### 呼び出し元に権限がないため接続に失敗
```
Error: Google::Apis::ClientError, Message: forbidden: The caller does not have permission, StatusCode: 403, Body: {
  "error": {
    "code": 403,
    "message": "The caller does not have permission",
    "errors": [
      {
        "message": "The caller does not have permission",
        "domain": "global",
        "reason": "forbidden"
      }
    ],
    "status": "PERMISSION_DENIED"
  }
}
```

#### 考えられる原因
- スプレッドシートへのアクセスに必要な権限が付与されていない可能性があります。

#### 対処法
- 転送元の場合、Googleアカウントまたはサービスアカウントに対して、スプレッドシートに**閲覧**権限が付与されているか確認してください。
- 転送先の場合、Googleアカウントまたはサービスアカウントに対して、スプレッドシートに**編集**権限が付与されているか確認してください。