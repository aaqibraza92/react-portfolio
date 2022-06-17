import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import GAlign from "../../../components/Layout/GAlign";
import PopularTreatments from "../PopularTreatments/PopularTreatments";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import GImage from "../../../components/Layout/GImage/GImage";
import Img from "../../../assets/Img/Img";
import "./SalonList.css";
import { useTranslation } from "react-i18next";
import Svg from "../../../assets/svg/Svg";
// import axios from "axios";
// import Auth from "../../../helpers/Auth/Auth";
import GButton from "../../../components/Layout/GButton";
import HeaderNavigation from "../../../components/Common/Header/Customer/HeaderNavigation";

const SalonLists = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [salonList, setsalonList] = useState([]);

  const [ischecked, setischecked] = useState(false);
  console.log("Show map ----->>>>>", ischecked);

  return (
    <>
      <HeaderNavigation />
      <Container>
        <GAlign className="pt30 mb15" alignV="center">
          <h4 className="fs15 lm mr15 mb0">{t("Populartreatments")}</h4>
          <GButton
            borderRadius="20px"
            pl="15px"
            pr="15px"
            pt="6px"
            pb="6px"
            mr="10px"
            backgroundColor="#fff"
            border="1px solid #EBEDF1"
            color="#5B5D6B"
          >
            {t("Ladieshaircut")}
          </GButton>
          <GButton
            borderRadius="20px"
            pl="15px"
            pr="15px"
            pt="6px"
            pb="6px"
            mr="10px"
            backgroundColor="#fff"
            border="1px solid #EBEDF1"
            color="#5B5D6B"
          >
            {t("Menshaircut")}
          </GButton>
          <GButton
            borderRadius="20px"
            pl="15px"
            pr="15px"
            pt="6px"
            pb="6px"
            mr="10px"
            backgroundColor="#fff"
            border="1px solid #EBEDF1"
            color="#5B5D6B"
          >
            {t("Ladieshaircolor")}
          </GButton>
          <GButton
            borderRadius="20px"
            pl="15px"
            pr="15px"
            pt="6px"
            pb="6px"
            mr="10px"
            backgroundColor="#fff"
            border="1px solid #EBEDF1"
            color="#5B5D6B"
          >
            {t("Blowdry")}
          </GButton>
          <GButton
            borderRadius="20px"
            pl="15px"
            pr="15px"
            pt="6px"
            pb="6px"
            mr="10px"
            backgroundColor="#fff"
            border="1px solid #EBEDF1"
            color="#5B5D6B"
          >
            {t("Balayage")}
          </GButton>
          <GButton
            borderRadius="20px"
            pl="15px"
            pr="15px"
            pt="6px"
            pb="6px"
            mr="10px"
            backgroundColor="#fff"
            border="1px solid #EBEDF1"
            color="#5B5D6B"
          >
            {t("Childrenhaircut")}
          </GButton>
        </GAlign>
        <h3 className="fs18 lm mb10">{t("Hairdressers")}</h3>
        <GAlign align="between" alignV="center" className="mb20">
          <p className="fs15 colorGrey mb0">{t("Choosefrom")}</p>
          <div className="d-flex align-items-center">
            <p className="fs15 mb0 colorGrey mr15">{ischecked === true ? "Hide map" : "Show map"}</p>
            <label className="switch" id="hidemap">
              <input
                id="showmap"
                // name="showmap"
                type="checkbox"
                onChange={(e) => setischecked(e.target.checked)}
              />
              <span className="slider round"></span>           
            </label>
            <GButton
              backgroundColor="#fff"
              ml="20px"
              border="1px solid #000"
              color="#000"
            >
              <span className="mr10">{Svg.filtersort}</span>
              {t("Filtersort")}
            </GButton>
          </div>
        </GAlign>
        {ischecked === true ? <Results/> :  <Lists/>}
        {/* <Results/> */}
      </Container>
    </>
  );
};

export default SalonLists;

// List page –  Results – map view
const Results = () => {
  return (
    <>
      <Row>
        <Col md={4}>
          <Lists />
        </Col>
        <Col md={8}>
          <GImage src={Img.gmap} width="100%" />
        </Col>
      </Row>
    </>
  );
};

