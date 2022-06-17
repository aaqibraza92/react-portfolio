import React from "react";
import Images from "../../assets/img/Images";
import { Link } from "react-router-dom";
import "./blogsinglepage.css";
// import Svg from "../../assets/SVG/Svg";
import facebook from "../../assets/SVG/fb.svg";
import twitter from "../../assets/SVG/twt.svg";

// const ArtistData = [
//   {
//     image: `${Images.art1.default}`,
//     cat: "GALLERIES",
//     title: "Donec in cras purus nunc, risus amet",
//     content:
//       "Accumsan mauris eu lacinia tortor morbi viverra molestie. Enim, maecenas arcu velit consectetur dolor placerat amet, risus. Mattis pellentesque placerat sapien interdum.",
//     date: "November 9, 2021",
//   },
//   {
//     image: `${Images.art2.default}`,
//     cat: "SPEAKERS AND TALKS",
//     title: "Nibh rutrum nunc ut.",
//     content:
//       "At sed ac ultrices vel nisl, placerat nam lectus elit. At gravida scelerisque nunc at dictum molestie purus. Nisl rhoncus volutpat lectus lobortis. Curabitur viverra viverra orci est. Vivamus donec non nunc amet lacus",
//     date: "November 9, 2021",
//   },
// ];

const Leeannlesterdata = [
  {
    // image: `${Images.image3.default}`,
    // title: "Lee Ann Lester",
    content:
      "October 29,  2021  - David and Lee Ann Lester – organizers of more than 100 International fine art fairs since 1991 - are pleased to present the Palm Beach International Fine Art, a new and highly innovative art fair concept in the Palm Beaches, Feb 3-7, 2022",
    content2:
      "This year’s fair is comprised of many PBIFAF exhibitors from previous years and new dealers representing the leading international experts in old masters, post-impressionists, modern masters, post-WW2, and contemporary art. Included are leading dealers in antiquities, fine art object d’ art, rare books and manuscripts, and design. The majority of these exhibitors participate in TEFAF Maastricht, Art Basel, Masterpiece London, and Frieze fairs that are the most respected and highest vetted fairs in the world.",
    date: "Apr 15, 2020 · 4 min read",
    //   facebook:`${facebook.}`
  },
];

const Nexonthepipelinedata = [
  {
    //   cat: "GALLERIES",
    // title: "NEXT ON THE PIPELINE",
    content:
      "COVID -19 interrupted the international art trade for over 19 months limiting dealers’ access without “In Live Person” art fairs which has grown to over 60% of the gallery collector market. Over 300 major fairs and biennales were shuttered for 2020-21. To survive and prosper, galleries must maintain contact with existing and potential clients. Online initiatives have not replaced person-to-person sales. There is no greater concentration of major art clients in the United States than exists in the Palm Beaches and South Florida during the winter season. Recognizing that reality, major art powers such as Pace, Acquavella, Paula Cooper, and many other international galleries as well as  Sotheby’s have established a permanent presence in Palm Beach this year.",
    content2:
      "The Lester’s recognize the potential of this extraordinary market. They have established the highly respected Palm Beach International Art and Antique Fair in 1997, which became one of the most successful fairs in the world before its sale in 2001. Dealers were successful in growing their US art collector base in the Palm Beaches each year.",
  },
];

const imagecaptioncentereddata = [
  {
    image: `${Images.blogsinglepage2.default}`,
    title:
      "Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height",
    content:
      "The Palm Beach International Art Fair will host approximately 60 highly respected galleries exhibiting carefully curated exhibitions. Attendees will be selected and invitations are curated by the participating dealers and extended by the organizers. Respected curators from major museums are invited along with their important trustees.",
    content2:
      "The US market has made a speedy economic recovery. Recent articles report that the top 2-20% of top income earners had a 35% increase in their wealth in 2020- 2021. Nowhere is more evident of this than in South Florida where 44 billionaires (32 in Palm Beach) and over 496,971 multimillionaires reside.",
      list: `"America is Flush with Cash" the wealthy got wealthier during COVID READ MORE:`,
    content3:"The Palm Beach market has grown significantly in the last decade. Home now to over 81 hedge funds who moved their headquarters from Connecticut, New York, Mass. And New Jersey to better serve this growing market and to take advantage of Florida tax laws eliminating corporate personal state taxes for their employees. In the last two years, major tech companies once located in Silicon Valley have also joined this move to the sunshine state where the right to work laws eliminates worker unions.",
    content4:" The fair will be held at the Palm Beach County Convention Center, which has received independent certification by the GBAC Star Accreditation for COVID-19 safety and sanitation. Collectors will have the option to Private Exhibition day and hours throughout the run of the fair. Invitees will be sent invitations by their respective dealer during these private viewing hours to enhance their fair experience.",
    content5:"The event will be deluxe in all forms. The fair will offer full luxury services; valet parking, champagne and caviar bar,  and light fare throughout the day. There will be a full collector lecture and film series program. A very select Vernissage will take place on Feb. 3, 2022.",
    content6:"The Organizers have arranged convenient hotel accommodations at the Hilton  Hotel directly adjoining the convention center which has also received GBAC Star Accreditation for COVID-19 safety and sanitation. Other options are available for participating dealers at favorable pricing.",
    content7:"   For further information, please contact Lee Ann Lester llester@nextlevelfairs.com +1 239.272.6716"
    // listitem1: "First item in the list",
    // listitem2: "Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet",
    // listitem3: "Third item in the list",
  },
];

