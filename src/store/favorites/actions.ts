import {
  ADD_TO_FAVORITES,
  FETCH_FAVORITES,
  REMOVE_FAVORITES,
} from './actionTypes';
import {
  AddFavoriteRequest,
  FetchFavoritesRequest,
  RemoveFavoriteRequest,
} from './types';

export const fetchTodo = (): FetchFavoritesRequest => ({
  type: FETCH_FAVORITES,
});

export const addFavorites = (id: number): AddFavoriteRequest => ({
  type: ADD_TO_FAVORITES,
  id,
});

export const deleteFavorites = (id: number): RemoveFavoriteRequest => ({
  type: REMOVE_FAVORITES,
  id,
});
