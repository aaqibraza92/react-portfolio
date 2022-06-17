import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./ToExhibit.css";
import Images from "../../assets/img/Images";
import Svg from "../../assets/SVG/Svg";

function ToExhibit(props) {
  var SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const TheEvent = () => {
    return (
      <>
        <section>
          <h3 className="f44 color_black f_worksons_r border_bottom mb-5">
            The Event
          </h3>

          <div class="row">
            <div class="col-lg-6">
              <div className="mb-5">
                <p className="f18 color_black f_worksons_r">
                  Palm Beach known as the Cultural Capital of Florida, is home
                  to Norton Museum of Art, the largest collection of art south
                  of Washington DC; Florida’s oldest opera company, Palm Beach
                  Opera; Boca Raton Museum of Art, Henry Morrison Flagler
                  Museum, The Society for the Four Arts, and the Armory Art
                  Center just to name a few. Every corner of this county boasts
                  world-class art, music, theater, and cultural events equal to
                  many major cities.
                </p>

                <p className="f18 color_black f_worksons_r">
                  Now home to many of New York’s leading top blue-chip galleries
                  and international auction houses, Palm Beach has become
                  Florida’s collector “must-see” gallery district during the
                  winter season
                </p>
              </div>

              <div className="mb-5">
                <h3 className="f24 color_black f_worksons_b">
                  Private art Fairs
                </h3>
                <p className="f18 color_black f_worksons_r">
                  The PBIFAF 2022 edition introduces a new Private Art Fair
                  concept allowing participating dealers special private hours
                  to host limited attendance visits for their established
                  collectors, art consultants, curators, and museum
                  professionals.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="f24 color_black f_worksons_b">Pricing</h3>
                <p className="f18 color_black f_worksons_r">
                  Pricing is very attractive at $65 PSF/ $702 per sq. meter plus
                  advertising and lights. Small, medium, and large stands
                  consistent with Art Basel format.
                </p>
              </div>

              <div className="mb-5">
                <ul className="p_l_0">
                  <li className="d-flex justify-content-between align-items-center border_bottom p_tb_10 flex-wrap ">
                    <span className="f20 f_worksons_b color_black">
                      240 sq. ft. ( 22. 29 m2)
                    </span>
                    <span className="f20 f_worksons_r">US 15,600 </span>
                  </li>

                  <li className="d-flex justify-content-between align-items-center border_bottom p_tb_10 flex-wrap ">
                    <span className="f20 f_worksons_b color_black">
                      300 sq. ft. ( 27.87 m2)
                    </span>
                    <span className="f20 f_worksons_r">US 19,500</span>
                  </li>

                  <li className="d-flex justify-content-between align-items-center border_bottom p_tb_10 flex-wrap ">
                    <span className="f20 f_worksons_b color_black">
                      400 sq. ft. (37.16 m2)
                    </span>
                    <span className="f20 f_worksons_r">US $19,500</span>
                  </li>

                  <li className="d-flex justify-content-between align-items-center border_bottom p_tb_10 flex-wrap ">
                    <span className="f20 f_worksons_b color_black">
                      576 sq. ft. (53.51 m2)
                    </span>
                    <span className="f20 f_worksons_r">US $37,440</span>
                  </li>

                  <li className="d-flex justify-content-between align-items-center border_bottom p_tb_10 flex-wrap ">
                    <span className="f20 f_worksons_b color_black">
                      700 sq. ft. (65.03 m2)
                    </span>
                    <span className="f20 f_worksons_r">US $45,500</span>
                  </li>

                  <li className="d-flex justify-content-between align-items-center border_bottom p_tb_10 flex-wrap ">
                    <span className="f20 f_worksons_b color_black">
                      800 sq.ft ( 74.32 m2)
                    </span>
                    <span className="f20 f_worksons_r">US $52,000</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center border_bottom p_tb_10 flex-wrap ">
                    <span className="f20 f_worksons_b color_black">
                      900 sq. ft. (83.61m2)
                    </span>
                    <span className="f20 f_worksons_r">US $58,500</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div className="box_galler p30 m_b_20">
                <div className="row mb-5">
                  <div className="col-lg-5">
                    <h3 className="f48 color_black f_worksons_r">
                      International art galleries are welcome to apply to be
                      considered for participation.
                    </h3>
                  </div>
                </div>

                <div class="mb-5">
                  <h3 class="f24 color_black f_worksons_b">Size</h3>
                  <p class="f18 color_black f_worksons_r">
                    Booth sizes range from <br /> 300 sq. ft /27.8 m2. - 1000
                    sq. ft. /92.9 m 2.
                  </p>
                </div>

                <div class="mb-5">
                  <h3 class="f24 color_black f_worksons_b">SET UP</h3>
                  <p class="f18 color_black f_worksons_r">
                    Dealer Set-Up: Feb. 2, Feb. 3. <br />
                    Dismantle: Feb. 7 & 8
                  </p>
                </div>

                <div class="mb-5">
                  <div className="d-flex align-items-center flex-wrap">
                    <a
                      className="btn_theme color_yellow f_worksons_b f20 color_black w_220 text-uppercase d-flex align-items-center flex-wrap justify-content-between m_r_20"
                      // to="/"
                      // mailto="mailto:llester@nextlevelfairs.com"
                      href="mailto:llester@nextlevelfairs.com" 
                    >
                      Contact {Svg.arrowForward}
                    </a>
                    

                    <a
                      className="mar_top_mb btn_theme bg_black color_white f_worksons_b f20 w_220 text-uppercase d-flex align-items-center flex-wrap justify-content-between"
                      href="../../assets/Floorplan.pdf" download>
                      Floor Plan {Svg.arowDown}
                    </a>

                    <a
                      className="btn_theme color_yellow f_worksons_b f20 color_black w_220 text-uppercase d-flex align-items-center flex-wrap justify-content-between m_r_20 mt-3"
                      // to="/"
                      // mailto="mailto:llester@nextlevelfairs.com"
                      href="https://www.cognitoforms.com/NextLevelFairs1/NextLevelFairsPalmBeachInternationalFairFebruary372022EXHIBITORAPPLICATIONAGREEMENT"
                      target="_blank" 
                    >
                      Download App
                    </a>

                    
                  </div>
                </div>
              </div>

              <div className="d_none_mob">
                <img className="w-100" src={Images.cloud.default} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="wrapper_exhibit">
      <>
        <div className="container-fluid">
          <h1 className={`text-uppercase pt-5 pb-5 f72 color_black`}>
            To Exhibit
          </h1>

          <div className="mb-5">
            <Slider {...SliderSettings}>
              <div>
                <div className="wrapperImg">
                  <img className="w-100" src={Images.car1.default} />
                </div>
              </div>
              <div>
                <div className="wrapperImg">
                  <img className="w-100" src={Images.car2.default} />
                </div>
              </div>
              <div>
                <div className="wrapperImg">
                  <img className="w-100" src={Images.car3.default} />
                </div>
              </div>
              <div>
                <div className="wrapperImg">
                  <img className="w-100" src={Images.car4.default} />
                </div>
              </div>

              {/* <div>
                <div className="wrapperImg">
                  <img className="w-100" src={Images.car1.default} />
                </div>
              </div>
              <div>
                <div className="wrapperImg">
                  <img className="w-100" src={Images.car2.default} />
                </div>
              </div>
              <div>
                <div className="wrapperImg">
                  <img className="w-100" src={Images.car3.default} />
                </div>
              </div>
              <div>
                <div className="wrapperImg">
                  <img className="w-100" src={Images.car4.default} />
                </div>
              </div> */}
            </Slider>
          </div>

          <TheEvent />
        </div>
      </>
    </div>
  );
}

export default ToExhibit;
