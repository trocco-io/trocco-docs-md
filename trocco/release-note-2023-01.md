---
articleId: cc879af7-53e9-44ae-908c-049af65ccb9f
slug: release-note-2023-01
title: リリースノート-2023年01月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2023年01月のリリース情報をお届けします**

---

## データカタログ

### Snowflake版データカタログが公開 🎉

- Snowflake版のデータカタログ機能が公開されました。
  - Snowflakeアカウントに紐づくデータに対して、データカタログを作成できます。
  - Snowflake版データカタログが対応する機能について、詳しくは[各データストア対応機能一覧](/docs/datacatalog-supported-functions-list-v1)を参照ください。

  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-01-2024-08-29-16-9-0.png){height="" width="500"}

## ワークフロー定義

### ワークフロー定義の複製が可能に 🎉

- ワークフロー定義が、詳細画面右上より複製できるようになりました。
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-01-2024-08-29-16-9-1.png){height="" width="500"}

#### 複製機能の利用例

ワークフロー定義の複製はさまざまな用途にお使いいただけます。以下で、かんたんに運用例を紹介します。
  - **テスト環境の構築**
    - 本番運用しているワークフロー定義を複製し、一部分をテスト環境用に差し替えることで、素早くテスト環境を構築できます。
  - **テンプレートの運用**
    - あらかじめ、あるワークフロー定義をテンプレートとして用意します。テンプレートを複製することで、類似するワークフローを手軽に複数作成できます。
    - また、複製機能を使うことで**Google BigQueryデータチェック**も、かんたんに再利用できるようになりました。


## dbt連携

### 対応バージョンがv1.3にアップデート 🎉

- TROCCOが対応するdbtのバージョンが、v1.2から**v1.3**へアップデートされました。
  - 新バージョンについて、詳しくは[dbt-core v1.3.0](https://github.com/dbt-labs/dbt-core/releases/tag/v1.3.0)を参照ください。

## 接続情報

### PostgreSQL接続情報にて、JDBCドライバーのバージョンが選択可能に 🎉

- PostgreSQLサーバーに接続するJDBCドライバーのバージョンを選択できるようになりました。
  - ご利用のPostgreSQLのバージョンに合わせて、ドライバーのバージョンを選択してください。
    - PostgreSQL 8.2以上の場合：`JDBC Driver 42.5.1`
    - PostgreSQL 8.2未満の場合：`9.4 1205 JDBC 41`
  
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-01-2024-08-29-16-9-2.png){height="" width="500"}

## 転送設定

### 転送元Google Adsにて、取得できるリソースタイプが追加 🎉

- 取得できるリソースタイプ（レポート種別）として、以下が追加されました。
  - [ad_group_asset](https://developers.google.com/google-ads/api/fields/v11/ad_group_asset)
  - [customer_asset](https://developers.google.com/google-ads/api/fields/v11/customer_asset)
  
  ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-01-2024-08-29-16-9-3.png){height="" width="500"}

## コネクタAPIアップデート

#### 転送元Facebook Ad Insights・転送先Facebook オフラインコンバージョン

- 上記に利用しているFacebook APIが、v14から**v15**へアップデートされました。
  - 新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version15.0)のドキュメントを参照ください。

---

その他、以下のような改修などが加わっております。

- データカタログ - テーブル情報画面
  - テーブル情報画面に、カラム参照一覧へのリンクが追加されました。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-01-2024-08-29-16-9-4.png){height="" width="500"}
  - リンクをクリックすると、該当テーブル内に定義されているカラム参照の一覧が表示されます。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-01-2024-08-29-16-9-5.png){height="" width="500"}

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
