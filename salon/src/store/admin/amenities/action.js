import {
   AMINITIES_LIST,
    AMINITIES_LIST_SUCCESS,
    AMINITIES_LIST_FAILURE
  } from "./actionTypes"
  import { adminGetAminities } from '../../../helpers/backend/admin'


export const postAminitiesList = (data) => {
    return (dispatch) => {
      dispatch({ type: AMINITIES_LIST });
      adminGetAminities(data).then(async(response) => { 
        if(response.status === 200)
        {
          dispatch({ type: AMINITIES_LIST_SUCCESS, payload : response });
        }
        else{
          var error = response.message
          dispatch({ type: AMINITIES_LIST_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: AMINITIES_LIST_FAILURE, error });
          }
        );
    }
  }