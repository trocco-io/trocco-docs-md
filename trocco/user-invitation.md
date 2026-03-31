---
articleId: 844a6aee-31fc-4bd2-a4f6-501f9750768e
slug: user-invitation
title: ユーザーの招待
parentCategoryId: 3b40bf6b-b381-4108-aeac-7ba4d512282b
languageCode: ja
---
## 概要
ユーザーの招待についてのDocsです。

:::(Warning) (ユーザーの招待権限)

**アカウント管理者**以上の権限が必要です。
権限の変更方法について、詳しくは[ユーザーの権限設定](/docs/user-settings)を参照ください。
:::

## ユーザーの招待手順
ユーザーは以下手順で招待できます。

1. TROCCO画面右上のメールアドレス部分>**ユーザー管理**を順にクリックします

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/user-invitation-2025-04-14-12-57-0.png){height="" width="50%"}

2. **ユーザー招待**をクリックします

3. フォームに必要事項を入力し、**招待メール送信**をクリックします

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/user-invitation-2025-04-14-12-57-2.png){height="" width="50%"}

フォームの入力項目は以下のとおりです。

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| メールアドレス | Yes | 招待したいユーザーのメールアドレスを入力します。|
| パスワード | Yes | 招待されたユーザーが初回ログイン時に用いるパスワードを入力します。<br>ご自身のパスワードを入力しないよう、ご注意ください。|
| 権限 | Yes | 権限を選択します。<br>権限については[各ユーザー権限でできること](/docs/account-roles)を参照してください。 |
| 機能 | No | 機能を選択します。<br>機能については[ユーザーの権限設定 > 機能について](/docs/user-settings#機能について)を参照してください。<br> |

**招待メール送信**をクリックすると、入力したメールアドレスに招待メールが送信されます。
招待メールを受け取ったユーザーは、メール本文中のURLをクリックしTROCCOにログインできます。

:::(Warning) (送信元メールアドレスについて)
招待メールは`system@trocco.io`より送信されます。
メールが届かない場合は、TROCCOからのメールが受信できるよう、ドメイン指定受信で`trocco.io`を許可するように設定してください。
:::

## 招待結果の確認方法
TROCCOに招待したユーザーが登録完了したかどうかは、ユーザー管理画面より確認できます。
招待した時点では、ユーザーのステータスは**メール認証待ち**となります。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/user-invitation-2025-04-14-12-57-3.png){height="" width="50%"}
