import { SALON_TEAM, SALON_TEAM_SUCCESS, SALON_TEAM_FAILURE } from "./actionTypes";

const initialState = [];

const salonteams = (state = initialState, action) => 
{
  const { type, payload } = action;
  switch (type) {
    case SALON_TEAM:
      return { data: payload };
    case SALON_TEAM_SUCCESS:
        return payload;
    case SALON_TEAM_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default salonteams



