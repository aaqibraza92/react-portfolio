import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";
import "./SalonDetails.css";
import { useTranslation } from "react-i18next";
import "./SalonDetails.css";

const SalonDescription = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <>
      <section className="pt20">
        <Container>
          <Row>
            <h3 className="fs20 lm mb20">
              <span className="mr10">{Svg.victory}</span>
              {t("Matchingyoursearch")}
            </h3>
            <Col lg={8}>
              <div>
                <h5 className="fs15 mb5 colorGrey">
                  Ladies - Haircut & Blow Dry
                </h5>
                <p className="fs15 mb0">
                  <span className="colorTaupeGrey mr5">30 Minutes .</span>
                  Show details
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="d-flex align-items-center justify-content-end text-end">
                <div className="mr15">
                  <span className="fs15 colorGrey">from ₺7.50</span>
                  <p className="fs15 colorBlue mb0">save up to 50%</p>
                </div>
                <div>
                  <span>{Svg.downarrowblack}</span>
                </div>
              </div>
            </Col>
            <div className="bBottom pb15 mb15"></div>
            <Col lg={8}>
              <GAlign alignV="center">
                <span className="mr15">{Svg.pluswithblueborder}</span>
                {/* <span className="mr15">{Svg.rightbgblue}</span> */}
                <div>
                  <h5 className="fs15 mb5 colorGrey">Ladies - Fringe Trim</h5>
                  <p className="fs15 mb0">
                    <span className="colorTaupeGrey mr5">30 Minutes .</span>
                    Show details
                  </p>
                </div>
              </GAlign>
            </Col>
            <Col lg={4}>
              <div className="text-end textMobLeft">
                <span className="fs15 colorGrey"> ₺7.50</span>
                <p className="fs15 colorBlue mb0">save up to 50%</p>
              </div>
            </Col>
            <div className="bBottom pb15 mb15"></div>
            <Col lg={8}>
              <div>
                <h5 className="fs15 mb5 colorGrey">
                  Men - Haircuts & Hairdressing
                </h5>
                <p className="fs15 mb0">
                  <span className="colorTaupeGrey mr5">30 Minutes .</span>
                  Show details
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="d-flex align-items-center justify-content-end text-end">
                <div className="mr15">
                  <p className="fs15 colorGrey mb0">from ₺7.50</p>
                  <del className="fs15 colorBlue mb0">₺20.50</del>
                </div>
                <div>
                  <span>{Svg.downarrowblack}</span>
                </div>
              </div>
            </Col>
            <div className="bBottom pb15 mb15"></div>

            {/* Browse Services Section  */}
            <Col lg={4}>
              <GAlign className="pt40 mb15">
                <span className="mr15">{Svg.blackscissor}</span>
                <div>
                  <h3 className="fs18 lm mb5">{t("Browseservices")}</h3>
                  <p className="fs14 mb0">{t("Notwhatyou")}</p>
                </div>
              </GAlign>
              <section className="pt20 pb20 pl20 pr20 border radius4">
                <GAlign
                  alignV="center"
                  align="between"
                  className="bBottom pb10 mb10"
                >
                  <p className="fs15 mb0">Patch Test (1)</p>
                  <div>
                    <span className="mr10">{Svg.Offpeak}</span>
                    <span>{Svg.redtick}</span>
                  </div>
                </GAlign>
                <GAlign
                  alignV="center"
                  align="between"
                  className="bBottom pb10 mb10"
                >
                  <p className="fs15 mb0">Patch Test (1)</p>
                  <div>
                    <span className="mr10">{Svg.Offpeak}</span>
                    <span>{Svg.redtick}</span>
                  </div>
                </GAlign>
                <GAlign
                  alignV="center"
                  align="between"
                  className="bBottom pb10"
                >
                  <p className="fs15 mb0">Patch Test (1)</p>
                  <div>
                    <span className="mr10">{Svg.Offpeak}</span>
                    <span>{Svg.redtick}</span>
                  </div>
                </GAlign>
              </section>
            </Col>
            <Col lg={8} className="pt40 mb15">
              <h3 className="fs15 bgSkyBlue colorBlue mb0 pt8 pb8 pl15 pr15">
                <span className="mr10">{Svg.Offpeak}</span>
                {t("Someoftheseservices")}
              </h3>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SalonDescription;
