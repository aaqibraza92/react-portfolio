import { getActivatedMembership } from "../../../../helpers/backend";
import {GET_ACTIVATED_MEMBERSHIP_LIST,GET_ACTIVATED_MEMBERSHIP_SUCCESS,GET_ACTIVATED_MEMBERSHIP_FAILURE} from "./actionTypes"


export const AuthActivatedMembership=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: GET_ACTIVATED_MEMBERSHIP_LIST
        });
        getActivatedMembership(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: GET_ACTIVATED_MEMBERSHIP_SUCCESS, payload : res.data });
            }
            if(res && res.status===201){
                dispatch({ type: GET_ACTIVATED_MEMBERSHIP_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}