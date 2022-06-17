
import { getMembershipLists } from "../../../helpers/backend";
import {GET_MEMBERSHIP_LISTS,GET_MEMBERSHIP_SUCCESS,GET_MEMBERSHIP_FAILURE} from "./actionTypes"


export const AuthGetMembershipList=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: GET_MEMBERSHIP_LISTS
        });
        getMembershipLists(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: GET_MEMBERSHIP_SUCCESS, payload : res.data });
            }
            if(res && res.status===201){
                dispatch({ type: GET_MEMBERSHIP_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}