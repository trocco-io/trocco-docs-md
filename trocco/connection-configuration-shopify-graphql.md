---
articleId: 4964e1cf-84b2-46c2-b73d-3b54678ce8c1
slug: connection-configuration-shopify-graphql
title: 接続情報 - Shopify
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
本ページでは、Shopifyに接続するための設定（接続情報）について説明します。
転送に関する設定については、[転送元 - Shopify](/docs/data-source-shopify-graphql)を参照ください。

## Shopify側で必要な作業

TROCCOからShopifyのデータを取得するには、Shopify側でカスタムアプリを作成し、APIアクセストークンを取得する必要があります。

カスタムアプリの作成方法は以下の2種類があります。

| 作成方法 | 概要 | 推奨 |
|---------|------|------|
| [Dev Dashboard経由で作成](/docs/connection-configuration-shopify-graphql#dev-dashboardでカスタムアプリを作成する) | Shopify Dev Dashboardからアプリを作成する方法 | ✓ |
| [Shopify管理画面で作成](/docs/connection-configuration-shopify-graphql#shopify管理画面でカスタムアプリを作成する) | Shopify管理画面から直接アプリを作成する方法（レガシー） | - |

:::(Warning) (Shopify管理画面でのカスタムアプリ作成の廃止について)

2026年1月1日以降、Shopify管理画面から新規でカスタムアプリを作成できなくなります。
新規でカスタムアプリを作成する場合は、Dev Dashboard経由での作成を推奨します。
既存のカスタムアプリは引き続き利用できます。
詳しくは[Shopify Changelog - Legacy custom apps can't be created after January 1, 2026](https://changelog.shopify.com/posts/legacy-custom-apps-can-t-be-created-after-january-1-2026)を参照ください。
:::

### Dev Dashboardでアプリを作成する

Dev Dashboardを使用してカスタムアプリを作成し、認証情報を取得する手順を説明します。

#### 1. Dev Dashboardにアクセスする

[Shopify Dev Dashboard](https://dev.shopify.com/dashboard)にアクセスします。

#### 2. アプリを作成する

1. 左パネルの**Apps**を選択し、**Create app**をクリックします。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-12-15-16-30-1.png){width="50%"}

2. **Start from Dev Dashboard** にアプリ名を入力し、**Create**をクリックします。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-12-15-16-30-2.png){width="50%"}

#### 3. アプリの詳細を設定する

1. 作成直後の画面の**URLs**セクション > **App URL**にTROCCOのShopify接続情報一覧ページのURL(`https://trocco.io/connections?connection_type=shopify_graphql`) を設定し、**Embed app in Shopify admin** のチェックを外します。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-12-15-16-30-3.png){width="50%"}

2. **Access** セクションで、必要なAPIスコープを選択します。
  ターゲットごとに必要となるスコープは、[スコープの付与](/docs/connection-configuration-shopify-graphql#スコープの付与)を参照ください。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-12-15-16-30-4.png){width="50%"}

3. **Release** をクリックしてバージョンをリリースします。

**Version name**および**Version message**は任意入力です。

#### 4. 認証情報を取得する

1. リリース後、左パネルの**Settings**をクリックし、**Credentials**セクションの**Client ID**と**Secret**をメモします。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-12-15-16-30-5.png){width="50%"}

:::(Warning) (Client secretの取り扱い)

Client secretは機密情報です。安全な場所に保管し、第三者に公開しないでください。
:::

### Shopify Partnerでアプリの設定をする

:::(Warning) (Shopify Partnerアカウントについて)

Shopifyのアカウントやストアとは別にShopify Partner Program(無料)への登録が必要になります。
本来Shopifyのストア構築支援などで利用するプラットフォームですが、カスタムアプリのAPIアクセス設定のために必要となります。
:::

#### 1. 配布方法を選択する

Dev Dashboardの**Settings**にある**Storefront API**からリンクを開くと、Shopify Partner上のアプリ設定に遷移しますので、そちらで設定を続行します。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-12-15-16-30-6.png){width="50%"}

