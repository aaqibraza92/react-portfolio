import { SERVICE_INFO, SERVICE_INFO_SUCCESS, SERVICE_INFO_FAILURE } from "./actionTypes";

const initialState = [];

const groupandservice = (state = initialState, action) => 
{
  const { type, payload } = action;

  switch (type) {
    case SERVICE_INFO:
      return { data: payload };
    case SERVICE_INFO_SUCCESS:
        return payload;
    case SERVICE_INFO_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default groupandservice



