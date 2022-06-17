import { getSalonInvoice } from "../../../../helpers/backend";
import {GET_SALON_INVOICE,GET_SALON_INVOICE_SUCCESS,GET_SALON_INVOICE_FAILURE} from "./actionTypes"


export const AuthSalonInvoice=(data,callback)=>{

    return(dispatch)=>{
        dispatch({
            type: GET_SALON_INVOICE
        });
        getSalonInvoice(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: GET_SALON_INVOICE_SUCCESS, payload : res.data });
            }
            if(res && res.status===201){
                dispatch({ type: GET_SALON_INVOICE_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}