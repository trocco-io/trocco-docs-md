---
articleId: 491612df-2850-454a-826f-25dc47498073
slug: data-source-smaregi
title: 転送元 - スマレジ
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、スマレジからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - スマレジ](/docs/connection-configuration-smaregi)を参照ください。

## 利用上の注意・制約

### 認証について

スマレジAPIは、OAuth 2.0標準に準拠した認証方式を採用しています。
TROCCOでは、UserAccessToken（Authorization Code Flow）を使用してデータを取得します。

### API制限について

スマレジAPIには以下の制限があります。

#### ページネーション

1回のリクエストで取得できるデータ件数には上限があります。

- **最小件数**: 1件
- **最大件数**: 1,000件
- **デフォルト件数**: 100件

大量のデータを取得する場合は、自動的にページネーションが実行され、すべてのデータが取得されます。

#### レート制限

APIのレート制限については、スマレジの公式ドキュメントまたはサポートにてご確認ください。
大量のデータを頻繁に取得する場合は、制限に注意が必要です。

#### 契約IDについて

すべてのAPIエンドポイントで**契約ID**が必須です。
契約IDは、スマレジの契約単位で発行される識別子です。
取得方法については、スマレジの管理画面またはサポートにてご確認ください。

## 取得対象

### 部門一覧

スマレジに登録されている部門（カテゴリ）の一覧を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。<br>契約IDは、スマレジの管理画面またはサポートにて確認できます。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`categoryId`|`string`|部門ID|
|`categoryCode`|`string`|部門コード|
|`categoryName`|`string`|部門名|
|`categoryAbbr`|`string`|部門略称|
|`displaySequence`|`string`|表示順序|
|`displayFlag`|`string`|表示フラグ|
|`taxDivision`|`string`|税区分|
|`pointNotApplicable`|`string`|ポイント不適用フラグ|
|`taxFreeDivision`|`string`|免税区分|
|`reduceTaxId`|`string`|軽減税ID|
|`color`|`string`|色|
|`categoryGroupId`|`string`|部門グループID|
|`parentCategoryId`|`string`|親部門ID|
|`level`|`string`|レベル|
|`tag`|`string`|タグ|
|`insDateTime`|`timestamp`|作成日時|
|`updDateTime`|`timestamp`|更新日時|

### 精算一覧

指定した店舗と期間の精算情報一覧を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|
|**店舗ID**|✓|-|精算情報を取得する店舗のIDを入力します。|
|**精算日時(開始)**|✓|-|精算情報を取得する期間の開始日時を入力します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss±HH:MM`<br>※ 開始〜終了の期間は最大31日間です（1ヶ月ではありません）|
|**精算日時(終了)**|✓|-|精算情報を取得する期間の終了日時を入力します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss±HH:MM`<br>※ 開始〜終了の期間は最大31日間です（1ヶ月ではありません）|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`storeId`|`string`|店舗ID|
|`terminalId`|`string`|端末ID|
|`adjustmentDateTime`|`timestamp`|精算日時|
|`childTerminals`|`json`|子端末情報|
|`transactionCount`|`string`|取引件数|
|`preparationCash`|`string`|預金準備金|
|`cashSales`|`string`|現金売上|
|`creditSales`|`string`|クレジット売上|
|`otherSalesList`|`json`|その他売上リスト|
|`partPayment`|`string`|分割払い|
|`partPaymentCash`|`string`|分割払い(現金)|
|`partPaymentCredit`|`string`|分割払い(クレジット)|
|`receivedDeposit`|`string`|受取預金|
|`receivedDepositCash`|`string`|受取預金(現金)|
|`receivedDepositCredit`|`string`|受取預金(クレジット)|
|`partPaymentCancel`|`string`|分割払いキャンセル|
|`partPaymentCashCancel`|`string`|分割払いキャンセル(現金)|
|`partPaymentCreditCancel`|`string`|分割払いキャンセル(クレジット)|
|`tip`|`string`|チップ|
|`tipCash`|`string`|チップ(現金)|
|`tipCredit`|`string`|チップ(クレジット)|
|`deposit`|`string`|預金|
|`returnDeposit`|`string`|預金返金|
|`receipt`|`string`|レシート|
|`payment`|`string`|支払い|
|`nonSalesCashTotal`|`string`|非売上合計(現金)|
|`nonSalesCreditTotal`|`string`|非売上合計(クレジット)|
|`nonSalesOtherTotal`|`string`|非売上合計(その他)|
|`calculateBalance`|`string`|計算残高|
|`cashAdjustment`|`json`|現金調整|

### 日別予算

指定した店舗・年月の日別予算情報を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|
|**店舗ID**|✓|-|予算情報を取得する店舗のIDを入力します。|
|**年度**|✓|-|予算情報を取得する年度を入力します。<br>フォーマット: `YYYY`|
|**月**|✓|-|予算情報を取得する月を入力します。<br>フォーマット: `MM`（01-12）|
|**日**|-|-|特定の日の予算情報のみを取得する場合に入力します。<br>フォーマット: `DD`（01-31）|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`storeId`|`string`|店舗ID|
|`ym`|`string`|年月|
|`day`|`string`|日|
|`salesTargetDaily`|`string`|日次売上目標|
|`insDateTime`|`timestamp`|作成日時|
|`updDateTime`|`timestamp`|更新日時|

