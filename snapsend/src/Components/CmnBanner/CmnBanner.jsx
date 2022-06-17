import React from "react";
import { Form } from "reactstrap";
import Images from "Constant/Images/Images";
import { Link } from "react-router-dom";
import CmnInput from "Components/CmnInput/CmnInput";

const CmnBanner = (props) => {
  return (
    <>
      <section className="topBanner position-relative d-flex align-items-center m_b_30_mob">
        <div className="">
          <img className="w-100" src={props.imageURL} alt="" />
        </div>
        <div className="alignUp text-center">
          <h1 className="f40 color_white f_bold">{props.title}</h1>

          {
            props.search==true &&

            <div className="container m_b_15">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="form_group position-relative m_b_0 m_b_10_mob">
                  <CmnInput
                    type="search"
                    className="srch"
                    placeholder="Search your topics"
                  />

                  <svg
                    className="input_position left"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.173"
                    height="18.173"
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
            </div>
          </div>
          }

         

          <ul className="brd no_ul d-flex flex-wrap justify-content-center">
            <li className="m_r_10">
              <Link className="f16 color_white" to="/">
                Home{" "}
              </Link>{" "}
            </li>
            <li className="m_r_10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 5.569 9.838"
              >
                <path
                  id="Path_375"
                  data-name="Path 375"
                  d="M15.5,18l-4,4-4-4"
                  transform="translate(-17.081 16.419) rotate(-90)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                />
              </svg>
            </li>
            <li>
              <span className="f16 color_white">{props.title}</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CmnBanner;
