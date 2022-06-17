import React, { Component } from "react";
import { useState } from "react";
import Images from "Constant/Images/Images";
import CmnBanner from "Components/CmnBanner/CmnBanner";
import CmnInput from "Components/CmnInput/CmnInput";
import "./Contact.scss";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { VideoData } = this.state;
    return (
      <>
        <div className="privacy_page">
          <CmnBanner title="Contact us" imageURL={Images.help.default} />

          <div className="wrapperContact p_t_80 p_b_80 bg_white">
            <div className="container">
              <div className="box_cnt bg_white p30 shadow radius m_b_80">
                <h3 className="f_bold f32 color_black m_b_30">Send Us a Message</h3>

                <div className="row">
                  <div className="col-lg-6 ">
                    <div className="form_group">
                      <CmnInput
                        label="Your Name (required)"
                        name="name"
                        placeholder="Enter your name"
                        className=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form_group">
                      <CmnInput
                        label="Your Email (required)"
                        name="email"
                        placeholder="Enter your email address"
                        className=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form_group">
                      <CmnInput
                        label="Subject"
                        name="subject"
                        placeholder="Enter your subject"
                        className=""
                      />
                    </div>

                    <div className="form_group">
                      <CmnInput
                        inputType="textarea"
                        label="Your Message"
                        textareaID=""
                        textareaName="message"
                        textareaPlaceholder="Write your message"
                        textareaClassName=""
                      />
                    </div>

                    <div className="d-flex align-items-center flex-wrap justify-content-end">
                      <button className="btn_theme d-flex align-items-center flex-wrap">
                        <span className="m_r_5">Submit</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14.219"
                          height="11.896"
                          viewBox="0 0 14.219 11.896"
                        >
                          <g
                            id="Icon_feather-arrow-right"
                            data-name="Icon feather-arrow-right"
                            transform="translate(-3.806 -6.439)"
                          >
                            <path
                              id="Path_20"
                              data-name="Path 20"
                              d="M7.5,18H20.219"
                              transform="translate(-2.944 -5.612)"
                              fill="none"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                            />
                            <path
                              id="Path_21"
                              data-name="Path 21"
                              d="M18,7.5l4.888,4.888L18,17.275"
                              transform="translate(-5.612)"
                              fill="none"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gt-10">
                <div className="col-lg-4 col-xl-4 col-sm-12 col-md-12 m_b_30_mob">
                  <h6 className="text-uppercase f14 color_jomney">
                    GET IN TOUCH
                  </h6>
                  <h3 className="f32 color_black f_bold m_b_30">
                    Our Team Of Experts Are Ready To Hear From You
                  </h3>

                  <ul className="no_ul socailArea">
                    <li className="d-flex m_b_20">
                      <svg
                        className="m_r_10"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 14 20"
                      >
                        <path
                          id="Icon_material-location-on"
                          data-name="Icon material-location-on"
                          d="M14.5,3a7,7,0,0,0-7,7c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,14.5,3Zm0,9.5A2.5,2.5,0,1,1,17,10,2.5,2.5,0,0,1,14.5,12.5Z"
                          transform="translate(-7.5 -3)"
                          fill="#4d5fc2"
                        />
                      </svg>
                      <span className="color_black f16">
                        5770 Freeport Blvd., Suite 100 Sacramento, <br />
                        CA 95822, 8:00 a.m. to 6:00 p.m.
                      </span>
                    </li>

                    <li className="d-flex m_b_20">
                      <svg
                        className="m_r_10"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.001"
                        height="16"
                        viewBox="0 0 16.001 16"
                      >
                        <path
                          id="Icon_ionic-ios-call"
                          data-name="Icon ionic-ios-call"
                          d="M20.029,17.031a13.44,13.44,0,0,0-2.808-1.879c-.841-.4-1.15-.4-1.745.033-.5.358-.816.691-1.387.567A8.275,8.275,0,0,1,11.3,13.69,8.215,8.215,0,0,1,9.24,10.9c-.121-.575.212-.891.567-1.387.429-.6.442-.9.033-1.745A13.174,13.174,0,0,0,7.962,4.963c-.612-.612-.75-.479-1.087-.358a6.187,6.187,0,0,0-1,.529A3,3,0,0,0,4.683,6.4c-.237.512-.512,1.466.887,3.957a22.081,22.081,0,0,0,3.882,5.178h0l0,0,0,0h0a22.167,22.167,0,0,0,5.178,3.882c2.491,1.4,3.445,1.125,3.957.887a2.952,2.952,0,0,0,1.262-1.2,6.187,6.187,0,0,0,.529-1C20.508,17.781,20.646,17.643,20.029,17.031Z"
                          transform="translate(-4.49 -4.502)"
                          fill="#4d5fc2"
                        />
                      </svg>

                      <span className="color_black f16">
                        Corporate Office: 1-000-666-2600
                      </span>
                    </li>

                    <li className="d-flex">
                      <svg
                       className="m_r_10"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.522"
                        height="16.189"
                        viewBox="0 0 20.522 16.189"
                      >
                        <g
                          id="Icon_feather-mail"
                          data-name="Icon feather-mail"
                          transform="translate(-1.607 -5)"
                        >
                          <path
                            id="Path_47"
                            data-name="Path 47"
                            d="M4.774,6H18.963a1.779,1.779,0,0,1,1.774,1.774V18.415a1.779,1.779,0,0,1-1.774,1.774H4.774A1.779,1.779,0,0,1,3,18.415V7.774A1.779,1.779,0,0,1,4.774,6Z"
                            fill="none"
                            stroke="#4d5fc2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                          <path
                            id="Path_48"
                            data-name="Path 48"
                            d="M20.736,9l-8.868,6.208L3,9"
                            transform="translate(0 -1.226)"
                            fill="none"
                            stroke="#4d5fc2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                        </g>
                      </svg>

                      <span className="color_black f16">
                      info@snapsend.com
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-8 col-xl-8 col-sm-12 col-md-12">
                  <img className="w-100" src={Images.map.default} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
