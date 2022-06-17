import {
  ADMIN_GET_SERVICE_GROUP_LIST,
  ADMIN_GET_SERVICE_GROUP_SUCCESS,
  ADMIN_GET_SERVICE_GROUP_FAILURE
  } from "./actionTypes"
  import { adminGetServiceGroup } from '../../../helpers/backend/admin'

  export const AdminGetServiceGroupLists =(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: ADMIN_GET_SERVICE_GROUP_LIST
        });
        adminGetServiceGroup(data).then((res)=>{
            console.log("Response >>>>",res)
            if(res && res.status===200){
                dispatch({ type: ADMIN_GET_SERVICE_GROUP_SUCCESS, payload : res });
            } 
             else{
                var error = res.message
                dispatch({ type: ADMIN_GET_SERVICE_GROUP_FAILURE, error });
              }
            // callback({status : res.status , message : res.message })
        })
      
    }
}