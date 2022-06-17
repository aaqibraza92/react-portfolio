import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import GInput from "./GInput";
import GPosition from "./GPosition";
import GSpacing from "./GSpacing";

const GHorizontalInput = (props) => {
  const onChange = (e) => {};
  const keyDown = (e) => {};
  const iconClick = (e) => {};

  useEffect(() => {}, []);

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
          font-size: 15px;
          color: #52585b;
        }
        input {
          barder-radius: 4px solid #a7a9b1;
        }
      `}</style>

      {props.label && (
        <GPosition>
            <Row className="align-items-center">
              <Col md={4} className="text-end">
                <label htmlFor="" className="labelInput">
                  {props.label}
                  {props.required && (
                    <span className="giconinput_required">*</span>
                  )}
                  {props.sublabel && (
                    <span className="giconinput_sublabel">
                      ({props.sublabel})
                    </span>
                  )}
                </label>
              </Col>
              <Col md={8}>
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
                    onKeyDown={props.onKeyDown || keyDown}
                    onKeyUp={props.onKeyUp || keyDown}
                  />
                  {props.validationMsg && props.showvalidationMsg && (
                    <p style={{ color: "#ff385c", marginTop: "4px" }}>
                      {props.validationMsg}
                    </p>
                  )}
                  {props.iconRight && (
                    <span
                      className="giconinput_iconRight giconinput_absolute"
                      onClick={props.iconClick || iconClick}
                    >
                      {props.iconRight}
                    </span>
                  )}
                </GPosition>
              </Col>
            </Row>
        </GPosition>
      )}
    </>
  );
};

export default GHorizontalInput;
