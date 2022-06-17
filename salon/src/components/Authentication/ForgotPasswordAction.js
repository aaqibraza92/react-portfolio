import React, { useState } from "react";
import GIconInput from "../../components/Layout/GIconInput";
import GButton from "../../components/Layout/GButton";
import { useTranslation } from "react-i18next";
import { useNavigate, Navigate } from "react-router-dom";
import { postForgetPwd } from "../../helpers/backend/index";
import { notify } from "react-notify-toast";
const ForgotPasswordAction = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [username, setUserName] = useState("");
  function handleValidSubmit() {
    const iData = { username: username };
    postForgetPwd(iData).then((res) => {
      console.log("aa",res);
      if (res && res.status && res.status === 200) {
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(res.message, "custom", 4000, myColor);
        setUserName("");
        setTimeout(() => {
          navigate("/thankyou");
        }, 1000);
      } else {
        let myColor = { background: "red", text: "#FFFFFF" };
        notify.show("Oops! " + res.message[0].param+ res.message[0].msg, "custom", 4000, myColor);
      }
    });
  }

  return (
    <>
      <h2 className="lm mb30">Reset Your Password</h2>
      <p className="w-75 mb-3">
        Enter your email or mobile number below and check your inbox for
        a link to set a new password.
      </p>
    <GIconInput
        label="Email/Mobile Number"
        type="email"
        name="email"
        required="true"
        placeholder="Email/Mobile Number"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <GButton className="mt-3" onClick={handleValidSubmit}>
        Request send
      </GButton>
    </>
  )
}

export default ForgotPasswordAction