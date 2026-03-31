---
articleId: 8eab1b2c-7af3-4a83-b688-76987c4d8aab
slug: connection-configuration-smart-hr
title: 接続情報 - SmartHR
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

SmartHRの接続情報を作成するためのDocsです。
詳しい説明などは[SmartHR API ドキュメント](https://developer.smarthr.jp/api/about_api)をご覧ください。

## 入力項目

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力します。|
| メモ | No | TROCCO内部で利用する接続情報のメモを入力できます。|
| アクセストークン | Yes | SmartHRで発行したアクセストークンを入力します。<br>アクセストークンの発行手順について、詳しくは[SmartHR公式ドキュメント](https://support.smarthr.jp/help/articles/360026266033/)を参照ください。 |
| ホスト | Yes | `<sub_domain>.smarthr.jp`の形で入力します。<br>サブドメインについては、[SmartHR公式ドキュメント](https://support.smarthr.jp/help/articles/360026264893/)を参照ください。 |

## 補足事項

### リソース・アトリビュートの制限について

SmartHRでは、アクセストークンを作成するときに、リソースの制限・アトリビュートの制限を設定できます。

- リソースについて：取得対象でないリソースの参照権限は無効にすることを推奨します。
- アトリビュートについて：任意のアトリビュートの参照権限を無効にした場合、該当のアトリビュート列の値はnullとして転送されます。
