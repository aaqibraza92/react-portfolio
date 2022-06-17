import React, { Component } from "react";
import Images from "Constant/Images/Images";
import CmnBanner from "Components/CmnBanner/CmnBanner";
import "./Membership.scss";

class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="privacy_page">
          <CmnBanner title="Become a Member" imageURL={Images.member.default} />

          <div className="wrapperPrivacy p_t_80 p_b_80">
            <div className="container">
              <div className="text-center m_b_60">
                <h3 className="f40 color_black m_b_20">Choose Your Plan</h3>

                <p className="f16 color_grey ">
                  Select one of our options below for peace of mind on your own
                  time.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-xl-3 col-md-6 m_b_30_mob">
                  <div className="memberwrapper p30 border radius transition">
                    <div className="m_b_30">
                      <h4 className="f20 color_black text-uppercase m_b_0">
                        START UP
                      </h4>
                      <p className="f14 color_grey">For the small teams</p>
                    </div>

                    <div className="m_b_30">
                      <h4 className="f28 f_bold color_black text-uppercase m_b_0">
                        $89
                      </h4>
                      <p className="f14 color_grey">Per agent per month</p>
                    </div>

                    <div className="m_b_30">
                      <button className="w-100 btn_theme btn_dark_black text-uppercase">
                        Register Now
                      </button>
                    </div>

                    <ul className="sphere_ul m_b_0">
                      <li>250 conversations p/m</li>
                      <li>2 voice channels</li>
                      <li>1 GB data storage</li>
                      <li>250 conversations p/m</li>
                      <li>2 voice channels</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-3 col-md-6 m_b_30_mob">
                  <div className="memberwrapper p30 border radius transition">
                    <div className="m_b_30">
                      <h4 className="f20 color_black text-uppercase m_b_0">
                      BRONZE PACK
                      </h4>
                      <p className="f14 color_grey">For the small teams</p>
                    </div>

                    <div className="m_b_30">
                      <h4 className="f28 f_bold color_black text-uppercase m_b_0">
                        $89
                      </h4>
                      <p className="f14 color_grey">Per agent per month</p>
                    </div>

                    <div className="m_b_30">
                      <button className="w-100 btn_theme btn_dark_black text-uppercase">
                        Register Now
                      </button>
                    </div>

                    <ul className="sphere_ul m_b_0">
                      <li>250 conversations p/m</li>
                      <li>2 voice channels</li>
                      <li>1 GB data storage</li>
                      <li>250 conversations p/m</li>
                      <li>2 voice channels</li>
                    </ul>
                  </div>
                </div>


                <div className="col-lg-6 col-xl-3 col-md-6 m_b_30_mob">
                  <div className="memberwrapper p30 border radius transition">
                    <div className="m_b_30">
                      <h4 className="f20 color_black text-uppercase m_b_0">
                      SILVER PACK
                      </h4>
                      <p className="f14 color_grey">For the small teams</p>
                    </div>

                    <div className="m_b_30">
                      <h4 className="f28 f_bold color_black text-uppercase m_b_0">
                        $89
                      </h4>
                      <p className="f14 color_grey">Per agent per month</p>
                    </div>

                    <div className="m_b_30">
                      <button className="w-100 btn_theme btn_dark_black text-uppercase">
                        Register Now
                      </button>
                    </div>

                    <ul className="sphere_ul m_b_0">
                      <li>250 conversations p/m</li>
                      <li>2 voice channels</li>
                      <li>1 GB data storage</li>
                      <li>250 conversations p/m</li>
                      <li>2 voice channels</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-3 col-md-6 m_b_30_mob">
                  <div className="memberwrapper p30 border radius transition">
                    <div className="m_b_30">
                      <h4 className="f20 color_black text-uppercase m_b_0">
                      PREMIUM
                      </h4>
                      <p className="f14 color_grey">For the small teams</p>
                    </div>

                    <div className="m_b_30">
                      <h4 className="f28 f_bold color_black text-uppercase m_b_0">
                        $89
                      </h4>
                      <p className="f14 color_grey">Per agent per month</p>
                    </div>

                    <div className="m_b_30">
                      <button className="w-100 btn_theme btn_dark_black text-uppercase">
                        Register Now
                      </button>
                    </div>

                    <ul className="sphere_ul m_b_0">
                      <li>250 conversations p/m</li>
                      <li>2 voice channels</li>
                      <li>1 GB data storage</li>
                      <li>250 conversations p/m</li>
                      <li>2 voice channels</li>
                    </ul>
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

export default Membership;
