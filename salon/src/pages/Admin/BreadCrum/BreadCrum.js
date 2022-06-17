import React from "react";
import Svg from "../../../assets/svg/Svg";
import { useTranslation } from "react-i18next";
import GLink from "../../../components/Layout/GAlign";
import {Link } from "react-router-dom"

const BreadCrum = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();


  return (

      <div className="d-flex align-items-center">
      <span>{Svg.web}</span>
      <span className="colorRed fs14 ml10 mr10">{t("Breadcrum")}</span>
      <span>{Svg.rightArrow}</span>

      {/* Salon Request  */}
      <GLink to="#" className="colorLightGrey fs14 ml10 mr10" name={t("Salonrequestlist")} >
        {t("Salonrequestlist")}
      </GLink>

      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Createsalonrequest")}
      </GLink>
      <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Editsalonrequest")}
      </GLink> */}

      {/* Salon Approved  */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Salonapprovedlist")}
      </GLink>
      <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Viewsalondetails")}
      </GLink> */}

      {/* Salon Reviews  */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Salonreviews")}
      </GLink> */}

      {/* Salon Awards List  */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Salonawardslist")}
      </GLink> */}

      {/* Customer  */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Customer")}
      </GLink>
      <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Customerdetail")}
      </GLink> */}

      {/* Bookings  */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Bookinglist")}
      </GLink> */}

      {/* Categories  */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Categories")}
      </GLink> */}

      {/* Services  */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Services")}
      </GLink> */}

      {/* Services Groups */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Servicegrouplist")}
      </GLink> */}

      {/* Gift Cards */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Giftcardslist")}
      </GLink> */}

      {/* Awards */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Awardslist")}
      </GLink> */}

      {/* Membership Plan */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Membershiplanlist")}
      </GLink> */}

      {/* Add-on */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Addonplanslist")}
      </GLink> */}

      {/*Invoices */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Invoices")}
      </GLink> */}

      {/*Cms */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Cms")}
      </GLink> */}

      {/*Country */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Country")}
      </GLink> */}

      {/* Amenities */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Amenitieslist")}
      </GLink> */}

      {/* Language preference list */}
      {/* <GLink to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Languagepreferencelist")}
      </GLink> */}
    </div>
  );
};

export default BreadCrum;
