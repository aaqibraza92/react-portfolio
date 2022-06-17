import {
   SERVICE_INFO,
    SERVICE_INFO_SUCCESS,
    SERVICE_INFO_FAILURE
  } from "./actionTypes"
  import { getSalonServicesInfo } from '../../../helpers/backend/salon'


export const getServicesInfo = (data) => {
    return (dispatch) => {
      dispatch({ type: SERVICE_INFO });
      getSalonServicesInfo(data).then(async(response) => { 
        console.log(response)
        if(response.status === 200)
        {
          dispatch({ type: SERVICE_INFO_SUCCESS, payload : response.data });
        }
        else{
          var error = response.message
          dispatch({ type: SERVICE_INFO_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: SERVICE_INFO_FAILURE, error });
          }
        );
    }
  }