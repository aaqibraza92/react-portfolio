import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../../assets/Img/Img";
import GImage from "../../../Layout/GImage/GImage";
import "../Header.css";
import { useTranslation } from "react-i18next";
import GLink from "../../../Layout/GLink";

const CustomerHeader = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <section className="pt-3 pb-3 bg_theme border-bottom">
      <Container>
        <Row className="mobile_view_order align-items-center">
          <Col md={6} lg={3} xs={9} className="o1 z-5">
            <Link to="/">
              <GImage src={Img.logo.default} alt="logo" />
            </Link>
          </Col>
          <Col md={6} lg={5} sm={6} className="o2 mobMt15 dNoneXs dNoneMd">
            <nav role="navigation" className="primary-navigation text-center">
              <ul className="pl-0 mb-0">
                <li>
                  <Link to="#">{t("Solutions")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Features")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Pricing")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Contact")}</Link>
                </li>
              </ul>
            </nav>
          </Col>
          <Col className="text-end o3 dNoneXs dNoneMd" md={12} lg={4} sm={12}>
            <GLink
              to="/salon/login"
              text="Login Account"
              className="mr10 fs14 text-uppercase"
            ></GLink>
            <GLink
              to="/become-provider"
              text={t("TheSalonManagementButton")}
              className="buttonType"
            ></GLink>
          </Col>

          <Col md={6} xs={3} className=" dNoneXl dNoneLg position-relative">
            <input id="toggle" type="checkbox"></input>
            <label htmlFor="toggle" className="hamburger">
              <div className="top-bun"></div>
              <div className="meat"></div>
              <div className="bottom-bun"></div>
            </label>

            <div className="nav overlay--menu">
              <div className="nav-wrapper">
                <ul className="humber_menu">
                  <MenuHeader />
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomerHeader;

const MenuHeader = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <li>
        <NavLink to="#">{t("Solutions")}</NavLink>
      </li>
      <li>
        <NavLink to="#">{t("Features")}</NavLink>
      </li>
      <li>
        <NavLink to="#">{t("Pricing")}</NavLink>
      </li>
      <li>
        <NavLink to="#">{t("Contact")}</NavLink>
      </li>
      <li>
        <GLink
          to="/salon/login"
          text="Login Account"
          className="mr10 fs13 mb8 text-uppercase"
        ></GLink>
      </li>
      <li>
        <GLink
          to="/become-provider"
          text={t("TheSalonManagementButton")}
          className="buttonType"
        ></GLink>
      </li>
    </>
  );
};
