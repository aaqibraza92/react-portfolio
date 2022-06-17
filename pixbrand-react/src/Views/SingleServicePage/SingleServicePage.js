import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Img from "../../Assets/Img/Img";
import GImage from "../../Components/GComponents/GImage/GImage";
import GAlign from "../../Components/GComponents/GAlign";
import Svg from "../../Assets/Svg/Svg";
import GButton from "../../Components/GComponents/GButton";
import "./SingleServicePage.css";
import Services3 from "../Home/Services3";
import ImageTab from "../TabAndContent/ImageTab";
import $ from "jquery";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";

const SingleServicePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Web Desing Services - Pixbrand</title>
        <meta
          name="Web Desing Services"
          content="Pixbrand Web Desing Services"
        ></meta>
      </Helmet>
      <Title />
      <SingleServiceSlider />
      <Invent />
      <Pixels />
      <Planning />
      <Prototyping />
      <Collaborate />
      <ImageTab />
      <Started />
      <DesignServiceHeading />
      <Services3 />
    </div>
  );
};

export default SingleServicePage;

// Title
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row className="justify-content-center ">
          <Col xl={10} lg={10} md={12}>
            <section className="text-center mobtl">
              <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
                <Slide bottom> Creating Exhilarating Web Experiences</Slide>
              </h1>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Slider
const SingleServiceSlider = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <section className="dynam_pad_left">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            speed={2000}
            autoplay={{ delay: 1000 }}
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => {}}
            onSwiper={() => {}}
            className="mb40 mobMb20"
            //   breakpoints={{
            //     // when window width is >= 640px
            //     300: {
            //       width: 300,
            //       slidesPerView: 1,
            //     },
            //     // when window width is >= 768px
            //     550: {
            //       width: 550,
            //       slidesPerView: 2,
            //     },
            //     992: {
            //       width: 992,
            //       slidesPerView: 3,
            //     },
            //     1201: {
            //       width: 1201,
            //       slidesPerView: 4,
            //     },
            //     1360: {
            //       width: 1360,
            //       slidesPerView: 4,
            //     },
            //   }}
          >
            <div className="bloggerList">
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.Game} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.Game} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.Game} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.Game} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.Game} />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </section>
        <Slide bottom>
          <section className="bBottom pb100 mobPb20 tabPb80">
            <GAlign
              align="between"
              alignV="center"
              mobWrap="wrap"
              tabWrap="wrap"
            >
              <div>
                <h4 className="fs17 tabFs15 tabLgFs15 mobFs15 colorWhite mb20 mobMb10">
                  Gamezania
                </h4>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorLightBlack fThin mb0 mobMb10">
                  AR games get you moving, but don't
                </h2>
              </div>
              <div>
                <span className="fs14 tabFs13 tabLgFs13 mobFs13 colorWhite mr15">
                  View the project
                </span>
                <span className="arrow-circle">
                  {Svg.arrowwithLightBground}
                </span>
              </div>
            </GAlign>
          </section>
        </Slide>
      </Container>
    </>
  );
};

// Invent
const Invent = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center flexreverse">
          <Col md={6} className="mobMb15">
            <div>
              <Slide bottom>
                <img src={Img.headphone} alt="" className="w-100" />
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <section className="ml90 mobMl0 ml0Tab">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 width85 mobWidth100 tabWidth100 tabLgWidth100">
                  Invent or reinvent the look & feel of your web application
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                  Need to create a brand new app from scratch? Looking to
                  redesign your existing product? Want to expand to new markets
                  by introducing new functionality?
                </p>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                  We provide product design talents to help you create
                  functional, beautiful, and inspiring applications.
                </p>
                <ul className="noUl mobile-ul fs17 tabFs15 tabLgFs15 mobFs15">
                  <li className=" colorLightBlack mb10 ml11">Brand identity</li>
                  <li className=" colorLightBlack mb10 ml11">
                    User experience design
                  </li>
                  <li className=" colorLightBlack mb10 ml11">
                    Prototyping and validation
                  </li>
                  <li className=" colorLightBlack ml11">
                    User interface design
                  </li>
                </ul>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Pixels
const Pixels = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <section>
          <Slide bottom>
            <div className="width41 mobWidth100 tabWidth100 ">
              <h2 className="fs70 tabFs60 tabLgFs60 mobFs45 colorWhite mb0 mobMb10 mb15Tab">
                We turn pixels into products
              </h2>
            </div>
            <GAlign align="right">
              <div className="width53 mobWidth100 tabWidth100  mb40 mobMb20">
                <h2 className="fs22 mobFs18 tabFs18 tabLgFs18 colorWhite mb0">
                  We specialize in designing SaaS applications. From complex to
                  simple and from simple to breathtaking – we help you create a
                  product from start to finish.
                </h2>
              </div>
            </GAlign>
          </Slide>
        </section>
        <Row className="align-items-center">
          <div>
            <Slide bottom>
              <img src={Img.brief} alt="" className="w-100" />{" "}
            </Slide>
          </div>
        </Row>
      </Container>
    </>
  );
};

