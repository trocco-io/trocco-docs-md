---
articleId: 91642449-4644-4b76-a9bd-372811eb9352
slug: connection-configuration-s3
title: 接続情報 - Amazon S3
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要
S3をTROCCOで利用するための手順についてのDocsです。

## 入力項目
### 基本情報
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力してください。 |

### 接続情報
AWS認証方式として、以下のいずれかを選択できます。
* IAMロール：データ転送時に一時的な認証情報を取得します。
* IAMユーザー：恒久的な認証情報を発行し、データ転送時に利用します。

:::(Info) (IAMロールによるAWS認証)
IAMユーザーによる認証と異なり、TROCCO上にクレデンシャル（AWSアクセスキー・AWSシークレットアクセスキー）を入力する必要がありません。これにより、よりセキュアな形でのデータ転送環境を構築いただけます。

なお、データ転送時に一時的な認証情報を取得するため、お客様が管理するAWSのIAMロールにて、
TROCCOのAWSアカウントを**信頼されたエンティティタイプ**として登録いただく必要があります。
IAMロールについて、詳しくは[IAMロールの発行手順](/docs/connection-configuration-s3#iamロールの発行手順)を参照ください。
:::

#### AWS認証方式: IAMロールの場合
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| AWSアカウントID | Yes | お客様のIAMロールが存在する、AWSアカウントIDを入力してください。 |
| IAMロール名 | Yes | お客様のAWSアカウントで作成した、IAMロール名を入力してください。<br>例: `trocco-role` |
| TROCCOのAWSアカウントID(読み込み専用) | - | IAMロール発行時に、下記AWSアカウントIDを許可してください。<br>`545668264778` |
| 外部ID(読み込み専用) | - | TROCCOの接続情報画面上で自動生成されます。<br>IAMロール発行時に、TROCCO上に表示されている外部IDを許可してください。 |


#### AWS認証方式: IAMユーザーの場合
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| AWSアクセスキーID | Yes | AWSで作成した、IAMユーザーのアクセスキーIDを入力してください。 |
| AWSシークレットアクセスキー | Yes | AWSで作成した、IAMユーザーのシークレットアクセスキーを入力してください。 |

:::(Info) (IAMユーザーの発行手順)
[IAMユーザーの発行手順](/docs/connection-configuration-s3#iamユーザーの発行手順)を参照ください。
:::

## 付与が必要な権限

TROCCOでS3に接続するために、IAMユーザーまたはIAMロールに対して付与が必要な権限は以下の通りです。

- `s3:ListAllMyBuckets` - S3バケット一覧の取得
- `s3:GetBucketLocation` - バケットのリージョン情報の取得
- `s3:ListBucket` - バケット内のオブジェクト一覧の取得
- `s3:GetObject` - オブジェクトの読み取り
- `s3:PutObject` - オブジェクトの書き込み（転送先として使用する場合）

:::(Warning) (転送元と転送先で異なるアカウント間の転送を行う場合)

転送元と転送先で異なるアカウント間の転送を行う場合は、双方のアカウントに対して`GetObject`が実行可能になるようクロスアカウントのアクセスを許可する必要があります。
詳しくは[Amazon S3 バケットのオブジェクトに対するクロスアカウントアクセス許可を提供する - AWS re:Post](https://repost.aws/ja/knowledge-center/cross-account-access-s3)を参照ください。

:::

## IAMロールの発行手順
1. AWSのIAM Management Console画面より、**ロール**＞**ロールを作成**をクリックします。
2. ステップ 1「信頼されたエンティティを選択」にて、以下の通り設定します。
   - `信頼されたエンティティタイプ`: 「AWSアカウント」 を選択します。
   - `別のAWSアカウント`: TROCCOのS3接続情報フォームの「TROCCOのAWSアカウントID」を入力します。
   - `外部IDを要求する > 外部ID`: TROCCOのS3接続情報フォームの「外部ID」を入力します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-s3-2024-08-29-0-47-0.png)

3. ステップ 2「許可を追加」にて、任意に設定します。
4. ステップ 3「名前、確認、および作成」にて、任意に設定します。
   - ここで入力したロール名をメモしてください。
5. TROCCOのS3接続情報フォームの「IAMロール名」に、ロール名を入力します。


## IAMユーザーの発行手順
### グループ作成

1. IAMコンソールにログインします。
2. メインページから**グループ**を選択し、**新しいグループの作成**をクリックします。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-s3-2024-08-29-0-47-1.png){height="" width=""}

3. グループ名を入力して、**次のステップ**をクリックします。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-s3-2024-08-29-0-47-2.png){height="" width=""}

4. 必要なポリシーを選択して、**次のステップ**をクリックします。Amazon S3 Full Accessを選択します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-s3-2024-08-29-0-47-3.png){height="" width=""}

5. **グループの作成**をクリックします。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-s3-2024-08-29-0-47-4.png){height="" width=""}

### ユーザー作成
1. メインページから**ユーザー**を選択し、**新しいユーザーの作成**をクリックします。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-s3-2024-08-29-0-47-5.png){height="" width=""}

2. ユーザー名を入力して、アクセスの種類で**プログラムによるアクセス**を選択します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-s3-2024-08-29-0-47-6.png){height="" width=""}

3. ユーザーを先ほど作成したグループに追加してユーザーの作成をします。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-s3-2024-08-29-0-47-7.png){height="" width=""}

4. 作成後にAWS Access Key IDとAWS Secret Access Keyが表示されます。
