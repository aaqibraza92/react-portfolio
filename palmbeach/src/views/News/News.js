import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News.css";
import Images from "../../assets/img/Images";
import Svg from "../../assets/SVG/Svg";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

const ArtistData = [
  {
    image: `${Images.art1.default}`,
    cat: "GALLERIES",
    title: "Donec in cras purus nunc, risus amet",
    content:
      "Accumsan mauris eu lacinia tortor morbi viverra molestie. Enim, maecenas arcu velit consectetur dolor placerat amet, risus. Mattis pellentesque placerat sapien interdum.",
    date: "November 9, 2021",
  },
  {
    image: `${Images.art2.default}`,
    cat: "SPEAKERS AND TALKS",
    title: "Nibh rutrum nunc ut.",
    content:
      "At sed ac ultrices vel nisl, placerat nam lectus elit. At gravida scelerisque nunc at dictum molestie purus. Nisl rhoncus volutpat lectus lobortis. Curabitur viverra viverra orci est. Vivamus donec non nunc amet lacus",
    date: "November 9, 2021",
  },
  {
    image: `${Images.art3.default}`,
    cat: "PRESS",
    title: "Mattis elementum in ut.",
    content:
      "Senectus a proin risus ornare at. Aliquet eros, phasellus habitasse adipiscing mattis. Mi eu cursus nunc elementum aliquet egestas scelerisque orci mauris.",
    date: "November 9, 2021",
  },
  {
    image: `${Images.art3.default}`,
    cat: "PRESS",
    title: "Mattis elementum in ut.",
    content:
      "Senectus a proin risus ornare at. Aliquet eros, phasellus habitasse adipiscing mattis. Mi eu cursus nunc elementum aliquet egestas scelerisque orci mauris.",
    date: "November 9, 2021",
  },
];

