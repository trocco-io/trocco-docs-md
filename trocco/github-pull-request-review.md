---
articleId: 68495193-802e-407e-8119-6eabad7fc71f
slug: github-pull-request-review
title: GitHubプルリクエストレビュー機能について
parentCategoryId: cfcfced9-2bd3-464b-adbc-afb011129f68
languageCode: ja
---
## 概要
GitHubプルリクエスト（Pull Request）レビュー機能は、転送設定の変更内容をGitHubと連携し、Pull Requestを作成します。
変更内容のレビューや確認作業にご利用いただけます。
このページではGitHubプルリクエストレビュー機能の設定と利用例について記載します。

:::(Warning) (プラン上の制約)

GitHubプルリクエストレビュー機能は、**Advanced**プラン以上の契約アカウントでのみ、ご利用いただけます。
:::

:::(Warning) (本機能が対応するサービス)

GitHubプルリクエストレビュー機能は、**GitHubのみ**に対応しています。
GitLabなどの他サービスではお使いいただけません。
:::

## 事前準備と利用方法
オプション機能となるため、以下の2つのオプションを有効にする必要があります。
* Gitリポジトリ連携機能
* GitHubプルリクエストレビュー機能


### Gitリポジトリ連携の設定
あらかじめ、ご利用いただくGitHubのリポジトリを設定いただく必要があります。
詳しくは、[Gitリポジトリ連携について](/docs/git-integration)を参照ください。

### GitHubパーソナルアクセストークンの設定
Pull Requestを作成するTROCCOユーザーごとに、GitHubのアカウントおよびアクセストークンを発行・登録します。

1. 左サイドバーの**外部連携**>**GitHubアクセストークン**をクリックします。

2. GitHubのアクセストークンを入力します。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-0.png){height="" width="500"}

:::(Info) (GitHubのアクセストークンの発行)
[New personal access token (classic)](https://github.com/settings/tokens/new)より発行できます。
以下は、GitHubアクセストークンの発行例です。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-1.png){height="" width="500"}
:::

3. 転送設定編集STEP3の確認・適用画面にて、**Pull Request作成**が表示されるようになります。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-2.png){height="" width="500"}


## Pull Request作成から転送設定の保存までの流れ
:::(Warning) (チーム機能をご利用の場合)
チーム機能をご利用いただいている場合、Pull Requestを作成するには、転送設定編集STEP1の「リソースグループ」にて、連携中のGitリポジトリに紐づくリソースグループを選択する必要があります。
:::

:::(Warning) (転送設定の保存について)
GitHubプルリクエストレビュー機能をご利用いただいている場合でも、**Pull Requestを作成するプロセスを経ずに転送設定を保存できます**。
転送設定の新規作成・変更前に、Pull Requestの作成・レビューを前提とした業務プロセスを設計される場合は、ご注意ください。
:::

1. 転送設定編集STEP3の確認・適用画面にて、**Pull Request作成**をクリックします。
2. Pull Requestタイトルを入力し、**Pull Requestを作成**をクリックします。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-3.png){height="" width="500"}

3. 下書き確認画面より、**Pull Requestを確認**をクリックします。
GitHub上のPull requestsページが開かれます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-4.png){height="" width="500"}
    
4. レビューの結果、問題がなければマージします。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-5.png){height="" width="500"}
    
5. 再度TROCCOの下書き確認画面を開き、**保存**をクリックします。転送設定の変更が反映されます。

:::(Warning) (転送設定の変更の反映)
GitHub上でPull Requestをマージした段階では、**TROCCO上の転送設定への変更は反映されません**。
変更を反映するために、必ずTROCCO上で**保存**をクリックしてください。
:::

:::(Warning) (転送設定が保存できない場合)
Pull Requestに対し、マージとクローズのいずれも行われていない場合、**保存**はクリックできません。
先にGitHub上でマージまたはクローズしてください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-6.png){height="" width="500"}
:::


## 補足事項
### Pull Requestを更新したいとき
Pull Requestを作成した後に、再度転送設定に変更を加えるケースがあります。
このとき、変更内容に沿って、Pull Requestの更新もできます。

1. 下書き確認画面より、**下書きから編集を再開**をクリックします。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-7.png){height="" width="500"}


2. 転送設定の下書き編集STEP1・STEP2で、転送設定を編集します。
3. 転送設定の下書き編集STEP3の確認・適用画面にて、**Pull Request更新・下書き保存**をクリックします。 
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-8.png){height="" width="500"}

4. **リモートブランチを更新**をクリックします。
    クリックすると、リモートブランチに対して追加のコミットが行なわれ、変更内容がPull Requestに追従されます。
    ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-9.png){height="" width="500"}

### Pull Requestを適用せずに、転送設定を更新したいとき
Pull Requestを作成すると、マージまたはクローズするまで**保存**ボタンは無効化され、転送設定の変更内容を反映できなくなります。
Pull Requestをマージをせずに再度**保存**ボタンを有効にする方法を説明します。

1. 対象のPull Requestページを開きます。
    下書き確認画面より、**Pull Requestを確認**をクリックすることで開くこともできます。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-10.png){height="" width="500"}

2. Pull Requestをクローズします。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-11.png){height="" width="500"}
    
3. リモートブランチを削除します。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/github-pull-request-review-2024-08-29-19-10-12.png){height="" width="500"}

:::(Warning) (Pull Requestが紐づくリモートブランチの削除)
**必ずリモートブランチを削除してください**。

上記手順2が終了した時点で、TROCCOの下書き確認画面の**保存**ボタンは有効化されますが、
該当のPull Requestが紐づくリモートブランチが削除されるまでは、**再度Pull Requestを作成できません**。
:::
