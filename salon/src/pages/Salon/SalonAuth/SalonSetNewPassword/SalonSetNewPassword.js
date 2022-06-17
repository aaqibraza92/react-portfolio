import React from "react";
import Img from "../../../../assets/Img/Img";
import ResetPasswordAction from "../../../../components/Authentication/ResetPasswordAction";
import GImage from "../../../../components/Layout/GImage/GImage";
import "./SalonSetNewPassword.css";
import { useTranslation } from "react-i18next";

const SalonSetNewPassword = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div className="salon-set-new-password">
      <div className="text-center pt120">
        <div className="mb20 mobMb10">
          <GImage src={Img.whitelogo} />
        </div>
        <h2 className="fs28 mobFs20 lb colorWhite mb15">{t("Connect")}</h2>
      </div>
      <ResetPasswordAction />
    </div>
  );
};

export default SalonSetNewPassword;
