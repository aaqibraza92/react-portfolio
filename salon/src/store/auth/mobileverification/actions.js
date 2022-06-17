import {MOBILE_VERIFY,MOBILE_VERIFY_SUCCESS,MOBILE_VERIFY_FAILURE} from "./actionTypes"
import { mobileVerify } from "../../../helpers/backend"
import { notify } from "react-notify-toast";

export const AuthMobileVerification=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: MOBILE_VERIFY
        });
        mobileVerify(data).then((res)=>{
            if(res && res.status===200){
                let myColor = { background: "#4bb543", text: "#FFFFFF" };
                notify.show("Thankyou! Your have registered successfully,Please verify your email", "custom", 5000, myColor);
            }
            callback({status : res.status , message : res.message })
        })
      
    }
}