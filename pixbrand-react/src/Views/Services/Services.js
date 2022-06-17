import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import GImage from "../../Components/GComponents/GImage/GImage";
// import Svg from "../../Assets/Svg/Svg";
import GAlign from "../../Components/GComponents/GAlign";
import { Link } from "react-router-dom";
import ImageTab from "../TabAndContent/ImageTab";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services - Pixbrand</title>
        <meta name="Services" content="Pixbrand Services"></meta>
      </Helmet>
      <Title />
      <ServiceSlider />
      <Mobile />
      <Website />
      <Digital />
      <Branding />
      <ImageTab />
      <Slider />
      <Approach />
    </div>
  );
};

export default Services;

// Title Section
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row className="justify-content-center ">
          <Col xl={8} lg={10} md={10}>
            <Slide bottom>
              <section className="text-center mobtl">
                <h1 className="fs80 mb24 mobMb10 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite">
                  Experiences that Ensure Engagement
                  <sup className="colorRed ml5">*</sup>
                </h1>
                <p className="colorWhite fs22 mb0 mobFs18 tabFs18 tabLgFs18 ">
                  <sup className="colorRed">*</sup>
                  And for the ones with grand ambitions
                </p>
              </section>
            </Slide>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Slider
const ServiceSlider = () => {
  return (
    <>
      <section className="mb100 mobMb60">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={2000}
          autoplay={{ delay: 1000 }}
          spaceBetween={10}
          slidesPerView={10}
          onSlideChange={() => {}}
          onSwiper={() => {}}
          // breakpoints={{
          //   // when window width is >= 640px
          //   300: {
          //     width: 300,
          //     slidesPerView: 1,
          //   },
          //   // when window width is >= 768px
          //   550: {
          //     width: 550,
          //     slidesPerView: 2,
          //   },
          //   992: {
          //     width: 992,
          //     slidesPerView: 3,
          //   },
          //   1201: {
          //     width: 1201,
          //     slidesPerView: 4,
          //   },
          //   1360: {
          //     width: 1360,
          //     slidesPerView: 4,
          //   },
          // }}
        >
          <div className="bloggerList">
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage radius="18px" radiusMob="5px" src={Img.Rectangle} />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </section>
    </>
  );
};

// Mobile Design & Development
const Mobile = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center">
          <Col md={6}>
            <section>
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 width52 mobWidth100 tabWidth100 tabLgWidth100">
                  <Link to="/uidesign-services" className="colorWhite">
                    Mobile Design & Development
                  </Link>
                </h2>
                <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorWhite mb20 mobMb10  width81 mobWidth100 tabWidth100 tabLgWidth100">
                  Understanding and executing what works in the smartphone age
                  of today and delivering experience and expertise in a bundle!
                </p>
                <Row>
                  <Col lg={6} xs={6}>
                    <ul className="mobile-ul noUl colorLightBlack fs17 tabFs15 tabLgFs15 mobFs15">
                      <li className="ml11 mb10">iOS Apps</li>
                      <li className="ml11 mb10">Android Apps</li>
                    </ul>
                  </Col>
                  <Col lg={6} xs={6}>
                    <ul className="mobile-ul noUl colorLightBlack fs17 tabFs15 tabLgFs15 mobFs15">
                      <li className="ml11 mb10">Hybrid Apps</li>
                      <li className="ml11 mb10">Wearable Apps</li>
                    </ul>
                  </Col>
                </Row>
              </Slide>
            </section>
          </Col>
          <Col md={6}>
            <section>
              <div>
                <Slide bottom>
                  <GImage
                    radius="24px"
                    radiusMob="5px"
                    src={Img.redrectangle}
                  />
                </Slide>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Website Design & Development
