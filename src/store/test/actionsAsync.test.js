import * as service from '../../api/service';
import { loadTags, tagsLoadedRequest, tagsLoadedSuccess } from '../actions';

jest.mock('../../api/service', () => ({
  ...jest.requireActual('../../api/service'),
  getLatestTags: jest.fn()
}));

describe('loadTags', () => {
  test('should dispatch tagsLoadedSuccess with tags if tags are not already loaded', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({ tags: [] }));
    const mockTags = ['tag1', 'tag2'];
    service.getLatestTags.mockResolvedValueOnce(mockTags);

    await loadTags()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith(tagsLoadedRequest());
    expect(service.getLatestTags).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(tagsLoadedSuccess(mockTags));
  });
});
