import React from "react";
import * as Styles from "./style.module.css";
import * as GlobalStyle from "../../global.module.css";
import SubscribeNews from "./SubscribeNews";
import Images from "../../assets/img/Images";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";

export default function Footer(props) {
  const navigationInitialData = [
    // {
    //   title: "Visit",
    //   linkto: "/visit",
    // },
    {
      title: "To Exhibit",
      linkto: "/toexhibit",
    },
    // {
    //   title: "Events",
    //   linkto: "/events",
    // },
    {
      title: "News",
      linkto: "/news",
    },
    {
      title: "Contact ",
      linkto: "/contact",
    },
  ];
  const Section01 = () => {
    return (
      <div className="row">
        <div
          className={`col d-flex justify-content-center justify-content-md-start  ${GlobalStyle.fs_2vw_a1200} ${GlobalStyle.fs_3vw_1200} ${GlobalStyle.fs_5vw_767}`}
        >
          PBIFAF
        </div>
      </div>
    );
  };

  const Section02 = () => {
    return (
      <div className="row">
        <div
          className={`last_foo container d-flex mt-5 mb-1 text-secondary ${GlobalStyle.fs_1vw_a1200} ${GlobalStyle.fs_1vw_1200} ${GlobalStyle.fs_3vw_767}`}
        >
          {/* <Link className={`btn btn-link ${GlobalStyle.btn_link}`} to="/termsconditions">Terms & Conditions</Link>  */}
          <Nav.Link
            href="/termsconditions"
            className="f_worksons_r f18 color_grey"
          >
            Terms & Conditions
          </Nav.Link>

          <Nav.Link
            href="/termsconditions"
            className="f_worksons_r f18 color_grey"
          >
            Privacy Policy
          </Nav.Link>
        </div>
      </div>
    );
  };
  return (
    <div className="container-fluid">
      <SubscribeNews showSecondNewsLetter={false} />
      <div className={`row p-5 ${Styles.footercontainer}`}>
        <Section01 />
        <div className="row mt-3">
          <div className={`container ${Styles.footernavcontainer}`}>
            <div className="row">
              <div className="col-9 d-none d-md-block">
                {/* Bottom Navigation */}
                <ul className="bottom_nav">
                  {navigationInitialData.map((item) => {
                    return (
                      <Nav.Link
                        className={`${GlobalStyle.fs_2vw_1200}`}

                        href={item.linkto == "/contact" ? "mailto:llester@nextlevelfairs.com" : item.linkto}
                      >
                        {item.title}{" "}
                      </Nav.Link>
                    );
                  })}
                </ul>
                {/* Bottom Navigation Closed */}
              </div>
              <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end align-items-center">
                <a target="_blank" href="https://www.facebook.com/PBIFAF">
                  {" "}
                  <img className="social_image" src={Images.facebook.default} />
                </a>
                <a target="_blank" href="https://twitter.com/PBIFAF">
                  <img className="social_image" src={Images.twitter.default} />
                </a>
                <a target="_blank" href="https://www.instagram.com/palmbeachifaf/">
                  <img
                    className="social_image"
                    src={Images.instagram.default}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Section02 />
      </div>
    </div>
  );
}
