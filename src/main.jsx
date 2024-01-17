import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { setAuthorizationHeader } from './api/client.js';

import { AuthContextProvider } from './pages/auth/context.jsx';
import storage from './utils/storage.js';
const accessToken = storage.get('auth');
if (accessToken) {
  setAuthorizationHeader(accessToken);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider iniatiallyLogged={!!accessToken}>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
