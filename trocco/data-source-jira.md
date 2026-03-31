---
articleId: 1ee63dfe-31fd-434a-8aef-820f9bd01ec5
slug: data-source-jira
title: 転送元 - JIRA
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要

JIRA Softwareのデータを転送する設定のDocsです。

## 設定項目 

### STEP1 基本設定

| 項目名 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- |
| JIRA接続情報 | Yes | - | あらかじめ登録してある[JIRAの接続情報](/docs/connection-configuration-jira)から、今回の転送設定に必要な権限を持つものを選択します。 |
| JQL | Yes | - | 課題の絞り込みを行うためのJiraクエリ言語 (JQL) を入力してください。<br />すべての課題を取得したい場合は、<code>project IS NOT EMPTY</code>と入力してください。<br />JQLについて、詳しくは[Jira Work Management サポート](https://support.atlassian.com/ja/jira-work-management/docs/use-advanced-search-with-jira-query-language-jql/)を参照ください。
| Expand | No | - | 追加カラムを指定できます。<br>指定できる値は[JIRA REST API公式ドキュメント](https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-issue-search/#api-rest-api-2-search-get)を参照ください。 |
| JSONカラムの自動展開オプジョン | Yes | 展開しない | **JSONカラムを自動で展開する**を選択した場合、次のように展開されます。<br><ul><li>元のJSONカラムの内容: `{"id": 10, "person": {"age": 30}}`</li><li>展開されたカラム名: `(JSON_column_name).id, (JSON_column_name).person.age`</li></ul><br><br>転送先でカラム名としてピリオド（`.`）が使用できない場合、転送時にエラーとなりますのでご注意ください。<br>JSONカラムの展開の仕方を詳細に設定したい場合は転送設定STEP2の**カラム定義**も併せてご利用ください。 |

#### STEP1の詳細設定

**詳細を設定する**をクリックすると、設定項目が表示されます。

| 項目名 | 必須 | デフォルト値 |
| --- | --- | --- |
| リトライ間隔（秒）| Yes | 1 |
| 最大リトライ回数 | Yes | 5 |
| APIリクエストあたりの最大取得件数 | Yes | 50 |
