---
articleId: 10f97e52-5f99-4b41-b720-e044898c329e
slug: data-source-freee-hr
title: 転送元 - freee人事労務
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---

本ページでは、freee人事労務からデータを取得するための設定（転送設定）について説明します。
接続に関する設定については、[接続情報 - freee人事労務](/docs/connection-configuration-freee-hr)を参照ください。

詳しい説明などは[freee Developers Community - 人事労務APIリファレンス](https://developer.freee.co.jp/reference/hr/reference)を参照ください。

## 利用上の注意・制約

### APIレート制限

freee人事労務APIには、事業所単位で1時間に10000リクエストのレート制限があります。
大量のデータを転送する場合は、この制限に達する可能性があるため、実行時間に余裕を持って設定してください。

### 権限について

認証に使用したユーザーの権限によって、取得できるデータが異なります。

- 管理者ユーザー（company_admin）：他従業員のデータにアクセス可能
- 勤怠部門管理者（attendance_manager）：勤怠に関する部門内のデータにアクセス可能
- 一般従業員（self_only）：自分自身の情報のみ閲覧・管理可能
- カスタム権限（custom-XXXX）：事業所ごとに設定されたカスタム権限に基づきアクセス可能

## 設定項目

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| freee人事労務接続情報 | ✓ | - | TROCCOに登録したfreee人事労務接続情報を選択します。 |
| 取得対象 | ✓ | - | freee人事労務APIから取得したい情報を選択します。 |

## 取得対象

取得対象ごとに、追加の設定項目を入力します。

### 打刻一覧

指定した従業員の打刻一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 従業員ID | ✓ | - | データを取得する対象の従業員IDを入力します。 |
| 打刻期間（開始日） | - | 当月の打刻開始日 | 取得する打刻の開始日を入力します。デフォルトは当月の打刻開始日です。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`） |
| 打刻期間（終了日） | - | 当日 | 取得する打刻の終了日を入力します。デフォルトは当日です。<br>形式：`YYYY-MM-DD`（例：`2024-01-31`） |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 打刻ID |
|`date`|`string`| 日付 |
|`type`|`string`| 打刻種別 |
|`datetime`|`timestamp`| 打刻日時 |
|`original_datetime`|`timestamp`| 元の打刻日時 |
|`note`|`string`| 備考 |

### ログインユーザー

ログインユーザーの情報を取得します。
事業所IDや従業員IDを確認するために使用します。

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 事業所ID |
|`name`|`string`| 事業所名 |
|`role`|`string`| ロール |
|`external_cid`|`string`| 外部識別子 |
|`employee_id`|`long`| 従業員ID |
|`display_name`|`string`| 表示名 |

### 給与明細一覧

指定した年月の給与明細一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 年 | ✓ | - | 取得対象の年を入力します。 |
| 月 | ✓ | - | 取得対象の月を入力します。 |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 給与明細ID |
|`company_id`|`long`| 事業所ID |
|`employee_id`|`long`| 従業員ID |
|`employee_name`|`string`| 従業員名 |
|`employee_display_name`|`string`| 従業員表示名 |
|`employee_num`|`string`| 従業員番号 |
|`pay_date`|`string`| 支払日 |
|`start_date`|`string`| 開始日 |
|`closing_date`|`string`| 締め日 |
|`variable_pay_start_date`|`string`| 変動給開始日 |
|`variable_pay_closing_date`|`string`| 変動給締め日 |
|`fixed`|`boolean`| 確定済みかどうか |
|`calc_status`|`string`| 計算ステータス |
|`calculated_at`|`timestamp`| 計算日時 |
|`pay_calc_type`|`string`| 給与計算種別 |
|`board_member_remuneration_amount`|`string`| 役員報酬額 |
|`basic_pay_amount`|`string`| 基本給額 |
|`work_days`|`string`| 勤務日数 |
|`normal_work_time`|`string`| 所定労働時間 |
|`normal_work_days`|`string`| 所定労働日数 |
|`work_mins_by_paid_holiday`|`string`| 有給勤務分数 |
|`num_paid_holidays`|`string`| 有給取得日数 |
|`is_board_member`|`boolean`| 役員かどうか |
|`total_attendance_deduction_amount`|`string`| 勤怠控除合計額 |
|`total_allowance_amount`|`string`| 手当合計額 |
|`total_deduction_amount`|`string`| 控除合計額 |
|`net_payment_amount`|`string`| 差引支給額 |
|`gross_payment_amount`|`string`| 総支給額 |
|`total_worked_days_count`|`string`| 勤務日数合計 |
|`total_taxable_payment_amount`|`string`| 課税対象額合計 |
|`total_expense_amount`|`string`| 経費合計額 |
|`total_transfer_amount`|`string`| 振込合計額 |
|`total_annual_payment_amount`|`string`| 年間支給額合計 |
|`payments`|`json`| 支給項目 |
|`deductions`|`json`| 控除項目 |
|`attendances`|`json`| 勤怠項目 |
|`overtime_pays`|`json`| 残業手当 |
|`remark`|`string`| 備考 |
|`deductions_employer_share`|`json`| 会社負担控除 |
|`total_deduction_employer_share`|`string`| 会社負担控除合計額 |

### 勤怠

指定した従業員の特定日の勤怠情報を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 従業員ID | ✓ | - | データを取得する対象の従業員IDを入力します。 |
| 年月日 | ✓ | - | 取得する勤怠の日付を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`） |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`break_records`|`json`| 休憩記録 |
|`clock_in_at`|`timestamp`| 出勤打刻日時 |
|`clock_out_at`|`timestamp`| 退勤打刻日時 |
|`date`|`string`| 日付 |
|`day_pattern`|`string`| 日パターン |
|`schedule_pattern`|`string`| スケジュールパターン |
|`early_leaving_mins`|`long`| 早退分数 |
|`half_holiday_type`|`string`| 半休種別 |
|`half_paid_holiday_mins`|`long`| 半休有給分数 |
|`half_special_holiday_mins`|`long`| 半休特別休暇分数 |
|`hourly_paid_holiday_mins`|`long`| 時間単位有給分数 |
|`hourly_special_holiday_mins`|`long`| 時間単位特別休暇分数 |
|`is_absence`|`boolean`| 欠勤かどうか |
|`is_editable`|`boolean`| 編集可能かどうか |
|`lateness_mins`|`long`| 遅刻分数 |
|`normal_work_clock_in_at`|`timestamp`| 所定労働開始打刻日時 |
|`normal_work_clock_out_at`|`timestamp`| 所定労働終了打刻日時 |
|`normal_work_mins`|`long`| 所定労働分数 |
|`note`|`string`| 備考 |
|`paid_holiday`|`double`| 有給休暇日数 |
|`paid_holidays`|`json`| 有給休暇 |
|`special_holiday`|`double`| 特別休暇日数 |
|`special_holiday_setting_id`|`long`| 特別休暇設定ID |
|`use_attendance_deduction`|`boolean`| 勤怠控除を使用するかどうか |
|`use_default_work_pattern`|`boolean`| デフォルト勤務パターンを使用するかどうか |
|`use_half_compensatory_holiday`|`boolean`| 半休代休を使用するかどうか |
|`total_overtime_work_mins`|`long`| 残業総分数 |
|`total_holiday_work_mins`|`long`| 休日出勤総分数 |
|`total_latenight_work_mins`|`long`| 深夜労働総分数 |
|`not_auto_calc_work_time`|`boolean`| 勤務時間を自動計算しないかどうか |
|`total_excess_statutory_work_mins`|`long`| 法定外労働総分数 |
|`total_latenight_excess_statutory_work_mins`|`long`| 深夜法定外労働総分数 |
|`total_overtime_except_normal_work_mins`|`long`| 所定外労働総分数 |
|`total_latenight_overtime_except_normal_work_mins`|`long`| 深夜所定外労働総分数 |
|`work_record_segments`|`json`| 勤怠記録セグメント |

### 勤怠タグ一覧

指定した従業員の勤怠タグ一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 従業員ID | ✓ | - | データを取得する対象の従業員IDを入力します。 |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 勤怠タグID |
|`company_id`|`long`| 事業所ID |
|`name`|`string`| 勤怠タグ名 |
|`description`|`string`| 説明 |
|`max_amount`|`long`| 最大数 |
|`published`|`boolean`| 公開フラグ |
|`is_employee_usable`|`boolean`| 従業員が使用可能かどうか |

### 勤怠情報月次サマリ

指定した従業員の月次勤怠サマリ情報を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 従業員ID | ✓ | - | データを取得する対象の従業員IDを入力します。 |
| 年 | ✓ | - | 取得対象の年を入力します。 |
| 月 | ✓ | - | 取得対象の月を入力します。 |
| 日次の勤怠情報を含める | - | - | 有効にすると、日次の勤怠情報も取得します。 |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`year`|`long`| 年 |
|`month`|`long`| 月 |
|`start_date`|`string`| 開始日 |
|`end_date`|`string`| 終了日 |
|`work_days`|`double`| 勤務日数 |
|`total_work_mins`|`long`| 総労働分数 |
|`total_normal_work_mins`|`long`| 所定労働総分数 |
|`total_excess_statutory_work_mins`|`long`| 法定外労働総分数 |
|`total_overtime_except_normal_work_mins`|`long`| 所定外労働総分数 |
|`total_overtime_within_normal_work_mins`|`long`| 所定内残業総分数 |
|`total_holiday_work_mins`|`long`| 休日出勤総分数 |
|`total_latenight_work_mins`|`long`| 深夜労働総分数 |
|`num_absences`|`double`| 欠勤日数 |
|`num_paid_holidays`|`double`| 有給取得日数 |
|`num_paid_holidays_and_hours`|`json`| 有給取得日数・時間 |
|`num_paid_holidays_left`|`double`| 残有給日数 |
|`num_paid_holidays_and_hours_left`|`json`| 残有給日数・時間 |
|`num_substitute_holidays_used`|`double`| 振替休日使用数 |
|`num_compensatory_holidays_used`|`double`| 代休使用数 |
|`num_special_holidays_used`|`double`| 特別休暇使用数 |
|`num_special_holidays_and_hours_used`|`json`| 特別休暇使用数・時間 |
|`total_lateness_and_early_leaving_mins`|`long`| 遅刻・早退総分数 |
|`multi_hourly_wages`|`json`| 複数時給 |
|`work_records`|`json`| 勤怠記録 |
|`total_deemed_paid_excess_statutory_work_mins`|`long`| みなし法定外労働総分数 |
|`total_deemed_paid_overtime_except_normal_work_mins`|`long`| みなし所定外労働総分数 |
|`total_shortage_work_mins`|`long`| 不足勤務総分数 |

### 勤務時間修正申請一覧

勤務時間修正申請の一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 申請開始日 | - | - | 取得する申請の申請開始日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`） |
| 申請終了日 | - | - | 取得する申請の申請終了日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-31`） |
| 対象開始日 | - | - | 取得する申請の対象開始日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`） |
| 対象終了日 | - | - | 取得する申請の対象終了日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-31`） |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 勤務時間修正申請ID |
|`company_id`|`long`| 事業所ID |
|`application_number`|`long`| 申請番号 |
|`applicant_id`|`long`| 申請者ID |
|`approver_ids`|`json`| 承認者ID一覧 |
|`target_date`|`string`| 対象日 |
|`clear_work_time`|`boolean`| 勤務時間を満たしているかどうか |
|`clock_in_at`|`string`| 出勤打刻 |
|`clock_out_at`|`string`| 退勤打刻 |
|`work_records`|`json`| 勤怠記録 |
|`lateness_mins`|`long`| 遅刻分数 |
|`early_leaving_mins`|`long`| 早退分数 |
|`break_records`|`json`| 休憩記録 |
|`issue_date`|`string`| 申請日 |
|`comment`|`string`| コメント |
|`status`|`string`| ステータス |
|`passed_auto_check`|`boolean`| 自動チェック通過済みかどうか |

### 月次勤怠締め申請一覧

月次勤怠締め申請の一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 申請開始日 | - | - | 取得する申請の申請開始日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`） |
| 申請終了日 | - | - | 取得する申請の申請終了日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-31`） |
| 対象開始日 | - | - | 取得する申請の対象開始日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`） |
| 対象終了日 | - | - | 取得する申請の対象終了日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-31`） |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 月次勤怠締め申請ID |
|`company_id`|`long`| 事業所ID |
|`application_number`|`long`| 申請番号 |
|`applicant_id`|`long`| 申請者ID |
|`approver_ids`|`json`| 承認者ID一覧 |
|`target_date`|`string`| 対象日 |
|`issue_date`|`string`| 申請日 |
|`status`|`string`| ステータス |
|`passed_auto_check`|`boolean`| 自動チェック通過済みかどうか |

### 残業申請一覧

残業申請の一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 申請開始日 | - | - | 取得する申請の申請開始日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`） |
| 申請終了日 | - | - | 取得する申請の申請終了日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-31`） |
| 対象開始日 | - | - | 取得する申請の対象開始日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`） |
| 対象終了日 | - | - | 取得する申請の対象終了日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-31`） |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 残業申請ID |
|`company_id`|`long`| 事業所ID |
|`application_number`|`long`| 申請番号 |
|`applicant_id`|`long`| 申請者ID |
|`approver_ids`|`json`| 承認者ID一覧 |
|`target_date`|`string`| 対象日 |
|`start_at`|`string`| 開始日時 |
|`end_at`|`string`| 終了日時 |
|`issue_date`|`string`| 申請日 |
|`comment`|`string`| コメント |
|`status`|`string`| ステータス |
|`revoke_status`|`string`| 取下げステータス |
|`passed_auto_check`|`boolean`| 自動チェック通過済みかどうか |

### 全期間の従業員一覧

指定した事業所に所属する全期間の従業員一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 給与計算対象外の従業員情報を含める | - | - | 有効にすると、給与計算対象外の従業員情報も取得します。 |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 従業員ID |
|`num`|`string`| 従業員番号 |
|`display_name`|`string`| 表示名 |
|`entry_date`|`string`| 入社日 |
|`retire_date`|`string`| 退社日 |
|`user_id`|`long`| ユーザーID |
|`email`|`string`| メールアドレス |
|`payroll_calculation`|`boolean`| 給与計算対象かどうか |
|`closing_day`|`long`| 締日 |
|`pay_day`|`long`| 支払日 |
|`month_of_pay_day`|`string`| 支払月 |

### 従業員一覧

指定した年月に所属する従業員の一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 年 | ✓ | - | 取得対象の年を入力します。 |
| 月 | ✓ | - | 取得対象の月を入力します。<br>締日支払日設定が翌月払いの従業員情報の場合は、指定した月+1の値が検索結果として返されます。<br>例えば、翌月払いの従業員の2022/01の従業員情報を取得する場合は、年=2021、月=12を指定してください。 |
| 給与計算対象外の従業員情報を含める | - | - | 有効にすると、給与計算対象外の従業員情報も取得します。 |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 従業員ID |
|`company_id`|`long`| 事業所ID |
|`num`|`string`| 従業員番号 |
|`display_name`|`string`| 表示名 |
|`base_pension_num`|`string`| 基礎年金番号 |
|`employment_insurance_reference_number`|`string`| 雇用保険被保険者番号 |
|`birth_date`|`string`| 生年月日 |
|`entry_date`|`string`| 入社日 |
|`retire_date`|`string`| 退社日 |
|`user_id`|`long`| ユーザーID |
|`profile_rule`|`json`| プロフィールルール |
|`health_insurance_rule`|`json`| 健康保険ルール |
|`welfare_pension_insurance_rule`|`json`| 厚生年金保険ルール |
|`dependent_rules`|`json`| 扶養ルール |
|`bank_account_rule`|`json`| 銀行口座ルール |
|`basic_pay_rule`|`json`| 基本給ルール |
|`payroll_calculation`|`boolean`| 給与計算対象かどうか |
|`company_reference_date_rule_name`|`string`| 事業所基準日ルール名 |

### 従業員のカスタム項目

指定した従業員のカスタム項目情報を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 従業員ID | ✓ | - | データを取得する対象の従業員IDを入力します。 |
| 年 | ✓ | - | 取得対象の年を入力します。 |
| 月 | ✓ | - | 取得対象の月を入力します。 |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| カスタム項目グループID |
|`name`|`string`| グループ名 |
|`profile_custom_field_rules`|`json`| プロフィールカスタム項目ルール |

### 従業員の特別休暇一覧

指定した従業員の特別休暇一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 従業員ID | ✓ | - | データを取得する対象の従業員IDを入力します。 |
| 対象開始日 | - | - | 取得する特別休暇の開始日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`）<br>開始日と終了日は同時に指定してください。 |
| 対象終了日 | - | - | 取得する特別休暇の終了日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-12-31`）<br>開始日と終了日は同時に指定してください。 |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 従業員特別休暇ID |
|`company_id`|`long`| 事業所ID |
|`employee_id`|`long`| 従業員ID |
|`special_holiday_setting_id`|`long`| 特別休暇設定ID |
|`name`|`string`| 休暇名 |
|`type_name`|`string`| 種別名 |
|`paid_type`|`string`| 有給種別 |
|`attendance_rate_calc_type`|`string`| 出勤率計算種別 |
|`usage_day`|`string`| 使用日 |
|`valid_date_from`|`string`| 有効開始日 |
|`valid_date_to`|`string`| 有効終了日 |
|`days`|`long`| 付与日数 |
|`used`|`double`| 使用日数 |
|`num_days_and_hours_used`|`json`| 使用日数・時間 |
|`left`|`double`| 残日数 |
|`num_days_and_hours_left`|`json`| 残日数・時間 |

### 所属一覧

指定した日付時点の所属情報の一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 指定日 | ✓ | - | 所属情報を取得する基準日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-07-31`） |
| 給与計算対象外の従業員情報を含める | - | - | 有効にすると、給与計算対象外の従業員情報も取得します。 |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 所属ID |
|`num`|`string`| 従業員番号 |
|`display_name`|`string`| 表示名 |
|`entry_date`|`string`| 入社日 |
|`retire_date`|`string`| 退社日 |
|`user_id`|`long`| ユーザーID |
|`login_email`|`string`| ログインメールアドレス |
|`birth_date`|`string`| 生年月日 |
|`gender`|`string`| 性別 |
|`payroll_calculation`|`boolean`| 給与計算対象かどうか |
|`group_memberships`|`json`| 所属部門情報 |

### 賞与明細一覧

指定した年月の賞与明細一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 年 | ✓ | - | 取得対象の年を入力します。 |
| 月 | ✓ | - | 取得対象の月を入力します。 |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 賞与明細ID |
|`company_id`|`long`| 事業所ID |
|`employee_id`|`long`| 従業員ID |
|`employee_name`|`string`| 従業員名 |
|`employee_display_name`|`string`| 従業員表示名 |
|`employee_num`|`string`| 従業員番号 |
|`closing_date`|`string`| 締め日 |
|`pay_date`|`string`| 支払日 |
|`fixed`|`boolean`| 確定済みかどうか |
|`calc_status`|`string`| 計算ステータス |
|`calculated_at`|`timestamp`| 計算日時 |
|`bonus_amount`|`string`| 賞与額 |
|`total_allowance_amount`|`string`| 手当合計額 |
|`total_deduction_amount`|`string`| 控除合計額 |
|`net_payment_amount`|`string`| 差引支給額 |
|`gross_payment_amount`|`string`| 総支給額 |
|`total_taxable_payment_amount`|`string`| 課税対象額合計 |
|`allowances`|`json`| 手当項目 |
|`deductions`|`json`| 控除項目 |
|`remark`|`string`| 備考 |

### 特別休暇申請一覧

特別休暇申請の一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 申請開始日 | - | - | 取得する申請の申請開始日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`） |
| 申請終了日 | - | - | 取得する申請の申請終了日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-31`） |
| 対象開始日 | - | - | 取得する申請の対象開始日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`） |
| 対象終了日 | - | - | 取得する申請の対象終了日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-31`） |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 特別休暇申請ID |
|`company_id`|`long`| 事業所ID |
|`application_number`|`long`| 申請番号 |
|`applicant_id`|`long`| 申請者ID |
|`approver_ids`|`json`| 承認者ID一覧 |
|`target_date`|`string`| 対象日 |
|`special_holiday_setting_id`|`long`| 特別休暇設定ID |
|`special_holiday_name`|`string`| 特別休暇名 |
|`holiday_type`|`string`| 休暇種別 |
|`start_at`|`string`| 開始日時 |
|`end_at`|`string`| 終了日時 |
|`issue_date`|`string`| 申請日 |
|`comment`|`string`| コメント |
|`status`|`string`| ステータス |
|`revoke_status`|`string`| 取下げステータス |
|`passed_auto_check`|`boolean`| 自動チェック通過済みかどうか |

### 年末調整対象一覧

指定した年の年末調整対象従業員一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 年 | ✓ | - | 取得対象の年末調整の年を入力します。 |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`employee_id`|`long`| 従業員ID |
|`employee_display_name`|`string`| 従業員表示名 |
|`employee_num`|`string`| 従業員番号 |
|`is_not_adjust`|`boolean`| 年末調整対象外かどうか |
|`status`|`string`| ステータス |

### 部門一覧

事業所の部門一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 部門ID |
|`name`|`string`| 部門名 |
|`code`|`string`| 部門コード |
|`level`|`long`| 階層レベル |
|`parent_group_id`|`long`| 親部門ID |
|`parent_group_code`|`string`| 親部門コード |
|`parent_group_name`|`string`| 親部門名 |

### 役職一覧

事業所の役職一覧を取得します。

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 役職ID |
|`code`|`string`| 役職コード |
|`name`|`string`| 役職名 |

### 有給休暇申請一覧

有給休暇申請の一覧を取得します。

:::(Warning) (プラン制限)

有給休暇申請一覧のデータは、freee人事労務のプロフェッショナルプランまたはエンタープライズプランをご契約の場合のみ取得できます。
:::

#### 設定項目

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| 事業所ID | ✓ | - | データを取得する対象の事業所IDを入力します。 |
| 申請開始日 | - | - | 取得する申請の申請開始日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`） |
| 申請終了日 | - | - | 取得する申請の申請終了日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-31`） |
| 対象開始日 | - | - | 取得する申請の対象開始日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-01`） |
| 対象終了日 | - | - | 取得する申請の対象終了日を入力します。<br>形式：`YYYY-MM-DD`（例：`2024-01-31`） |

#### 取得できるカラム

|カラム名|デフォルトのデータ型|補足事項|
|---|---|---|
|`id`|`long`| 有給休暇申請ID |
|`company_id`|`long`| 事業所ID |
|`application_number`|`long`| 申請番号 |
|`applicant_id`|`long`| 申請者ID |
|`approver_ids`|`json`| 承認者ID一覧 |
|`target_date`|`string`| 対象日 |
|`holiday_type`|`string`| 休暇種別 |
|`start_at`|`string`| 開始日時 |
|`end_at`|`string`| 終了日時 |
|`issue_date`|`string`| 申請日 |
|`comment`|`string`| コメント |
|`status`|`string`| ステータス |
|`revoke_status`|`string`| 取下げステータス |
|`passed_auto_check`|`boolean`| 自動チェック通過済みかどうか |
|`values`|`json`| 値 |
