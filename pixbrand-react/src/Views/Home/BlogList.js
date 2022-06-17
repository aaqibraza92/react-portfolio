import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import GSectionTitle from "../../Components/GComponents/GSectionTitle";
import GImage from "../../Components/GComponents/GImage/GImage";
import GSpacing from "../../Components/GComponents/GSpacing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Img from "../../Assets/Img/Img";
import { Link } from "react-router-dom";
import Svg from "../../Assets/Svg/Svg";
import Fade from "react-reveal/Fade";

const WrapperBlog = styled.div`
  background: #191919;
`;
const BlogList = () => {
  return (
    <WrapperBlog className="pt100 pb100 mobPb40 mobPt40">
      <Container>
      <Fade bottom cascade>
          <GSpacing mb="40px" mobmb="0px">
          
              <GSectionTitle
                mtTitle="10px"
                widthTitle="68%"
                WidthTabLgTitle="56%"
                WidthTabTitle="75%"
                tt="uppercase"
                fsT="40px"
                pretitle="Our Blogs"
                fwPt="bold"
                colorPt="#FF0A2B"
                title="Latest stories, insights and ideas about design and technology of modern times."
              />
          </GSpacing>
       

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={2000}
          autoplay={{ delay: 1000 }}
          spaceBetween={50}
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
           <Fade bottom cascade>
           <div className="bloggerList">
            <SwiperSlide>
              <div className="mb15">
                <GImage radius="24px" src={Img.b1} />
              </div>
              <p>
                <Link
                  className="colorWhite fs20 tabFs16 tabLgFs16 mobFs16 lh28 hoverRed"
                  to="#"
                >
                  Smart way to create mobile-friendly content
                </Link>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage radius="24px" src={Img.b2} />
              </div>
              <p>
                <Link
                  className="colorWhite fs20 tabFs16 tabLgFs16 mobFs16 lh28 hoverRed"
                  to="#"
                >
                  Top 10 things to ask before hiring eCommerce development
                  company Boston
                </Link>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage radius="24px" src={Img.b3} />
              </div>
              <p>
                <Link
                  className="colorWhite fs20 tabFs16 tabLgFs16 mobFs16 lh28 hoverRed"
                  to="#"
                >
                  Top 5 reasons you should start an ecommerce business
                </Link>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage radius="24px" src={Img.b4} />
              </div>
              <p>
                <Link
                  className="colorWhite fs20 tabFs16 tabLgFs16 mobFs16 lh28 hoverRed"
                  to="#"
                >
                  How Hiring Offshore hybrid developer is better than In-House?
                </Link>
              </p>
            </SwiperSlide>
          </div>
           </Fade>
       
        </Swiper>


        <div className="d-inline-block mt30">
        <Fade bottom cascade>
          <Link
            to="#"
            className="arrowLink colorWhite d-flex align-items-center "
          >
            <span className="mr10 fs14 tabFs12 tabLgFs12 mobFs12">
              See all work
            </span>{" "}
            <span className="circleArrow d-flex align-items-center radius100 justify-content-center">
              {Svg.arrowRight}
            </span>
          </Link>
          </Fade>
        </div>
        </Fade>
      </Container>
    </WrapperBlog>
  );
};

export default BlogList;
