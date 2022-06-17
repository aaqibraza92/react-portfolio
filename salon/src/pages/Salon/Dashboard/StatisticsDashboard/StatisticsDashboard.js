import React from "react";
import { Col, Container, Row } from "reactstrap";
import SalonAuthHeader from "../../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../../SalonSidebar/SalonSidebar";
import { useTranslation } from "react-i18next";
import GAlign from "../../../../components/Layout/GAlign";
import Img from "../../../../assets/Img/Img";
import Svg from "../../../../assets/svg/Svg";
import "./Statistics.css";
import GInfoBox from "../../../../components/GInfoBox";

const StatisticsDashboard = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 salon_pc_container">
          <SalonAuthHeader />
          <div className="card-body heightVh64">
            <h3 className="fs24 lb mb20">{t("Statistics")}</h3>
            <GAlign
              alignV="center"
              align="between"
              className="border radius4 bgCream pt7 pb7 pl7 pr20 mb30"
            >
              <section className="d-flex align-items-center">
                <div>
                  <img src={Img.statistics} alt="" className="radius4 mr10" />
                </div>
                <div>
                  <h3 className="fs15 mb10">Good Fellas Hair Salon</h3>
                  <h3 className="fs15 mb0">
                    3.5
                    <span className="ml5 mr3">{Svg.star}</span>
                    <span className="mr3">{Svg.star}</span>
                    <span className="mr3">{Svg.star}</span>
                    <span className="mr3">{Svg.star}</span>
                  </h3>
                </div>
              </section>
              <section className="d-flex align-items-center">
                <div className="mr10">
                  <GInfoBox
                    imageURL={Img.viewbooking}
                    label={t("Viewbooking")}
                    text={t("Marketplace")}
                  ></GInfoBox>
                </div>
                <div className="bRight mr10" style={{ height: "50px" }}></div>
                <GInfoBox
                  imageURL={Img.viewwidget}
                  label={t("Viewbooking")}
                  text={t("Marketplace")}
                ></GInfoBox>
              </section>
            </GAlign>
            <Row className="mb30">
              <h3 className="fs18 mb15">
                <span>{t("Overview")}</span>
                <span className="fs14 colorGrey ml5">{t("Month")}</span>
              </h3>
              <Col lg={4}>
                <section className="pl20 pr20 pt20 pb20 total_sales radius4">
                  <GAlign>
                    <div>
                      <img
                        src={Img.salon}
                        alt=""
                        className="w48 radius100 mr15"
                      />
                    </div>
                    <div>
                      <h2 className="fs20 lm mb5">136,50 ₺</h2>
                      <h3 className="fs14 mb7 colorGrey">{t("Totalsales")}</h3>
                      <h5 className="fs14 mb0 colorBlue">
                        {t("Viewreport")}{" "}
                        <span className="ml5">{Svg.rightbluearrow}</span>
                      </h5>
                    </div>
                  </GAlign>
                </section>
              </Col>
              <Col lg={4}>
                <section className="pl20 pr20 pt20 pb20 acquired_clients radius4">
                  <GAlign>
                    <div>
                      <img
                        src={Img.salon}
                        alt=""
                        className="w48 radius100 mr15"
                      />
                    </div>
                    <div>
                      <h2 className="fs20 lm mb5">136,50 </h2>
                      <h3 className="fs14 mb7 colorGrey">
                        {t("Acquiredclients")}
                      </h3>
                      <h5 className="fs14 mb0 colorRed">
                        {t("Viewreport")}{" "}
                        <span className="ml5">{Svg.rightredarrow}</span>
                      </h5>
                    </div>
                  </GAlign>
                </section>
              </Col>
              <Col lg={4}>
                <section className="pl20 pr20 pt20 pb20 client_retention radius4">
                  <GAlign>
                    <div>
                      <img
                        src={Img.salon}
                        alt=""
                        className="w48 radius100 mr15"
                      />
                    </div>
                    <div>
                      <h2 className="fs20 lm mb5">136,50 </h2>
                      <h3 className="fs14 mb7 colorGrey">
                        {t("Acquiredclients")}
                      </h3>
                      <h5 className="fs14 mb0 client_retention_color">
                        {t("Clientretention")}{" "}
                        <span className="ml5">{Svg.rightyellowarrow}</span>
                      </h5>
                    </div>
                  </GAlign>
                </section>
              </Col>
            </Row>
            <h3 className="fs18 mb15">
              <span>{t("Overview")}</span>
              <span className="fs14 colorGrey ml5">{t("Month")}</span>
            </h3>
            <h3 className="fs14 brownColor bgLightRed pt10 pb10 pl15 mb0 radius4 mb15">
              <span className="mr10">{Svg.brownibtn}</span>
              {t("Alwaysmakesure")}
            </h3>
            <Row>
              <Col lg={6}></Col>
              <Col lg={6}>
                <section className="border pt20 pb20 pl20 pr20 radius4 mb20">
                  <section className="bBottom pb15 mb15">
                    <h3 className="fs18 mb10">
                      {t("Salesservices")}
                      <span className="ml10">{Svg.rightblackarrow}</span>
                    </h3>
                    <GAlign align="between" alignV="center" className="mb10">
                      <h4 className="fs12 colorGrey mb0 text-uppercase">
                        {t("This")}
                      </h4>
                      <h4 className="fs12 colorGrey mb0 text-uppercase">
                        {t("Amount")}
                      </h4>
                    </GAlign>
                    <GAlign align="between" alignV="center" className="mb5">
                      <h4 className="fs14 mb0">
                        Damen - Waschen, Schneiden & Föhnen
                      </h4>
                      <h4 className="fs14 mb0">136,50 $</h4>
                    </GAlign>
                    <GAlign align="between" alignV="center" className="mb5">
                      <h4 className="fs14 mb0">
                        Damen - Waschen, Schneiden & Föhnen
                      </h4>
                      <h4 className="fs14 mb0">136,50 $</h4>
                    </GAlign>
                    <GAlign align="between" alignV="center">
                      <h4 className="fs14 mb0">
                        Damen - Waschen, Schneiden & Föhnen
                      </h4>
                      <h4 className="fs14 mb0">136,50 $</h4>
                    </GAlign>
                  </section>
                  <section className="bBottom pb15 mb15">
                    <h3 className="fs18 mb10">
                      {t("Salesbyemployee")}
                      <span className="ml10">{Svg.rightblackarrow}</span>
                    </h3>
                    <GAlign align="between" alignV="center" className="mb10">
                      <h4 className="fs12 colorGrey mb0 text-uppercase">
                        {t("This")}
                      </h4>
                      <h4 className="fs12 colorGrey mb0 text-uppercase">
                        {t("Amount")}
                      </h4>
                    </GAlign>
                    <GAlign align="between" alignV="center" className="mb5">
                      <h4 className="fs14 mb0">
                        Damen - Waschen, Schneiden & Föhnen
                      </h4>
                      <h4 className="fs14 mb0">136,50 $</h4>
                    </GAlign>
                    <GAlign align="between" alignV="center" className="mb5">
                      <h4 className="fs14 mb0">
                        Damen - Waschen, Schneiden & Föhnen
                      </h4>
                      <h4 className="fs14 mb0">136,50 $</h4>
                    </GAlign>
                    <GAlign align="between" alignV="center">
                      <h4 className="fs14 mb0">
                        Damen - Waschen, Schneiden & Föhnen
                      </h4>
                      <h4 className="fs14 mb0">136,50 $</h4>
                    </GAlign>
                  </section>
                  <section>
                    <h3 className="fs18 mb10">
                      {t("Salesbychannel")}
                      <span className="ml10">{Svg.rightblackarrow}</span>
                    </h3>
                    <GAlign align="between" alignV="center" className="mb10">
                      <h4 className="fs12 colorGrey mb0 text-uppercase">
                        {t("This")}
                      </h4>
                      <h4 className="fs12 colorGrey mb0 text-uppercase">
                        {t("Amount")}
                      </h4>
                    </GAlign>
                    <GAlign align="between" alignV="center" className="mb5">
                      <h4 className="fs14 mb0">
                        Damen - Waschen, Schneiden & Föhnen
                      </h4>
                      <h4 className="fs14 mb0">136,50 $</h4>
                    </GAlign>
                    <GAlign align="between" alignV="center" className="mb5">
                      <h4 className="fs14 mb0">
                        Damen - Waschen, Schneiden & Föhnen
                      </h4>
                      <h4 className="fs14 mb0">136,50 $</h4>
                    </GAlign>
                    <GAlign align="between" alignV="center">
                      <h4 className="fs14 mb0">
                        Damen - Waschen, Schneiden & Föhnen
                      </h4>
                      <h4 className="fs14 mb0">136,50 $</h4>
                    </GAlign>
                  </section>
                </section>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default StatisticsDashboard;
