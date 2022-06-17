import React, { Component } from "react";
import OtpInput from "react-otp-input";
import { Col, Modal, ModalBody, ModalFooter, Row } from "reactstrap";
import "./OTPModal.css";
import $ from "jquery";
import GImage from "../GImage/GImage";
import Img from "../../../assets/Img/Img";

class OTPModal extends Component {
  constructor(props) {
    super(props);
    window.otpmodalnew = this;
    this.state = {
      showmodal: false,
      content: "",
      mobileno: "",
      size: "",
      otpVal: "",
      okcallback: async () => {},
      cancelcallback: () => {},
      resendcallback: async () => {},
    };
  }
  selctortimeout = null;
  counter = 0;
  componentDidMount() {
    this.setState({
      otpVal: "",
    });
    this.counter = 0;
  }
  componentDidUpdate() {
    if (this.counter === 0) {
      this.selctortimeout = setTimeout(() => {
        this.counter += 1;
        clearTimeout(this.selctortimeout);
        $(".otpmodalnew_otpinput div div:first-child input").focus();
      }, 500);
    }
  }

  hide() {
    this.setState({
      showmodal: false,
    });
  }

  show(msg, mobile, okCB, cancelCB, resendCB, size = "xs") {
    let res = this.state.isyes;
    this.setState({
      otpVal: "",
      showmodal: true,
      content: msg,
      mobileno: mobile,
      okcallback: okCB,
      cancelcallback: cancelCB,
      resendcallback: resendCB,
      size: size,
    });
    return res;
  }

  cancelClick() {
    this.state.cancelcallback();
    this.hide();
  }

  okClick() {
    this.state
      .okcallback(this.state.mobileno, this.state.otpVal)
      .then((res) => {
        if (res) {
          $("#otpmodal_msg").html("Verified successfully.");
          const messgae_timeout = setTimeout(() => {
            clearTimeout(messgae_timeout);
            this.hide();
          }, 2000);
        } else {
          $("#otpmodal_msg").html("Invalid OTP, Please reenter valid OTP.");
          const messgae_timeout = setTimeout(() => {
            clearTimeout(messgae_timeout);
            $("#otpmodal_msg").html("");
          }, 3000);
        }
      });
  }

  resendotpClick() {
    this.state.resendcallback(this.state.mobileno).then((res) => {
      if (res) {
        $("#otpmodal_msg").html("OTP has been resent to your mobile number.");
        const messgae_timeout = setTimeout(() => {
          clearTimeout(messgae_timeout);
          $("#otpmodal_msg").html("");
        }, 3000);
      } else {
        $("#otpmodal_msg").html(
          "OTP resend failed. Please contact zaaruu customer care."
        );
        const messgae_timeout = setTimeout(() => {
          clearTimeout(messgae_timeout);
          $("#otpmodal_msg").html("");
        }, 3000);
      }
    });
  }

  static show(
    content,
    mobileno = "",
    verifyCallback = () => {},
    cancelCallback = () => {},
    resendCallback = () => {},
    size = "xs"
  ) {
    return window.otpmodalnew.show(
      content,
      mobileno,
      verifyCallback,
      cancelCallback,
      resendCallback,
      size
    );
  }

  static hide() {
    return window.otpmodalnew.hide();
  }

  render() {
    return (
      <Modal
        size={this.state.size}
        isOpen={this.state.showmodal}
        toggle={this.state.toggleit}
        centered={true}
        className={`modal-dialog ${this.props.className}`}
        backdrop="static"
        keyboard={false}
      >
        <ModalBody className="p-3">
          <div className="d-flex flex-column justify-content-center align-items-center">
           <GImage src={Img.otp.default}/>
            <p style={{ fontSize: "20px" }} className="text-center mt20">
            Verify mobile number
              {this.state.mobileno}
            </p>
            <Row className="justify-content-center">
              <Col lg="8">
              <div className="mb-3 w-100 text-center" style={{color: "#5B5D6B"}}>{this.state.content}</div>
              </Col>
            </Row>
          
            <div className="ps-3 pe-3 otpmodalnew_otpinput">
              <OtpInput
                onChange={(e) => {
                  this.setState({ otpVal: e });
                }}
                value={this.state.otpVal}
                numInputs={4}
                separator={<span className="otpmodalnew_otpseprator"></span>}
              />
            </div>
            <div
              id="otpmodal_msg"
              className="fs-6 colorOrange w-100 text-center mt-1"
            ></div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="d-flex w-100 justify-content-between align-items-center p-2">
            <div>
              <button
                onClick={(e) => this.resendotpClick()}
                className="otpmodalnew_cancelbutton"
              >
                Resend OTP
              </button>
            </div>
            <div className="d-flex">
              {/* <button
                onClick={(e) => this.cancelClick()}
                className="otpmodalnew_cancelbutton"
              >
                Cancel
              </button> */}
              <button
                onClick={(e) => this.okClick()}
                className="otpmodalnew_okbutton"
              >
                Verify
              </button>
            </div>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

export default OTPModal;
