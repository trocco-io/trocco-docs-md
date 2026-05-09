---
articleId: ddbb909d-b48b-428b-91cc-e10765604ce4
slug: terraform-provider-for-trocco
title: Terraform Provider for TROCCO
parentCategoryId: 62664a7b-6dd6-4a98-8d38-784fe0c12e08
languageCode: ja
---
## 概要

[Terraform Provider for TROCCO](https://registry.terraform.io/providers/trocco-io/trocco/latest)は、TROCCOの各種リソースをTerraformでコード管理するためのプロバイダーです。
Infrastructure as Code（IaC）の手法により、TROCCOの設定をコードベースで運用・管理できます。

Terraform Provider for TROCCOのソースコードは、[GitHub](https://github.com/trocco-io/terraform-provider-trocco)で公開されています。

:::(Warning) (プラン上の制約)

Terraform Provider for TROCCOは、TROCCO APIを利用して動作します。
そのため、TROCCO APIが利用可能なプランのご契約が必要です。
:::

:::(Warning) (対応リソースやコネクタ種別)

対応リソースやコネクタ種別は、TROCCOの全機能をカバーしているわけではありません。最新の対応状況は[Terraform Registry - trocco Provider](https://registry.terraform.io/providers/trocco-io/trocco/latest/docs)を参照ください。
もし現在非対応のリソースやコネクター種別への対応を希望される場合は、[ヘルプセンターの要望フォーム](https://help.trocco.io/hc/ja/requests/new?ticket_form_id=4799819718942)よりご要望をお寄せください。

:::

## ユースケース

Terraform Provider for TROCCOのユースケースをご紹介します。

- 開発環境で作成した転送設定やデータマート定義をコード化し、ステージング環境や本番環境向けの設定を接続情報やカスタム変数を切り替えながら作成できます
- Terraformの`.tf`ファイルをGitリポジトリで管理し、PRベースのレビューやCI/CDによる自動適用を実現できます
- 過去のプロジェクトで作成した転送設定やデータマートの一部分だけを流用し、新規PJ向けの設定として作成できます

:::(Info) (GUIベースでの環境管理)

Terraformを利用した環境管理には、Terraformやコードベースの運用に関する知識が必要です。
GUIベースで環境ごとの設定管理を行いたい場合は、[環境管理機能](/docs/environment-management)もあわせてご検討ください。
:::

## 推奨する使用方法

TROCCOは設定項目が多いため、すべての設定をはじめから`.tf`ファイルに手書きすることは推奨しません。
まずTROCCOのGUIで設定を作成し、`terraform import`でTerraformの管理下に取り込む方法が効率的です。

### Terraform管理するリソースの見極め

TROCCOはGUIで手軽に設定を作成できることがメリットのひとつです。
すべてのリソースをTerraformで管理しようとするのではなく、厳格に管理したいリソースを見定めて管理スコープを決めることが重要です。
組織内で「どのリソースをTerraform管理下に置くか」の運用ルールを策定することを推奨します。

以下に、Terraform管理に移行するリソースを選定する際の指針を示します。

1. まずはチームや[リソースグループ](/docs/resource-group)など、権限管理に関わるリソースから始めます。HCLの記述量が比較的少なく、Terraform自体の習熟にも適しています
2. 接続情報など、センシティブな情報を扱うリソースを管理下に置きます。変更頻度が低く、厳格な管理が求められるため、Terraform管理との相性がよいです
3. そのうえで、ミッションクリティカルな転送設定やデータマート定義、ワークフロー定義から徐々に移行していきます

エンジニア以外のビジネスメンバーがGUIから直接作成・運用するような転送設定まで、すべてTerraform管理にする必要はありません。
TROCCOのGUIによる手軽さを活かしつつ、厳格に管理すべき部分にTerraformを適用するのが効果的です。

### 立ち上げ時

1. TROCCOのGUIで開発環境向けの転送設定やデータマート定義を作成します
2. `terraform import`で既存の設定をTerraformの管理下に取り込みます
3. 取り込んだ設定をベースに、接続情報やカスタム変数を切り替えたステージング環境・本番環境向けの設定を`.tf`ファイルで定義します
4. `.tf`ファイルをGitリポジトリで管理し、PRベースのレビューやCI/CDを通じて各環境に適用します

:::(Info) (terraform importで.tfファイルも自動生成できます)

`terraform plan -generate-config-out=generated.tf`を使用すると、importブロックに基づいて`.tf`ファイルを自動生成できます。
TROCCOの転送設定のように設定項目が多いリソースでは、`.tf`ファイルをはじめから手書きする手間を大幅に削減できます。
詳しくは[Terraform公式ドキュメント - Generating Configuration](https://developer.hashicorp.com/terraform/language/import/generating-configuration)を参照ください。
:::

### 運用時

- Terraform管理下の転送設定やデータマート定義、ワークフロー定義に[リソースグループ](/docs/resource-group)やラベルを設定します
  - たとえば本番環境用の設定はリソースグループで管理者以外が編集できないようにします
  - Terraform管理しているリソースにはそれとわかる専用のラベルを付与し、UI上で見分けをつけやすくします（例：`Terraform Managed`）
- GitHub ActionsなどのCI/CDツールで定期的に`terraform plan`を実行し、GUI上での手動変更を検知する運用も有用です

## Providerのセットアップ

以下のコードを`.tf`ファイルに記述して、Terraform Provider for TROCCOを利用できます。

```hcl
terraform {
  required_providers {
    trocco = {
      source = "registry.terraform.io/trocco-io/trocco"
    }
  }
}

provider "trocco" {
  api_key = var.trocco_api_key
  region  = "japan"
}

variable "trocco_api_key" {
  type      = string
  sensitive = true
}
```

### 認証

TROCCO APIキーを使用して認証します。
APIキーは以下のいずれかの方法で設定できます。

- `provider`ブロックの`api_key`パラメータに指定する
- 環境変数`TROCCO_API_KEY`に設定する

### リージョン

`region`パラメータには、ご利用のTROCCO環境に対応するリージョンを指定します。
リージョンは以下のいずれかの方法で設定できます。

- `provider`ブロックの`region`パラメータに指定する
- 環境変数`TROCCO_REGION`に設定する

指定可能なリージョンは以下のとおりです。

- `japan`

## 対応リソース

Terraform Provider for TROCCOでは、以下のTROCCOリソースを管理できます。

| リソース名 | 説明 |
| --- | --- |
| `trocco_connection` | 接続情報 |
| `trocco_job_definition` | 転送設定 |
| `trocco_bigquery_datamart_definition` | BigQueryデータマート定義 |
| `trocco_pipeline_definition` | ワークフロー定義 |
| `trocco_label` | ラベル |
| `trocco_notification_destination` | 通知先 |
| `trocco_resource_group` | リソースグループ |
| `trocco_team` | チーム |
| `trocco_user` | ユーザー |

各リソースの詳細な設定方法やパラメータについては、[Terraform Registry - trocco Provider](https://registry.terraform.io/providers/trocco-io/trocco/latest/docs)を参照ください。

## コードサンプル

### 転送設定（MySQL to BigQuery）

以下は、MySQLからBigQueryへの転送設定の最小構成例です。

```hcl
resource "trocco_job_definition" "mysql_to_bigquery" {
  name                     = "mysql_to_bigquery_example"
  is_runnable_concurrently = false
  retry_limit              = 0

  input_option_type = "mysql"
  input_option = {
    mysql_input_option = {
      mysql_connection_id = 1
      database            = "example_database"
      query               = "SELECT id, name, created_at FROM example_table"
      fetch_rows          = 10000
      connect_timeout     = 300
      socket_timeout      = 1800
      input_option_columns = [
        { name = "id",         type = "long" },
        { name = "name",       type = "string" },
        { name = "created_at", type = "timestamp" },
      ]
    }
  }

  output_option_type = "bigquery"
  output_option = {
    bigquery_output_option = {
      bigquery_connection_id = 1
      dataset                = "example_dataset"
      table                  = "example_table"
      location               = "US"
      mode                   = "append"
    }
  }

  filter_columns = [
    { name = "id",         src = "id",         type = "long" },
    { name = "name",       src = "name",       type = "string" },
    { name = "created_at", src = "created_at", type = "timestamp" },
  ]
}
```

転送設定は設定項目が多いため、[推奨ワークフロー](/docs/terraform-provider-for-trocco#推奨ワークフロー)のようにGUIで作成した設定を`terraform import`で取り込む方法も検討ください。
詳細なパラメータについては[Terraform Registry - trocco_job_definition](https://registry.terraform.io/providers/trocco-io/trocco/latest/docs/resources/job_definition)を参照ください。

### BigQueryデータマート定義

```hcl
resource "trocco_bigquery_datamart_definition" "example" {
  name                     = "example datamart"
  is_runnable_concurrently = false
  bigquery_connection_id   = 1
  query                    = "SELECT * FROM tables"
  query_mode               = "insert"
  destination_dataset      = "dist_datasets"
  destination_table        = "dist_tables"
  write_disposition        = "append"
}
```

詳細なパラメータについては[Terraform Registry - trocco_bigquery_datamart_definition](https://registry.terraform.io/providers/trocco-io/trocco/latest/docs/resources/bigquery_datamart_definition)を参照ください。

### ワークフロー定義

```hcl
resource "trocco_pipeline_definition" "example" {
  name = "example workflow"

  tasks = [
    {
      key  = "transfer_first"
      type = "trocco_transfer"
      trocco_transfer_config = {
        definition_id = 1
      }
    },
    {
      key  = "transfer_second"
      type = "trocco_transfer"
      trocco_transfer_config = {
        definition_id = 2
      }
    },
  ]

  task_dependencies = [
    {
      source      = "transfer_first"
      destination = "transfer_second"
    },
  ]
}
```

詳細なパラメータについては[Terraform Registry - trocco_pipeline_definition](https://registry.terraform.io/providers/trocco-io/trocco/latest/docs/resources/pipeline_definition)を参照ください。
