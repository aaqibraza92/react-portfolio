import React from "react";
import { Col, Container, Row } from "reactstrap";
import SalonProfileNavigation from "../SalonProfileNavigation/SalonProfileNavigation";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Svg from "../../../../assets/svg/Svg";
import GIconInput from "../../../../components/Layout/GIconInput";

const SalonServices = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <section className="pt40 pb40 bgLightBlue">
      <Container>
        <h2 className="fs24 mobFs18 lb mb20 mobMb10">
          <Link to="/salon/profile/opening-hours" className="mr15">
            {Svg.backarrow}
          </Link>
          {t("Setup")}
        </h2>
        <SalonProfileNavigation />
        <section className="bgWhite">
          <h4 className="fs14 lb mb20 mobMb10 pt20 pb30 pl30 pr30 bBottom ">
            {t("Addservice")}
          </h4>
          <section className="pl30 pr30">
            <Row>
              <Col md={4}>
                <GIconInput iconLeft={Svg.search} placeholder={t("Search")} />
              </Col>
              <Col md={8}></Col>
            </Row>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default SalonServices;
