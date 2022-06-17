import {
    SALON_REGISTRATION_SUCCESS,
    SALON_REGISTRATION_FAILURE,
  } from "./actionTypes"
  let user = null
  const initialState = {};
  // const initialAuthState = user ? { isLogged: true, user } : {user: [],isLogged: false };
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case SALON_REGISTRATION_SUCCESS:
        return { loggedIn: true, salonsignup: payload };
      case SALON_REGISTRATION_FAILURE:
        return { loggingIn: false };
      default:
        return state;
    }
  }
  
  