# 6. Amplifyの認証サービス追加

## 6.1. AmplifyのAuth機能を追加

こちらも前項と同じく，以下コマンド実行を行いますが，同じように設問となるので注意して下さい。

```bash
# 以下のコマンドを実行
amplify add auth
```

## 6.2 認証・セキュリティ構成の選択
```bash
# amplify add authの実行直後
Using service: Cognito, provided by: awscloudformation
 
The current configured provider is Amazon Cognito. 
# Default configurationを選択する
Do you want to use the default authentication and security configuration? Default config
uration
Warning: you will not be able to edit these selections. 
```

## 6.3 ユーザーのログイン方法の選択 

```bash
# Usernameを選択
How do you want users to be able to sign in? Username
# No, I am done.を選択
Do you want to configure advanced settings? No, I am done.
```

**Successfully**まで表示されたら完了です。追加したauthをデプロイします。数分かかるので待ちます。

## 6.4 authサービスのデプロイ

```bash
$ amplify push --y
```

## 7.5 AWSコンソールで認証アプリを確認

完了すると`reactamplify`の認証アプリが作成されます。以下のコマンドを実行するとAWSコンソール上でも確認出来ます。

```bash
$ amplify console
# Consoleを選択 ，今回はUI側の選択には触れません
✔ Which site do you want to open? · Console
```

次はReactアプリへ認証機能を追加していきます。