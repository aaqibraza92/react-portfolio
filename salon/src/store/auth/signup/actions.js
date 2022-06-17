import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
  } from "./actionTypes"
  import { userSignup } from '../../../helpers/backend/index'
  import Auth from '../../../helpers/Auth/Auth'
  
  export const postAuthSignup = (data, callback) => {
    return (dispatch) => {
      dispatch({ type: USER_SIGNUP_REQUEST });
      userSignup(data)
        .then((response) => { 
            if (response.status === 200 )
            {
              dispatch({ type: USER_SIGNUP_SUCCESS, payload : response.data });
              
            } 
            callback({status : response.status , message : response.message })
          },
          error => {
            dispatch({ type: USER_SIGNUP_FAILURE, error });
          }
        );
    }
  }