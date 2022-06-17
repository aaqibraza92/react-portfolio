import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
// import GAutoComplete from "../Layout/GAutoComplete/GAutoComplete";
import Svg from "../../assets/svg/Svg";
import GIconInput from "../Layout/GIconInput";
// import GButton from "../Layout/GButton";
// import CmnRadioBorder from "../Layout/CmnRadioBorder/CmnRadioBorder";
import GRadio from "../Layout/GRadio";
import GButton from "../Layout/GButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TimePicker from "react-time-picker";
import { useTranslation } from "react-i18next";

import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  List,
  Row,
  Label,
} from "reactstrap";

const WrapperSearch = styledComponents.div`
-webkit-border-radius: 8px;
border-radius: 8px;
background: #fff;
padding: 10px;
`;

const TabTrigger = styledComponents.ul`
list-style: none;
display: flex;
padding-left: 0px;
margin-bottom: 0px;
`;

const TabContent = styledComponents.h6`
  color:#5B5D6B;

  .home_banner_b{
    border: none;
    box-shadow: none;
    padding-bottom: 0px;
    height: auto;
  }
  .home_banner_b:focus {
    background-color: #fff;
    border: none;
    box-shadow: none;
  }
  button.home_banner_v:focus {
    outline: none !important;
    box-shadow: none;
    background-color: transparent !important;
  }
  .custom_d .dropdown-menu {
    margin-top: 34px;
width: 326px;
border: none;
border-radius: 5px;
max-height: 305px;
overflow-y: scroll;
  }
  .color_d{
    color:#5B5D6B;
  }
  .custom_d ul li {
    padding: 7px 0px;
    border-bottom: 1px solid #EBEDF1;
    color: #5B5D6B;
  }
  .custom_d ul li:last-child {
    border: none;
  }
  .date_p label::before {
    display: none !important;
  }
  .date_p label {
    width:100%;
  }
  .date_p input:checked + label::after{
    display: none !important;
  }
  .date_p input:checked + label {
    border-color: #000;}
   label:hover {
      border-color: #000;
   }
   .cross {
    position: absolute;
    right: 0px;
    border-radius: 50%;
    top: 5px;
    cursor: pointer;
  }
        
`;

