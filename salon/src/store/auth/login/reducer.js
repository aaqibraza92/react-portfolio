import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./actionTypes"
let user = null
const initialState = {};
// const initialAuthState = user ? { isLogged: true, user } : {user: [],isLogged: false };
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return { loggedIn: true, user: payload };
    case LOGIN_FAILURE:
      return { loggingIn: false };
    default:
      return state;
  }
}

