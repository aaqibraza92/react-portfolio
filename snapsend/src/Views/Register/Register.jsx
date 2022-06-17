import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Images } from 'Constant';
import Slider from "react-slick";
import Select from 'react-select';
import { countriesList } from 'Helpers/Datas/GlobalData'


import CmnButton from 'Components/CmnButton';
import CmnInput from 'Components/CmnInput';

import OtpInput from 'react-otp-input';
import { CommonNotifyModal } from 'Modals';
import "./Register.scss"
import Http from 'Helpers/Http/Http';
import { Api } from 'Helpers';
import Csc from 'Helpers/Datas/CSC';
import RAlert from 'Modals/RAlert';

const cityList = [
    { value: '', label: 'City' },
    { value: 'Indore', label: 'Indore' },
    { value: 'Bhopal', label: 'Bhopal' },
    { value: 'Delhi', label: 'Delhi' },
];

const homePicks = [
    { value: 'Indore', label: 'Indore' },
    { value: 'Bhopal', label: 'Bhopal' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Dewas', label: 'Dewas' },
    { value: 'Ujjain', label: 'Ujjain' },
    { value: 'Nagda', label: 'Nagda' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Gujrat', label: 'Gujrat' },
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

// API CALL

// -------


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 'private',
            regVal: 'formStep', //'otpStep' || 'formStep',
            passwordVisible: false,
            confirmPassVisible: false,
            otp: '',
            modalName: true,
            registermodal1: '',
            registermodal2: false,
            logo: '',
            registerTab: '', // 'citizen'


            // 29 September
            userSetup: false,
            userStepper: 1,
            homePicks: { value: '', label: '' },
            firstChoice: { value: '', label: 'Country' },
            secondChoice: { value: '', label: 'Country' },
            thirdChoice: { value: '', label: 'Country' },

            otherSetting: [
                { title: 'Save reports in my private file after sending', status: false },
                { title: 'E-mail my report tracking number to my email above', status: false },
                { title: 'Text my report tracking number this phone', status: false },
                { title: 'E-mail my updates to my email above', status: false },
                { title: 'Become a member of Flag them with this app', status: false },
                { title: 'Post pictures to flag them and we speak with this app', status: false },
                { title: 'Allow this app to access your phone to send in reports', status: false },
            ],

            countryList: [],
            stateList: [],
            cityList: [],
            alert_show: false,
            alert_callback: () => { },
            alert_message: 'message 02',
            role: 'Citizen',
            firstName: '',
            lastName: '',
            userName: '',
            emailAddress: '',
            phoneNumber: '',
            country: '',
            state: '',
            city: '',
            countryCode: '',
            stateCode: '',
            cityCode: '',
            password: '',
            confirmPassword: '',
            departmanetName: '',
            lawPhoneNumber: '',
            lawEmailAddress: '',
            website: '',
            faxNumber: '',
            lawPassword: '',
            invalidFields: ['firstName', 'lastName', 'userName', 'phoneNumber', 'emailAddress', 'password', 'confirmPassword'],
            invalidFieldsLaw: ['departmanetName', 'lawPhoneNumber', 'lawEmailAddress', 'faxNumber', 'lawPassword', 'lawConfirmPassword'],
        }
    }

    // My Methods
    componentWillMount = () => {
        console.log("Will Mount")
        this.setState({
            countryList: Csc.getCountries(),
            country: { value: 'India', label: 'India', code: 'IN', dialcode: '+91' },
            state: { value: 'Madhya Pradesh', label: 'Madhya Pradesh', code: 'MP' },
            stateList: Csc.getStates('India'),
            city: { value: 'Indore', label: 'Indore' },

        });
        this.stateChangeHandle({ value: 'Madhya Pradesh', label: 'Madhya Pradesh', code: 'MP' }, 'state');
    }

    componentDidMount = () => {
        this.stateChangeHandle({ value: 'Madhya Pradesh', label: 'Madhya Pradesh', code: 'MP' }, 'state');
        this.setState({
            city: { value: 'Indore', label: 'Indore' },

        });
    }

    countryChangeHandle = (selectedOption, stateKey) => {
        this.setState({ [stateKey]: selectedOption, stateList: Csc.getStates(selectedOption.value) });
    };

    stateChangeHandle = (selectedOption, stateKey) => {
        this.setState({ [stateKey]: selectedOption, cityList: Csc.getCities(this.state.country.value, selectedOption.value) });
    };

    submitRegisterPrivate = (val, tabValue) => {
        if (!this.checkPasswords()) return this.alert_toggle('Confirm password mismatch, Please reenter password.', () => { });
        if (!this.validateFullForm()) return this.alert_toggle('Please enter values in required fields.', () => { });
        const { firstName, lastName, userName, phoneNumber, emailAddress, country, state, city, password, role } = this.state;
        const iData = {
            email: emailAddress,
            password: password,
            mobile_code: country.dialcode,
            phone_number: phoneNumber,
            country_id: 1000,
            country_name: country.value,
            state_id: 1001,
            state_name: state.value,
            city_id: 1002,
            city_name: city.value,
            image: '',
            role: role,
            firstname: firstName,
            lastname: lastName,
            username: userName,
            dept_name: '',
            website: '',
            fax: '',
        }
        Http.post(Api.REGISTER, iData, true).then((result) => {
            console.log(result)
            if (result.status == "200") {
                this.alert_toggle(result.msg, this.gotoOTPStep);
            } else if (result.status) {
                this.alert_toggle(result.msg, () => { });
            } else {
                this.alert_toggle('Error in sumbitting form, please check entered values.', () => { });
            }
        });
    }

    submitRegisterLaw = (val, tabValue) => {
        if (!this.checkPasswords()) return this.alert_toggle('Confirm password mismatch, Please reenter password.', () => { });
        if (!this.validateFullForm()) return this.alert_toggle('Please enter values in requied fields.', () => { });
        const { departmanetName, lawPhoneNumber, lawEmailAddress, website, faxNumber, country, state, city, lawPassword, role } = this.state;
        const iData = {
            email: lawEmailAddress,
            password: lawPassword,
            mobile_code: country.dialcode,
            phone_number: lawPhoneNumber,
            country_id: 1001,
            country_name: country.value,
            state_id: 1002,
            state_name: state.value,
            city_id: 1003,
            city_name: city.value,
            image: '',
            role: role,
            firstname: '',
            lastname: '',
            username: '',
            dept_name: departmanetName,
            website: website,
            fax: faxNumber,
        }
        Http.post(Api.REGISTER, iData, true).then((result) => {
            if (result.status == "200") {
                this.alert_toggle(result.msg, this.gotoOTPStep);
            } else if (result.status) {
                this.alert_toggle(result.msg, () => { });
            } else {
                this.alert_toggle('Error in sumbitting form, please check entered values.', () => { });
            }
        });
    }

    alert_toggle = (message, callback) => {
        this.setState({ alert_show: !this.state.alert_show, alert_message: message, alert_callback: callback });

    }

    alert_onOK = () => {
        this.setState({ alert_show: !this.state.alert_show, alert_message: this.state.alert_message });
        this.state.alert_callback();
    }

    gotoOTPStep = () => {
        this.setState({ regVal: 'otpStep', registerTab: 'citizen' });
    }

    checkPasswords = () => {
        const { password, confirmPassword } = this.state;
        if (password === confirmPassword) {
            return true;
        } else {
            return false;
        }
    }

    validateFullForm = () => {
        let val = false;
        let datalist = this.state.role == 'Citizen' ? this.state.invalidFields : this.state.invalidFieldsLaw;
        console.log('role', this.state.role)
        if (datalist.length > 0) {
            datalist.map((item) => {
                let ii = document.getElementsByName(item);
                if (ii[0].value == '') {
                    ii[0].classList.add('requiredfield');
                } else {
                    ii[0].classList.remove('requiredfield');
                    datalist.splice(datalist.indexOf(item), 1);
                }
            })
            val = false

        } else {
            val = true;
        }
        return val;
    }

    validateForm = (e) => {
        let datalist = this.state.role == 'Citizen' ? this.state.invalidFields : this.state.invalidFieldsLaw;
        if (e.target.value == '') {
            if (datalist.indexOf(e.target.name) == -1) {
                e.target.classList.add("requiredfield");
                datalist.push(e.target.name);
            }
        } else {
            e.target.classList.remove("requiredfield");
            datalist.splice(datalist.indexOf(e.target.name), 1);
        }
    }

    validateOTP = () => {
        try {
            const { otp, emailAddress, registerTab, lawEmailAddress } = this.state;
            console.log(otp.length);
            if (otp.length < 4) {
                this.alert_toggle('Please enter valid otp.', () => { });
            } else if (otp.length === 4) {
                // call api
                const iData = {
                    email: registerTab == 'citizen' ? emailAddress : lawEmailAddress,
                    otp: otp
                }
                Http.post(Api.VERIFYOTP, iData, true).then((result) => {
                    console.log(result)
                    if (result.msg) {
                        this.alert_toggle(result.msg, this.gotoLoginScreen());
                    } else if (result.status) {
                        this.alert_toggle(result.msg, () => { });
                    } else {
                        console.log(result);
                        this.alert_toggle('Error in sumbitting form, please check entered values.', () => { });
                    }
                });
            }
        } catch (error) {
            console.log('Register.js validateOTP() : ', error);
        }
    }

    gotoLoginScreen = () => {
        window.location.pathname = "/login";
    }


    // My Methods Closed ----------------------------------------------------------------

    otpGet = (otp) => this.setState({ otp });

    handleChange = (selectedOption, stateKey) => {
        this.setState({ [stateKey]: selectedOption });
        console.log(selectedOption);
    };
    fileUploader = (e) => {
        this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
        console.log(URL.createObjectURL(e.target.files[0]));
    };


    toggleTab = (value) => {
        this.setState({ tabValue: value });
        value == 'private' ? this.setState({ role: 'Citizen' }) : this.setState({ role: 'Law Enforcement' });
    }

    register = (val, tabValue) => {
        console.log(
            this.state.firstName
        );
        this.setState({ regVal: val, registerTab: tabValue })
    }
    toggleModal = (modalName) => {
        this.setState({ [modalName]: !this.state[modalName] })
    }

    togglePassword = (value) => {
        this.setState({ [value]: !this.state[value] });
    }
    inputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    stepChanger = (step) => {
        this.setState({ userStepper: step })
    }

    changeSetting = (obj, key, status) => {
        let arr = [...this.state.otherSetting]

        arr[key].status = status;

        this.setState({ otherSetting: arr })

        // console.log(arr[key].status, "array")
    }


    registration_form_citizen = ({ tabValue, passwordVisible, confirmPassVisible }) => {


        return (
            <>

                {
                    tabValue === 'private' &&

                    <div className={`cmn_tab_content`}>

                        <div className="tab_content">
                            <h3 class="color_black f20 f_bold m_b_20">Personal information</h3>

                            {/* Form starts here */}

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form_group">

                                        <label htmlFor="" className="f16 color_black m_b_10">
                                            Firstname
                                        </label>
                                        <CmnInput onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="15" id="firstName" name="firstName" minLength="3" className="asdasd" value={this.state.firstName || ''} type="text" placeholder="First Name " />
                                        {/* {this.state.firstName || ''} */}
                                    </div>



                                </div>

                                <div className="col-md-6">
                                    <div className="form_group">
                                        <label htmlFor="" className="f16 color_black m_b_10">
                                            Lastname
                                        </label>
                                        <CmnInput onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="15" name="lastName" minLength="3" className="asdasd" value={this.state.lastName || ''} type="text" placeholder="Last Name" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form_group">
                                        <label htmlFor="" className="f16 color_black m_b_10">
                                            User name
                                        </label>
                                        <CmnInput onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="15" name="userName" minLength="3" className="asdasd" value={this.state.userName || ''} type="text" placeholder="username5454" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form_group">
                                        <label htmlFor="" className="f16 color_black m_b_10">
                                            Phone number
                                        </label>
                                        <CmnInput onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="10" name="phoneNumber" minLength="10" className="asdasd" value={this.state.phoneNumber || ''} type="number" placeholder="9876-543-210" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form_group">
                                        <label htmlFor="" className="f16 color_black m_b_10">
                                            Email address
                                        </label>
                                        <CmnInput onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="50" name="emailAddress" minLength="10" className="asdasd" value={this.state.emailAddress || ''} type="text" placeholder="fleta.goodw@yahoo.com" />
                                    </div>
                                </div>


                                <div className="col-md-12">


                                    <h3 class="color_black f20 f_bold m_b_20">Select your location</h3>
                                    <div className="m_b_20">
                                        <label htmlFor="" className="f16 color_black m_b_10">
                                            Country
                                        </label>
                                        <Select
                                            name="country"
                                            value={this.state.country}
                                            onChange={(e) => this.countryChangeHandle(e, 'country')}
                                            options={this.state.countryList}
                                            classNamePrefix='custom_select'
                                        //menuIsOpen = {true}
                                        />
                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <div className="m_b_20">
                                        <label htmlFor="" className="f16 color_black m_b_10">
                                            State, Province, Territory
                                        </label>
                                        <Select
                                            value={this.state.state}
                                            onChange={(e) => this.stateChangeHandle(e, 'state')}
                                            options={this.state.stateList}
                                            classNamePrefix='custom_select'
                                        //menuIsOpen = {true}
                                        />
                                    </div>


                                </div>

                                <div className="col-md-6">
                                    <div className="m_b_20">
                                        <label htmlFor="" className="f16 color_black m_b_10">
                                            City, Town, Village
                                        </label>
                                        <Select
                                            value={this.state.city}
                                            onChange={(e) => this.handleChange(e, 'city')}
                                            options={this.state.cityList}
                                            classNamePrefix='custom_select'
                                        //menuIsOpen = {true}
                                        />
                                    </div>
                                </div>

                                <h3 class="color_black f20 f_bold m_b_20">Set password</h3>

                                <div className="col-md-6">
                                    <div className="form_group password position-relative">
                                        <label htmlFor="" className="f16 color_black m_b_10">
                                            Password
                                        </label>
                                        <input onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="15" name="password" minLength="3" className="asdasd" value={this.state.password || ''} type={`${passwordVisible ? 'text' : 'password'}`} id='password' placeholder="*********" />
                                        <button className='btn_blank' onClick={() => this.togglePassword('passwordVisible')}>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="13.136" viewBox="0 0 17.5 13.136">
                                                <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(0.75 0.75)">
                                                    <path id="Path_378" data-name="Path 378" d="M1.5,11.818S4.409,6,9.5,6s8,5.818,8,5.818-2.909,5.818-8,5.818S1.5,11.818,1.5,11.818Z" transform="translate(-1.5 -6)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                    <path id="Path_379" data-name="Path 379" d="M17.864,15.682A2.182,2.182,0,1,1,15.682,13.5,2.182,2.182,0,0,1,17.864,15.682Z" transform="translate(-7.682 -9.864)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                </g>
                                            </svg>
                                        </button>

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form_group password position-relative">
                                        <label htmlFor="" className="f16 color_black m_b_10">
                                            Confirm password
                                        </label>
                                        <input onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="15" name="confirmPassword" minLength="3" className="asdasd" value={this.state.confirmPassword || ''} type={`${confirmPassVisible ? 'text' : 'password'}`} id='confirmPass' placeholder="Confirm Password" />
                                        <button className='btn_blank' onClick={() => this.togglePassword('confirmPassVisible')}>

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
                                    {/* Private Register Button */}
                                    <div className="d-flex justify-content-end ">
                                        <CmnButton
                                            title='Register'
                                            className='register_btn'
                                            name='register_btn'
                                            id='register_btn'
                                            // onClick={() => this.register('otpStep', 'citizen')}
                                            onClick={() => this.submitRegisterPrivate('otpStep', 'citizen')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }

    render() {

        const { tabValue, passwordVisible, confirmPassVisible, state,
            city, regVal, logo, banner, registerTab, userStepper, otherSetting,
        } = this.state;


        return (

            <React.Fragment>



                <section className="p_t_80 p_b_80">
                    <RAlert open={this.state.alert_show} title={"Alert!"} okbutton={true} oktext="OK" toggle={() => this.alert_toggle(this.state.alert_message)} message={this.state.alert_message} onOK={() => this.alert_onOK()} />
                    <div className="container">
                        <div className="row justify-content-between">
                            {

                                // OTP step starts here.........................
                                regVal === 'otpStep' &&

                                <React.Fragment>


                                    <div className="text-center">
                                        <h3 className="f40 color_black f600 m_b_30">
                                            Verify mobile number
                                        </h3>

                                        <p className="m_b_0 f18 color_grey">
                                            A One-Time Password has been sent to </p>
                                        <p className="f18 color_grey">
                                            +1 9876-543-210
                                        </p>

                                        <div className="otp_styling">

                                            <OtpInput
                                                value={this.state.otp}
                                                onChange={this.otpGet}
                                                numInputs={4}
                                                className="otp_dgn"
                                            />

                                            {
                                                registerTab === 'citizen' ?
                                                    //this.toggleModal('userSetup') || this.validateOTP()
                                                    <button onClick={() => this.validateOTP()} className="btn_theme w-100 m_b_20">
                                                        Verify Code
                                                    </button>

                                                    :

                                                    <button onClick={() => this.toggleModal('registermodal1')} className="btn_theme w-100 m_b_20">
                                                        Verify Code
                                                    </button>
                                            }

                                            <div>
                                                <a className="color_black f18" href="javascript:void(0)">
                                                    Resend  One-Time Password
                                                </a>
                                            </div>
                                        </div>



                                    </div>
                                </React.Fragment>


                            }
                            {
                                regVal === 'formStep' &&
                                <React.Fragment>


                                    <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 m_b_30_mob">
                                        <div className="img_set m_b_30">
                                            <img className="img-fluid" src={Images.grp_img.default} alt="" />
                                        </div>
                                        <h3 className="color_black f40 f_bold m_b_30">
                                            Welcome to Snapsend  <br className="d" />This is static dummy <br className="d" /> text for heading here.
                                        </h3>

                                        <ul className="no_ul color_ul">
                                            <li className="f18 color_grey d-flex">
                                                <span className="m_r_20">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                        <circle id="Ellipse_59" data-name="Ellipse 59" cx="9" cy="9" r="9" fill="#4d5fc2" />
                                                    </svg>

                                                </span>
                                                <p>
                                                    Document your life. There comes static dummy
                                                    text. simply dummy text of the printing and type
                                                    setting industry.
                                                </p>

                                            </li>

                                            <li className="f18 color_grey d-flex">
                                                <span className="m_r_20">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                        <circle id="Ellipse_59" data-name="Ellipse 59" cx="9" cy="9" r="9" fill="#40c390" />
                                                    </svg>


                                                </span>
                                                <p>
                                                    Get create every day. There comes static dummy
                                                    text. simply dummy text of the printing and type
                                                    setting industry.
                                                </p>

                                            </li>

                                            <li className="f18 color_grey d-flex">
                                                <span className="m_r_20">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                        <circle id="Ellipse_59" data-name="Ellipse 59" cx="9" cy="9" r="9" fill="#ffa866" />
                                                    </svg>


                                                </span>
                                                <p>
                                                    Improve self-discipline. There comes static
                                                    text. simply dummy text of the printing and type
                                                    setting industry.
                                                </p>

                                            </li>

                                            <li className="f18 color_grey d-flex">
                                                <span className="m_r_20">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                        <circle id="Ellipse_59" data-name="Ellipse 59" cx="9" cy="9" r="9" fill="#fa6666" />
                                                    </svg>


                                                </span>
                                                <p>
                                                    Take better city. There comes static dummy
                                                    text.simply dummy text of the printing and type
                                                    setting industry.
                                                </p>

                                            </li>


                                        </ul>
                                    </div>

                                    <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                                        <div className="text-center">
                                            <h3 className="color_black f40 f_bold m_b_20">
                                                Join Snapsend
                                            </h3>
                                            <p className="f18 color_grey mb-4">
                                                Join these and 10,465,789 other private citizens
                                            </p>
                                        </div>

                                        <div className="tab_button register_tabs text-center m_b_30">
                                            <button className={`f16 ${tabValue === 'private' ? 'active' : ''}`} onClick={() => this.toggleTab('private')}>Private Citizen</button>
                                            <button className={`f16 ${tabValue === 'law' ? 'active' : ''}`} onClick={() => this.toggleTab('law')}>Law Enforcement</button>
                                        </div>

                                        {this.registration_form_citizen({ tabValue, passwordVisible, confirmPassVisible })}

                                        {
                                            tabValue === 'law' &&
                                            <div className={`cmn_tab_content`}>

                                                <div className="tab_content">
                                                    <h3 class="color_black f20 f_bold m_b_20">Department information</h3>

                                                    <div className="form_group">
                                                        <label htmlFor="" className="f16 color_black m_b_10">
                                                            Department Name
                                                        </label>
                                                        <CmnInput onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="50" name="departmanetName" minLength="3" className="asdasd" value={this.state.departmanetName || ''} type="text" placeholder="Department Name" />
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form_group">
                                                                <label htmlFor="" className="f16 color_black m_b_10">
                                                                    Phone number
                                                                </label>
                                                                <CmnInput onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="15" name="lawPhoneNumber" minLength="3" className="asdasd" value={this.state.lawPhoneNumber || ''} type="text" placeholder="(360) 778-6623" />
                                                            </div>

                                                            <div className="form_group">
                                                                <label htmlFor="" className="f16 color_black m_b_10">
                                                                    Website
                                                                </label>
                                                                <CmnInput onChange={this.inputChange} maxLength="50" name="website" minLength="3" className="asdasd" value={this.state.website || ''} type="url" placeholder="https://www.google.com/" />
                                                            </div>

                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form_group">
                                                                <label htmlFor="" className="f16 color_black m_b_10">
                                                                    Email address
                                                                </label>
                                                                <CmnInput onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="50" name="lawEmailAddress" minLength="3" className="asdasd" value={this.state.lawEmailAddress || ''} type="text" placeholder="emailaddress@xyz.com" />
                                                            </div>

                                                            <div className="form_group">
                                                                <label htmlFor="" className="f16 color_black m_b_10">
                                                                    Fax Number
                                                                </label>
                                                                <CmnInput onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="15" name="faxNumber" minLength="3" className="asdasd" value={this.state.faxNumber || ''} type="url" placeholder="(360) 778-6623" />
                                                            </div>

                                                        </div>

                                                        <div className="col-md-12">
                                                            <h3 class="color_black f20 f_bold m_b_20">Select your location</h3>
                                                            <div className="m_b_20">
                                                                <label htmlFor="" className="f16 color_black m_b_10">
                                                                    Country
                                                                </label>
                                                                <Select
                                                                    value={this.state.country}
                                                                    onChange={(e) => this.countryChangeHandle(e, 'country')}
                                                                    options={this.state.countryList}
                                                                    classNamePrefix='custom_select'
                                                                //menuIsOpen = {true}
                                                                />
                                                            </div>

                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="m_b_20">
                                                                <label htmlFor="" className="f16 color_black m_b_10">
                                                                    State, Province, Territory
                                                                </label>
                                                                <Select
                                                                    value={this.state.state}
                                                                    onChange={(e) => this.stateChangeHandle(e, 'state')}
                                                                    options={this.state.stateList}
                                                                    classNamePrefix='custom_select'
                                                                //menuIsOpen = {true}
                                                                />
                                                            </div>


                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="m_b_20">
                                                                <label htmlFor="" className="f16 color_black m_b_10">
                                                                    City, Town, Village
                                                                </label>
                                                                <Select
                                                                    value={this.state.city}
                                                                    onChange={(e) => this.handleChange(e, 'city')}
                                                                    options={this.state.cityList}
                                                                    classNamePrefix='custom_select'
                                                                //menuIsOpen = {true}
                                                                />
                                                            </div>
                                                        </div>



                                                        <h3 class="color_black f20 f_bold m_b_20">Set password</h3>

                                                        <div className="col-md-6">
                                                            <div className="form_group password position-relative">
                                                                <label htmlFor="" className="f16 color_black m_b_10">
                                                                    Password
                                                                </label>
                                                                <input onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="10" name="lawPassword" minLength="3" className="asdasd" value={this.state.lawPassword || ''} type={`${passwordVisible ? 'text' : 'password'}`} id='password' placeholder="Password    " />
                                                                <button className='btn_blank' onClick={() => this.togglePassword('passwordVisible')}>

                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="13.136" viewBox="0 0 17.5 13.136">
                                                                        <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(0.75 0.75)">
                                                                            <path id="Path_378" data-name="Path 378" d="M1.5,11.818S4.409,6,9.5,6s8,5.818,8,5.818-2.909,5.818-8,5.818S1.5,11.818,1.5,11.818Z" transform="translate(-1.5 -6)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                            <path id="Path_379" data-name="Path 379" d="M17.864,15.682A2.182,2.182,0,1,1,15.682,13.5,2.182,2.182,0,0,1,17.864,15.682Z" transform="translate(-7.682 -9.864)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                        </g>
                                                                    </svg>
                                                                </button>

                                                            </div>


                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form_group password position-relative">
                                                                <label htmlFor="" className="f16 color_black m_b_10">
                                                                    Confirm password
                                                                </label>
                                                                <input onBlur={(e) => this.validateForm(e)} onChange={this.inputChange} maxLength="10" name="lawConfirmPassword" minLength="3" className="asdasd" value={this.state.lawConfirmPassword || ''} type={`${confirmPassVisible ? 'text' : 'password'}`} id='confirmPass' placeholder="Policebro" />
                                                                <button className='btn_blank' onClick={() => this.togglePassword('confirmPassVisible')}>

                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="13.136" viewBox="0 0 17.5 13.136">
                                                                        <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(0.75 0.75)">
                                                                            <path id="Path_378" data-name="Path 378" d="M1.5,11.818S4.409,6,9.5,6s8,5.818,8,5.818-2.909,5.818-8,5.818S1.5,11.818,1.5,11.818Z" transform="translate(-1.5 -6)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                            <path id="Path_379" data-name="Path 379" d="M17.864,15.682A2.182,2.182,0,1,1,15.682,13.5,2.182,2.182,0,0,1,17.864,15.682Z" transform="translate(-7.682 -9.864)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                        </g>
                                                                    </svg>
                                                                </button>

                                                            </div>
                                                        </div>
                                                        {/* Law Register Button */}
                                                        <div className="col-md-12">
                                                            <div className="d-flex justify-content-end ">
                                                                <CmnButton
                                                                    title='Register'
                                                                    className='register_btn'
                                                                    name='register_btn'
                                                                    id='register_btn'
                                                                    //onClick={() => this.register('otpStep', 'law')}
                                                                    onClick={() => this.submitRegisterLaw('otpStep', 'law')}
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    </div>

                                </React.Fragment>

                            }



                        </div>
                    </div>
                </section>

                <CommonNotifyModal open={(this.state.registermodal1) ? true : false} toggle={() => this.toggleModal('registermodal1')} className={''}>
                    <div className="modal_wrapper">
                        <div className="text-center max-80 mx-auto">
                            <h3 className="f28 color_black f600">
                                Few steps to finish your profile
                            </h3>

                            <p className="f16 color_grey">
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration
                            </p>


                        </div>



                        <h3 className='f20 f600 color_black'>
                            Department Information
                        </h3>

                        <div className="row">
                            <div class="col-md-6">
                                <div class="form_group">
                                    <label for="" class="f16 color_black m_b_10">Precinct Number/Name</label>
                                    <CmnInput onChange={this.inputChange} type="text" placeholder="Main Office" name="precinctNumber" class="" value={this.state.precinctNumber} />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form_group">
                                    <label for="" class="f16 color_black m_b_10">Contact Desk or Officer name</label>
                                    <CmnInput onChange={this.inputChange} type="text" placeholder="Officer Dan Whatcom" name="contactDesk" class="" value={this.state.contactDesk} />

                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form_group">
                                    <label for="" class="f16 color_black m_b_10">Location/Address</label>
                                    <CmnInput onChange={this.inputChange} type="text" placeholder="311 Grand Bhagwali Ave Bellingham WA 98225" name="location" class="" value={this.state.location} />

                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form_group">
                                    <label for="" class="f16 color_black m_b_10">Department Motto</label>
                                    <textarea placeholder="To make Whatcom Country the safest in the state through excellence in public safety." className="" name="department" onChange={this.inputChange} >
                                        {this.state.department || ""}
                                    </textarea>
                                </div>
                            </div>

                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn_theme btn_lg" onClick={() => { this.toggleModal('registermodal1'); this.toggleModal('registermodal2') }}>
                                Next
                            </button>
                        </div>

                    </div>
                </CommonNotifyModal>

                <CommonNotifyModal open={(this.state.registermodal2) ? true : false} toggle={() => this.toggleModal('registermodal2')} className={''}>
                    <div className="modal_wrapper">
                        <div className="text-center max-80 mx-auto">
                            <h3 className="f28 color_black f_bold">
                                Few steps to finish your profile
                            </h3>

                            <p className="f16 color_grey">
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration
                            </p>


                        </div>

                        <div className="m_b_20">
                            <button className="color_black f16" onClick={() => { this.toggleModal('registermodal2'); this.toggleModal('registermodal1') }}>

                                <svg style={{ marginRight: "10px" }} xmlns="http://www.w3.org/2000/svg" width="5.569" height="9.839" viewBox="0 0 5.569 9.839">
                                    <path id="Path_377" data-name="Path 377" d="M15.5,18l-4,4-4-4" transform="translate(22.65 -6.581) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" />
                                </svg>
                                Go back
                            </button>



                        </div>
                        <h3 className="f20 color_black f_bold m_b_20">
                            Upload department logo image
                        </h3>

                        <div className="d-flex align-items-center m_b_30">
                            <div className="imgWrapper" style={{ marginRight: "15px" }}>
                                <img className="logo_set img-fluid" src={logo == null || logo == "" ? Images.file_upl.default : logo} alt="" />
                            </div>

                            <div>
                                <input onChange={this.fileUploader} name="logo" className="d-none" type="file" id="file1" />
                                <label htmlFor="file1" className="btn_theme">
                                    {
                                        logo == null || logo == "" ? "Upload" : "Change"

                                    }
                                </label>

                                {
                                    logo == null || logo == "" ? "" : <button className="remove_text f_bold" onClick={() => this.setState({ logo: '' })}>remove</button>

                                }

                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center m_b_20">
                            <div>
                                <h3 className="f20 color_black f_bold m_b_20 m_b_0">
                                    Upload department banner image
                                </h3>
                            </div>

                            <div>
                                <p className="f14 color_grey m_b_0">
                                    banner size is 1026 x 375px
                                </p>
                            </div>
                        </div>

                        {
                            banner == "" || banner == null ?
                                <div className="position-relative banner_upload_area justify-content-center d-flex align-items-center m_b_20">
                                    <input id="banner" onChange={this.fileUploader} name="banner" type="file" className="file_upl" />

                                    <div className="upload_banner_up text-center">
                                        <svg className="m_b_10" xmlns="http://www.w3.org/2000/svg" width="91.127" height="38.4" viewBox="0 0 91.127 38.4">
                                            <g id="Group_693" data-name="Group 693" transform="translate(-4.437 -30.8)">
                                                <path id="Path_460" data-name="Path 460" d="M85.328,34.174H14.673a9.091,9.091,0,0,1-6.861,6.861V58.964a9.09,9.09,0,0,1,6.861,6.861H85.328a9.088,9.088,0,0,1,6.86-6.861V41.035A9.091,9.091,0,0,1,85.328,34.174Z" fill="#4d5fc2" />
                                                <path id="Path_461" data-name="Path 461" d="M94.213,37.888a5.744,5.744,0,0,1-5.737-5.738V30.8H11.525v1.35a5.744,5.744,0,0,1-5.738,5.738H4.437V62.113h1.35a5.744,5.744,0,0,1,5.738,5.737V69.2H88.476V67.85a5.744,5.744,0,0,1,5.737-5.737h1.351V37.888ZM93.538,60.1l-.566.093a7.743,7.743,0,0,0-6.421,6.42l-.092.567H13.542l-.091-.567a7.745,7.745,0,0,0-6.421-6.42L6.462,60.1V39.905l.568-.091a7.746,7.746,0,0,0,6.421-6.421l.091-.567H86.459l.092.567a7.744,7.744,0,0,0,6.421,6.421l.566.091Z" fill="#4d5fc2" />
                                            </g>
                                        </svg>

                                        <div className="text-center f16 color_black">
                                            Upload banner
                                        </div>

                                    </div>

                                </div>
                                :
                                ""
                        }


                        <div className="d-flex align-items-center justify-content-center overflow-hidden w-100 h-100 m_b_20">
                            <img className="img-fluid radius" src={banner == null || banner == "" ? "" : banner} alt="" />
                        </div>


                        <div className="d-flex justify-content-between">
                            {
                                banner == "" || banner == null ? ""
                                    :

                                    <div>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <input id="banner" onChange={this.fileUploader} name="banner" type="file" className="file_upl d-none" />
                                                <label htmlFor="banner" className="btn_theme">
                                                    Change
                                                </label>
                                            </div>
                                            <div>
                                                <button className="remove_text f_bold" onClick={() => this.setState({ banner: '' })}>remove</button>
                                            </div>
                                        </div>
                                    </div>

                            }


                            <div>
                                <button className="btn_theme btn_lg" onClick="">
                                    Finish
                                </button>
                            </div>

                        </div>



                    </div>
                </CommonNotifyModal>


                {/* -----------Modal for User setup-------------- */}


                <CommonNotifyModal open={(this.state.userSetup) ? true : false} toggle={() => this.toggleModal('userSetup')} className={'user_setup_modal modal-xl'}>

                    <Row className='justify-content-center'>
                        <Col xs='12' md='10' lg='9' xl='5'>
                            <div className="modal_content ">
                                <h4 className="f28 f700 color_black mb-3 text-center">
                                    Fill the information
                                </h4>
                                <p className="f16 f400 color_black mb-5 text-center">
                                    Pick up to ten departments for both home and travel
                                    to have in your dropdown list for fast access.
                                </p>

                                <ul className="setup_stepper d-flex justify-content-center align-items-center no_ul mb-4">
                                    <li className={` ${userStepper == 1 ? 'active' : ''} ${userStepper == 2 ? 'active done' : ''} ${userStepper == 3 ? 'active done' : ''} `}><span>1</span></li>
                                    <li className={` ${userStepper == 2 ? 'active' : ''} ${userStepper == 3 ? 'active done' : ''} `}><span>2</span></li>
                                    <li className={` ${userStepper == 3 ? 'active' : ''} `}><span>3</span></li>
                                </ul>

                                {
                                    userStepper == 1 &&

                                    <React.Fragment>
                                        <h4 className="f24 f700 color_black text-center mb-4">Your top 3 picks from home</h4>

                                        <div className=''>

                                            <div className="mb-3">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <label htmlFor='' className="color_black f16 f400">Pick from list</label>
                                                    <span><img src={Images.info_icon.default} alt="" /></span>
                                                </div>
                                                <Select
                                                    defaultValue={[this.state.homePicks[1]]}
                                                    value={this.state.homePicks}
                                                    placeholder="Please select any 10 departments"
                                                    isMulti
                                                    onChange={(e) => this.handleChange(e, 'homePicks')}
                                                    options={homePicks}
                                                    classNamePrefix='custom_select basic-multi-select'
                                                //menuIsOpen = {true}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor='' className="color_black f16 f400 mb-2">First Choice</label>
                                                <Select
                                                    value={this.state.firstChoice}
                                                    onChange={(e) => this.handleChange(e, 'firstChoice')}
                                                    options={firstChoice}
                                                    classNamePrefix='custom_select'
                                                //menuIsOpen = {true}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor='' className="color_black f16 f400 mb-2">Secound Choice</label>
                                                <Select
                                                    value={this.state.secondChoice}
                                                    onChange={(e) => this.handleChange(e, 'secondChoice')}
                                                    options={secondChoice}
                                                    classNamePrefix='custom_select'
                                                //menuIsOpen = {true}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor='' className="color_black f16 f400 mb-2">Third Choice</label>
                                                <Select
                                                    value={this.state.thirdChoice}
                                                    onChange={(e) => this.handleChange(e, 'thirdChoice')}
                                                    options={thirdChoice}
                                                    classNamePrefix='custom_select'
                                                //menuIsOpen = {true}
                                                />
                                            </div>

                                            <div className='text-end'>
                                                <CmnButton
                                                    title="Next"
                                                    name="step_1"
                                                    className='stepper_btn'
                                                    onClick={() => this.stepChanger(2)}
                                                />
                                            </div>

                                        </div>
                                    </React.Fragment>
                                }

                                {
                                    userStepper == 2 &&

                                    <React.Fragment>
                                        <h4 className="f24 f700 color_black text-center mb-4">Pick your travel destination</h4>

                                        <div className=''>

                                            <div className="mb-3">
                                                <label htmlFor='' className="color_black f16 f400">Country</label>
                                                <Select
                                                    value={this.state.country}
                                                    onChange={(e) => this.handleChange(e, 'mycountry')}
                                                    options={this.state.countryList}
                                                    classNamePrefix='custom_select'
                                                //menuIsOpen = {true}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor='' className="color_black f16 f400 mb-2">State, Province, Territory</label>
                                                <Select
                                                    value={this.state.state}
                                                    onChange={(e) => this.handleChange(e, 'state')}
                                                    options={this.state.stateList}
                                                    classNamePrefix='custom_select'
                                                //menuIsOpen = {true}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor='' className="color_black f16 f400 mb-2">City, Town, Village</label>
                                                <Select
                                                    value={this.state.city}
                                                    onChange={(e) => this.handleChange(e, 'city')}
                                                    options={cityList}
                                                    classNamePrefix='custom_select'
                                                //menuIsOpen = {true}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <label htmlFor='' className="color_black f16 f400">Pick from list</label>
                                                    <span><img src={Images.info_icon.default} alt="" /></span>
                                                </div>
                                                <Select
                                                    value={this.state.homePicks}
                                                    onChange={(e) => this.handleChange(e, 'homePicks')}
                                                    options={homePicks}
                                                    classNamePrefix='custom_select'
                                                //menuIsOpen = {true}
                                                />
                                            </div>

                                            <div className='text-end'>

                                                <button className='f16 f500 color_black me-3' onClick={() => this.stepChanger(1)}>Go Back</button>

                                                <CmnButton
                                                    title="Next"
                                                    name="step_1"
                                                    className='stepper_btn'
                                                    onClick={() => this.stepChanger(3)}
                                                />
                                            </div>

                                        </div>
                                    </React.Fragment>
                                }

                                {
                                    userStepper == 3 &&

                                    <React.Fragment>
                                        <h4 className="f24 f700 color_black text-center mb-4">Other Settings</h4>

                                        <div className=''>

                                            <div className="setting_wrapper margin_minus_100">

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

                                                <div className='text-end mt-4'>

                                                    <button className='f16 f500 color_black me-3' onClick={() => this.stepChanger(2)}>Go Back</button>

                                                    <Link to='/profile' className='stepper_btn btn_theme'>Set up Profile</Link>
                                                </div>

                                            </div>

                                        </div>
                                    </React.Fragment>
                                }

                            </div>
                        </Col>
                    </Row>

                </CommonNotifyModal>

            </React.Fragment>

        )

    }
}

export default Register;