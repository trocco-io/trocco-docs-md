---
articleId: f958a934-6ee5-4c76-884a-f801e9c1149c
slug: connection-configuration-google-cloud-json-key
title: Google CloudのJSON Keyを取得する
parentCategoryId: 4db89ef6-4431-4a1f-a7c6-6c3b8a1a224c
languageCode: ja
---
## 概要

Google CloudでJSON Keyを作成する手順を説明するDocsです。

Google Analytics 4やGoogle Spreadsheetsなど、GoogleのサービスとTROCCOを接続する際には、接続情報を作成する必要があります。
本ページは、サービスアカウントを利用して接続情報を作成する場合にご参照ください。

## サービスアカウントを新規作成する場合

1. [Google API Console](https://console.developers.google.com/apis/)にログインし、JSON Keyを作成したいプロジェクトを選択します。
![Google API Consoleのプロジェクト選択画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-0.png)

2. **認証情報**をクリックし、認証情報の画面に移動します。
![Google API Consoleの画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-1.png)

3. **認証情報を作成**から**サービス アカウント**をクリックし、サービスアカウントの作成画面に移動します。
![Google API Consoleの認証情報画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-2.png)

4. **サービス アカウントの詳細**で、サービスアカウントの名称やID、説明を入力します。IDは入力必須です。入力できたら **作成して続行** をクリックします。
![Google API Consoleのサービス アカウント作成画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-3.png)

「メールアドレス」は、サービスアカウントのメールアドレスです。各接続情報のDocsを確認し、サービスアカウントのメールアドレスが必要な場合はメモしてください。

入力できたら **作成して続行** をクリックします。

5. 作成する接続情報によっては、サービスアカウントにロールを付与する必要があります。各接続情報のDocsを参照し、必要なロールがある場合はロールを付与してください。
![Google API Consoleのサービス アカウント作成画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-4.png)

6. サービスアカウントにアクセスできるユーザーを管理したい場合は、サービスアカウントのユーザーロールと管理者ロールを設定してください。TROCCOは本設定を省略しても動作します。
![Google API Consoleのサービス アカウント作成画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-5.png)

7. 設定が完了したら、**完了**をクリックし、認証情報の画面に戻ります。
![Google API Consoleのサービス アカウント作成画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-6.png)

8. サービス アカウントの一覧から、作成したサービス アカウントをクリックします。
![Google API Consoleの認証情報画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-7.png)

9. サービス アカウントの画面で **キー** をクリックし、鍵を管理する画面に移動します。
![Google API Consoleのサービス アカウント画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-8.png)

10. **鍵を追加**から**新しい鍵を作成**をクリックします。
![Google API Consoleの鍵を追加するドロップダウンリスト](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-9.png)

11. キーのタイプに**JSON**を選択し、**作成**をクリックすると、JSON Keyのファイルがダウンロードされます。
![Google API Consoleの鍵を追加するダイアログ](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-10.png)

## 既存のサービス アカウントを利用する場合

過去にサービス アカウントを作成した時に作成したJSON Keyのファイルがお手元にある場合は、同じファイルを利用できます。
手元にファイルがない場合は、下記の手順でJSON Keyのファイルを作成してください。

1. [Google API Console](https://console.developers.google.com/apis/)にログインし、JSON Keyを作成したいプロジェクトを選択します。
![Google API Consoleのプロジェクト選択画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-0.png)

2. **認証情報**をクリックし、認証情報の画面に移動します。
![Google API Consoleの画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-1.png)

3. サービス アカウントの一覧から、作成したサービス アカウントをクリックします。
![Google API Consoleの認証情報画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-7.png)

4. サービス アカウントの画面で **キー** をクリックし、鍵を管理する画面に移動します。
![Google API Consoleのサービス アカウント画面](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-8.png)

5. **鍵を追加**から**新しい鍵を作成**をクリックします。
![Google API Consoleの鍵を追加するドロップダウンリスト](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-9.png)

6. キーのタイプに**JSON**を選択し、**作成**をクリックすると、JSON Keyのファイルがダウンロードされます。
![Google API Consoleの鍵を追加するダイアログ](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/connection-configuration-google-cloud-json-key-2024-08-29-0-29-10.png)
