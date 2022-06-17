import React, { Component } from "react";
import PropTypes from "prop-types";
import Mycompo from "./Mycompo";
import Select from "react-select";
import CmnInput from "Components/CmnInput/CmnInput";
import { CommonNotifyModal } from "Modals";
import "./Reportfile.scss";
import { Images } from "Constant";

class Reportfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPastReport: { value: "", label: "Choose past report" },
      selectedDestination: {
        value: "",
        label: "Choose destination departments",
      },

      pastReport: [
        { value: "Choose past report", label: "Choose past report" },
        { value: "Lorem", label: "Lorem" },
        { value: "Lorem", label: "Lorem" },
        { value: "Lorem", label: "Lorem" },
      ],

      Destination: [
        { value: "", label: "Choose destination departments" },
        { value: "Lorem", label: "Lorem" },
        { value: "Lorem", label: "Lorem" },
        { value: "Lorem", label: "Lorem" },
      ],
      typeOfReport: [
        { value: "", label: "Choose report type" },
        { value: "Lorem", label: "Lorem" },
        { value: "Lorem", label: "Lorem" },
        { value: "Lorem", label: "Lorem" },
      ],
      notice: "",
      success: "",
    };
  }

  handleChange = (selectedOption, stateKey) => {
    this.setState({ [stateKey]: selectedOption });
    console.log(selectedOption);
  };

  fileUploader = (e) => {
    this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
    console.log(URL.createObjectURL(e.target.files[0]));
    console.log(e.target);
  };

  toggleModal = (modalName) => {
    this.setState({ [modalName]: !this.state[modalName] });
  };

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      selectedPastReport,
      pastReport,
      selectedDestination,
      Destination,
      typeOfReport,
      videoUpload,
      track,
      banner,
    } = this.state;
    return (
      <>
        <Mycompo />

        <section className="p_t_80 p_b_80">
          <div className="container">
            <div className="m_b_20">
              <button className="color_black f16 d-flex align-items-center flex-wrap">
                <span style={{ marginRight: 5 + "px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="14"
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
                </span>
                <span>Go back</span>
              </button>
            </div>

            <h2 className="color_black f28 f_bold m_b_20">File a report</h2>

            <h2 className="color_black f22 f_bold">Report informations</h2>
            <p className="color_grey m_b_20">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className="emergency d-flex align-items-center justify-content-between m_b_20">
              <div>
                <span className="f28 text-uppercase m_r_10">
                  If it's an Emergency
                </span>
                <a href="tel:911" className="f28 text-uppercase color_red">
                  call 911
                </a>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.512"
                  height="33.273"
                  viewBox="0 0 32.512 33.273"
                >
                  <g id="Layer_x0020_1" transform="translate(0 0.003)">
                    <path
                      id="Path_24246"
                      data-name="Path 24246"
                      d="M6.49,17.031V27.358h19.5v-10.2a9.721,9.721,0,0,0-9.223-9.355,9.428,9.428,0,0,0-4.73.92A9.652,9.652,0,0,0,8.3,11.881a9.247,9.247,0,0,0-1.813,5.15ZM15.214.845V5c0,1.13,1.944,1.13,1.944,0V.845C17.159-.285,15.214-.285,15.214.845Zm11.956,10.8c0,.368-.026.526.236.788.657.657,1.393.105,2.023-.289l2.286-1.288c1.471-.841.6-2.023-.21-2.023a2.97,2.97,0,0,0-1.288.578L27.985,10.7C27.643,10.909,27.17,11.119,27.17,11.645ZM22.151,6.626c0,1.025,1.182,1.734,2,.368.236-.42.42-.762.657-1.156A15.936,15.936,0,0,0,26.066,3.5c0-.92-.631-1.261-1.235-1.077-.526.158-.762.657-1.051,1.209A26.019,26.019,0,0,0,22.151,6.626ZM0,9.805c0,.841.946,1.13,1.892,1.682.394.236.736.42,1.13.657.631.368,1.366.946,2.023.315.289-.263.289-.42.289-.815,0-.526-.5-.736-.841-.946A32.309,32.309,0,0,0,1.1,8.833c-.657,0-1.1.342-1.1.972Zm6.438-6.49c0,.6.263.788.578,1.366C7.2,5,8.487,7.309,8.645,7.467a1,1,0,0,0,1.682-.841,32.051,32.051,0,0,0-2-3.652.983.983,0,0,0-1.892.342ZM3.574,32.43a.95.95,0,0,0,.841.841H28.064a.95.95,0,0,0,.841-.841V29.3H3.574V32.43Z"
                      transform="translate(0 0)"
                      fill="#e1133a"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
              </div>
            </div>

            <div className="p_l_20 p_r_20 p_t_10 p_b_10">
              <div className="row m_b_30">
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <div className="m_r_10">
                      <p className="f16 color_grey">New report:</p>
                    </div>
                    <div className="m_r_10">
                      <button className="btn_theme btn_light_green">Yes</button>
                    </div>
                    <div className="m_r_10">
                      <button className="btn_theme btn_transparent_orange">
                        No
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <div className="m_r_10 w-50">
                      <p className="f16 color_grey">Add to past report:</p>
                    </div>

                    <div className="w-100">
                      <Select
                        name="pastReport"
                        value={selectedPastReport}
                        onChange={(e) =>
                          this.handleChange(e, "selectedPastReport")
                        }
                        options={pastReport}
                        classNamePrefix="custom_select"
                        //menuIsOpen = {true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="form_group">
                    <label htmlFor="" className="f16 color_black m_b_10">
                      Destination department
                    </label>

                    <Select
                      name="destination"
                      value={selectedDestination}
                      onChange={(e) =>
                        this.handleChange(e, "selectedDestination")
                      }
                      options={Destination}
                      classNamePrefix="custom_select"
                      //menuIsOpen = {true}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form_group">
                    <label htmlFor="" className="f16 color_black m_b_10">
                      Type of report
                    </label>

                    <Select
                      name="destination"
                      value={typeOfReport}
                      onChange={(e) => this.handleChange(e, "typeOfReport")}
                      options={typeOfReport}
                      classNamePrefix="custom_select"
                      //menuIsOpen = {true}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form_group">
                    <label htmlFor="" className="f16 color_black m_b_10">
                      Description Information
                    </label>
                    <textarea
                      name=""
                      id=""
                      placeholder="Description Information"
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form_group">
                    <CmnInput
                      label="Location"
                      type="text"
                      className=""
                      placeholder="Location"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group ">
                        <div className="position-relative">
                          <CmnInput
                            label="Date"
                            type="date"
                            className=""
                            placeholder="Time"
                          />

                          <svg
                            className="input_position"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.75"
                            height="18"
                            viewBox="0 0 15.75 18"
                          >
                            <path
                              id="Icon_awesome-calendar-alt"
                              data-name="Icon awesome-calendar-alt"
                              d="M0,16.313A1.688,1.688,0,0,0,1.688,18H14.063a1.688,1.688,0,0,0,1.688-1.687V6.75H0ZM11.25,9.422A.423.423,0,0,1,11.672,9h1.406a.423.423,0,0,1,.422.422v1.406a.423.423,0,0,1-.422.422H11.672a.423.423,0,0,1-.422-.422Zm0,4.5a.423.423,0,0,1,.422-.422h1.406a.423.423,0,0,1,.422.422v1.406a.423.423,0,0,1-.422.422H11.672a.423.423,0,0,1-.422-.422Zm-4.5-4.5A.423.423,0,0,1,7.172,9H8.578A.423.423,0,0,1,9,9.422v1.406a.423.423,0,0,1-.422.422H7.172a.423.423,0,0,1-.422-.422Zm0,4.5a.423.423,0,0,1,.422-.422H8.578A.423.423,0,0,1,9,13.922v1.406a.423.423,0,0,1-.422.422H7.172a.423.423,0,0,1-.422-.422Zm-4.5-4.5A.423.423,0,0,1,2.672,9H4.078a.423.423,0,0,1,.422.422v1.406a.423.423,0,0,1-.422.422H2.672a.423.423,0,0,1-.422-.422Zm0,4.5a.423.423,0,0,1,.422-.422H4.078a.423.423,0,0,1,.422.422v1.406a.423.423,0,0,1-.422.422H2.672a.423.423,0,0,1-.422-.422ZM14.063,2.25H12.375V.563A.564.564,0,0,0,11.813,0H10.688a.564.564,0,0,0-.562.563V2.25h-4.5V.563A.564.564,0,0,0,5.063,0H3.938a.564.564,0,0,0-.562.563V2.25H1.688A1.688,1.688,0,0,0,0,3.938V5.625H15.75V3.938A1.688,1.688,0,0,0,14.063,2.25Z"
                              fill="#929398"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">
                        <div className="position-relative">
                          <CmnInput
                            label="Time"
                            type="time"
                            className=""
                            placeholder="Location"
                          />
                          <svg
                            className="input_position"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                          >
                            <path
                              id="Icon_ionic-ios-time"
                              data-name="Icon ionic-ios-time"
                              d="M12.375,3.375a9,9,0,1,0,9,9A9,9,0,0,0,12.375,3.375Zm.606,9.779a.608.608,0,0,1-.606.606H8.221a.606.606,0,1,1,0-1.212h3.548V6.837a.606.606,0,0,1,1.212,0Z"
                              transform="translate(-3.375 -3.375)"
                              fill="#929398"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form_group">
                    <div className="position-relative">
                      <CmnInput
                        label="Name of people involved"
                        type="number"
                        className=""
                        placeholder="1 Person"
                      />

                      <div className="input_position increment_btn d-flex">
                        <button onClick="" className="btn_theme">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="1.8"
                            viewBox="0 0 16 1.8"
                          >
                            <line
                              id="Line_68"
                              data-name="Line 68"
                              y2="16"
                              transform="translate(16 0.9) rotate(90)"
                              fill="none"
                              stroke="#fff"
                              stroke-width="1.8"
                            />
                          </svg>
                        </button>
                        <button onClick="" className="btn_theme">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                          >
                            <g
                              id="Group_52216"
                              data-name="Group 52216"
                              transform="translate(-1131.5 -506.5)"
                            >
                              <line
                                id="Line_69"
                                data-name="Line 69"
                                y2="16"
                                transform="translate(1139.5 506.5)"
                                fill="none"
                                stroke="#fff"
                                stroke-width="1.8"
                              />
                              <line
                                id="Line_70"
                                data-name="Line 70"
                                y2="16"
                                transform="translate(1147.5 514.5) rotate(90)"
                                fill="none"
                                stroke="#fff"
                                stroke-width="1.8"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 d-flex align-items-center flex-wrap m_b_30_mob">
                  <div className="form_group d-flex inline_group h_37 m_b_0 m_r_20">
                    <label
                      htmlFor="suspectName"
                      className="d-flex align-items-center flex-wrap"
                    >
                      <CmnInput
                        type="checkbox"
                        id="suspectName"
                        className="m_r_10"
                        value="Suspect Name"
                      />
                      <span>Suspect Name</span>
                    </label>
                  </div>

                  <div className="form_group d-flex inline_group h_37 m_b_0">
                    <label
                      htmlFor="Gangname"
                      className="d-flex align-items-center flex-wrap"
                    >
                      <CmnInput
                        type="checkbox"
                        id="Gangname"
                        className="m_r_10"
                        value="Gang name"
                      />
                      <span>Gang name</span>
                    </label>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form_group">
                    <CmnInput
                      label="Suspect Name"
                      type="text"
                      className=""
                      placeholder="Suspect Name"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form_group">
                    <CmnInput
                      label="Gang name"
                      type="text"
                      className=""
                      placeholder="Gang name"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div class="d-flex align-items-center p_b_30 border_bottom m_b_30 m_t_15">
                    <div class="m_r_10">
                      <p class="f16 color_black">Add my contact information:</p>
                    </div>
                    <div class="m_r_10">
                      <button class="btn_theme btn_light_green">Yes</button>
                    </div>
                    <div class="m_r_10">
                      <button class="btn_theme btn_transparent_orange">
                        No
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 m_b_30_mob">
                  <div className="m_b_30">
                    <h4 className="f20 color_black f_bold">Pictures</h4>
                    <p className="color_grey f16">
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </div>

                  {banner == "" || banner == null ? (
                    <div className="grey_border_area">
                      <div className="position-relative banner_upload_area justify-content-center d-flex align-items-center">
                        <input
                          id="banner"
                          onChange={this.fileUploader}
                          name="banner"
                          type="file"
                          className="file_upl"
                        />

                        <div className="upload_banner_up text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42.667"
                            height="32"
                            viewBox="0 0 42.667 32"
                          >
                            <path
                              id="Icon_awesome-image"
                              data-name="Icon awesome-image"
                              d="M38.667,36.5H4a4,4,0,0,1-4-4V8.5a4,4,0,0,1,4-4H38.667a4,4,0,0,1,4,4v24A4,4,0,0,1,38.667,36.5ZM9.333,9.167A4.667,4.667,0,1,0,14,13.833,4.667,4.667,0,0,0,9.333,9.167Zm-4,22h32V21.833L30.04,14.54a1,1,0,0,0-1.414,0L17.333,25.833l-4.626-4.626a1,1,0,0,0-1.414,0l-5.959,5.96Z"
                              transform="translate(0 -4.5)"
                              fill="#4d5fc2"
                            />
                          </svg>

                          <div className="text-center f16 color_black">
                            Upload banner
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center overflow-hidden w-100  m_b_20 max_herigth">
                      <img
                        className="img-fluid radius"
                        src={banner == null || banner == "" ? "" : banner}
                        alt=""
                      />
                    </div>
                  )}
                </div>

                <div className="col-lg-6 m_b_30_mob">
                  <div className="m_b_30">
                    <h4 className="f20 color_black f_bold">Pictures</h4>
                    <p className="color_grey f16">
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </div>

                  {videoUpload == "" || videoUpload == null ? (
                    <div className="grey_border_area">
                      <div className="position-relative banner_upload_area justify-content-center d-flex align-items-center">
                        <input
                          id="videoUpload"
                          onChange={this.fileUploader}
                          name="videoUpload"
                          type="file"
                          className="file_upl"
                        />

                        <div className="upload_banner_up text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="49.096"
                            height="32"
                            viewBox="0 0 49.096 32"
                          >
                            <path
                              id="Icon_ionic-md-videocam"
                              data-name="Icon ionic-md-videocam"
                              d="M40.825,19.734V10.4A2.7,2.7,0,0,0,38.1,7.734H4.979A2.7,2.7,0,0,0,2.25,10.4V37.06a2.711,2.711,0,0,0,2.729,2.674H38.1a2.709,2.709,0,0,0,2.729-2.663V27.734L51.346,38.4V9.071Z"
                              transform="translate(-2.25 -7.734)"
                              fill="#4d5fc2"
                            />
                          </svg>

                          <div className="text-center f16 color_black">
                            Drop videos to upload, or
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <video className="w-100" controls>
                        <source
                          src={
                            videoUpload == null || videoUpload == ""
                              ? ""
                              : videoUpload
                          }
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  )}
                </div>

                <div className="col-lg-6 m_t_30">
                  <div className="m_b_30">
                    <h4 className="f20 color_black f_bold">Voice Track</h4>
                    <p className="color_grey f16">
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </div>

                  {track == "" || track == null ? (
                    <div className="grey_border_area voicePr m_b_30">
                      <div className="position-relative banner_upload_area justify-content-center d-flex align-items-center">
                        <input
                          id="track"
                          onChange={this.fileUploader}
                          name="track"
                          type="file"
                          className="file_upl"
                        />

                        <div className="upload_banner_up text-center d-flex">
                          <div className="text-center f16 color_black d-flex align-items-center m_r_20">
                            Drop files to upload, or
                          </div>
                          <div>
                            <button className="btn_theme ">Browse</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="m_b_30">
                      <audio className="w-100" controls>
                        <source
                          src={track == null || track == "" ? "" : track}
                          type="audio/mpeg"
                        />
                      </audio>
                    </div>
                  )}
                </div>

                <div className="col-lg-12">
                  <button
                    className="btn_theme "
                    onClick={() => {
                      this.toggleModal("notice");
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

       
        </section>

        <CommonNotifyModal
          open={this.state.notice ? true : false}
          toggle={() => this.toggleModal("notice")}
          className={"modal-md"}
        >
          <div className="modal_wrapper">
            <div className="">
              <h3 className="f28 color_black f600">Notice</h3>

              <div className="m_b_30">
                <p className="f16 color_grey m_b_30">
                  To make a report online regarding an incident, you must first
                  have read and understood the following: False Reporting
                  Statement
                </p>

                <p className="f16 color_grey">
                  False reporting is a crime. <a href="#">RCW 9A.84.040.</a> By
                  submitting this report, you attest that the information is
                  true and correct to your knowledge. "A person is guilty of
                  false reporting if, with knowledge that the information
                  reported, conveyed or circulated is false, he initiates or
                  circulates a false report or warning of an alleged occurrence
                  or impending occurrence of a fire, explosion, crime,
                  catastrophe, or emergency knowing that such false report is
                  likely to cause evacuation of a building, place of assembly,
                  or transportation facility, or to cause public inconvenience
                  or alarm. False reporting is a gross misdemeanor."
                </p>
              </div>

              <div className="d-flex align-items-center flex-wrap justify-content-end">
                <div className="m_r_20">
                  <p className="f16 color_grey">Must Verify to send Report</p>
                </div>
                <div>
                  <button
                    class="btn_theme btn_light_green"
                    onClick={() => {
                      this.toggleModal("notice");
                      this.toggleModal("success");
                    }}
                  >
                    I understand
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CommonNotifyModal>

        <CommonNotifyModal
          open={this.state.success ? true : false}
          toggle={() => this.toggleModal("success")}
          className={"modal-md"}
        >
          <div className="modal_wrapper">
            <div className="text-center">
              <div className="m_b_20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                >
                  <g
                    id="Group_390"
                    data-name="Group 390"
                    transform="translate(-896 -214)"
                  >
                    <circle
                      id="Ellipse_71"
                      data-name="Ellipse 71"
                      cx="40"
                      cy="40"
                      r="40"
                      transform="translate(896 214)"
                      fill="#40c390"
                    />
                    <path
                      id="Icon_feather-check"
                      data-name="Icon feather-check"
                      d="M29.666,9,13.4,25.271,6,17.875"
                      transform="translate(918.438 236.563)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                    />
                  </g>
                </svg>
              </div>

              <h3 className="f28 color_black f600">
                Report sent <br />
                successfully
              </h3>

              <div className="m_b_30">
                <p className="f16 color_grey m_b_30">
                  Your profile password has been updated
                </p>
              </div>

              <div className="d-flex align-items-center flex-wrap justify-content-center">
                <div>
                  <button
                    class="btn_theme"
                    onClick={() => {
                      this.toggleModal("success");
                    }}
                  >
                    View Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CommonNotifyModal>
      </>
    );
  }
}

Reportfile.propTypes = {};

export default Reportfile;
