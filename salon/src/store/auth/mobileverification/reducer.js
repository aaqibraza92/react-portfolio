import {
  MOBILE_VERIFY,
  MOBILE_VERIFY_SUCCESS,
  MOBILE_VERIFY_FAILURE,
} from "./actionTypes";

const initialAuthState = null;
let isVerify = false;
const mobileVerify = (state = initialAuthState, { type, payload }) => {
  switch (type) {
    case MOBILE_VERIFY_SUCCESS:
      return {
        isVerify: true,

      };
    default:
      return state;
  }
};

export default mobileVerify;
