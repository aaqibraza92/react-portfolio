import { getEmployeeInfo } from "../../../../helpers/backend";
import {GET_SALON_INFO_FETCH,SALON_INFO_FETCH_SUCCESS,SALON_INFO_FETCH_FAILURE} from "./actionTypes"


export const AuthgetEmployeeInfo=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: GET_SALON_INFO_FETCH
        });
        getEmployeeInfo(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: SALON_INFO_FETCH_SUCCESS, payload : res.data });
            }
            if(res && res.status===201){
                dispatch({ type: SALON_INFO_FETCH_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}