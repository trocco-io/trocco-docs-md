---
articleId: 6510b419-ec7b-499f-bf91-3c2c0ad6799c
slug: release-note-2023-03
title: リリースノート-2023年03月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2023年03月のリリース情報をお届けします**

---

## 転送設定

### 転送先LINE Conversion APIが新たに追加 🎉

- 転送先LINE Conversion APIが新たに追加されました。
  - LINE Conversion APIを経由して、LINEサーバーにデータを転送できます。
  - 転送設定作成時に、TROCCO上でカラム名や型をマッピングしていただく必要があります。
  詳しくは[転送先 - LINE Conversion API](/docs/data-destination-line-ads-conversion-api)を参照ください。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-03-2024-08-29-1-2-0.png)

### 転送元Google Search Consoleにて、フィルタリング機能が強化 🎉

- 取得するデータを**ディメンションフィルター**でフィルタリングできるようになりました。
  - 転送設定STEP1の**詳細を設定する**をクリックすると、ディメンションフィルターが表示されます。
  - 現在は**page**項目にのみ、対応しています。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-03-2024-08-29-1-2-1.png)

## ワークフロー定義

### Snowflakeのクエリ結果でループ実行できるように 🎉

- [カスタム変数ループ実行](/docs/loop-using-custom-variables)が、Snowflakeのクエリに対応しました。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-03-2024-08-29-1-2-2.png)
  - ループ実行におけるカスタム変数の展開値を、Snowflakeのクエリ結果に基づいて設定できます。
  - 展開したいテーブルの値をSnowflakeのテーブルに格納しておくことで、実行のたびに展開値が変動するようなワークフローを定義できます。

## UI・UX

### TROCCOホーム画面のUI改善

#### ダッシュボード拡充
- ダッシュボードにて、**ワークフロー定義**が表示されるようになりました。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-03-2024-08-29-1-2-3.png)

#### コネクタ利用状況の可視化
- **コネクタ利用状況**が表示されるようになりました。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-03-2024-08-29-1-2-4.png)

:::(Info) (「利用中のコネクタ」の定義)

- **転送設定を1つでも作成しているコネクタ**を、利用中のコネクタとしてカウントします。
  - このとき、ジョブが一度も実行されていない転送設定であっても、利用中のコネクタとしてカウントされます。
- 利用中のコネクタの総数は、「**利用中の転送元コネクタ数＋利用中の転送先コネクタ数**」で表されます。
  - 転送元コネクタと転送先コネクタは、それぞれ別々にカウントされます。
  - 仮にMySQLを転送元・転送先の両方で利用した場合は、利用中のコネクタの総数は**2**となります。
  
:::

#### コネクタ一覧の視認性向上
- 対応サービス一覧における各コネクタのデザインを刷新しました。
  - 転送設定作成時のサービス選択画面も同様にデザインを変更しています。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-03-2024-08-29-1-2-5.png)

## データカタログ

### おしらせ

#### チーム機能利用時のメタデータ取得ロジックについて

- **データソースに関するメタデータ**（例：MySQLに関するメタデータ）は、データカタログ管理者が利用できるTROCCO上の接続情報を利用しデータソースに接続することで、取得されます。
- チーム機能を合わせてご利用の場合は、データカタログ管理者が**運用者ロール以上**の権限を持つ接続情報のみが利用されます。

本件について、詳しくは[データカタログについて](/docs/about-data-catalog-v1)を参照ください。

## コネクタAPIアップデート

#### 転送先Facebook コンバージョンAPI

- 上記転送先に利用しているFacebook APIが、v14から**v15**へアップデートされました。
- 新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version15.0)のドキュメントを参照ください。

#### 転送元Shopify

- 上記コネクタに利用しているShopify APIが、**2023-01**へアップデートされました。
- 新バージョンについて、[Shopify developer documentation](https://shopify.dev/docs/api/release-notes/2023-01)のドキュメントを参照ください。

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
