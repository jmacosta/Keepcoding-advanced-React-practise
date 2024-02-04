import { getAdvertById } from '../selectors';

describe('getAdvertById', () => {
  const advertId = '1';
  const adverts = [{ id: advertId }];
  const state = { adverts: { data: adverts } };

  test('should return a tweet by tweetId', () => {
    expect(getAdvertById(advertId)(state)).toBe(adverts[0]);
  });

  test('should not return any tweet', () => {
    expect(getAdvertById('2')(state)).toBeUndefined();
  });
});
