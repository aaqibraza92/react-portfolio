import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GImage from "../../../Components/GComponents/GImage/GImage";
import GSpacing from "../../../Components/GComponents/GSpacing";
import GSection from "../../../Components/GComponents/GSpacing";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import $ from "jquery";

const Portfolio = () => {
  useEffect(() => {
    $(".arrowLink > span").mouseenter(function(){
      $(".cursor").css("transform", "scale(1.5)");
    });
    $(".arrowLink > span").mouseleave(function(){
      $(".cursor").css("transform", "scale(0.75)");
    });

    (function () {
      const links = document.querySelectorAll(".hover-me");
      const cursor = document.querySelector(".cursor");

      const animateMe = function (e) {
        const span = this.querySelector("span");
        const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this;
        let move;
        move = 20;
        let xMove = (x / width) * (move * 2) - move;
        let yMove = (y / height) * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === "mouseleave") span.style.transform = "";
      };

      const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
      };

      links.forEach((link) => link.addEventListener("mousemove", animateMe));
      links.forEach((link) => link.addEventListener("mouseleave", animateMe));
      window.addEventListener("mousemove", editCursor);
    })();
  });
  return (
    <section>
      <Container className="overflow-hidden">
        <div>
          <Row className="gx-5 gXl10 mb100">
            <Col
              lg={6}
              md={6}
              className="d-flex flex-column justify-content-between "
            >
              <GSection mb="0px">
                <Slide bottom>
                  <div className="protfolioWrapper pBgGreen pl20 pr20 radius24 overflow-hidden">
                    <GImage className="scale" width="100%" src={Img.p1} />
                  </div>
                </Slide>
              </GSection>

              <div className="aboutPortfolio">
                <Slide bottom>
                  <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                    Servalley
                  </h6>
                  <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                    Everyday services <br /> for peace of mind.
                  </h3>

                  <div className="mb15">
                    <Link
                      to="#"
                      className="arrowLink colorWhite d-flex align-items-center hover-me "
                    >
                      <span className="d-flex align-items-center">
                        <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                          View the project
                        </span>
                        <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                          {Svg.arrowRight}
                        </span>
                      </span>
                    </Link>
                  </div>
                </Slide>
              </div>
            </Col>

            <Col
              lg={6}
              md={6}
              className="d-flex flex-column justify-content-between "
            >
              <GSection mb="150px" tabLgmb="80px" className="mobMb0">
                <Slide bottom>
                  <div className="aboutPortfolio ">
                    <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                      Pepbasket
                    </h6>
                    <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                      Daily needs,
                      <br /> seamless ordering.
                    </h3>
                    <div className="">
                      <Link
                        to="#"
                        className="arrowLink colorWhite d-flex align-items-center hover-me "
                      >
                        <span className="d-flex align-items-center">
                          <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                            View the project
                          </span>
                          <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                            {Svg.arrowRight}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </Slide>
              </GSection>
              <GSection mb="0px">
                <Slide bottom>
                  <div className="protfolioWrapper pBgLightBlue pl20 radius24 overflow-hidden">
                    <GImage className="scale" width="100%" src={Img.p2} />
                  </div>
                </Slide>
              </GSection>
            </Col>
          </Row>
        </div>

        <div>
          <Row className="gx-5 gXl10">
            <Col lg={6} md={6} className="">
              <GSection mb="120px" tabLgmb="80px" className="mobMb0 ">
                <GSection mb="120px" tabLgmb="80px" className="mobMb0">
                  <Slide bottom>
                    <div className="protfolioWrapper pBgYellow  pl20 radius24 overflow-hidden">
                      <GImage className="scale" width="100%" src={Img.p3} />
                    </div>
                  </Slide>
                </GSection>

                <div className="aboutPortfolio">
                  <Slide bottom>
                    <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                      Spotslot
                    </h6>
                    <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                      Easy service bookings <br /> for more freedom.
                    </h3>

                    <div className="d-inline-block">
                      <Link
                        to="#"
                        className="arrowLink colorWhite d-flex align-items-center hover-me "
                      >
                        <span className="d-flex align-items-center">
                          <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                            View the project
                          </span>
                          <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                            {Svg.arrowRight}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </Slide>
                </div>
              </GSection>

              <GSection mb="0px">
                <GSection mb="120px" tabLgmb="80px" className="mobMb0">
                  <Slide bottom>
                    <div className="protfolioWrapper pBgDGreen1 radius24 overflow-hidden">
                      <GImage className="scale" width="100%" src={Img.p5} />
                    </div>
                  </Slide>
                </GSection>

                <div className="aboutPortfolio">
                  <Slide bottom>
                    <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                      Osama
                    </h6>
                    <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                      Making real-estate <br />
                      dealings simple.
                    </h3>

                    <div className="d-inline-block ">
                      <Link
                        to="#"
                        className="arrowLink colorWhite d-flex align-items-center hover-me "
                      >
                        <span className="d-flex align-items-center">
                          <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                            View the project
                          </span>
                          <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                            {Svg.arrowRight}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </Slide>
                </div>
              </GSection>
            </Col>

            <Col lg={6} md={6} className="">
              <GSection mb="150px" tabLgmb="80px" className="mobMb0 ">
                <GSection mb="150px" tabLgmb="80px" className="mobMb0">
                  <Slide bottom>
                    <div className="aboutPortfolio">
                      <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                        Markabat
                      </h6>
                      <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                        Truck hiring services, <br /> completely simplified.
                      </h3>

                      <div className="">
                        <Link
                          to="#"
                          className="arrowLink colorWhite d-flex align-items-center hover-me "
                        >
                          <span className="d-flex align-items-center">
                            <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                              View the project
                            </span>
                            <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                              {Svg.arrowRight}
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </Slide>
                </GSection>
                <GSection mb="0px">
                  <Slide bottom>
                    <div className="protfolioWrapper pBgDGreen  pl20 radius24 overflow-hidden">
                      <GImage className="scale" width="100%" src={Img.p4} />
                    </div>
                  </Slide>
                </GSection>
              </GSection>

              <GSection mb="100px" tabLgmb="80px" className="mobMb0 ">
                <GSection mb="150px" tabLgmb="80px" className="mobMb0">
                  <Slide bottom>
                    <div className="aboutPortfolio">
                      <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                        Onkout
                      </h6>
                      <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                        Financial suite for <br />
                        managed economies.
                      </h3>

                      <div className="d-inline-block">
                        <Link
                          to="#"
                          className="arrowLink colorWhite d-flex align-items-center hover-me hover-me"
                        >
                          <span className="d-flex align-items-center">
                            <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                              View the project
                            </span>
                            <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                              {Svg.arrowRight}
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </Slide>
                </GSection>
                <GSection mb="0px">
                  <div className="protfolioWrapper pBgOrg  radius24 overflow-hidden">
                    <GImage className="scale" width="100%" src={Img.p6} />
                  </div>
                </GSection>
              </GSection>
            </Col>
          </Row>
        </div>

        <div>
          <GSpacing mt="0px" mb="60px">
          <Fade bottom>
            <Row>
              <Col lg={8}>
               
                  <p className="mb20 colorWhite fs22 tabFs18 tabLgFs18 mobFs16 ">
                    It’s simple. At Pix Brand, you get not one and two, but a
                    complete suite of requisites that come backed with
                    technology, ideas, and creative quotient. The result is a
                    product that’s robust, functional, and delivers
                    out-of-the-world capabilities.
                  </p>
            
              </Col>
            </Row>

            <div className="d-inline-block">
              <Fade bottom>
                <Link
                  to="#"
                  className="arrowLink colorWhite d-flex align-items-center hover-me "
                >
                  <span className="d-flex align-items-center">
                    <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                      View the project
                    </span>
                    <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                      {Svg.arrowRight}
                    </span>
                  </span>
                </Link>
              </Fade>
            </div>
            </Fade>
          </GSpacing>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
