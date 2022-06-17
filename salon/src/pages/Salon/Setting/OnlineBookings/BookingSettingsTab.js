import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BookingSettingsTab = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  
  return (
    <>
      <section className="bg_services_tab services_bottom_border">
        <div className="services_tab">
          <ul className="mb-0">
            <li>
              <NavLink to="/salon/setting/booking-widget">
                {t("Bookingwidget")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/salon/setting/booking">
                {t("Settings")}
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default BookingSettingsTab;
