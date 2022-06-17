import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import Svg from "../../Assets/Svg/Svg";
import GImage from "../../Components/GComponents/GImage/GImage";
import "./SingleBlogPage.css";
import Slide from "react-reveal/Slide";
// import { Helmet } from "react-helmet";

const SingleBlogPage = () => {
  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - Pixbrand</title>
        <meta name="Blog" content="Pixbrand Blog"></meta>
      </Helmet> */}
      <section className="pt80 pb100 tabPt80 tabPb80 mobPt60 mobPb60">
        <Container>
          <div className="text-center">
            <Slide bottom>
              <h4 className="fs16 colorLightBlack">PUBLISHED JULY 05, 2021</h4>
              <h1 className="fs65 tabFs60 tabLgFs60 mobFs45 mb20 mobMb10 fw500 colorWhite">
                Its time to check on your website’s skills.
              </h1>
              <p className="fs22 mobFs18 tabFs18 tabLgFs18 mb40 mobMb20 colorWhite">
                Why Branding matters to your Business
              </p>
              <div className="d-flex justify-content-center mb100 mobMb60 overscrollx">
                <button className="btn-blog mr10">Branding</button>
                <button className="btn-blog mr10">Communication</button>
                <button className="btn-blog mr10">Experience</button>
                <button className="btn-blog">Identity</button>
              </div>
              <div className="mb60 mobMb30">
                <GImage
                  radius="24px"
                  radiusMob="15px"
                  src={Img.singleblogpage}
                />
              </div>
            </Slide>
          </div>

          <section className="mlr80 mobMl0 mobMr0 mb100 mobMb60 position-relative">
            <Slide bottom>
              <div className="social-icons ">
                <div className="mb15 mobMr10">
                  <a href="https://www.facebook.com/pixbrandme">{Svg.fb}</a>
                </div>
                <div className="mb15 mobMr10">
                  <a href="https://www.linkedin.com/company/pixbrandme/">
                    {Svg.linkedin}
                  </a>
                </div>
                <div className="mb15 mobMr10">
                  <a href="#">{Svg.twitter}</a>
                </div>
                <div className="mb15 mobMr10">
                  <a href="#">{Svg.m}</a>
                </div>
              </div>
              <p className="fs22 mobFs18 tabFs18 tabLgFs18 mobFs16 colorWhite ">
                When you are on the hunt for best designers for your website you
                definitely bump yourself with lots of questions. And yes after
                core research you will shortlist top agency that can help you
                out in the process. You meet, interact and designers explain to
                you about all the design technology or methodology, you may get
                confused with complicated proposals.
              </p>
              <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
              <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </Slide>
          </section>
          <Hunt />
          <Skills />
          <AgainHunt />
          <HuntDesc />
          <SmartContent />
        </Container>
      </section>
    </>
  );
};

export default SingleBlogPage;

// Hunt Second Part
const Hunt = () => {
  return (
    <>
      <section className="mlr80 mobMl0 mobMr0 mb100 mobMb60">
        <Row className="align-items-center">
          <Col md={6}>
            <Slide bottom>
              <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 colorWhite width80 mobWidth100 tabWidth100 tabLgWidth100 ">
                When you are on the hunt for best.
              </h2>
              <p className="fs18 colorLightBlack width85 mobWidth100 tabWidth100 tabLgWidth100 mb0 mobMb10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen.
              </p>
            </Slide>
          </Col>
          <Col md={6}>
            <div>
              <Slide bottom>
                <GImage radius="24px" radiusMob="15px" src={Img.cup} />
              </Slide>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

// Skills Third Part
const Skills = () => {
  return (
    <>
      <section className="mlr80 mobMl0 mobMr0 mb100 mobMb60">
        <Slide bottom>
          <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10">
            Its time to check on your website’s skills.
          </h2>
          <ul className="fs17 tabFs15 tabLgFs15 mobFs15">
            <li className="colorLightBlack mb20 mobMb10">
              it’s necessary for the performance of a contract to which you are
              a party or to take steps at your request before entering into such
              a contract (for example, when we provide a service you request
              from us);
            </li>
            <li className="colorLightBlack mb20 mobMb10">
              it satisfies a legitimate interest (which is not overridden by
              your data protection interests), such as for research and
              development, to market and promote our services, and to protect
              our legal rights and interests;
            </li>
            <li className="colorLightBlack mb20 mobMb10">
              you give us consent to do so for a specific purpose (for example,
              you might consent to us sending you our newsletter); or
            </li>
            <li className="colorLightBlack mb20 mobMb10">
              it’s necessary for the performance of a contract to which you are
              a party or to take steps at your request before entering into such
              a contract (for example, when we provide a service you request
              from us);
            </li>
            <li className="colorLightBlack mb0">
              we need to process your data to comply with a legal obligation.
            </li>
          </ul>
        </Slide>
      </section>
    </>
  );
};

// Again Hunt Third Part
const AgainHunt = () => {
  return (
    <>
      <section className="mlr80 mobMl0 mobMr0 mb100 mobMb60">
        <Row className="align-items-center flexreverse">
          <Col md={6}>
            <div>
              <Slide bottom>
                <GImage radius="24px" radiusMob="15px" src={Img.cup} />
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <section className="ml40 mobMl0 mobMb10">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 colorWhite">
                  When you are on the hunt for best.
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen.
                </p>
              </Slide>
            </section>
          </Col>
        </Row>
      </section>
    </>
  );
};

// Hunting Description
const HuntDesc = () => {
  return (
    <>
      <section className="mlr80 mobMl0 mobMr0">
        <div className="mb60 mobMb30">
          <Slide bottom>
            <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 colorWhite">
              When you are on the hunt for best.
            </h2>
            <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Slide>
        </div>
        <div className="mb100 mobMb60">
          <Slide bottom>
            <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 colorWhite">
              Your website you definitely bump.
            </h2>
            <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Slide>
        </div>
      </section>
    </>
  );
};

// Smart Create Content
const SmartContent = () => {
  return (
    <>
      <section className="mlr80 mobMl0 mobMr0 ">
        <div className="text-center">
          <Slide bottom>
            <div className="mb20 mobMb10">
              <Link to="#" className="fs16 colorRed fw600">
                Next Blog
              </Link>
            </div>
            <h2 className="fs65 tabFs60 tabLgFs60 mobFs45 mb40 colorWhite width60 mobWidth100 tabWidth100  mx-auto">
              Smart way to create mobile-friendly content
            </h2>
            <button className="red-btn">Read Blog</button>
          </Slide>
        </div>
      </section>
    </>
  );
};
