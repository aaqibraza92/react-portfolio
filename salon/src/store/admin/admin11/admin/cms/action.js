import {
   CMS_LIST,
    CMS_LIST_SUCCESS,
    CMS_LIST_FAILURE
  } from "./actionTypes"
  import { adminGetCms } from '../../../helpers/backend/admin'


export const postCmsList = (data) => {
    return (dispatch) => {
      dispatch({ type: CMS_LIST });
      adminGetCms(data).then(async(response) => { 
        if(response.status === 200)
        {
          dispatch({ type: CMS_LIST_SUCCESS, payload : response });
        }
        else{
          var error = response.message
          dispatch({ type: CMS_LIST_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: CMS_LIST_FAILURE, error });
          }
        );
    }
  }