import {GET_SALON_PRODUCT_LIST,GET_SALON_PRODUCT_LIST_SUCCESS,GET_SALON_PRODUCT_LIST_FAILURE} from "./actionTypes"


  // let getSalonProductList = [];
  const initialAuthState = []

  const RedGetSalonProductList = (state = initialAuthState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_SALON_PRODUCT_LIST:
        return { data: payload };
        case GET_SALON_PRODUCT_LIST_SUCCESS: 
        return payload;
        case GET_SALON_PRODUCT_LIST_FAILURE: 
        return { error: payload };
      default:
        return state;
    }
  };


  export default RedGetSalonProductList;
  