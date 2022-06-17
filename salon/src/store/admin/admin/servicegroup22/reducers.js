


import {
  SERVICE_GROUP_LIST,
  SERVICE_GROUP_LIST_SUCCESS,
  SERVICE_GROUP_LIST_FAILURE,
  } from "./actionTypes";
  
  const initialState = null;
  const servicegroup = (state = initialState, { type, payload }) => {
    switch (type) {
      case SERVICE_GROUP_LIST:
        return { data: payload };
      case SERVICE_GROUP_LIST_SUCCESS:
        return payload;
      case SERVICE_GROUP_LIST_FAILURE:
        return { error: payload };
      default:
        return state;
    }
  };
  
  export default servicegroup;
  