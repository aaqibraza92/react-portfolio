import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE
  } from "./actionTypes"

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_SIGNUP_SUCCESS:
      return { usersignup: payload };
    case USER_SIGNUP_FAILURE:
        return { usersignup: payload };
    default:
      return state;
  }
}
