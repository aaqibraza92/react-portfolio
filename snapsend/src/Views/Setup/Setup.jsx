import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Images } from 'Constant';
// import Slider from "react-slick";
import Select from 'react-select';

import {Api , Auth, Http} from 'Helpers'

import CmnButton from 'Components/CmnButton';
import CmnInput from 'Components/CmnInput';

import OtpInput from 'react-otp-input';
import { CommonNotifyModal } from 'Modals';
import "./Setup.scss";


class Setup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 'private',
            regVal: 'formStep',
            password: false,
            confirmPass: false,
            country: { value: '', label: 'Country' },
            state: { value: '', label: 'State' },
            city: { value: '', label: 'City' },
            otp: '',
            modalName: true,
            registermodal1: '',
            registermodal2: false,
            logo: '',
            registerTab: '',



            // 29 September
            userSetup: false,
            userStepper: 1,
            homePicks: { value: '', label: 'Country' },
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
        }
    }

    componentDidMount() {

    }

    otpGet = (otp) => this.setState({ otp });

    handleChange = (selectedOption, stateKey) => {
        this.setState({ [stateKey]: selectedOption });
        console.log(stateKey);
    };
    fileUploader = (e) => {
        this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
        console.log(URL.createObjectURL(e.target.files[0]));
    };


    toggleTab = (value) => {
        this.setState({ tabValue: value })
    }

    register = (val, tabValue) => {
        this.setState({ regVal: val, registerTab: tabValue })
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

    stepChanger = (step) => {
        this.setState({ userStepper: step })
    }

    changeSetting = (obj, key, status) =>{
        let arr = [...this.state.otherSetting]

        arr[key].status = status;

        this.setState({otherSetting: arr})
        
        // console.log(arr[key].status, "array")
    }

    // Submit data

    submitData = () => {
        let {email, name, last_name, phone} = this.state;

        let data = {
            email: 'aaqib123@gmail.com',
            password: '123456',
            mobile_code: '91',
            phone_number: '1234567890',
            country_name: 'india',
            state_id: '452016',
            state_name: 'mp',
            city_id: '422010',
            city_name: 'indore',
            role: 'Citizen',
            firstname: 'test',
            lastname: 'test',
            username: 'test123'

        }

        Http.post(Api.REGISTER , data)
            .then(res => {
                console.log(res, 'APi response')
                // if(res.status == 200){
                //     notify.show(res.message, "success", 2500);
                //     this.sendOtp()
                // }else{
                //     notify.show(res.message, "error", 2500);
                // }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        const { tabValue, password, confirmPass, state,
            city, regVal, logo, banner, registerTab, userStepper, otherSetting,
        } = this.state;


        return (

            <React.Fragment>



           

            </React.Fragment>

        )

    }
}

export default Setup;