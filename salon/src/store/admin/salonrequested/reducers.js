import {
    ADMIN_REQUESTED_LISTS,
    ADMIN_REQUESTED_LISTS_SUCCESS,
    ADMIN_REQUESTED_LISTS_FAILURE,
  } from "./actionTypes";
  
  const initialAuthState = null;
  let salonRequested = [];
  const salonRequestedLists = (state = initialAuthState, { type, payload }) => {
    switch (type) {
      case ADMIN_REQUESTED_LISTS_SUCCESS:
        return {
          salonRequested: payload,
        };
      default:
        return state;
    }
  };
  
  export default salonRequestedLists;
  