import React, { useState } from "react";
import styled from "styled-components";
import Img from "../../assets/Img/Img";
import GImage from "./GImage/GImage";

const CheckboxWrapper = styled.div`
  display: block;

  input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
  }
  input:checked + label::before {
    border-color: #ff385c;
    background-color: #ff385c;
  }
  input:checked + label:after {
    transition: all 0.3s linear 0s;
    content: "";
    display: block;
    position: absolute;
    top: 16px;
    left: 22px;
    width: 5px;
    height: 12px;
    /* background-color: #ff385c; */
    border: solid #fff;
    border-top-width: medium;
    border-right-width: medium;
    border-bottom-width: medium;
    border-left-width: medium;
    border-top-width: medium;
    border-right-width: medium;
    border-bottom-width: medium;
    border-left-width: medium;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  input:checked + label {
    border-color: ${(props) => {
      return props.borderHover ? props.borderHover : "#ff385c";
    }};
  }
  label {
    position: relative;
    cursor: pointer;
    border: ${(props) => {
      return props.border ? props.border : "1px solid #e8e9e9";
    }};
    border-radius: 5px;
    padding: 4px 5px;
    margin-bottom: 5px;
    width: 100%;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
  }
  label:hover {
    border-color: ${(props) => {
      return props.borderHover ? props.borderHover : "#ff385c";
    }};
  }
  label::before {
    content: "";
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #ff385c;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 7px;
    display: inline-block;
    position: absolute;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s linear 0s;
    top: 14px;
    margin-right: 10px;
    left: 15px;
    border-radius: 50%;
  }
  .theme_img img {
    width: 100% !important;
    /* height: 127px;
  object-fit: cover; */
  }
`;

const GRadioWithRightIcon = (props) => {
  const [ischecked, setischecked] = useState(false);

  const onChange = (e) => {
    if (props.onChange) {
      props.onChange(e);
    }
    setischecked(e.target.checked);
  };

  return (
    <CheckboxWrapper ischecked={ischecked}>
      <input
        name={props.name}
        checked={props.checked}
        className={props.className}
        type="radio"
        id={props.id}
        onChange={onChange}
      />

      <label className="f16 text-center" htmlFor={props.id}>
        <div className="mb8 theme_img">
          <GImage src={Img.radio} />
        </div>
        {props.label}
      </label>
    </CheckboxWrapper>
  );
};

export default GRadioWithRightIcon;
