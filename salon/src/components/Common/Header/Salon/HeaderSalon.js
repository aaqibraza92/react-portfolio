import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../../assets/Img/Img";
import GButton from "../../../Layout/GButton";
import GImage from "../../../Layout/GImage/GImage";
import { useTranslation } from "react-i18next";
import GLink from "../../../Layout/GLink";

const HeaderSalon = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <section className="pt-3 pb-3 bg_theme border-bottom">
      <Container>
        <Row className="align-items-center mobile_view_order">
        <Col md={3} xl={3} lg={3} xs={5} className="o1">
            <Link to="/">
              <GImage src={Img.logo.default} alt="logo" />
            </Link>
          </Col>
          <Col md={6} xl={6} lg={6} xs={12} className="o2 mobMt15">
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
          <Col className="text-end o3" md={3} xl={3} lg={3} xs={7}>

            <GLink
                to="/salon/login"
                text={t("Loginconnect")}
                className="buttonType"
              ></GLink>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeaderSalon;
