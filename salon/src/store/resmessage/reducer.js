import { SET_SUCCESS_MESSAGE, SET_ERROR_MESSAGE, CLEAR_MESSAGE } from "./actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SUCCESS_MESSAGE:
      return { message: payload };
    case SET_ERROR_MESSAGE:
        return { message: payload };
    case CLEAR_MESSAGE:
      return { message: "" };
    default:
      return state;
  }
}