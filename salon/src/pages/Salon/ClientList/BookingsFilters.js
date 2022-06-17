import React from "react";
import { useTranslation } from "react-i18next";
import CmnRadioBorder from "../../../components/Layout/CmnRadioBorder/CmnRadioBorder";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import GIconInput from "../../../components/Layout/GIconInput";

const BookingsFilters = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section>
        <div className="bgLightBlue">
          <h3 className="fs14 pl20 pt10 pb10 mb15">{t("Filtercustomers")}</h3>
        </div>
        <div className="pl10 pr10 mb10">
          <CmnRadioBorder name="consent" id="less" label={t("Less")} />
          <CmnRadioBorder name="consent" id="between" label={t("Inbetween")} />
        </div>
        <div className="pl20 pr20">
          <GAlign alignV="center" className="mb10">
            <div className="width20 mr25">
              <GIconInput type="number" paddingBottom="0px"></GIconInput>
            </div>
            <div className="width20 mr25">
              <GIconInput type="number" paddingBottom="0px"></GIconInput>
            </div>
            <span>{t("Bookings")}</span>
          </GAlign>
        </div>
        <div className="pl10 pr10 mb5">
          <CmnRadioBorder name="greater" id="greater" label={t("Greater")} />
        </div>
        <div className="pl20 pr20">
          <GAlign align="between" alignV="center" className="mb25">
            <span className="text-underline">{t("Resettodefault")}</span>
            <GButton>{t("Onlyfilter")}</GButton>
          </GAlign>
        </div>
      </section>
    </>
  );
};

export default BookingsFilters;
