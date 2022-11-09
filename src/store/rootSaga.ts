import {all, fork} from 'redux-saga/effects';
import favoriteSaga from './favorites/sagas';

export function* rootSaga() {
  yield all([fork(favoriteSaga)]);
}
