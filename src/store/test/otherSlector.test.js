import { getIsLogged } from '../selectors';

describe('getIsLogged', () => {
  const state = { auth: true };
  test('should return a true ', () => {
    expect(getIsLogged(state)).toBe(true);
  });
});
