import {
  ADMIN_SERVICE_LISTS_SUCCESS,
  } from "./actionTypes";
  
  const initialAuthState = null;
  const serviceLists = (state = initialAuthState, { type, payload }) => {
    switch (type) {
      case ADMIN_SERVICE_LISTS_SUCCESS:
        return {
          service: payload,
        };
      default:
        return state;
    }
  };
  
  export default serviceLists;
  