const Website = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center flexreverse">
          <Col md={6}>
            <section>
              <Slide bottom>
                <div>
                  <GImage
                    radius="24px"
                    radiusMob="5px"
                    src={Img.redrectangle}
                  />
                </div>
              </Slide>
            </section>
          </Col>
          <Col md={6}>
            <section className="ml90 mobMl0 ml0Tab">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 width67 mobWidth100 tabWidth100 tabLgWidth100">
                  <Link to="/single-services-page" className="colorWhite">
                    Website Design & Development
                  </Link>
                </h2>
                <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorWhite mb20 mobMb10 ">
                  Websites are the first point of contact between brands and
                  customers today, and we help ensure that it’s just perfect!
                </p>
                <Row>
                  <Col lg={6} xs={6}>
                    <ul className="mobile-ul noUl colorLightBlack fs17 tabFs15 tabLgFs15 mobFs15">
                      <li className="ml11 mb10">UI/UX Design</li>
                      <li className="ml11 mb10">Audit and Analytics</li>
                      <li className="ml11 mb10">Frameworks</li>
                      <li className="ml11 mb10">CMS Integration</li>
                    </ul>
                  </Col>
                  <Col lg={6} xs={6}>
                    <ul className="mobile-ul noUl colorLightBlack fs17 tabFs15 tabLgFs15 mobFs15">
                      <li className="ml11 mb10">E-commerce Stores</li>
                      <li className="ml11 mb10">Web Development</li>
                      <li className="ml11 mb10">Hosting</li>
                      <li className="ml11 mb10">Maintenance & Support</li>
                    </ul>
                  </Col>
                </Row>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Digital Marketing
const Digital = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center">
          <Col md={6}>
            <Slide bottom>
              <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10">
                <Link to="/digital-marketing" className="colorWhite">
                  Digital Marketing
                </Link>
              </h2>
              <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorWhite mb20 mobMb10  width83 mobWidth100 tabWidth100 tabLgWidth100">
                Enhancing online presence on all platforms is the recipe to
                success, and our great content and campaigns make that happen.
              </p>
              <Row>
                <Col lg={6} xs={6}>
                  <ul className="mobile-ul noUl colorLightBlack fs17 tabFs15 tabLgFs15 mobFs15">
                    <li className="ml11 mb10">Social Media Marketing</li>
                    <li className="ml11 mb10">SEO</li>
                    <li className="ml11 mb10">SMO</li>
                    <li className="ml11 mb10">Content Marketing</li>
                  </ul>
                </Col>
                <Col lg={6} xs={6}>
                  <ul className="mobile-ul noUl colorLightBlack fs17 tabFs15 tabLgFs15 mobFs15">
                    <li className="ml11 mb10">Inbound Marketing</li>
                    <li className="ml11 mb10">E-mail Marketing</li>
                    <li className="ml11 mb10">Affiliate Marketing</li>
                    <li className="ml11 mb10">Online PR</li>
                  </ul>
                </Col>
              </Row>
            </Slide>
          </Col>
          <Col md={6}>
            <section>
              <div className="mb15">
                <Slide bottom>
                  <GImage
                    radius="24px"
                    radiusMob="5px"
                    src={Img.redrectangle}
                  />
                </Slide>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Branding
const Branding = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center flexreverse">
          <Col md={6}>
            <section>
              <div>
                <Slide bottom>
                  <GImage
                    radius="24px"
                    radiusMob="5px"
                    src={Img.redrectangle}
                  />
                </Slide>
              </div>
            </section>
          </Col>
          <Col md={6}>
            <section className="ml90 mobMl0 ml0Tab">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10">
                  <Link to="/digital-marketing1" className="colorWhite">
                    Branding
                  </Link>
                </h2>
                <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorWhite mb20 mobMb10  width94 mobWidth100 tabWidth100 tabLgWidth100">
                  Being a business and being a brand are two different things-
                  we make sure you become a true brand in your industrial niche.
                </p>
                <Row>
                  <Col lg={6} xs={6}>
                    <ul className="mobile-ul noUl colorLightBlack fs17 tabFs15 tabLgFs15 mobFs15">
                      <li className="ml11 mb10">Brand identity</li>
                      <li className="ml11 mb10">Brand strategy</li>
                      <li className="ml11 mb10">Brand positioning</li>
                    </ul>
                  </Col>
                  <Col lg={6} xs={6}>
                    <ul className="mobile-ul noUl colorLightBlack fs17 tabFs15 tabLgFs15 mobFs15">
                      <li className="ml11 mb10">Brand Guide</li>
                      <li className="ml11 mb10">Packaging Solutions</li>
                    </ul>
                  </Col>
                </Row>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Slider
