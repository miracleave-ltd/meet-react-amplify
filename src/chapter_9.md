# 9. Reactアプリに認証機能を追加する

ReactアプリにAmplifyライブラリをインストールします。

```sh
$ npm install aws-amplify @aws-amplify/ui-react
```

`react-amplify/src/index.tsx`を修正する。

```jsx
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```

`react-amplify/src/App.tsx`を修正する。

```jsx
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Amplify!!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
```

ここまで修正したら`yarn start`で起動しましょう。`http://localhost:3000/`でアクセスすると以下の画面が表示されます。<br>画面内の**Create account**からアカウントを作成します。

![](./img/2021-05-06-06-37-41.png)

アカウントの作成画面に移動するので，作成します。次の画面で確認コードを入力する必要があるので，**有効なメールアドレス**を入力して下さい。

![](./img/2021-05-06-06-43-41.png)

![](./img/2021-05-06-06-46-07.png)

送られてきたメールの確認コードを入力するとログイン出来ます。

![](./img/2021-05-06-06-47-32.png)

この時点での成果をプッシュしていき，自動デプロイの結果も確認しましょう。
