import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import GAlign from "../../../../components/Layout/GAlign";
import GLink from "../../../../components/Layout/GLink";

const SaloonAuthFooter = () => {
  const [year, setyear] = useState(null);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setyear(currentYear);
  });
  return (
    <>
      <Row className="justify-content-center">
        <Col md={10} lg={8} xl={7} xxl={6}>
          <ul className="noUl mb0 salon-login-list position-relative">
            <GAlign align="between" mobWrap="wrap">
              <li>
                <GLink
                  to="#"
                  text={t("Aboutus")}
                  color="#fff"
                  hoverColor="#fff"
                  fs="15px"
                ></GLink>
              </li>
              <li className="salon-login-second-list-item">
                <GLink
                  to="#"
                  text={t("Contact")}
                  color="#fff"
                  hoverColor="#fff"
                  fs="15px"
                ></GLink>
              </li>
              <li className="salon-login-third-list-item">
                <GLink
                  to="#"
                  text={t("ServicesTerms")}
                  color="#fff"
                  hoverColor="#fff"
                  fs="15px"
                ></GLink>
              </li>
              <li className="fs14 colorWhite">
                {t("Session")} {year} {t("Year")}
              </li>
            </GAlign>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default SaloonAuthFooter;
