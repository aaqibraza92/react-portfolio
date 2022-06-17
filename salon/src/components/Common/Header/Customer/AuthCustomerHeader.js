
import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import Img from "../../../../assets/Img/Img";
import Svg from "../../../../assets/svg/Svg";
import GAlign from "../../../Layout/GAlign";
import GImage from "../../../Layout/GImage/GImage";
import "../Header.css";
import { useTranslation } from "react-i18next";
import AdvancedSearch from "../../../AdvancedSearch/AdvancedSearch";
import ModalTop from "../../../ModalTop/ModalTop";
import HeaderNavigation from "./HeaderNavigation";

const AuthCustomerHeader = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <>
      <section className="pt15 pb15">
        <Container>
          <Row className="align-items-center">
            <Col md={3} lg={3} xl={3} className="mobile-center mobMb10">
              <Link to="/">
                <GImage src={Img.logo.default} alt="logo" />
              </Link>
            </Col>
            <Col md={3} lg={4} xl={6}>
              <div
                className="pt8 pb8 pl20 pr8 bshadow bradius30 wc-75 m-auto"
                onClick={() =>
                  ModalTop.show(<HeaderModal />, "", () => {}, "lg")
                }
              >
                <GAlign alignV="center" align="between">
                  <h3 className="fs14 mb0 colorGrey">
                    Hairdressers & Hair S...
                  </h3>
                  <span>{Svg.horizontalline}</span>
                  <h3 className="fs14 mb0 colorGrey">
                    In London · 01/03 · 10:00 - 12:00
                  </h3>
                  <span>{Svg.serachbgred}</span>
                </GAlign>
              </div>
            </Col>

            <Col md={6} lg={5} xl={3}>
              <div>
                <GAlign
                  align="right"
                  alignV="center"
                  className="text-uppercase mobile-end-none"
                >
                  <Link to="/for-your-business" className="fs14 colorGrey mr10">
                    {t("Forbusiness")}
                  </Link>
                  <Link className="mr10" to="#">
                    {Svg.notification}
                  </Link>
                  {/* {/ When the notification is active show this svg  /} */}
                  {/* {/ <Link to="#">{Svg.activenotification}</Link> /} */}
                  <UncontrolledDropdown className="noBgonDropDown">
                    <DropdownToggle>
                      <span>{Svg.customerdropdown}</span>
                    </DropdownToggle>
                    <DropdownMenu className="radius4 shadow noBorder">
                      <DropdownItem>
                        <ul className="noBg noUl mb0 pt10 pb10 ">
                          <li className="mb10">
                            <Link to="#" className="fs14 colorBlack ">
                              {t("Profile")}
                            </Link>
                          </li>
                          <li className="mb10">
                            <Link to="#" className="fs14 colorBlack">
                              {t("Mywallet")}
                            </Link>
                          </li>
                          <li className="mb10 bBottom pb10">
                            <Link to="#" className="fs14 colorBlack">
                              {t("Mybookings")}
                            </Link>
                          </li>
                          <li className="mb10">
                            <Link to="#" className="fs14 colorBlack">
                              {t("Help")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/logout" className="fs14 colorBlack">
                              {t("Logout")}
                            </Link>
                          </li>
                        </ul>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </GAlign>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AuthCustomerHeader;

const HeaderModal = () => {
  return (
    <>
      <AuthCustomerHeader />
      <section className="position-relative bg-white">
        <Container>
          <Row>
            <Col md={12} xl={8} className="m-auto pb20 pt20 ">
              <div className="border radius">
                <AdvancedSearch />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
