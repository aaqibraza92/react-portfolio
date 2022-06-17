import React, { Component } from "react";
import Images from "Constant/Images/Images";
import { CommonNotifyModal } from "Modals";
import CmnInput from "Components/CmnInput/CmnInput";

class GangInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add_gang: "",
      previewHierarchy: "",
      ganglists: [
        {
          img: "",
          name: "Andrew Jalks Donald ",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
        {
          img: "",
          name: "Andrew Jalks Donald ",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
        {
          img: "",
          name: "Andrew Jalks Donald ",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
        {
          img: "",
          name: "Andrew Jalks Donald ",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
        {
          img: "",
          name: "Andrew Jalks Donald ",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
        {
          img: "",
          name: "Andrew Jalks Donald ",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
        {
          img: "",
          name: "Andrew Jalks Donald ",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
        {
          img: "",
          name: "Andrew Jalks Donald ",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        },
      ],
    };
  }

  toggleModal = (modalName) => {
    this.setState({ [modalName]: !this.state[modalName] });
  };

  render() {
    const { add_gang, ganglists, previewHierarchy } = this.state;
    return (
      <>
        <div>
          <h3 className="f22 color_black m_b_20">Fill Gang Information</h3>
          <div className="m_b_30">
            <img
              className="img-fluid radius"
              src={Images.thief.default}
              alt=""
            />
          </div>
          <div className="text-center same_w_btn d-flex align-items-center justify-content-center m_b_20">
            <button
              onClick={() => {
                this.toggleModal("add_gang");
              }}
              className="d-flex align-items-center btn_theme btn_transparent_black justify-content-center"
            >
              <svg
                id="Group_53379"
                data-name="Group 53379"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 11 11"
                className="m_r_10"
              >
                <line
                  id="Line_89"
                  data-name="Line 89"
                  y2="11"
                  transform="translate(5.5)"
                  fill="none"
                  stroke="#272833"
                  stroke-width="1.5"
                />
                <line
                  id="Line_90"
                  data-name="Line 90"
                  y2="11"
                  transform="translate(11 5.5) rotate(90)"
                  fill="none"
                  stroke="#272833"
                  stroke-width="1.5"
                />
              </svg>
              <div>Add New Gang Member</div>
            </button>
          </div>

          <div className="text-center same_w_btn d-flex align-items-center justify-content-center ">
            <button
              onClick={() => {
                this.toggleModal('previewHierarchy')
              }}
              className="d-flex align-items-center btn_theme btn_transparent_green justify-content-center"
            >
              <div>Preview Hierarchy</div>
            </button>
          </div>
        </div>

        <CommonNotifyModal
          open={this.state.add_gang ? true : false}
          toggle={() => this.toggleModal("add_gang")}
          className={"modal-lg"}
        >
          <div className="modal_wrapper modal_wrapper_md">
            <div className="">
              <div className="m_b_20">
                <div className="d-flex align-items-center flex-wrap justify-content-between">
                  <h3 className="f28 color_black f600 m_b_0 ">
                    Add Gang Member
                  </h3>
                  <div>
                    <button
                      onClick={() => {
                        this.toggleModal("add_gang");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25.061"
                        height="25.061"
                        viewBox="0 0 25.061 25.061"
                      >
                        <g
                          id="Group_52393"
                          data-name="Group 52393"
                          transform="translate(-1264.97 -164.97)"
                        >
                          <line
                            id="Line_76"
                            data-name="Line 76"
                            x2="24"
                            y2="24"
                            transform="translate(1265.5 165.5)"
                            fill="none"
                            stroke="#272833"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_77"
                            data-name="Line 77"
                            x1="24"
                            y2="24"
                            transform="translate(1265.5 165.5)"
                            fill="none"
                            stroke="#272833"
                            stroke-width="1.5"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="search m_b_30">
                <div className="row align-items-center">
                  <div className="col-md-10">
                    <div className="form_group position-relative m_b_0 m_b_10_mob">
                      <CmnInput
                        type="search"
                        className="srch"
                        placeholder="Search suspect name"
                      />

                      <svg
                        className="input_position left"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 18.173 18.173"
                      >
                        <g
                          id="Icon_feather-search"
                          data-name="Icon feather-search"
                          transform="translate(0.9 0.9)"
                        >
                          <path
                            id="Path_485"
                            data-name="Path 485"
                            d="M18.722,11.611A7.111,7.111,0,1,1,11.611,4.5,7.111,7.111,0,0,1,18.722,11.611Z"
                            transform="translate(-4.5 -4.5)"
                            fill="none"
                            stroke="#929398"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.8"
                          />
                          <path
                            id="Path_486"
                            data-name="Path 486"
                            d="M28.842,28.842l-3.867-3.867"
                            transform="translate(-12.842 -12.842)"
                            fill="none"
                            stroke="#929398"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.8"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <button className="btn_theme btn_green">Search</button>
                  </div>
                </div>
              </div>

              <ul className="listGang no_ul m_b_30">
                {ganglists.map((objj, index) => {
                  return (
                    <li className="m_b_10 p_b_10 border_bottom">
                      <div className="row align-items-center">
                        <div className="col-md-10 m_b_10_mob">
                          <div className="d-flex align-items-center align_items_top_mob">
                            <div className="m_r_10">
                              <img
                                className="radius"
                                src={Images.gangmember.default}
                                alt=""
                              />
                            </div>
                            <div>
                              <h3 className="f_bold f18 color_black">
                                {objj.name}
                              </h3>
                              <p className="f16 color_grey">{objj.details}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="position-relative">
                            <label class="checkbox_btn">
                              <input type="checkbox" name="options" />
                              <div>Select</div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="d-flex align-items-center flex-wrap justify-content-between">
                <div>
                  <button class="d-flex align-items-center btn_theme btn_transparent_black justify-content-center btn_sm_mob">
                    <svg
                      id="Group_53379"
                      data-name="Group 53379"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 11 11"
                      class="m_r_10"
                    >
                      <line
                        id="Line_89"
                        data-name="Line 89"
                        y2="11"
                        transform="translate(5.5)"
                        fill="none"
                        stroke="#272833"
                        stroke-width="1.5"
                      ></line>
                      <line
                        id="Line_90"
                        data-name="Line 90"
                        y2="11"
                        transform="translate(11 5.5) rotate(90)"
                        fill="none"
                        stroke="#272833"
                        stroke-width="1.5"
                      ></line>
                    </svg>
                    <div>Add New Suspect</div>
                  </button>
                </div>

                <div>
                  <button
                    className="btn_theme btn_green"
                    onClick={() => {
                      this.toggleModal("add_gang");
                    }}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CommonNotifyModal>

        <CommonNotifyModal
          open={this.state.previewHierarchy ? true : false}
          toggle={() => this.toggleModal("previewHierarchy")}
          className={"modal-xl"}
        >
          <div className="modal_wrapper modal_wrapper_md">
            <div className="">
              <div className="m_b_20">
                <div className="d-flex align-items-center flex-wrap justify-content-between">
                  <button onClick={()=>{
                    this.toggleModal("previewHierarchy")
                  }} className="btn_theme btn_green d-flex align-items-center flex-wrap justify-content-between">
                    <span className="m_r_10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                      >
                        <path
                          id="Icon_material-mode-edit"
                          data-name="Icon material-mode-edit"
                          d="M4.5,14v2.5H7l7.372-7.372-2.5-2.5ZM16.305,7.191a.664.664,0,0,0,0-.94l-1.56-1.56a.664.664,0,0,0-.94,0l-1.22,1.22,2.5,2.5Z"
                          transform="translate(-4.5 -4.496)"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                    <span>Edit Hierarchy</span>
                  </button>
                  <div>
                    <button
                      onClick={() => {
                        this.toggleModal("previewHierarchy");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25.061"
                        height="25.061"
                        viewBox="0 0 25.061 25.061"
                      >
                        <g
                          id="Group_52393"
                          data-name="Group 52393"
                          transform="translate(-1264.97 -164.97)"
                        >
                          <line
                            id="Line_76"
                            data-name="Line 76"
                            x2="24"
                            y2="24"
                            transform="translate(1265.5 165.5)"
                            fill="none"
                            stroke="#272833"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_77"
                            data-name="Line 77"
                            x1="24"
                            y2="24"
                            transform="translate(1265.5 165.5)"
                            fill="none"
                            stroke="#272833"
                            stroke-width="1.5"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="image_tree">
                    <div className="row justify-content-center text-center">
                      <div className="col-md-12">
                        <div>
                          <img
                            className="radius img-fluid"
                            src={Images.gang1.default}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="m_b_30">
                        <h1>asdas</h1>
                      </div>

                      <div className="row">
                        <div className="col-md-3">
                          <div>
                            <img
                              className="radius img-fluid"
                              src={Images.gang1.default}
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div>
                            <img
                              className="radius img-fluid"
                              src={Images.gang1.default}
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div>
                            <img
                              className="radius img-fluid"
                              src={Images.gang1.default}
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div>
                            <img
                              className="radius img-fluid"
                              src={Images.gang1.default}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
          </div>
        </CommonNotifyModal>
      </>
    );
  }
}

export default GangInfo;
