import {
  ADMIN_CATEGORY_LISTS_SUCCESS,
  } from "./actionTypes";
  
  const initialAuthState = null;
  const categoryLists = (state = initialAuthState, { type, payload }) => {
    switch (type) {
      case ADMIN_CATEGORY_LISTS_SUCCESS:
        return payload;
      default:
        return state;
    }
  };
  
  export default categoryLists;
  