import React, { useEffect, useState } from "react"
import GAlign from "../../../components/Layout/GAlign";
import { useTranslation } from "react-i18next";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import Description from "./Description";
import Fineprint from "./Fineprint";
import ServicesAndPricing from "./ServicesAndPricing";
import Distribution from "./Distribution";
import {getServicesInfo} from '../../../store/salon/serviceinfo/action'
import { useDispatch, useSelector } from "react-redux";
const ServicesModal = (props) => {
  const [team, setteam] = useState("services");
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch();
  const { serviceid } = props ;
  const service = useSelector((state) => {
    return state.serviceinfo;
  });
  useEffect(() => {
    dispatch(getServicesInfo({serviceid : serviceid}))
  }, [dispatch])
  const [servicesInfo, setServicesInfo] = useState([]);
  const [servicesDescriptionInfo, setServicesDescriptionInfo] = useState({});
  const [servicesFineprintInfo, setServicesFineprintInfo] = useState({});
  const [servicesDistributionInfo, setServicesDistributionInfo] = useState({});
  useEffect(() => {
    setServicesInfo(service)
    setServicesDescriptionInfo({ salonserviceid : service.serviceid , description : service.description })
    setServicesFineprintInfo({ serviceid : service.serviceid , goodToKnow : service.goodToKnow, restriction : service.restriction })
    let { serviceAvailbility } = service;
    setServicesDistributionInfo({ 
      serviceid : service.serviceid , 
      isFeatured : service.isFeatured,
      sellServiceOnline : service.sellServiceOnline,
      appointmentleadTime : service.appointmentleadTime, 
      monday : serviceAvailbility && serviceAvailbility.monday ? serviceAvailbility.monday :false, 
      tuesday : serviceAvailbility && serviceAvailbility.tuesday ? serviceAvailbility.tuesday :false, 
      wednesday : serviceAvailbility && serviceAvailbility.wednesday ? serviceAvailbility.wednesday :false, 
      thursday : serviceAvailbility && serviceAvailbility.thursday ? serviceAvailbility.thursday :false, 
      friday : serviceAvailbility && serviceAvailbility.friday ? serviceAvailbility.friday :false, 
      saturday : serviceAvailbility && serviceAvailbility.saturday ? serviceAvailbility.saturday :false, 
      sunday : serviceAvailbility && serviceAvailbility.sunday ? serviceAvailbility.sunday :false, 
     })
  },[service])

  return (
    <>
      <GAlign
        align="between"
        alignV="center"
        className="pt15 pb15 pl15 pr15 bBottom"
      >
        <h3 className="fs14 lb mb0 text-uppercase">{t("Teammemberdetail")}</h3>
        <UncontrolledDropdown className="noBgonDropDown">
          <DropdownToggle>
            <span className="fm12 colorBlack">{Svg.ellipsiswhitebg}</span>
          </DropdownToggle>
          <DropdownMenu className="radius4 shadow noBorder">
            <DropdownItem>
              <ul className="noBg noUl mb0 pt10 pb10">
                <li className="fs14"> {t("Archive")}</li>
              </ul>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </GAlign>

      <ul className="noUl pl15 d-flex bgLightBlue mb0">
        <li
          className={`${
            team === "services" ? "bBottomRed" : ""
          } pt15 pb15 pr15 pl15 bRight pointer`}
          onClick={() => setteam("services")}
        >
          {t("Servicespricing")}
        </li>
        <li
          className={`${
            team === "description" ? "bBottomRed" : ""
          } pt15 pb15 pr15 pl15 bRight pointer`}
          onClick={() => setteam("description")}
        >
          {t("Description")}
        </li>
        <li
          className={`${
            team === "fineprint" ? "bBottomRed" : ""
          } pt15 pb15 pr15 pl15 bRight pointer`}
          onClick={() => setteam("fineprint")}
        >
          {t("Fineprint")}
        </li>
        <li
          className={`${
            team === "distribution" ? "bBottomRed" : ""
          } pt15 pb15 pr15 pl15 bRight pointer`}
          onClick={() => setteam("distribution")}
        >
          {t("Distribution")}
        </li>
      </ul>
      {team === "services" && <ServicesAndPricing key='serviceprice' services={servicesInfo}/>}
      {team === "description" && <Description key='servicedescription' services={servicesDescriptionInfo} />}
      {team === "fineprint" && <Fineprint key='servicefineprint' services={servicesFineprintInfo}/>}
      {team === "distribution" && <Distribution key='servicedistribution' services={servicesDistributionInfo}/>}
    </>
  );
};

export default ServicesModal;
