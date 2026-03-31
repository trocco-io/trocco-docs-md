---
articleId: 27f09ff5-858b-4a6e-bebb-643cbf1b7ded
slug: connection-configuration-zoho-book
title: 接続情報 - Zoho Books
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、Zoho Booksに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - Zoho Books](/docs/data-source-zoho-books)を参照ください。

## 利用上の注意・制約

:::(Warning) (接続可能なデータセンター)

2025年01月現在、TROCCOでは、**インドのデータセンターにホストされているZoho Books**（ドメイン：`.in`）にのみ対応しています。
`.in`以外のドメインの場合、TROCCO上で認証できません。
お使いのZoho Booksがどのドメインを利用しているかは、Zoho Booksコンソール画面のURLより確認できます。
![connection-configuration-zoho-book-2025-01-27-09-57-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-zoho-book-2025-01-27-09-57-1.png){height="" width="50%"}

なお、TROCCOでは現在、お客様自身でドメインを指定できるように改修を進めています。
Zohoのデータセンターについて、詳しくは[Zoho公式ドキュメント - Multiple Data Centers](https://www.zoho.com/books/api/v3/introduction/#multidc)を参照ください。
:::

## 設定項目

|項目名|必須|説明|
|---|---|---|
|`Zoho Booksアカウント`|✓|**Zoho Booksアカウント認証**をクリックします。<br>Zohoにサインインし、以下の画面では`Accept`をクリックしてください。<br>![connection-configuration-zoho-book-2025-01-24-19-41-1](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-zoho-book-2025-01-24-19-41-1.png)|

