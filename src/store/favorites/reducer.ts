import {
  ADD_TO_FAVORITES,
  FETCH_FAVORITES,
  REMOVE_FAVORITES,
} from './actionTypes';

import {FavoriteState, FavoriteActions} from './types';

const initialState: FavoriteState = {
  favorites: [],
};

export default (state = initialState, action: FavoriteActions) => {
  switch (action.type) {
    case FETCH_FAVORITES:
      return {
        ...state,
      };
    case ADD_TO_FAVORITES:
      if (!state.favorites.includes(action.id)) {
        state.favorites.push(action.id);
      }
      return {
        ...state,
        id: action.id,
      };
    case REMOVE_FAVORITES:
      const newData = state.favorites.filter(item => item.id !== action.id);
      state.favorites = newData;
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
