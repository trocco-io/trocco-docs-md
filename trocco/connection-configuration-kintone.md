---
articleId: 658b5d3b-004c-45f5-bc9e-5aa85411f439
slug: connection-configuration-kintone
title: 接続情報 - kintone
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
kintoneの接続情報を設定する際のDocsとなります。

kintoneの接続情報ではログイン方法をユーザーネーム、パスワードを用いる方法と、トークンを用いる方法の2つからお選びいただけます。

## ドメインについて
ドメインはご利用環境のアクセスURLからご確認いただけます。
例：`https://XXX.cybozu.com/`における、`XXX.cybozu.com`の部分になります。

## ユーザーネーム、パスワードについて
転送対象アプリがTROCCOに対してデータ転送する場合、提供されているkintoneユーザーがレコードの閲覧権限を持たなければなりません。
アプリの権限の編集に関しては、[公式サイト](https://jp.cybozu.help/k/ja/user/app_settings/rights/app_rights.html)をご参照ください。

## トークンについて
ここで用いられるトークンはアプリごとに生成され、これをログイン方法として用いた場合は、ユーザーネームとパスワードの入力は必要ありません。
トークンにはkintoneからのデータ取得の際には、レコードの閲覧権限を付与してください。
トークンについての詳しい説明及び、トークンの生成方法については[公式サイト](https://developer.cybozu.io/hc/ja/articles/202463840-APIトークンを使ってみよう)をご参照ください。

## ベーシック認証について
こちらの設定は必須項目ではありません。
ベーシック認証を設定している場合は、そのユーザーネームとパスワードを入力してください。
kintoneにおけるベーシック認証の詳細については[公式サイト](https://jp.cybozu.help/general/ja/admin/list_security/list_access/basic_auth.html)をご参照ください。

## トラブルシューティング

### 接続先のホスト名が解決できないことからTCP接続に失敗

```
Failed to open TCP connection to XXX:443 (getaddrinfo: Name or service not known)
```

#### 考えられる原因

- ドメイン名に誤りがある可能性があります。
- アプリID一覧の取得に失敗している可能性があります。

#### 対処法

- 転送設定STEP1にて、接続確認を行ったときに発生した場合
  - ドメイン名が`XXX.cybozu.com`の形式で入力されているか確認してください。
- 転送設定STEP1にて、アプリIDを読み込むときに発生した場合
  - アプリIDが正しく入力されているか確認してください。
  - アプリIDはkintone管理画面で対象アプリを開いたときのURL（例：`cybozu.com/XXX/{id}/`）から確認できます。
