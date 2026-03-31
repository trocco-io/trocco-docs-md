---
articleId: 33fa02ff-6101-4047-a144-44e3557f4ef5
slug: release-note-2024-05
title: リリースノート-2024年05月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---
**2024年05月のリリース情報をお届けします**

---
## お知らせ

2024年5月9日に、ブランドリニューアルを発表しました。
ブランドリニューアルに伴い、プロダクトのロゴタイプを`trocco`から`TROCCO`へと変更し、またロゴの色調も変更しています。

![release-note-2024-05-2024-08-29-23-21-0](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/release-note-2024-05-2024-08-29-23-21-0.png)

新しいロゴの画像ファイルおよびロゴのガイドラインに関しては、[弊社ホームページ](https://primenumber.co.jp/presskit/)よりご確認いただけます。
また、ブランドリニューアルについては、[プレスリリース](https://prtimes.jp/main/html/rd/p/000000082.000039164.html)を参照ください。

## データマート定義

### データマートSnowflake

出力先テーブルの書き込み設定として、全件洗い替えモードを`TRUNCATE INSERT`と`REPLACE`の2種類から選択できるようになりました。

- `TRUNCATE INSERT`の場合、既存テーブルのスキーマは削除されません。
- `REPLACE`の場合、既存のテーブルのスキーマは削除されます。

両者の違いについて、詳しくは[データマート - Snowflake](/docs/datamart-snowflake)を参照ください。

## 接続情報

### Microsoft SQL Server接続情報にてSSH秘密鍵のパスフレーズを入力できるように

設定項目に**SSH秘密鍵のパスフレーズ**を追加しました。
これにより、Microsoft SQL Serverに対してパスフレーズ付きの秘密鍵で接続できるようになりました。

## コネクタAPIアップデート

### 転送元Google Ads・転送先Google Ads コンバージョン

転送時に使用するGoogle Ads APIのバージョンを、v14.1から**v16**へアップデートしました。
新バージョンについて、[Google Ads API](https://developers.google.com/google-ads/api/docs/release-notes#v16)のドキュメントを参照ください。

### 転送元Yahoo!検索広告・転送元Yahoo!ディスプレイ広告（運用型）

転送時に使用するYahoo!広告 APIのバージョンを、v11から**v12**へアップデートしました。
新バージョンについて、それぞれ以下のドキュメントを参照ください。

- [Yahoo!広告 API | 検索広告 API v12 リリースノート](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/ysa-v12.html)
- [Yahoo!広告 API | ディスプレイ広告 API v12 リリースノート](https://ads-developers.yahoo.co.jp/ja/ads-api/developers-guide/yda-v12.html)

---

**今回のリリース内容は以上です。**
**気になるリリースがございましたら、カスタマーサクセス担当者までお気軽にご連絡くださいませ。**
**Happy Data Engineering!**

