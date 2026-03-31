---
articleId: c5795f97-da5b-430a-80ad-2dca616a2482
slug: git-integration
title: Gitリポジトリ連携について
parentCategoryId: cfcfced9-2bd3-464b-adbc-afb011129f68
languageCode: ja
---
## 概要
Gitリポジトリ連携では、転送設定およびデータマート定義の設定情報をYAML形式で出力し、指定したGitリポジトリに反映できます。
このページでは、Gitリポジトリ連携の設定と使用方法について説明します。

:::(Warning) (プラン上の制約)

Gitリポジトリ連携は、**Advanced**プラン以上の契約アカウントでのみ、ご利用いただけます。
:::

:::(Info) (本機能が対応するホスティングサービス)

Gitリポジトリ連携では、リポジトリへのSSH接続に対応したGitホスティングサービスで利用できます。
SSH接続が可能であれば、クラウド・オンプレミスは問いません。

以下のホスティングサービスでは動作を確認しています。

* GitHub / GitHub Enterprise
* GitLab
* Azure DevOps
:::

:::(Info) (Gitリポジトリ連携をご検討中のお客様へ)

現在、TROCCOでは[Terraform Provider for TROCCO](https://registry.terraform.io/providers/trocco-io/trocco/latest)の提供を開始しています。
Terraformを利用することで、TROCCOの各種設定・リソースをコードベースで運用・管理できるようになります。
Terraform Provider for TROCCOの導入もあわせてご検討ください。
対応リソースや使用例については、[trocco Provider - Documentation](https://registry.terraform.io/providers/trocco-io/trocco/latest/docs)を参照ください。
:::

## 反映対象
* 転送設定の設定情報
* データマート定義の設定情報

## 連携種別
Gitリポジトリ連携の連携種別には、**ユーザー**と**リソースグループ**の2つがあります。
自身のアカウントまたは各リソースグループに対して1つずつ、Gitリポジトリを連携させることができます。

### 連携種別：ユーザー
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/git-integration-2024-08-29-7-59-0.png){height="" width=""}

:::(Info) (連携種別「ユーザー」について)
TROCCOをお使いのユーザーのための連携設定となります。
以下のリソース（転送設定・データマート定義）に対して、Gitリポジトリ連携設定に関するすべての操作が可能です。
* 自身が作成したリソース
* リソースグループに所属していないリソース
:::

### 連携種別：リソースグループ
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/git-integration-2024-08-29-7-59-1.png){height="" width=""}


#### ロール・パーミッション
リソースグループが自分が所属しているチームに付与しているロールの種類によって、許可される操作は異なります。
リソースグループの各ロールについて、詳しくは[リソースグループ](/docs/resource-group)を参照ください。

それぞれのロールに許可されている操作は以下の通りです。

| 操作＼ロール | リソースグループ管理者 | リソースグループ編集者 | リソースグループ運用者 | リソースグループ閲覧者 | ロール無し |
| --- | --- | --- | --- | --- | --- |
| Gitリポジトリ連携設定の作成・編集 | ✓ | ✓ | - | - | - |
| Gitとの差分（diff）確認 | ✓ | ✓ | - | - | - |
| Gitへのcommit・push | ✓ | ✓ | - | - | - |
| 連携情報の表示 | ✓ | ✓ | ✓ | ✓ | - |

以下、あるユーザーのGitリポジトリ連携画面の表示例です。
* リソースグループ「テスト_1」に関して、ユーザーはリソースグループ管理者またはリソースグループ編集者ロールが付与されています。
* リソースグループ「テスト_2」「テスト_3」に関して、ユーザーはリソースグループ運用者またはリソースグループ閲覧者ロールが付与されています。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/git-integration-2024-08-29-7-59-2.png){height="" width="500"}

:::(Info) (Gitリポジトリ連携画面に表示されないリソースグループ)
自分が所属しているチームにロールが付与されておらず、また自分が作成者ではないリソースグループは、Gitリポジトリ連携画面に表示されません。
:::


## リモートリポジトリの設定
1. Gitリポジトリ連携画面上で、**新規作成**をクリックします。

2. GitサーバーのリポジトリURLを入力し、**連携する**をクリックします。 
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/git-integration-2024-08-29-7-59-3.png){height="" width="500"}

:::(Warning) (IPアドレスの許可依頼)
GitHub Enterpriseなどを用いて、Gitサーバーに対して特定のIPアドレス以外からのアクセスを拒否している場合は、TROCCOが通信に利用するIPアドレスに対してアクセスを許可してください。
[セキュリティグループやファイアウォール等で許可頂く必要があるIPアドレス](/docs/global-ip-list)
:::

3. ブランチ名を指定し、Deploy KeyをGitサーバーに登録し、**接続を確認して保存**をクリックします。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/git-integration-2024-08-29-7-59-4.png){height="" width="500"}

### diff（差分）確認
以下より、Gitリポジトリとのdiff（差分）を表示できます。
* Gitリポジトリ連携の一覧画面より、**全ての差分を確認**をクリック
* 各転送設定の詳細画面、各データマート定義の詳細画面の**Gitに反映(確認画面へ)** をクリック
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/git-integration-2024-08-29-7-59-5.png){height="" width="500"}

 
### Gitリポジトリへの反映（git commit & push）
diff確認画面にて、**Gitに反映**をクリックします。
Commit タイトルおよびCommit 詳細を入力して、**Git リポジトリに反映**をクリックします。
YAML形式の設定情報が対象のGitリポジトリに反映されます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/git-integration-2024-08-29-7-59-6.png){height="" width="500"}
