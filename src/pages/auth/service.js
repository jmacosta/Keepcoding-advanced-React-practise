import {
  client,
  removeAuthorizationHeader,
  setAuthorizationHeader
} from '../../api/client';

import storage from '../../utils/storage';

export const logout = async () => {
  await Promise.resolve();
  removeAuthorizationHeader();
  storage.remove('auth');
};

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
