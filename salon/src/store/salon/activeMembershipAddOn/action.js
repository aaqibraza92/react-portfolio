import {
  ACTIVE_MEM_ADDON,
  ACTIVE_MEM_ADDON_SUCCESS,
  ACTIVE_MEM_ADDON_FAILURE
  } from "./actionTypes"
  import { activeMembershipAddOn } from '../../../helpers/backend/salon'


export const activeMembershipAddOnDisp = () => {
    return (dispatch) => {
      dispatch({ type: ACTIVE_MEM_ADDON });
      activeMembershipAddOn().then(async(response) => { 
        console.log(response)
        if(response.status === 200)
        {
          dispatch({ type: ACTIVE_MEM_ADDON_SUCCESS, payload : response.data });
        }
        else{
          var error = response.message
          dispatch({ type: ACTIVE_MEM_ADDON_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: ACTIVE_MEM_ADDON_FAILURE, error });
          }
        );
    }
  }