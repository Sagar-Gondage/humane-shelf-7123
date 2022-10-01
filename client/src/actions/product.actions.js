import {
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_DISCOUNT_PRODUCT_SUCCESS,
  GET_FILTERED_PROUDCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../constants/reducer.constants.js/product.constants";
import axios from "axios";

export const getAllProductsAPI = () => async (dispatch) => {
  // console.log("in all proudct route");
  dispatch({ type: GET_ALL_PRODUCT_REQUEST });
  try {
    const { data } = await axios.get("http://localhost:8080/products");
    // console.log("all data", data.data);
    dispatch({ type: GET_ALL_PRODUCT_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCT_FAIL,
      payload: "Failed To Fetch the data",
    });
  }
};

export const filterByBrandAPI = (payload) => async (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCT_REQUEST });
  // console.log(payload);
  try {
    const { data } = await axios.get(
      `http://localhost:8080/products/filter?brand=${payload}`
    );
    // console.log(data.data);
    dispatch({ type: GET_FILTERED_PROUDCT_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCT_FAIL,
      payload: "Failed To Fetch the data",
    });
  }
};

export const getDiscountProductAPI = (payload) => async (dispatch) => {
  // dispatch({ type: GET_ALL_PRODUCT_REQUEST });
  // console.log(payload);
  try {
    const { data } = await axios.get(
      `http://localhost:8080/products/filter?discount=${payload}`
    );
    // console.log(data.data);
    console.log(data.data);
    dispatch({ type: GET_DISCOUNT_PRODUCT_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCT_FAIL,
      payload: "Failed To Fetch the data",
    });
  }
};

//// SINGLE PRODUCTS
export const getSingleProductAPI = (id) => async (dispatch) => {
  console.log("in single Proudct");
  dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
  try {
    const { data } = await axios.get(
      `http://localhost:8080/products/data/${id}`
    );
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_SINGLE_PRODUCT_FAIL, payload: error });
  }
};
