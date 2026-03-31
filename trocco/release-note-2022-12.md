---
articleId: 4f27f6d6-f762-4e4d-a47c-81e83736b558
slug: release-note-2022-12
title: リリースノート-2022年12月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2022年12月のリリース情報をお届けします**

---

## おしらせ

### 転送元LINE広告

:::(Info) (LINE広告APIを利用したデータ抽出)
先日、LINE株式会社よりAPIによる広告データの抽出方法が公開されました。
上記に伴い、TROCCOでは新たに、LINE広告APIを利用したコネクターの提供を別途開始しました。

詳細については、[転送元 - LINE広告](/docs/data-source-line-ad-api)を参照ください。
:::

## 転送設定

### 転送元AppsFlyer

#### 転送元AppsFlyerが新たに追加 🎉

- 各種ローデータレポートの転送に対応しています。
  - 取得可能なレポート種別、フィールド、各種制約など、詳しくは[転送元 - AppsFlyer](/docs/data-source-appsflyer)を参照ください。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-12-2024-08-29-7-3-0.png){height="" width="500"}

### 転送先HubSpot

#### コンタクトのサブスクリプションの更新に対応 🎉

- オブジェクトタイプに、`subscription`を選択できるようになりました。
  - サブスクリプション更新時に用いる転送データのスキーマについて、詳しくは[subscriptionオブジェクトを更新する場合](/docs/data-destination-hubspot#subscriptionオブジェクトを更新する場合)を参照ください。

![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-12-2024-08-29-7-3-1.png){height="" width="500"}

## 接続情報

### Amazon S3

#### IAMロール認証を用いたAmazon S3への接続に対応 🎉

- IAMロールによる認証に対応しました。
- これにより、TROCCO上にAWSキーを配置せずとも、Amazon S3に接続できるようになりました。
  - Amazon S3接続情報にて、AWS認証方式として**IAMロール**を選択できます。
  - IAMロールの発行手順など、詳しくは[S3の接続情報](/docs/connection-configuration-s3)を参照ください。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-12-2024-08-29-7-3-2.png){height="" width="500"}

## UI・UX

### 転送設定一覧

#### スケジュール設定の一括削除に対応 🎉

- 転送設定一覧画面にて、選択した転送設定に紐づくスケジュール設定を一括で削除できるようになりました。
  - 以下の手順で、スケジュール一括削除の設定画面を表示できます。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-12-2024-08-29-7-3-3.png){height="" width="500"}

### 通知設定

#### ジョブ実行がスキップされた際の通知に対応 🎉

- ジョブがスキップされた場合にも通知されるようになりました。
  - 転送ジョブ・シンクジョブ・ワークフロージョブのSlack/Email通知が対象です。
  - 以下は転送ジョブがスキップされた際のSlack通知の例です。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-12-2024-08-29-7-3-4.png){height="" width="500"}

### マネージド転送設定

#### ワークフローでの利用状況が可視化 🎉

- マネージド転送設定がどのワークフローで利用されているかを、詳細画面から確認できるようになりました。
  - マネージド転送設定の個々の転送設定の詳細画面にも表示されます。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-12-2024-08-29-7-3-5.png){height="" width="500"}

### ワークフロー定義

#### タスクの実行ログの切り替えが容易に 🎉

- ワークフロージョブ実行画面にて、ページ上部の各タスクをクリックすることで、ページ下部の実行ログの表示が切り替わるようになりました。
  - 複雑なワークフローや大規模なワークフロー、再実行が複数回行われたワークフロージョブにおいて、各タスクの実行ログを確認するのが容易になります。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-12-2024-08-29-7-3-6.png){height="" width="500"}

## コネクタAPIアップデート

#### 転送元Facebookリード広告・転送元Facebook Ad クリエイティブ

- 上記転送元に利用しているFacebook APIが、v14から**v15**へアップデートされました。
  - 新バージョンについて、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version15.0)のドキュメントを参照ください。

---

その他、以下のような改修などが加わっております。

- チーム機能 - リソースグループ詳細
  - リソースグループ詳細画面にて、**dbtジョブ設定**および**dbtリポジトリ**の表示に対応しました。
    ![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-12-2024-08-29-7-3-7.png){height="" width="500"}

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**

