---
articleId: 6210b622-f6a7-421b-9e89-c2058c8231ed
slug: data-source-yahoo-display-programmatic-ads
title: 転送元 - Yahoo!ディスプレイ広告 (運用型)
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---
## 概要
Yahoo!ディスプレイ広告（運用型）からデータを転送する設定のDocsです。
Yahoo!広告 APIを利用し、データを取得します。

## 設定項目
### STEP1 基本設定
| 項目名 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| Yahoo! API接続情報 | Yes | - | Yahoo! APIの接続情報を選択してください。 |
| 取得方法 | Yes | レポート取得 | レポートで取得したい場合は**レポート取得**、スタッツで取得したい場合は**統計情報取得**を指定してください。 |
| ベースアカウントID | Yes |  - | 接続情報のYahoo! JAPANビジネスIDが直接権限を持つアカウント（MCCアカウント・広告アカウント）を選択します。<br>選択したアカウント、およびその配下全てのアカウントに対して操作が可能になります。|
| アカウントID | Yes |  - | 選択したベースアカウントIDで操作可能な、データ取得対象のアカウントIDを入力します。<br>アカウントIDは、ディスプレイ広告の管理画面から確認できます。 |
| タイプ | No | - | ターゲットで統計情報取得を選択した場合、ここでタイプを指定してください。なお、現在<br>・CAMPAIGN<br>・ADGROUP<br>・AD<br>のタイプに対応しております。 |
| データ取得期間 | Yes | - | データを取得したい期間を指定します。開始日、終了日両方を入力してください。<br>YYMMDD の形式で入力してください。<br>また、[カスタム変数](/docs/custom-variables)を設定することで実際の転送時に対応した日付を選択することも可能です。 |
| カラム | No | - | 転送したいカラム情報を入力してください。<br>設定できるカラムは取得方法によって異なります。<br>詳細は後述をご参照ください。 |
| 削除済み広告を含める | No | 含めない | 取得方法に**レポート取得**を選択した場合のみ指定できます。「含める」を選択すると、削除された広告の情報を含んだレポートを取得できます。 |

:::(Warning) (カラムについて)
APIアップデートにより、旧指標は廃止されました。
上記に伴い、今後はカラム名に「(旧)」を含むカラムが指定されている場合、**自動的に新カラムが取得されます**。
* 例. 「CLICK_RATE_PREV (クリック率(旧))」が指定されている場合、自動的に「CLICK_RATE (クリック率)」が取得される
:::

