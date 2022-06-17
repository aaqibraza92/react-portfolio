import {
  PACKAGE_LIST,
  PACKAGE_LIST_SUCCESS,
  PACKAGE_LIST_FAILURE
  } from "./actionTypes"
  import { getSalonPackageInfo } from '../../../helpers/backend/salon'

export const getPackageList = (data) => {
  return (dispatch) => {
    dispatch({ type: PACKAGE_LIST });
    getSalonPackageInfo(data).then(async(response) => { 
      if(response.status === 200)
      {
        dispatch({ type: PACKAGE_LIST_SUCCESS, payload : response.data });
      }
      else{
        var error = response.message
        dispatch({ type: PACKAGE_LIST_FAILURE, error });
      }
      
      },
        error => {
          dispatch({ type: PACKAGE_LIST_FAILURE, error });
        }
      );
  }
}