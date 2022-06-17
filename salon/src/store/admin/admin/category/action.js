import {ADMIN_CATEGORY_LISTS,ADMIN_CATEGORY_LISTS_SUCCESS,ADMIN_CATEGORY_LISTS_FAILURE,ADMIN_ALL_CATEGORY_LISTS,ADMIN_ALL_CATEGORY_LISTS_SUCCESS,ADMIN_ALL_CATEGORY_LISTS_FAILURE} from "./actionTypes"
import { adminGetCategoryList,adminallcategorylist } from "../../../helpers/backend/admin"
import { notify } from "react-notify-toast";

export const AdminCategoryLists =(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: ADMIN_CATEGORY_LISTS
        });
        adminGetCategoryList(data).then((res)=>{
            console.log("Response >>>>",res)
            if(res && res.status===200){
                dispatch({ type: ADMIN_CATEGORY_LISTS_SUCCESS, payload : res });
            } 
             else{
                var error = res.message
                dispatch({ type: ADMIN_CATEGORY_LISTS_FAILURE, error });
              }
            // callback({status : res.status , message : res.message })
        })
      
    }
}

export const AdminAllCategoryLists =(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: ADMIN_ALL_CATEGORY_LISTS
        });
        adminallcategorylist(data).then((res)=>{
            console.log("Response >>>>",res)
            if(res && res.status===200){
                dispatch({ type: ADMIN_ALL_CATEGORY_LISTS_SUCCESS, payload : res });
            } 
             else{
                var error = res.message
                dispatch({ type: ADMIN_ALL_CATEGORY_LISTS_FAILURE, error });
              }
            // callback({status : res.status , message : res.message })
        })
      
    }
}