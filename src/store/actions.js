import { getLatestAdverts } from '../api/service';
import { login } from '../pages/auth/service';
import { areAdvertsLoaded } from './selectors';
import {
  ADVERTS_LOADED_FAILURE,
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
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

export const advertsLoadedSuccess = adverts => ({
  type: ADVERTS_LOADED_SUCCESS,
  payload: adverts
});

export const advertsLoadedRequest = () => ({
  type: ADVERTS_LOADED_REQUEST
});

export const advertsLoadedFailure = error => ({
  type: ADVERTS_LOADED_FAILURE,
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

export const loadAdverts = () => {
  return async function (dispatch, getstate) {
    if (areAdvertsLoaded(getstate())) {
      return;
    }
    try {
      dispatch(advertsLoadedRequest());
      const adverts = await getLatestAdverts();
      dispatch(advertsLoadedSuccess(adverts));
    } catch (error) {
      dispatch(advertsLoadedFailure(error));
      throw error;
    }
  };
};
