import { AMINITIES_LIST, AMINITIES_LIST_SUCCESS, AMINITIES_LIST_FAILURE } from "./actionTypes";

const initialState = {};

const aminities = (state = initialState, action) => 
{
  const { type, payload } = action;

  switch (type) {
    case AMINITIES_LIST:
      return { data: payload };
    case AMINITIES_LIST_SUCCESS:
        return payload;
    case AMINITIES_LIST_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default aminities



