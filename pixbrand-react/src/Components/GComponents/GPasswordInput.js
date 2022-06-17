import React, { useState } from "react";
import GInput from "./GInput";
import styled from "styled-components";
import GSpacing from "./GSpacing";

const PasswordWrapper = styled.div`
  position: relative;
  .eyeIcon {
    top: 9px;
    right: 10px;
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    top: 0px;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }
  .labelInput {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

const GPasswordInput = (props) => {
  const [viewPassword, setViewPassword] = useState(false);
  const onChange = (e) => {};
  const keyDown = (e) => {};

  return (
    <>
    <GSpacing>
    {props.label && (
        <label htmlFor="" className="labelInput">
          {props.label}
        </label>
      )}
      <PasswordWrapper>
        <GInput
          type={viewPassword ? "text" : "password"}
          className={props.className}
          id={props.id}
          value={props.value}
          placeholder={props.placeholder}
          iconLeft={props.iconLeft ? true : false}
          onChange={props.onChange || onChange}
          name={props.name}
          disabled={props.disabled}
          readOnly={props.readOnly}
          autoComplete={props.autoComplete || "Off"}
          onKeyDown={props.onKeyDown || keyDown}
        />
        <div
          className="eyeIcon"
          onClick={(e) => setViewPassword(!viewPassword)}
        >
          {viewPassword ? Icons.eyeCut : Icons.eye}
        </div>
      </PasswordWrapper>
    </GSpacing>
   
    </>
  );
};

export default GPasswordInput;

const Icons = {
  eyeCut: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 31.508 27"
      >
        <path
          id="Icon_ionic-md-eye-off"
          data-name="Icon ionic-md-eye-off"
          d="M18.007,10.181a7.142,7.142,0,0,1,7.165,7.109,6.838,6.838,0,0,1-.513,2.6l4.184,4.148a16.809,16.809,0,0,0,4.915-6.75A16.968,16.968,0,0,0,12.291,7.622l3.094,3.073A7.084,7.084,0,0,1,18.007,10.181ZM3.684,6.307l3.27,3.241.661.654A16.729,16.729,0,0,0,2.25,17.29a16.993,16.993,0,0,0,22.029,9.464l.6.6,4.2,4.148L30.9,29.693,5.5,4.5ZM11.6,14.161l2.222,2.2a4.028,4.028,0,0,0-.113.921,4.275,4.275,0,0,0,4.3,4.261,4.041,4.041,0,0,0,.928-.112l2.222,2.2a7.127,7.127,0,0,1-10.315-6.356A7.023,7.023,0,0,1,11.6,14.161Zm6.173-1.1,4.514,4.479.028-.225a4.275,4.275,0,0,0-4.3-4.261Z"
          transform="translate(-2.25 -4.5)"
          fill="#47BBD0"
        />
      </svg>
    </>
  ),
  eye: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 31.5 21.234"
      >
        <path
          id="Icon_ionic-md-eye"
          data-name="Icon ionic-md-eye"
          d="M18,7.383A16.936,16.936,0,0,0,2.25,18a16.991,16.991,0,0,0,31.5,0A16.936,16.936,0,0,0,18,7.383Zm0,17.7A7.081,7.081,0,1,1,25.158,18,7.139,7.139,0,0,1,18,25.08Zm0-11.327A4.247,4.247,0,1,0,22.3,18,4.285,4.285,0,0,0,18,13.753Z"
          transform="translate(-2.25 -7.383)"
          fill="#47BBD0"
        />
      </svg>
    </>
  ),
};
