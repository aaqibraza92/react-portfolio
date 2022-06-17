import React from "react";
import { useState } from "react";
import styled from "styled-components";
import GCheckbox from "./GCheckbox";
import GIconInput from "./GIconInput";
import GAlign from "./GAlign";
import GLink from "./GLink";
import GPasswordInput from "./GPasswordInput";
import GButton from "./GButton";
import GSpacing from "./GSpacing";
import AlertModal from "../AlertModal/AlertModal";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Svg from "../../assets/svg/Svg";
import { useTranslation } from "react-i18next";
import { userLogin } from "../../helpers/backend";
import { notify } from "react-notify-toast";
import { postAuthLogin } from "../../store/auth/login/actions";
import { useNavigate, Navigate } from "react-router-dom";
import Auth from "../../helpers/Auth/Auth";
import { useDispatch } from "react-redux";
const LoginWrapper = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 17px;
  }
`;

const GLogin = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState(
    props.state || {
      userid: "",
      password: "",
    }
  );

  const callback = (resp) => {
    console.log("respe", resp);
    if(resp && resp.status && resp.status===201){
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
    }
    if(resp && resp.status && resp.status===200){
    
    }
    if(resp && resp.status && resp.status===203){
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
     navigate('/mobile-verification');
    }

   
  };

  const [validationshow, setvalidationshow] = useState({
    userid: false,
    password: false,
  });
  const [validationMsg, setvalidationMsg] = useState({
    userid: "",
    password: "",
  });

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const submitCall = () => {
    try {
      const useridValidationIfBlank = () => {
        setvalidationshow({
          ...validationshow,
          userid: true,
        });
        setvalidationMsg({
          ...validationMsg,
          userid: "Please enter email ID or mobile number",
        });
      };

      const clearState = () => {
        setDataState({
          userid: "",
          password: "",
        });
      };

      const useridValidationlimit = () => {
        setvalidationshow({
          ...validationshow,
          userid: true,
        });
        setvalidationMsg({
          ...validationMsg,
          userid: "Please enter valid User ID",
        });
      };

      const ifpasswordblank = () => {
        setvalidationshow({
          ...validationshow,
          password: true,
        });
        setvalidationMsg({
          ...validationMsg,
          password: "Please enter password",
        });
      };

      const ifpasswordlength = () => {
        setvalidationshow({
          ...validationshow,
          password: true,
        });
        setvalidationMsg({
          ...validationMsg,
          password: "Please enter min 8 character password",
        });
      };

      if (dataState) {
        if (dataState.userid.trim() === "") {
          return useridValidationIfBlank();
        }
        if (dataState.userid.length < 4) {
          return useridValidationlimit();
        }
        if (dataState.password.trim() === "") {
          return ifpasswordblank();
        }
        if (dataState.userid.length <= 8) {
          return ifpasswordlength();
        }
      } else {
        return alert(
          "please set state in login component. component will use props.state to manage userid and password."
        );
      }
      const iData = {
        username: dataState.userid,
        password: dataState.password,
      };
      dispatch(postAuthLogin(iData, callback));

      //   userLogin(iData).then((res) => {
      //   if (res && res.status && res.status===200) {
      //     let myColor = { background: "#4bb543", text: "#FFFFFF" };
      //     notify.show("Logged in successfully", "custom", 4000, myColor);
      //     localStorage.setItem("authUser", JSON.stringify(res.data))
      //     Auth.setToken(res.data.token)
      //     clearState();
      //     setTimeout(() => {
      //       navigate('/')
      //     }, 1000);
      //   }
      //   if (res && res.status && res.status===202) {
      //     let myColor = { background: "red", text: "#FFFFFF" };
      //     notify.show("Oops! This account already in use, Please check email or mobile fields", "custom", 4000, myColor);
      //   }
      //   if (res && res.status && res.status===201) {
      //     let myColor = { background: "red", text: "#FFFFFF" };
      //     notify.show("Oops! "+res.message, "custom", 4000, myColor);
      //   }
      //   if (res && res.status && res.status===203) {
      //     let myColor = { background: "red", text: "#FFFFFF" };
      //     notify.show("Oops! "+res.message, "custom", 4000, myColor);
      //     setTimeout(() => {
      //       navigate('/mobile-verification')
      //     }, 1000);

      //   }
      // });
      // if (props.submitCall) {
      //   props.submitCall(dataState);
      // }
    } catch (e) {
      console.log(e, "Error in the GLogin.js");
    }
  };

  return (
    <LoginWrapper>
      <Container>
        <Row>
          <Col md="12" className="pt_35">
            <h2 className="lm mb30"> {t("loginAccount")}</h2>
            <Row>
              <Col md="12">
                <Row>
                  <Col md="6">
                    <div>
                      <Link className="w-100 p_10 bg_blue tab_two " to="#">
                        {Svg.facebook} <span>Facebook</span>
                      </Link>
                    </div>
                  </Col>
                  <Col md="6">
                    <div>
                      <Link
                        className="w-100 p_10 bg_border_black tab_two_g tab_two"
                        to="#"
                      >
                        {Svg.gmail} <span>Gmail</span>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md="12" className="position-relative text-center pt_35 mb20">
                <p className="mb-0 login_bg">or login with</p>
                <div className="border-bottom"></div>
              </Col>
              <Col className="pt_25" md={12}>
                <GIconInput
                  label="Mobile number/Email"
                  type="email"
                  name="email"
                  required="true"
                  placeholder="Mobile number/Email *"
                  showvalidationMsg={validationshow.userid}
                  validationMsg={validationMsg.userid}
                  value={dataState.userid}
                  onChange={(e) =>
                    setDataState({ ...dataState, userid: e.target.value })
                  }
                />
              </Col>
              <Col md={12}>
                <GPasswordInput
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  value={dataState.password}
                  showvalidationMsg={validationshow.password}
                  validationMsg={validationMsg.password}
                  onChange={(e) =>
                    setDataState({ ...dataState, password: e.target.value })
                  }
                />
              </Col>
              <Col md={12}>
                <GSpacing marginTop="10px" marginBottom="10px">
                  <GAlign align="between">
                    <div>
                      <GCheckbox
                        name="remember"
                        id="remember"
                        label="Remember me"
                      />
                    </div>

                    <div>
                      <GLink to="/reset" text="Forgot Password" />
                    </div>
                  </GAlign>
                </GSpacing>
              </Col>

              <Col md={12}>
                <GButton onClick={submitCall} width="100%">
                  Log In
                </GButton>
              </Col>
              <Col md={12} className="text-center">
                <p className="mb-0 mt25">
                  Don't have an account ? <GLink to="/sign-up" text="Sign up" />
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </LoginWrapper>
  );
};

export default GLogin;
