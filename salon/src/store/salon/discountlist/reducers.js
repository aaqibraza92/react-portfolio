import { DISCOUNT_INFO, DISCOUNT_INFO_SUCCESS, DISCOUNT_INFO_FAILURE, DISCOUNT_LIST, DISCOUNT_LIST_SUCCESS, DISCOUNT_LIST_FAILURE } from "./actionTypes";

const initialState = [];


const getdiscountlist = (state = initialState, action) => 
{
  const { type, payload } = action;
  switch (type) {
    case DISCOUNT_LIST:
        return { data: payload };
    case DISCOUNT_LIST_SUCCESS:
          return payload;
    case DISCOUNT_LIST_FAILURE:
        return { error: payload };
    default:
      return state;
  }
}
export default getdiscountlist



