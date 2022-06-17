import { CMS_LIST, CMS_LIST_SUCCESS, CMS_LIST_FAILURE } from "./actionTypes";

const initialState = {};

const cms = (state = initialState, action) => 
{
  const { type, payload } = action;

  switch (type) {
    case CMS_LIST:
      return { data: payload };
    case CMS_LIST_SUCCESS:
        return payload;
    case CMS_LIST_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default cms



