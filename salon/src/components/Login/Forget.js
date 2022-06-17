import React, { useState } from 'react';
import GButton from '../GComponents/GButton';
import GIconInput from '../GComponents/GIconInput';

const Forget = () => {
    const [formdata, setformdata] = useState("");
    return (
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
    );
};

export default Forget;