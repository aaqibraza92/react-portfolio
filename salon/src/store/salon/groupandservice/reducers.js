import { GROUP_AND_SERVICE_LIST, GROUP_AND_SERVICE_LIST_SUCCESS, GROUP_AND_SERVICE_LIST_FAILURE } from "./actionTypes";

const initialState = [];

const groupandservice = (state = initialState, action) => 
{
  const { type, payload } = action;

  switch (type) {
    case GROUP_AND_SERVICE_LIST:
      return { data: payload };
    case GROUP_AND_SERVICE_LIST_SUCCESS:
        return payload;
    case GROUP_AND_SERVICE_LIST_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default groupandservice



