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
import Table from "./Table";
import "./NewReportsList.scss";

class NewReportsList extends React.Component {
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
                <h2 className="f_bold f28 color_black">New Reports List</h2>
              </section>

            <div className="bg_white shadow">

            </div>
            

          
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default NewReportsList;
