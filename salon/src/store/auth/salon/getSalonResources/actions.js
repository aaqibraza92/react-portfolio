import { getSalonResources } from "../../../../helpers/backend";
import {GET_SALON_RESOURCES,SALON_RESOURCES_SUCCESS,SALON_RESOURCES_FAILURE} from "./actionTypes"


export const AuthGetSalonResources=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: GET_SALON_RESOURCES
        });
        getSalonResources(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: SALON_RESOURCES_SUCCESS, payload : res.data });
            }
            if(res && res.status===201){
                dispatch({ type: SALON_RESOURCES_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}