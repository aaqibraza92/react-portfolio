import React from "react";
import styled from "styled-components";

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
    background-color: #1f1f1f;
    border: 1px solid #FF0A2B;
  }
  input:checked + label:after {
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    content: "";
    display: block;
    position: absolute;
    top: 3px;
    left: 10px;
    width: 7px;
    height: 15px;
    border: solid #ff0a2b;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  label {
    position: relative;
    cursor: pointer;
    color: ${(props) => (props.color ? props.color : "#fff")};
  }
  label::before {
    content: "";
    -webkit-appearance: none;
    background-color: #1f1f1f;
    // border: 1px solid #FF0A2B;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 13px;
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
`;

const GCheckbox = (props) => {
  const onChange = (e) => {};

  return (
    <CheckboxWrapper>
      <input
        name={props.name}
        checked={props.checked}
        className={props.className}
        type="checkbox"
        id={props.id}
        onChange={props.onChange || onChange}
      />
      <label className="f16" htmlFor={props.id}>
        {props.label}
      </label>
    </CheckboxWrapper>
  );
};

export default GCheckbox;
