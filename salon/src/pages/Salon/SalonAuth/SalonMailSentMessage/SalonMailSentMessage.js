import React from "react";
import Img from "../../../../assets/Img/Img";
import "./SaloonMailSentMessage.css";
import GImage from "../../../../components/Layout/GImage/GImage";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import GLink from "../../../../components/Layout/GLink";
import SalonAuthFooter from "../SalonAuthFooter/SalonAuthFooter";

const SalonMailSentMessage = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="salon-sent-msg">
        <Container>
          <div className="text-center">
            <div className="mb20 mobMb10">
              <GImage src={Img.whitelogo} />
            </div>
            <h2 className="fs28 mobFs20 lb colorWhite mb15">{t("Connect")}</h2>
          </div>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5} xxl={5}>
              <section className="bgWhite pl25 pr25 pt25 pb30 radius4 mb60 text-center">
                <div className="mb20">
                  <GImage src={Img.smile}></GImage>
                </div>
                <h3 className="fs20 lm"> {t("Thankyou")}</h3>
                <p className="fs15 colorGrey">{t("Wayto")}</p>
                <GLink
                  to="#"
                  text={t("Backtohomepage")}
                  bg="#ff385c"
                  color="#fff"
                  paddingLeft="15px"
                  paddingRight="15px"
                  paddingTop="5px"
                  paddingBottom="5px"
                  hoverColor="#fff"
                ></GLink>
              </section>
            </Col>
          </Row>
          <SalonAuthFooter />
        </Container>
      </div>
    </>
  );
};

export default SalonMailSentMessage;
