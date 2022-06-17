import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./SalonProfileNavigation.css";
import { useTranslation } from "react-i18next";

const SalonProfileNavigation = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="bgWhite">
        <ul className="d-flex noUl fs14 navigation_list mb0">
          <li>
            <NavLink to="/salon/profile/about">
              <span>{t("About")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/salon/profile/opening-hours">
              <span>{t("Hours")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/salon/profile/services">
              <span>{t("Services")}</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="#">
              <span>{t("Resources")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <span>{t("Portfolio")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <span>{t("Amenities")}</span>
            </NavLink>
          </li> */}
        </ul>
      </section>
    </>
  );
};

export default SalonProfileNavigation;
