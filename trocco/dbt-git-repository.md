---
articleId: 3a1dd519-203a-444f-8855-062a4797b3da
slug: dbt-git-repository
title: dbt Gitリポジトリ
parentCategoryId: 306848d6-87d4-40e8-a2e3-7ce10a8364a6
languageCode: ja
---
## 概要

dbtジョブを実際に実行する前に、TROCCOにGitリポジトリを連携する必要があります。
本記事では、dbt Gitリポジトリの作成・編集・削除について説明します。

## dbt Gitリポジトリの各種操作

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/dbt-git-repository-2024-08-29-3-25-0.png){height="" width="500"}


### 新規追加

1. dbt Gitリポジトリ一覧画面にて、**新規追加**をクリックします。
2. dbt Gitリポジトリの新規作成画面にて、各項目を入力・選択し、**保存**をクリックします。
  :::(Warning) (IPアドレスの許可依頼)

  GitHub Enterpriseなどを用いて、Gitサーバーに対して特定のIPアドレス以外からのアクセスを拒否している場合は、TROCCOが通信に利用するIPアドレスに対してアクセスを許可してください。
[セキュリティグループやファイアウォール等で許可頂く必要があるIPアドレス](/docs/global-ip-list)
  :::
3. Deploy KeyをGitサーバーに登録します。
  :::(Info) (GitHubをお使いの場合)

  以下のURLからDeploy Keyを登録できます。
  `https://github.com/<GitHubユーザー名>/<リポジトリ名>/settings/keys`
  :::

### 編集

1. dbt Gitリポジトリ一覧画面にて、編集したいdbt Gitリポジトリをクリックします。
2. dbt Gitリポジトリ編集画面にて、設定を編集し、**保存**をクリックします。

### 削除

1. dbt Gitリポジトリ一覧画面にて、削除したいdbt Gitリポジトリをクリックします。
2. dbt Gitリポジトリ編集画面にて、赤枠内のアイコンをクリックし、**削除**をクリックします。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/dbt-git-repository-2024-08-29-3-25-1.png){height="" width="500"}

## dbt Gitリポジトリの各種設定

| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| リポジトリURL | Yes | 対象となるリポジトリのURLを入力します。<br>GitSSH形式での入力にのみ対応しています。|
| ブランチ名 | Yes | 対象となるブランチ名を入力します。|
| サブディレクトリ | No | Gitリポジトリ内のサブディレクトリをプロジェクトディレクトリとして指定できます。<br>`dbt_project.yml`がルートディレクトリ直下にないようなケースに入力してください。<br>なお、リポジトリのルートディレクトリをプロジェクトディレクトリとして指定する場合は、何も入力しないでください。 |
| dbt バージョン | Yes | 利用するdbt Coreのバージョンを選択できます。 |

### ロール・パーミッション
:::(Info) (チーム機能をご利用の場合)

dbt Gitリポジトリは、TROCCOにおいて**リソース**として扱われます。
* リソースの定義：[チーム機能について](/docs/about-team)を参照ください。
* リソースに対する操作権限：[リソースグループ](/docs/resource-group)を参照ください。
:::

| 操作＼ロール | リソースグループ管理者 | リソースグループ編集者 | リソースグループ運用者 | リソースグループ閲覧者 | ロール無し | 補足 |
| --- | --- | --- | --- | --- | --- | --- |
| dbt Gitリポジトリの編集 | ✓ | ✓ | - | - | - | |
| dbt Gitリポジトリの削除 | ✓ | ✓ | - | - | - | |
| dbt Gitリポジトリの運用 | ✓ | ✓ | ✓ | - | - | dbtジョブ設定に利用できます。 |
| dbt Gitリポジトリの新規追加 | ✓ | ✓ | ✓ | ✓ | ✓ | |
