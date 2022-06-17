import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../../assets/Img/Img";
import GImage from "../../../Layout/GImage/GImage";

const HeaderWithLogo = () => {
  return (
    <section className="pt-3 pb-3 bg_theme border-bottom">
      <Container>
        <Row>
          <Col>
            <Link to="/">
              <GImage src={Img.logo.default} alt="logo" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeaderWithLogo;
