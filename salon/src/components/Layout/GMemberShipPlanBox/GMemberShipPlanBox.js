import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";

const Wrap = styled.div`
   background-size:cover;
   background-position:center;
   background-repeat:no-repeat;
   background-image: ${(props) => `url(../../..${props.bgImage})`};
   background-color: ${(props) => (props.bgColor ? props.bgColor : "#12B0B9")};
   border: ${(props) => (props.border ? props.border : "1px solid red")};
   border-radius: ${(props) => (props.radius ? props.radius : "4px")}; 
   color:${(props) => (props.color ? props.color : "#fff")};
   position-relative;

   .color_grey{
    color: #000;
    opacity: 0.5;
   }

`;

const ButtonText = styled.div`
  background-color: ${(props) =>
    props.ButtontextbgColor ? props.ButtontextbgColor : "transparent"};
  border: ${(props) =>
    props.Buttontextborder ? props.Buttontextborder : "1px solid transparent"};
  border-radius: ${(props) =>
    props.Buttontextradius ? props.Buttontextradius : "4px"};
  color: ${(props) => (props.Buttontextcolor ? props.Buttontextcolor : "#fff")};
`;

const GMemberShipPlanBox = (props) => {
  return (
    <>
      <Wrap
        bgColor={props.backgroundColor}
        border={props.border}
        radius={props.radius}
        bgImage={props.backgroundImage}
        color={props.color}
      >
        <div className="pt20 pb20 pl20 pr20">
          <span className="salon_active">{props.Svg_active}</span>
          <Row>
            <Col md={7} className="d-flex">
              <div className="mr10">{props.Svg}</div>
              <div>
                <h5 className="mb-0 fs15">{props.title}</h5>
                <span className="fs12 color_grey">{props.days}</span>
              </div>
            </Col>
            <Col md={5}>
              <div className="fs15">
                {props.price} /{" "}
                <span className="color_grey">{props.month}</span>
              </div>
            </Col>

            <Col className="pt15 d-flex align-items-center">
              <ButtonText
                className="p-2 pointer mr10 fs14"
                ButtontextbgColor={props.ButtontextbgColor}
                Buttontextborder={props.Buttontextborder}
                Buttontextradius={props.Buttontextradius}
                Buttontextcolor={props.Buttontextcolor}
              >
                {props.Buttontext}
              </ButtonText>

              <span className="fs14">{props.subtext}</span>
            </Col>
          </Row>
        </div>
      </Wrap>
    </>
  );
};

export default GMemberShipPlanBox;
