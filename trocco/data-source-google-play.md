---
articleId: 35d29555-96d6-4a40-b795-925abdd2ad2f
slug: data-source-google-play
title: 転送元 - Google Play
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---

## 概要
Google Playからレポートデータを転送する設定のDocsです。

## 取得可能なデータ

Google Cloud Storageに生成されるGoogle Playのレポートデータを取得できます。
レポートは毎日生成され、月ごとに`CSV`ファイルで集計されます。
詳しくは、[Play Console ヘルプ](https://support.google.com/googleplay/android-developer/answer/6135870)を参照ください。

## 制約
* 転送容量の制限あり
 
## 設定項目

### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Google Play接続情報 | Yes | - | あらかじめ登録してある[Google Play接続情報](/docs/connection-configuration-google-play)から、今回の転送設定に必要な権限を持つものを選択します。 |
| バケット | Yes | - | レポートデータが格納されているバケット名を指定します。 |
| レポートパスプレフィックス | Yes | - | レポートデータの転送先パスプレフィックスを指定します。<br>TROCCOは転送元バケットのパスプレフィックスから始まる複数のファイルを転送します。<br>カスタム変数を利用し、TROCCOのデータ転送時に動的に設定値を決定することも可能です。 |
| レポートファイルの圧縮形式 | Yes | 圧縮なし | レポートデータの圧縮形式を指定します。 |
| 転送方法 | Yes | 全件転送 | **全件転送**・**差分転送**のいずれかを選択します。<br>**差分転送**について、詳しくは[差分転送機能](/docs/incremental-data-transfer)を参照ください。 |

## レポート別取得データ項目例

### 「インストール数」の場合
対象CSV: `gs://[developer_bucket_id]/stats/installs/installs_[package_name]_yyyyMM_[dimension].csv`
※ 対象CSVの`[dimension]`ごとにレポートが分かれております。

| カラム | 内容 | 例 |
| --- | --- | --- |
| `Date` | 日時 | `2017-01-12 00:00:00 UTC` |
| `Package` | パッケージ名 | `io.trocco` |
| `[dimension]` | ディメンション内容<br>対象CSVの`[dimension]`ごとにレポートが別れており、それぞれのディメンションごとにレポートが取得できます。<br><br>`app_version`: アプリ バージョン コード<br>`carrier`: 携帯通信会社<br>`country`: 国<br>`device`: デバイス<br>`language`: 言語<br>`os_version`: `Android OS` バージョン | `1` |
| `Daily Device Installs` | 1日のインストール数（デバイス数） | `100` |
| `Daily Device unInstalls` | 1日のアンインストール数（デバイス数） | `1` |
| `Daily Device Upgrades` | 1日のアップグレード数（デバイス数） | `1` |
| `Total User Installs` | 現在のインストール数（ユーザー数） | `100000` |
| `Daily User Installs` | 1日のインストール数（ユーザー数） | `90` |
| `Daily User Uninstalls` | 1日のアンインストール数（ユーザー数） | `1` |
| `Active Device Installs` | アクティブなインストールデバイス | `1000` |

### その他のレポートの場合
インストール数以外のレポートの取得データ項目については、[Play Console ヘルプ](https://support.google.com/googleplay/android-developer/answer/6135870)の「詳細レポートのコマンドとファイル形式」と「集計レポートのコマンドとファイル形式」の各項目を参照ください。
