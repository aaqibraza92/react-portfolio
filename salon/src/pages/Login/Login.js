import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import GLogin from "../../components/Layout/GLogin";
import Img from "../../assets/Img/Img";
import {userLogin} from  "../../helpers/backend/index";
import Auth from "../../helpers/Auth/Auth";
import GImage from "../../components/Layout/GImage/GImage";
import { loginUser } from "../../store/action"
import LoginAction from "../../components/Authentication/LoginAction";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Svg from "../../assets/svg/Svg";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import Cookies from 'js-cookie';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');
  const [loginData, setLoginData] = useState('');
  
  
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  useEffect(()=>{
    LoginPost()
  })

  useEffect(() => {
   
    window.scrollTo({ top: 0, behavior: 'smooth' });
}, [])


  const LoginPost=()=>{
    try{
     
      const iData={
          username : "srbackendpixbrand@gmail.com",
          password : "Password@123"
      }
      // userLogin(iData).then((res)=>{
      //   Auth.setToken(res.data.token);
      //   console.log("login res",res);
      // })
    }catch(e){
    
    }
  }

  
   //========================================  login with Facebook  ========================

   const HOME_URL = "http://97.74.83.126:15357/api/"

     const responseFacebook = async (response) => {
          console.log("login result",response);
      try {

          const res = await axios.post(`${HOME_URL}socialLogin`, {
              "firstName": response?.name,
              "lastName": response?.name,
              "email" : response?.email,
              "mobile": response?.mobile,
              "socialID" : response?.id,
              "socialtype": "Facebook"
          });
          if (res.data.success === true) {
              // Cookies.set('loginSuccess', JSON.stringify(res.data));
              setLoginData(res.data)
              toast.success(res.data.msg)
          }
         } catch (err) {
                 toast.success(err.response.data.msg)
      }
  }

 
   //========================================  login with Google  ========================

const responseGoogle = async (response) => {
  if (response.profileObj?.email) {
      try {
          const res = await axios.post(`${HOME_URL}socialLogin`, {
                "email": response.profileObj?.email,
                "firstName": response.profileObj?.name,
                "socialtype": "Gmail"
          });
         
          // Cookies.set('loginSuccess', JSON.stringify(res.data));
          setLoginData(res.data)
          

          toast.success(res.data.msg)

      } catch (err) {
        
          toast.success(err.response.data?.msg)
      }
  }
}








  return (
    <Container className="pt_45 pb_45">
      <Row>
        <Col className="m-auto" md="10">
          <Row>
            <Col md="5">
              <GImage className="w-100" src={Img.signup} />
            </Col>
            <Col md="7">
            {/* <GLogin /> */}
            <Container>
        <Row>
          <Col md="12" className="pt_35">
            <h2 className="lm mb30"> {t("loginAccount")}</h2>
            <Row>
              <Col md="12">
                <Row>
                  <Col md="6">
                    <div className="w100Child">
                     {/* <Link className="w-100 p_10 bg_blue tab_two " to="#">
                        {Svg.facebook} <span>Facebook</span>
                      </Link>  */}
                          <FacebookLogin
                          className="w-100  p_10 bg_blue tab_two"
                          appId="742456133589477"
                          icon={false}
                          textButton="Facebook"
                          fields="name,email,picture"
                          callback={responseFacebook}
                          icon="fa-facebook" /> 

                    </div>
                  </Col>  
                  <Col md="6">
                    <div className="h-100">
                      
                       {/* <Link
                        className="w-100 p_10 bg_border_black tab_two_g tab_two"
                        to="#"
                      >
                        {Svg.gmail} <span>Gmail</span>
                      </Link>  */}

                                      <GoogleLogin
                                      className="w-100  h-100 p_10 bg_border_black tab_two_g"
            clientId="963491977627-e0jfjq6cv2emcgn77nv6nquckj2a012g.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
           onFailure={responseGoogle}
           cookiePolicy={'single_host_origin'}
           isSignedIn={true}
           />

                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md="12" className="position-relative text-center pt_35 mb20">
                <p className="mb-0 login_bg">or login with</p>
                <div className="border-bottom"></div>
              </Col>
              <LoginAction />
              </Row>
          </Col>
        </Row>
      </Container>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  );
};

export default Login;
