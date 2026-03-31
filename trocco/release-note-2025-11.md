---
articleId: a08c42e8-c65f-493e-95da-cfba34402076
slug: release-note-2025-11
title: リリースノート-2025年11月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2025年11月のリリース情報をお届けします**

## 転送設定

### 転送元Microsoft SharePointを追加

転送元Microsoft SharePointを追加しました。
詳しくは、以下のドキュメントを参照ください。

* [接続情報 - Microsoft SharePoint](/docs/connection-configuration-microsoft-sharepoint)
* [転送元 - Microsoft SharePoint](/docs/data-source-microsoft-sharepoint)

### 転送元マネーフォワード クラウド経費を追加

転送元マネーフォワード クラウド経費を追加しました。
詳しくは、以下のドキュメントを参照ください。

* [接続情報 - マネーフォワード クラウド経費](/docs/connection-configuration-money-forward-cloud-expense)
* [転送元 - マネーフォワード クラウド経費](/docs/data-source-money-forward-cloud-expense)

### 転送元LINE WORKSを追加

転送元LINE WORKSを追加しました。
詳しくは、以下のドキュメントを参照ください。

* [接続情報 - LINE WORKS](/docs/connection-configuration-line-work)
* [転送元 - LINE WORKS](/docs/data-source-line-work)

### 転送元KING OF TIMEを追加

転送元KING OF TIMEを追加しました。
従業員情報や勤怠情報を連携し、BIツールなどによる勤務状況の可視化に利用できます。

### 転送元Adobe Marketo Engageで転送対象のカラムを指定できるように

転送元Adobe Marketo Engageで、ターゲットに「リード」または「スタティックリスト別リード」を選択した場合に、転送対象のカラムを指定できるようになりました。

### 転送元LINE広告のダブルクォートのエスケープ処理に関する仕様を変更

<!-- textlint-disable -->

転送元LINE広告にて、データ内にダブルクォート（"）が含まれる場合の処理仕様が変更されました。
連携データ内にダブルクォートが含まれている場合、ダブルクォート2つ（""）でエスケープ処理が行われます。

<!-- textlint-enable -->

