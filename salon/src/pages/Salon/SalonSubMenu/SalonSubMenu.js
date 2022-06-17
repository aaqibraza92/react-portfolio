import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Svg from "../../../assets/svg/Svg";
import { useTranslation } from "react-i18next";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import DatePicker from "react-datepicker";
import GAlign from "../../../components/Layout/GAlign";

const SalonSubMenu = (props) => {
  console.log("Calendar----->>>>>>>", props);
  const { dashboard } = props;
  const { calendar } = props;
  const { services } = props;
  const { team } = props;
  const { marketing } = props;
  const { settings } = props;

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [fromDate, setFromDate] = useState("");

  return (
    <>
      <style jsx="true">{`
        .width25px {
          width: 25px;
        }
      `}</style>
      <section className="bgLightOrange heightVh100" style={{ width: "279px" }}>
        {/* Calendar  */}
        {calendar && calendar === "calendar" && (
          // alert("adasda")
          <div>
            <UncontrolledDropdown>
              <DropdownToggle>
                <GButton>
                  <span>{Svg.whiteplus}</span>
                  {t("Add")}
                </GButton>
              </DropdownToggle>
              <DropdownMenu className="radius4 shadow noBorder">
                <DropdownItem>
                  <ul className="noBg noUl mb0 pt8 pb8">
                    <li className="mb5">
                      <Link to="#" className="colorBlack">
                        <span className="mr8">{Svg.date}</span>
                        {t("Appointment")}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="colorBlack">
                        <span className="mr8">{Svg.block}</span>
                        {t("Block")}
                      </Link>
                    </li>
                  </ul>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <DatePicker
              showYearDropdown
              className="date_picker"
              selected={fromDate}
              name="fromDate"
              onChange={(e) => setFromDate(e)}
              dateFormat="yyyy-M-dd"
              locale="es"
              placeholderText="From Date"
            />
          </div>
        )}

        {/* Dashboard  */}
        {dashboard && dashboard === "dashboard" && (
          <div>
            <div className="pl15 pr15 pt10 pb10 bBottom mb10">
              <NavLink to="/salon/dashboard/statistic">
                <GAlign>
                  <div className="width25px">{Svg.statistics}</div>
                  <span className="fs14 ml10 colorGrey">{t("Statistics")}</span>
                </GAlign>
              </NavLink>
            </div>
            <div className="pl15 pr15">
              <NavLink to="/salon/customer-reviews">
                <GAlign>
                  <div className="width25px">{Svg.greystar}</div>
                  <span className="fs14 ml10 colorGrey">
                    {t("Customerreviews")}
                  </span>
                </GAlign>
              </NavLink>
            </div>
          </div>
        )}

        {/* Menu Services  */}
        {services && services === "services" && (
          <div>
            <div className="pl15 pr15 pt10 pb10 bBottom mb10">
              <NavLink to="/salon/services">
                <GAlign>
                  <div className="width25px">{Svg.services}</div>
                  <span className="fs14 ml10 colorGrey">{t("Services")}</span>
                </GAlign>
              </NavLink>
            </div>
            <div className="pl15 pr15 pt10 pb10 bBottom mb10">
              <NavLink to="/salon/discounts">
                <GAlign>
                  <div className="width25px">{Svg.discounts}</div>
                  <span className="fs14 ml10 colorGrey">{t("Discount")}</span>
                </GAlign>
              </NavLink>
            </div>
            <div className="pl15 pr15">
              <NavLink to="/salon/vouchers">
                <GAlign>
                  <div className="width25px">{Svg.voucher}</div>
                  <span className="fs14 ml10 colorGrey">{t("Vouchers")}</span>
                </GAlign>
              </NavLink>
            </div>
          </div>
        )}

        {/* Team Members  */}
        {team && team === "team" && (
          <div>
            <div className="pl15 pr15 pt10 pb10 bBottom mb10">
              <NavLink to="/salon/team/employees">
                <GAlign>
                  <div className="width25px">{Svg.redclock}</div>
                  <span className="fs14 ml10 colorGrey">{t("Rota")}</span>
                </GAlign>
              </NavLink>
            </div>
            <div className="pl15 pr15">
              <NavLink to="/salon/team/rota">
                <GAlign>
                  <div className="width25px">{Svg.greyteam}</div>
                  <span className="fs14 ml10 colorGrey">
                    {t("Teammembers")}
                  </span>
                </GAlign>
              </NavLink>
            </div>
          </div>
        )}

        {/* Marketing */}
        {marketing && marketing === "marketing" && (
          <div>
            <div className="pl15 pr15 pt10 pb10 bBottom mb10">
              <NavLink to="/salon/automated/marketing-message">
                <GAlign>
                  <div className="width25px">{Svg.message}</div>
                  <span className="fs14 ml10 colorGrey">{t("Automated")}</span>
                </GAlign>
              </NavLink>
            </div>
            <div className="pl15 pr15 pt10 pb10 bBottom mb10">
              <NavLink to="/salon/marketing/social-media">
                <GAlign>
                  <div className="width25px">{Svg.facebookgrey}</div>
                  <span className="fs14 ml10 colorGrey">{t("Facebook")}</span>
                </GAlign>
              </NavLink>
            </div>
            <div className="pl15 pr15">
              <NavLink to="/salon/marketing/partner-site">
                <GAlign>
                  <div className="width25px">{Svg.partner}</div>
                  <span className="fs14 ml10 colorGrey">
                    {t("Partnersite")}
                  </span>
                </GAlign>
              </NavLink>
            </div>
          </div>
        )}

        {/* Settings */}
        {settings && settings === "settings" && (
          <div>
            <div className="pl15 pr15 pt10 pb10 bBottom mb10">
              <NavLink to="/salon/setting/venue-about-company">
                <GAlign>
                  <div className="width25px">{Svg.homeredbg}</div>
                  <span className="fs14 ml10 colorGrey">{t("Venue")}</span>
                </GAlign>
              </NavLink>
            </div>
            <div className="pl15 pr15 pt10 pb10 bBottom mb10">
              <NavLink to="/salon/setting/invoice">
                <GAlign>
                  <div className="width25px">{Svg.finance}</div>
                  <span className="fs14 ml10 colorGrey">{t("Finance")}</span>
                </GAlign>
              </NavLink>
            </div>
            <div className="pl15 pr15 pt10 pb10 bBottom mb10">
              <NavLink to="/salon/setting/customer-notification">
                <GAlign>
                  <div className="width25px">{Svg.finance}</div>
                  <span className="fs14 ml10 colorGrey">
                    {t("Notifications")}
                  </span>
                </GAlign>
              </NavLink>
            </div>
            <div className="pl15 pr15 pt10 pb10 bBottom mb10">
              <NavLink to="/salon/setting/booking-widget">
                <GAlign>
                  <div className="width25px">{Svg.booking}</div>
                  <span className="fs14 ml10 colorGrey">
                    {t("Bookingsetting")}
                  </span>
                </GAlign>
              </NavLink>
            </div>
            <div className="pl15 pr15">
              <NavLink to="/salon/setting/membership">
                <GAlign>
                  <div className="width25px">{Svg.membershipplan}</div>
                  <span className="fs14 ml10 colorGrey">
                    {t("AdminMembershipplan")}
                  </span>
                </GAlign>
              </NavLink>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SalonSubMenu;
