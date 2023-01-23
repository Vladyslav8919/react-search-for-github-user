import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-p14gufa42g5nsy1b.eu.auth0.com"
      clientId="9cp45tUlaCxBnTAtCT2jVfygRxp2vJ3R"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
