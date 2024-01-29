import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import * as actionsCreators from './actions.js';
import * as reducers from './reducers.js';

const composeEnhancers = composeWithDevTools({ actionsCreators });
const middleware = [thunk];
export default function configureStore(preloadedState) {
  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  return store;
}