### 客層一覧

スマレジに登録されている客層情報の一覧を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`customerGroupId`|`string`|客層ID|
|`customerGroupSectionId`|`string`|客層セクションID|
|`label`|`string`|ラベル|
|`displayFlag`|`string`|表示フラグ|
|`displaySequence`|`string`|表示順序|
|`insDateTime`|`timestamp`|作成日時|
|`updDateTime`|`timestamp`|更新日時|

### 日次締め情報一覧

指定した条件の日次締め情報一覧を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|
|**締め日付**|-|-|特定の締め日付の情報のみを取得する場合に入力します。<br>フォーマット: `YYYY-MM-DD`|
|**店舗ID**|-|-|特定の店舗の情報のみを取得する場合に入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`sumDate`|`string`|締め日付|
|`storeId`|`string`|店舗ID|
|`cashDrawerId`|`string`|現金引出ID|
|`status`|`string`|ステータス|
|`salesTotal`|`string`|売上合計|
|`discount`|`string`|割引|
|`pointDiscount`|`string`|ポイント割引|
|`taxExcludeReceive`|`string`|税抜受取|
|`nonSalesTargetTotal`|`string`|非売上対象合計|
|`total`|`string`|合計|
|`totalExcludeTax`|`string`|合計(税抜)|
|`totalExcludTax`|`string`|合計(税抜)(非推奨)|
|`inTaxSalesTotal`|`string`|内税売上合計|
|`taxInclude`|`string`|税込|
|`outTaxSalesTotal`|`string`|外税売上合計|
|`taxExclude`|`string`|税抜|
|`taxTotal`|`string`|税合計|
|`taxDetailList`|`json`|税詳細リスト|
|`nonTaxSalesTotal`|`string`|非課税売上合計|
|`taxFreeTotal`|`string`|免税合計|
|`nonSalesTargetTaxFreeTotal`|`string`|非売上対象免税合計|
|`costTotal`|`string`|原価合計|
|`grossMargin`|`string`|粗利|
|`amount`|`string`|金額|
|`transactionCount`|`string`|取引件数|
|`returnAmount`|`string`|返金金額|
|`carriage`|`string`|送料|
|`commission`|`string`|手数料|
|`preparationCash`|`string`|預金準備金|
|`cashSales`|`string`|現金売上|
|`creditSales`|`string`|クレジット売上|
|`otherSalesList`|`json`|その他売上リスト|
|`otherSalseList`|`json`|その他売上リスト(非推奨)|
|`partPayment`|`string`|分割払い|
|`partPaymentCash`|`string`|分割払い(現金)|
|`partPaymentCredit`|`string`|分割払い(クレジット)|
|`receivedDepositCash`|`string`|受取預金(現金)|
|`receivedDepositCashTotal`|`string`|受取預金(現金)合計|
|`receivedDepositCreditTotal`|`string`|受取預金(クレジット)合計|
|`partPaymentCancel`|`string`|分割払いキャンセル|
|`partPaymentCashCancel`|`string`|分割払いキャンセル(現金)|
|`partPaymentCreditCancel`|`string`|分割払いキャンセル(クレジット)|
|`deposit`|`string`|預金|
|`returnDeposit`|`string`|預金返金|
|`receipt`|`string`|レシート|
|`payment`|`string`|支払い|
|`nonSalesCashTotal`|`string`|非売上合計(現金)|
|`nonSalesCreditTotal`|`string`|非売上合計(クレジット)|
|`nonSalesOtherTotal`|`string`|非売上合計(その他)|
|`nonSalesTaxFreeTotal`|`string`|非売上免税合計|
|`changeDifference`|`string`|お釣り差異|
|`calculateBalance`|`string`|計算残高|
|`realBalance`|`string`|実残高|
|`difference`|`string`|差異|
|`saving`|`string`|積立金|
|`carryOver`|`string`|繰越|
|`tenThousandYen`|`string`|1万円|
|`fiveThousandYen`|`string`|5千円|
|`twoThousandYen`|`string`|2千円|
|`oneThousandYen`|`string`|千円|
|`fiveHundredYen`|`string`|5百円|
|`oneHundredYen`|`string`|百円|
|`fiftyYen`|`string`|50円|
|`tenYen`|`string`|10円|
|`fiveYen`|`string`|5円|
|`oneYen`|`string`|1円|
|`comment`|`string`|コメント|
|`insDateTime`|`timestamp`|作成日時|
|`updDateTime`|`timestamp`|更新日時|
|`salesTotalNonSalesTargetDivision`|`string`|売上合計(非売上対象区分)|
|`totalTaxFreeDivision`|`string`|合計(免税区分)|

