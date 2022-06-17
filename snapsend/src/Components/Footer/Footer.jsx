import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Images } from 'Constant';
import './Footer.scss';
import Select from 'react-select';

const options4 = [
    { value: '', label: 'Language' },
    { value: 'English', label: 'English' },
    { value: 'Dutch', label: 'Dutch' },
    { value: 'Arabic', label: 'Arabic' },
];

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption4: { value: '', label: 'Language' },

        }
    }

    componentDidMount = () => {

    }
    handleChange = (selectedOption, stateKey) => {
        this.setState({ [stateKey]: selectedOption });
    };

    render() {
        const { selectedOption4 } = this.state;
        const { footer } = this.props;


        return (

            <React.Fragment>

                {
                    footer == 'none' ? ''
                        :
                        <footer className="footer_main">
                            <div className="container">
                                <div className="footer_logo text-center">
                                    <Link to="/"> <img src={Images.FooterLogo.default} alt="" /></Link>

                                </div>

                                <ul className="footer_menu d-flex no_ul m_b_35 flex-wrap">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">Register</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/membership">Become a Member</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy"> Privacy</Link>
                                    </li>
                                    <li>
                                        <Link to="/help"> Help</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact"> Contact Us</Link>
                                    </li>
                                    <li className="filter_area lang_footer language_style">
                                        <Select
                                            value={selectedOption4}
                                            onChange={(e) => this.handleChange(e, 'selectedOption4')}
                                            options={options4}
                                            classNamePrefix='sel_style'
                                        />
                                    </li>
                                </ul>

                                <ul className="footer_social no_ul d-flex m_b_35">
                                    <li>
                                        <a href="#" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12.912" height="24" viewBox="0 0 12.912 24">
                                                <path id="Icon_zocial-facebook" data-name="Icon zocial-facebook" d="M13.257,12.888V8.3h3.7V6a6.031,6.031,0,0,1,1.619-4.248A5.151,5.151,0,0,1,22.5,0h3.672V4.584H22.5a.809.809,0,0,0-.647.4,1.608,1.608,0,0,0-.288.972V8.3h4.607v4.583H21.561V24H16.953V12.888Z" transform="translate(-13.257)" fill="#fff" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29.55" height="24" viewBox="0 0 29.55 24">
                                                <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M26.513,9.362c.019.262.019.525.019.788,0,8.006-6.094,17.231-17.231,17.231A17.114,17.114,0,0,1,0,24.662a12.529,12.529,0,0,0,1.462.075A12.129,12.129,0,0,0,8.981,22.15a6.067,6.067,0,0,1-5.663-4.2,7.638,7.638,0,0,0,1.144.094,6.405,6.405,0,0,0,1.594-.206A6.057,6.057,0,0,1,1.2,11.893v-.075a6.1,6.1,0,0,0,2.737.769,6.065,6.065,0,0,1-1.875-8.1A17.215,17.215,0,0,0,14.55,10.824a6.837,6.837,0,0,1-.15-1.387A6.062,6.062,0,0,1,24.881,5.293a11.924,11.924,0,0,0,3.844-1.462,6.04,6.04,0,0,1-2.663,3.337,12.141,12.141,0,0,0,3.487-.937,13.019,13.019,0,0,1-3.037,3.131Z" transform="translate(0 -3.381)" fill="#fff" />
                                            </svg>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16.875" viewBox="0 0 24 16.875">
                                                <path id="Icon_awesome-youtube" data-name="Icon awesome-youtube" d="M24.548,7.14A3.016,3.016,0,0,0,22.427,5c-1.872-.5-9.377-.5-9.377-.5s-7.5,0-9.377.5A3.016,3.016,0,0,0,1.551,7.14a31.635,31.635,0,0,0-.5,5.814,31.635,31.635,0,0,0,.5,5.814,2.971,2.971,0,0,0,2.122,2.1c1.872.5,9.377.5,9.377.5s7.5,0,9.377-.5a2.971,2.971,0,0,0,2.122-2.1,31.635,31.635,0,0,0,.5-5.814,31.635,31.635,0,0,0-.5-5.814ZM10.6,16.523V9.386l6.273,3.569L10.6,16.523Z" transform="translate(-1.05 -4.5)" fill="#fff" />
                                            </svg>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path id="Icon_simple-instagram" data-name="Icon simple-instagram" d="M12,0C8.74,0,8.333.015,7.053.072A8.849,8.849,0,0,0,4.14.63,5.876,5.876,0,0,0,2.014,2.014,5.855,5.855,0,0,0,.63,4.14,8.823,8.823,0,0,0,.072,7.053C.012,8.333,0,8.74,0,12s.015,3.667.072,4.947A8.854,8.854,0,0,0,.63,19.86a5.885,5.885,0,0,0,1.384,2.126A5.868,5.868,0,0,0,4.14,23.37a8.86,8.86,0,0,0,2.913.558C8.333,23.988,8.74,24,12,24s3.667-.015,4.947-.072a8.88,8.88,0,0,0,2.913-.558,6.133,6.133,0,0,0,3.51-3.51,8.854,8.854,0,0,0,.558-2.913C23.988,15.667,24,15.26,24,12s-.015-3.667-.072-4.947A8.875,8.875,0,0,0,23.37,4.14a5.89,5.89,0,0,0-1.384-2.126A5.847,5.847,0,0,0,19.86.63,8.828,8.828,0,0,0,16.947.072C15.667.012,15.26,0,12,0Zm0,2.16c3.2,0,3.585.016,4.85.071a6.611,6.611,0,0,1,2.227.415,3.949,3.949,0,0,1,2.278,2.277,6.625,6.625,0,0,1,.413,2.227c.057,1.266.07,1.646.07,4.85s-.015,3.585-.074,4.85a6.753,6.753,0,0,1-.421,2.227,3.81,3.81,0,0,1-.9,1.382,3.744,3.744,0,0,1-1.38.9,6.674,6.674,0,0,1-2.235.413c-1.274.057-1.649.07-4.859.07s-3.586-.015-4.859-.074a6.8,6.8,0,0,1-2.236-.421,3.716,3.716,0,0,1-1.379-.9,3.644,3.644,0,0,1-.9-1.38,6.81,6.81,0,0,1-.42-2.235c-.045-1.26-.061-1.649-.061-4.844s.016-3.586.061-4.861A6.8,6.8,0,0,1,2.6,4.89a3.557,3.557,0,0,1,.9-1.381,3.549,3.549,0,0,1,1.379-.9A6.642,6.642,0,0,1,7.1,2.19c1.275-.045,1.65-.06,4.859-.06L12,2.16Zm0,3.678A6.162,6.162,0,1,0,18.162,12,6.162,6.162,0,0,0,12,5.838ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM19.846,5.6a1.44,1.44,0,1,1-1.44-1.439A1.441,1.441,0,0,1,19.846,5.6Z" fill="#fff" />
                                            </svg>


                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="copyright_area text-center color">
                                Copyright © 2021 Snap send
                            </div>
                        </footer>
                }

            </React.Fragment>

        )

    }
}

export default Footer;