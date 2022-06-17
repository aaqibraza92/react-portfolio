import React from "react";
import { Link } from "react-router-dom";
import { CardText, CardTitle, Col, Container, Row } from "reactstrap";
import Img from "../../../assets/Img/Img";
import { useTranslation } from "react-i18next";
import GImage from "../../../components/Layout/GImage/GImage";

const HomeSectionsix = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div>
      <section className="pt_45 pb_45">
        <Container>
          <Row>
            <Col md="6" className="mobMb15">
              <div className="card-body bg_pink bg_flower min_407">
                <div className="text-end mb-3">
                  <GImage className="w-1001" src={Img.card} />
                </div>
                <CardTitle className="lm text-white" tag="h4">
                    {t("spoil")}
                </CardTitle>
                <CardText className="w-50 tabWidth100 text-white">
                   {t("The Bakim Randevu")}
                </CardText>

                <div className="mt-4 mb-1">
                  <Link className="lm anker_black " to="#">
                    {t("Buy yours now")}
                  </Link>
                </div>
              </div>
            </Col>

            <Col md="6">
              <div className="card-body bg_light bg_l_top min_407 bg_right position-relative">
                {/* <div className="text-end mb-3">
                  <img src={Img.card} />
                </div> */}
                <div className="bottom_top">
                  <CardTitle className="lm" tag="h4">
                    {t("Grow")}
                  </CardTitle>
                  <CardText className="w-100">
                      {t("to")}
                  </CardText>

                  <div className="mt-4 mb-1">
                    <Link className="lm anker_pink " to="#">
                    {t("Buy yours now")}
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomeSectionsix;