const AdvancedSearch = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [searchSelectedData, setSearchSelectedData] = useState(null);
  const [value, onChange] = useState("10:00");

  const [startDate, setStartDate] = useState(new Date());
  const onSearchChanged = (data) => {
    setSearchSelectedData(data);
  };

  const sendData = () => {};

  const [tab, settab] = useState("treatment");

  const [open, setopen] = useState(false);
  return (
    <WrapperSearch>
      <TabTrigger className="tab_menu position-relative">
        <li
          className={`pr20 pointer ${tab === "treatment" && "activeTab"}`}
          onClick={() => settab("treatment")}
        >
          {t("Treatment")}
        </li>
        <li
          className={`pr20 pointer ${tab === "salon" && "activeTab"}`}
          onClick={() => settab("salon")}
        >
          {t("Salon")}
        </li>
      </TabTrigger>

      <TabContent>
        {tab === "treatment" && (
          <div className="mt-3 container p-0">
            <div className="row">
              <div className="col-md-3 mobMb10">
                <div className="d-flex align-items-start">
                  <div>{Svg.search}</div>
                  <div>
                    <h6 className="mb-0 ml10">{t("Treatment")}</h6>

                    <UncontrolledDropdown className="noBgonDropDown custom_d">
                      <DropdownToggle className="p-0 border-0 home_banner_v">
                        <span>
                          {Svg.VerticalEllipsis}
                          <GIconInput
                            type="text"
                            name="firstname"
                            placeholder="Select Treatment"
                            className="home_banner_b"
                          />
                        </span>
                      </DropdownToggle>
                      <DropdownMenu className="radius4 shadow noBorder">
                        <DropdownItem>
                          <div className="pt-2 pb-2">
                            <div>
                              <h6 className="lm">Recent Searches</h6>
                              <p className="color_d">Birminghamm</p>
                            </div>
                            <div>
                              <h6 className="lm">Popular Searches</h6>
                              <p className="color_d">Hair</p>
                            </div>
                          </div>
                          <ul className="noBg noUl mb0">
                            <li>
                              <span>Hair removal</span>
                            </li>
                            <li>
                              <span>Massage</span>
                            </li>
                            <li>
                              <span>Nails</span>
                            </li>
                            <li>
                              <span>Face</span>
                            </li>
                            <li>
                              <span>Body</span>
                            </li>
                            <li>
                              <span>Body</span>
                            </li>
                            <li>
                              <span>Body</span>
                            </li>
                            <li>
                              <span>Body</span>
                            </li>
                          </ul>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mobMb10">
                <div className="d-flex align-items-start">
                  <div>{Svg.map}</div>
                  <div>
                    <h6 className="mb-0 ml10">{t("Postcode")}</h6>

                    <UncontrolledDropdown className="noBgonDropDown custom_d">
                      <DropdownToggle className="p-0 border-0 home_banner_v">
                        <span>
                          {Svg.VerticalEllipsis}
                          <GIconInput
                            type="text"
                            name="firstname"
                            placeholder="Enter first name"
                            className="home_banner_b"
                          />
                        </span>
                      </DropdownToggle>
                      <DropdownMenu className="radius4 shadow noBorder">
                        <DropdownItem>
                          <div className="pt-2 pb-2">
                            <div>
                              <h6 className="lm">Recent Searches</h6>
                              <p className="color_d">Birminghamm</p>
                            </div>
                            <div>
                              <h6 className="lm">Popular Searches</h6>
                              <p className="color_d">Hair</p>
                            </div>
                          </div>
                          <ul className="noBg noUl mb0">
                            <li>
                              <span>Hair removal</span>
                            </li>
                            <li>
                              <span>Massage</span>
                            </li>
                            <li>
                              <span>Nails</span>
                            </li>
                            <li>
                              <span>Face</span>
                            </li>
                            <li>
                              <span>Body</span>
                            </li>
                            <li>
                              <span>Body</span>
                            </li>
                            <li>
                              <span>Body</span>
                            </li>
                            <li>
                              <span>Body</span>
                            </li>
                          </ul>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mobMb10">
                <div className="d-flex align-items-start">
                  <div>{Svg.date}</div>
                  <div className="position-relative">
                    <h6 className="mb-0 ml10">{t("Date")}</h6>

                    <GIconInput
                      type="text"
                      name="firstname"
                      placeholder="Choose date & time"
                      className="home_banner_b"
                      onClick={() => setopen(!open)}
                    />

                    {open && (
                      <section className="serch_P ">
                        
                        <div className="pt-2 pb-2 position-relative">
                          <div className="cross" onClick={() => setopen(false)}>{Svg.cross}</div>
                          <div className="d-flex align-items-start">
                            {Svg.date}
                            <h6 className="ml10">Choose Date</h6>
                          </div>
                          <div className="pt10 pb10">
                            <div className="date_p">
                              <Row>
                                <Col md="6">
                                  <GRadio
                                    id="ert"
                                    name="Male"
                                    label="Any Date"
                                    
                                  />
                                </Col>
                                <Col md="6">
                                  <GRadio id="ert1" name="Male" label="Today" />
                                </Col>
                                <Col md="6">
                                  <GRadio
                                    id="ert2"
                                    name="Male"
                                    label="Tomorrow"
                                  />
                                </Col>

                                <Col md="12" className="tab_date mt-1">
                                  <DatePicker
                                  showYearDropdown
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                  />
                                </Col>
                              </Row>
                            </div>
                          </div>

                          <div className="d-flex align-items-start">
                            {Svg.watch}
                            <h6 className="ml10">Choose time</h6>
                          </div>
                          <div className="pt10 pb10">
                            <div className="date_p">
                              <Row>
                                <Col md="6">
                                  <Label>From</Label>
                                  <div className="time_picker">
                                    <TimePicker
                                      onChange={onChange}
                                      value={value}
                                    />
                                  </div>
                                </Col>
                                <Col md="6">
                                  <Label>To</Label>
                                  <div className="time_picker">
                                    <TimePicker
                                      onChange={onChange}
                                      value={value}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                          <GButton width="100%">Done</GButton>
                        </div>
                      </section>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-2 text-end">
                <Button className="bg-transparent p-0 border-0  rounded-circle">
                  {Svg.submit}
                </Button>
              </div>
            </div>
          </div>
        )}

        {tab === "salon" && (
          <div className="mt-3 container p-0">
            <div className="row">
              <div className="col-md-3">
                <div className="d-flex align-items-start">
                  <div>{Svg.serch}</div>
                  <div>
                    <h6 className="mb-0 ml10">{t("Salon")}</h6>

                    <UncontrolledDropdown className="noBgonDropDown custom_d">
                      <DropdownToggle className="p-0 border-0 home_banner_v">
                        <span>
                          {Svg.VerticalEllipsis}
                          <GIconInput
                            type="text"
                            name="firstname"
                            placeholder="Select Salon"
                            className="home_banner_b"
                          />
                        </span>
                      </DropdownToggle>
                      <DropdownMenu className="radius4 shadow noBorder">
                        <DropdownItem>
                          <div className="pt-2">
                            <div>
                              <h6 className="lm">Recent Searches</h6>
                              <p className="color_d">Birminghamm</p>
                            </div>
                            <div>
                              <h6 className="lm">Popular Searches</h6>
                              <p className="color_d">Hair</p>
                            </div>
                          </div>
                          <ul className="noBg noUl mb0">
                            <li>
                              <span>Hair removal</span>
                            </li>
                            <li>
                              <span>Massage</span>
                            </li>
                            <li>
                              <span>Nails</span>
                            </li>
                            <li>
                              <span>Face</span>
                            </li>
                            <li>
                              <span>Body</span>
                            </li>
                            <li>
                              <span>Body</span>
                            </li>
                            <li>
                              <span>Body</span>
                            </li>
                            <li>
                              <span>Body</span>
                            </li>
                          </ul>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
              </div>

              <div className="col-md-9 text-end">
                <Button className="bg-transparent p-0 border-0  rounded-circle">
                  {Svg.submit}
                </Button>
              </div>
            </div>
          </div>
        )}
      </TabContent>
    </WrapperSearch>
  );
};

export default AdvancedSearch;
