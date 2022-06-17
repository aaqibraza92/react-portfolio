import React from "react";
import Img from "../../../assets/Img/Img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import GImage from "../../../components/Layout/GImage/GImage";
import { Container } from "reactstrap";
import 'swiper/css';
import "swiper/css/navigation";
import { useTranslation } from 'react-i18next';

const slides = Array.from({ length: 8 }).map(
  (el, index) => `Slide ${index + 1}`
);

const Treatments = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <Container className="pb_45 position-relative slider_home">
      <h3 className="fBold lm mb30">{t("Toptreatmentscategories")}</h3>
      <Swiper
       
        loop={true}
        slidesPerView={6}
        spaceBetween={30}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        onSlideChange={() => {}}
        onSwiper={() => {}}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper home_slider"
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          902: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <div className="mb15 position-relative">
              <GImage radius="8px" className="w-100" src={Img.haircut} />
              <div className="slider_treatment">
                <GImage src={Img.cuting} />
                <h5 className="text-white">Haircut</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Treatments;