#### レポート取得の場合
広告レポート（アカウントレポート、キャンペーンレポート、広告グループレポート、リンク先URLレポート）
※STEP1にて指定した項目によっては、組み合わせ不可が原因でエラーが発生する場合があります。具体的な組み合わせ不可能なカラムについては[こちら](https://ads-developers.yahoo.co.jp/reference/ads-display-api/v19/ReportDefinitionService/)を参照してください。
カラム項目には以下の値などを設定できます。

| カラム名 | 内容 | 推奨型 | 動作区分（\*1） |
| --- | --- | --- | --- |
| ACCOUNT_ID | アカウントID | LONG | ATTRIBUTE |
| ACCOUNT_NAME | アカウント名 | STRING | ATTRIBUTE |
| CAMPAIGN_ID | キャンペーンID | LONG | ATTRIBUTE |
| CAMPAIGN_NAME | キャンペーン名 | STRING | ATTRIBUTE |
| ADGROUP_ID | 広告グループID | LONG | ATTRIBUTE |
| ADGROUP_NAME | 広告グループ名 | STRING | ATTRIBUTE |
| AD_ID | 広告ID | LONG | ATTRIBUTE |
| AD_NAME | 広告名 | STRING | ATTRIBUTE |
| AD_TYPE | 広告タイプ | STRING | ATTRIBUTE |
| PREF_ID | 都道府県ID | STRING | SEGMENT |
| PREF_NAME | 都道府県 | STRING | SEGMENT |
| CITY_ID | 市区郡ID | STRING | SEGMENT |
| CITY_NAME | 市区郡 | STRING | SEGMENT |
| WARD_ID | 行政区ID | STRING | SEGMENT |
| WARD_NAME | 行政区 | STRING | SEGMENT |
| GENDER | 性別 | STRING | SEGMENT |
| AGE | 年齢 | STRING | SEGMENT |
| MONTH | 月 | STRING | SEGMENT |
| DAY | 日 | STRING | SEGMENT |
| HOUR | 時間 | LONG | SEGMENT |
| DEVICE | デバイス | STRING | SEGMENT |
| AD_STYLE | 掲載フォーマット（画像タイプ） | STRING | SEGMENT |
| MEDIA_ID | メディアID | STRING | SEGMENT |
| MEDIA_NAME | メディア名 | STRING | SEGMENT |
| MEDIA_FILE_NAME | ファイル名 | STRING | SEGMENT |
| MEDIA_AD_FORMAT | ピクセルサイズ | STRING | SEGMENT |
| AD_TITLE | タイトル | STRING | ATTRIBUTE |
| DESCRIPTION1 | 説明文1 | STRING | ATTRIBUTE |
| DESCRIPTION2 | 説明文2 | STRING | ATTRIBUTE |
| DISPLAY_URL | 表示URL | STRING | ATTRIBUTE |
| SEARCHKEYWORD_ID | サーチキーワードID | LONG | SEGMENT |
| SEARCHKEYWORD | サーチキーワード | STRING | SEGMENT |
| CONVERSION_CATEGORY | コンバージョン測定の目的 | STRING | SEGMENT |
| AD_LAYOUT | レイアウト | STRING | ATTRIBUTE |
| CONVERSION_NAME | コンバージョン名 | STRING | ATTRIBUTE |
| OS | OS | STRING | SEGMENT |
| APPLI | ウェブ/アプリ | STRING | SEGMENT |
| CAMPAIGN_TYPE | キャンペーンタイプ | STRING | ATTRIBUTE |
| APP_ID | アプリID/パッケージ名 | STRING | ATTRIBUTE |
| APP_NAME | アプリ名 | STRING | ATTRIBUTE |
| APP_OS | アプリOS | STRING | ATTRIBUTE |
| CAMPAIGN_GOALS | キャンペーン目的 | STRING | SEGMENT |
| CAMPAIGN_BUYING_TYPE | キャンペーン購入タイプ | STRING | ATTRIBUTE |
| DESTINATION_URL_CAMPAIGN_BANNER | リンク先URL（キャンペーンバナー） | STRING | ATTRIBUTE |
| IMPS | インプレッション数 | LONG | METRIC |
| CLICK_RATE | クリック率 | DOUBLE | METRIC |
| COST | コスト | DOUBLE | METRIC |
| CLICK | クリック数 | LONG | METRIC |
| AVG_CPC | 平均CPC | DOUBLE | METRIC |
| AVG_DELIVER_RANK | 平均掲載順位 | DOUBLE | METRIC |
| TOTAL_VIEWABLE_IMPS | メジャードインプレッション数（旧） | LONG | METRIC |
| VIEWABLE_IMPS | ビューアブルインプレッション数 | LONG | METRIC |
| INVIEW_RATE | ビューアブルインプレッション率（旧） | DOUBLE | METRIC |
| INVIEW_CLICK | ビューアブルクリック数（旧） | LONG | METRIC |
| INVIEW_CLICK_RATE | ビューアブルクリック率（旧） | DOUBLE | METRIC |
| AVG_CPV | 平均CPV | DOUBLE | METRIC |
| VIDEO_VIEWS_TO_25 | 動画の25%再生数 | LONG | METRIC |
| VIDEO_VIEWS_TO_50 | 動画の50%再生数 | LONG | METRIC |
| VIDEO_VIEWS_TO_75 | 動画の75%再生数 | LONG | METRIC |
| VIDEO_VIEWS_TO_95 | 動画の95%再生数 | LONG | METRIC |
| VIDEO_VIEWS_TO_100 | 動画の100%再生数 | LONG | METRIC |
| AVG_PERCENT_VIDEO_VIEWED | 動画の平均再生開始率 | DOUBLE | METRIC |
| AVG_DURATION_VIDEO_VIEWED | 動画の平均再生時間（秒） | DOUBLE | METRIC |
| VIDEO_VIEWS | 動画の再生開始数 | LONG | METRIC |
| PAID_VIDEO_VIEWS | 課金が発生した動画再生数（CPV課金キャンペーンのみ） | LONG | METRIC |
| PAID_VIDEO_VIEW_RATE | 課金が発生した動画再生率（CPV課金キャンペーンのみ） | DOUBLE | METRIC |
| VIDEO_VIEWS_TO_3_SEC | 動画の3秒再生数 | LONG | METRIC |
| CONVERSIONS | コンバージョン数 | LONG | METRIC |
| CONV_RATE | コンバージョン率 | DOUBLE | METRIC |
| COST_PER_CONV | コスト/コンバージョン数 | DOUBLE | METRIC |
| CONV_VALUE | コンバージョンの価値 | LONG | METRIC |
| VALUE_PER_CONV | コンバージョンの価値/コンバージョン数 | DOUBLE | METRIC |
| ALL_CONV | コンバージョン数（全て） | LONG | METRIC |
| ALL_CONV_RATE | コンバージョン率（全て） | DOUBLE | METRIC |
| COST_PER_ALL_CONV | コスト/コンバージョン数（全て） | DOUBLE | METRIC |
| ALL_CONV_VALUE | コンバージョンの価値（全て） | LONG | METRIC |
| VALUE_PER_ALL_CONV | コンバージョンの価値（全て）/コンバージョン数（全て） | DOUBLE | METRIC |
| CONVERSIONS_VIA_AD_CLICK | コンバージョン数（クリック経由） | LONG | METRIC |
| CONVERSION_RATE_VIA_AD_CLICK | コンバージョン率（クリック経由） | DOUBLE | METRIC |
| COST_PER_CONV_VIA_AD_CLICK | コスト/コンバージョン数（クリック経由） | DOUBLE | METRIC |
| CONV_VALUE_VIA_AD_CLICK | コンバージョンの価値（クリック経由） | LONG | METRIC |
| VALUE_PER_CONV_VIA_AD_CLICK | コンバージョンの価値（クリック経由）/コンバージョン数（クリック経由） | DOUBLE | METRIC |
| CROSS_DEVICE_CONVERSIONS | クロスデバイスコンバージョン数 | LONG | METRIC |
| CONV_VALUE_PER_COST | コンバージョンの価値/コスト | DOUBLE | METRIC |
| ALL_CONV_VALUE_PER_COST | コンバージョンの価値（全て）/コスト | DOUBLE | METRIC |
| CONV_VALUE_VIA_AD_CLICK_PER_COST | コンバージョンの価値（クリック経由）/コスト | DOUBLE | METRIC |
| IMPS_PREV | インプレッション数（旧） | LONG | METRIC |
| CLICK_RATE_PREV | クリック率（旧） | DOUBLE | METRIC |
| AVG_CPM | 平均CPM | DOUBLE | METRIC |
| AVG_VCPM | 平均vCPM | DOUBLE | METRIC |
| MEASURED_IMPS | メジャードインプレッション数 | LONG | METRIC |
| VIEWABLE_CLICK | ビューアブルクリック数 | LONG | METRIC |
| MEASURED_IMPS_RATE | メジャードインプレッション測定率 | DOUBLE | METRIC |
| VIEWABLE_IMPS_RATE | ビューアブルインプレッション率 | DOUBLE | METRIC |
| VIEWABLE_CLICK_RATE | ビューアブルクリック率 | DOUBLE | METRIC |
| VIDEO_VIEWS_TO_10_SEC | 動画の10秒再生数 | LONG | METRIC |
| IMPRESSION_SHARE | インプレッションシェア | DOUBLE | METRIC |
| IMPRESSION_SHARE_BUDGET_LOSS | インプレッションシェア損失率（予算） | DOUBLE | METRIC |
| IMPRESSION_SHARE_RANK_LOSS | インプレッションシェア損失率（ランク） | DOUBLE | METRIC |

（\*1）動作区分はYahoo APIにおける絞り込みの動作の種類を表しています。
- ATTRIBUTEはレポートにおける属性を表します。
- SEGMENTは検索の軸を表します。
- METRICSは絞り込みによって得られた数値を表します。

### 統計情報取得の場合
| カラム名 | 内容 | 推奨型 |
| --- | --- | --- |
| CAMPAIGN_ID | キャンペーンID（\*2） | LONG |
| CAMPAIGN_NAME | キャンペーン名（\*2） | STRING |
| ADGROUP_ID | 広告グループID（\*2） | LONG |
| ADGROUP_NAME | 広告グループ名（\*2） | STRING |
| AD_ID | 広告ID（\*2） | LONG |
| AD_NAME | 広告名（\*2） | STRING |
| IMPS | インプレッション数 | LONG |
| IMPS_PREV | インプレッション数（旧） | LONG |
| CLICK | クリック数 | LONG |
| CLICK_RATE | クリック率 | DOUBLE |
| CLICK_RATE_PREV | クリック率（旧） | DOUBLE |
| COST | コスト | DOUBLE |
| AVG_CPC | 平均CPC | DOUBLE |
| CONVERSIONS | コンバージョン数 | LONG |
| CONV_RATE | コンバージョン率 | DOUBLE |
| CONVERSIONS_VIA_AD_CLICK | コンバージョン数（クリック経由） | LONG |
| CONVERSION_RATE_VIA_AD_CLICK | コンバージョン率（クリック経由） | DOUBLE |
| ALL_CONV | コンバージョン数（全て） | LONG |
| ALL_CONV_RATE | コンバージョン率（全て） | DOUBLE |
| COST_PER_CONV | コスト/コンバージョン数 | DOUBLE |
| CONV_VALUE | コンバージョンの価値 | LONG |
| VALUE_PER_CONV | コンバージョンの価値/コンバージョン数 | DOUBLE |
| CONV_VALUE_PER_COST | コンバージョンの価値/コスト | DOUBLE |
| ALL_CONV_VALUE_PER_COST | コンバージョンの価値（全て）/コスト | DOUBLE |
| CONV_VALUE_VIA_AD_CLICK_PER_COST | コンバージョンの価値（クリック経由）/コスト | DOUBLE |
| ALL_CONV_VALUE | コンバージョンの価値（全て） | LONG |
| VALUE_PER_ALL_CONV | コンバージョンの価値（全て）/コンバージョン数（全て） | DOUBLE |
| CONV_VALUE_VIA_AD_CLICK | コンバージョンの価値（クリック経由） | LONG |
| VALUE_PER_CONV_VIA_AD_CLICK | コンバージョンの価値（クリック経由）/コンバージョン数（クリック経由） | DOUBLE |
| COST_PER_CONV_VIA_AD_CLICK | コスト/コンバージョン数（クリック経由） | DOUBLE |
| COST_PER_ALL_CONV | コスト/コンバージョン数（全て） | DOUBLE |
| CROSS_DEVICE_CONVERSIONS | クロスデバイスコンバージョン数 | LONG |
| AVG_DELIVER_RANK | 平均掲載順位 | DOUBLE |
| MEASURED_IMPS | メジャードインプレッション数 | LONG |
| TOTAL_VIEWABLE_IMPS | メジャードインプレッション数（旧） | LONG |
| MEASURED_IMPS_RATE | メジャードインプレッション測定率 | DOUBLE |
| VIEWABLE_IMPS | ビューアブルインプレッション数 | LONG |
| VIEWABLE_IMPS_RATE | ビューアブルインプレッション率 | DOUBLE |
| INVIEW_RATE | ビューアブルインプレッション率（旧） | DOUBLE |
| VIEWABLE_CLICK | ビューアブルクリック数 | LONG |
| INVIEW_CLICK | ビューアブルクリック数（旧） | LONG |
| VIEWABLE_CLICK_RATE | ビューアブルクリック率 | DOUBLE |
| INVIEW_CLICK_RATE | ビューアブルクリック率（旧） | DOUBLE |
| PAID_VIDEO_VIEWS | 課金が発生した動画再生数（CPV課金キャンペーンのみ） | LONG |
| PAID_VIDEO_VIEW_RATE | 課金が発生した動画再生率（CPV課金キャンペーンのみ） | DOUBLE |
| AVG_CPV | 平均CPV | DOUBLE |
| VIDEO_VIEWS | 動画の再生開始数 | LONG |
| VIDEO_VIEWS_TO_25 | 動画の25%再生数 | LONG |
| VIDEO_VIEWS_TO_50 | 動画の50%再生数 | LONG |
| VIDEO_VIEWS_TO_75 | 動画の75%再生数 | LONG |
| VIDEO_VIEWS_TO_95 | 動画の95%再生数 | LONG |
| VIDEO_VIEWS_TO_100 | 動画の100%再生数 | LONG |
| VIDEO_VIEWS_TO_3_SEC | 動画の3秒再生数 | LONG |
| VIDEO_VIEWS_TO_10_SEC | 動画の10秒再生数 | LONG |
| AVG_PERCENT_VIDEO_VIEWED | 動画の平均再生開始率 | DOUBLE |
| AVG_DURATION_VIDEO_VIEWED | 動画の平均再生時間（秒） | DOUBLE |
| IMPRESSION_SHARE | インプレッションシェア | DOUBLE |
| IMPRESSION_SHARE_BUDGET_LOSS | インプレッションシェア損失率（予算） | DOUBLE |
| IMPRESSION_SHARE_RANK_LOSS | インプレッションシェア損失率（ランク） | DOUBLE |

（\*2）typeによって指定できる値が異なります。
- typeが**CAMPAIGN**の場合：**CAMPAIGN_NAME**、**CAMPAIGN_ID**
- typeが**ADGROUP**の場合：**CAMPAIGN_NAME**、**CAMPAIGN_ID**、**ADGROUP_NAME**、**ADGROUP_ID**
- typeが**AD**の場合：**CAMPAIGN_NAME**、**CAMPAIGN_ID**、**ADGROUP_NAME**、**ADGROUP_ID**、**AD_NAME**、**AD_ID**