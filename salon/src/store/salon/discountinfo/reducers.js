import { DISCOUNT_INFO, DISCOUNT_INFO_SUCCESS, DISCOUNT_INFO_FAILURE } from "./actionTypes";

const initialState = {};

const groupandservice = (state = initialState, action) => 
{
  const { type, payload } = action;
  switch (type) {
    case DISCOUNT_INFO:
      return { data: payload };
    case DISCOUNT_INFO_SUCCESS:
        return payload;
    case DISCOUNT_INFO_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default groupandservice



