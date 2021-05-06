import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify, { I18n } from 'aws-amplify';
import { localization } from './assets/i18n/amplify/localization';
import config from './aws-exports';
Amplify.configure(config);


I18n.putVocabularies(localization);
I18n.setLanguage('ja');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();