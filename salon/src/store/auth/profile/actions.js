import {
  AUTH_PROFILE,
  AUTH_PROFILE_SUCCESS,
  AUTH_PROFILE_ERROR
} from "./actionTypes"
import { getAuthInfo } from '../../../helpers/backend/index'
import Auth from '../../../helpers/Auth/Auth'

export const authUserProfile = () => {

  return (dispatch) => {
    console.log("dispatch",dispatch);
    dispatch({ type: AUTH_PROFILE });
    getAuthInfo()
      .then(async (response) => {
        var user = {}
        if (response.status === 200) {
          
          user = response.data;
          dispatch({ type: AUTH_PROFILE_SUCCESS, payload: user });
        }
        else {
          dispatch({ type: AUTH_PROFILE_ERROR, payload: response.message });
        }
      },
        error => {
          dispatch({ type: AUTH_PROFILE_ERROR, error });
        }
      );
  }
}
