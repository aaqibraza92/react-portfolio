import {
    SALON_REGISTRATION,
    SALON_REGISTRATION_SUCCESS,
    SALON_REGISTRATION_FAILURE
  } from "./actionTypes"
  import { salonSignup } from '../../../helpers/backend/salon'
  import Auth from '../../../helpers/Auth/Auth'
  
  export const postSalonSignup = (data, callback) => {
    return (dispatch) => {
      dispatch({ type: SALON_REGISTRATION });
      salonSignup(data)
        .then(async(response) => { 
            var user = {}
            if (response.status === 200 )
            {
              user = response.data
              Auth.setToken(response.data.token)
              delete user['token']; 
              localStorage.setItem('user', JSON.stringify(user));
              dispatch({ type: SALON_REGISTRATION_SUCCESS, user });
            } 
            callback({status : response.status , message : response.message , user : user })
            
          },
          error => {
            dispatch({ type: SALON_REGISTRATION_FAILURE, error });
          }
        );
    }
  }