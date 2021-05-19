# 5. Amplifyのプロジェクト作成

## 5.1. Amplifyプロジェクトの初期化

引き続きDockerコンテナに入った状態で実施していきます。こちらも前項と同じく，以下コマンド実行後は設問となるので注意して下さい。

```bash
# まずは以下を実行
amplify init
```

## 5.2. 初期化するプロジェクト構成の選択
```bash
# amplify initのコマンド実行直後
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project reactamplify # ←Enterを押します
```

```bash
The following configuration will be applied:

Project information
| Name: reactamplify
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start
# Yを入力
? Initialize the project with the above configuration? Yes
Using default provider  awscloudformation
```

## 5.3. 認証方法の種類を選択

```bash
# AWS profileを選択
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html
```

## 5.4. 使用するプロファイルを選択

```bash
# defaultを選択
? Please choose the profile you want to use default
Adding backend environment dev to AWS Amplify Console app: d2nvyvjheogdaz
⠇ Initializing project in the cloud...

# 途中略，少し待つ
✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

これで完了です。`react-amplify`の配下に`amplify`フォルダが作成されました。<br>次はAmplifyの認証サービスを追加します。