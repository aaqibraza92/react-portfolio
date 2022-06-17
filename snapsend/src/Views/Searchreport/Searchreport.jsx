import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import {
  Container,
  Col,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Images } from "Constant";
// import Slider from "react-slick";
import Select from "react-select";
import Sidebar from "Components/Sidebar";

import { Api, Auth, Http } from "Helpers";

import CmnButton from "Components/CmnButton";
import CmnInput from "Components/CmnInput";

import OtpInput from "react-otp-input";
import { CommonNotifyModal } from "Modals";
import "./Searchreport.scss";

class Searchreport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: "private",
    };
  }

  componentDidMount() {}

  // Submit data

  submitData = () => {
    // let {  } = this.state;
    // Http.post(Api.REGISTER, data)
    //   .then((res) => {
    //     console.log(res, "APi response");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  render() {
    const { tabValue } = this.state;

    return (
      <React.Fragment>
        <section className="row bg_half_white">
          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <div className="wrapperbody p_t_30 p_l_10 p_r_30">
              <section className="m_b_30">
                <h2 className="f_bold f28 color_black">Search Reports</h2>
              </section>

              <div className="row m_b_120_desk">
                <div className="col-lg-6">
                  <div className="text-center">
                    <div className="m_b_10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                      >
                        <g
                          id="Group_52483"
                          data-name="Group 52483"
                          transform="translate(-693 -189)"
                        >
                          <circle
                            id="Ellipse_15061"
                            data-name="Ellipse 15061"
                            cx="32"
                            cy="32"
                            r="32"
                            transform="translate(693 189)"
                            fill="#538234"
                          />
                          <g
                            id="Group_52482"
                            data-name="Group 52482"
                            transform="translate(692 192)"
                          >
                            <path
                              id="Path_471"
                              data-name="Path 471"
                              d="M35.125,20.638a3.97,3.97,0,1,1-2.983-1.344c.084,0,.168,0,.253.008A3.945,3.945,0,0,1,35.125,20.638ZM44.941,14V37.382H38.324V44H22V14ZM36.559,37.382H26.412v1.765H36.559Zm3.088-3.529H26.412v1.765H39.647Zm1.248-3.088-4.118-4.118a5.733,5.733,0,1,0-4.987,2.343q.183.012.366.011a5.685,5.685,0,0,0,3.376-1.1l4.116,4.116Zm-.807,12.794L44.5,39.147H40.088Z"
                              transform="translate(0 0)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>

                    <div className="m_b_30">
                      <h3 className="f24 color_black f_bold">
                        Search System Report
                      </h3>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text.
                      </p>
                    </div>

                    <div className="row section_report_btn">
                      <div className="col-lg-6 col-xs-6 col-md-6">
                        <Link
                          to="/newreportslist"
                          className="btn_theme btn_transparent_grey w-100 d-block m_b_20"
                        >
                          New Reports
                        </Link>
                      </div>

                      <div className="col-lg-6 col-xs-6 col-md-6">
                        <Link
                          to=""
                          className="btn_theme btn_transparent_grey w-100 d-block m_b_20"
                        >
                          Property Crimes
                        </Link>
                      </div>

                      <div className="col-lg-6 col-xs-6 col-md-6">
                        <Link
                          to=""
                          className="btn_theme btn_transparent_grey w-100 d-block m_b_20"
                        >
                          Sex Trafficking
                        </Link>
                      </div>
                      <div className="col-lg-6 col-xs-6 col-md-6">
                        <Link
                          to=""
                          className="btn_theme btn_transparent_grey w-100 d-block m_b_20"
                        >
                          Car Accident
                        </Link>
                      </div>

                      <div className="col-lg-6 col-xs-6 col-md-6">
                        <Link
                          to=""
                          className="btn_theme btn_transparent_grey w-100 d-block m_b_20"
                        >
                          Gang Violence
                        </Link>
                      </div>

                      <div className="col-lg-6 col-xs-6 col-md-6">
                        <Link
                          to=""
                          className="btn_theme btn_transparent_grey w-100 d-block m_b_20"
                        >
                          Homeless
                        </Link>
                      </div>

                      <div className="col-lg-6 col-xs-6 col-md-6">
                        <Link
                          to=""
                          className="btn_theme btn_transparent_grey w-100 d-block m_b_20"
                        >
                          Crime against People/animals
                        </Link>
                      </div>
                      <div className="col-lg-6 col-xs-6 col-md-6 col-md-6">
                        <Link
                          to=""
                          className="btn_theme btn_transparent_grey w-100 d-block m_b_20"
                        >
                          Archived Files
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="text-center">
                    <div className="m_b_10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                      >
                        <g
                          id="Group_53979"
                          data-name="Group 53979"
                          transform="translate(-1460 -189)"
                        >
                          <path
                            id="Path_24275"
                            data-name="Path 24275"
                            d="M32,0A32,32,0,0,1,64,32a32.43,32.43,0,0,1-1.531,9.809A32,32,0,1,1,32,0Z"
                            transform="translate(1460 189)"
                            fill="#538234"
                          />
                          <g
                            id="Group_52484"
                            data-name="Group 52484"
                            transform="translate(-58.273 -1.5)"
                          >
                            <g
                              id="Icon_feather-search"
                              data-name="Icon feather-search"
                              transform="translate(1535.273 207.5)"
                            >
                              <path
                                id="Path_24170"
                                data-name="Path 24170"
                                d="M31.167,17.833A13.333,13.333,0,1,1,17.833,4.5,13.333,13.333,0,0,1,31.167,17.833Z"
                                transform="translate(-4.5 -4.5)"
                                fill="none"
                                stroke="#fff"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2.5"
                              />
                              <path
                                id="Path_24171"
                                data-name="Path 24171"
                                d="M32.225,32.225l-7.25-7.25"
                                transform="translate(-2.225 -2.225)"
                                fill="none"
                                stroke="#fff"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2.5"
                              />
                            </g>
                            <path
                              id="Icon_ionic-ios-settings"
                              data-name="Icon ionic-ios-settings"
                              d="M20.448,13.192A2.237,2.237,0,0,1,21.883,11.1,8.867,8.867,0,0,0,20.81,8.52a2.267,2.267,0,0,1-.91.195,2.232,2.232,0,0,1-2.042-3.142A8.84,8.84,0,0,0,15.279,4.5a2.235,2.235,0,0,1-4.174,0A8.867,8.867,0,0,0,8.52,5.573,2.232,2.232,0,0,1,6.478,8.715a2.193,2.193,0,0,1-.91-.195A9.063,9.063,0,0,0,4.5,11.109a2.236,2.236,0,0,1,0,4.174,8.867,8.867,0,0,0,1.073,2.585,2.233,2.233,0,0,1,2.947,2.947,8.918,8.918,0,0,0,2.585,1.073,2.231,2.231,0,0,1,4.165,0,8.867,8.867,0,0,0,2.585-1.073,2.235,2.235,0,0,1,2.947-2.947,8.918,8.918,0,0,0,1.073-2.585A2.248,2.248,0,0,1,20.448,13.192Zm-7.216,3.617a3.622,3.622,0,1,1,3.622-3.622A3.621,3.621,0,0,1,13.232,16.809Z"
                              transform="translate(1535.328 207.378)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>

                    <div className="m_b_30">
                      <h3 className="f24 color_black f_bold">
                        Custom Search Reports
                      </h3>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text.
                      </p>
                    </div>

                    <div className="row section_report_btn">
                      <div className="col-lg-12 col-xs-12 col-md-12">
                        <Link
                          to=""
                          className="btn_theme btn_transparent_grey w-100 d-block m_b_20"
                        >
                          Search Other Departments
                        </Link>
                      </div>

                      <div className="col-lg-12 col-xs-12 col-md-12">
                        <Link
                          to=""
                          className="btn_theme btn_transparent_grey w-100 d-block m_b_20"
                        >
                          Reports With Matching Suspect Name
                        </Link>
                      </div>

                      <div className="col-lg-12 col-xs-12 col-md-12">
                        <Link
                          to=""
                          className="btn_theme btn_transparent_grey w-100 d-block m_b_20"
                        >
                          Report With Matching Gang Names
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info_foooo text-center max_50">
              <p className="f14 color_light_grey">
              Information
                </p>
                <p className="f14 color_light_grey">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Searchreport;
