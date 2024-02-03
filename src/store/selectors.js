export const getIsLogged = state => state.auth;
export const getAdverts = state => state.adverts.data;
export const getAdvertById = advertId => state =>
  getAdverts(state).find(advert => advert.id === advertId);
export const getUi = state => state.ui;
export const areAdvertsLoaded = state => state.adverts.areLoaded;
export const areTagsLoaded = state => state.tags.areLoaded;
