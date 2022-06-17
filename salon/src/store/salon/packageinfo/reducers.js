import { PACKAGE_INFO, PACKAGE_INFO_SUCCESS, PACKAGE_INFO_FAILURE } from "./actionTypes";

const initialState = {};

const groupandservice = (state = initialState, action) => 
{
  const { type, payload } = action;
  switch (type) {
    case PACKAGE_INFO:
      return { data: payload };
    case PACKAGE_INFO_SUCCESS:
        return payload;
    case PACKAGE_INFO_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default groupandservice



