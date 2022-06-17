import { SALON_DISCOUNT, SALON_DISCOUNT_SUCCESS, SALON_DISCOUNT_FAILURE } from "./actionTypes";

const initialState = [];

const salondiscount = (state = initialState, action) => 
{
  const { type, payload } = action;
  switch (type) {
    case SALON_DISCOUNT:
      return { data: payload };
    case SALON_DISCOUNT_SUCCESS:
        return payload;
    case SALON_DISCOUNT_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default salondiscount



