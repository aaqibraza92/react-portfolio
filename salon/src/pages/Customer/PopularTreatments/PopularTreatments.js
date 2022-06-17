import React from "react";
import { Container, Label } from "reactstrap";
import GAlign from "../../../components/Layout/GAlign";
import { useTranslation } from "react-i18next";
import GButton from "../../../components/Layout/GButton";
import Svg from "../../../assets/svg/Svg";

const PopularTreatments = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <Container>
        <GAlign className="pt30 mb15" alignV="center">
          <h4 className="fs15 lm mr15 mb0">{t("Populartreatments")}</h4>
          <GButton borderRadius="20px" pl="15px" pr="15px" pt="6px" pb="6px" mr="10px" backgroundColor="#fff" border="1px solid #EBEDF1" color="#5B5D6B">{t("Ladieshaircut")}</GButton>
          <GButton borderRadius="20px" pl="15px" pr="15px" pt="6px" pb="6px" mr="10px" backgroundColor="#fff" border="1px solid #EBEDF1" color="#5B5D6B">{t("Menshaircut")}</GButton>
          <GButton borderRadius="20px" pl="15px" pr="15px" pt="6px" pb="6px" mr="10px" backgroundColor="#fff" border="1px solid #EBEDF1" color="#5B5D6B">{t("Ladieshaircolor")}</GButton>
          <GButton borderRadius="20px" pl="15px" pr="15px" pt="6px" pb="6px" mr="10px" backgroundColor="#fff" border="1px solid #EBEDF1" color="#5B5D6B">{t("Blowdry")}</GButton>
          <GButton borderRadius="20px" pl="15px" pr="15px" pt="6px" pb="6px" mr="10px" backgroundColor="#fff" border="1px solid #EBEDF1" color="#5B5D6B">{t("Balayage")}</GButton>
          <GButton borderRadius="20px" pl="15px" pr="15px" pt="6px" pb="6px" mr="10px" backgroundColor="#fff" border="1px solid #EBEDF1" color="#5B5D6B">{t("Childrenhaircut")}</GButton>
        </GAlign>
        <h3 className="fs18 lm mb10">{t("Hairdressers")}</h3>
        <GAlign align="between" alignV="center" className="mb20">
          <p className="fs15 colorGrey mb0">{t("Choosefrom")}</p>
          <div className="d-flex align-items-center">
            <p className="fs15 mb0 colorGrey mr15">{t("Hidemap")}</p>
            <label className="switch" id="hidemap">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <GButton backgroundColor="#fff" ml="20px" border="1px solid #000" color="#000"><span className="mr10">{Svg.filtersort}</span>{t("Filtersort")}</GButton>
          </div>
        </GAlign>
      </Container>
    </>
  );
};

export default PopularTreatments;
