---
articleId: c46ade97-d256-4154-aed2-dfe08f87c480
slug: release-note-2024-06
title: リリースノート-2024年06月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2024年06月のリリース情報をお届けします**

## お知らせ

### 同時実行数上限によるジョブ実行の制限

TROCCOでは、アカウント内で同時に実行できるジョブの数に制限があります。
2024年04月の料金プラン変更を受けて、**データマートジョブ**も本制限の対象となりました。
本制限について、詳しくは[ジョブの同時実行数上限](/docs/pricing-information#ジョブの同時実行数上限)を参照ください。

### Freeプランにおけるジョブ実行の制限

Freeプランをお使いの場合、月間の累積処理時間が処理時間枠を超過した時点で、ジョブ実行できなくなりました。
累積処理時間は翌月初日の0時（UTC+9）になると0時間に戻ります。実行されなかったジョブがあった場合、翌月になってから再実行してください。
本制限について、詳しくは[処理時間が処理時間枠を超過した場合](/docs/pricing-information#処理時間が処理時間枠を超過した場合)を参照ください。

## 転送設定

### 転送先Databricks

転送先Databricksを新たに追加しました。
詳しくは、[転送先 - Databricks](/docs/data-destination-databricks)を参照ください。

### 転送先kintone

`update`/`upsert`におけるアップデートキーに[レコードID](https://jp.cybozu.help/k/ja/id/040536.html)を指定できるようになりました。
レコードIDを指定したい場合、アップデートキーに`$id`と入力してください。

## dbt連携

### dbtバージョン1.7および1.8に対応

dbt Core v1.7およびdbt Core v1.8を指定できるようになりました。
dbtバージョンは、[dbt Gitリポジトリ](/docs/dbt-git-repository)より選択できます。

## コネクタAPIアップデート

### 転送先Google Ads コンバージョン

**拡張コンバージョン**に関して、転送時に使用するGoogle Ads APIのバージョンを、v14.1から**v16**へアップデートしました。

新バージョンについて、[Google Ads API](https://developers.google.com/google-ads/api/docs/release-notes#v16)のドキュメントを参照ください。

### 転送元Criteo

APIバージョンが、**v2024.04**にアップデートされました。

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**