const Blogsinglepage = (props) => {
  return (
    <div>
      <div>
        <img className="w-100" src={Images.blogsinglepage1.default} />
      </div>

      <div className="container">
        <div className="row">
          <div className="w_928">
        <h3 className="color_black f_worksons_r mt-5 mb-4 blogsinglepage-head ">
        Next Level Fairs Announces PBIFAF, Feb. 3-7, 2022
        </h3>

        <div className="border_bottom mb-5"></div>

        {/* Leeannlesterdata Section */}
        <div>
          {Leeannlesterdata.map((el) => {
            return (
              <div key={el.content}>
                {/* <div className="leeann-div mb-5">
                   <div className="head_b">  
                    <div className="blog_img">
                      <img className="girl-img" src={el.image} />
                    </div>
                    <div className="leeann-div-title ">
                      <span className="f24 color_black f_spacemono_b ">
                        {el.title}
                      </span>
                      <p className="f16 color_black">{el.date}</p>
                    </div>
                    </div> 

                  <div>
                    <div className="d-flex social_icon">
                      <a href="https://www.facebook.com/PBIFAF" target="_blank">
                      <img  className="fb-img-caption" src={facebook} />
                      <a>{Svg.tw}</a>

                      </a>

                      <a href="https://twitter.com/PBIFAF" target="_blank">
                          <img className="fb-img-caption" src={twitter} />
                      </a>
                    </div>
                  </div>
                </div> */}

                <p className="f18 color_black f_worksons_r f16_mob">
                  {el.content}
                </p>
                <p className="f18 color_black f_worksons_r f16_mob">
                  {el.content2}
                </p>
              </div>
            );
          })}
        </div>

        {/* Nexonthepipeline Section  */}
        <div>
          {Nexonthepipelinedata.map((el) => {
            return (
              <div key={el.content}>
                {/* <h4 className="f24 color_black f_spacemono_b mb-5 ">
                  {el.title}
                </h4> */}
                <p className="f18 color_black f_worksons_r f16_mob">
                  {el.content}
                </p>
                <p className="f18 color_black f_worksons_r f16_mob">
                  {el.content2}
                </p>
              </div>
            );
          })}
        </div>

        {/* Image caption centered Section  */}
        <div>
          {imagecaptioncentereddata.map((el) => {
            return (
              <div key={el.content}>
                {/* <div className="img-caption-div mb-3">
                  <img src={el.image} alt="" className="w-100"/>
                </div> */}
                {/* <h4 className="f24 color_black f_worksons_b mb-5 nexon-img-title ">
                  {el.title}
                </h4> */}
                <p className="f18 color_black f_worksons_r f16_mob">
                  {el.content}
                </p>
                <p className="f18 color_black f_worksons_r f16_mob">
                  {el.content2}
                </p>
                <p className="f18 color_black f_worksons_r mb-3 f16_mob">
                  {el.list}
                </p>
                {/* <p className="f18 color_black f_worksons_r mb-3 f16_mob">
                  {el.list}
                </p> */}
                {/* <ul className="f18 img-caption-ul">
                  <li>{el.listitem1}</li>
                  <li>{el.listitem2}</li>
                  <li>{el.listitem3}</li>
                </ul> */}
                <p className="f18 color_black f_worksons_r f16_mob">
                  {el.content3}
                </p>
                <p className="f18 color_black f_worksons_r f16_mob">
                  {el.content4}
                </p>
                <p className="f18 color_black f_worksons_r f16_mob">
                  {el.content5}
                </p>
                <p className="f18 color_black f_worksons_r f16_mob">
                  {el.content6}
                </p>
                <p className="f18 color_black f_worksons_r f16_mob">
                  {el.content7}
                </p>
                {/* <p className="p-share">Share :</p>
                <div className="d-flex mb-4">
                  <a className="fb-img-caption" href="https://www.facebook.com/PBIFAF" target="_blank">
                      <img src={facebook} className="fb-img-logo" />
                      <span>Share on Facebook</span>
                  </a>

                  <a className="fb-img-caption" href="https://twitter.com/PBIFAF" target="_blank">
                      <img src={twitter} className="fb-img-logo" />
                      <span>Share on Twitter</span>
                  </a>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
      </div>
      </div>


      <div className="pt-4 border_bottom"></div>

      <div className="container">
        <div className="row">
        <div className="w_928">
        <h1 className="what-to-read-text-head">OTHER NEWS</h1>
        <div className="row gx-5">
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
                        {/* <VideoModal /> */}
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

          {/* {ArtistData.map((obj, index) => {
            return (
              <div className="col-lg-6">
                <div className="wrapperArtists">
                  <div className="title mb-3">
                    <Link to="" className="">
                      <img className="w-100" src={obj.image} />
                    </Link>
                  </div>

                  <p className="f18 color_black f_worksons_r text-uppercase mb-3">
                    {obj.cat}
                  </p>

                  <h2 class="f36 f18_mob color_black f_worksons_r mb-3">
                    <Link to="">{obj.title}</Link>
                  </h2>

                  <p className="f18 d_none_mob color_black f_worksons_r mb-4">
                    {obj.content}
                  </p>
                  <p className="f18 color_black f_worksons_r"> {obj.date}</p>
                  
                  
                </div>
              </div>
             );
           })} */}
        </div>
      </div>
      </div></div>

    </div>
  );
};

export default Blogsinglepage;
