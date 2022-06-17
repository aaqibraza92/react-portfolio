import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import GIconInput from "../Layout/GIconInput";
import GPasswordInput from "../Layout/GPasswordInput";
import GCheckbox from "../Layout/GCheckbox";
import GSpacing from "../Layout/GSpacing";
import GButton from "../Layout/GButton";
import Select from "react-select";
import Img from "../../assets/Img/Img";
import GImage from "../Layout/GImage/GImage";
import Autocomplete from "react-google-autocomplete";
import { postSalonSignup } from "../../store/auth/salonsignup/actions";
import { notify } from "react-notify-toast";
import { checkMobAvailable, checkEmailAvailable } from "../../helpers/backend";
import { useNavigate } from "react-router-dom";
import FileUploadWithName from "../FileUploadWithName/FileUploadWithName";
import Svg from "../../assets/svg/Svg";
import * as salonurl from "../../helpers/apiurls/salon";
import { HOME_URL } from "../../helpers/apiurls";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AuthGetMembershipList } from "../../store/admin/membershipNameList/actions";
import AddressForm from "../AddressForm/AddressForm";

const LoginWrapper = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 17px;
  }
`;

let pattern = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i;

const shopListData = [
  { value: "Shop", label: "Shop" },
  { value: "Mobile", label: "Mobile" },
  { value: "Home", label: "Home" },
];

const Registration = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthGetMembershipList());
  }, [dispatch]);

  const memnershipName = useSelector((state) => {
    return (
      state &&
      state.getMembershipListsRedux.getMembershipLists &&
      state.getMembershipListsRedux.getMembershipLists
    );
  });
  const [membershipPlanlist, setmembershipPlanlist] = useState([]);
  useEffect(() => {
    var appendPlans = [];
    memnershipName &&
      memnershipName.map((element, idnex) => {
        appendPlans.push({
          value: element._id,
          label: element.planName,
        });
      });
    setmembershipPlanlist(appendPlans);
    //setselectedbusiness(appendPlans[0]);
  }, [memnershipName]);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  document.body.dir = i18n.dir();
  const [validations, setValidations] = React.useState({});
  const [salonname, setsalonname] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [profileimg, setprofileimg] = useState(null);
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");
  const [employee, setemployee] = useState("");
  const [salontype, setsalontype] = useState({ value: "", label: "" });
  const [selectedmembershipPlan, setselectedmembershipPlan] = useState({
    value: "",
    label: "",
  });
  const [address, setaddress] = useState("");
  const [lat, setlat] = useState("");
  const [long, setlong] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [addr, setaddr] = useState("");
  const [postalcode, setpostalcode] = useState("");
  const [agreeTerms, setagreeTerms] = useState(false);
  const [offersAccepted, setoffersAccepted] = useState(false);
  const [errors, seterrors] = useState({});
  const [dataState, setDataState] = useState({
    country: "",
    state: "",
    city: "",
    postalCode: ""
  });

  const getCallback = (val) => {
    setprofileimg(val[0]);
  };




  const validate = () => {
    const errors = {};
    if (salonname && salonname.trim() === "") {
      errors.salonname = t("Salonnamemsg");
    } else if (salonname === null) {
      errors.salonname = t("Salonnamemsg");
    } else if (salonname === undefined) {
      errors.salonname = t("Salonnamemsg");
    } else if (salonname === "") {
      errors.salonname = t("Salonnamemsg");
    }
    if (firstname && firstname.trim() === "") {
      errors.firstname = t("Firstnamemsg");
    } else if (firstname === null) {
      errors.firstname = t("Firstnamemsg");
    } else if (firstname === undefined) {
      errors.firstname = t("Firstnamemsg");
    } else if (firstname === "") {
      errors.firstname = t("Firstnamemsg");
    }
    if (lastname && lastname.trim() === "") {
      errors.lastname = t("Lastnamemsg");
    } else if (lastname === null) {
      errors.lastname = t("Lastnamemsg");
    } else if (lastname === undefined) {
      errors.lastname = t("Lastnamemsg");
    } else if (lastname === "") {
      errors.lastname = t("Lastnamemsg");
    }
    if (mobile && mobile.trim() === "") {
      errors.mobile = t("Mobilemsg");
    } else if (mobile === undefined) {
      errors.mobile = t("Mobilemsg");
    } else if (mobile === null) {
      errors.mobile = t("Mobilemsg");
    } else if (mobile === "") {
      errors.mobile = t("Mobilemsg");
    }
    if (email && email.trim() === "") {
      errors.email = t("Emailmsg");
    } else if (email === undefined) {
      errors.email = t("Emailmsg");
    } else if (!pattern.test(email)) {
      errors.email = t("Emailmsg");
    }

    if (dataState.city === "" || dataState.city === null) {
      errors.city = t("Citymsg");
    }
    if (dataState.state === "" || dataState.state === null) {
      errors.state = t("Statemsg");
    }
    if (employee.trim() === null || employee.trim() === "") {
      errors.employee = t("Employeemsg");
    }

    if (postalcode && postalcode.trim() === "") {
      errors.postalcode = t("Postalcodemsg");
    } else if (postalcode === undefined) {
      errors.postalcode = t("Postalcodemsg");
    } else if (postalcode === null) {
      errors.postalcode = t("Postalcodemsg");
    } else if (postalcode === "") {
      errors.postalcode = t("Postalcodemsg");
    }
    if (address === "" || address === null) {
      errors.address = "Please enter address";
    }
    if (dataState.country === "" || dataState.country === null) {
      errors.country = "Please enter country";
    }

    if (password && password.trim() === "") {
      errors.password = t("Passwordmsg");
    } else if (password === undefined) {
      errors.password = t("Passwordmsg");
    } else if (password === null) {
      errors.password = t("Passwordmsg");
    } else if (password === "") {
      errors.password = t("Passwordmsg");
    }
    else if (password.length <= 7) {
      errors.password = "Please enter minimum 8 character of password";
    }

    if (confirmpassword && confirmpassword.trim() === "") {
      errors.confirmpassword = t("Confirmpasswordmsg");
    } else if (confirmpassword === undefined) {
      errors.confirmpassword = t("Confirmpasswordmsg");
    } else if (confirmpassword === null) {
      errors.confirmpassword = t("Confirmpasswordmsg");
    } else if (confirmpassword === "") {
      errors.confirmpassword = t("Confirmpasswordmsg");
    } else if (password !== confirmpassword) {
      errors.confirmpassword = t("Passwordnotmatchmsg");
    }
    else if (confirmpassword.length <= 7) {
      errors.confirmpassword = "Please enter minimum 8 character of password";
    }

    if (salontype && salontype.value==="") {
      errors.salontype = t("Salontypemsg");
    }

    if (selectedmembershipPlan && selectedmembershipPlan.value==="") {
      errors.membershipPlanType = t("Plantype");
    }

    // if (selectedmembershipPlan && selectedmembershipPlan.length <= 0) {
    //   errors.membershipPlanType = t("PlanType");
    // }

    seterrors(errors);
    return errors;
  };

  const checkEmail = (data) => {
    const iData = {
      email: data,
    };
    checkEmailAvailable(iData).then((res) => {
      if (res && res.status && res.status === 201) {
        let myColor = { background: "red", text: "#FFFFFF" };
        notify.show("Oops! " + res.message, "custom", 4000, myColor);

        setemail("");
      }
      if (res && res.status && res.status === 202) {
        let myColor = { background: "red", text: "#FFFFFF" };
        notify.show(
          "Oops! Please enter correct email",
          "custom",
          4000,
          myColor
        );
        setemail("");
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
        setmobile("");
      }
      if (res && res.status && res.status === 200) {
      }
    });
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    console.log("val", value);
    setDataState({ ...dataState, [name]: value });

 
    
  };

  const clearStates = () => {
    salonname("");
    firstname("");
    setlastname("");
    setmobile("");
    setemail("");
    setcity("");
    setstate("");
    setcountry("");
    setemployee("");
    setsalontype("");
    setaddress("");
    setpassword("");
    setconfirmpassword("");
    setpostalcode("");
  };
  const actionCallback = (message) => {
    if (message.status === 200) {
      let myColor = { background: "#4bb543", text: "#FFFFFF" };
      notify.show(message.message, "custom", 5000, myColor);
      navigate("/salon/mobile-verification", { state: { mobile: mobile } });
    }
    if (message.status === 202) {
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      notify.show("Please fill required fields", "custom", 5000, myColor);
      // navigate("/salon/mobile-verification", { state: { mobile: mobile } });
    }
  };
  const onSubmitHandler = (e) => {
    
    validate();
    const iData = new FormData();
    iData.append("salonName", salonname);
    iData.append("firstName", firstname);
    iData.append("lastName", lastname);
    iData.append("image", profileimg);
    iData.append("mobile", mobile);
    iData.append("email", email);
    iData.append("postalCode", dataState.postalCode);
    iData.append("password", confirmpassword);
    iData.append("acceptTermsPolicy", agreeTerms);
    iData.append("acceptMarketingEmail", offersAccepted);
    iData.append("address", address);
    iData.append("country", dataState.country);
    iData.append("state", dataState.state);
    iData.append("city", dataState.city);
    iData.append("employees", employee);
    iData.append("businessType", salontype);
    iData.append("interestedmembershipid", selectedmembershipPlan);

    //iData.append("coordinates[0]",cordinates);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    axios.post(HOME_URL + "/salon/signup", iData, options).then((res) => {
      console.log("submit", res);
      if (res && res.data.status && res.data.status === 200) {
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(res.message, "custom", 5000, myColor);
        navigate("/salon/mobile-verification", { state: { mobile: mobile } });
      }
    });
  };

  return (
    <LoginWrapper className="pt_45 pb_45">
      {console.log("validations", validations)}
      <div className="dNoneXs dNoneMd">
        <GImage
          src={Img.flowergroup}
          style={{
            position: "absolute",
            top: "100px",
            width: "100%",
            zIndex: -1,
          }}
        ></GImage>
      </div>
      <Container className="sign_up_main">
        <Row className="align-items-center justify-content-center">
          <Col lg={6} md={12}>
            <div className="text-center mb40 mobMb20">
              <h2 className="fs45 mobFs20 mb20  mobMb10 fw600 lm">
                {t("Work")}
              </h2>
              <p className="mb0 fs15 colorRed">{t("Presentation")}</p>
            </div>

            <Row>
              <Col md={12}>
                <GIconInput
                  label={t("Salonname")}
                  type="text"
                  name="salonname"
                  placeholder={t("Salonname")}
                  value={salonname}
                  onChange={(e) => setsalonname(e.target.value)}
                  validationMsg={errors.salonname}
                  showvalidationMsg={errors.salonname && true}
                />
              </Col>

              <Col md={6}>
                <GIconInput
                  label={t("Firstname")}
                  type="text"
                  name="firstname"
                  placeholder={t("Firstname")}
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  validationMsg={errors.firstname}
                  showvalidationMsg={errors.firstname && true}
                />
              </Col>

              <Col md={6}>
                <GIconInput
                  label={t("Lastname")}
                  type="text"
                  name="Lastname"
                  placeholder={t("Lastname")}
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                  validationMsg={errors.lastname}
                  showvalidationMsg={errors.lastname && true}
                />
              </Col>

              <Col md={12}>
                <FileUploadWithName
                  label={t("Profilephoto")}
                  iconright={Svg.input}
                  msgtopRight="Can upload a photo upto 5MB"
                  id="profilephoto"
                  name="profilephoto"
                  callback={getCallback}
                />
              </Col>

              <Col md={6}>
                <GIconInput
                  label={t("Email")}
                  type="email"
                  name="email"
                  placeholder={t("Email")}
                  value={email}
                  onBlur={(e) => checkEmail(e.target.value)}
                  onChange={(e) => setemail(e.target.value)}
                  validationMsg={errors.email}
                  showvalidationMsg={errors.email && true}
                />
              </Col>

              <Col md={6}>
                <GIconInput
                  label={t("Mobile")}
                  type="tel"
                  name="mobile"
                  onBlur={(e) => checkMobile(e.target.value)}
                  onKeyPress={(event) => {
                    if (!/^\d*[]?\d{0,1}$/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  placeholder={t("Mobile")}
                  value={mobile}
                  onChange={(e) => setmobile(e.target.value)}
                  validationMsg={errors.mobile}
                  showvalidationMsg={errors.mobile && true}
                />
              </Col>

              <Col md={12}>
                <GIconInput
                  label="Address"
                  type="text"
                  name="Address"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  validationMsg={errors.address}
                  showvalidationMsg={errors.address && true}
                />
              </Col>

              <Col md={12}>
                <Row>
                <AddressForm
                  col={6}
                  dataState={dataState}
                  handleInputChange={handleInputChange}
                  errors={errors}
                />
                </Row>
              
              </Col>

              {/* <Col md={6}>
                <GSpacing>
                  <GIconInput
                    label="City"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    validationMsg={errors.city}
                    showvalidationMsg={errors.city && true}
                  />
                
                </GSpacing>
              </Col>

              <Col md={6}>
                <GSpacing>
                  <GIconInput
                    label={t("State")}
                    type="text"
                    name="state"
                    placeholder={t("State")}
                    value={state}
                    onChange={(e) => setstate(e.target.value)}
                  />
                </GSpacing>
              </Col>

              <Col md={6}>
                <GSpacing>
                  <GIconInput
                    label={t("Country")}
                    validationMsg={errors.country}
                    showvalidationMsg={errors.country && true}
                    type="text"
                    name="country"
                    placeholder={t("Country")}
                    value={country}
                    onChange={(e) => setcountry(e.target.value)}
                  />
                </GSpacing>
              </Col> */}

              {/* <Col md={6}>
                <GSpacing>
                  <GIconInput
                    label={t("Zip")}
                    type="number"
                    name="postalcode"
                    placeholder={t("Zip")}
                    value={postalcode}
                    onChange={(e) => setpostalcode(e.target.value)}
                    validationMsg={errors.postalcode}
                    showvalidationMsg={errors.postalcode && true}
                  />
                </GSpacing>
              </Col> */}

              <Col md={12}>
                <GSpacing>
                  <GIconInput
                    label={t("Employee")}
                    type="number"
                    name="postalcode"
                    placeholder={t("Employee")}
                    value={employee}
                    onChange={(e) => setemployee(e.target.value)}
                    validationMsg={errors.employee}
                    showvalidationMsg={errors.employee && true}
                  />
                </GSpacing>
              </Col>

              <Col md={6}>
                <GSpacing>
                  <GPasswordInput
                    label={t("Password")}
                    name="password"
                    placeholder={t("Password")}
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    validationMsg={errors.password}
                    showvalidationMsg={errors.password && true}
                  />
                </GSpacing>
              </Col>

              <Col md={6}>
                <GSpacing>
                  <GPasswordInput
                    label={t("ConfirmPassword")}
                    name="confirmPassword"
                    placeholder={t("ConfirmPassword")}
                    value={confirmpassword}
                    onChange={(e) => setconfirmpassword(e.target.value)}
                    validationMsg={errors.confirmpassword}
                    showvalidationMsg={errors.confirmpassword && true}
                  />
                </GSpacing>
              </Col>

              <Col md={12}>
                <GSpacing>
                  <p className="fs15 colorBlack mb7">{t("SalonType")}</p>
                  <div className="cbd-select">
                    <Select
                      label="Employee"
                      className="w-100 themeSelect "
                      classNamePrefix="themeSelect"
                      value={salontype.value}
                      placeholder={<div>{t("SalonType")}</div>}
                      options={shopListData}
                      defaultValue={salontype.value}
                      onChange={(e) => {
                        setsalontype(e.value);
                      }}
                    />
                  </div>
                  {errors.salontype && (
                    <GSpacing>
                      <span className="fs14 colorRed">{errors.salontype}</span>
                    </GSpacing>
                  )}
                </GSpacing>
              </Col>

              <Col md={12}>
                <GSpacing>
                  <p className="fs15 colorBlack mb7">
                    Interested Membership Plan *
                  </p>
                  <div className="cbd-select">
                    <Select
                      label=" Interested Membership Plan"
                      className="w-100 themeSelect "
                      classNamePrefix="themeSelect"
                      value={selectedmembershipPlan.value}
                      placeholder={<div>Interested Membership Plan</div>}
                      options={membershipPlanlist}
                      defaultValue={selectedmembershipPlan.value}
                      onChange={(e) => {
                        setselectedmembershipPlan(e.value);
                      }}
                    />
                  </div>
                  {errors.membershipPlanType && (
                    <GSpacing>
                      <span className="fs14 colorRed">
                        {errors.membershipPlanType}
                      </span>
                    </GSpacing>
                  )}
                </GSpacing>
              </Col>

              <Col md={12}>
                <GSpacing marginTop="10px">
                  <GCheckbox
                    name="agreeTerms"
                    id="agreeTerms"
                    checked={agreeTerms}
                    onChange={(e) => setagreeTerms(e.target.checked)}
                    // onChange={(e) =>
                    //   setagreeTerms({
                    //     agreeTerms: !agreeTerms,
                    //   })
                    // }
                    label={t("AgreePolicy")}
                  />
                </GSpacing>
              </Col>

              <Col md={12}>
                <GSpacing marginBottom="10px">
                  <GCheckbox
                    name="offersAccepted"
                    id="offersAccepted"
                    checked={offersAccepted}
                    // onChange={(e) =>
                    //   setoffersAccepted({
                    //     offersAccepted: !offersAccepted,
                    //   })
                    // }
                    onChange={(e) => setoffersAccepted(e.target.checked)}
                    label={t("Agree")}
                  />
                </GSpacing>
              </Col>

              <Col md={12}>
                <GButton
                  onClick={onSubmitHandler}
                  style={{
                    pointerEvents: agreeTerms === false && "none",
                    opacity: agreeTerms === false && 0.5,
                  }}
                  className={`${agreeTerms ? "" : "disableButton"}`}
                  width="100%"
                >
                  {t("CreateAccount")}
                </GButton>
              </Col>

              <GSpacing marginTop="25px">
                <p className="fs14 mb0 colorLightGrey text-center">
                  {t("Captcha")}
                </p>
              </GSpacing>
            </Row>
          </Col>
        </Row>
      </Container>
    </LoginWrapper>
  );
};

export default Registration;

// For Your Business Header //
// const ForYourBusinessHeader = () => {
//   return (
//     <>
//       <section className="pt-3 pb-3 bg_theme border-bottom">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={3}>
//               <Link to="/">
//                 <GImage src={Img.logo.default} alt="logo" />
//               </Link>
//             </Col>
//             <Col md={6}>
//               <nav role="navigation" className="primary-navigation text-center">
//                 <ul className="pl-0 mb-0">
//                   <li>
//                     <Link to="#">Solutions</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Features</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Pricing</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Contact</Link>
//                   </li>
//                 </ul>
//               </nav>
//             </Col>
//             <Col className="text-end" md={3}>
//               <Link to="#">
//                 <GButton>Become a partner</GButton>
//               </Link>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };
