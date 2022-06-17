import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import GImage from "../../../components/Layout/GImage/GImage";
import Img from "../../../assets/Img/Img";
import { useTranslation } from "react-i18next";
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";

const SalonDetailsSlider = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const slides = Array.from({ length: 8 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  return (
    <>
      <section className="pt30 ">
        <Container>
          <Row>
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
                <SwiperSlide key={slideContent} virtualIndex={index}>
                  <div>
                    <GImage
                      radius="8px"
                      className="w-100"
                      src={Img.salondetail}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <h2 className="fs28 lm pt15">Good Fellas Hair Salon</h2>
            <div className="mb15">
              <span className="fs15 colorDarkYellow">5.0</span>
              <span className="ml5 mr5">{Svg.star}</span>
              <span className="mr5">{Svg.star}</span>
              <span className="mr5">{Svg.star}</span>
              <span className="mr15">{Svg.star}</span>
              <span className="fs15 colorGrey mr20">20 Reviews</span>
              <span>{Svg.Offpeak}</span>
              <span className="fs15 colorBlue ml10">
                Off peak and last minute
              </span>
            </div>
            <Col md={4} className="mb40 mobMb20">
              <div className="salon_detail_location">
                <Row className="align-items-center">
                  <Col md={10}>
                    <GAlign>
                      <span className="mr15">{Svg.redlocation}</span>
                      <div>
                        <h3 className="fs15 lm mb5">{t("Onlylocation")}</h3>
                        <span className="fs15 colorGrey">
                          193 Southborough Lane, pichola lake, Bromley, London
                        </span>
                      </div>
                    </GAlign>
                  </Col>
                  <Col md={2}>
                    <GImage src={Img.location} />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={4} className="mb40 mobMb20">
              <div className="salon_detail_open_hrs">
                <GAlign>
                  <span className="mr15">{Svg.blueclock}</span>
                  <div>
                    <h3 className="fs15 lm mb5">{t("Openinghours")}</h3>
                    <span className="fs15 colorGrey">
                      Open Tomorrow: 10:00 AM - 6:00 PM
                    </span>
                  </div>
                </GAlign>
              </div>
            </Col>
            <Col md={4} className="mb40 mobMb20">
              <h3 className="fs15">{t("Awards")}</h3>
              <GImage
                src={Img.salondetail}
                radius="100%"
                height="70px"
                width="70px"
                marginRight="15px"
              />
              <GImage
                src={Img.salondetail}
                radius="100%"
                height="70px"
                width="70px"
                marginRight="15px"
              />
              <GImage
                src={Img.salondetail}
                radius="100%"
                height="70px"
                width="70px"
              />
            </Col>
            <section className="footer_bg_line height_3 mb40 mobMb20"></section>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SalonDetailsSlider;
