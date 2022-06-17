import { GIFTCARD_LIST, GIFTCARD_LIST_SUCCESS, GIFTCARD_LIST_FAILURE } from "./actionTypes";

const initialState = {};

const giftcard = (state = initialState, action) => 
{
  const { type, payload } = action;

  switch (type) {
    case GIFTCARD_LIST:
      return { data: payload };
    case GIFTCARD_LIST_SUCCESS:
        return payload;
    case GIFTCARD_LIST_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default giftcard



