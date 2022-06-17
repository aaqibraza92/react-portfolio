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
import { Col, Row } from "reactstrap";
import AlertModal from "../AlertModal/AlertModal";

const LoginWrapper = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 17px;
  }
`;

const GSignup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const sendForm=()=>{
      if(firstname.trim()===""){
         return  AlertModal.show("Please fill required feilds","Please fill first name fields");
      }
      
      try{
      
      }catch(e){

      }
  }

  return (
    <LoginWrapper>
      <h3>Signup Account</h3>

      <Row>
        <Col lg={6} md={6}>
          <GIconInput
            label="First name"
            type="text"
            name="firstname"
            placeholder="Enter first name"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
        </Col>

        <Col lg={6} md={6}>
          <GIconInput
            label="Last name"
            type="text"
            name="Lastname"
            placeholder="Enter Last name"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
        </Col>
      </Row>

      <GIconInput
        label="Email"
        type="email"
        name="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <GIconInput
        label="Mobile number"
        type="mobile"
        name="mobile"
        placeholder="Enter mobile number"
        value={mobile}
        onChange={(e) => setmobile(e.target.value)}
      />
      <GPasswordInput
        label="Password"
        name="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />

      <GPasswordInput
        label="Confirm Password"
        name="confirmPassword"
        placeholder="Enter Confirm Password"
        value={confirmpassword}
        onChange={(e) => setconfirmpassword(e.target.value)}
      />

      <GSpacing marginTop="10px" marginBottom="10px">
            <GCheckbox name="remember" id="remember" label="I Agree to the Terms of Service and Privacy Policy" />
      </GSpacing>

      <GButton onClick={()=>sendForm()} width="100%">Create an Account</GButton>
    </LoginWrapper>
  );
};

export default GSignup;
