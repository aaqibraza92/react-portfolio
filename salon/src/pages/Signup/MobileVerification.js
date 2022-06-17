import React, { useEffect } from "react";
import Img from "../../assets/Img/Img";
import OTPModal from "../../components/OTPModal/OTPModal";
import OtpVerify from "../../components/OtpVerify/OtpVerify";
import { phoneVerified } from "../../helpers/backend";

const MobileVerification = (props) => {

  useEffect(() => {
    document.body.className = 'bodyPink';
    return () => { document.body.className = ''; }
  });



  const handelVerifyOTP = async (otp) => {
    console.log("otp",otp);
    var result = false;
    try {
      // await HTTP.post(
      //   API.verifyOTP,
      //   { phone: otpmobile, otp: otp },
      //   false,
      //   false,
      //   ""
      // ).then((res) => {
      //   console.log("handelVerifyOTP : ", res);
      //   if (res && res.status && res.status === 200) {
      //     if (res.message === "Phone Verifyied Successfully.") {
      //       result = true;
      //       props.callback(true);
      //       return result;
      //     }
      //   }
      // });
      const iData = {
        otp: otp,
        mobile: "9876543210",
      };

      phoneVerified(iData).then((res)=>{

      })
    } catch (error) {
      console.log(error);
    }
    return result;
  };





  const getState=(val)=>{
  }
  return (
    <>
      <style jsx="true">
        {`
          .mobVerify .modal-backdrop.fade.show {
            opacity: 0.9;
          }
        `}
      </style>

      <div className="heightVh50 d-flex flex-column  justify-content-center">

      <OtpVerify iconImage={Img.mobverify.default} getStateFromComp={getState}  heading="Verify mobile number" text="Phew, an email is now winging its way to you with instructions about."/>
      </div>
    </>
  );
};

export default MobileVerification;
