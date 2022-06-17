import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../../assets/Img/Img";
import GAlign from "../../../../components/Layout/GAlign";
import GButton from "../../../../components/Layout/GButton";
import GCheckbox from "../../../../components/Layout/GCheckbox";
import GIconInput from "../../../../components/Layout/GIconInput";
import GImage from "../../../../components/Layout/GImage/GImage";
import GLink from "../../../../components/Layout/GLink";
import GPasswordInput from "../../../../components/Layout/GPasswordInput";
import SaloonAuthFooter from "../SaloonAuthFooter/SaloonAuthFooter";
import "./SalonLogin.css";

const SalonLogin = () => {
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [remain, setremain] = useState(false);

  useEffect(() => {
    document.body.className = "bodyBgImg";
    return () => {
      document.body.className = "";
    };
  });

  const clearStates = () => {
    mobile("");
    password("");
    remain("");
  };

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
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
                <GIconInput
                  type="text"
                  label={t("MobileEmail")}
                  placeholder={t("Email")}
                  value={mobile}
                  onChange={(e) => setmobile(e.target.value)}
                />
                <GPasswordInput
                  label={t("Password")}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <GAlign
                  align="between"
                  alignV="center"
                  className="mb30 mobMb15"
                >
                  <GCheckbox
                    id="Remain"
                    label={t("Remain")}
                    value={remain}
                    onChange={(e) => setremain(e.target.checked)}
                  />
                  <GLink to="#" text={t("Reset")} color="#5b5d6b"></GLink>
                </GAlign>
                <GButton width="100%" mb="15px">
                  {t("Login")}
                </GButton>
                <p className="fs15 colorGrey mb20 mobMb10 text-center">
                  {t("Notyet")}
                </p>
                <GButton
                  color="#000"
                  hoveColor="#000"
                  hoverBg="#fff"
                  backgroundColor="#fff"
                  border="1px solid #000"
                  hoverBorder="1px solid #000"
                  fs="16px"
                  className="lm"
                  width="100%"
                >
                  {t("CreateAccount")}
                </GButton>
              </section>
            </Col>
          </Row>
          <SaloonAuthFooter />
        </section>
      </Container>
    </div>
  );
};

export default SalonLogin;
