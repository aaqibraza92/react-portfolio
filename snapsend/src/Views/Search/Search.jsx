import React, { Component } from "react";
import Images from "Constant/Images/Images";
import { Link } from "react-router-dom";
import CmnBanner from "Components/CmnBanner";
import Select from "react-select";
import "./Search.scss";

const options = [
  { value: "", label: "Country" },
  { value: "India", label: "India" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "USA", label: "USA" },
];

const options2 = [
  { value: "", label: "State" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Andhra Pradsesh", label: "Andhra Pradsesh" },
];
const options3 = [
  { value: "", label: "City" },
  { value: "Indore", label: "Indore" },
  { value: "Bhopal", label: "Bhopal" },
  { value: "Delhi", label: "Delhi" },
];

class Search extends Component {
  handleChange = (selectedVal, stateKey) => {
    this.setState({
      [stateKey]: selectedVal,
    });
    //console.log(stateKey);
  };

  constructor(props) {
    super(props);

    this.state = {
      searchlists: [
        {
          title: "Whatcom County Sheriff's Department Lorem Ipsum",
          desc: "Dedicated to making whatcom county the safest in the state through excellence in public safety",
          dateTime: "17 August 2021, 12:30 pm",
          mobile: "( 360 ) 778 - 6623",
          email: "sheriff@co.whatcom.wa.us",
          emrgency: "For an Emergency Call 911",
        },
        {
          title: "Whatcom County Sheriff's Department Lorem Ipsum",
          desc: "Dedicated to making whatcom county the safest in the state through excellence in public safety",
          dateTime: "17 August 2021, 12:30 pm",
          mobile: "( 360 ) 778 - 6623",
          email: "sheriff@co.whatcom.wa.us",
          emrgency: "For an Emergency Call 911",
        },
        {
          title: "Whatcom County Sheriff's Department Lorem Ipsum",
          desc: "Dedicated to making whatcom county the safest in the state through excellence in public safety",
          dateTime: "17 August 2021, 12:30 pm",
          mobile: "( 360 ) 778 - 6623",
          email: "sheriff@co.whatcom.wa.us",
          emrgency: "For an Emergency Call 911",
        },
        {
          title: "Whatcom County Sheriff's Department Lorem Ipsum",
          desc: "Dedicated to making whatcom county the safest in the state through excellence in public safety",
          dateTime: "17 August 2021, 12:30 pm",
          mobile: "( 360 ) 778 - 6623",
          email: "sheriff@co.whatcom.wa.us",
          emrgency: "For an Emergency Call 911",
        },
        {
          title: "Whatcom County Sheriff's Department Lorem Ipsum",
          desc: "Dedicated to making whatcom county the safest in the state through excellence in public safety",
          dateTime: "17 August 2021, 12:30 pm",
          mobile: "( 360 ) 778 - 6623",
          email: "sheriff@co.whatcom.wa.us",
          emrgency: "For an Emergency Call 911",
        },
        {
          title: "Whatcom County Sheriff's Department Lorem Ipsum",
          desc: "Dedicated to making whatcom county the safest in the state through excellence in public safety",
          dateTime: "17 August 2021, 12:30 pm",
          mobile: "( 360 ) 778 - 6623",
          email: "sheriff@co.whatcom.wa.us",
          emrgency: "For an Emergency Call 911",
        },
      ],
      selectedOption: { value: "", label: "Country" },
      selectedOption2: { value: "", label: "State" },
      selectedOption3: { value: "", label: "City" },
    };
  }
  render() {
    const { selectedOption, selectedOption2, selectedOption3, searchlists } =
      this.state;

    return (
      <>
        <CmnBanner title="Search" imageURL={Images.topsrc.default} />

        <div className="container">
          <div className="topBanner src_filter filter_area position-relative shadow bg_white radius m_b_60">
            <div className="row align-items-center w-100">
              <div className="col-lg-3 m_b_30_mob">
                <div className="WrapperSelector">
                  <Select
                    value={selectedOption}
                    onChange={(e) => this.handleChange(e, "selectedOption")}
                    options={options}
                    classNamePrefix="sel_style"
                    //menuIsOpen={true}
                    className="no_border_select"
                  />

                  <p className="color_grey f16">Choose your Country</p>
                </div>
              </div>

              <div className="col-lg-3 m_b_30_mob">
                <div className="WrapperSelector">
                  <Select
                    value={selectedOption2}
                    onChange={(e) => this.handleChange(e, "selectedOption2")}
                    options={options2}
                    classNamePrefix="sel_style"
                    className="no_border_select"
                  />

                  <p className="color_grey f16">Choose your States</p>
                </div>
              </div>
              <div className="col-lg-3 m_b_30_mob">
                <div className="WrapperSelector">
                  <Select
                    value={selectedOption3}
                    onChange={(e) => this.handleChange(e, "selectedOption3")}
                    options={options3}
                    classNamePrefix="sel_style"
                    className="no_border_select"
                  />

                  <p className="color_grey f16">Choose your City</p>
                </div>
              </div>
              <div className="col-lg-3 text-center">
                <button
                  className="btn_theme btn_blue"
                  onClick={() => this.toggleModal("modal1")}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="text-center m_b_60">
            <h3 className="color_black f32">
              Search Result for "United States"
            </h3>
            <p className="color_grey f18">120 Results Found</p>
          </div>

          <ul className="no_ul">
            {searchlists.map((obj, index) => {
              console.log(obj);
              return (
                <li className="m_b_20">
                  <div className="wrapper_src_list bg_white ">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="d-flex flex-wrap ">
                          <div className="m_r_10 m_b_10_mob">
                            <img
                              className="radius img-fluid"
                              src={Images.policeLogo.default}
                              alt=""
                            />
                          </div>
                          <div className="m_b_10_mob">
                            <h4 className="f18 f_bold color_black m_b_10">
                              {obj.title}
                            </h4>
                            <p className="f16 color_grey">{obj.desc}</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-5">
                        <div className="wrapper_date d-flex flex-wrap justify-content-end justify_content_start_mob">
                          <ul className="listCnt">
                            <li className="d-flex align-items-center m_b_20">
                              <svg
                                className="m_r_10"
                                id="Group_53538"
                                data-name="Group 53538"
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                              >
                                <circle
                                  id="Ellipse_15071"
                                  data-name="Ellipse 15071"
                                  cx="14"
                                  cy="14"
                                  r="14"
                                  fill="#40c390"
                                  opacity="0.15"
                                />
                                <path
                                  id="Path_24241"
                                  data-name="Path 24241"
                                  d="M0,3.676A4.719,4.719,0,0,0,.45,5.76a7.78,7.78,0,0,0,.358.792L1.892,8.286l.625.792c.3.325.65.742.975,1.025l.917.784C5.627,11.837,7.66,13,9.136,13A1.648,1.648,0,0,0,10.2,12.72a2.691,2.691,0,0,0,.592-.558l.417-.417a1.78,1.78,0,0,0,.4-.442c.392-.667-.133-1.175-.634-1.625l-.959-.942a1.906,1.906,0,0,0-.333-.3c-.759-.508-1.292.267-1.842.809-.417.417-.333.475-.825.233-.075-.042-.092-.058-.158-.1A7.928,7.928,0,0,1,4.8,7.71L3.9,6.627c-.067-.092-.142-.208-.2-.308-.517-.967-.517-.567.667-1.792a.929.929,0,0,0,.042-1.4C4.1,2.817,3.143,1.792,2.884,1.584A.947.947,0,0,0,1.7,1.367,7.7,7.7,0,0,0,.809,2.2l-.283.283a2.361,2.361,0,0,0-.267.308A1.676,1.676,0,0,0,0,3.676ZM6.418,3.6a3.6,3.6,0,0,1,1.742.767A3.47,3.47,0,0,1,9.286,6.143a1.756,1.756,0,0,0,.075.3,9.719,9.719,0,0,0,.992-.175,4.2,4.2,0,0,0-.583-1.575,4.436,4.436,0,0,0-1.009-1.15c-.108-.083-.183-.15-.3-.225l-.492-.3a4.791,4.791,0,0,0-1.225-.4c-.233-.05-.167-.083-.25.5C6.468,3.259,6.435,3.459,6.418,3.6Zm5.56,2.667a3.564,3.564,0,0,0,.508-.075A3.245,3.245,0,0,1,13,6.118l-.133-.642a7.718,7.718,0,0,0-.4-1.142c-.083-.183-.158-.35-.258-.525-.058-.083-.083-.15-.142-.242s-.083-.142-.15-.233c-.108-.167-.2-.308-.317-.467A7.5,7.5,0,0,0,9.078.742c-.1-.05-.158-.075-.258-.117S8.661.55,8.552.5C8.377.433,8.186.358,7.986.292L7.369.117A2.324,2.324,0,0,0,7.052.058,1.707,1.707,0,0,0,6.7,0L6.56.95c.008.092-.042.05.25.108a6.142,6.142,0,0,1,2.8,1.25c.075.067.142.1.217.175s.117.092.192.158.117.125.183.192a6.408,6.408,0,0,1,1.35,1.976,6.888,6.888,0,0,1,.425,1.459Z"
                                  transform="translate(7.963 7.503)"
                                  fill="#40c390"
                                  fill-rule="evenodd"
                                />
                              </svg>
                              <span>
                                <a href={`tel: ${obj.mobile}`}>{obj.mobile}</a>
                              </span>
                            </li>

                            <li className="d-flex align-items-center m_b_20">
                              <svg
                                className="m_r_10"
                                id="Group_53537"
                                data-name="Group 53537"
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                              >
                                <circle
                                  id="Ellipse_15071"
                                  data-name="Ellipse 15071"
                                  cx="14"
                                  cy="14"
                                  r="14"
                                  fill="#4d5fc2"
                                  opacity="0.15"
                                />
                                <path
                                  id="Path_24242"
                                  data-name="Path 24242"
                                  d="M32.474,2.41l-.033.025ZM26.22,12.466a.481.481,0,0,0,.425.534c.317,0,.425-.267.575-.467s.284-.392.434-.592c.1-.125.834-1.092.876-1.217l-1.142-.4c-.183-.058-1.051-.367-1.167-.375ZM34.85.367V.509a.257.257,0,0,1-.008.083l-.767,5.162c-.133.867-.267,1.726-.384,2.585l-.384,2.585a.452.452,0,0,1-.367.375,1.673,1.673,0,0,1-.584-.15L27.937,9.639l-.55-.192a5.479,5.479,0,0,0-.559-.183c.042-.133,1.559-1.935,1.759-2.16.117-.15.233-.275.35-.417l1.409-1.693c.242-.292.459-.567.7-.859L32.107,2.86a2.476,2.476,0,0,0,.334-.425,8.964,8.964,0,0,0-.809.667c-.05.042-.067.067-.108.1l-2.06,1.759c-.05.042-.067.058-.117.1s-.058.042-.117.092l-.684.584a.618.618,0,0,1-.108.1L25.353,8.472a1.024,1.024,0,0,0-.217.208l-3.31-1.134c-.208-.067-.367-.1-.475-.267a.455.455,0,0,1-.05-.15V7a.477.477,0,0,1,.133-.275l2.435-1.276c.167-.092.309-.175.484-.258l1.468-.759c.834-.417,1.826-.976,2.668-1.4.092-.05.167-.083.25-.125.167-.083.309-.167.484-.258.092-.042.158-.075.25-.125L33.608.367c.342-.175.775-.5,1.051-.309a.381.381,0,0,1,.192.309ZM32.5,2.376l-.025.033Zm.025-.025-.025.025Zm0,0Z"
                                  transform="translate(-14.094 7.029)"
                                  fill="#4d5fc2"
                                  fill-rule="evenodd"
                                />
                              </svg>

                              <span>
                                <a href={`tel: ${obj.email}`}>{obj.email}</a>
                              </span>
                            </li>

                            <li className="d-flex align-items-center">
                              <svg
                                className="m_r_10"
                                id="Group_53557"
                                data-name="Group 53557"
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                              >
                                <g id="Group_53537" data-name="Group 53537">
                                  <circle
                                    id="Ellipse_15071"
                                    data-name="Ellipse 15071"
                                    cx="14"
                                    cy="14"
                                    r="14"
                                    fill="#e1133a"
                                    opacity="0.15"
                                  />
                                </g>
                                <g
                                  id="Layer_x0020_1"
                                  transform="translate(7.877 7.071)"
                                >
                                  <path
                                    id="Path_24246"
                                    data-name="Path 24246"
                                    d="M2.7,7.091v4.3h8.12V7.146a4.048,4.048,0,0,0-3.841-3.9,3.926,3.926,0,0,0-1.97.383A4.019,4.019,0,0,0,3.458,4.947,3.851,3.851,0,0,0,2.7,7.091ZM6.336.35V2.079c0,.471.81.471.81,0V.35C7.146-.12,6.336-.12,6.336.35Zm4.979,4.5c0,.153-.011.219.1.328.274.274.58.044.843-.12l.952-.536c.613-.35.252-.843-.088-.843a1.237,1.237,0,0,0-.536.241l-.93.536C11.512,4.542,11.315,4.629,11.315,4.848Zm-2.09-2.09c0,.427.492.722.832.153.1-.175.175-.317.274-.481a6.636,6.636,0,0,0,.525-.974c0-.383-.263-.525-.514-.449-.219.066-.317.274-.438.5A10.836,10.836,0,0,0,9.225,2.758ZM0,4.082c0,.35.394.471.788.7.164.1.306.175.471.274.263.153.569.394.843.131.12-.109.12-.175.12-.339,0-.219-.208-.306-.35-.394A13.455,13.455,0,0,0,.46,3.677c-.274,0-.46.142-.46.4Zm2.681-2.7c0,.252.109.328.241.569.077.131.613,1.094.678,1.16a.417.417,0,0,0,.7-.35,13.348,13.348,0,0,0-.832-1.521.409.409,0,0,0-.788.142ZM1.488,13.5a.4.4,0,0,0,.35.35h9.849a.4.4,0,0,0,.35-.35V12.2H1.488v1.3Z"
                                    transform="translate(0 0.002)"
                                    fill="#e1133a"
                                    fill-rule="evenodd"
                                  />
                                </g>
                              </svg>

                              <span>
                                <a href={`tel: ${obj.emrgency}`}>{obj.emrgency}</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default Search;
