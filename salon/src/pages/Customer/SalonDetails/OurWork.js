import React from "react";
import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import GImage from "../../../components/Layout/GImage/GImage";
import Img from "../../../assets/Img/Img";
import { useTranslation } from "react-i18next";
import GSpacing from "../../../components/Layout/GSpacing";
import Svg from "../../../assets/svg/Svg";

const OurWork = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const slides = Array.from({ length: 12 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  return (
    <>
      <Container>
        <GSpacing paddingTop="80px">
          <h2 className="fs18 lm mb20"><span className="mr10">{Svg.multiplegallery}</span> {"Ourwork"}</h2>
          <Swiper
            loop={true}
            slidesPerView={5}
            spaceBetween={10}
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
                slidesPerView: 5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              902: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {slides.map((slideContent, index) => (
              <SwiperSlide key={slideContent} virtualIndex={index}>
                <div>
                  <GImage radius="8px" src={Img.ourwork} />
                  <h3 className="fs14 lm pt10 mb0">
                    <GImage
                      radius="100%"
                      height="24px"
                      width="24px"
                      marginRight="10px"
                      src={Img.ourwork}
                    />
                    Ann Bryant <span className="colorGrey mr5">3.5</span>
                    <span>{Svg.star}</span>
                  </h3>
                  <p className="fs15 colorGrey mb10 pt10">
                    I’m a hairdresser over 15 years and also I’m a scalp
                    micro....
                  </p>
                  <p className="fs14 colorRed mb0">Ladies - Wash & Blow Dry  •  1 hr</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </GSpacing>
      </Container>
    </>
  );
};

export default OurWork;
