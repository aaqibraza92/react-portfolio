import React, { useState } from "react";
import * as Styles from "./style.module.css";
import * as GlobalStyle from "../../global.module.css";
// import "../../App.css"
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
import "./style.module.css";
import { Modal, Button, ModalHeader, ModalBody } from "reactstrap";


export default function SubscribeNews(props) {
  const Section01 = () => {
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
      <>
        <div className={`common_foo row ${Styles.subscribecontainer}`}>
          <div className="row">
            <div
              className={`col-12 col-md-6 d-flex justify-content-start align-items-center ${GlobalStyle.f_worksons_r} ${GlobalStyle.fs_5vw_767} ${GlobalStyle.fs_3vw_1200} ${GlobalStyle.fs_3vw_a1200}`}
            >
              <h3 className="f48 color_black">Subscribe to our newsletter</h3>
            </div>
            <div className={`col-12 col-md-6`}>
              <div className=" d-flex justify-content-end flex-wrap">
                <input placeholder="Write your email" />
                <button
                  className={`btn btn-warning ${GlobalStyle.fs_3vw_767} ${GlobalStyle.fs_2vw_1200}`}
                  // onClick={handleOpen}
                  // onClick={function noRefCheck(){}}
                  onClick={() => setOpen(!open)}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Modal size="xs" isOpen={open} toggle={() => setOpen(!open)}>
            <ModalBody>
              <div className="popup">
                <div onClick={()=> setOpen(false)} className="popup-close">X</div>
                <div className="popup-content">
                  <h1 className="popup-first-head">Thanks.</h1>
                  <h1 className="popup-second-head">
                    You've joined our newsletter
                  </h1>
                </div>
                <p className="popup-para">We will keep you posted</p>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </>
    );
  };

  const Section02 = () => {
    return (
      <>
        <div className="subscribecontainer">
          <div className="container">
            <div className="row mb-5">
              <div
                className={`col-12 col-md-6 d-flex justify-content-start align-items-center ${GlobalStyle.f_worksons_r} ${GlobalStyle.fs_5vw_767} ${GlobalStyle.fs_3vw_1200} ${GlobalStyle.fs_3vw_a1200}`}
              >
                <p className="f48 color_black f_worksons_r">
                  Galleries to <br /> be announced soon
                </p>
              </div>
            </div>

            <div class="row m_b_20">
              <div class="col-lg-4">
                <p className="f24 color_black f_worksons_r">
                  Keep track of the latest news, announcements and the world of
                  PBIFAF.
                </p>
              </div>

              <div class="col-lg-4">
                <p className="f24 color_black f_worksons_r">
                  Keep track of the latest news, announcements and the world of
                  PBIFAF.
                </p>
              </div>
            </div>

            <div class="row">
              <div className="col-12 col-md-12">
                <div className="inputWrapper d-flex">
                  <input className="f_worksons_r f18" placeholder="" name="" />
                  <button className="text-uppercase f_worksons_b color_black f20">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return <>{props.showSecondNewsLetter ? <Section02 /> : <Section01 />}</>;
}
