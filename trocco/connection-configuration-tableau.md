---
articleId: 142f0c7e-7bbe-4a39-8b10-fbe7381e11a6
slug: connection-configuration-tableau
title: 接続情報 - Tableau
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
Tableauの接続情報を設定する際のDocsとなります。

現在TROCCOではワークフロー機能より、Tableau Cloudの公式ページ**更新タスクの実行**に対応しています。

## 事前準備
1. Tableau Cloud ログイン後、右上のアイコンをクリックし、ドロップダウンリストから**マイアカウントの設定**を選択します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-tableau-2024-08-29-6-41-0.png){height="" width=""}

2. **個人用アクセストークン**よりアクセストークンを発行します。
入力フォームにアクセストークン名を入力し、右の**新しいトークンの作成**を押下します。
ここで入力したトークン名が、TROCCOでの**アクセストークン名**となります。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-tableau-2024-08-29-6-41-1.png){height="" width=""}

3. トークン シークレットが表示されます。これがTROCCOでの**アクセストークン値**となります。
※ウィンドウを閉じるとトークンシークレットは表示されなくなるのであらかじめコピーしておいてください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-tableau-2024-08-29-6-41-2.png){height="" width=""}

## 入力項目
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力してください。 |
| サイトドメイン | Yes | Tableau CloudのURLに含まれるサイトドメインを入力してください。<br>下部の補足も併せてご参照ください。 |
| サイト名 | Yes | Tableau CloudのURLに含まれるサイト名を入力してください。 <br>下部の補足も併せてご参照ください。 |
| アクセストークン名 | Yes | 事前準備で記入した、アクセストークンの名前を入力してください。 |
| アクセストークン値 | Yes | 事前準備で生成された、トークンシークレットを入力してください。 |


補足）Tableau Cloudの画面との入力情報の対応関係
![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-tableau-2025-09-29-18-11-52.png)

## 補足
* Tableauの更新タスク実行の詳細は[こちら](https://help.tableau.com/current/online/ja-jp/to_refresh_extract_manual.htm)をご参照ください。
* その他参考情報は以下の通りです。
https://help.tableau.com/current/online/ja-jp/to_refresh_extract_manual.htm
https://help.tableau.com/current/server/ja-jp/sites_intro.htm