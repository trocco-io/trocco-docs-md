---
articleId: e7a676a6-e583-469b-a89a-65414f3b2aa2
slug: data-source-smart-hr
title: 転送元 - SmartHR
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

SmartHRからデータを転送する設定のDocsです。

## 制約

リクエスト制限などは、[SmartHR API ドキュメント](https://developer.smarthr.jp/api/about_api)を参照ください。
 
## 設定項目

### STEP1 基本設定

| 項目名 | 必須 |  内容 |
| --- | --- | --- |
 SmartHR接続情報 | Yes | あらかじめ登録してある[SmartHRの接続情報](/docs/connection-configuration-smart-hr)から、今回の転送設定に必要な権限を持つものを選択します。 |
| 取得対象 | Yes | データの取得対象を選択します。<br>各エンドポイントで取得できる項目については、[SmartHR APIリファレンス](https://developer.smarthr.jp/api)を参照ください。 |
