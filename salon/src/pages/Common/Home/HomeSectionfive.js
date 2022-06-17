import React from "react";
import { Link } from "react-router-dom";
import { CardText, CardTitle, Col, Container, Row } from "reactstrap";
import Img from "../../../assets/Img/Img";

import { useTranslation } from "react-i18next";



const HomeSectionfive = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const Data = [
    {
      image: Img.third,
      title: t("Scheduling"),
      subtext: t("Justbook")
    },
    {
      image: Img.fourth,  
      title: t("Scheduling"),
      subtext: t("Justbook")
    },
    {
      image: Img.five,
      title: t("Scheduling"),
      subtext: t("Justbook")
    },
    {
      image: Img.six,
      title: t("Scheduling"),
      subtext: t("Justbook")
    },
  ];
 
  return (
    <div>
      <section className="mt_75 mb_45">
        <Container>
          <section className="border-8  bg_dark_theme pt_45 pb_45 pl_30">
            <Row className="align-items-center pb_45">
              <Col md="5">
                <CardTitle className="lb text-white mb-3" tag="h2">
                  {t("Own")}
                </CardTitle>
                <CardText className="text-white mb-3">
                   {t("Wellhelp")}
                </CardText>
                <div className="mt-4 mobMb20">
                  <Link className="lm anker_pink " to="#">
                    {t("Partnerwithus")}
                  </Link>
                </div>
              </Col>
              <Col md="7" className="text-end">
                <img className="w-100" src={Img.second} alt="img" />
              </Col>
            </Row>

            <Row>
              {Data &&
                Data.map((elem, numm) => {
                  return (
                    <>
                      <Col xs="6" md="3" className="mobMb15"  align="center" key={"yu" + numm.toString()}>
                        <img
                          className="w-84 mb-3"
                          src={elem.image}
                          alt="third"
                        />
                        <CardTitle className="text-white" tag="h5">
                          {elem.title}
                        </CardTitle>
                        <CardText className="text-white">
                          {elem.subtext}
                        </CardText>
                      </Col>
                    </>
                  );
                })}
            </Row>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default HomeSectionfive;
