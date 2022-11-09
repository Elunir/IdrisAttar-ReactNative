import {all, takeLatest} from 'redux-saga/effects';
import {FETCH_TODO_REQUEST} from '../todo/actionTypes';

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchFavoriteSaga() {
  yield 'Favorites';
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* favoriteSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchFavoriteSaga)]);
}

export default favoriteSaga;
