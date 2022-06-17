import {ADMIN_REQUESTED_LISTS,ADMIN_REQUESTED_LISTS_SUCCESS,ADMIN_REQUESTED_LISTS_FAILURE} from "./actionTypes"
import { adminRequestedLists } from "../../../helpers/backend"
import { notify } from "react-notify-toast";

export const SalonRequestLists=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: ADMIN_REQUESTED_LISTS
        });
        adminRequestedLists(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: ADMIN_REQUESTED_LISTS_SUCCESS, payload : res });
            }
            callback({status : res.status , message : res.message })
        })
      
    }
}