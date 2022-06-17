import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Img from "../../Assets/Img/Img";
import GImage from "../../Components/GComponents/GImage/GImage";
import GAlign from "../../Components/GComponents/GAlign";
import Svg from "../../Assets/Svg/Svg";
import "./DigitalMarketing.css";
import Services3 from "../Home/Services3";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";

// Text Font Size 14 - fs14 tabFs13 tabLgFs13 mobFs13
// Text Font Size 17(Thin) - fs17 tabFs15 tabLgFs15 mobFs15 fThin
// Text Font Size 20 - fs20 tabFs16 tabLgFs16 mobFs16
// Text Font Size 22(Thin) - fs22 mobFs18 tabFs18 tabLgFs18 fThin mb0
// Text Font Size 28 - fs28 tabFs20 tabLgFs20 mobFs18
// Text Font Size 32 - fs32 tabFs24 tabLgFs24 mobFs20 fThin
// Text Font Size 40 - fs40 tabFs28 tabLgFs28 mobFs24 mb100 mobMb15
// Title Font Size 80 - fs80 tabFs60 tabLgFs60 mobFs45

const NeuroData = [
  {
    svg: Svg.ball,
    title: "Mail Marketing",
    desc: "Take your brand to the right audiences by reaching their inboxes through customized mails for the right pitch and impact. ",
  },
  {
    svg: Svg.ideas,
    title: "Search Engine Optimization",
    desc: "We have mastered the SEO process, helping you rank better and more dominantly on search engines with 100% organic results. ",
  },
  ,
  {
    svg: Svg.excellence,
    title: "Affiliated Marketing",
    desc: "Pix Brand helps you earn and assist your marketing efforts by using other products or services through affiliate marketing, a great way to grow!",
  },
  {
    svg: Svg.ball,
    title: "Social Media Marketing",
    desc: "Leverage the social media trend to grow and create a community where the right content can prove to be a highly engaging tool for your brand. ",
  },
  {
    svg: Svg.ideas,
    title: "Inbound Marketing",
    desc: "We know the importance of tailored content better than anyone else, and we use it to create retention rates that are truly effective and efficient. ",
  },
  {
    svg: Svg.excellence,
    title: "Online PR",
    desc: "In a digital world, digital reputation is everything, which is why our online reputation-building methods provide a delightful branding avenue to you. ",
  },
  {
    svg: Svg.ball,
    title: "PPC Management",
    desc: "PPC gives you a lot of control over your digital advertising as you are in charge of every penny you spend. We help you with the right allocation!",
  },
  {
    svg: Svg.ideas,
    title: "Content Marketing",
    desc: "Pix Brand does understand the value of great content, and with our marketing efforts focused on content quality, we ensure you can leverage that too. ",
  },
  {
    svg: Svg.excellence,
    title: "Social Media Optimisation",
    desc: "Our digital marketing experts are armed with the right technical knowledge to completely revamp & optimize your existing social media strategy.",
  },
];

const DigitalMarketing = () => {
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
      <DigitalMarketingSlider />
      <Perceptions />
      <NeuroMarketing />
      <Slider />
      <How />
      <Services3 />
    </div>
  );
};

export default DigitalMarketing;

// Title
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row className="justify-content-center ">
          <Col xl={10} lg={10} md={12}>
            <section className="text-center mobtl">
              <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
                <Slide bottom>Result-Oriented Digital Marketing Services</Slide>
              </h1>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Slider
