import { getMembershipAddonList } from "../../../../helpers/backend";
import {GET_MEMBERSHIP_ADDON_LIST,GET_MEMBERSHIP_ADDON_SUCCESS,GET_MEMBERSHIP_ADDON_FAILURE} from "./actionTypes"


export const AuthGetMembershipAddonList=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: GET_MEMBERSHIP_ADDON_LIST
        });
        getMembershipAddonList(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: GET_MEMBERSHIP_ADDON_SUCCESS, payload : res.data });
            }
            if(res && res.status===201){
                dispatch({ type: GET_MEMBERSHIP_ADDON_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}