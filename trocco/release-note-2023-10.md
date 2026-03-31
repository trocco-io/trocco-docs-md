---
articleId: f82d158c-7eb7-4b60-a7ae-00fb6dbebd63
slug: release-note-2023-10
title: リリースノート-2023年10月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2023年10月のリリース情報をお届けします**

---
## アカウント・ユーザー

### ユーザーの削除機能を追加 🎉

TROCCOアカウントに登録されているユーザーを、TROCCO上から削除できるようになりました。
今後は弊社カスタマーサクセスにお問い合わせいただくことなく、ユーザーを削除できます。
ユーザーの削除に必要な権限など、詳しくは[ユーザーの削除](/docs/user-deletion)を参照ください。

### 接続情報の操作制限をユーザーごとに適用可能に 🎉

個々のユーザーに対して、接続情報の作成・編集・削除を禁止する設定が可能になりました。
接続情報を作成できるユーザーを限定することで、個人管理のストレージなどの、接続することを想定していないデータソースに対する接続を防止できます。
これにより、意図しないデータの流出リスクを抑えることができます。
詳しくは、[ユーザーの設定](/docs/user-settings#禁止する機能)を参照ください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-10-2024-08-29-23-38-0.png){height="" width="50%"}

### 組織IDをTROCCOの画面上で確認できるように 🎉

ログイン中ユーザーのポップアップメニューに、**組織ID**が表示されるようになりました。
**組織ID**は、ログイン時の入力必須項目です。
万一組織IDをお忘れの場合には、すでにログインしているユーザーに、上記メニューから組織IDを確認し通知いただくよう依頼してください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-10-2024-08-29-23-38-1.png){height="" width="50%"}

## UI・UX

### ドラッグアンドドロップによる転送設定のカラム並び替えに対応 🎉

転送設定STEP2のカラム定義にて、ドラッグアンドドロップ操作でカラムの並び替えができるようになりました。
直感的な操作で、カラムの順番を入れ替えることができます。

![image.gif](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-10-2024-08-29-23-38-2.gif){height="" width="50%"}

## マネージドデータ転送

### 転送先にSnowflakeを追加 🎉

マネージドデータ転送の転送先として、Snowflakeを選択できるようになりました。
転送元のデータソースを一括で取得してSnowflakeへ転送する転送設定を、一元作成・管理できます。
詳しくは、[マネージド転送設定](/docs/managed-etl-configurations#転送先snowflakeの場合)を参照ください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-10-2024-08-29-23-38-3.png){height="" width="50%"}

## 転送設定

### 転送元HTTP・HTTPSデータ取得時の正常系判定を拡張 🎉

転送設定STEP1の詳細設定にて、**転送データ取得時に正常系と判定するステータスコード**を指定できるようになりました。
詳しくは、[転送元 - HTTP・HTTPS](/docs/data-source-http#step1-詳細設定)を参照ください。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-10-2024-08-29-23-38-4.png){height="" width="50%"}

## TROCCO API

### TROCCO APIに転送ジョブ一覧取得エンドポイントを追加 🎉

TROCCO APIで転送ジョブ一覧を取得できるようになりました。
任意の転送設定を指定して、その転送設定を使用した転送ジョブ一覧を取得できます。
詳しくは、[転送ジョブ一覧取得](https://documents.trocco.io/apidocs/get-jobs)を参照ください。

## データマート定義

### データマートジョブ一覧の読み込み時間を高速化 🎉

データの読み込み処理を高速化し、データマートジョブ一覧が表示されるまでの時間が短縮されました。

### データマートジョブ一覧の絞り込み機能を拡充 🎉

従来のテキスト入力形式から、データマート定義名を選択する形式の絞り込みに変更しました。
これにより、データマートジョブ一覧の絞り込み条件に、データマート定義名を複数選択することが可能になりました。

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-10-2024-08-29-23-38-5.png){height="" width="50%"}

## dbt連携

### dbtジョブで使用するdbtバージョンを任意で指定できるように 🎉

これまでdbt Core v1.3が固定で使用されていたdbtバージョンを、任意で指定できるようになりました。
**dbt Gitリポジトリ**の新規作成・編集画面にて、下記のバージョンから選択できます。

- **dbt Core v1.6**
- **dbt Core v1.5**
- **dbt Core v1.4**
- **dbt Core v1.3**

![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2023-10-2024-08-29-23-38-6.png){height="" width="50%"}

## コネクタAPIアップデート

### 転送元Yahoo!検索広告

転送時に使用するYahoo!広告 APIのバージョンを、 v9から**v10**へアップデートしました。
新バージョンについては、[Yahoo!広告 API | Developer Center](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/support-guide/release-note/new-on-v10.html)を参照ください。

### 転送元Google Ad Manager

転送時に使用するGoogle Ad Manager APIのバージョンを、 v202211から**v202305**へアップデートしました。
新バージョンについては、[Google Ad Manager API](https://developers.google.com/ad-manager/api/rel_notes#v202305)を参照ください。

### 転送元Facebook Ad クリエイティブ・転送先Facebook オフラインコンバージョン

転送時に使用するFacebook APIのバージョンを、v16から**v17**へアップデートしました。
新バージョンについては、[Meta for Developers](https://developers.facebook.com/docs/graph-api/changelog/version17.0)を参照ください。

## その他

- Snowflake接続情報でJDBCドライバーのバージョン指定が可能に

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**
