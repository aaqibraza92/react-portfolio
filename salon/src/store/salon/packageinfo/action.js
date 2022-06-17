import {
    PACKAGE_INFO,
    PACKAGE_INFO_SUCCESS,
    PACKAGE_INFO_FAILURE
  } from "./actionTypes"
  import { getSalonPackageInfo } from '../../../helpers/backend/salon'


export const getPackageInfo = (data) => {
    return (dispatch) => {
      dispatch({ type: PACKAGE_INFO });
      getSalonPackageInfo(data).then(async(response) => { 
        
        if(response.status === 200)
        {
          dispatch({ type: PACKAGE_INFO_SUCCESS, payload : response.data });
        }
        else{
          var error = response.message
          dispatch({ type: PACKAGE_INFO_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: PACKAGE_INFO_FAILURE, error });
          }
        );
    }
  }