// List page –  Results – hide map
const Lists = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const slides = Array.from({ length: 8 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <>
      <Row>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem, ind) => {
          return (
            <>
              <Col md={6} key={ind.toString()}>
                <section className="border radius mb15">
                  <Row className="pt15 pb15 pl10 pr10">
                    <Col md={4}>
                      <div className="position-relative salon_list_btn">
                        <GButton pt="2px" pb="2px" pl="15px" pr="15px">
                          {t("New")}
                        </GButton>
                      </div>
                      <Swiper
                        loop={true}
                        slidesPerView={1}
                        //   spaceBetween={30}
                        // autoplay={{
                        //   delay: 2500,
                        //   disableOnInteraction: false,
                        // }}
                        onSlideChange={() => {}}
                        onSwiper={() => {}}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        //   className="mySwiper home_slider"
                        breakpoints={{
                          360: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                          },
                          902: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                          },
                        }}
                      >
                        {slides.map((slideContent, index) => (
                          <SwiperSlide key={slideContent} virtualIndex={index} >
                            <div className="salon_list_img">
                              <GImage
                                radius="8px"
                                className=""
                                src={Img.haircut}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </Col>
                    <Col md={8}>
                      <section>
                        <h4 className="fs15 lm mb5">{elem.salonName}</h4>
                        <h5 className="fs14 colorGrey mb5">
                          {elem.overallRating}
                          <span className="mr5 ml5">{Svg.star}</span>
                          <span className="mr5">{Svg.star}</span>
                          <span className="mr5">{Svg.star}</span>
                          <span>({elem.reviewCount} review)</span>
                        </h5>
                        <p className="fs14 colorGrey mb5">{elem.country}</p>
                        <GAlign align="between" alignV="center">
                          <div>
                            <p className="fs14 colorBlue mb5">
                              <span className="mr10">{Svg.Offpeak}</span>
                              {t("Offpeak")}
                            </p>
                            <p className="fs14 lm mb5">
                              <span className="mr10">{Svg.location}</span>
                              {t("Showonmap")}
                            </p>
                          </div>
                          <GImage
                            src={Img.haircut}
                            height="48px"
                            width="48px"
                            radius="100%"
                          />
                        </GAlign>
                      </section>
                    </Col>
                  </Row>
                  <section className="pb15 pl15 pr15 bBottom bTop mb15">
                    <GAlign
                      align="between"
                      alignV="center"
                      className="bBottom pt8 pb8 mb8"
                    >
                      <div>
                        <h4 className="fs14 colorGrey mb8">
                          Ladies - Wash & Blow Dry
                        </h4>
                        <h4 className="fs14 colorTaupeGrey mb0">30 mins</h4>
                      </div>
                      <div>
                        <h4 className="fs14 mb5 text-end">₺7.50</h4>
                        <h4 className="fs14 colorTaupeGrey mb0">₺20.50</h4>
                      </div>
                    </GAlign>
                    <GAlign
                      align="between"
                      alignV="center"
                      className="bBottom pb8 mb8"
                    >
                      <div>
                        <h4 className="fs14 colorGrey mb8">
                          Haircut & Beard Trim
                        </h4>
                        <h4 className="fs14 colorTaupeGrey mb0">30 mins</h4>
                      </div>
                      <div>
                        <h4 className="fs14 mb5 text-end">₺7.50</h4>
                        <h4 className="fs14 colorBlue mb0">Save up to 50%</h4>
                      </div>
                    </GAlign>
                    <GAlign align="between" alignV="center">
                      <div>
                        <h4 className="fs14 colorGrey mb8">
                          Ladies - Wash & Blow Dry
                        </h4>
                        <h4 className="fs14 colorTaupeGrey mb0">30 mins</h4>
                      </div>
                      <div>
                        <h4 className="fs14 mb5 text-end">₺7.50</h4>
                        <h4 className="fs14 colorTaupeGrey mb0">₺20.50</h4>
                      </div>
                    </GAlign>
                  </section>
                  <GAlign
                    align="between"
                    alignV="center"
                    className="pb15 pl15 pr15"
                  >
                    <p className="fs14 lm mb0">{t("Quickviewvenue")}</p>
                    <div>{Svg.rightblackarrow}</div>
                  </GAlign>
                </section>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

// List page - No result
const EmptyResult = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <>
      <Row className="align-items-center justify-content-center">
        <Col md={4}>
          <Row className="align-items-center justify-content-center">
            <Col md={10}>
              <section className="text-center">
                <GImage
                  src={Img.gmap}
                  height="64px"
                  width="64px"
                  radius="100%"
                  marginBottom="20px"
                />
                <h3 className="fs15 lm mb10">{t("Wehaventfound")}</h3>
                <p className="fs14 colorGrey mb0">{t("Trychanging")}</p>
              </section>
            </Col>
          </Row>
        </Col>
        <Col md={8}>
          <GImage src={Img.gmap} width="100%" />
        </Col>
      </Row>
    </>
  );
};
