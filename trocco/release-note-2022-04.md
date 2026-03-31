---
articleId: 863734d0-262a-411c-9503-158e25fb416c
slug: release-note-2022-04
title: リリースノート-2022年04月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2022年04月のリリース情報をお届けします**

* * * 

## データカタログ

### 依存関係一覧ページが追加
表示されている依存関係は「作成者」「テーブル名」などの情報でフィルタ・ソートできます。
![release-note-2022-04-2024-08-29-8-56-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-04-2024-08-29-8-56-0.jpg){height="" width=""}

また、ユーザーが定義した依存関係を削除する機能が実装されました。
一覧画面で削除したい依存関係のメニューボタンをクリックし、「この依存関係を削除」を選択することで削除ができます。

### クエリエディタ

#### クエリ保存機能が追加
クエリエディタで、クエリの保存および保存したクエリの読み込みができるようになりました。
よく使うクエリを使いまわしたり、複数のユーザー様でクエリを共有したい場合にご利用いただけます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-04-2024-08-29-8-56-1.png){height="" width=""}

#### 前回起動時に選択していたプロジェクトの再利用が可能に
主に利用しているプロジェクトを、クエリエディタ起動のたびに選択する必要がなくなりました。

### メタデータ検索機能

#### 検索結果画面が追加
検索時に「検索結果」画面に遷移し、詳細な情報の確認やフィルタ・ソートを行うことができるようになりました。
従来の検索機能に対し、以下の機能改善が入っております。
* 検索キーワードにヒットした箇所を太字でハイライト表示
* 関連度・テーブル作成日などでの結果ソート
* 検索結果をテーブル・カラム・プロジェクトなどでフィルタ可能
* 検索結果で表示されるテーブル・カラムの関連情報を拡充
* テーブル・カラム物理名の検索に対応
![release-note-2022-04-2024-08-29-8-56-2](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-04-2024-08-29-8-56-2.jpg){height="" width=""}

#### 登録したユーザー定義メタデータを画面上部検索バーより検索可能に
ユーザー定義メタデータに文字列型のフィールドがある場合、そのフィールド内の値を検索できるようになりました。

### PostgreSQLのメタデータ表示に対応
データカタログ機能でPostgreSQLのメタデータを参照できるようになりました。
転送元にPostgreSQL、転送先にGoogle BigQueryを指定した転送設定を作成している場合、テーブル情報・カラム情報に「PostgreSQLに関するメタデータ」のフィールドが表示されます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-04-2024-08-29-8-56-3.png){height="" width=""}

テーブル/カラムのメタデータに加えて、外部キー制約から依存関係も抽出できます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-04-2024-08-29-8-56-4.png){height="" width=""}

## 転送設定

### 転送元にZoho CRMが追加🎉
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-04-2024-08-29-8-56-5.png){height="" width=""}

Zoho CRM専用のSQLライクなクエリ（COQL）を用いてデータを抽出し転送が可能です。
ご利用にあたって必要な情報は以下をご覧ください。
* [接続情報](/v2/docs/connection-configuration-zoho-crm)
* [転送元](/v2/docs/data-source-zoho-crm)

### 転送元にRtoaster insight+ Googleアカウント連携が追加🎉
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-04-2024-08-29-8-56-6.png){height="" width=""}


* ユーザー定義テーブルに定義されているデータ
* Rtoasterテーブルに定義されているデータ

などの、Rtoaster Insight+で定義されているデータを抽出できます。
顧客分析やCRMとの連携などにご活用ください。

ご利用にあたって必要な情報は以下をご覧ください。
* [接続情報](/v2/docs/connection-configuration-rtoaster-insight-plus-with-google-account-authentification)
* [転送元](/v2/docs/data-source-rtoaster-insight-plus)

## UI・UX

### ワークフローのアイコンがリニューアル
`TROCCO転送設定` `TROCCOデータマート` `TROCCOワークフロー` 3つの アイコンが新しくなりました。
サイドメニューのシンボルに合わせて、それぞれ識別できるようになっております。
![release-note-2022-04-2024-08-29-8-56-7](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-04-2024-08-29-8-56-7.jpg){height="" width=""}

## その他

### トリガー機能が非推奨へ
転送設定やデータマート間の依存関係を定義できる[トリガー機能](/v2/docs/trigger-configuration)が非推奨となりました。
具体的な機能廃止日は未定となっております。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2022-04-2024-08-29-8-56-8.png){height="" width=""}

GUIで操作でき、より柔軟な依存関係を定義できる、ワークフロー機能への移行をお願いいたします。


* * * 

その他、以下のような改修などが加わっております。
* データカタログの「ユーザー定義メタデータ」を更新した際の、検索結果に反映されるまでのタイムラグが改善されました。
  * 従来はメタデータを更新してから検索に適用されるまで半日ほどのタイムラグがありましたが、即時に検索できるよう修正されています。
* 転送元S3で、解凍設定に「tar.gz」を追加しました。
  * また、解凍設定がtar.gzの場合、zipと同様に「解凍後の相対パス」を設定可能にしました。

* * * 
 

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**


