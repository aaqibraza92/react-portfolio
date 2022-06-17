import React, { useEffect } from "react";
import {
  Col,
  Container,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import GAlign from "../../Layout/GAlign";
import { Link } from "react-router-dom";
import Svg from "../../../assets/svg/Svg";
const HamburgerAuthMenu = () => {
  return (
    <>
      <UncontrolledDropdown className="noBgonDropDown">
        <DropdownToggle>
          <span>{Svg.customerdropdown}</span>
        </DropdownToggle>
        <DropdownMenu className="radius4 shadow noBorder">
          <DropdownItem>
            <ul className="noBg noUl mb0 pt10 pb10 ">
              <li className="mb10">
                <Link to="#" className="fs14 colorGrey ">
                  Profile
                </Link>
              </li>
              <li className="mb10">
                <Link to="#" className="fs14 colorGrey">
                  My Wallet
                </Link>
              </li>
              <li className="mb10 bBottom pb10">
                <Link to="#" className="fs14 colorGrey">
                  My Bookings
                </Link>
              </li>
              <li className="mb10">
                <Link to="#" className="fs14 colorGrey">
                  Help
                </Link>
              </li>
              <li>
                <Link to="#" className="fs14 colorGrey">
                  Logout
                </Link>
              </li>
            </ul>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default HamburgerAuthMenu;
