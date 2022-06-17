import { getTeamMemberService } from "../../../../helpers/backend";
import {
  GET_TEAM_MEM_SERVICES,
  GET_TEAM_MEM_SERVICES_SUCCESS,
  GET_TEAM_MEM_SERVICES_FAILURE,
} from "./actionTypes";

export const AuthGetTeamMemberService = (data, callback) => {
  return (dispatch) => {
    dispatch({
      type: GET_TEAM_MEM_SERVICES,
    });
    getTeamMemberService(data).then((res) => {
      if (res && res.status === 200) {
        dispatch({ type: GET_TEAM_MEM_SERVICES_SUCCESS, payload: res.data });
      }
      if (res && res.status === 201) {
        dispatch({ type: GET_TEAM_MEM_SERVICES_FAILURE, payload: res });
      }

      callback({ status: res.status, message: res.message });
    });
  };
};
