import React, { useEffect } from "react";
import GInput from "./GInput";
import GPosition from "./GPosition";
import GSpacing from "./GSpacing";

const GIconInput = (props) => {
  const onChange = (e) => {};
  const keyDown = (e) => {};
  const iconClick = (e) => {};
  const onBlur=(e)=>{};

  useEffect(()=>{
  },[])

  return (
    <>
      <style jsx="true">{`
        .giconinput_absolute {
          position: absolute;
          height: 100%;
          display: flex;
          align-items: center;
          top: 0px;
          -webkit-transition: all 0.3s ease 0s;
          transition: all 0.3s ease 0s;
        }
        .giconinput_iconLeft {
          left: 10px;
        }
        .giconinput_absolute svg {
          width: 18px;
        }
        .giconinput_iconRight {
          right: 10px;
          cursor: pointer;
        }
        .giconinput_absolute:hover {
          opacity: 0.8;
        }
        .giconinput_subText {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
          padding-left: 10px;
        }
        .giconinput_sublabel {
          font-size: 12px;
          color: #5e77d9;
        }
        .giconinput_required {
          color: red;
          font-size: 14px;
        }
        .labelInput {
          font-size: 16px;
          margin-bottom: 4px;
        }
        input{
          barder-radius:4px solid #A7A9B1;
        }
      `}</style>

      <GSpacing {...props}>
        {props.label && (
          <GPosition>
            <label htmlFor="" className="labelInput">
              {props.label}{" "} 
              {props.required && <span className="giconinput_required">*</span>}{" "}
              {props.sublabel && (
                <span className="giconinput_sublabel">({props.sublabel})</span>
              )}
            </label>
          </GPosition>
        )}

        <GPosition>
          {props.iconLeft && (
            <span className="giconinput_iconLeft giconinput_absolute">
              {props.iconLeft}
            </span>
          )}
       
          <GInput
            type={props.type}
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
            onBlur={props.onBlur || onBlur}
            onKeyDown={props.onKeyDown || keyDown}
            onKeyUp={props.onKeyUp || keyDown}
            border={props.border}
            borderStyle={props.borderStyle}
            borderColor={props.borderColor}
            shadow={props.shadow}
          />
          {
            props.validationMsg && props.showvalidationMsg &&
            <p style={{color: "#ff385c",marginTop: "4px"}}>
              {props.validationMsg}
            </p>
          }
          {props.iconRight && (
            <span
              className="giconinput_iconRight giconinput_absolute"
              onClick={props.iconClick || iconClick}
            >
              {props.iconRight}
            </span>
          )}
        </GPosition>
        {props.subtitle && (
          <GPosition>
            <span className="giconinput_subText">Sub text</span>
          </GPosition>
        )}
      </GSpacing>
    </>
  );
};

export default GIconInput;
