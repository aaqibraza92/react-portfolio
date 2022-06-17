import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Images } from 'Constant';
import Slider from "react-slick";
import Select from 'react-select';

import CmnButton from 'Components/CmnButton';
import CmnInput from 'Components/CmnInput';


import "./Reset.scss"
import react from 'react';
import { Api, Http } from 'Helpers';



class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: false,
            confirmPass: false,
            loginEmail:''
        }
    }

    // My Methods
    componentDidMount = () => {

    }

    submitResetPassword = () => {
        const iData= {
            email: 'er.rvtech@gmail.com'
        }
        Http.post(Api.FORGETPASSWORD, iData, true).then((result) => {
            console.log(result)
            
        });
    }

    // My Methods Close

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

        const { password, confirmPass } = this.state;


        return (

            <React.Fragment>



                <section className="p_t_80 p_b_80">
                    <div className="container">


                        <div className="row justify-content-center">

                            <div className="col-md-6">

                                <div className="text-center wrapper_logg m_b_30_mob">
                                    <h3 className="f40 color_black f_bold m_b_20">
                                    Reset password
                                    </h3>
                                    <p className="color_grey f18">
                                    Enter your email to get instructions
                                    </p>
                                </div>


                                <div className="wrapper_login">
                                    <div className="form_group">
                                        <label htmlFor="" className="f16 color_black m_b_10">
                                            Username or Email address
                                        </label>
                                        <CmnInput onChange={this.inputChange} maxLength="50" name="loginEmail" minLength="3" className="asdasd" value={this.state.loginEmail || ''} type="email" placeholder="fleta.goodw@yahoo.com" />
                                        {/* {this.state.loginEmail || ''} */}
                                    </div>


                                    <div className="form_group">
                                        <button className="btn_theme w-100" onClick={() => this.submitResetPassword()}>
                                        Send instructions
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <p className="f16 color_grey">
                                        Remembered the password? <Link className="color_jomney" to="/login"> Log in here</Link>
                                        </p>
                                        <p className="f16 color_grey">
                                        Change password? <Link className="color_jomney" to="/changepassword"> Change</Link>
                                        </p>
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

export default Reset;