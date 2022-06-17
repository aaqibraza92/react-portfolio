import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Img from "../../../assets/Img/Img";
import OtpVerify from "../../../components/OtpVerify/OtpVerify";
import { AuthMobileVerification } from "../../../store/auth/mobileverification/actions";
const MobileVerification = (props) => {
  //const dispatch = useDispatch();
  useEffect(() => {
    document.body.className = 'bodyPink';
    return () => { document.body.className = ''; }
  });
 // AuthMobileVerification

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
