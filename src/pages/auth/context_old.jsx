import { createContext, useContext, useState } from 'react';

import { logout } from './service';
const AuthContext = createContext(false);

export const UseAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export const AuthContextProvider = ({ iniatiallyLogged, children }) => {
  const [isLogged, setIsLogged] = useState(iniatiallyLogged);
  const handleLogin = async credentials => {
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
