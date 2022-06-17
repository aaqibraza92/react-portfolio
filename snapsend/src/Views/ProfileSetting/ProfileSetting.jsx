import React, { Component } from "react";
import { useState } from "react";
import Images from "Constant/Images/Images";
import CmnBanner from "Components/CmnBanner/CmnBanner";
import Select from "react-select";
import "./ProfileSetting.scss";

const countryList = [
  { value: "", label: "Lorem" },
  { value: "Lorem 1", label: "Lorem 1" },
  { value: "Lorem 2", label: "Lorem 2" },
  { value: "Lorem 3", label: "Lorem 3" },
];
class ProfileSetting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: { value: "", label: "--Select Category--" },
    };
  }

  selectChange = (opt, stateKey) => {
    this.setState({
      [stateKey]: opt,
    });
  };
  render() {
    const { VideoData, country } = this.state;
    return (
      <>
        <div className="profileSetting bg_light">
          <div className="wrapperPrivacy p_t_20 p_b_80">
            <div className="container">
              <div className="topImage m_b_10">
                <img className="w-100 radius" src={Images.car.default} alt="" />
              </div>
              <div className="row m_b_30">
                <div className="col-md-2 col-lg-2 col-xl-2 text-center text_left_mob position-relative">
                  <div className="m_b_10">
                  <img
                    className="img-fluid pro_border radius"
                    src={Images.star.default}
                    alt=""
                  />
                  </div>
               
                </div>
                <div className="col-md-10 col-lg-10 col-xl-10">
                  <h3 className="f40 color_black text-uppercase f20_mob iuiu">
                    Whatcom County Sheriff Department
                  </h3>
                </div>
              </div>

              <p className="color_grey f22 m_b_60">
                Dedicated to making whatcom county the safest in the state
                through excellence in public safety
              </p>

              <div className="row gx-5">
                <div className="col-lg-9">
                  <div className="row m_b_30 gy-3">
                    <div className="col-lg-6 col-xl-4 col-md-6 col-sm-6">
                      <div className="border radius p20 d-flex align-items-center">
                        <div className="m_r_10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="55"
                            height="54.996"
                            viewBox="0 0 55 54.996"
                          >
                            <path
                              id="Subtraction_1"
                              data-name="Subtraction 1"
                              d="M3120.5,14266a27.5,27.5,0,1,1,19.445-8.055A27.32,27.32,0,0,1,3120.5,14266Zm-9.132-38.518a1.8,1.8,0,0,0-.917.271,12.3,12.3,0,0,0-1.61,1.481l-.013.013-.053.055-.194.2c-.1.105-.2.2-.3.3l-.125.125-.169.171a4.986,4.986,0,0,0-.562.644,3.547,3.547,0,0,0-.541,1.854,9.855,9.855,0,0,0,.943,4.362l.037.088.042.1a13.645,13.645,0,0,0,.671,1.471l2.271,3.633,1.308,1.66c.18.192.37.4.548.6l.009.01a18.247,18.247,0,0,0,1.489,1.533l1.919,1.645c2.819,2.2,6.974,4.415,9.9,4.415a3.435,3.435,0,0,0,2.235-.574,5.671,5.671,0,0,0,1.242-1.172l.873-.873c.075-.075.149-.14.22-.2a2.67,2.67,0,0,0,.617-.72c.85-1.449-.409-2.581-1.328-3.407l-2.009-1.972-.1-.108-.032-.033a2.939,2.939,0,0,0-.561-.491,1.811,1.811,0,0,0-1.021-.344c-.882,0-1.628.783-2.35,1.54l-.013.014c-.156.163-.316.332-.475.488-.133.132-.239.246-.333.346l-.015.017c-.272.29-.4.423-.593.423a2.235,2.235,0,0,1-.79-.3c-.089-.049-.138-.083-.191-.117l-.011-.007-.017-.012c-.032-.021-.067-.045-.114-.073a16.621,16.621,0,0,1-4.313-3.493l-1.886-2.271c-.121-.162-.273-.4-.418-.644-.118-.221-.221-.4-.309-.559-.566-1.007-.566-1.007.435-1.95.291-.274.731-.687,1.271-1.247a1.948,1.948,0,0,0,.086-2.932c-.162-.164-.412-.423-.7-.725l-.155-.161-.013-.013c-.821-.856-1.946-2.029-2.324-2.332A2.56,2.56,0,0,0,3111.366,14227.479Zm9.375,2.838c-.117,0-.129.1-.173.485-.018.159-.041.356-.078.613-.043.24-.12.692-.156,1.013a7.537,7.537,0,0,1,3.649,1.608,7.275,7.275,0,0,1,2.358,3.718c.016.062.029.131.042.2l0,.011a1.7,1.7,0,0,0,.112.417c.251-.019,1.943-.3,2.079-.368a8.716,8.716,0,0,0-1.222-3.3,9.274,9.274,0,0,0-2.116-2.406c-.039-.032-.076-.061-.112-.089l-.053-.042-.008-.007a5.175,5.175,0,0,0-.455-.338l-1.029-.628a9.937,9.937,0,0,0-2.563-.835l-.091-.021-.016,0A.859.859,0,0,0,3120.741,14230.317Zm.184-5.433-.3,1.992a.623.623,0,0,1,0,.066c0,.073,0,.073.168.1.078.012.192.028.355.061a12.933,12.933,0,0,1,5.867,2.621c.066.058.13.105.2.153a1.913,1.913,0,0,1,.26.215c.079.07.14.119.2.166l.012.009c.055.044.113.089.184.152s.137.143.193.2l.031.033c.051.055.1.11.162.169a13.5,13.5,0,0,1,2.829,4.141,14.211,14.211,0,0,1,.89,3.055h0a5.339,5.339,0,0,0,.86-.117l.026,0,.175-.033c.067-.012.136-.024.209-.039l.07-.014a4.274,4.274,0,0,1,.787-.106l-.279-1.342a16.33,16.33,0,0,0-.84-2.395,11.864,11.864,0,0,0-.541-1.1,2.638,2.638,0,0,1-.154-.262c-.043-.078-.085-.156-.142-.246l-.076-.121-.025-.04c-.068-.11-.123-.2-.215-.327l0,0c-.222-.345-.414-.642-.661-.971a15.65,15.65,0,0,0-5.273-4.457c-.208-.1-.33-.155-.541-.242a3.319,3.319,0,0,1-.313-.144l-.011,0-.029-.015c-.062-.031-.125-.062-.2-.1l-.2-.076-.081-.03c-.291-.11-.592-.225-.91-.332l-1.292-.366a5.262,5.262,0,0,0-.664-.123c-.056-.011-.11-.023-.163-.036l-.035-.008a2.337,2.337,0,0,0-.537-.078Z"
                              transform="translate(-3092.999 -14211.001)"
                              fill="#40c390"
                            />
                          </svg>
                        </div>
                        <div>
                          <h5 className="f20 color_black m_b_5">Phone</h5>
                          <p>
                            <a href="tel:3607786623" className="color_black">
                              ( 360 ) 778 - 6623
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-xl-4 col-md-6 col-sm-6">
                      <div className="border radius p20 d-flex align-items-center">
                        <div className="m_r_10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="55"
                            height="54.996"
                            viewBox="0 0 55 54.996"
                          >
                            <path
                              id="Subtraction_2"
                              data-name="Subtraction 2"
                              d="M3120.5,14266a27.5,27.5,0,1,1,19.445-8.055A27.32,27.32,0,0,1,3120.5,14266Zm-4.535-21.2v4.6a.879.879,0,0,0,.775.971c.476,0,.7-.326.907-.644.048-.071.1-.143.146-.209.136-.18.265-.359.4-.542.115-.159.251-.349.4-.54.191-.238,1.525-1.991,1.6-2.222l-2.087-.734-.463-.156-.02-.007-.069-.023c-.6-.206-1.429-.487-1.579-.5Zm11.366-13.729h0a3.928,3.928,0,0,1-.556.719l-.05.056-1.935,2.333c-.187.225-.369.447-.545.664l-.113.139c-.184.227-.4.494-.626.764l-2.575,3.095c-.082.1-.166.2-.247.291-.128.148-.261.3-.393.473-.331.371-3.136,3.7-3.215,3.944a10.7,10.7,0,0,1,1.021.335c.22.076.421.148.625.22l.216.076.164.059,8.078,2.754c.054.018.119.042.208.074a2.568,2.568,0,0,0,.776.205.548.548,0,0,0,.082,0,.834.834,0,0,0,.673-.685l.7-4.724c.216-1.585.455-3.139.7-4.724l1.4-9.435a.562.562,0,0,0,.012-.152v-.257a.7.7,0,0,0-.349-.566.612.612,0,0,0-.36-.106,2.756,2.756,0,0,0-1.195.473c-.137.078-.251.143-.365.2l-7.561,3.944a4.881,4.881,0,0,1-.455.229c-.127.066-.246.131-.361.193-.166.091-.338.185-.525.277l-.179.09c-.083.04-.174.086-.276.141-.739.372-1.554.809-2.342,1.23l-.019.011-.007,0c-.848.454-1.725.924-2.512,1.318l-2.682,1.385c-.234.111-.434.223-.645.341l-.042.023-.195.108-4.449,2.328a.88.88,0,0,0-.246.5v.229a.919.919,0,0,0,.09.275,1.208,1.208,0,0,0,.751.449l.037.012.082.026,6.052,2.07a1.033,1.033,0,0,1,.244-.255c.044-.035.093-.074.149-.127l5.638-4.813a.7.7,0,0,0,.143-.123l.018-.02.041-.041,1.246-1.066c.057-.048.089-.071.115-.091a1.134,1.134,0,0,0,.1-.077c.053-.041.085-.069.118-.1s.055-.049.095-.081l3.764-3.215a.743.743,0,0,0,.078-.071l.011-.012a.937.937,0,0,1,.112-.1c.037-.032.108-.094.2-.175l.006,0a11.421,11.421,0,0,1,1.27-1.038Z"
                              transform="translate(-3092.999 -14211.001)"
                              fill="#4d5fc2"
                            />
                          </svg>
                        </div>
                        <div>
                          <h5 className="f20 color_black m_b_5">Mail</h5>
                          <p>
                            <a
                              href="mailto:sheriff@co.whatcom.wa.us"
                              className="color_black"
                            >
                              sheriff@co.whatcom.wa.us
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-xl-4 col-md-6 col-sm-6">
                      <div className="border radius p20 d-flex align-items-center">
                        <div className="m_r_10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="55"
                            height="54.996"
                            viewBox="0 0 55 54.996"
                          >
                            <path
                              id="Subtraction_3"
                              data-name="Subtraction 3"
                              d="M3120.5,14266a27.5,27.5,0,1,1,19.445-8.055A27.32,27.32,0,0,1,3120.5,14266Zm-9.738-17.766v2.509a.761.761,0,0,0,.672.672h18.951a.761.761,0,0,0,.672-.672v-2.509Zm10.57-17.222a7.469,7.469,0,0,0-3.793.738,7.732,7.732,0,0,0-2.989,2.525,7.285,7.285,0,0,0-1.451,4.125v8.274h15.622v-8.167a7.782,7.782,0,0,0-7.388-7.5Zm-12.551.82c-.546,0-.885.3-.885.778,0,.537.494.8,1.066,1.1l.023.013c.139.073.283.149.428.233s.264.154.389.227l.05.027c.145.083.3.172.468.271.059.034.119.07.18.108a1.923,1.923,0,0,0,.918.371.72.72,0,0,0,.521-.226c.234-.213.234-.333.234-.652,0-.366-.3-.538-.562-.69l-.049-.029-.065-.038-.058-.034A15.607,15.607,0,0,0,3108.78,14231.83Zm24.364,0a1.63,1.63,0,0,0-.8.322c-.093.059-.167.1-.234.141l-1.792,1.034c-.032.021-.067.04-.1.061-.259.153-.551.327-.551.7v.071a.625.625,0,0,0,.189.561.752.752,0,0,0,.545.242,1.981,1.981,0,0,0,.963-.4l.023-.015.092-.058,1.833-1.033c.489-.279.713-.651.615-1.02A.842.842,0,0,0,3133.144,14231.83Zm-5.1-5.176a.85.85,0,0,0-.251.039c-.4.121-.59.483-.808.9l-.033.064c-.042.084-.166.292-.323.555l-.014.024a10.565,10.565,0,0,0-.971,1.824.841.841,0,0,0,.767.9,1.044,1.044,0,0,0,.836-.6l.045-.08,0-.009c.163-.295.3-.55.476-.839a12.424,12.424,0,0,0,1.013-1.873C3128.785,14226.892,3128.385,14226.654,3128.044,14226.654Zm-14.228,0a.762.762,0,0,0-.763.759,1.238,1.238,0,0,0,.267.767c.052.083.124.194.2.328.035.06.121.209.232.406l.025.045c.358.63.957,1.685,1.052,1.779a.869.869,0,0,0,.566.21.788.788,0,0,0,.779-.882,25.394,25.394,0,0,0-1.6-2.929A.893.893,0,0,0,3113.815,14226.651Zm7.052-1.9a.707.707,0,0,0-.779.679v3.325a.786.786,0,0,0,1.558,0v-3.325A.707.707,0,0,0,3120.867,14224.751Z"
                              transform="translate(-3092.999 -14211.001)"
                              fill="#e1133a"
                            />
                          </svg>
                        </div>
                        <div>
                          <h5 className="f20 color_black m_b_5">Emergency</h5>
                          <p>
                            <a href="tel:911" className="color_black">
                              Call 911 Immediately
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="color_black f22 m_b_20">
                    If you have a tip to turn in. Pick the category that best
                    fits your Tip and it will be emailed there.
                  </p>
                  <div className="m_b_30">
                    <Select
                      value={country || ""}
                      onChange={(e) => this.selectChange(e, "country")}
                      options={countryList}
                      classNamePrefix="custom_select bg_white"
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="d-flex align-items-center flex-wrap justify-content-end justify_content_start_mob">
                    <div className="m_b_10 w-100">
                      <button className="d-flex align-items-center flex-wrap btn_theme btn_green w-100 justify-content-center">
                        <span className="m_r_10">Visit Website</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10.306"
                            height="10.306"
                            viewBox="0 0 10.306 10.306"
                          >
                            <g
                              id="Icon_feather-arrow-up-right"
                              data-name="Icon feather-arrow-up-right"
                              transform="translate(-9.793 -9.5)"
                            >
                              <path
                                id="Path_24248"
                                data-name="Path 24248"
                                d="M10.5,19.1l8.6-8.6"
                                fill="none"
                                stroke="#fff"
                                stroke-linejoin="round"
                                stroke-width="2"
                              />
                              <path
                                id="Path_24249"
                                data-name="Path 24249"
                                d="M10.5,10.5h8.6v8.6"
                                fill="none"
                                stroke="#fff"
                                stroke-linejoin="round"
                                stroke-width="2"
                              />
                            </g>
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div className="w-100 m_b_10">
                      <button className="d-flex align-items-center flex-wrap btn_theme btn_black w-100 justify-content-center">
                        <span className="m_r_10">View Public Notic</span>
                      </button>
                    </div>

                    <div className="w-100 m_b_10">
                      <button className="d-flex align-items-center flex-wrap btn_theme btn_red w-100 justify-content-center">
                        <span className="m_r_10">View Amber Alerts</span>
                      </button>
                    </div>

                    <div className="w-100">
                      <button className="d-flex align-items-center flex-wrap btn_theme w-100 text-center justify-content-center">
                        <span className="m_r_10">Invite Friends</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileSetting;
