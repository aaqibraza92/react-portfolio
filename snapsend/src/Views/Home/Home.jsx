import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Images } from 'Constant';
import Slider from "react-slick";

import "./Home.scss"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipSearch: ''
        }
    }

    componentDidMount = () => {

    }

    inputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target);


    }

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (

            <React.Fragment>

                <section className="slider_home overflow_x_h">
                    <Slider {...settings}>
                        <div>
                            <div className="slide_wrapper position-relative d-flex align-items-center">
                                <img src={Images.sl1.default} alt="" />
                                <div className="wrapper_layer">
                                    <h2 className="f55 color_white f_italic f_bold">
                                        Snap Send <br className="d" /> Report Tips for <br className="d" /> safer communities
                                    </h2>
                                    <p className="f20 color_white">
                                        It is a long established fact that a reader will be distracted by <br className="d" /> the readable content of a page when looking at its layout.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div>
                            <div className="slide_wrapper position-relative d-flex align-items-center">
                                <img src={Images.sl1.default} alt="" />
                                <div className="wrapper_layer">
                                    <h2 className="f55 color_white f_italic f_bold">
                                        Snap Send <br className="d" /> Report Tips for <br className="d" /> safer communities
                                    </h2>
                                    <p className="f20 color_white">
                                        It is a long established fact that a reader will be distracted by <br className="d" /> the readable content of a page when looking at its layout.
                                    </p>
                                </div>

                            </div>

                        </div>


                    </Slider>
                </section>
                <section className="text-center position-relative">
                    <div className="moving_element">
                        <div className="src_wrapper flex-wrap">
                            <input type="search"
                                placeholder="Do you want to file a Tip ?"
                                name='tipSearch'
                                value={this.state.tipSearch || ''}
                                onChange={this.inputChange}
                            />
                            <button className="btn_theme">File a Tip</button>
                        </div>
                    </div>

                </section>

                <section className='sections_theme how_it_work p_t_130'>

                    <div className="container">


                        <div className="row gapper">
                            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-5 position-relative m_b_30_mob">
                                <div className="m_b_20">
                                    <h3 className="color_black f_bold f32">
                                        New Public Notice
                                    </h3>
                                </div>
                                <div className="wrapper_element bg_grey radius">
                                    <div className="listing_wrapper">
                                        <article className="d-flex">
                                            <div className="left_sec">
                                                <img className="radius" src={Images.pn1.default} alt="" />
                                            </div>
                                            <div className="right_sec">
                                                <div className="d-flex align-items-center list_data flex_wrap_mob">
                                                    <div className="left_data m_b_20_mob">
                                                        <div className="date_area d-flex align-items-center m_b_10 flex-wrap flex-wrap">
                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12.25 14">
                                                                    <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,12.688A1.313,1.313,0,0,0,1.313,14h9.625a1.313,1.313,0,0,0,1.313-1.312V5.25H0ZM8.75,7.328A.329.329,0,0,1,9.078,7h1.094a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328h1.094a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,5.578,7H6.672A.329.329,0,0,1,7,7.328V8.422a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H6.672A.329.329,0,0,1,7,10.828v1.094a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,2.078,7H3.172a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H3.172a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328ZM10.938,1.75H9.625V.438A.439.439,0,0,0,9.188,0H8.313a.439.439,0,0,0-.437.438V1.75h-3.5V.438A.439.439,0,0,0,3.938,0H3.063a.439.439,0,0,0-.437.438V1.75H1.313A1.313,1.313,0,0,0,0,3.063V4.375H12.25V3.063A1.313,1.313,0,0,0,10.938,1.75Z" fill="#4d5fc2" />
                                                                </svg>
                                                                17 august 2021
                                                            </span>

                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                                    <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M10.375,3.375a7,7,0,1,0,7,7A7,7,0,0,0,10.375,3.375Zm.471,7.606a.473.473,0,0,1-.471.471H7.144a.471.471,0,0,1,0-.942H9.9V6.067a.471.471,0,0,1,.942,0Z" transform="translate(-3.375 -3.375)" fill="#4d5fc2" />
                                                                </svg>
                                                                12:00pm

                                                            </span>

                                                        </div>
                                                        <p className="f16 color_black">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting...
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <Link className="btn_theme btn_jomney">
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </article>
                                    </div>

                                    <div className="listing_wrapper">
                                        <article className="d-flex">
                                            <div className="left_sec">
                                                <img className="radius" src={Images.pn2.default} alt="" />
                                            </div>
                                            <div className="right_sec">
                                                <div className="d-flex align-items-center list_data flex_wrap_mob">
                                                    <div className="left_data m_b_20_mob">
                                                        <div className="date_area d-flex align-items-center m_b_10 flex-wrap">
                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12.25 14">
                                                                    <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,12.688A1.313,1.313,0,0,0,1.313,14h9.625a1.313,1.313,0,0,0,1.313-1.312V5.25H0ZM8.75,7.328A.329.329,0,0,1,9.078,7h1.094a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328h1.094a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,5.578,7H6.672A.329.329,0,0,1,7,7.328V8.422a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H6.672A.329.329,0,0,1,7,10.828v1.094a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,2.078,7H3.172a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H3.172a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328ZM10.938,1.75H9.625V.438A.439.439,0,0,0,9.188,0H8.313a.439.439,0,0,0-.437.438V1.75h-3.5V.438A.439.439,0,0,0,3.938,0H3.063a.439.439,0,0,0-.437.438V1.75H1.313A1.313,1.313,0,0,0,0,3.063V4.375H12.25V3.063A1.313,1.313,0,0,0,10.938,1.75Z" fill="#4d5fc2" />
                                                                </svg>
                                                                17 august 2021
                                                            </span>

                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                                    <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M10.375,3.375a7,7,0,1,0,7,7A7,7,0,0,0,10.375,3.375Zm.471,7.606a.473.473,0,0,1-.471.471H7.144a.471.471,0,0,1,0-.942H9.9V6.067a.471.471,0,0,1,.942,0Z" transform="translate(-3.375 -3.375)" fill="#4d5fc2" />
                                                                </svg>
                                                                12:00pm

                                                            </span>

                                                        </div>
                                                        <p className="f16 color_black">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting...
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <Link className="btn_theme btn_jomney">
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </article>
                                    </div>
                                    <div className="listing_wrapper">
                                        <article className="d-flex">
                                            <div className="left_sec">
                                                <img className="radius" src={Images.pn3.default} alt="" />
                                            </div>
                                            <div className="right_sec">
                                                <div className="d-flex align-items-center list_data flex_wrap_mob">
                                                    <div className="left_data m_b_20_mob">
                                                        <div className="date_area d-flex align-items-center m_b_10 flex-wrap">
                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12.25 14">
                                                                    <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,12.688A1.313,1.313,0,0,0,1.313,14h9.625a1.313,1.313,0,0,0,1.313-1.312V5.25H0ZM8.75,7.328A.329.329,0,0,1,9.078,7h1.094a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328h1.094a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,5.578,7H6.672A.329.329,0,0,1,7,7.328V8.422a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H6.672A.329.329,0,0,1,7,10.828v1.094a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,2.078,7H3.172a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H3.172a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328ZM10.938,1.75H9.625V.438A.439.439,0,0,0,9.188,0H8.313a.439.439,0,0,0-.437.438V1.75h-3.5V.438A.439.439,0,0,0,3.938,0H3.063a.439.439,0,0,0-.437.438V1.75H1.313A1.313,1.313,0,0,0,0,3.063V4.375H12.25V3.063A1.313,1.313,0,0,0,10.938,1.75Z" fill="#4d5fc2" />
                                                                </svg>
                                                                17 august 2021
                                                            </span>

                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                                    <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M10.375,3.375a7,7,0,1,0,7,7A7,7,0,0,0,10.375,3.375Zm.471,7.606a.473.473,0,0,1-.471.471H7.144a.471.471,0,0,1,0-.942H9.9V6.067a.471.471,0,0,1,.942,0Z" transform="translate(-3.375 -3.375)" fill="#4d5fc2" />
                                                                </svg>
                                                                12:00pm

                                                            </span>

                                                        </div>
                                                        <p className="f16 color_black">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting...
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <Link className="btn_theme btn_jomney">
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </article>
                                    </div>
                                    <div className="listing_wrapper">
                                        <article className="d-flex">
                                            <div className="left_sec">
                                                <img className="radius" src={Images.pn4.default} alt="" />
                                            </div>
                                            <div className="right_sec">
                                                <div className="d-flex align-items-center list_data flex_wrap_mob">
                                                    <div className="left_data m_b_20_mob">
                                                        <div className="date_area d-flex align-items-center m_b_10 flex-wrap">
                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12.25 14">
                                                                    <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,12.688A1.313,1.313,0,0,0,1.313,14h9.625a1.313,1.313,0,0,0,1.313-1.312V5.25H0ZM8.75,7.328A.329.329,0,0,1,9.078,7h1.094a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328h1.094a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,5.578,7H6.672A.329.329,0,0,1,7,7.328V8.422a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H6.672A.329.329,0,0,1,7,10.828v1.094a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,2.078,7H3.172a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H3.172a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328ZM10.938,1.75H9.625V.438A.439.439,0,0,0,9.188,0H8.313a.439.439,0,0,0-.437.438V1.75h-3.5V.438A.439.439,0,0,0,3.938,0H3.063a.439.439,0,0,0-.437.438V1.75H1.313A1.313,1.313,0,0,0,0,3.063V4.375H12.25V3.063A1.313,1.313,0,0,0,10.938,1.75Z" fill="#4d5fc2" />
                                                                </svg>
                                                                17 august 2021
                                                            </span>

                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                                    <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M10.375,3.375a7,7,0,1,0,7,7A7,7,0,0,0,10.375,3.375Zm.471,7.606a.473.473,0,0,1-.471.471H7.144a.471.471,0,0,1,0-.942H9.9V6.067a.471.471,0,0,1,.942,0Z" transform="translate(-3.375 -3.375)" fill="#4d5fc2" />
                                                                </svg>
                                                                12:00pm

                                                            </span>

                                                        </div>
                                                        <p className="f16 color_black">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting...
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <Link className="btn_theme btn_jomney">
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </article>
                                    </div>

                                    <div className="listing_wrapper">
                                        <article className="d-flex">
                                            <div className="left_sec">
                                                <img className="radius" src={Images.pn5.default} alt="" />
                                            </div>
                                            <div className="right_sec">
                                                <div className="d-flex align-items-center list_data flex_wrap_mob">
                                                    <div className="left_data m_b_20_mob">
                                                        <div className="date_area d-flex align-items-center m_b_10 flex-wrap">
                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12.25 14">
                                                                    <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,12.688A1.313,1.313,0,0,0,1.313,14h9.625a1.313,1.313,0,0,0,1.313-1.312V5.25H0ZM8.75,7.328A.329.329,0,0,1,9.078,7h1.094a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328h1.094a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,5.578,7H6.672A.329.329,0,0,1,7,7.328V8.422a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H6.672A.329.329,0,0,1,7,10.828v1.094a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,2.078,7H3.172a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H3.172a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328ZM10.938,1.75H9.625V.438A.439.439,0,0,0,9.188,0H8.313a.439.439,0,0,0-.437.438V1.75h-3.5V.438A.439.439,0,0,0,3.938,0H3.063a.439.439,0,0,0-.437.438V1.75H1.313A1.313,1.313,0,0,0,0,3.063V4.375H12.25V3.063A1.313,1.313,0,0,0,10.938,1.75Z" fill="#4d5fc2" />
                                                                </svg>
                                                                17 august 2021
                                                            </span>

                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                                    <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M10.375,3.375a7,7,0,1,0,7,7A7,7,0,0,0,10.375,3.375Zm.471,7.606a.473.473,0,0,1-.471.471H7.144a.471.471,0,0,1,0-.942H9.9V6.067a.471.471,0,0,1,.942,0Z" transform="translate(-3.375 -3.375)" fill="#4d5fc2" />
                                                                </svg>
                                                                12:00pm

                                                            </span>

                                                        </div>
                                                        <p className="f16 color_black">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting...
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <Link className="btn_theme btn_jomney">
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </article>
                                    </div>



                                </div>
                            </div>

                            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-7">
                                <div className="m_b_20">
                                    <h3 className="color_black f_bold f32">
                                        Amber Alert
                                    </h3>
                                </div>
                                <div className="wrapper_element bg_grey radius">
                                    <div className="listing_wrapper">
                                        <article className="d-flex">
                                            <div className="left_sec">
                                                <img className="radius" src={Images.pn1.default} alt="" />
                                            </div>
                                            <div className="right_sec">
                                                <div className="d-flex align-items-center list_data flex_wrap_mob">
                                                    <div className="left_data m_b_20_mob">
                                                        <div className="date_area d-flex align-items-center m_b_10 flex-wrap">
                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12.25 14">
                                                                    <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,12.688A1.313,1.313,0,0,0,1.313,14h9.625a1.313,1.313,0,0,0,1.313-1.312V5.25H0ZM8.75,7.328A.329.329,0,0,1,9.078,7h1.094a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328h1.094a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,5.578,7H6.672A.329.329,0,0,1,7,7.328V8.422a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H6.672A.329.329,0,0,1,7,10.828v1.094a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,2.078,7H3.172a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H3.172a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328ZM10.938,1.75H9.625V.438A.439.439,0,0,0,9.188,0H8.313a.439.439,0,0,0-.437.438V1.75h-3.5V.438A.439.439,0,0,0,3.938,0H3.063a.439.439,0,0,0-.437.438V1.75H1.313A1.313,1.313,0,0,0,0,3.063V4.375H12.25V3.063A1.313,1.313,0,0,0,10.938,1.75Z" fill="#4d5fc2" />
                                                                </svg>
                                                                17 august 2021
                                                            </span>

                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                                    <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M10.375,3.375a7,7,0,1,0,7,7A7,7,0,0,0,10.375,3.375Zm.471,7.606a.473.473,0,0,1-.471.471H7.144a.471.471,0,0,1,0-.942H9.9V6.067a.471.471,0,0,1,.942,0Z" transform="translate(-3.375 -3.375)" fill="#4d5fc2" />
                                                                </svg>
                                                                12:00pm

                                                            </span>

                                                        </div>
                                                        <p className="f16 color_black">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting...
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <Link className="btn_theme btn_jomney">
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </article>
                                    </div>

                                    <div className="listing_wrapper">
                                        <article className="d-flex">
                                            <div className="left_sec">
                                                <img className="radius" src={Images.pn2.default} alt="" />
                                            </div>
                                            <div className="right_sec">
                                                <div className="d-flex align-items-center list_data flex_wrap_mob">
                                                    <div className="left_data m_b_20_mob">
                                                        <div className="date_area d-flex align-items-center m_b_10 flex-wrap">
                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12.25 14">
                                                                    <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,12.688A1.313,1.313,0,0,0,1.313,14h9.625a1.313,1.313,0,0,0,1.313-1.312V5.25H0ZM8.75,7.328A.329.329,0,0,1,9.078,7h1.094a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328h1.094a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,5.578,7H6.672A.329.329,0,0,1,7,7.328V8.422a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H6.672A.329.329,0,0,1,7,10.828v1.094a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,2.078,7H3.172a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H3.172a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328ZM10.938,1.75H9.625V.438A.439.439,0,0,0,9.188,0H8.313a.439.439,0,0,0-.437.438V1.75h-3.5V.438A.439.439,0,0,0,3.938,0H3.063a.439.439,0,0,0-.437.438V1.75H1.313A1.313,1.313,0,0,0,0,3.063V4.375H12.25V3.063A1.313,1.313,0,0,0,10.938,1.75Z" fill="#4d5fc2" />
                                                                </svg>
                                                                17 august 2021
                                                            </span>

                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                                    <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M10.375,3.375a7,7,0,1,0,7,7A7,7,0,0,0,10.375,3.375Zm.471,7.606a.473.473,0,0,1-.471.471H7.144a.471.471,0,0,1,0-.942H9.9V6.067a.471.471,0,0,1,.942,0Z" transform="translate(-3.375 -3.375)" fill="#4d5fc2" />
                                                                </svg>
                                                                12:00pm

                                                            </span>

                                                        </div>
                                                        <p className="f16 color_black">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting...
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <Link className="btn_theme btn_jomney">
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </article>
                                    </div>
                                    <div className="listing_wrapper">
                                        <article className="d-flex">
                                            <div className="left_sec">
                                                <img className="radius" src={Images.pn3.default} alt="" />
                                            </div>
                                            <div className="right_sec">
                                                <div className="d-flex align-items-center list_data flex_wrap_mob">
                                                    <div className="left_data m_b_20_mob">
                                                        <div className="date_area d-flex align-items-center m_b_10 flex-wrap">
                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12.25 14">
                                                                    <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,12.688A1.313,1.313,0,0,0,1.313,14h9.625a1.313,1.313,0,0,0,1.313-1.312V5.25H0ZM8.75,7.328A.329.329,0,0,1,9.078,7h1.094a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328h1.094a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,5.578,7H6.672A.329.329,0,0,1,7,7.328V8.422a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H6.672A.329.329,0,0,1,7,10.828v1.094a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,2.078,7H3.172a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H3.172a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328ZM10.938,1.75H9.625V.438A.439.439,0,0,0,9.188,0H8.313a.439.439,0,0,0-.437.438V1.75h-3.5V.438A.439.439,0,0,0,3.938,0H3.063a.439.439,0,0,0-.437.438V1.75H1.313A1.313,1.313,0,0,0,0,3.063V4.375H12.25V3.063A1.313,1.313,0,0,0,10.938,1.75Z" fill="#4d5fc2" />
                                                                </svg>
                                                                17 august 2021
                                                            </span>

                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                                    <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M10.375,3.375a7,7,0,1,0,7,7A7,7,0,0,0,10.375,3.375Zm.471,7.606a.473.473,0,0,1-.471.471H7.144a.471.471,0,0,1,0-.942H9.9V6.067a.471.471,0,0,1,.942,0Z" transform="translate(-3.375 -3.375)" fill="#4d5fc2" />
                                                                </svg>
                                                                12:00pm

                                                            </span>

                                                        </div>
                                                        <p className="f16 color_black">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting...
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <Link className="btn_theme btn_jomney">
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </article>
                                    </div>
                                    <div className="listing_wrapper">
                                        <article className="d-flex">
                                            <div className="left_sec">
                                                <img className="radius" src={Images.pn4.default} alt="" />
                                            </div>
                                            <div className="right_sec">
                                                <div className="d-flex align-items-center list_data flex_wrap_mob">
                                                    <div className="left_data m_b_20_mob">
                                                        <div className="date_area d-flex align-items-center m_b_10 flex-wrap">
                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12.25 14">
                                                                    <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,12.688A1.313,1.313,0,0,0,1.313,14h9.625a1.313,1.313,0,0,0,1.313-1.312V5.25H0ZM8.75,7.328A.329.329,0,0,1,9.078,7h1.094a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328h1.094a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,5.578,7H6.672A.329.329,0,0,1,7,7.328V8.422a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H6.672A.329.329,0,0,1,7,10.828v1.094a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,2.078,7H3.172a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H3.172a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328ZM10.938,1.75H9.625V.438A.439.439,0,0,0,9.188,0H8.313a.439.439,0,0,0-.437.438V1.75h-3.5V.438A.439.439,0,0,0,3.938,0H3.063a.439.439,0,0,0-.437.438V1.75H1.313A1.313,1.313,0,0,0,0,3.063V4.375H12.25V3.063A1.313,1.313,0,0,0,10.938,1.75Z" fill="#4d5fc2" />
                                                                </svg>
                                                                17 august 2021
                                                            </span>

                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                                    <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M10.375,3.375a7,7,0,1,0,7,7A7,7,0,0,0,10.375,3.375Zm.471,7.606a.473.473,0,0,1-.471.471H7.144a.471.471,0,0,1,0-.942H9.9V6.067a.471.471,0,0,1,.942,0Z" transform="translate(-3.375 -3.375)" fill="#4d5fc2" />
                                                                </svg>
                                                                12:00pm

                                                            </span>

                                                        </div>
                                                        <p className="f16 color_black">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting...
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <Link className="btn_theme btn_jomney">
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </article>
                                    </div>

                                    <div className="listing_wrapper">
                                        <article className="d-flex">
                                            <div className="left_sec">
                                                <img className="radius" src={Images.pn5.default} alt="" />
                                            </div>
                                            <div className="right_sec">
                                                <div className="d-flex align-items-center list_data flex_wrap_mob">
                                                    <div className="left_data m_b_20_mob">
                                                        <div className="date_area d-flex align-items-center m_b_10 flex-wrap">
                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12.25 14">
                                                                    <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,12.688A1.313,1.313,0,0,0,1.313,14h9.625a1.313,1.313,0,0,0,1.313-1.312V5.25H0ZM8.75,7.328A.329.329,0,0,1,9.078,7h1.094a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328h1.094a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H9.078a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,5.578,7H6.672A.329.329,0,0,1,7,7.328V8.422a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H6.672A.329.329,0,0,1,7,10.828v1.094a.329.329,0,0,1-.328.328H5.578a.329.329,0,0,1-.328-.328Zm-3.5-3.5A.329.329,0,0,1,2.078,7H3.172a.329.329,0,0,1,.328.328V8.422a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328Zm0,3.5a.329.329,0,0,1,.328-.328H3.172a.329.329,0,0,1,.328.328v1.094a.329.329,0,0,1-.328.328H2.078a.329.329,0,0,1-.328-.328ZM10.938,1.75H9.625V.438A.439.439,0,0,0,9.188,0H8.313a.439.439,0,0,0-.437.438V1.75h-3.5V.438A.439.439,0,0,0,3.938,0H3.063a.439.439,0,0,0-.437.438V1.75H1.313A1.313,1.313,0,0,0,0,3.063V4.375H12.25V3.063A1.313,1.313,0,0,0,10.938,1.75Z" fill="#4d5fc2" />
                                                                </svg>
                                                                17 august 2021
                                                            </span>

                                                            <span className="f14 color_grey">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                                    <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M10.375,3.375a7,7,0,1,0,7,7A7,7,0,0,0,10.375,3.375Zm.471,7.606a.473.473,0,0,1-.471.471H7.144a.471.471,0,0,1,0-.942H9.9V6.067a.471.471,0,0,1,.942,0Z" transform="translate(-3.375 -3.375)" fill="#4d5fc2" />
                                                                </svg>
                                                                12:00pm

                                                            </span>

                                                        </div>
                                                        <p className="f16 color_black">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting...
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <Link className="btn_theme btn_jomney">
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </article>
                                    </div>



                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section className='sections_theme how_it_work p_t_80'>

                    <div className="container">
                        <div className="title_wrapper m_b_50">
                            <h3 className="color_black f_bold f32">
                                How Its Works
                            </h3>
                            <p className="color_black f24">
                                Step-by-Step
                            </p>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-md-6 col-sm-6 col-lg-6">
                                <ul className="no_ul counter_ul p_r_30_d">
                                    <li >
                                        <h4 className="f18 f_bold color_black">
                                            Lorem Ipsum
                                        </h4>
                                        <p className="f16 color_grey">
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        </p>

                                    </li>

                                    <li >
                                        <h4 className="f18 f_bold color_black">
                                            Lorem Ipsum
                                        </h4>
                                        <p className="f16 color_grey">
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        </p>

                                    </li>

                                    <li >
                                        <h4 className="f18 f_bold color_black">
                                            Lorem Ipsum
                                        </h4>
                                        <p className="f16 color_grey">
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        </p>

                                    </li>

                                    <li >
                                        <h4 className="f18 f_bold color_black">
                                            Lorem Ipsum
                                        </h4>
                                        <p className="f16 color_grey">
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        </p>

                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6 col-sm-6 col-lg-6">
                                <div>
                                    <img className="radius w-100" src={Images.how_image.default} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </React.Fragment>

        )

    }
}

export default Home;