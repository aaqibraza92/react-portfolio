import { PACKAGE_INFO, PACKAGE_INFO_SUCCESS, PACKAGE_INFO_FAILURE, PACKAGE_LIST, PACKAGE_LIST_SUCCESS, PACKAGE_LIST_FAILURE } from "./actionTypes";

const initialState = [];


const getpackageslist = (state = initialState, action) => 
{
  const { type, payload } = action;
  switch (type) {
    case PACKAGE_LIST:
        return { data: payload };
    case PACKAGE_LIST_SUCCESS:
          return payload;
    case PACKAGE_LIST_FAILURE:
        return { error: payload };
    default:
      return state;
  }
}
export default getpackageslist



