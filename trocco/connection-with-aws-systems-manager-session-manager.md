---
articleId: 11cc4f60-b18a-429a-a6a8-a5fe0e054024
slug: connection-with-aws-systems-manager-session-manager
title: AWS Systems Manager Session Managerを用いた接続
parentCategoryId: aebb80eb-ea38-4c64-8ecf-0bf55f9d16a2
languageCode: ja
---
## 概要
TROCCO とお客様が用意したサーバー間でAWS Systems Manager Session Managerを経由したSSHトンネルを張ることで、お客様のデータソースに対し、プライベートサブネット内の踏み台サーバーを経由して接続できます。
通常のSSHトンネルを使った接続と比べると、踏み台サーバーをパブリックサブネットに配置する必要が無くなるため、より安全にTROCCOをご利用いただけます。

以下にAWS Systems Manager Session Manager（以降、単にSession Managerと表記します）を用いた接続の概略図を示します。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-with-aws-systems-manager-session-manager-2024-08-29-15-31-0.png){height="" width=""}

設定を行うには、Session Managerの接続情報を作成後、データソースの接続情報の設定から利用したいSession Managerの接続情報を選択します。
2024年02月時点でMySQLとPostgreSQLのみ対応しています。
Sesesion Managerについて、詳しくは以下のAWSのドキュメントをご覧ください。
[AWS Systems ManagerSession Manager - AWS Systems Manager](https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/session-manager.html)

## 制約

[SSHトンネルを使った接続](/docs/connection-with-ssh-tunnel)との併用はできません。

## 前提条件
以下の項目をお客様のAWSアカウント上で実施していただく必要があります。
なお、これらはTROCCOでSession Managerを利用するための最小限の設定項目です。
ご所属の組織のポリシーに合わせて修正をお願いいたします。

#### 踏み台サーバーとなるインスタンスの作成
* インスタンスにはSSM Agentをインストールする必要があります
インストール手順についてはAWSのドキュメントをご覧ください。
[SSM Agent の使用 - AWS Systems Manager](https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/ssm-agent.html)

#### 踏み台サーバーへのSession Manager接続を許可するためのIAMインスタンスプロファイルの設定
* AWS 管理ポリシーの**AmazonSSMManagedInstanceCore**をインスタンスにアタッチしてください。
* または、AWSのドキュメントを参考に設定してください。
[Session Manager アクセス許可を使用して、IAM インスタンスプロファイルを確認または作成する - AWS Systems Manager](https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/session-manager-getting-started-instance-profile.html)

#### 踏み台サーバーへのSession Manager接続を許可するためのIAMポリシーの設定
* 以下のページの「エンドユーザーポリシー＞セッションマネージャー and CLI」を参考にIAMポリシーを作成し、TROCCOで利用するIAMユーザーにアタッチしてください。
  * [クイックスタート のデフォルト IAM ポリシーSession Manager - AWS Systems Manager](https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/getting-started-restrict-access-quickstart.html#restrict-access-quickstart-end-user)
  * SSHを使用してセッションを開始するため、`"Action": ["ssm:StartSession"]`の`Resource`には、`document/SSM-SessionManagerRunShell`の代わりに`document/AWS-StartSSHSession`を設定してください。
* 以下は、最低限の権限を付与するためのIAMポリシーの例です。参考としてご参照ください。
  ```json
  {
      "Version": "2012-10-17",
      "Statement": [
          {
              "Effect": "Allow",
              "Action": [
                  "ssm:StartSession"
              ],
              "Resource": [
                  "arn:aws:ec2:<REGION>:<ACCOUNT-ID>:instance/<INSTANCE-ID>",
                  "arn:aws:ssm:*:*:document/AWS-StartSSHSession"
              ],
              "Condition": {
                  "BoolIfExists": {
                      "ssm:SessionDocumentAccessCheck": "true" 
                  }
              }
          }
      ]
  }
  ```

## 設定方法

以下の接続情報の作成・編集画面にて、**AWS Systems Manager Session Manager経由で接続する**を有効にします。

- MySQL接続情報
- PostgreSQL接続情報

AWS Systems Manager Session Manager接続情報を新規作成したい場合は、**SSM接続情報を追加**をクリックしてください。
すでに作成したAWS Systems Manager Session Manager接続情報を確認したい場合は、**SSM接続情報一覧を表示する**をクリックしてください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-with-aws-systems-manager-session-manager-2024-08-29-15-31-1.png){height="" width=""}

