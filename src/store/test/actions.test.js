import { authLoginSuccess } from '../actions';
import { AUTH_LOGIN_SUCCESS } from '../types';

describe('authLoginSuccess', () => {
  test('should return an "AUTH_LOGIN_SUCCESS" action', () => {
    const expectedAction = {
      type: AUTH_LOGIN_SUCCESS
    };
    const action = authLoginSuccess();
    expect(action).toEqual(expectedAction);
  });
});