### 商品一覧

スマレジに登録されている商品の一覧を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`productId`|`string`|商品ID|
|`categoryId`|`string`|部門ID|
|`productCode`|`string`|商品コード|
|`productName`|`string`|商品名|
|`productKana`|`string`|商品名(カナ)|
|`taxDivision`|`string`|税区分|
|`productPriceDivision`|`string`|商品価格区分|
|`price`|`string`|価格|
|`customerPrice`|`string`|顧客価格|
|`cost`|`string`|原価|
|`attribute`|`string`|属性|
|`description`|`string`|説明|
|`catchCopy`|`string`|キャッチコピー|
|`size`|`string`|サイズ|
|`color`|`string`|色|
|`tag`|`string`|タグ|
|`groupCode`|`string`|グループコード|
|`url`|`string`|URL|
|`printReceiptProductName`|`string`|レシート印字商品名|
|`displaySequence`|`string`|表示順序|
|`salesDivision`|`string`|販売区分|
|`stockControlDivision`|`string`|在庫管理区分|
|`displayFlag`|`string`|表示フラグ|
|`division`|`string`|区分|
|`productOptionGroupId`|`string`|商品オプショングループID|
|`pointNotApplicable`|`string`|ポイント不適用フラグ|
|`taxFreeDivision`|`string`|免税区分|
|`supplierProductNo`|`string`|仕入先商品番号|
|`calcDiscount`|`string`|計算割引|
|`staffDiscountRate`|`string`|スタッフ割引率|
|`useCategoryReduceTax`|`string`|カテゴリ軽減税を使用|
|`reduceTaxId`|`string`|軽減税ID|
|`reduceTaxPrice`|`string`|軽減税価格|
|`reduceTaxCustomerPrice`|`string`|軽減税顧客価格|
|`orderPoint`|`string`|注文ポイント|
|`purchaseCost`|`string`|購入原価|
|`appStartDateTime`|`timestamp`|アプリ開始日時|
|`insDateTime`|`timestamp`|作成日時|
|`updDateTime`|`timestamp`|更新日時|

### 商品取扱店舗一覧

指定した商品がどの店舗で取り扱われているかを取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|
|**商品ID**|✓|-|取扱店舗を取得する商品のIDを入力します。|
|**店舗ID**|-|-|特定の店舗の情報のみを取得する場合に入力します。|
|**取扱区分**|-|-|店舗での取扱状況で絞り込む場合に入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`productId`|`string`|商品ID|
|`storeId`|`string`|店舗ID|
|`assignDivision`|`string`|取扱区分|

### スタッフ一覧

スマレジに登録されているスタッフの一覧を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`staffId`|`string`|スタッフID|
|`staffCode`|`string`|スタッフコード|
|`staffName`|`string`|スタッフ名|
|`staffNameKana`|`string`|スタッフ名(カナ)|
|`rank`|`string`|ランク|
|`displayFlag`|`string`|表示フラグ|
|`displaySequence`|`string`|表示順序|
|`loginStaffFlag`|`string`|ログインスタッフフラグ|
|`email`|`string`|メールアドレス|
|`loginIpAddress`|`string`|ログインIPアドレス|
|`roleId`|`string`|ロールID|
|`insDateTime`|`timestamp`|作成日時|
|`updDateTime`|`timestamp`|更新日時|

### 在庫一覧

指定した条件の在庫情報一覧を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|
|**店舗ID**|-|-|特定の店舗の在庫情報のみを取得する場合に入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`storeId`|`string`|店舗ID|
|`productId`|`string`|商品ID|
|`stockAmount`|`string`|在庫数量|
|`layawayStockAmount`|`string`|積置在庫数量|
|`updDateTime`|`timestamp`|更新日時|

### 店舗一覧

