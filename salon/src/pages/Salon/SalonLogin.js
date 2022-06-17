import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import LoginAction from "../../components/Authentication/LoginAction";
import { useTranslation } from "react-i18next";
import SaloonAuthFooter from "../../components/SalonAuthFooter/SalonAuthFooter";
import Img from "../../assets/Img/Img";
import GAlign from "../../components/Layout/GAlign";
import GButton from "../../components/Layout/GButton";
import GCheckbox from "../../components/Layout/GCheckbox";
import GIconInput from "../../components/Layout/GIconInput";
import GImage from "../../components/Layout/GImage/GImage";
import GLink from "../../components/Layout/GLink";
import GPasswordInput from "../../components/Layout/GPasswordInput";
import { useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { notify } from "react-notify-toast";
import { postAuthLogin } from "../../store/auth/login/actions";
import "./SalonLogin.css";
const SalonLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [remain, setremain] = useState(false);

  useEffect(() => {
    document.body.className = "bodyBgImg";
    return () => {
      document.body.className = "";
    };
  });

  const callback = (resp) => {
    console.log("respeee", resp);
    if(resp && resp.status && resp.status===201){
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
    }
    if(resp && resp.status && resp.status===200){
  
    }
    if(resp && resp.status && resp.status===203){
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
     navigate('/mobile-verification');
    }

   
  };

  const clearStates = () => {
    mobile("");
    password("");
    remain("");
  };

  const submitCall=()=>{
    console.log("aaa");
    const iData = {
      username: mobile,
      password: password,
    };
    dispatch(postAuthLogin(iData, callback));
  }

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <>
    <div className="salon-login">
      <Container>
        <section>
          <div className="text-center">
            <div className="mb20 mobMb10">
              <GImage src={Img.whitelogo} />
            </div>
            <h2 className="fs28 mobFs20 lb colorWhite mb15">{t("Connect")}</h2>
          </div>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5} xxl={5}>
              <section className="bgWhite pl25 pr25 pt25 pb30 radius4 mb60">
                <div className="text-center">
                  <h3 className="fs24 lb mb10">{t("Welcome")}</h3>
                  <p className="fs14 colorGrey mb20 mobMb10">
                    {t("Credentials")}
                  </p>
                </div>
                <LoginAction />
                <p className="fs15 colorGrey mb20 mobMb10 text-center">
                  {t("Notyet")}
                </p>
                <div className="mx-auto text-center">
                <GLink to="/become-provider" className="btnTransparent w-100"  text={t("CreateAccount")} />
                </div>
     
              </section>
            </Col>
          </Row>
          <SaloonAuthFooter />
        </section>
      </Container>
    </div>
    </>
  )
}

export default SalonLogin