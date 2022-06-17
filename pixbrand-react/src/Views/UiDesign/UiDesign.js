import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Img from "../../Assets/Img/Img";
import GImage from "../../Components/GComponents/GImage/GImage";
import GAlign from "../../Components/GComponents/GAlign";
import Svg from "../../Assets/Svg/Svg";
import TabAndContent from "../TabAndContent/TabAndContent";
import Services3 from "../Home/Services3";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";

// Glance Data
const Glancedata = [
  {
    svg: Svg.ball,
    title: "UX research",
    desc: "It’s important to have an idea about what the current audience is inclining to, and then take note of shortcomings so that you can get better. ",
  },
  {
    svg: Svg.ideas,
    title: "UX strategy",
    desc: "Once a design has been finalized, we craft a strategy for your UX so that there are no bottlenecks during the development process. ",
  },
  ,
  {
    svg: Svg.excellence,
    title: "User interview",
    desc: "User interaction for UX empowers us to methodically craft a design that has magnificent levels of acceptance among the masses. ",
  },
  {
    svg: Svg.ball,
    title: "Visual Testing",
    desc: "A design goes through multiple visual tests to pick up the absolutely perfect palette that catches your attention and keeps you at it for a long enough time.",
  },
  {
    svg: Svg.ideas,
    title: "-	Immaculate Detailing",
    desc: "Every single aspect in the whole UX is designed by our team, only for crafting a tailor-made UX that ticks all right boxes for you.",
  },
  {
    svg: Svg.excellence,
    title: "-	Adhering to Standards",
    desc: "There are certain standards in the field of design that we always adhere to, howsoever the process might become for us during a UX design at times. ",
  },
];

const UiDesign = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UI Design - Pixbrand</title>
        <meta name="UI Design" content="Pixbrand UI Design"></meta>
      </Helmet>
      <Title />
      <Slider />
      <Product />
      <Glance />
      <Schedule />
      <Boils />
      <Tab />
      <Visitors />
      <Trust />
      <DesignServiceHeading />
      <Services3 />
    </div>
  );
};

export default UiDesign;

// Title
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row className="justify-content-center ">
          <Col xl={10} lg={10} md={12}>
            <section className="text-center mobtl">
              <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
                <Slide bottom>
                  Designing a Perfect Experience on New-Age Smartphones
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
const Slider = () => {
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
                  <GImage radius="24px" radiusMob="15px" src={Img.MaskGroup} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.MaskGroup} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.MaskGroup} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.MaskGroup} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.MaskGroup} />
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

// Your product can be complex, but the UI must be easy
const Product = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="flexreverse">
          <Col md={6} className="mobMb15">
            <div>
              <Slide bottom>
                <img src={Img.ui} alt="" className="w-100" />{" "}
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <section className="ml90 mobMl0 ml0Tab">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 width85 mobWidth100 tabWidth100 tabLgWidth100">
                  Easy UI/UX for Complex Product Ideas
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                  Need to create a brand new app from scratch? Looking to
                  redesign your existing product? Want to expand to new markets
                  by introducing new functionality?
                </p>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                  There’s no limit to the imagination and innovation one can
                  bring to the table, but we can convert that into an achievable
                  idea and design that you will always be proud of.
                </p>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Glance
