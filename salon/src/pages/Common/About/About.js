import React from "react";
import { CardText, CardTitle, Col, Container, Row } from "reactstrap";
import Img from "../../../assets/Img/Img";
import GButton from "../../../components/Layout/GButton";
import GImage from "../../../components/Layout/GImage/GImage";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  function AboutHeading(props) {
    return (
      <>
        <CardTitle tag="h3" className="lm">
          {props.title}
        </CardTitle>
        <CardText>{props.text}</CardText>
        <CardText>{props.text1}</CardText>
      </>
    );
  }

  function ThreeBox(props) {
    return (
      <>
        <Col className="text-center" md={4}>
          <div className="width70 m-auto">
            <CardTitle tag="h4" className="lm text_pink m-auto">
              {props.title}
            </CardTitle>
            <CardText className="mt15">{props.text}</CardText>
          </div>
        </Col>
      </>
    );
  }

  function FiveBox(props) {
    return (
      <>
        <div className="mb-3">
          <CardTitle tag="h5" className="lm">
            {props.title}
          </CardTitle>
          <CardText className="">{props.text}</CardText>
        </div>
      </>
    );
  }

  function CardBoxImage(props) {
    return (
      <>
        <div className="mb-3 text-center">
          <div className="mb15">
            <GImage src={props.Img} />
          </div>
          <CardTitle tag="h5" className="lm">
            {props.title}
          </CardTitle>
          <CardText className="width50 m-auto pb20">{props.text}</CardText>
          <GButton>{props.button}</GButton>
        </div>
      </>
    );
  }

  return (
    <div className="mt30">
      <Container className="text-center">
        <div className="about_us_company pt70 pb100 radius">
          <CardTitle className="lb text-white" tag="h1">
            {t("TheStory")}
          </CardTitle>
          <CardText className="text-white pb60 w-50 m-auto">
            {t("TheStorySubText")}
          </CardText>
        </div>
      </Container>

      <Container className="mb60">
        <Row>
          <Col md={10} className="m-auto">
            <GImage className="w-100 mb-3" src={Img.bgtwo} marginTop="-100px" />
            <Row>
              <Col md={6}>
                <CardTitle tag="h5">{t("2021")}</CardTitle>
                <CardText>{t("2021SubText")}</CardText>
                <CardText>{t("2021SubTexttwo")}</CardText>
              </Col>
              <Col md={6}>
                <CardTitle tag="h5">{t("Present")}</CardTitle>
                <CardText>{t("PresentSubText")}</CardText>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <section className="pt60 pb60 bg_grey">
        <Container>
          <Row className="mb-5">
            <Col className="text-center  m-auto" md={8}>
              <AboutHeading title={t("Weonly")} text={t("WeonlySubText")} />
            </Col>
          </Row>

          <Row className="gx-5">
            <ThreeBox title={t("Weonlyone")} text={t("WeonlyoneSubText")} />
            <ThreeBox title={t("WeGo")} text={t("WeGoSubText")} />
            <ThreeBox title={t("WeTake")} text={t("WeTakeSubText")} />
          </Row>
        </Container>
      </section>

      <Container className="pt60 pb60">
        <Row className="gx-5 align-items-center">
          <Col md="6">
            <GImage src={Img.threeimages} />
          </Col>
          <Col md="6">
            <AboutHeading
              title={t("RandomisedWords")}
              text={t("RandomisedWordsSubText")}
              text1={t("RandomisedWordsSubTextone")}
            />
          </Col>
        </Row>

        <Row className="gx-5 pt50 pb50 align-items-center">
          <Col md="6">
            <AboutHeading
              title={t("RandomisedWordsSecond")}
              text={t("RandomisedWordsSubTextSecond")}
              text1={t("RandomisedWordsSubTextSecond")}
            />
          </Col>
          <Col md="6">
            <GImage src={Img.threeimages} />
          </Col>
        </Row>

        <Row className="gx-5 pt50 pb50 align-items-center">
          <Col className="text-center m-auto pb40" md="8">
            <AboutHeading title={t("Cantfind")} text={t("CantfindSubText")} />
          </Col>
          <Col md="6">
            <FiveBox
              title={t("DigitalCalendar")}
              text={t("DigitalCalendarSub")}
            />
            <FiveBox
              title={t("MarketingandPromotions")}
              text={t("MarketingandPromotionsSub")}
            />
            <FiveBox
              title={t("ReportingandAnalytics")}
              text={t("ReportingandAnalyticsSub")}
            />
            <FiveBox
              title={t("StockManagement")}
              text={t("StockManagementSub")}
            />
            <FiveBox
             title={t("CashPayments")}
             text={t("CashPaymentsSub")}
            />
          </Col>
          <Col md="6">
            <GImage src={Img.fourimages} />
          </Col>
        </Row>

        <Row className="gx-5 pt50 pb50 align-items-center">
          <Col className="text-center pb40" md="12">
            <AboutHeading title={t("WhatGuidesUs")} />
          </Col>
          <Col md="6" className="border-end">
            <CardBoxImage
              Img={Img.boximg}
              title={t("NeedHelp")}
              text={t("NeedHelpSub")}
              button={t("NeedHelpButton")}
            />
          </Col>

          <Col md="6">
            <CardBoxImage
              Img={Img.boximg}
              title={t("TermsofUse")}
              text={t("TermsofUseSub")}
              button={t("TermsofUseButton")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
