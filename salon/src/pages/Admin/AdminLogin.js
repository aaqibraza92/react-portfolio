import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import Img from "../../assets/Img/Img";
import LoginAction from "../../components/Authentication/LoginAction";
import GAlign from "../../components/Layout/GAlign";
import GButton from "../../components/Layout/GButton";
import GCheckbox from "../../components/Layout/GCheckbox";
import GIconInput from "../../components/Layout/GIconInput";
import GImage from "../../components/Layout/GImage/GImage";
import GLink from "../../components/Layout/GLink";
import GPasswordInput from "../../components/Layout/GPasswordInput";


const AdminLogin = () => {
  const [year, setyear] = useState(null);
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [remain, setremain] = useState(false);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setyear(currentYear);
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
          </div>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5} xxl={5}>
              <section className="bgWhite pl25 pr25 pt25 pb30 radius4 mb60">
                <div className="text-center">
                  <h3 className="fs24 lb mb10">{t("loginAccount")}</h3>
                  <p className="fs14 colorGrey mb20 mobMb10">
                    {t("Credentials")}
                  </p>
                </div>
                <LoginAction />
              </section>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10} lg={8} xl={7} xxl={6}>
              <ul className="noUl mb0">
                <GAlign align="between" mobWrap="wrap">
                  <li>
                    <GLink
                      to="#"
                      text={t("Homepage")}
                      color="#fff"
                      hoverColor="#fff"
                      fs="15px"
                    ></GLink>
                  </li>
                  <li>
                    <GLink
                      to="#"
                      text={t("Customerlogin")}
                      color="#fff"
                      hoverColor="#fff"
                      fs="15px"
                    ></GLink>
                  </li>
                  <li>
                    <GLink
                      to="#"
                      text={t("Salonlogin")}
                      color="#fff"
                      hoverColor="#fff"
                      fs="15px"
                    ></GLink>
                  </li>
                  <li className="fs14 colorWhite">
                    {t("Session")} {year} {t("Year")}
                  </li>
                </GAlign>
              </ul>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default AdminLogin;
