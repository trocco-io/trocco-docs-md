---
articleId: c8df5dc4-7c9f-43e9-97cc-a800afecdddf
slug: connection-configuration-mongodb
title: 接続情報 - MongoDB
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
MongoDB の接続情報を設定する際のDocsとなります。

## 入力項目
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力してください。 |
| 接続タイプ | No |  以下より選択してください。<ul><li>スタンダード</li><li>DNS Seed List(SRV)</li></ul><br>MongoDB Atlasをご利用の場合は、**DNS Seed List(SRV)** を選択してください。<br>接続タイプについて、詳しくは[公式ドキュメント - Connection String URI Format](https://www.mongodb.com/docs/manual/reference/connection-string/)を参照ください。|
| ホスト | Yes | ホスト名またはIPアドレスを入力してください。 |
| 接続先ポート | Yes | 接続先データベースのポート番号を入力してください。MongoDBのデフォルトポート番号は `27017` です。 |
| 認証方式 | No | 以下より選択してください。<ul><li>SCRAM_SHA_1</li><li>MONGODB_CR</li><li>サーバのバージョンに基づく<ul><li>バージョン3.0以上の場合：SCRAM_SHA_1を利用します。</li><li>バージョン3.0未満の場合：MONGODB_CRを利用します。</li></ul></li></ul>認証方式について、詳しくは[公式ドキュメント - Authentication](https://www.mongodb.com/docs/ruby-driver/master/reference/authentication/)を参照ください。|
| ユーザー | No | 認証のためのユーザ名を入力ください。 |
| パスワード | No | 認証のためのパスワードを入力ください。 |
| 認証データベース | No | 認証データベース（authSource）を入力ください。未指定の場合、`admin`となります。 |
| 読み込み設定 | Yes | 選択肢より選んでください。デフォルトは`primary`となります。<br>読み込み設定について、詳しくは後述の「読み込み設定(Read Preference) について」を参照ください。|
| 読み込み設定タグ | No | 読み込み設定で`primary`以外を選択した場合に指定できます。<br>詳しくは[読み込み設定タグについて](/docs/connection-configuration-mongodb#読み込み設定タグについて)を参照ください。|
| 接続タイプ | No | SSHを経由（SSHトンネルを利用）して接続する場合に、**SSH経由で接続**を選択してください。<br>詳しくは、[SSHトンネルを使った接続](/docs/connection-with-ssh-tunnel)を参照ください。  |

:::(Info) (MongoDBの認証設定)
MongoDBは、ユーザー認証設定を行わずとも接続できます。
ですが、TROCCOとしてはユーザー認証設定を行っていただくことを推奨しています。
:::

## 読み込み設定(Read Preference) について
読み込み設定について、詳しくは[公式ドキュメント - Read Preference](https://www.mongodb.com/docs/manual/core/read-preference/) をご確認ください。

| 選択項目 | 内容 |
| -- | -- |
| primary | （デフォルト）すべての読み取り操作を現在のレプリカ セットのプライマリノードにルーティングします。 |
| primaryPreferred | すべての読み取り操作をプライマリノードにルーティングします。自動フェイルオーバー中など、プライマリが利用できない場合、読み取りリクエストは代わりにセカンダリノードにルーティングされます。 |
| secondary | すべての読み取り操作をセカンダリノードの1つにルーティングします。 |
| secondaryPreferred | すべての読み取り操作を使用可能なセカンダリノードの1つにルーティングします。セカンダリが利用できない場合、代わりにプライマリにルーティングされます。 |
| nearest | ネットワーク遅延の小さいノードを選択してルーティングされます。プライマリとセカンダリは同等に扱われます。 |

## 読み込み設定タグについて

タグセットを使用してレプリカセットメンバーを絞り込みます。

| 項目名 | 内容 |
| -- | -- |
| レプリカセット名 | レプリカセット名を入力します。 |
| タグセット | タグセットを複数入力できます。それぞれのタグセットには、キーと値のペアを複数入力できます。<br>タグセットは順番に評価され、最初に一致したタグセットが検索に使用されます。 詳細は[公式ドキュメント - Read Preference](https://www.mongodb.com/ja-jp/docs/manual/core/read-preference-tags/#read-preference-tag-set-lists)を確認ください。 |
| マッチングモード | タグセットに一致するサーバーが存在しない場合は失敗としたい場合に、厳格モードを有効にします。<br>無効の場合、空のフォールバックタグが追加され、タグセットに一致しないサーバーも取得します。 |
