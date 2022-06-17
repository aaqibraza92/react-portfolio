
import { getSalonServicesListById } from "../../../../helpers/backend";
import {SERVICE_LISTS_GET,SERVICE_LISTS_SUCCESS,SERVICE_LISTS_FAILURE} from "./actionsTypes"
export const AuthSalonServiceList=(data,callback)=>{
    return (dispatch)=>{
        dispatch({
            type: SERVICE_LISTS_GET
        });
        getSalonServicesListById(data).then((res)=>{
            if(res && res.status===200){
                dispatch({
                    type: SERVICE_LISTS_SUCCESS,
                     payload : res
                })
            }
            if(res && res.status===201){
                dispatch({ type: SERVICE_LISTS_FAILURE, payload : res });
            }
            callback({status : res.status , message : res.message })
        })
    }
}