---
articleId: 7765bcbe-1c12-43bc-835e-4e7f6f70e996
slug: string-conversion
title: 文字列変換機能について
parentCategoryId: 174cb02c-5c50-4a3e-9be5-14449bc7837b
languageCode: ja
---
## ご利用方法
転送設定の**STEP.2 プレビュー・詳細設定**内のデータ設定にて、設定することで利用できます。
設定後に**保存してプレビュー**を行うと、プレビュー画面にて適用後の列データが確認できます。

### 変換仕様
String型にのみ適用できます。
また、1つの列に対して、複数の置換設定を適用できます。
変換方法として、以下をサポートしています。
* 正規化（全角英数→半角、半角カナ→全角、など）
 
### 正規化（全角英数→半角、半角カナ→全角、など）
変換方式にはNFKCを利用しています。
* 参考：[https://www.unicode.org/reports/tr15/](https://www.unicode.org/reports/tr15/)

<!-- textlint-disable -->

半角仮名→全角仮名
全角英数字→半角英数字
半角形・全角形の特殊文字（一例）
半角→全角
句点（｡→。）
読点（､→、）
全角→半角
ドル（＄→$）
円（￥→¥）
マイナス（−→-）

<!-- textlint-enable -->

詳細や、その他の変換などについては[こちら](http://nomenclator.la.coocan.jp/unicode/normalization.htm)をご覧ください。