import React, { useState } from "react";
import {
  Col,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import { useTranslation } from "react-i18next";
import Img from "../../../assets/Img/Img";
import "./Customer.css";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import GTextarea from "../../../components/Layout/GTextarea";
import Breadcrum from "../BreadCrum/BreadCrum";

const CustomerDetails = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [all, setall] = useState("All");

  return (
    <>
      <style jsx="true">{`
        .setall {
          border: 1px solid black;
        }
        .new_set {
          background: #ff385c;
          color: #fff;
          border: 1px solid #ff385c;
        }
      `}</style>

      <div className="mb20">
        <Breadcrum />
      </div>
      <Row>
        <Col lg={4}>
          <section className="bgWhite radius pt20 pb25 position-relative">
            <section className="customer_details_dropdown">
              <UncontrolledDropdown>
                <DropdownToggle className="btn btn-danger">
                  <span>{Svg.ellipsiswhitebg}</span>
                </DropdownToggle>
                <DropdownMenu className="radius4 shadow noBorder">
                  <DropdownItem>
                    <ul className="noBg noUl mb0 pt10 pb10">
                      <li className="mb10">
                        <span className="fs14 d-block w-100 colorBlack">
                          <span className="mr10">{Svg.pencil}</span>
                          {t("Editcard")}
                        </span>
                      </li>
                      <li>
                        <span className="fs14 d-block w-100 colorBlack">
                          <span className="mr10">{Svg.delete}</span>
                          {t("Delete")}
                        </span>
                      </li>
                    </ul>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </section>
            <section className="text-center mb15">
              <div>
                <img src={Img.salon} alt="" className="w65 radius100 mb10" />
              </div>
              <h3 className="fs18 lm mb20">Emma Watson</h3>
              <GAlign align="around">
                <div>
                  <h4 className="fs15 lm mb2">2</h4>
                  <h5 className="fs14 lm colorGrey mb0">{t("Upcoming")}</h5>
                </div>
                <div>
                  <h4 className="fs15 lm mb2">2</h4>
                  <h5 className="fs14 lm colorGrey mb0">{t("Cancelled")}</h5>
                </div>
                <div>
                  <h4 className="fs15 lm mb2">2</h4>
                  <h5 className="fs14 lm colorGrey mb0">{t("Completed")}</h5>
                </div>
              </GAlign>
            </section>
            <section>
              <GAlign
                align="between"
                alignV="center"
                className="pl20 pr20 pb10 pt10 bTop bBottom"
              >
                <h3 className="fs14 mb0 colorGrey">{t("Source")}</h3>
                <GButton
                  backgroundColor="#37A3D2"
                  borderRadius="20px"
                  pl="12px"
                  pr="12px"
                  pt="5px"
                  pb="5px"
                >
                  Logo or name
                </GButton>
              </GAlign>
              <GAlign
                align="between"
                alignV="center"
                className="pl20 pr20 pb15 pt15 bBottom"
              >
                <h3 className="fs14 mb0 colorGrey">{t("Phone")}</h3>
                <h3 className="fs14 mb0">+44 (876) 543-2100</h3>
              </GAlign>
              <GAlign
                align="between"
                alignV="center"
                className="pl20 pr20 pb15 pt15 bBottom"
              >
                <h3 className="fs14 mb0 colorGrey">{t("Email")}</h3>
                <h3 className="fs14 mb0">emma@email.com</h3>
              </GAlign>
              <GAlign
                align="between"
                alignV="center"
                className="pl20 pr20 pb15 pt15 bBottom"
              >
                <h3 className="fs14 mb0 colorGrey">{t("Gender")}</h3>
                <h3 className="fs14 mb0">Female</h3>
              </GAlign>
              <GAlign
                align="between"
                alignV="center"
                className="pl20 pr20 pb15 pt15 bBottom"
              >
                <h3 className="fs14 mb0 colorGrey">{t("Dateofbirth")}</h3>
                <h3 className="fs14 mb0">15 April 1990</h3>
              </GAlign>
              <GAlign
                align="between"
                alignV="center"
                className="pl20 pr20 pb15 pt15 mb15 bBottom"
              >
                <h3 className="fs14 mb0 colorGrey">{t("Postalcode")}</h3>
                <h3 className="fs14 mb0">wc2n 5du</h3>
              </GAlign>
            </section>
            <section className="pl20 pr20">
              <div className="mb15">
                <span className="mr10">{Svg.redcross}</span>
                <span className="fs15 colorGrey">{t("Donotwish")}</span>
              </div>
              <div className="mb15">
                <span className="mr10">{Svg.redcardwithibtn}</span>
                <span className="fs15 colorGrey">
                  {t("Prepaymentrequired")}
                </span>
              </div>
              <GTextarea placeholder={t("Notes")}></GTextarea>
            </section>
          </section>
        </Col>

        <Col lg={8}>
          <section className="bgWhite radius pb20 mb20">
            <h3 className="fs15 lb bBottom pt20 pl20 pb20 mb20 text-uppercase">
              {t("Bookinghistory")}
              <GButton backgroundColor="#A7A9B1" ml="20px">
                5
              </GButton>
            </h3>
            <section className="pl20 pr20">
              <Row className="mb20">
                <Col xs={6} md={3} className="mobMb15">
                  <div
                    className={`${
                      all === "All" && "new_set"
                    } w-100 radius4 pt5 pb5 text-center pointer fs14 setall`}
                    onClick={() => setall("All")}
                  >
                    {t("All")}
                  </div>
                </Col>
                <Col xs={6} md={3} className="mobMb15">
                  <div
                    className={`${
                      all === "Upcoming" && "new_set"
                    } w-100 radius4 pt5 pb5 text-center pointer fs14 setall`}
                    onClick={() => setall("Upcoming")}
                  >
                    {t("Upcoming")}
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div
                    className={`${
                      all === "Requested" && "new_set"
                    } w-100 radius4 pt5 pb5 text-center pointer fs14 setall`}
                    onClick={() => setall("Requested")}
                  >
                    {t("Requested")}
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div
                    className={`${
                      all === "Previousbookings" && "new_set"
                    } w-100 radius4 pt5 pb5 text-center pointer fs14 setall`}
                    onClick={() => setall("Previousbookings")}
                  >
                    {t("Previousbookings")}
                  </div>
                </Col>
              </Row>

              {all === "All" && (
                <div>
                  <section className="border radius mb20">
                    <section className="pt20 pl20 pr20 pb20 mb20 bBottom">
                      <Row>
                        <Col lg={6}>
                          <GAlign>
                            <div className="mr10">
                              <img src={Img.homeicon} alt="" />
                            </div>
                            <div>
                              <h3 className="fs14 mb6">
                                Good Fellas Hair Salon
                              </h3>
                              <h3 className="fs14 mb0">
                                View contact & location
                              </h3>
                            </div>
                          </GAlign>
                        </Col>
                        <Col lg={6}>
                          <Row className="text-end mobile-left">
                            <Col lg={6}>
                              <h1 className="fs40 mb0 ">09:00</h1>
                            </Col>
                            <Col lg={6} className="text-start">
                              <h3 className="fs14 mb6">Thursday 03 March</h3>
                              <h3 className="fs14 colorGrey mb0">
                                1 hour total
                              </h3>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </section>
                    <section className="pl20 pr20 pb20">
                      <div className="mb20">
                        <Row>
                          <Col md={6}>
                            <GAlign>
                              <div>
                                <img
                                  src={Img.salon}
                                  alt=""
                                  className="radius100 w40 mr20"
                                />
                              </div>
                              <div>
                                <h3 className="fs14 mb10 ">
                                  Men - Beard Trim
                                  <span className="ml10">
                                    {Svg.ibuttondarkgrey}
                                  </span>
                                </h3>
                                <div>
                                  <h3 className="fs14 mb10 colorGrey">
                                    <span className="mr10">
                                      {Svg.persongrey}
                                    </span>
                                    {t("Onlyemployee")} :
                                    <span className="ml24">Todd Coleman</span>
                                  </h3>
                                  <h3 className="fs14 mb6 colorGrey">
                                    <span className="mr10">
                                      {Svg.darkwatch}
                                    </span>
                                    {t("Duration")} :
                                    <span className="ml30">30 mins</span>
                                  </h3>
                                </div>
                              </div>
                            </GAlign>
                          </Col>
                          <Col md={6} className="text-end">
                            <GButton
                              backgroundColor="#E7F5E4"
                              color="#5CB84B"
                              border="1px solid #5CB84B"
                              pt="5px"
                              pb="5px"
                              mb="10px"
                            >
                              {t("Confirmed")}
                            </GButton>
                            <h3 className="fs14 mb6">
                              <span className="mr10 colorGrey">
                                {t("Orderis")}
                              </span>
                              <span>ref. ID T792748309</span>
                            </h3>
                            <h3 className="fs14 mb6">
                              <span className="mr10 colorGrey">
                                {t("Source")} :
                              </span>
                              <span>ref. ID T792748309</span>
                            </h3>
                          </Col>
                        </Row>
                      </div>

                      <div className="mb20">
                        <Row>
                          <Col md={6}>
                            <GAlign>
                              <div>
                                <img
                                  src={Img.salon}
                                  alt=""
                                  className="radius100 w40 mr20"
                                />
                              </div>
                              <div>
                                <h3 className="fs14 mb10 ">
                                  Men - Beard Trim
                                  <span className="ml10">
                                    {Svg.ibuttondarkgrey}
                                  </span>
                                </h3>
                                <div>
                                  <h3 className="fs14 mb10 colorGrey">
                                    <span className="mr10">
                                      {Svg.persongrey}
                                    </span>
                                    {t("Onlyemployee")} :
                                    <span className="ml24">Todd Coleman</span>
                                  </h3>
                                  <h3 className="fs14 mb6 colorGrey">
                                    <span className="mr10">
                                      {Svg.darkwatch}
                                    </span>
                                    {t("Duration")} :
                                    <span className="ml30">30 mins</span>
                                  </h3>
                                </div>
                              </div>
                            </GAlign>
                          </Col>
                          <Col md={6} className="text-end">
                            <GButton
                              backgroundColor="#E7F5E4"
                              color="#5CB84B"
                              border="1px solid #5CB84B"
                              pt="5px"
                              pb="5px"
                              mb="10px"
                            >
                              {t("Confirmed")}
                            </GButton>
                            <h3 className="fs14 mb6">
                              <span className="mr10 colorGrey">
                                {t("Orderis")}
                              </span>
                              <span>ref. ID T792748309</span>
                            </h3>
                            <h3 className="fs14 mb6">
                              <span className="mr10 colorGrey">
                                {t("Source")} :
                              </span>
                              <span>ref. ID T792748309</span>
                            </h3>
                          </Col>
                        </Row>
                      </div>

                      <div className="money_bill pt10 pb10 pl15 pr15 radius">
                        <GAlign align="between" alignV="center">
                          <div>
                            <img src={Img.moneybill} alt="" />
                            <span className="fs15 ml15 mb0 colorBlue">
                              {t("Paymentatvenue")}
                            </span>
                          </div>
                          <h3 className="fs14 colorBlue mb0">₺15.00</h3>
                        </GAlign>
                      </div>
                    </section>
                  </section>

                  <section className="border radius mb20">
                    <div>
                      <Row>
                        <Col md={6} lg={6} className="d-flex">
                          <div className="customer_detail_border mr20 dNoneXs"></div>
                          <div className="pt20 pb20 mobpl15">
                            <h3 className="fs14 colorGrey mb10">
                              04 March, 11:30
                            </h3>
                            <h3 className="fs15 lm mb10">
                              Ladies - Fringe Trim
                            </h3>
                            <h3 className="fs14 colorGrey mb0">
                              Good Fellas Hair Salon
                            </h3>
                          </div>
                        </Col>
                        <Col md={6} lg={6} className="text-end mobile-left">
                          <div className="pt20 pb20 pr20 mobpl15 mobpt0">
                            <h3 className="fs14 mb6">
                              <span className="mr10 colorGrey">
                                {t("Orderis")}
                              </span>
                              <span>ref. ID T792748309</span>
                            </h3>
                            <h3 className="fs14 mb6">
                              <span className="mr10 colorGrey">
                                {t("Source")} :
                              </span>
                              <span>Bakim</span>
                            </h3>
                            <GButton
                              backgroundColor="#F9D9D9"
                              color="#D50303"
                              border="1px solid #F4B9B9"
                              pt="5px"
                              pb="5px"
                            >
                              {t("Cancelled")}
                            </GButton>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </section>

                  <section className="border radius mb20">
                    <div>
                      <Row>
                        <Col md={6} lg={6} className="d-flex">
                          <div className="customer_detail_border mr20 dNoneXs"></div>
                          <div className="pt20 pb20 mobpl15">
                            <h3 className="fs14 colorGrey mb10">
                              04 March, 11:30
                            </h3>
                            <h3 className="fs15 lm mb10">
                              Ladies - Fringe Trim
                            </h3>
                            <h3 className="fs14 colorGrey mb0">
                              Good Fellas Hair Salon
                            </h3>
                          </div>
                        </Col>
                        <Col md={6} lg={6} className="text-end mobile-left">
                          <div className="pt20 pb20 pr20 mobpl15 mobpt0">
                            <h3 className="fs14 mb6">
                              <span className="mr10 colorGrey">
                                {t("Orderis")}
                              </span>
                              <span>ref. ID T792748309</span>
                            </h3>
                            <h3 className="fs14 mb6">
                              <span className="mr10 colorGrey">
                                {t("Source")} :
                              </span>
                              <span>Bakim</span>
                            </h3>
                            <GButton
                              backgroundColor="#E1F1F8"
                              color="#37A3D2"
                              border="1px solid #C8E5F2"
                              pt="5px"
                              pb="5px"
                            >
                              {t("Cancelled")}
                            </GButton>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </section>
                </div>
              )}

              {all === "Upcoming" && <h1>Upcoming</h1>}
              {all === "Requested" && <h1>Requested</h1>}
              {all === "Previousbookings" && <h1>Previousbookings</h1>}
            </section>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default CustomerDetails;