const Slider = () => {
  return (
    <section className="bgLightGrey pt100 pb100 mobPt40 mobPb40 mobPb0 mb100 mobMb60">
      <Container>
        <section className="mb40 mobMb20">
          <Slide bottom>
            <div className="bBottom pb15">
              <GAlign align="between" alignV="center" className="flex-wrap">
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb0 mobMb10">
                  Steps Involved in the Process
                </h2>
                <div className="">
                  <span>
                    <img
                      src={Img.leftarrow}
                      alt=""
                      className="img-fluid mr15"
                    />
                  </span>
                  <span>
                    <img src={Img.rightarrow} alt="" className="img-fluid" />
                  </span>
                </div>
              </GAlign>
            </div>
          </Slide>
        </section>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          // navigation={{clickable: true}} (Arrow)
          // pagination={{ clickable: true }}(Dots)
          loop={true}
          speed={2000}
          autoplay={{ delay: 1000 }}
          spaceBetween={10}
          slidesPerView={4}
          onSlideChange={() => {}}
          onSwiper={() => {}}
          breakpoints={{
            // when window width is >= 640px
            300: {
              width: 300,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            550: {
              width: 550,
              slidesPerView: 2,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
            1201: {
              width: 1201,
              slidesPerView: 4,
            },
            1360: {
              width: 1360,
              slidesPerView: 4,
            },
          }}
        >
          <div className="bloggerList">
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Research
                  </h3>
                  <p className="fs16 colorLightBlack  mb0">
                    Understanding market dynamics and trends are the stepping
                    stone to further success. In-depth research and analysis,
                    and then the derived inferences form the foundation of our
                    work ahead.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Analysis
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack  mb0">
                    Our analysis is no mean feat and involves much more head and
                    heart than the traditional surveys that once ruled the
                    market analysis. The right analysis brings the right
                    strategic approach.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Concept
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack  mb0">
                    With the right inferences on the side, we then develop a
                    concept to make the business objective relatable &
                    executable. Once the concept becomes watertight, the
                    execution becomes seamless.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Design
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack  mb0">
                    With a solid theoretical concept in place, it’s then time
                    for creating designs that resonate with trends and make the
                    perfect impact, every time a design element leaves the
                    stables for the target audience.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Improve
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack  mb0">
                    With things evolving every day, constant improvements are
                    the need of the hour. We ensure that despite creating great
                    products, constant improvements are always made for
                    future-proofing purposes.
                  </p>
                </section>
              </section>
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

// Approach
const Approach = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center justify-content-center ">
          <Col md={4} className="mb20 mobMb10 dNoneXs">
            <div>
              <Slide bottom>
                <GImage radius="24px" src={Img.a1} />
              </Slide>
            </div>
          </Col>
          <Col md={5} className="mb20 mobMb0">
            <div className="ml40 mobMl0">
              <Slide bottom>
                <p className="fs16 colorRed fw700 mb15">Pixbrand Approach</p>
                <p className="fs28 tabFs20 tabLgFs20 mobFs18 colorWhite ">
                  A user-focused approach is what we aim to achieve at Pixbrand
                  every single time, with every product.
                </p>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack  mobMb0">
                  {" "}
                  User experience is key to engagement and retention, and our
                  team at Pixbrand understands that very well. We minimize the
                  process and maximize the output with our approach.
                </p>
              </Slide>
            </div>
          </Col>
          <Col md={5} className="dNoneXs">
            <div>
              <Slide bottom>
                <GImage radius="24px" src={Img.a2} />
              </Slide>
            </div>
          </Col>
          <Col md={5} className="dNoneXs">
            <div>
              <Slide bottom>
                <GImage radius="24px" src={Img.a3} />
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
