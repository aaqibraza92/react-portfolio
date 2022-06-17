import React from "react";
import GSignup from "../../components/Layout/GSignup";
import Img from "../../assets/Img/Img";
import { Col, Container, Row } from "reactstrap";
import GImage from "../../components/Layout/GImage/GImage";

const Signup = () => {
  return (
    <Container className="pt_45 pb_45">
      <Row className="align-items-center">
        <Col className="m-auto" md="10">
          <Row>
            <Col md="5">
              <GImage className="w-100" src={Img.signup} />
            </Col>
            <Col md="7">
              <GSignup />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
