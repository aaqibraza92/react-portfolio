import React from 'react'
import { Container, } from "reactstrap";
import ResetPasswordAction from '../../components/Authentication/ResetPasswordAction';
import GImage from "../../components/Layout/GImage/GImage";
import Img from "../../assets/Img/Img";
import { useTranslation } from "react-i18next";
import "./SalonLogin.css";
const SalonResetPassword = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
    <div className="salon-login">
      <div className="text-center pt120">
        <div className="mb20 mobMb10">
          <GImage src={Img.whitelogo} />
        </div>
        <h2 className="fs28 mobFs20 lb colorWhite mb15">{t("Connect")}</h2>
      </div>
      <ResetPasswordAction />
    </div>
    </>
  )
}

export default SalonResetPassword