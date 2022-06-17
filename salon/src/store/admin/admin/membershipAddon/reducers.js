import { MEMBERSHIPADDONS_LIST, MEMBERSHIPADDONS_LIST_SUCCESS, MEMBERSHIPADDONS_LIST_FAILURE } from "./actionTypes";

const initialState = {};

const membershipaddons = (state = initialState, action) => 
{
  const { type, payload } = action;

  switch (type) {
    case MEMBERSHIPADDONS_LIST:
      return { data: payload };
    case MEMBERSHIPADDONS_LIST_SUCCESS:
        return payload;
    case MEMBERSHIPADDONS_LIST_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default membershipaddons



