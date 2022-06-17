import { membershipList } from "../../../../helpers/backend";
import {MEMBERSHIP_RETRIEVE,MEMBERSHIP_RETREIVE_SUCCESS,MEMBERSHIP_RETREIVE_FAILURE} from "./actionsTypes"


export const AuthMembershipPlans=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: MEMBERSHIP_RETRIEVE
        });
        membershipList(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: MEMBERSHIP_RETREIVE_SUCCESS, payload : res });
            }
            if(res && res.status===201){
                dispatch({ type: MEMBERSHIP_RETREIVE_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}