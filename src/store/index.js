import { createStore, combineReducers, applyMiddleware } from "redux";
import CatigoryReducer from './categories';
import CartReducer from './cart';
import ProductReducer from './products';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
let reducers = combineReducers({ CatigoryReducer, ProductReducer , CartReducer});

const store = () => {
  return createStore(reducers,composedEnhancer);
};

export default store();
