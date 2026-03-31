---
articleId: 394c257e-2a89-488e-955a-c4358c934d9c
slug: reload-column-definitions
title: カラム定義を再読み込み
parentCategoryId: 174cb02c-5c50-4a3e-9be5-14449bc7837b
languageCode: ja
---
## 概要
転送設定STEP2のデータ設定＞カラム定義にて、**カラム定義を再読み込み**できます。
**カラム定義を再読み込み**することで、転送元データに列が追加・削除されたり、クエリが変更された場合などに、その変更に追従する形でカラム定義を更新できます。

:::(Info) (既存設定への影響)

**カラム定義を再読み込み**しても、既存の設定は変更されません。
あらかじめカラム定義で設定されていた各カラムの設定や、データ設定配下の各種設定は変更されません。
:::

:::(Warning) (一部のコネクタについて)

**カラム定義を再読み込み**は、一部の転送元コネクタでは非対応です。
:::

## カラム定義の再読み込みの流れ

転送設定作成時のCSVファイルと、その後変更されたCSVファイルを例に、**カラム定義を再読み込み**を行うまでの流れを説明します。

#### 転送設定作成時点のCSVファイル

転送設定作成時は、以下のCSVファイルを転送対象としていました。

```
hoge,fuga
1,aaa
2,bbb
3,ccc
```

#### 転送設定作成後のCSVファイル

転送設定作成後に、転送対象のデータが以下のCSVファイルに変更されました。
fugaカラムが削除され、piyoカラムが追加されています。

```
hoge,piyo
1,true
2,false
3,true
```

### 設定手順

上記の状況において、該当の転送設定のSTEP2を表示します。

1. データ設定の**カラム定義**にて、**カラム定義を再読み込み**をクリックします。
    ![001-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/reload-column-definitions-2024-08-29-15-33-0.png){height="" width="500"}

2. **カラム定義を再読み込み**をクリックします。
      ![002.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/reload-column-definitions-2024-08-29-15-33-1.png){height="" width="500"}

    :::(Warning)
    再読み込みにはしばらく時間がかかります。読み込み完了までお待ちください。
    :::

3. 差分の内容を確認し、**カラム定義に変更を反映**をクリックします。
    ![reload-column-definitions-2024-08-29-15-33-2](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/reload-column-definitions-2024-08-29-15-33-2.png){height="" width="500"}

4. **変更をプレビュー**をクリックします。
    :::(Warning)
    **必ずクリックしてください。** **変更をプレビュー**をクリックしないと、変更は反映されません。
    :::

    ![005-p.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/reload-column-definitions-2024-08-29-15-33-3.png){height="" width="500"}

5. 転送設定を保存します。
    カラム定義が再読み込みされた転送設定が保存されます。