スマレジに登録されている店舗の一覧を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|
|**ポイント条件の含否**|-|none|レスポンスにポイント条件を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**レシート印字情報の含否**|-|none|レスポンスにレシート印字情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`storeId`|`string`|店舗ID|
|`storeCode`|`string`|店舗コード|
|`storeName`|`string`|店舗名|
|`storeAbbr`|`string`|店舗略称|
|`printReceiptStoreName`|`string`|レシート印字店舗名|
|`printStockReceiptStoreName`|`string`|在庫レシート印字店舗名|
|`division`|`string`|区分|
|`postCode`|`string`|郵便番号|
|`address`|`string`|住所|
|`phoneNumber`|`string`|電話番号|
|`faxNumber`|`string`|FAX番号|
|`mailAddress`|`string`|メールアドレス|
|`homepage`|`string`|ホームページ|
|`tempTranMailAddress`|`string`|一時転送メールアドレス|
|`priceChangeFlag`|`string`|価格変更フラグ|
|`sellDivision`|`string`|販売区分|
|`sumProcDivision`|`string`|締め処理区分|
|`sumDateChangeTime`|`string`|締め日付変更時刻|
|`sumRefColumn`|`string`|締め参照列|
|`pointNotApplicable`|`string`|ポイント不適用フラグ|
|`taxFreeDivision`|`string`|免税区分|
|`maxBundleProductCount`|`string`|最大バンドル商品数|
|`maxDiscountRate`|`string`|最大割引率|
|`carriageDisplayFlag`|`string`|送料表示フラグ|
|`terminalAdjustmentCashFlag`|`string`|端末調整現金フラグ|
|`terminalCheckCashFlag`|`string`|端末確認現金フラグ|
|`waiterAdjustmentDivision`|`string`|ウェイター調整区分|
|`savingAutoDivision`|`string`|積立自動区分|
|`savingAutoPrice`|`string`|積立自動金額|
|`cancelSettingDivision`|`string`|キャンセル設定区分|
|`roundingDivision`|`string`|四捨五入区分|
|`discountRoundingDivision`|`string`|割引四捨五入区分|
|`cardCompanySelectDivision`|`string`|カード会社選択区分|
|`giftReceiptValidDays`|`string`|ギフトレシート有効日数|
|`taxLabelNormal`|`string`|税ラベル(通常)|
|`taxLabelReduce`|`string`|税ラベル(軽減)|
|`pauseFlag`|`string`|一時停止フラグ|
|`displaySequence`|`string`|表示順序|
|`facePaymentUseDivision`|`string`|フェイス決済使用区分|
|`invoiceRegistrationNo`|`string`|インボイス登録番号|
|`insDateTime`|`timestamp`|作成日時|
|`updDateTime`|`timestamp`|更新日時|
|`pointCondition`|`json`|ポイント条件|
|`receiptPrintInfo`|`json`|レシート印字情報|

### レジ端末一覧

スマレジに登録されているレジ端末の一覧を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`storeId`|`string`|店舗ID|
|`terminalId`|`string`|端末ID|
|`terminalName`|`string`|端末名|
|`cashDrawerId`|`string`|現金引出ID|
|`uuid`|`string`|UUID|
|`selfCheckoutAvailableFlag`|`string`|セルフレジ利用可フラグ|
|`useStopDivision`|`string`|使用停止区分|
|`transactionEditableFlag`|`string`|取引編集可能フラグ|
|`smartIdEngineAvailableFlag`|`string`|SmartIDエンジン利用可フラグ|
|`creditTerminalId`|`string`|クレジット端末ID|
|`parentTerminalId`|`string`|親端末ID|
|`appVersion`|`string`|アプリバージョン|
|`insDateTime`|`timestamp`|作成日時|
|`updDateTime`|`timestamp`|更新日時|

### 取引一覧

