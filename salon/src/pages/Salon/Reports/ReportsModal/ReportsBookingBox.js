import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import GImage from "../../../../components/Layout/GImage/GImage";
import GLink from "../../../../components/Layout/GLink";

const Wrap = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#12B0B9")};
  border: ${(props) => (props.border ? props.border : "1px solid red")};
  border-radius: ${(props) => (props.radius ? props.radius : "4px")};
  color: ${(props) => (props.color ? props.color : "#fff")};

  .color_grey {
    color: #000;
    opacity: 0.5;
  }
  .text-color {
  color: #075770;
}
`;

const Textspan = styled.div`
  color: ${(props) => (props.TextColor ? props.TextColor : "#fff")};
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

const Social  = styled.div`
 
`

const ReportsBookingBox = (props) => {
  return (
    <>
      <Wrap
        bgColor={props.backgroundColor}
        border={props.border}
        radius={props.radius}
        color={props.color}
      >
        <div className="pt20 pb20 pl20 pr20">
          <Row>
            <Col md={10}>
              <div className="mb10">
                <span className="fs14  text-uppercase" textColor={props.textColor}>
                  {props.firsttext}
                </span> <span className="text-color">{props.id}</span>.
                <Textspan
                  className="fs12 text-uppercase mt-2 mb5"
                  TextColor={props.TextColor}
                >
                  {props.firstname}
                </Textspan>
                <h5 className="mb-0 fs20">{props.title}</h5>
              </div>

              <Social>
                   <span className="mr15"><GImage src={props.phone} /> <GLink color="#282A3A" to={props.link} text={props.phonenumber} /></span>
                   <span className="mr15"><GImage src={props.email} /> <GLink color="#282A3A" to={props.emaillink} text={props.emailid} /></span>
                   <span className="mr15"><GImage src={props.booktext} /> <GLink color="#282A3A" to="" text={props.alwaystext} /></span>
              </Social>
            </Col>
            <Col md={2} className="d-flex">
              <ButtonText className="p-2 pointer mr10 fs14">
                <GImage src={props.Buttontext} />
              </ButtonText>

              <ButtonText className="p-2 pointer fs14">
                <GImage src={props.Buttontext1} />
              </ButtonText>
            </Col>
          </Row>
        </div>
      </Wrap>
    </>
  );
};

export default ReportsBookingBox;
