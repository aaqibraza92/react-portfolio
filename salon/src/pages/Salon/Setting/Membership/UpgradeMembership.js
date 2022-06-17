import React from "react";
import { useTranslation } from "react-i18next";
import Img from "../../../../assets/Img/Img";
import GInfoBox from "../../../../components/GInfoBox";
import GAlign from "../../../../components/Layout/GAlign";
import GButton from "../../../../components/Layout/GButton";
import GSpacing from "../../../../components/Layout/GSpacing";

const UpgradeMembership = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt30 pb30 pl30 pr30">
        <h3 className="fs18 mb30">{t("Upgrade")}</h3>
        <GSpacing paddingBottom="30px">
          <GInfoBox
            imageURL={Img.heartcircle}
            label={t("Professionalplan")}
            text={t("Pricepermonth")}
          ></GInfoBox>
        </GSpacing>
        <p className="fs14 mb30 colorGrey">{t("Yournewmembership")}</p>
        <GAlign align="right">
          <GButton
            mr="15px"
            backgroundColor="#fff"
            color="#000"
            border="1px solid #707070"
            hoverBg="#fff"
            hoveColor="#000"
            hoverBorder="1px solid #000"
          >
            {t("Cancel")}
          </GButton>
          <GButton>{t("Confirm")}</GButton>
        </GAlign>
      </section>
    </>
  );
};

export default UpgradeMembership;
