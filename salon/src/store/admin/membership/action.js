import {
   MEMBERSHIP_LIST,
    MEMBERSHIP_LIST_SUCCESS,
    MEMBERSHIP_LIST_FAILURE
  } from "./actionTypes"
  import { adminMembershipList } from '../../../helpers/backend/admin'


export const postMembershipList = (data) => {
    return (dispatch) => {
      dispatch({ type: MEMBERSHIP_LIST });
      adminMembershipList(data).then(async(response) => { 
        if(response.status === 200)
        {
          dispatch({ type: MEMBERSHIP_LIST_SUCCESS, payload : response });
        }
        else{
          var error = response.message
          dispatch({ type: MEMBERSHIP_LIST_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: MEMBERSHIP_LIST_FAILURE, error });
          }
        );
    }
  }