import { getWorkingHours } from "../../../../helpers/backend";
import {GET_SALON_TIME,GET_SALON_TIME_SUCCESS,GET_SALON_TIME_FAILURE} from "./actionsTypes"


export const AuthGetSalonTime=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: GET_SALON_TIME
        });
        getWorkingHours(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: GET_SALON_TIME_SUCCESS, payload : res });
            }
            if(res && res.status===201){
                dispatch({ type: GET_SALON_TIME_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}