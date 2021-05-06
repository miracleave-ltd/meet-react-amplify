# 環境作成

Dockerで作成していきますが，最終的なプログラムは[こちら](https://github.com/miracleave-ltd/meet-react-amplify/tree/main/amplify-demo)になります。<br>プログラム変更時のエディタはVS Codeを使用していますが，もちろんご自身が使いたいエディタで問題ありません。<br>これからDockerコンテナを使用するためのファイルを作成しますが，以下のフォルダ構成でルートとなる`amplify-demo`のフォルダを作成して下さい。

```sh
# Macの場合
/Users/{ユーザー名}/Projects/amplify-demo
├── Dockerfile
└── docker-compose.yml

# Windowsの場合
C:¥Useres¥{ユーザー名}¥Projects/amplify-demo
├── Dockerfile
└── docker-compose.yml
```

上記フォルダを作成したら配下に[`docker-compose.yml`](https://github.com/miracleave-ltd/meet-react-amplify/blob/main/amplify-demo/Dockerfile)と[`Dockerfile`](https://github.com/miracleave-ltd/meet-react-amplify/blob/main/amplify-demo/docker-compose.yml)を用意します。<br>[`docker-compose.yml`](https://github.com/miracleave-ltd/meet-react-amplify/blob/main/amplify-demo/Dockerfile)は以下の通り。

```yml
version: '3'

services:
    amplify:
        build: ./
        ports:
            - "3000:3000"
            - "3001:3001"
        volumes:
            - ./:/var/www/amplify-demo/
            - ./aws/:/root/.aws/
        tty: true
```

[`Dockerfile`](https://github.com/miracleave-ltd/meet-react-amplify/blob/main/amplify-demo/docker-compose.yml)は以下の通り。
```sh
FROM node:14.16.1

# amplify CLIをインストールする
RUN npm install -g @aws-amplify/cli

WORKDIR /var/www/amplify-demo
```

作成したファイルを使用してDockerを起動します。

```
$ docker-compose up -d
```

立ち上がったらコンテナの中に入っていきますが，念の為，起動状態の確認とコンテナ名の確認を行います。以下の例だと`amplify-demo_amplify_1`がコンテナ名です。

```sh
$ docker-compose ps
         Name                     Command            State              Ports            
-----------------------------------------------------------------------------------------
amplify-demo_amplify_1   docker-entrypoint.sh node   Up      0.0.0.0:8080->8080/tcp,     
                                                             0.0.0.0:8081->8081/tcp 
```

コンテナ名が確認出来たら，コンテナに入ります。

```
$ docker exec -it {コンテナ名(上記のName)} bash
```

念の為，`node`と`npm`のバージョンを確認します。

```sh
$ node -v && npm -v
v14.16.1
6.14.12
```

さらに`amplify`もインストール出来ているか確認します。

```sh
$ amplify --version
Initializing new Amplify CLI version...
Done initializing new version.
Scanning for plugins...
Plugin scan successful
4.50.2
```

要件を満たせているので，Reactアプリの作成をしていきます。