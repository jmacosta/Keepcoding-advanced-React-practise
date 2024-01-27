import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers.js';
export default function configureStore() {
  const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
