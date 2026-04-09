---
articleId: 7e23c01a-dce5-4664-a99e-4057099be46f
slug: connection-configuration-salesforce
title: 接続情報 - Salesforce
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要


Salesforceの接続情報を設定する際のDocsとなります。

## 入力項目
### 基本項目
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| 名前 | Yes | TROCCO内部で利用する接続情報の名前を入力してください。 |
| メモ | No | TROCCO内部で利用する接続情報のメモを入力してください。 |

認証方式として「OAuth認証」、「ユーザーパスワード認証」が選べます。
認証方式により、設定方法が異なります。

### OAuth認証の場合
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| サンドボックス環境 | No | SalesforceのSandbox環境に接続する場合、チェックしください。 |
| Salesforceアカウント認証 | Yes | 認証ボタンをクリックし、Salesforceにログインしてください。 |

#### ユーザーの作成（OAuth認証）

OAuth認証を行うと、ユーザーの権限をすべてTROCCOが引き受けることになります。以下の手順に従いOAuth認証用の読み込み専用ユーザーを作成し、権限を絞ることをおすすめします。

1. Salesforce にログインします。
2. 右上の歯車⚙️アイコンをクリックし、**設定**を選択してください。
3. 左サイドメニューの **管理** > **ユーザー** > **プロファイル** からプロファイル一覧画面を開きます。
4. **新規プロファイル** ボタンをクリックします。
5. 既存のプロファイルに **Read Only** を選択し、適当な名前（例: trocco-read-only）を設定し、保存します。
6. プロファイルの編集をクリックし、**標準オブジェクト権限**、**カスタムオブジェクト権限**からTROCCOで参照するオブジェクトについて、**参照**にチェックを付け、保存します。
7. 左サイドメニューの **管理** > **ユーザー** > **ユーザー** からユーザー一覧画面を開きます。
8. **新規ユーザー** ボタンをクリックし、以下の情報を入力します。
   1. **ユーザーライセンス**: Salesforce
   2. **プロファイル**: 先程作成したプロファイル
   3. **メールアドレス**: 確認メールが受取可能なメールアドレスを入力します
9. 保存し、作成は完了です。入力したメールアドレス宛に確認メールが届くので、初回ログインを行ってください。

#### 外部クライアントアプリケーションの作成（OAuth認証）

:::(Warning) (Salesforce側の仕様変更による接続アプリケーションの新規作成終了について)
Salesforce側の仕様変更により、現在はSalesforce組織で新規に接続アプリケーション（Connected Apps）を作成できなくなっています。
仕様変更の詳細については、[Salesforce Platform: Spring '26 リリース以降、新規の接続アプリケーションは作成できなくなります](https://help.salesforce.com/s/articleView?id=005228017&type=1)を参照ください。

作成済みの接続アプリケーションは引き続きご利用いただけるため、すでにTROCCOの接続情報を設定済みのお客様は影響を受けません。
新規に接続情報を作成する必要がある場合は、外部クライアントアプリケーションを利用してください。
:::

OAuth認証を利用する場合は、Salesforce側で外部クライアントアプリケーションを作成する必要があります。
外部クライアントアプリケーションの作成方法は、[Salesforce公式ドキュメント](https://help.salesforce.com/s/articleView?id=xcloud.create_a_local_external_client_app.htm&type=5)を参照ください。

作成時に指定する項目は以下のとおりです。

| 項目名 | 内容 |
| --- | --- |
| OAuth を有効化 | OAuthプラグインを有効化します。 |
| コールバック URL | 以下のURLを指定します。<br>`https://trocco.io/connections/salesforce/callback` |
| 選択した OAuth 範囲 | 必要なOAuth範囲は以下の通りです。<ul><li>api</li><li>web</li><li>refresh_toke</li><li>offline_access</li></ul> |

#### 注意事項
* OAuth認証で作成した接続情報は、**転送元Salesforce**、**転送先Salesforce**で利用できます
* **転送元Salesforceレポート、転送元CRM Analytics（旧 Tableau CRM）をご利用の際は、ユーザーパスワード認証をご利用ください。**

### ユーザー・パスワード認証の場合
| 項目名 | 必須 | 内容 |
| --- | --- | --- |
| ユーザーID | Yes | SalesforceのユーザーIDを入力してください。 |
| パスワード | Yes | Salesforceのパスワードを入力してください。 |
| セキュリティトークン | Yes | Salesforceのセキュリティトークンを入力してください。<br>※作成手順は以下にまとまっております。 |
| セールスフォースエンドポイント | No | セールスフォースエンドポイントを入力してください。<br>未入力の場合は、デフォルトで<br>`https://login.salesforce.com/services/Soap/u/` がセットされます。<br>また、sandbox環境と連携頂く場合は<br>`https://test.salesforce.com/services/Soap/u/` のように設定頂く必要がございます。 |

#### セキュリティトークンの作成方法（ユーザー・パスワード認証）
ユーザー・パスワード認証を利用する場合、以下の手順に従ってセキュリティートークンを発行してください。

1. Salesforceにログインしてください。
2. ログイン後、右上のユーザーアイコンをクリックしてください。
3. ユーザー名をクリックし、**設定**をクリックします。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-salesforce-2024-08-29-15-46-0.png){height="" width=""}

4. 個人設定画面に遷移したら左メニューの**私の個人情報**から**私のセキュリティトークンのリセット**をクリックしてください。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-salesforce-2024-08-29-15-46-1.png){height="" width=""}

5. **セキュリティトークンのリセット**をクリックすることで登録済みのメールアドレスにセキュリティトークンが送信されます。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-salesforce-2024-08-29-15-46-2.png){height="" width=""}

## トラブルシューティング

### 無効なセッションIDのため接続に失敗
```
Error: org.embulk.output.sf_bulk_api.AbortException: [UnexpectedErrorFault [ApiFault  exceptionCode='INVALID_SESSION_ID'
 exceptionMessage='Invalid Session ID found in SessionHeader: Illegal Session. Session not found, missing session hash: ********
This error usually occurs after a session expires or a user logs out. Decoder: DataInDbSessionKeyDecoder'
 extendedErrorDetails='{[0]}']]
```

#### 考えられる原因
- 複数のジョブが同時に実行されている場合、一方のジョブが終了するタイミングでセッションが無効化され、接続に失敗します。
- 複数のツールから同一アカウントにログインしている場合、セッションが共有されます。そのため、いずれかのツールでログアウトを行うと、共有されている他のセッションも無効化され、接続に失敗します。

#### 対処法
- 同一の接続情報を使用しているタスクの同時実行を避ける
   - 複数のタスクを同時に実行する場合
      - ワークフロー機能を利用して、タスク同時実行上限数を「1」に設定し、接続情報が同時に使用されないように制御してください。
   - 異なるワークフロー内にSalesforceを使用しているタスクが含まれている場合
      - それぞれのワークフローが同時に実行されないよう、実行時間を調整してください。
- TROCCO以外のツールから同一アカウントへのアクセスを避ける
   - TROCCO専用のアカウントを作成し、セッションが共有される状況を防いでください。
