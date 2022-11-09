import {createSelector} from 'reselect';

import {AppState} from '../rootReducer';

const getFavorites = (state: AppState) => state.favorite.favorites;

export const getFavoritesSelector = createSelector(
  getFavorites,
  (favorites: any) => favorites,
);
