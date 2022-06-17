import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import Slide from "react-reveal/Slide";
import $ from "jquery";

const Services = () => {
  const isElementInViewport = (elem) => {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem =
      navigator.userAgent.toLowerCase().indexOf("webkit") != -1
        ? "body"
        : "html";
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return elemTop < viewportBottom && elemBottom > viewportTop;
  };

  const checkAnimation = () => {
    var $elem = $(".lineAnimate");

    // If the animation has already been started
    if ($elem.hasClass("start")) return;

    if (isElementInViewport($elem)) {
      // Start the animation
      $elem.addClass("start");
    }
  };

  const isElementInViewport1 = (elem) => {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem =
      navigator.userAgent.toLowerCase().indexOf("webkit") != -1
        ? "body"
        : "html";
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return elemTop < viewportBottom && elemBottom > viewportTop;
  };

  const checkAnimation1 = () => {
    var $elem = $(".lineAnimate1");

    // If the animation has already been started
    if ($elem.hasClass("start")) return;

    if (isElementInViewport1($elem)) {
      // Start the animation
      $elem.addClass("start");
    }
  };

  useEffect(() => {
    $(window).scroll(function () {
      checkAnimation();
      checkAnimation1();
    });
  });
  return (
    <section className="pt100 pb100">
      <Container>
    
        <div className="pb60">
          <Row>
            <Col lg={4} md={4}>
                <p className="mb0 colorRed fs16 mobFs14 tabFs14 tabLgFs14 fw700 text-uppercase mobMb10">
                  Recognition that <br /> Redefines Principles
                </p>
            </Col>
            <Col lg={8} md={8}>
              <div>
                <p className="mb20 colorWhite fs22 mobFs16 tabFs18 tabLgFs18">
                    A web and app development company that breaks conventions,
                    Pix Brand combines the most insightful market research with
                    the right technology and creativity to deliver products and
                    campaigns that undoubtedly, are a class apart.
                </p>
                <p className="mb0 colorWhite fs22 mb60 mobFs16 tabFs18 tabLgFs18">
                    We do everything that makes businesses click with their
                    markets.
                </p>
              </div>

              <Row className="gy-3">
                <Col lg={4} md={4} xs={6}>
                  <div>
                    <div className="mb20">
                        <img src={Img.leaf.default} alt="" />
                    </div>

                    <h6 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite">
                   Clutch Web Design Winner
                    </h6>
                    <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack">
                     Clutch design awward, 2020
                    </p>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={6}>
                  <div>
                    <div className="mb20">
                        <img src={Img.leaf.default} alt="" />
                    </div>

                    <h6 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite">
                      Clutch Web Design Winner
                    </h6>
                    <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack">
                    Clutch design awward, 2020
                    </p>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={6}>
                  <div>
                    <div className="mb20">
                        <img src={Img.leaf.default} alt="" />
                    </div>

                    <h6 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite">
                     Clutch Web Design Winner
                    </h6>
                    <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack">
                     Clutch design awward, 2020
                    </p>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={6}>
                  <div>
                    <div className="mb20">
                        <img src={Img.leaf.default} alt="" />
                    </div>

                    <h6 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite">
                     Clutch Web Design Winner
                    </h6>
                    <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack">
                      <Slide bottom>Clutch design awward, 2020</Slide>
                    </p>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={6}>
                  <div>
                    <div className="mb20">
                      <Slide bottom>
                        <img src={Img.leaf.default} alt="" />
                      </Slide>
                    </div>

                    <h6 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite">
                      <Slide bottom>Clutch Web Design Winner</Slide>
                    </h6>
                    <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack">
                      <Slide bottom>Clutch design awward, 2020</Slide>
                    </p>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={6}>
                  <div>
                    <div className="mb20">
                      <Slide bottom>
                        <img className="img-fluid" src={Img.hand} alt="" />
                      </Slide>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className="lineAnimate"> </div>
    
      </Container>
    </section>
  );
};

export default Services;
