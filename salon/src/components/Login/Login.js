import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import GLogin from "../../Components/GComponents/GLogin";
import GSignup from "../../Components/GComponents/GSignup";
import GSection from "../../Components/GComponents/GSection";
import GSpacing from "../../Components/GComponents/GSpacing";
import GSwitchTab from "../../Components/GComponents/GSwitchTab";
import GSectionTitle from "../../Components/GSectionTitle";
import GIconInput from "../../Components/GComponents/GIconInput";
import GButton from "../../Components/GComponents/GButton";

const Login = (props) => {
  return (
    <GSection>
      <Container>
        <Row>
          <Col lg={6} xl={6} md={6}>
            <div className="maxWidth80">
              <GSectionTitle
                titleSize="28px"
                title="#1 Trinidad and Tobago ondemand Service Provider platform for cleaning, painting & more."
              />

              <img src={Img.login} className="img-fluid" alt="" />
            </div>
          </Col>
          <Col lg={6} xl={6} md={6}>
            <GSpacing padding="40px" paddingTop="20px">
              <GSection background="#fff" minHeight="inherit">
                <GSpacing paddingLeft="30px" paddingRight="30px">
                  <GSwitchTab
                    align="right"
                    firstContent={<GLogin />}
                    secondContent={<GSignup />}
                  />
                </GSpacing>
              </GSection>
            </GSpacing>
          </Col>
        </Row>
      </Container>
      <Forgot />
      <ForgotSuccessText />
    </GSection>
  );
};

export default Login;

const Forgot = (props) => {
  const [formdata, setformdata] = useState("");
  //   const [formdata, setformdata] = useState({
  //   email: "",
  //   redirecturl: API.productionurl + "reset/",
  // });

  // const IsSignup = () => {
  //   props.callback(false);
  //   FormModal.hide();
  // };

  // const ifSuccessForget = () => {
  //   try {
  //     if (formdata.email.trim() === "") {
  //       return AlertModal.show(
  //         "Please enter your email id.",
  //         "Required!",
  //         () => {},
  //         "sm"
  //       );
  //     }
  //     HTTP.post(API.forgotPasswordByEmail, formdata, false, false, "").then(
  //       (res) => {
  //         if (res && res.status && res.status.toString() === "200") {
  //           AlertModal.show(
  //             <ForgotSuccessText email={formdata.email} />,
  //             "Success!",
  //             () => {},
  //             "md",
  //             false
  //           );
  //           FormModal.hide();
  //         } else {
  //           AlertModal.show(
  //             "User not found, Please register with this email id.",
  //             "Oops!",
  //             () => {},
  //             "sm",
  //             false
  //           );
  //         }
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div className="p-3">
        <h3>Forgot Password</h3>
        <p className="fs14">
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </p>

        <GIconInput
          type="email"
          placeholder="Email Address"
          value={formdata.email}
          onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
        />
        <GButton
          text="Submit"
          type="square"
          className="w-100"
          // onClick={(e) => ifSuccessForget()}
        >
          Submit
        </GButton>
        <div className="IfNotAccount text-center mt20">
          <p className="fs14 mb0">
            Don't have an account ?
            <button className="btnBlank colorBlue">
              {/* <button className="btnBlank colorOrange" onClick={() => IsSignup()}> */}
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

const ForgotSuccessText = (props) => {
  return (
    <>
      <div className="text-center">
        <img className="img-fluid" src={Img.success} alt="" className="mb20"/>
        <h2 className="f24 f700 colorBlack fBold mb10">Mail Sent</h2>
        <p className="fs14 mb5">
          Change password link has been sent to
        </p>
        {/* <p className="fs14 colorBlue">rahitheprince@gmail.com {props.email}</p> */}
        <p className="fs14 colorBlue">jrreactjs@gmail.com</p>
        <GButton>Go to mail</GButton>
      </div>
    </>
  );
};
