
import { getSalonServicesLists } from "../../../../helpers/backend";
import {GET_SALON_SERVICES_LISTS,GET_SALON_SERVICES_LISTS_SUCCESS,GET_SALON_SERVICES_LISTS_FAILURE} from "./actionsTypes"

export const AuthGetSalonServicesGroupList=(data,callback)=>{
    return (dispatch)=>{
        dispatch({
            type: GET_SALON_SERVICES_LISTS
        });
        getSalonServicesLists().then((res)=>{
            if(res && res.status===200){
                dispatch({
                    type: GET_SALON_SERVICES_LISTS_SUCCESS,
                     payload : res.data
                })
            }
            if(res && res.status===201){
                dispatch({ type: GET_SALON_SERVICES_LISTS_FAILURE, payload : res });
            }
            callback({status : res.status , message : res.message })
        })
    }
}