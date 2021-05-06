import React, { useEffect, useState } from 'react';
import './App.css';
import {AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import NavBar from './layout/NavBar';
import DemoContent from './layout/DemoContent';

const App = () => {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<any>(); 

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div>
        <NavBar username={user.username}/>
        <DemoContent />
    </div>
  ) : (
      <AmplifyAuthenticator />
  );
}

export default App;