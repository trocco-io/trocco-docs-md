---
articleId: 136c4321-9013-430a-87f8-788b3db17d8b
slug: data-source-google-search-console
title: 転送元 - Google Search Console
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

Google Search Consoleで管理しているデータを転送する設定のDocsです。

## 制約

:::(Warning) (転送できるデータ)

データ転送時を起点に、**3日以上前のデータ**のみ転送できます。
:::

## 設定項目

### STEP1 基本設定

| 項目名 | 内容 |
| ----- | ----- |
| Google Search Console接続情報 | あらかじめ登録してある[Google Search Console接続情報](/docs/connection-configuration-google-search-console)から、今回の転送設定に必要な権限を持つものを選択します。 |
| サーチタイプ | 転送したいデータの種類を以下から選択します。<ul><li>`web`</li><li>`image`</li><li>`video`</li></ul> |
| サイトURL | データを取得したいGoogle Search Console上の**プロパティ**を入力します。<br>なお、プロパティタイプが**ドメイン**の場合、`sc-domain:`という接頭辞を付け加えて入力してください。<br>たとえば、`example.com`というプロパティの場合は、`sc-domain:example.com`と入力してください。 |
| データ取得期間 | 取得したいデータの開始期間と終了期間を「YYYY-MM-DD」形式で入力します。<br>なお、取得できるデータは、データ転送時を起点に**3日以上前のデータ**に限られます。 |
| ディメンション | クエリ結果をグループ化するための基準として、以下のディメンションを選択できます。<ul><li>`date`</li><li>`country`</li><li>`device`</li><li>`page`</li><li>`query`</li><li>`searchAppearance`</li></ul>詳しくは、[公式ドキュメント](https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query#request-body)を参照ください。 |

#### STEP1の詳細設定

**詳細を設定する**をクリックすると、設定項目が表示されます。

| 項目名 | 内容 |
| ----- | ----- |
| ディメンションフィルター | `page`ディメンションの内容を基準に、取得するデータをフィルタリングできます。<br>選択できる条件は以下のとおりです。<ul><li>次の文字列を含む</li><li>次の文字列と一致する</li><li>次の文字列を含まない</li><li>次の文字列と一致しない</li><li>正規表現にマッチする</li><li>正規表現にマッチしない</li></ul> |
