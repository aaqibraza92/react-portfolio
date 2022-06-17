import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Images } from 'Constant';
import Slider from "react-slick";
import Select from 'react-select';

import CmnButton from 'Components/CmnButton';
import Sidebar from 'Components/Sidebar';
import CmnInput from 'Components/CmnInput';
import { CommonNotifyModal } from 'Modals';

import "./Setting.scss"
import react from 'react';




class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: false,
            newpassword: false,
            confirmPass: false,

        }
    }

    componentDidMount = () => {
        console.log(this.props.location, 'setup-props')
    }



    handleChange = (selectedOption, stateKey) => {
        this.setState({ [stateKey]: selectedOption });
        console.log(stateKey);
    };

    fileUploader = (e) => {
        this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
        //console.log(URL.createObjectURL(e.target.files[0]));
    };





    register = (val) => {
        //console.log(val)
        this.setState({ regVal: val })
    }
    toggleTabs = (value) => {
        // console.log(value);
        this.setState({ tabValue: value })
    }
    toggleModal = (modalName) => {
        this.setState({ [modalName]: !this.state[modalName] })
    }


    togglePassword = (value) => {
        this.setState({ [value]: !this.state[value] });
    }
    inputChange = (e) => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    login = () => {
        this.props.history.push({ pathname: '/profile' })
    }

    render() {

        const { password, confirmPass, tabValue, logo, banner, newpassword } = this.state;

        return (

            <React.Fragment>


                <section className="row bg_half_white">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>

                    <div className="col-md-9">
                        <div className="wrapperbody p_t_30 p_l_10 p_r_30">


                            <h3 className="f28 color_black f_bold">
                                Settings
                            </h3>

                            <div className="bg_white shadow radius p_t_30 p_l_30 p_r_30 p_b_30 m_b_30">
                                <h3 class="color_black f20 f_bold m_b_20">Department information</h3>
                                <p className="color_para m_b_30">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </p>

                                <button className="btn_theme btn_light_grey d-flex align-items-center">
                                    <span className="m_r_10">
                                        Go to update department info
                                    </span>  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 5.569 9.839">
                                        <path id="Path_473" data-name="Path 473" d="M15.5,18l-4,4-4-4" transform="translate(-17.081 16.419) rotate(-90)" fill="none" stroke="#538234" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" />
                                    </svg>

                                </button>
                            </div>

                            <div className="bg_white shadow radius p_t_30 p_l_30 p_r_30 p_b_30 m_b_30">
                                <h3 class="color_black f20 f_bold m_b_20">Change Password</h3>
                                <p className="color_para">
                                    Choose a strong password and don't reuse it for other accounts. <Link to="" className="color_green">Learn more</Link>
                                </p>

                                <p className="color_para m_b_30">
                                    Changing your password will sing you out of all your devices, including your phone. You will need to enter your new password on all your devices.
                                </p>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form_group password position-relative">
                                            <label htmlFor="" className="f16 color_black m_b_10">
                                                Current Password
                                            </label>
                                            <input type={`${password ? 'text' : 'password'}`} id='password' placeholder="Enter your current password" />
                                            <button className='btn_blank' onClick={() => this.togglePassword('password')}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="13.136" viewBox="0 0 17.5 13.136">
                                                    <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(0.75 0.75)">
                                                        <path id="Path_378" data-name="Path 378" d="M1.5,11.818S4.409,6,9.5,6s8,5.818,8,5.818-2.909,5.818-8,5.818S1.5,11.818,1.5,11.818Z" transform="translate(-1.5 -6)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                        <path id="Path_379" data-name="Path 379" d="M17.864,15.682A2.182,2.182,0,1,1,15.682,13.5,2.182,2.182,0,0,1,17.864,15.682Z" transform="translate(-7.682 -9.864)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                    </g>
                                                </svg>
                                            </button>

                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="" className="f20 color_black m_b_10">
                                            Set New Password
                                        </label>

                                        <div className="row align-items-end">
                                            <div className="col-lg-6">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-6">
                                                        <div className="form_group password position-relative m_b_0 m_b_10_mob m_b_10_tab">


                                                            <label htmlFor="" className="f16 color_black m_b_10">
                                                                New password
                                                            </label>
                                                            <input type={`${newpassword ? 'text' : 'password'}`} id='newpassword' placeholder="New password" />
                                                            <button className='btn_blank' onClick={() => this.togglePassword('newpassword')}>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="13.136" viewBox="0 0 17.5 13.136">
                                                                    <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(0.75 0.75)">
                                                                        <path id="Path_378" data-name="Path 378" d="M1.5,11.818S4.409,6,9.5,6s8,5.818,8,5.818-2.909,5.818-8,5.818S1.5,11.818,1.5,11.818Z" transform="translate(-1.5 -6)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                        <path id="Path_379" data-name="Path 379" d="M17.864,15.682A2.182,2.182,0,1,1,15.682,13.5,2.182,2.182,0,0,1,17.864,15.682Z" transform="translate(-7.682 -9.864)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                    </g>
                                                                </svg>
                                                            </button>

                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="form_group password position-relative m_b_0 m_b_10_mob m_b_10_tab">


                                                            <label htmlFor="" className="f16 color_black m_b_10">
                                                                Confirm password
                                                            </label>
                                                            <input type={`${confirmPass ? 'text' : 'password'}`} id='confirmPass' placeholder="Confirm password" />
                                                            <button className='btn_blank' onClick={() => this.togglePassword('confirmPass')}>

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="13.136" viewBox="0 0 17.5 13.136">
                                                                    <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(0.75 0.75)">
                                                                        <path id="Path_378" data-name="Path 378" d="M1.5,11.818S4.409,6,9.5,6s8,5.818,8,5.818-2.909,5.818-8,5.818S1.5,11.818,1.5,11.818Z" transform="translate(-1.5 -6)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                        <path id="Path_379" data-name="Path 379" d="M17.864,15.682A2.182,2.182,0,1,1,15.682,13.5,2.182,2.182,0,0,1,17.864,15.682Z" transform="translate(-7.682 -9.864)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                    </g>
                                                                </svg>
                                                            </button>

                                                        </div>
                                                    </div>

                                                </div>





                                            </div>

                                            <div className="col-lg-6">
                                                <button className="btn_theme btn_green">
                                                    Change Password
                                                </button>
                                            </div>




                                        </div>
                                    </div>





                                </div>
                            </div>

                            <div className="bg_white shadow radius p_t_30 p_l_30 p_r_30 p_b_30 m_b_30">
                                <h3 class="color_black f20 f_bold m_b_20">Membership</h3>
                                <p className="color_para m_b_30">
                                    Choose a strong password and don't reuse it for other accounts. <Link to="" className="color_green">Learn more</Link>
                                </p>

                                <div className="row">
                                    <div className="col-lg-12 m_b_10_mob m_b_10_tab">
                                        <div className="bg_white shadow radius p_t_30 p_l_30 p_r_30 p_b_30 min_194" style={{ paddingTop: 50 + 'px' }}>
                                            <div className="row">
                                                <div className="col-md-7 d-flex flex-column justify-content-between">

                                                    <div className="d-flex planss align-items-center m_b_10">
                                                        <div className="bg_black color_white m_r_10">
                                                            Professional
                                                        </div>
                                                        <div className="color_black">
                                                            Plan
                                                        </div>
                                                    </div>

                                                    <div className="prg">
                                                        <p className="f18 color_black m_b_10">
                                                            12 of 40 User
                                                        </p>
                                                        <div class="progress">

                                                            <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: 20 + "%" }}>
                                                                <span class="sr-only">70% Complete</span>
                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="d-flex justify-content-center plannss" style={{ marginBottom: 53 + 'px' }}>
                                                        <sup className="f24 m_r_10">
                                                            $
                                                        </sup>
                                                        <div className='f60 color_black f700 m_r_10' style={{ lineHeight: 6 + 'px' }}>
                                                            89
                                                        </div>
                                                        <sup className="color_grey f24">
                                                            /year
                                                        </sup>

                                                    </div>

                                                    <div className="text-center justify-content-center d-flex">

                                                        <button className="btn_theme d-flex align-items-center">

                                                            <span className="m_r_10">
                                                                Upgrade Plan
                                                            </span>

                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                                <path id="Icon_awesome-arrow-circle-right" data-name="Icon awesome-arrow-circle-right" d="M10.563.563a10,10,0,1,1-10,10A10,10,0,0,1,10.563.563ZM9.4,6.353l3.044,2.919H5.079a.965.965,0,0,0-.968.968v.645a.965.965,0,0,0,.968.968h7.363L9.4,14.772a.969.969,0,0,0-.016,1.383l.444.44a.964.964,0,0,0,1.367,0l5.351-5.347a.964.964,0,0,0,0-1.367L11.192,4.526a.964.964,0,0,0-1.367,0l-.444.44A.974.974,0,0,0,9.4,6.353Z" transform="translate(-0.563 -0.563)" fill="#fff" />
                                                            </svg>

                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="bg_white shadow radius p_t_30 p_l_30 p_r_30 p_b_30 min_194">
                                            <p className="f16 color_grey m_b_10">
                                                Next Payment
                                            </p>
                                            <h4 className="f24 color_black f700 m_b_20">
                                                24 August 2021
                                            </h4>

                                            <div>
                                                <button className="btn_theme btn_transparent btn_light_blue ">
                                                    Manage  Payments
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>










            </React.Fragment>

        )

    }
}

export default Setting;