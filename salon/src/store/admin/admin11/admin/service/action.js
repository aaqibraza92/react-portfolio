import {ADMIN_SERVICE_LISTS,ADMIN_SERVICE_LISTS_SUCCESS,ADMIN_SERVICE_LISTS_FAILURE} from "./actionTypes"
import { adminGetServiceList } from "../../../helpers/backend/admin"
import { notify } from "react-notify-toast";

export const AdminServiceLists =(data)=>{
    return(dispatch)=>{
        dispatch({
            type: ADMIN_SERVICE_LISTS
        });
        adminGetServiceList(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: ADMIN_SERVICE_LISTS_SUCCESS, payload : res });
            }
        })
      
    }
}