1. 左パネルの**配布**から**カスタム配布**を選択し、**選択**をクリックします。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-12-15-16-30-7.png){width="50%"}

:::(Info) (カスタム配布について)

カスタム配布を選択することで、顧客情報へのアクセスが自動承認されます。
詳細は[Work with protected customer data](https://shopify.dev/docs/apps/launch/protected-customer-data) をご参照ください。
:::

2. 確認ダイアログが出てきますので、**カスタム配布を選択**をクリックします。

3. 選択後のページにて、インストール先となるストアドメインを入力、必要に応じて**1つのPlus組織に対して複数のストアのインストール**にチェックを入れ、**リンクを生成**をクリックします。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-12-15-16-30-8.png){width="50%"}

4. 生成されたインストールリンクをメモします。

APIアクセスのリクエスト後、ストアにアプリをインストールする際にクリックして利用します。

#### 2. APIアクセスをリクエストする

商品情報や60日以上前の注文データを取得するには、Shopify Partnerで追加のAPIアクセスをリクエストする必要があります。

| リクエスト項目 | 説明 | 対象となるターゲット |
|---------------|------|---------------------|
| Storefront API | 商品情報を含むストアフロント向けのデータアクセス | `products` など商品情報を含むターゲット |
| すべての注文範囲を読み込む | 60日以上前の注文データへのアクセス権限 | `orders`、`order_line_items`など注文関連のターゲット |

配布方法選択後、左パネルの**APIアクセス要求**から設定します。

1. **Storefront APIを有効にする** をクリックします。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-12-15-16-30-9.png){width="50%"}

2. **すべての注文範囲を読み込む** セクションの**アクセス権をリクエスト**をクリックします。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-12-15-16-30-10.png){width="50%"}

3. **アプリが60日より前の注文にアクセスする必要があるのはなぜですか？** の項目に理由を入力し、**アクセス権をリクエスト**をクリックします。

自動承認されますので、「分析にて長期間の注文データを必要とします」のような理由で十分です。

![](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-12-15-16-30-11.png){width="50%"}

### アプリをストアにインストールする

1. メモしたインストールリンクを開き、インストール対象のストアを選択します。

2. アプリ作成時に設定したTROCCOの接続情報ページが表示されたら完了です。

### Shopify管理画面でカスタムアプリを作成する

:::(Warning) (レガシー方式)

