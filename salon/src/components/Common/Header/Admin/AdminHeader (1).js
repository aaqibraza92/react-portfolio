import React from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Img from "../../../../assets/Img/Img";
import Svg from "../../../../assets/svg/Svg";
import GAlign from "../../../Layout/GAlign";
import { useTranslation } from "react-i18next";

const AdminHeader = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();


  // ============================================ LOG OUT==================================

const logout = async (e) => {
  Cookies.remove('loginSuccess')

  
  setTimeout(() => {
      window.location.href = `/admin/login`
  });
}
  

  
  return (
    <>
      <GAlign align="between" alignV="center" className="pt10 pb10">
        <div>
          {/* <span className="mr20">{Svg.backarrow}</span> */}
          {/* <span className="mb0 fs18 lm">Salon Request</span> */}
        </div>
        <div>
          <GAlign align="between" alignV="center">
            <span>{Svg.notification}</span>
            <UncontrolledDropdown className="noBgonDropDown ml20">
              <DropdownToggle>
                <div className="d-flex align-items-center">
                  <div className="header_profile_img mr10">
                    <img className="radius100 w24" alt="" src={Img.salon} />
                  </div>
                  <div className="colorBlack fw500 fs15">
                    <span className="fs14 colorGrey">Rachel Foster</span>
                    <span className="ml8">{Svg.downArrowSmall}</span>
                  </div>
                </div>
              </DropdownToggle>
              <DropdownMenu className="radius4 shadow noBorder ">
                <DropdownItem>
                  <ul className="noBg noUl mb0 pt10 pb10">
                    <li className="mb10">
                      <span>{Svg.greyweb}</span>
                      <Link to="#" className="fs14 ml10 colorPara">
                        {t("English")}
                      </Link>
                    </li>
                    <li className="mb10">
                      <span>{Svg.ibuttongrey}</span>
                      <Link to="#" className="fs14 ml10 colorPara">
                        {t("Help")}
                      </Link>
                    </li>
                    <li>
                      <span>{Svg.logout}</span>
                      <Link to="/admin/login" onClick={(e) => logout(e)}  className="fs14 ml10 colorPara" >
                        {t("Logout")}
                      </Link>
                    </li>
                  </ul>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </GAlign>
        </div>
      </GAlign>
    </>
  );
};

export default AdminHeader;
