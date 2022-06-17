import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Img from "../../../../assets/Img/Img";
import Svg from "../../../../assets/svg/Svg";
import GAlign from "../../../Layout/GAlign";
import GImage from "../../../Layout/GImage/GImage";
import "../Header.css";
import { useTranslation } from "react-i18next";

const CustomerProfileHeader = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt-3 pb-3 bgDarkBlue borBottomGrey ">
        <Container>
          <Row className="align-items-center">
            <Col md="4" className="mobile-center">
              <Link to="/">
                <GImage src={Img.whitelogo} alt="logo" />
              </Link>
            </Col>
            <Col md="8" className="text-end mobMt15">
              <GAlign alignV="center" align="right" className="mobile-end-none">
                <Link to="#" className="fs14 colorWhite mr20 text-uppercase">
                  {t("Forbusiness")}
                </Link>
                <Link to="#" className="mr20">
                  {Svg.activenotification}
                </Link>
                <UncontrolledDropdown className="noBgonDropDown">
                  <DropdownToggle>
                    <span>{Svg.customerdropdown}</span>
                  </DropdownToggle>
                  <DropdownMenu className="radius4 shadow noBorder">
                    <DropdownItem>
                      <ul className="noBg noUl mb0 pt10 pb10 ">
                        <li className="mb10">
                          <Link to="#" className="fs14 colorGrey ">
                            {t("Profile")}
                          </Link>
                        </li>
                        <li className="mb10">
                          <Link to="#" className="fs14 colorGrey">
                            {t("Mywallet")}
                          </Link>
                        </li>
                        <li className="mb10 bBottom pb10">
                          <Link to="#" className="fs14 colorGrey">
                            {t("Mybookings")}
                          </Link>
                        </li>
                        <li className="mb10">
                          <Link to="#" className="fs14 colorGrey">
                            {t("Help")}
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="fs14 colorGrey">
                            {t("Logout")}
                          </Link>
                        </li>
                      </ul>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </GAlign>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CustomerProfileHeader;
