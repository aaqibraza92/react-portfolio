import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  EMAIL_VEREIFICATION,
  EMAIL_VEREIFICATION_SUCCESS,
  EMAIL_VEREIFICATION_FAILURE
} from "./actionTypes"
import { userLogin, apiEmailVerified } from '../../../helpers/backend/index'
import Auth from '../../../helpers/Auth/Auth'

export const postAuthLogin = (data,callback) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    userLogin(data)
      .then(async(response) => { 
        
        var user = {}
          if (response.status === 200 )
          {
            user = response.data;
            Auth.setToken(response.data.token)
            delete user['token']; 
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({ type: LOGIN_SUCCESS, payload : user });
          } 
          else
          {
            dispatch({ type: LOGIN_FAILURE, payload : response.message });
          }

          callback({status : response.status , message : response.message , user : user,data : response.data })
        },
        error => {
          dispatch({ type: LOGIN_FAILURE, error });
        }
      );
  }
  
}

export const authEmailVerified = () => {
  return (dispatch) => {
    dispatch({ type: EMAIL_VEREIFICATION });
    apiEmailVerified()
      .then(async(response) => { 
        console.log('email_verification')
          if (response.status === 200 )
          {
            dispatch({ type: EMAIL_VEREIFICATION_SUCCESS, response });
          } 
          else
          {
            dispatch({ type: EMAIL_VEREIFICATION_FAILURE, response });
          }
        },
        error => {
          console.log(error)
          dispatch({ type: EMAIL_VEREIFICATION_FAILURE, error });
        }
      );
  }
}
