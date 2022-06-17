import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Img from "../../../assets/Img/Img";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import GCheckbox from "../../../components/Layout/GCheckbox";

const EditSalonAward = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [firstBadgeChecked, setfirstBadgeChecked] = useState(false);
  const [secondBadgeChecked, setSecondBadgeChecked] = useState(false);
  const [thirdBadgeChecked, setThirdBadgeChecked] = useState(false);
  return (
    <>
      <style jsx="true">{`
        .award_checked {
          background: #ffeaec;
          border: 1px solid #ff385c !important;
        }
      `}</style>
      <section>
        <h3 className="fs14 lb pl20 pt20 pb20 mb20 bBottom text-uppercase">
          {t("Editsalonaward")}
        </h3>
        <div className="pl20 pr20">
          <label className="fs14 colorGrey">{t("Salonname")}</label>
          <div className="form_custom mb60">
            <select className="w-100 pt10 pb13">
              <option value="1">Lorem</option>
              <option value="2">Ipsum</option>
              <option value="3">Lorem 2</option>
            </select>
          </div>
          <h3 className="fs14 mb15 colorBlack">{t("Selectaward")}</h3>
          <GAlign className="mb25">
            <div
              className={`border radius pt10 pl10 mr15 ${
                firstBadgeChecked === true ? "award_checked" : ""
              }`}
            >
              <GCheckbox
                id="badge1"
                value={firstBadgeChecked}
                onChange={() => setfirstBadgeChecked(!firstBadgeChecked)}
              />
              <div className="pt10 pb20 pl15 pr25">
                <img src={Img.badge1} alt="" />
              </div>
            </div>
            <div
              className={`border radius pt10 pl10 mr15 ${
                secondBadgeChecked === true ? "award_checked" : ""
              }`}
            >
              <GCheckbox
                id="badge2"
                value={secondBadgeChecked}
                onChange={() => setSecondBadgeChecked(!secondBadgeChecked)}
              />
              <div className="pt10 pb20 pl15 pr25">
                <img src={Img.badge2} alt="" />
              </div>
            </div>
            <div
              className={`border radius pt10 pl10 ${
                thirdBadgeChecked === true ? "award_checked" : ""
              }`}
            >
              <GCheckbox
                id="badge3"
                value={thirdBadgeChecked}
                onChange={() => setThirdBadgeChecked(!thirdBadgeChecked)}
              />
              <div className="pt10 pb20 pl15 pr25">
                <img src={Img.badge3} alt="" />
              </div>
            </div>
          </GAlign>
        </div>
        <div className="bTop pt15 pb15 pr20 m_bg_footer">
          <GAlign align="right">
            <GButton
              mr="15px"
              backgroundColor="#fff"
              color="#000"
              border="1px solid #707070"
              hoverBg="#fff"
              hoveColor="#000"
              hoverBorder="1px solid #000"
              transform="capitalize"
            >
              {t("Close")}
            </GButton>
            <GButton transform="capitalize">{t("Save")}</GButton>
          </GAlign>
        </div>
      </section>
    </>
  );
};

export default EditSalonAward;
