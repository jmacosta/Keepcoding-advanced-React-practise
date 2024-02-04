import { advertsLoadedSuccess, authLoginSuccess } from '../actions';
import { ADVERTS_LOADED_SUCCESS, AUTH_LOGIN_SUCCESS } from '../types';

describe('authLoginSuccess', () => {
  test('should return an "AUTH_LOGIN_SUCCESS" action', () => {
    const expectedAction = {
      type: AUTH_LOGIN_SUCCESS
    };
    const action = authLoginSuccess();
    expect(action).toEqual(expectedAction);
  });
});
describe('advertsLoadedSuccess', () => {
  test('should return a "ADVERTS_LOADED_SUCCESS" action with payload', () => {
    const adverts = 'adverts';
    const expectedAction = {
      type: ADVERTS_LOADED_SUCCESS,
      payload: adverts
    };
    const action = advertsLoadedSuccess(adverts);
    expect(action).toEqual(expectedAction);
  });
});
