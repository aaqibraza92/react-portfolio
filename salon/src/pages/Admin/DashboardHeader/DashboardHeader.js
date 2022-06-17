import React, { useState } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Img from "../../../assets/Img/Img";
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";
import Sidebar from "../Sidebar/Sidebar";

const DashboardHeader = () => {
  return (
    <div>
      <MobileMenu />
      <section className="header-wrapper">
        <GAlign className="p_30" align="between" alignV="center">
          <h1 className="fs20 mb-0 mobale_left_40">Salon Request</h1>
          <div className="d-flex align-items-center">
            <span>{Svg.notification}</span>
            <UncontrolledDropdown className="noBgonDropDown ml10">
              <DropdownToggle>
                <div className="d-flex align-items-center">
                  <div className="header_profile_img mr10">
                    <img className="radius100 w32" alt="" src={Img.fourth} />
                  </div>
                  <div className="fw500 fs14 text-capitalize colorLightGrey">
                    Rachel Foster
                    <span className="ml10">{Svg.downArrowSmall}</span>
                  </div>
                </div>
              </DropdownToggle>
              <DropdownMenu className="radius4 shadow noBorder">
                <DropdownItem>
                  <ul className="noBg noUl mb0 pt5 pb5">
                    <li className="mb0">
                      <span
                        to="#"
                        className="fs14 d-block w-100 colorLightGrey"
                      >
                        Rachel Foster
                      </span>
                    </li>
                  </ul>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </GAlign>
      </section>
    </div>
  );
};

export default DashboardHeader;

const MobileMenu = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="mobile_humber">
        <div className="sidem" onClick={() => setshow(!show)}>X</div>
        {show && <Sidebar />}
      </div>
    </>
  );
};
