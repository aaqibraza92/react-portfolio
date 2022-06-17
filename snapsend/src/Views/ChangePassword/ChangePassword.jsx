import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Images } from 'Constant';
import Slider from "react-slick";
import Select from 'react-select';

import CmnButton from 'Components/CmnButton';
import CmnInput from 'Components/CmnInput';


import "./ChangePassword.scss"
import react from 'react';



class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: false,
            confirmPass: false
        }
    }

    componentDidMount = () => {

    }



    handleChange = (selectedOption, stateKey) => {
        this.setState({ [stateKey]: selectedOption });
        console.log(stateKey);
    };





    register = (val) => {
        //console.log(val)
        this.setState({ regVal: val })
    }


    togglePassword = (value) => {
        this.setState({ [value]: !this.state[value] });
    }
    inputChange = (e) => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });


    }

    render() {

        const { password, confirmPass, success } = this.state;


        return (

            <React.Fragment>



                <section className="p_t_80 p_b_80">
                    <div className="container">


                        <div className="row justify-content-center">

                            <div className="col-md-6">



                                {
                                    success ?
                                        <div className="wrapper_success text-center">
                                            <svg className="m_b_30" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
                                                <g id="Group_390" data-name="Group 390" transform="translate(-896 -214)">
                                                    <circle id="Ellipse_71" data-name="Ellipse 71" cx="64" cy="64" r="64" transform="translate(896 214)" fill="#40c390" />
                                                    <path id="Icon_feather-check" data-name="Icon feather-check" d="M43.866,9,17.833,35.033,6,23.2" transform="translate(935.5 255.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
                                                </g>
                                            </svg>
                                            <h3 class="f40 color_black f_bold m_b_20 ">Password changed <br /> successfully</h3>
                                            <p class="color_grey f18 mb-4">Your profile password has been updated</p>

                                            <Link to='/login' className='btn_theme d-inline-block'>Go to login</Link>

                                        </div>
                                        :
                                        <div className="chng_section">
                                            <div className="text-center wrapper_logg m_b_30_mob">
                                                <h3 className="f40 color_black f_bold m_b_20">
                                                    Change password
                                                </h3>
                                                <p className="color_grey f18">
                                                    Enter your email to get instructions
                                                </p>
                                            </div>


                                            <div className="wrapper_login m_b_110">

                                                <div className="form_group m_b_30">
                                                    <label htmlFor="" className="f16 color_black m_b_10">
                                                        New password
                                                    </label>
                                                    <CmnInput onChange={this.inputChange} maxLength="15" name="newpassword" minLength="3" className="asdasd" value={this.state.newpassword || ''} type="password" placeholder="*******" />
                                                    {/* {this.state.loginEmail || ''} */}
                                                </div>

                                                <div className="form_group m_b_30">
                                                    <label htmlFor="" className="f16 color_black m_b_10">
                                                        Confirm new password
                                                    </label>
                                                    <CmnInput onChange={this.inputChange} maxLength="15" name="confirmpassword" minLength="3" className="asdasd" value={this.state.confirmpassword || ''} type="password" placeholder="*******" />
                                                    {/* {this.state.loginEmail || ''} */}
                                                </div>

                                                <div className="form_group">
                                                    <button className="btn_theme w-100" onClick={()=> this.setState({success: true})}>
                                                        Change password
                                                    </button>
                                                </div>


                                            </div>
                                        </div>
                                }




                            </div>


                        </div>


                    </div>
                </section>

            </React.Fragment>

        )

    }
}

export default ChangePassword;