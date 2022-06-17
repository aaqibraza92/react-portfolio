import React from "react";
import { CardTitle, Col, Container, Row } from "reactstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import Img from "../../../assets/Img/Img";
import { useTranslation } from 'react-i18next';
import GImage from "../../../components/Layout/GImage/GImage";


const BookAppointment = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div>
      <section className="bg_image_bookappointment pt_96 pb_76 mobile_bgimage_none">
        <Container>
          <Row>
            <Col md="7" xl="5" lg="6">
              <GImage className="pb_35" src={Img.logo.default} alt="logo" />
              <CardTitle className="lm line_h_42 pb_35" tag="h2">
                {t("book")}
              </CardTitle>
              <div className="book_a_anker pb_25">
                <Link to="#">
                  <GImage src={Img.google} />
                </Link>
                <Link to="#">
                  <GImage src={Img.app} />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BookAppointment;
