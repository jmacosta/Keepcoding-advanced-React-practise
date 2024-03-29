import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Root from './Root.jsx';
import { setAuthorizationHeader } from './api/client.js';
import configureStore from './store/index.js';
import storage from './utils/storage.js';
const accessToken = storage.get('auth');
const store = configureStore({ auth: !!accessToken });

if (accessToken) {
  setAuthorizationHeader(accessToken);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root store={store}>
      <App />
    </Root>
  </React.StrictMode>
);
