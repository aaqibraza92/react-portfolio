import React from "react";
import { Link } from "react-router-dom";
import { CardText, CardTitle, Col, Container, Row } from "reactstrap";
import GButton from "../../components/Layout/GButton";
import "./ForYourBusiness.css";
import { useTranslation } from "react-i18next";
import Img from "../../assets/Img/Img";
import GImage from "../../components/Layout/GImage/GImage";
import VideoModal from "../../components/CmnVideoModal/CmnVideoModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import GLink from "../../components/Layout/GLink";

const slides = Array.from({ length: 8 }).map(
  (el, index) => `Slide ${index + 1}`
);

const ForYourBusiness = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  function AboutHeading(props) {
    return (
      <>
        <CardTitle tag="h3" className="lm">
          {props.title}
        </CardTitle>
        <CardText>{props.text}</CardText>
        <CardText>{props.text1}</CardText>
      </>
    );
  }

  function FiveBox(props) {
    return (
      <>
        <div className="mb-3">
          <CardTitle tag="h5" className="lm">
            {props.title}
          </CardTitle>
          <CardText className="">{props.text}</CardText>
        </div>
      </>
    );
  }

  function ThreeBox(props) {
    return (
      <>
        <div className="mb-3 text-center">
          <GImage src={props.Svg} />
          <CardTitle tag="h5" className="text-white mt15">
            {props.title}
          </CardTitle>
        </div>
      </>
    );
  }

  return (
    <>
   

      <section className="pt110 pb110 bg_dark mb80">
        <Container>
          <Row>
            <Col className="text-white" md={12} lg={7}>
              <CardTitle tag="h1" className="lb fs45 mb-4">
                {t("TheSalonManagement")}
              </CardTitle>
              <CardText className="fs18 mb-4">
                {t("TheSalonManagementSubText")}
              </CardText>
              <div className="mx-auto">
                <GLink
                  to="/become-provider"
                  text="Become a partner"
                  className="buttonType w-100"
                >
                  {t("TheSalonManagementButton")}
                </GLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mb80">
        <Container>
          <Row className="gx-5 align-items-center">
            <Col className="text-center m-auto pb40" md={8} lg={5}>
              <AboutHeading title={t("Europestopbeauty")} />
            </Col>
          </Row>
          <Row>
            <Swiper
              loop={true}
              slidesPerView={3}
              spaceBetween={30}
              centeredSlides={true}
              centeredSlidesBounds={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onSlideChange={() => {}}
              onSwiper={() => {}}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper home_slider_second"
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                902: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {/* {slides.map((slideContent, index) => ( */}
              <SwiperSlide>
                <div className="mb15 position-relative">
                  <GImage radius="8px" className="w-100" src={Img.rectangle} />
                  <div className="slider_center">
                    <p className="fs20">
                      Hosting my home allowed me to become an entrepreneur and
                      laid down a path to financial freedom.
                    </p>
                    <h5 className="lm">Haircut1</h5>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mb15 position-relative">
                  <GImage radius="8px" className="w-100" src={Img.rectangle} />
                  <div className="slider_center">
                    <p className="fs20">
                      Hosting my home allowed me to become an entrepreneur and
                      laid down a path to financial freedom.
                    </p>
                    <h5 className="lm">Haircut2</h5>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mb15 position-relative">
                  <GImage radius="8px" className="w-100" src={Img.rectangle} />
                  <div className="slider_center">
                    <p className="fs20">
                      Hosting my home allowed me to become an entrepreneur and
                      laid down a path to financial freedom.
                    </p>
                    <h5 className="lm">Haircut3</h5>
                  </div>
                </div>
              </SwiperSlide>

              {/* ))} */}
            </Swiper>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="gx-5 align-items-center">
            <Col className="text-center m-auto pb40" lg="5" md="8">
              <AboutHeading title={t("Europestopbeauty")} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="wrappervideo d-flex align-items-center justify-content-center">
                <img className="img-fluid radius " src={Img.popup} alt="" />
                <div className="vidFire position-absolute">
                  <VideoModal videoID="D0UnqGm_miA" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Beauty />
      </section>

      <section className="mb60">
        <Container>
          <Row className="align-items-center">
            <Col className="prc0" md={6}>
              <div className="p30 bg_bolor_grey radius_left ">
                <CardTitle tag="h2" className="lm">
                  {t("TheGenerated")}
                </CardTitle>
                <CardText className="mt15">{t("TheGeneratedSubText")}</CardText>
              </div>
            </Col>
            <Col className="text-center plc0" md={6}>
              <GImage className="w-100" src={Img.pinkone} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mb60">
        <Container>
          <Row className="align-items-center">
            <Col className="text-center prc0" md={6}>
              <GImage className="w-100" src={Img.pinkone} />
            </Col>
            <Col className="plc0" md={6}>
              <div className="p30 bg_bolor_grey radius_left">
                <CardTitle tag="h2" className="lm">
                  {t("TheGeneratedTwo")}
                </CardTitle>
                <CardText className="mt15">
                  {t("TheGeneratedSubTextTwo")}
                </CardText>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="letswork pt90 pb90">
        <Container>
          <Row>
            <Col className="text-center text-white" md={12}>
              <AboutHeading
                title={t("Letsworkwonderstogether")}
                text={t("LetsworkwonderstogetherSubText")}
              />
            </Col>
          </Row>
          <Row className="gx-5 pt30 pb30">
            <Col md={4} className="mobMb15">
              <ThreeBox Svg={Img.rightgreen} title={t("Openthedoor")} />
            </Col>

            <Col className="text-center mobMb15" md={4}>
              <ThreeBox Svg={Img.rightgreen} title={t("Openthedoor")} />
              <GButton>{t("GetStarted")}</GButton>
            </Col>

            <Col md={4} className="mobMb15">
              <ThreeBox Svg={Img.rightgreen} title={t("Openthedoor")} />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="gx-5 pt50 pb50 align-items-center">
            <Col className="text-center m-auto pb40" md="8">
              <AboutHeading title={t("Cantfind")} text={t("CantfindSubText")} />
            </Col>
            <Col md="6">
              <FiveBox
                title={t("DigitalCalendar")}
                text={t("DigitalCalendarSub")}
              />
              <FiveBox
                title={t("MarketingandPromotions")}
                text={t("MarketingandPromotionsSub")}
              />
              <FiveBox
                title={t("ReportingandAnalytics")}
                text={t("ReportingandAnalyticsSub")}
              />
              <FiveBox
                title={t("StockManagement")}
                text={t("StockManagementSub")}
              />
              <FiveBox title={t("CashPayments")} text={t("CashPaymentsSub")} />
            </Col>
            <Col md="6">
              <GImage src={Img.fourimages} />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="pt50 pb50">
          <Row className="gx-5 align-items-center">
            <Col className="text-center m-auto pb40" md="4">
              <AboutHeading title={t("Discoverthelatest")} />
            </Col>
          </Row>
          <Row className="gx-5 align-items-center">
            <Col md={4}>
              <div className="card-body_box radius">
                <div className="mb10">
                  <GImage className="w-100" src={Img.cardbox} />
                </div>
                <div className="pt15 pb10 pl15 pr15">
                  <p>{t("MakeYour")}</p>
                  <p>{t("MakeYourDate")}</p>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="card-body_box radius">
                <div className="mb10">
                  <GImage className="w-100" src={Img.cardbox} />
                </div>
                <div className="pt15 pb10 pl15 pr15">
                  <p>{t("MakeYour")}</p>
                  <p>{t("MakeYourDate")}</p>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="card-body_box radius">
                <div className="mb10">
                  <GImage className="w-100" src={Img.cardbox} />
                </div>
                <div className="pt15 pb10 pl15 pr15">
                  <p>{t("MakeYour")}</p>
                  <p>{t("MakeYourDate")}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ForYourBusiness;

const Beauty = () => {
  const Data = [
    {
      image: Img.seven,
      title: "Smart prices",
      subtext: "Just book last-minute, or off-peak",
    },
    {
      image: Img.eight,
      title: "Book 24/7",
      subtext: "From bed, or the bus",
    },
    {
      image: Img.nine,
      title: "Choice of top-rated salons",
      subtext: "Thousands of venues (and reviews)",
    },
    {
      image: Img.ten,
      title: "Easy Reschedule or Cancel",
      subtext: "Thousands of venues (and reviews)",
    },
  ];

  return (
    <div className="mb100 mobMb60 mt_75">
      <Container>
        <Row>
          {Data.map((elem, ind) => {
            return (
              <>
                <Col md="3" xs="6" className="mobMb20" align="center" key={ind}>
                  <img className="w-84 mb-3" src={elem.image} alt="third" />
                  <CardTitle className="fs18 colorBlack lm" tag="h5">
                    {elem.title}
                  </CardTitle>
                  <CardText className="fs14 colorGrey">{elem.subtext}</CardText>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

// For Your Business Header //
const ForYourBusinessHeader = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt-3 pb-3 bg_theme border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6} lg={3} sm={6}>
              <Link to="/">
                <GImage src={Img.logo.default} alt="logo" />
              </Link>
            </Col>
            <Col md={6} lg={5} sm={6}>
              <nav role="navigation" className="primary-navigation text-center">
                <ul className="pl-0 mb-0">
                  <li>
                    <Link to="#">Solutions</Link>
                  </li>
                  <li>
                    <Link to="#">Features</Link>
                  </li>
                  <li>
                    <Link to="#">Pricing</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col className="text-end" md={12} lg={4} sm={12}>
              <GLink
                to="/salon/login"
                text="Login Account"
                className="mr10 fs14 text-uppercase"
              ></GLink>
              <GLink
                to="/become-provider"
                text={t("TheSalonManagementButton")}
                className="buttonType"
              ></GLink>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
