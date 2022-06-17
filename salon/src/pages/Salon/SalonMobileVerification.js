import React from 'react'
import { Col, Container, Row } from "reactstrap";
import ResetPasswordAction from '../../components/Authentication/ResetPasswordAction';
import GImage from "../../components/Layout/GImage/GImage";
import Img from "../../assets/Img/Img";
import { useTranslation } from "react-i18next";
import "./SalonLogin.css";
import SaloonAuthFooter from "../../components/SalonAuthFooter/SalonAuthFooter";
import OtpVerify from "../../components/OtpVerify/OtpVerify";
const SalonMobileVerification = (props) => {
  
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const getState=(val)=>{
}
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
                <OtpVerify iconImage={Img.mobverify.default} getStateFromComp={getState}  heading="Verify mobile number" text="Phew, an email is now winging its way to you with instructions about."/>
            </Col>
          </Row>
          <SaloonAuthFooter />
        </section>
      </Container>
    </div>
    </>
  )
}

export default SalonMobileVerification