import {RESEND_OTP,RESEND_OTP_SUCCESS,RESEND_OTP_FAILURE} from "./actionTypes"
import { resendOtp } from "../../../helpers/backend"
import { notify } from "react-notify-toast";

export const AuthResendOtp=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: RESEND_OTP
        });
        resendOtp(data).then((res)=>{
            if(res && res.status===200){
                let myColor = { background: "#4bb543", text: "#FFFFFF" };
                notify.show("Thankyou! Your have registered successfully,Please verify your email", "custom", 5000, myColor);
            }
            callback({status : res.status , message : res.message })
        })
      
    }
}