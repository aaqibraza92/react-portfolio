
import { getServiceDropdown } from "../../../../helpers/backend";
import {SERVICE_DROPDOWN_LIST,SERVICE_DROPDOWN_SUCCESS,SERVICE_DROPDOWN_FAILURE} from "./actionsTypes"
export const AuthGetServiceItems=(data,callback)=>{
    return (dispatch)=>{
        dispatch({
            type: SERVICE_DROPDOWN_LIST
        });
        getServiceDropdown(data).then((res)=>{
            if(res && res.status===200){
                dispatch({
                    type: SERVICE_DROPDOWN_SUCCESS,
                     payload : res.data
                })
            }
            if(res && res.status===201){
                dispatch({ type: SERVICE_DROPDOWN_FAILURE, payload : res });
            }
            callback({status : res.status , message : res.message })
        })
    }
}