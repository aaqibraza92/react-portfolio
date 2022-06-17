import React, { useEffect, useState } from "react";
import GAlign from "../../../components/Layout/GAlign";
import { useTranslation } from "react-i18next";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import "./Team.css";
import GButton from "../../../components/Layout/GButton";
import Basicinformation from "./Basicinformation";
import PricingService from "./PricingService";
import Publicprofile from "./Publicprofile";
import PortfolioTeam from "./PortfolioTeam";
import { setNewPasswordInstructrction, updateTeamEmployee } from "../../../helpers/backend/salon";
import { notify } from "react-notify-toast";

const SalonEmployeesModals = (props) => {
  const [team, setteam] = useState(1);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  let getTabsEnable = localStorage.getItem("tabsEnable");
  const getCallbackTabs = (val) => {
    sethideOtherTab(val);
  };
  const [hideOtherTab, sethideOtherTab] = useState(props.hideOtherTab);

  const setpasswordHandle = () => {
    const iData = {
      email: localStorage.getItem("employemail"),
    };
    setNewPasswordInstructrction(iData).then((res) => {
      if (res && res.status === 200) {
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(res.message, "custom", 5000, myColor);
      }
    });
  };

  const deleteTeam=()=>{
    const iData={
      employeeid: localStorage.getItem("employeeid"),
      active: false
    }
    updateTeamEmployee(iData).then((res)=>{
      if(res && res.status && res.status===200){
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(res.message, "custom", 5000, myColor);
      }
    })
  }

  return (
    <>
      <section>
        <GAlign
          align="between"
          alignV="center"
          className="pt15 pb15 pl15 pr15 bBottom"
        >
          {console.log("hideOtherTab", hideOtherTab)}
          <h3 className="fs14 lb mb0">{t("Teammemberdetail")}</h3>
          <UncontrolledDropdown className="noBgonDropDown">
            <DropdownToggle>
              <span className="fm12 colorBlack">{Svg.ellipsiswhitebg}</span>
            </DropdownToggle>
            <DropdownMenu className="radius4 shadow noBorder">
              <DropdownItem>
                <ul className="noBg noUl mb0 pt5 pb5">
                  <li className="fs14 mb10" onClick={deleteTeam}> {t("Delete")}</li>
                  <li className="fs14" onClick={setpasswordHandle}>
                    {t("PasswordInst")}
                  </li>
                </ul>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </GAlign>
        <ul className="noUl pl15 d-flex bgLightBlue">
          <li
            className={`${
              team === 1 ? "bBottomRed" : ""
            } pt10 pb10 pr10 bRight pointer`}
            onClick={() => setteam(1)}
          >
            {t("Basicinformation")}
          </li>
          <li
            className={`${
              team === 2 ? "bBottomRed" : ""
            } pt10 pb10 pr10 pl10 bRight pointer ${
              hideOtherTab && hideOtherTab && "pointerEventNone"
            }`}
            onClick={() => setteam(2)}
          >
            {t("Pricingservice")}
          </li>
          <li
            className={`${
              team === 3 ? "bBottomRed" : ""
            } pt10 pb10 pr10 pl10 bRight pointer ${
              hideOtherTab && hideOtherTab && "pointerEventNone"
            }`}
            onClick={() => setteam(3)}
          >
            {t("Publicprofile")}
          </li>
          <li
            className={`${
              team === 4 ? "bBottomRed" : ""
            } pt10 pb10 pr10 pl10 bRight pointer ${
              hideOtherTab && hideOtherTab && "pointerEventNone"
            }`}
            onClick={() => setteam(4)}
          >
            {t("Onlyportfolio")}
          </li>
        </ul>

        {team === 1 && (
          <Basicinformation
            fromAddNew={props.addNewteam && props.addNewteam}
            register={props.hideOtherTab && props.hideOtherTab}
            callbackTabs={getCallbackTabs}
          />
        )}
        {team === 2 && <PricingService />}
        {team === 3 && <Publicprofile data={props.data} />}
        {team === 4 && <PortfolioTeam />}
      </section>
    </>
  );
};

export default SalonEmployeesModals;

// Passwordresetinstructions Modal
const Passwordresetinstructions = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt20 pb20 pl20 pr20">
        <h3 className="fs14 mb20">{t("Passwordreset")}</h3>
        <GAlign align="center">
          <GButton>{t("Shutdown")}</GButton>
        </GAlign>
      </section>
    </>
  );
};
