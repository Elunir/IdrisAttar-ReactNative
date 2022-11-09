import {combineReducers} from 'redux';

import productReducer from './products/reducer';

const rootReducer = combineReducers({
  product: productReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