const Glance = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="mb100 mobMb60">
          <Col md={6}>
            <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite width81 mobWidth100 tabWidth100 tabLgWidth100">
              <Slide bottom>Our UI/UX Process</Slide>
            </h2>
          </Col>
          <Col md={6}>
            <section className="ml90 mobMl0 ml0Tab">
              <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorWhite mb0">
                <Slide bottom>
                  You will find that we offer mobile UI/UX like a lot of the
                  others, but we have made slight alterations to our process so
                  that you can spot the areas we excel in, without too much
                  fuss.
                </Slide>
              </p>
            </section>
          </Col>
        </Row>
        <Row>
          {Glancedata.map((obj, ind) => {
            return (
              <>
                <Col lg={4} md={4} className="mb40 mobMb20" key={"k" + ind}>
                  <section className="text-center">
                    <Slide bottom>
                      <div className="mb20 mobMb10">{obj.svg}</div>
                      <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                        {obj.title}
                      </h3>
                      <p className="fs17 colorLightBlack mb0">{obj.desc}</p>
                    </Slide>
                  </section>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

// You're behind schedule because designers don't work with devs
const Schedule = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center">
          <Col md={6}>
            <Slide bottom>
              <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 width70 mobWidth100 tabWidth100 ">
                Never Fall Behind Your Schedule Again Due to Team Discrepancies
              </h2>
              <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 mobMb10 colorLightBlack width76 mobWidth100 tabWidth100 ">
                With a simple and intuitive back-end too, your developer team
                and other teams will no longer become victims of
                miscommunication and missed deliveries. With the right UX, it’s
                impossible!
              </p>
            </Slide>
          </Col>
          <Col md={6}>
            <section>
              <Slide bottom>
                <GImage radius="24px" radiusMob="15px" src={Img.Schedule} />
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Boils
const Boils = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="justify-content-center">
          <Col lg={9}>
            <section className="text-center">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 ">
                  Our UX development offerings focus more on usability and not
                  just a first-time visual impression
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorWhite mb40 mobMb20 width76 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
                  The more meaningful the design, the more is its relatability
                  with every user. For long-term success, this is something
                  vitally important.
                </p>
              </Slide>
            </section>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} className="mobMb15">
            <div>
              <Slide bottom>
                <img src={Img.why} alt="" className="radius w-100" />
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <section className="ml40 mobMl0">
              <Slide bottom>
                <section className="mb40 mobMb20">
                  <h5 className="fs16 colorRed mb20 mobMb10 fw700">01</h5>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    - We delve into your company history
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    Any design involves understanding the story behind your
                    brand. We like to know about that in every design project.
                  </p>
                </section>
                <section className="mb40 mobMb20">
                  <h5 className="fs16 colorRed mb20 mobMb10 fw700">02</h5>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    - We have the right experience
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    Given how we have served our clients well over the years,
                    you can expect the perfect mobile UI/UX from us.
                  </p>
                </section>
                <section>
                  <h5 className="fs16 colorRed mb20 mobMb10 fw700">03</h5>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    - Any mobile device? We have a UI/UX
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    We create iOS, Android, Wearable apps, and more. Obviously,
                    we won’t have trouble designing the UI/UX.
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

// Tab
const Tab = () => {
  return (
    <div>
      <TabAndContent
        title="Benefits with our UI/UX Design Services"
        verticaldata1=" More Engaged Users"
        verticaldata2="Tailor-made Budgets"
        verticaldata3="Round the Clock Support"
        verticaldataresult1="We create designs that stand the test of time and keep users
        coming back for more. The more they keep returning, the better
        it is for you."
        verticaldataresult2="We know that a one-size-fits-all approach is of no use here, so
        we create everything that you need, suited to you in every
        sense."
        verticaldataresult3="You won’t have to chase us after we deliver your product. That’s
        because we will always be available to sort out your queries"
      />
    </div>
  );
};

// Visitors
const Visitors = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center flexreverse">
          <Col md={6}>
            <div>
              <Slide bottom>
                <GImage radius="24px" radiusMob="15px" src={Img.Schedule} />
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <section className="ml90 mobMl0 ml0Tab width90 mobWidth100 tabWidth100 tabLgWidth100 mobMb10">
              <Slide bottom>
                <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10">
                  Sorted Growth Aspects with the Right UI/UX
                </h3>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb25">
                  An appealing UI/UX delivers on the analytics front too. You
                  get lower bounce rates, better conversions, and more
                  impressions. All because you understood that the first step to
                  attracting people is through mindblowing visuals.
                </p>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                  At Pix Brand, we might be a full-scale agency but love working
                  as members of your team so that we can understand you and your
                  ideas in a lot more detail. This ultimately translates to
                  every UI/UX deliverable being exactly suited to your
                  requirements.
                </p>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Trust
const Trust = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center">
          <Col md={6}>
            <section className="width75 mobWidth100 tabWidth100 tabLgWidth100 mobMb10">
              <Slide bottom>
                <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 width64 mobWidth100 tabWidth100 tabLgWidth100">
                  So Many Years, So Many Designs
                </h3>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack colorLightBlack mb0">
                  There’s no reason to stay tentative about choosing Pix Brand
                  for your UI/UX needs. Hire us, give us your requirements and
                  enjoy peace of mind while our creative minds get at the center
                  of your project to deliver you something truly promising.
                </p>
              </Slide>
            </section>
          </Col>
          <Col md={6}>
            <div>
              <Slide bottom>
                <GImage radius="24px" radiusMob="15px" src={Img.Group50632} />
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
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
