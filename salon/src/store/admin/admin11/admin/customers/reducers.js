import { CUSTOMER_LIST, CUSTOMER_LIST_SUCCESS, CUSTOMER_LIST_FAILURE } from "./actionTypes";

const initialState = {};

const customers = (state = initialState, action) => 
{
  const { type, payload } = action;

  switch (type) {
    case CUSTOMER_LIST:
      return { data: payload };
    case CUSTOMER_LIST_SUCCESS:
        return payload;
    case CUSTOMER_LIST_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default customers



