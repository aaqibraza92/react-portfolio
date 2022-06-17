import { MEMBERSHIP_LIST, MEMBERSHIP_LIST_SUCCESS, MEMBERSHIP_LIST_FAILURE } from "./actionTypes";

const initialState = {};

const membership = (state = initialState, action) => 
{
  const { type, payload } = action;

  switch (type) {
    case MEMBERSHIP_LIST:
      return { data: payload };
    case MEMBERSHIP_LIST_SUCCESS:
        return payload;
    case MEMBERSHIP_LIST_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default membership



