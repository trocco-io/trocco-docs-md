---
articleId: bbe8abe7-46e8-42c9-8727-e967f26a9c30
slug: release-note-2025-07
title: リリースノート-2025年07月
parentCategoryId: 67a27ae1-e937-4731-a905-0e64c69ffed9
languageCode: ja
---

**2025年07月のリリース情報をお届けします**

### 接続情報

#### Shopify接続情報（廃止予定）で選択できるアプリ種別から「プライベートアプリ」を削除

Shopify接続情報で選択できるアプリ種別から「プライベートアプリ」が削除され、「カスタムアプリ」のみ選択可能となりました。
すでにアプリ種別を「プライベートアプリ」で作成済みの接続情報については、引き続きご利用いただけます。

### 転送設定

#### 転送元Gainsight PXを追加

転送元Gainsight PXを追加しました。
アカウントごとの利用傾向やファネル分析など、プロダクトの利用状況の可視化に役立てられます。

#### 転送元HENNGE Access Controlを追加

転送元HENNGE Access Controlを追加しました。
SaaSのアカウント情報や端末の情報などを連携し、アカウント管理の効率化に繋げられます。

#### 転送元WordPressを追加

転送元WordPressを追加しました。
構築したサイトの構造把握や、ウェブサイトのアクセス分析に役立てられます。

#### 転送元LOGILESSを追加

転送元LOGILESSを追加しました。
商品の受注や在庫状況を分析・可視化し、EC物流の最適化に役立てられます。

#### 転送元ジョーシスを追加

転送元ジョーシスを追加しました。
メンバーや組織の情報、アプリケーションの利用状況などを可視化し、情シス業務の効率化に繋げられます。

#### 転送元Zoho Sheetを追加

転送元Zoho Sheetを追加しました。
各ワークブックのワークシートやレコードをDHWなどに連携できます。

#### 転送元JUST.DBを追加

転送元JUST.DBを追加しました。
JUST.DB上のレコードを他のサービスに簡単に連携できます。

#### 転送元Typeformを追加

転送元Typeformを追加しました。
フォームやアンケートで収集した情報を他サービスに連携できます。

#### 転送先Snowflakeで転送に対応したデータ型が拡充

転送先Snowflakeでは、転送設定STEP2の出力オプションにて、各カラムのデータ型をユーザー自身で指定できます。
今回、以下のデータ型を新たに指定できるようになりました。

- DATE
- DATETIME
- TIME
- TIMESTAMP
- TIMESTAMP_LTZ
- TIMESTAMP_NTZ
- TIMESTAMP_TZ

#### 転送元TROCCOでデータマートジョブの実行ログを出力できるように

転送元TROCCOを使って、データマートジョブの実行ログを出力できるようになりました。

#### 転送先Google BigQueryで転送先のプロジェクトを指定できるように

これまで、転送先Google BigQueryの転送先プロジェクトは、接続情報で設定したプロジェクトで固定となっていました。
今回のリリースにより、接続情報で設定したアカウントで扱える任意のプロジェクトを指定できるようになりました。

#### 転送元TikTok Adsでapp_installを取得できるように

