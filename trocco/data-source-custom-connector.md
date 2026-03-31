---
articleId: c3fef0c0-e0f8-42a6-b875-a0c7366a61ce
slug: data-source-custom-connector
title: 転送元 - カスタムコネクタ
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、カスタムコネクタからデータを取得するための設定（転送設定）について説明します。

接続に関する設定については、[接続情報 - カスタムコネクタ](/docs/connection-configuration-custom-connector)を参照ください。

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 |  内容 |
| --- | --- | --- |
| カスタムコネクタ | Yes | あらかじめ登録してある[カスタムコネクタ](/docs/create-custom-connector)から、今回の転送設定で利用したいコネクタを選択します。 |
| カスタムコネクタ接続情報 | Yes | あらかじめ登録してある[カスタムコネクタの接続情報](/docs/connection-configuration-custom-connector)から、今回の転送設定に必要な権限を持つものを選択します。 |
| 取得対象 | Yes | データの取得対象を選択します。<br>カスタムコネクタ作成時に登録したエンドポイントが本項目の取得対象となります。<br>エンドポイント設定時に編集可能なパラメータやHTTPヘッダを追加した場合は、各項目の値を設定できます。 |
