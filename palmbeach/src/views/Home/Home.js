import React, { useState } from "react";
import { Button } from "react-bootstrap";
import * as Styles from "./homestyle.module.css";
import * as GlobalStyle from "../../global.module.css";
import Images from "../../assets/img/Images";
import Svg from "../../assets/SVG/Svg";
import StoryItem from "./StoryItem";
import NavigationMobile from "../NavigationMobile/NavigationMobile";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Link } from "react-router-dom";
import Slider from "react-slick";


export default function Home(props) {

  var SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 10,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const GalleryInitialData = [
  //   {
  //     title: "Martin Pelenur",
  //     type: `Mixed Media,`,
  //     location: "France",
  //     image: Images.homegallery01.default,
  //   },
  //   {
  //     title: "Factoria Santa Rosa",
  //     type: "Ceramics Paintings,",
  //     location: "Mexico",
  //     image: Images.homegallery02.default,
  //   },
  //   {
  //     title: "Miami lab",
  //     type: "Ceramics Paintings,",
  //     location: "Portugal",
  //     image: Images.homegallery03.default,
  //   },
  //   {
  //     title: "Gallery number 4",
  //     type: "Ceramics Paintings,",
  //     location: "Portugal",
  //     image: Images.homegallery04.default,
  //   },
  //   {
  //     title: "05 NYC Gallery",
  //     type: "Ceramics Paintings,",
  //     location: "Portugal",
  //     image: Images.homegallery05.default,
  //   },
  // ];
  const [arrowColor, setArrowColor] = useState("yellow");
  // const [galleryData, setGalleryData] = useState(GalleryInitialData);

  const Section01 = () => {
    return (
      <div class="row">
        <div class="col-sm-12 col-md-6">
        {/* <div className="pd_l_0"> */}
          <Slider {...SliderSettings}>
            <img
              className={Styles.banner_image}
              src={Images.homebanner01.default}
            ></img>{" "}
            <img
              className={Styles.banner_image}
              src={Images.Maskgroup.default}
            ></img>
          </Slider>
        {/* </div> */}
        </div>{" "}
        <div class="col-sm-12 col-md-6 py-5">
          <div
            className={`${Styles.banner_date_767} ${GlobalStyle.hide_1200} ${GlobalStyle.hide_a1200}`}
          >
            03 - 07 FEB 2022{" "}
          </div>{" "}
          <a href="#"> </a>{" "}
          <div className={Styles.right_side_container}>
            <div
              className={Styles.banner_heading + " " + GlobalStyle.fs_4vw_767}
            >
              NEXT LEVEL FAIRS{" "}
            </div>{" "}
            <div className={Styles.banner_title + " " + GlobalStyle.fs_6vw_767}>
              PALM BEACH INTERNATIONAL FINE ART FAIR{" "}
            </div>{" "}
            <div
              className={`${Styles.banner_date} ${GlobalStyle.fs_5vw_767} ${GlobalStyle.hide_767}`}
            >
              03— 07 FEB 2022{" "}
            </div>{" "}
            <div
              className={Styles.banner_location + " " + GlobalStyle.fs_4vw_767}
            >
              PALM BEACH COUNTY CONVENTION CENTER{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  };

  const Section02 = () => {
    return (
      <div class="row mb-4">
        <div
          className={`${Styles.welcome_msg_container} ${GlobalStyle.fs_4vw_767} ${GlobalStyle.fs_2vw_1200}`}
        >
          <div
            className={`w-75 ${GlobalStyle.w_50_1200} ${GlobalStyle.w_70_767}`}
          >
            Welcome to the return of Palm Beach International Fine Art fair the
            meeting place for collectors and the world’ s finest art
            dealers.Spanning centuries of art the fair continues its commitment
            to bringing today’ s most collectible paintings and fine art to Palm
            Beaches each winter.{" "}
          </div>{" "}
          <div
            className={`mt-2 ${GlobalStyle.w_50_1200} ${GlobalStyle.w_10_767}`}
          >
            {Svg.signature}{" "}
          </div>{" "}
          <div
            className={`${GlobalStyle.w_50_1200} ${GlobalStyle.w_70_767} ${GlobalStyle.fs_3vw_767} ${GlobalStyle.fs_1vw_a1200} ${GlobalStyle.color_yellow}`}
          >
            Lee Ann Lester{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  };

  const Section03 = () => {
    return (
      <>
        <div className={`${Styles.storycontainer}`}>
          <div
            className={`${Styles.storytitle} ${GlobalStyle.fs_3vw_a1200} ${GlobalStyle.fs_6vw_767} p-3`}
          >
            PBIFAF NEWS{" "}
          </div>{" "}
          <div className="row pt-3">
            <div className={`col-xs-12 col-md-4 ${Styles.storyitemcontainer}`}>
              <StoryItem
                image={Images.homestory01.default}
                title={"NEXT LEVEL FAIRS"}
                title02={"NEXT LEVEL FAIRS announces PBIFAF 2022"}
                discription={
                  "David and Lee Ann Lester – organizers of more than 100 International fine art fairs since 1991 - are pleased to present the Palm Beach International Fine Art, a new and highly innovative art fair concept in the Palm Beaches."
                }
                datetime={"October, 29 2022"}
                read={"Read more"}
              />{" "}
              {/* <a href="">Read more</a> */}
            </div>{" "}
            <div className={`col-xs-12 col-md-4 ${Styles.storyitemcontainer}`}>
              <StoryItem
                image={Images.homestory02.default}
                title={"Norton Museum of Art"}
                title022={
                  "Mexican modernism to feature Frida Kahlo & Diego Rivera"
                }
                discription={
                  "Frida Kahlo, Diego Rivera and Mexican Modernism from the Jacques and Natasha Gelman Collection will be the Norton’s first large-scale exhibition devoted to Mexican modernism."
                }
                datetime={"October, 2022"}
                read2={"Read more"}
              />{" "}
            </div>{" "}
            <div className={`col-xs-12 col-md-4 ${Styles.storyitemcontainer}`}>
              <StoryItem
                image={Images.homestory03.default}
                title={"Boca Raton Museum"}
                title023={
                  "Boca Raton Museum “Machu Picchu & the Golden Empires of Peru”"
                }
                discription={
                  "Embark on a journey through time and discover a culture that thrived in a mythic world."
                }
                datetime={"October, 2022"}
                read3={"Read more"}
              />{" "}
            </div>{" "}
            <div className="pb-4"> </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="d-flex justify-content-center justify-content-md-end align-items-center mb-5">
          {/* <div
            onMouseEnter={() => setArrowColor("white")}
            onMouseLeave={() => setArrowColor("yellow")}
            // onClick={() => alert("clicked")}
            className={`${Styles.linkbutton} ${GlobalStyle.fs_1vw_1200} ${GlobalStyle.fs_4vw_767} `}
          >
            All Stories{" "}
          </div>{" "} */}
        </div>{" "}
      </>
    );
  };

  const Section04 = () => {
    return (
      <>
        {" "}
        {/* <div
                                                          className={`${Styles.storytitle} ${GlobalStyle.fs_3vw_a1200} ${GlobalStyle.fs_6vw_767} p-3 mb-5`}
                                                        >
                                                          GALLERIES
                                                        </div>
                                                        <div class="list-group mb-5">
                                                          {galleryData.map((item) => {
                                                            return (
                                                              <>
                                                                <a
                                                                  href="#"
                                                                  class={`list-group-item list-group-item-action p-3 ${GlobalStyle.f_worksons_b} ${Styles.gallery_item}`}
                                                                >
                                                                  <div className="row">
                                                                    <div
                                                                      className={`col-8 col-md-7 ${GlobalStyle.fs_3vw_a1200} ${GlobalStyle.fs_3vw_1200} ${GlobalStyle.fs_5vw_767}`}
                                                                    >
                                                                      <div className="col">{item.title}</div>
                                                                      <div
                                                                        className={`col d-block d-md-none ${GlobalStyle.f_worksons_r} ${GlobalStyle.fs_2vw_1200} ${GlobalStyle.fs_4vw_767}`}
                                                                      >
                                                                        <div className="d-flex justify-content-start">
                                                                          {item.type}
                                                                        </div>
                                                                        <div
                                                                          className={`d-flex justify-content-start ${GlobalStyle.f_spacemono_b} `}
                                                                        >{`${item.location}`}</div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      className={`col-4 col-md-3 d-none d-md-block ${GlobalStyle.f_worksons_r} ${GlobalStyle.fs_2vw_1200} ${GlobalStyle.fs_4vw_767}`}
                                                                    >
                                                                      <div className="d-flex justify-content-end">
                                                                        {item.type}
                                                                      </div>
                                                                      <div
                                                                        className={`d-flex justify-content-end ${GlobalStyle.f_spacemono_b} `}
                                                                      >{`${item.location}`}</div>
                                                                    </div>
                                                                    <div
                                                                      className={`col-4 col-md-2 d-flex justify-content-end`}
                                                                    >
                                                                      <img className="image" src={item.image} />
                                                                    </div>
                                                                  </div>
                                                                </a>
                                                              </>
                                                            );
                                                          })}
                                                        </div>
                                                        <div className="d-flex justify-content-center justify-content-md-end align-items-center mb-5">
                                                          <div
                                                            onMouseEnter={() => setArrowColor("white")}
                                                            onMouseLeave={() => setArrowColor("yellow")}
                                                            onClick={() => alert("clicked")}
                                                            className={`btn btn-light ${Styles.linkbutton} ${GlobalStyle.fs_1vw_1200} ${GlobalStyle.fs_4vw_767} `}
                                                          >
                                                            All Artists {Svg.forwardarrow({ color: arrowColor })}
                                                          </div>
                                                        </div> */}{" "}
      </>
    );
  };
  return (
    <div class="container-fluid p_lr_0">
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <CookieConsent
        className="f_worksons_r"
        location="bottom"
        enableDeclineButton
        declineButtonText={Svg.Cross}
        onDecline={() => {
          alert("nay!");
        }}
        buttonText="Accept All Cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#171915" }}
        buttonStyle={{ background: "#FAE04B", color: "#000", fontSize: "13px" }}
        expires={150}
      >
        <p className="m_b_0 f14">
          By clicking“ Accept All Cookies”, you agree to the storing of cookies
          on your device to enhance site navigation, analyze site usage, and
          assist in our marketing efforts.{" "}
        </p>{" "}
      </CookieConsent>{" "}
    </div>
  );
}
