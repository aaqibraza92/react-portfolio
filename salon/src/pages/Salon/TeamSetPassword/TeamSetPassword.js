import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Img from '../../../assets/Img/Img';
import Svg from '../../../assets/svg/Svg';
import ForgotPasswordAction from '../../../components/Authentication/ForgotPasswordAction';
import GImage from '../../../components/Layout/GImage/GImage';
import GLink from '../../../components/Layout/GLink';

const TeamSetPassword = () => {
    return (
        <Container className="pt_45 pb_45">
      <Row className="justify-content-center">
        <Col lg={9}>
          <Row>
            <Col md="5">
              <GImage className="w-100" src={Img.signup} />
            </Col>
            <Col md="7" className="pt_35">
            <div className="mb-5">
            <Link to="/login">
              {Svg.arrowLeft} <span className="color_b ml10">Go back</span>
            </Link>
          </div>
              <ForgotPasswordAction />
              {/* <GIconInput
                label="Email/Mobile Number"
                type="email"
                name="email"
                required="true"
                placeholder="Email/Mobile Number"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <GButton className="mt-3" onClick={handleValidSubmit}>
                Request send
              </GButton> */}
              <p className="mb-0 mt25">
                Don't have an account ? <GLink to="/sign-up" text="Register" />
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    );
};

export default TeamSetPassword;