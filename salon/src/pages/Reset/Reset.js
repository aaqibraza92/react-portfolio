import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../assets/Img/Img";
import GIconInput from "../../components/Layout/GIconInput";
import GButton from "../../components/Layout/GButton";
import { Link } from "react-router-dom";
import Svg from "../../assets/svg/Svg";
import GLink from "../../components/Layout/GLink";
import { notify } from "react-notify-toast";
import { postForgetPwd } from "../../helpers/backend/index";
import { useTranslation } from "react-i18next";
import { useNavigate, Navigate } from "react-router-dom";
import GImage from "../../components/Layout/GImage/GImage";
import ForgotPasswordAction from "../../components/Authentication/ForgotPasswordAction";

const Reset = (props) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [username, setUserName] = useState("");
  function handleValidSubmit() {
    const iData = { username: username };
    postForgetPwd(iData).then((res) => {
      console.log("aa",res);
      if (res && res.status && res.status === 200) {
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(res.message, "custom", 4000, myColor);
        setUserName("");
        setTimeout(() => {
          navigate("/thankyou");
        }, 1000);
      } else {
        let myColor = { background: "red", text: "#FFFFFF" };
        notify.show("Oops! " + res.message[0].param+ res.message[0].msg, "custom", 4000, myColor);
      }
    });
  }

  return (
    <Container className="pt_45 pb_45">
      <Row className="justify-content-center">
        <Col lg={9}>
          <Row>
            <Col md="5">
              <GImage className="w-100" src={Img.signup} />
            </Col>
            <Col md="7" className="pt_35">
            <div className="mb-5">
            <Link to="/login">
              {Svg.arrowLeft} <span className="color_b ml10">Go back</span>
            </Link>
          </div>
              <ForgotPasswordAction />
              {/* <GIconInput
                label="Email/Mobile Number"
                type="email"
                name="email"
                required="true"
                placeholder="Email/Mobile Number"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <GButton className="mt-3" onClick={handleValidSubmit}>
                Request send
              </GButton> */}
              <p className="mb-0 mt25">
                Don't have an account ? <GLink to="/sign-up" text="Register" />
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Reset;
