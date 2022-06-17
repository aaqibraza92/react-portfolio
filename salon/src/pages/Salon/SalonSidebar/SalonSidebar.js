import React, { useState } from "react";
import Img from "../../../assets/Img/Img";
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";
import GImage from "../../../components/Layout/GImage/GImage";
import { useTranslation } from "react-i18next";
import SalonSubMenu from "../SalonSubMenu/SalonSubMenu";
import { Link } from "react-router-dom";

const SalonSidebar = () => {
  const [selected, setselected] = useState();
  const [show, setshow] = useState(true);

  const [calendar, setcalendar] = useState("");
  const [dashboard, setdashboard] = useState("");
  const [services, setservices] = useState("");
  const [team, setteam] = useState("");
  const [marketing, setmarketing] = useState("");
  const [settings, setsettings] = useState("");

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const onshowHandler = () => {
    setshow(!show);
  };

  return (
    <>
      <style jsx="true">{`
        .salon_side {
          width: 350px;
          position: fixed;
          top: 0;
          bottom: 0;
          z-index: 1026;
        }
        // .salon_two {
        //   width: 100%;
        // }
        .salon_first {
          padding: 10px 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
      <section
        className={`${
          selected === 1 ? "" : ""
        }  bgBlack heightVh100 d-flex salon_side`}
      >
        <div className="salon_first">
          <div>
            <div
              className="mb50 pointer"
              onClick={() => {
                selected === 1 ? setselected(2) : setselected(1);
              }}
            >
              {Svg.hamburger}
            </div>
            {/* Calendar Section  */}
            <GAlign
              alignV="center"
              className="mb20 pointer"
              // onClick={() => {
              //   calendar === 10 ? setcalendar(11) : setcalendar(10);
              //   setshow(!show);
              // }}
            >
              <Link
                to="/salon/dashboard/calender"
                onClick={() => setcalendar("calendar")}
              >
                {Svg.whitecalendar}
              </Link>
              <span
                className={`${
                  selected === 1 ? "" : "dNoneXl"
                } ml10 fs14 colorWhite`}
              >
                {t("Calendar")}
              </span>
            </GAlign>

            {/* Dashboard section  */}
            <GAlign
              alignV="center"
              className="mb20 pointer"
              onClick={() => {
                // dashboard === 10 ? setdashboard(11) : setdashboard(10);
                // setshow(!show);
              }}
            >
              <Link
                to="/salon/dashboard/statistic"
                onClick={() => setdashboard("dashboard")}
              >
                {Svg.whitedashboard}
              </Link>
              <span
                className={`${
                  selected === 1 ? "" : "dNoneXl"
                } ml10 fs14 colorWhite`}
              >
                {t("Dashboard")}
              </span>
            </GAlign>
            {/* Services section  */}
            <GAlign
              alignV="center"
              className="mb20 pointer"
              // onClick={() => {
              //   // services === 10 ? setservices(11) : setservices(10);
              //   // setshow(!show);
              // }}
            >
              <Link
                to="/salon/services"
                onClick={() => setservices("services")}
              >
                {Svg.whitesciccor}
              </Link>
              <span
                className={`${
                  selected === 1 ? "" : "dNoneXl"
                } ml10 fs14 colorWhite`}
              >
                {t("Menuside")}
              </span>
            </GAlign>
            {/* Team section  */}
            <GAlign
              alignV="center"
              className="mb20 pointer"
              onClick={() => {
                // team === 10 ? setteam(11) : setteam(10);
                // setshow(!show);
              }}
            >
              <Link to="/salon/team/employees" onClick={() => setteam("team")}>
                {Svg.team}
              </Link>
              <span
                className={`${
                  selected === 1 ? "" : "dNoneXl"
                } ml10 fs14 colorWhite`}
              >
                {t("Team")}
              </span>
            </GAlign>
            {/* Products section  */}
            <GAlign alignV="center" className="mb20 pointer">
              <Link to="/salon/products">{Svg.products}</Link>
              <span
                className={`${
                  selected === 1 ? "" : "dNoneXl"
                } ml10 fs14 colorWhite`}
              >
                {t("Products")}
              </span>
            </GAlign>

            {/* Client  */}
            <GAlign alignV="center" className="mb20 pointer">
              <Link to="/salon/client-list">{Svg.clients}</Link>
              <span
                className={`${
                  selected === 1 ? "" : "dNoneXl"
                } ml10 fs14 colorWhite`}
              >
                {t("Clients")}
              </span>
            </GAlign>

            {/* Marketing Section  */}
            <GAlign
              alignV="center"
              className="mb20 pointer"
              onClick={() => {
                // marketing === 10 ? setmarketing(11) : setmarketing(10);
                // setshow(!show);
              }}
            >
              <Link
                to="/salon/automated/marketing-message"
                onClick={() => setmarketing("marketing")}
              >
                {Svg.marketing}
              </Link>
              <span
                className={`${
                  selected === 1 ? "" : "dNoneXl"
                } ml10 fs14 colorWhite`}
              >
                {t("Marketing")}
              </span>
            </GAlign>

            {/* Reports Section  */}
            <GAlign alignV="center" className="mb20 pointer">
              <Link to="/salon/reports">{Svg.whitebook}</Link>
              <span
                className={`${
                  selected === 1 ? "" : "dNoneXl"
                } ml10 fs14 colorWhite`}
              >
                {t("Reports")}
              </span>
            </GAlign>
            {/* Settings Section  */}
            <GAlign
              alignV="center"
              className="pointer"
              onClick={() => {
                // settings === 10 ? setsettings(11) : setsettings(10);
                // setshow(!show);
              }}
            >
              <Link to="/salon/setting/venue-about-company" onClick={() => setsettings("settings")}>{Svg.setting}</Link>
              <span
                className={`${
                  selected === 1 ? "" : "dNoneXl"
                } ml10 fs14 colorWhite`}
              >
                {t("Settings")}
              </span>
            </GAlign>
          </div>
          {/* Contact and faq below part  */}
          <div>
            <GImage
              src={Img.whitelogo}
              width="90%"
              alt="logo"
              marginBottom="20px"
              marginTop="150px"
              className={`${selected === 1 ? "" : "dNoneXl"} `}
            />
            <GAlign alignV="center" className="mb20 pointer">
              <span>{Svg.help}</span>
              <span
                className={`${
                  selected === 1 ? "" : "dNoneXl"
                } ml10 fs14 colorWhite`}
              >
                {t("Partner")}
              </span>
            </GAlign>
            <GAlign alignV="center" className="pointer">
              <span>{Svg.call}</span>
              <span
                className={`${
                  selected === 1 ? "" : "dNoneXl"
                } ml10 fs14 colorWhite`}
              >
                {t("Contactus")}
              </span>
            </GAlign>
          </div>
        </div>

        <div className="salon_two">
          {show ? (
            <SalonSubMenu
              data={show}
              dashboard={dashboard}
              calendar={calendar}
              services={services}
              team={team}
              marketing={marketing}
              settings={settings}
            />
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default SalonSidebar;
