import {
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
} from "../constants/reducer.constants.js/product.constants";
import axios from "axios";

export const getAllProductsAPI = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCT_REQUEST });
  try {
    const { data } = await axios.get("http://localhost:8080/productList");

    dispatch({ type: GET_ALL_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCT_FAIL,
      payload: "Failed To Fetch the data",
    });
  }
};
