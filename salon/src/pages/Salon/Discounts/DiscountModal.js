import React, { useState } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import DiscountsServices from "./DiscountsServices";
import { useTranslation } from "react-i18next";
import GAlign from "../../../components/Layout/GAlign";
import Svg from "../../../assets/svg/Svg";
import AssignedService from "./AssignedService";
import { notify } from "react-notify-toast";
import {deleteSalonDiscount} from "../../../helpers/backend/salon"

const DiscountModal = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const { discountid } = props ;
  const [team, setteam] = useState(1);
  const [selectedDiscountID, setSelectedDiscountID] = useState(discountid);
  const createSuccessHandle = (status, createdid) =>
  {
    if(status)
    {
      setSelectedDiscountID(createdid)
    }
  }

  const onDeleteHandler = () => {
    deleteSalonDiscount({params: {
      discountid: selectedDiscountID
    } }).then((res) => {
      if (res.status === 200) {
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(res.message, "custom", 5000, myColor);
      }
      if (res.status === 201) {
        let myColor = { background: "#ff385c", text: "#FFFFFF" };
        notify.show("Please fill required fields", "custom", 5000, myColor);
      }
    });
  };
  return (
    <>
      <GAlign
        align="between"
        alignV="center"
        className="pt15 pb15 pl15 pr15 bBottom"
      >
        <h3 className="fs14 lb mb0 text-uppercase">{t("SalonAdddiscount")}</h3>
        <UncontrolledDropdown className="noBgonDropDown">
          <DropdownToggle>
            <span className="fm12 colorBlack">{Svg.ellipsiswhitebg}</span>
          </DropdownToggle>
          <DropdownMenu className="radius4 shadow noBorder">
            <DropdownItem>
              <ul className="noBg noUl mb0 pt10 pb10">
                <li className="fs14" onClick={onDeleteHandler}> {t("Delete")}</li>
              </ul>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </GAlign>

      <ul className="noUl pl15 d-flex bgLightBlue mb0">
        <li
          className={`${
            team === 1 ? "bBottomRed" : ""
          } pt15 pb15 pr15 pl15 bRight pointer`}
          onClick={() => setteam(1)}
        >
          {t("DiscountService")}
        </li>
        <li
          className={`${
            team === 2 ? "bBottomRed" : ""
          } pt15 pb15 pr15 pl15 bRight pointer`}
          onClick={() => setteam(2)}
        >
          {t("AssignedService")}
        </li>
      </ul>
      {team === 1 && <DiscountsServices key='creatediscount' discountid={selectedDiscountID} onSuccess={createSuccessHandle}/>}
      {team === 2 && <AssignedService key='discountservice' discountid={selectedDiscountID}  />}
    </>
  );
};

export default DiscountModal;
