---
articleId: ef6d1e53-828c-4785-a92e-6aa1ded07f2c
slug: release-note-2024-11
title: リリースノート-2024年11月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2024年11月のリリース情報をお届けします**

## お知らせ

### Free・Starterプランにおけるユーザー数を制限

TROCCOでは、[料金プラン](https://primenumber.com/trocco/pricing)に応じて、TROCCOを利用できるユーザー数に上限を設けています。
2024年11月18日から、Free・Starterプランにおいて、アカウントに紐づくユーザー数がプランの上限に達した場合、TROCCOユーザーを招待できなくなりました。

:::(Warning) (ユーザー数の制限における注意点)

- Freeプランのアカウントに紐づくユーザーが2名以上の場合、2024年12月下旬に、[アカウント特権管理者](/docs/about-super-admin)権限を持たないユーザーの削除を予定しています。
上記に該当する場合は、2024年12月16日までに次のいずれかの対応を実施してください。
  - アカウント特権管理者以外のユーザーをすべて削除してください。ユーザーの削除方法については、[ユーザーの削除](/docs/user-deletion)を参照ください。
  - 有償プランへのアップグレードをご検討ください。料金プランについては、[料金プラン](https://primenumber.com/trocco/pricing)および[ご契約プランに関する詳細情報](/docs/pricing-information)を参照ください。
- 契約プランをダウングレードする場合は、事前に不要なユーザーを削除し、移行先プランのユーザー数上限を超えないようにしてください。
:::

### Emailによる通知先の作成・変更時にメールアドレス認証を追加

Emailによる通知先設定において、メールアドレス認証を追加しました。
今後、通知先を作成・変更する際は、TROCCOから送付される確認メール内のリンクをクリックし、メールアドレス認証を受ける必要があります。
なお、すでに通知先として登録されているメールアドレスについては「認証済み」として扱うため、設定の変更は不要です。
手順や注意事項について、詳しくは[転送設定に関する便利な設定を行う - Emailの場合](/docs/trocco-tutorial-additional-settings#emailの場合)を参照ください。

![release-notes-2024-11-21-16-47-26](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-11-21-16-47-26.png){height="" width="50%"}

## その他

### リソースグループごとの処理時間が確認できるように

[チーム機能](/docs/about-team)をご利用の場合、リソースグループごとに、各ジョブの処理時間や合計処理時間を確認できるようになりました。
サイドバーの**処理時間**から確認できます。
これらのデータを活用することで、たとえば処理時間が多いリソースグループを特定して調整するなど、TROCCOの運用面における効率化・最適化を図ることができます。
なお、表示できるのは2024年11月初日以降のデータのみです。

![release-notes-2024-11-27-19-22-25](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-11-27-19-22-25.png){height="" width="50%"}

## 転送設定

### 転送元・転送先Snowflakeで接続確認できるように

転送元または転送先コネクタにSnowflakeを指定した際、転送設定STEP1でそれぞれ**接続を確認**できるようになりました。
STEP2に進む前に、入力した内容で問題なく疎通できるかを確認できます。

![release-notes-2024-11-07-15-37-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-notes-2024-11-07-15-37-0.png){height="" width="50%"}

## TROCCO API

### 接続情報APIを追加

TROCCO APIで接続情報に関する以下の操作ができるようになりました。
なお、対応サービスはGoogle BigQuery・Snowflakeのみとなります。

- [接続情報一覧取得](/trocco-api/apidocs/get-connection-configurations)
- [接続情報作成](/trocco-api/apidocs/post-connection-configuration)
- [接続情報取得](/trocco-api/apidocs/get-connection-configuration)
- [接続情報更新](/trocco-api/apidocs/patch-connection-configuration)
- [接続情報削除](/trocco-api/apidocs/delete-connection-configuration)

## コネクタAPIアップデート

### 転送元Google Ad Manager

転送時に使用するGoogle Ad Manager APIのバージョンを、 v202311から**v202408**へアップデートしました。
新バージョンについては、[Google Ad Manager API](https://developers.google.com/ad-manager/api/rel_notes#v202408)を参照ください。
