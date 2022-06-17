import React, { Component } from "react";
import Images from "Constant/Images/Images";
import { CommonNotifyModal } from "Modals";
import CmnInput from "Components/CmnInput/CmnInput";

class Gangsidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
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
          <div className="m_b_30">
            <img
              className="img-fluid radius w-100"
              src={Images.thief.default}
              alt=""
            />
          </div>
         

          <div className="text-center same_w_btn d-flex align-items-center justify-content-center ">
            <button
              onClick={() => {
                this.toggleModal('previewHierarchy')
              }}
              className="d-flex align-items-center btn_theme btn_transparent_green justify-content-center m_b_30_mob"
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

export default Gangsidebar;
