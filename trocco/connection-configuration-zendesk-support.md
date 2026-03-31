---
articleId: 41368db6-11e9-4b93-bbd9-520f66b79983
slug: connection-configuration-zendesk-support
title: 接続情報 - Zendesk Support
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Zendesk Supportの接続情報を設定する際のDocsとなります。

:::(Warning) (APIのパスワードアクセスによる認証の提供終了について)

Zendeskによる[「APIのパスワードアクセス」の提供終了](https://support.zendesk.com/hc/articles/7386291855386)に伴い、2024年07月31日より、認証方式に関する仕様が変更されます。
認証方式に**パスワード**を利用した既存の接続情報は引き続きご利用いただけますが、上記お知らせの通り、**2025年12月31日**を持って利用できなくなる予定です。
そのため、今後は認証方式に**APIトークン**を利用されることを推奨いたします。
:::

## URLの確認方法

1. Zendeskにログインします。

2. ログインした際のURLが https://sample.zendesk.com/~ のようになっている場合、接続情報のURLには https://sample.zendesk.com/api/v2 を入力します。

## Zendesk SupportのAPIを利用するための設定

1. Zendesk Supportに移動します。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-zendesk-support-2024-08-29-11-30-0.png){height="" width="50%"}

2. 右側の**アプリおよびインテグレーション** → **Zendesk API**をクリックして、**トークンアクセス**を有効にします。
  ![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-zendesk-support-2024-08-29-11-30-1.png){height="" width="50%"}
