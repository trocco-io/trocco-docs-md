---
articleId: e5d02633-8ce1-4257-8512-df0526983bf1
slug: connection-configuration-microsoft-sharepoint
title: 接続情報 - Microsoft SharePoint
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
Microsoft SharePointの接続情報を設定する際のDocsとなります。

## 入力項目

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | ✓ | TROCCO内部で利用する接続情報の名前を入力します。 |
| メモ | - | TROCCO内部で利用する接続情報のメモを入力します。 |
| Microsoftアカウント | ✓ | **Microsoftアカウント認証**をクリックし、Microsoftにログインします。<br>アカウント認証に成功すると、本項目の値は自動で設定されます。<br>認証方法がわからない場合は、[テナントの設定でユーザーの同意を制限している場合](/docs/microsoft-account-authentication-troubleshooting#テナントの設定でユーザーの同意を制限している場合)を参照ください。 |

:::(Info) (TROCCOがアクセスできるデータの範囲)

TROCCOがアクセスできるデータの範囲は、OAuth認証に使用したアカウントに付与された権限に従います。
アカウントが権限を持っていないデータにはアクセスできません。

:::