// Planning
const Planning = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center mb60 mobMb30">
          <Col lg={6} sm={6}>
            <div className="width70 mobWidth100 tabWidth100 tabLgWidth100">
              <Slide bottom>
                <h3 className="fs16 mb20 mobMb10 fw700 colorRed">PLAN</h3>
                <h2 className="fs32 tabFs20 tabLgFs20 mobFs18 colorWhite mb0 mobMb10">
                  With a planning stage in the product design, you want to
                  understand people's pains and how other products solve or
                  don't solve them. We do research to make your product the best
                  possible solution.
                </h2>
              </Slide>
            </div>
          </Col>
          <Col lg={6} sm={6}>
            <div>
              <Slide bottom>
                <img
                  src={Img.btngroup1}
                  alt=""
                  className="h275 ml40 mobMl0 ml0Tab mobWidth100"
                />
              </Slide>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  01.
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                  Through stakeholder interviews, user research, and competitive
                  analysis we come up with design assumptions.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  02
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                  Then we sum up those assumptions and share them with the whole
                  product team in the form of customer journeys and user flows.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  03
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                  We brainstorm possible solutions, create quick hand-drawn
                  paper sketches and from there, build wireframes.
                </p>
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Prototyping
const Prototyping = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="mb60 mobMb30 align-items-center flexreverse">
          <Col lg={6} md={6}>
            <div>
              <Slide bottom>
                <img src={Img.btngroup2} alt="" className="h275 mobWidth100" />
              </Slide>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="width70 mobWidth100 tabWidth100 tabLgWidth100">
              <Slide bottom>
                <h3 className="fs16 mb20 mobMb10 fw700 colorRed">ITERATE</h3>
                <h2 className="fs32 tabFs20 tabLgFs20 mobFs18 mb0  mobMb10 colorWhite">
                  Since we're in the product design, continuous iterations and
                  testing are going to be our daily routines. You want your app
                  to provide the best user experience, so we're going to
                  discover what this means.
                </h2>
              </Slide>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  01
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  The visual design of your product is as important as the UX.
                  We do visual research and share our findings via a moodboard.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  02
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  Time to turn wireframes into clickable prototypes! Prototypes
                  are a quick way to test your product with real people.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  03
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  User testing gives us the feedback we need to iterate on the
                  prototype. Then we'll test it again, and then again, and
                  then...you get it.
                </p>
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Collaborate
const Collaborate = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="mb60 mobMb30 align-items-center">
          <Col md={6}>
            <div className="width70 mobWidth100 tabWidth100 tabLgWidth100">
              <Slide bottom>
                <h3 className="fs16 fw700 colorRed">Collaborate</h3>
                <h2 className="fs32 tabFs20 tabLgFs20 mobFs18 colorWhite mb0 mobMb10">
                  One great product designer is good. One great product team is
                  better. We collaborate with your team on every stage of
                  product development including usability testing, user
                  interviews, & analysis.{" "}
                </h2>
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <Slide bottom>
                <img
                  src={Img.btngroup3}
                  alt=""
                  className="h275 ml40 mobMl0 ml0Tab mobWidth100"
                />{" "}
              </Slide>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  01
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  When the design is good and ready, we'll hand it off to
                  developers making sure they have no questions regarding the
                  implementation.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  02
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  If you want to scale, we will help you build a design system.
                  We will also do UX audits to pinpoint any flows when the
                  product is live.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  03
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  From proof-of-concept prototyping to complete web solutions –
                  we bring our expertise in all stages of product development.{" "}
                </p>
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Started
const Started = () => {
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
    var $elem = $(".lineView3");

    // If the animation has already been started
    if ($elem.hasClass("start")) return;

    if (isElementInViewport($elem)) {
      // Start the animation
      $elem.addClass("start");
    }
  };

  useEffect(() => {
    $(window).scroll(function () {
      checkAnimation();
    });
  });
  return (
    <>
      <section className="bgLightGrey pt100 pb100 tabPt80 tabPb80 mobPt60 mobPb60 mb100 mobMb60">
        <Container>
          <section className="text-center">
            <h1 className="fs65 tabFs60 tabLgFs60 mobFs45 fw700 colorWhite mb40 mobMb20 ">
              <Slide bottom> Ready to get started? </Slide>
            </h1>
            <h3 className="fs22 mobFs18 tabFs18 tabLgFs18 colorWhite mb40 mobMb20">
              <Slide bottom>
                Get a product designer or a team of designers.{" "}
              </Slide>
            </h3>
            <div className="position-relative h_145 dNoneXs lineView3"></div>

            <h3 className="fs16 colorRed mb10 mt30 mobMt0 fw700">
              <Slide bottom>Step 1 </Slide>
            </h3>
            <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb40 mobMb20">
              <Slide bottom> Fill out the brief. </Slide>
            </h3>
            <div className="position-relative h_145 dNoneXs lineView3"></div>

            <h3 className="fs16 colorRed mb10 mt30 mobMt0 fw700">
              <Slide bottom>Step 2 </Slide>
            </h3>
            <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb40 mobMb20">
              <Slide bottom> Get a designer </Slide>
            </h3>
            <div className="position-relative h_145 dNoneXs lineView3"></div>

            <h3 className="fs16 colorRed mb10 mt30 mobMt0 fw700">
              <Slide bottom>Step 3 </Slide>
            </h3>
            <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb40 mobMb20">
              <Slide bottom>Start your project </Slide>
            </h3>
            <Slide bottom>
              <GButton
                bgColor="#FF0A2B"
                color="#fff"
                pl="35px"
                pr="35px"
                hoverBg="#FF0A2B"
                hoveColor="#fff"
                borderRadius="45px"
              >
                Fill out the brief
              </GButton>{" "}
            </Slide>
          </section>
        </Container>
      </section>
    </>
  );
};

// More design services from pixbrand
const DesignServiceHeading = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
            <section className="text-center">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 ">
                  More design services from pixbrand
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb40 mobMb20 width76 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
                  The more meaningful the design, the more is its relatability
                  with every user. For long-term success, this is something
                  vitally important.
                </p>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};
