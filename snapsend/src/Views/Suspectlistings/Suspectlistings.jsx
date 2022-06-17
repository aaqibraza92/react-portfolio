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
import "./Suspectlistings.scss";

class Suspectlistings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: "private",
      ResultsData: [
        {
          img: "",
          name: "Jalisco Daybreak Boys",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
        {
          img: "",
          name: "Jalisco Daybreak Boys",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
        {
          img: "",
          name: "Jalisco Daybreak Boys",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
        {
          img: "",
          name: "Jalisco Daybreak Boys",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
        {
          img: "",
          name: "Jalisco Daybreak Boys",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
        {
          img: "",
          name: "Jalisco Daybreak Boys",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
      ],
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
    const { ResultsData } = this.state;

    return (
      <React.Fragment>
        <section className="row bg_half_white">
          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <div className="wrapperbody p_t_30 p_l_10 p_r_30">
              <div className="row align-items-center m_b_30">
                <div className="col-lg-6">
                  <h2 className="f_bold f28 color_black">
                    Report With Matching Gang Names
                  </h2>
                </div>
                <div className="col-lg-6">
                  <div className="search">
                    <div className="row align-items-center">
                      <div className="col-md-9 col-lg-10">
                        <div className="form_group position-relative m_b_0 m_b_10_mob">
                          <CmnInput
                            type="search"
                            className=""
                            placeholder="Jalisco New Generation Crtel (CJNG)"
                          />
                        </div>
                      </div>

                      <div className="col-md-3 col-lg-2">
                        <button className="btn_theme btn_green">Search</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="m_b_10">
                <h2 class="f_bold f20 color_black">Results</h2>
              </section>

              <section className="results">
                <ul className="reports no_ul m_b_30">
                  {ResultsData.map((objj, index) => {
                    return (
                      <li className="m_b_10 p_b_10 border_bottom bg_light_yellow radius">
                        <div className="row align-items-center">
                          <div className="col-md-9 col-lg-10 m_b_10_mob">
                            <div className="d-flex align-items-center align_items_top_mob">
                              <div className="m_r_10 align-self-start">
                                <img
                                  className="radius"
                                  src={Images.gangmember.default}
                                  alt=""
                                />
                              </div>
                              <div>
                                <h3 className="f_bold f18 color_black">
                                  {objj.name}
                                </h3>
                                <p className="f16 color_grey">{objj.details}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-lg-2">
                            <div className="position-relative d-flex justify-content-end">
                              <button className="btn_theme btn_green">
                                View detail
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div className="d-flex align-items-center flex-wrap justify-content-center m_b_30">
                  <ul className="pagi no_ul d-flex align-items-center flex-wrap justify-content-center">
                    <li>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="12"
                          viewBox="0 0 5.811 10.121"
                        >
                          <g
                            id="Group_5513"
                            data-name="Group 5513"
                            transform="translate(-7.75 -1.439)"
                          >
                            <path
                              id="Path_94"
                              data-name="Path 94"
                              d="M22,7.5l-4,4,4,4"
                              transform="translate(-9.499 -5)"
                              fill="none"
                              stroke="#272833"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                            />
                          </g>
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button>1</button>
                    </li>
                    <li>
                      <button>2</button>
                    </li>
                    <li>
                      <button>3</button>
                    </li>
                    <li>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="5.811"
                          height="10.121"
                          viewBox="0 0 5.811 10.121"
                        >
                          <g
                            id="Group_5512"
                            data-name="Group 5512"
                            transform="translate(-1584.439 -1359.487)"
                          >
                            <path
                              id="Path_94"
                              data-name="Path 94"
                              d="M18,7.5l4,4-4,4"
                              transform="translate(1567.5 1353.048)"
                              fill="none"
                              stroke="#272833"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                            />
                          </g>
                        </svg>
                      </button>
                    </li>
                  </ul>

                  <p className="f16 color_black">
                  of 2,982
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Suspectlistings;
