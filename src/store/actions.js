import { login } from '../pages/auth/service';
import {
  ADVERTS_LOADED,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  UI_RESET_ERROR
} from './types';

export const authLoginSuccess = () => ({
  type: AUTH_LOGIN_SUCCESS
});

export const authLoginRequest = () => ({
  type: AUTH_LOGIN_REQUEST
});

export const authLoginFailure = error => ({
  type: AUTH_LOGIN_FAILURE,
  error: true,
  payload: error
});

export const authLogin = credentials => {
  return async function (dispatch, getstate) {
    try {
      dispatch(authLoginRequest());
      await login(credentials);
      dispatch(authLoginSuccess());
    } catch (error) {
      dispatch(authLoginFailure(error));
      throw error;
    }
  };
};

export const uiResetError = () => ({
  type: UI_RESET_ERROR
});

export const authLogout = () => ({
  type: AUTH_LOGOUT
});

export const advertsLoaded = adverts => ({
  type: ADVERTS_LOADED,
  payload: adverts
});
