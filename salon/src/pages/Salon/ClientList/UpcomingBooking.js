import React from "react";
import { Col, Row } from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import { useTranslation } from "react-i18next";

const UpcomingBooking = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="card_thank text-center">
        <h3 className="fs18 mb15">{t("Upcomingbookingfound")}</h3>
        <h3 className="fs15 mb15 colorGrey">{t("Rescheduleremove")}</h3>
        <GButton transform="uppercase" width="100%" mb="15px">
          {t("Reschedulebooking")}
        </GButton>
        <GButton
          transform="uppercase"
          width="100%"
          color="#282A3A"
          border="1px solid #282A3A"
          backgroundColor="transparent"
        >
          {t("Removebooking")}
        </GButton>
      </div>
    </>
  );
};

export default UpcomingBooking;