## 入力項目
Session Managerの接続情報を作成するために必要な入力項目について説明します。
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| 名前 | Yes | - | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | - | TROCCO内部で利用する接続情報のメモを入力してください。 |
| AWSアクセスキーID | Yes | - | Session Managerを利用するためのAWSアクセスキーIDを入力してください。 |
| AWSシークレットアクセスキー | Yes | - | Session Managerを利用するためのAWSシークレットアクセスキーを入力してください。 |
| AWSリージョン | Yes | ap-northeast-1 | Session Managerを利用するリージョンを入力してください。 |
| EC2インスタンスID | Yes | - | Session Managerを利用する際に踏み台となるEC2インスタンスのインスタンスIDを入力してください。<br>インスタンスIDは i- や mi- で始まる文字列です。 |
| SSHポート | Yes | 22 | Session Managerを利用する際に、踏み台となるEC2インスタンスにSSH接続するポートを入力してください。 |
| SSHユーザー | Yes | ec2-user | Session Managerを利用する際に、踏み台となるEC2インスタンスにSSH接続するユーザー名を入力してください。 |
| SSH秘密鍵 | Yes | - | Session Managerを利用して接続する際に、踏み台となるEC2インスタンスに接続するための秘密鍵ファイルを入力してください。<br>一般に、EC2インスタンス作成時に選択、または作成したキーペアの秘密鍵となります。 |
| SSH秘密鍵のパスフレーズ | No | - | SSH秘密鍵のパスフレーズがあれば入力してください。 |
 
## 補足
#### Session Managerを経由したSSHトンネルは転送前に張られ、転送完了後に閉じられます。
* Session Manager上はセッションが残りますが、デフォルトでは20分後に閉じられます。
・完了後にセッションが閉じられるまでの時間を変更するには、以下のドキュメントを参考に設定してください。
・[アイドルセッションのタイムアウト値を指定します。 - AWS Systems Manager](https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/session-preferences-timeout.html)

* Session Managerのセッション自体の最大接続時間も設定可能です。
・何らかの理由でセッションが残り続けることを避けるため、設定を推奨します。
・詳しくは[最大セッション時間の指定 - AWS Systems Manager](https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/session-preferences-max-timeout.html)を参照してください。

#### 転送の実行環境は分離されているため、お客様間でSession Managerのセッションや、SSHトンネルが共有されることはありません。

#### 接続に失敗する場合は、お客様の環境からの接続をお試しください。
* お客様の環境に、AWS CLIとSession Managerプラグインをインストールしてください。
・[AWS CLI バージョン 2 のインストール、更新、アンインストール - AWS Command Line Interface](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/install-cliv2.html)
・[AWS CLI 用の Session Manager プラグインをインストールする - AWS Systems Manager](https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html)

* 検証したい接続のプロファイルを作成してください。
・[設定ファイルと認証情報ファイルの設定 - AWS Command Line Interface](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-configure-files.html)

* 以下のコマンドの実行をお試しください。
・`aws ssm start-session --target <bastion instance ID> --profile <your profile> --document-name AWS-StartSSHSession`
・**Starting session with SessionId**から始まるメッセージが表示されていれば接続できています。
・お客様の環境から接続できない場合は、出力されるエラーメッセージを参考に、AWS上の設定の見直しをお願いいたします。
・お客様の環境から接続できる場合は、TROCCOへの入力間違いがないかお確かめください。
　引き続きTROCCOからの接続が失敗する場合は、サポートにお問い合わせください。

