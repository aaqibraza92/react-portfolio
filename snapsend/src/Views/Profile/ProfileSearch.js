import React, { Component } from "react";
import Images from "Constant/Images/Images";

import {
    Container,
    Col,
    Form,
    Row,
    FormGroup,
    Label,
    Input,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";

class ProfileSearch extends Component {
  switchtodetail = (val) => {
    console.log(val);
    this.setState({
      searchDetailkey: val,
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      searchDetailkey: "",
    };
  }
  render() {
    return (
      <>
        <div className="detailsPage_src">
          <button
            className="d-flex align-items-center flex-wrap m_b_30"
            onClick={() => this.switchtodetail("toListpage")}
          >
            <div>
              <svg
                style={{ marginRight: 5 + "px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="12"
                viewBox="0 0 5.569 9.839"
              >
                <path
                  id="Path_377"
                  data-name="Path 377"
                  d="M15.5,18l-4,4-4-4"
                  transform="translate(22.65 -6.581) rotate(90)"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                />
              </svg>
            </div>
            <div>Go back</div>
          </button>

          <div className="bg_white radius shadow">
            <header className="header_sec border_bottom">
              <div className="d-flex align-items-center flex-wrap justify-content-between">
                <div>
                  <h3 className="f20 f_bold color_black m_b_0">
                    Incident report
                  </h3>
                </div>
                <div>
                  <p className="f16 color_grey">20 august 2021, 6 :30pm</p>
                </div>
              </div>
            </header>
            <section className="body_src_area p20">
              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">Snap Send No.:</p>
                </div>
                <div className="col-lg-9">
                  <p className="label_element f16 color_black">
                    USA,WA-BU.1114.7-12-1
                  </p>
                </div>
              </div>

              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">
                    Destination Department:
                  </p>
                </div>
                <div className="col-lg-9">
                  <p className="label_element f16 color_black">
                    National Investigation Agency
                  </p>
                </div>
              </div>

              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">
                    Description Information:
                  </p>
                </div>
                <div className="col-lg-9">
                  <p className="label_element f16 color_black">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>

              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">Location:</p>
                </div>
                <div className="col-lg-9">
                  <p className="label_element f16 color_black">
                    Bellingham, Washington State, US
                  </p>
                </div>
              </div>

              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">Date:</p>
                </div>
                <div className="col-lg-9">
                  <p className="label_element f16 color_black">
                    17 august 2021
                  </p>
                </div>
              </div>

              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">Time:</p>
                </div>
                <div className="col-lg-9">
                  <p className="label_element f16 color_black">12:30pm</p>
                </div>
              </div>

              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">
                    Name of people involved:
                  </p>
                </div>
                <div className="col-lg-9">
                  <p className="label_element f16 color_black">1 person</p>
                </div>
              </div>

              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">Suspect name:</p>
                </div>
                <div className="col-lg-9">
                  <p className="label_element f16 color_black">
                    Andrew Jalks Donald
                  </p>
                </div>
              </div>

              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">Gang name:</p>
                </div>
                <div className="col-lg-9">
                  <p className="label_element f16 color_black">
                    Andrew Jalks Donald
                  </p>
                </div>
              </div>

              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">Photos:</p>
                </div>
                <div className="col-lg-9">
                  <div className="photos d-flex align-items-center flex-wrap">
                    <div className="m_r_5 w_48">
                        <img className="img-fluid radius" src={Images.thumnail_img.default} />
                    </div>
                    <div className="m_r_5 w_48">
                        <img className="img-fluid radius" src={Images.thumnail_img.default} />
                    </div>
                    <div className="m_r_5 w_48">
                        <img className="img-fluid radius" src={Images.thumnail_img.default} />
                    </div>
                    <div className="m_r_5 w_48">
                        <img className="img-fluid radius" src={Images.thumnail_img.default} />
                    </div>
                    <div className="m_r_5 w_48">
                        <img className="img-fluid radius" src={Images.thumnail_img.default} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">Videos:</p>
                </div>
                <div className="col-lg-9">
                <div className="photos d-flex align-items-center flex-wrap">
                    <div className="m_r_5 w_48">
                        <img className="img-fluid radius" src={Images.thumnail_img.default} />
                    </div>
                    <div className="m_r_5 w_48">
                        <img className="img-fluid radius" src={Images.thumnail_img.default} />
                    </div>
                    <div className="m_r_5 w_48">
                        <img className="img-fluid radius" src={Images.thumnail_img.default} />
                    </div>
                   
                  </div>
                </div>
              </div>

              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">Audios:</p>
                </div>
                <div className="col-lg-9">
                  <p className="label_element f16 color_black">
                    Andrew Jalks Donald
                  </p>
                </div>
              </div>

              <div className="row m_b_10">
                <div className="col-lg-3">
                  <p className="label_element f16 color_grey">
                    Witness Contact information:
                  </p>
                </div>
                <div className="col-lg-9">

                    <div class="quote_style">
                            <p>
                            Mr. Bob Smith
                            </p>
                            <p>
                            21211 Elim Street Bellingham WA 98225

                            </p>
                            <p>
                            (360) 222-2222
                            </p>
                    </div>
            
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileSearch;
