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
import "./Creategange.scss";
import GangInfo from "./GangInfo";

class Creategange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: "private",
      regVal: "formStep",
      password: false,
      confirmPass: false,
      country: { value: "", label: "Country" },
      state: { value: "", label: "State" },
      city: { value: "", label: "City" },
      otp: "",
      modalName: true,
      registermodal1: "",
      registermodal2: false,
      logo: "",
      registerTab: "",
    };
  }

  componentDidMount() {}

  handleChange = (selectedOption, stateKey) => {
    this.setState({ [stateKey]: selectedOption });
    console.log(stateKey);
  };
  fileUploader = (e) => {
    this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
    console.log(URL.createObjectURL(e.target.files[0]));
  };

  toggleTab = (value) => {
    this.setState({ tabValue: value });
  };

  register = (val, tabValue) => {
    this.setState({ regVal: val, registerTab: tabValue });
  };
  toggleModal = (modalName) => {
    this.setState({ [modalName]: !this.state[modalName] });
  };

  togglePassword = (value) => {
    this.setState({ [value]: !this.state[value] });
  };
  inputChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

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
    const {
      tabValue,
      password,
      confirmPass,
      state,
      city,
      regVal,
      logo,
      banner,
      registerTab,
      userStepper,
      otherSetting,
    } = this.state;

    return (
      <React.Fragment>
        <section className="row bg_half_white">
          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <div className="wrapperbody p_t_30 p_l_10 p_r_30">
              <section className="m_b_30">
                <button className="f16 color_grey d-flex align-items-center m_b_20">
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

                <h2 className="f_bold f28 color_black">Create New Gang</h2>
              </section>

              <div className="row r">
                <div className="col-lg-3">
                  <GangInfo />
                </div>
                <div className="col-lg-9">
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Creategange;
