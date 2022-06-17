import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Img from "../../../assets/Img/Img";
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";
import GImage from "../../../components/Layout/GImage/GImage";
import "../Admin.css";
import { useTranslation } from "react-i18next";

const AdminSidebar = () => {
  const [membership, setmembership] = useState(false);
  const [salon, setsalon] = useState(false);
  const [management, setmanagement] = useState(false);
  const [categories, setcategories] = useState(false);
  const [booking, setbooking] = useState(false);
  const [review, setreview] = useState(false);
  const [accounting, setaccounting] = useState(false);
  const [content, setcontent] = useState(false);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div className="sidebar-container pt30 pb30 pl30 pr30">
      <div className="mb40 mobMb20">
        <GImage src={Img.whitelogo} />
      </div>
      <div className="mb15">
        <GAlign alignV="center">
          <span>{Svg.dashboard}</span>
          <span className="fs14 colorWhite ml10">Dashboard</span>
        </GAlign>
      </div>

      {/* Salon Management */}
      <div className="mb10 w-100">
        <h5 className="fs14 colorLightGrey mb10">{t("Salonmanagement")}</h5>
        <GAlign
          alignV="center"
          align="between"
          className="mb15 pointer"
          onClick={() => setsalon(!salon)}
        >
          <div>
            <span>{Svg.home}</span>
            <span className="fs14 colorWhite ml10">{t("Salon")}</span>
          </div>
          {salon ? (
            <span>{Svg.downarrow}</span>
          ) : (
            <span>{Svg.rightsidearrow}</span>
          )}
        </GAlign>
        {salon && (
          <div>
            <ul className="noUl dash_anker mb0">
              <li>
                <NavLink
                  to="/admin/salon-requested"
                  className="fs14 colorWhite"
                  activeclassname="active"
                >
                  {t("Salonrequests")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/salon-approved" className="fs14 colorWhite">
                  {t("Salonapproved")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin//salon-reviews" className="fs14 colorWhite">
                  {t("Salonreviews")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/salon-awards" className="fs14 colorWhite">
                  {t("Salonawards")}
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Salon Other Management */}
      <div className="mb10 w-100">
        <h5 className="fs14 colorLightGrey mb10">
          {t("Salonothermanagement")}
        </h5>
        <ul className="noUl dash_anker mb0">
          <li>
            <NavLink
              to="/admin/amenities"
              className="fs14 colorWhite dash_anker"
              activeclassname="active"
            >
              {t("Amenities")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/language-preference"
              className="fs14 colorWhite dash_anker"
              activeclassname="active"
            >
              {t("Languagepreference")}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* User Management */}
      <div className="mb10 w-100">
        <h5 className="fs14 colorLightGrey mb10">{t("Usermanagement")}</h5>
        <ul className="noUl dash_anker mb0">
          <li>
            <NavLink
              to="/admin/customers"
              className="fs14 colorWhite dash_anker"
              activeclassname="active"
            >
              {t("Customer")}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Categories Management */}
      {/* <div className="mb10 w-100">
        <h5 className="fs14 colorLightGrey mb10">Categories Management</h5>
        <GAlign
          alignV="center"
          align="between"
          className="mb15 pointer"
          onClick={() => setcategories(!categories)}
        >
          <div>
            <span>{Svg.dashboard}</span>
            <span className="fs14 colorWhite ml10">Categories</span>
          </div>
          {categories ? (
            <span>{Svg.downarrow}</span>
          ) : (
            <span>{Svg.rightsidearrow}</span>
          )}
        </GAlign>
        {categories && (
          <div>
            <ul className="noUl dash_anker mb0">
              <li>
                <NavLink
                  to="#"
                  className="fs14 colorWhite"
                  activeclassname="active"
                >
                  Groups
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="fs14 colorWhite">
                  Treatments
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div> */}

      {/* Booking Management */}
      <div className="mb10 w-100">
        <h5 className="fs14 colorLightGrey mb10">{t("Bookingmanagement")}</h5>
        <ul className="noUl dash_anker mb0">
          <li>
            <NavLink
              to="/admin/bookings"
              className="fs14 colorWhite"
              activeclassname="active"
            >
              {t("Bookings")}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Menu Management */}
      <div className="mb10 w-100">
        <h5 className="fs14 colorLightGrey mb10">{t("Menumanagement")}</h5>
        <GAlign
          alignV="center"
          align="between"
          className="mb15 pointer"
          onClick={() => setreview(!review)}
        >
          <div>
            <span>{Svg.menubar}</span>
            <span className="fs14 colorWhite ml10">{t("Menuservices")}</span>
          </div>
          {review ? (
            <span>{Svg.downarrow}</span>
          ) : (
            <span>{Svg.rightsidearrow}</span>
          )}
        </GAlign>
        {review && (
          <div>
            <ul className="noUl dash_anker mb0">
              <li>
                <NavLink
                  to="/admin/categories"
                  className="fs14 colorWhite"
                  activeclassname="active"
                >
                  {t("Categories")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/services"
                  className="fs14 colorWhite"
                  activeclassname="active"
                >
                  {t("Services")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/service-groups"
                  className="fs14 colorWhite"
                  activeclassname="active"
                >
                  {t("Servicesgroups")}
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* GIFT CARD Management */}
      <div className="mb10 w-100">
        <h5 className="fs14 colorLightGrey mb10">{t("GiftcardManagement")}</h5>
        <ul className="noUl dash_anker mb0">
          <li>
            <NavLink
              to="/admin/gift-cards"
              className="fs14 colorWhite"
              activeclassname="active"
            >
              {t("Giftcard")}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Awards Management */}
      <div className="mb10 w-100">
        <h5 className="fs14 colorLightGrey mb10">{t("Awardsmanagement")}</h5>
        <ul className="noUl dash_anker mb0">
          <li>
            <NavLink
              to="/admin/awards"
              className="fs14 colorWhite"
              activeclassname="active"
            >
              {t("Awards")}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Membership Management */}
      <div className="mb20 w-100">
        <h5 className="fs14 colorLightGrey mb10">
          {t("Membershipmanagement")}
        </h5>
        <GAlign
          alignV="center"
          align="between"
          className="mb15 pointer"
          onClick={() => setmembership(!membership)}
        >
          <div>
            <span>{Svg.membership}</span>
            <span className="fs14 colorWhite ml10">{t("Membershipplans")}</span>
          </div>
          {membership ? (
            <span>{Svg.downarrow}</span>
          ) : (
            <span>{Svg.rightsidearrow}</span>
          )}
        </GAlign>

        {membership && (
          <div className="transition">
            <ul className="noUl dash_anker ">
              <li>
                <NavLink
                  to="/admin/membership-plan"
                  className="fs14 colorWhite"
                  activeclassname="active"
                >
                  {t("Onlymembership")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/addon"
                  className="fs14 colorWhite"
                >
                  {t("Addon")}
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Accounting & Finance */}
      <div className="mb10 w-100">
        <h5 className="fs14 colorLightGrey mb10">{t("Accountingfinance")}</h5>
        <GAlign
          alignV="center"
          align="between"
          className="mb15 pointer"
          onClick={() => setaccounting(!accounting)}
        >
          <div>
            <span>{Svg.accounting}</span>
            <span className="fs14 colorWhite ml10">{t("Accounting")}</span>
          </div>
          {accounting ? (
            <span>{Svg.downarrow}</span>
          ) : (
            <span>{Svg.rightsidearrow}</span>
          )}
        </GAlign>
        {accounting && (
          <div>
            <ul className="noUl dash_anker mb0">
              <li>
                <NavLink
                  to="/admin/invoices"
                  className="fs14 colorWhite"
                  activeclassname="active"
                >
                  {t("Invoices")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/tax" className="fs14 colorWhite">
                  {t("Tax")}
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Location Management */}
      <div className="mb10 w-100">
        <h5 className="fs14 colorLightGrey mb10">{t("Locationmanagement")}</h5>
        <ul className="noUl dash_anker mb0">
          <li>
            <NavLink
              to="/admin/country"
              className="fs14 colorWhite"
              activeclassname="active"
            >
              {t("Country")}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* CONTENT Management */}
      <div className="mb10 w-100">
        <h5 className="fs14 colorLightGrey mb10">{t("Contentmanagement")}</h5>
        <ul className="noUl dash_anker mb0">
          <li>
            <NavLink
              to="/admin/cms"
              className="fs14 colorWhite"
              activeclassname="active"
            >
              CMS
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AdminSidebar;
