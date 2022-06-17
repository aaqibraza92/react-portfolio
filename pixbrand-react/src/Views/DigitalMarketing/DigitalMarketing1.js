import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Img from "../../Assets/Img/Img";
import Svg from "../../Assets/Svg/Svg";
import GImage from "../../Components/GComponents/GImage/GImage";
import GAlign from "../../Components/GComponents/GAlign";
import TabAndContent from "../TabAndContent/TabAndContent";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";

const DigitalMarketing1 = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DigitalMarketing - Pixbrand</title>
        <meta
          name="DigitalMarketing"
          content="Pixbrand DigitalMarketing"
        ></meta>
      </Helmet>
      <Title />
      <DigitalMarketingSlider1 />
      <Strategy />
      <Advantages />
      <Messaging />
      <Tab />
      <BrandStrategy />
    </div>
  );
};

export default DigitalMarketing1;

// Title
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row className="justify-content-center ">
          <Col xl={9} lg={8} md={10}>
            <section className="text-center mobtl">
              <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
                <Slide bottom>
                  Helping You Become the Brand You Always Aspire to be
                </Slide>
              </h1>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Slider
const DigitalMarketingSlider1 = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <section>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            speed={2000}
            autoplay={{ delay: 1000 }}
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => {}}
            onSwiper={() => {}}
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
                  <GImage radius="24px" src={Img.digital1} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" src={Img.digital1} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" src={Img.digital1} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" src={Img.digital1} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" src={Img.digital} />
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

// Strategy
const Strategy = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center flexreverse">
          <Col md={6}>
            <div>
              <Slide bottom>
                <img src={Img.headphone} alt="" className="w-100" />
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <section className="ml90 mobMl0 ml0Tab">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10">
                  Designing the Right Branding Strategy for You
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                  If you always dreamt of creating a brand of your business
                  setup, Pix Brand can be your perfect branding partner. Tap
                  into markets in a consolidated manner with ease.
                </p>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                  Our branding solutions help you define your organization in
                  the best way possible-
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

// Advantages
const Advantages = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="justify-content-center ">
          <Col lg={8}>
            <section className="text-center">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 ">
                  Benefits of Branding with Pix Brand
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorWhite mb40 mobMb20">
                  Creating the right connection with your customers is the
                  essence of the right branding. Pix Brand brings multiple
                  benefits for you with its branding suite-
                </p>
              </Slide>
            </section>
          </Col>
        </Row>
        <Row className="align-items-center flexreverse">
          <Col md={6}>
            <div>
              <Slide bottom>
                <img src={Img.why} alt="" className="radius w-100" />{" "}
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <section className="ml90 mobMl0 ml0Tab mb15">
              <Slide bottom>
                <section className="mb40 mobMb20">
                  <h5 className="fs16 colorRed mb20 mobMb10 fw700">01</h5>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Better Client Retention
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    When branding is done right, your clients don’t need further
                    motivation to keep coming back to you. Our branding makes
                    that happen for you.
                  </p>
                </section>
                <section className="mb40 mobMb20">
                  <h5 className="fs16 colorRed mb20 mobMb10 fw700">02</h5>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Engaging The Teams
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    {" "}
                    Given how meticulous the process of branding is, it also
                    acts as a creative outlet for different teams to provide
                    their inputs and keep your operational efficiency high.
                  </p>
                </section>
                <section className="">
                  <h5 className="fs16 colorRed mb20 mobMb10 fw700">03</h5>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Wider Appeal
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    Branding allows you to connect with a larger audience and
                    the acceptance of your product and service becomes more
                    pronounced too. This makes you big!
                  </p>
                </section>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Messaging
