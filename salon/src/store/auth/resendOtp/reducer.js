import {RESEND_OTP,RESEND_OTP_SUCCESS,RESEND_OTP_FAILURE} from "./actionTypes"

const initialAuthState = null;
const resendOtp = (state = initialAuthState, { type, payload }) => {
  switch (type) {
    case RESEND_OTP_SUCCESS:
      return {
        initialAuthState: payload,

      };
    default:
      return state;
  }
};

export default resendOtp;
