import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "../reducers/productReducer//product.reducer";

import { authReducer } from "./authentication/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";


const reducer = combineReducers({
  productList: productListReducer,
  auth: authReducer,
  cart: cartReducer,
});

const initialState = {};

const middleware = [thunk];

const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
