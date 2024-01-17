import searchIcon from '../assets/search_icon.svg';
import sellIcon from '../assets/sell_icon.svg';
export const sellSearchIcon = sellOrSearch => {
  return sellOrSearch
    ? { image: sellIcon, alt: 'Se vende' }
    : { image: searchIcon, alt: 'Se busca' };
};
