import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../Assets/Svg/Svg";
import "./Footer.css";
import GPara from "../GComponents/GPara/GPara";
import GLink from "../GComponents/GLink/GLink";
import GSectionTitle from "../GComponents/GSectionTitle";
import Slide from "react-reveal/Slide";
const Footer = (props) => {
  const [year,setyear]=useState(null);

  useEffect(()=>{
    const currentYear=new Date().getFullYear()
    setyear(currentYear);
  })
  return (
    <>
      {/* {props.footer && props.footer === 1 && (
    
      )} */}

      {!props.footer && (
        <section className="bgWhite pt120 pb30 mobPt40">
          <Container className="mb30 ">
          
            <Row>
              <Col lg={8} xl={10}>
                <h2 className="colorBlack fs60 tabFs40  tabLgFs40 mobFs32 mb60 mobMb30">
                  <Slide bottom >
                    Let’s get on a newfound journey together and make an impact!
                  </Slide>
                </h2>
              </Col>
            </Row>

            <Row className="gy-3">
              <Col lg={7} xs={12} md={7}>
                <Slide bottom >
                  <GPara color="#111111" fs="17px">
                    Drop us a call, mail, or DM on our social media channels.
                    Let’s find out how can we bond together and take us both
                    forward!
                  </GPara>
                </Slide>
              </Col>
              <Col lg={5} xs={12} md={5}>
                <Slide bottom >
                  <GLink
                    className="mobJustifyContentStart"
                    itemAlign="right"
                    buttonView
                    text="Contact Us"
                    align="between"
                    to="#"
                    width="200px"
                    icon={Svg.arrowRight}
                    radius="30px"
                  />
                </Slide>
              </Col>
            </Row>
            <div className="lineAnimate1 pt20 pb30 mb45"></div>
            <Row className="gy-4">
              <Col lg={6} xs={12} md={6}>
                <Slide bottom >
                  <div className="footerContact">
                    <GSectionTitle
                      title="E-MAIL"
                      fsT="14px"
                      titlecolor="#FF0A2B"
                      fwt="bold"
                      fsTitleMob="12px"
                    />
                    <GLink
                      top="-5px"
                      hoverColor="#FF0A2B"
                      color="#111111"
                      fs="24px"
                      text="start@pixbrand.in"
                      align="between"
                      to="mailto:start@pixbrand.in"
                      icon={Svg.arrowDiagnal}
                    />
                  </div>
                </Slide>
              </Col>
              <Col lg={6} xs={12} md={6}>
                <Slide bottom >
                  <div className="footerContact">
                    <GSectionTitle
                      title="PHONE NUMBER"
                      fsT="14px"
                      titlecolor="#FF0A2B"
                      fwt="bold"
                      fsTitleMob="12px"
                    />
                    <GLink
                      top="-5px"
                      hoverColor="#FF0A2B"
                      color="#111111"
                      fs="24px"
                      text="+91 9876 543 210"
                      to="tel:+91 9876 543 210"
                    />
                  </div>
                </Slide>
              </Col>
            </Row>
          </Container>
          <section className="mt120 mobMt30">
            <Container>
              <Row className="align-items-center">
                <Col lg={3} md={12} className="ord">
                  <div>
                    <p className="fs12 mb0 colorGrey ">
                      © {year} Pix Brand All rights reserved.
                    </p>
                  </div>
                </Col>
                <Col lg={3} md={12}>
                  {/* <ul className="socialLinks ml40 ml10Tab mlLgTab12"> */}
                  <ul className="socialLinks">
                    <li>
                      <GLink
                        className="runningLine"
                        hoverColor="#FF0A2B"
                        color="#7d7d7d"
                        fs="12px"
                        text="Privacy policy "
                        to="/privacy-policy"
                        mrtextSpan="0px"
                      />
                    </li>
                    <li>
                      <GLink
                      className="runningLine"
                        hoverColor="#FF0A2B"
                        color="#7d7d7d"
                        fs="12px"
                        text="Term & conditon"
                        to="/terms-services"
                        mrtextSpan="0px"
                      />
                    </li>
                  </ul>
                </Col>
                <Col lg={6} md={12}>
                  <ul className="socialLinks">
                    <li className="fs12">
                      <a
                        className="runningLine"
                        href="https://www.pixbrand.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Behance
                      </a>
                    </li>
                    <li className="fs12">
                      <a
                      className="runningLine"
                        href="https://www.pixbrand.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Dribbble
                      </a>
                    </li>
                    <li className="fs12">
                      <a
                      className="runningLine"
                        href="https://www.pixbrand.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pinterest
                      </a>
                    </li>
                    <li className="fs12">
                      <a
                      className="runningLine"
                        href="https://www.pixbrand.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li className="fs12">
                      <a
                      className="runningLine"
                        href="https://www.pixbrand.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="fs12">
                      <a
                      className="runningLine"
                        href="https://www.pixbrand.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
             
            </Container>
          </section>
        </section>
      )}
    </>
  );
};

export default Footer;