詳しくは、以下のお知らせを参照ください。
[LINE広告コネクタの仕様変更に関するお知らせ – TROCCOヘルプセンター](https://help.trocco.io/hc/ja/articles/5018462767902-LINE%E5%BA%83%E5%91%8A%E3%82%B3%E3%83%8D%E3%82%AF%E3%82%BF%E3%81%AE%E4%BB%95%E6%A7%98%E5%A4%89%E6%9B%B4%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B-2025%E5%B9%B411%E6%9C%8813%E6%97%A5%E4%BA%88%E5%AE%9A)

### 転送元Yahoo!ディスプレイ広告(運用型)で削除済みの広告を取得できるように

転送元Yahoo!ディスプレイ広告(運用型)で取得方法を「レポート取得」とした場合に、削除済みの広告を取得できるオプションを追加しました。

### 転送元MixpanelでSegmentation Expressionsによる絞り込みが可能に

転送元Mixpanelで取得対象に「Profiles / Engage」を選択した場合、[Segmentation Expressions](https://developer.mixpanel.com/reference/segmentation-expressions)による取得対象データの絞り込みが可能になりました。

### 転送元TROCCOのデータカタログ転送オプションを削除

転送元TROCCOの転送対象から、データカタログのオプションを削除しました。
今後新たにデータカタログのご契約を希望される方は、[COMETAについて](/cometa/docs/about-data-catalog-v2)を参照ください。

## CDCデータ転送

### スキーマ変更の差分表示機能を改善

変更前後のスキーマを左右で並べる「並列表示」タブを、変更後のスキーマ全体を表示する「全体表示」タブに置き換えました。
スキーマ全体を確認したい場合に便利に利用できます。

また、差分のみを表示する「差分表示」タブでは、差分がない領域を折りたたみ、視認性を向上させました。

## ワークフロー

### Databricksデータチェックタスクを追加

データチェックタスクとしてDatabricksデータチェックを追加しました。

### カスタム変数ループ実行がDatabricksに対応

カスタム変数ループ実行で、Databricksのクエリ結果をカスタム変数に展開し、ループ実行できるようになりました。

## UI・UX

### データマート定義一覧画面の絞り込み機能が強化

データマート定義一覧画面で、サービスによる絞り込みができるようになりました。
また、新たに実行したジョブに対しては、以下の項目でも絞り込みが可能になりました。

* サービスにBigQueryを指定した場合：ジョブID
* サービスにSnowflakeを指定した場合：クエリID

### CDCデータ転送でジョブ実行中またはスケジュール実行がオンの転送設定もカラム設定を確認できるように

CDCデータ転送にて、ジョブ実行中またはスケジュール実行がオンの場合でも、カラム設定を確認できるようになりました。

### 転送設定一覧で環境グループ・環境で絞り込めるように

転送設定一覧で、転送設定を環境グループ・環境で絞り込めるようになりました。

### ワークフロー定義一覧で環境グループ・環境で絞り込めるように

ワークフロー定義一覧で、ワークフロー定義を環境グループ・環境で絞り込めるようになりました。

### データマート定義のスケジュール設定と通知設定のUIを転送設定と統一

データマート定義のスケジュール設定と通知設定について、タブを表示し専用ページを設けました。
また、通知のテスト実行が可能になりました。

### CDC設定保存時に確認ダイアログが表示されるように

CDC設定を保存するとただちに全件転送が開始されるため、転送元DBの負荷が一時的に高まる可能性があります。
保存前に確認できるよう、ダイアログを表示するようにしました。

## TROCCO API

### 環境APIがメモ機能に対応

環境APIがメモ機能に対応しました。
対象となったAPIエンドポイントは以下のとおりです。

- [環境一覧取得](/trocco-api/apidocs/get-environments)
- [環境作成](/trocco-api/apidocs/post-environment)
- [環境詳細取得](/trocco-api/apidocs/get-environment)
- [環境更新](/trocco-api/apidocs/patch-environment)

### ワークフローAPIがDatabricksのクエリ結果によるカスタム変数ループ実行に対応

ワークフローAPIがDatabricksのクエリ結果によるカスタム変数ループ実行に対応しました。
対象となったAPIエンドポイントは以下のとおりです。

- [ワークフロー作成](/trocco-api/apidocs/post-pipeline-definition)
- [ワークフロー詳細取得](/trocco-api/apidocs/get-pipeline-definition)
- [ワークフロー更新](/trocco-api/apidocs/patch-pipeline-definition)

### ワークフローAPIがDatabricksデータチェックに対応

ワークフローAPIがDatabricksデータチェックに対応しました。
対象となったAPIエンドポイントは以下のとおりです。

- [ワークフロー作成](/trocco-api/apidocs/post-pipeline-definition)
- [ワークフロー詳細取得](/trocco-api/apidocs/get-pipeline-definition)
- [ワークフロー更新](/trocco-api/apidocs/patch-pipeline-definition)

### データマートAPIおよびワークフローAPIで取得できる項目の拡充

データマートAPIおよびワークフローAPIで取得できる項目を拡充し、リソースグループIDやラベル設定、スケジュール設定、通知設定などを取得できるようになりました。
対象となったAPIエンドポイントは以下のとおりです。

- [データマート定義一覧取得](/apidocs/get-datamart-definitions)
- [ワークフロー一覧取得](/apidocs/get-pipeline-definitions)

## コネクタAPIアップデート

### AWS関連コネクタ

以下のコネクタで転送時使用するAWS SDKのバージョンを、v1から**v2**へアップデートしました。

- 転送元Amazon CloudWatch Logs
- 転送元AWS Cost Explorer
- 転送元Amazon Aurora MySQL
- 転送元Amazon DynamoDB

新バージョンについては、[AWS SDK for Java 2.x](https://docs.aws.amazon.com/ja_jp/sdk-for-java/latest/developer-guide/home.html)を参照ください。
