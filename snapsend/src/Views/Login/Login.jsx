import { Api, Http } from "Helpers";
import Auth from "Helpers/Auth/Auth";
import Csc from "Helpers/Datas/CSC";
import RAlert from "Modals/RAlert";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [alert_message, setAlert_message] = useState("");
    const [alert_show, setAlert_show] = useState(false);
    const [alert_callback, setAlert_callback] = useState(() => { });


    const handleSubmit = (evt) => {
        evt.preventDefault();
        const data = {
            email: name,
            password: pass,
        }
        if (validateForm()) {
            const response = Http.post(Api.LOGIN, data, true);
            response.then(result => {
                if (result.status == "200") {
                    Auth.setAuth(result);
                   // alert('Loggedin successfully. Token is : ' + result.token);
                    window.location.pathname = "/profile";
                } else {
                    alert_toggle('Invalid User name and password.', () => {});
                }
            });
        }else{
            alert_toggle('Please enter email & password.', () => {});
        }
        //Csc.getCities("India", "Madhya Pradesh");

    }

    const alert_toggle = (message, callback) => {
        setAlert_message(message);
        setAlert_show(!alert_show);
        setAlert_callback(callback);

    }

    const alert_onOK = () => {
        setAlert_message('');
        setAlert_show(!alert_show);
    }

    const validateForm = () => {
        let val = false;
        if (name.trim() == '' || pass.trim() == '') {
            val = false;
        } else {
            val = true;
        }
        return val;
    }

    return (
        
        <section className="p_t_80 p_b_80 p_l_80 p_r_80">
            <div className="row justify-content-center">
            <RAlert open={alert_show} title={"Alert!"} okbutton={true} oktext="OK" toggle={() => alert_toggle(alert_message)} message={alert_message} onOK={alert_onOK} />
                <div className="col-md-6 col-lg-4">
                    <div className="wrapper_login m_b_110 p_lr_15_mob">
                        <div className="form_group">
                            <label htmlFor="" className="f16 color_black m_b_10">
                                Username or Email address
                            </label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                maxLength="255"
                                name="loginEmail"
                                minLength="3"
                                className=""
                                value={name}
                                type="text"
                                autoComplete="off"
                                placeholder="Enter user name or Email-Id" />
                        </div>

                        <div className="form_group">
                            <label htmlFor="" className="f16 color_black m_b_10">
                                Password
                            </label>
                            <input
                                onChange={(e) => setPass(e.target.value)}
                                maxLength="15"
                                name="loginEmail"
                                minLength="3"
                                className=""
                                value={pass}
                                autoComplete="off"
                                type="password"
                                placeholder="Password" />
                        </div>


                        <div className="form_group" onClick={handleSubmit}>
                            <button className="btn_theme w-100" >
                                Login to snapsend
                            </button>
                        </div>

                        <div className="text-center">
                            <p className="f16 color_grey">
                                No account? <Link className="color_jomney" to="/register">Create new account</Link>
                            </p>

                            <p className="f16 color_grey">
                                Forgot password? <Link className="color_jomney" to="/reset">Retrieve it here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Section02 />
        </section>

    );
}


const Section02 = () => {
    return (
        <>
        <div className="row justify-content-center p_lr_15_mob">
        <p className="color_grey f16 text-center col-md-6 col-lg-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has <Link className="color_jomney" to="">Help</Link>  not only five centuries, but also the leap into
            <Link className="color_jomney" to=""> Privacy Policy </Link>
            electronic typesetting.
        </p>
        </div>
      
        </>
    )
}


