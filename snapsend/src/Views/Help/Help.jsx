import React, { Component } from "react";
import { useState } from "react";
import Images from "Constant/Images/Images";
import CmnBanner from "Components/CmnBanner/CmnBanner";
import VideoModal from "Components/CmnVideoModal/CmnVideoModal";
import ModalVideo from "react-modal-video";
//import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import "./Help.scss";


class Help extends Component {
  constructor(props) {
    super(props);

    this.state = {
      VideoData: [
        {
          thumbnailUrl: `${Images.video_thumb.default}`,
          videoID: "D0UnqGm_miA",
          title:
            "The generated Lorem Ipsum is therefore always free from repetition",
        },
        {
          thumbnailUrl: `${Images.video_thumb.default}`,
          videoID: "L61p2uyiMSo",
          title:
            "The generated Lorem Ipsum is therefore always free from repetition",
        },
        {
          thumbnailUrl: `${Images.video_thumb.default}`,
          videoID: "D0UnqGm_miA",
          title:
            "The generated Lorem Ipsum is therefore always free from repetition",
        },
        {
          thumbnailUrl: `${Images.video_thumb.default}`,
          videoID: "L61p2uyiMSo",
          title:
            "The generated Lorem Ipsum is therefore always free from repetition",
        },
        {
          thumbnailUrl: `${Images.video_thumb.default}`,
          videoID: "D0UnqGm_miA",
          title:
            "The generated Lorem Ipsum is therefore always free from repetition",
        },
        {
          thumbnailUrl: `${Images.video_thumb.default}`,
          videoID: "L61p2uyiMSo",
          title:
            "The generated Lorem Ipsum is therefore always free from repetition",
        },
        {
          thumbnailUrl: `${Images.video_thumb.default}`,
          videoID: "D0UnqGm_miA",
          title:
            "The generated Lorem Ipsum is therefore always free from repetition",
        },
        {
          thumbnailUrl: `${Images.video_thumb.default}`,
          videoID: "L61p2uyiMSo",
          title:
            "The generated Lorem Ipsum is therefore always free from repetition",
        },
        {
          thumbnailUrl: `${Images.video_thumb.default}`,
          videoID: "D0UnqGm_miA",
          title:
            "The generated Lorem Ipsum is therefore always free from repetition",
        },
        {
          thumbnailUrl: `${Images.video_thumb.default}`,
          videoID: "L61p2uyiMSo",
          title:
            "The generated Lorem Ipsum is therefore always free from repetition",
        },
        {
          thumbnailUrl: `${Images.video_thumb.default}`,
          videoID: "D0UnqGm_miA",
          title:
            "The generated Lorem Ipsum is therefore always free from repetition",
        },
        {
          thumbnailUrl: `${Images.video_thumb.default}`,
          videoID: "L61p2uyiMSo",
          title:
            "The generated Lorem Ipsum is therefore always free from repetition",
        },
      ],
    };
  }
  render() {

    const {VideoData}=this.state;
    return (
      <>
        <div className="privacy_page footer_m_none">
          <CmnBanner
            title="Hello! How can we help"
            search={true}
            imageURL={Images.help.default}
          />

          <div className="wrapperPrivacy p_t_80 p_b_80">
            <div className="container">
              <div className="row">
                {VideoData.map((obj, index) => {
                  return (
                    <div className="col-lg-6 col-xl-4 col-md-6 col-sm-6">
                      <div className="mainWrapperVideo m_b_30">
                      <div className="wrapperVideo m_b_15">
                        <div className="position-relative d-flex align-items-center flex-wrap">
                          <img
                            className="w-100 radius"
                            src={obj.thumbnailUrl}
                            alt=""
                          />
                          <div className="firePlay">
                            <button>
                              <VideoModal
                              videoID={obj.videoID}
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      <p className="f18 color_black">
                      {obj.title}
                      </p>
                      </div>
                    
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Help;
