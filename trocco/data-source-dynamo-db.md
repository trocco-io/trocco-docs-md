---
articleId: 0ebfbfa9-1d37-4814-b41f-916d02257441
slug: data-source-dynamo-db
title: 転送元 - Amazon DynamoDB
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Amazon DynamoDBから項目を転送する設定のDocsです。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Amazon DynamoDB接続情報 | Yes | - | あらかじめ登録してある接続情報から、今回の転送設定に必要な権限を持つものを選択します。<br>接続情報の設定方法は[別ページ](/docs/connection-configuration-dynamo-db)をご参照下さい。 |
| リージョン | Yes | - | AWSのリージョンを指定してください。 |
| テーブル | Yes | - | 項目を取得する対象のテーブルを指定してください。 |
| セカンダリインデックス | No | - | グローバル/ローカルセカンダリインデックスを指定してください。<br>詳細は[公式ドキュメント](https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/SecondaryIndexes.html)を参照してください。 |
| 転送カラム | Yes | - | 取得するカラムを指定してください。<br>少なくとも1カラム以上の設定が必要です。<br>選択する型により、設定項目が異なります。<br><br>• カラム名(必須)<br>    取得するカラムの名前です。<br>• 型(必須)<br>    取得した値を変換するembulkの型です。<br>• 値のAmazon DynamoDBデータ型<br>    Amazon DynamoDBの値に設定されているデータ型です。<br>  指定されたデータ型以外の型の値はNULLとして扱われます。<br>• フォーマット<br>    型: timestamp を選択時に設定可能です。<br>    取得する値のフォーマットです。（デフォルト: %Y-%m-%d %H:%M:%S.%N %z）<br>• タイムゾーン<br>    型: timestamp を選択時に設定可能です。<br>    取得する値にタイムゾーンが含まれていない場合に使用されるタイムゾーンです。（デフォルト: Asia/Tokyo）<br><br>補足事項<br>• Amazon DynamoDBの型について<br>    例えば以下の画像では、 s_col に A の文字列（データ型: S（string））と{"A"}の文字列の配列（データ型: SS（array of string））が入っている項目があります。<br>    データ型に S（string）を指定すると p_key:a, s_key:2 の s_col はNULLとして扱われます。<br>![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-dynamo-db-2024-08-29-23-23-0.png){height="" width=""} |
| オペレーション | yes | - | Amazon DynamoDBに対する操作です。<br>以下のどちらかを指定可能です。<br>• 全件転送（scan）<br>• クエリによる抽出（query） |
| クエリ条件式 | No | - | クエリの条件式です。<br><br>• パーティションキー（必須）<br>    テーブルに設定されているパーティションキーを指定してください。<br>• パーティションキーの値（必須）<br>    絞り込むパーティションキーの値を指定してください。<br>• パーティションキーのAmazon DynamoDBの型(必須)<br>    パーティションキーのAmazon DynamoDBの型を指定してください。<br>• ソートキー<br>    テーブルに設定されているソートキーを指定してください。<br>• ソートキーの演算子<br>    ソートキーの演算子を指定してください。<br>• ソートキーの値1<br>    絞り込むソートキーの値を指定してください。<br>• ソートキーの値2<br>    絞り込むソートキーの値を指定してください。<br>    ソートキーの演算子でbetweenを選択した場合に指定可能で、以下のようなクエリ条件式になります。<br>    {ソートキー} between {ソートキーの値1} and {ソートキーの値2}<br>• ソートキーのAmazon DynamoDBの型<br>    ソートキーのAmazon DynamoDBの型を指定してください。 |
| セグメント数 | No | - | オペレーション:全件転送（scan）選択時に指定可能です。<br>テーブル、またはセカンダリインデックスを指定されたセグメント数分に分割して並列スキャンを実行します。<br>大量の項目を取得する場合、StackOverflowエラーが発生する可能性があります。<br>セグメント数を増やし、並列スキャンをすることでStackOverflowエラーを回避することが可能です。<br><br>詳細は [AWSの公式ドキュメント1](https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan) [AWSの公式ドキュメント2](https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/bp-query-scan.html#bp-query-scan-parallel) を参照してください。 |
| 一度のオペレーションで取得する項目数 | No | - | 大量の項目を転送する場合、OutOfMemoryエラーが発生する可能性があります。<br>バッチサイズの調整をすることでOutOfMemoryエラーを回避することが可能です。<br>デフォルトでは項目数の制限はなく、1MB分の項目が取得されます。<br><br>詳細は[AWSの公式ドキュメント](https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/Scan.html#Scan.Limit)を参照してください。 |
| 強力な整合性のある読み込み | Yes | 無効 | 強い整合性のある読み込みの有効/無効を指定してください。<br>セカンダリインデックスにグローバルセカンダリインデックスを指定した場合、強力な整合性のある読み込みを有効にすると転送時にエラーになります。<br><br>詳細は[公式ドキュメント](https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html)を参照してください。 |