const DigitalMarketingSlider = () => {
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
                <div>
                  <GImage radius="24px" radiusMob="15px" src={Img.digital} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <GImage radius="24px" radiusMob="15px" src={Img.digital} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <GImage radius="24px" radiusMob="15px" src={Img.digital} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <GImage radius="24px" radiusMob="15px" src={Img.digital} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <GImage radius="24px" radiusMob="15px" src={Img.digital} />
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

// Perceptions
const Perceptions = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center flexreverse">
          <Col md={6}>
            <div>
              <Slide bottom>
                <img src={Img.ui} alt="" className="w-100" />
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <section className="ml90 mobMl0 ml0Tab mobMb10">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10">
                  Developing the Right Retention Measures & Solutions
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                  To differentiate the right marketing from just marketing, our
                  digital marketing experts at Pix Brand focus on delivering
                  measurable results for enhancing your digital visibility
                  across the virtual ecosystem.
                </p>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                  The results of our digital marketing campaign are built to
                  last and offer more for your investment than any other
                  marketing process. With our branding expertise, we incorporate
                  digital marketing from the very first day, so that it all
                  comes together seamlessly.
                </p>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// NeuroMarketing Section
const NeuroMarketing = () => {
  return (
    <>
      <Container className="mb60 mobMb40">
        <section className="text-center">
          <Slide bottom>
            <h3 className="fs16 colorRed fw700 mb20 mobMb10">
              Want to know more?
            </h3>
            <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb40 mobMb20 colorWhite width63 mobWidth100 tabWidth100 mx-auto">
              We offer an end-to-end Digital Marketing suite for Absolute
              Sophistication
            </h2>
          </Slide>
        </section>

        <Row>
          {NeuroData.map((obj, index) => {
            return (
              <>
                <Col md={4} className="mb40 mobMb20" key={index}>
                  <section className="text-center">
                    <Slide bottom>
                      <div className="mb20 mobMb10">{obj.svg}</div>
                      <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                        {obj.title}
                      </h3>
                      <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                        {obj.desc}
                      </p>
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

// Slider
const Slider = () => {
  return (
    <section className="bgLightGrey pt100 pb100 mobPt40 mobPb40 mobPb0 mb100 mobMb60">
      <Container>
        <section className="mb40 mobMb20">
          <Slide bottom>
            <div className="bBottom pb20">
              <h3 className="fs16 colorRed fw700 mb20 mobMb10">
                How we nail Digital Marketing
              </h3>
              <GAlign align="between" alignV="center" className="flex-wrap">
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb0 mobMb10 width68 mobWidth100 tabWidth100 ">
                  We follow a well-defined 5-step process that delivers
                  exceptional digital marketing results.
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
          loop={true}
          speed={2000}
          // autoplay={{ delay: 1000 }}
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
                  <p className="fs16 colorLightBlack mb0">
                    It is crucial to understand market trends and competitors
                    before developing a digital marketing strategy. Meticulous
                    research is where we begin.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Positioning
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    Understanding market sentiments and the right brand position
                    has a lot to do with the long-term results of every digital
                    marketing campaign we execute. Delivers a better brand
                    message.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Creative
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    To stand out from the rest, creativity plays a huge role and
                    our digital marketers know that best. Every design for
                    digital marketing has a strong underlying philosophy.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Marketing
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    After everything, it’s essential to take the prepared
                    resources to the right target audiences, made possible with
                    our customized digital marketing services.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Management
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    For digital marketing to keep delivering results on a
                    consistent basis, our digital marketing experts take their
                    own sweet time managing existing campaigns so that results
                    are always measurable.
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

// How we do it
const How = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center">
          <Col md={6} className="mobMb15">
            <section className="width80 mobWidth100 tabWidth100 tabLgWidth100">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10">
                  Digital Marketing With Pixbrand
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                  Our philosophy has always been making organizations of all
                  sizes scalable and efficient in their digital efforts to have
                  their own standing in this increasingly virtual world. With
                  the right technology, tools, and human resources, we ensure
                  measurable marketing results professionally.
                </p>
              </Slide>
            </section>
          </Col>
          <Col md={6}>
            <section>
              <div>
                {/* <img src={Img.} alt="" className="w-100" /> */}
                <Slide bottom>
                  <GImage radius="24px" radiusMob="12px" src={Img.Schedule} />
                </Slide>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};
