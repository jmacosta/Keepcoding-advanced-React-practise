import {
  ADVERTS_CREATED_SUCCESS,
  ADVERTS_DELETE_SUCCESS,
  ADVERTS_DETAIL_SUCCESS,
  ADVERTS_LOADED_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  TAGS_LOADED_SUCCESS,
  UI_RESET_ERROR
} from './types';
export const defaultState = {
  auth: false,
  adverts: {
    areLoaded: false,
    data: []
  },
  ui: { isFetching: false, error: null },
  tags: {
    areLoaded: false,
    data: []
  }
};

export const auth = (state = defaultState.auth, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
};

export const adverts = (state = defaultState.adverts, action) => {
  switch (action.type) {
    case ADVERTS_LOADED_SUCCESS:
      return { areLoaded: true, data: action.payload };

    case ADVERTS_DETAIL_SUCCESS:
      return { areLoaded: false, data: [action.payload] };
    case ADVERTS_CREATED_SUCCESS:
      return { ...state, data: [action.payload, ...state.data] };
    case ADVERTS_DELETE_SUCCESS:
      return { ...state, areLoaded: false };
    default:
      return state;
  }
};

export const ui = (state = defaultState.ui, action) => {
  if (action.error) {
    return { isFetching: false, error: action.payload };
  }
  if (action.type.endsWith('/request')) {
    return { isFetching: true, error: null };
  }
  if (action.type.endsWith('/success')) {
    return { isFetching: false, error: null };
  }
  if (action.type === UI_RESET_ERROR) {
    return { ...state, error: null };
  }
  return state;
};

export const tags = (state = defaultState.tags, action) => {
  switch (action.type) {
    case TAGS_LOADED_SUCCESS:
      return { areLoaded: true, data: action.payload };
    default:
      return state;
  }
};
