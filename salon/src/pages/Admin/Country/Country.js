import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import BreadCrum from "../BreadCrum/BreadCrum";
import { useTranslation } from "react-i18next";
import GCheckbox from "../../../components/Layout/GCheckbox";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import Svg from "../../../assets/svg/Svg";
import { Link } from "react-router-dom";

const Country = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <>
      <div className="row">
        <div className="card_tr">
        <span>{Svg.web}</span>
      <span className="colorRed fs14 ml10 mr10">{t("Breadcrum")}</span>
      <span>{Svg.rightArrow}</span>
      <Link to="#" className="colorLightGrey fs14 ml10 mr10"  >
        {t("Country")}
      </Link>
        </div>

        <Col md={12}>
          <div className="card">
            <CountryList />
          </div>
        </Col>
      </div>
    </>
  );
};

export default Country;

// Country List Section

const CountryList = () => {
  const [availability, setAvailability] = useState(false);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section>
        <section className="pt20 pl20 pr20 pb20">
          <h3 className="fs24 mb15 lb">{t("Countries")}</h3>
          <p className="fs14 colorGrey ">{t("Slightly")}</p>
          <Row>
            <Col md={4}>
              <section className="border radius4 pt15 pb15 pr15 pl15">
                <div className="bBottom pb10 mb10">
                  <GCheckbox
                    id="Afghanistan"
                    name="Afghanistan"
                    label="Afghanistan (+93)"
                  />
                </div>
                <div className="">
                  <GCheckbox
                    id="Afghanistan"
                    name="Afghanistan"
                    label="Afghanistan (+93)"
                  />
                </div>
              </section>
            </Col>
            <Col md={4}>
              <section className="border radius4 pt15 pb15 pr15 pl15">
                <div className="bBottom pb10 mb10">
                  <GCheckbox
                    id="Afghanistan"
                    name="Afghanistan"
                    label="Afghanistan (+93)"
                  />
                </div>
                <div className="">
                  <GCheckbox
                    id="Afghanistan"
                    name="Afghanistan"
                    label="Afghanistan (+93)"
                  />
                </div>
              </section>
            </Col>
            <Col md={4}>
              <section className="border radius4 pt15 pb15 pr15 pl15">
                <div className="bBottom pb10 mb10">
                  <GCheckbox
                    id="Afghanistan"
                    name="Afghanistan"
                    label="Afghanistan (+93)"
                  />
                </div>
                <div className="">
                  <GCheckbox
                    id="Afghanistan"
                    name="Afghanistan"
                    label="Afghanistan (+93)"
                  />
                </div>
              </section>
            </Col>
          </Row>
        </section>
        <div className="bTop pt15 pb15 pr20">
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
              {t("Cancel")}
            </GButton>
            <GButton transform="capitalize" pr="30px" pl="30px">
              {t("Save")}
            </GButton>
          </GAlign>
        </div>
      </section>
    </>
  );
};
