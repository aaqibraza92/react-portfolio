import React from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  display: block;
  display: ${(props) => {
    return props.display ? props.display : "inline-block";
  }};
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
    background-color: #ff385c;
  }
  input:checked + label:after {
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    content: "";
    display: block;
    position: absolute;
    top: 5px;
    left: 7px;
    width: 5px;
    height: 12px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  label {
    position: relative;
    cursor: pointer;
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
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 4px;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    top: -1px;
    margin-right: 10px;
  }
  .checkboxgreen + label::before {
    content: "";
    background-color: #E2E3E9;
    width: 38px;
    position: absolute;
    text-align: center;
    left: 0px;
    height: 38px;
    z-index: -1;
    border: 2px solid #E2E3E9;
    margin-right: 12px;
  }
  .z-index_v {
    z-index: 0;
  }
  
  
  input.checkboxgreen:checked + label::before {
      background-color: #5CB84B;
      border: 2px solid #5CB84B;
  }
  input.checkboxgreen:checked + label {
      color: #fff;
  }
  
  input.checkboxgreen:checked + label:after {
      -webkit-transition: all 0.3s linear 0s;
      -moz-transition: all 0.3s linear 0s;
      transition: all 0.3s linear 0s;
      content: "";
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 0px;
      height: 0px;
      border: solid #fff;
      border-width: 0 0px 0px 0;
      transform: rotate(45deg);
    }
    // Vishal Added 
    .black_border + label::before {
      content: "";
      background-color: transparent;
      border: 2px solid #000;
    }
    input.black_border:checked + label::before {
        background-color: #FF385C;
        border: 2px solid #FF385C;
    }
`;

const GCheckbox = (props) => {
  const onChange = (e) => {};

  return (
    <CheckboxWrapper>
      <input
        name={props.name}
        checked={props.checked}
        defaultChecked={props.defaultChecked}
        className={props.className}
        type="checkbox"
        id={props.id}
        onChange={props.onChange || onChange}
      />
      <label className="f16 text-capitalize z-index_v" htmlFor={props.id}>
        {props.label}
      </label>
    </CheckboxWrapper>
  );
};

export default GCheckbox;
