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
import Gangsidebar from "./Gangsidebar";
import Formpreview from "./Formpreview";
import { Api, Auth, Http } from "Helpers";

import CmnButton from "Components/CmnButton";
import CmnInput from "Components/CmnInput";
import CmnTable from "Components/CmnTable/CmnTable";

import OtpInput from "react-otp-input";
import { CommonNotifyModal } from "Modals";
import "./Gangdetails.scss";

class Gangdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theadList: [
        {
          title: "Serial no.",
        },
        {
          title: "Report ID",
        },
        {
          title: "Case ID",
        },
        {
          title: "Location",
        },
        {
          title: "Report Date",
        },
        {
          title: "Action",
        },
      ],

      casesList: [
        {
          sno: "1", ReportID: "RID1998713002", CaseID: "CID01875433", Location: "Seattle, Washington State, US",ReportDate: "Police technician",Action: "Action",
        },
        {
          sno: "2", ReportID: "RID1998713002", CaseID: "CID01875433", Location: "Seattle, Washington State, US",ReportDate: "Police technician",Action: "Action",
        },
        {
          sno: "3", ReportID: "RID1998713002", CaseID: "CID01875433", Location: "Seattle, Washington State, US",ReportDate: "Police technician",Action: "Action",
        },
        {
          sno: "4", ReportID: "RID1998713002", CaseID: "CID01875433", Location: "Seattle, Washington State, US",ReportDate: "Police technician",Action: "Action",
        },
        {
          sno: "5", ReportID: "RID1998713002", CaseID: "CID01875433", Location: "Seattle, Washington State, US",ReportDate: "Police technician",Action: "Action",
        },
        {
          sno: "6", ReportID: "RID1998713002", CaseID: "CID01875433", Location: "Seattle, Washington State, US",ReportDate: "Police technician",Action: "Action",
        },
        {
          sno: "7", ReportID: "RID1998713002", CaseID: "CID01875433", Location: "Seattle, Washington State, US",ReportDate: "Police technician",Action: "Action",
        },
        {
          sno: "8", ReportID: "RID1998713002", CaseID: "CID01875433", Location: "Seattle, Washington State, US",ReportDate: "Police technician",Action: "Action",
        },
        {
          sno: "9", ReportID: "RID1998713002", CaseID: "CID01875433", Location: "Seattle, Washington State, US",ReportDate: "Police technician",Action: "Action",
        },
        {
          sno: "10", ReportID: "RID1998713002", CaseID: "CID01875433", Location: "Seattle, Washington State, US",ReportDate: "Police technician",Action: "Action",
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
    const {theadList,casesList} = this.state;

    return (
      <React.Fragment>
        <section className="row bg_half_white">
          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <div className="wrapperbody p_t_30 p_l_10 p_r_30">
              <section className="m_b_0">
                <button className="f16 color_grey d-flex align-items-center m_b_10">
                  <svg
                    className="m_r_10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewBox="0 0 5.569 9.839"
                  >
                    <path
                      id="Path_377"
                      data-name="Path 377"
                      d="M15.5,18l-4,4-4-4"
                      transform="translate(22.65 -6.581) rotate(90)"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.3"
                    />
                  </svg>
                  <span>Go back</span>
                </button>
              </section>
              <div className="row align-items-center m_b_10">
                <div className="col-lg-6">
                  <h2 className="f_bold f28 color_black">Gang Detail</h2>
                </div>
                <div className="col-lg-6">
                  <div className="search">
                    <div className="row align-items-center">
                      <div className="col-md-9 col-lg-10">
                        <div className="form_group position-relative m_b_0 m_b_10_mob">
                          <CmnInput
                            type="search"
                            className="srch"
                            placeholder="Search suspect name"
                          />

                          <svg
                            className="input_position left"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 18.173 18.173"
                          >
                            <g
                              id="Icon_feather-search"
                              data-name="Icon feather-search"
                              transform="translate(0.9 0.9)"
                            >
                              <path
                                id="Path_485"
                                data-name="Path 485"
                                d="M18.722,11.611A7.111,7.111,0,1,1,11.611,4.5,7.111,7.111,0,0,1,18.722,11.611Z"
                                transform="translate(-4.5 -4.5)"
                                fill="none"
                                stroke="#929398"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.8"
                              />
                              <path
                                id="Path_486"
                                data-name="Path 486"
                                d="M28.842,28.842l-3.867-3.867"
                                transform="translate(-12.842 -12.842)"
                                fill="none"
                                stroke="#929398"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.8"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>

                      <div className="col-md-3 col-lg-2">
                        <button className="btn_theme btn_green">Search</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="m_b_30">
                <p class=" f18 color_black">
                  Created By : Whatcom County Sheriff's Department | 17 August
                  2021
                </p>
              </section>

              <section className="row bg_white p_t_30 p_b_30 p_l_20 p_r_20 m_b_30 radius">
                <div className="col-lg-3">
                  <Gangsidebar />
                </div>

                <div className="col-lg-9">
                  <div className="m_b_30">
                    <div className="m_b_30">
                      <Formpreview />
                    </div>

                    <div className="row">
                      <div className="col-lg-2 ">
                        <p class="m_b_0 color_light_blue p_l_10">Add Note:</p>
                      </div>
                      <div className="col-lg-8">
                        <div className="form_group">
                          <textarea
                            name="addNote"
                            placeholder="Add notes here about suspect"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-2">
                        <button className="btn_theme btn_green">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            
            </div>


            <h2 class="f_bold f28 color_black m_b_30 p_l_20_mob p_r_20_mob">
                Files Linked to the same gang
              </h2>

            <section className="files_linked  bg_white p_t_30 p_b_30 p_l_20 p_r_20 m_b_30 radius">
             
              <h5 className="f_bold f18 color_black m_b_20">Cases list</h5>

              <div className="CasesList">
                <CmnTable
                thead={theadList}
                tableData={casesList}
                pagination="true"
                //Tablebutton= "<button class='btn_theme btn_green'></button>"
                />
              </div>
            </section>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Gangdetails;
