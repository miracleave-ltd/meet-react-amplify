# 7. Amplifyプロジェクトの作成

引き続きDockerコンテナに入った状態で実施していきます。こちらも前項と同じく，以下コマンド実行後は設問となるので注意して下さい。

```sh
$ amplify init
Note: It is recommended to run this command from the root of your app directory
# Enterを押します
? Enter a name for the project reactamplify
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

# Yesを選択
? Initialize the project with the above configuration? Yes
Using default provider  awscloudformation
# AWS profileを選択
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

# defaultを選択
? Please choose the profile you want to use default
Adding backend environment dev to AWS Amplify Console app: d2nvyvjheogdaz
⠇ Initializing project in the cloud...

# 途中略...

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

完了したら`react-amplify`の配下に`amplify`フォルダが作成されます。<br>Amplifyプロジェクトの作成が完了したら，Amplifyの認証を進めます。