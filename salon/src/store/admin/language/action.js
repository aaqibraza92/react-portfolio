import {
    LANGUAGE_LIST,
     LANGUAGE_LIST_SUCCESS,
     LANGUAGE_LIST_FAILURE
   } from "./actionTypes"
   import { adminGetLanguage } from '../../../helpers/backend/admin'
 
 
 export const postLanguageList = (data) => {
     return (dispatch) => {
       dispatch({ type: LANGUAGE_LIST });
       adminGetLanguage(data).then(async(response) => { 
         if(response.status === 200)
         {
           dispatch({ type: LANGUAGE_LIST_SUCCESS, payload : response });
         }
         else{
           var error = response.message
           dispatch({ type: LANGUAGE_LIST_FAILURE, error });
         }
         
         },
           error => {
             dispatch({ type: LANGUAGE_LIST_FAILURE, error });
           }
         );
     }
   }