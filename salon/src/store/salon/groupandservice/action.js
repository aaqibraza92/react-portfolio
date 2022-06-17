import {
   GROUP_AND_SERVICE_LIST,
    GROUP_AND_SERVICE_LIST_SUCCESS,
    GROUP_AND_SERVICE_LIST_FAILURE
  } from "./actionTypes"
  import { getSalonGroupAndServices } from '../../../helpers/backend/salon'


export const getSalonGroupAndServicesList = () => {
    return (dispatch) => {
      dispatch({ type: GROUP_AND_SERVICE_LIST });
      getSalonGroupAndServices().then(async(response) => { 
        if(response.status === 200)
        {
          dispatch({ type: GROUP_AND_SERVICE_LIST_SUCCESS, payload : response.data });
        }
        else{
          var error = response.message
          dispatch({ type: GROUP_AND_SERVICE_LIST_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: GROUP_AND_SERVICE_LIST_FAILURE, error });
          }
        );
    }
  }