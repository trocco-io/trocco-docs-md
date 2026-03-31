---
articleId: 47c3be80-10ca-4744-9313-c2a9d2079de1
slug: data-preview-removal
title: データプレビューの削除について
parentCategoryId: aebb80eb-ea38-4c64-8ecf-0bf55f9d16a2
languageCode: ja
---
## 概要
アカウントセキュリティ画面で設定できる、**データプレビューの削除**についてのDocsです。
転送設定などでデータプレビューを行う際に、TROCCOサービス内部にプレビュー内容を保存（永続化）するかを設定できます。
データプレビューに表示される内容をTROCCOサービス内部に保存しておきたくない場合に有効です。
本設定は**アカウント全体**に影響がございます。

## 前提

データプレビューの削除は、デフォルトでは**無効**となっています。

:::(Warning) (データプレビューの削除の設定変更権限)

**アカウント管理者**以上の権限が必要です。
権限の変更方法について、詳しくは、[ユーザーの権限設定](/docs/user-settings)を参照ください。
:::

## 機能

### 「有効にする」を設定した場合

- 一定時間経過後にプレビュー内容が自動削除されます。
- 転送設定時にプレビュー内容が削除されている場合は、毎回データプレビューを再取得する必要があります。
![スクリーンショット 2022-03-31 22.01.24.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-preview-removal-2024-08-29-8-7-0.png){height="" width=""}

- 転送設定詳細画面などでプレビュー内容を見ることができません。
![スクリーンショット 2022-03-31 21.58.22.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-preview-removal-2024-08-29-8-7-1.png){height="" width=""}

 
### 「無効にする」を設定した場合

- TROCCOサービス内部にプレビューの内容を保存します。

## 設定方法
1. TROCCO画面右上のメールアドレス部分>**アカウントセキュリティ**をクリックします。
　![スクリーンショット 2022-03-31 22.18.17](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-preview-removal-2024-08-29-8-7-2.png){height="" width=""}

2. **データプレビューの削除**から設定を変更できます。
  ![スクリーンショット 2022-03-31 21.28.07.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-preview-removal-2024-08-29-8-7-3.png)
