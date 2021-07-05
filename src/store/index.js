import { createStore, combineReducers } from "redux";
import CatigoryReducer from './categories';
import ProductReducer from './products';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({ CatigoryReducer, ProductReducer });

const store = () => {
  return createStore(reducers,composeWithDevTools());
};

export default store();