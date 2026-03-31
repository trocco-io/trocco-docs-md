---
articleId: d2586c59-4c5a-491c-b38c-ecbaeacb28d9
slug: data-source-azure-blob-storage
title: 転送元 - Azure Blob Storage
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Azure Blob Storageからデータを転送する設定のDocsです。

:::(Info) (Azure Data Lake Storageアップグレード後の利用について)

[Azure Data Lake StorageへAzure Blob Storageをアップグレード](https://learn.microsoft.com/ja-jp/azure/storage/blobs/upgrade-to-data-lake-storage-gen2)した場合でも、TROCCOのAzure Blob Storage機能は引き続きご利用いただけます。

アップグレード後も既存の転送設定の変更は不要です。

:::

## 制約
* 特になし

## 設定項目
### STEP1 基本設定
| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Azure Blob Storage接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の接続設定に必要な権限を持つものを選択します。<br>接続情報の設定方法は[Azure Blob Storage](/docs/connection-configuration-azure-blob-storage)の接続設定ページをご参照ください。 |
| コンテナ | Yes | - | 転送したいデータが保存されているコンテナ名を指定してください。 |
| パスプレフィックス | Yes | - | 転送対象のデータを、パスプレフィックスで絞り込めます。<br>ディレクトリ名までを指定した場合、ディレクトリ配下の（プレフィックスにマッチする）全ファイルを転送します。<br>一方ファイル名までを指定した場合、そのファイルのみを転送します。<br>[カスタム変数](/docs/custom-variables)を利用し、TROCCOのデータ転送時に動的に設定値を決定することも可能です。 |
| 入力ファイル形式 | Yes | CSV/TSV | 入力ファイルの形式を指定してください。<br>詳しくは、[入力ファイル形式の設定について](/docs/configuration-of-input-files)を参照ください。|
| 転送方法 | Yes | 全件転送 | **全件転送**・**差分転送**のいずれかを選択します。<br>**差分転送**について、詳しくは[差分転送機能](/docs/incremental-data-transfer)を参照ください。 |

### STEP1 詳細設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 指定のパスにファイルが存在しなかった場合に転送を続行するか | Yes | 転送を続行する | 基本設定にて指定したパスにファイルが見つからなかった場合に転送を続行させるかどうかお選びいただけます。<br>**転送を続行する**を選択した場合は0件転送したとして転送ジョブが完了します。<br>**転送を中止し、エラーにする**を選択した場合はエラーとして転送ジョブを中止します。 |

### STEP2 詳細設定
| 項目名 | デフォルト値 | 内容 |
| --- | --- | --- |
| ファイルパスの正規表現 | - | パスプレフィックスで絞り込んだファイルのうち、どのファイルを転送対象とするか正規表現で指定できます。<br>正規表現で照合する文字列はファイルのBlob名（フルパス）です。<br>未入力の場合、パスプレフィックスにマッチする全てのファイルが対象になります。 |
| 読み込むファイル数の上限 | - | 転送するファイル数の上限を指定することができます（デフォルトは無制限）。 |
