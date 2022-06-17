import React from "react";
import { useTranslation } from "react-i18next";
import CmnRadioBorder from "../../../components/Layout/CmnRadioBorder/CmnRadioBorder";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import GIconInput from "../../../components/Layout/GIconInput";

const FilterByCount = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section>
        <div className="bgLightBlue">
          <h3 className="fs14 pl20 pt10 pb10 mb25">{t("Filterbycount")}</h3>
        </div>
        <div className="pl10 pr10">
          <CmnRadioBorder id="less" label={t("Less")} />
          <CmnRadioBorder id="between" label={t("Inbetween")} />
        </div>
        <div className="pl20 pr20">
          <GAlign alignV="center" className="mb20">
            <div className="width20 mr20">
              <GIconInput type="number" paddingBottom="0px"></GIconInput>
            </div>
            <span className="colorGrey">{t("To")}</span>
            <div className="width20 ml20">
              <GIconInput type="number" paddingBottom="0px"></GIconInput>
            </div>
          </GAlign>
          <CmnRadioBorder id="Greater" label={t("Greater")} />
          <GAlign align="between" alignV="center" className="mb25">
            <span className="colorRed text-underline">
              {t("Resettodefault")}
            </span>
            <GButton>{t("Onlyfilter")}</GButton>
          </GAlign>
        </div>
      </section>
    </>
  );
};

export default FilterByCount;
