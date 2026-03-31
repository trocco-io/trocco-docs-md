---
slug: data-source-money-forward-cloud-expense
title: 転送元 - マネーフォワード クラウド経費
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
本ページでは、マネーフォワード クラウド経費からデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - マネーフォワード クラウド経費](/docs/connection-configuration-money-forward-cloud-expense)を参照ください。

## 利用上の注意・制約

### API制限

マネーフォワード クラウド経費のAPI制限により、以下の点にご注意ください。

:::(Warning) (API利用上の注意)

- 同時多重リクエストはシステム負荷の原因となるため避けてください

:::

### データ取得の制限

- 認証したユーザーがアクセス可能なデータのみ取得できます
- 削除されたデータは取得できません
- 日付の期間指定がある場合、3か月以内で指定してください

### クロスプロダクト制限

:::(Error) (重要)

クラウド経費用のアプリケーションIDとシークレットは、他のマネーフォワード製品では使用できません。

:::

## 事前準備

### 接続情報の設定

マネーフォワード クラウド経費からデータを取得するには、事前に接続情報の設定が必要です。
詳しくは、[接続情報 - マネーフォワード クラウド経費](/docs/connection-configuration-money-forward-cloud-expense)を参照ください。

## 取得対象

### 事業所一覧

事業所一覧を取得します。
詳しくは、[マネーフォワード クラウド経費公式APIドキュメント](https://expense.moneyforward.com/api/index.html#/office/find_offices)を参照ください。

#### 設定項目

設定項目はありません。

#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|-|
|`identification_code`|`string`|-|
|`office_type_id`|`long`|-|
|`name`|`string`|-|
### 部門一覧

指定した事業所内の部門一覧を取得します。
詳しくは、[マネーフォワード クラウド経費公式APIドキュメント](https://expense.moneyforward.com/api/index.html#/dept/find_depts)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|事業者ID|✓|-|事業所IDを指定します。<br>事業所IDは、**取得対象**で**事業所一覧**を選択して取得できます。|
#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|-|
|`code`|`string`|-|
|`disp_order`|`long`|-|
|`is_active`|`string`|-|
|`name`|`string`|-|
|`parent_id`|`string`|-|
|`ancestry_depth`|`long`|-|
|`ex_journal_dept_id`|`string`|-|
|`root_id`|`string`|-|
### 経費科目一覧

指定した事業所内の経費科目一覧を取得します。
詳しくは、[マネーフォワード クラウド経費公式APIドキュメント](https://expense.moneyforward.com/api/index.html#/ex_item/find_ex_items)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|事業者ID|✓|-|事業所IDを指定します。<br>事業所IDは、**取得対象**で**事業所一覧**を選択して取得できます。|
#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|-|
|`name`|`string`|-|
|`code`|`string`|-|
|`is_active`|`boolean`|-|
|`item_id`|`string`|-|
|`sub_item_id`|`string`|-|
|`default_excise_id`|`string`|-|
|`item`|`json`|-|
|`sub_item`|`json`|-|
|`default_dr_excise`|`json`|-|
### 申請に紐づく仕訳一覧

指定した事業所内の申請に紐づく仕訳一覧を取得します。
詳しくは、[マネーフォワード クラウド経費公式APIドキュメント](https://expense.moneyforward.com/api/index.html#/ex_journal/find_office_ex_journals_by_ex_reports)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|事業者ID|✓|-|事業所IDを指定します。<br>事業所IDは、**取得対象**で**事業所一覧**を選択して取得できます。|
|日付（開始）|-|-|日付の開始日を指定します。<br>YYYY-MM-DD形式で入力します（例: 2024-01-01）。|
|日付（終了）|-|-|日付の終了日を指定します。<br>YYYY-MM-DD形式で入力します（例: 2024-03-31）。|
#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`ex_report_id`|`string`|-|
|`id`|`string`|-|
|`office_id`|`string`|-|
|`recognized_at`|`string`|-|
|`memo`|`string`|-|
|`ex_journal_branches`|`json`|-|
### 明細に紐づく仕訳一覧

指定した事業所内の明細に紐づく仕訳一覧を取得します。
詳しくは、[マネーフォワード クラウド経費公式APIドキュメント](https://expense.moneyforward.com/api/index.html#/ex_journal/find_office_ex_journals_by_ex_transactions)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|事業者ID|✓|-|事業所IDを指定します。<br>事業所IDは、**取得対象**で**事業所一覧**を選択して取得できます。|
|日付（開始）|-|-|日付の開始日を指定します。<br>YYYY-MM-DD形式で入力します（例: 2024-01-01）。|
|日付（終了）|-|-|日付の終了日を指定します。<br>YYYY-MM-DD形式で入力します（例: 2024-03-31）。|
#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|-|
|`office_id`|`string`|-|
|`recognized_at`|`string`|-|
|`memo`|`string`|-|
|`ex_journal_branches`|`json`|-|
|`ex_transaction_id`|`string`|-|
|`invoice_registration_number`|`string`|-|
|`special_exception_status`|`string`|-|
|`ex_transaction_custom_field_values`|`json`|-|
### 申請一覧

指定した事業所内の申請一覧を取得します。
詳しくは、[マネーフォワード クラウド経費公式APIドキュメント](https://expense.moneyforward.com/api/index.html#/ex_report/find_office_ex_reports)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|事業者ID|✓|-|事業所IDを指定します。<br>事業所IDは、**取得対象**で**事業所一覧**を選択して取得できます。|
#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|-|
|`ex_report_type_id`|`string`|-|
|`office_member_id`|`string`|-|
|`number`|`long`|-|
|`title`|`string`|-|
|`submitted_at`|`timestamp`|-|
|`approved_at`|`timestamp`|-|
|`created_at`|`timestamp`|-|
|`updated_at`|`timestamp`|-|
|`status`|`string`|-|
|`suspense_payment_reports`|`json`|-|
|`ex_report_approvals`|`json`|-|
|`ex_report_form_inputs`|`json`|-|
### 経費明細一覧

指定した事業所内の経費明細一覧を取得します。
詳しくは、[マネーフォワード クラウド経費公式APIドキュメント](https://expense.moneyforward.com/api/index.html#/ex_transaction/find_office_ex_transactions)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|事業者ID|✓|-|事業所IDを指定します。<br>事業所IDは、**取得対象**で**事業所一覧**を選択して取得できます。|
|日付（開始）|✓|-|日付の開始日を指定します。<br>YYYY-MM-DD形式で入力します（例: 2024-01-01）。|
|日付（終了）|-|-|日付の終了日を指定します。<br>YYYY-MM-DD形式で入力します（例: 2024-03-31）。|
#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|-|
|`number`|`long`|-|
|`remark`|`string`|-|
|`recognized_at`|`string`|-|
|`value`|`long`|-|
|`memo`|`string`|-|
|`report_number`|`string`|-|
|`jpyrate`|`double`|-|
|`currency`|`string`|-|
|`use_custom_jpy_rate`|`boolean`|-|
|`automatic_status`|`string`|-|
|`error_message`|`string`|-|
|`warning_message`|`string`|-|
|`waiting_message`|`string`|-|
|`office_member_id`|`string`|-|
|`ex_item_id`|`string`|-|
|`dr_excise_id`|`string`|-|
|`dept_id`|`string`|-|
|`project_code_id`|`string`|-|
|`project_id`|`string`|-|
|`cr_item_id`|`string`|-|
|`cr_sub_item_id`|`string`|-|
|`attendants_count`|`long`|-|
|`created_at`|`timestamp`|-|
|`updated_at`|`timestamp`|-|
|`receipt_type`|`string`|-|
|`office_member`|`json`|-|
|`ex_item`|`json`|-|
|`dr_excise`|`json`|-|
|`cr_item`|`json`|-|
|`cr_sub_item`|`json`|-|
|`dept`|`json`|-|
|`project_code`|`json`|-|
|`project`|`json`|-|
|`ex_report`|`json`|-|
|`ex_report_unit`|`json`|-|
|`mf_file`|`json`|-|
|`attendants`|`json`|-|
|`attendants_summary`|`json`|-|
|`family_state`|`long`|-|
|`ex_transaction_family`|`json`|-|
|`invoice_registration_number`|`string`|-|
|`special_exception_status`|`string`|-|
|`invoice_kind`|`long`|-|
|`excise_code`|`string`|-|
|`excise_value`|`long`|-|
|`purchase_tax_credit`|`long`|-|
|`ex_transaction_custom_field_values`|`json`|-|
### 経費申請一覧

指定した事業所内の経費申請一覧を取得します。
詳しくは、[マネーフォワード クラウド経費公式APIドキュメント](https://expense.moneyforward.com/api/index.html#/expense_report/find_office_expense_reports)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|事業者ID|✓|-|事業所IDを指定します。<br>事業所IDは、**取得対象**で**事業所一覧**を選択して取得できます。|
|作成日時（開始）|-|-|作成日時の開始日時を指定します。<br>YYYY-MM-DDTHH:MM:SSZ形式で入力します（例: 2024-01-01T00:00:00Z）。|
|作成日時（終了）|-|-|作成日時の終了日時を指定します。<br>YYYY-MM-DDTHH:MM:SSZ形式で入力します（例: 2024-03-31T23:59:59Z）。|
#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|-|
|`ex_report_type_id`|`string`|-|
|`office_member_id`|`string`|-|
|`number`|`long`|-|
|`title`|`string`|-|
|`submitted_at`|`timestamp`|-|
|`approved_at`|`timestamp`|-|
|`created_at`|`timestamp`|-|
|`updated_at`|`timestamp`|-|
|`status`|`string`|-|
|`suspense_payment_reports`|`json`|-|
|`ex_report_approvals`|`json`|-|
|`ex_report_form_inputs`|`json`|-|
### 事前・各種申請一覧

指定した事業所内の事前・各種申請一覧を取得します。
詳しくは、[マネーフォワード クラウド経費公式APIドキュメント](https://expense.moneyforward.com/api/index.html#/general_report/find_office_general_reports)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|事業者ID|✓|-|事業所IDを指定します。<br>事業所IDは、**取得対象**で**事業所一覧**を選択して取得できます。|
|作成日時（開始）|-|-|作成日時の開始日時を指定します。<br>YYYY-MM-DDTHH:MM:SSZ形式で入力します（例: 2024-01-01T00:00:00Z）。|
|作成日時（終了）|-|-|作成日時の終了日時を指定します。<br>YYYY-MM-DDTHH:MM:SSZ形式で入力します（例: 2024-03-31T23:59:59Z）。|
#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|-|
|`ex_report_type_id`|`string`|-|
|`office_member_id`|`string`|-|
|`number`|`long`|-|
|`title`|`string`|-|
|`submitted_at`|`timestamp`|-|
|`approved_at`|`timestamp`|-|
|`created_at`|`timestamp`|-|
|`updated_at`|`timestamp`|-|
|`status`|`string`|-|
|`ex_report_approvals`|`json`|-|
|`ex_report_form_inputs`|`json`|-|
### 従業員一覧

指定した事業所内の従業員一覧を取得します。
詳しくは、[マネーフォワード クラウド経費公式APIドキュメント（v2）](https://expense.moneyforward.com/api/index.html#/office_member/find_office_members_v2)を参照ください。

#### 設定項目

|項目名|必須|デフォルト値|説明|
|---|---|---|---|
|事業者ID|✓|-|事業所IDを指定します。<br>事業所IDは、**取得対象**で**事業所一覧**を選択して取得できます。|
#### 取得データ

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`string`|-|
|`login_id`|`string`|-|
|`identification_code`|`string`|-|
|`number`|`string`|-|
|`name`|`string`|-|
|`created_at`|`timestamp`|-|
|`updated_at`|`timestamp`|-|
|`is_active`|`boolean`|-|
|`ex_activated_at`|`timestamp`|-|
|`is_ex_user`|`boolean`|-|
|`is_ex_authorizer`|`boolean`|-|
|`is_ex_administrator`|`boolean`|-|
|`ex_office_member_setting`|`json`|-|
|`office_member_transaction_setting`|`json`|-|
|`notification_settings`|`json`|-|
|`reimburse_bank_account`|`json`|-|
|`office_member_depts`|`json`|-|
