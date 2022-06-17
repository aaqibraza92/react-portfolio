import { LANGUAGE_LIST, LANGUAGE_LIST_SUCCESS, LANGUAGE_LIST_FAILURE } from "./actionTypes";

const initialState = {};

const language = (state = initialState, action) => 
{
  const { type, payload } = action;

  switch (type) {
    case LANGUAGE_LIST:
      return { data: payload };
    case LANGUAGE_LIST_SUCCESS:
        return payload;
    case LANGUAGE_LIST_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default language



