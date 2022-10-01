import {
  ADD_ITEM_TO_CART_SUCCESS,
  LOAD_CART_ITEMS,
} from "../../constants/reducer.constants.js/cart.constants";
import {
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_DISCOUNT_PRODUCT_SUCCESS,
  GET_FILTERED_PROUDCT_SUCCESS,
} from "../../constants/reducer.constants.js/product.constants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  console.log("Payload", action.payload);
  switch (action.type) {
    case ADD_ITEM_TO_CART_SUCCESS: {
      return { ...state, cartItems: action.payload };
    }
    default:
      return state;
  }
};
