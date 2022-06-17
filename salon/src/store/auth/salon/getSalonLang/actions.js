import { getSalonLang } from "../../../../helpers/backend";
import {GET_SALON_LANG,GET_SALON_LANG_SUCCESS,GET_SALON_LANG_FAILURE} from "./actionsTypes"


export const AuthGetSalonLang=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: GET_SALON_LANG
        });
        getSalonLang(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: GET_SALON_LANG_SUCCESS, payload : res });
            }
            if(res && res.status===201){
                dispatch({ type: GET_SALON_LANG_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}