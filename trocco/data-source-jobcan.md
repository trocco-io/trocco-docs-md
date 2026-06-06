---
articleId: 74d9d0c9-5849-4650-abd5-b0742809dfc6
slug: data-source-jobcan
title: 転送元 - ジョブカン経費精算/ワークフロー
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---

本ページでは、ジョブカン経費精算/ワークフローからデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - ジョブカン経費精算/ワークフロー](/docs/connection-configuration-jobcan)を参照ください。

:::(Warning) (β版APIの利用について)

本コネクタは、提供元サービス「ジョブカン経費精算/ワークフロー」のβ版APIを利用しています。

β版APIは安定性や継続性が保証されておらず、API仕様が予告なく変更される可能性があります。
そのため、TROCCOにおいても予告なく仕様変更・提供停止となる可能性がありますので、あらかじめご了承ください。

:::

## 利用上の注意・制約

ジョブカンAPIには以下の制限があります。

### レート制限

ジョブカン経費精算/ワークフローAPI（β版）には、1アクセストークンあたり5000リクエスト/時間のレート制限があります。
詳しくは、[ジョブカン経費精算/ワークフローAPI（β版）](https://ssl.wf.jobcan.jp/api_doc)を参照ください。

## 取得対象

### ユーザー一覧

ジョブカンに登録されているユーザーの一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|（設定項目なし）|-|-|このエンドポイントの取得にはパラメータが必要ありません。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|ユーザーID|
|`user_code`|`string`|ユーザーコード|
|`email`|`string`|メールアドレス|
|`last_name`|`string`|姓|
|`first_name`|`string`|名|
|`is_approver`|`boolean`|承認者フラグ|
|`is_modifier`|`boolean`|修正可能者設定フラグ|
|`user_role`|`long`|ユーザ権限|
|`user_groups`|`json`|ユーザーが属するグループ情報|
|`user_positions`|`json`|ユーザーの役職情報|
|`user_bank_account`|`json`|ユーザーの銀行口座情報|
|`memo`|`string`|メモ|

### グループ一覧

ジョブカンに登録されているグループの一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|（設定項目なし）|-|-|このエンドポイントの取得にはパラメータが必要ありません。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`group_code`|`string`|グループコード|
|`group_name`|`string`|グループ名|
|`parent_group_code`|`string`|親グループコード|
|`description`|`string`|説明|

### 役職一覧

ジョブカンに登録されている役職の一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|（設定項目なし）|-|-|このエンドポイントの取得にはパラメータが必要ありません。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`position_code`|`string`|役職コード|
|`position_name`|`string`|役職名|
|`description`|`string`|説明|

### プロジェクト一覧

ジョブカンに登録されているプロジェクトの一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|（設定項目なし）|-|-|このエンドポイントの取得にはパラメータが必要ありません。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`project_code`|`string`|プロジェクトコード|
|`project_name`|`string`|プロジェクト名|

### フォーム一覧

ジョブカンに登録されている申請フォームの一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|（設定項目なし）|-|-|このエンドポイントの取得にはパラメータが必要ありません。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`|フォームID|
|`name`|`string`|フォーム名|
|`form_type`|`string`|フォームタイプ|
|`settlement_type`|`string`|精算タイプ|
|`category`|`string`|カテゴリ|
|`view_type`|`string`|表示タイプ|
|`description`|`string`|説明|

### 取引先一覧

ジョブカンに登録されている取引先（会社）情報の一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|（設定項目なし）|-|-|このエンドポイントの取得にはパラメータが必要ありません。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`company_name`|`string`|会社名|
|`company_code`|`string`|会社コード|
|`zip_code`|`string`|郵便番号|
|`address`|`string`|住所|
|`bank_code`|`string`|銀行コード|
|`bank_name`|`string`|銀行名|
|`branch_code`|`string`|支店コード|
|`branch_name`|`string`|支店名|
|`bank_account_type_code`|`string`|銀行口座タイプコード|
|`bank_account_code`|`string`|銀行口座番号|
|`bank_account_name_kana`|`string`|銀行口座名義（カナ）|
|`invoice_registrated_number`|`string`|インボイス登録番号|

### 申請書一覧

ジョブカンに登録されている申請書の一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|（設定項目なし）|-|-|このエンドポイントの取得にはパラメータが必要ありません。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|申請書ID|
|`title`|`string`|申請書タイトル|
|`form_id`|`long`|フォームID|
|`form_name`|`string`|フォーム名|
|`form_type`|`string`|フォームタイプ|
|`settlement_type`|`string`|精算タイプ|
|`status`|`string`|ステータス|
|`applied_date`|`string`|申請日|
|`applicant_code`|`string`|申請者コード|
|`applicant_last_name`|`string`|申請者姓|
|`applicant_first_name`|`string`|申請者名|
|`applicant_group_name`|`string`|申請者所属グループ名|
|`applicant_position_name`|`string`|申請者役職名|
|`proxy_applicant_last_name`|`string`|代理申請者姓|
|`proxy_applicant_first_name`|`string`|代理申請者名|
|`group_name`|`string`|グループ名|
|`group_code`|`string`|グループコード|
|`project_name`|`string`|プロジェクト名|
|`project_code`|`string`|プロジェクトコード|
|`flow_step_name`|`string`|フロー段階名|
|`is_content_changed`|`boolean`|申請内容修正フラグ|
|`total_amount`|`long`|合計金額|
|`pay_at`|`string`|支払予定日|
|`final_approval_period`|`string`|最終承認期間|
|`final_approved_date`|`string`|最終承認日|
|`applicant_group_code`|`string`|申請者所属グループコード|

### 確定済み未出力仕訳情報一覧

ジョブカンに登録されている確定済み未出力の仕訳情報一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|（設定項目なし）|-|-|このエンドポイントの取得にはパラメータが必要ありません。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`journal_id`|`long`|仕訳ID|
|`journal_type`|`string`|仕訳タイプ|
|`journal_date`|`string`|仕訳日|
|`req_date`|`string`|申請日|
|`journal_summary`|`string`|仕訳摘要|
|`view_id`|`string`|ビューID|
|`specifics_row_number`|`long`|明細行番号|
|`company_code`|`string`|会社コード|
|`company_name`|`string`|会社名|
|`user_code`|`string`|ユーザーコード|
|`user_name`|`string`|ユーザー名|
|`debit_account_title_code`|`string`|借方勘定科目コード|
|`debit_account_title_name`|`string`|借方勘定科目名|
|`debit_account_sub_title_code`|`string`|借方補助科目コード|
|`debit_account_sub_title_name`|`string`|借方補助科目名|
|`debit_tax_category_code`|`string`|借方税区分コード|
|`debit_tax_category_name`|`string`|借方税区分名|
|`debit_amount`|`long`|借方金額|
|`debit_tax_amount`|`long`|借方税額|
|`debit_amount_without_tax`|`long`|借方税抜金額|
|`debit_group_code`|`string`|借方グループコード|
|`debit_group_name`|`string`|借方グループ名|
|`debit_accounting_group_code`|`string`|借方会計グループコード|
|`debit_project_code`|`string`|借方プロジェクトコード|
|`debit_project_name`|`string`|借方プロジェクト名|
|`credit_account_title_code`|`string`|貸方勘定科目コード|
|`credit_account_title_name`|`string`|貸方勘定科目名|
|`credit_account_sub_title_code`|`string`|貸方補助科目コード|
|`credit_account_sub_title_name`|`string`|貸方補助科目名|
|`credit_tax_category_code`|`string`|貸方税区分コード|
|`credit_tax_category_name`|`string`|貸方税区分名|
|`credit_amount`|`long`|貸方金額|
|`credit_tax_amount`|`long`|貸方税額|
|`credit_amount_without_tax`|`long`|貸方税抜金額|
|`credit_group_code`|`string`|貸方グループコード|
|`credit_group_name`|`string`|貸方グループ名|
|`credit_accounting_group_code`|`string`|貸方会計グループコード|
|`credit_project_code`|`string`|貸方プロジェクトコード|
|`credit_project_name`|`string`|貸方プロジェクト名|
|`custom_journal_item_list`|`json`|カスタム仕訳項目一覧|
|`invoice_registrated_number`|`string`|インボイス登録番号|

### 汎用マスタレコード一覧

ジョブカンに登録されている汎用マスタの一覧を取得します。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|**汎用マスタのコード**|✓|-|取得対象とする汎用マスタのコードを指定します。ジョブカンの管理画面から汎用マスタコードを確認し、入力してください。|

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`generic_master_record_code`|`string`|汎用マスタレコードコード|
|`title_name`|`string`|タイトル名|
|`title_content`|`string`|タイトル内容|
|`description`|`string`|説明|
|`memo`|`string`|メモ|
