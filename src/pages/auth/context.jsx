import { createContext, useContext, useState } from 'react';
import {
  client,
  removeAuthorizationHeader,
  setAuthorizationHeader
} from '../../api/client';
import storage from '../../utils/storage';
export const login = async userLoginInfo => {
  const { rememberMe } = userLoginInfo;
  return await client
    .post('/api/auth/login', userLoginInfo)
    .then(({ accessToken }) => {
      setAuthorizationHeader(accessToken);

      if (rememberMe) {
        storage.set('auth', accessToken);
      }
    });
};

const AuthContext = createContext(false);
export const UseAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
const logout = async () => {
  await Promise.resolve();
  removeAuthorizationHeader();
  storage.remove('auth');
};

export const AuthContextProvider = ({ iniatiallyLogged, children }) => {
  const [isLogged, setIsLogged] = useState(iniatiallyLogged);
  const handleLogin = async credentials => {
    await login(credentials);
    setIsLogged(true);
  };
  const handleLogout = () => {
    setIsLogged(false);
    logout();
  };

  const authValue = {
    isLogged,
    onLogin: handleLogin,
    onLogout: handleLogout
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
