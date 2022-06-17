import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Images } from 'Constant';
import Slider from "react-slick";
import Select from 'react-select';

import CmnButton from 'Components/CmnButton';
import CmnInput from 'Components/CmnInput';


import "./Error.scss"



class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {


        return (

            <React.Fragment>

                <section id="error_section" className='error_section'>
                    <div className=''>
                        <img src={Images.error.default} alt="" className='mb-5' />

                        <div className='content text-center'>
                            <h3 className="f40 f400 color_red mb-3">
                                Something is wrong!
                            </h3>
                            <p className="f24 f400 color_white mb-4">We can't seem to find the page you are looking for</p>
                            <p className="f18 f400 color_light_white mb-3">Here are some helpful link instead:</p>

                            <ul className='links d-flex justify-content-center no_ul'>
                                <li><Link to='/' className='f18 f400 color_white'>Home</Link></li>
                                <li><Link to='/' className='f18 f400 color_white'>About Us</Link></li>
                                <li><Link to='/' className='f18 f400 color_white'>Help</Link></li>
                                <li><Link to='/' className='f18 f400 color_white'>Contact</Link></li>
                            </ul>

                        </div>

                    </div>
                </section>

            </React.Fragment>

        )

    }
}

export default Error;