本手順は2026年1月1日以降、新規アプリの作成に使用できなくなります。
新規でカスタムアプリを作成する場合は、[Dev Dashboard経由でカスタムアプリを作成](/docs/connection-configuration-shopify-graphql#dev-dashboard経由でカスタムアプリを作成する)を推奨します。
:::

Shopify管理画面を使用してカスタムアプリを作成し、アクセストークンを取得する手順を説明します。

1. [Shopifyの管理画面](https://admin.shopify.com/)にログインします。

2. **アプリ** > **アプリと販売チャネルの設定**をクリックします。
  ![connection-configuration-shopify-graphql-2025-05-16-16-30-1.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-05-16-16-30-1.png){width="50%"}

3. **アプリを開発**をクリックします。
  なお、本画面上に**ドメイン名**が表示されているので、メモしてください。
  ドメイン名は接続情報を作成する際に必要となります。
  ![connection-configuration-shopify-graphql-2025-05-16-16-30-2.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-05-16-16-30-2.png){width="50%"}

:::(Info) (「アプリを開発」ボタンが表示されない場合)

アプリを開発する権限を持っていない場合、ボタンが表示されません。
アプリ開発の権限を持っているユーザーアカウントを利用するか、Shopifyアカウントを管理するユーザーに権限の付与を依頼してください。
アプリ開発の権限について、詳しくは[Shopify公式ドキュメント - カスタムアプリのAPIスコープ権限](https://help.shopify.com/manual/apps/app-types/custom-apps#api-scope-permissions-for-custom-apps)を参照ください。
:::

4. **アプリを作成**をクリックし、アプリを作成します。
  ![connection-configuration-shopify-graphql-2025-05-16-16-30-3.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-05-16-16-30-3.png){width="50%"}

5. **Admin APIスコープを設定する**をクリックし、必要となるスコープを追加して保存します。
  ターゲットごとに必要となるスコープは異なります。詳しくは、[スコープの付与](/docs/connection-configuration-shopify-graphql#スコープの付与)を参照ください。

6. **アプリをインストール**をクリックし、アプリをインストールします。
  ![connection-configuration-shopify-graphql-2025-05-16-16-30-4.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-05-16-16-30-4.png){width="50%"}

7. **Admin APIのアクセストークン**をメモします。
  ![connection-configuration-shopify-graphql-2025-05-16-16-30-5.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-shopify-graphql-2025-05-16-16-30-5.png){width="50%"}

### スコープの付与

ターゲットごとに必要となるスコープは異なります。

|取得対象|必要となるスコープ|補足|
|---|---|---|
|`abandoned_checkouts`|`read_orders`||
|`collections`|`read_products`, `read_publications`, `read_product_listings`||
|`customers`|`read_customers`, `read_orders`||
|`disputes`|`read_shopify_payments_disputes`||
|`draft_orders`|`read_draft_orders`, `read_payment_terms`, `read_customers`, `read_orders`||
|`fulfillment_line_items`|`read_orders`||
|`fulfillment_orders`|`read_assigned_fulfillment_orders`||
|`fulfillments`|`read_orders`||
|`inventory_item_country_harmonized_system_codes`|`read_inventory`||
|`inventory_items`|`read_inventory`, `read_products`||
|`locations`|`read_locations`||
|`metafields`|`read_orders`, `read_products`, `read_customers`||
|`order_agreements`|`read_orders`||
|`order_line_items`|`read_orders`, `read_products`||
|`order_refunds`|`read_orders`||
|`order_risks`|`read_orders`||
|`order_transactions`|`read_orders`||
|`orders`|`read_orders`, `read_customers`, `read_locations`, `read_marketing_events`, `read_payment_terms`, `read_shopify_payments_accounts`|`StaffMember`の`id`を取得データに含める場合は、以下の条件を両方満たす必要があります。<ul><li>`read_users`スコープの付与</li><li>Advancedプラン以上の契約</li></ul>|
|`product_variants`|`read_products`, `read_shipping`, `read_locations`||
|`products`|`read_products`, `read_publications`, `read_product_listings`||
|`refund_line_items`|`read_orders`||

#### すべてのスコープ

すべてのスコープを付与したい場合は、下記からコピーしてご利用ください。

```
read_assigned_fulfillment_orders,read_customers,read_draft_orders,read_inventory,read_locations,read_orders,read_marketing_events,read_payment_terms,read_product_listings,read_products,read_publications,read_shipping,read_shopify_payments_accounts,read_shopify_payments_disputes
```

## TROCCO側の設定項目

| 項目名 | 必須 | 内容 |
|--------|------|------|
| 名前 | ✓ | TROCCO内部で利用する接続情報の名前を入力します。 |
| メモ | - | TROCCO内部で利用する接続情報のメモを入力できます。 |
| ドメイン | ✓ | Shopifyのドメイン名を入力します。 |
| 認証タイプ | ✓ | 認証タイプを選択します。<ul><li>**OAuth 2.0 Client Credentials**：Dev Dashboard経由で作成したカスタムアプリを使用する場合に選択します。</li><li>**Admin API アクセストークン**：Shopify管理画面で作成したカスタムアプリを使用する場合に選択します。</li></ul> |
| クライアント ID | ✓ | 認証方式に**OAuth 2.0 Client Credentials**を選択した場合に表示されます。Dev Dashboardで取得したClient IDを入力します。 |
| クライアントシークレット | ✓ | 認証方式に**OAuth 2.0 Client Credentials**を選択した場合に表示されます。Dev Dashboardで取得したClient secretを入力します。 |
| アクセストークン | ✓ | 認証方式に**Admin API アクセストークン**を選択した場合に表示されます。Shopify管理画面で取得したAdmin APIのアクセストークンを入力します。 |
