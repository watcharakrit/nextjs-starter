import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// import reducers from redux modules
import clockReducer from './clock';
import dataReducer from './data';

export const reducers = combineReducers({
  clock : clockReducer,
  data  : dataReducer
});

export default (initialState) => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
};