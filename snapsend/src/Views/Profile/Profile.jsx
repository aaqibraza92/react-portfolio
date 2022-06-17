import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Images } from 'Constant';
import Slider from "react-slick";
import Select from 'react-select';

import CmnButton from 'Components/CmnButton';
import CmnInput from 'Components/CmnInput';


import "./Profile.scss"
import react from 'react';


const countryList = [
    { value: '', label: 'Country' },
    { value: 'India', label: 'India' },
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'Sri Lanka', label: 'Sri Lanka' },
    { value: 'USA', label: 'USA' },
];

const stateList = [
    { value: '', label: 'State' },
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { value: 'Andhra Pradsesh', label: 'Andhra Pradsesh' },
];
const cityList = [
    { value: '', label: 'City' },
    { value: 'Indore', label: 'Indore' },
    { value: 'Bhopal', label: 'Bhopal' },
    { value: 'Delhi', label: 'Delhi' },
];

const pickList = [
    { value: '', label: 'City' },
    { value: 'Indore', label: 'Indore' },
    { value: 'Bhopal', label: 'Bhopal' },
    { value: 'Delhi', label: 'Delhi' },
];
const firstChoice = [
    { value: '', label: 'City' },
    { value: 'Indore', label: 'Indore' },
    { value: 'Bhopal', label: 'Bhopal' },
    { value: 'Delhi', label: 'Delhi' },
];
const secondChoice = [
    { value: '', label: 'City' },
    { value: 'Indore', label: 'Indore' },
    { value: 'Bhopal', label: 'Bhopal' },
    { value: 'Delhi', label: 'Delhi' },
];
const thirdChoice = [
    { value: '', label: 'City' },
    { value: 'Indore', label: 'Indore' },
    { value: 'Bhopal', label: 'Bhopal' },
    { value: 'Delhi', label: 'Delhi' },
];
const pickList2 = [
    { value: '', label: 'City' },
    { value: 'Indore', label: 'Indore' },
    { value: 'Bhopal', label: 'Bhopal' },
    { value: 'Delhi', label: 'Delhi' },
];


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: false,
            confirmPass: false,
            tabValue: 'myprofile',
            profileImage: '',
            otherSetting: [
                { title: 'Save reports in my private file after sending', status: false },
                { title: 'E-mail my report tracking number to my email above', status: false },
                { title: 'Text my report tracking number this phone', status: false },
                { title: 'E-mail my updates to my email above', status: false },
                { title: 'Become a member of Flag them with this app', status: false },
                { title: 'Post pictures to flag them and we speak with this app', status: false },
                { title: 'Allow this app to access your phone to send in reports', status: false },
            ],
        }
    }

    componentDidMount = () => {

    }



    handleChange = (selectedOption, stateKey) => {
        this.setState({ [stateKey]: selectedOption });
        console.log(stateKey);
    };

    toggleTabs = (value) => {
        // console.log(value);
        this.setState({ tabValue: value })
    }



    fileUploader = (e) => {
        this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
        // console.log(URL.createObjectURL(e.target.files[0]));
    };

    register = (val) => {
        //console.log(val)
        this.setState({ regVal: val })
    }


    togglePassword = (value) => {
        this.setState({ [value]: !this.state[value] });
    }
    inputChange = (e) => {
        // console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    changeSetting = (obj, key, status) => {
        let arr = [...this.state.otherSetting]

        arr[key].status = status;

        this.setState({ otherSetting: arr })

        // console.log(arr[key].status, "array")
    }

    render() {

        const { password, confirmPass, tabValue, profileImage, firstName, lastName, userName,
            phNumber, email, currentPassword, current_password, new_password, newPassword, confirmPassword, confirm_password, otherSetting, search
        } = this.state;


        return (

            <React.Fragment>



                <section className="p_t_80 p_b_80 bg_light">
                    <div className="container">


                        <div className="row justify-content-center">

                            <div className="col-md-4 col-lg-4 col-sm-12">

                                <div className="memberWrapper radius m_b_30">
                                    <img className="img-fluid w-100" src={Images.pro_bg.default} alt="" />

                                    <div className="profileUpload text-center mx-auto position-relative">
                                        <div className="d-flex justify-content-center align-items-center w_128 mx-auto">
                                            <img className="proImg img-fluid w-100 h-100" src={profileImage == null || profileImage == "" ? Images.file_upl.default : profileImage} alt="" />
                                        </div>


                                        <div className="profilePic">
                                            <input className="d-none" type="file" id="profileImage" name="profileImage" onChange={(e) => this.fileUploader(e)} />
                                            <label htmlFor="profileImage">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                    <g id="Group_52933" data-name="Group 52933" transform="translate(-547 -386)">
                                                        <circle id="Ellipse_94" data-name="Ellipse 94" cx="16" cy="16" r="16" transform="translate(547 386)" fill="#4d5fc2" />
                                                        <path id="Icon_awesome-camera" data-name="Icon awesome-camera" d="M16,5.75v9a1.5,1.5,0,0,1-1.5,1.5H1.5A1.5,1.5,0,0,1,0,14.75v-9a1.5,1.5,0,0,1,1.5-1.5H4.25l.384-1.028a1.5,1.5,0,0,1,1.4-.972H9.959a1.5,1.5,0,0,1,1.4.972L11.75,4.25H14.5A1.5,1.5,0,0,1,16,5.75Zm-4.25,4.5A3.75,3.75,0,1,0,8,14,3.753,3.753,0,0,0,11.75,10.25Zm-1,0A2.75,2.75,0,1,1,8,7.5,2.754,2.754,0,0,1,10.75,10.25Z" transform="translate(555 392.75)" fill="#fff" />
                                                    </g>
                                                </svg>

                                            </label>
                                        </div>
                                    </div>

                                    <h3 class="f30 color_black f_bold  text-center m_b_10">Christopher M Gamez </h3>
                                    <div className="d-flex justify-content-center text-center align-items-center m_b_30">
                                        <svg className="m_r_10" xmlns="http://www.w3.org/2000/svg" width="15.9" height="17.5" viewBox="0 0 15.9 17.5">
                                            <g id="Group_483" data-name="Group 483" transform="translate(-451.25 -466.25)">
                                                <g id="Icon_feather-lock" data-name="Icon feather-lock" transform="translate(447.5 464)">
                                                    <path id="Path_397" data-name="Path 397" d="M6.1,16.5H17.3a1.6,1.6,0,0,1,1.6,1.6v5.6a1.6,1.6,0,0,1-1.6,1.6H6.1a1.6,1.6,0,0,1-1.6-1.6V18.1a1.6,1.6,0,0,1,1.6-1.6Z" transform="translate(0 -6.3)" fill="none" stroke="#52535b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                    <path id="Path_398" data-name="Path 398" d="M10.5,10.2V7a4,4,0,1,1,8,0v3.2" transform="translate(-2.8)" fill="none" stroke="#52535b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                </g>
                                                <line id="Line_16" data-name="Line 16" y2="2" transform="translate(459.5 477.5)" fill="none" stroke="#52535b" stroke-linecap="round" stroke-width="1.5" />
                                            </g>
                                        </svg>
                                        <p class="color_grey f18 text-center m_b_0">
                                            Private Citizen</p>
                                    </div>

                                    <div className="d-flex justify-content-center text-center align-items-center m_b_40">
                                        <button className="btn_transparent btn_transparent_red">
                                            <svg className="m_r_10" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 13.714 12">
                                                <path id="Icon_open-account-logout" data-name="Icon open-account-logout" d="M5.143,0V1.714H12v8.571H5.143V12h8.571V0ZM3.429,3.429,0,6,3.429,8.571V6.857h6.857V5.143H3.429Z" fill="#e1133a" />
                                            </svg>
                                            Logout
                                        </button>
                                    </div>

                                </div>

                                <div>
                                    <p className="color_grey f16 text-center">
                                        The Snap Send report is Owned and operated by Flag
                                        Them LLC. A company dedicated to helping people
                                        and to support Law Enforcement. All Rights Reserved
                                        info@flagthem.com
                                    </p>
                                </div>

                            </div>

                            <div className="col-md-8 col-lg-8 col-sm-12">

                                <div className="tabController d-flex">
                                    <button className={`btn_theme ${tabValue == "myprofile" ? "active" : ""}`} onClick={() => this.toggleTabs('myprofile')}>
                                        My Profile
                                    </button>

                                    <button className={`btn_theme ${tabValue == "editProfile" ? "active" : ""}`} onClick={() => this.toggleTabs('editProfile')}>
                                        Edit Profile
                                    </button>

                                    <button className={`btn_theme ${tabValue == "setUp" ? "active" : ""}`} onClick={() => this.toggleTabs('setUp')}>
                                        Set-Up
                                    </button>

                                    <button className={`btn_theme ${tabValue == "profileSetting" ? "active" : ""}`} onClick={() => this.toggleTabs('profileSetting')}>
                                        Profile Setting
                                    </button>

                                    <button className={`btn_theme ${tabValue == "searchReport" ? "active" : ""}`} onClick={() => this.toggleTabs('searchReport')}>
                                        Search Report
                                    </button>
                                </div>

                                <div className="tabContent">
                                    {
                                        tabValue == "myprofile" &&

                                        <div className="myProfile">
                                            <section className="pro_section position-relative m_b_30">
                                                <button className="edit_page" onClick={() => this.toggleTabs('editProfile')}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                        <g id="Group_509" data-name="Group 509" transform="translate(-1411 -905)">
                                                            <g id="Group_510" data-name="Group 510">
                                                                <rect id="Rectangle_48" data-name="Rectangle 48" width="32" height="32" rx="4" transform="translate(1411 905)" fill="#ebefff" />
                                                                <path id="Icon_material-mode-edit" data-name="Icon material-mode-edit" d="M4.5,14v2.5H7l7.372-7.372-2.5-2.5ZM16.305,7.191a.664.664,0,0,0,0-.94l-1.56-1.56a.664.664,0,0,0-.94,0l-1.22,1.22,2.5,2.5Z" transform="translate(1416.5 910.504)" fill="#4d5fc2" />
                                                            </g>
                                                        </g>
                                                    </svg>

                                                </button>
                                                <h3 class="f22 color_black f_bold m_b_20">Personal Information</h3>

                                                <div className="row">
                                                    <div className="col-md-6 col-lg-6">
                                                        <div className="row">
                                                            <div className="col">
                                                                <label htmlFor="" className="f16 color_black f_bold d-block m_b_8">First name:</label>
                                                                <label htmlFor="" className="f16 color_black f_bold d-block m_b_8">Username:</label>
                                                                <label htmlFor="" className="f16 color_black f_bold d-block m_b_8">Email address:</label>
                                                            </div>
                                                            <div className="col">
                                                                <p className="m_b_0 f16 color_grey m_b_8">
                                                                    Christopher
                                                                </p>
                                                                <p className="m_b_0 f16 color_grey m_b_8">
                                                                    @christopher_gamez
                                                                </p>
                                                                <p className="m_b_0 f16 color_grey m_b_8">
                                                                    fleta.goodw@yahoo.com
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-lg-6">
                                                        <div className="row">
                                                            <div className="col">
                                                                <label htmlFor="" className="f16 color_black f_bold d-block m_b_8">Last name:</label>
                                                                <label htmlFor="" className="f16 color_black f_bold d-block m_b_8">Phone number:</label>
                                                                <label htmlFor="" className="f16 color_black f_bold d-block m_b_8">Location:</label>
                                                            </div>
                                                            <div className="col">
                                                                <p className="m_b_0 f16 color_grey m_b_8">
                                                                    M Gamez
                                                                </p>
                                                                <p className="m_b_0 f16 color_grey m_b_8">
                                                                    9876-543-210
                                                                </p>
                                                                <p className="m_b_0 f16 color_grey m_b_8">
                                                                    Bellingham, Washington State, US
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </section>

                                            <section className="pro_section position-relative m_b_30">
                                                <button className="edit_page" onClick={() => this.toggleTabs('setUp')}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                        <g id="Group_509" data-name="Group 509" transform="translate(-1411 -905)">
                                                            <g id="Group_510" data-name="Group 510">
                                                                <rect id="Rectangle_48" data-name="Rectangle 48" width="32" height="32" rx="4" transform="translate(1411 905)" fill="#ebefff" />
                                                                <path id="Icon_material-mode-edit" data-name="Icon material-mode-edit" d="M4.5,14v2.5H7l7.372-7.372-2.5-2.5ZM16.305,7.191a.664.664,0,0,0,0-.94l-1.56-1.56a.664.664,0,0,0-.94,0l-1.22,1.22,2.5,2.5Z" transform="translate(1416.5 910.504)" fill="#4d5fc2" />
                                                            </g>
                                                        </g>
                                                    </svg>

                                                </button>
                                                <h3 class="f22 color_black f_bold m_b_20">Your top 3 picks from home</h3>

                                                <div className="row">
                                                    <div className="col-md-6 col-lg-6">
                                                        <div className="row">
                                                            <div className="col">
                                                                <label htmlFor="" className="f16 color_black f_bold d-block m_b_8">1st choice:</label>
                                                                <label htmlFor="" className="f16 color_black f_bold d-block m_b_8">2st choice:</label>
                                                                <label htmlFor="" className="f16 color_black f_bold d-block m_b_8">3st choice:</label>
                                                            </div>
                                                            <div className="col">
                                                                <p className="m_b_0 f16 color_grey m_b_8">
                                                                    Central Bureau of Investigation
                                                                </p>
                                                                <p className="m_b_0 f16 color_grey m_b_8">
                                                                    National Investigation Agency
                                                                </p>
                                                                <p className="m_b_0 f16 color_grey m_b_8">
                                                                    Directorate of Revenue Intelligence
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-lg-6">


                                                    </div>
                                                </div>
                                            </section>

                                            <section className="pro_section position-relative m_b_30">
                                                <button className="edit_page" onClick={() => this.toggleTabs('setUp')}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                        <g id="Group_509" data-name="Group 509" transform="translate(-1411 -905)">
                                                            <g id="Group_510" data-name="Group 510">
                                                                <rect id="Rectangle_48" data-name="Rectangle 48" width="32" height="32" rx="4" transform="translate(1411 905)" fill="#ebefff" />
                                                                <path id="Icon_material-mode-edit" data-name="Icon material-mode-edit" d="M4.5,14v2.5H7l7.372-7.372-2.5-2.5ZM16.305,7.191a.664.664,0,0,0,0-.94l-1.56-1.56a.664.664,0,0,0-.94,0l-1.22,1.22,2.5,2.5Z" transform="translate(1416.5 910.504)" fill="#4d5fc2" />
                                                            </g>
                                                        </g>
                                                    </svg>

                                                </button>
                                                <h3 class="f22 color_black f_bold m_b_20">10 Travel destination department</h3>

                                                <div className="d-flex flex-wrap">
                                                    <div className="bgPink f15 color_grey">
                                                        Aberdeen Police Department
                                                    </div>
                                                    <div className="bgPink f15 color_grey">
                                                        Aberdeen Police Department
                                                    </div>
                                                    <div className="bgPink f15 color_grey">
                                                        Aberdeen Police Department
                                                    </div>
                                                    <div className="bgPink f15 color_grey">
                                                        Aberdeen Police Department
                                                    </div>
                                                    <div className="bgPink f15 color_grey">
                                                        Aberdeen Police Department
                                                    </div>
                                                    <div className="bgPink f15 color_grey">
                                                        Aberdeen Police Department
                                                    </div>
                                                    <div className="bgPink f15 color_grey">
                                                        Aberdeen Police Department
                                                    </div>
                                                    <div className="bgPink f15 color_grey">
                                                        Aberdeen Police Department
                                                    </div>
                                                    <div className="bgPink f15 color_grey">
                                                        Aberdeen Police Department
                                                    </div>
                                                    <div className="bgPink f15 color_grey">
                                                        Aberdeen Police Department
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    }

                                    {
                                        tabValue == "editProfile" &&

                                        <div className="editProfile">
                                            <div class="pro_section position-relative p_0">
                                                <div className="border_b">
                                                    <h3 class="f22 color_black f_bold m_b_0 p_t_20 p_b_20 p_l_20 p_r_20">Edit Profile</h3>
                                                </div>

                                                <div className="border_b p_t_20 p_b_20 p_l_20 p_r_20">
                                                    <h3 class="f20 color_black f600 m_b_20 ">Personal information</h3>

                                                    <Row >

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className='form_group'>
                                                                <label htmlFor="firstName" className='f16 f400 color_black mb-2'>FirstName</label>
                                                                <input
                                                                    type="text"
                                                                    name='firstName'
                                                                    id='firstName'
                                                                    value={firstName || ''}
                                                                    onChange={this.inputChange}
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className='form_group'>
                                                                <label htmlFor="lastName" className='f16 f400 color_black mb-2'>LastName</label>
                                                                <input
                                                                    type="text"
                                                                    name='lastName'
                                                                    id='lastName'
                                                                    value={lastName || ''}
                                                                    onChange={this.inputChange}
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className='form_group'>
                                                                <label htmlFor="userName" className='f16 f400 color_black mb-2'>UserName</label>
                                                                <input
                                                                    type="text"
                                                                    name='userName'
                                                                    id='userName'
                                                                    value={userName || ''}
                                                                    onChange={this.inputChange}
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='6' lg='6'>
                                                            <div className='form_group'>
                                                                <label htmlFor="phNumber" className='f16 f400 color_black mb-2'>Phone Number</label>
                                                                <input
                                                                    type="number"
                                                                    name='phNumber'
                                                                    id='phNumber'
                                                                    value={phNumber || ''}
                                                                    onChange={this.inputChange}
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='6' lg='6'>
                                                            <div className='form_group'>
                                                                <label htmlFor="email" className='f16 f400 color_black mb-2'>Email address</label>
                                                                <input
                                                                    type="email"
                                                                    name='email'
                                                                    id='email'
                                                                    value={email || ''}
                                                                    onChange={this.inputChange}
                                                                />
                                                            </div>
                                                        </Col>

                                                    </Row>

                                                </div>

                                                <div className="border_b p_t_20 p_b_20 p_l_20 p_r_20">
                                                    <h3 class="f20 color_black f600 m_b_20 ">Select your location</h3>

                                                    <Row >

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className=''>
                                                                <label htmlFor="" className='f16 f400 color_black mb-2'>Country</label>
                                                                <Select
                                                                    value={this.state.country || ''}
                                                                    onChange={(e) => this.handleChange(e, 'country')}
                                                                    options={countryList}
                                                                    classNamePrefix='custom_select'
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className=''>
                                                                <label htmlFor="" className='f16 f400 color_black mb-2'>State, Province, Territory</label>
                                                                <Select
                                                                    value={this.state.state || ''}
                                                                    onChange={(e) => this.handleChange(e, 'state')}
                                                                    options={stateList}
                                                                    classNamePrefix='custom_select'
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className=''>
                                                                <label htmlFor="" className='f16 f400 color_black mb-2'>City, Town, Village</label>
                                                                <Select
                                                                    value={this.state.city || ''}
                                                                    onChange={(e) => this.handleChange(e, 'city')}
                                                                    options={cityList}
                                                                    classNamePrefix='custom_select'
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12' className='mt-4'>
                                                            <div className='text-end'>
                                                                <CmnButton
                                                                    title='Save Changes'
                                                                />
                                                            </div>
                                                        </Col>

                                                    </Row>

                                                </div>

                                                <div className="border_b p_t_20 p_b_20 p_l_20 p_r_20">
                                                    <h3 class="f22 color_black f700 m_b_0 ">Change Password</h3>
                                                </div>

                                                <div className="p_t_20 p_l_20 p_r_20">
                                                    <h3 class="f20 color_black f600 m_b_20 ">Current password</h3>
                                                    <Row >

                                                        <Col xs='12' md='6' lg='8'>
                                                            <div className="form_group password position-relative">
                                                                <label htmlFor="current_password" className="f16 f400 color_black m_b_10">
                                                                    Current password
                                                                </label>
                                                                <input
                                                                    type={`${currentPassword ? 'text' : 'password'}`}
                                                                    value={current_password || ''}
                                                                    name='current_password'
                                                                    id='current_password'
                                                                    onChange={this.inputChange}
                                                                />
                                                                <button className='btn_blank' onClick={() => this.togglePassword('currentPassword')}>

                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="13.136" viewBox="0 0 17.5 13.136">
                                                                        <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(0.75 0.75)">
                                                                            <path id="Path_378" data-name="Path 378" d="M1.5,11.818S4.409,6,9.5,6s8,5.818,8,5.818-2.909,5.818-8,5.818S1.5,11.818,1.5,11.818Z" transform="translate(-1.5 -6)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                            <path id="Path_379" data-name="Path 379" d="M17.864,15.682A2.182,2.182,0,1,1,15.682,13.5,2.182,2.182,0,0,1,17.864,15.682Z" transform="translate(-7.682 -9.864)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                        </g>
                                                                    </svg>
                                                                </button>

                                                            </div>
                                                        </Col>

                                                    </Row>
                                                </div>

                                                <div className="border_b p_b_20 p_l_20 p_r_20">
                                                    <h3 class="f20 color_black f600 m_b_20 ">Set new password</h3>
                                                    <Row >

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className="form_group password mb-0 position-relative">
                                                                <label htmlFor="new_password" className="f16 f400 color_black m_b_10">
                                                                    New password
                                                                </label>
                                                                <input
                                                                    type={`${newPassword ? 'text' : 'password'}`}
                                                                    value={new_password || ''}
                                                                    name='new_password'
                                                                    id='new_password'
                                                                    onChange={this.inputChange}
                                                                />
                                                                <button className='btn_blank' onClick={() => this.togglePassword('newPassword')}>

                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="13.136" viewBox="0 0 17.5 13.136">
                                                                        <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(0.75 0.75)">
                                                                            <path id="Path_378" data-name="Path 378" d="M1.5,11.818S4.409,6,9.5,6s8,5.818,8,5.818-2.909,5.818-8,5.818S1.5,11.818,1.5,11.818Z" transform="translate(-1.5 -6)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                            <path id="Path_379" data-name="Path 379" d="M17.864,15.682A2.182,2.182,0,1,1,15.682,13.5,2.182,2.182,0,0,1,17.864,15.682Z" transform="translate(-7.682 -9.864)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                        </g>
                                                                    </svg>
                                                                </button>

                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className="form_group password mb-0 position-relative">
                                                                <label htmlFor="confirm_password" className="f16 f400 color_black m_b_10">
                                                                    Confirm New password
                                                                </label>
                                                                <input
                                                                    type={`${confirmPassword ? 'text' : 'password'}`}
                                                                    value={confirm_password || ''}
                                                                    name='confirm_password'
                                                                    id='confirm_password'
                                                                    onChange={this.inputChange}
                                                                />
                                                                <button className='btn_blank' onClick={() => this.togglePassword('confirmPassword')}>

                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="13.136" viewBox="0 0 17.5 13.136">
                                                                        <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(0.75 0.75)">
                                                                            <path id="Path_378" data-name="Path 378" d="M1.5,11.818S4.409,6,9.5,6s8,5.818,8,5.818-2.909,5.818-8,5.818S1.5,11.818,1.5,11.818Z" transform="translate(-1.5 -6)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                            <path id="Path_379" data-name="Path 379" d="M17.864,15.682A2.182,2.182,0,1,1,15.682,13.5,2.182,2.182,0,0,1,17.864,15.682Z" transform="translate(-7.682 -9.864)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                        </g>
                                                                    </svg>
                                                                </button>

                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className='d-flex align-items-end h-100'>
                                                                <CmnButton
                                                                    title='Change Password'
                                                                    className='w-100'
                                                                />
                                                            </div>
                                                        </Col>

                                                    </Row>
                                                </div>

                                            </div>
                                        </div>
                                    }

                                    {
                                        tabValue == "setUp" &&

                                        <div className="setUp">
                                            <div class="pro_section position-relative p_0">
                                                <div className="border_b">
                                                    <h3 class="f22 color_black f_bold m_b_0 p_t_20 p_b_20 p_l_20 p_r_20">Set-Up</h3>
                                                </div>

                                                <div className=" p_t_20 p_l_20 p_r_20">
                                                    <h3 class="f20 color_black f600 m_b_20 ">Your top 3 picks from home</h3>

                                                    <Row >

                                                        <Col xs='12' md='6' lg='6'>
                                                            <div className='mb-3'>
                                                                <label htmlFor="" className='f16 f400 color_black mb-2'>Pick from list</label>
                                                                <Select
                                                                    value={this.state.pickList || ''}
                                                                    onChange={(e) => this.handleChange(e, 'pickList')}
                                                                    options={pickList}
                                                                    isMulti={true}
                                                                    classNamePrefix='custom_select'
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='0' lg='4' className='d-none d-lg-block'></Col>

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className='mb-3'>
                                                                <label htmlFor="" className='f16 f400 color_black mb-2'>First Choice</label>
                                                                <Select
                                                                    value={this.state.firstChoice || ''}
                                                                    onChange={(e) => this.handleChange(e, 'firstChoice')}
                                                                    options={firstChoice}
                                                                    classNamePrefix='custom_select'
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className='mb-3'>
                                                                <label htmlFor="" className='f16 f400 color_black mb-2'>Second Choice</label>
                                                                <Select
                                                                    value={this.state.secondChoice || ''}
                                                                    onChange={(e) => this.handleChange(e, 'secondChoice')}
                                                                    options={secondChoice}
                                                                    classNamePrefix='custom_select'
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className='mb-3'>
                                                                <label htmlFor="" className='f16 f400 color_black mb-2'>Third Choice</label>
                                                                <Select
                                                                    value={this.state.thirdChoice || ''}
                                                                    onChange={(e) => this.handleChange(e, 'thirdChoice')}
                                                                    options={thirdChoice}
                                                                    classNamePrefix='custom_select'
                                                                />
                                                            </div>
                                                        </Col>

                                                    </Row>

                                                </div>

                                                <div className="border_b p_b_20 p_l_20 p_r_20">
                                                    <h3 class="f20 color_black f600 m_b_20 ">Your 10 travel destination</h3>

                                                    <Row >

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className='mb-3'>
                                                                <label htmlFor="" className='f16 f400 color_black mb-2'>Country</label>
                                                                <Select
                                                                    value={this.state.country || ''}
                                                                    onChange={(e) => this.handleChange(e, 'country')}
                                                                    options={countryList}
                                                                    classNamePrefix='custom_select'
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className='mb-3'>
                                                                <label htmlFor="" className='f16 f400 color_black mb-2'>State, Province, Territory</label>
                                                                <Select
                                                                    value={this.state.state || ''}
                                                                    onChange={(e) => this.handleChange(e, 'state')}
                                                                    options={stateList}
                                                                    classNamePrefix='custom_select'
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='6' lg='4'>
                                                            <div className='mb-3'>
                                                                <label htmlFor="" className='f16 f400 color_black mb-2'>City, Town, Village</label>
                                                                <Select
                                                                    value={this.state.city || ''}
                                                                    onChange={(e) => this.handleChange(e, 'city')}
                                                                    options={cityList}
                                                                    classNamePrefix='custom_select'
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12' md='12' lg='12'>
                                                            <div className='mb-3'>
                                                                <label htmlFor="" className='f16 f400 color_black mb-2'>Pick from list</label>
                                                                <Select
                                                                    value={this.state.pickList2 || ''}
                                                                    onChange={(e) => this.handleChange(e, 'pickList2')}
                                                                    options={pickList2}
                                                                    isMulti={true}
                                                                    classNamePrefix='custom_select'
                                                                />
                                                            </div>
                                                        </Col>

                                                        <Col xs='12'>
                                                            <div className='text-end'>
                                                                <CmnButton
                                                                    title='Save Changes'
                                                                />
                                                            </div>
                                                        </Col>

                                                    </Row>

                                                </div>

                                            </div>
                                        </div>
                                    }

                                    {
                                        tabValue == "profileSetting" &&

                                        <div className="profileSetting">
                                            <div class="pro_section position-relative p_0">
                                                <div className="border_b">
                                                    <h3 class="f22 color_black f_bold m_b_0 p_t_20 p_b_20 p_l_20 p_r_20">Profile Setting</h3>
                                                </div>

                                                <div className='p_t_20 p_b_20 p_l_20 p_r_20'>
                                                    <div className="setting_wrapper">

                                                        {
                                                            otherSetting.map((obj, key) => {
                                                                return (
                                                                    <div className="setting_wrap d-flex justify-content-between align-items-center">
                                                                        <div className='title_div'>
                                                                            <p className="f16 400 color_black">{obj.title}</p>
                                                                        </div>

                                                                        <div className='setting_btns flex-shrink-0'>

                                                                            <button
                                                                                className={`cmn_btn accept me-2 ${obj.status == 'accept' ? 'active' : ''}`}
                                                                                onClick={() => this.changeSetting(obj, key, 'accept')}
                                                                            ><i className='fa fa-check'></i>
                                                                            </button>

                                                                            <button
                                                                                className={`cmn_btn reject ${obj.status == 'reject' ? 'active' : ''}`}
                                                                                onClick={() => this.changeSetting(obj, key, 'reject')}
                                                                            ><i className='fa fa-times'></i>
                                                                            </button>

                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    }

                                    {
                                        tabValue == "searchReport" &&

                                        <div className='searchReport'>
                                            <div className="filterArea d-flex align-items-center justify-content-between">

                                                <div className="d-flex align-items-center">
                                                    <button className='btn_theme'>All</button>

                                                    <div class="form_group m_b_0">
                                                        <input type="search" placeholder="Search Location" value={search || ''} onChange={this.inputChange} name="search" id="search" />

                                                    </div>
                                                    <button className='btn_theme'>
                                                        Search
                                                    </button>
                                                </div>

                                                <div>
                                                <UncontrolledDropdown>
                                            <DropdownToggle className=''>
                                                <div className="drop_down_area ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.97" height="13.828" viewBox="0 0 16.97 13.828">
                                                        <path id="Icon_material-menu" data-name="Icon material-menu" d="M4.5,22.828H21.47v-2.3H4.5Zm0-5.762H21.47v-2.3H4.5ZM4.5,9v2.3H21.47V9Z" transform="translate(-4.5 -9)" fill="#fff" />
                                                    </svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="33.216" height="33.216" viewBox="0 0 33.216 33.216">
                                                        <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M16.608.563A16.608,16.608,0,1,0,33.216,17.171,16.605,16.605,0,0,0,16.608.563Zm0,6.429a5.893,5.893,0,1,1-5.893,5.893A5.893,5.893,0,0,1,16.608,6.991Zm0,23.037A12.833,12.833,0,0,1,6.8,25.461a7.467,7.467,0,0,1,6.6-4,1.639,1.639,0,0,1,.475.074,8.867,8.867,0,0,0,2.739.462,8.833,8.833,0,0,0,2.739-.462,1.639,1.639,0,0,1,.475-.074,7.467,7.467,0,0,1,6.6,4A12.833,12.833,0,0,1,16.608,30.029Z" transform="translate(0 -0.563)" fill="#fff" />
                                                    </svg>



                                                </div>
                                            </DropdownToggle>

                                            <DropdownMenu className="menu_opener">

                                              
                                              
                                            </DropdownMenu>

                                        </UncontrolledDropdown>
                                                </div>

                                            </div>



                                        </div>
                                    }
                                </div>

                            </div>


                        </div>


                    </div>
                </section>

            </React.Fragment>

        )

    }
}

export default Profile;