指定した条件の取引情報一覧を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|
|**取引日時(開始)**|-|-|取得する取引の期間（開始日時）を入力します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss±HH:MM`<br>※ 開始〜終了の期間は最大31日間です。<br>※ 取引日時・締め日付・更新日時のうち1つを指定してください。|
|**取引日時(終了)**|-|-|取得する取引の期間（終了日時）を入力します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss±HH:MM`<br>※ 開始〜終了の期間は最大31日間です。<br>※ 取引日時・締め日付・更新日時のうち1つを指定してください。|
|**締め日付(開始)**|-|-|取得する取引の締め日付（開始）を入力します。<br>フォーマット: `YYYY-MM-DD`<br>※ 開始〜終了の期間は最大31日間です。<br>※ 取引日時・締め日付・更新日時のうち1つを指定してください。|
|**締め日付(終了)**|-|-|取得する取引の締め日付（終了）を入力します。<br>フォーマット: `YYYY-MM-DD`<br>※ 開始〜終了の期間は最大31日間です。<br>※ 取引日時・締め日付・更新日時のうち1つを指定してください。|
|**更新日時(開始)**|-|-|取得する取引の更新日時（開始日時）を入力します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss±HH:MM`<br>※ 開始〜終了の期間は最大31日間です。<br>※ 取引日時・締め日付・更新日時のうち1つを指定してください。|
|**更新日時(終了)**|-|-|取得する取引の更新日時（終了日時）を入力します。<br>フォーマット: `YYYY-MM-DDTHH:mm:ss±HH:MM`<br>※ 開始〜終了の期間は最大31日間です。<br>※ 取引日時・締め日付・更新日時のうち1つを指定してください。|
|**取引明細の含否**|-|none|レスポンスに取引明細を含めるかを選択します。<br>選択肢: `all`（すべて含める）、`summary`（サマリーのみ）、`none`（含めない）|
|**預金その他の含否**|-|none|レスポンスに預金その他の情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**積置の含否**|-|none|レスポンスに積置情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**積置引取の含否**|-|none|レスポンスに積置引取情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**金銭管理の含否**|-|none|レスポンスに金銭管理情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**商品属性詳細の含否**|-|none|レスポンスに商品属性詳細を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`transactionHeadId`|`string`|取引ヘッドID|
|`transactionDateTime`|`timestamp`|取引日時|
|`transactionHeadDivision`|`string`|取引ヘッド区分|
|`cancelDivision`|`string`|キャンセル区分|
|`unitNonDiscountsubtotal`|`string`|ユニット非割引小計|
|`unitDiscountsubtotal`|`string`|ユニット割引小計|
|`unitStaffDiscountsubtotal`|`string`|ユニットスタッフ割引小計|
|`unitBargainDiscountsubtotal`|`string`|ユニット値引割引小計|
|`subtotal`|`string`|小計|
|`subtotalForDiscount`|`string`|割引用小計|
|`subtotalDiscountPrice`|`string`|小計割引金額|
|`subtotalDiscountRate`|`string`|小計割引率|
|`subtotalDiscountDivision`|`string`|小計割引区分|
|`pointDiscount`|`string`|ポイント割引|
|`couponDiscount`|`string`|クーポン割引|
|`total`|`string`|合計|
|`taxInclude`|`string`|税込|
|`taxExclude`|`string`|税抜|
|`roundingDivision`|`string`|四捨五入区分|
|`roundingPrice`|`string`|四捨五入金額|
|`cashTotal`|`string`|現金合計|
|`creditTotal`|`string`|クレジット合計|
|`deposit`|`string`|預金|
|`depositCash`|`string`|預金(現金)|
|`depositCredit`|`string`|預金(クレジット)|
|`change`|`string`|おつり|
|`tipCash`|`string`|チップ(現金)|
|`tipCredit`|`string`|チップ(クレジット)|
|`amount`|`string`|金額|
|`returnAmount`|`string`|返金金額|
|`costTotal`|`string`|原価合計|
|`salesHeadDivision`|`string`|売上ヘッド区分|
|`inTaxSalesTotal`|`string`|内税売上合計|
|`outTaxSalesTotal`|`string`|外税売上合計|
|`nonTaxSalesTotal`|`string`|非課税売上合計|
|`nonSalesTargetTotal`|`string`|非売上対象合計|
|`nonSalesTargetOutTaxTotal`|`string`|非売上対象外税合計|
|`nonSalesTargetInTaxTotal`|`string`|非売上対象内税合計|
|`nonSalesTargetTaxFreeTotal`|`string`|非売上対象免税合計|
|`nonSalesTargetCostTotal`|`string`|非売上対象原価合計|
|`nonSalesTargetAmount`|`string`|非売上対象金額|
|`nonSalesTargetReturnAmount`|`string`|非売上対象返金金額|
|`newPoint`|`string`|新規ポイント|
|`spendPoint`|`string`|使用ポイント|
|`point`|`string`|ポイント|
|`totalPoint`|`string`|合計ポイント|
|`currentMile`|`string`|現在マイル|
|`earnMile`|`string`|獲得マイル|
|`totalMile`|`string`|合計マイル|
|`adjustmentMile`|`string`|調整マイル|
|`adjustmentMileDivision`|`string`|調整マイル区分|
|`adjustmentMileValue`|`string`|調整マイル値|
|`storeId`|`string`|店舗ID|
|`storeCode`|`string`|店舗コード|
|`terminalId`|`string`|端末ID|
|`customerId`|`string`|顧客ID|
|`customerCode`|`string`|顧客コード|
|`terminalTranId`|`string`|端末取引ID|
|`terminalTranDateTime`|`timestamp`|端末取引日時|
|`sumDivision`|`string`|締め区分|
|`adjustmentDateTime`|`timestamp`|調整日時|
|`sumDate`|`string`|締め日付|
|`customerRank`|`string`|顧客ランク|
|`customerGroupId`|`string`|顧客グループID|
|`customerGroupId2`|`string`|顧客グループID2|
|`customerGroupId3`|`string`|顧客グループID3|
|`customerGroupId4`|`string`|顧客グループID4|
|`customerGroupId5`|`string`|顧客グループID5|
|`staffId`|`string`|スタッフID|
|`staffCode`|`string`|スタッフコード|
|`staffName`|`string`|スタッフ名|
|`creditDivision`|`string`|クレジット区分|
|`paymentCount`|`string`|支払い回数|
|`slipNumber`|`string`|伝票番号|
|`cancelSlipNumber`|`string`|キャンセル伝票番号|
|`authNumber`|`string`|認可番号|
|`authDate`|`string`|認可日|
|`cardCompany`|`string`|カード会社|
|`denomination`|`string`|金種|
|`memo`|`string`|メモ|
|`receiptMemo`|`string`|レシートメモ|
|`carriage`|`string`|送料|
|`commission`|`string`|手数料|
|`guestNumbers`|`string`|ゲスト数|
|`guestNumbersMale`|`string`|ゲスト数(男性)|
|`guestNumbersFemale`|`string`|ゲスト数(女性)|
|`guestNumbersUnknown`|`string`|ゲスト数(不明)|
|`enterDateTime`|`timestamp`|入店日時|
|`taxFreeSalesDivision`|`string`|免税売上区分|
|`netTaxFreeGeneralTaxInclude`|`string`|純免税一般品(税込)|
|`netTaxFreeGeneralTaxExclude`|`string`|純免税一般品(税抜)|
|`netTaxFreeConsumableTaxInclude`|`string`|純免税消耗品(税込)|
|`netTaxFreeConsumableTaxExclude`|`string`|純免税消耗品(税抜)|
|`tags`|`string`|タグ|
|`pointGivingDivision`|`string`|ポイント付与区分|
|`pointGivingUnitPrice`|`string`|ポイント付与単価|
|`pointGivingUnit`|`string`|ポイント付与単位|
|`pointSpendDivision`|`string`|ポイント使用区分|
|`mileageDivision`|`string`|マイレージ区分|
|`mileageLabel`|`string`|マイレージラベル|
|`customerPinCode`|`string`|顧客PINコード|
|`returnSales`|`string`|返品売上|
|`disposeDivision`|`string`|処分区分|
|`disposeServerTransactionHeadId`|`string`|処分サーバー取引ヘッドID|
|`cancelDateTime`|`timestamp`|キャンセル日時|
|`sellDivision`|`string`|販売区分|
|`taxRate`|`string`|税率|
|`taxRounding`|`string`|税四捨五入|
|`discountRoundingDivision`|`string`|割引四捨五入区分|
|`transactionUuid`|`string`|取引UUID|
|`exchangeTicketNo`|`string`|交換チケットNo|
|`giftReceiptValidDays`|`string`|ギフトレシート有効日数|
|`barcode`|`string`|バーコード|
|`updDateTime`|`timestamp`|更新日時|
|`details`|`json`|取引明細|
|`depositOthers`|`json`|預金その他|
|`layaway`|`json`|積置|
|`layaways`|`json`|積置一覧|
|`layawayPickUp`|`json`|積置引取|
|`layawayPickUps`|`json`|積置引取一覧|
|`moneyControl`|`json`|金銭管理|

### 取引

指定した取引IDの詳細情報を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|
|**取引ID**|✓|-|取得する取引のIDを入力します。|
|**取引明細の含否**|-|none|レスポンスに取引明細を含めるかを選択します。<br>選択肢: `all`（すべて含める）、`summary`（サマリーのみ）、`none`（含めない）|
|**預金その他の含否**|-|none|レスポンスに預金その他の情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**クーポンの含否**|-|none|レスポンスにクーポン情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**クーポン対象商品の含否**|-|none|レスポンスにクーポン対象商品を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**割引の含否**|-|none|レスポンスに割引情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**店舗情報の含否**|-|none|レスポンスに店舗情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**顧客情報の含否**|-|none|レスポンスに顧客情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**顧客グループの含否**|-|none|レスポンスに顧客グループ情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**スタッフ情報の含否**|-|none|レスポンスにスタッフ情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**記録スタッフの含否**|-|none|レスポンスに記録スタッフ情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**積置の含否**|-|none|レスポンスに積置情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**積置引取の含否**|-|none|レスポンスに積置引取情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**金銭管理の含否**|-|none|レスポンスに金銭管理情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**商品属性詳細の含否**|-|none|レスポンスに商品属性詳細を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`transactionHeadId`|`string`|取引ヘッドID|
|`transactionDateTime`|`timestamp`|取引日時|
|`transactionHeadDivision`|`string`|取引ヘッド区分|
|`cancelDivision`|`string`|キャンセル区分|
|`unitNonDiscountsubtotal`|`string`|ユニット非割引小計|
|`unitDiscountsubtotal`|`string`|ユニット割引小計|
|`unitStaffDiscountsubtotal`|`string`|ユニットスタッフ割引小計|
|`unitBargainDiscountsubtotal`|`string`|ユニット値引割引小計|
|`subtotal`|`string`|小計|
|`subtotalForDiscount`|`string`|割引用小計|
|`subtotalDiscountPrice`|`string`|小計割引金額|
|`subtotalDiscountRate`|`string`|小計割引率|
|`subtotalDiscountDivision`|`string`|小計割引区分|
|`pointDiscount`|`string`|ポイント割引|
|`couponDiscount`|`string`|クーポン割引|
|`total`|`string`|合計|
|`taxInclude`|`string`|税込|
|`taxExclude`|`string`|税抜|
|`roundingDivision`|`string`|四捨五入区分|
|`roundingPrice`|`string`|四捨五入金額|
|`cashTotal`|`string`|現金合計|
|`creditTotal`|`string`|クレジット合計|
|`deposit`|`string`|預金|
|`depositCash`|`string`|預金(現金)|
|`depositCredit`|`string`|預金(クレジット)|
|`change`|`string`|おつり|
|`tipCash`|`string`|チップ(現金)|
|`tipCredit`|`string`|チップ(クレジット)|
|`amount`|`string`|金額|
|`returnAmount`|`string`|返金金額|
|`costTotal`|`string`|原価合計|
|`salesHeadDivision`|`string`|売上ヘッド区分|
|`inTaxSalesTotal`|`string`|内税売上合計|
|`outTaxSalesTotal`|`string`|外税売上合計|
|`nonTaxSalesTotal`|`string`|非課税売上合計|
|`nonSalesTargetTotal`|`string`|非売上対象合計|
|`nonSalesTargetOutTaxTotal`|`string`|非売上対象外税合計|
|`nonSalesTargetInTaxTotal`|`string`|非売上対象内税合計|
|`nonSalesTargetTaxFreeTotal`|`string`|非売上対象免税合計|
|`nonSalesTargetCostTotal`|`string`|非売上対象原価合計|
|`nonSalesTargetAmount`|`string`|非売上対象金額|
|`nonSalesTargetReturnAmount`|`string`|非売上対象返金金額|
|`newPoint`|`string`|新規ポイント|
|`spendPoint`|`string`|使用ポイント|
|`point`|`string`|ポイント|
|`totalPoint`|`string`|合計ポイント|
|`currentMile`|`string`|現在マイル|
|`earnMile`|`string`|獲得マイル|
|`totalMile`|`string`|合計マイル|
|`adjustmentMile`|`string`|調整マイル|
|`adjustmentMileDivision`|`string`|調整マイル区分|
|`adjustmentMileValue`|`string`|調整マイル値|
|`storeId`|`string`|店舗ID|
|`terminalId`|`string`|端末ID|
|`customerId`|`string`|顧客ID|
|`terminalTranId`|`string`|端末取引ID|
|`terminalTranDateTime`|`timestamp`|端末取引日時|
|`sumDivision`|`string`|締め区分|
|`adjustmentDateTime`|`timestamp`|調整日時|
|`sumDate`|`string`|締め日付|
|`customerRank`|`string`|顧客ランク|
|`customerGroupId`|`string`|顧客グループID|
|`customerGroupId2`|`string`|顧客グループID2|
|`customerGroupId3`|`string`|顧客グループID3|
|`customerGroupId4`|`string`|顧客グループID4|
|`customerGroupId5`|`string`|顧客グループID5|
|`staffId`|`string`|スタッフID|
|`staffName`|`string`|スタッフ名|
|`creditDivision`|`string`|クレジット区分|
|`paymentCount`|`string`|支払い回数|
|`slipNumber`|`string`|伝票番号|
|`cancelSlipNumber`|`string`|キャンセル伝票番号|
|`authNumber`|`string`|認可番号|
|`authDate`|`string`|認可日|
|`cardCompany`|`string`|カード会社|
|`denomination`|`string`|金種|
|`memo`|`string`|メモ|
|`receiptMemo`|`string`|レシートメモ|
|`carriage`|`string`|送料|
|`commission`|`string`|手数料|
|`guestNumbers`|`string`|ゲスト数|
|`guestNumbersMale`|`string`|ゲスト数(男性)|
|`guestNumbersFemale`|`string`|ゲスト数(女性)|
|`guestNumbersUnknown`|`string`|ゲスト数(不明)|
|`enterDateTime`|`timestamp`|入店日時|
|`taxFreeSalesDivision`|`string`|免税売上区分|
|`netTaxFreeGeneralTaxInclude`|`string`|純免税一般品(税込)|
|`netTaxFreeGeneralTaxExclude`|`string`|純免税一般品(税抜)|
|`netTaxFreeConsumableTaxInclude`|`string`|純免税消耗品(税込)|
|`netTaxFreeConsumableTaxExclude`|`string`|純免税消耗品(税抜)|
|`tags`|`string`|タグ|
|`pointGivingDivision`|`string`|ポイント付与区分|
|`pointGivingUnitPrice`|`string`|ポイント付与単価|
|`pointGivingUnit`|`string`|ポイント付与単位|
|`pointSpendDivision`|`string`|ポイント使用区分|
|`mileageDivision`|`string`|マイレージ区分|
|`mileageLabel`|`string`|マイレージラベル|
|`customerPinCode`|`string`|顧客PINコード|
|`returnSales`|`string`|返品売上|
|`disposeDivision`|`string`|処分区分|
|`disposeServerTransactionHeadId`|`string`|処分サーバー取引ヘッドID|
|`cancelDateTime`|`timestamp`|キャンセル日時|
|`sellDivision`|`string`|販売区分|
|`taxRate`|`string`|税率|
|`taxRounding`|`string`|税四捨五入|
|`discountRoundingDivision`|`string`|割引四捨五入区分|
|`transactionUuid`|`string`|取引UUID|
|`exchangeTicketNo`|`string`|交換チケットNo|
|`giftReceiptValidDays`|`string`|ギフトレシート有効日数|
|`discountCalculateDivision`|`string`|割引計算区分|
|`barcode`|`string`|バーコード|
|`updDateTime`|`timestamp`|更新日時|
|`details`|`json`|取引明細|
|`depositOthers`|`json`|預金その他|
|`coupons`|`json`|クーポン|
|`couponItems`|`json`|クーポン対象商品|
|`discounts`|`json`|割引|
|`store`|`json`|店舗情報|
|`customer`|`json`|顧客情報|
|`customerGroups`|`json`|顧客グループ|
|`staff`|`json`|スタッフ情報|
|`recordedStaff`|`json`|記録スタッフ|
|`layaway`|`json`|積置|
|`layaways`|`json`|積置一覧|
|`layawayPickUp`|`json`|積置引取|
|`layawayPickUps`|`json`|積置引取一覧|
|`moneyControl`|`json`|金銭管理|

### 取引明細

指定した取引IDの取引明細情報を取得します。
詳しくは、[スマレジ公式ドキュメント − POS仕様書](https://developers.smaregi.dev/platform-api-reference/apis/pos/)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**契約ID**|✓|-|スマレジの契約IDを入力します。|
|**取引ID**|✓|-|取引明細を取得する取引のIDを入力します。|
|**割引の含否**|-|none|レスポンスに割引情報を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|
|**商品属性詳細の含否**|-|none|レスポンスに商品属性詳細を含めるかを選択します。<br>選択肢: `all`（含める）、`none`（含めない）|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`transactionHeadId`|`string`|取引ヘッドID|
|`transactionDetailId`|`string`|取引明細ID|
|`parentTransactionDetailId`|`string`|親取引明細ID|
|`transactionDetailDivision`|`string`|取引明細区分|
|`productId`|`string`|商品ID|
|`productCode`|`string`|商品コード|
|`productName`|`string`|商品名|
|`printReceiptProductName`|`string`|レシート印字商品名|
|`color`|`string`|色|
|`size`|`string`|サイズ|
|`groupCode`|`string`|グループコード|
|`taxDivision`|`string`|税区分|
|`price`|`string`|価格|
|`salesPrice`|`string`|販売価格|
|`unitDiscountPrice`|`string`|ユニット割引金額|
|`unitDiscountRate`|`string`|ユニット割引率|
|`unitDiscountDivision`|`string`|ユニット割引区分|
|`cost`|`string`|原価|
|`quantity`|`string`|数量|
|`unitNonDiscountSum`|`string`|ユニット非割引合計|
|`unitDiscountSum`|`string`|ユニット割引合計|
|`unitDiscountedSum`|`string`|ユニット割引済み合計|
|`costSum`|`string`|原価合計|
|`categoryId`|`string`|部門ID|
|`categoryName`|`string`|部門名|
|`discriminationNo`|`string`|識別番号|
|`salesDivision`|`string`|販売区分|
|`productDivision`|`string`|商品区分|
|`inventoryReservationDivision`|`string`|在庫予約区分|
|`pointNotApplicable`|`string`|ポイント不適用フラグ|
|`calcDiscount`|`string`|計算割引|
|`taxFreeDivision`|`string`|免税区分|
|`taxFreeCommodityPrice`|`string`|免税商品価格|
|`taxFree`|`string`|免税|
|`productBundleGroupId`|`string`|商品バンドルグループID|
|`discountPriceProportional`|`string`|割引金額按分|
|`discountPointProportional`|`string`|割引ポイント按分|
|`discountCouponProportional`|`string`|割引クーポン按分|
|`taxIncludeProportional`|`string`|税込按分|
|`taxExcludeProportional`|`string`|税抜按分|
|`productBundleProportional`|`string`|商品バンドル按分|
|`staffDiscountProportional`|`string`|スタッフ割引按分|
|`bargainDiscountProportional`|`string`|値引割引按分|
|`roundingPriceProportional`|`string`|四捨五入金額按分|
|`productStaffDiscountRate`|`string`|商品スタッフ割引率|
|`staffRank`|`string`|スタッフランク|
|`staffRankName`|`string`|スタッフランク名|
|`staffDiscountRate`|`string`|スタッフ割引率|
|`staffDiscountDivision`|`string`|スタッフ割引区分|
|`applyStaffDiscountRate`|`string`|適用スタッフ割引率|
|`applyStaffDiscountPrice`|`string`|適用スタッフ割引金額|
|`bargainId`|`string`|値引ID|
|`bargainName`|`string`|値引名|
|`bargainDivision`|`string`|値引区分|
|`bargainValue`|`string`|値引値|
|`applyBargainValue`|`string`|適用値引値|
|`applyBargainDiscountPrice`|`string`|適用値引割引金額|
|`taxRate`|`string`|税率|
|`standardTaxRate`|`string`|標準税率|
|`modifiedTaxRate`|`string`|修正税率|
|`reduceTaxId`|`string`|軽減税ID|
|`reduceTaxName`|`string`|軽減税名|
|`reduceTaxRate`|`string`|軽減税率|
|`reduceTaxPrice`|`string`|軽減税価格|
|`reduceTaxMemberPrice`|`string`|軽減税会員価格|
|`memo`|`string`|メモ|
|`discounts`|`json`|割引|
|`productAttributes`|`json`|商品属性|
|`rfidTags`|`json`|RFIDタグ|
