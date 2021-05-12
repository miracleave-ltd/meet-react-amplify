# 7. Amplifyの認証サービスを追加する

## 7.1. AmplifyのAuth機能を追加

こちらも前項と同じく，以下コマンド実行を行いますが，同じように設問となるので注意して下さい。

```csharp
# 以下のコマンドを実行
amplify add auth
```

## 7.2 認証・セキュリティ構成の選択
```csharp
# amplify add authの実行直後
Using service: Cognito, provided by: awscloudformation
 
The current configured provider is Amazon Cognito. 
# Default configurationを選択する
Do you want to use the default authentication and security configuration? Default config
uration
Warning: you will not be able to edit these selections. 
```

## 7.3 ユーザーのログイン方法の選択 

```csharp
# Usernameを選択
How do you want users to be able to sign in? Username
# No, I am done.を選択
Do you want to configure advanced settings? No, I am done.
```

**Successfully**まで表示されたら完了です。追加したauthをデプロイします。数分かかるので待ちます。

## 7.4 authサービスのデプロイ

```csharp
$ amplify push --y
```

## 7.5 AWSコンソールで認証アプリを確認

完了すると`reactamplify`の認証アプリが作成されます。以下のコマンドを実行するとAWSコンソール上でも確認出来ます。

```csharp
$ amplify console
# Consoleを選択 ，今回はUI側の選択には触れません
✔ Which site do you want to open? · Console
```

次はReactアプリへ認証機能を追加していきます。