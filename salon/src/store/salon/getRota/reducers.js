import { GET_ROTA, GET_ROTA_SUCCESS, GET_ROTA_FAILURE } from "./actionTypes";

const initialState = [];

const getRota = (state = initialState, action) => 
{
  const { type, payload } = action;
  switch (type) {
    case GET_ROTA:
      return { data: payload };
    case GET_ROTA_SUCCESS:
        return payload;
    case GET_ROTA_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default getRota