function News(props) {
  const VideoModal = () => {
    // const [isOpen, setOpen] = useState(false);

    return (
      <React.Fragment>
        {/* <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        /> */}

        {/* <button className="no_btn" onClick={() => setOpen(true)}> */}
        <button className="no_btn">
          {Svg.PlayVideo}
        </button>
      </React.Fragment>
    );
  };

  const Sidebar = () => {
    return (
      <>
        <aside className="sidebar">
          {/* <section className="topics border_bottom pb-4 mb-5">
            <h2 class="f36 f18_mob color_black f_worksons_r mb-3 mb-5">
              Topics
            </h2>

            <div className="tags">
              <Link to="" className="f_worksons_r">
                Galleries
              </Link>
              <Link to="" className="f_worksons_r">
                Press
              </Link>
              <Link to="" className="f_worksons_r">
                Artists
              </Link>
              <Link to="" className="f_worksons_r">
                Emerging talents
              </Link>
              <Link to="" className="f_worksons_r">
                Events
              </Link>
              <Link to="" className="f_worksons_r">
                Label
              </Link>
            </div>
          </section> */}
          {/* <section className="topics border_bottom pb-4 mb-5">
            <h2 class="f36 f18_mob color_black f_worksons_r mb-3">
              Advertsing
            </h2>

            <div className="position-relative d-flex align-items-end flex-wrap justify-content-between">
              <img className="w-100" src={Images.bnb.default} />
              <p className="make_btm color_white f18_mob f_worksons_r">
                proudly sponsoring the arts in Palm Beach
              </p>
            </div>
          </section> */}

          <section className="topics pb-4 mb-5">
            <h2 class="f36 f18_mob color_black f_worksons_r mb-3 border_b_light pb-3">Partners</h2>

            <div className="d-flex pb-5 mb-5">
              <div className="col-xs-6 col-sm-6 col-lg-6">
                <img className="img-fluid" src={Images.palm.default} />
              </div>

              <div className="col-xs-6 col-sm-6 col-lg-6">
                <img className="img-fluid" src={Images.hilton.default} />
              </div>
            </div>

            {/* <div className="d-flex border_b_light pb-5 mb-5"  >
              <div className="col-xs-6 col-sm-6 col-lg-6">
                <img className="img-fluid" src={Images.moet.default} />
              </div>

              <div className="col-xs-6 col-sm-6 col-lg-6">
                <img className="img-fluid" src={Images.season.default} />
              </div>
            </div>

            <div className="d-flex border_b_light pb-5 mb-5"  >
              <div className="col-xs-6 col-sm-6 col-lg-6">
                <img className="img-fluid" src={Images.starbuck.default} />
              </div>

              <div className="col-xs-6 col-sm-6 col-lg-6">
                <img className="img-fluid" src={Images.bank.default} />
              </div>
            </div> */}
          </section>
        </aside>
      </>
    );
  };

  // const Artists = () => {
  //   return (
  //     <>
  //       <section>
  //         <div className="p_t_30 p_b_40 d-flex align-items-center flex-wrap justify-content-between border_bottom mb-4 p_t_30 border_top">
  //           <h3 className="f44 f18_mob color_black f_worksons_r m_b_0 ">
  //             Meet the artists
  //           </h3>

  //           <div>
  //             <Link
  //               to=""
  //               className="text-uppercase f_worksons_b f18 border_bottom"
  //             >
  //               All STORIES
  //             </Link>
  //           </div>
  //         </div>

  //         <div className="row gy-5">
  //           {ArtistData.map((obj, index) => {
  //             return (
  //               <div className="col-lg-6">
  //                 <div className="wrapperArtists">
  //                   <div className="title mb-3">
  //                     <Link to="" className="">
  //                       <img className="w-100" src={obj.image} />
  //                     </Link>
  //                   </div>

  //                   <p className="f18 color_black f_worksons_r text-uppercase mb-3">
  //                     {obj.cat}
  //                   </p>

  //                   <h2 class="f36 f18_mob color_black f_worksons_r mb-3">
  //                     <Link to="">{obj.title}</Link>
  //                   </h2>

  //                   <p className="f18 d_none_mob color_black f_worksons_r mb-4">
  //                     {obj.content}
  //                   </p>
  //                   <p className="f18 color_black f_worksons_r"> {obj.date}</p>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </section>
  //     </>
  //   );
  // };

  const Featured = () => {
    return (
      <>
        <section>
          <div className="p_t_30 p_b_40 d-flex align-items-center flex-wrap justify-content-between border_bottom mb-3 p_t_30">
            <h3 className="f44 f18_mob color_black f_worksons_r m_b_0 ">
              Featured
            </h3>

            {/* <div>
              <Link
                to=""
                className="text-uppercase f_worksons_b f18 border_bottom"
              >
                All STORIES
              </Link>
            </div> */}
          </div>

          <div class="row">
            <div class="col-lg-8">
              <div className="mb-5">
                <a href="">
                  <div className="img_wrapper">
                    <img className="w-100" src={Images.new_banner.default} />
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <a href="/blogsinglepage">
              <div className="mb-5">
                <h6 className="f18 color_black f_worksons_r">
                  NEXT LEVEL FAIRS
                </h6>

                <h2 className="f44 color_black f_worksons_r mb-5 f36_mob">
                  Next Level Fairs announces PBIFAF 2022
                </h2>

                <p className="f18 color_black f_worksons_r mb-5 f16_mob">
                  David and Lee Ann Lester – organizers of more than 100
                  International fine art fairs since 1991 - are pleased to
                  present the Palm Beach International Fine Art, a new and
                  highly innovative art fair concept in the Palm Beaches, Feb
                  3-7, 2022
                </p>

                <div className="">
                  <p className="f18 color_black f_worksons_r f16_mob">
                    October, 29 2021
                  </p>
                </div>
              </div>
              </a>
            </div>
          </div>
        </section>
      </>
    );
  };

  const LatestNews = () => {
    return (
      <>
        <section>
          <div className="p_t_30 p_b_40 d-flex align-items-center flex-wrap justify-content-between border_bottom mb-5 p_t_30 border_top">
            <h3 className="f44 color_black f_worksons_r m_b_0 f18_mob">
              Latest news
            </h3>

            {/* <div>
              <Link
                to=""
                className="text-uppercase f_worksons_b f18 border_bottom"
              >
                All STORIES
              </Link>
            </div> */}
          </div>

          <div className="row">
            <div className="col-lg-9">
              <div className="row listing_items mb-5">
                <div className="col-lg-4 col-xs-4">
                  <div className="img_wrapper">
                    <Link to="">
                      <img className="w-100" src={Images.blog1.default} />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-8 col-xs-8">
                  <h6 className="f18 color_black f_worksons_r">
                    NORTON MUSEUM
                  </h6>

                  <h2 class="f36 f18_mob color_black f_worksons_r">
                    <a href="https://www.norton.org/exhibitions/current-exhibitions" target="_blank">
                      {" "}
                      Mexican modernism to feature Frida Kahlo & Diego Rivera
                    </a>
                  </h2>

                  <p className="f18 d_none_mob color_black f_worksons_r mb-4">
                    Frida Kahlo, Diego Rivera and Mexican Modernism from the
                    Jacques and Natasha Gelman Collection (...)
                  </p>

                  <a href="https://www.norton.org/exhibitions/current-exhibitions" className="read-more" target="_blank">Read More</a>
                  <p className="f18 color_black f_worksons_r">October, 2021</p>
                </div>
              </div>

              <div className="row listing_items mb-5">
                <div className="col-lg-4 col-xs-4">
                  <div className="img_wrapper">
                    <Link to="">
                      <img className="w-100" src={Images.blog2.default} />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-8 col-xs-8">
                  <h6 className="f18 color_black f_worksons_r">GALLERIES</h6>

                  <h2 class="f36 f18_mob color_black f_worksons_r">
                    <a href="https://bocamuseum.org/art/machu-picchu-and-golden-empires-peru" target="_blank">
                      Boca Raton Museum “Machu Picchu & the Golden Empires of
                      Peru”
                    </a>
                  </h2>

                  <p className="f18 d_none_mob color_black f_worksons_r mb-4">
                    Embark on a journey through time and discover a culture that
                    thrived in a mythic world.
                  </p>

                  <a href="https://bocamuseum.org/art/machu-picchu-and-golden-empires-peru" target="_blank" className="read-more">Read More</a>
                  <p className="f18 color_black f_worksons_r">October, 2021</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3" >
                <a href="https://www.michaelgoedhuis.com/videos#MichaelGoedhuisonTomokoKawao" target="_blank">
              <div className="row listing_items mb-5">
                  <div className="col-lg-12 col-xs-4">
                    <div className="img_wrapper position-relative mb-3 d-flex align-items-center justify-content-center">
                      <img className="w-100" src={Images.video_thumb.default} />
                      <div className="triggerPlay">
                        <VideoModal />
                      </div>
                    </div>
                  </div>

                <div className="col-lg-12 col-xs-8">
                  <h6 className="f18 color_black f_worksons_r">VIDEO</h6>
                  <h2 class="f36 f18_mob color_black f_worksons_r">
                    Michael Goedhuis discusses the work of Tomoko Kawoao 
                  Small print Japanese Painter
                  </h2>

                  <p className="f18 d_none_mob color_black f_worksons_r mb-4">
                    Japanese Ink Painter
                  </p>

                  <p className="f18 color_black f_worksons_r">
                    November 9, 2021
                  </p>
                </div>
              </div>
              </a>
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
          <h1
            className={`text-uppercase pt-5 pb-5 f72 color_black border_bottom`}
          >
            PBIFAF News
          </h1>

          <Featured />

          <div className="row gy-5">
            <div className="col-lg-8">
              <LatestNews />

              {/* <Artists /> */}
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default News;
