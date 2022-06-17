import React from "react";
import { NavLink } from "react-router-dom";
import "./VenueDetails.css";
import { useTranslation } from "react-i18next";


const SalonProfileNavigation = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="bgWhite">
        <ul className="d-flex noUl fs14 navigation_list mb0">
          <li>
            <NavLink to="/salon/setting/about-company">
              <span>{t("About")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/salon/setting/opening-hours">
              <span>{t("Hours")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/salon/setting/services">
              <span>{t("Services")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/salon/setting/resources">
              <span>{t("Resources")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/salon/setting/portfolio-images">
              <span>{t("Portfolio")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/salon/setting/amenities">
              <span>{t("Amenities")}</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SalonProfileNavigation;
