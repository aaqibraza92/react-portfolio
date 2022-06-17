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
        {props.validationMsg && props.showvalidationMsg && (
          <p style={{ color: "#FF385C", marginTop: "4px" }}>
            {props.validationMsg}
          </p>
        )}
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
        width="18.121"
        height="18.121"
        viewBox="0 0 18.121 18.121"
      >
        <g
          id="Group_59882"
          data-name="Group 59882"
          transform="translate(-1108.803 -477.939)"
        >
          <g
            id="Icon_feather-eye"
            data-name="Icon feather-eye"
            transform="translate(1108.363 475)"
          >
            <path
              id="Path_26970"
              data-name="Path 26970"
              d="M1.5,11.818S4.409,6,9.5,6s8,5.818,8,5.818-2.909,5.818-8,5.818S1.5,11.818,1.5,11.818Z"
              transform="translate(0 0)"
              fill="none"
              stroke="#5b5d6b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              id="Path_26971"
              data-name="Path 26971"
              d="M17.864,15.682A2.182,2.182,0,1,1,15.682,13.5,2.182,2.182,0,0,1,17.864,15.682Z"
              transform="translate(-6.182 -3.864)"
              fill="none"
              stroke="#5b5d6b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
          <g id="Group_59881" data-name="Group 59881">
            <g
              id="Icon_feather-eye-off"
              data-name="Icon feather-eye-off"
              transform="translate(1108.363 477.5)"
            >
              <path
                id="Path_26972"
                data-name="Path 26972"
                d="M13.82,16.138a7.324,7.324,0,0,1-4.32,1.5c-5.091,0-8-5.818-8-5.818A13.418,13.418,0,0,1,5.18,7.5M7.973,6.175A6.633,6.633,0,0,1,9.5,6c5.091,0,8,5.818,8,5.818a13.454,13.454,0,0,1-1.571,2.32m-4.887-.778a2.182,2.182,0,1,1-3.084-3.084"
                transform="translate(0 -2.318)"
                fill="none"
                stroke="#282a3a"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                id="Path_26973"
                data-name="Path 26973"
                d="M1.5,1.5l16,16"
                transform="translate(0 0)"
                fill="none"
                stroke="#282a3a"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  ),
  eye: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17.5"
        height="13.136"
        viewBox="0 0 17.5 13.136"
      >
        <g
          id="Group_59880"
          data-name="Group 59880"
          transform="translate(-846.113 -480.25)"
        >
          <path
            id="Path_26970"
            data-name="Path 26970"
            d="M1.5,11.818S4.409,6,9.5,6s8,5.818,8,5.818-2.909,5.818-8,5.818S1.5,11.818,1.5,11.818Z"
            transform="translate(845.363 475)"
            fill="none"
            stroke="#5b5d6b"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            id="Path_26971"
            data-name="Path 26971"
            d="M17.864,15.682A2.182,2.182,0,1,1,15.682,13.5,2.182,2.182,0,0,1,17.864,15.682Z"
            transform="translate(839.182 471.136)"
            fill="none"
            stroke="#5b5d6b"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </>
  ),
};
