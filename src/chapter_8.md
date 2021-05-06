# 1. Amplifyの認証サービスを追加する

## 1.1. AmplifyのAuth機能を追加

こちらも前項と同じく，以下コマンド実行を行いますが，同じように設問となるので注意して下さい。

```sh
$ amplify add auth
Using service: Cognito, provided by: awscloudformation
 
 The current configured provider is Amazon Cognito. 
 # Default configurationを選択する
 Do you want to use the default authentication and security configuration? Default config
uration
 Warning: you will not be able to edit these selections. 
 # Usernameを選択
 How do you want users to be able to sign in? Username
 # No, I am done.を選択
 Do you want to configure advanced settings? No, I am done.
```

**Successfully**まで表示されたら，追加したauthをデプロイします。数分かかるので待ちます。

```sh
$ amplify push --y
```

## 1.2. AWSコンソールで認証アプリを確認

完了すると`reactamplify`の認証アプリが作成されます。以下のコマンドでAWSコンソール上でも確認出来ます。

```sh
$ amplify console
# Consoleを選択 
✔ Which site do you want to open? · Console
```

次はReactアプリへ認証機能を追加していきます。