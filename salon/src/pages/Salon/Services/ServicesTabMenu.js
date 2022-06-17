import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Services.css";
import { useTranslation } from "react-i18next";

const ServicesTabMenu = () => {
   const { t, i18n } = useTranslation();
   document.body.dir = i18n.dir();
  return (
    <>
      <section className="bg_services_tab services_bottom_border">
        <div className="services_tab">
          <ul className="mb-0">
            <li>
              <NavLink to="#">{t("TabAllservices")}</NavLink>
            </li>
            <li>
              <NavLink to="#">{t("TabBarber")}</NavLink>
            </li>
            <li>
              <NavLink to="#">{t("TabFace")}</NavLink>
            </li>
            <li>
              <NavLink to="#">{t("TabHairremoval")}</NavLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ServicesTabMenu;
