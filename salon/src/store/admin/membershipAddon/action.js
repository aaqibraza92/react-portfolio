import {
   MEMBERSHIPADDONS_LIST,
    MEMBERSHIPADDONS_LIST_SUCCESS,
    MEMBERSHIPADDONS_LIST_FAILURE
  } from "./actionTypes"
  import { adminMembershipAddonsList } from '../../../helpers/backend/admin'


export const postMembershipAddonsList = (data) => {
    return (dispatch) => {
      dispatch({ type: MEMBERSHIPADDONS_LIST });
      adminMembershipAddonsList(data).then(async(response) => { 
        if(response.status === 200)
        {
          dispatch({ type: MEMBERSHIPADDONS_LIST_SUCCESS, payload : response });
        }
        else{
          var error = response.message
          dispatch({ type: MEMBERSHIPADDONS_LIST_FAILURE, error });
        }
        },
          error => {
            dispatch({ type: MEMBERSHIPADDONS_LIST_FAILURE, error });
          }
        );
    }
  }