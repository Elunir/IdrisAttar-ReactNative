import {
  ADD_TO_FAVORITES,
  FETCH_FAVORITES,
  REMOVE_FAVORITES,
} from './actionTypes';

export interface IFavorites {
  id: number;
}

export interface FavoriteState {
  favorites: IFavorites[];
}

export interface FetchFavoritesRequest {
  type: typeof FETCH_FAVORITES;
}

export interface AddFavoriteRequest {
  type: typeof ADD_TO_FAVORITES;
  id: number;
}

export interface RemoveFavoriteRequest {
  type: typeof REMOVE_FAVORITES;
  id: number;
}
export type FavoriteActions =
  | AddFavoriteRequest
  | FetchFavoritesRequest
  | RemoveFavoriteRequest;
