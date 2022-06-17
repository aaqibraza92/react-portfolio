import React from "react";
import {
  Col,
  Container,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import SalonAuthHeader from "../../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../../SalonSidebar/SalonSidebar";
import { useTranslation } from "react-i18next";
import Svg from "../../../../assets/svg/Svg";
import GAlign from "../../../../components/Layout/GAlign";
import GButton from "../../../../components/Layout/GButton";
import "./CustomerReviews.css"

const CustomerReviews = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 salon_pc_container">
          <SalonAuthHeader />
          <div className="card-body heightVh64">
            <Row>
              <Col lg={8}>
                <h3 className="fs24 lb mb20">{t("Customerreviews")}</h3>
                <section className="border radius4 pt20 pb20 pl20 pr20 mb20">
                  <h3 className="fs24 lb mb10 lg_star">
                    3.5 <span>{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span>
                  </h3>
                  <GAlign align="between" alignV="center" className="mb12">
                    <h4 className="fs12 colorGrey mb0">Based on 112 reviews</h4>
                    <div>{Svg.ibtnblack}</div>
                  </GAlign>
                  <section className="width40">
                    <GAlign align="between" alignV="center" className="mb12">
                      <h4 className="fs15 mb0">{t("Ambience")}</h4>
                      <h4 className="fs15 mb0 sm_star">4.5<span className="ml5">{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></h4>
                    </GAlign>
                    <GAlign align="between" alignV="center" className="mb12">
                      <h4 className="fs15 mb0">{t("Staff")}</h4>
                      <h4 className="fs15 mb0 sm_star">4.5<span className="ml5">{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></h4>
                    </GAlign>
                    <GAlign align="between" alignV="center" className="mb12">
                      <h4 className="fs15 mb0">{t("Cleanliness")}</h4>
                      <h4 className="fs15 mb0 sm_star">4.5<span className="ml5">{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></h4>
                    </GAlign>
                    <GAlign align="between" alignV="center">
                      <h4 className="fs15 mb0">{t("Service")}</h4>
                      <h4 className="fs15 mb0 sm_star">4.5<span className="ml5">{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></h4>
                    </GAlign>
                  </section>
                </section>
                <section className="mb20">
                  <GAlign alignV="center" align="between" className="mb20">
                    <div>
                      <h3 className="fs18 lm mb0">Diana</h3>
                      <div className="sm_star"><span>{Svg.star}{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></div>
                    </div>
                    <UncontrolledDropdown>
                      <DropdownToggle>
                        <span>{Svg.Vellipsis}</span>
                      </DropdownToggle>
                      <DropdownMenu className="radius4 shadow noBorder">
                        <DropdownItem>
                          <ul className="noBg noUl mb0">
                            <li className="pt7 pb7">
                              <span className="fs14 d-block w-100 colorBlack">
                                {t("Report")}
                              </span>
                            </li>
                          </ul>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </GAlign>
                  <Row className="mb20">
                    <Col lg={3}>
                      <div className="bRight">
                        <h3 className="fs14 mb5 colorGrey">{t("Ambience")}</h3>
                        <h3 className="fs15 mb0 sm_star">5<span className="ml5">{Svg.star}{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></h3>
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="bRight">
                        <h3 className="fs14 mb5 colorGrey">{t("Staff")}</h3>
                        <h3 className="fs15 mb0 sm_star">5<span className="ml5">{Svg.star}{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></h3>
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="bRight">
                        <h3 className="fs14 mb5 colorGrey">{t("Cleanliness")}</h3>
                        <h3 className="fs15 mb0 sm_star">5<span className="ml5">{Svg.star}{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></h3>
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div>
                        <h3 className="fs14 mb5 colorGrey">{t("Service")}</h3>
                        <h3 className="fs15 mb0 sm_star">5<span className="ml5">{Svg.star}{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></h3>
                      </div>
                    </Col>
                  </Row>
                  <p className="fs14 mb15">
                    I had my balayage done by Silvana,she listen to what I
                    wanted done and did an amazing job ,definitely would
                    recommend this place.
                  </p>
                  <div className="d-flex align-items-center mb15">
                    <h3 className="fs14 colorGrey mb0 mr15">14.02.2022</h3>
                    <h3 className="fs14 colorGrey mb0 mr15">Empoyee ·</h3>
                    <GButton
                      backgroundColor="#fff"
                      color="#000"
                      border="1px solid #E2E3E9"
                      borderRadius="20px"
                      pt="2px"
                      pb="2px"
                      pl="10px"
                      pr="10px"
                    >
                      Silvana
                    </GButton>
                  </div>
                  <section className="mb15 pb15 bBottom reviews_textarea">
                    <textarea
                      name=""
                      id=""
                      cols="90"
                      rows="4"
                      className="mb15 pl15"
                      placeholder="Enter Text"
                    ></textarea>
                    <GAlign align="right">
                      <GButton>{t("Send")}</GButton>
                    </GAlign>
                  </section>
                </section>

                <section>
                  <GAlign alignV="center" align="between" className="mb20">
                    <div>
                      <h3 className="fs18 lm mb0 ">Diana</h3>
                      <div className="sm_star"><span>{Svg.star}{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></div>
                    </div>
                    <UncontrolledDropdown>
                      <DropdownToggle>
                        <span>{Svg.Vellipsis}</span>
                      </DropdownToggle>
                      <DropdownMenu className="radius4 shadow noBorder">
                        <DropdownItem>
                          <ul className="noBg noUl mb0">
                            <li className="pt7 pb7">
                              <span className="fs14 d-block w-100 colorBlack">
                                {t("Report")}
                              </span>
                            </li>
                          </ul>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </GAlign>
                  <Row className="mb20">
                    <Col lg={3}>
                      <div className="bRight">
                        <h3 className="fs14 mb5 colorGrey">{t("Ambience")}</h3>
                        <h3 className="fs15 mb0 sm_star">5 <span className="ml5">{Svg.star}{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></h3>
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="bRight">
                        <h3 className="fs14 mb5 colorGrey">{t("Staff")}</h3>
                        <h3 className="fs15 mb0 sm_star">5 <span className="ml5">{Svg.star}{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></h3>
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="bRight">
                        <h3 className="fs14 mb5 colorGrey">{t("Cleanliness")}</h3>
                        <h3 className="fs15 mb0 sm_star">5 <span className="ml5">{Svg.star}{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></h3>
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div>
                        <h3 className="fs14 mb5 colorGrey">{t("Service")}</h3>
                        <h3 className="fs15 mb0 sm_star">5 <span className="ml5">{Svg.star}{Svg.star}{Svg.star}{Svg.star}{Svg.star}</span></h3>
                      </div>
                    </Col>
                  </Row>
                  <p className="fs14 mb15">
                    I had my balayage done by Silvana,she listen to what I
                    wanted done and did an amazing job ,definitely would
                    recommend this place.
                  </p>
                  <div className="d-flex align-items-center mb15">
                    <h3 className="fs14 colorGrey mb0 mr15">14.02.2022</h3>
                    <h3 className="fs14 colorGrey mb0 mr15">Empoyee ·</h3>
                    <GButton
                      backgroundColor="#fff"
                      color="#000"
                      border="1px solid #E2E3E9"
                      borderRadius="20px"
                      pt="2px"
                      pb="2px"
                      pl="10px"
                      pr="10px"
                    >
                      Silvana
                    </GButton>
                  </div>
                  <GAlign align="right">
                    <GButton  backgroundColor="#fff"  color="#FF385C">{t("Respond")}</GButton>
                  </GAlign>
                </section>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CustomerReviews;
