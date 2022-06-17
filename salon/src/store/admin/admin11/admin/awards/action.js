import {
   AWARDS_LIST,
    AWARDS_LIST_SUCCESS,
    AWARDS_LIST_FAILURE
  } from "./actionTypes"
  import { adminGetAward } from '../../../helpers/backend/admin'


export const postAwardsList = (data) => {
    return (dispatch) => {
      dispatch({ type: AWARDS_LIST });
      adminGetAward(data).then(async(response) => { 
        if(response.status === 200)
        {
          dispatch({ type: AWARDS_LIST_SUCCESS, payload : response });
        }
        else{
          var error = response.message
          dispatch({ type: AWARDS_LIST_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: AWARDS_LIST_FAILURE, error });
          }
        );
    }
  }