---
articleId: bc1fa60e-fefe-474a-89f1-2b27df29a966
slug: data-destination-salesforce-marketing-cloud
title: 転送先 - Salesforce Marketing Cloud
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---

## 概要
Salesforce Marketing Cloudへ転送する設定のDocsです。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Salesforce Marketing CloudのSFTP接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| パスプレフィックス | Yes | - | 転送するデータの保存先のパスプレフィックスを指定してください。<br>先頭に/を必ず付けてください。ない場合はエラーとなります。パスの探索方法は、接続設定のパス探索設定を確認してください。<br>[カスタム変数](/docs/custom-variables)を利用し、TROCCOのデータ転送時に動的に設定値を決定することも可能です。 |
| ファイル圧縮 | No | - | ファイル圧縮して転送する場合は、以下から圧縮形式を選択してください。<br><ul><li>**gzip**</li></ul> |
| 転送モード | Yes | 並列転送 | 転送モードとして**並列転送**または**出力ファイル数抑制転送**から選んでください。<br>出力ファイル数抑制転送を選択した場合、内部的には並列処理を抑えてファイル生成を行います。<br>転送元が1ファイルの場合、転送先には1ファイルで生成されます。 |

