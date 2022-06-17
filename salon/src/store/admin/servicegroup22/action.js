import {
    SERVICE_GROUP_LIST,
     SERVICE_GROUP_LIST_SUCCESS,
     SERVICE_GROUP_LIST_FAILURE
   } from "./actionTypes"
   import { adminGetServiceGroupList } from '../../../helpers/backend/admin'
 
 
 export const postServiceGroupList = (data) => {
     return (dispatch) => {
       dispatch({ type: SERVICE_GROUP_LIST });
       adminGetServiceGroupList(data).then(async(response) => { 
         if(response.status === 200)
         {
           dispatch({ type: SERVICE_GROUP_LIST_SUCCESS, payload : response });
         }
         else{
           var error = response.message
           dispatch({ type: SERVICE_GROUP_LIST_FAILURE, error });
         }
         
         },
           error => {
             dispatch({ type: SERVICE_GROUP_LIST_FAILURE, error });
           }
         );
     }
   }