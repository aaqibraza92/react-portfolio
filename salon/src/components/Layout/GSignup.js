import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import GCheckbox from "./GCheckbox";
import GIconInput from "./GIconInput";
import GLink from "./GLink";
import GPasswordInput from "./GPasswordInput";
import GButton from "./GButton";
import GSpacing from "./GSpacing";
import { Col, Container, Label, Row, UncontrolledTooltip } from "reactstrap";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import CmnRadioBorder from "./CmnRadioBorder/CmnRadioBorder";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {
  checkEmailAvailable,
  checkMobAvailable,
  userSignup,
} from "../../helpers/backend/index";
import Auth from "../../helpers/Auth/Auth";
import { notify } from "react-notify-toast";
import { useTranslation } from "react-i18next";
import Svg from "../../assets/svg/Svg";
import { postAuthSignup } from "../../store/auth/signup/actions";
import { useDispatch } from "react-redux";
const LoginWrapper = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 17px;
  }
`;

const GSignup = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {});

  const [errors, seterrors] = useState({});
  const [dataState, setDataState] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    dob: "",
    password: "",
    gender: "",
    confirmpassword: "",
    postalcode: "",
    agreeTerms: false,
    receiveEmail: false,
    offersAccepted: false,
  });
  const validate = () => {

    const errors = {};
    if (dataState && dataState.firstname.trim() === "") {
      errors.firstname = "Please fill Firstname";
    } else if (dataState && dataState.firstname === null) {
      errors.firstname = "Please fill Firstname";
    } else if (dataState && dataState.firstname === undefined) {
      errors.firstname = "Please fill Firstname";
    } 
    else if (dataState && dataState.firstname.length <= 3) {
      errors.firstname = "First name should be at least 03 character long.";
    } 
    
    if (dataState && dataState.lastname.trim() === "") {
      errors.lastname = "Please fill Lastname";
    } else if (dataState && dataState.lastname === null) {
      errors.lastname = "Please fill Lastname";
    } else if (dataState && dataState.lastname === undefined) {
      errors.lastname = "Please fill Lastname";
    } 
    else if (dataState && dataState.lastname.length <= 2) {
      errors.lastname = "First name should be at least 02 character long.";
    } 
  
    if (dataState && dataState.mobile.trim() === "") {
      errors.mobile = "Please enter a valid mobile number.";
    } else if (dataState && dataState.mobile === undefined) {
      errors.mobile = "Please enter a valid mobile number.";
    } else if (dataState && dataState.mobile === null) {
      errors.mobile = "Please enter a valid mobile number.";
    } else if (dataState && dataState.mobile.length <=8) {
      errors.mobile = "Please enter a minimum 8 digit of numbers";
    }
    if (dataState && dataState.email.length <=5) {
      errors.email = "Please enter a valid email address.";
    } else if (dataState && dataState.email === undefined) {
      errors.email = "Please enter an email address.";
    }
    else if (dataState && dataState.email.trim() === "") {
      errors.email = "Please enter an email address.";
    }

    if (dataState && dataState.postalcode.length <=3) {
      errors.postalcode = "Please enter a valid postal code.";
    } else if (dataState && dataState.postalcode === undefined) {
      errors.postalcode = "Please enter postal code.";
    }
    else if (dataState && dataState.postalcode.trim() === "") {
      errors.postalcode = "Please enter postal code.";
    }
    
    // if (dataState && dataState.dob === undefined) {
    //   errors.dob = "Please enter DOB.01";
    // }
    // else if (dataState && dataState.dob.trim() === "") {
    //   errors.dob = "Please enter DOB.11";
    // }

    if (dataState && dataState.password.trim() === "") {
      errors.password = "Please enter password";
    } else if (dataState && dataState.password === undefined) {
      errors.password = "Please enter password";
    } else if (dataState && dataState.password === null) {
      errors.password = "Please enter password";
    } else if (dataState && dataState.password.length <= 6) {
      errors.password = "Password needs to be between 6 and 30 character long and contains 1 upper-case letter and a number";
    }

    if (dataState && dataState.confirmpassword.trim() === "") {
      errors.confirmpassword = "Please enter confirm password";
    } else if (dataState && dataState.confirmpassword === undefined) {
      errors.confirmpassword = "Please enter confirm password";
    } else if (dataState && dataState.confirmpassword === null) {
      errors.confirmpassword = "Please enter confirm password";
    } else if (dataState && dataState.confirmpassword.length <= 6) {
      errors.confirmpassword = "password needs to be between 6 and 30 character long and contains 1 upper-case letter and a number";
    }
    else if (dataState && dataState.password !== dataState.confirmpassword) {
      errors.confirmpassword = "Password and confirm password is not matching.";
    }
    seterrors(errors);
    return errors;
  };


 

  const clearState = () => {
    setDataState({
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      password: "",
      confirmpassword: "",
      postalcode: "",
      dob: "",
      agreeTerms: false,
      offersAccepted: false,
    });
  };

  const checkEmail = (data) => {
    const iData = {
      email: data,
    };
    checkEmailAvailable(iData).then((res) => {
      if (res && res.status && res.status === 201) {
        let myColor = { background: "red", text: "#FFFFFF" };
        notify.show("Oops! " + res.message, "custom", 4000, myColor);
        setDataState({
          ...dataState,
          email: "",
        });
      }
      if (res && res.status && res.status === 202) {
        let myColor = { background: "red", text: "#FFFFFF" };
        notify.show(
          "Oops! Please enter correct email",
          "custom",
          4000,
          myColor
        );
        setDataState({
          ...dataState,
          email: "",
        });
      }
      if (res && res.status && res.status === 200) {
        
      }
    });
  };

  const checkMobile = (data) => {
    const iData = {
      mobile: data,
    };
    checkMobAvailable(iData).then((res) => {
      if (res && res.status && res.status === 201) {
        let myColor = { background: "red", text: "#FFFFFF" };
        notify.show("Oops! " + res.message, "custom", 4000, myColor);
      }
      if (res && res.status && res.status === 202) {
        let myColor = { background: "red", text: "#FFFFFF" };
        notify.show(
          "Oops! Please enter correct mobile",
          "custom",
          4000,
          myColor
        );
        setDataState({
          ...dataState,
          mobile: "",
        });
      }
      if (res && res.status && res.status === 200) {
      }
    });
  };

  const sendForm = () => {
    validate();
    const actionCallback = (resp) => {
      if (resp && resp.status && resp.status === 202) {
        //already in use
        //   let myColor = { background: "#FF385C", text: "#FFFFFF" };
        //   notify.show(resp.message, "custom", 5000, myColor);
        //  navigate('/mobile-verification');
      }
      if (resp && resp.status && resp.status === 200) {
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(resp.message, "custom", 5000, myColor);
        navigate('/mobile-verification',{state:{mobile: dataState.mobile}})
      }
    };

      

    try {
      const iData = {
        firstName: dataState.firstname,
        lastName: dataState.lastname,
        mobile: dataState.mobile,
        email: dataState.email,
        gender: dataState.gender,
        postalCode: dataState.postalcode,
        dateOfBirth: dataState.dob,
        password: dataState.confirmpassword,
        acceptTermsPolicy: dataState.agreeTerms,
        acceptMarketingEmail: dataState.offersAccepted,
      };

      dispatch(postAuthSignup(iData, actionCallback));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LoginWrapper className="">
      <Container className="sign_up_main">
        <Row className="align-items-center gx-5">
          <Col lg={12} md={12}>
            <h2 className="lm mb20">{t("Signup")}</h2>
            <Row>
              <Col md={6}>
                <GIconInput
                  label={t("Firstname")}
                  type="text"
                  name="firstname"
                  placeholder={t("Firstname")}
                  validationMsg={errors.firstname}
                  showvalidationMsg={errors.firstname && true}
                  value={dataState.firstname}
                  onChange={(e) =>
                    setDataState({ ...dataState, firstname: e.target.value })
                  }
                />
              </Col>
              <Col md={6}>
                <GIconInput
                  label={t("Lastname")}
                  type="text"
                  name="Lastname"
                  placeholder={t("Lastname")}
                  validationMsg={errors.lastname}
                  showvalidationMsg={errors.lastname && true}
                  value={dataState.lastname}
                  onChange={(e) =>
                    setDataState({ ...dataState, lastname: e.target.value })
                  }
                />
              </Col>

              <Col md={6}>
                <GIconInput
                  label={t("Email")}
                  type="email"
                  name="email"
                  placeholder={t("Email")}
                  validationMsg={errors.email}
                  showvalidationMsg={errors.email && true}
                  value={dataState.email}
                  onBlur={(e) => checkEmail(e.target.value)}
                  onChange={(e) =>
                    setDataState({ ...dataState, email: e.target.value })
                  }
                />
              </Col>

              <Col md={6}>
                <div className="position-relative">
                  <GIconInput
                    label="Mobile number"
                    type="mobile"
                    name="mobile"
                    placeholder="Enter mobile number"
                    validationMsg={errors.mobile}
                    showvalidationMsg={errors.mobile && true}
                    onBlur={(e) => checkMobile(e.target.value)}
                    value={dataState.mobile}
                    onChange={(e) =>
                      setDataState({ ...dataState, mobile: e.target.value })
                    }
                  />
                  <p className="tooltip_two">
                    <span href="#" id="UncontrolledTooltipExamplem">
                      {Svg.tooltip}
                    </span>
                  </p>
                  <UncontrolledTooltip
                    placement="top"
                    target="UncontrolledTooltipExamplem"
                  >
                    Mobile Number
                  </UncontrolledTooltip>
                </div>
              </Col>

              <Col md={12}>
                <Label>Gender</Label>
                <div className="d-flex">
                  <CmnRadioBorder
                    onChange={(e) =>
                      setDataState({
                        ...dataState,
                        gender: e.target.checked ? e.target.value : "",
                      })
                    }
                    id="ert"
                    value="Male"
                    name="gender"
                    label="Male"
                    checked={dataState.gender === "Male"}
                  />

                  <CmnRadioBorder
                    onChange={(e) =>
                      setDataState({
                        ...dataState,
                        gender: e.target.checked ? e.target.value : "",
                      })
                    }
                    id="Female"
                    value="Female"
                    name="Female"
                    label="Female"
                    checked={dataState.gender === "Female"}
                  />
                </div>
              </Col>

              <Col md={6}>
                <GIconInput
                  label="Postalcode"
                  type="text"
                  name="postalcode"
                  placeholder="Postalcode"
                  value={dataState.postalcode}
                  validationMsg={errors.postalcode}
                  showvalidationMsg={errors.postalcode && true}
                  onChange={(e) =>
                    setDataState({ ...dataState, postalcode: e.target.value })
                  }
                />
              </Col>
              <Col className="date_picker" md={6}>
                <label className="labelInput">Date of birth</label>
                <DatePicker
                  className="w-100"
                  selected={dataState.dob}
                  placeholderText="dd-mm-yyyy"
                  dateFormat="yyyy-MM-dd"
                  showYearDropdown
                  onChange={(date) =>
                    setDataState({
                      ...dataState,
                      dob: date,
                    })
                  }
                />
         
              </Col>
              <Col md={6}>
                <div className="position-relative">
                  <GPasswordInput
                    label="Password"
                    name="password"
                    placeholder="Enter Password"
                    value={dataState.password}
                    validationMsg={errors.password}
                    showvalidationMsg={errors.password && true}
                    onChange={(e) =>
                      setDataState({ ...dataState, password: e.target.value })
                    }
                  />
                  <p className="tooltip_one">
                    <span href="#" id="UncontrolledTooltipExample">
                      {Svg.tooltip}
                    </span>
                  </p>
                  <UncontrolledTooltip
                    placement="top"
                    target="UncontrolledTooltipExample"
                  >
                    Enter Password
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col md={6}>
                <div className="position-relative">
                  <GPasswordInput
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Enter Confirm Password"
                    value={dataState.confirmpassword}
                    validationMsg={errors.confirmpassword}
                  showvalidationMsg={errors.confirmpassword && true}
                    onChange={(e) =>
                      setDataState({
                        ...dataState,
                        confirmpassword: e.target.value,
                      })
                    }
                  />
                  <p className="tooltip_two">
                    <span href="#" id="UncontrolledTooltipExample1">
                      {Svg.tooltip}
                    </span>
                  </p>
                  <UncontrolledTooltip
                    placement="top"
                    target="UncontrolledTooltipExample1"
                  >
                    Enter Confirm Password
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col md={12}>
                <GSpacing marginTop="10px">
                  <GCheckbox
                    name="agreeTerms"
                    id="agreeTerms"
                    checked={dataState.agreeTerms}
                    onChange={(e) =>
                      setDataState({
                        ...dataState,
                      agreeTerms: !dataState.agreeTerms,
                      })
                    }
                    label="I Agree to the Terms of Service and Privacy Policy"
                  />
                </GSpacing>
              </Col>
              <Col md={12}>
                <GSpacing marginBottom="10px">
                  <GCheckbox
                    name="offersAccepted"
                    id="offersAccepted"
                    checked={dataState.offersAccepted}
                    onChange={(e) =>
                      setDataState({
                        ...dataState,
                        offersAccepted: !dataState.offersAccepted,
                      })
                    }
                    label="I agree to receive Marketing Email"
                  />
                </GSpacing>
              </Col>

              <Col md={7}>
                <p className="mb-0">
                  Already have an account ? <GLink to="/login" text="Login" />
                </p>
              </Col>

              <Col md={5}>
                <GButton
                  style={{
                    pointerEvents: dataState.agreeTerms === false && "none",
                    opacity: dataState.agreeTerms === false && 0.5,
                  }}
                  className={`${dataState.agreeTerms ? "" : "disableButton"}`}
                  onClick={() => sendForm()}
                  width="100%"
                >
                  Create an Account
                </GButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </LoginWrapper>
  );
};

export default GSignup;
