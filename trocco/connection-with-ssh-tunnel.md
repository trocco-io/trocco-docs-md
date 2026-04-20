---
articleId: a9d04492-3ce7-45c9-9f2d-0b2703d404d1
slug: connection-with-ssh-tunnel
title: SSHトンネルを使った接続
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

TROCCOとお客様が用意したサーバー間でSSHトンネルを張ることで、お客様のデータソースに対してSSHトンネル経由で接続できます。
下記の接続情報で対応しています。

- Amazon Redshift
- Azure Synapse Analytics
- Db2 for LUW
- Microsoft SQL Server
- MongoDB
- MySQL
- Oracle Database
- PostgreSQL

各接続情報の作成・編集画面からSSHトンネルを設定できます。
指定したホストに対して、秘密鍵、もしくはパスワードによるSSH接続を行います。

## 前提条件

:::(Warning) (IPアドレスの許可依頼)

TROCCOとSSHトンネルを張るサーバーは、TROCCOのIPからの接続を許可する必要があります。
以下のページで説明しているIPアドレスに対して、アクセスを許可してください。

[セキュリティグループやファイアウォール等で許可頂く必要があるIPアドレス](/docs/global-ip-list)
:::

## 設定方法

接続情報の設定画面にて、**SSH経由で接続する**にチェックを入れてください。
本設定は、SSHトンネルに対応している接続情報の場合にのみ、表示されます。

## 入力項目

秘密鍵、もしくはパスワードによるSSH接続を行うことができます。

| 項目 | 必須 | 内容 |
| --- | --- | --- |
| SSHホスト | Yes | SSH接続先ホストのIPアドレスを入力します。|
| SSHポート | Yes | SSH接続先ホストのポート番号を入力します。|
| SSHユーザー | Yes | SSH接続のユーザー名を入力します。|
| SSHパスワード | No | SSH接続のパスワードを入力できます。|
| SSH秘密鍵 | No | SSH秘密鍵を入力できます。|
| SSH秘密鍵のパスフレーズ | No | SSH秘密鍵のパスフレーズを入力できます。|

## 詳細情報

- SSHトンネルは転送前に張られ、転送完了後に閉じられます。
- 転送のサーバー環境が別れているため、お客様間でSSHトンネルが共有されることはありません。
