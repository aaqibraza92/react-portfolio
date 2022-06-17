
import { membershipPurchase } from "../../../../helpers/backend";
import {MEMBERSHIP_PURCHASE_GET,MEMBERSHIP_PURCHASE_SUCCESS,MEMBERSHIP_PURCHASE_FAILURE} from "./actionsTypes"
export const AuthPurchaseMembership=(data,callback)=>{
    return (dispatch)=>{
        dispatch({
            type: MEMBERSHIP_PURCHASE_GET
        });
        membershipPurchase(data).then((res)=>{
            if(res && res.status===200){
                dispatch({
                    type: MEMBERSHIP_PURCHASE_SUCCESS,
                     payload : res
                })
            }
            if(res && res.status===201){
                dispatch({ type: MEMBERSHIP_PURCHASE_FAILURE, payload : res });
            }
            callback({status : res.status , message : res.message })
        })
    }
}