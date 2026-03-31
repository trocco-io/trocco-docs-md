---
articleId: 1b9e662a-025a-4f46-9b5f-e7e4b3e84155
slug: copy-settings
title: 複製機能
parentCategoryId: 3e88a521-8be7-4f6e-b507-e21f53098f01
languageCode: ja
---
## 概要
TROCCOでは、既に存在する転送設定・データマート定義を複製できます。
同じテーブルを参照する似たような設定を作成したい場合、この機能を使うことで作業効率を大幅に向上できます。

:::(Warning) (複製権限)

[チーム機能](/docs/about-team)をご利用の場合、転送設定・データマート定義を複製するためには、該当の設定（リソース）に対して**リソースグループ編集者**以上のロールを有する必要があります。
詳しくは、[リソースグループ](/docs/resource-group)を参照ください。
:::

## 複製方法
設定一覧画面または設定詳細画面より、複製できます。
以下、転送設定を例に説明します。

#### 設定一覧画面
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/copy-settings-2024-08-29-23-3-0.png){height="" width="500"}

#### 設定詳細画面
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/copy-settings-2024-08-29-23-3-1.png){height="" width="500"}

:::(Info) (複製された転送設定・データマート定義の名前)
元の名前の末尾に「 (Copy)」が追加されます。
![image](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/copy-settings-2024-08-29-23-3-2.png){height="" width="500"}
:::


:::(Warning) (複製された転送設定・データマート定義に関する注意事項)
* 複製元にあったジョブ実行履歴は引き継がれません。
* チーム機能を利用している場合、複製元が所属していたリソースグループに所属します。
* 複製元が利用していた接続情報と同じものを利用します。
:::
