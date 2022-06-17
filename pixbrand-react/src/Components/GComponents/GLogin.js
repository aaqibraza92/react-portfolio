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

const LoginWrapper = styled.div`
 
  h3 {
    font-size: 24px;
    margin-bottom: 17px;
  }
`;

const GLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <LoginWrapper>
      <h3>Log In Account</h3>
      <GIconInput
        label="Email/mobile number *"
        type="email"
        name="email"
        placeholder="Enter email or Mobile number"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />

      <GPasswordInput
        label="Password"
        name="password"
        value={password}
        placeholder="Enter password"
        onChange={(e) => setpassword(e.target.value)}
      />

      <GSpacing marginTop= "10px" marginBottom= "10px">
      <GAlign align="between">
        <div>
          <GCheckbox name="remember" id="remember" label="Remember me" />
        </div>
        <div>
          <GLink to="#" text="Forgot Password" />
        </div>
      </GAlign>
      </GSpacing>
 
 
      <GButton width="100%">Log In</GButton>
    </LoginWrapper>
  );
};

export default GLogin;
