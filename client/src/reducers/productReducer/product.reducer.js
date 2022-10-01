import {
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_FILTERED_PROUDCT_SUCCESS,
} from "../../constants/reducer.constants.js/product.constants";

export const productListReducer = (
  state = { products: [], filteredProducts: [] },
  action
) => {
  // console.log("Payload", action.ayload);
  switch (action.type) {
    case GET_ALL_PRODUCT_REQUEST: {
      return { ...state, loading: true };
    }
    case GET_ALL_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload,
        filteredProducts: action.payload,
      };
    }
    case GET_ALL_PRODUCT_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    case GET_FILTERED_PROUDCT_SUCCESS: {
      return { ...state, loading: false, filteredProducts: action.payload };
    }
    default:
      return state;
  }
};
