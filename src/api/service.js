import client from './client';
const advertsUrl = '/api/v1/adverts';
const advertsTags = '/api/v1/adverts/tags';

export const getLatestAdverts = () => {
  return client.get(advertsUrl);
};
export const createAdvert = advertData => {
  return client.post(advertsUrl, advertData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const getAdvert = advertId => {
  return client.get(`${advertsUrl}/${advertId}`);
};

export const deleteAdvert = advertId => {
  return client.delete(`${advertsUrl}/${advertId}`);
};
export const getLatestTags = () => {
  return client.get(advertsTags);
};
