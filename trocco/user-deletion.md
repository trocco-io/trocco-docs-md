---
articleId: 1206d0b2-be94-4ba1-91c5-82d9a047aa73
slug: user-deletion
title: ユーザーの削除
parentCategoryId: 3b40bf6b-b381-4108-aeac-7ba4d512282b
languageCode: ja
---
## 概要
ユーザーの削除についてのDocsです。

:::(Warning) (ユーザー削除に必要な権限)

**アカウント特権管理者**権限を持つユーザーのみ、ユーザーを削除できます。
アカウント特権管理者については、[アカウント特権管理者について](/docs/about-super-admin)を参照ください。
:::

:::(Warning) (ユーザーの削除による影響)

- TROCCOにはユーザーに紐づく設定が存在し、ユーザーを削除すると設定が無効になる場合があります。
ユーザーの削除は取り消しができないため、ご注意ください。
詳しくは、[ユーザーの削除により無効になる設定](/docs/user-deletion#ユーザーの削除により無効になる設定)を参照ください。
- ユーザーを削除した場合であっても、該当ユーザーが作成した転送設定やデータマート定義などのリソースは**削除されません**。
該当リソースが[リソースグループ](/docs/resource-group)にて管理されていない場合、通常そのリソースは操作できなくなります。
ただし、[アカウント特権管理者](/docs/about-super-admin)であれば、このようなリソースであっても操作できます。
:::

## ユーザーの削除手順

ユーザーは以下の手順で削除できます。

1. TROCCO画面右上のメールアドレス部分>**ユーザー管理**を順にクリックします。
   ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/user-deletion-2024-08-29-4-32-0.png){height="" width="50%"}

2. 削除するユーザーの**編集**をクリックします。
   ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/user-deletion-2024-08-29-4-32-1.png){height="" width="50%"}

3. **三点リーダー**をクリックし、**このユーザーを削除**をクリックします。
   ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/user-deletion-2024-08-29-4-32-2.png){height="" width="50%"}

4. ユーザー削除の影響を確認し、問題なければ**削除**をクリックします。
   ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/user-deletion-2024-08-29-4-32-3.png){height="" width="50%"}


## 削除済みユーザーの表示

削除済みユーザーがすでに作成したリソース（転送設定やデータマート定義など）に関して、その作成者欄に表示されるメールアドレスの接頭辞には`[DELETE]`が付きます。
例：転送設定一覧ページに表示される削除済みユーザーのメールアドレス
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/user-deletion-2024-08-29-4-32-4.png){height="" width="50%"}

:::(Warning) (ユーザー管理画面での削除済みユーザーの扱い方)

ユーザー管理画面のユーザー一覧に、削除済みユーザーは表示されません。
:::

## ユーザーの削除により無効になる設定

### データカタログ管理者

データカタログ管理者であるユーザーを削除すると、そのデータストアの管理者は不在になります。
カタログデータ・メタデータの取得は、データカタログ管理者が使用しているデータストアアカウントで接続しています。
そのため、データカタログ管理者不在となったデータストアのカタログデータ・メタデータの自動更新は停止します。

別のユーザーがデータカタログ管理者となる方法については、[データカタログ設定 - データストア連携管理](/docs/data-catalog-settings-v1#データストア連携管理)を参照ください。

### TROCCO APIのAPI KEY

ユーザーを削除すると、そのユーザーが作成したAPI KEYも削除されます。
API KEYはTROCCO APIの認証トークンとして使用されています。
削除されたAPI KEYを使用したTROCCO APIのリクエストは認証エラーとなるため、アクティブなユーザーが作成したAPI KEYを使用してください。

API KEYの作成手順は、[APIキーの作成](https://documents.trocco.io/apidocs/overview#trocco-api-keyキーの作成)を参照ください。
