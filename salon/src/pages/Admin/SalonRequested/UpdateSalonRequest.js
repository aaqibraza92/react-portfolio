import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import GIconInput from "../../../components/Layout/GIconInput";
import GPasswordInput from "../../../components/Layout/GPasswordInput";
import GSpacing from "../../../components/Layout/GSpacing";
import BreadCrum from "../BreadCrum/BreadCrum";
import "./CreateSalonRequest.css";
import Select from "react-select";
import GCheckbox from "../../../components/Layout/GCheckbox";
import GTextarea from "../../../components/Layout/GTextarea";
import { useTranslation } from "react-i18next";
import { adminGetSalonProfileInfo } from "../../../helpers/backend/admin";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "react-notify-toast";
import Auth from "../../../helpers/Auth/Auth";
import AddressForm from "../../../components/AddressForm/AddressForm";
import GImageUpload from "../../../components/Layout/GImageUpload/GImageUpload";
import {useLocation} from 'react-router-dom';
import UpdateSalonRequestTab from "./UpdateSalonRequestTab";

const UpdateSalonRequest = (props) => {
  const loc= useLocation();
  const saloniD = loc.hash.replace("#", '');
  console.log("saloniD",saloniD);

  const dispatch = useDispatch();
  const salonid = props.location && props.location.state;
  const [salonInfo, setSalonInfo] = useState({});
  useEffect(() => {
    adminGetSalonProfileInfo().then((res) => {
      setSalonInfo(res.data);
    });
  }, []);
  var initialFormState = {
    salonName: salonInfo ? salonInfo.salonName : "",
    firstName: salonInfo ? salonInfo.firstName : "",
    lastName: salonInfo ? salonInfo.lastName : "",
    mobile: salonInfo ? salonInfo.mobile : "",
    email: salonInfo ? salonInfo.email : "",
    gender: salonInfo ? salonInfo.gender : "",
    postalCode: salonInfo ? salonInfo.postalCode : "",
    dateOfBirth: salonInfo ? salonInfo.dateOfBirth : "",
    password: salonInfo ? salonInfo.password : "",
    acceptTermsPolicy: salonInfo ? salonInfo.acceptTermsPolicy : false,
    acceptMarketingEmail: salonInfo ? salonInfo.acceptMarketingEmail : false,
    address: salonInfo ? salonInfo.address : "",
    country: salonInfo ? salonInfo.country : "",
    state: salonInfo ? salonInfo.state : "",
    city: salonInfo ? salonInfo.city : "",
    userType: "Salon",
    employees: salonInfo ? salonInfo.employees : 0,
  };
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [dataState, setDataState] = useState(initialFormState);
  const [errors, seterrors] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const validate = () => {
    const regex = new RegExp(
      "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$"
    );
    const errors = {};

    if (
      dataState.salonName.trim() === "" ||
      dataState.salonName === "" ||
      dataState.salonName === null ||
      dataState.salonName === undefined
    ) {
      errors.salonName = t("Salonnamemsg");
    }
    if (
      dataState.firstName.trim() === "" ||
      dataState.firstName === "" ||
      dataState.firstName === null ||
      dataState.firstName === undefined
    ) {
      errors.firstName = t("Firstnamemsg");
    }
    if (
      dataState.lastName.trim() === "" ||
      dataState.lastName === "" ||
      dataState.lastName === null ||
      dataState.lastName === undefined
    ) {
      errors.lastName = t("Lastnamemsg");
    }
    if (
      dataState.mobile.trim() === "" ||
      dataState.mobile === null ||
      dataState.mobile === "" ||
      dataState.mobile === undefined ||
      regex.test(dataState.mobile) === false
    ) {
      errors.mobile = t("Mobilemsg");
    }
    if (
      dataState.email.trim() === "" ||
      dataState.email === null ||
      dataState.email === "" ||
      dataState.email === undefined ||
      regex.test(dataState.email) === false
    ) {
      errors.email = t("Emailmsg");
    }
    if (
      dataState.address.trim() === "" ||
      dataState.address === null ||
      dataState.address === "" ||
      dataState.address === undefined
    ) {
      errors.address = t("Addressmsg");
    }

    if (dataState.city.value.length <= 0) {
      errors.city = t("Citymsg");
    }
    if (dataState.country.value.length <= 0) {
      errors.country = t("Countrymsg");
    }
    if (dataState.state.value.length <= 0) {
      errors.state = t("Statemsg");
    }
    if (
      dataState.postalCode.trim() === "" ||
      dataState.postalCode === null ||
      dataState.postalCode === "" ||
      dataState.postalCode === undefined
    ) {
      errors.postalCode = t("Addressmsg");
    }
    if (dataState.employee.value.length <= 0) {
      errors.employee = t("Employeemsg");
    }
    if (dataState.salontype.value.length <= 0) {
      errors.salontype = t("Salontypemsg");
    }
    if (dataState.membership.value.length <= 0) {
      errors.membership = t("Membershipmsg");
    }

    seterrors(errors);
    //console.log("errors",errors);
    return errors;
  };
  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      setDataState({ ...dataState, [name]: value === "on" ? true : false });
    } else {
      setDataState({ ...dataState, [name]: value });
    }
  };
  const callback = async (resp) => {
    if (resp && resp.status && resp.status === 201) {
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
    }
    if (resp && resp.status && resp.status === 200) {
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
    }
  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const handleFormSubmit = () => {
    try {
      const iData = new FormData();
      iData.append("salonName", dataState.salonName);
      iData.append("firstName", dataState.firstName);
      iData.append("lastName", dataState.lastName);
      iData.append("mobile", dataState.mobile);
      iData.append("email", dataState.email);
      iData.append("postalCode", dataState.postalCode);
      iData.append("password", dataState.password);
      iData.append("acceptTermsPolicy", dataState.acceptTermsPolicy);
      iData.append("acceptMarketingEmail", dataState.acceptMarketingEmail);
      iData.append("address", dataState.address);
      iData.append("country", dataState.country);
      iData.append("state", dataState.state);
      iData.append("city", dataState.city);
      iData.append("employees", dataState.employees);
      iData.append("businessType", "Shop");
      iData.append("profile", selectedFile);
      fetch("http://97.74.83.126:15357/api/admin/salonRegistration", {
        method: "POST",
        headers: {
          // if file upload "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: "Bearer " + Auth.getToken(),
        },
        body: iData,
      })
        .then((resp) => resp.json())
        .then((json) => {});
    } catch (e) {
      console.log(e, "Error in the GLogin.js");
    }
  };
  return (
    <div className="p_30 mb30">
      <GSpacing>
        <BreadCrum />
      </GSpacing>
      <section className="bgWhite radius">
        <UpdateSalonRequestTab />
        <div className="card-body">
          <Row>
            <Col md={3}>
              <div className="border radius4 pt20 text-center">
                {/* <input type="file" name="file" onChange={changeHandler} /> */}
                <GImageUpload onChange={changeHandler} />
              </div>
              {/* <GButton>
                <span className="mr5">{Svg.ImageUpload}</span>Upload profile
                photo
              </GButton> */}
              <div className="mt15 salon_note">
                <GTextarea
                  placeholder="Add note here"
                  icon={Svg.book}
                  resize={true}
                  focusBgColor="#FCB503"
                  focusBorderColor="1px solid #FCB503"
                  backgroundColor="#FCB50321"
                  borderRadius="8px"
                  color="#4D3701"
                  label="Note"
                ></GTextarea>
              </div>
            </Col>
            <Col md={9}>
              <div>
                <Row className="">
                  <Col md={6}>
                    <GIconInput
                      label="Salon name"
                      placeholder="Enter salon name"
                      type="text"
                      validationMsg={errors.salonName}
                      showvalidationMsg={errors.salonName && true}
                      name="salonName"
                      value={dataState.salonName}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </Col>

                  <Col md={3}>
                    <GIconInput
                      label="First Name"
                      placeholder="Enter first name"
                      type="text"
                      name="firstName"
                      validationMsg={errors.firstName}
                      showvalidationMsg={errors.firstName && true}
                      value={dataState.firstName}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </Col>

                  <Col md={3}>
                    <GIconInput
                      label="Last Name"
                      placeholder="Enter last name"
                      type="text"
                      name="lastName"
                      validationMsg={errors.lastName}
                      showvalidationMsg={errors.lastName && true}
                      value={dataState.lastName}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </Col>

                  <Col md={6}>
                    <GIconInput
                      label="Mobile Number"
                      placeholder="Enter mobile number"
                      type="tel"
                      name="mobile"
                      value={dataState.mobile}
                      validationMsg={errors.mobile}
                      showvalidationMsg={errors.mobile && true}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </Col>

                  <Col md={6}>
                    <GIconInput
                      label="Email"
                      placeholder="Enter email address"
                      type="email"
                      name="email"
                      value={dataState.email}
                      validationMsg={errors.email}
                      showvalidationMsg={errors.email && true}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </Col>
                  <Col md={6}>
                    <GSpacing>
                      <GPasswordInput
                        label={t("Password")}
                        name="password"
                        placeholder={t("Password")}
                        value={dataState.password}
                        onChange={(e) => handleInputChange(e)}
                        validationMsg={errors.password}
                        showvalidationMsg={errors.password && true}
                      />
                    </GSpacing>
                  </Col>

                  <Col md={6}>
                    <GIconInput
                      label="Address "
                      placeholder="Enter address"
                      type="text"
                      name="address"
                      value={dataState.address}
                      validationMsg={errors.address}
                      showvalidationMsg={errors.address && true}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </Col>
                  <AddressForm
                    dataState={dataState}
                    handleInputChange={handleInputChange}
                    errors={errors}
                  />

                  {/* <Col md={3}>
                    <div className="select_border">
                      <label className="labelInput">
                        City <span className="text-red"> * </span>
                      </label>
                      <Select
                        label="Account type *"
                        className="themeSelect"
                        classNamePrefix="themeSelect"
                        name="city"
                        value={dataState.city}
                        onChange={(e) =>handleInputChange(e)}
                      />
                    </div>
                    {errors.city && (
                      <GSpacing>
                        <span className="fs14 colorRed">{errors.city}</span>
                      </GSpacing>
                    )}
                  </Col>

                  <Col md={3}>
                    <div className="select_border">
                      <label className="labelInput">
                        Country/Region <span className="text-red"> * </span>
                      </label>
                      <Select
                        label="Account type *"
                        className="themeSelect"
                        classNamePrefix="themeSelect"
                        name="country"
                        value={dataState.country}
                        onChange={(e) =>handleInputChange(e)}
                      />
                    </div>
                    {errors.country && (
                      <GSpacing>
                        <span className="fs14 colorRed">{errors.country}</span>
                      </GSpacing>
                    )}
                  </Col>

                  <Col md={3}>
                    <div className="select_border">
                      <label className="labelInput">
                        State/Provinces <span className="text-red"> * </span>
                      </label>
                      <Select
                        label="Account type *"
                        className="themeSelect"
                        classNamePrefix="themeSelect"
                        name="state"
                        value={dataState.state}
                        onChange={(e) =>handleInputChange(e)}
                      />
                    </div>
                    {errors.state && (
                      <GSpacing>
                        <span className="fs14 colorRed">{errors.state}</span>
                      </GSpacing>
                    )}
                  </Col>

                  <Col md={3}>
                    <GIconInput
                      label="Zip/Postal Code"
                      placeholder="Enter code"
                      type="number"
                      name="postalCode"
                      value={dataState.postalCode}
                      validationMsg={errors.postalCode}
                      showvalidationMsg={errors.postalCode && true}
                      onChange={(e) =>handleInputChange(e)}
                    />
                  </Col> */}

                  <Col md={6}>
                    <div className="select_border">
                      <label className="labelInput">
                        Employee Working<span className="text-red"> * </span>
                      </label>
                      <Select
                        label="Account type *"
                        className="themeSelect"
                        classNamePrefix="themeSelect"
                        name="employee"
                        value={dataState.employee}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    {errors.employee && (
                      <GSpacing>
                        <span className="fs14 colorRed">{errors.employee}</span>
                      </GSpacing>
                    )}
                  </Col>

                  <Col md={6}>
                    <div className="select_border">
                      <label className="labelInput">
                        What type of salon do you have?
                        <span className="text-red"> * </span>
                      </label>
                      <Select
                        label="Account type *"
                        className="themeSelect"
                        classNamePrefix="themeSelect"
                        name="salontype"
                        value={dataState.salontype}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    {errors.salontype && (
                      <GSpacing>
                        <span className="fs14 colorRed">
                          {errors.salontype}
                        </span>
                      </GSpacing>
                    )}
                  </Col>

                  <Col md={6}>
                    <div className="select_border">
                      <label className="labelInput">
                        Interested Membership Plan
                        <span className="text-red"> * </span>
                      </label>
                      <Select
                        label="Account type *"
                        className="themeSelect"
                        classNamePrefix="themeSelect"
                        name="membership"
                        value={dataState.membership}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    {errors.membership && (
                      <GSpacing>
                        <span className="fs14 colorRed">
                          {errors.membership}
                        </span>
                      </GSpacing>
                    )}
                  </Col>

                  <Col md={12}>
                    <GSpacing marginTop="10px">
                      <GCheckbox
                        name="agreeTerms"
                        id="agreeTerms"
                        checked={dataState.agreeTerms}
                        onChange={(e) => handleInputChange(e)}
                        label={t("AgreePolicy")}
                      />
                    </GSpacing>
                    <GSpacing marginBottom="10px">
                      <GCheckbox
                        name="offersAccepted"
                        id="offersAccepted"
                        checked={dataState.offersAccepted}
                        onChange={(e) => handleInputChange(e)}
                        label={t("Agree")}
                      />
                    </GSpacing>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="bTop card-body">
          <Container fluid className="">
            <Row>
              <Col>
                <div className="card-body-box">
                  <GAlign align="right">
                    <GButton
                      mr="15px"
                      backgroundColor="#fff"
                      color="#000"
                      border="1px solid #707070"
                      hoverBg="#fff"
                      hoveColor="#000"
                      hoverBorder="1px solid #000"
                    >
                      Close
                    </GButton>
                    <GButton onClick={handleFormSubmit}>Save</GButton>
                  </GAlign>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default UpdateSalonRequest;
