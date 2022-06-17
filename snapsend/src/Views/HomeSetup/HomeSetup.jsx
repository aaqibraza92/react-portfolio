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

import "./HomeSetup.scss"
import react from 'react';


const assign = [
    {
        value: "", label: "Daren"
    },
    {
        value: "Demo", label: "Demo"
    },
    {
        value: "khan", label: "khan"
    },
]



class HomeSetup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: false,
            newpassword: false,
            confirmPass: false,
            assign: { value: "", label: "Assign" }

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

                            <div className="row">
                                <div className="col-md-12 col-lg-9">
                                    <div className="bg_white shadow radius p_t_30 p_l_10 p_r_10 p_b_10 p_t_10 m_b_30 p10_mob">

                                        <div className="m_b_10">
                                            <img className="img-fluid radius" src={Images.home_setup.default} alt="" />
                                        </div>


                                        <p className="f20 color_black">
                                            To make Whatcom Country the safest in the state through excellence in public safety.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-9">
                                    <div className="bg_white shadow radius p_t_30 p_l_30 p_r_30 p_b_30 p_t_30 m_b_30 p10_mob">
                                        <p className="f20 color_black m_b_10">
                                            Officeer Dan Whatcom
                                        </p>

                                        <ul className="no_ul m_b_20 li_fix">
                                            <li className="m_b_10">
                                                <a href="tel:360778 6623" className="d-flex align-items-center"> <svg className="m_r_10" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 17.865 17.895">
                                                    <path id="Icon_feather-phone-call" data-name="Icon feather-phone-call" d="M13.059,4.558a3.823,3.823,0,0,1,3.02,3.02M13.059,1.5a6.881,6.881,0,0,1,6.078,6.07m-.765,6.1v2.294a1.529,1.529,0,0,1-1.667,1.529,15.13,15.13,0,0,1-6.6-2.347A14.908,14.908,0,0,1,5.521,10.56,15.13,15.13,0,0,1,3.174,3.931,1.529,1.529,0,0,1,4.7,2.265H6.989A1.529,1.529,0,0,1,8.518,3.579a9.816,9.816,0,0,0,.535,2.148,1.529,1.529,0,0,1-.344,1.613l-.971.971A12.232,12.232,0,0,0,12.325,12.9l.971-.971a1.529,1.529,0,0,1,1.613-.344,9.816,9.816,0,0,0,2.148.535A1.529,1.529,0,0,1,18.373,13.671Z" transform="translate(-2.267 -0.506)" fill="none" stroke="#538234" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
                                                </svg>
                                                    <span className="color_black">
                                                        (360) 778 6623
                                                    </span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="mailto:sheriff@co.whatcom.wa.us" className="d-flex align-items-center">
                                                    <svg className="m_r_10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.882 17.3">
                                                        <g id="Icon_feather-mail" data-name="Icon feather-mail" transform="translate(-1.747 -5.1)">
                                                            <path id="Path_487" data-name="Path 487" d="M4.938,6h15.5a1.943,1.943,0,0,1,1.938,1.938V19.563A1.943,1.943,0,0,1,20.438,21.5H4.938A1.943,1.943,0,0,1,3,19.563V7.938A1.943,1.943,0,0,1,4.938,6Z" fill="none" stroke="#538234" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
                                                            <path id="Path_488" data-name="Path 488" d="M22.375,9l-9.687,6.781L3,9" transform="translate(0 -1.063)" fill="none" stroke="#538234" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
                                                        </g>
                                                    </svg>

                                                    <span className="color_black">
                                                        sheriff@co.whatcom.wa.us
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>

                                        <ul className="no_ul">
                                            <li className="m_b_10">
                                                <button className="btn_theme btn_black w-100">
                                                    New Public Notice
                                                </button>

                                            </li>

                                            <li>
                                                <button className="btn_theme btn_red w-100">
                                                    Post Amber Alert
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h3 class="f28 color_black f_bold">New Reports In</h3>

                            <div className="bg_white shadow radius p_t_30 p_l_30 p_r_30 p_b_30 m_b_30 p10_mob">
                                <div className="w-100 table-100 table_responsive">

                                    <table className="department_desk">
                                        <thead class="rc-table-thead">
                                            <tr><th class="rc-table-cell p_l_20">Serial no</th>
                                                <th class="rc-table-cell">Report ID</th>
                                                <th class="rc-table-cell">Case ID</th>
                                                <th class="rc-table-cell">
                                                    Location
                                                    <div className="d-flex justify-content-end p_r_10">

                                                    </div>
                                                </th>
                                                <th class="rc-table-cell">Report Date</th>
                                                <th class="rc-table-cell">Action</th>
                                            </tr>
                                        </thead>


                                        <tbody class="rc-table-tbody">

                                       
                                          
                                                    <tr data-row-key="1" class="rc-table-row rc-table-row-level-0">
                                                <td class="rc-table-cell p_l_20" >1</td>
                                                <td class="rc-table-cell">RID1998713002</td>
                                                <td>
                                                    CID01875433
                                                </td>
                                                <td>
                                                    Bellingham, Washington State, US
                                                </td>
                                                <td>
                                                    17 August 2021, 12:30pm
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Suspect
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Gang
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div>
                                                            <Select
                                                                value={this.state.assign}
                                                                onChange={(e) => this.handleChange(e, 'assign')}
                                                                options={assign}
                                                                classNamePrefix='custom_select bg_select'
                                                            />
                                                        </div>

                                                    </div>

                                                </td>

                                            </tr>

                                                   <tr data-row-key="1" class="rc-table-row rc-table-row-level-0">
                                                <td class="rc-table-cell p_l_20" >2</td>
                                                <td class="rc-table-cell">RID1998713002</td>
                                                <td>
                                                    CID01875433
                                                </td>
                                                <td>
                                                    Bellingham, Washington State, US
                                                </td>
                                                <td>
                                                    17 August 2021, 12:30pm
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Suspect
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Gang
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div>
                                                            <Select
                                                                value={this.state.assign}
                                                                onChange={(e) => this.handleChange(e, 'assign')}
                                                                options={assign}
                                                                classNamePrefix='custom_select bg_select'
                                                            />
                                                        </div>

                                                    </div>

                                                </td>

                                            </tr>

                                                   <tr data-row-key="1" class="rc-table-row rc-table-row-level-0">
                                                <td class="rc-table-cell p_l_20" >3</td>
                                                <td class="rc-table-cell">RID1998713002</td>
                                                <td>
                                                    CID01875433
                                                </td>
                                                <td>
                                                    Bellingham, Washington State, US
                                                </td>
                                                <td>
                                                    17 August 2021, 12:30pm
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Suspect
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Gang
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div>
                                                            <Select
                                                                value={this.state.assign}
                                                                onChange={(e) => this.handleChange(e, 'assign')}
                                                                options={assign}
                                                                classNamePrefix='custom_select bg_select'
                                                            />
                                                        </div>

                                                    </div>

                                                </td>

                                            </tr>

                                                   <tr data-row-key="1" class="rc-table-row rc-table-row-level-0">
                                                <td class="rc-table-cell p_l_20" >4</td>
                                                <td class="rc-table-cell">RID1998713002</td>
                                                <td>
                                                    CID01875433
                                                </td>
                                                <td>
                                                    Bellingham, Washington State, US
                                                </td>
                                                <td>
                                                    17 August 2021, 12:30pm
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Suspect
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Gang
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div>
                                                            <Select
                                                                value={this.state.assign}
                                                                onChange={(e) => this.handleChange(e, 'assign')}
                                                                options={assign}
                                                                classNamePrefix='custom_select bg_select'
                                                            />
                                                        </div>

                                                    </div>

                                                </td>

                                            </tr>

                                                    <tr data-row-key="1" class="rc-table-row rc-table-row-level-0">
                                                <td class="rc-table-cell p_l_20" >5</td>
                                                <td class="rc-table-cell">RID1998713002</td>
                                                <td>
                                                    CID01875433
                                                </td>
                                                <td>
                                                    Bellingham, Washington State, US
                                                </td>
                                                <td>
                                                    17 August 2021, 12:30pm
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Suspect
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Gang
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div>
                                                            <Select
                                                                value={this.state.assign}
                                                                onChange={(e) => this.handleChange(e, 'assign')}
                                                                options={assign}
                                                                classNamePrefix='custom_select bg_select'
                                                            />
                                                        </div>

                                                    </div>

                                                </td>

                                            </tr>

                                                   <tr data-row-key="1" class="rc-table-row rc-table-row-level-0">
                                                <td class="rc-table-cell p_l_20" >6</td>
                                                <td class="rc-table-cell">RID1998713002</td>
                                                <td>
                                                    CID01875433
                                                </td>
                                                <td>
                                                    Bellingham, Washington State, US
                                                </td>
                                                <td>
                                                    17 August 2021, 12:30pm
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Suspect
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Gang
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div>
                                                            <Select
                                                                value={this.state.assign}
                                                                onChange={(e) => this.handleChange(e, 'assign')}
                                                                options={assign}
                                                                classNamePrefix='custom_select bg_select'
                                                            />
                                                        </div>

                                                    </div>

                                                </td>

                                            </tr>

                                                   <tr data-row-key="1" class="rc-table-row rc-table-row-level-0">
                                                <td class="rc-table-cell p_l_20" >7</td>
                                                <td class="rc-table-cell">RID1998713002</td>
                                                <td>
                                                    CID01875433
                                                </td>
                                                <td>
                                                    Bellingham, Washington State, US
                                                </td>
                                                <td>
                                                    17 August 2021, 12:30pm
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Suspect
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Gang
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div>
                                                            <Select
                                                                value={this.state.assign}
                                                                onChange={(e) => this.handleChange(e, 'assign')}
                                                                options={assign}
                                                                classNamePrefix='custom_select bg_select'
                                                            />
                                                        </div>

                                                    </div>

                                                </td>

                                            </tr>

                                                   <tr data-row-key="1" class="rc-table-row rc-table-row-level-0">
                                                <td class="rc-table-cell p_l_20" >8</td>
                                                <td class="rc-table-cell">RID1998713002</td>
                                                <td>
                                                    CID01875433
                                                </td>
                                                <td>
                                                    Bellingham, Washington State, US
                                                </td>
                                                <td>
                                                    17 August 2021, 12:30pm
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Suspect
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Gang
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div>
                                                            <Select
                                                                value={this.state.assign}
                                                                onChange={(e) => this.handleChange(e, 'assign')}
                                                                options={assign}
                                                                classNamePrefix='custom_select bg_select'
                                                            />
                                                        </div>

                                                    </div>

                                                </td>

                                            </tr>

                                                     <tr data-row-key="1" class="rc-table-row rc-table-row-level-0">
                                                <td class="rc-table-cell p_l_20" >9</td>
                                                <td class="rc-table-cell">RID1998713002</td>
                                                <td>
                                                    CID01875433
                                                </td>
                                                <td>
                                                    Bellingham, Washington State, US
                                                </td>
                                                <td>
                                                    17 August 2021, 12:30pm
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Suspect
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div className="m_r_10">
                                                            <button className="btn_theme btn_transparent_green btn_sm d-flex align-items-center">
                                                                <svg className="m_r_10" id="Group_53152" data-name="Group 53152" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 11">
                                                                    <line id="Line_89" data-name="Line 89" y2="11" transform="translate(5.5)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                    <line id="Line_90" data-name="Line 90" y2="11" transform="translate(11 5.5) rotate(90)" fill="none" stroke="#538234" stroke-width="1.5" />
                                                                </svg>

                                                                <span>
                                                                    Gang
                                                                </span>

                                                            </button>
                                                        </div>
                                                        <div>
                                                            <Select
                                                                value={this.state.assign}
                                                                onChange={(e) => this.handleChange(e, 'assign')}
                                                                options={assign}
                                                                classNamePrefix='custom_select bg_select'
                                                            />
                                                        </div>

                                                    </div>

                                                </td>

                                            </tr>
                                          
                                          
                                    

                                            

                                         


                                        </tbody>
                                    </table>

                                    <div className="pagination_table d-flex justify-content-center align-items-center p_t_20 p_b_20">
                                        <ul className="no_ul d-flex justify-content-center align-items-center pagi">
                                            <li className="numbers">
                                                <button className="color_black f16">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 5.811 10.121">
                                                        <g id="Group_5513" data-name="Group 5513" transform="translate(-7.75 -1.439)">
                                                            <path id="Path_94" data-name="Path 94" d="M22,7.5l-4,4,4,4" transform="translate(-9.499 -5)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                        </g>
                                                    </svg>

                                                </button>
                                            </li>
                                            <li className="numbers">
                                                <button className="color_black f16">
                                                    1
                                                </button>
                                            </li>
                                            <li className="numbers">
                                                <button className="color_black f16">
                                                    2
                                                </button>
                                            </li>
                                            <li className="numbers ">
                                                <button className="color_black f16">
                                                    3
                                                </button>
                                            </li>
                                            <li className="numbers">
                                                <button className="color_black f16">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 5.811 10.121">
                                                        <g id="Group_5512" data-name="Group 5512" transform="translate(-1584.439 -1359.487)">
                                                            <path id="Path_94" data-name="Path 94" d="M18,7.5l4,4-4,4" transform="translate(1567.5 1353.048)" fill="none" stroke="#272833" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                        </g>
                                                    </svg>

                                                </button>
                                            </li>
                                        </ul>

                                        <div className="color_black f16 m_l_15">
                                            of 2,982
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

export default HomeSetup;