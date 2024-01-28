export const getIsLogged = state => state.auth;
export const getAdverts = state => state.adverts;
export const getAdvertById = advertId => state =>
  getAdverts(state).find(advert => advert.id === advertId);
export const getUi = state => state.ui;
