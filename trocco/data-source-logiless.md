---
articleId: bf380ddd-93a4-4e9c-a5c0-9bf271067bfa
slug: data-source-logiless
title: 転送元 - LOGILESS
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---

本ページでは、LOGILESSからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - LOGILESS](/docs/connection-configuration-logiless)を参照ください。

## 利用上の注意・制約

### 認証について

LOGILESS API は、OAuth 2.0標準に準拠した認証方式を採用しています。
TROCCOでは、OAuth 2.0（Authorization Code Flow）を使用してデータを取得します。

### API制限について

LOGILESS API には以下の制限があります。

#### レート制限

APIのレート制限については、[基本仕様 - LOGILESS Developers](https://app2.logiless.com/developer/documents/specifications)をご確認ください。
大量のデータを頻繁に取得する場合は、制限に注意が必要です。

#### マーチャントIDについて

すべてのAPIエンドポイントで**マーチャントID**が必須です。
マーチャントIDは、LOGILESSのマーチャント単位で発行される識別子です。
取得方法については、[マーチャントIDはどこで確認しますか？ – LOGILESS ヘルプセンター](https://support.logiless.com/faq/5997/)をご確認ください。

## 取得対象

### 受注伝票一覧

指定したマーチャントと期間の受注伝票情報を取得します。
詳しくは、[LOGILESS公式ドキュメント](https://app2.logiless.com/developer/documents/interface/sales_order)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**マーチャントID**|✓|-|LOGILESSのマーチャントIDを入力します。<br>取得方法については、[マーチャントIDはどこで確認しますか？ – LOGILESS ヘルプセンター](https://support.logiless.com/faq/5997/)をご確認ください。|
|**注文日時（From）**|-|-|取得する受注伝票の期間（開始日時）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|
|**注文日時（To）**|-|-|取得する受注伝票の期間（終了日時）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|
|**更新日時（From）**|-|-|取得する受注伝票の更新日時（開始日時）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|
|**更新日時（To）**|-|-|取得する受注伝票の更新日時（終了日時）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
| `id` | `long` | 伝票ID |
| `code` | `string` | 伝票コード |
| `parent_code` | `string` | 親伝票コード |
| `document_status` | `string` | 伝票ステータス |
| `allocation_status` | `string` | アロケーションステータス |
| `delivery_status` | `string` | 配送ステータス |
| `incoming_payment_status` | `string` | 入金ステータス |
| `authorization_status` | `string` | 認可ステータス |
| `customer_code` | `string` | 顧客コード |
| `buyer_name1` | `string` | 購入者名1 |
| `buyer_name2` | `string` | 購入者名2 |
| `buyer_name_kana1` | `string` | 購入者名1（カナ） |
| `buyer_name_kana2` | `string` | 購入者名2（カナ） |
| `buyer_country` | `string` | 購入者国 |
| `buyer_post_code` | `string` | 購入者郵便番号 |
| `buyer_prefecture` | `string` | 購入者都道府県 |
| `buyer_address1` | `string` | 購入者住所1 |
| `buyer_address2` | `string` | 購入者住所2 |
| `buyer_address3` | `string` | 購入者住所3 |
| `buyer_phone` | `string` | 購入者電話番号 |
| `buyer_fax` | `string` | 購入者FAX |
| `buyer_email` | `string` | 購入者メールアドレス |
| `recipient_name1` | `string` | お届け先名1 |
| `recipient_name2` | `string` | お届け先名2 |
| `recipient_name_kana1` | `string` | お届け先名1（カナ） |
| `recipient_name_kana2` | `string` | お届け先名2（カナ） |
| `recipient_country` | `string` | お届け先国 |
| `recipient_post_code` | `string` | お届け先郵便番号 |
| `recipient_prefecture` | `string` | お届け先都道府県 |
| `recipient_address1` | `string` | お届け先住所1 |
| `recipient_address2` | `string` | お届け先住所2 |
| `recipient_address3` | `string` | お届け先住所3 |
| `recipient_phone` | `string` | お届け先電話番号 |
| `recipient_fax` | `string` | お届け先FAX |
| `recipient_email` | `string` | お届け先メールアドレス |
| `subtotal` | `long` | 小計 |
| `use_point` | `long` | 利用ポイント |
| `use_coupon` | `long` | 利用クーポン額 |
| `delivery_fee` | `long` | 送料 |
| `sundry_fee` | `long` | 諸経費 |
| `discount` | `long` | 割引額 |
| `tax_processing_method` | `string` | 税計算方法 |
| `tax_rounding_method` | `string` | 税端数処理 |
| `document_tax_rate` | `long` | 伝票税率 |
| `tax_total` | `long` | 税合計 |
| `total` | `long` | 合計 |
| `payment_method` | `string` | 支払方法 |
| `delivery_method` | `string` | 配送方法 |
| `delivery_package_quantity` | `string` | 配送荷物数 |
| `express_type` | `string` | 速達種別 |
| `delivery_temperature_control` | `string` | 配送温度帯 |
| `scheduled_shipping_date` | `string` | 出荷予定日 |
| `delivery_preferred_date` | `string` | 希望配送日 |
| `delivery_preferred_time_zone` | `string` | 希望配送時間帯 |
| `is_isolated_area` | `long` | 離島フラグ |
| `delivery_tracking_number` | `string` | 配送追跡番号 |
| `buyer_comment` | `string` | 購入者コメント |
| `merchant_comment` | `string` | 販売者コメント |
| `statement_notes` | `string` | 明細備考 |
| `picking_notes` | `string` | ピッキング備考 |
| `way_bill_notes` | `string` | 送り状備考 |
| `gift` | `long` | ギフトフラグ |
| `wrapping` | `string` | ラッピング |
| `noshi` | `string` | のし |
| `attr1` | `string` | カスタム属性1 |
| `attr2` | `string` | カスタム属性2 |
| `attr3` | `string` | カスタム属性3 |
| `attr4` | `string` | カスタム属性4 |
| `attr5` | `string` | カスタム属性5 |
| `attr6` | `string` | カスタム属性6 |
| `attr7` | `string` | カスタム属性7 |
| `attr8` | `string` | カスタム属性8 |
| `attr9` | `string` | カスタム属性9 |
| `attr10` | `string` | カスタム属性10 |
| `waiting_for_confirmation` | `long` | 確認待ちフラグ |
| `shipping_confirmed` | `long` | 出荷確定フラグ |
| `is_multiple_deliveries` | `long` | 複数配送フラグ |
| `subscription_id` | `string` | 定期購読ID |
| `subscription_delivery_number` | `string` | 定期購読配送回数 |
| `subscription_next_delivery_date` | `string` | 定期購読次回配送日 |
| `posting_date` | `string` | 計上日 |
| `total_quantity` | `long` | 総数量 |
| `purchasing_times` | `long` | 購入回数 |
| `tags` | `json` | タグ |
| `ordered_at` | `timestamp` | 注文日時 |
| `finished_at` | `timestamp` | 完了日時 |
| `created_at` | `timestamp` | 作成日時 |
| `updated_at` | `timestamp` | 更新日時 |
| `lines` | `json` | 明細行 |
| `outbound_deliveries` | `json` | 出荷伝票 |
| `store` | `json` | ストア |
| `warehouse` | `string` | 倉庫 |
| `cod_total` | `string` | 代引き合計 |
| `document_date` | `string` | 伝票日付 |
| `payment_due_date` | `string` | 支払期限日 |

### 出荷伝票一覧

指定した条件の出荷伝票情報一覧を取得します。
詳しくは、[LOGILESS公式ドキュメント](https://app2.logiless.com/developer/documents/interface/outbound_delivery)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**マーチャントID**|✓|-|LOGILESSのマーチャントIDを入力します。<br>取得方法については、[マーチャントIDはどこで確認しますか？ – LOGILESS ヘルプセンター](https://support.logiless.com/faq/5997/)をご確認ください。|
|**伝票ステータス**|-|-|出荷伝票のステータスで絞り込む場合に入力します。<br><ul><li>処理中</li><li>入金待ち</li><li>引当待ち</li><li>出荷待ち</li><li>出荷済み</li><li>キャンセル</li></ul>|
|**配送ステータス**|-|-|配送のステータスで絞り込む場合に入力します。<br><ul><li>出荷待ち</li><li>出荷作業中</li><li>一部出荷済み</li><li>出荷済み</li><li>保留</li><li>キャンセル</li></ul>|
|**倉庫ID**|-|-|特定の倉庫の出荷伝票のみを取得する場合に入力します。|
|**店舗ID**|-|-|特定の店舗の出荷伝票のみを取得する場合に入力します。|
|**注文日時（From）**|-|-|取得する出荷伝票の期間（開始日時）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|
|**注文日時（To）**|-|-|取得する出荷伝票の期間（終了日時）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|
|**完了日時（From）**|-|-|完了日時の範囲（開始）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|
|**完了日時（To）**|-|-|完了日時の範囲（終了）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|
|**出荷予定日（From）**|-|-|出荷予定日の範囲（開始）を入力します。<br>フォーマット: `YYYY-MM-DD`|
|**出荷予定日（To）**|-|-|出荷予定日の範囲（終了）を入力します。<br>フォーマット: `YYYY-MM-DD`|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
| `id` | `long` | 伝票ID |
| `code` | `string` | 伝票コード |
| `document_status` | `string` | 伝票ステータス |
| `allocation_status` | `string` | アロケーションステータス |
| `delivery_status` | `string` | 配送ステータス |
| `shipper_name1` | `string` | 発送元名1 |
| `shipper_name2` | `string` | 発送元名2 |
| `shipper_name_kana1` | `string` | 発送元名1（カナ） |
| `shipper_name_kana2` | `string` | 発送元名2（カナ） |
| `shipper_country` | `string` | 発送元国 |
| `shipper_post_code` | `string` | 発送元郵便番号 |
| `shipper_prefecture` | `string` | 発送元都道府県 |
| `shipper_address1` | `string` | 発送元住所1 |
| `shipper_address2` | `string` | 発送元住所2 |
| `shipper_address3` | `string` | 発送元住所3 |
| `shipper_phone` | `string` | 発送元電話番号 |
| `recipient_name1` | `string` | お届け先名1 |
| `recipient_name2` | `string` | お届け先名2 |
| `recipient_name_kana1` | `string` | お届け先名1（カナ） |
| `recipient_name_kana2` | `string` | お届け先名2（カナ） |
| `recipient_country` | `string` | お届け先国 |
| `recipient_post_code` | `string` | お届け先郵便番号 |
| `recipient_prefecture` | `string` | お届け先都道府県 |
| `recipient_address1` | `string` | お届け先住所1 |
| `recipient_address2` | `string` | お届け先住所2 |
| `recipient_address3` | `string` | お届け先住所3 |
| `recipient_phone` | `string` | お届け先電話番号 |
| `cod_total` | `long` | 代引き合計 |
| `delivery_method` | `string` | 配送方法 |
| `delivery_package_quantity` | `string` | 配送荷物数 |
| `delivery_temperature_control` | `string` | 配送温度帯 |
| `scheduled_shipping_date` | `string` | 出荷予定日 |
| `release_date` | `string` | リリース日 |
| `delivery_preferred_date` | `string` | 希望配送日 |
| `delivery_preferred_time_zone` | `string` | 希望配送時間帯 |
| `delivery_tracking_numbers` | `json` | 配送追跡番号一覧 |
| `picking_notes` | `string` | ピッキング備考 |
| `way_bill_notes` | `string` | 送り状備考 |
| `gift` | `boolean` | ギフトフラグ |
| `wrapping` | `string` | ラッピング |
| `attr1` | `string` | カスタム属性1 |
| `attr2` | `string` | カスタム属性2 |
| `attr3` | `string` | カスタム属性3 |
| `attr4` | `string` | カスタム属性4 |
| `attr5` | `string` | カスタム属性5 |
| `attr6` | `string` | カスタム属性6 |
| `attr7` | `string` | カスタム属性7 |
| `attr8` | `string` | カスタム属性8 |
| `attr9` | `string` | カスタム属性9 |
| `attr10` | `string` | カスタム属性10 |
| `noshi` | `string` | のし |
| `total_quantity` | `long` | 総数量 |
| `total_weight` | `long` | 総重量 |
| `total_size_coefficient` | `long` | 総サイズ係数 |
| `waiting_for_confirmation` | `boolean` | 確認待ちフラグ |
| `lines` | `json` | 明細行 |
| `shipped_actual_stocks` | `json` | 出荷実在庫 |
| `warehouse` | `long` | 倉庫ID |
| `store` | `long` | ストアID |
| `sales_order` | `json` | 受注伝票 |
| `is_combined` | `boolean` | 合算フラグ |
| `combined_shipping` | `boolean` | 合算配送フラグ |
| `combined_payment_receipts` | `boolean` | 合算支払伝票フラグ |
| `document_date` | `string` | 伝票日付 |
| `posting_date` | `string` | 計上日 |
| `ordered_at` | `timestamp` | 注文日時 |
| `created_at` | `timestamp` | 作成日時 |
| `updated_at` | `timestamp` | 更新日時 |
| `finished_at` | `timestamp` | 完了日時 |

### 入荷予定伝票一覧

指定した条件の入荷予定伝票情報一覧を取得します。
詳しくは、[LOGILESS公式ドキュメント](https://app2.logiless.com/developer/documents/interface/inbound_delivery)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**マーチャントID**|✓|-|LOGILESSのマーチャントIDを入力します。<br>取得方法については、[マーチャントIDはどこで確認しますか？ – LOGILESS ヘルプセンター](https://support.logiless.com/faq/5997/)をご確認ください。|
|**倉庫ID**|-|-|特定の倉庫の入荷予定伝票のみを取得する場合に入力します。|
|**入荷予定ステータス**|-|-|入荷予定のステータスで絞り込む場合に入力します。<br><ul><li>入荷待ち</li><li>入荷済み</li><li>キャンセル</li></ul>|
|**作成日時（From）**|-|-|取得する入荷予定伝票の期間（開始日時）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|
|**作成日時（To）**|-|-|取得する入荷予定伝票の期間（終了日時）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|
|**完了日時（From）**|-|-|完了日時の範囲（開始）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|
|**完了日時（To）**|-|-|完了日時の範囲（終了）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
| `id` | `long` | 伝票ID |
| `code` | `string` | 伝票コード |
| `object_code` | `string` | オブジェクトコード |
| `document_date` | `string` | 伝票日付 |
| `posting_date` | `string` | 計上日 |
| `inbound_delivery_category` | `string` | 入荷カテゴリ |
| `status` | `string` | ステータス |
| `supplier_code` | `string` | 仕入先コード |
| `supplier_name` | `string` | 仕入先名 |
| `supplier_name_kana` | `string` | 仕入先名（カナ） |
| `supplier_country` | `string` | 仕入先国 |
| `supplier_post_code` | `string` | 仕入先郵便番号 |
| `supplier_prefecture` | `string` | 仕入先都道府県 |
| `supplier_address1` | `string` | 仕入先住所1 |
| `supplier_address2` | `string` | 仕入先住所2 |
| `supplier_address3` | `string` | 仕入先住所3 |
| `supplier_phone` | `string` | 仕入先電話番号 |
| `supplier_fax` | `string` | 仕入先FAX |
| `supplier_email` | `string` | 仕入先メールアドレス |
| `recipient_name` | `string` | お届け先名 |
| `recipient_name_kana` | `string` | お届け先名（カナ） |
| `recipient_country` | `string` | お届け先国 |
| `recipient_post_code` | `string` | お届け先郵便番号 |
| `recipient_prefecture` | `string` | お届け先都道府県 |
| `recipient_address1` | `string` | お届け先住所1 |
| `recipient_address2` | `string` | お届け先住所2 |
| `recipient_address3` | `string` | お届け先住所3 |
| `recipient_phone` | `string` | お届け先電話番号 |
| `recipient_fax` | `string` | お届け先FAX |
| `subtotal` | `long` | 小計 |
| `tax_processing_method` | `string` | 税計算方法 |
| `tax_rounding_method` | `string` | 税端数処理 |
| `document_tax_rate` | `long` | 伝票税率 |
| `tax_total` | `long` | 税合計 |
| `total` | `long` | 合計 |
| `delivery_preferred_date` | `string` | 希望配送日 |
| `delivery_preferred_time_zone` | `string` | 希望配送時間帯 |
| `purchase_order_notes` | `string` | 発注備考 |
| `scheduled_delivery_date` | `timestamp` | 入荷予定日 |
| `delivery_career_name` | `string` | 配送業者名 |
| `delivery_tracking_numbers` | `json` | 配送追跡番号一覧 |
| `is_printed` | `long` | 印刷済みフラグ |
| `receiving_notes` | `string` | 入荷備考 |
| `remarks_on_received` | `string` | 入荷時備考 |
| `attr1` | `string` | カスタム属性1 |
| `attr2` | `string` | カスタム属性2 |
| `attr3` | `string` | カスタム属性3 |
| `ordered_at` | `timestamp` | 発注日時 |
| `finished_at` | `timestamp` | 完了日時 |
| `created_at` | `timestamp` | 作成日時 |
| `updated_at` | `timestamp` | 更新日時 |
| `lines` | `json` | 明細行 |
| `supplier` | `json` | 仕入先 |
| `warehouse` | `json` | 倉庫 |

### 商品マスタ一覧

指定したマーチャントの商品マスタ一覧を取得します。
詳しくは、[LOGILESS公式ドキュメント](https://app2.logiless.com/developer/documents/interface/article)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**マーチャントID**|✓|-|LOGILESSのマーチャントIDを入力します。<br>取得方法については、[マーチャントIDはどこで確認しますか？ – LOGILESS ヘルプセンター](https://support.logiless.com/faq/5997/)をご確認ください。|
|**商品区分**|-|-|商品区分で絞り込む場合に入力します。<br><ul><li>通常商品</li><li>セット商品</li><li>集合包装</li></ul>|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
| `id` | `long` | 商品ID |
| `code` | `string` | 商品コード |
| `identification_code` | `string` | 識別コード |
| `object_code` | `string` | オブジェクトコード |
| `model_number` | `string` | 型番 |
| `name` | `string` | 商品名 |
| `name_kana` | `string` | 商品名（カナ） |
| `article_type` | `string` | 商品タイプ |
| `price` | `long` | 価格 |
| `tax_indicator` | `string` | 税区分 |
| `tax_rate` | `long` | 税率 |
| `list_price` | `long` | 定価 |
| `cost` | `long` | 原価 |
| `color` | `string` | 色 |
| `color_code` | `string` | 色コード |
| `size` | `string` | サイズ |
| `size_code` | `string` | サイズコード |
| `temperature_control` | `string` | 温度帯 |
| `width` | `long` | 幅（mm） |
| `height` | `long` | 高さ（mm） |
| `depth` | `long` | 奥行（mm） |
| `weight` | `long` | 重量 |
| `attr1` | `string` | カスタム属性1 |
| `attr2` | `string` | カスタム属性2 |
| `attr3` | `string` | カスタム属性3 |
| `attr4` | `string` | カスタム属性4 |
| `attr5` | `string` | カスタム属性5 |
| `attr6` | `string` | カスタム属性6 |
| `attr7` | `string` | カスタム属性7 |
| `attr8` | `string` | カスタム属性8 |
| `attr9` | `string` | カスタム属性9 |
| `attr10` | `string` | カスタム属性10 |
| `attr11` | `string` | カスタム属性11 |
| `attr12` | `string` | カスタム属性12 |
| `attr13` | `string` | カスタム属性13 |
| `attr14` | `string` | カスタム属性14 |
| `attr15` | `string` | カスタム属性15 |
| `attr16` | `string` | カスタム属性16 |
| `attr17` | `string` | カスタム属性17 |
| `attr18` | `string` | カスタム属性18 |
| `attr19` | `string` | カスタム属性19 |
| `attr20` | `string` | カスタム属性20 |
| `comment` | `string` | コメント |
| `unit` | `string` | 単位 |
| `delivery_category` | `string` | 配送カテゴリ |
| `default_delivery_method` | `string` | デフォルト配送方法 |
| `size_coefficient` | `long` | サイズ係数 |
| `release_date` | `string` | 発売日 |
| `contents_description` | `string` | 内容説明 |
| `label_text` | `string` | ラベル文言 |
| `limiting_sales` | `long` | 販売制限数 |
| `reorder_point` | `string` | 発注点 |
| `tags` | `json` | タグ |
| `supplier_code` | `string` | 仕入先コード |
| `created_at` | `timestamp` | 作成日時 |
| `updated_at` | `timestamp` | 更新日時 |
| `supplier` | `json` | 仕入先 |
| `components` | `json` | 構成品 |

### 商品対応表一覧

指定した条件の商品対応表情報を取得します。
詳しくは、[LOGILESS公式ドキュメント](https://app2.logiless.com/developer/documents/interface/article_map)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**マーチャントID**|✓|-|LOGILESSのマーチャントIDを入力します。<br>取得方法については、[マーチャントIDはどこで確認しますか？ – LOGILESS ヘルプセンター](https://support.logiless.com/faq/5997/)をご確認ください。|
|**店舗ID**|-|-|特定の店舗の商品対応表情報のみを取得する場合に入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
| `id` | `long` | ID |
| `mapped_code` | `string` | マッピングコード |
| `mapped_choice1` | `string` | マッピング選択肢1 |
| `mapped_choice2` | `string` | マッピング選択肢2 |
| `mapped_choice3` | `string` | マッピング選択肢3 |
| `attr1` | `string` | カスタム属性1 |
| `article_option` | `string` | 商品オプション |
| `cached_stock_quantity` | `long` | キャッシュ在庫数 |
| `standby_stock_quantity` | `long` | 待機在庫数 |
| `stock_allocation_rate` | `long` | 在庫割当率 |
| `max_stock_quantity` | `long` | 最大在庫数 |
| `min_stock_quantity` | `long` | 最小在庫数 |
| `available_stock_quantity` | `long` | 利用可能在庫数 |
| `is_inventory_synced` | `boolean` | 在庫同期済みか |
| `is_automatic_inventory_sync_enables` | `boolean` | 自動在庫同期有効か |
| `created_at` | `timestamp` | 作成日時 |
| `updated_at` | `timestamp` | 更新日時 |
| `article` | `json` | 商品 |
| `store` | `json` | ストア |

### 仕入先マスタ一覧

指定した条件の仕入先マスタ一覧を取得します。
詳しくは、[LOGILESS公式ドキュメント](https://app2.logiless.com/developer/documents/interface/supplier)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**マーチャントID**|✓|-|LOGILESSのマーチャントIDを入力します。<br>取得方法については、[マーチャントIDはどこで確認しますか？ – LOGILESS ヘルプセンター](https://support.logiless.com/faq/5997/)をご確認ください。|
|**更新日時（From）**|-|-|取得する仕入先マスタの更新日時（開始日時）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|
|**更新日時（To）**|-|-|取得する仕入先マスタの更新日時（終了日時）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
| `id` | `long` | 仕入先ID |
| `code` | `string` | 仕入先コード |
| `name` | `string` | 仕入先名 |
| `name_kana` | `string` | 仕入先名（カナ） |
| `post_code` | `string` | 郵便番号 |
| `prefecture` | `string` | 都道府県 |
| `address1` | `string` | 住所1 |
| `address2` | `string` | 住所2 |
| `address3` | `string` | 住所3 |
| `phone` | `string` | 電話番号 |
| `fax` | `string` | FAX |
| `email` | `string` | メールアドレス |
| `representative` | `string` | 担当者名 |
| `representative_kana` | `string` | 担当者名（カナ） |
| `comment` | `string` | コメント |
| `attr1` | `string` | カスタム属性1 |
| `attr2` | `string` | カスタム属性2 |
| `attr3` | `string` | カスタム属性3 |
| `attr4` | `string` | カスタム属性4 |
| `attr5` | `string` | カスタム属性5 |
| `attr6` | `string` | カスタム属性6 |
| `attr7` | `string` | カスタム属性7 |
| `attr8` | `string` | カスタム属性8 |
| `attr9` | `string` | カスタム属性9 |
| `attr10` | `string` | カスタム属性10 |
| `keyword` | `string` | キーワード |
| `created_at` | `timestamp` | 作成日時 |
| `updated_at` | `timestamp` | 更新日時 |

### 在庫一覧

指定した条件の在庫情報を取得します。
詳しくは、[LOGILESS公式ドキュメント](https://app2.logiless.com/developer/documents/interface/logical_inventory_summary)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**マーチャントID**|✓|-|LOGILESSのマーチャントIDを入力します。<br>取得方法については、[マーチャントIDはどこで確認しますか？ – LOGILESS ヘルプセンター](https://support.logiless.com/faq/5997/)をご確認ください。|
|**在庫レイヤー**|✓|商品|在庫のレイヤーを選択します。<br><ul><li>商品</li><li>倉庫</li></ul>|
|**倉庫ID**|-|-|在庫レイヤーで「倉庫」を選択した場合に表示されます。特定の倉庫の在庫情報のみを取得する場合に入力します。|
|**商品区分**|✓|通常商品|商品区分を選択します。<br><ul><li>通常商品</li><li>セット商品</li><li>集合包装</li></ul>|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
| `id` | `long` | 在庫ID |
| `layer` | `string` | レイヤー（集計単位） |
| `ordered` | `long` | 発注中 |
| `in_transit` | `long` | 入荷中 |
| `received` | `long` | 入荷済 |
| `available` | `long` | 利用可能 |
| `blocked` | `long` | 保留中 |
| `allocated` | `long` | ピッキング中 |
| `stock_out` | `long` | 出庫済 |
| `free` | `long` | フリー在庫 |
| `shipped` | `long` | 出荷済 |
| `issued` | `long` | 出庫済 |
| `is_reorder_level` | `long` | 発注点到達フラグ |
| `reached_reorder_level_at` | `timestamp` | 発注点到達日時 |
| `created_at` | `timestamp` | 作成日時 |
| `updated_at` | `timestamp` | 更新日時 |
| `article` | `json` | 商品 |
| `warehouse` | `json` | 倉庫 |

### 保管状況一覧

指定した条件の保管状況情報を取得します。
詳しくは、[LOGILESS公式ドキュメント](https://app2.logiless.com/developer/documents/interface/actual_inventory_summary)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**マーチャントID**|✓|-|LOGILESSのマーチャントIDを入力します。<br>取得方法については、[マーチャントIDはどこで確認しますか？ – LOGILESS ヘルプセンター](https://support.logiless.com/faq/5997/)をご確認ください。|
|**在庫レイヤー**|-|-|在庫のレイヤーを選択します。<br><ul><li>商品</li><li>倉庫</li><li>ロケーション</li><li>出荷期限日</li><li>ロット番号</li></ul>|
|**商品区分**|-|-|商品区分を選択します。<br><ul><li>通常商品</li><li>セット商品</li><li>集合包装</li></ul>|
|**倉庫ID**|-|-|特定の倉庫の保管状況のみを取得する場合に入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
| `id` | `long` | 在庫ID |
| `layer` | `string` | 在庫レイヤー（集計単位） |
| `deadline` | `timestamp` | 期限 |
| `lot_number` | `string` | ロット番号 |
| `received` | `long` | 入荷済 |
| `available` | `long` | 利用可能 |
| `blocked` | `long` | 保留中 |
| `allocated` | `long` | ピッキング中 |
| `shipped` | `long` | 出荷済 |
| `issued` | `long` | 出庫済 |
| `actual_unit` | `string` | 実在庫単位 |
| `logical_unit` | `string` | 論理単位 |
| `created_at` | `timestamp` | 作成日時 |
| `updated_at` | `timestamp` | 更新日時 |
| `logical_article_id` | `string` | 論理商品ID |
| `article` | `json` | 商品 |
| `location` | `json` | ロケーション |
| `warehouse` | `json` | 倉庫 |

### 在庫操作ログ一覧

指定した条件の在庫操作ログ情報を取得します。
詳しくは、[LOGILESS公式ドキュメント](https://app2.logiless.com/developer/documents/interface/transaction_log)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**マーチャントID**|✓|-|LOGILESSのマーチャントIDを入力します。<br>取得方法については、[マーチャントIDはどこで確認しますか？ – LOGILESS ヘルプセンター](https://support.logiless.com/faq/5997/)をご確認ください。|
|**在庫操作区分**|-|-|在庫操作の区分で絞り込む場合に入力します。<br><ul><li>入荷予定</li><li>入荷予定取消</li><li>入荷</li><li>入荷取消</li><li>入庫</li><li>引当</li><li>移動</li><li>出庫</li><li>物理引当</li><li>出荷</li><li>出荷取消</li><li>返品入荷</li><li>変換</li><li>実地棚卸</li></ul>|
|**商品コード**|-|-|特定の商品の在庫操作ログのみを取得する場合に入力します。|
|**倉庫ID**|-|-|特定の倉庫の在庫操作ログのみを取得する場合に入力します。|
|**操作日時（From）**|-|-|取得する在庫操作ログの期間（開始日時）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|
|**操作日時（To）**|-|-|取得する在庫操作ログの期間（終了日時）を入力します。<br>フォーマット: `YYYY-MM-DD HH:MM:SS`|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
| `id` | `long` | ログID |
| `transaction_type` | `string` | 操作種別 |
| `ordered` | `long` | 発注中数量の増減 |
| `in_transit` | `long` | 入荷中数量の増減 |
| `transferring` | `long` | 転送中数量の増減 |
| `received` | `long` | 入荷済数量の増減 |
| `allocated` | `long` | 引当て済数量の増減 |
| `available` | `long` | 保管中数量の増減 |
| `moving` | `long` | 移動中数量の増減 |
| `blocked` | `long` | 保留中数量の増減 |
| `issued` | `long` | 出庫数量の増減 |
| `shipped` | `long` | 出荷数量の増減 |
| `article_type` | `string` | 商品タイプ |
| `multiplier` | `long` | 乗数 |
| `deadline` | `string` | 期限 |
| `lot_number` | `string` | ロット番号 |
| `is_force` | `boolean` | 強制フラグ |
| `source` | `json` | 元情報 |
| `remarks` | `string` | 備考 |
| `logical_available` | `long` | 論理利用可能数量 |
| `created_at` | `timestamp` | 作成日時 |
| `updated_at` | `timestamp` | 更新日時 |
| `article` | `json` | 商品 |
| `location_from` | `json` | 元ロケーション |
| `location_to` | `json` | 先ロケーション |
| `logical_article` | `json` | 論理商品 |
| `outbound_delivery` | `string` | 出荷伝票 |
| `warehouse` | `json` | 倉庫 |

### 倉庫別発注点一覧

指定した条件の倉庫別発注点情報を取得します。
詳しくは、[LOGILESS公式ドキュメント](https://app2.logiless.com/developer/documents/interface/reorder_point)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**マーチャントID**|✓|-|LOGILESSのマーチャントIDを入力します。<br>取得方法については、[マーチャントIDはどこで確認しますか？ – LOGILESS ヘルプセンター](https://support.logiless.com/faq/5997/)をご確認ください。|
|**商品コード**|-|-|特定の商品の倉庫別発注点のみを取得する場合に入力します。|
|**倉庫ID**|-|-|特定の倉庫の発注点情報のみを取得する場合に入力します。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
| `id` | `long` | ID |
| `reorder_point` | `long` | 発注点 |
| `inventory_constant` | `long` | 在庫定数 |
| `inventory_summary_by_warehouse` | `json` | 倉庫別在庫サマリ |
| `created_at` | `timestamp` | 作成日時 |
| `updated_at` | `timestamp` | 更新日時 |
| `article` | `json` | 商品 |
| `warehouse` | `json` | 倉庫 |
