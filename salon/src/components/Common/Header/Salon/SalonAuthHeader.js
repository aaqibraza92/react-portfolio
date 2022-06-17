import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Img from "../../../../assets/Img/Img";
import Svg from "../../../../assets/svg/Svg";
import GAlign from "../../../Layout/GAlign";
import GIconInput from "../../../Layout/GIconInput";
import { useTranslation } from "react-i18next";
import { HOME_URL } from "../../../../helpers/apiurls";

const SalonAuthHeader = (props) => {
  const { data } = props;
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <GAlign align="between" alignV="center" className="border-bottom">
        <GIconInput
          type="text"
          placeholder="Search..."
          iconLeft={Svg.search}
          paddingBottom="0px"
          border="0px"
          borderStyle="none"
          borderColor="#fff"
          shadow="none"
        />
        <div>
          <GAlign align="between" alignV="center">
            <span>{Svg.notification}</span>
            <UncontrolledDropdown className="noBgonDropDown ml20 mr35">
              <DropdownToggle>
                <div className="d-flex align-items-center">
                  {/* <div className="header_profile_img mr10">
                    {
                      <img
                        className="radius100 w24"
                        alt=""
                        src={
                          data.profileImage === ""
                            ? Img.salon
                            : HOME_URL + data.profileImage
                        }
                      />
                    }

                  </div> */}
                  <div className="colorBlack fw500 fs15">
                    <span className="fs14 colorGrey text-capitalize">
                      {data && data.firstName + " " + data.lastName}
                    </span>
                    <span className="ml8">{Svg.downArrowSmall}</span>
                  </div>
                </div>
              </DropdownToggle>
              <DropdownMenu className="radius4 shadow noBorder ">
                <DropdownItem>
                  <ul className="noBg noUl mb0 pt10 pb10">
                    <li className="mb10">
                      <span>{Svg.greyweb}</span>
                      <Link to="#" className="fs14 ml10 colorBlack">
                        {t("English")}
                      </Link>
                    </li>
                    <li className="mb10">
                      <span>{Svg.ibuttongrey}</span>
                      <Link to="#" className="fs14 ml10 colorBlack">
                        {t("Help")}
                      </Link>
                    </li>
                    <li>
                      <span>{Svg.logout}</span>
                      <Link to="/logout" className="fs14 ml10 colorBlack">
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

export default SalonAuthHeader;