const Messaging = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center">
          <Col md={6}>
            <Slide bottom>
              <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 width80 mobWidth100 tabWidth100 tabLgWidth100">
                Design and Deliver the Perfect Brand Message
              </h2>
              <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10 width76 mobWidth100 tabWidth100 tabLgWidth100">
                Our experts have a lot of experience in offering bespoke
                branding services. Embrace accelerated growth with our
                impeccable tools.
              </p>

              <ul className="mobile-ul noUl colorLightBlack fs17 tabFs15 tabLgFs15 mobFs15">
                <li className="ml11 mb10">Logos</li>
                <li className="ml11 mb10">Lead Magnets</li>
                <li className="ml11 mb10">Social Media Branding</li>
                <li className="ml11 mb20">Target Messaging</li>
              </ul>
              <ul className="mobile-ul noUl colorLightBlack fs17 tabFs15 tabLgFs15 mobFs15">
                <li className="ml11 mb10">Brand Guide</li>
                <li className="ml11 mb10">Business Asset Branding</li>
              </ul>
            </Slide>
          </Col>
          <Col md={6}>
            <section>
              <div>
                <Slide bottom>
                  <img src={Img.drawn} alt="" className="w-100 radius" />
                </Slide>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Tab
const Tab = () => {
  return (
    <div>
      <TabAndContent
        title="We Offer The Below Digital Marketing Services"
        verticaldata1="Brand Strategy"
        verticaldata2="Brand Positioning"
        verticaldata3="Brand Architecture"
        verticaldata4="Brand Identity"
        verticaldataresult1="We create designs that stand the test of time and keep users
        coming back for more. The more they keep returning, the better
        it is for you."
        verticaldataresult2="We know that a one-size-fits-all approach is of no use here, so
        we create everything that you need, suited to you in every
        sense."
        verticaldataresult3="You won’t have to chase us after we deliver your product. That’s
        because we will always be available to sort out your queries1"
        verticaldataresult4="You won’t have to chase us after we deliver your product. That’s
        because we will always be available to sort out your queries2"
      />
    </div>
  );
};

// Our Brand Strategy
const BrandStrategy = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="justify-content-center">
          <Col lg={10}>
            <section className="text-center">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 width81 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
                  Our brand Strategy Process
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack width75 mb40 mobMb20 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
                  The execution of a rightly formulated brand strategy is going
                  to make all the difference in the world when it means doing
                  something truly amazing.
                </p>
              </Slide>
            </section>
          </Col>
        </Row>
        <Row className="mb100 mobMb60">
          <Col md={3} xs={6} className="mobMb15">
            <section className="text-center">
              <Slide bottom>
                <div className="mb30 mobMb15">{Svg.discovery}</div>
                <h3 className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack">
                  Discovery
                </h3>
              </Slide>
            </section>
          </Col>
          <Col md={3} xs={6} className="mobMb15">
            <section className="text-center">
              <Slide bottom>
                <div className="mb30 mobMb15">{Svg.research}</div>
                <h3 className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack">
                  Research & Strategy
                </h3>
              </Slide>
            </section>
          </Col>
          <Col md={3} xs={6}>
            <section className="text-center">
              <Slide bottom>
                <div className="mb30 mobMb15">{Svg.tactics}</div>
                <h3 className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mobMb0">
                  Media Tactics
                </h3>
              </Slide>
            </section>
          </Col>
          <Col md={3} xs={6}>
            <section className="text-center">
              <Slide bottom>
                <div className="mb30 mobMb15">{Svg.analyze}</div>
                <h3 className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mobMb0">
                  Analyze & Tweak
                </h3>
              </Slide>
            </section>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} className="mobMb15">
            <section className="width80 mobWidth100 tabWidth100 tabLgWidth100">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 width81 mobWidth100 tabWidth100 tabLgWidth100">
                  A crucial stepping stone to start in the right direction.
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0 width82 mobWidth100 tabWidth100 tabLgWidth100">
                  We start with analyzing your overall operations and developing
                  an understanding of what it is all about and how it can all be
                  transformed into a robust experience for your existing and new
                  customers.
                </p>
              </Slide>
            </section>
          </Col>
          <Col md={6}>
            <section>
              <div>
                {/* <img src={Img.} alt="" className="w-100" /> */}
                <Slide bottom>
                  <GImage radius="24px" radiusMob="5px" src={Img.Schedule} />
                </Slide>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};
