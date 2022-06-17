import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Images } from 'Constant';
import './Sidebar.scss';
import Select from 'react-select';

const options4 = [
    { value: '', label: 'Language' },
    { value: 'English', label: 'English' },
    { value: 'Dutch', label: 'Dutch' },
    { value: 'Arabic', label: 'Arabic' },
];

class Sidebar extends React.Component {
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
        console.log(stateKey);
    };

    render() {
        const { selectedOption4 } = this.state;
        const { footer } = this.props;

        console.log(this.props.footer, "footer")

        return (

            <React.Fragment>

                <div className="sidebar">
                    <article className="text-center p_t_30 p_l_20 p_r_20">
                        <div className='m_b_30'>
                            <Link to="">
                                <img className="logopolice shadow" src={Images.policeLogo.default} alt="" />
                            </Link>
                        </div>

                        <h3 className="f20 color_white mx-50 mx-auto">
                            Whatcom County
                            Sheriff's Department
                        </h3>
                    </article>

                    <article className="menuWrapper">
                        <ul className='menu_area no_ul'>
                            <li>
                                <Link to="/homesetup" className="d-flex align-items-center">
                                    <svg className="m_r_20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                        <path id="Icon_material-dashboard" data-name="Icon material-dashboard" d="M4.5,14.5h8V4.5h-8Zm0,8h8v-6h-8Zm10,0h8v-10h-8Zm0-18v6h8v-6Z" transform="translate(-4.5 -4.5)" fill="#fff" />
                                    </svg>
                                    <span className="color_white f16">
                                        Home
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/setup" className="d-flex align-items-center">

                                    <svg className="m_r_20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                        <g id="Group_52114" data-name="Group 52114" transform="translate(-94.1 -112.5)">
                                            <path id="Icon_material-short-text" data-name="Icon material-short-text" d="M6,13.5H24v2.571H6Zm0,5.143H17.25v2.571H6Z" transform="translate(88.1 109.286)" fill="#fff" />
                                            <path id="Icon_material-short-text-2" data-name="Icon material-short-text" d="M6,13.5H24v2.571H6Zm0,5.143H17.25v2.571H6Z" transform="translate(88.1 99)" fill="#fff" />
                                        </g>
                                    </svg>

                                    <span className="color_white f16">
                                        Set-up
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="d-flex align-items-center">
                                    <svg className="m_r_20" xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21">
                                        <path id="Icon_material-live-help" data-name="Icon material-live-help" d="M20.5,3H6.5a2,2,0,0,0-2,2V19a2,2,0,0,0,2,2h4l3,3,3-3h4a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,20.5,3Zm-6,16h-2V17h2Zm2.07-7.75-.9.92A3.4,3.4,0,0,0,14.5,15h-2v-.5a4.025,4.025,0,0,1,1.17-2.83l1.24-1.26A1.955,1.955,0,0,0,15.5,9a2,2,0,0,0-4,0h-2a4,4,0,0,1,8,0,3.182,3.182,0,0,1-.93,2.25Z" transform="translate(-4.5 -3)" fill="#fff" />
                                    </svg>


                                    <span className="color_white f16">
                                        Help
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="d-flex align-items-center">
                                    <svg className="m_r_20" xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21">
                                        <path id="Icon_metro-language" data-name="Icon metro-language" d="M12.434,14.836q-.012.035-.146-.006t-.369-.135l-.234-.105a7.021,7.021,0,0,1-1.02-.574q-.082-.059-.48-.369t-.445-.334a19.964,19.964,0,0,1-1.57,2.121,8.712,8.712,0,0,1-1.23,1.289.929.929,0,0,1-.229.047.451.451,0,0,1-.217,0q.07-.047.961-1.078.246-.281,1-1.348a16.384,16.384,0,0,0,.92-1.383q.2-.352.6-1.154a9.135,9.135,0,0,0,.422-.908,9.63,9.63,0,0,0-1.289.387q-.094.023-.322.088t-.4.111a2.008,2.008,0,0,0-.2.059.2.2,0,0,0-.023.123.26.26,0,0,1-.012.111q-.059.117-.363.176a.945.945,0,0,1-.551,0,.494.494,0,0,1-.328-.246.6.6,0,0,1-.059-.27,2.264,2.264,0,0,1,.287-.059,3.5,3.5,0,0,0,.346-.07q.68-.188,1.23-.375,1.172-.41,1.2-.41a2.6,2.6,0,0,0,.5-.229,5.3,5.3,0,0,1,.516-.252q.105-.035.252-.094t.17-.064a.157.157,0,0,1,.07.006,1.334,1.334,0,0,1-.012.387,2.5,2.5,0,0,1-.146.316q-.146.293-.311.627t-.2.393a17.576,17.576,0,0,1-.9,1.535l.75.328q.141.07.873.375l.791.328q.047.012.123.3a.888.888,0,0,1,.053.357Zm-2.4-5.7a.475.475,0,0,1-.047.328,1.062,1.062,0,0,1-.586.445,1.881,1.881,0,0,1-.7.141.97.97,0,0,1-.574-.3.881.881,0,0,1-.211-.48l.012-.035a.5.5,0,0,0,.229.059,1.019,1.019,0,0,0,.311,0q.117-.023.68-.188a3.346,3.346,0,0,1,.645-.164.231.231,0,0,1,.246.2Zm8.18,1.512.738,2.66-1.629-.492ZM5.227,20.028l8.133-2.719V5.215L5.227,7.946V20.028ZM19.77,16.313l1.2.363-2.121-7.7-1.172-.363-2.531,6.281,1.2.363.527-1.289,2.473.762ZM13.875,5.039,20.59,7.2V2.743Zm3.645,15.5,1.852.152-.633,1.875L18.27,21.8a8.687,8.687,0,0,1-3.234,1.266,5.616,5.616,0,0,1-1.066.141h-.984a7.92,7.92,0,0,1-2.338-.457,7.782,7.782,0,0,1-2.15-1,.244.244,0,0,1-.094-.188.227.227,0,0,1,.059-.158.2.2,0,0,1,.152-.064.66.66,0,0,1,.211.088l.357.193q.193.105.24.129a10.383,10.383,0,0,0,1.869.721,6.828,6.828,0,0,0,1.846.287,10,10,0,0,0,1.957-.17A9.658,9.658,0,0,0,16.934,22q.176-.082.357-.182t.4-.223q.217-.123.334-.193ZM22.77,7.9V20.543L13.7,17.66q-.164.07-4.395,1.494T4.993,20.578a.212.212,0,0,1-.211-.152.09.09,0,0,0-.012-.035V7.758a.523.523,0,0,1,.047-.117.527.527,0,0,1,.234-.129Q6.293,7.1,6.8,6.926v-4.5l6.539,2.32q.023,0,1.881-.645t3.7-1.271Q20.766,2.2,20.813,2.2q.234,0,.234.246v4.9Z" transform="translate(-4.77 -2.203)" fill="#fff" />
                                    </svg>



                                    <span className="color_white f16">
                                        Languages
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/setting" className="d-flex align-items-center">
                                    <svg className='m_r_20' xmlns="http://www.w3.org/2000/svg" width="17.995" height="18" viewBox="0 0 17.995 18">
                                        <path id="Icon_ionic-ios-settings" data-name="Icon ionic-ios-settings" d="M21.01,13.5a2.316,2.316,0,0,1,1.486-2.16,9.179,9.179,0,0,0-1.111-2.676,2.347,2.347,0,0,1-.942.2,2.311,2.311,0,0,1-2.114-3.252A9.151,9.151,0,0,0,15.658,4.5a2.314,2.314,0,0,1-4.321,0A9.179,9.179,0,0,0,8.661,5.611,2.311,2.311,0,0,1,6.548,8.863a2.27,2.27,0,0,1-.942-.2A9.382,9.382,0,0,0,4.5,11.342a2.315,2.315,0,0,1,0,4.321,9.179,9.179,0,0,0,1.111,2.676,2.311,2.311,0,0,1,3.051,3.051A9.232,9.232,0,0,0,11.342,22.5a2.309,2.309,0,0,1,4.311,0,9.179,9.179,0,0,0,2.676-1.111,2.314,2.314,0,0,1,3.051-3.051,9.232,9.232,0,0,0,1.111-2.676A2.327,2.327,0,0,1,21.01,13.5Zm-7.47,3.744a3.749,3.749,0,1,1,3.749-3.749A3.748,3.748,0,0,1,13.54,17.242Z" transform="translate(-4.5 -4.5)" fill="#fff" />
                                    </svg>



                                    <span className="color_white f16">
                                        Settings
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link to="" className="d-flex align-items-center">
                                    <svg className='m_r_20' xmlns="http://www.w3.org/2000/svg" width="13.762" height="17.996" viewBox="0 0 13.762 17.996">
                                        <g id="Group_52113" data-name="Group 52113" transform="translate(-22 -14)">
                                            <path id="Path_471" data-name="Path 471" d="M29.873,17.982a2.381,2.381,0,1,1-1.789-.806c.05,0,.1,0,.152,0A2.366,2.366,0,0,1,29.873,17.982ZM35.762,14V28.026h-3.97V32H22V14ZM30.733,28.026H24.646v1.059h6.087Zm1.853-2.117H24.646v1.059h7.939Zm.748-1.853-2.47-2.47a3.439,3.439,0,1,0-2.992,1.405q.11.007.219.007a3.41,3.41,0,0,0,2.025-.662L32.586,24.8Zm-.484,7.675L35.5,29.085H32.851Z" transform="translate(0 0)" fill="#fff" />
                                        </g>
                                    </svg>



                                    <span className="color_white f16">
                                        Search Reports
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link to="" className="d-flex align-items-center">
                                    <svg className='m_r_20' xmlns="http://www.w3.org/2000/svg" width="20.571" height="18" viewBox="0 0 20.571 18">
                                        <path id="Icon_open-account-logout" data-name="Icon open-account-logout" d="M7.714,0V2.571H18V15.429H7.714V18H20.571V0ZM5.143,5.143,0,9l5.143,3.857V10.286H15.429V7.714H5.143Z" fill="#fff" />
                                    </svg>



                                    <span className="color_white f16">
                                        Logout
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </article>

                    <article className='text-center p_t_30 p_b_30'>
                        <h3 className="f20 color_white m_b_30 p_l_20 p_r_20">
                            Snap Send Report is Powered by <br/>
                            Flag Them LLC
                        </h3>
                        <div>
                            <Link to=""
                            >
                                <img src={Images.logogreenWhite.default} alt="" />
                            </Link>                        </div>


                    </article>

                    <article className='text-center p_t_20 p_b_20 bg_black'>
                        <p className="m_b_0 f16 color_white">
                        Copyright © 2021 Flagthem
                        </p>
                    </article>
                </div>
            </React.Fragment>

        )

    }
}

export default Sidebar;