転送元TikTok Adsが`app_install`メトリクスの取得に対応しました。
詳しくは、[Docs | TikTok API for Business](https://business-api.tiktok.com/portal/docs?id=1751443967255553)を参照ください。

#### 転送設定の一括削除時に選択した転送設定の件数が表示されるように

一括操作で転送設定を一括削除する際、削除対象の転送設定の件数が表示されるようになりました。

#### 転送元Backlogで、登録日や更新日で課題一覧の取得範囲を指定できるように

転送元Backlogで取得対象に「課題一覧」を選択した際に、課題の登録日や更新日を指定して取得範囲を絞り込めるようになりました。

#### 転送元Stripeで取得対象のデータを作成日時で指定できるように

転送元Stripeにて、作成日時を基準として取得データの範囲を指定できるようになりました。
なお、一部の取得対象データでは作成日時は指定できません。

#### 転送元MailChimpで取得対象のデータを送信日時で指定できるように

転送元MailChimpにて、取得対象が「Campaigns」または「Reports」の場合、送信日時を基準として取得データの範囲を指定できるようになりました。

#### 転送元SAP S/4HANA ODataでOData v4を指定できるように

転送元SAP S/4HANA ODataで、ODataバージョンを指定可能になりました。
これまではv2のみサポートしていましたが、今回のリリースによりv4も選択できるようになりました。

#### 転送元Shopifyで顧客のメールアドレスを取得できるように

転送元Shopifyでターゲットに「customers」を指定した場合、`defaultEmailAddress`を取得できるようになりました。
詳しくは、[Customer - GraphQL Admin](https://shopify.dev/docs/api/admin-graphql/2025-04/objects/Customer)を参照ください。

#### 転送元Backlogで課題一覧の取得対象とするプロジェクトIDを指定できるように

転送元Backlogで取得対象に「課題一覧」を選択した場合、取得対象のプロジェクトIDを指定できるようになりました。

#### 転送元Facebook Ad クリエイティブでCTAに設定したリンク情報を取得可能に

転送元Facebook Adsクリエイティブにて、CTAに設定したリンク情報（`call_to_action_value.link`）を取得できるようになりました。

#### 転送先SFTPがPrivateLinkに対応

転送先SFTPがPrivateLinkによる通信に対応しました。

### データマート

#### データマート定義を正規表現で検索できるように

データマート定義名による検索に、正規表現が利用できるようになりました。

### ワークフロー

#### ワークフローを正規表現で検索できるように

ワークフロー名による検索に、正規表現が利用できるようになりました。

### Connector Builder

#### エンドポイントのパスにパスパラメータを使用できるように

これまで、カスタムコネクタのエンドポイントのパスは固定値でしたが、パスパラメータを使って動的なパスにも対応しました。
パスに個別のIDを含める必要があるAPIなどでもカスタムコネクタを利用できるようになりました。

#### ページング設定で最大リクエスト数を指定できるように

ページング設定で「ページベース」または「オフセットベース」を指定し、終了判定方法に「最終ページを自動判定」を選択した際に、最大リクエスト数を指定できるようになりました。

#### ページネーション設定時の「1リクエストの取得件数」が任意項目に

ページベースとオフセットベースのページネーションにおいて、「1リクエストの取得件数」の設定を任意に変更しました。
取得件数が固定されているAPIでも設定が可能になりました。

#### Connector Builderでカスタムコネクタの設定をAIが補完してくれるように

対象サービスのAPIドキュメントのURLを指定することで、カスタムコネクタの認証種別や認証種別・スキームなどの情報を、AIで自動補完できるようになりました。

### コネクタAPIアップデート

#### 転送先Google Ads コンバージョン

転送時に使用するGoogle Ads APIのバージョンを、v18から**v20**へアップデートしました。
新バージョンについては、[Google Ads API v20 Reference - Google for Developers](https://developers.google.com/google-ads/api/reference/rpc/v20/overview#common)を参照ください。

#### 転送元Google Ads

転送時に使用するGoogle Ads APIのバージョンを、v18から**v20**へアップデートしました。
新バージョンについては、[Google Ads API v20 Reference - Google for Developers](https://developers.google.com/google-ads/api/reference/rpc/v20/overview#common)を参照ください。

なお、APIのアップデートに伴い、一部のリソースタイプおよびカラムが廃止されます。詳しくは[Google Ads API バージョンv20対応に伴う設定変更のお願い](https://help.trocco.io/hc/ja/articles/4858951048990)を参照ください。

#### 転送元Shopify

転送時に使用する`shopify_api`gemのバージョンを、v14.8.0から**v14.10.0**へアップデートしました。
新バージョンについては、[shopify_api - RubyGems.org](https://rubygems.org/gems/shopify_api/versions/14.10.0)を参照ください。

### Self-Hosted Runner

#### 転送元SAP S/4HANA ODataをサポート

転送元SAP S/4HANA ODataをサポートしました。

#### 転送元Oracle Databaseをサポート

転送元Oracle Databaseをサポートしました。

### TROCCO API

#### 転送設定APIの対応コネクターが拡充

転送設定APIの操作対象コネクタとして、以下のコネクターが追加されました。

- 転送先 - Amazon S3
- 転送先 - Yahoo!広告 ディスプレイ広告 オーディエンスリスト
- 転送先 - Google Ads カスタマーマッチ

今回追加対象となったAPIエンドポイントは以下のとおりです。

- [転送設定作成](/trocco-api/apidocs/post-job-definition)
- [転送設定詳細取得](/trocco-api/apidocs/get-job-definition)
- [転送設定更新](/trocco-api/apidocs/patch-job-definition)
- [転送設定削除](/trocco-api/apidocs/delete-job-definition)

#### ユーザー作成APIでパスワードを自動生成できるように

[ユーザー作成](/trocco-api/apidocs/post-user)に、パスワードを自動生成するオプションを追加しました。

#### UI・UX

#### 転送設定一覧などで名称順の並び替えが可能に

以下の画面にて、名称順による並び替えができるようになりました。

- 転送設定一覧
- マネージド転送設定一覧
- データマート定義一覧
- ワークフロー定義一覧

#### チーム一覧のチームを、表の項目で並び替えできるように

チーム一覧画面の並び順を、表のヘッダーをクリックすることで各項目基準で変更できるようになりました。
