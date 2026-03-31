---
articleId: f0a1f773-6cfa-44ea-a9bc-01202554185d
slug: data-source-aurora-mysql
title: 転送元 - Amazon Aurora MySQL
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Amazon Aurora MySQLからデータを転送する設定のDocsです。

通常のMySQLの転送とは異なり、AuroraからS3に対してCSV一時ファイルを出力し、そのCSVファイルを読み込むことで転送します。
通常のMySQLでの転送方式に比べ、大容量データの転送の際にAuroraへの負荷を抑えつつ転送できます。
転送対象テーブルのカラム名が、転送後のテーブル名として引き継がれない仕様があるため、こちらにご留意いただきながらご利用ください。

## 制約
* 特になし

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Amazon Aurora MySQL接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。 |
| データベース | Yes | - | MySQLの転送したデータが入っているデータベース名を指定してください。 |
| クエリ | Yes | - | MySQLから転送データを取得するためのSQLを入力します。<br>なお、クエリの最後に 「;」 は含めないで下さい。<br>[カスタム変数](/docs/custom-variables)を設定してクエリ内に埋め込むことも可能です。 |
| S3バケット名 | Yes | - | 一時的にデータを出力するS3のバケット名を指定します。 |

### STEP2 詳細設定
| 項目名 | デフォルト値 | 詳細 |
| --- | --- | --- |
| 転送時にクエリ実行をスキップし、<br>配置されているS3ファイルから取り込みを開始する | スキップしない | **スキップする**を選択すると、ジョブがAuroraクエリ完了後に失敗した場合にクエリをスキップすることで、S3ファイル取り込みフェーズから実行できます。 |
| ソケットタイムアウト (秒) | 1800 | 転送時のタイムアウト上限時間を設定できます。<br>ジョブ実行時間が本設定で指定した時間を超過した場合、実行ジョブを停止します。 |


## 補足
* CSV一時ファイル出力には、[AuroraのSELECT INTO OUTFILE句](https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.SaveIntoS3.html)を利用しております。