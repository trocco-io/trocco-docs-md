---
articleId: 368d7fd3-d61f-44b6-a1f0-6dfec201ed68
slug: connection-configuration-microsoft-advertising
title: 接続情報 - Microsoft Advertising
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
Microsoft Advertisingの接続情報を設定する際のDocsとなります。

## 入力項目

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 認証方法 | ✓ | 認証に使用するアカウントの種類を選択します。以下のアカウントを利用できます。<ul><li>Microsoftアカウント</li><li>Googleアカウント</li></ul>GoogleアカウントはMicrosoftアカウントと紐づているアカウントのみ利用できます。 |
| Microsoftアカウント | ✓ | 認証方法に**Microsoftアカウント**を選択した場合に設定します。<br>**Microsoftアカウント認証**をクリックし、Microsoftにログインします。<br>アカウント認証に成功すると、本項目の値は自動で設定されます。<br>認証方法がわからない場合は、[テナントの設定でユーザーの同意を制限している場合](/docs/microsoft-account-authentication-troubleshooting#テナントの設定でユーザーの同意を制限している場合)を参照ください。 |
| Googleアカウント | ✓ | 認証方法に**Googleアカウント**を選択した場合に設定します。<br>**Googleアカウント認証**をクリックし、Googleアカウントにログインします。<br>アカウント認証に成功すると、本項目の値は自動で設定されます。 |
| 名前 | ✓ | TROCCO内部で利用する接続情報の名前を入力します。 |
| メモ | - | TROCCO内部で利用する接続情報のメモを入力します。 |
| Developer token | ✓ | 開発者トークンを入力します。<br>取得方法について、詳しくは[Microsoft公式ドキュメント - Get a Developer Token](https://learn.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13#get-developer-token)を参照ください。 |
