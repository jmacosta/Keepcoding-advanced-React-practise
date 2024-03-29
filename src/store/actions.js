import {
  createAdvert,
  deleteAdvert,
  getAdvert,
  getLatestAdverts,
  getLatestTags
} from '../api/service';
import { login } from '../pages/auth/service';
import { areAdvertsLoaded, areTagsLoaded, getAdvertById } from './selectors';
import {
  ADVERTS_CREATED_FAILURE,
  ADVERTS_CREATED_REQUEST,
  ADVERTS_CREATED_SUCCESS,
  ADVERTS_DELETE_FAILURE,
  ADVERTS_DELETE_REQUEST,
  ADVERTS_DELETE_SUCCESS,
  ADVERTS_DETAIL_FAILURE,
  ADVERTS_DETAIL_REQUEST,
  ADVERTS_DETAIL_SUCCESS,
  ADVERTS_LOADED_FAILURE,
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  TAGS_LOADED_FAILURE,
  TAGS_LOADED_REQUEST,
  TAGS_LOADED_SUCCESS,
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

export const advertsDetailSuccess = advert => ({
  type: ADVERTS_DETAIL_SUCCESS,
  payload: advert
});

export const advertsDetailRequest = () => ({
  type: ADVERTS_DETAIL_REQUEST
});

export const advertsDetailFailure = error => ({
  type: ADVERTS_DETAIL_FAILURE,
  error: true,
  payload: error
});

export const detailAdverts = advertId => {
  return async function (dispatch, getstate) {
    if (getAdvertById(advertId)(getstate())) {
      return;
    }
    try {
      dispatch(advertsDetailRequest());
      const advert = await getAdvert(advertId);
      dispatch(advertsDetailSuccess(advert));
    } catch (error) {
      dispatch(advertsDetailFailure(error));
      throw error;
    }
  };
};

export const advertsCreatedSuccess = advert => ({
  type: ADVERTS_CREATED_SUCCESS,
  payload: advert
});

export const advertsCreatedRequest = () => ({
  type: ADVERTS_CREATED_REQUEST
});

export const advertsCreatedFailure = error => ({
  type: ADVERTS_CREATED_FAILURE,
  error: true,
  payload: error
});

export const createdAdverts = advertData => {
  return async function (dispatch, getstate) {
    try {
      dispatch(advertsCreatedRequest());
      const createdAdvert = await createAdvert(advertData);
      dispatch(advertsCreatedSuccess(createdAdvert));
    } catch (error) {
      dispatch(advertsCreatedFailure(error));
      throw error;
    }
  };
};

export const tagsLoadedSuccess = tags => ({
  type: TAGS_LOADED_SUCCESS,
  payload: tags
});

export const tagsLoadedRequest = () => ({
  type: TAGS_LOADED_REQUEST
});

export const tagsLoadedFailure = error => ({
  type: TAGS_LOADED_FAILURE,
  error: true,
  payload: error
});

export const loadTags = () => {
  return async function (dispatch, getstate) {
    if (areTagsLoaded(getstate())) {
      return;
    }
    try {
      dispatch(tagsLoadedRequest());
      const tags = await getLatestTags();
      dispatch(tagsLoadedSuccess(tags));
    } catch (error) {
      dispatch(tagsLoadedFailure(error));
      throw error;
    }
  };
};

export const advertsDeleteSuccess = () => ({
  type: ADVERTS_DELETE_SUCCESS
});

export const advertsDeleteRequest = () => ({
  type: ADVERTS_DELETE_REQUEST
});

export const advertsDeleteFailure = error => ({
  type: ADVERTS_DELETE_FAILURE,
  error: true,
  payload: error
});

export const deleteAdverts = advertId => {
  return async function (dispatch, getstate) {
    try {
      dispatch(advertsDeleteRequest());
      await deleteAdvert(advertId);
      dispatch(advertsDeleteSuccess());
    } catch (error) {
      dispatch(advertsDeleteFailure(error));
      throw error;
    }
  };
};
