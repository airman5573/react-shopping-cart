import axios from 'axios';

import {API_URL} from 'constant';

export const GET_PRODUCT_LIST = {
  PENDING: 'GET_PRODUCT_LIST_PENDING',
  SUCCESS: 'GET_PRODUCT_LIST_SUCCESS',
  FAILURE: 'GET_PRODUCT_LIST_FAILURE',
};

function getProductListAPI() {
  return axios.get(API_URL);
}

export const getProductList = () => async (dispatch) => {
  dispatch({type: GET_PRODUCT_LIST.PENDING});

  try {
    const response = await getProductListAPI();
    dispatch({
      type: GET_PRODUCT_LIST.SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_LIST.FAILURE,
      payload: err,
    });
    throw err;
  }
};

const initialState = {
  pending: false,
  error: false,
  productList: [],
};

export default function productListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST.PENDING: {
      return {
        ...state,
        pending: true,
        error: false,
      };
    }
    case GET_PRODUCT_LIST.SUCCESS: {
      const productList = action.payload;
      return {
        ...state,
        pending: false,
        productList,
      };
    }
    case GET_PRODUCT_LIST.FAILURE: {
      return {
        ...state,
        pending: false,
        error: true,
      };
    }
    default:
      return state;
  }
}
