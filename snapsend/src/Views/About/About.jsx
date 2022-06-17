import React, { Component } from "react";
import { useState } from "react";
import Images from "Constant/Images/Images";
import CmnBanner from "Components/CmnBanner/CmnBanner";
import ModalVideo from "react-modal-video";
import CountUp from 'react-countup';
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import "./About.scss";




const VideoModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <button onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
        >
          <g
            id="Group_52326"
            data-name="Group 52326"
            transform="translate(-904.713 -1132.713)"
          >
            <path
              id="Polygon_1"
              data-name="Polygon 1"
              d="M14.561,0,29.123,23.828H0Z"
              transform="translate(957.951 1159.475) rotate(90)"
              fill="#fff"
            />
            <circle
              id="Ellipse_96"
              data-name="Ellipse 96"
              cx="40"
              cy="40"
              r="40"
              transform="translate(904.713 1132.713)"
              fill="#fff"
              opacity="0.5"
            />
          </g>
        </svg>
      </button>
    </React.Fragment>
  );
};

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      service: [
        {
          title: "Finding True Match",
          description:
            "We invest time to assess your business culture. Our sourcing strategy enables us to understand your service requirements.",
        },
        {
          title: "Strategic Hunting Process",
          description:
            "We invest time to assess your business culture. Our sourcing strategy enables us to understand your service requirements. ",
        },
        {
          title: "Robust Screening",
          description:
            "We invest time to assess your business culture. Our sourcing strategy enables us to understand your service requirements.",
        },
        {
          title: "Onboarding Support",
          description:
            "We invest time to assess your business culture. Our sourcing strategy enables us to understand your service requirements.",
        },
        {
          title: "File Your Income Taxes",
          description:
            "We invest time to assess your business culture. Our sourcing strategy enables us to understand your service requirements.",
        },
        {
          title: "Archived Lobbyist Activity",
          description:
            "We invest time to assess your business culture. Our sourcing strategy enables us to understand your service requirements.",
        },
        {
          title: "Transcription Services",
          description:
            "We invest time to assess your business culture. Our sourcing strategy enables us to understand your service requirements.",
        },
        {
          title: "Be Ready Dc",
          description:
            "We invest time to assess your business culture. Our sourcing strategy enables us to understand your service requirements.",
        },
      ],
    };
  }
  render() {
    const { service } = this.state;
    return (
      <>
        <div className="footer_m_none">
          <CmnBanner title="About Us" imageURL={Images.member.default} />

          <div className="wrapperAbout p_t_80">
            <div className="container">
              <div className="row d-flex align-items-center flex-wrap gx-5 m_b_80 gy-5">
                <div className="col-lg-6">
                  <img className="w-100" src={Images.about1.default} alt="" />
                </div>

                <div className="col-lg-6">
                  <h3 className="f32 color_black f_bold m_b_30">
                    About Snap Sand
                  </h3>
                  <p className="m_b_30">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                  <p>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                </div>
              </div>

              <div className="row d-flex align-items-center flex-wrap gx-5 m_b_80 gy-5">
                <div className="col-lg-6">
                  <h3 className="f32 color_black f_bold m_b_30">
                    There Are Many Variations Of Passages Of Lorem Ipsum
                    Available
                  </h3>
                  <p className="m_b_30">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>

                  <ul className="row angle_ul flex-wrap p_l_10">
                    <li className="col-lg-6 col-xs-6">Duis autem vel eum</li>
                    <li className="col-lg-6 col-xs-6">Typi non habent</li>
                    <li className="col-lg-6 col-xs-6">Hendrerit in vulputate velit</li>
                    <li className="col-lg-6 col-xs-6">Hendrerit in vulputate velit</li>
                    <li className="col-lg-6 col-xs-6">Esse molestie consequat</li>
                    <li className="col-lg-6 col-xs-6">Esse molestie consequat</li>
                    <li className="col-lg-6 col-xs-6">Vel illum dolore feugiat</li>
                    <li className="col-lg-6 col-xs-6">It is a long established fact</li>
                  </ul>
                </div>

                <div className="col-lg-6">
                  <img className="w-100" src={Images.about2.default} alt="" />
                </div>
              </div>

              <div className="row p_t_80 p_b_80 m_b_60 gy-5">
                <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-xs-6">
                  <div className="wrapperCount">
                    <div className="d-flex align-items-center">
                      <div className="counterArea"> 
                      <CountUp end={784} duration={3} />
                      </div>
                      <div>
                        <p className="f20 color_grey">
                        Honors
                        </p>
                      </div>
                    </div>
                 
                  </div>
               
                </div>

                <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-xs-6">
                  <div className="wrapperCount">
                    <div className="d-flex align-items-center">
                      <div className="counterArea"> 
                      <CountUp end={987} duration={3} />
                      </div>
                      <div>
                        <p className="f20 color_grey">
                        Officers
                        </p>
                      </div>
                    </div>
                 
                  </div>
               
                </div>

                <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-xs-6">
                  <div className="wrapperCount">
                    <div className="d-flex align-items-center">
                      <div className="counterArea"> 
                      <CountUp end={874} duration={3} />
                      </div>
                      <div>
                        <p className="f20 color_grey">
                        Negotiators
                        </p>
                      </div>
                    </div>
                 
                  </div>
               
                </div>

                <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-xs-6">
                  <div className="wrapperCount">
                    <div className="d-flex align-items-center">
                      <div className="counterArea"> 
                      <CountUp end={698} duration={3} />
                      </div>
                      <div>
                        <p className="f20 color_grey">
                        SWAT
                        </p>
                      </div>
                    </div>
                 
                  </div>
               
                </div>
              </div>

              <div className="videoBig m_b_80">
                <div className="mainWrapperVideo m_b_30 position-relative">
                  <div className="wrapperVideo m_b_15">
                    <div className="position-relative d-flex align-items-center flex-wrap">
                      <img
                        className="w-100 radius"
                        src={Images.about3.default}
                        alt=""
                      />
                      <div className="firePlay">
                        <button>
                          <VideoModal />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="left_top">
                    <img src={Images.dots.default} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <section
              className="services p_t_100 p_b_120"
              style={{ backgroundImage: `url(${Images.police_bg.default})` }}
            >
              <h4 className="f40 f_bold color_white text-center m_b_60">
                Featured Services
              </h4>

              <div className="container">
                <div className="row gy-5">
                  {service.map((obj, index) => {
                    return (
                      <>
                        <div className="col-lg-4 col-xl-3 col-sm-6 col-md-6 col-xs-6">
                          <div className="m_b_15">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="64"
                              height="64"
                              viewBox="0 0 64 64"
                            >
                              <g
                                id="Group_52319"
                                data-name="Group 52319"
                                transform="translate(-321 -2908)"
                              >
                                <g
                                  id="Ellipse_15057"
                                  data-name="Ellipse 15057"
                                  transform="translate(321 2908)"
                                  fill="none"
                                  stroke="#fff"
                                  stroke-width="2"
                                >
                                  <circle
                                    cx="32"
                                    cy="32"
                                    r="32"
                                    stroke="none"
                                  />
                                  <circle cx="32" cy="32" r="31" fill="none" />
                                </g>
                                <path
                                  id="Path_24156"
                                  data-name="Path 24156"
                                  d="M26.822,21.769l-4.328-1.027-.776-1.087a5.832,5.832,0,0,0,2.273-2.565,3.717,3.717,0,0,0,1.753-2.7,2.3,2.3,0,0,0-.426-1.408,10.36,10.36,0,0,0,.574-1.544c.143-.075.287-.144.43-.223l.309-.171.162-1.831c.1-1.173.238-2.707.351-3.948a2.653,2.653,0,0,0-2.346-2.9A56.051,56.051,0,0,0,18.333,2h-.667a56.051,56.051,0,0,0-6.466.368,2.653,2.653,0,0,0-2.346,2.9c.114,1.241.248,2.775.351,3.948l.162,1.831.309.171c.19.1.38.2.571.3a11.216,11.216,0,0,0,.488,1.119,1.934,1.934,0,0,0-.589,1.035c-.2.976.33,2.117,1.585,3.392A6.453,6.453,0,0,0,14.294,19.7l-.754,1.039L9.184,21.772A9.3,9.3,0,0,0,2,30.855V34H34V30.851A9.3,9.3,0,0,0,26.822,21.769Zm-6.5-16.837h1.333V7.068H20.317Zm-2.984-.87h1.333v2.69H17.333Zm-2.984.87h1.333V7.068H14.349Zm-3.717,5.282-.056-.639a50.7,50.7,0,0,1,14.848,0l-.056.639A14.955,14.955,0,0,1,10.632,10.214ZM12.9,16.409l-.051-.121-.093-.093c-1.316-1.31-1.353-2.009-1.307-2.249a.73.73,0,0,1,.4-.483l.716-.28-.378-.669c-.032-.057-.056-.112-.087-.169A16.232,16.232,0,0,0,18,13.5a16.318,16.318,0,0,0,6.193-1.263c-.14.316-.245.5-.247.5l-.273.482.413.365a1.041,1.041,0,0,1,.326.777c-.026.532-.5,1.144-1.36,1.769l-.17.126-.069.2c-.041.116-1.041,2.836-4.813,2.836A5.372,5.372,0,0,1,12.9,16.409ZM12.5,27.267,14.519,25.5,12.88,23.922l2-2.756,1.487,10.165Zm5.6,5.4h-.182L16.115,20.4A8.178,8.178,0,0,0,18,20.619a7.981,7.981,0,0,0,1.909-.223Zm1.543-1.316,1.512-10.2,1.979,2.774L21.5,25.5l2.02,1.765Z"
                                  transform="translate(335 2922)"
                                  fill="#fff"
                                />
                              </g>
                            </svg>
                          </div>

                          <h3 className="f24 color_white f20_mob">{obj.title}</h3>
                          <p className="f16 opacity_80 color_white">
                            {obj.description}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default About;
