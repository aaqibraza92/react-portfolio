import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import Img from "../../assets/Img/Img";
import GButton from "../../components/Layout/GButton";
import GIconInput from "../../components/Layout/GIconInput";
import GImage from "../../components/Layout/GImage/GImage";
import GLink from "../../components/Layout/GLink";
import SaloonAuthFooter from "../../components/SalonAuthFooter/SalonAuthFooter";
import "./SalonLogin.css";
import ForgotPasswordAction from '../../components/Authentication/ForgotPasswordAction'
const SalonForgotPassword = () => {
  const [mobile, setmobile] = useState("");

  const clearStates = () => {
    mobile("");
  };

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
    <div className="salon-reset-password">
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
                  <h3 className="fs24 lb mb10">{t("Resetyourpassword")}</h3>
                  <p className="fs14 colorGrey mb20 mobMb10">
                    {t("Newpasswword")}
                  </p>
                </div>
                <GIconInput
                  type="text"
                  label={t("MobileEmail")}
                  placeholder={t("Email")}
                  value={mobile}
                  onChange={(e) => setmobile(e.target.value)}
                />
                <GButton width="100%" mb="15px">
                  {t("Requestsend")}
                </GButton>
                <div className="text-center">
                  <span className="fs15 colorGrey mb20 mobMb10 mr10">
                    {t("Donthave")}
                  </span>
                  <GLink to="/become-provider" text={t("Register")}></GLink>
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

export default SalonForgotPassword