import React, { useState } from "react";
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
    border-color: #47bbd0;
  }
  input:checked + label:after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 100%;
    -webkit-transition: all 0.5s ease;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    border: 4px solid #47bbd0;
    padding: 7px;
    border-color: ${(props) => {
      return props.borderHover ? props.borderHover : "#47bbd0";
    }};
  }
  input:checked + label {
    border-color: ${(props) => {
      return props.borderHover ? props.borderHover : "#47bbd0";
    }};
  }
  label {
    position: relative;
    cursor: pointer;
    border: ${(props) => {
      return props.border ? props.border : "1px solid #e8e9e9";
    }};
    border-radius: 5px;
    padding: 8px 10px;
    margin-bottom: 5px;
    width: 100%;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
  }
  label:hover {
    border-color: ${(props) => {
      return props.borderHover ? props.borderHover : "#47bbd0";
    }};
  }
  label::before {
    content: "";
    -webkit-appearance: none;
    background-color: transparent;
    border: 1px solid #47bbd0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 100%;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    top: -1px;
    margin-right: 10px;
  }
`;

const GRadio = (props) => {
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
      <label className="f16" htmlFor={props.id}>
        {props.label}
      </label>
    </CheckboxWrapper>
  );
};

export default GRadio;
