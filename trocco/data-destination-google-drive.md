---
articleId: 6312dbaa-ae9d-4274-b0af-d9e55ee67958
slug: data-destination-google-drive
title: 転送先 - Google Drive
parentCategoryId: 03f04962-e96f-49cb-9c01-d84d025cc41a
languageCode: ja
---
## 概要
Google Driveへデータを転送する設定のDocsです。


## 制約
* 転送されるファイル名と同名のファイルが存在する場合、ファイルが上書きされます。


## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 | 
| --- | --- | --- | --- |
| Google  Drive接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| フォルダID | Yes | - | 転送するフォルダのIDです。以下の画像のような `folders/` 以下の文字列を入力してください。<br /> ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-destination-google-drive-2024-08-29-1-12-0.png){height="" width=""} |
| 子フォルダ名 | No | - | フォルダID以下のフォルダ名です。<br />・指定しない場合、フォルダID以下にファイルが転送されます。<br />・指定した場合、子フォルダ名のフォルダ以下にファイルが転送されます。<br />　・フォルダが存在する場合、作成日が最新のフォルダに転送されます。<br />　・フォルダが存在しない場合、フォルダを作成し転送されます。|
| ファイル名 | Yes | - | 配置されるファイル名です。 |
| 出力ファイル形式	| Yes | - | 出力されるファイル形式です。以下から選択してください。<br />・ CSV/TSV |

