import { AWARDS_LIST, AWARDS_LIST_SUCCESS, AWARDS_LIST_FAILURE } from "./actionTypes";

const initialState = {};

const awards = (state = initialState, action) => 
{
  const { type, payload } = action;

  switch (type) {
    case AWARDS_LIST:
      return { data: payload };
    case AWARDS_LIST_SUCCESS:
        return payload;
    case AWARDS_LIST_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default awards



