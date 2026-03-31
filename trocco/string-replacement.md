---
articleId: c87b7034-334f-4d9a-b2c4-c35f1f4af5c2
slug: string-replacement
title: 文字列正規表現置換について
parentCategoryId: 174cb02c-5c50-4a3e-9be5-14449bc7837b
languageCode: ja
---
## 概要
転送時に、列内の文字列の一部を、別の文字列に置換する機能です。

## ご利用方法
転送設定の**STEP.2 プレビュー・詳細設定**内のデータ設定にて設定することで利用できます。
設定後に**保存してプレビュー**を行うと、プレビュー画面にて適用後の列データが確認できます。

## 仕様
* 1つの列に対して、複数の置換設定を適用できます。
* [公式ドキュメント](https://github.com/cesare/embulk-filter-gsub)をご参照ください。
* 正規表現には[Javaの正規表現記法](https://docs.oracle.com/javase/jp/8/docs/api/java/util/regex/Pattern.html)が使用できます。

## 参照
[https://github.com/cesare/embulk-filter-gsub](https://github.com/cesare/embulk-filter-gsub)