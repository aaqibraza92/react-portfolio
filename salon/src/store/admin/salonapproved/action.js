import {
    ADMIN_APPROVED_SALON_LISTS,
    ADMIN_APPROVED_SALON_SUCCESS,
    ADMIN_APPROVED_SALON_FAILURE
  } from "./actionTypes"
  import { adminApprovedSalonList } from '../../../helpers/backend/admin'


export const postApprovedSalonList = (data) => {
    return (dispatch) => {
      dispatch({ type: ADMIN_APPROVED_SALON_LISTS });
      adminApprovedSalonList(data).then(async(response) => { 
        dispatch({ type: ADMIN_APPROVED_SALON_SUCCESS, payload : response });
          },
          error => {
            dispatch({ type: ADMIN_APPROVED_SALON_FAILURE, error });
          }
        );
    }
  }