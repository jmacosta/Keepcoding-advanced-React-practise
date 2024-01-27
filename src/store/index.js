import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers.js';
export default function configureStore(preloadedState) {
  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
